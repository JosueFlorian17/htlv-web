"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useContent } from '../../context/ContentContext';
import { initialContentData } from '../../data/initialContent';

export default function EditableText({
  id,
  defaultText,
  className = '',
  as = 'span',
  multiline = false,
  children
}) {
  const { isEditMode, updateText, getText } = useContent();
  const [isEditing, setIsEditing] = useState(false);
  const fallback = defaultText || (typeof children === 'string' ? children : '');
  const currentVal = getText(id, fallback);
  const [localVal, setLocalVal] = useState(currentVal);
  const inputRef = useRef(null);

  const meta = initialContentData[id] || {
    id,
    label: id,
    defaultValue: fallback,
    guidelines: 'Escribe el contenido oficial.',
    maxLength: 'Según diseño'
  };

  const isModified = currentVal && currentVal !== (meta.defaultValue || fallback);

  useEffect(() => {
    setLocalVal(currentVal);
  }, [currentVal]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      // Auto-adjust height for textareas
      if (inputRef.current.tagName === 'TEXTAREA') {
        inputRef.current.style.height = 'auto';
        inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
      }
    }
  }, [isEditing]);

  const handleChange = (e) => {
    const newVal = e.target.value;
    setLocalVal(newVal);
    updateText(id, newVal, 'Modificado');
    if (e.target.tagName === 'TEXTAREA') {
      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    updateText(id, localVal, 'Modificado');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsEditing(false);
    }
    // For single-line inputs, Enter saves
    if (e.key === 'Enter' && !multiline && !meta.maxLength?.includes('palabras') && (meta.defaultValue?.length || 0) < 60) {
      setIsEditing(false);
    }
  };

  const handleRevert = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const orig = meta.defaultValue || fallback || '';
    setLocalVal(orig);
    updateText(id, orig, 'Pendiente');
    setIsEditing(false);
  };

  const Tag = as;

  // Si no está en modo edición, renderizar texto plano normal sin costo
  if (!isEditMode) {
    return <Tag className={className}>{currentVal}</Tag>;
  }

  const isLong = multiline || (meta.defaultValue && meta.defaultValue.length > 70) || meta.maxLength?.includes('palabras');

  return (
    <span className="relative inline-block max-w-full group/editor align-middle">
      {isEditing ? (
        <span className="relative inline-block w-full">
          {isLong ? (
            <textarea
              ref={inputRef}
              value={localVal}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              rows={Math.max(2, Math.min(8, Math.ceil((localVal?.length || 1) / 45)))}
              className={`${className} w-full bg-amber-50/90 text-[#191c1e] ring-2 ring-[#5b0617] rounded-lg p-1.5 shadow-lg resize-none outline-none font-inherit leading-inherit block transition-all`}
              style={{ minWidth: '180px' }}
            />
          ) : (
            <input
              ref={inputRef}
              type="text"
              value={localVal}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              className={`${className} bg-amber-50/90 text-[#191c1e] ring-2 ring-[#5b0617] rounded-lg px-2 py-0.5 shadow-lg outline-none font-inherit leading-inherit inline-block transition-all`}
              style={{ minWidth: '120px', width: `${Math.max(12, (localVal?.length || 1) + 2)}ch` }}
            />
          )}

          {/* Floating Helper Toolbar above the active editor */}
          <span className="absolute -top-9 left-0 z-50 bg-[#1d2b3a] text-white text-[11px] px-2.5 py-1 rounded-md shadow-xl border border-slate-700 flex items-center gap-2 whitespace-nowrap font-sans font-normal pointer-events-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-bold text-amber-300">{meta.label || id}</span>
            <span className="text-slate-400 text-[10px]">({localVal?.length || 0} car.)</span>
            <button
              onMouseDown={handleRevert}
              className="text-rose-400 hover:text-rose-200 underline text-[10px] ml-1 cursor-pointer"
            >
              Revertir
            </button>
            <span className="text-[9.5px] text-slate-400 border-l border-slate-700 pl-1.5">
              Esc / Clic fuera para cerrar
            </span>
          </span>
        </span>
      ) : (
        <Tag
          onClick={() => setIsEditing(true)}
          className={`${className} cursor-text transition-all duration-150 rounded px-1 -mx-1 border border-transparent ${
            isModified
              ? 'bg-amber-100/50 border-amber-400 hover:bg-amber-200/60'
              : 'hover:border-dashed hover:border-[#5b0617]/60 hover:bg-rose-50/40'
          }`}
          title="Haz clic para editar este texto directamente"
        >
          {currentVal || <span className="italic text-slate-400">[Texto vacío - Clic para escribir]</span>}
        </Tag>
      )}
    </span>
  );
}
