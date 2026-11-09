"use client";

import { useState, useMemo } from 'react';
import { FAQ_SECTIONS, getLocalizedFaqs } from '../../data/faqsData';
import { filterFaqsSemantically } from '../../utils/semanticFaqSearch';

export default function FaqSection({ lang = 'es' }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState('all');
  const [openFaqs, setOpenFaqs] = useState({ 1: true });
  const [showFaqDisclaimer, setShowFaqDisclaimer] = useState(false);

  const toggleFaq = (id) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
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
          sectionNumber: faq.sectionNumber,
          sectionTitle: faq.sectionTitle,
          items: []
        };
      }
      groups[faq.sectionId].items.push(faq);
    });
    return Object.values(groups).sort((a, b) => a.sectionNumber - b.sectionNumber);
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
      {/* Encabezado limpio con Buscador Semántico */}
      <div className="border-b border-slate-200 pb-6 space-y-5">
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

        {/* Input de Búsqueda Semántica */}
        <div className="relative max-w-2xl">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-xl pointer-events-none">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === 'es'
                  ? 'Busca por tema, síntoma o duda (ej. "contagio", "lactancia", "HAM", "ATLL", "pruebas")...'
                  : 'Search by topic, symptom or question (e.g., "transmission", "breastfeeding", "HAM", "ATLL", "testing")...'
              }
              className="w-full pl-11 pr-10 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#087E8B] focus:border-transparent shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 p-1 text-slate-400 hover:text-slate-600 rounded-md transition-colors cursor-pointer"
                aria-label={lang === 'es' ? 'Limpiar búsqueda' : 'Clear search'}
              >
                ✕
              </button>
            )}
          </div>

          {/* Temas sugeridos */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2.5 text-xs text-slate-500">
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
        </div>

        {/* Selector de Secciones (15 Hojas del Excel) */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
            <span>
              {lang === 'es' ? 'Filtrar por sección del documento:' : 'Filter by document section:'}
            </span>
            {selectedSection !== 'all' && (
              <button
                type="button"
                onClick={() => setSelectedSection('all')}
                className="text-[#087E8B] hover:underline cursor-pointer"
              >
                {lang === 'es' ? 'Mostrar todas' : 'Show all'}
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto pr-1 py-1 scrollbar-thin">
            <button
              type="button"
              onClick={() => setSelectedSection('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedSection === 'all'
                  ? 'bg-[#003B49] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80'
              }`}
            >
              {lang === 'es' ? `Todas las secciones (${allFaqs.length})` : `All sections (${allFaqs.length})`}
            </button>
            {FAQ_SECTIONS.map((sec) => {
              const isSelected = selectedSection === sec.id;
              const titleText = lang === 'es' ? sec.title.es : sec.title.en;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => setSelectedSection(sec.id)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#087E8B] text-white font-semibold shadow-xs'
                      : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${
                    isSelected ? 'bg-white text-[#087E8B]' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {sec.number}
                  </span>
                  <span className="truncate max-w-[200px] sm:max-w-none">{titleText}</span>
                  <span className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>
                    ({sec.count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contador de resultados activos */}
      {(searchQuery || selectedSection !== 'all') && (
        <div className="flex items-center justify-between text-xs text-slate-600 px-1 bg-slate-50 py-2.5 px-3 rounded-lg border border-slate-200">
          <span>
            {lang === 'es'
              ? `Mostrando ${filteredFaqs.length} pregunta(s) ${searchQuery ? `para "${searchQuery}"` : ''}`
              : `Showing ${filteredFaqs.length} question(s) ${searchQuery ? `for "${searchQuery}"` : ''}`}
          </span>
          <button
            type="button"
            onClick={handleClearFilters}
            className="text-[#087E8B] hover:underline font-semibold cursor-pointer"
          >
            {lang === 'es' ? 'Restablecer filtros' : 'Reset filters'}
          </button>
        </div>
      )}

      {/* Listado de Preguntas agrupadas por las 15 Secciones del Excel */}
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
        <div className="space-y-8">
          {groupedFaqs.map((group) => (
            <div
              key={group.sectionId}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden"
            >
              {/* Encabezado de la Sección */}
              <div className="bg-slate-50/90 px-5 sm:px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="px-2 py-0.5 rounded-md bg-[#003B49] text-white text-[11px] font-extrabold tracking-wider shrink-0">
                    {String(group.sectionNumber).padStart(2, '0')}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#003B49] truncate">
                    {group.sectionTitle}
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-200/80 text-slate-700 shrink-0">
                  {group.items.length} {group.items.length === 1 ? (lang === 'es' ? 'pregunta' : 'question') : (lang === 'es' ? 'preguntas' : 'questions')}
                </span>
              </div>

              {/* Lista de Acordeones de la Sección */}
              <div className="divide-y divide-slate-100 px-5 sm:px-6">
                {group.items.map((faq) => {
                  const isOpen = !!openFaqs[faq.id];
                  return (
                    <div key={faq.id} className="py-3.5">
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full text-left flex items-start justify-between gap-4 py-1 hover:text-[#087E8B] transition-colors cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087E8B]"
                        aria-expanded={isOpen}
                      >
                        <h4 className="text-sm sm:text-base font-bold text-[#003B49] group-hover:text-[#087E8B] leading-snug">
                          {faq.q}
                        </h4>
                        <span className="material-symbols-outlined text-slate-400 group-hover:text-[#087E8B] text-xl shrink-0 transition-transform duration-150 mt-0.5">
                          {isOpen ? 'expand_less' : 'expand_more'}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="pt-2.5 pb-2 space-y-3 animate-fadeIn">
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
            </div>
          ))}
        </div>
      )}

      {/* Botón Ver más para Warning Work In Progress (Ubicado ANTES del disclaimer) */}
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
