"use client";

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';

function ProyectosContent() {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabFromUrl = searchParams.get('tab');

  const [activeTab, setActiveTab] = useState(tabFromUrl || 'investigacion');

  useEffect(() => {
    if (tabFromUrl && ['investigacion', 'avances', 'tesistas'].includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  const switchTab = (tabId) => {
    setActiveTab(tabId);
    router.push(`/proyectos?tab=${tabId}`, { scroll: false });
  };

  const researchProjects = [
    {
      title: lang === 'es' ? "Vigilancia Molecular y Filogenia de Cepas de HTLV-1/2 en América del Sur" : "Molecular Surveillance & Phylogeny of HTLV-1/2 Strains in South America",
      node: "IMTAvH - UPCH (Perú) / Imperial College London (UK)",
      status: lang === 'es' ? "Activo (2024-2027)" : "Active (2024-2027)",
      desc: lang === 'es'
        ? "Secuenciación genómica profunda para mapear la diversidad de subtipos de HTLV-1a y su correlación con la tasa de progresión a patología neurológica en poblaciones andinas y amazónicas."
        : "Deep genomic sequencing to map HTLV-1a subtype diversity and its correlation with neurological progression in Andean and Amazonian populations.",
      funding: "Grant Internacional Concursable"
    },
    {
      title: lang === 'es' ? "Ensayo Clínico Piloto en Terapias Dirigidas para HAM/TSP" : "Pilot Clinical Trial on Targeted Therapies for HAM/TSP",
      node: "St. Marianna University (Japón) / UPCH (Perú)",
      status: "Fase II",
      desc: lang === 'es'
        ? "Evaluación de la seguridad y respuesta de biomarcadores en pacientes con paraparesia espástica tratados con nuevas moléculas inmunomoduladoras y seguimiento motor cuantitativo."
        : "Safety and biomarker response assessment in tropical spastic paraparesis patients treated with novel immunomodulatory molecules.",
      funding: "Consorcio Japón - América Latina"
    },
    {
      title: lang === 'es' ? "Interacción Inmunológica y Coinfección: HTLV-1, Tuberculosis y Estrongiloidiasis" : "Immunological Interaction & Coinfection: HTLV-1, TB & Strongyloidiasis",
      node: "Fiocruz (Brasil) / UPCH (Perú)",
      status: lang === 'es' ? "Activo" : "Active",
      desc: lang === 'es'
        ? "Estudio de las alteraciones en la respuesta inmune celular en portadores de HTLV-1 que desarrollan tuberculosis activa o estrongiloidiasis diseminada en focos endémicos."
        : "Investigation of immune profile alterations in HTLV-1 carriers presenting with active tuberculosis or disseminated strongyloidiasis.",
      funding: "Cooperación Sur-Sur"
    }
  ];

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
      title: lang === 'es' ? "Pasantías de Investigación para Tesistas de Pregrado y Posgrado" : "Research Internships for Undergraduate & Graduate Students",
      area: "Virología Molecular / Epidemiología Clínica",
      location: "IMTAvH - UPCH (Lima, Perú)",
      requirements: lang === 'es' ? "Estudiantes de Medicina, Biología, Tecnología Médica o Salud Pública" : "Students of Medicine, Biology, Medical Technology or Public Health",
      desc: lang === 'es'
        ? "Oportunidad de incorporarse a proyectos activos de la red con acceso a biobanco, secuenciación y asesoría directa de los investigadores principales."
        : "Join active network projects with access to biorepository data, sequencing, and direct mentorship from principal investigators."
    },
    {
      title: lang === 'es' ? "Estancias Cortas en Laboratorios de la Red Internacional" : "Short-term Stays at International Network Nodes",
      area: "Bioinformática & Genómica Retrovirológica",
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
            {activeTab === 'investigacion' && (lang === 'es' ? 'Proyectos de Investigación Científica' : 'Scientific Research Projects')}
            {activeTab === 'avances' && (lang === 'es' ? 'Resultados, Hitos y Avances Clínicos' : 'Results, Milestones & Breakthroughs')}
            {activeTab === 'tesistas' && (lang === 'es' ? 'Oportunidades para Tesistas e Investigadores' : 'Opportunities for Researchers')}
          </h1>
        </div>

        {/* 1. PROYECTOS DE INVESTIGACIÓN */}
        {activeTab === 'investigacion' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {researchProjects.map((proj, idx) => (
                <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 text-xs font-medium text-slate-500">
                      <span>{proj.status}</span>
                      <span>{proj.funding}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#003B49] leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#087E8B]">
                      {proj.node}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <Link
                      href="/contact"
                      className="text-[#003B49] font-semibold hover:text-[#087E8B] flex items-center gap-1 text-sm transition-colors"
                    >
                      <span>{lang === 'es' ? 'Consultar detalles del protocolo' : 'Inquire protocol details'}</span>
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. RESULTADOS Y AVANCES (Sin chips) */}
        {activeTab === 'avances' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resultsList.map((res, idx) => (
                <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between gap-2 text-xs font-semibold text-slate-500">
                    <span>{res.impact}</span>
                    <span className="text-[#087E8B]">{res.achievement}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#003B49] leading-snug">
                    {res.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {res.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. TESIS Y OPORTUNIDADES PARA TESISTAS */}
        {activeTab === 'tesistas' && (
          <div className="mt-8 space-y-12 animate-fadeIn">
            
            {/* SECCIÓN: TESIS EN CURSO */}
            <div className="space-y-6">
              <div className="border-b-2 border-[#003B49]/15 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#087E8B] block">
                  {lang === 'es' ? 'Formación de Talento Científico' : 'Scientific Talent Development'}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#003B49] mt-0.5">
                  {lang === 'es' ? 'Tesis en Curso' : 'Theses in Progress'}
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  {lang === 'es'
                    ? 'Proyectos de investigación y desarrollo de grado de tesistas vinculados a los nodos de la Red HTLV.'
                    : 'Degree research and development projects of students affiliated with HTLV Network nodes.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ongoingTheses.map((thesis, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E5A400]/15 text-slate-900 border border-[#E5A400]/40">
                          {thesis.status}
                        </span>
                        <span className="text-xs font-semibold text-[#087E8B]">
                          {thesis.degree.split(' ')[2] || 'Tesis'}
                        </span>
                      </div>
                      
                      <h3 className="text-base font-bold text-[#003B49] leading-snug">
                        {thesis.title}
                      </h3>

                      <div className="pt-1 space-y-1 text-xs">
                        <p className="font-bold text-slate-800">
                          {thesis.author}
                        </p>
                        <p className="text-slate-500">
                          {thesis.institution}
                        </p>
                        <p className="text-slate-600 italic">
                          <span className="font-semibold">{lang === 'es' ? 'Asesoría:' : 'Advisors:'}</span> {thesis.advisors}
                        </p>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        {thesis.summary}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <Link
                        href="/contact"
                        className="text-xs font-bold text-[#087E8B] hover:text-[#003B49] flex items-center gap-1 transition-colors"
                      >
                        <span>{lang === 'es' ? 'Consultar sobre esta tesis' : 'Inquire about thesis'}</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECCIÓN: OPORTUNIDADES Y CONVOCATORIAS */}
            <div className="space-y-6 pt-4">
              <div className="border-b-2 border-[#003B49]/15 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#087E8B] block">
                  {lang === 'es' ? 'Movilidad y Convocatorias' : 'Mobility & Calls'}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#003B49] mt-0.5">
                  {lang === 'es' ? 'Oportunidades para Tesistas e Investigadores' : 'Opportunities for Researchers'}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {thesisOpportunities.map((opp, idx) => (
                  <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {opp.area}
                      </p>
                      <h3 className="text-xl font-bold text-[#003B49] leading-snug">
                        {opp.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#A10D3A]">
                        {lang === 'es' ? 'Sede:' : 'Location:'} {opp.location}
                      </p>
                      <p className="text-sm font-bold text-slate-900 leading-snug">
                        {lang === 'es' ? 'Perfil: ' : 'Profile: '}{opp.requirements}
                      </p>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {opp.desc}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#087E8B] hover:bg-[#066772] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A400] text-white font-semibold py-2.5 px-5 rounded-lg text-sm transition-colors shadow-sm"
                      >
                        <span>{lang === 'es' ? 'Postular / Consultar Convocatoria' : 'Apply / Inquire Call'}</span>
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                ))}
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
    <Suspense fallback={<div className="min-h-screen py-20 text-center font-bold text-[#003B49]">Cargando...</div>}>
      <ProyectosContent />
    </Suspense>
  );
}
