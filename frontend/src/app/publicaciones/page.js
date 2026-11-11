"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { PUBLICACIONES_DATA } from '../../data/publicacionesData';

// Patrones específicos de cada investigador de la Red HTLV (según la columna 'Autores de la red' de la matriz oficial)
const NETWORK_MEMBERS = {
  gotuzzo: {
    check: (str) => /gotuzzo/i.test(str),
    regexStr: `(?:(?:Dr\\.?\\s+)?Eduardo\\s+Gotuzzo|Gotuzzo\\s+(?:E\\.?\\s*A\\.?|E\\.?|A\\.?)|(?:E\\.?\\s+)?Gotuzzo\\b)`
  },
  yamano: {
    check: (str) => /yamano/i.test(str),
    regexStr: `(?:(?:Dr\\.?\\s+)?Yoshihisa\\s+Yamano|Yamano\\s+Y\\.?|(?:Y\\.?\\s+)?Yamano\\b)`
  },
  alva: {
    check: (str) => /alva/i.test(str),
    regexStr: `(?:(?:Dr\\.?\\s+)?Isaac\\s+Alva|Alva\\s+I\\.?|(?:I\\.?\\s+)?Alva\\b)`
  },
  zunt: {
    check: (str) => /zunt/i.test(str),
    regexStr: `(?:(?:Dr\\.?\\s+)?(?:Joseph(?:\\s+R\\.?)?|Joe)\\s+Zunt|Zunt\\s+(?:JR|J\\.?)|(?:(?:JR|J\\.?)\\s+)?Zunt\\b)`
  },
  lopez: {
    check: (str) => /l[oó]pez/i.test(str),
    regexStr: `(?:(?:Mg\\.?\\s+)?Giovanni\\s+L[oó]pez|L[oó]pez\\s+G\\.?|Lopez\\s+G\\.?|(?:G\\.?\\s+)?L[oó]pez\\b|(?:G\\.?\\s+)?Lopez\\b)`
  },
  talledo: {
    check: (str) => /talledo/i.test(str),
    regexStr: `(?:(?:Dr\\.?\\s+)?Michael\\s+Talledo|Talledo\\s+M\\.?|(?:M\\.?\\s+)?Talledo\\b)`
  },
  concha: {
    check: (str) => /concha/i.test(str),
    regexStr: `(?:(?:Dra\\.?\\s+)?F[aá]tima\\s+Concha(?:-Velasco)?|Concha-Velasco\\s+F\\.?|Concha\\s+F\\.?|(?:F\\.?\\s+)?Concha-Velasco\\b)`
  },
  garrido: {
    check: (str) => /garrido/i.test(str),
    regexStr: `(?:(?:Dra\\.?\\s+)?Gabriela\\s+Garrido(?:-Pinz[aá]s)?|Garrido-Pinz[aá]s\\s+G\\.?|Garrido-Pinzas\\s+G\\.?|Garrido\\s+G\\.?|(?:G\\.?\\s+)?Garrido-Pinz[aá]s\\b|(?:G\\.?\\s+)?Garrido-Pinzas\\b)`
  },
  guardia: {
    check: (str) => /guardia/i.test(str),
    regexStr: `(?:(?:Lic\\.?\\s+)?Dyana\\s+Guardia|Guardia\\s+D\\.?|(?:D\\.?\\s+)?Guardia\\b)`
  }
};

function getPublicationAuthorRegex(autoresRed) {
  if (!autoresRed) return null;
  const activePatterns = [];
  
  for (const member of Object.values(NETWORK_MEMBERS)) {
    if (member.check(autoresRed)) {
      activePatterns.push(member.regexStr);
    }
  }
  
  if (activePatterns.length === 0) return null;
  
  return new RegExp(
    `(?<!\\p{L})(${activePatterns.join('|')})(?!\\p{L})`,
    'gui'
  );
}

function highlightAuthorsInText(text, autoresRed) {
  if (!text) return null;
  const regex = getPublicationAuthorRegex(autoresRed);
  if (!regex) return text;

  const parts = [];
  let lastIdx = 0;
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      parts.push(text.substring(lastIdx, match.index));
    }
    parts.push(
      <strong key={match.index} className="font-bold text-slate-900">
        {match[0]}
      </strong>
    );
    lastIdx = regex.lastIndex;
  }
  
  if (lastIdx < text.length) {
    parts.push(text.substring(lastIdx));
  }
  
  return parts.length > 0 ? parts : text;
}

