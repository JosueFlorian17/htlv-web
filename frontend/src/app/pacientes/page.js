"use client";

import { useState, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';

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
  const toggleFaq = (id) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Calculadora orientativa de riesgos
  const [riskData, setRiskData] = useState({
    situacion: 'banco-sangre',
    sintomas: 'ninguno',
    confirmacion: 'no'
  });
  const [riskResult, setRiskResult] = useState(null);

  const calculateRisk = (e) => {
    e.preventDefault();
    let recomendacion = '';
    let nivel = '';
    let badgeColor = '';

    if (riskData.confirmacion === 'no') {
      nivel = lang === 'es' ? 'Requiere Confirmación Serológica' : 'Confirmatory Test Required';
      badgeColor = 'bg-[#E5A400] text-[#003B49]';
      recomendacion = lang === 'es'
        ? 'Un resultado inicial de tamizaje (ELISA) reactivo NO es un diagnóstico definitivo. Debe realizarse obligatoriamente un Western Blot o PCR proviral en un laboratorio de referencia para confirmar o descartar la infección y descartar falsos positivos.'
        : 'An initial reactive screening test (ELISA) is NOT a definitive diagnosis. Confirmatory Western Blot or proviral PCR is mandatory in a reference lab to verify the status.';
    } else if (riskData.sintomas === 'moderados') {
      nivel = lang === 'es' ? 'Sugerencia de Evaluación Neurológica' : 'Neurological Assessment Recommended';
      badgeColor = 'bg-[#A10D3A] text-white';
      recomendacion = lang === 'es'
        ? 'La presencia de rigidez en piernas o dificultad al caminar debe ser evaluada por un médico neurólogo para descartar afectación de la médula espinal (HAM/TSP) e iniciar de manera temprana fisioterapia orientada.'
        : 'The presence of leg stiffness or gait impairment should be evaluated promptly by a neurologist to assess possible HAM/TSP and initiate targeted physical therapy.';
    } else if (riskData.situacion === 'embarazo') {
      nivel = lang === 'es' ? 'Protocolo de Maternidad y Prevención Vertical' : 'Safe Motherhood & Prevention Protocol';
      badgeColor = 'bg-[#087E8B] text-white';
      recomendacion = lang === 'es'
        ? 'En caso de embarazo con HTLV confirmado, la recomendación médica internacional es evitar la lactancia materna y optar por fórmulas de inicio para recién nacidos, lo que reduce el riesgo de transmisión prácticamente a cero.'
        : 'In confirmed maternal HTLV, standard international guidance recommends formula feeding to reduce infant transmission risk to near zero.';
    } else {
      nivel = lang === 'es' ? 'Portador Asintomático (Seguimiento Rutinario)' : 'Asymptomatic Carrier (Routine Follow-up)';
      badgeColor = 'bg-[#003B49] text-white';
      recomendacion = lang === 'es'
        ? 'Más del 90% de las personas portadoras permanecen completamente asintomáticas de por vida. Solo se requiere un chequeo de control anual con hemograma y examen neurológico básico para mantener la tranquilidad.'
        : 'Over 90% of carriers remain entirely asymptomatic lifelong. Only an annual routine review with blood counts and a motor evaluation is recommended.';
    }

    setRiskResult({ nivel, recomendacion, badgeColor });
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
        ? "¿Por qué la OMS y la Red RIII-HTLV trabajan en visibilizar el virus?"
        : "Why are the WHO and RIII-HTLV working to increase visibility for the virus?",
      a: lang === 'es'
        ? "A pesar de infectar a millones de personas a nivel mundial, el HTLV ha sido considerado durante décadas una infección desatendida. La Organización Mundial de la Salud (OMS) emitió un llamado técnico global para promover el tamizaje en gestantes, la bioseguridad en bancos de sangre y el apoyo psicosocial a las personas afectadas. Redes como RIII-HTLV articulan a investigadores internacionales para avanzar en nuevos diagnósticos, terapias y políticas públicas de prevención."
        : "Despite affecting millions worldwide, HTLV has historically been an overlooked health challenge. The World Health Organization (WHO) issued a global call to advance antenatal screening, blood safety, and psychosocial support. Networks like RIII-HTLV unite international researchers to drive diagnostics, therapeutic innovation, and evidence-based prevention policies.",
      highlight: lang === 'es' ? "La Red promueve el acceso a información confiable y visibilidad médica global." : "The Network drives reliable patient information and global clinical recognition."
    }
  ], [lang]);

  return (
    <main className="w-full bg-[#f8f9fb] min-h-[calc(100vh-80px)] py-8 md:py-12 text-[#191c1e] flex flex-col justify-between">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">
        
        {/* Cabecera con Pestañas Horizontales (1. Preguntas frecuentes, 2. Recursos, 3. Haz tu pregunta) */}
        <div className="pb-6 mb-8 border-b-2 border-[#003B49]/15">
          <span className="text-[12.5px] font-black uppercase tracking-widest text-[#087E8B] block mb-1">
            {lang === 'es' ? 'Comunidad y Bienestar' : 'Community & Well-being'}
          </span>
          <h1 className="text-[32px] sm:text-[40px] font-black text-[#003B49] tracking-tight leading-none">
            {activeTab === 'faqs' && (lang === 'es' ? 'Preguntas Frecuentes para Pacientes' : 'Patient Frequently Asked Questions')}
            {activeTab === 'recursos' && (lang === 'es' ? 'Recursos de Apoyo y Material Educativo' : 'Support Resources & Educational Materials')}
            {activeTab === 'haz-tu-pregunta' && (lang === 'es' ? 'Haz tu Pregunta a la Red' : 'Ask Your Question to the Network')}
          </h1>
        </div>

        {/* 1. PESTAÑA: PREGUNTAS FRECUENTES (Formato de corrido, sin buscador, sin cards ni categorías) */}
        {activeTab === 'faqs' && (
          <div className="space-y-10 animate-fadeIn max-w-4xl mx-auto py-2">
            
            {/* Encabezado limpio */}
            <div className="border-b border-gray-200 pb-4">
              <h2 className="text-2xl md:text-3xl font-black text-[#003B49]">
                {lang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
              </h2>
              <p className="text-gray-600 text-[15px] mt-1">
                {lang === 'es' 
                  ? 'Respuestas claras y fundamentadas a las dudas más comunes sobre la vida con HTLV.'
                  : 'Clear and evidence-based answers to the most common questions regarding HTLV.'}
              </p>
            </div>

            {/* Listado de Preguntas Colapsables con Disclaimer Resumido */}
            <div className="space-y-4 divide-y divide-gray-200">
              {patientFaqs.map((faq, idx) => {
                const isOpen = !!openFaqs[faq.id];
                return (
                  <div key={faq.id} className={idx === 0 ? "pt-0" : "pt-4"}>
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left flex items-start justify-between gap-4 py-2 hover:text-[#087E8B] transition-colors cursor-pointer group"
                      aria-expanded={isOpen}
                    >
                      <h3 className="text-[19px] md:text-[21px] font-bold text-[#003B49] group-hover:text-[#087E8B] leading-snug">
                        {faq.q}
                      </h3>
                      <span className="material-symbols-outlined text-gray-500 group-hover:text-[#087E8B] text-2xl shrink-0 transition-transform duration-200 mt-0.5">
                        {isOpen ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-2 pb-4 space-y-3 animate-fadeIn">
                        <p className="text-[16px] text-gray-700 leading-relaxed font-normal">
                          {faq.a}
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

        {/* 2. PESTAÑA: RECURSOS DE APOYO */}
        {activeTab === 'recursos' && (
          <div className="space-y-12 animate-fadeIn max-w-5xl mx-auto py-2">
            
            {/* SECCIÓN 1: VIDEOTECA EDUCATIVA (YOUTUBE) */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-3 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-[#003B49]">
                    {lang === 'es' ? 'Videoteca Educativa' : 'Educational Video Library'}
                  </h2>
                  <p className="text-gray-600 text-[14.5px] mt-0.5">
                    {lang === 'es' 
                      ? 'Videos informativos preparados por especialistas de la Red para pacientes y sus familias.'
                      : 'Informational talks prepared by Network specialists for patients and families.'}
                  </p>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-red-100 text-red-700 rounded-lg">
                  YouTube
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
                  <div className="relative aspect-video w-full bg-gray-900">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube-nocookie.com/embed/5O9Yw8Z0eoc"
                      title={lang === 'es' ? "Comprendiendo el HTLV-1" : "Understanding HTLV-1"}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#087E8B]">
                      {lang === 'es' ? 'Fundamentos Médicos' : 'Medical Fundamentals'}
                    </span>
                    <h3 className="text-[17px] font-bold text-[#003B49] leading-snug">
                      {lang === 'es' ? '¿Qué es el HTLV-1 y qué esperar tras el diagnóstico?' : 'What is HTLV-1 and what to expect after diagnosis?'}
                    </h3>
                    <p className="text-[14px] text-gray-600 leading-relaxed">
                      {lang === 'es' 
                        ? 'Explicación clara sobre el curso benigno en más del 90% de personas, vías de no transmisión y vida cotidiana.'
                        : 'Clear overview of the benign course in >90% of individuals, non-transmission facts, and daily living.'}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
                  <div className="relative aspect-video w-full bg-gray-900">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube-nocookie.com/embed/fJ9rUzIMcZQ"
                      title={lang === 'es' ? "Maternidad y Prevención Vertical" : "Maternity and Vertical Prevention"}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#A10D3A]">
                      {lang === 'es' ? 'Salud Materno-Infantil' : 'Maternal-Child Health'}
                    </span>
                    <h3 className="text-[17px] font-bold text-[#003B49] leading-snug">
                      {lang === 'es' ? 'Maternidad Segura y Prevención de Transmisión Vertical' : 'Safe Motherhood & Prevention of Vertical Transmission'}
                    </h3>
                    <p className="text-[14px] text-gray-600 leading-relaxed">
                      {lang === 'es' 
                        ? 'Pautas clínicas sobre tamizaje prenatal, parto seguro y el rol de las fórmulas sucedáneas.'
                        : 'Clinical guidelines on prenatal screening, safe delivery, and the protective role of infant formulas.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SECCIÓN 2: CALCULADORA ORIENTATIVA DE RIESGOS */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-3">
                <h2 className="text-2xl font-black text-[#003B49]">
                  {lang === 'es' ? 'Calculadora Orientativa de Riesgos y Evaluación' : 'Orientative Risk Assessment Calculator'}
                </h2>
                <p className="text-gray-600 text-[14.5px] mt-0.5">
                  {lang === 'es' 
                    ? 'Herramienta informativa interactiva para orientar tus próximos pasos ante dudas o pruebas reactivas.'
                    : 'Interactive informational tool to guide next steps regarding test results or concerns.'}
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-xs space-y-6">
                <form onSubmit={calculateRisk} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-[13.5px] font-bold text-[#003B49] mb-2">
                        {lang === 'es' ? '1. Situación o motivo de consulta' : '1. Situation or reason for inquiry'}
                      </label>
                      <select
                        value={riskData.situacion}
                        onChange={(e) => setRiskData({ ...riskData, situacion: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-[14px] text-gray-800 focus:outline-none focus:border-[#087E8B]"
                      >
                        <option value="banco-sangre">
                          {lang === 'es' ? 'Tamizaje reactivo en banco de sangre' : 'Reactive blood bank screening'}
                        </option>
                        <option value="embarazo">
                          {lang === 'es' ? 'Embarazo o consulta de maternidad' : 'Pregnancy or maternity consultation'}
                        </option>
                        <option value="familiar">
                          {lang === 'es' ? 'Familiar cercano con HTLV' : 'Close family member with HTLV'}
                        </option>
                        <option value="sintomas">
                          {lang === 'es' ? 'Consulta por síntomas generales' : 'General symptoms consultation'}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[13.5px] font-bold text-[#003B49] mb-2">
                        {lang === 'es' ? '2. ¿Presentas síntomas motores o urinarios?' : '2. Any motor or urinary symptoms?'}
                      </label>
                      <select
                        value={riskData.sintomas}
                        onChange={(e) => setRiskData({ ...riskData, sintomas: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-[14px] text-gray-800 focus:outline-none focus:border-[#087E8B]"
                      >
                        <option value="ninguno">
                          {lang === 'es' ? 'Ninguno (sin molestias)' : 'None (asymptomatic)'}
                        </option>
                        <option value="leves">
                          {lang === 'es' ? 'Leves (cansancio ocasional)' : 'Mild (occasional tiredness)'}
                        </option>
                        <option value="moderados">
                          {lang === 'es' ? 'Sí (rigidez en piernas o urgencia urinaria)' : 'Yes (leg stiffness or urinary urgency)'}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[13.5px] font-bold text-[#003B49] mb-2">
                        {lang === 'es' ? '3. ¿Tienes prueba confirmatoria (WB o PCR)?' : '3. Confirmatory test (WB or PCR)?'}
                      </label>
                      <select
                        value={riskData.confirmacion}
                        onChange={(e) => setRiskData({ ...riskData, confirmacion: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-[14px] text-gray-800 focus:outline-none focus:border-[#087E8B]"
                      >
                        <option value="no">
                          {lang === 'es' ? 'No (solo ELISA inicial o en espera)' : 'No (initial ELISA only or waiting)'}
                        </option>
                        <option value="si">
                          {lang === 'es' ? 'Sí (confirmada por Western Blot o PCR)' : 'Yes (confirmed by Western Blot or PCR)'}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="bg-[#003B49] hover:bg-[#087E8B] text-white px-7 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">calculate</span>
                      <span>{lang === 'es' ? 'Evaluar Orientación' : 'Evaluate Guidance'}</span>
                    </button>
                  </div>
                </form>

                {riskResult && (
                  <div className="pt-4 border-t border-gray-200 space-y-3 animate-fadeIn">
                    <div className="flex items-center gap-3">
                      <span className="text-[12px] font-bold uppercase tracking-wider text-gray-500">
                        {lang === 'es' ? 'Resultado orientativo:' : 'Orientative Result:'}
                      </span>
                      <span className={`px-3 py-1 text-[12.5px] font-black rounded-lg ${riskResult.badgeColor}`}>
                        {riskResult.nivel}
                      </span>
                    </div>
                    <p className="text-[15px] text-gray-700 leading-relaxed font-normal bg-gray-50 p-4 rounded-xl border border-gray-200">
                      {riskResult.recomendacion}
                    </p>
                    <div className="flex items-start gap-2 text-[12.5px] text-gray-500 italic">
                      <span className="material-symbols-outlined text-[15px] text-[#087E8B] shrink-0 mt-0.5">info</span>
                      <span>
                        {lang === 'es'
                          ? 'Aviso: Esta calculadora es una guía informativa y no sustituye la evaluación clínica individualizada ni emite juicios diagnósticos.'
                          : 'Disclaimer: This calculator is an informational guide and does not replace individualized clinical evaluation or diagnostic testing.'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* SECCIÓN 3: FORMULARIOS DE APOYO */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-3">
                <h2 className="text-2xl font-black text-[#003B49]">
                  {lang === 'es' ? 'Formularios y Fichas de Apoyo' : 'Support Forms & Checklists'}
                </h2>
                <p className="text-gray-600 text-[14.5px] mt-0.5">
                  {lang === 'es' 
                    ? 'Documentos en formato descargable para facilitar el seguimiento médico y la solicitud de orientación.'
                    : 'Downloadable documents to support medical tracking and consultation requests.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: lang === 'es' ? "Ficha de Registro y Acompañamiento" : "Patient Registration & Support Sheet",
                    tag: "PDF - 240 KB",
                    desc: lang === 'es' ? "Formato para solicitar consejería y acompañamiento voluntario de la Red." : "Format to request counseling and voluntary support from the Network.",
                    action: lang === 'es' ? "Descargar Ficha" : "Download Form"
                  },
                  {
                    title: lang === 'es' ? "Lista de Chequeo para Consulta Anual" : "Annual Checkup Checklist",
                    tag: "PDF - 180 KB",
                    desc: lang === 'es' ? "Preguntas y exámenes clave para llevar a la consulta con tu médico de cabecera." : "Key questions and routine exams to bring to your primary care visit.",
                    action: lang === 'es' ? "Descargar Checklist" : "Download Checklist"
                  },
                  {
                    title: lang === 'es' ? "Consentimiento y Tamizaje Familiar" : "Family Screening Guidelines",
                    tag: "PDF - 210 KB",
                    desc: lang === 'es' ? "Pautas claras para asesorar a parejas o familiares que desean realizarse el test." : "Clear guidelines for counseling partners or family members seeking testing.",
                    action: lang === 'es' ? "Descargar Pautas" : "Download Guide"
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md">
                        {item.tag}
                      </span>
                      <h4 className="text-[16px] font-bold text-[#003B49]">
                        {item.title}
                      </h4>
                      <p className="text-[13.5px] text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <button
                      onClick={() => alert(`Descargando: ${item.title}`)}
                      className="w-full bg-[#003B49] hover:bg-[#087E8B] text-white py-2 px-4 rounded-xl text-[13px] font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[16px]">download</span>
                      <span>{item.action}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* SECCIÓN 4: FOLLETOS Y GUÍAS DIGITALES (CON IMÁGENES) */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-3">
                <h2 className="text-2xl font-black text-[#003B49]">
                  {lang === 'es' ? 'Folletos y Guías Informativas' : 'Brochures & Educational Guides'}
                </h2>
                <p className="text-gray-600 text-[14.5px] mt-0.5">
                  {lang === 'es' 
                    ? 'Materiales educativos elaborados por el Instituto de Medicina Tropical Alexander von Humboldt.'
                    : 'Educational materials prepared by the Alexander von Humboldt Institute of Tropical Medicine.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: lang === 'es' ? "Guía de Primeros Pasos tras el Diagnóstico" : "First Steps Guide After Diagnosis",
                    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
                    desc: lang === 'es' ? "Qué hacer tras recibir un resultado reactivo, mitos frecuentes y recomendaciones de tranquilidad." : "What to do after a reactive result, debunking myths, and calm guidance.",
                  },
                  {
                    title: lang === 'es' ? "Maternidad Segura y Cuidados del Bebé" : "Safe Motherhood & Infant Care",
                    img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=600&q=80",
                    desc: lang === 'es' ? "Prevención de la transmisión por leche materna y pautas de nutrición con fórmulas infantiles." : "Preventing nursing transmission and nutrition guidance with infant formulas.",
                  },
                  {
                    title: lang === 'es' ? "Rehabilitación y Movilidad en HAM/TSP" : "Physical Therapy & Mobility in HAM/TSP",
                    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
                    desc: lang === 'es' ? "Ejercicios terapéuticos para controlar la rigidez motora y preservar la autonomía física." : "Therapeutic exercises to manage motor stiffness and preserve physical autonomy.",
                  }
                ].map((brochure, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="h-44 w-full overflow-hidden bg-gray-100">
                        <img
                          src={brochure.img}
                          alt={brochure.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-5 space-y-2">
                        <h4 className="text-[17px] font-bold text-[#003B49] leading-snug">
                          {brochure.title}
                        </h4>
                        <p className="text-[13.5px] text-gray-600 leading-relaxed">
                          {brochure.desc}
                        </p>
                      </div>
                    </div>
                    <div className="p-5 pt-0">
                      <button
                        onClick={() => alert(`Visualizando folleto: ${brochure.title}`)}
                        className="w-full bg-[#E5A400] hover:bg-[#cca300] text-[#003B49] py-2 px-4 rounded-xl text-[13.5px] font-black transition-colors cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span className="material-symbols-outlined text-[18px]">menu_book</span>
                        <span>{lang === 'es' ? 'Leer Folleto Digital' : 'Read Digital Brochure'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 bg-white border border-gray-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-[14px]">
              <span className="text-gray-600 font-medium">
                {lang === 'es' ? 'Todos los materiales son de libre acceso y distribución para pacientes y comunidad.' : 'All materials are freely accessible for community distribution.'}
              </span>
              <button
                onClick={() => switchTab('haz-tu-pregunta')}
                className="bg-[#003B49] text-white px-6 py-2 rounded-xl font-bold hover:bg-[#087E8B] transition-colors cursor-pointer text-[13.5px]"
              >
                {lang === 'es' ? '¿Tienes dudas? Haz tu pregunta' : 'Have questions? Ask the Network'}
              </button>
            </div>

          </div>
        )}

        {/* 3. PESTAÑA: HAZ TU PREGUNTA */}
        {activeTab === 'haz-tu-pregunta' && (
          <div className="animate-fadeIn">
            <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-[#003B49]/15 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Columna Izquierda: Información de Confidencialidad (Sin badge de CANAL CONFIDENCIAL) */}
                <div className="lg:col-span-5 space-y-4">
                  <h3 className="text-[26px] font-black text-[#003B49] leading-tight">
                    {lang === 'es' ? 'Envía tu consulta médica o personal' : 'Submit your medical or personal inquiry'}
                  </h3>
                  <p className="text-[16px] text-[#443333] leading-relaxed">
                    {lang === 'es'
                      ? 'Tus dudas son recibidas directamente por el equipo médico del IMTAvH - UPCH y consejeros de la Red. No publicamos tus datos y te responderemos por correo.'
                      : 'Your queries are delivered directly to the IMTAvH - UPCH clinical counseling team. We never publish personal details.'}
                  </p>

                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl space-y-2 text-[13.5px] text-gray-600">
                    <div className="flex items-center gap-2 font-bold text-[#087E8B]">
                      <span className="material-symbols-outlined text-[18px]">verified_user</span>
                      <span>{lang === 'es' ? 'Garantía Ética & Privacidad' : 'Privacy & Ethics Assurance'}</span>
                    </div>
                    <p>{lang === 'es' ? 'Cumplimiento estricto de la Ley N° 29733 de Protección de Datos Personales.' : 'Strict compliance with Data Protection standards.'}</p>
                  </div>
                </div>

                {/* Columna Derecha: Formulario Horizontal */}
                <div className="lg:col-span-7 bg-[#f8f9fb] p-6 md:p-8 rounded-3xl border border-gray-200">
                  {submitted ? (
                    <div className="py-8 text-center space-y-3 animate-fadeIn">
                      <span className="material-symbols-outlined text-5xl text-[#087E8B]">check_circle</span>
                      <h4 className="text-[22px] font-black text-[#003B49]">
                        {lang === 'es' ? '¡Tu pregunta fue enviada!' : 'Your question was sent!'}
                      </h4>
                      <p className="text-[15px] text-gray-600 max-w-md mx-auto">
                        {lang === 'es' 
                          ? `Te responderemos al correo (${formData.email}) de manera privada.` 
                          : `We will reply to your email (${formData.email}) privately.`}
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ nombre: '', email: '', pais: '', tema: 'diagnostico', pregunta: '' });
                        }}
                        className="mt-3 bg-[#003B49] text-white px-6 py-2.5 rounded-xl font-bold text-[14px] cursor-pointer"
                      >
                        {lang === 'es' ? 'Enviar otra consulta' : 'Send another inquiry'}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[13.5px] font-bold text-[#003B49] mb-1">
                            {lang === 'es' ? 'Nombre o Pseudónimo' : 'Name or Nickname'}
                          </label>
                          <input
                            type="text"
                            placeholder={lang === 'es' ? "Opcional" : "Optional"}
                            value={formData.nombre}
                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-[14.5px] focus:outline-none focus:border-[#087E8B]"
                          />
                        </div>

                        <div>
                          <label className="block text-[13.5px] font-bold text-[#003B49] mb-1">
                            {lang === 'es' ? 'Correo Electrónico *' : 'Email Address *'}
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="tucorreo@ejemplo.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-[14.5px] focus:outline-none focus:border-[#087E8B]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[13.5px] font-bold text-[#003B49] mb-1">
                          {lang === 'es' ? 'Tu pregunta o consulta *' : 'Your question *'}
                        </label>
                        <textarea
                          required
                          rows="3"
                          placeholder={lang === 'es' ? "Escribe aquí tus dudas con tranquilidad..." : "Write your questions here..."}
                          value={formData.pregunta}
                          onChange={(e) => setFormData({ ...formData, pregunta: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-[14.5px] focus:outline-none focus:border-[#087E8B] resize-none"
                        ></textarea>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[12px] text-gray-500 font-semibold">
                          * {lang === 'es' ? 'Respuesta privada garantizada' : 'Private response guaranteed'}
                        </span>
                        <button
                          type="submit"
                          disabled={loading}
                          className="bg-[#A10D3A] hover:bg-[#850a2f] text-white px-7 py-3 rounded-xl font-black text-[14.5px] transition-all shadow-md cursor-pointer disabled:opacity-50"
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
