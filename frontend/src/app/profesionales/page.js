"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ProfesionalesPage() {
  const [activeTab, setActiveTab] = useState('guias');

  const clinicalGuides = [
    {
      title: "Guía de Práctica Clínica: Diagnóstico y Manejo de HTLV-1",
      institution: "IMTAvH - Universidad Peruana Cayetano Heredia (UPCH)",
      year: "2024",
      desc: "Recomendaciones basadas en evidencia para el tamizaje serológico, algoritmos de confirmación por Western Blot/PCR y criterios de derivación clínica.",
      topics: ["Tamizaje", "Diagnóstico Diferencial", "Criterios Belem"]
    },
    {
      title: "Consenso Internacional en Paraparesia Espástica Tropical (HAM/TSP)",
      institution: "Comité Científico RIII-HTLV & Consorcio Japón-UK",
      year: "2023",
      desc: "Protocolo unificado para el monitoreo neurológico, escalas funcionales (EDSS modificado), biomarcadores en líquido cefalorraquídeo y uso de pulsos de corticoides.",
      topics: ["Neurología", "LCR", "Manejo Motor y Urológico"]
    },
    {
      title: "Protocolo de Prevención de Transmisión Materno-Infantil",
      institution: "Red RIII-HTLV & Sociedades de Infectología",
      year: "2024",
      desc: "Estrategias de tamizaje prenatal en poblaciones de alta prevalencia, manejo del puerperio y pautas de alimentación alternativa para recién nacidos.",
      topics: ["Perinatología", "Lactancia Segura", "Tamizaje Gestacional"]
    }
  ];

  const webinars = [
    {
      title: "Actualización Global en Retrovirología Humana: Desafíos en HTLV-1 y HTLV-2",
      speaker: "Dr. Eduardo Gotuzzo (UPCH) & Prof. Graham Taylor (Imperial College)",
      date: "Sesión Grabada",
      duration: "58 min",
      videoId: "n3GzS_WnQ0I",
      desc: "Revisión del panorama epidemiológico mundial, nuevas herramientas de cuantificación de carga proviral y abordaje de las coinfecciones frecuentes."
    },
    {
      title: "Innovaciones Terapéuticas y Ensayos Clínicos en HAM/TSP",
      speaker: "Investigadores del Departamento de Enfermedades Raras, St. Marianna (Japón)",
      date: "Sesión Científica",
      duration: "45 min",
      videoId: "n3GzS_WnQ0I",
      desc: "Análisis de anticuerpos monoclonales y modulación de quimiocinas para frenar el deterioro motor en pacientes con paraparesia espástica."
    }
  ];

  const courses = [
    {
      title: "Curso Virtual: Diagnóstico y Abordaje Clínico Integral del HTLV",
      modality: "Virtual Asincrónico",
      duration: "20 horas académicas",
      target: "Médicos generales, infectólogos, neurólogos, pediatras y obstetras",
      modules: [
        "Módulo 1: Biología retroviral y epidemiología global",
        "Módulo 2: Algoritmos de laboratorio (ELISA, WB, PCR en tiempo real)",
        "Módulo 3: Cuadros neurológicos: HAM/TSP y neuropatías",
        "Módulo 4: Manifestaciones hematológicas y cutáneas: ATL",
        "Módulo 5: Consejería al paciente y prevención vertical"
      ]
    },
    {
      title: "Taller Práctico: Estandarización de Métodos Moleculares y Carga Proviral",
      modality: "Semipresencial / Laboratorio",
      duration: "15 horas",
      target: "Biólogos, tecnólogos médicos y profesionales de laboratorio clínico",
      modules: [
        "Módulo 1: Extracción de ADN en muestras de sangre periférica",
        "Módulo 2: Diseño de primers y sondas para HTLV-1 y HTLV-2",
        "Módulo 3: Cuantificación relativa y absoluta de carga proviral",
        "Módulo 4: Control de calidad e interpretación de resultados equívocos"
      ]
    }
  ];

  return (
    <main className="w-full bg-[#f8f9fb] min-h-screen py-10 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        
        {/* Cabecera Principal */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <span className="px-3 py-1 bg-[#d6e0f3] text-[#1d2b3a] text-[12px] font-black uppercase tracking-widest rounded-full inline-block">
            Área Académica & Médica
          </span>
          <h1 className="text-[34px] sm:text-[46px] font-black text-[#191c1e] tracking-tight leading-tight">
            Profesionales de la Salud
          </h1>
          <p className="text-[17px] text-[#564242] leading-relaxed max-w-3xl mx-auto">
            Recursos clínicos especializados, consensos de manejo, conferencias científicas y programas de capacitación continua coordinados por la Red RIII-HTLV.
          </p>

          {/* Selector de Pestañas */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {[
              { id: 'guias', label: 'Guías Clínicas', icon: 'menu_book' },
              { id: 'webinars', label: 'Webinars & Grabaciones', icon: 'video_library' },
              { id: 'cursos', label: 'Cursos Cortos & Capacitación', icon: 'school' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-[14px] font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#5b0617] text-white shadow-sm'
                    : 'bg-white border border-[#dcc0c0] text-[#564242] hover:bg-[#ffdada]/30 hover:text-[#5b0617]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* 1. Guías Clínicas */}
          {activeTab === 'guias' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-white p-8 rounded-2xl border border-[#dcc0c0] shadow-xs space-y-6">
                <div>
                  <h2 className="text-[24px] font-black text-[#5b0617] mb-1">
                    Guías y Protocolos de Práctica Clínica
                  </h2>
                  <p className="text-[14.5px] text-[#564242]">
                    Documentos normativos elaborados por los comités de expertos de las instituciones miembro para estandarizar el cuidado médico.
                  </p>
                </div>

                <div className="space-y-4">
                  {clinicalGuides.map((guide, idx) => (
                    <div key={idx} className="p-6 bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="text-[12px] font-bold text-[#897172]">
                            {guide.institution} • {guide.year}
                          </span>
                          <span className="px-2.5 py-0.5 bg-[#ffdada] text-[#5b0617] text-[11px] font-bold rounded-md">
                            Guía Oficial
                          </span>
                        </div>
                        <h3 className="text-[18px] font-bold text-[#191c1e] mb-2">
                          {guide.title}
                        </h3>
                        <p className="text-[14px] text-[#564242] leading-relaxed mb-4">
                          {guide.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {guide.topics.map((t, i) => (
                            <span key={i} className="px-2 py-0.5 bg-white border border-[#dcc0c0] rounded-md text-[11px] font-semibold text-[#564242]">
                              #{t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="pt-4 mt-4 border-t border-[#dcc0c0]/50 flex items-center justify-between">
                        <span className="text-[12px] text-[#897172]">Formato PDF / Acceso Libre</span>
                        <button 
                          onClick={() => alert(`Descargando: ${guide.title}`)}
                          className="bg-[#5b0617] text-white px-4 py-2 rounded-lg text-[13px] font-bold hover:opacity-90 transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[16px]">download</span>
                          <span>Descargar Guía</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. Webinars & Sesiones */}
          {activeTab === 'webinars' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-white p-8 rounded-2xl border border-[#dcc0c0] shadow-xs space-y-6">
                <div>
                  <h2 className="text-[24px] font-black text-[#5b0617] mb-1">
                    Webinars Científicos & Conferencias
                  </h2>
                  <p className="text-[14.5px] text-[#564242]">
                    Sesiones de actualización y discusión de casos clínicos con ponentes de la Red Internacional RIII-HTLV.
                  </p>
                </div>

                <div className="space-y-6">
                  {webinars.map((webinar, idx) => (
                    <div key={idx} className="p-6 bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl space-y-4">
                      <div>
                        <div className="flex items-center gap-2 text-[12px] font-bold text-[#5b0617] mb-1">
                          <span className="material-symbols-outlined text-sm">schedule</span>
                          <span>{webinar.date} • Duración: {webinar.duration}</span>
                        </div>
                        <h3 className="text-[18px] font-bold text-[#191c1e]">
                          {webinar.title}
                        </h3>
                        <p className="text-[13px] font-semibold text-[#897172] mt-0.5">
                          Ponentes: {webinar.speaker}
                        </p>
                        <p className="text-[14px] text-[#564242] mt-2 leading-relaxed">
                          {webinar.desc}
                        </p>
                      </div>

                      <div className="aspect-video w-full rounded-xl overflow-hidden border border-[#dcc0c0] bg-black">
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
              </div>
            </div>
          )}

          {/* 3. Cursos Cortos */}
          {activeTab === 'cursos' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-white p-8 rounded-2xl border border-[#dcc0c0] shadow-xs space-y-6">
                <div>
                  <h2 className="text-[24px] font-black text-[#5b0617] mb-1">
                    Cursos Cortos de Formación Médica Continua
                  </h2>
                  <p className="text-[14.5px] text-[#564242]">
                    Capacitaciones diseñadas para el personal de salud de primer nivel y centros de referencia.
                  </p>
                </div>

                <div className="space-y-5">
                  {courses.map((course, idx) => (
                    <div key={idx} className="p-6 bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-2.5 py-0.5 bg-[#d6e0f3] text-[#1d2b3a] text-[11px] font-bold rounded-md">
                          {course.modality}
                        </span>
                        <span className="text-[12px] font-bold text-[#897172]">
                          Certificación: {course.duration}
                        </span>
                      </div>

                      <h3 className="text-[18px] font-bold text-[#191c1e]">
                        {course.title}
                      </h3>
                      
                      <p className="text-[13.5px] text-[#564242]">
                        <strong>Dirigido a:</strong> {course.target}
                      </p>

                      <div className="space-y-1.5 pt-2">
                        <span className="text-[12px] font-bold text-[#191c1e] uppercase tracking-wider block">
                          Estructura Temática:
                        </span>
                        {course.modules.map((m, i) => (
                          <div key={i} className="flex items-center gap-2 text-[13px] text-[#564242]">
                            <span className="material-symbols-outlined text-sm text-[#5b0617]">check</span>
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-[#dcc0c0]/50 flex items-center justify-between">
                        <span className="text-[12px] text-[#897172]">Inscripción gratuita para profesionales de instituciones afiliadas</span>
                        <Link 
                          href="/contact"
                          className="bg-[#5b0617] text-white px-4 py-2 rounded-lg text-[13px] font-bold hover:opacity-90 transition-all flex items-center gap-1"
                        >
                          <span>Solicitar Inscripción</span>
                          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </main>
  );
}
