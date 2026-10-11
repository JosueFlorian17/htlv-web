"use client";

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';

function ProfesionalesContent() {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabFromUrl = searchParams.get('tab');

  const [activeTab, setActiveTab] = useState(tabFromUrl || 'recursos');

  useEffect(() => {
    if (tabFromUrl && ['recursos', 'webinars', 'cursos'].includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  const switchTab = (tabId) => {
    setActiveTab(tabId);
    router.push(`/profesionales?tab=${tabId}`, { scroll: false });
  };

  const clinicalGuides = [
    {
      title: lang === 'es' ? "Guía de Práctica Clínica: Diagnóstico y Manejo de HTLV-1" : "Clinical Practice Guideline: HTLV-1 Diagnosis & Management",
      institution: "IMTAvH - Universidad Peruana Cayetano Heredia (UPCH)",
      year: "2024",
      desc: lang === 'es'
        ? "Recomendaciones basadas en evidencia para tamizaje serológico, algoritmos de confirmación por Western Blot/PCR y criterios de derivación clínica."
        : "Evidence-based recommendations for serological screening, Western Blot/PCR confirmation algorithms, and clinical referral.",
      topics: ["Tamizaje", "Diagnóstico Diferencial", "Criterios Belem"]
    },
    {
      title: lang === 'es' ? "Consenso Internacional en Paraparesia Espástica Tropical (HAM/TSP)" : "International Consensus on Tropical Spastic Paraparesis (HAM/TSP)",
      institution: "Comité Científico RIII-HTLV & Consorcio Japón-UK",
      year: "2023",
      desc: lang === 'es'
        ? "Protocolo unificado para el monitoreo neurológico, escalas funcionales (EDSS modificado), biomarcadores en LCR y pulsos de corticoides."
        : "Unified protocol for neurological monitoring, expanded disability status scale, CSF biomarkers, and corticosteroid pulses.",
      topics: ["Neurología", "LCR", "Manejo Motor y Urológico"]
    },
    {
      title: lang === 'es' ? "Protocolo de Prevención de Transmisión Materno-Infantil" : "Mother-to-Child Transmission Prevention Protocol",
      institution: "Red RIII-HTLV & Sociedades de Infectología",
      year: "2024",
      desc: lang === 'es'
        ? "Estrategias de tamizaje prenatal en poblaciones de alta prevalencia, manejo del puerperio y pautas de alimentación alternativa para recién nacidos."
        : "Antenatal screening strategies in high-prevalence populations, puerperium management, and safe formula feeding.",
      topics: ["Perinatología", "Lactancia Segura", "Tamizaje Gestacional"]
    }
  ];

  const webinars = [
    {
      title: lang === 'es' ? "Actualización Global en Retrovirología: Desafíos en HTLV-1 y HTLV-2" : "Global Update on Retrovirology: Challenges in HTLV-1 & HTLV-2",
      speaker: "Dr. Eduardo Gotuzzo (UPCH) & Prof. Graham Taylor (Imperial College)",
      date: "Sesión Grabada",
      duration: "58 min",
      videoId: "n3GzS_WnQ0I",
      desc: lang === 'es'
        ? "Revisión epidemiológica mundial, nuevas herramientas de cuantificación de carga proviral y abordaje de las coinfecciones frecuentes."
        : "Global epidemiological review, proviral load quantification tools, and clinical management of frequent coinfections."
    }
  ];

  const courses = [
    {
      title: lang === 'es' ? "Curso Virtual: Diagnóstico y Abordaje Clínico Integral del HTLV" : "Virtual Course: Diagnosis and Clinical Management of HTLV",
      modality: lang === 'es' ? "Virtual Asincrónico • 20 horas académicas" : "Online Asynchronous • 20 credit hours",
      target: lang === 'es' ? "Médicos generales, infectólogos, neurólogos y obstetras" : "General practitioners, infectologists, neurologists, obstetricians",
      modules: [
        lang === 'es' ? "Módulo 1: Biología retroviral y epidemiología global" : "Module 1: Retroviral biology and global epidemiology",
        lang === 'es' ? "Módulo 2: Algoritmos de laboratorio (ELISA, WB, PCR cuantitativa)" : "Module 2: Laboratory algorithms (ELISA, WB, qPCR)",
        lang === 'es' ? "Módulo 3: Cuadros neurológicos: HAM/TSP y rehabilitación" : "Module 3: Neurological conditions: HAM/TSP & rehab",
        lang === 'es' ? "Módulo 4: Prevención de la transmisión vertical y lactancia" : "Module 4: Vertical transmission prevention & feeding"
      ]
    },
    {
      title: lang === 'es' ? "Taller de Estandarización Molecular y Cuantificación de Carga Proviral" : "Workshop: Molecular Standardization & Proviral Load Quantification",
      modality: lang === 'es' ? "Semipresencial • 15 horas de laboratorio" : "Hybrid • 15 lab hours",
      target: lang === 'es' ? "Biólogos moleculares, tecnólogos médicos y personal de laboratorio" : "Molecular biologists and clinical laboratory staff",
      modules: [
        lang === 'es' ? "Módulo 1: Extracción de ADN en muestras biológicas" : "Module 1: DNA extraction in biological samples",
        lang === 'es' ? "Módulo 2: Ensayos de PCR en tiempo real para HTLV-1 y 2" : "Module 2: Real-time PCR assays for HTLV-1/2",
        lang === 'es' ? "Módulo 3: Cuantificación relativa vs. absoluta y controles de calidad" : "Module 3: Quantification and quality control"
      ]
    }
  ];

  return (
    <main className="w-full bg-[#f8f9fb] min-h-[calc(100vh-80px)] py-8 md:py-12 text-[#191c1e] flex flex-col justify-between">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">
        
        {/* Cabecera con Pestañas Horizontales */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-8 border-b-2 border-[#003B49]/15">
          <div>
            <span className="text-[12px] font-black uppercase tracking-widest text-[#087E8B] block mb-1">
              {lang === 'es' ? 'Educación Médica & Guías' : 'Medical Education & Guidelines'}
            </span>
            <h1 className="text-[32px] sm:text-[42px] font-black text-[#003B49] tracking-tight leading-none">
              {lang === 'es' ? 'Profesionales de la Salud' : 'Health Professionals'}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'recursos', label: lang === 'es' ? 'Recursos clínicos' : 'Clinical resources', icon: 'menu_book' },
              { id: 'webinars', label: lang === 'es' ? 'Webinars' : 'Webinars', icon: 'video_library' },
              { id: 'cursos', label: lang === 'es' ? 'Cursos cortos' : 'Short courses', icon: 'school' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                className={`px-5 py-3 rounded-2xl text-[15px] font-extrabold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#003B49] text-white shadow-md'
                    : 'bg-white border-2 border-gray-200 text-[#003B49] hover:border-[#087E8B] hover:bg-white'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 1. RECURSOS CLÍNICOS */}
        {activeTab === 'recursos' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {clinicalGuides.map((guide, idx) => (
                <div key={idx} className="bg-white p-7 rounded-3xl border-2 border-gray-200 shadow-xs flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <span className="text-[12px] font-extrabold text-[#A10D3A] bg-[#A10D3A]/10 px-2.5 py-0.5 rounded-md inline-block">
                      {guide.year} • {guide.institution.split(' - ')[0]}
                    </span>
                    <h3 className="text-[20px] font-black text-[#003B49] leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-[15px] text-[#443333] leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => alert(`Descargando: ${guide.title}`)}
                      className="w-full bg-[#003B49] hover:bg-[#087E8B] text-white font-bold py-3 px-4 rounded-xl text-[14px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span className="material-symbols-outlined text-[18px]">download</span>
                      <span>{lang === 'es' ? 'Descargar Guía Oficial' : 'Download Guideline'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. WEBINARS */}
        {activeTab === 'webinars' && (
          <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
            {webinars.map((webinar, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border-2 border-gray-200 shadow-xs space-y-5">
                <div>
                  <span className="text-[12px] font-black uppercase tracking-wider text-[#A10D3A] block mb-1">
                    {webinar.date} • {webinar.duration}
                  </span>
                  <h3 className="text-[22px] font-black text-[#003B49]">
                    {webinar.title}
                  </h3>
                  <p className="text-[14px] font-bold text-[#087E8B] mt-1">
                    {webinar.speaker}
                  </p>
                  <p className="text-[15.5px] text-[#443333] mt-2 leading-relaxed">
                    {webinar.desc}
                  </p>
                </div>

                <div className="aspect-video w-full rounded-2xl overflow-hidden border-2 border-gray-200 bg-black">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${webinar.videoId}?rel=0`}
                    title={webinar.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. CURSOS CORTOS */}
        {activeTab === 'cursos' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border-2 border-gray-200 shadow-xs space-y-5 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="px-3 py-1 bg-[#087E8B]/10 text-[#087E8B] text-[12px] font-black uppercase tracking-wider rounded-md inline-block">
                      {course.modality}
                    </span>
                    <h3 className="text-[22px] font-black text-[#003B49] leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-[14.5px] text-gray-600">
                      <strong>{lang === 'es' ? 'Dirigido a:' : 'Audience:'}</strong> {course.target}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <span className="text-[12px] font-black uppercase tracking-wider text-[#003B49] block">
                        {lang === 'es' ? 'Módulos Temáticos:' : 'Syllabus:'}
                      </span>
                      {course.modules.map((m, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-2 text-[14px] text-[#332222]">
                          <span className="material-symbols-outlined text-[16px] text-[#E5A400]">check_circle</span>
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link
                      href="/contact"
                      className="w-full bg-[#E5A400] hover:bg-[#cca300] text-[#003B49] font-black py-3 px-5 rounded-xl text-[14px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>{lang === 'es' ? 'Solicitar Inscripción Institucional' : 'Request Enrollment'}</span>
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

export default function ProfesionalesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-20 text-center font-bold text-[#003B49]">Cargando...</div>}>
      <ProfesionalesContent />
    </Suspense>
  );
}
