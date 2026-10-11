"use client";

import { useState, useEffect, useMemo, Suspense } from 'react';
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
  const [openFaqs, setOpenFaqs] = useState({ 1: true });

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

  const faqs = useMemo(() => [
    {
      id: 1,
      category: 'general',
      categoryLabel: lang === 'es' ? 'Conceptos Clave' : 'Key Concepts',
      q: lang === 'es' ? "¿Qué significa tener HTLV-1 y en qué se diferencia del VIH?" : "What does having HTLV-1 mean and how is it different from HIV?",
      a: lang === 'es'
        ? "El HTLV y el VIH son retrovirus que infectan linfocitos, pero son virus totalmente distintos. El HTLV-1 NO produce inmunodeficiencia generalizada (SIDA). Cerca del 90% de las personas infectadas permanecen asintomáticas durante toda su vida sin desarrollar complicaciones graves."
        : "HTLV and HIV are both retroviruses infecting lymphocytes, but they are entirely different viruses. HTLV-1 DOES NOT cause generalized immunodeficiency (AIDS). Approximately 90% of individuals remain asymptomatic carriers throughout their lives."
    },
    {
      id: 2,
      category: 'clinica',
      categoryLabel: lang === 'es' ? 'Evolución Clínica' : 'Clinical Course',
      q: lang === 'es' ? "¿Cuáles son las principales enfermedades asociadas al HTLV-1?" : "What are the primary diseases associated with HTLV-1?",
      a: lang === 'es'
        ? "Solo entre el 5% y 10% de los portadores pueden desarrollar con los años: 1) Paraparesia Espástica Tropical (HAM/TSP), un cuadro neuroinflamatorio crónico que afecta la marcha y la función urinaria; 2) Leucemia/Linfoma de Células T del Adulto (ATL); o 3) Manifestaciones inflamatorias como uveítis o dermatitis infecciosa."
        : "Only 5% to 10% of carriers may develop complications over decades: 1) Tropical Spastic Paraparesis (HAM/TSP), a neuro-inflammatory disease affecting gait and bladder control; 2) Adult T-cell Leukemia/Lymphoma (ATL); or 3) Inflammatory conditions such as uveitis."
    },
    {
      id: 3,
      category: 'transmision',
      categoryLabel: lang === 'es' ? 'Transmisión' : 'Transmission',
      q: lang === 'es' ? "¿Se contagia por contacto casual, abrazos o compartir vajilla?" : "Can HTLV be transmitted through casual contact, hugs, or sharing utensils?",
      a: lang === 'es'
        ? "NO. El HTLV requiere células vivas infectadas para pasar de una persona a otra. No se transmite por saliva, sudor, abrazos, besos, cubiertos, inodoros ni picaduras de mosquitos. La convivencia familiar diaria en el hogar y en el trabajo es 100% segura."
        : "NO. HTLV requires living infected cells for transmission. It cannot spread through saliva, sweat, hugging, kissing, shared plates, toilets, or mosquito bites. Daily family interaction is completely safe."
    },
    {
      id: 4,
      category: 'transmision',
      categoryLabel: lang === 'es' ? 'Vías de Transmisión' : 'Transmission Routes',
      q: lang === 'es' ? "¿Cómo se transmite realmente el virus?" : "How is the virus actually transmitted?",
      a: lang === 'es'
        ? "Principalmente por tres vías demostradas: 1) De madre a hijo a través de la lactancia materna prolongada (mayor a 6 meses); 2) Vía sexual mediante relaciones sexuales sin preservativo; 3) Vía sanguínea o tisular a través de transfusiones de sangre celular no tamizadas o trasplantes."
        : "Mainly through three proven routes: 1) Mother-to-child via prolonged breastfeeding (>6 months); 2) Sexual transmission through unprotected intercourse; 3) Blood transmission through unscreened cellular blood products or transplants."
    },
    {
      id: 5,
      category: 'familia',
      categoryLabel: lang === 'es' ? 'Maternidad y Familia' : 'Maternity & Family',
      q: lang === 'es' ? "¿Puede una persona con HTLV tener hijos de forma segura?" : "Can a person with HTLV have children safely?",
      a: lang === 'es'
        ? "Sí. Si el padre es positivo y la madre no, no hay transmisión al bebé durante la gestación. Si la madre es portadora, el riesgo de transmisión en embarazo y parto es inferior al 3-5%. Sustituyendo la lactancia materna por fórmulas lácteas de inicio (sucedáneos), la probabilidad de transmisión al bebé se reduce a prácticamente cero."
        : "Yes. If the father is positive and the mother is negative, there is no transmission to the baby. If the mother is positive, risk during pregnancy and childbirth is under 3-5%. By substituting breastfeeding with infant formula, infant infection risk drops to nearly zero."
    },
    {
      id: 6,
      category: 'donacion',
      categoryLabel: lang === 'es' ? 'Donación de Sangre' : 'Blood Donation',
      q: lang === 'es' ? "¿Se puede donar sangre teniendo HTLV?" : "Can someone with HTLV donate blood?",
      a: lang === 'es'
        ? "No. Las normativas de bioseguridad en bancos de sangre excluyen a personas reactivas a HTLV para donar sangre, componentes celulares u órganos. Sin embargo, si una persona con HTLV requiere una transfusión por indicación médica, puede recibirla sin ningún inconveniente."
        : "No. Standard blood banking biosafety rules exclude HTLV-reactive individuals from blood, cellular, or organ donation. However, individuals with HTLV can safely receive transfusions if medically necessary."
    },
    {
      id: 7,
      category: 'tratamiento',
      categoryLabel: lang === 'es' ? 'Tratamiento y Cura' : 'Treatment & Cure',
      q: lang === 'es' ? "¿Existe una cura definitiva para el HTLV?" : "Is there a definitive cure for HTLV?",
      a: lang === 'es'
        ? "Actualmente no existe una cura o vacuna que erradique el virus, pues se integra como provirus en el ADN celular. No obstante, más del 90% no necesita tratamiento alguno al mantenerse asintomático. Para quienes presentan HAM/TSP o ATL, existen tratamientos inmunomoduladores, quimioterápicos y fisioterapia para preservar la salud."
        : "There is currently no cure or vaccine to clear the provirus integrated into cellular DNA. However, over 90% of people require no treatment as they remain asymptomatic. For those who develop HAM/TSP or ATL, immunomodulatory therapies, chemotherapy, and physical therapy are available."
    },
    {
      id: 8,
      category: 'clinica',
      categoryLabel: lang === 'es' ? 'Neurología (HAM/TSP)' : 'Neurology (HAM/TSP)',
      q: lang === 'es' ? "¿Qué síntomas alertan sobre el inicio de HAM/TSP?" : "What symptoms alert to the onset of HAM/TSP?",
      a: lang === 'es'
        ? "Se manifiesta típicamente en adultos con pesadez, rigidez o debilidad progresiva en las extremidades inferiores, dificultad para subir gradas, espasmos musculares nocturnos, dolor en la zona lumbar y urgencia o retención urinaria. El diagnóstico oportuno permite comenzar fisioterapia e inmunomodulación de inmediato."
        : "Typically presents in adulthood with leg stiffness or weakness, difficulty climbing steps, nocturnal muscle spasms, lumbar pain, and urinary urgency or hesitancy. Early recognition allows prompt physical rehabilitation and therapy."
    },
    {
      id: 9,
      category: 'clinica',
      categoryLabel: lang === 'es' ? 'Hematología (ATL)' : 'Hematology (ATL)',
      q: lang === 'es' ? "¿Qué es la Leucemia/Linfoma de Células T del Adulto (ATL)?" : "What is Adult T-cell Leukemia/Lymphoma (ATL)?",
      a: lang === 'es'
        ? "Es un tipo infrecuente de neoplasia linfoide que afecta a menos del 5% de las personas infectadas con HTLV-1, habitualmente tras décadas de portar el virus (vinculado a la transmisión temprana en la infancia). Puede manifestarse con alteraciones cutáneas, ganglios inflamados o cifras elevadas de calcio en sangre."
        : "A rare lymphoid malignancy developing in fewer than 5% of HTLV-1 carriers, usually decades after infection (linked to infant transmission). It can present with skin lesions, enlarged lymph nodes, or elevated calcium."
    },
    {
      id: 10,
      category: 'general',
      categoryLabel: lang === 'es' ? 'Tipos de Virus' : 'Virus Types',
      q: lang === 'es' ? "¿Cuál es la diferencia entre HTLV-1 y HTLV-2?" : "What is the difference between HTLV-1 and HTLV-2?",
      a: lang === 'es'
        ? "Aunque comparten vías de transmisión similares, el HTLV-1 es el causante de HAM/TSP y ATL. El HTLV-2 presenta un curso fundamentalmente benigno, raramente causa patología neurológica y no se asocia con leucemias."
        : "While sharing similar transmission routes, HTLV-1 causes HAM/TSP and ATL. HTLV-2 runs a predominantly benign course, very rarely produces neurological disease, and is not linked to leukemias."
    },
    {
      id: 11,
      category: 'diagnostico',
      categoryLabel: lang === 'es' ? 'Diagnóstico' : 'Diagnosis',
      q: lang === 'es' ? "¿Cómo se confirma la prueba si el tamizaje da reactivo?" : "How is the test confirmed if screening is reactive?",
      a: lang === 'es'
        ? "Cualquier prueba de tamizaje serológico (ELISA/ECLIA) reactiva debe confirmarse siempre mediante Western Blot o PCR proviral. Esto descarta falsos positivos y determina si el virus corresponde a HTLV-1 o HTLV-2."
        : "Any reactive serological screening (ELISA/ECLIA) must always be validated via Western Blot or proviral PCR. This eliminates false positives and distinguishes between HTLV-1 and HTLV-2."
    },
    {
      id: 12,
      category: 'clinica',
      categoryLabel: lang === 'es' ? 'Controles Periódicos' : 'Routine Checkups',
      q: lang === 'es' ? "¿Qué seguimiento debe llevar un portador asintomático?" : "What follow-up should an asymptomatic carrier maintain?",
      a: lang === 'es'
        ? "Una consulta anual con un médico especialista (infectología, neurología o medicina interna), incluyendo examen neurológico motor y un hemograma con frotis periférico para evaluar linfocitos."
        : "An annual consultation with a specialist (infectious diseases, neurology, or internal medicine), including motor neurological testing and a complete blood count with peripheral smear."
    },
    {
      id: 13,
      category: 'general',
      categoryLabel: lang === 'es' ? 'Estilo de Vida' : 'Lifestyle',
      q: lang === 'es' ? "¿El estrés o el ejercicio influyen en el virus?" : "Does stress or exercise affect the virus?",
      a: lang === 'es'
        ? "El HTLV mantiene una carga proviral integrada estable y no se 'reactiva' por disgustos puntuales. Mantener actividad física habitual y nutrición equilibrada promueve el bienestar inmunológico general."
        : "HTLV maintains a stable integrated proviral load and does not reactivate from acute stress. Regular physical activity and balanced nutrition support overall immune health."
    },
    {
      id: 14,
      category: 'general',
      categoryLabel: lang === 'es' ? 'Salud Pública' : 'Public Health',
      q: lang === 'es' ? "¿Qué rol cumple la Red RIII-HTLV frente al virus?" : "What role does the RIII-HTLV Network play regarding the virus?",
      a: lang === 'es'
        ? "Conecta a instituciones académicas, hospitales y grupos científicos para generar investigación colaborativa, capacitar al personal de salud, promover políticas de tamizaje y brindar información médica validada y humana a pacientes."
        : "It connects academic institutions, hospitals, and scientific groups to conduct collaborative research, train healthcare professionals, advance screening policies, and provide validated, compassionate information to patients."
    }
  ], [lang]);


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

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="bg-[#A10D3A] hover:bg-[#850a2f] text-white px-5 py-2.5 rounded-xl text-[14px] font-bold transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
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
                    <span className="px-3 py-1 bg-[#087E8B]/10 text-[#087E8B] text-[12px] font-black uppercase rounded-md inline-block">
                      Clasificación
                    </span>
                    <h3 className="text-[26px] font-black text-[#003B49]">
                      {lang === 'es' ? 'Diferencias entre HTLV-1 y HTLV-2' : 'Differences between HTLV-1 & HTLV-2'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="p-5 bg-[#003B49]/5 border border-[#003B49]/20 rounded-2xl space-y-2">
                        <h4 className="font-bold text-[18px] text-[#003B49]">HTLV-1</h4>
                        <p className="text-[14.5px] text-[#554444]">
                          {lang === 'es'
                            ? 'Asociado principalmente a Paraparesia Espástica Tropical (HAM/TSP) y Leucemia/Linfoma de Células T del Adulto (ATL).'
                            : 'Associated primarily with Tropical Spastic Paraparesis (HAM/TSP) and Adult T-cell Leukemia/Lymphoma (ATL).'}
                        </p>
                      </div>
                      <div className="p-5 bg-[#087E8B]/5 border border-[#087E8B]/20 rounded-2xl space-y-2">
                        <h4 className="font-bold text-[18px] text-[#087E8B]">HTLV-2</h4>
                        <p className="text-[14.5px] text-[#554444]">
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


              </div>

            </div>
          </div>
        )}

        {/* 2. PESTAÑA: PREGUNTAS FRECUENTES (Formato de corrido, sin buscador, sin cards ni categorías) */}
        {activeTab === 'faqs' && (
          <div className="space-y-10 animate-fadeIn max-w-4xl mx-auto py-2">
            
            {/* Encabezado limpio */}
            <div className="border-b border-gray-200 pb-4">
              <h2 className="text-2xl md:text-3xl font-black text-[#003B49]">
                {lang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
              </h2>
              <p className="text-gray-600 text-[15px] mt-1">
                {lang === 'es' 
                  ? 'Respuestas fundamentales basadas en evidencia científica sobre el HTLV.'
                  : 'Key evidence-based answers about HTLV.'}
              </p>
            </div>

            {/* Listado de Preguntas Colapsables con Disclaimer Resumido */}
            <div className="space-y-4 divide-y divide-gray-200">
              {faqs.map((f, idx) => {
                const isOpen = !!openFaqs[f.id];
                return (
                  <div key={f.id} className={idx === 0 ? "pt-0" : "pt-4"}>
                    <button
                      onClick={() => toggleFaq(f.id)}
                      className="w-full text-left flex items-start justify-between gap-4 py-2 hover:text-[#087E8B] transition-colors cursor-pointer group"
                      aria-expanded={isOpen}
                    >
                      <h3 className="text-[19px] md:text-[21px] font-bold text-[#003B49] group-hover:text-[#087E8B] leading-snug">
                        {f.q}
                      </h3>
                      <span className="material-symbols-outlined text-gray-500 group-hover:text-[#087E8B] text-2xl shrink-0 transition-transform duration-200 mt-0.5">
                        {isOpen ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-2 pb-4 space-y-3 animate-fadeIn">
                        <p className="text-[16px] text-gray-700 leading-relaxed font-normal">
                          {f.a}
                        </p>
                        <div className="pt-2.5 border-t border-gray-100 flex items-start gap-2 text-[13px] text-gray-500 italic">
                          <span className="material-symbols-outlined text-[16px] text-[#087E8B] shrink-0 mt-0.5">info</span>
                          <span>
                            {lang === 'es'
                              ? 'Aviso informativo: Este contenido es exclusivamente educativo y divulgativo; no constituye diagnóstico clínico ni sustituye la atención médica profesional.'
                              : 'Informational note: This content is for educational purposes only; it does not constitute clinical diagnosis or replace professional medical care.'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Aviso Médico Disclaimer Sintetizado */}
            <div className="mt-12 p-6 bg-gray-50 border-l-4 border-[#087E8B] rounded-r-2xl text-[14px] text-gray-600 leading-relaxed space-y-2">
              <div className="flex items-center gap-2 text-[#003B49] font-bold text-[15px]">
                <span className="material-symbols-outlined text-[20px] text-[#087E8B]">info</span>
                <span>{lang === 'es' ? 'Aviso Médico Importante' : 'Important Medical Disclaimer'}</span>
              </div>
              <p>
                {lang === 'es'
                  ? 'La información contenida en este sitio web se presenta únicamente con fines informativos y educativos. No constituye un diagnóstico ni tratamiento profesional. Siempre busque el consejo de su médico u otro proveedor de salud calificado ante cualquier duda sobre una condición médica. Nunca ignore el consejo médico profesional ni demore su búsqueda debido a algo que haya leído en este sitio.'
                  : 'The information contained on this website is presented solely for educational and informational purposes and does not constitute professional medical diagnosis or treatment. Always seek the advice of your physician or qualified health provider regarding any medical condition. Never ignore professional medical advice or delay seeking it because of something you have read on this site.'}
              </p>
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
