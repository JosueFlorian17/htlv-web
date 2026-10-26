"use client";

import { useState, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';
import { filterFaqsSemantically } from '../../utils/semanticFaqSearch';

function HTLVContent() {
  const { lang, t } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabFromUrl = searchParams.get('tab');

  const [activeTab, setActiveTab] = useState(tabFromUrl || 'que-es');
  const [activeTopic, setActiveTopic] = useState('definicion');
  const [openFaqs, setOpenFaqs] = useState({ 1: true });
  const [searchQuery, setSearchQuery] = useState('');

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

  // Filtrado semántico inteligente con soporte de sinónimos
  const filteredFaqs = useMemo(() => {
    return filterFaqsSemantically(faqs, searchQuery);
  }, [faqs, searchQuery]);

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
      q: lang === 'es' ? "¿Qué rol cumple la Red HTLV frente al virus?" : "What role does the HTLV Network play regarding the virus?",
      a: lang === 'es'
        ? "Conecta a instituciones académicas, hospitales y grupos científicos para generar investigación colaborativa, capacitar al personal de salud, promover políticas de tamizaje y brindar información médica validada y humana a pacientes."
        : "It connects academic institutions, hospitals, and scientific groups to conduct collaborative research, train healthcare professionals, advance screening policies, and provide validated, compassionate information to patients."
    }
  ], [lang]);


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
        {activeTab === 'faqs' && (
          <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto py-2">
            
            {/* Encabezado limpio con Buscador Semántico */}
            <div className="border-b border-slate-200 pb-6 space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-[#003B49]">
                  {lang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  {lang === 'es' 
                    ? 'Respuestas fundamentales basadas en evidencia científica sobre el HTLV.'
                    : 'Key evidence-based answers about HTLV.'}
                </p>
              </div>

              {/* Buscador Semántico con manejo de sinónimos y conceptos */}
              <div className="relative max-w-2xl">
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-xl pointer-events-none">
                    search
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      lang === 'es'
                        ? 'Busca por tema, síntoma o duda (ej. "contagio", "dolor piernas", "bebé", "cura")...'
                        : 'Search by topic, symptom or question (e.g., "transmission", "gait", "baby", "cure")...'
                    }
                    className="w-full pl-11 pr-10 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#087E8B] focus:border-transparent shadow-xs transition-all"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 p-1 text-slate-400 hover:text-slate-600 rounded-md transition-colors"
                      aria-label="Limpiar búsqueda"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Sugerencias de palabras clave / sinónimos frecuentes */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 text-xs text-slate-500">
                  <span className="font-semibold text-slate-600">
                    {lang === 'es' ? 'Temas sugeridos:' : 'Suggested topics:'}
                  </span>
                  {[
                    { label: lang === 'es' ? 'Transmisión / Contagio' : 'Transmission', q: 'transmision' },
                    { label: lang === 'es' ? 'Paraparesia / Marcha' : 'TSP/HAM', q: 'paraparesia' },
                    { label: lang === 'es' ? 'Lactancia y Maternidad' : 'Breastfeeding', q: 'lactancia' },
                    { label: lang === 'es' ? 'Diferencia con VIH' : 'HIV comparison', q: 'vih' },
                    { label: lang === 'es' ? 'Tratamiento y Cura' : 'Treatment & Cure', q: 'tratamiento' },
                    { label: lang === 'es' ? 'Donar Sangre' : 'Blood Donation', q: 'sangre' }
                  ].map((topic, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSearchQuery(topic.q)}
                      className={`px-2.5 py-1 rounded-full border text-[11px] transition-colors cursor-pointer ${
                        searchQuery.toLowerCase() === topic.q
                          ? 'bg-[#003B49] text-white border-[#003B49]'
                          : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {topic.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contador de resultados cuando hay búsqueda */}
            {searchQuery && (
              <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                <span>
                  {lang === 'es'
                    ? `Mostrando ${filteredFaqs.length} resultado(s) relevante(s) para "${searchQuery}"`
                    : `Showing ${filteredFaqs.length} relevant result(s) for "${searchQuery}"`}
                </span>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-[#087E8B] hover:underline font-semibold"
                >
                  {lang === 'es' ? 'Ver todas' : 'View all'}
                </button>
              </div>
            )}

            {/* Listado de Preguntas Colapsables */}
            <div className="space-y-3 divide-y divide-slate-200">
              {filteredFaqs.length === 0 ? (
                <div className="py-12 text-center space-y-2 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="material-symbols-outlined text-4xl text-slate-400">help_outline</span>
                  <p className="text-sm font-semibold text-slate-700">
                    {lang === 'es'
                      ? 'No encontramos respuestas exactas para esta búsqueda.'
                      : 'No exact matches found for this query.'}
                  </p>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    {lang === 'es'
                      ? 'Prueba buscando con otros términos o consulta en el módulo "Haz tu pregunta".'
                      : 'Try using other related keywords or ask your inquiry directly.'}
                  </p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-2 text-xs font-bold text-[#087E8B] hover:underline"
                  >
                    {lang === 'es' ? 'Mostrar todas las preguntas' : 'Show all questions'}
                  </button>
                </div>
              ) : (
                filteredFaqs.map((f, idx) => {
                const isOpen = !!openFaqs[f.id];
                return (
                  <div key={f.id} className={idx === 0 ? "pt-0" : "pt-3"}>
                    <button
                      onClick={() => toggleFaq(f.id)}
                      className="w-full text-left flex items-start justify-between gap-4 py-2 hover:text-[#087E8B] transition-colors cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087E8B]"
                      aria-expanded={isOpen}
                    >
                      <h3 className="text-base sm:text-lg font-bold text-[#003B49] group-hover:text-[#087E8B] leading-snug">
                        {f.q}
                      </h3>
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-[#087E8B] text-xl shrink-0 transition-transform duration-150 mt-0.5">
                        {isOpen ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-2 pb-3 space-y-3 animate-fadeIn">
                        <p className="text-sm text-slate-700 leading-relaxed font-normal">
                          {f.a}
                        </p>
                        <div className="pt-2 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-500 italic">
                          <span className="material-symbols-outlined text-[15px] text-[#087E8B] shrink-0 mt-0.5">info</span>
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
              }))}
            </div>

            {/* Aviso Importante Disclaimer Sintetizado */}
            <div className="mt-8 p-5 bg-slate-50 border-l-4 border-[#087E8B] rounded-r-xl text-xs sm:text-sm text-slate-600 leading-relaxed space-y-1.5">
              <div className="flex items-center gap-2 text-[#003B49] font-bold text-sm">
                <span className="material-symbols-outlined text-lg text-[#087E8B]">info</span>
                <span>{lang === 'es' ? 'Aviso importante' : 'Important Notice'}</span>
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
