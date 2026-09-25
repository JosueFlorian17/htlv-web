"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContent } from '../../context/ContentContext';

export default function EditorFloatingBar() {
  const { isEditMode, setIsEditMode, saveStatus, lastSavedTime, downloadExcel, resetAllContent, content } = useContent();
  const [isMinimized, setIsMinimized] = useState(false);
  const pathname = usePathname();

  // Calculate modified count
  const modifiedCount = Object.values(content).filter(
    (item) => item.currentValue && item.currentValue !== item.defaultValue
  ).length;

  return (
    <aside aria-label="Barra de herramientas del editor visual" className="fixed bottom-4 right-4 z-50 flex flex-col items-end pointer-events-auto">
      {/* Botón flotante colapsado */}
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-[#5b0617] hover:bg-[#72081d] text-white p-3 rounded-full shadow-2xl border-2 border-white flex items-center gap-2 text-[12px] font-bold cursor-pointer transition-all hover:scale-105 animate-pulse"
          title="Abrir Barra de Edición en Tiempo Real"
        >
          <span className="material-symbols-outlined text-[18px]">edit_note</span>
          <span>Editor en Vivo ({modifiedCount})</span>
        </button>
      ) : (
        <div className="bg-[#1d2b3a] text-white rounded-2xl shadow-2xl border border-slate-700 p-3.5 max-w-md w-full animate-scaleUp space-y-3">
          {/* Cabecera de la barra */}
          <div className="flex items-center justify-between gap-3 border-b border-slate-700/80 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <strong className="text-[13px] tracking-wide flex items-center gap-1.5 font-bold">
                <span className="material-symbols-outlined text-[16px] text-amber-300">edit</span>
                Modo Editor en Vivo
              </strong>
            </div>
            
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(true)}
                className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-all text-[11px] cursor-pointer"
                title="Minimizar barra"
              >
                —
              </button>
            </div>
          </div>

          {/* Estado de guardado y switch */}
          <div className="flex items-center justify-between gap-2 text-[12px]">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={isEditMode}
                onChange={(e) => setIsEditMode(e.target.checked)}
                className="w-4 h-4 rounded text-[#5b0617] focus:ring-[#5b0617] cursor-pointer"
              />
              <span className={isEditMode ? 'text-amber-300 font-bold' : 'text-slate-300'}>
                {isEditMode ? 'Edición Activada (Haz clic en textos)' : 'Activar Edición en Página'}
              </span>
            </label>

            {/* Status badge */}
            <div className="text-[11px] font-mono">
              {saveStatus === 'saving' && (
                <span className="text-amber-300 animate-pulse flex items-center gap-1">
                  ⏳ Guardando...
                </span>
              )}
              {saveStatus === 'saved' && (
                <span className="text-emerald-400 flex items-center gap-1">
                  ✓ Guardado {lastSavedTime ? `(${lastSavedTime})` : ''}
                </span>
              )}
              {saveStatus === 'idle' && (
                <span className="text-slate-400">
                  {modifiedCount > 0 ? `${modifiedCount} cambio(s)` : 'Sincronizado'}
                </span>
              )}
            </div>
          </div>

          {/* Acciones principales */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <Link
              href="/editor"
              className={`px-3 py-2 rounded-xl text-[11px] font-bold text-center flex items-center justify-center gap-1.5 transition-all ${
                pathname === '/editor'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">table_chart</span>
              Panel Excel / CMS
            </Link>

            <button
              onClick={downloadExcel}
              className="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-[11px] font-bold text-center flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
              title="Descargar archivo Excel con los textos actualizados"
            >
              <span className="material-symbols-outlined text-[15px]">download</span>
              Bajar Excel (.xlsx)
            </button>
          </div>

          {/* Footer pequeño con reset */}
          <div className="flex items-center justify-between text-[10.5px] text-slate-400 pt-1 border-t border-slate-800">
            <span>💾 Se guarda en tiempo real en JSON y Excel</span>
            <button
              onClick={resetAllContent}
              className="text-rose-400 hover:text-rose-300 hover:underline cursor-pointer"
              title="Restablecer todo a los placeholders iniciales"
            >
              Restablecer
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
