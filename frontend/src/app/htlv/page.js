"use client";

import { useState, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';
import FaqSection from '../../components/faqs/FaqSection';

function HTLVContent() {
  const { lang, t } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabFromUrl = searchParams.get('tab');

  const [activeTab, setActiveTab] = useState(tabFromUrl || 'que-es');
  const [activeTopic, setActiveTopic] = useState('definicion');
  const [openFaqs, setOpenFaqs] = useState({ 1: true });
  const [searchQuery, setSearchQuery] = useState('');
  const [showFaqDisclaimer, setShowFaqDisclaimer] = useState(false);

  const toggleFaq = (id) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    if (tabFromUrl && ['que-es', 'faqs'].includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  const switchTab = (tabId) => {
    setActiveTab(tabId);
    router.push(`/htlv?tab=${tabId}`, { scroll: false });
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <main className="w-full bg-slate-50 min-h-[calc(100vh-80px)] py-8 md:py-12 text-slate-900 flex flex-col justify-between">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de Página */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#003B49] tracking-tight">
              {activeTab === 'que-es' ? (lang === 'es' ? '¿Qué es el HTLV?' : 'What is HTLV?') : (lang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions')}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="bg-[#003B49] hover:bg-[#002B36] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087E8B]"
            >
              <span className="material-symbols-outlined text-[18px]">print</span>
              <span>{lang === 'es' ? 'Imprimir PDF' : 'Print PDF'}</span>
            </button>
          </div>
        </div>

        {/* 1. PESTAÑA: ¿QUÉ ES EL HTLV? */}
        {activeTab === 'que-es' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Disclaimer Work In Progress (Fondo rojo pastel, texto negro, bordes rectos sin bordes decorativos) */}
            <div className="p-4 bg-[#FDE8E8] text-black rounded-none">
              <p className="text-xs sm:text-sm font-medium tracking-wide">
                <span className="font-bold uppercase mr-1.5">[Work in progress]</span>
                {lang === 'es'
                  ? 'Esta sección se encuentra actualmente en desarrollo y revisión por el equipo técnico.'
                  : 'This section is currently under development and technical review.'}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Botones de subtemas a la izquierda */}
              <div className="lg:col-span-4 bg-white p-3 rounded-xl border border-slate-200 shadow-sm space-y-1.5">
                {[
                  { id: 'definicion', label: lang === 'es' ? 'Definición & Virología' : 'Definition & Virology', icon: 'science' },
                  { id: 'tipos', label: lang === 'es' ? 'HTLV-1 vs. HTLV-2' : 'HTLV-1 vs. HTLV-2', icon: 'biotech' },
                  { id: 'espectro', label: lang === 'es' ? 'Espectro Clínico (90/10)' : 'Clinical Spectrum (90/10)', icon: 'pie_chart' },
                  { id: 'transmision', label: lang === 'es' ? 'Vías de Transmisión' : 'Transmission Routes', icon: 'share' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTopic(item.id)}
                    className={`w-full p-3.5 rounded-lg text-left font-semibold text-sm flex items-center justify-between transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087E8B] ${
                      activeTopic === item.id
                        ? 'bg-[#087E8B] text-white shadow-sm'
                        : 'text-[#003B49] hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-lg">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                    <span className="material-symbols-outlined text-base">chevron_right</span>
                  </button>
                ))}
              </div>

              {/* Contenido derecho de un vistazo */}
              <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm min-h-[380px] flex flex-col justify-between">
                
                {activeTopic === 'definicion' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                      {lang === 'es' ? 'Naturaleza Retroviral del HTLV' : 'Retroviral Nature of HTLV'}
                    </h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      {lang === 'es'
                        ? 'El Virus Linfotrópico de Células T Humanas (HTLV) fue el primer retrovirus humano descubierto (1980). Afecta predominantemente a linfocitos T, integrando su código genético en el ADN cromosómico del huésped en forma de provirus.'
                        : 'Human T-cell Lymphotropic Virus (HTLV) was the first human retrovirus discovered (1980). It preferentially targets T-cells, integrating its genetic code into host chromosomal DNA as a provirus.'}
                    </p>
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700">
                      <strong>{lang === 'es' ? 'Mecanismo Clave:' : 'Key Mechanism:'}</strong> {lang === 'es' ? 'Persiste de por vida dentro del organismo, manteniendo estabilidad genómica clonal sin degradar bruscamente las defensas inmunitarias.' : 'Persists for life inside host cells with high clonal genetic stability.'}
                    </div>
                  </div>
                )}

                {activeTopic === 'tipos' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                      {lang === 'es' ? 'Diferencias entre HTLV-1 y HTLV-2' : 'Differences between HTLV-1 & HTLV-2'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                        <h4 className="font-bold text-base text-[#003B49]">HTLV-1</h4>
                        <p className="text-sm text-slate-600">
                          {lang === 'es'
                            ? 'Asociado principalmente a Paraparesia Espástica Tropical (HAM/TSP) y Leucemia/Linfoma de Células T del Adulto (ATL).'
                            : 'Associated primarily with Tropical Spastic Paraparesis (HAM/TSP) and Adult T-cell Leukemia/Lymphoma (ATL).'}
                        </p>
                      </div>
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                        <h4 className="font-bold text-base text-[#087E8B]">HTLV-2</h4>
                        <p className="text-sm text-slate-600">
                          {lang === 'es'
                            ? 'Curso clínico predominantemente benigno. Rara vez produce manifestaciones neurológicas y no causa ATL.'
                            : 'Predominantly benign clinical course. Rarely causes neurological symptoms; not causally linked to ATL.'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTopic === 'espectro' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                      {lang === 'es' ? 'La Regla del 90/10' : 'The 90/10 Rule'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                      <div className="p-5 bg-[#003B49] text-white rounded-xl text-center space-y-2">
                        <span className="text-4xl font-bold text-[#E5A400]">~90%</span>
                        <h4 className="font-bold text-base">{lang === 'es' ? 'Portadores Asintomáticos' : 'Asymptomatic Carriers'}</h4>
                        <p className="text-xs text-white/80">{lang === 'es' ? 'Viven vidas plenas sin desarrollar enfermedad jamás.' : 'Live healthy lives without ever developing disease.'}</p>
                      </div>
                      <div className="p-5 bg-slate-100 rounded-xl text-center space-y-2 text-[#003B49]">
                        <span className="text-4xl font-bold text-[#A10D3A]">5-10%</span>
                        <h4 className="font-bold text-base">{lang === 'es' ? 'Riesgo a Largo Plazo' : 'Long-Term Risk'}</h4>
                        <p className="text-xs text-slate-600">{lang === 'es' ? 'HAM/TSP o ATL prevenibles y tratables con seguimiento médico.' : 'HAM/TSP or ATL manageable with clinical care.'}</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTopic === 'transmision' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                      {lang === 'es' ? '¿Cómo se Transmite?' : 'How is it Transmitted?'}
                    </h3>
                    <div className="space-y-3 pt-1 text-sm text-slate-700">
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#087E8B] text-xl">child_care</span>
                        <p><strong>{lang === 'es' ? 'Lactancia Prolongada:' : 'Prolonged Breastfeeding:'}</strong> {lang === 'es' ? 'Principal vía vertical (>6 meses).' : 'Primary vertical route (>6 months).'}</p>
                      </div>
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#A10D3A] text-xl">favorite_border</span>
                        <p><strong>{lang === 'es' ? 'Vía Sexual sin Barrera:' : 'Unprotected Sexual Contact:'}</strong> {lang === 'es' ? 'Se previene con preservativo.' : 'Prevented via consistent condom use.'}</p>
                      </div>
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#003B49] text-xl">bloodtype</span>
                        <p><strong>{lang === 'es' ? 'Vía Sanguínea Celular:' : 'Cellular Blood Route:'}</strong> {lang === 'es' ? 'Controlada por tamizaje en bancos de sangre.' : 'Controlled via blood bank screening.'}</p>
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>
        )}

        {/* 2. PESTAÑA: PREGUNTAS FRECUENTES */}
        {/* 2. PREGUNTAS FRECUENTES (Buscador semántico integrado y 15 secciones oficiales) */}
        {activeTab === 'faqs' && <FaqSection lang={lang} />}

      </div>
    </main>
  );
}

export default function HTLVPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-20 text-center font-bold text-[#003B49]">Cargando...</div>}>
      <HTLVContent />
    </Suspense>
  );
}