export default function PublicacionesPage() {
  const { lang } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPub, setSelectedPub] = useState(null); // { pub, action: 'resumen' | 'link' }

  // Filtrado por buscador simple
  const filtered = useMemo(() => {
    let list = PUBLICACIONES_DATA.filter((p) => {
      if (!searchTerm.trim()) return true;
      const q = searchTerm.toLowerCase();
      const matchTitle = (p.titulo || '').toLowerCase().includes(q);
      const matchAutores = (p.autores_red || '').toLowerCase().includes(q);
      const matchRef = (p.referencia || '').toLowerCase().includes(q);
      const matchYear = (p.ano || '').includes(q);
      const matchArea = (p.area || '').toLowerCase().includes(q);
      const matchTipo = (p.tipo || '').toLowerCase().includes(q);
      return matchTitle || matchAutores || matchRef || matchYear || matchArea || matchTipo;
    });

    // Ordenar de más reciente a más antiguo por defecto
    list.sort((a, b) => {
      const yearA = parseInt(a.ano) || 0;
      const yearB = parseInt(b.ano) || 0;
      return yearB - yearA;
    });

    return list;
  }, [searchTerm]);

  return (
    <main className="w-full bg-[#f8fafc] min-h-[calc(100vh-80px)] py-8 sm:py-12 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Cabecera Estilo QuEST LAC: limpia, sin cajas de colores */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-2 border-[#003B49]/15">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#003B49] tracking-tight">
              {lang === 'es' ? 'Publicaciones' : 'Publications'}
            </h1>
          </div>

          {/* Buscador Simple */}
          <div className="w-full md:w-80">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-lg">search</span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={lang === 'es' ? "Buscar por autor, título o año..." : "Search by author, title or year..."}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 bg-white focus:border-[#087E8B] focus:ring-2 focus:ring-[#087E8B] focus:outline-none text-sm text-slate-800 transition"
              />
            </div>
          </div>
        </div>

        {/* Listado de Artículos: divide-y limpio, sin tarjetas ni cajas de colores */}
        <div className="divide-y divide-slate-200 py-2">
          {filtered.length === 0 ? (
            <div className="py-16 text-center text-slate-500 text-sm">
              {lang === 'es' ? 'No se encontraron publicaciones.' : 'No publications found.'}
            </div>
          ) : (
            filtered.map((pub) => {
              return (
                <div key={pub.id} className="py-6 space-y-2">
                  
                  {/* [Año] Título del Artículo como enlace interactivo */}
                  <h3 className="text-base sm:text-lg font-bold leading-snug">
                    <span className="text-[#A10D3A]">[{pub.ano}]</span>{' '}
                    <button
                      type="button"
                      onClick={() => setSelectedPub({ pub, action: 'link' })}
                      className="text-[#003B49] hover:text-[#087E8B] hover:underline transition-colors text-left font-bold cursor-pointer inline"
                      title={lang === 'es' ? "Ver publicación oficial" : "View official publication"}
                    >
                      {pub.titulo}
                    </button>
                  </h3>

                  {/* Cita / Referencia bibliográfica sutil */}
                  {pub.referencia && (
                    <p className="text-xs text-slate-500 font-normal italic leading-relaxed">
                      {highlightAuthorsInText(pub.referencia, pub.autores_red)}
                    </p>
                  )}

                  {/* Botones al estilo anterior: solo texto sin fondo */}
                  <div className="pt-1 flex flex-wrap items-center gap-5 text-sm">
                    {/* Botón Resumen: Solo texto marino (#003B49), SIN FONDO, resaltado en negrita sin color amarillo */}
                    <button
                      type="button"
                      onClick={() => setSelectedPub({ pub, action: 'resumen' })}
                      className="inline-flex items-center gap-1 font-bold text-[#003B49] hover:text-[#087E8B] transition-colors cursor-pointer bg-transparent p-0 border-0 focus-visible:outline-none"
                    >
                      <span>{lang === 'es' ? 'Resumen' : 'Abstract'}</span>
                      <span className="material-symbols-outlined text-lg leading-none">expand_more</span>
                    </button>

                    {/* Botón Ver enlace: Solo texto TEAL (#087E8B), SIN FONDO, resaltado en negrita */}
                    <button
                      type="button"
                      onClick={() => setSelectedPub({ pub, action: 'link' })}
                      className="inline-flex items-center gap-1 font-bold text-[#087E8B] hover:text-[#003B49] transition-colors cursor-pointer bg-transparent p-0 border-0 focus-visible:outline-none"
                    >
                      <span className="material-symbols-outlined text-base leading-none">open_in_new</span>
                      <span>{lang === 'es' ? 'Ver enlace' : 'View link'}</span>
                    </button>
                  </div>

                </div>
              );
            })
          )}
        </div>

      </div>

      {/* Modal Interactivo "Estamos trabajando en esto" con el virus rojo */}
      {selectedPub && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedPub(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-center space-y-5 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar esquina superior */}
            <div className="flex justify-end -mt-2 -mr-2">
              <button
                type="button"
                onClick={() => setSelectedPub(null)}
                className="w-8 h-8 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center text-lg font-bold cursor-pointer transition-colors"
                aria-label="Cerrar modal"
              >
                ✕
              </button>
            </div>

            {/* Virus Rojo trabajador */}
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

                  {/* Casco de constructor amarillo con visera */}
                  <path
                    d="M38 48 C38 32 82 32 82 48 Z"
                    fill="#F59E0B"
                    stroke="#D97706"
                    strokeWidth="2.5"
                  />
                  <rect x="34" y="46" width="52" height="5" rx="2" fill="#D97706" />
                  <rect x="56" y="33" width="8" height="6" rx="1.5" fill="#FDE68A" />

                  {/* Ojos simpáticos del virus */}
                  <ellipse cx="50" cy="63" rx="4.5" ry="5.5" fill="#FFFFFF" />
                  <circle cx="51.5" cy="63" r="2.5" fill="#003B49" />
                  <circle cx="52.5" cy="61.5" r="0.8" fill="#FFFFFF" />

                  <ellipse cx="70" cy="63" rx="4.5" ry="5.5" fill="#FFFFFF" />
                  <circle cx="71.5" cy="63" r="2.5" fill="#003B49" />
                  <circle cx="72.5" cy="61.5" r="0.8" fill="#FFFFFF" />

                  {/* Sonrisa amigable */}
                  <path d="M54 72 Q60 78 66 72" stroke="#003B49" strokeWidth="2" strokeLinecap="round" fill="none" />

                  {/* Manitos */}
                  <circle cx="36" cy="74" r="5" fill="#991B1B" stroke="#7F1D1D" strokeWidth="1.5" />
                  <path d="M36 74 L25 82 M22 84 L27 79" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />

                  <circle cx="84" cy="74" r="5" fill="#991B1B" stroke="#7F1D1D" strokeWidth="1.5" />
                  <rect x="85" y="68" width="11" height="14" rx="1.5" fill="#E2E8F0" stroke="#475569" strokeWidth="1.5" />
                  <path d="M88 73 L93 73 M88 76 L93 76 M88 79 L92 79" stroke="#64748B" strokeWidth="1" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Mensaje limpio */}
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#003B49]">
                {lang === 'es' ? '¡Estamos trabajando en esto!' : 'We are working on this!'}
              </h3>
            </div>

            {/* Ficha resumida de la publicación */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-left space-y-1.5">
              <span className="text-xs font-bold text-[#A10D3A]">
                [{selectedPub.pub.ano}]
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#003B49] leading-snug">
                {selectedPub.pub.titulo}
              </p>
              {selectedPub.pub.autores_red && (
                <p className="text-xs text-slate-600">
                  <span className="font-semibold text-slate-700">{lang === 'es' ? 'Autores Red:' : 'Network Authors:'}</span>{' '}
                  <strong className="font-bold text-slate-900">{selectedPub.pub.autores_red}</strong>
                </p>
              )}
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setSelectedPub(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              >
                {lang === 'es' ? 'Cerrar' : 'Close'}
              </button>
              <Link
                href={`/contact?subject=consulta-publicacion&articulo=${encodeURIComponent(selectedPub.pub.titulo)}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold bg-[#003B49] hover:bg-[#087E8B] text-white transition-colors cursor-pointer"
              >
                <span>{lang === 'es' ? 'Consultar a la coordinación' : 'Inquire with coordination'}</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

          </div>
        </div>
      )}
    </main>
  );
}
