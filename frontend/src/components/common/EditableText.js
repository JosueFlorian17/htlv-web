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
  const { content, isEditMode, updateText, getText } = useContent();
  const [isEditingModal, setIsEditingModal] = useState(false);
  
  const currentVal = getText(id, defaultText || (typeof children === 'string' ? children : ''));
  const meta = initialContentData[id] || {};
  const [tempValue, setTempValue] = useState(currentVal);

  useEffect(() => {
    setTempValue(currentVal);
  }, [currentVal]);

  const Tag = as;

  if (!isEditMode) {
    return <Tag className={className}>{currentVal}</Tag>;
  }

  const isModified = currentVal !== meta.defaultValue;

  const handleSave = () => {
    updateText(id, tempValue, 'Modificado');
    setIsEditingModal(false);
  };

  const handleRevert = () => {
    const orig = meta.defaultValue || '';
    setTempValue(orig);
    updateText(id, orig, 'Pendiente');
    setIsEditingModal(false);
  };

  return (
    <>
      <Tag
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setTempValue(currentVal);
          setIsEditingModal(true);
        }}
        className={`${className} relative group cursor-pointer transition-all duration-200 outline-none rounded-md px-1 -mx-1 ${
          isModified
            ? 'bg-amber-100/60 ring-1 ring-amber-400 hover:bg-amber-200/60'
            : 'hover:bg-rose-50/80 ring-1 ring-dashed ring-[#5b0617]/40'
        }`}
        title={`Clic para editar: ${meta.label || id}`}
      >
        {currentVal}
        <span className="inline-flex items-center ml-1 text-[11px] text-[#5b0617] opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 px-1.5 py-0.5 rounded shadow-xs font-mono font-normal">
          ✏️ {id}
        </span>
      </Tag>

      {/* Modal / Panel de Edición Rápida al hacer clic */}
      {isEditingModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsEditingModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl border border-[#dcc0c0] max-w-lg w-full p-6 space-y-4 animate-scaleUp text-[#191c1e]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 border-b border-[#dcc0c0] pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#ffdada] text-[#5b0617] px-2.5 py-0.5 rounded-full">
                  {meta.section || 'TEXTO EDITABLE'}
                </span>
                <h3 className="font-bold text-[16px] text-[#191c1e] mt-1">
                  {meta.label || id}
                </h3>
                <span className="text-[11px] font-mono text-slate-500">ID: {id}</span>
              </div>
              <button
                onClick={() => setIsEditingModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Pautas y Límites */}
            <div className="bg-[#f8f9fb] p-3 rounded-xl border border-[#dcc0c0]/60 text-[12px] space-y-1">
              <div className="text-[#5b0617] font-bold flex items-center gap-1">
                <span>💡 Pauta de Contenido:</span>
              </div>
              <p className="text-[#564242] leading-relaxed">
                {meta.guidelines || 'Redacta con precisión técnica y rigor institucional.'}
              </p>
              <div className="flex justify-between items-center text-[11px] pt-1 text-[#897172]">
                <span>Sugerencia: <strong className="text-[#191c1e]">{meta.maxLength || 'Sin límite'}</strong></span>
                <span>Caracteres actuales: <strong className={tempValue.length > 300 ? 'text-amber-600' : 'text-[#5b0617]'}>{tempValue.length}</strong></span>
              </div>
            </div>

            {/* Input o Textarea */}
            <div>
              <label className="block text-[11.5px] font-bold text-[#564242] mb-1">
                Texto Oficial / Definitivo:
              </label>
              {multiline || (meta.maxLength && meta.maxLength.includes('caracteres') && parseInt(meta.maxLength.replace(/\D/g, '') || '0') > 80) ? (
                <textarea
                  rows={4}
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  className="w-full p-3 text-[13px] border border-[#dcc0c0] rounded-xl focus:ring-2 focus:ring-[#5b0617] focus:border-transparent outline-none bg-amber-50/30 text-[#191c1e]"
                  placeholder="Escribe el texto oficial aquí..."
                  autoFocus
                />
              ) : (
                <input
                  type="text"
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  className="w-full p-3 text-[13px] border border-[#dcc0c0] rounded-xl focus:ring-2 focus:ring-[#5b0617] focus:border-transparent outline-none bg-amber-50/30 text-[#191c1e]"
                  placeholder="Escribe el texto oficial aquí..."
                  autoFocus
                />
              )}
            </div>

            {/* Valor original de referencia */}
            <div className="text-[11px] text-[#897172] bg-slate-50 p-2.5 rounded-lg border border-slate-200">
              <strong className="block text-slate-700 mb-0.5">Texto original de maqueta (referencia):</strong>
              <p className="italic">{meta.defaultValue || '—'}</p>
            </div>

            {/* Botones de acción */}
            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={handleRevert}
                className="text-[12px] text-[#897172] hover:text-[#5b0617] hover:underline cursor-pointer"
              >
                Revertir a original
              </button>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditingModal(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[12px] font-bold rounded-xl transition-all cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-5 py-2 bg-[#5b0617] hover:opacity-90 text-white text-[12px] font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>✓ Guardar en Vivo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
