"use client";

import { useFont } from '../../context/FontContext';
import { useState } from 'react';

export default function FontSwitcherBar() {
  const { fontIndex, currentFont, fonts, changeFont, nextFont, prevFont } = useFont();
  const [minimized, setMinimized] = useState(false);

  return (
    <aside 
      aria-label="Selector interactivo de tipografías"
      className="fixed bottom-4 right-4 z-50 select-none transition-all duration-300"
    >
      {minimized ? (
        <button
          onClick={() => setMinimized(false)}
          className="bg-slate-900/95 text-white border border-slate-700 hover:border-[#E5A400] px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-xs font-bold transition-all cursor-pointer hover:scale-105"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5A400] animate-ping"></span>
          <span>Tipografía: <strong>{currentFont.name.split(' ')[0]}</strong></span>
          <span className="text-slate-400">▲</span>
        </button>
      ) : (
        <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4 shadow-2xl w-[320px] sm:w-[360px] text-left text-white ring-1 ring-white/10">
          
          {/* Header del widget */}
          <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5A400] animate-pulse"></span>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#E5A400]">
                Fuente Global ({fontIndex + 1}/{fonts.length})
              </span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setMinimized(true)}
                title="Minimizar panel"
                className="w-6 h-6 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center text-xs transition-colors cursor-pointer"
              >
                ▼
              </button>
            </div>
          </div>

          {/* Nombre y descripción de la fuente activa */}
          <div className="my-3">
            <div className="text-sm sm:text-base font-extrabold text-white tracking-tight flex items-center justify-between">
              <span>{currentFont.name}</span>
            </div>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              {currentFont.description}
            </p>
          </div>

          {/* Botones de navegación Anterior / Siguiente */}
          <div className="grid grid-cols-2 gap-2 my-2.5">
            <button
              onClick={prevFont}
              className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 border border-slate-700 transition-colors cursor-pointer"
            >
              <span>◀</span> Anterior
            </button>
            <button
              onClick={nextFont}
              className="py-2 px-3 rounded-lg bg-[#E5A400] hover:bg-[#CCA300] text-[#002538] font-black text-xs flex items-center justify-center gap-1.5 transition-colors shadow cursor-pointer"
            >
              Siguiente <span>▶</span>
            </button>
          </div>

          {/* Acceso rápido del 1 al 10 */}
          <div className="pt-2 border-t border-slate-800">
            <div className="text-[10px] uppercase font-bold text-slate-400 mb-1.5 tracking-wider">
              Acceso rápido:
            </div>
            <div className="grid grid-cols-5 gap-1.5">
              {fonts.map((f, idx) => (
                <button
                  key={f.id}
                  onClick={() => changeFont(idx)}
                  className={`py-1 rounded text-[11px] font-bold transition-all cursor-pointer ${
                    idx === fontIndex
                      ? 'bg-[#E5A400] text-[#002538] shadow-sm scale-105'
                      : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
                  }`}
                  title={f.name}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>

        </div>
      )}
    </aside>
  );
}
