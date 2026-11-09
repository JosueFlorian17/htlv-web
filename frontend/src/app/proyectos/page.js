"use client";

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';
import { ESTUDIOS_DATA } from '../../data/estudiosData';
import WorkInProgressView from '../../components/common/WorkInProgressView';

function ProyectosContent() {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabFromUrl = searchParams.get('tab');

  const [activeTab, setActiveTab] = useState(tabFromUrl || 'investigacion');
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [lineaFilter, setLineaFilter] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (tabFromUrl && ['investigacion', 'avances', 'tesistas'].includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  const switchTab = (tabId) => {
    setActiveTab(tabId);
    router.push(`/proyectos?tab=${tabId}`, { scroll: false });
  };

  // Separar proyectos de investigación y tesis
  const proyectosData = ESTUDIOS_DATA.filter((proj) => !proj.isTesis);
  const tesisData = ESTUDIOS_DATA.filter((proj) => proj.isTesis);

  // Filtrado exclusivo de proyectos de investigación
  const filteredStudies = proyectosData.filter((proj) => {
    // Filtro por línea
    if (lineaFilter === 'clinica' && !proj.linea_es.toLowerCase().includes('clínica')) return false;
    if (lineaFilter === 'salud_publica' && !proj.linea_es.toLowerCase().includes('salud pública')) return false;
    if (lineaFilter === 'ciencias_basicas' && !proj.linea_es.toLowerCase().includes('ciencias básicas')) return false;

    // Filtro por buscador
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = (proj.title_es + ' ' + proj.title_en).toLowerCase().includes(q);
      const matchInv = (proj.investigador_es + ' ' + proj.financiador).toLowerCase().includes(q);
      const matchLinea = (proj.linea_es + ' ' + proj.linea_en).toLowerCase().includes(q);
      if (!matchTitle && !matchInv && !matchLinea) return false;
    }

    return true;
  });

  const resultsList = [
    {
      title: lang === 'es' ? "Estandarización del Algoritmo Diagnóstico Molecular Inter-Laboratorios" : "Inter-Laboratory Molecular Diagnostic Algorithm Standardization",
      achievement: lang === 'es' ? "99.4% de concordancia diagnóstica" : "99.4% diagnostic concordance",
      desc: lang === 'es'
        ? "Se logró validar una prueba unificada de PCR cuantitativa en tiempo real entre los laboratorios de UPCH, Imperial College y Fiocruz, reduciendo los tiempos de confirmación de 3 semanas a 48 horas."
        : "Unified quantitative real-time PCR assays validated across UPCH, Imperial College, and Fiocruz, cutting confirmation times from 3 weeks to 48 hours.",
      impact: lang === 'es' ? "Impacto Clínico Directo" : "Direct Clinical Impact"
    },
    {
      title: lang === 'es' ? "Identificación de Biomarcadores de Progresión Rápida en HAM/TSP" : "Identification of Rapid Progression Biomarkers in HAM/TSP",
      achievement: lang === 'es' ? "Panel de Quimiocinas en LCR" : "CSF Chemokine Panel",
      desc: lang === 'es'
        ? "Descubrimiento de niveles elevados de CXCL10 en líquido cefalorraquídeo como predictor de deterioro motor precoz, permitiendo intervenir terapéuticamente antes de la pérdida de la marcha."
        : "Discovery of elevated CXCL10 in cerebrospinal fluid as an early predictor of motor decline, allowing earlier clinical intervention.",
      impact: lang === 'es' ? "Avance Terapéutico" : "Therapeutic Advance"
    }
  ];

  const ongoingTheses = [
    {
      title: lang === 'es' ? "Caracterización molecular de subtipos de HTLV-1 y carga proviral en pacientes con paraparesia espástica tropical en Perú" : "Molecular characterization of HTLV-1 subtypes and proviral load in TSP/HAM patients in Peru",
      author: lang === "es" ? "Lic. Andrea Morales V." : "B.S. Andrea Morales V.",
      degree: lang === 'es' ? "Tesis de Maestría en Ciencias Biomédicas" : "MSc Thesis in Biomedical Sciences",
      institution: "Universidad Peruana Cayetano Heredia (UPCH)",
      advisors: lang === "es" ? "Dra. Elsa González / Dr. Eduardo Gotuzzo" : "Dr. Elsa González / Dr. Eduardo Gotuzzo",
      status: lang === 'es' ? "En ejecución (2025-2026)" : "In progress (2025-2026)",
      summary: lang === 'es' ? "Evaluación de la variabilidad genética del gen tax y su correlación con los niveles de provirus en células mononucleares de sangre periférica." : "Evaluation of tax gene genetic variability and its correlation with proviral levels in PBMC samples."
    },
    {
      title: lang === 'es' ? "Factores pronósticos de respuesta inmunológica y evolución clínica en coinfección HTLV-1 y tuberculosis pulmonar en la Amazonía peruana" : "Prognostic factors of immune response and clinical outcomes in HTLV-1 and pulmonary TB coinfection in the Peruvian Amazon",
      author: "Méd. Carlos R. Sánchez",
      degree: lang === 'es' ? "Tesis de Doctorado en Salud Pública" : "PhD Thesis in Public Health",
      institution: "Universidad Nacional de Ucayali (UNU) / UPCH",
      advisors: "Dr. Renzo Calderón",
      status: lang === 'es' ? "Fase de recolección de datos" : "Data collection phase",
      summary: lang === 'es' ? "Estudio observacional prospectivo multicéntrico orientado a modelar la supervivencia y tasas de recaída de tuberculosis en portadores del virus." : "Multicenter prospective cohort study modeling survival and tuberculosis recurrence rates in virus carriers."
    },
    {
      title: lang === 'es' ? "Estandarización de un ensayo molecular multiplex para la discriminación rápida entre HTLV-1 y HTLV-2 en muestras clínicas" : "Standardization of a multiplex molecular assay for rapid differentiation between HTLV-1 and HTLV-2 in clinical specimens",
      author: "Bach. Diego A. Mendoza",
      degree: lang === 'es' ? "Tesis de Licenciatura en Biología" : "BSc Thesis in Biology",
      institution: "Universidad Nacional de San Antonio Abad del Cusco (UNSAAC)",
      advisors: "Equipo Laboratorio de Retrovirología",
      status: lang === 'es' ? "Fase analítica y validación" : "Analytical phase and validation",
      summary: lang === 'es' ? "Optimización de cebadores específicos para la región LTR con validación diagnóstica frente a secuenciación Sanger." : "Optimization of LTR region-specific primers with diagnostic validation against Sanger sequencing."
    }
  ];

  const thesisOpportunities = [
    {
      title: lang === 'es' ? "Pasantías de Investigación para Tesistas de Pregrado y Posgrado" : "Research Internships for Undergraduate and Graduate Students",
      area: "Virología Molecular / Epidemiología Clínica",
      location: "IMTAvH - UPCH (Lima, Perú)",
      requirements: lang === 'es' ? "Estudiantes de Medicina, Biología, Tecnología Médica o Salud Pública" : "Students of Medicine, Biology, Medical Technology or Public Health",
      desc: lang === 'es'
        ? "Oportunidad de incorporarse a proyectos activos de la red con acceso a biobanco, secuenciación y asesoría directa de los investigadores principales."
        : "Join active network projects with access to biorepository data, sequencing, and direct mentorship from principal investigators."
    },
    {
      title: lang === 'es' ? "Estancias Cortas en Laboratorios de la Red Internacional" : "Short-term Stays at International Network Nodes",
      area: "Bioinformática y Genómica Retrovirológica",
      location: "Imperial College London / Institut Pasteur",
      requirements: lang === 'es' ? "Tesistas de maestría o doctorado con proyecto aprobado en HTLV" : "Master's or PhD candidates with approved HTLV thesis projects",
      desc: lang === 'es'
        ? "Movilidad académica apoyada por convenios marco interinstitucionales para entrenamiento avanzado en técnicas de transcriptómica y filogenia."
        : "Academic mobility supported by inter-institutional agreements for training in transcriptomics and viral phylogeny."
    }
  ];

  return (
    <main className="w-full bg-[#f8fafc] min-h-[calc(100vh-80px)] py-8 sm:py-12 text-slate-900 flex flex-col justify-between">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="pb-6 mb-8 border-b-2 border-[#003B49]/15">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#003B49] tracking-tight">
            {activeTab === 'investigacion' && (lang === 'es' ? 'Proyectos de investigación' : 'Research Projects')}
            {activeTab === 'avances' && (lang === 'es' ? 'Resultados y avances' : 'Results and breakthroughs')}
            {activeTab === 'tesistas' && (lang === 'es' ? 'Oportunidades' : 'Opportunities')}
          </h1>
        </div>

        {/* 1. PROYECTOS DE INVESTIGACIÓN (Alimentado desde la hoja oficial de Estudios) */}
        {activeTab === 'investigacion' && (
          <div className="space-y-6 animate-fadeIn">

            {/* Barra de Filtros y Búsqueda */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              
              {/* Filtro por línea temática */}
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { id: 'todos', label_es: `Todos (${proyectosData.length})`, label_en: `All (${proyectosData.length})` },
                  { id: 'clinica', label_es: 'Clínica', label_en: 'Clinical' },
                  { id: 'salud_publica', label_es: 'Salud Pública', label_en: 'Public Health' },
                  { id: 'ciencias_basicas', label_es: 'Ciencias Básicas', label_en: 'Basic Sciences' }
                ].map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setLineaFilter(f.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      lineaFilter === f.id
                        ? 'bg-[#003B49] text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {lang === 'es' ? f.label_es : f.label_en}
                  </button>
                ))}
              </div>

              {/* Buscador de estudios */}
              <div className="relative min-w-[220px]">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                  search
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={lang === 'es' ? 'Buscar estudio o investigador...' : 'Search study or researcher...'}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#087E8B] focus:border-transparent"
                />
              </div>

            </div>

            {/* Grid de Tarjetas de Estudios */}
            {filteredStudies.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <span className="material-symbols-outlined text-4xl text-slate-400">
                  search_off
                </span>
                <p className="text-sm font-semibold text-slate-700">
                  {lang === 'es' ? 'No se encontraron estudios con los filtros seleccionados' : 'No studies found with the selected filters'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStudies.map((proj) => (
                  <div
                    key={proj.id}
                    className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#087E8B]/40 transition-all flex flex-col justify-between space-y-5"
                  >
                    <div className="space-y-3.5">
                      {/* 1. Encabezado: Estado + Línea temática / Tesis */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        {/* Estado solo texto de color sin fondo ni redondeado */}
                        <span
                          className={`text-xs font-extrabold uppercase tracking-wider ${
                            proj.estado_es === 'Completada'
                              ? 'text-emerald-600'
                              : proj.estado_es === 'No iniciada'
                              ? 'text-slate-400'
                              : 'text-[#0284C7]'
                          }`}
                        >
                          {lang === 'es' ? proj.estado_es : proj.estado_en}
                        </span>

                        {/* Línea temática o Badge Tesis */}
                        <div className="flex items-center gap-1.5">
                          {proj.isTesis && (
                            <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-[#E5A400]/15 text-[#996500] border border-[#E5A400]/40">
                              {lang === 'es' ? 'Tesis' : 'Thesis'}
                            </span>
                          )}
                          <span className="text-[11px] font-semibold text-slate-500">
                            {lang === 'es' ? proj.linea_es : proj.linea_en}
                          </span>
                        </div>
                      </div>

                      {/* 2. Título del Estudio */}
                      <h3 className="text-base sm:text-lg font-bold text-[#003B49] leading-snug">
                        {lang === 'es' ? proj.title_es : proj.title_en}
                      </h3>

                      {/* 3. Investigadores */}
                      <div className="space-y-1.5 text-xs text-slate-700 bg-slate-50/90 p-3.5 rounded-xl border border-slate-200/80">
                        {proj.isTesis ? (
                          <>
                            {proj.asesor_es && (
                              <p className="leading-relaxed">
                                <strong className="font-semibold text-slate-900">
                                  {lang === 'es' ? 'Asesor:' : 'Advisor:'}
                                </strong>{' '}
                                {lang === 'es' ? proj.asesor_es : proj.asesor_en}
                              </p>
                            )}
                            {proj.estudiantes && (
                              <p className="leading-relaxed">
                                <strong className="font-semibold text-slate-900">
                                  {lang === 'es' ? 'Tesistas / Estudiantes:' : 'Students:'}
                                </strong>{' '}
                                {proj.estudiantes}
                              </p>
                            )}
                          </>
                        ) : (
                          proj.investigador_es && (
                            <p className="leading-relaxed">
                              <strong className="font-semibold text-slate-900">
                                {lang === 'es' ? 'Investigadores a cargo:' : 'Lead researchers:'}
                              </strong>{' '}
                              {lang === 'es' ? proj.investigador_es : proj.investigador_en}
                            </p>
                          )
                        )}

                        {proj.financiador && (
                          <p className="leading-relaxed text-[#087E8B]">
                            <strong className="font-semibold text-slate-900">
                              {lang === 'es' ? 'Financiador:' : 'Funder:'}
                            </strong>{' '}
                            {proj.financiador}
                          </p>
                        )}
                      </div>

                      {/* 4. Botón Ver más que abre ventana "estamos trabajando" */}
                      <div className="pt-1">
                        <button
                          type="button"
                          onClick={() => setSelectedStudy(proj)}
                          className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold text-[#003B49] bg-slate-100 hover:bg-[#003B49] hover:text-white transition-all border border-slate-200/90 cursor-pointer shadow-2xs group"
                        >
                          <span className="material-symbols-outlined text-[16px] text-[#087E8B] group-hover:text-[#E5A400] transition-colors">
                            info
                          </span>
                          <span>{lang === 'es' ? 'Ver más' : 'See more'}</span>
                        </button>
                      </div>
                    </div>

                    {/* 5. Abajo: Consultar estado del proyecto */}
                    <div className="pt-3 border-t border-slate-200">
                      <Link
                        href={`/contact?subject=consulta-proyecto&proyecto=${encodeURIComponent(proj.title_es)}`}
                        className="text-[#003B49] font-semibold hover:text-[#087E8B] flex items-center justify-between text-xs sm:text-sm transition-colors group"
                      >
                        <span>{lang === 'es' ? 'Consultar estado del proyecto' : 'Check project status'}</span>
                        <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Modal Divertido / "Estamos trabajando" */}
            {selectedStudy && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-xs animate-fadeIn"
                onClick={() => setSelectedStudy(null)}
              >
                <div
                  className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 border border-slate-200 relative animate-scaleUp text-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Botón cerrar */}
                  <button
                    type="button"
                    onClick={() => setSelectedStudy(null)}
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
                        <circle cx="60" cy="65" r="32" fill="#DC2626" stroke="#991B1B" strokeWidth="3" />

                        {/* Espículas glicoproteicas alrededor del virus */}
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

                  {/* Ficha resumida del estudio seleccionado */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs space-y-1.5">
                    <p className="font-bold text-[#003B49] text-sm leading-snug">
                      {lang === 'es' ? selectedStudy.title_es : selectedStudy.title_en}
                    </p>
                    <div className="flex items-center gap-2 pt-1 text-[11px]">
                      <span className="font-semibold text-slate-700">
                        {lang === 'es' ? 'Estado:' : 'Status:'} <strong className={`font-black ${
                          selectedStudy.estado_es === 'Completada'
                            ? 'text-emerald-600'
                            : selectedStudy.estado_es === 'No iniciada'
                            ? 'text-slate-400'
                            : 'text-[#0284C7]'
                        }`}>
                          {lang === 'es' ? selectedStudy.estado_es : selectedStudy.estado_en}
                        </strong>
                      </span>
                      <span>•</span>
                      <span className="text-[#087E8B] font-semibold">
                        {lang === 'es' ? selectedStudy.linea_es : selectedStudy.linea_en}
                      </span>
                    </div>
                  </div>

                  {/* Botón de acción: únicamente Cerrar */}
                  <div className="pt-2 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setSelectedStudy(null)}
                      className="w-full sm:w-auto px-7 py-2.5 rounded-lg text-xs font-bold bg-[#003B49] hover:bg-[#087E8B] text-white transition-colors cursor-pointer shadow-xs"
                    >
                      {lang === 'es' ? 'Cerrar' : 'Close'}
                    </button>
                  </div>

                </div>
              </div>
            )}

          </div>
        )}

        {/* 2. RESULTADOS Y AVANCES */}
        {activeTab === 'avances' && (
          <div className="py-6 animate-fadeIn">
            <WorkInProgressView />
          </div>
        )}

        {/* 3. OPORTUNIDADES PARA TESISTAS (Con las tesis oficiales en curso de la Red) */}
        {activeTab === 'tesistas' && (
          <div className="space-y-10 animate-fadeIn">
            
            {/* Tesis en Curso oficiales */}
            <div className="space-y-4">
              <div className="border-b border-slate-200 pb-2">
                <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                  {lang === 'es' ? 'Tesis en Curso de la Red' : 'Active Network Theses'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  {lang === 'es' 
                    ? 'Investigaciones y tesis desarrolladas por tesistas en los nodos de la Red HTLV.' 
                    : 'Theses developed by students and researchers across HTLV Network nodes.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tesisData.map((tesis) => (
                  <div key={tesis.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        {/* Estado solo texto de color sin fondo */}
                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#0284C7]">
                          {lang === 'es' ? tesis.estado_es : tesis.estado_en}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          {lang === 'es' ? tesis.linea_es : tesis.linea_en}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[#003B49] leading-snug">
                        {lang === 'es' ? tesis.title_es : tesis.title_en}
                      </h3>

                      <div className="text-xs text-slate-700 space-y-1.5 border-y border-slate-100 py-2.5">
                        <p>
                          <strong className="font-semibold text-slate-900">{lang === 'es' ? 'Tesistas / Estudiantes:' : 'Students / Researchers:'}</strong>{' '}
                          <span className="text-slate-800">{tesis.estudiantes}</span>
                        </p>
                        <p>
                          <strong className="font-semibold text-slate-900">{lang === 'es' ? 'Asesoría:' : 'Advisor:'}</strong>{' '}
                          <span className="text-slate-800">{lang === 'es' ? tesis.asesor_es : tesis.asesor_en}</span>
                        </p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setSelectedStudy(tesis)}
                        className="text-xs font-semibold text-[#003B49] hover:text-[#087E8B] flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <span>{lang === 'es' ? 'Consultar estado de la tesis' : 'Check thesis status'}</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Convocatorias */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="border-b border-slate-200 pb-2">
                <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                  {lang === 'es' ? 'Convocatorias' : 'Open Calls'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  {lang === 'es'
                    ? 'Posiciones disponibles para incorporarse a proyectos y estancias en el extranjero.'
                    : 'Open positions to join active projects and international mobility visits.'}
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200 text-center py-12 space-y-3">
                <span className="material-symbols-outlined text-slate-400 text-4xl">event_busy</span>
                <p className="text-sm sm:text-base text-slate-600 font-medium">
                  {lang === 'es'
                    ? 'Actualmente no hay convocatorias abiertas. Las nuevas convocatorias se publicarán oportunamente en esta sección.'
                    : 'There are currently no open calls. Future opportunities will be announced in this section.'}
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </main>
  );
}

export default function ProyectosPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">Cargando proyectos...</div>}>
      <ProyectosContent />
    </Suspense>
  );
}
