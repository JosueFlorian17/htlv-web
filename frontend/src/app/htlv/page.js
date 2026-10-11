"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

export default function HTLVPage() {
  const { lang, t } = useLanguage();
  const [activeTopic, setActiveTopic] = useState('definicion');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const menuItems = [
    { id: 'definicion', label: lang === 'es' ? '1. ¿Qué es el HTLV?' : '1. What is HTLV?', icon: 'coronavirus' },
    { id: 'tipos', label: lang === 'es' ? '2. Tipos (HTLV-1 vs HTLV-2)' : '2. Types (HTLV-1 vs 2)', icon: 'biotech' },
    { id: 'espectro', label: lang === 'es' ? '3. Espectro Clínico (90/10)' : '3. Clinical Spectrum (90/10)', icon: 'pie_chart' },
    { id: 'transmision', label: lang === 'es' ? '4. Vías de Transmisión' : '4. Transmission Routes', icon: 'share' },
    { id: 'faqs', label: lang === 'es' ? '5. Preguntas Frecuentes' : '5. FAQs', icon: 'quiz' }
  ];

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
    <main className="w-full bg-[#f8f9fb] min-h-[calc(100vh-80px)] py-8 md:py-12 text-[#191c1e]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Cabecera Concisa */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-6 border-b border-[#dcc0c0]">
          <div>
            <span className="text-[12.5px] font-black uppercase tracking-widest text-[#5b0617] block mb-1">
              {lang === 'es' ? 'Guía Biomédica & Clínica' : 'Biomedical & Clinical Guide'}
            </span>
            <h1 className="text-[32px] sm:text-[40px] font-black text-[#191c1e] tracking-tight leading-tight">
              {t('htlv_title')}
            </h1>
            <p className="text-[17px] text-[#564242] mt-1">
              {t('htlv_subtitle')}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="bg-[#5b0617] text-white px-5 py-2.5 rounded-xl text-[14px] font-bold hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px]">print</span>
              <span>{lang === 'es' ? 'Guardar / Imprimir PDF' : 'Print / Save PDF'}</span>
            </button>
            <Link
              href="/pacientes"
              className="bg-white border-2 border-[#5b0617] text-[#5b0617] px-5 py-2.5 rounded-xl text-[14px] font-bold hover:bg-[#ffdada]/30 transition-all flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[18px]">favorite</span>
              <span>{lang === 'es' ? 'Espacio Pacientes' : 'Patient Space'}</span>
            </Link>
          </div>
        </div>

        {/* Estructura 'De un vistazo' sin necesidad de scrollear infinitamente (Panel Izquierdo con Selector, Panel Derecho con Contenido) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Panel Izquierdo: Menú Lateral con Botones Grandes */}
          <div className="lg:col-span-4 bg-white p-4 rounded-3xl border border-[#dcc0c0] shadow-xs space-y-2">
            <span className="text-[12px] font-black uppercase tracking-wider text-[#897172] px-3 pt-2 block">
              {lang === 'es' ? 'Módulos Temáticos' : 'Topic Modules'}
            </span>
            {menuItems.map(item => {
              const active = activeTopic === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTopic(item.id)}
                  className={`w-full p-4 rounded-2xl text-left font-bold text-[16px] flex items-center justify-between transition-all cursor-pointer ${
                    active
                      ? 'bg-[#5b0617] text-white shadow-sm'
                      : 'text-[#443333] hover:bg-[#ffdada]/40 hover:text-[#5b0617]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  <span className="material-symbols-outlined text-[20px]">
                    {active ? 'check' : 'chevron_right'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Panel Derecho: Contenido Dinámico de un vistazo (Letras Grandes, Claridad Total) */}
          <div className="lg:col-span-8 bg-white p-8 md:p-10 rounded-3xl border border-[#dcc0c0] shadow-xs min-h-[460px] flex flex-col justify-between">
            
            {/* 1. Definición */}
            {activeTopic === 'definicion' && (
              <div className="space-y-5 animate-fadeIn">
                <span className="px-3 py-1 bg-[#ffdada] text-[#5b0617] text-[12px] font-black uppercase tracking-wider rounded-lg inline-block">
                  {lang === 'es' ? 'Fundamentos Virales' : 'Viral Fundamentals'}
                </span>
                <h2 className="text-[26px] font-black text-[#191c1e]">
                  {lang === 'es' ? '¿Qué es el HTLV?' : 'What is HTLV?'}
                </h2>
                <p className="text-[17px] text-[#443333] leading-relaxed">
                  {lang === 'es'
                    ? 'El Virus Linfotrópico de Células T Humanas (HTLV) es un retrovirus descubierto en 1980 que infecta de manera preferencial a los linfocitos T del sistema inmunitario (CD4+ y CD8+). A través de la enzima transcriptasa reversa, el virus integra su código genético en el ADN del huésped en forma de provirus.'
                    : 'Human T-cell Lymphotropic Virus (HTLV) is a retrovirus discovered in 1980 that preferentially infects T-lymphocytes (CD4+ and CD8+). Using reverse transcriptase, it irreversibly integrates into the host cell DNA as a provirus.'}
                </p>
                <div className="p-5 bg-[#f8f9fb] border border-[#dcc0c0] rounded-2xl text-[16px] text-[#564242] space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#5b0617]">
                    <span className="material-symbols-outlined">info</span>
                    <span>{lang === 'es' ? 'Punto Clave:' : 'Key Takeaway:'}</span>
                  </div>
                  <p>
                    {lang === 'es'
                      ? 'A diferencia de otros virus, el HTLV se propaga dentro del cuerpo principalmente por división celular clonal (mitosis de células infectadas), manteniendo una estabilidad genética muy alta.'
                      : 'Unlike many other viruses, HTLV persists within the body mainly via clonal expansion of infected host cells rather than continuous plasma viral replication.'}
                  </p>
                </div>
              </div>
            )}

            {/* 2. Tipos */}
            {activeTopic === 'tipos' && (
              <div className="space-y-5 animate-fadeIn">
                <span className="px-3 py-1 bg-[#ffdada] text-[#5b0617] text-[12px] font-black uppercase tracking-wider rounded-lg inline-block">
                  {lang === 'es' ? 'Clasificación' : 'Classification'}
                </span>
                <h2 className="text-[26px] font-black text-[#191c1e]">
                  {lang === 'es' ? 'HTLV-1 frente a HTLV-2' : 'HTLV-1 vs HTLV-2'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                  <div className="p-6 bg-[#f8f9fb] border-2 border-[#5b0617]/30 rounded-2xl space-y-2">
                    <span className="text-[13px] font-black uppercase tracking-wider text-[#5b0617] block">
                      HTLV-1 (Tipo 1)
                    </span>
                    <h3 className="text-[20px] font-black text-[#191c1e]">
                      {lang === 'es' ? 'Relevancia Clínica Mayor' : 'Major Clinical Impact'}
                    </h3>
                    <p className="text-[15px] text-[#564242] leading-relaxed">
                      {lang === 'es'
                        ? 'Es el agente causal de la Paraparesia Espástica Tropical (HAM/TSP) y de la Leucemia/Linfoma de Células T del Adulto (ATL). Altamente prevalente en Perú, Japón, Brasil y el Caribe.'
                        : 'Causal agent of Tropical Spastic Paraparesis (HAM/TSP) and Adult T-cell Leukemia (ATL). Highly prevalent in Peru, Japan, Brazil, and the Caribbean.'}
                    </p>
                  </div>

                  <div className="p-6 bg-[#f8f9fb] border-2 border-[#1d2b3a]/30 rounded-2xl space-y-2">
                    <span className="text-[13px] font-black uppercase tracking-wider text-[#1d2b3a] block">
                      HTLV-2 (Tipo 2)
                    </span>
                    <h3 className="text-[20px] font-black text-[#191c1e]">
                      {lang === 'es' ? 'Curso Generalmente Benigno' : 'Mostly Benign Course'}
                    </h3>
                    <p className="text-[15px] text-[#564242] leading-relaxed">
                      {lang === 'es'
                        ? 'Infecta predominantemente linfocitos CD8+. Se encuentra en poblaciones indígenas del continente americano. Rara vez se asocia a sintomatología neurológica.'
                        : 'Predominantly infects CD8+ T-cells. Found in indigenous populations across the Americas. Rarely linked to neurological disorders.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Espectro 90/10 */}
            {activeTopic === 'espectro' && (
              <div className="space-y-5 animate-fadeIn">
                <span className="px-3 py-1 bg-[#ffdada] text-[#5b0617] text-[12px] font-black uppercase tracking-wider rounded-lg inline-block">
                  {lang === 'es' ? 'Evolución Clínica' : 'Clinical Evolution'}
                </span>
                <h2 className="text-[26px] font-black text-[#191c1e]">
                  {lang === 'es' ? 'La Regla del 90/10' : 'The 90/10 Rule'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                  <div className="p-6 bg-[#ffdada]/40 border-2 border-[#5b0617] rounded-2xl text-center space-y-2">
                    <span className="text-[46px] font-black text-[#5b0617] block leading-none">~90%</span>
                    <h3 className="text-[19px] font-black text-[#191c1e]">
                      {lang === 'es' ? 'Portadores Asintomáticos' : 'Asymptomatic Carriers'}
                    </h3>
                    <p className="text-[15px] text-[#564242] leading-relaxed">
                      {lang === 'es'
                        ? 'La inmensa mayoría de las personas con HTLV-1 conviven con el virus de forma estable y NUNCA desarrollarán ninguna enfermedad grave.'
                        : 'The vast majority live completely healthy lives and will NEVER develop severe disease throughout their lifetime.'}
                    </p>
                  </div>

                  <div className="p-6 bg-[#f8f9fb] border border-[#dcc0c0] rounded-2xl text-center space-y-2">
                    <span className="text-[46px] font-black text-[#1d2b3a] block leading-none">5% - 10%</span>
                    <h3 className="text-[19px] font-black text-[#191c1e]">
                      {lang === 'es' ? 'Riesgo a Largo Plazo' : 'Long-term Risk'}
                    </h3>
                    <p className="text-[15px] text-[#564242] leading-relaxed">
                      {lang === 'es'
                        ? 'HAM/TSP (2%-3%), Leucemia ATL (2%-5%), o afecciones inflamatorias oculares/cutáneas tratables con seguimiento médico oportuno.'
                        : 'HAM/TSP (2%-3%), ATL (2%-5%), or inflammatory ocular/skin manifestations manageable with clinical care.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 4. Transmisión */}
            {activeTopic === 'transmision' && (
              <div className="space-y-4 animate-fadeIn">
                <span className="px-3 py-1 bg-[#ffdada] text-[#5b0617] text-[12px] font-black uppercase tracking-wider rounded-lg inline-block">
                  {lang === 'es' ? 'Prevención y Cuidados' : 'Prevention & Care'}
                </span>
                <h2 className="text-[26px] font-black text-[#191c1e]">
                  {lang === 'es' ? 'Vías de Transmisión Comprobadas' : 'Confirmed Transmission Routes'}
                </h2>
                <div className="space-y-3 pt-1 text-[15.5px] text-[#443333]">
                  <div className="p-4 bg-[#f8f9fb] border border-[#dcc0c0] rounded-2xl flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#5b0617] text-2xl">child_care</span>
                    <p>
                      <strong>{lang === 'es' ? 'Lactancia Materna Prolongada:' : 'Prolonged Breastfeeding:'}</strong> {lang === 'es' ? 'Principal vía vertical (>6 meses). Se previene con tamizaje prenatal y uso de sucedáneos.' : 'Primary vertical route. Prevented via prenatal screening and formula feeding.'}
                    </p>
                  </div>
                  <div className="p-4 bg-[#f8f9fb] border border-[#dcc0c0] rounded-2xl flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#5b0617] text-2xl">favorite_border</span>
                    <p>
                      <strong>{lang === 'es' ? 'Relaciones Sexuales sin Barrera:' : 'Unprotected Sexual Contact:'}</strong> {lang === 'es' ? 'Mayor eficiencia de hombre a mujer. Se previene con el uso consistente del preservativo.' : 'Higher male-to-female efficiency. Prevented through consistent condom use.'}
                    </p>
                  </div>
                  <div className="p-4 bg-[#f8f9fb] border border-[#dcc0c0] rounded-2xl flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#5b0617] text-2xl">bloodtype</span>
                    <p>
                      <strong>{lang === 'es' ? 'Transfusión Sanguínea Celular:' : 'Cellular Blood Transfusion:'}</strong> {lang === 'es' ? 'Controlada en bancos de sangre tamizados. No se contagia por contacto casual.' : 'Controlled via universal blood bank screening. Not spread by casual contact.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 5. FAQs */}
            {activeTopic === 'faqs' && (
              <div className="space-y-4 animate-fadeIn">
                <span className="px-3 py-1 bg-[#ffdada] text-[#5b0617] text-[12px] font-black uppercase tracking-wider rounded-lg inline-block">
                  {lang === 'es' ? 'Consenso de Expertos' : 'Expert Consensus'}
                </span>
                <h2 className="text-[26px] font-black text-[#191c1e]">
                  {lang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
                </h2>
                <div className="space-y-3 pt-1">
                  {faqs.map((f, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className="border border-[#dcc0c0] rounded-2xl overflow-hidden bg-[#f8f9fb]">
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full p-4 text-left font-bold text-[16px] text-[#191c1e] hover:text-[#5b0617] flex items-center justify-between gap-3 cursor-pointer"
                        >
                          <span>{f.q}</span>
                          <span className="material-symbols-outlined text-2xl text-[#5b0617]">
                            {isOpen ? 'expand_less' : 'expand_more'}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="p-4 pt-0 text-[15px] text-[#564242] leading-relaxed border-t border-[#dcc0c0]/50 bg-white">
                            <p className="pt-2">{f.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Pie del Panel Derecho */}
            <div className="pt-6 border-t border-[#dcc0c0]/60 flex items-center justify-between text-[14px]">
              <span className="text-[#897172]">
                {lang === 'es' ? 'Respaldo científico UPCH & Imperial College' : 'Scientific backing by UPCH & Imperial College'}
              </span>
              <Link 
                href="/pacientes"
                className="text-[#5b0617] font-black hover:underline flex items-center gap-1"
              >
                <span>{lang === 'es' ? 'Enviar una pregunta al equipo' : 'Submit a question to the team'}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
