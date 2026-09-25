"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useContent } from '../../context/ContentContext';

export default function UniversalLiveEditor() {
  const { isEditMode, content, updateText, resetAllContent } = useContent();
  const [activeElement, setActiveElement] = useState(null);
  const [activeRect, setActiveRect] = useState(null);
  const [activeComputedStyle, setActiveComputedStyle] = useState(null);
  const [textValue, setTextValue] = useState('');
  const [originalText, setOriginalText] = useState('');
  const [elementKey, setElementKey] = useState('');
  const editorInputRef = useRef(null);

  // Helper to generate a deterministic unique key for any DOM element
  const getElementKey = (el) => {
    if (el.dataset && el.dataset.contentId) {
      return el.dataset.contentId;
    }
    // Generate hierarchical path with text snippet
    const tag = el.tagName.toLowerCase();
    const id = el.id ? `#${el.id}` : '';
    const textSnippet = (el.innerText || el.textContent || '').trim().substring(0, 30).replace(/[^a-zA-Z0-9]/g, '_');
    
    // Find parent section or route
    let parent = el.parentElement;
    let path = '';
    while (parent && parent !== document.body) {
      if (parent.tagName === 'SECTION' || parent.id || parent.tagName === 'HEADER' || parent.tagName === 'FOOTER' || parent.tagName === 'MAIN') {
        path = `${parent.tagName.toLowerCase()}${parent.id ? `_${parent.id}` : ''}_`;
        break;
      }
      parent = parent.parentElement;
    }
    return `DOM_${path}${tag}${id}_${textSnippet}`.toUpperCase();
  };

  // 1. Mark and hydrate DOM text with saved content
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const applySavedContent = () => {
      // Find all text elements across the page
      const elements = document.querySelectorAll(
        'h1, h2, h3, h4, h5, h6, p, span, a, button, li, strong, em, label'
      );

      elements.forEach((el) => {
        // Skip editor floating bar and its descendants
        if (el.closest('aside[aria-label="Barra de herramientas del editor visual"]') || el.classList.contains('no-universal-edit')) {
          return;
        }

        // Only mark elements that have direct text or minimal inline children
        const hasDirectText = Array.from(el.childNodes).some(
          (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0
        );

        if (hasDirectText && el.innerText && el.innerText.trim().length > 0) {
          el.setAttribute('data-live-editable', isEditMode ? 'true' : 'false');
          
          const key = getElementKey(el);
          if (content[key] && content[key].currentValue !== undefined) {
            const savedVal = content[key].currentValue;
            if (el.innerText !== savedVal) {
              el.innerText = savedVal;
            }
          }
        }
      });
    };

    applySavedContent();

    // Re-apply when DOM changes (e.g. tab switches, router navigations)
    const observer = new MutationObserver(() => {
      applySavedContent();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: false
    });

    return () => observer.disconnect();
  }, [content, isEditMode]);

  // 2. Global Click Capture Handler when isEditMode is active
  useEffect(() => {
    if (!isEditMode) {
      setActiveElement(null);
      return;
    }

    const handleClick = (e) => {
      const target = e.target;

      // Ignore editor controls, modals, and buttons inside editor bar
      if (
        target.closest('aside[aria-label="Barra de herramientas del editor visual"]') ||
        target.closest('#universal-editor-overlay') ||
        target.classList.contains('no-universal-edit')
      ) {
        return;
      }

      // Check if target is editable text
      let el = target.closest('[data-live-editable="true"]') || target;
      
      const hasText = el.innerText && el.innerText.trim().length > 0;
      if (!hasText) return;

      e.preventDefault();
      e.stopPropagation();

      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      const key = getElementKey(el);
      const currentVal = (content[key] && content[key].currentValue) ? content[key].currentValue : el.innerText.trim();

      setActiveElement(el);
      setActiveRect({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: Math.max(rect.width, 160),
        height: Math.max(rect.height, 36)
      });
      setActiveComputedStyle({
        fontSize: style.fontSize,
        fontFamily: style.fontFamily,
        fontWeight: style.fontWeight,
        lineHeight: style.lineHeight,
        color: style.color,
        textAlign: style.textAlign
      });
      setTextValue(currentVal);
      setOriginalText(currentVal);
      setElementKey(key);
    };

    window.addEventListener('click', handleClick, true);
    return () => window.removeEventListener('click', handleClick, true);
  }, [isEditMode, content]);

  // Focus input on active
  useEffect(() => {
    if (activeElement && editorInputRef.current) {
      editorInputRef.current.focus();
      editorInputRef.current.select();
    }
  }, [activeElement]);

  const handleSaveAndClose = () => {
    if (activeElement && elementKey) {
      const trimmed = textValue.trim();
      activeElement.innerText = trimmed;
      updateText(elementKey, trimmed, 'Modificado');
    }
    setActiveElement(null);
  };

  const handleRevert = () => {
    if (activeElement && elementKey) {
      activeElement.innerText = originalText;
      updateText(elementKey, originalText, 'Pendiente');
    }
    setActiveElement(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setActiveElement(null);
    }
    // Enter saves on short text
    if (e.key === 'Enter' && !e.shiftKey && textValue.length < 80) {
      e.preventDefault();
      handleSaveAndClose();
    }
  };

  if (!isEditMode) return null;

  return (
    <>
      {/* Global Injected CSS for visual hover outlines */}
      <style dangerouslySetInnerHTML={{
        __html: `
          [data-live-editable="true"] {
            transition: outline 0.15s ease, background-color 0.15s ease !important;
          }
          [data-live-editable="true"]:hover {
            outline: 2px dashed #5b0617 !important;
            outline-offset: 3px !important;
            background-color: rgba(255, 218, 218, 0.35) !important;
            cursor: pointer !important;
          }
        `
      }} />

      {/* Live Overlay Editor Modal / In-place Box */}
      {activeElement && activeRect && (
        <div id="universal-editor-overlay" className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-2xs flex items-center justify-center p-4">
          <div
            className="bg-white rounded-2xl shadow-2xl border-2 border-[#5b0617] max-w-xl w-full p-5 space-y-3 animate-scaleUp text-[#191c1e]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Editor */}
            <div className="flex items-center justify-between border-b border-[#dcc0c0] pb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <strong className="text-[13px] text-[#5b0617] font-bold">
                  Editar Texto en Vivo
                </strong>
                <span className="text-[10px] bg-slate-100 text-slate-600 font-mono px-2 py-0.5 rounded border border-slate-200 truncate max-w-[200px]">
                  {elementKey}
                </span>
              </div>
              <button
                onClick={() => setActiveElement(null)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-[13px] cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Área de Texto con auto-resizing */}
            <div>
              <label className="block text-[11px] font-bold text-[#564242] mb-1">
                Texto Oficial / Definitivo (Escribe aquí directamente):
              </label>
              <textarea
                ref={editorInputRef}
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={Math.max(3, Math.min(8, Math.ceil(textValue.length / 50)))}
                className="w-full p-3 text-[13.5px] border-2 border-[#5b0617] rounded-xl focus:ring-4 focus:ring-rose-200 outline-none bg-amber-50/40 text-[#191c1e] font-sans leading-relaxed shadow-inner resize-y"
                placeholder="Escribe el texto aquí..."
              />
              <div className="flex justify-between items-center text-[10.5px] text-[#897172] mt-1">
                <span>Presiona <strong>Enter</strong> o <strong>Guardar</strong> para aplicar en la web</span>
                <span>Caracteres: <strong className="text-[#5b0617]">{textValue.length}</strong></span>
              </div>
            </div>

            {/* Texto original de referencia */}
            <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-[11.5px] text-slate-600">
              <span className="font-bold block text-slate-700 mb-0.5">Texto actual de referencia:</span>
              <p className="italic text-slate-500">{originalText}</p>
            </div>

            {/* Botones de Acción */}
            <div className="flex items-center justify-between pt-1">
              <button
                onClick={handleRevert}
                className="text-[11.5px] text-rose-600 hover:text-rose-800 hover:underline cursor-pointer"
              >
                Restablecer original
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveElement(null)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[12px] rounded-xl cursor-pointer transition-all"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveAndClose}
                  className="px-5 py-2 bg-[#5b0617] hover:bg-[#72081d] text-white font-bold text-[12px] rounded-xl shadow-md cursor-pointer transition-all flex items-center gap-1.5"
                >
                  <span>✓ Aplicar en la Web</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
