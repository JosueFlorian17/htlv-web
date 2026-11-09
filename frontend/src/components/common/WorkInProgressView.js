"use client";

import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

export default function WorkInProgressView({ customTitle, customMessage }) {
  const { lang } = useLanguage();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 sm:p-12 text-center max-w-xl mx-auto space-y-6 animate-fadeIn">
      {/* Virus Rojo Trabajador */}
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <svg
            className="w-24 h-24 sm:w-28 sm:h-28 animate-bounce-gentle"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Partícula viral redonda con espículas */}
            <circle cx="60" cy="65" r="32" fill="#DC2626" stroke="#991B1B" strokeWidth="3" />

            {/* Espículas glicoproteicas */}
            <path d="M60 27 L60 33" stroke="#E5A400" strokeWidth="4" strokeLinecap="round" />
            <circle cx="60" cy="26" r="3" fill="#E5A400" />

            <path d="M92 45 L87 49" stroke="#E5A400" strokeWidth="4" strokeLinecap="round" />
            <circle cx="94" cy="44" r="3" fill="#E5A400" />

            <path d="M98 65 L92 65" stroke="#E5A400" strokeWidth="4" strokeLinecap="round" />
            <circle cx="100" cy="65" r="3" fill="#E5A400" />

            <path d="M90 85 L85 82" stroke="#E5A400" strokeWidth="4" strokeLinecap="round" />
            <circle cx="92" cy="86" r="3" fill="#E5A400" />

            <path d="M60 97 L60 103" stroke="#E5A400" strokeWidth="4" strokeLinecap="round" />
            <circle cx="60" cy="104" r="3" fill="#E5A400" />

            <path d="M28 85 L33 82" stroke="#E5A400" strokeWidth="4" strokeLinecap="round" />
            <circle cx="26" cy="86" r="3" fill="#E5A400" />

            <path d="M22 65 L28 65" stroke="#E5A400" strokeWidth="4" strokeLinecap="round" />
            <circle cx="20" cy="65" r="3" fill="#E5A400" />

            <path d="M28 45 L33 49" stroke="#E5A400" strokeWidth="4" strokeLinecap="round" />
            <circle cx="26" cy="44" r="3" fill="#E5A400" />

            {/* Casco de constructor amarillo */}
            <path
              d="M38 48 C38 32 82 32 82 48 Z"
              fill="#F59E0B"
              stroke="#D97706"
              strokeWidth="2.5"
            />
            <rect x="34" y="46" width="52" height="5" rx="2" fill="#D97706" />
            <rect x="56" y="33" width="8" height="6" rx="1.5" fill="#FDE68A" />

            {/* Ojos */}
            <ellipse cx="50" cy="63" rx="4.5" ry="5.5" fill="#FFFFFF" />
            <circle cx="51.5" cy="63" r="2.5" fill="#003B49" />
            <circle cx="52.5" cy="61.5" r="0.8" fill="#FFFFFF" />

            <ellipse cx="70" cy="63" rx="4.5" ry="5.5" fill="#FFFFFF" />
            <circle cx="71.5" cy="63" r="2.5" fill="#003B49" />
            <circle cx="72.5" cy="61.5" r="0.8" fill="#FFFFFF" />

            {/* Sonrisa */}
            <path d="M54 72 Q60 78 66 72" stroke="#003B49" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Manitos trabajadoras */}
            <circle cx="36" cy="74" r="5" fill="#DC2626" stroke="#991B1B" strokeWidth="1.5" />
            <line x1="33" y1="78" x2="25" y2="88" stroke="#087E8B" strokeWidth="3" strokeLinecap="round" />
            <polygon points="23,88 28,91 22,94" fill="#003B49" />

            <circle cx="84" cy="74" r="5" fill="#DC2626" stroke="#991B1B" strokeWidth="1.5" />
            <rect x="83" y="66" width="14" height="18" rx="2" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
            <line x1="86" y1="71" x2="94" y2="71" stroke="#087E8B" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="86" y1="75" x2="94" y2="75" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="86" y1="79" x2="92" y2="79" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Textos */}
      <div className="space-y-2">
        <h3 className="text-xl sm:text-2xl font-bold text-[#003B49]">
          {customTitle || (lang === 'es' ? '¡Estamos trabajando en esto!' : "We're working on this!")}
        </h3>
        <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
          {customMessage || (lang === 'es'
            ? 'Si tienes alguna pregunta, déjanos tu consulta aquí:'
            : 'If you have any questions, please contact us here:')}
        </p>
      </div>

      {/* Botón de Contacto */}
      <div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#003B49] hover:bg-[#087E8B] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087E8B]"
        >
          <span className="material-symbols-outlined text-base">mail</span>
          <span>{lang === 'es' ? 'Contáctanos' : 'Contact Us'}</span>
        </Link>
      </div>
    </div>
  );
}
