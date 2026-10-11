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
    <main className="w-full bg-[#f8fafc] min-h-[calc(100vh-80px)] py-8 sm:py-12 text-slate-900 flex flex-col justify-between">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera con Pestañas Horizontales */}
        <div className="pb-6 mb-8 border-b-2 border-[#003B49]/15">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#003B49] tracking-tight">
            {activeTab === 'recursos' && (lang === 'es' ? 'Recursos Clínicos y Guías Diagnósticas' : 'Clinical Resources & Guidelines')}
            {activeTab === 'webinars' && (lang === 'es' ? 'Webinars y Conferencias Internacionales' : 'International Webinars & Conferences')}
            {activeTab === 'cursos' && (lang === 'es' ? 'Cursos Cortos y Capacitación Médica' : 'Short Courses & Medical Training')}
          </h1>
        </div>

        {/* 1. RECURSOS CLÍNICOS (Sin chips) */}
        {activeTab === 'recursos' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {clinicalGuides.map((guide, idx) => (
                <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-[#A10D3A]">
                      {guide.year} • {guide.institution.split(' - ')[0]}
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold text-[#003B49] leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>
                  <div>
                    <Link
                      href="/contact"
                      className="w-full bg-[#003B49] hover:bg-[#087E8B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A400] text-white font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span className="material-symbols-outlined text-base">download</span>
                      <span>{lang === 'es' ? 'Descargar Guía Oficial' : 'Download Guideline'}</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. WEBINARS (Sin chips) */}
        {activeTab === 'webinars' && (
          <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
            {webinars.map((webinar, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-1">
                    {webinar.date} • {webinar.duration}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                    {webinar.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#087E8B] mt-1">
                    {webinar.speaker}
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                    {webinar.desc}
                  </p>
                </div>

                <div className="aspect-video w-full rounded-lg overflow-hidden border border-slate-200 bg-slate-950">
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

        {/* 3. CURSOS CORTOS (Sin chips) */}
        {activeTab === 'cursos' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course, idx) => (
                <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#087E8B]">
                      {course.modality}
                    </p>
                    <h3 className="text-xl font-bold text-[#003B49] leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      <strong>{lang === 'es' ? 'Dirigido a:' : 'Audience:'}</strong> {course.target}
                    </p>

                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#003B49]">
                        {lang === 'es' ? 'Módulos Temáticos:' : 'Syllabus:'}
                      </p>
                      {course.modules.map((m, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="material-symbols-outlined text-base text-[#E5A400]">check_circle</span>
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link
                      href="/contact"
                      className="w-full bg-[#E5A400] hover:bg-[#cca300] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003B49] text-[#003B49] font-bold py-2.5 px-5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span>{lang === 'es' ? 'Solicitar Inscripción Institucional' : 'Request Enrollment'}</span>
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
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
