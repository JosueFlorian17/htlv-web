"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { PUBLICACIONES_DATA } from '../../data/publicacionesData';

// Nombres y apellidos clave de investigadores de la red para resaltar en la referencia
const NETWORK_SURNAME_REGEX = /\b(Gotuzzo|Garrido-Pinz[aá]s|Garrido|Zunt|L[oó]pez|Talledo|Guardia|Alva|Concha-Velasco|Concha|Yamano|Taylor|Garc[ií]a|Tipismana|Terashima|Morales|C[aá]rcamo|Elespuro|Segami|Mej[ií]a|Calvo|Bravo|Ramos)\b/gi;

function highlightAuthorsInText(text) {
  if (!text) return null;
  const parts = [];
  let lastIdx = 0;
  let match;
  
  // Clonar regex para resetear lastIndex
  const regex = new RegExp(NETWORK_SURNAME_REGEX);
  
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      parts.push(text.substring(lastIdx, match.index));
    }
    parts.push(
      <strong key={match.index} className="font-extrabold text-[#003B49] bg-amber-100/60 px-0.5 rounded">
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
  const [areaFilter, setAreaFilter] = useState('todos');
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' = más recientes primero (2026 -> 1991)
  const [visibleCount, setVisibleCount] = useState(15);
  const [selectedPub, setSelectedPub] = useState(null); // { pub, action: 'resumen' | 'link' }

  // Extraer áreas temáticas únicas para los filtros
  const areasDisponibles = useMemo(() => {
    const set = new Set();
    PUBLICACIONES_DATA.forEach(p => {
      if (p.area) {
        // Separar si contiene /
        p.area.split('/').forEach(a => {
          const trimmed = a.trim();
          if (trimmed) set.add(trimmed);
        });
      }
    });
    return Array.from(set).sort();
  }, []);

  // Filtrado y ordenamiento
  const filteredAndSorted = useMemo(() => {
    let list = PUBLICACIONES_DATA.filter(p => {
      // Filtro por área
      if (areaFilter !== 'todos') {
        if (!p.area || !p.area.toLowerCase().includes(areaFilter.toLowerCase())) {
          return false;
        }
      }

      // Filtro por término de búsqueda
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const matchTitle = (p.titulo || '').toLowerCase().includes(q);
        const matchAutores = (p.autores_red || '').toLowerCase().includes(q);
        const matchRef = (p.referencia || '').toLowerCase().includes(q);
        const matchYear = (p.ano || '').includes(q);
        const matchArea = (p.area || '').toLowerCase().includes(q);
        const matchTipo = (p.tipo || '').toLowerCase().includes(q);
        if (!matchTitle && !matchAutores && !matchRef && !matchYear && !matchArea && !matchTipo) {
          return false;
        }
      }

      return true;
    });

    // Ordenar por año
    list.sort((a, b) => {
      const yearA = parseInt(a.ano) || 0;
      const yearB = parseInt(b.ano) || 0;
      return sortOrder === 'desc' ? yearB - yearA : yearA - yearB;
    });

    return list;
  }, [searchTerm, areaFilter, sortOrder]);

  const visibleList = filteredAndSorted.slice(0, visibleCount);

  return (
    <main className="w-full bg-[#f8fafc] min-h-[calc(100vh-80px)] py-8 sm:py-12 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Cabecera Principal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-2 border-[#003B49]/15">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-teal-50 text-[#003B49] border border-[#087E8B]/20 rounded-full text-xs font-bold uppercase tracking-wider">
                {lang === 'es' ? 'Producción Científica Oficial' : 'Official Scientific Output'}
              </span>
              <span className="text-xs font-bold text-slate-500">
                ({PUBLICACIONES_DATA.length} {lang === 'es' ? 'publicaciones' : 'publications'})
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#003B49] tracking-tight">
              {lang === 'es' ? 'Publicaciones de la Red HTLV' : 'HTLV Network Publications'}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl">
              {lang === 'es'
                ? 'Artículos científicos e investigaciones indexadas elaboradas por miembros e investigadores de la Red HTLV desde 1991 a la actualidad.'
                : 'Peer-reviewed scientific articles and indexed research authored by HTLV Network members from 1991 to present.'}
            </p>
          </div>

          {/* Buscador Rápido */}
          <div className="w-full md:w-80">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-lg">search</span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setVisibleCount(15);
                }}
                placeholder={lang === 'es' ? "Buscar por autor, título, año..." : "Search by author, title, year..."}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 bg-white focus:border-[#087E8B] focus:ring-2 focus:ring-[#087E8B] focus:outline-none text-sm text-slate-800 transition shadow-2xs"
              />
            </div>
          </div>
        </div>

        {/* Barra de Filtros por Área Temática y Orden de Año */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Filtros de Área */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-slate-500 mr-1 hidden sm:inline">
              {lang === 'es' ? 'Área:' : 'Area:'}
            </span>
            <button
              type="button"
              onClick={() => { setAreaFilter('todos'); setVisibleCount(15); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                areaFilter === 'todos'
                  ? 'bg-[#003B49] text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {lang === 'es' ? `Todas (${PUBLICACIONES_DATA.length})` : `All (${PUBLICACIONES_DATA.length})`}
            </button>
            {areasDisponibles.map(area => (
              <button
                key={area}
                type="button"
                onClick={() => { setAreaFilter(area); setVisibleCount(15); }}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  areaFilter === area
                    ? 'bg-[#087E8B] text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {area}
              </button>
            ))}
          </div>

          {/* Orden de Año */}
          <div className="flex items-center gap-2 shrink-0 self-end lg:self-auto">
            <span className="text-xs font-medium text-slate-500">
              {lang === 'es' ? 'Orden:' : 'Sort:'}
            </span>
            <button
              type="button"
              onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg border border-slate-200 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">
                {sortOrder === 'desc' ? 'arrow_downward' : 'arrow_upward'}
              </span>
              <span>
                {sortOrder === 'desc'
                  ? (lang === 'es' ? 'Más recientes primero' : 'Newest first')
                  : (lang === 'es' ? 'Más antiguos primero' : 'Oldest first')}
              </span>
            </button>
          </div>

        </div>

        {/* Listado de Publicaciones */}
        <div className="space-y-4">
          {filteredAndSorted.length === 0 ? (
            <div className="bg-white py-14 text-center rounded-2xl border border-slate-200 shadow-2xs space-y-2">
              <span className="material-symbols-outlined text-4xl text-slate-400">
                search_off
              </span>
              <p className="text-sm font-semibold text-slate-700">
                {lang === 'es' ? 'No se encontraron publicaciones con los filtros aplicados.' : 'No publications matched your search criteria.'}
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4">
                {visibleList.map((pub) => (
                  <article
                    key={pub.id}
                    className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#087E8B]/40 transition-all space-y-4"
                  >
                    {/* Fila Superior: [Año], Tipo y Área Temática */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {/* Año destacado */}
                        <span className="px-3 py-1 bg-[#A10D3A]/10 text-[#A10D3A] border border-[#A10D3A]/25 rounded-md text-xs font-extrabold tracking-wide">
                          [{pub.ano}]
                        </span>
                        {pub.tipo && (
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-[11px] font-semibold border border-slate-200">
                            {pub.tipo}
                          </span>
                        )}
                      </div>

                      {pub.area && (
                        <span className="px-2.5 py-1 bg-[#087E8B]/10 text-[#003B49] rounded-full text-[11px] font-bold border border-[#087E8B]/20">
                          {pub.area}
                        </span>
                      )}
                    </div>

                    {/* Título Oficial de la Publicación */}
                    <h2 className="text-base sm:text-lg font-bold text-[#003B49] leading-snug">
                      {pub.titulo}
                    </h2>

                    {/* Autores de la Red (En Negrita Destacada) */}
                    <div className="text-xs sm:text-sm text-slate-800 bg-amber-50/70 p-3 rounded-xl border border-amber-200/80 flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#E5A400] text-base shrink-0 mt-0.5">
                        verified_user
                      </span>
                      <p className="leading-relaxed">
                        <strong className="font-extrabold text-[#003B49]">
                          {lang === 'es' ? 'Autores de la Red:' : 'Network Authors:'}
                        </strong>{' '}
                        <strong className="font-extrabold text-slate-900 underline decoration-[#E5A400] decoration-2 underline-offset-2">
                          {pub.autores_red}
                        </strong>
                      </p>
                    </div>

                    {/* Referencia bibliográfica completa con autores de la red en negrita */}
                    <div className="text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                        {lang === 'es' ? 'Cita y Referencia Bibliográfica:' : 'Citation & Full Reference:'}
                      </span>
                      <p className="leading-relaxed text-slate-700 font-sans">
                        {highlightAuthorsInText(pub.referencia)}
                      </p>
                    </div>

                    {/* Botones: Ver Resumen y Ver Link (ambos activan ventana "Estamos Trabajando") */}
                    <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-slate-100">
                      
                      {/* Botón Ver Resumen */}
                      <button
                        type="button"
                        onClick={() => setSelectedPub({ pub, action: 'resumen' })}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003B49] hover:text-[#087E8B] bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-lg border border-slate-200 transition-colors cursor-pointer shadow-2xs group"
                      >
                        <span className="material-symbols-outlined text-[16px] text-[#E5A400] group-hover:scale-110 transition-transform">
                          description
                        </span>
                        <span>{lang === 'es' ? 'Ver resumen' : 'View abstract'}</span>
                      </button>

                      {/* Botón Ver Link / DOI */}
                      <button
                        type="button"
                        onClick={() => setSelectedPub({ pub, action: 'link' })}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087E8B] hover:text-[#003B49] bg-teal-50 hover:bg-teal-100 px-3.5 py-2 rounded-lg border border-teal-200 transition-colors cursor-pointer shadow-2xs group"
                      >
                        <span className="material-symbols-outlined text-[16px] text-[#087E8B] group-hover:scale-110 transition-transform">
                          open_in_new
                        </span>
                        <span>{lang === 'es' ? 'Ver link oficial' : 'View official link'}</span>
                      </button>

                    </div>
                  </article>
                ))}
              </div>

              {/* Botón Cargar Más */}
              {visibleCount < filteredAndSorted.length && (
                <div className="pt-6 text-center">
                  <button
                    type="button"
                    onClick={() => setVisibleCount(prev => prev + 15)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#003B49] hover:bg-[#087E8B] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer"
                  >
                    <span>
                      {lang === 'es'
                        ? `Cargar más publicaciones (${visibleCount} de ${filteredAndSorted.length})`
                        : `Load more publications (${visibleCount} of ${filteredAndSorted.length})`}
                    </span>
                    <span className="material-symbols-outlined text-base">expand_more</span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Modal Simpático "Estamos trabajando" para Ver Link / Ver Resumen */}
        {selectedPub && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-xs animate-fadeIn"
            onClick={() => setSelectedPub(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 border border-slate-200 relative animate-scaleUp text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón cerrar */}
              <button
                type="button"
                onClick={() => setSelectedPub(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors font-bold text-lg leading-none cursor-pointer"
                aria-label="Cerrar modal"
              >
                ✕
              </button>

              {/* Ilustración Animada y Graciosa del Virus Obrero / Robot de Laboratorio */}
              <div className="pt-2 flex flex-col items-center justify-center">
                <div className="relative">
                  <svg
                    className="w-28 h-28 mx-auto drop-shadow-md animate-bounce"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Partícula viral redonda con espículas */}
                    <circle cx="60" cy="65" r="32" fill="#087E8B" stroke="#003B49" strokeWidth="3" />

                    {/* Espículas glicoproteicas */}
                    <path d="M60 27 L60 33" stroke="#E5A400" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="60" cy="25" r="4" fill="#E5A400" />

                    <path d="M60 97 L60 103" stroke="#E5A400" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="60" cy="105" r="4" fill="#E5A400" />

                    <path d="M25 65 L31 65" stroke="#E5A400" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="23" cy="65" r="4" fill="#E5A400" />

                    <path d="M89 65 L95 65" stroke="#E5A400" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="97" cy="65" r="4" fill="#E5A400" />

                    <path d="M35 40 L40 44" stroke="#E5A400" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="33" cy="38" r="4" fill="#E5A400" />

                    <path d="M85 40 L80 44" stroke="#E5A400" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="87" cy="38" r="4" fill="#E5A400" />

                    <path d="M35 90 L40 86" stroke="#E5A400" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="33" cy="92" r="4" fill="#E5A400" />

                    <path d="M85 90 L80 86" stroke="#E5A400" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="87" cy="92" r="4" fill="#E5A400" />

                    {/* Casco amarillo de construcción */}
                    <path d="M42 46 C42 34 50 30 60 30 C70 30 78 34 78 46 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="2.5" />
                    <path d="M36 46 L84 46" stroke="#B45309" strokeWidth="3.5" strokeLinecap="round" />
                    <rect x="56" y="32" width="8" height="6" rx="1.5" fill="#FFFFFF" stroke="#D97706" strokeWidth="1" />

                    {/* Ojos con gafas protectoras */}
                    <circle cx="51" cy="62" r="6" fill="#FFFFFF" stroke="#003B49" strokeWidth="1.5" />
                    <circle cx="53" cy="62" r="2.5" fill="#003B49" />
                    <circle cx="54" cy="60.5" r="1" fill="#FFFFFF" />

                    <circle cx="69" cy="62" r="6" fill="#FFFFFF" stroke="#003B49" strokeWidth="1.5" />
                    <circle cx="71" cy="62" r="2.5" fill="#003B49" />
                    <circle cx="72" cy="60.5" r="1" fill="#FFFFFF" />

                    <path d="M57 62 L63 62" stroke="#003B49" strokeWidth="1.5" />

                    {/* Mejillas sonrosadas */}
                    <ellipse cx="45" cy="68" rx="3" ry="1.5" fill="#F472B6" opacity="0.6" />
                    <ellipse cx="75" cy="68" rx="3" ry="1.5" fill="#F472B6" opacity="0.6" />

                    {/* Sonrisa simpática */}
                    <path d="M54 72 Q60 78 66 72" stroke="#003B49" strokeWidth="2" strokeLinecap="round" fill="none" />

                    {/* Manitos sosteniendo llave inglesa y portapapeles */}
                    <circle cx="36" cy="74" r="5" fill="#0A5265" stroke="#003B49" strokeWidth="1.5" />
                    <path d="M36 74 L25 82 M22 84 L27 79" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />

                    <circle cx="84" cy="74" r="5" fill="#0A5265" stroke="#003B49" strokeWidth="1.5" />
                    <rect x="85" y="68" width="11" height="14" rx="1.5" fill="#E2E8F0" stroke="#475569" strokeWidth="1.5" />
                    <path d="M88 73 L93 73 M88 76 L93 76 M88 79 L92 79" stroke="#64748B" strokeWidth="1" strokeLinecap="round" />
                  </svg>

                  <span className="inline-block mt-2 px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-[11px] font-black uppercase tracking-wider">
                    🚧 {lang === 'es' ? 'En Digitalización' : 'In Digitization'} ⚙️
                  </span>
                </div>
              </div>

              {/* Mensaje simpático según la acción pulsada */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-black text-[#003B49]">
                  {lang === 'es' ? '¡Estamos trabajando en esto!' : 'We are working on this!'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                  {selectedPub.action === 'resumen'
                    ? (lang === 'es'
                        ? 'Nuestro equipo bibliotecario e investigadores están terminando de transcribir y estructurar el resumen analítico completo de este artículo histórico. ¡Estará disponible muy pronto!'
                        : 'Our library and research team is completing the transcription and indexing of the full analytical abstract for this paper. It will be available very soon!')
                    : (lang === 'es'
                        ? 'Estamos indexando y enlazando los accesos directos (DOI / PubMed / Repositorio) de este artículo. ¡Estará disponible con hipervínculo directo muy pronto!'
                        : 'We are currently indexing and linking the official access redirects (DOI / PubMed / Repository) for this paper. Direct links will be available soon!')}
                </p>
              </div>

              {/* Ficha resumida del artículo */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#A10D3A]/10 text-[#A10D3A] font-extrabold rounded text-[11px]">
                    [{selectedPub.pub.ano}]
                  </span>
                  <span className="font-semibold text-slate-600 text-[11px]">
                    {selectedPub.pub.tipo || selectedPub.pub.area}
                  </span>
                </div>
                <p className="font-bold text-[#003B49] text-sm leading-snug">
                  {selectedPub.pub.titulo}
                </p>
                <p className="text-slate-800 text-[11px] pt-1 border-t border-slate-200">
                  <strong className="text-[#003B49] font-bold">
                    {lang === 'es' ? 'Autores de la Red:' : 'Network Authors:'}
                  </strong>{' '}
                  <strong className="text-slate-900 font-extrabold">{selectedPub.pub.autores_red}</strong>
                </p>
              </div>

              {/* Botones de acción */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedPub(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                >
                  {lang === 'es' ? 'Entendido / Cerrar' : 'Got it / Close'}
                </button>
                <Link
                  href={`/contact?subject=consulta-publicacion&articulo=${encodeURIComponent(selectedPub.pub.titulo)}`}
                  onClick={() => setSelectedPub(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold bg-[#003B49] hover:bg-[#087E8B] text-white transition-colors shadow-2xs"
                >
                  <span>{lang === 'es' ? 'Consultar sobre este artículo' : 'Inquire about this article'}</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>

            </div>
          </div>
        )}

      </div>
    </main>
  );
}
