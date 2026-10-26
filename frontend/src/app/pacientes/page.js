"use client";

import { useState, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';
import { filterFaqsSemantically } from '../../utils/semanticFaqSearch';

function PacientesContent() {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabFromUrl = searchParams.get('tab');

  // Pestañas acordadas: 1. preguntas frecuentes, 2. recursos, 3. haz tu pregunta
  const [activeTab, setActiveTab] = useState(tabFromUrl || 'faqs');

  useEffect(() => {
    if (tabFromUrl && ['faqs', 'recursos', 'haz-tu-pregunta'].includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  const switchTab = (tabId) => {
    setActiveTab(tabId);
    router.push(`/pacientes?tab=${tabId}`, { scroll: false });
  };

  // FAQs colapsables
  const [openFaqs, setOpenFaqs] = useState({ 1: true });
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const toggleFaq = (id) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filtrado semántico inteligente con soporte de sinónimos para pacientes
  const filteredPatientFaqs = useMemo(() => {
    return filterFaqsSemantically(patientFaqs, faqSearchQuery);
  }, [patientFaqs, faqSearchQuery]);

  // Modal para visualización de folletos superpuesto a la pantalla
  const [selectedBrochure, setSelectedBrochure] = useState(null);

  // Descarga limpia sin popups invasivos
  const handleDownloadDoc = (title) => {
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', `${title.replace(/\s+/g, '_')}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Formulario Haz tu pregunta
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    pais: '',
    tema: 'diagnostico',
    pregunta: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.pregunta) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const patientFaqs = useMemo(() => [
    {
      id: 1,
      category: 'general',
      categoryLabel: lang === 'es' ? 'Conceptos Clave' : 'Key Concepts',
      q: lang === 'es' 
        ? "¿Qué significa tener HTLV-1 y en qué se diferencia del VIH?" 
        : "What does having HTLV-1 mean and how is it different from HIV?",
      a: lang === 'es' 
        ? "El HTLV-1 (Virus Linfotrópico de Células T Humanas tipo 1) y el VIH son retrovirus que infectan glóbulos blancos (linfocitos T), pero son virus totalmente distintos. El HTLV-1 NO produce inmunodeficiencia generalizada (SIDA) ni destruye masivamente las defensas. Más del 90% de las personas que viven con HTLV-1 permanecen como portadores asintomáticos a lo largo de toda su vida, con una expectativa y calidad de vida plenamente normales."
        : "HTLV-1 (Human T-cell Lymphotropic Virus type 1) and HIV are both retroviruses infecting T-cells, but they are completely different viruses. HTLV-1 DOES NOT cause AIDS nor does it deplete general immune defenses. Over 90% of individuals living with HTLV-1 remain asymptomatic carriers throughout their lives, enjoying full and healthy longevity.",
      highlight: lang === 'es' ? "El 90% de portadores vive sin desarrollar jamás complicaciones." : "90% of carriers live without ever developing complications."
    },
    {
      id: 2,
      category: 'salud',
      categoryLabel: lang === 'es' ? 'Evolución Clínica' : 'Clinical Course',
      q: lang === 'es'
        ? "¿Cuáles son las probabilidades reales de enfermar si di positivo? (La regla del 90/10)"
        : "What are the actual chances of falling ill if I test positive? (The 90/10 rule)",
      a: lang === 'es'
        ? "Aproximadamente el 90% de las personas portadoras nunca desarrollarán ninguna enfermedad vinculada al virus. Solo entre un 5% y un 10% de los portadores pueden, tras varias décadas de portar el virus, manifestar alguna de las dos complicaciones principales: 1) Paraparesia Espástica Tropical (HAM/TSP), una condición neuroinflamatoria que afecta la marcha y la función urinaria; o 2) Leucemia/Linfoma de Células T del Adulto (ATL), una patología hematológica. Los controles periódicos garantizan tranquilidad y detección oportuna."
        : "Approximately 90% of carriers never develop any virus-related condition. Only 5% to 10% may, after decades of carrying the virus, develop one of two main complications: 1) Tropical Spastic Paraparesis (HAM/TSP), a neuroinflammatory disorder affecting walking and bladder control; or 2) Adult T-cell Leukemia/Lymphoma (ATL), a hematologic condition. Routine checkups provide reassurance and early monitoring.",
      highlight: lang === 'es' ? "Tener el virus no significa estar enfermo ni tener una sentencia de enfermedad." : "Carrying the virus does not mean being sick or having an illness sentence."
    },
    {
      id: 3,
      category: 'transmision',
      categoryLabel: lang === 'es' ? 'Vías de Transmisión' : 'Transmission Routes',
      q: lang === 'es'
        ? "¿Cómo se transmite realmente el virus HTLV?"
        : "How is HTLV actually transmitted?",
      a: lang === 'es'
        ? "El HTLV requiere células vivas infectadas para pasar de una persona a otra. Se transmite exclusivamente a través de tres vías demostradas: 1) De madre a hijo: principalmente por lactancia materna prolongada (mayor a 6 meses); 2) Vía sexual: mediante relaciones sexuales sin preservativo (el preservativo previene con gran eficacia la transmisión); 3) Vía sanguínea o de órganos: mediante transfusiones de sangre celular no tamizada o trasplantes (en los bancos de sangre modernos, todas las unidades son tamizadas obligatoriamente)."
        : "HTLV requires living infected cells to transmit between individuals. Transmission occurs exclusively through three proven pathways: 1) Mother-to-child: mainly via prolonged breastfeeding (>6 months); 2) Sexual contact: through intercourse without barrier protection (condoms provide effective protection); 3) Cellular blood or tissue route: via unscreened cellular blood products or transplants (mandatory screening is standard in accredited blood banks).",
      highlight: lang === 'es' ? "El preservativo y la sustitución de lactancia eliminan las principales vías de transmisión." : "Condoms and nursing substitution eliminate key transmission pathways."
    },
    {
      id: 4,
      category: 'familia',
      categoryLabel: lang === 'es' ? 'Convivencia Familiar' : 'Household Living',
      q: lang === 'es'
        ? "¿Puedo contagiar a mis familiares o amigos al convivir con ellos en casa?"
        : "Can I transmit the virus to family or friends by living together at home?",
      a: lang === 'es'
        ? "NO. El HTLV-1 NO se transmite por saliva, lágrimas, sudor, tos ni estornudos. Tampoco se transmite por abrazar, besar en la mejilla, dar la mano, compartir platos, vasos, cubiertos, ropa, camas, baños ni piscinas. La convivencia familiar en el hogar, la escuela y el centro de trabajo es 100% segura y no representa ningún riesgo de transmisión."
        : "NO. HTLV-1 is NOT spread through saliva, tears, sweat, coughing, or sneezing. It cannot be transmitted by hugging, cheek kissing, handshakes, sharing dishes, cups, cutlery, clothes, beds, bathrooms, or swimming pools. Living together with family and working alongside colleagues is 100% safe.",
      highlight: lang === 'es' ? "Cero riesgo en el hogar: compartir la vida cotidiana en familia es completamente seguro." : "Zero household risk: everyday family life is completely safe."
    },
    {
      id: 5,
      category: 'familia',
      categoryLabel: lang === 'es' ? 'Maternidad y Familia' : 'Maternity & Family',
      q: lang === 'es'
        ? "¿Puedo tener hijos y formar una familia de manera segura?"
        : "Can I have children and start a family safely?",
      a: lang === 'es'
        ? "Sí, totalmente. Si el padre es portador y la madre no, no hay transmisión al bebé durante la gestación. Si la madre es portadora, el riesgo de transmisión durante el embarazo y el parto es muy bajo (<3-5%). La principal vía de transmisión vertical es la lactancia materna prolongada; por ello, la recomendación médica internacional es optar por fórmulas de inicio (fórmulas lácteas sucedáneas), reduciendo la probabilidad de transmisión al bebé a prácticamente cero."
        : "Yes, absolutely. If the father is positive and the mother negative, there is no transmission to the unborn child. If the mother is positive, gestational and delivery transmission is minimal (<3-5%). Because the main vertical transmission occurs through prolonged nursing, feeding with infant formula reduces transmission risk to nearly zero.",
      highlight: lang === 'es' ? "Los bebés de madres portadoras nacen sanos y libres del virus alimentándose con fórmula." : "Babies of positive mothers remain healthy and virus-free when formula-fed."
    },
    {
      id: 6,
      category: 'salud',
      categoryLabel: lang === 'es' ? 'Donación y Sangre' : 'Donation & Blood',
      q: lang === 'es'
        ? "¿Puedo donar sangre o recibir transfusiones si tengo HTLV?"
        : "Can I donate blood or receive transfusions if I carry HTLV?",
      a: lang === 'es'
        ? "Como medida de bioseguridad preventiva estándar en todo el mundo, las personas diagnosticadas con HTLV no deben donar sangre, plaquetas ni órganos para trasplante. Sin embargo, si en algún momento de tu vida requieres una transfusión por indicación médica, puedes recibirla con total seguridad y normalidad en cualquier centro de salud."
        : "As a standard preventive biosafety policy globally, individuals diagnosed with HTLV must not donate blood, platelets, or donor organs. However, if you ever require a medical blood transfusion yourself, you can receive it safely and without restriction.",
      highlight: lang === 'es' ? "No puedes donar, pero sí recibir sangre siempre que lo requieras clínicamente." : "You cannot donate blood, but you can receive transfusions whenever needed."
    },
    {
      id: 7,
      category: 'tratamiento',
      categoryLabel: lang === 'es' ? 'Tratamiento y Cura' : 'Treatment & Cure',
      q: lang === 'es'
        ? "¿Existe una cura definitiva o vacuna para erradicar el virus?"
        : "Is there a cure or preventive vaccine to eliminate the virus?",
      a: lang === 'es'
        ? "Actualmente no existe una cura o vacuna que erradique el virus del cuerpo, ya que integra su información genética en el ADN celular de los linfocitos. No obstante, en la inmensa mayoría de portadores el virus permanece silente sin causar daño. Si se presentasen síntomas neurológicos o inflamatorios, existen tratamientos médicos efectivos (corticoides, terapia física continua, relajantes musculares e inmunomoduladores) para preservar la movilidad y calidad de vida."
        : "There is currently no curative antiviral or vaccine that clears integrated proviral DNA from host cells. However, in the vast majority of individuals, the virus remains dormant without causing harm. If symptoms or inflammation emerge, effective interventions (corticosteroids, physiotherapy, muscle relaxants, and immunomodulators) help preserve mobility and well-being.",
      highlight: lang === 'es' ? "Existen tratamientos eficaces para controlar la inflamación y preservar la movilidad." : "Effective therapies exist to manage inflammation and preserve physical mobility."
    },
    {
      id: 8,
      category: 'salud',
      categoryLabel: lang === 'es' ? 'Condición Neurológica' : 'Neurological Health',
      q: lang === 'es'
        ? "¿Qué es la Paraparesia Espástica Tropical (HAM/TSP) y qué señales da?"
        : "What is Tropical Spastic Paraparesis (HAM/TSP) and what are its symptoms?",
      a: lang === 'es'
        ? "HAM/TSP es una inflamación crónica de la médula espinal que puede presentarse en el 2-4% de las personas con HTLV-1, habitualmente en la edad adulta (entre los 35 y 55 años). Sus síntomas iniciales son rigidez o pesadez en las piernas, tropiezos frecuentes, debilidad al subir escaleras, urgencia para orinar o dolor lumbar crónico. El diagnóstico temprano con un neurólogo es fundamental para iniciar fisioterapia y tratamiento antiinflamatorio."
        : "HAM/TSP is a chronic neuroinflammatory spinal condition affecting 2-4% of HTLV-1 carriers, typically in adulthood (ages 35 to 55). Early signs include leg stiffness, stumbling, weakness climbing stairs, urinary urgency, and persistent lower back discomfort. Timely neurology consultation is key for early rehabilitation and anti-inflammatory therapy.",
      highlight: lang === 'es' ? "La fisioterapia temprana y el seguimiento neurológico marcan la diferencia pronóstica." : "Early rehabilitation and neurological follow-up make a crucial prognostic difference."
    },
    {
      id: 9,
      category: 'salud',
      categoryLabel: lang === 'es' ? 'Hematología' : 'Hematology',
      q: lang === 'es'
        ? "¿Qué es la Leucemia/Linfoma de Células T del Adulto (ATL)?"
        : "What is Adult T-cell Leukemia/Lymphoma (ATL)?",
      a: lang === 'es'
        ? "Es una neoplasia infrecuente de las células T que se desarrolla en menos del 2-5% de las personas infectadas con HTLV-1, casi siempre después de varias décadas de portar el virus (usualmente asociado al contagio en la infancia por lactancia). Sus manifestaciones pueden incluir lesiones en la piel, inflamación de ganglios linfáticos o alteraciones en los glóbulos blancos. Es manejada por médicos hematólogos especializados."
        : "A rare malignancy of T-cells that develops in fewer than 2-5% of people with HTLV-1, almost always after decades of infection (typically linked to early childhood infection via nursing). Signs may include skin lesions, enlarged lymph nodes, or blood count alterations. It is managed by specialized hematologists.",
      highlight: lang === 'es' ? "Ocurre en menos del 5% de portadores y cuenta con abordajes hematológicos específicos." : "Occurs in fewer than 5% of carriers with specialized hematologic therapies available."
    },
    {
      id: 10,
      category: 'salud',
      categoryLabel: lang === 'es' ? 'Controles Médicos' : 'Medical Checkups',
      q: lang === 'es'
        ? "¿Qué controles médicos rutinarios debo realizarme periódicamente?"
        : "What routine medical checkups should I undergo?",
      a: lang === 'es'
        ? "Se recomienda una consulta médica de control una vez al año con un médico infectólogo, internista o neurólogo familiarizado con HTLV. Esta evaluación incluye una revisión neurológica básica (fuerza y reflejos en piernas), un hemograma completo con frotis sanguíneo para examinar la morfología de los linfocitos, y análisis de función renal y hepática. Mantener estilos de vida saludables fortalece el bienestar general."
        : "An annual checkup is recommended with an infectologist, internist, or neurologist. This consultation includes a basic neurological exam (leg strength and reflexes), a complete blood count with peripheral smear to inspect lymphocytes, and routine urine/metabolic panels. A balanced lifestyle supports long-term health.",
      highlight: lang === 'es' ? "Un chequeo anual simple es suficiente para el seguimiento preventivo adecuado." : "A simple annual review is sufficient for effective preventive follow-up."
    },
    {
      id: 11,
      category: 'general',
      categoryLabel: lang === 'es' ? 'Tipos de Virus' : 'Virus Types',
      q: lang === 'es'
        ? "¿Qué diferencia hay entre el HTLV-1 y el HTLV-2?"
        : "What is the difference between HTLV-1 and HTLV-2?",
      a: lang === 'es'
        ? "Ambos son retrovirus emparentados genéticamente, pero tienen consecuencias clínicas distintas. El HTLV-1 está asociado a HAM/TSP y ATL. En cambio, el HTLV-2 presenta un curso marcadamente benigno, muy rara vez causa trastornos neurológicos y no ha demostrado asociación causal con leucemias. Las pruebas de laboratorio confirmatorias diferencian claramente cuál de los dos virus está presente."
        : "Both are genetically related deltaretroviruses but have different clinical profiles. HTLV-1 is linked to HAM/TSP and ATL. In contrast, HTLV-2 runs an overwhelmingly benign course, rarely causes neurological symptoms, and is not causally associated with leukemia. Confirmatory lab testing accurately distinguishes between the two types.",
      highlight: lang === 'es' ? "El HTLV-2 es predominantemente benigno y no se asocia con leucemias." : "HTLV-2 is predominantly benign and not linked to leukemias."
    },
    {
      id: 12,
      category: 'diagnostico',
      categoryLabel: lang === 'es' ? 'Pruebas de Laboratorio' : 'Laboratory Tests',
      q: lang === 'es'
        ? "¿Cómo se confirma definitivamente el diagnóstico de HTLV?"
        : "How is an HTLV diagnosis definitively confirmed?",
      a: lang === 'es'
        ? "El primer paso suele ser un examen de tamizaje en sangre (ELISA o quimioluminiscencia). Si el resultado es reactivo, SIEMPRE debe realizarse una prueba confirmatoria, como Western Blot o amplificación molecular por PCR proviral. Esto permite descartar falsos positivos y confirmar con certeza si se trata de HTLV-1, HTLV-2 o un resultado indeterminado."
        : "The initial step is typically a blood screening test (ELISA or chemiluminescence). If reactive, it must ALWAYS be verified with a confirmatory method, such as Western Blot or proviral PCR. This rules out false positives and confirms whether it is HTLV-1, HTLV-2, or an indeterminate result.",
      highlight: lang === 'es' ? "Todo tamizaje reactivo requiere obligatoriamente confirmación por Western Blot o PCR." : "Every reactive screening must be verified via Western Blot or PCR."
    },
    {
      id: 13,
      category: 'salud',
      categoryLabel: lang === 'es' ? 'Estilo de Vida' : 'Lifestyle & Diet',
      q: lang === 'es'
        ? "¿El estrés, la alimentación o el ejercicio afectan la actividad del virus?"
        : "Can stress, nutrition, or physical exercise affect viral activity?",
      a: lang === 'es'
        ? "El virus HTLV se mantiene en una carga proviral integrada relativamente estable en el organismo y no se 'reactiva' por disgustos o estrés puntual. Sin embargo, mantener una alimentación rica en antioxidantes, realizar ejercicio físico regular y dormir bien fortalece la respuesta inmunitaria general y previene la fatiga y el sedentarismo."
        : "HTLV remains at a relatively stable proviral load within host cells and does not reactivate due to everyday emotional stress. Nevertheless, an antioxidant-rich diet, regular physical exercise, and adequate sleep reinforce overall immunity, preventing fatigue and muscle deconditioning.",
      highlight: lang === 'es' ? "Hábitos de vida activos y saludables protegen tus articulaciones y tu bienestar." : "Active and healthy lifestyle habits protect joint function and overall vitality."
    },
    {
      id: 14,
      category: 'general',
      categoryLabel: lang === 'es' ? 'Salud Pública Global' : 'Global Health',
      q: lang === 'es'
        ? "¿Por qué la OMS y la Red HTLV trabajan en visibilizar el virus?"
        : "Why are the WHO and Red HTLV working to increase visibility for the virus?",
      a: lang === 'es'
        ? "A pesar de infectar a millones de personas a nivel mundial, el HTLV ha sido considerado durante décadas una infección desatendida. La Organización Mundial de la Salud (OMS) emitió un llamado técnico global para promover el tamizaje en gestantes, la bioseguridad en bancos de sangre y el apoyo psicosocial a las personas afectadas. Redes como Red HTLV articulan a investigadores internacionales para avanzar en nuevos diagnósticos, terapias y políticas públicas de prevención."
        : "Despite affecting millions worldwide, HTLV has historically been an overlooked health challenge. The World Health Organization (WHO) issued a global call to advance antenatal screening, blood safety, and psychosocial support. Networks like Red HTLV unite international researchers to drive diagnostics, therapeutic innovation, and evidence-based prevention policies.",
      highlight: lang === 'es' ? "La Red promueve el acceso a información confiable y visibilidad médica global." : "The Network drives reliable patient information and global clinical recognition."
    }
  ], [lang]);

  return (
    <main className="w-full bg-[#f8fafc] min-h-[calc(100vh-80px)] py-8 sm:py-12 text-slate-900 flex flex-col justify-between">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera con Pestañas Horizontales */}
        <div className="pb-6 mb-8 border-b-2 border-[#003B49]/15">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#003B49] tracking-tight">
            {activeTab === 'faqs' && (lang === 'es' ? 'Preguntas Frecuentes para Pacientes' : 'Patient Frequently Asked Questions')}
            {activeTab === 'recursos' && (lang === 'es' ? 'Recursos de Apoyo y Material Educativo' : 'Support Resources & Educational Materials')}
            {activeTab === 'haz-tu-pregunta' && (lang === 'es' ? 'Haz tu Pregunta a la Red' : 'Ask Your Question to the Network')}
          </h1>
        </div>

        {/* 1. PESTAÑA: PREGUNTAS FRECUENTES con Buscador Semántico Inteligente */}
        {activeTab === 'faqs' && (
          <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto py-2">
            
            {/* Encabezado con Buscador Semántico */}
            <div className="border-b border-slate-200 pb-6 space-y-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                  {lang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  {lang === 'es' 
                    ? 'Respuestas claras y fundamentadas a las dudas más comunes sobre la vida con HTLV.'
                    : 'Clear and evidence-based answers to the most common questions regarding HTLV.'}
                </p>
              </div>

              {/* Input de Búsqueda Semántica */}
              <div className="relative max-w-2xl">
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-xl pointer-events-none">
                    search
                  </span>
                  <input
                    type="text"
                    value={faqSearchQuery}
                    onChange={(e) => setFaqSearchQuery(e.target.value)}
                    placeholder={
                      lang === 'es'
                        ? 'Busca por tema, síntoma o duda (ej. "contagio", "dolor piernas", "bebé", "cura")...'
                        : 'Search by topic, symptom or question (e.g., "transmission", "gait", "baby", "cure")...'
                    }
                    className="w-full pl-11 pr-10 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#087E8B] focus:border-transparent shadow-xs transition-all"
                  />
                  {faqSearchQuery && (
                    <button
                      type="button"
                      onClick={() => setFaqSearchQuery('')}
                      className="absolute right-3 p-1 text-slate-400 hover:text-slate-600 rounded-md transition-colors"
                      aria-label="Limpiar búsqueda"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Sugerencias de búsqueda rápida con sinónimos */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 text-xs text-slate-500">
                  <span className="font-semibold text-slate-600">
                    {lang === 'es' ? 'Temas sugeridos:' : 'Suggested topics:'}
                  </span>
                  {[
                    { label: lang === 'es' ? '¿Cómo se transmite?' : 'Transmission', q: 'transmision' },
                    { label: lang === 'es' ? 'Diferencia con VIH' : 'Difference from HIV', q: 'vih' },
                    { label: lang === 'es' ? 'Paraparesia y Marcha' : 'TSP/HAM & Walking', q: 'paraparesia' },
                    { label: lang === 'es' ? 'Maternidad y Lactancia' : 'Maternity & Formula', q: 'lactancia' },
                    { label: lang === 'es' ? 'Tratamiento y Manejo' : 'Treatment', q: 'tratamiento' },
                    { label: lang === 'es' ? 'Donar Sangre' : 'Blood Donation', q: 'sangre' }
                  ].map((topic, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setFaqSearchQuery(topic.q)}
                      className={`px-2.5 py-1 rounded-full border text-[11px] transition-colors cursor-pointer ${
                        faqSearchQuery.toLowerCase() === topic.q
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
            {faqSearchQuery && (
              <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                <span>
                  {lang === 'es'
                    ? `Mostrando ${filteredPatientFaqs.length} resultado(s) relevante(s) para "${faqSearchQuery}"`
                    : `Showing ${filteredPatientFaqs.length} relevant result(s) for "${faqSearchQuery}"`}
                </span>
                <button
                  onClick={() => setFaqSearchQuery('')}
                  className="text-[#087E8B] hover:underline font-semibold"
                >
                  {lang === 'es' ? 'Ver todas' : 'View all'}
                </button>
              </div>
            )}

            {/* Listado de Preguntas Colapsables */}
            <div className="space-y-4 divide-y divide-slate-200">
              {filteredPatientFaqs.length === 0 ? (
                <div className="py-12 text-center space-y-2 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="material-symbols-outlined text-4xl text-slate-400">help_outline</span>
                  <p className="text-sm font-semibold text-slate-700">
                    {lang === 'es'
                      ? 'No encontramos respuestas exactas para esta búsqueda.'
                      : 'No exact matches found for this query.'}
                  </p>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    {lang === 'es'
                      ? 'Prueba buscando con otros términos o consulta directamente en "Haz tu pregunta".'
                      : 'Try using other related keywords or ask your inquiry directly in "Ask your question".'}
                  </p>
                  <button
                    onClick={() => setFaqSearchQuery('')}
                    className="mt-2 text-xs font-bold text-[#087E8B] hover:underline"
                  >
                    {lang === 'es' ? 'Mostrar todas las preguntas' : 'Show all questions'}
                  </button>
                </div>
              ) : (
                filteredPatientFaqs.map((faq, idx) => {
                const isOpen = !!openFaqs[faq.id];
                return (
                  <div key={faq.id} className={idx === 0 ? "pt-0" : "pt-4"}>
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left flex items-start justify-between gap-4 py-2 hover:text-[#087E8B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A400] rounded-md transition-colors cursor-pointer group"
                      aria-expanded={isOpen}
                    >
                      <h3 className="text-base sm:text-lg font-bold text-[#003B49] group-hover:text-[#087E8B] leading-snug">
                        {faq.q}
                      </h3>
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-[#087E8B] text-2xl shrink-0 transition-transform duration-200 mt-0.5">
                        {isOpen ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-2 pb-4 space-y-3 animate-fadeIn">
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                          {faq.a}
                        </p>
                        <div className="pt-2.5 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-500 italic">
                          <span className="material-symbols-outlined text-base text-[#087E8B] shrink-0 mt-0.5">info</span>
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
            <div className="mt-8 p-6 bg-slate-50 border-l-4 border-[#087E8B] rounded-r-xl text-sm text-slate-600 leading-relaxed space-y-2">
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

        {/* 2. PESTAÑA: RECURSOS DE APOYO (Sin chips, sin calculadora) */}
        {activeTab === 'recursos' && (
          <div className="space-y-12 animate-fadeIn max-w-5xl mx-auto py-2">
            
            {/* SECCIÓN 1: FOLLETOS Y GUÍAS DIGITALES (Con modal lightbox superpuesto) */}
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                  {lang === 'es' ? 'Folletos y Guías Informativas' : 'Brochures & Educational Guides'}
                </h2>
                <p className="text-slate-600 text-sm mt-0.5">
                  {lang === 'es' 
                    ? 'Materiales educativos elaborados por el Instituto de Medicina Tropical Alexander von Humboldt.'
                    : 'Educational materials prepared by the Alexander von Humboldt Institute of Tropical Medicine.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: lang === 'es' ? "Guía de Primeros Pasos tras el Diagnóstico" : "First Steps Guide After Diagnosis",
                    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
                    desc: lang === 'es' ? "Qué hacer tras recibir un resultado reactivo, mitos frecuentes y recomendaciones de tranquilidad." : "What to do after a reactive result, debunking myths, and calm guidance.",
                  },
                  {
                    title: lang === 'es' ? "Maternidad Segura y Cuidados del Bebé" : "Safe Motherhood & Infant Care",
                    img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1200&q=85",
                    desc: lang === 'es' ? "Prevención de la transmisión por leche materna y pautas de nutrición con fórmulas infantiles." : "Preventing nursing transmission and nutrition guidance with infant formulas.",
                  },
                  {
                    title: lang === 'es' ? "Rehabilitación y Movilidad en HAM/TSP" : "Physical Therapy & Mobility in HAM/TSP",
                    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85",
                    desc: lang === 'es' ? "Ejercicios terapéuticos para controlar la rigidez motora y preservar la autonomía física." : "Therapeutic exercises to manage motor stiffness and preserve physical autonomy.",
                  }
                ].map((brochure, i) => (
                  <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="h-44 w-full overflow-hidden bg-slate-100">
                        <img
                          src={brochure.img}
                          alt={brochure.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 space-y-2">
                        <h4 className="text-base font-bold text-[#003B49] leading-snug">
                          {brochure.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {brochure.desc}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <button
                        onClick={() => setSelectedBrochure(brochure)}
                        className="w-full bg-[#E5A400] hover:bg-[#cca300] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003B49] text-[#003B49] py-2 px-4 rounded-lg text-sm font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span className="material-symbols-outlined text-lg">menu_book</span>
                        <span>{lang === 'es' ? 'Leer Folleto Digital' : 'Read Digital Brochure'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECCIÓN 2: VIDEOTECA EDUCATIVA */}
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                  {lang === 'es' ? 'Videoteca Educativa' : 'Educational Video Library'}
                </h2>
                <p className="text-slate-600 text-sm mt-0.5">
                  {lang === 'es' 
                    ? 'Videos informativos preparados por especialistas de la Red para pacientes y sus familias.'
                    : 'Informational talks prepared by Network specialists for patients and families.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="relative aspect-video w-full bg-slate-900">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube-nocookie.com/embed/1NqgEEReKhs"
                      title={lang === 'es' ? "Comprendiendo el HTLV-1" : "Understanding HTLV-1"}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6 space-y-2">
                    <p className="text-xs font-semibold text-[#087E8B]">
                      {lang === 'es' ? 'Fundamentos Médicos' : 'Medical Fundamentals'}
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-[#003B49] leading-snug">
                      {lang === 'es' ? '¿Qué es el HTLV-1 y qué esperar tras el diagnóstico?' : 'What is HTLV-1 and what to expect after diagnosis?'}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {lang === 'es' 
                        ? 'Explicación clara sobre el curso benigno en más del 90% de personas, vías de no transmisión y vida cotidiana.'
                        : 'Clear overview of the benign course in >90% of individuals, non-transmission facts, and daily living.'}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="relative aspect-video w-full bg-slate-900">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube-nocookie.com/embed/rpmI1nhMOak"
                      title={lang === 'es' ? "Maternidad y Prevención Vertical" : "Maternity and Vertical Prevention"}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6 space-y-2">
                    <p className="text-xs font-semibold text-[#A10D3A]">
                      {lang === 'es' ? 'Salud Materno-Infantil' : 'Maternal-Child Health'}
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-[#003B49] leading-snug">
                      {lang === 'es' ? 'Maternidad Segura y Prevención de Transmisión Vertical' : 'Safe Motherhood & Prevention of Vertical Transmission'}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {lang === 'es' 
                        ? 'Pautas clínicas sobre tamizaje prenatal, parto seguro y el rol de las fórmulas sucedáneas.'
                        : 'Clinical guidelines on prenatal screening, safe delivery, and the protective role of infant formulas.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm shadow-sm">
              <span className="text-slate-600 font-medium">
                {lang === 'es' ? 'Todos los materiales son de libre acceso y distribución para pacientes y comunidad.' : 'All materials are freely accessible for community distribution.'}
              </span>
              <button
                onClick={() => switchTab('haz-tu-pregunta')}
                className="bg-[#003B49] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#087E8B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A400] transition-colors cursor-pointer text-sm shrink-0"
              >
                {lang === 'es' ? '¿Tienes dudas? Haz tu pregunta' : 'Have questions? Ask the Network'}
              </button>
            </div>

          </div>
        )}

        {/* MODAL LIGHTBOX SUPERPUESTO PARA FOLLETOS */}
        {selectedBrochure && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn"
            onClick={() => setSelectedBrochure(null)}
          >
            <div 
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
                <h3 className="font-bold text-base text-[#003B49]">
                  {selectedBrochure.title}
                </h3>
                <button
                  onClick={() => setSelectedBrochure(null)}
                  className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center font-bold text-sm cursor-pointer transition-colors"
                  aria-label="Cerrar"
                >
                  ✕
                </button>
              </div>
              <div className="p-4 max-h-[75vh] overflow-y-auto flex flex-col items-center">
                <img 
                  src={selectedBrochure.img} 
                  alt={selectedBrochure.title} 
                  className="w-full max-h-[55vh] object-contain rounded-lg border border-slate-200 shadow-sm"
                />
                <p className="text-sm text-slate-600 mt-4 leading-relaxed text-center">
                  {selectedBrochure.desc}
                </p>
              </div>
              <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end gap-3">
                <a
                  href={selectedBrochure.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#003B49] text-white text-xs font-semibold rounded-lg hover:bg-[#087E8B] transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  <span>{lang === 'es' ? 'Abrir imagen completa' : 'Open full image'}</span>
                </a>
                <button
                  onClick={() => setSelectedBrochure(null)}
                  className="px-4 py-2 bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-300 transition-colors cursor-pointer"
                >
                  {lang === 'es' ? 'Cerrar' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 3. PESTAÑA: HAZ TU PREGUNTA */}
        {activeTab === 'haz-tu-pregunta' && (
          <div className="animate-fadeIn max-w-5xl mx-auto py-2">
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl border border-slate-200 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Columna Izquierda: Información de Confidencialidad */}
                <div className="lg:col-span-5 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#003B49] leading-tight">
                    {lang === 'es' ? 'Envía tu consulta médica o personal' : 'Submit your medical or personal inquiry'}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {lang === 'es'
                      ? 'Tus dudas son recibidas directamente por el equipo médico del IMTAvH - UPCH y consejeros de la Red. No publicamos tus datos y te responderemos por correo.'
                      : 'Your queries are delivered directly to the IMTAvH - UPCH clinical counseling team. We never publish personal details.'}
                  </p>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2 font-bold text-[#087E8B] text-sm">
                      <span className="material-symbols-outlined text-lg">verified_user</span>
                      <span>{lang === 'es' ? 'Garantía Ética & Privacidad' : 'Privacy & Ethics Assurance'}</span>
                    </div>
                    <p>{lang === 'es' ? 'Cumplimiento estricto de la Ley N° 29733 de Protección de Datos Personales.' : 'Strict compliance with Data Protection standards.'}</p>
                  </div>
                </div>

                {/* Columna Derecha: Formulario Horizontal */}
                <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200">
                  {submitted ? (
                    <div className="py-8 text-center space-y-3 animate-fadeIn">
                      <span className="material-symbols-outlined text-5xl text-[#087E8B]">check_circle</span>
                      <h4 className="text-xl font-bold text-[#003B49]">
                        {lang === 'es' ? '¡Tu pregunta fue enviada!' : 'Your question was sent!'}
                      </h4>
                      <p className="text-sm text-slate-600 max-w-md mx-auto">
                        {lang === 'es' 
                          ? `Te responderemos al correo (${formData.email}) de manera privada.` 
                          : `We will reply to your email (${formData.email}) privately.`}
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ nombre: '', email: '', pais: '', tema: 'diagnostico', pregunta: '' });
                        }}
                        className="mt-3 bg-[#003B49] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#087E8B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A400] cursor-pointer"
                      >
                        {lang === 'es' ? 'Enviar otra consulta' : 'Send another inquiry'}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-[#003B49] mb-1">
                            {lang === 'es' ? 'Nombre o Pseudónimo' : 'Name or Nickname'}
                          </label>
                          <input
                            type="text"
                            placeholder={lang === 'es' ? "Opcional" : "Optional"}
                            value={formData.nombre}
                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#087E8B] focus:border-transparent transition"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-[#003B49] mb-1">
                            {lang === 'es' ? 'Correo Electrónico *' : 'Email Address *'}
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="tucorreo@ejemplo.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#087E8B] focus:border-transparent transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#003B49] mb-1">
                          {lang === 'es' ? 'Tu pregunta o consulta *' : 'Your question *'}
                        </label>
                        <textarea
                          required
                          rows="3"
                          placeholder={lang === 'es' ? "Escribe aquí tus dudas con tranquilidad..." : "Write your questions here..."}
                          value={formData.pregunta}
                          onChange={(e) => setFormData({ ...formData, pregunta: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#087E8B] focus:border-transparent resize-none transition"
                        ></textarea>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs text-slate-500 font-medium">
                          * {lang === 'es' ? 'Respuesta privada garantizada' : 'Private response guaranteed'}
                        </span>
                        <button
                          type="submit"
                          disabled={loading}
                          className="bg-[#A10D3A] hover:bg-[#850a2f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A400] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-sm cursor-pointer disabled:opacity-50"
                        >
                          {loading ? '...' : (lang === 'es' ? 'Enviar pregunta' : 'Submit question')}
                        </button>
                      </div>
                    </form>
                  )}
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}

export default function PacientesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-20 text-center font-bold text-[#003B49]">Cargando...</div>}>
      <PacientesContent />
    </Suspense>
  );
}
