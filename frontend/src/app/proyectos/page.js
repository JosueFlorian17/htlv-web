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
    <main className="w-full bg-[#f8f9fb] min-h-[calc(100vh-80px)] py-8 md:py-12 text-[#191c1e] flex flex-col justify-between">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">
        
        <div className="pb-6 mb-8 border-b-2 border-[#003B49]/15">
          <span className="text-[12.5px] font-black uppercase tracking-widest text-[#087E8B] block mb-1">
            {lang === 'es' ? 'Ciencia & Innovación' : 'Science & Innovation'}
          </span>
          <h1 className="text-[32px] sm:text-[40px] font-black text-[#003B49] tracking-tight leading-none">
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
                <div key={idx} className="bg-white p-7 rounded-3xl border-2 border-gray-200 shadow-xs flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 bg-[#A10D3A]/10 text-[#A10D3A] text-[12px] font-black rounded-md">
                        {proj.status}
                      </span>
                      <span className="text-[12px] font-bold text-gray-500">
                        {proj.funding}
                      </span>
                    </div>
                    <h3 className="text-[19px] font-black text-[#003B49] leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-[13.5px] font-bold text-[#087E8B]">
                      {proj.node}
                    </p>
                    <p className="text-[15px] text-[#443333] leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <Link
                      href="/contact"
                      className="text-[#003B49] font-black hover:text-[#087E8B] flex items-center gap-1 text-[13.5px]"
                    >
                      <span>{lang === 'es' ? 'Consultar detalles del protocolo' : 'Inquire protocol details'}</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. RESULTADOS Y AVANCES */}
        {activeTab === 'avances' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resultsList.map((res, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border-2 border-gray-200 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-[#E5A400] text-[#003B49] text-[12px] font-black rounded-md uppercase">
                      {res.impact}
                    </span>
                    <span className="text-[13px] font-black text-[#087E8B]">
                      {res.achievement}
                    </span>
                  </div>
                  <h3 className="text-[21px] font-black text-[#003B49] leading-snug">
                    {res.title}
                  </h3>
                  <p className="text-[15.5px] text-[#443333] leading-relaxed">
                    {res.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. OPORTUNIDADES PARA TESISTAS */}
        {activeTab === 'tesistas' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {thesisOpportunities.map((opp, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border-2 border-gray-200 shadow-xs space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="px-3 py-1 bg-[#003B49] text-white text-[12px] font-black rounded-md uppercase">
                      {opp.area}
                    </span>
                    <h3 className="text-[21px] font-black text-[#003B49] leading-snug">
                      {opp.title}
                    </h3>
                    <p className="text-[13.5px] font-bold text-[#A10D3A]">
                      {lang === 'es' ? 'Sede:' : 'Location:'} {opp.location}
                    </p>
                    <p className="text-[14px] text-gray-600 font-medium">
                      <strong>{lang === 'es' ? 'Perfil:' : 'Profile:'}</strong> {opp.requirements}
                    </p>
                    <p className="text-[15px] text-[#443333] leading-relaxed">
                      {opp.desc}
                    </p>
                  </div>

                  <div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#087E8B] hover:bg-[#0aa0b0] text-white font-bold py-3 px-5 rounded-xl text-[14px] transition-all shadow-sm"
                    >
                      <span>{lang === 'es' ? 'Postular / Consultar Convocatoria' : 'Apply / Inquire Call'}</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
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
