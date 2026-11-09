"use client";

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';
import WorkInProgressView from '../../components/common/WorkInProgressView';

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
      title: lang === 'es' ? "Guía de Práctica Clínica: Diagnóstico y Manejo de HTLV-1" : "Clinical Practice Guideline: HTLV-1 Diagnosis and Management",
      institution: "IMTAvH - Universidad Peruana Cayetano Heredia (UPCH)",
      year: "2026",
      desc: lang === 'es'
        ? "Recomendaciones basadas en evidencia para tamizaje serológico, algoritmos de confirmación por Western Blot/PCR y criterios de derivación clínica."
        : "Evidence-based recommendations for serological screening, Western Blot/PCR confirmation algorithms, and clinical referral.",
      topics: ["Tamizaje", "Diagnóstico Diferencial", "Criterios Belem"]
    },
    {
      title: lang === 'es' ? "Consenso Internacional en Paraparesia Espástica Tropical (HAM/TSP)" : "International Consensus on Tropical Spastic Paraparesis (HAM/TSP)",
      institution: "Comité Científico Red HTLV y Consorcio Japón-UK",
      year: "2026",
      desc: lang === 'es'
        ? "Protocolo unificado para el monitoreo neurológico, escalas funcionales (EDSS modificado), biomarcadores en LCR y pulsos de corticoides."
        : "Unified protocol for neurological monitoring, expanded disability status scale, CSF biomarkers, and corticosteroid pulses.",
      topics: ["Neurología", "LCR", "Manejo Motor y Urológico"]
    },
    {
      title: lang === 'es' ? "Protocolo de Prevención de Transmisión Materno-Infantil" : "Mother-to-Child Transmission Prevention Protocol",
      institution: "Red HTLV y Sociedades de Infectología",
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
      title: lang === 'es'
        ? "Día Mundial del HTLV 2026: Rompamos el silencio sobre el HTLV"
        : "World HTLV Day 2026: Break the Silence on HTLV",
      bannerImage: lang === 'es' ? "/webinars/webinar_portada_es.jpg" : "/webinars/webinar_portada_en.jpg",
      flyerImage: lang === 'es' ? "/webinars/webinar_preview_es.jpg" : "/webinars/webinar_preview_en.jpg",
      dateBadge: lang === 'es' ? "10 NOVIEMBRE" : "10 NOVEMBER",
      day: "10",
      month: lang === 'es' ? "Noviembre" : "November",
      time: lang === 'es' ? "7:00–8:00 p. m. (hora de Perú)" : "7:00–8:00 PM (Peru Time)",
      bottomTag: lang === 'es' ? "Foro Virtual" : "Virtual Forum",
      speakerLabel: lang === 'es' ? "A CARGO DE:" : "PRESENTED BY:",
      speakersText: lang === 'es'
        ? "Dra. Sofía Cuba Fuentes, el Dr. Carlos Benites Villafane, la Dra. Mónica Alonso, el Dr. Yoshihisa Yamano, la Dra. Carolina Rosadas, el Dr. Joseph Zunt, el Dr. Eduardo Gotuzzo y la Dra. Patricia J. García."
        : "Dr. Sofía Cuba Fuentes, Dr. Carlos Benites Villafane, Dr. Mónica Alonso, Dr. Yoshihisa Yamano, Dr. Carolina Rosadas, Dr. Joseph Zunt, Dr. Eduardo Gotuzzo and Dr. Patricia J. García.",
      descBrief: lang === 'es'
        ? "Un encuentro para generar conciencia sobre el HTLV y compartir perspectivas sobre los desafíos en prevención, diagnóstico y atención en el marco del Día Mundial del HTLV 2026."
        : "A gathering to raise awareness about HTLV and share perspectives on challenges in prevention, diagnosis, and care on World HTLV Day 2026.",
      descEvent: lang === 'es'
        ? "En el marco del Día Mundial del HTLV, este webinar reunirá a autoridades del Ministerio de Salud del Perú, representantes de la Organización Panamericana de la Salud (OPS) e investigadores nacionales e internacionales de Perú, Japón, Reino Unido y Estados Unidos. El encuentro busca generar conciencia sobre las infecciones por HTLV-1, visibilizar los desafíos que representan para la salud pública y promover el diálogo y la colaboración internacional para fortalecer su prevención, diagnóstico, tratamiento y atención."
        : "In the framework of World HTLV Day, this webinar will bring together authorities from the Ministry of Health of Peru, representatives of the Pan American Health Organization (PAHO), and national and international researchers from Peru, Japan, the United Kingdom, and the United States. The gathering seeks to raise awareness about HTLV-1 infections, highlight public health challenges, and promote international dialogue and collaboration.",
      dateFormatted: "10/11/2026",
      registrationUrl: "https://upch.zoom.us/webinar/register/WN_Qs8xIus6TuC4ULuvKpNlmg",
      language: lang === 'es' ? "Inglés (con traducción en vivo al español)" : "English (with live Spanish interpretation)",
      recordingStatus: lang === 'es' ? "No disponible aún" : "Not available yet",
      speakersList: [
        {
          name: "Dra. Sofía Cuba Fuentes",
          role: lang === 'es' ? "Viceministra de Salud Pública, Ministerio de Salud del Perú" : "Vice Minister of Public Health, Ministry of Health of Peru"
        },
        {
          name: "Dr. Carlos Benites Villafane",
          role: lang === 'es' ? "Director Ejecutivo de la Dirección de Prevención y Control de VIH/SIDA, ITS y Hepatitis, Ministerio de Salud del Perú" : "Executive Director of HIV/AIDS, STI and Hepatitis Prevention and Control, Ministry of Health of Peru"
        },
        {
          name: "Dra. Mónica Alonso",
          role: lang === 'es' ? "Jefa de la Unidad de VIH/ITS, Tuberculosis, Hepatitis Virales y Malaria, OPS/PAHO" : "Head of HIV/STI, TB, Viral Hepatitis and Malaria Unit, PAHO/WHO"
        },
        {
          name: "Dr. Yoshihisa Yamano",
          role: "St. Marianna University School of Medicine (Japón)"
        },
        {
          name: "Dra. Carolina Rosadas",
          role: "Imperial College London (Reino Unido)"
        },
        {
          name: "Dr. Joseph Zunt",
          role: "University of Washington (Estados Unidos)"
        },
        {
          name: "Dr. Eduardo Gotuzzo",
          role: "Universidad Peruana Cayetano Heredia (Perú)"
        },
        {
          name: "Dra. Patricia J. García",
          role: "Universidad Peruana Cayetano Heredia (Perú)"
        }
      ]
    }
  ];

  const courses = [
    {
      id: 1,
      title: lang === 'es'
        ? "Curso Corto: Diagnóstico y Abordaje Clínico Integral del HTLV"
        : "Short Course: Comprehensive Clinical Diagnosis and Management of HTLV",
      shortTitle: lang === 'es' ? "Abordaje Clínico Integral del HTLV" : "Comprehensive HTLV Clinical Management",
      modality: lang === 'es' ? "100% Virtual • Asincrónico • 20 horas académicas" : "100% Online • Asynchronous • 20 credit hours",
      target: lang === 'es' ? "Médicos generales, infectólogos, neurólogos y obstetras" : "General practitioners, infectologists, neurologists, and obstetricians",
      openDate: lang === 'es' ? "15 de Noviembre de 2026" : "November 15, 2026",
      language: "ESP",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
      coordinator: {
        name: lang === "es" ? "Dra. Elsa González" : "Dr. Elsa González",
        role: lang === 'es' ? "Coordinadora Científica Red HTLV • IMTAvH - UPCH" : "Scientific Coordinator Red HTLV • IMTAvH - UPCH",
        image: "https://images.unsplash.com/photo-1594824813580-c081e7d8d697?auto=format&fit=crop&w=400&q=80"
      },
      intro: lang === 'es'
        ? "La Red Internacional de Investigación e Innovación en HTLV (Red HTLV), con el objetivo de promover el desarrollo de capacidades en materia de investigación y diagnóstico clínico de la región en diferentes niveles, desarrollará su curso corto sobre Abordaje Clínico Integral del HTLV."
        : "The International Research and Innovation Network on HTLV (Red HTLV), aimed at strengthening clinical and diagnostic capacity across the region, presents its short course on Comprehensive HTLV Management.",
      description: lang === 'es'
        ? "Formación especializada en bases biológicas, protocolos de tamizaje serológico, confirmación diagnóstica y manejo interdisciplinario de patologías asociadas al HTLV-1 y HTLV-2."
        : "Specialized training in biological fundamentals, serological screening protocols, diagnostic confirmation, and interdisciplinary management of HTLV-1/2 associated diseases.",
      bullets: [
        lang === 'es' ? "100% Virtual y flexible." : "100% Online and flexible.",
        lang === 'es' ? "El presente curso brindará acceso a un aula virtual con 4 plenarias con especialistas y material complementario de lectura." : "Provides access to a virtual classroom with 4 master plenaries and comprehensive reading materials.",
        lang === 'es' ? "El participante podrá llevar la cursada al ritmo de su preferencia." : "Participants can complete modules at their own pace.",
        lang === 'es' ? "El participante tomará un breve cuestionario virtual para conseguir la constancia de certificación a nombre de la Red HTLV." : "Participants will complete a short online assessment to earn an official certificate issued by Red HTLV.",
        lang === 'es' ? "Entrega de constancias: Al culminar los módulos y aprobar la evaluación." : "Certificate issuance: Upon module completion and evaluation approval."
      ]
    },
    {
      id: 2,
      title: lang === 'es'
        ? "Taller Avanzado: Estandarización Molecular y Cuantificación de Carga Proviral"
        : "Advanced Workshop: Molecular Standardization and Proviral Load Quantification",
      shortTitle: lang === 'es' ? "Estandarización Molecular y Carga Proviral" : "Molecular Standardization and Proviral Load",
      modality: lang === 'es' ? "Semipresencial • 15 horas de laboratorio y análisis" : "Hybrid • 15 lab and data analysis hours",
      target: lang === 'es' ? "Biólogos moleculares, tecnólogos médicos y personal de laboratorio" : "Molecular biologists, laboratory technologists, and researchers",
      openDate: lang === 'es' ? "1 de Diciembre de 2026" : "December 1, 2026",
      language: "ESP / ENG",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=80",
      coordinator: {
        name: "Prof. Graham P. Taylor",
        role: lang === 'es' ? "Vicepresidente Red HTLV • Imperial College London" : "Vice President Red HTLV • Imperial College London",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
      },
      intro: lang === 'es'
        ? "La Red HTLV, con el objetivo de elevar los estándares de aseguramiento de calidad analítica en retrovirología humana, impartirá su taller especializado en estandarización de PCR en tiempo real para HTLV-1/2."
        : "The HTLV Network, aiming to elevate analytical quality standards in human retrovirology, hosts its specialized hands-on workshop on real-time PCR standardization.",
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
            {activeTab === 'recursos' && (lang === 'es' ? 'Guías clínicas' : 'Clinical Guidelines')}
            {activeTab === 'webinars' && (lang === 'es' ? 'Webinars' : 'Webinars')}
            {activeTab === 'cursos' && (lang === 'es' ? 'Cursos' : 'Courses')}
          </h1>
        </div>

        {/* 1. GUÍAS CLÍNICAS */}
        {activeTab === 'recursos' && (
          <div className="py-6 animate-fadeIn">
            <WorkInProgressView />
          </div>
        )}

        {/* 2. WEBINARS */}
        {activeTab === 'webinars' && (
          <div className="space-y-6 animate-fadeIn max-w-5xl mx-auto">
            
            {/* Introducción de la sección: solo Webinars y texto petite solicitado */}
            <div className="text-center max-w-3xl mx-auto space-y-2 pb-2">
              <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                {lang === 'es' ? 'Webinars' : 'Webinars'}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {lang === 'es'
                  ? 'Webinars para informar y compartir conocimientos y experiencias sobre el HTLV, con la participación de especialistas, profesionales de salud, pacientes y organizaciones nacionales e internacionales.'
                  : 'Webinars to inform and share knowledge and experiences about HTLV, with the participation of specialists, healthcare professionals, patients, and national and international organizations.'}
              </p>
            </div>

            {/* Tarjeta de Previsualización del Webinar */}
            <div className="space-y-6">
              {webinars.map((webinar) => (
                <div
                  key={webinar.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row items-stretch hover:shadow-md transition-shadow group"
                >
                  {/* LADO IZQUIERDO: Afiche / Flyer con imagen de previsualización destacada */}
                  <div className="md:w-72 lg:w-80 shrink-0 relative bg-[#001D2C] overflow-hidden min-h-[280px] md:min-h-full flex flex-col justify-between p-4 group">
                    {/* Imagen de preview 100% nítida y visible */}
                    <img
                      src={webinar.flyerImage}
                      alt={webinar.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradiente suave solo en el tercio inferior para garantizar legibilidad del horario y tag */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none"></div>

                    {/* Cabecera del flyer: Badge de fecha discreto */}
                    <div className="relative z-10 flex items-start justify-end">
                      <div className="border border-white/20 rounded-lg px-2.5 py-1 text-center bg-slate-900/60 backdrop-blur-md shadow-xs min-w-[56px]">
                        <span className="block text-xl font-black leading-none text-white">{webinar.day}</span>
                        <span className="block text-[10px] font-bold uppercase text-white/90 leading-tight mt-0.5">{webinar.month}</span>
                      </div>
                    </div>

                    {/* Centro libre: permite apreciar el arte, el texto del afiche y el lazo con total nitidez */}
                    <div className="relative z-10 flex-1"></div>

                    {/* Pie del flyer: Horario y Tag */}
                    <div className="relative z-10 pt-2 border-t border-white/20 space-y-2">
                      <div className="flex items-center gap-1.5 text-[11px] text-white">
                        <span className="font-bold text-[#E5A400]">{lang === 'es' ? 'Horario:' : 'Time:'}</span>
                        <span className="truncate font-medium">{webinar.time}</span>
                      </div>

                      <div className="pt-0.5">
                        <span className="inline-block px-2.5 py-1 bg-[#003B49]/90 border border-white/20 backdrop-blur-xs rounded text-[11px] font-bold text-white tracking-wide uppercase shadow-xs">
                          {webinar.bottomTag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* LADO DERECHO: Título principal, A cargo de, Descripción breve, Fecha y Botones */}
                  <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between space-y-5 bg-white">
                    <div className="space-y-3.5">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#003B49] leading-snug">
                        {webinar.title}
                      </h3>

                      <div className="space-y-1">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                          {webinar.speakerLabel}
                        </p>
                        <p className="text-sm sm:text-[15px] font-bold text-[#087E8B] leading-relaxed">
                          {webinar.speakersText}
                        </p>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {webinar.descBrief}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                      <div className="text-sm font-semibold text-slate-700">
                        <span className="text-slate-500 font-normal">{lang === 'es' ? 'Fecha: ' : 'Date: '}</span>
                        <span>{webinar.dateFormatted}</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        {/* Botón 1: Inscríbete */}
                        <a
                          href={webinar.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#003B49] hover:bg-[#087E8B] text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors shadow-xs inline-flex items-center gap-1.5 cursor-pointer focus-visible:outline-none"
                        >
                          <span>{lang === 'es' ? 'Inscríbete' : 'Register'}</span>
                          <span className="material-symbols-outlined text-base">open_in_new</span>
                        </a>

                        {/* Botón 2: Más información */}
                        <button
                          type="button"
                          onClick={() => setSelectedWebinar(webinar)}
                          className="bg-[#E5A400] hover:bg-[#d09400] text-slate-900 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors shadow-xs flex items-center justify-center cursor-pointer focus-visible:outline-none"
                        >
                          <span>{lang === 'es' ? 'Más información' : 'More information'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* MODAL DETALLADO DEL WEBINAR (SECCIÓN MÁS INFORMACIÓN) */}
            {selectedWebinar && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-xs animate-fadeIn overflow-y-auto"
                onClick={() => setSelectedWebinar(null)}
              >
                <div
                  className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl space-y-6 my-8 border border-slate-100 max-h-[92vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Encabezado del Modal con título completo y botón de cerrar */}
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-bold text-[#A10D3A] tracking-wider uppercase block mb-1">
                        {lang === 'es' ? 'Detalles del Webinar' : 'Webinar Details'}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#003B49] leading-snug">
                        {selectedWebinar.title}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedWebinar(null)}
                      className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors font-bold text-lg leading-none cursor-pointer shrink-0"
                      aria-label="Cerrar modal"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Imagen de Portada oficial (español / inglés según idioma activo) */}
                  <div className="relative rounded-xl overflow-hidden bg-slate-900 shadow-sm border border-slate-200">
                    <img
                      src={selectedWebinar.bannerImage}
                      alt={selectedWebinar.title}
                      className="w-full h-auto object-cover max-h-[320px]"
                    />
                  </div>

                  {/* Descripción completa del evento */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#003B49]">
                      {lang === 'es' ? 'Descripción del Evento' : 'Event Description'}
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {selectedWebinar.descEvent}
                    </p>
                  </div>

                  {/* Fila de Metadatos: Idioma, Fecha, Horario */}
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
                        {selectedWebinar.time}
                      </span>
                    </div>
                  </div>

                  {/* Lista de Ponentes e Investigadores con sus Afiliaciones Institucionales */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#003B49] border-b border-slate-100 pb-2">
                      {lang === 'es' ? 'Ponentes e Investigadores Participantes' : 'Speakers and Participating Researchers'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedWebinar.speakersList.map((spk, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-0.5">
                          <p className="text-xs sm:text-sm font-bold text-[#003B49]">{spk.name}</p>
                          <p className="text-[11px] text-slate-600 leading-snug">{spk.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botones de Acción */}
                  <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100">
                    <a
                      href={selectedWebinar.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-[#003B49] hover:bg-[#087E8B] text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span>{lang === 'es' ? 'Inscríbete' : 'Register'}</span>
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>

                    <div className="w-full sm:w-auto text-center">
                      <span className="text-xs text-slate-500 font-semibold px-3 py-2 bg-slate-100 rounded-lg block sm:inline-block">
                        {lang === 'es' ? 'Grabación: No disponible aún' : 'Recording: Not available yet'}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedWebinar(null)}
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

        {/* 3. CURSOS */}
        {activeTab === 'cursos' && (
          <div className="py-6 animate-fadeIn">
            <WorkInProgressView />
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
