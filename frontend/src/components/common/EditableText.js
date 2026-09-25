"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useContent } from '../../context/ContentContext';
import { initialContentData } from '../../data/initialContent';

export default function EditableText({
  id,
  defaultText,
  className = '',
  as = 'span',
  children
}) {
  const { isEditMode, updateText, getText } = useContent();
  const [isFocused, setIsFocused] = useState(false);
  const elementRef = useRef(null);
  const isTypingRef = useRef(false);
  
  const fallback = defaultText || (typeof children === 'string' ? children : '');
  const currentVal = getText(id, fallback);
  const meta = initialContentData[id] || {
    id,
    label: id,
    defaultValue: fallback,
    guidelines: 'Escribe el contenido oficial.',
    maxLength: 'Según diseño'
  };

  const isModified = currentVal && currentVal !== (meta.defaultValue || fallback);

  // Sincronizar el DOM únicamente cuando el usuario NO está escribiendo en el elemento
  useEffect(() => {
    if (elementRef.current && !isTypingRef.current) {
      if (elementRef.current.innerText !== (currentVal || '')) {
        elementRef.current.innerText = currentVal || '';
      }
    }
  }, [currentVal]);

  const handleInput = (e) => {
    isTypingRef.current = true;
    const text = e.currentTarget.innerText;
    updateText(id, text, 'Modificado');
  };

  const handleBlur = (e) => {
    isTypingRef.current = false;
    setIsFocused(false);
    const text = e.currentTarget.innerText;
    updateText(id, text, 'Modificado');
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleRevert = (e) => {
    e.preventDefault();
    e.stopPropagation();
    isTypingRef.current = false;
    const orig = meta.defaultValue || fallback || '';
    if (elementRef.current) {
      elementRef.current.innerText = orig;
    }
    updateText(id, orig, 'Pendiente');
  };

  const Tag = as;

  // Si no está en modo edición, renderizar texto plano normal
  if (!isEditMode) {
    return <Tag className={className}>{currentVal}</Tag>;
  }

  return (
    <span className="relative inline-block group/edit max-w-full">
      {/* 
        IMPORTANTE: Dejamos el Tag sin hijos directos en JSX cuando es contentEditable.
        El contenido se maneja a través de dangerouslySetInnerHTML inicial y del ref,
        evitando que la reconciliación virtual de React resetee la posición del cursor (caret)
        al inicio de la línea en cada pulsación de tecla.
      */}
      <Tag
        ref={elementRef}
        contentEditable={true}
        suppressContentEditableWarning={true}
        dangerouslySetInnerHTML={{ __html: currentVal || '' }}
        onInput={handleInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${className} outline-none transition-all duration-200 cursor-text rounded px-1 -mx-1 ${
          isFocused
            ? 'ring-2 ring-[#5b0617] bg-amber-50/70 shadow-sm'
            : isModified
            ? 'ring-1 ring-amber-400 bg-amber-50/40 hover:bg-amber-100/50'
            : 'hover:ring-1 hover:ring-dashed hover:ring-[#5b0617]/50 hover:bg-rose-50/40'
        }`}
        title="Haz clic para escribir directamente en este texto"
      />

      {/* Burbuja flotante informativa cuando el elemento tiene el foco */}
      {isFocused && (
        <span
          contentEditable={false}
          className="absolute -top-10 left-0 z-50 bg-[#1d2b3a] text-white text-[11px] px-3 py-1.5 rounded-lg shadow-xl border border-slate-700 flex items-center gap-2 whitespace-nowrap pointer-events-auto animate-scaleUp font-sans font-normal"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-amber-300">{meta.label || id}:</span>
          <span className="text-slate-300 max-w-xs truncate hidden sm:inline">{meta.guidelines}</span>
          <span className="text-slate-400 text-[10px]">({currentVal?.length || 0} car.)</span>
          {isModified && (
            <button
              onMouseDown={handleRevert}
              className="text-rose-400 hover:text-rose-200 underline text-[10px] ml-1 cursor-pointer"
            >
              Revertir
            </button>
          )}
        </span>
      )}
    </span>
  );
}
