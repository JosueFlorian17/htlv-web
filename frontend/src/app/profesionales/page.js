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
      year: "2026",
      desc: lang === 'es'
        ? "Recomendaciones basadas en evidencia para tamizaje serológico, algoritmos de confirmación por Western Blot/PCR y criterios de derivación clínica."
        : "Evidence-based recommendations for serological screening, Western Blot/PCR confirmation algorithms, and clinical referral.",
      topics: ["Tamizaje", "Diagnóstico Diferencial", "Criterios Belem"]
    },
    {
      title: lang === 'es' ? "Consenso Internacional en Paraparesia Espástica Tropical (HAM/TSP)" : "International Consensus on Tropical Spastic Paraparesis (HAM/TSP)",
      institution: "Comité Científico RIII-HTLV & Consorcio Japón-UK",
      year: "2026",
      desc: lang === 'es'
        ? "Protocolo unificado para el monitoreo neurológico, escalas funcionales (EDSS modificado), biomarcadores en LCR y pulsos de corticoides."
        : "Unified protocol for neurological monitoring, expanded disability status scale, CSF biomarkers, and corticosteroid pulses.",
      topics: ["Neurología", "LCR", "Manejo Motor y Urológico"]
    },
    {
      title: lang === 'es' ? "Protocolo de Prevención de Transmisión Materno-Infantil" : "Mother-to-Child Transmission Prevention Protocol",
      institution: "Red RIII-HTLV & Sociedades de Infectología",
      year: "2027",
      desc: lang === 'es'
        ? "Estrategias de tamizaje prenatal en poblaciones de alta prevalencia, manejo del puerperio y pautas de alimentación alternativa para recién nacidos."
        : "Antenatal screening strategies in high-prevalence populations, puerperium management, and safe formula feeding.",
      topics: ["Perinatología", "Lactancia Segura", "Tamizaje Gestacional"]
    }
  ];

  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    if (selectedWebinar || selectedCourse) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedWebinar, selectedCourse]);

  const webinars = [
    {
      id: 1,
      series: "WEBINAR SERIE 2026",
      title: lang === 'es'
        ? "Actualización Global en Retrovirología: Retos Clínicos y Diagnósticos en HTLV-1 y HTLV-2"
        : "Global Retrovirology Update: Clinical & Diagnostic Challenges in HTLV-1 & HTLV-2",
      speaker: "Dr. Eduardo Gotuzzo",
      speakerRole: lang === 'es'
        ? "Presidente Honorario RIII-HTLV • Profesor Emérito UPCH • Investigador Distinguido IMTAvH (Perú)"
        : "Honorary President RIII-HTLV • Emeritus Professor UPCH • Distinguished Investigator IMTAvH (Peru)",
      speakerImage: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
      bannerImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
      dateFormatted: "28/10/26",
      day: "28",
      month: lang === 'es' ? "Octubre" : "October",
      time: lang === 'es' ? "12:00 PM (Perú/Col) • 17:00 UTC" : "12:00 PM EST • 17:00 UTC",
      language: lang === 'es' ? "Español (Interpretación EN)" : "Spanish (EN Interpretation)",
      duration: "58 min",
      videoId: "1NqgEEReKhs",
      desc: lang === 'es'
        ? "Revisión epidemiológica mundial del HTLV-1 y HTLV-2, avances en la comprensión del reservorio viral, cuantificación de carga proviral y abordaje integral de coinfecciones en zonas endémicas."
        : "Global epidemiological review of HTLV-1/2, viral reservoir biology, proviral load quantification, and clinical management of coinfections in endemic zones."
    },
    {
      id: 2,
      series: "WEBINAR SERIE 2026",
      title: lang === 'es'
        ? "Manejo Clínico y Nuevos Biomarcadores en Paraparesia Espástica Tropical (HAM/TSP)"
        : "Clinical Management & Novel Biomarkers in Tropical Spastic Paraparesis (HAM/TSP)",
      speaker: "Prof. Graham P. Taylor",
      speakerRole: lang === 'es'
        ? "Vicepresidente RIII-HTLV • Director National Centre for Human Retrovirology • Imperial College London (UK)"
        : "Vice President RIII-HTLV • Head National Centre for Human Retrovirology • Imperial College London (UK)",
      speakerImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      bannerImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80",
      dateFormatted: "18/11/26",
      day: "18",
      month: lang === 'es' ? "Noviembre" : "November",
      time: lang === 'es' ? "1:00 PM (UK) • 8:00 AM (Perú) • 13:00 UTC" : "1:00 PM UK • 8:00 AM Peru • 13:00 UTC",
      language: lang === 'es' ? "Inglés (Subtítulos en español)" : "English (Spanish Subtitles)",
      duration: "64 min",
      videoId: "rpmI1nhMOak",
      desc: lang === 'es'
        ? "Monitoreo longitudinal de pacientes con HAM/TSP, criterios neurofisiológicos, escalas de discapacidad motora y evaluación de biomarcadores inflamatorios en líquido cefalorraquídeo."
        : "Longitudinal monitoring of HAM/TSP patients, neurophysiological criteria, motor disability scales, and CSF inflammatory biomarkers."
    },
    {
      id: 3,
      series: "WEBINAR SERIE 2026",
      title: lang === 'es'
        ? "Estandarización de PCR Proviral y Diagnóstico Oportuno de la Transmisión Vertical"
        : "Proviral PCR Standardization & Timely Diagnosis of Mother-to-Child Transmission",
      speaker: "Dra. Elsa González",
      speakerRole: lang === 'es'
        ? "Coordinadora Científica RIII-HTLV • Jefa de Laboratorio de Retrovirología IMTAvH - UPCH (Perú)"
        : "Scientific Coordinator RIII-HTLV • Head of Retrovirology Laboratory IMTAvH - UPCH (Peru)",
      speakerImage: "https://images.unsplash.com/photo-1594824813580-c081e7d8d697?auto=format&fit=crop&w=400&q=80",
      bannerImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
      dateFormatted: "09/12/26",
      day: "09",
      month: lang === 'es' ? "Diciembre" : "December",
      time: lang === 'es' ? "11:00 AM (Perú / Col) • 16:00 UTC" : "11:00 AM Peru / Col • 16:00 UTC",
      language: lang === 'es' ? "Español" : "Spanish",
      duration: "52 min",
      videoId: "p-xTMvuecnM",
      desc: lang === 'es'
        ? "Protocolos armonizados para la cuantificación de copias provirales por célula, algoritmos de confirmación serológica y tamizaje gestacional para la prevención de la transmisión por lactancia."
        : "Harmonized protocols for proviral copies quantification per cell, confirmatory algorithms, and gestational screening to stop transmission via nursing."
    }
  ];

  const courses = [
    {
      id: 1,
      title: lang === 'es'
        ? "Curso Corto: Diagnóstico y Abordaje Clínico Integral del HTLV"
        : "Short Course: Comprehensive Clinical Diagnosis & Management of HTLV",
      shortTitle: lang === 'es' ? "Abordaje Clínico Integral del HTLV" : "Comprehensive HTLV Clinical Management",
      modality: lang === 'es' ? "100% Virtual • Asincrónico • 20 horas académicas" : "100% Online • Asynchronous • 20 credit hours",
      target: lang === 'es' ? "Médicos generales, infectólogos, neurólogos y obstetras" : "General practitioners, infectologists, neurologists, and obstetricians",
      openDate: lang === 'es' ? "15 de Noviembre de 2026" : "November 15, 2026",
      language: "ESP",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
      coordinator: {
        name: "Dra. Elsa González",
        role: lang === 'es' ? "Coordinadora Científica RIII-HTLV • IMTAvH - UPCH" : "Scientific Coordinator RIII-HTLV • IMTAvH - UPCH",
        image: "https://images.unsplash.com/photo-1594824813580-c081e7d8d697?auto=format&fit=crop&w=400&q=80"
      },
      intro: lang === 'es'
        ? "La Red Internacional de Investigación e Innovación en HTLV (RIII-HTLV), con el objetivo de promover el desarrollo de capacidades en materia de investigación y diagnóstico clínico de la región en diferentes niveles, desarrollará su curso corto sobre Abordaje Clínico Integral del HTLV."
        : "The International Research and Innovation Network on HTLV (RIII-HTLV), aimed at strengthening clinical and diagnostic capacity across the region, presents its short course on Comprehensive HTLV Management.",
      description: lang === 'es'
        ? "Formación especializada en bases biológicas, protocolos de tamizaje serológico, confirmación diagnóstica y manejo interdisciplinario de patologías asociadas al HTLV-1 y HTLV-2."
        : "Specialized training in biological fundamentals, serological screening protocols, diagnostic confirmation, and interdisciplinary management of HTLV-1/2 associated diseases.",
      bullets: [
        lang === 'es' ? "100% Virtual y flexible." : "100% Online and flexible.",
        lang === 'es' ? "El presente curso brindará acceso a un aula virtual con 4 plenarias con especialistas y material complementario de lectura." : "Provides access to a virtual classroom with 4 master plenaries and comprehensive reading materials.",
        lang === 'es' ? "El participante podrá llevar la cursada al ritmo de su preferencia." : "Participants can complete modules at their own pace.",
        lang === 'es' ? "El participante tomará un breve cuestionario virtual para conseguir la constancia de certificación a nombre de la Red RIII-HTLV." : "Participants will complete a short online assessment to earn an official certificate issued by RIII-HTLV.",
        lang === 'es' ? "Entrega de constancias: Al culminar los módulos y aprobar la evaluación." : "Certificate issuance: Upon module completion and evaluation approval."
      ]
    },
    {
      id: 2,
      title: lang === 'es'
        ? "Taller Avanzado: Estandarización Molecular y Cuantificación de Carga Proviral"
        : "Advanced Workshop: Molecular Standardization & Proviral Load Quantification",
      shortTitle: lang === 'es' ? "Estandarización Molecular y Carga Proviral" : "Molecular Standardization & Proviral Load",
      modality: lang === 'es' ? "Semipresencial • 15 horas de laboratorio y análisis" : "Hybrid • 15 lab & data analysis hours",
      target: lang === 'es' ? "Biólogos moleculares, tecnólogos médicos y personal de laboratorio" : "Molecular biologists, laboratory technologists, and researchers",
      openDate: lang === 'es' ? "1 de Diciembre de 2026" : "December 1, 2026",
      language: "ESP / ENG",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
      coordinator: {
        name: "Prof. Graham P. Taylor",
        role: lang === 'es' ? "Vicepresidente RIII-HTLV • Imperial College London" : "Vice President RIII-HTLV • Imperial College London",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
      },
      intro: lang === 'es'
        ? "La Red RIII-HTLV, con el objetivo de elevar los estándares de aseguramiento de calidad analítica en retrovirología humana, impartirá su taller especializado en estandarización de PCR en tiempo real para HTLV-1/2."
        : "The RIII-HTLV Network, aiming to elevate analytical quality standards in human retrovirology, hosts its specialized hands-on workshop on real-time PCR standardization.",
      description: lang === 'es'
        ? "Capacitación práctica en extracción de ácidos nucleicos, diseño y validación de partidores para qPCR proviral, cálculo de copias por célula y control de calidad analítica inter-laboratorios."
        : "Hands-on training in nucleic acid extraction, qPCR assay design and validation for proviral load, cell copy calculation, and analytical quality control.",
      bullets: [
        lang === 'es' ? "Modalidad semipresencial con sesiones prácticas de laboratorio y bioinformática." : "Hybrid modality with laboratory sessions and bioinformatic analysis.",
        lang === 'es' ? "Acceso a protocolos operativos estandarizados (POEs) y paneles de control internacional." : "Access to standard operating procedures (SOPs) and international reference panels.",
        lang === 'es' ? "Análisis de curvas de calibración y armonización de límites de detección." : "Analysis of calibration curves and detection limit harmonization.",
        lang === 'es' ? "Constancia de aprobación emitida por el Comité Asesor Técnico (CAT) de la Red." : "Accredited certificate issued by the Technical Advisory Committee (CAT).",
        lang === 'es' ? "Entrega de constancias: Última semana del taller." : "Certificate issuance: Final week of the workshop."
      ]
    }
  ];

  return (
    <main className="w-full bg-[#f8fafc] min-h-[calc(100vh-80px)] py-8 sm:py-12 text-slate-900 flex flex-col justify-between">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera con Pestañas Horizontales */}
        <div className="pb-6 mb-8 border-b-2 border-[#003B49]/15">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#003B49] tracking-tight">
            {activeTab === 'recursos' && (lang === 'es' ? 'Guías Clínicas Internacionales y Diagnósticas' : 'International Clinical Guidelines & Diagnostics')}
            {activeTab === 'webinars' && (lang === 'es' ? 'Webinars y Conferencias Internacionales' : 'International Webinars & Conferences')}
            {activeTab === 'cursos' && (lang === 'es' ? 'Cursos y Capacitación Médica' : 'Courses & Medical Training')}
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
                      className="w-full bg-[#003B49] hover:bg-[#087E8B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A400] text-white font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors flex items-center justify-center cursor-pointer shadow-sm"
                    >
                      <span>{lang === 'es' ? 'Descargar Guía Oficial' : 'Download Guideline'}</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. WEBINARS (Estructura y estilo fiel a la referencia - Imágenes 1 y 2) */}
        {activeTab === 'webinars' && (
          <div className="space-y-6 animate-fadeIn max-w-5xl mx-auto">
            
            {/* Introducción sutil */}
            <div className="text-center max-w-2xl mx-auto space-y-1.5 pb-2">
              <span className="text-xs font-bold tracking-widest text-[#087E8B] uppercase">
                {lang === 'es' ? 'Ciclo de Conferencias Científicas' : 'Scientific Conference Series'}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                {lang === 'es' ? 'Webinars Internacionales RIII-HTLV' : 'RIII-HTLV International Webinars'}
              </h2>
              <p className="text-sm text-slate-600">
                {lang === 'es'
                  ? 'Sesiones de actualización científica con expertos globales en retrovirología humana, diagnóstico molecular y manejo clínico.'
                  : 'Scientific update sessions with global leaders in human retrovirology, diagnostics, and patient care.'}
              </p>
            </div>

            {/* Lista de Tarjetas Horizontales (Fiel a la referencia - Imagen 1) */}
            <div className="space-y-6">
              {webinars.map((webinar) => (
                <div
                  key={webinar.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row items-stretch hover:shadow-md transition-shadow group"
                >
                  {/* LADO IZQUIERDO: Flyer / Afiche gráfico del Webinar */}
                  <div className="md:w-72 lg:w-80 shrink-0 relative bg-[#002538] text-white p-5 flex flex-col justify-between overflow-hidden min-h-[220px]">
                    {/* Imagen de fondo desde internet con gradiente sobrio */}
                    <img
                      src={webinar.bannerImage}
                      alt={webinar.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#002538]/90 via-[#002538]/95 to-[#001D2C]"></div>

                    {/* Cabecera del flyer: Calendario */}
                    <div className="relative z-10 flex items-start justify-end">
                      {/* Cuadro de Fecha (Calendario como en la referencia) */}
                      <div className="border border-white/30 rounded-lg px-2.5 py-1 text-center bg-white/10 backdrop-blur-xs min-w-[52px]">
                        <span className="block text-xl font-black leading-none text-white">{webinar.day}</span>
                        <span className="block text-[10px] font-bold uppercase text-white/90 leading-tight mt-0.5">{webinar.month}</span>
                      </div>
                    </div>

                    {/* Título en el flyer */}
                    <div className="relative z-10 my-3">
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-snug line-clamp-3">
                        {webinar.title}
                      </h4>
                    </div>

                    {/* Pie del flyer: Horario y Speaker */}
                    <div className="relative z-10 pt-3 border-t border-white/15 space-y-2.5">
                      <div className="flex items-center gap-1.5 text-[11px] text-white/85">
                        <span className="font-semibold text-[#E5A400]">{lang === 'es' ? 'Horario:' : 'Time:'}</span>
                        <span className="truncate">{webinar.time}</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <img
                          src={webinar.speakerImage}
                          alt={webinar.speaker}
                          className="w-9 h-9 rounded-full object-cover border-2 border-white/60 shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-white truncate">{webinar.speaker}</p>
                          <p className="text-[10px] text-white/70 truncate">{webinar.speakerRole.split('•')[0]}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* LADO DERECHO: Título, A cargo de, Fecha y Botón Más Información */}
                  <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between space-y-5 bg-white">
                    <div className="space-y-3.5">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#003B49] leading-snug">
                        {webinar.title}
                      </h3>

                      <div className="space-y-1">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                          {lang === 'es' ? 'A cargo de:' : 'Presented by:'}
                        </p>
                        <p className="text-base sm:text-lg font-bold text-[#087E8B]">
                          {webinar.speaker}
                        </p>
                        <p className="text-xs text-slate-500">
                          {webinar.speakerRole}
                        </p>
                      </div>

                      <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                        {webinar.desc}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                      <div className="text-sm font-semibold text-slate-700">
                        <span className="text-slate-500 font-normal">{lang === 'es' ? 'Fecha: ' : 'Date: '}</span>
                        <span>{webinar.dateFormatted}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => { setSelectedWebinar(webinar); setShowVideoPlayer(false); }}
                        className="bg-[#E5A400] hover:bg-[#d09400] text-slate-900 font-bold px-6 py-2.5 rounded-lg text-sm transition-colors shadow-xs flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003B49]"
                      >
                        <span>{lang === 'es' ? 'Más información' : 'More information'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* MODAL DETALLADO DEL WEBINAR (Fiel a la referencia - Imagen 2) */}
            {selectedWebinar && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-xs animate-fadeIn overflow-y-auto"
                onClick={() => setSelectedWebinar(null)}
              >
                <div
                  className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 my-8 border border-slate-100"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Encabezado del Modal con título completo y botón de cerrar */}
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                    <h3 className="text-base sm:text-lg font-bold text-[#003B49] leading-snug">
                      {selectedWebinar.title}
                    </h3>
                    <button
                      type="button"
                      onClick={() => setSelectedWebinar(null)}
                      className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors font-bold text-lg leading-none cursor-pointer shrink-0"
                      aria-label="Cerrar modal"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Imagen Central / Afiche destacado o Reproductor de Video */}
                  {showVideoPlayer ? (
                    <div className="aspect-video w-full rounded-xl overflow-hidden bg-black shadow-inner">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube-nocookie.com/embed/${selectedWebinar.videoId}?autoplay=1&rel=0`}
                        title={selectedWebinar.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-16/9 shadow-sm">
                      <img
                        src={selectedWebinar.bannerImage}
                        alt={selectedWebinar.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent flex items-end p-5">
                        <div className="text-white space-y-1">
                          <p className="text-xs sm:text-sm font-semibold text-white/95">
                            {selectedWebinar.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bloque del Disertante / Speaker (Imagen 2) */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <img
                      src={selectedWebinar.speakerImage}
                      alt={selectedWebinar.speaker}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-[#087E8B] shrink-0"
                    />
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-[#003B49]">
                        {selectedWebinar.speaker}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                        {selectedWebinar.speakerRole}
                      </p>
                    </div>
                  </div>

                  {/* Fila de Metadatos: Idioma, Fecha, Horario (Limpio sin iconos) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">
                        {lang === 'es' ? 'Idioma' : 'Language'}
                      </span>
                      <span className="text-xs font-semibold text-slate-800">
                        {selectedWebinar.language}
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">
                        {lang === 'es' ? 'Fecha' : 'Date'}
                      </span>
                      <span className="text-xs font-semibold text-slate-800">
                        {selectedWebinar.dateFormatted}
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">
                        {lang === 'es' ? 'Horario' : 'Time'}
                      </span>
                      <span className="text-xs font-semibold text-slate-800">
                        {selectedWebinar.time.split('•')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Botones de Acción (Imagen 2) */}
                  <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setShowVideoPlayer(!showVideoPlayer)}
                      className="w-full sm:w-auto bg-[#1A4B82] hover:bg-[#133760] text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center cursor-pointer shadow-sm"
                    >
                      <span>
                        {showVideoPlayer
                          ? (lang === 'es' ? 'Ocultar grabación' : 'Hide recording')
                          : (lang === 'es' ? 'Ver grabación (Audio Original)' : 'See recording (Original Audio)')}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => { setSelectedWebinar(null); setShowVideoPlayer(false); }}
                      className="w-full sm:w-auto bg-[#E5A400] hover:bg-[#d09400] text-slate-900 font-bold px-6 py-2.5 rounded-lg text-sm transition-colors cursor-pointer shadow-xs"
                    >
                      {lang === 'es' ? 'Cerrar' : 'Close'}
                    </button>
                  </div>

                </div>
              </div>
            )}

          </div>
        )}

        {/* 3. CURSOS CORTOS (Estructura con imagen, botón "Ver detalles" y Modal fiel a la referencia) */}
        {activeTab === 'cursos' && (
          <div className="space-y-6 animate-fadeIn max-w-5xl mx-auto">
            
            {/* Introducción sutil */}
            <div className="text-center max-w-2xl mx-auto space-y-1.5 pb-2">
              <span className="text-xs font-bold tracking-widest text-[#087E8B] uppercase">
                {lang === 'es' ? 'Capacitación Médica Continua' : 'Continuous Medical Training'}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                {lang === 'es' ? 'Cursos y Talleres Especializados' : 'Courses & Specialized Workshops'}
              </h2>
              <p className="text-sm text-slate-600">
                {lang === 'es'
                  ? 'Programas formativos de alto nivel diseñados por la Red RIII-HTLV para fortalecer competencias diagnósticas y clínicas en sistemas de salud.'
                  : 'High-level training curricula developed by RIII-HTLV to enhance diagnostic and clinical competencies across health systems.'}
              </p>
            </div>

            {/* Grid de Cursos con imagen de internet */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
                >
                  <div>
                    {/* Imagen de cabecera desde internet */}
                    <div className="relative aspect-16/9 w-full bg-slate-900 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
                      
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#003B49]/90 text-white backdrop-blur-xs border border-white/20 shadow-xs">
                          {course.modality.split('•')[0]}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[10px] font-extrabold tracking-wider text-[#E5A400] uppercase block">
                          CURSO CORTO RIII-HTLV
                        </span>
                        <h4 className="text-base font-bold text-white leading-tight drop-shadow-sm">
                          {course.shortTitle}
                        </h4>
                      </div>
                    </div>

                    {/* Contenido de la tarjeta */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-lg sm:text-xl font-bold text-[#003B49] leading-snug">
                        {course.title}
                      </h3>

                      <div className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                        <p>
                          <strong className="text-slate-800">{lang === 'es' ? 'Dirigido a: ' : 'Audience: '}</strong>
                          {course.target}
                        </p>
                        
                        <div className="text-[#003B49] font-medium pt-0.5">
                          <span className="text-slate-500 font-normal">{lang === 'es' ? 'Fecha de apertura: ' : 'Opening date: '}</span>
                          <span className="font-semibold text-slate-800">{course.openDate}</span>
                        </div>
                      </div>

                      <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {course.description}
                      </p>

                      {/* Coordinador */}
                      <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                        <img
                          src={course.coordinator.image}
                          alt={course.coordinator.name}
                          className="w-10 h-10 rounded-full object-cover border-2 border-[#087E8B] shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-[#003B49] truncate">{course.coordinator.name}</p>
                          <p className="text-[11px] text-slate-500 truncate">{course.coordinator.role.split('•')[0]}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Botón Ver detalles */}
                  <div className="p-6 pt-0">
                    <button
                      type="button"
                      onClick={() => setSelectedCourse(course)}
                      className="w-full bg-[#E5A400] hover:bg-[#d09400] text-slate-900 font-bold py-2.5 px-4 rounded-lg text-sm transition-colors flex items-center justify-center cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003B49]"
                    >
                      <span>{lang === 'es' ? 'Ver detalles' : 'See details'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* MODAL DETALLADO DEL CURSO CORTO (Compacto y sin scroll) */}
            {selectedCourse && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-xs animate-fadeIn"
                onClick={() => setSelectedCourse(null)}
              >
                <div
                  className="bg-white rounded-2xl max-w-3xl w-full p-5 sm:p-6 shadow-2xl space-y-4 border border-slate-100"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Encabezado del Modal */}
                  <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] font-bold text-[#087E8B] uppercase tracking-wider block">
                        {lang === 'es' ? 'Curso Corto RIII-HTLV' : 'RIII-HTLV Short Course'}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#003B49] leading-snug">
                        {selectedCourse.shortTitle}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedCourse(null)}
                      className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors font-bold text-lg leading-none cursor-pointer shrink-0"
                      aria-label="Cerrar modal"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Estructura compacta en 2 columnas para no provocar scroll */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                    {/* Columna Izquierda: Afiche compacto con coordinador */}
                    <div className="md:col-span-5 flex flex-col justify-between bg-gradient-to-br from-[#002538] via-[#003B49] to-[#0A5265] rounded-xl overflow-hidden p-4 text-white relative min-h-[210px]">
                      <img
                        src={selectedCourse.image}
                        alt={selectedCourse.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#002538]/95 via-[#002538]/80 to-transparent"></div>

                      <div className="relative z-10 space-y-1.5">
                        <span className="inline-block bg-[#E5A400] text-slate-900 font-extrabold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                          {selectedCourse.modality.split('•')[0]}
                        </span>
                        <p className="text-xs text-white/95 font-medium leading-snug">
                          {lang === 'es' ? '¡Lleva el curso 100% virtual y a tu ritmo!' : 'Take the course 100% online at your own pace!'}
                        </p>
                      </div>

                      <div className="relative z-10 pt-3 border-t border-white/20 flex items-center gap-2.5">
                        <img
                          src={selectedCourse.coordinator.image}
                          alt={selectedCourse.coordinator.name}
                          className="w-10 h-10 rounded-full object-cover border-2 border-[#E5A400] shrink-0"
                        />
                        <div className="min-w-0">
                          <span className="text-[9px] font-bold text-white/70 uppercase block">
                            {lang === 'es' ? 'Coordinación' : 'Coordinator'}
                          </span>
                          <p className="text-xs font-bold text-white truncate">{selectedCourse.coordinator.name}</p>
                          <p className="text-[10px] text-white/80 truncate">{selectedCourse.coordinator.role.split('•')[0]}</p>
                        </div>
                      </div>
                    </div>

                    {/* Columna Derecha: Descripción, Puntos clave y Metadatos */}
                    <div className="md:col-span-7 flex flex-col justify-between space-y-3">
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {selectedCourse.description}
                      </p>

                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {selectedCourse.bullets.slice(0, 3).map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#087E8B] font-bold shrink-0 mt-0.5">•</span>
                            <span className="leading-snug">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="grid grid-cols-2 gap-2.5 pt-1">
                        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                          <span className="text-[9px] font-bold text-slate-400 uppercase block">
                            {lang === 'es' ? 'Idioma' : 'Language'}
                          </span>
                          <span className="text-xs font-semibold text-slate-800">
                            {selectedCourse.language}
                          </span>
                        </div>

                        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                          <span className="text-[9px] font-bold text-slate-400 uppercase block">
                            {lang === 'es' ? 'Fecha de Apertura' : 'Opening Date'}
                          </span>
                          <span className="text-xs font-semibold text-slate-800">
                            {selectedCourse.openDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Botones de Acción */}
                  <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-3 border-t border-slate-100">
                    <Link
                      href="/contact"
                      className="w-full sm:w-auto bg-[#1A4B82] hover:bg-[#133760] text-white font-bold px-6 py-2 rounded-lg text-xs sm:text-sm transition-colors flex items-center justify-center cursor-pointer shadow-sm text-center"
                    >
                      <span>{lang === 'es' ? 'Registrarse' : 'Register'}</span>
                    </Link>

                    <button
                      type="button"
                      onClick={() => setSelectedCourse(null)}
                      className="w-full sm:w-auto bg-[#E5A400] hover:bg-[#d09400] text-slate-900 font-bold px-6 py-2 rounded-lg text-xs sm:text-sm transition-colors cursor-pointer shadow-xs"
                    >
                      {lang === 'es' ? 'Cerrar' : 'Close'}
                    </button>
                  </div>

                </div>
              </div>
            )}

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
