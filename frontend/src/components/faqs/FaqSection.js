"use client";

import { useState, useMemo } from 'react';
import { FAQ_SECTIONS, getLocalizedFaqs } from '../../data/faqsData';
import { filterFaqsSemantically } from '../../utils/semanticFaqSearch';

export default function FaqSection({ lang = 'es' }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState('all');
  const [openFaqId, setOpenFaqId] = useState(1);
  const [collapsedSections, setCollapsedSections] = useState({});
  const [showFaqDisclaimer, setShowFaqDisclaimer] = useState(false);

  // Solo una pregunta abierta a la vez
  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const toggleSectionCollapse = (sectionId) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Expandir todas o colapsar todas las secciones
  const toggleAllSections = (collapse) => {
    const newState = {};
    FAQ_SECTIONS.forEach((s) => {
      newState[s.id] = collapse;
    });
    setCollapsedSections(newState);
  };

  // Obtener todas las FAQs traducidas para el idioma activo
  const allFaqs = useMemo(() => getLocalizedFaqs(lang), [lang]);

  // Filtrado semántico y por sección
  const filteredFaqs = useMemo(() => {
    let list = allFaqs;
    if (selectedSection !== 'all') {
      list = list.filter((f) => f.sectionId === selectedSection);
    }
    return filterFaqsSemantically(list, searchQuery);
  }, [allFaqs, selectedSection, searchQuery]);

  // Agrupamiento por sección (las 15 hojas del Excel)
  const groupedFaqs = useMemo(() => {
    const groups = {};
    filteredFaqs.forEach((faq) => {
      if (!groups[faq.sectionId]) {
        groups[faq.sectionId] = {
          sectionId: faq.sectionId,
          sectionTitle: faq.sectionTitle,
          items: []
        };
      }
      groups[faq.sectionId].items.push(faq);
    });
    return Object.values(groups);
  }, [filteredFaqs]);

  // Palabras clave sugeridas para búsqueda rápida
  const suggestedTopics = useMemo(() => [
    { label: lang === 'es' ? 'Transmisión / Contagio' : 'Transmission', q: 'transmision' },
    { label: lang === 'es' ? 'Pruebas / Diagnóstico' : 'Testing', q: 'pruebas' },
    { label: lang === 'es' ? 'Lactancia Materna' : 'Breastfeeding', q: 'lactancia' },
    { label: lang === 'es' ? 'Paraparesia (HAM)' : 'HAM / TSP', q: 'HAM' },
    { label: lang === 'es' ? 'Leucemia (ATLL)' : 'ATLL', q: 'ATLL' },
    { label: lang === 'es' ? 'Uveítis (HU)' : 'Uveitis', q: 'uveitis' },
    { label: lang === 'es' ? 'Control Prenatal' : 'Prenatal Care', q: 'prenatal' },
    { label: lang === 'es' ? 'Hijos / Familia' : 'Children & Family', q: 'hijos' },
    { label: lang === 'es' ? 'Donar Sangre' : 'Blood Donation', q: 'sangre' }
  ], [lang]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedSection('all');
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto py-2">
      
      {/* 1. Encabezado limpio estilo minimalista (inspirado en la interfaz de referencia morada) */}
      <div className="space-y-6 border-b border-slate-200 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003B49] tracking-tight">
              {lang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1.5 leading-relaxed">
              {lang === 'es'
                ? 'Respuestas fundamentales y contextualizadas basadas en evidencia científica sobre el HTLV.'
                : 'Key evidence-based, contextualized answers about HTLV.'}
            </p>
          </div>

          {/* Buscador minimalista con ícono lupa */}
          <div className="w-full md:w-80 shrink-0">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === 'es'
                    ? '¿Buscas algo en específico?...'
                    : 'Looking for something?...'
                }
                className="w-full pl-3.5 pr-10 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#003B49] focus:ring-1 focus:ring-[#003B49] transition-all"
              />
              <span className="material-symbols-outlined absolute right-3 text-slate-400 text-lg pointer-events-none">
                search
              </span>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-8 p-1 text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
                  aria-label={lang === 'es' ? 'Limpiar' : 'Clear'}
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Temas sugeridos sutiles */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
          <span className="font-semibold text-slate-600">
            {lang === 'es' ? 'Temas sugeridos:' : 'Suggested topics:'}
          </span>
          {suggestedTopics.map((topic, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSearchQuery(topic.q)}
              className={`px-2.5 py-1 rounded-full border text-[11px] transition-colors cursor-pointer ${
                searchQuery.toLowerCase() === topic.q.toLowerCase()
                  ? 'bg-[#003B49] text-white border-[#003B49]'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              {topic.label}
            </button>
          ))}
        </div>

        {/* 2. Barra de Categorías / Secciones estilo pestañas horizontales limpias (SIN números y SIN conteos) */}
        <div className="relative pt-2">
          <div className="flex items-center gap-6 overflow-x-auto pb-2 scrollbar-thin border-b border-slate-200">
            {/* Pestaña: Todas las secciones */}
            <button
              type="button"
              onClick={() => setSelectedSection('all')}
              className={`pb-2 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer relative ${
                selectedSection === 'all'
                  ? 'text-[#003B49] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#003B49]'
                  : 'text-slate-500 hover:text-[#003B49]'
              }`}
            >
              {lang === 'es' ? 'Todas las secciones' : 'All sections'}
            </button>

            {/* Pestañas individuales sin número ni conteo */}
            {FAQ_SECTIONS.map((sec) => {
              const isSelected = selectedSection === sec.id;
              const titleText = lang === 'es' ? sec.title.es : sec.title.en;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => setSelectedSection(sec.id)}
                  className={`pb-2 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer relative ${
                    isSelected
                      ? 'text-[#003B49] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#003B49]'
                      : 'text-slate-500 hover:text-[#003B49]'
                  }`}
                >
                  {titleText}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Barra de control y estado de filtros */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
        <div>
          {searchQuery ? (
            <span>
              {lang === 'es' ? `Filtrando resultados para "${searchQuery}"` : `Filtering results for "${searchQuery}"`}
            </span>
          ) : selectedSection !== 'all' ? (
            <span>
              {lang === 'es' ? 'Visualizando sección seleccionada' : 'Viewing selected section'}
            </span>
          ) : (
            <span>
              {lang === 'es' ? 'Visualizando todas las secciones' : 'Viewing all sections'}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          {/* Botones expandir/colapsar todas cuando se ve en general */}
          {selectedSection === 'all' && !searchQuery && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => toggleAllSections(false)}
                className="text-[#087E8B] hover:underline font-semibold cursor-pointer"
              >
                {lang === 'es' ? 'Expandir todas' : 'Expand all'}
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => toggleAllSections(true)}
                className="text-slate-500 hover:underline cursor-pointer"
              >
                {lang === 'es' ? 'Colapsar todas' : 'Collapse all'}
              </button>
            </div>
          )}

          {(searchQuery || selectedSection !== 'all') && (
            <button
              type="button"
              onClick={handleClearFilters}
              className="text-[#087E8B] hover:underline font-semibold cursor-pointer"
            >
              {lang === 'es' ? 'Restablecer vista general' : 'Reset view'}
            </button>
          )}
        </div>
      </div>

      {/* 3. Listado de Preguntas con Secciones Colapsables (estilo minimalista de la referencia) */}
      {groupedFaqs.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-6 space-y-3">
          <span className="material-symbols-outlined text-4xl text-slate-400">search_off</span>
          <h3 className="text-base font-bold text-slate-800">
            {lang === 'es'
              ? 'No se encontraron preguntas que coincidan con la búsqueda.'
              : 'No questions matched your search.'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            {lang === 'es'
              ? 'Intenta buscar con otros términos generales como "transmisión", "lactancia", "leucemia", "paraparesia" o "diagnóstico".'
              : 'Try searching with broader terms like "transmission", "breastfeeding", "leukemia", "myelopathy" or "diagnosis".'}
          </p>
          <button
            type="button"
            onClick={handleClearFilters}
            className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 bg-[#003B49] text-white rounded-lg text-xs font-semibold hover:bg-[#087E8B] transition-colors cursor-pointer"
          >
            {lang === 'es' ? 'Ver todas las preguntas' : 'View all questions'}
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {groupedFaqs.map((group) => {
            // En vista general, la sección es colapsable
            const isSectionCollapsed = selectedSection === 'all' && !searchQuery && !!collapsedSections[group.sectionId];

            return (
              <div
                key={group.sectionId}
                className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden transition-all"
              >
                {/* Encabezado de Sección: Colapsable, SIN números y SIN conteo de preguntas */}
                <button
                  type="button"
                  onClick={() => selectedSection === 'all' && !searchQuery && toggleSectionCollapse(group.sectionId)}
                  className={`w-full px-5 sm:px-6 py-4 flex items-center justify-between gap-4 text-left transition-colors ${
                    selectedSection === 'all' && !searchQuery
                      ? 'hover:bg-slate-50 cursor-pointer'
                      : 'cursor-default'
                  } ${isSectionCollapsed ? 'bg-white' : 'bg-slate-50/70 border-b border-slate-200'}`}
                >
                  <h3 className="text-base sm:text-lg font-bold text-[#003B49] leading-snug">
                    {group.sectionTitle}
                  </h3>

                  {/* Flecha colapsar sección (solo visible en vista general) */}
                  {selectedSection === 'all' && !searchQuery && (
                    <span className="material-symbols-outlined text-slate-400 text-xl shrink-0 transition-transform duration-200">
                      {isSectionCollapsed ? 'expand_more' : 'expand_less'}
                    </span>
                  )}
                </button>

                {/* Preguntas de la Sección (Estilo Acordeón Minimalista como la captura de referencia) */}
                {!isSectionCollapsed && (
                  <div className="divide-y divide-slate-100 px-5 sm:px-6">
                    {group.items.map((faq) => {
                      const isOpen = openFaqId === faq.id;
                      return (
                        <div key={faq.id} className="py-4">
                          {/* Pregunta estilo Bluebird: Pregunta limpia con flecha fina a la derecha */}
                          <button
                            type="button"
                            onClick={() => toggleFaq(faq.id)}
                            className="w-full text-left flex items-start justify-between gap-4 py-1 hover:text-[#087E8B] transition-colors cursor-pointer group focus-visible:outline-none"
                            aria-expanded={isOpen}
                          >
                            <h4 className="text-sm sm:text-[15px] font-bold text-[#003B49] group-hover:text-[#087E8B] leading-relaxed">
                              {faq.q}
                            </h4>
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#087E8B] text-xl shrink-0 transition-transform duration-200 mt-0.5">
                              {isOpen ? 'expand_less' : 'expand_more'}
                            </span>
                          </button>

                          {/* Respuesta expandible */}
                          {isOpen && (
                            <div className="pt-3 pb-2 space-y-3 animate-fadeIn">
                              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal whitespace-pre-line">
                                {faq.a}
                              </p>
                              <div className="pt-2 border-t border-slate-100 flex items-start gap-2 text-[11px] sm:text-xs text-slate-500 italic">
                                <span className="material-symbols-outlined text-[14px] text-[#087E8B] shrink-0 mt-0.5">info</span>
                                <span>
                                  {lang === 'es'
                                    ? 'Aviso informativo: Este contenido es exclusivamente educativo y divulgativo; no constituye diagnóstico clínico ni sustituye la atención médica profesional.'
                                    : 'Informational note: This content is for educational purposes only; it does not constitute clinical diagnosis or replace professional medical care.'}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Botón Ver más para Warning Work In Progress */}
      <div className="mt-8 pt-4 border-t border-slate-200">
        {!showFaqDisclaimer ? (
          <div className="text-center">
            <button
              type="button"
              onClick={() => setShowFaqDisclaimer(true)}
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-black underline cursor-pointer py-1.5 px-3"
            >
              {lang === 'es' ? '(Ver más)' : '(See more)'}
            </button>
          </div>
        ) : (
          <div className="p-4 bg-[#FDE8E8] text-black rounded-none space-y-1.5 animate-fadeIn mb-4">
            <div className="flex items-center justify-between">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wide">
                [Work in progress]
              </p>
              <button
                type="button"
                onClick={() => setShowFaqDisclaimer(false)}
                className="text-xs text-black/70 hover:text-black font-semibold underline cursor-pointer"
              >
                {lang === 'es' ? '(Ocultar)' : '(Hide)'}
              </button>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed font-normal">
              {lang === 'es'
                ? 'Esta sección de preguntas frecuentes se encuentra actualmente en desarrollo, ampliación y revisión técnica por el equipo científico de la Red HTLV.'
                : 'This frequently asked questions section is currently under development, expansion, and technical review by the HTLV Network scientific team.'}
            </p>
          </div>
        )}
      </div>

      {/* Aviso Importante Disclaimer */}
      <div className="mt-4 p-5 bg-slate-50 border-l-4 border-[#087E8B] rounded-r-xl text-xs sm:text-sm text-slate-600 leading-relaxed space-y-1.5">
        <div className="flex items-center gap-2 text-[#003B49] font-bold text-sm">
          <span className="material-symbols-outlined text-lg text-[#087E8B]">info</span>
          <span>{lang === 'es' ? 'Aviso importante' : 'Important Notice'}</span>
        </div>
        <p>
          {lang === 'es'
            ? 'La información contenida en este sitio web se presenta únicamente con fines informativos y educativos. No constituye un diagnóstico ni tratamiento profesional. Siempre busque el consejo de su médico u otro proveedor de salud calificado ante cualquier duda sobre una condición médica. Nunca ignore el consejo médico profesional ni demore su búsqueda debido a algo que haya leído en este sitio.'
            : 'The information on this website is for educational and informational purposes only. It does not constitute professional diagnosis or treatment. Always seek the advice of your physician or qualified health provider with any questions you may have regarding a medical condition.'}
        </p>
      </div>

    </div>
  );
}
