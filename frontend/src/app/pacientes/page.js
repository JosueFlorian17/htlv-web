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
  const [openFaq, setOpenFaq] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [viewMode, setViewMode] = useState('split'); // 'split' o 'accordion'
  const [expandedFaqs, setExpandedFaqs] = useState({ 0: true });

  useEffect(() => {
    if (tabFromUrl && ['faqs', 'recursos', 'haz-tu-pregunta'].includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  const switchTab = (tabId) => {
    setActiveTab(tabId);
    router.push(`/pacientes?tab=${tabId}`, { scroll: false });
  };

  const toggleAccordion = (idx) => {
    setExpandedFaqs(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
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

  // Filtrado de preguntas por búsqueda y categoría
  const filteredFaqs = useMemo(() => {
    return patientFaqs.filter(faq => {
      const matchesCategory = selectedCategory === 'todas' || faq.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery = !query || 
        faq.q.toLowerCase().includes(query) || 
        faq.a.toLowerCase().includes(query) ||
        faq.categoryLabel.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [patientFaqs, selectedCategory, searchQuery]);

  // Si el índice seleccionado queda fuera del rango filtrado, ajustarlo
  const currentFaq = filteredFaqs[openFaq] || filteredFaqs[0] || patientFaqs[0];

  const categories = [
    { id: 'todas', label: lang === 'es' ? `Todas (${patientFaqs.length})` : `All (${patientFaqs.length})` },
    { id: 'general', label: lang === 'es' ? 'Conceptos Clave' : 'Key Concepts' },
    { id: 'transmision', label: lang === 'es' ? 'Transmisión' : 'Transmission' },
    { id: 'familia', label: lang === 'es' ? 'Familia & Maternidad' : 'Family & Maternity' },
    { id: 'salud', label: lang === 'es' ? 'Salud & Controles' : 'Health & Checkups' },
    { id: 'tratamiento', label: lang === 'es' ? 'Tratamiento' : 'Treatment' },
    { id: 'diagnostico', label: lang === 'es' ? 'Diagnóstico' : 'Diagnosis' }
  ];

  const resourcesList = [
    {
      title: lang === 'es' ? "Guía de Primeros Pasos tras el Diagnóstico" : "First Steps Guide After Diagnosis",
      category: lang === 'es' ? "Folleto Digital" : "Digital Brochure",
      desc: lang === 'es' ? "Pautas claras sobre qué esperar, recomendaciones iniciales y consejos para hablar con la familia." : "Clear steps on what to expect, lifestyle recommendations, and family communication.",
      actionText: lang === 'es' ? "Descargar Guía (PDF)" : "Download Guide (PDF)",
      color: "bg-[#003B49]"
    },
    {
      title: lang === 'es' ? "Maternidad Segura y HTLV" : "Safe Motherhood & HTLV",
      category: lang === 'es' ? "Infografía Clínica" : "Clinical Infographic",
      desc: lang === 'es' ? "Recomendaciones de tamizaje prenatal y opciones de alimentación para recién nacidos sin riesgo." : "Antenatal screening guidelines and safe feeding protocols for newborns.",
      actionText: lang === 'es' ? "Ver Infografía" : "View Infographic",
      color: "bg-[#087E8B]"
    },
    {
      title: lang === 'es' ? "Red de Centros de Apoyo y Atención" : "Support Centers Directory",
      category: lang === 'es' ? "Directorio" : "Directory",
      desc: lang === 'es' ? "Centros de salud, hospitales y servicios de infectología con experiencia en HTLV en Perú y el mundo." : "Hospitals and clinical centers with specialized HTLV units in Peru and globally.",
      actionText: lang === 'es' ? "Consultar Sedes" : "Explore Centers",
      color: "bg-[#A10D3A]"
    }
  ];

  return (
    <main className="w-full bg-[#f8f9fb] min-h-[calc(100vh-80px)] py-8 md:py-12 text-[#191c1e] flex flex-col justify-between">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">
        
        {/* Cabecera con Pestañas Horizontales (1. Preguntas frecuentes, 2. Recursos, 3. Haz tu pregunta) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-8 border-b-2 border-[#003B49]/15">
          <div>
            <span className="text-[12px] font-black uppercase tracking-widest text-[#087E8B] block mb-1">
              {lang === 'es' ? 'Comunidad y Bienestar' : 'Community & Well-being'}
            </span>
            <h1 className="text-[32px] sm:text-[42px] font-black text-[#003B49] tracking-tight leading-none">
              {lang === 'es' ? 'Espacio para Pacientes' : 'Patient Space'}
            </h1>
          </div>

          {/* Selector de Pestañas Horizontales */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'faqs', label: lang === 'es' ? '1. Preguntas frecuentes' : '1. FAQs', icon: 'quiz' },
              { id: 'recursos', label: lang === 'es' ? '2. Recursos de apoyo' : '2. Resources', icon: 'library_books' },
              { id: 'haz-tu-pregunta', label: lang === 'es' ? '3. Haz tu pregunta' : '3. Ask a question', icon: 'send' }
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
          </div>
        </div>

        {/* 1. PESTAÑA: PREGUNTAS FRECUENTES (Con scroll fluido, buscador y 14 preguntas exhaustivas) */}
        {activeTab === 'faqs' && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Barra de Filtros: Buscador + Categorías + Selector de Modo */}
            <div className="bg-white p-5 rounded-3xl border border-gray-200 shadow-xs space-y-4">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                
                {/* Campo de Búsqueda */}
                <div className="relative w-full md:w-96">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                    search
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setOpenFaq(0);
                    }}
                    placeholder={lang === 'es' ? "Buscar: lactancia, síntomas, VIH, cura..." : "Search: nursing, symptoms, HIV, cure..."}
                    className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-gray-50 border border-gray-300 text-[14px] text-[#003B49] placeholder-gray-400 focus:outline-none focus:border-[#087E8B] focus:bg-white transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm font-bold"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Alternador de Modo de Visualización (Lateral vs Acordeón Corrido) */}
                <div className="flex items-center gap-2 text-xs font-bold self-end md:self-center">
                  <span className="text-gray-500 mr-1">{lang === 'es' ? 'Modo:' : 'View:'}</span>
                  <button
                    onClick={() => setViewMode('split')}
                    className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                      viewMode === 'split' 
                        ? 'bg-[#003B49] text-white shadow-xs' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">vertical_split</span>
                    <span>{lang === 'es' ? 'Detalle interactivo' : 'Interactive Split'}</span>
                  </button>
                  <button
                    onClick={() => setViewMode('accordion')}
                    className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                      viewMode === 'accordion' 
                        ? 'bg-[#003B49] text-white shadow-xs' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">view_agenda</span>
                    <span>{lang === 'es' ? 'Lectura corrida' : 'Continuous Feed'}</span>
                  </button>
                </div>
              </div>

              {/* Píldoras de Categorías */}
              <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-gray-100">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setOpenFaq(0);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-[13px] font-bold transition-all cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#087E8B] text-white shadow-xs'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* MODO 1: DETALLE INTERACTIVO (Columna izquierda scrolleable + respuesta grande derecha) */}
            {viewMode === 'split' && (
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-xs">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Columna Izquierda: Lista Scrolleable de Preguntas */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-black uppercase tracking-wider text-[#A10D3A]">
                        {lang === 'es' ? `Preguntas Disponibles (${filteredFaqs.length})` : `Available Questions (${filteredFaqs.length})`}
                      </span>
                      <span className="text-[11px] text-gray-500 font-semibold">
                        {lang === 'es' ? '↓ Desplaza para ver más' : '↓ Scroll for more'}
                      </span>
                    </div>

                    {/* Contenedor scrolleable fluido */}
                    <div className="max-h-[580px] overflow-y-auto pr-2 space-y-2.5 custom-scroll">
                      {filteredFaqs.length === 0 ? (
                        <div className="p-8 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                          <p className="text-gray-500 text-sm font-bold">
                            {lang === 'es' ? 'No se encontraron preguntas con esa búsqueda.' : 'No questions found matching your search.'}
                          </p>
                          <button
                            onClick={() => { setSearchQuery(''); setSelectedCategory('todas'); }}
                            className="mt-2 text-[#087E8B] text-xs font-black underline cursor-pointer"
                          >
                            {lang === 'es' ? 'Ver todas las preguntas' : 'View all questions'}
                          </button>
                        </div>
                      ) : (
                        filteredFaqs.map((faq, idx) => {
                          const isSelected = (currentFaq?.id === faq.id);
                          return (
                            <button
                              key={faq.id}
                              onClick={() => setOpenFaq(idx)}
                              className={`w-full p-4 rounded-2xl text-left font-bold text-[14.5px] transition-all cursor-pointer flex items-center justify-between gap-3 text-balance ${
                                isSelected
                                  ? 'bg-[#087E8B] text-white shadow-md'
                                  : 'bg-gray-50 border border-gray-200 text-[#003B49] hover:bg-gray-100 hover:border-gray-300'
                              }`}
                            >
                              <div className="space-y-1">
                                <span className={`text-[10.5px] uppercase font-black tracking-wider px-2 py-0.5 rounded-md inline-block ${
                                  isSelected ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
                                }`}>
                                  {faq.categoryLabel}
                                </span>
                                <p className="leading-snug">{faq.q}</p>
                              </div>
                              <span className="material-symbols-outlined text-[18px] shrink-0">
                                {isSelected ? 'arrow_forward' : 'chevron_right'}
                              </span>
                            </button>
                          );
                        })
                      )}
                    </div>
                  </div>

                  {/* Columna Derecha: Tarjeta de Respuesta Completa y Consejos Médicos */}
                  {currentFaq && (
                    <div className="lg:col-span-7 bg-[#f8f9fb] p-7 md:p-9 rounded-3xl border-2 border-[#003B49]/15 space-y-6 min-h-[460px] flex flex-col justify-between shadow-xs">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-3 py-1 bg-[#E5A400] text-[#003B49] text-[12px] font-black uppercase tracking-wider rounded-md inline-block">
                            {currentFaq.categoryLabel}
                          </span>
                          <span className="text-gray-400 text-xs font-bold">
                            {lang === 'es' ? 'Consenso Clínico Oficial RIII-HTLV' : 'Official RIII-HTLV Consensus'}
                          </span>
                        </div>

                        <h3 className="text-[23px] md:text-[25px] font-black text-[#003B49] leading-snug">
                          {currentFaq.q}
                        </h3>

                        <p className="text-[16.5px] text-[#332222] leading-relaxed pt-1">
                          {currentFaq.a}
                        </p>

                        {/* Caja destacada con dato de tranquilidad */}
                        <div className="p-4 bg-white border border-[#087E8B]/30 rounded-2xl flex items-start gap-3 shadow-xs">
                          <span className="material-symbols-outlined text-2xl text-[#087E8B] shrink-0 mt-0.5">
                            health_and_safety
                          </span>
                          <div>
                            <span className="text-[12px] font-extrabold uppercase text-[#087E8B] block">
                              {lang === 'es' ? 'Mensaje Clave para tu Tranquilidad:' : 'Key Takeaway for Reassurance:'}
                            </span>
                            <p className="text-[14px] text-gray-700 font-medium">
                              {currentFaq.highlight}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Pie de la respuesta con enlace a preguntar */}
                      <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[14px]">
                        <span className="text-gray-500 font-medium text-xs">
                          {lang === 'es' ? 'Evidencia revisada por infectólogos y neurólogos del IMTAvH' : 'Reviewed by IMTAvH infectologists & neurologists'}
                        </span>
                        <button
                          onClick={() => switchTab('haz-tu-pregunta')}
                          className="text-[#A10D3A] font-black hover:underline flex items-center gap-1 cursor-pointer self-start sm:self-auto text-[13.5px]"
                        >
                          <span>{lang === 'es' ? '¿Deseas orientación personal? Pregunta aquí' : 'Need personalized guidance? Ask here'}</span>
                          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            )}

            {/* MODO 2: ACORDEÓN CORRIDO (Para scrollear libremente a través de todas las preguntas de corrido) */}
            {viewMode === 'accordion' && (
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <h3 className="text-[20px] font-black text-[#003B49]">
                    {lang === 'es' ? `Lectura Completa de Preguntas y Respuestas (${filteredFaqs.length})` : `Full Question & Answer Feed (${filteredFaqs.length})`}
                  </h3>
                  <button
                    onClick={() => {
                      const allOpen = Object.keys(expandedFaqs).length === filteredFaqs.length;
                      if (allOpen) {
                        setExpandedFaqs({});
                      } else {
                        const newExpanded = {};
                        filteredFaqs.forEach((_, i) => { newExpanded[i] = true; });
                        setExpandedFaqs(newExpanded);
                      }
                    }}
                    className="text-[#087E8B] text-xs font-black hover:underline cursor-pointer"
                  >
                    {Object.keys(expandedFaqs).length === filteredFaqs.length
                      ? (lang === 'es' ? 'Colapsar todas' : 'Collapse all')
                      : (lang === 'es' ? 'Expandir todas' : 'Expand all')}
                  </button>
                </div>

                <div className="space-y-3">
                  {filteredFaqs.map((faq, idx) => {
                    const isOpen = !!expandedFaqs[idx];
                    return (
                      <div
                        key={faq.id}
                        className="border-2 border-gray-200 rounded-2xl overflow-hidden transition-all bg-gray-50/70"
                      >
                        <button
                          onClick={() => toggleAccordion(idx)}
                          className="w-full p-5 text-left font-bold text-[16px] text-[#003B49] hover:text-[#087E8B] flex items-center justify-between gap-4 cursor-pointer"
                        >
                          <div className="space-y-1">
                            <span className="text-[11px] uppercase font-black tracking-wider text-[#A10D3A] block">
                              {faq.categoryLabel}
                            </span>
                            <span className="text-[16px]">{faq.q}</span>
                          </div>
                          <span className="material-symbols-outlined text-2xl text-[#087E8B] shrink-0">
                            {isOpen ? 'expand_less' : 'expand_more'}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="p-5 pt-0 text-[15.5px] text-[#332222] leading-relaxed border-t border-gray-200 bg-white space-y-3">
                            <p className="pt-3">{faq.a}</p>
                            <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-xl text-[13.5px] text-amber-900 font-medium">
                              <strong>{lang === 'es' ? 'Punto Clave:' : 'Key Note:'}</strong> {faq.highlight}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        )}

        {/* 2. PESTAÑA: RECURSOS (Tarjetas en 3 columnas de un vistazo) */}
        {activeTab === 'recursos' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resourcesList.map((res, idx) => (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-3xl border-2 border-gray-200 shadow-xs hover:border-[#087E8B] transition-all flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-3">
                    <span className="px-3 py-1 bg-[#003B49]/10 text-[#003B49] text-[12px] font-black uppercase tracking-wider rounded-md inline-block">
                      {res.category}
                    </span>
                    <h3 className="text-[21px] font-black text-[#003B49] leading-snug">
                      {res.title}
                    </h3>
                    <p className="text-[15.5px] text-[#443333] leading-relaxed">
                      {res.desc}
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => alert(`Accediendo a: ${res.title}`)}
                      className={`w-full ${res.color} text-white font-black py-3 px-5 rounded-2xl text-[14.5px] hover:opacity-95 transition-all shadow-md cursor-pointer flex items-center justify-center gap-2`}
                    >
                      <span className="material-symbols-outlined text-[18px]">download</span>
                      <span>{res.actionText}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 bg-white border border-gray-200 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 text-[14px]">
              <span className="text-gray-600 font-medium">
                {lang === 'es' ? 'Todos los materiales son de libre descarga y uso comunitario sin costo.' : 'All materials are freely accessible for community use.'}
              </span>
              <button
                onClick={() => switchTab('haz-tu-pregunta')}
                className="bg-[#E5A400] text-[#003B49] px-6 py-2.5 rounded-xl font-black hover:bg-[#cca300] transition-colors cursor-pointer"
              >
                {lang === 'es' ? 'Solicitar material específico' : 'Request specific material'}
              </button>
            </div>
          </div>
        )}

        {/* 3. PESTAÑA: HAZ TU PREGUNTA (Canal de consulta médica privada y confidencial) */}
        {activeTab === 'haz-tu-pregunta' && (
          <div className="animate-fadeIn">
            <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-[#003B49]/15 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Columna Izquierda: Información de Confidencialidad */}
                <div className="lg:col-span-5 space-y-4">
                  <span className="px-3 py-1 bg-[#A10D3A] text-white text-[12px] font-black uppercase tracking-wider rounded-md inline-block">
                    {lang === 'es' ? 'Canal Confidencial' : 'Confidential Channel'}
                  </span>
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
