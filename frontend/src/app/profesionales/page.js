"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

export default function ProfesionalesPage() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('guias');

  const clinicalGuides = [
    {
      title: lang === 'es' ? "Guía de Práctica Clínica: Diagnóstico y Manejo de HTLV-1" : "Clinical Practice Guideline: HTLV-1 Diagnosis and Management",
      institution: "IMTAvH - Universidad Peruana Cayetano Heredia (UPCH)",
      year: "2024",
      desc: lang === 'es'
        ? "Recomendaciones basadas en evidencia para el tamizaje serológico, algoritmos de confirmación por Western Blot/PCR y criterios de derivación clínica."
        : "Evidence-based recommendations for serological screening, Western Blot/PCR confirmation algorithms, and referral criteria.",
      topics: ["Tamizaje", "Diagnóstico Diferencial", "Criterios Belem"]
    },
    {
      title: lang === 'es' ? "Consenso Internacional en Paraparesia Espástica Tropical (HAM/TSP)" : "International Consensus on Tropical Spastic Paraparesis (HAM/TSP)",
      institution: "Comité Científico RIII-HTLV & Consorcio Japón-UK",
      year: "2023",
      desc: lang === 'es'
        ? "Protocolo unificado para el monitoreo neurológico, escalas funcionales (EDSS modificado), biomarcadores en líquido cefalorraquídeo y uso de pulsos de corticoides."
        : "Unified protocol for neurological monitoring, expanded disability scales, CSF biomarkers, and corticosteroid pulse therapy.",
      topics: ["Neurología", "LCR", "Manejo Motor y Urológico"]
    },
    {
      title: lang === 'es' ? "Protocolo de Prevención de Transmisión Materno-Infantil" : "Mother-to-Child Transmission Prevention Protocol",
      institution: "Red RIII-HTLV & Sociedades de Infectología",
      year: "2024",
      desc: lang === 'es'
        ? "Estrategias de tamizaje prenatal en poblaciones de alta prevalencia, manejo del puerperio y pautas de alimentación alternativa para recién nacidos."
        : "Prenatal screening in high-prevalence settings, puerperium management, and alternative infant feeding recommendations.",
      topics: ["Perinatología", "Lactancia Segura", "Tamizaje Gestacional"]
    }
  ];

  const webinars = [
    {
      title: lang === 'es' ? "Actualización Global en Retrovirología Humana: Desafíos en HTLV-1 y HTLV-2" : "Global Update on Human Retrovirology: Challenges in HTLV-1 and HTLV-2",
      speaker: "Dr. Eduardo Gotuzzo (UPCH) & Prof. Graham Taylor (Imperial College)",
      date: "Sesión Grabada",
      duration: "58 min",
      videoId: "n3GzS_WnQ0I",
      desc: lang === 'es'
        ? "Revisión del panorama epidemiológico mundial, nuevas herramientas de cuantificación de carga proviral y abordaje de las coinfecciones frecuentes."
        : "Overview of global epidemiology, proviral load quantification tools, and management of frequent coinfections."
    }
  ];

  return (
    <main className="w-full bg-[#f8f9fb] min-h-screen py-10 md:py-16 text-[#191c1e]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Cabecera Principal */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="px-3.5 py-1 bg-[#d6e0f3] text-[#1d2b3a] text-[13px] font-black uppercase tracking-widest rounded-full inline-block">
            {lang === 'es' ? 'Área Médica & Científica' : 'Medical & Scientific Area'}
          </span>
          <h1 className="text-[34px] sm:text-[46px] font-black text-[#191c1e] tracking-tight leading-tight">
            {lang === 'es' ? 'Profesionales de la Salud' : 'Health Professionals'}
          </h1>
          <p className="text-[18px] text-[#443333] leading-relaxed">
            {lang === 'es'
              ? 'Guías clínicas normativas, algoritmos de diagnóstico, sesiones académicas y cursos de actualización médica continua de la Red RIII-HTLV.'
              : 'Clinical practice guidelines, diagnostic algorithms, academic webinars, and continuing medical education by the RIII-HTLV Network.'}
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            {[
              { id: 'guias', label: lang === 'es' ? 'Guías Clínicas' : 'Clinical Guidelines', icon: 'menu_book' },
              { id: 'webinars', label: lang === 'es' ? 'Webinars & Grabaciones' : 'Webinars & Recordings', icon: 'video_library' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-xl text-[16px] font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#5b0617] text-white shadow-sm'
                    : 'bg-white border border-[#dcc0c0] text-[#443333] hover:bg-[#ffdada]/30 hover:text-[#5b0617]'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Guías Clínicas */}
        {activeTab === 'guias' && (
          <div className="space-y-6 max-w-3xl mx-auto animate-fadeIn">
            {clinicalGuides.map((guide, idx) => (
              <div key={idx} className="p-7 bg-white border border-[#dcc0c0] rounded-3xl shadow-xs space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[13px] font-bold text-[#897172]">
                    {guide.institution} • {guide.year}
                  </span>
                  <span className="px-3 py-0.5 bg-[#ffdada] text-[#5b0617] text-[12px] font-extrabold rounded-md">
                    {lang === 'es' ? 'Guía Oficial' : 'Official Guide'}
                  </span>
                </div>
                <h3 className="text-[20px] font-black text-[#191c1e]">
                  {guide.title}
                </h3>
                <p className="text-[15.5px] text-[#443333] leading-relaxed">
                  {guide.desc}
                </p>
                <div className="pt-4 border-t border-[#dcc0c0]/50 flex items-center justify-between">
                  <span className="text-[13.5px] font-medium text-[#897172]">PDF • Open Access</span>
                  <button 
                    onClick={() => alert(lang === 'es' ? `Descargando: ${guide.title}` : `Downloading: ${guide.title}`)}
                    className="bg-[#5b0617] text-white px-5 py-2.5 rounded-xl text-[14px] font-bold hover:opacity-90 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span>{lang === 'es' ? 'Descargar Guía' : 'Download Guide'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Webinars */}
        {activeTab === 'webinars' && (
          <div className="space-y-6 max-w-3xl mx-auto animate-fadeIn">
            {webinars.map((webinar, idx) => (
              <div key={idx} className="p-7 bg-white border border-[#dcc0c0] rounded-3xl shadow-xs space-y-4">
                <div>
                  <span className="text-[13px] font-black uppercase text-[#5b0617] block mb-1">
                    {webinar.date} • {webinar.duration}
                  </span>
                  <h3 className="text-[20px] font-black text-[#191c1e]">
                    {webinar.title}
                  </h3>
                  <p className="text-[14px] font-semibold text-[#897172] mt-0.5">
                    {webinar.speaker}
                  </p>
                  <p className="text-[15.5px] text-[#443333] mt-2 leading-relaxed">
                    {webinar.desc}
                  </p>
                </div>

                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-[#dcc0c0] bg-black">
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

      </div>
    </main>
  );
}
