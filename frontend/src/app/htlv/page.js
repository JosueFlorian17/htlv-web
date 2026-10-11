"use client";

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';

function HTLVContent() {
  const { lang, t } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabFromUrl = searchParams.get('tab');

  const [activeTab, setActiveTab] = useState(tabFromUrl || 'que-es');
  const [activeTopic, setActiveTopic] = useState('definicion');
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (tabFromUrl && ['que-es', 'faqs'].includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  const switchTab = (tabId) => {
    setActiveTab(tabId);
    router.push(`/htlv?tab=${tabId}`, { scroll: false });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const faqs = [
    {
      q: lang === 'es' ? "¿Qué significa tener HTLV-1 y en qué se diferencia del VIH?" : "What does having HTLV-1 mean and how is it different from HIV?",
      a: lang === 'es'
        ? "El HTLV y el VIH son retrovirus que infectan linfocitos, pero son virus totalmente distintos. El HTLV-1 NO produce inmunodeficiencia generalizada (SIDA). Cerca del 90% de las personas infectadas permanecen asintomáticas durante toda su vida sin desarrollar complicaciones graves."
        : "HTLV and HIV are both retroviruses infecting lymphocytes, but they are entirely different viruses. HTLV-1 DOES NOT cause generalized immunodeficiency (AIDS). Approximately 90% of individuals remain asymptomatic carriers throughout their lives."
    },
    {
      q: lang === 'es' ? "¿Cuáles son las principales enfermedades asociadas al HTLV-1?" : "What are the primary diseases associated with HTLV-1?",
      a: lang === 'es'
        ? "Solo entre el 5% y 10% de los portadores pueden desarrollar con los años: 1) Paraparesia Espástica Tropical (HAM/TSP), un cuadro neurológico que afecta la marcha y la función urinaria; 2) Leucemia/Linfoma de Células T del Adulto (ATL); o 3) Manifestaciones inflamatorias como uveítis o dermatitis infecciosa."
        : "Only 5% to 10% of carriers may develop complications over decades: 1) Tropical Spastic Paraparesis (HAM/TSP), a neuro-inflammatory disease affecting gait and bladder control; 2) Adult T-cell Leukemia/Lymphoma (ATL); or 3) Inflammatory conditions such as uveitis."
    },
    {
      q: lang === 'es' ? "¿Se contagia por contacto casual, abrazos o compartir vajilla?" : "Can HTLV be transmitted through casual contact, hugs, or sharing utensils?",
      a: lang === 'es'
        ? "NO. El HTLV requiere células vivas infectadas para pasar de una persona a otra. No se transmite por saliva, sudor, abrazos, besos, cubiertos, inodoros ni mosquitos. La convivencia familiar diaria es 100% segura."
        : "NO. HTLV requires living infected cells for transmission. It cannot spread through saliva, sweat, hugging, kissing, shared plates, toilets, or mosquito bites. Daily family interaction is completely safe."
    },
    {
      q: lang === 'es' ? "¿Cómo se transmite realmente el virus?" : "How is the virus actually transmitted?",
      a: lang === 'es'
        ? "Principalmente por tres vías: 1) De madre a hijo a través de la lactancia materna prolongada (mayor a 6 meses); 2) Vía sexual mediante relaciones sin preservativo; 3) Vía sanguínea a través de transfusiones no tamizadas o agujas compartidas."
        : "Mainly through three routes: 1) Mother-to-child via prolonged breastfeeding (>6 months); 2) Sexual transmission through unprotected intercourse; 3) Blood transmission through unscreened cellular blood products."
    }
  ];

  return (
    <main className="w-full bg-[#f8f9fb] min-h-[calc(100vh-80px)] py-8 md:py-12 text-[#191c1e] flex flex-col justify-between">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">
        
        {/* Cabecera con Selector de Pestañas (¿Qué es el HTLV? | Preguntas frecuentes) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-8 border-b-2 border-[#003B49]/15">
          <div>
            <span className="text-[12px] font-black uppercase tracking-widest text-[#087E8B] block mb-1">
              {lang === 'es' ? 'Información Biomédica' : 'Biomedical Information'}
            </span>
            <h1 className="text-[32px] sm:text-[42px] font-black text-[#003B49] tracking-tight leading-none">
              HTLV
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {[
              { id: 'que-es', label: lang === 'es' ? '¿Qué es el HTLV?' : 'What is HTLV?', icon: 'coronavirus' },
              { id: 'faqs', label: lang === 'es' ? 'Preguntas frecuentes' : 'FAQs', icon: 'quiz' }
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

            <button
              onClick={handlePrint}
              className="bg-[#A10D3A] text-white px-5 py-3 rounded-2xl text-[14px] font-bold hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px]">print</span>
              <span>{lang === 'es' ? 'Imprimir PDF' : 'Print PDF'}</span>
            </button>
          </div>
        </div>

        {/* 1. PESTAÑA: ¿QUÉ ES EL HTLV? (De un vistazo horizontal interactivo) */}
        {activeTab === 'que-es' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Botones de subtemas horizontales a la izquierda */}
              <div className="lg:col-span-4 bg-white p-4 rounded-3xl border-2 border-gray-200 shadow-xs space-y-2">
                {[
                  { id: 'definicion', label: lang === 'es' ? 'Definición & Virología' : 'Definition & Virology', icon: 'science' },
                  { id: 'tipos', label: lang === 'es' ? 'HTLV-1 vs. HTLV-2' : 'HTLV-1 vs. HTLV-2', icon: 'biotech' },
                  { id: 'espectro', label: lang === 'es' ? 'Espectro Clínico (90/10)' : 'Clinical Spectrum (90/10)', icon: 'pie_chart' },
                  { id: 'transmision', label: lang === 'es' ? 'Vías de Transmisión' : 'Transmission Routes', icon: 'share' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTopic(item.id)}
                    className={`w-full p-4 rounded-2xl text-left font-bold text-[15px] flex items-center justify-between transition-all cursor-pointer ${
                      activeTopic === item.id
                        ? 'bg-[#087E8B] text-white shadow-sm'
                        : 'text-[#003B49] hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-xl">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                    <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                  </button>
                ))}
              </div>

              {/* Contenido derecho de un vistazo */}
              <div className="lg:col-span-8 bg-white p-8 md:p-10 rounded-3xl border-2 border-gray-200 shadow-xs min-h-[420px] flex flex-col justify-between">
                
                {activeTopic === 'definicion' && (
                  <div className="space-y-4 animate-fadeIn">
                    <span className="px-3 py-1 bg-[#003B49]/10 text-[#003B49] text-[12px] font-black uppercase rounded-md inline-block">
                      Biología Viral
                    </span>
                    <h3 className="text-[26px] font-black text-[#003B49]">
                      {lang === 'es' ? 'Naturaleza Retroviral del HTLV' : 'Retroviral Nature of HTLV'}
                    </h3>
                    <p className="text-[17px] text-[#443333] leading-relaxed">
                      {lang === 'es'
                        ? 'El Virus Linfotrópico de Células T Humanas (HTLV) fue el primer retrovirus humano descubierto (1980). Afecta predominantemente a linfocitos T, integrando su código genético en el ADN cromosómico del huésped en forma de provirus.'
                        : 'Human T-cell Lymphotropic Virus (HTLV) was the first human retrovirus discovered (1980). It preferentially targets T-cells, integrating its genetic code into host chromosomal DNA as a provirus.'}
                    </p>
                    <div className="p-5 bg-gray-50 border border-gray-200 rounded-2xl text-[15.5px] text-gray-700">
                      <strong>{lang === 'es' ? 'Mecanismo Clave:' : 'Key Mechanism:'}</strong> {lang === 'es' ? 'Persiste de por vida dentro del organismo, manteniendo estabilidad genómica clonal sin degradar bruscamente las defensas inmunitarias.' : 'Persists for life inside host cells with high clonal genetic stability.'}
                    </div>
                  </div>
                )}

                {activeTopic === 'tipos' && (
                  <div className="space-y-4 animate-fadeIn">
                    <span className="px-3 py-1 bg-[#A10D3A]/10 text-[#A10D3A] text-[12px] font-black uppercase rounded-md inline-block">
                      Tipos Virales
                    </span>
                    <h3 className="text-[26px] font-black text-[#003B49]">
                      HTLV-1 vs. HTLV-2
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                      <div className="p-5 bg-gray-50 border-2 border-[#A10D3A]/20 rounded-2xl space-y-2">
                        <h4 className="font-black text-[18px] text-[#A10D3A]">HTLV-1</h4>
                        <p className="text-[14.5px] text-[#443333]">
                          {lang === 'es' ? 'De mayor trascendencia médica. Causal de HAM/TSP y ATL. Prevalente en Perú, Japón, Brasil y el Caribe.' : 'Highest medical impact. Causes HAM/TSP and ATL. Prevalent in Peru, Japan, Brazil, and Caribbean.'}
                        </p>
                      </div>
                      <div className="p-5 bg-gray-50 border-2 border-[#003B49]/20 rounded-2xl space-y-2">
                        <h4 className="font-black text-[18px] text-[#003B49]">HTLV-2</h4>
                        <p className="text-[14.5px] text-[#443333]">
                          {lang === 'es' ? 'Presenta un curso clínico mayormente benigno. Endémico en pueblos originarios del continente americano.' : 'Mostly benign clinical course. Endemic in indigenous populations of the Americas.'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTopic === 'espectro' && (
                  <div className="space-y-4 animate-fadeIn">
                    <span className="px-3 py-1 bg-[#E5A400] text-[#003B49] text-[12px] font-black uppercase rounded-md inline-block">
                      Evolución
                    </span>
                    <h3 className="text-[26px] font-black text-[#003B49]">
                      {lang === 'es' ? 'La Regla del 90/10' : 'The 90/10 Rule'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                      <div className="p-6 bg-[#003B49] text-white rounded-2xl text-center space-y-2">
                        <span className="text-5xl font-black text-[#E5A400]">~90%</span>
                        <h4 className="font-bold text-[18px]">{lang === 'es' ? 'Portadores Asintomáticos' : 'Asymptomatic Carriers'}</h4>
                        <p className="text-[14px] text-white/80">{lang === 'es' ? 'Viven vidas plenas sin desarrollar enfermedad jamás.' : 'Live healthy lives without ever developing disease.'}</p>
                      </div>
                      <div className="p-6 bg-gray-100 rounded-2xl text-center space-y-2 text-[#003B49]">
                        <span className="text-5xl font-black text-[#A10D3A]">5-10%</span>
                        <h4 className="font-bold text-[18px]">{lang === 'es' ? 'Riesgo a Largo Plazo' : 'Long-Term Risk'}</h4>
                        <p className="text-[14px] text-gray-600">{lang === 'es' ? 'HAM/TSP o ATL prevenibles y tratables con seguimiento médico.' : 'HAM/TSP or ATL manageable with clinical care.'}</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTopic === 'transmision' && (
                  <div className="space-y-4 animate-fadeIn">
                    <span className="px-3 py-1 bg-[#087E8B]/10 text-[#087E8B] text-[12px] font-black uppercase rounded-md inline-block">
                      Vías de Transmisión
                    </span>
                    <h3 className="text-[26px] font-black text-[#003B49]">
                      {lang === 'es' ? '¿Cómo se Transmite?' : 'How is it Transmitted?'}
                    </h3>
                    <div className="space-y-3 pt-1 text-[15px] text-[#443333]">
                      <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-2xl flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#087E8B] text-2xl">child_care</span>
                        <p><strong>{lang === 'es' ? 'Lactancia Prolongada:' : 'Prolonged Breastfeeding:'}</strong> {lang === 'es' ? 'Principal vía vertical (>6 meses).' : 'Primary vertical route (>6 months).'}</p>
                      </div>
                      <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-2xl flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#A10D3A] text-2xl">favorite_border</span>
                        <p><strong>{lang === 'es' ? 'Vía Sexual sin Barrera:' : 'Unprotected Sexual Contact:'}</strong> {lang === 'es' ? 'Se previene con preservativo.' : 'Prevented via consistent condom use.'}</p>
                      </div>
                      <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-2xl flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#003B49] text-2xl">bloodtype</span>
                        <p><strong>{lang === 'es' ? 'Vía Sanguínea Celular:' : 'Cellular Blood Route:'}</strong> {lang === 'es' ? 'Controlada por tamizaje en bancos de sangre.' : 'Controlled via blood bank screening.'}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-6 border-t border-gray-200 text-right">
                  <button
                    onClick={() => switchTab('faqs')}
                    className="text-[#087E8B] font-black hover:underline inline-flex items-center gap-1 text-[14.5px]"
                  >
                    <span>{lang === 'es' ? 'Ver Preguntas Frecuentes' : 'View Frequently Asked Questions'}</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* 2. PESTAÑA: PREGUNTAS FRECUENTES (Pantalla propia) */}
        {activeTab === 'faqs' && (
          <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-gray-200 shadow-xs space-y-4">
              <h3 className="text-[24px] font-black text-[#003B49] mb-4">
                {lang === 'es' ? 'Respuestas Médicas a Preguntas Frecuentes' : 'Medical Answers to Frequently Asked Questions'}
              </h3>
              <div className="space-y-3">
                {faqs.map((f, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="border-2 border-gray-200 rounded-2xl overflow-hidden bg-gray-50">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 text-left font-bold text-[16px] text-[#003B49] hover:text-[#087E8B] flex items-center justify-between gap-3 cursor-pointer"
                      >
                        <span>{f.q}</span>
                        <span className="material-symbols-outlined text-2xl text-[#087E8B]">
                          {isOpen ? 'expand_less' : 'expand_more'}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="p-4 pt-0 text-[15.5px] text-[#443333] leading-relaxed border-t border-gray-200 bg-white">
                          <p className="pt-2">{f.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

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
