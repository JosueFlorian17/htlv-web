"use client";

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';

function AboutContent() {
  const { lang, t } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabFromUrl = searchParams.get('tab');

  // Mapeo exacto solicitado:
  // 1. quienes-somos, 2. objetivos, 3. estructura, 4. miembros, 5. financiamiento
  const validTabs = ['quienes-somos', 'objetivos', 'estructura', 'miembros', 'financiamiento'];
  const [activeTab, setActiveTab] = useState(
    tabFromUrl && validTabs.includes(tabFromUrl) ? tabFromUrl : 'quienes-somos'
  );
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedObjective, setSelectedObjective] = useState(null);

  useEffect(() => {
    if (tabFromUrl && validTabs.includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  const switchTab = (tabId) => {
    setActiveTab(tabId);
    router.push(`/about?tab=${tabId}`, { scroll: false });
  };

  // Organigrama interactivo (Estructura y Gobernanza fiel a QuEST LAC - Imagen 2)
  const structureNodes = {
    directivo: {
      id: 'directivo',
      title: lang === 'es' ? 'Comité directivo RIII-HTLV' : 'RIII-HTLV Steering Committee',
      subtitle: lang === 'es' ? 'Directores: Dr. Eduardo Gotuzzo & Prof. Graham P. Taylor' : 'Directors: Dr. Eduardo Gotuzzo & Prof. Graham P. Taylor',
      description: lang === 'es'
        ? 'Máximo órgano de gobierno y dirección científica de la Red. Encargado de definir las líneas estratégicas, supervisar el cumplimiento del convenio marco y coordinar las actividades académicas internacionales entre los nodos fundadores.'
        : 'Supreme governing body of the network. Responsible for strategic planning, multi-center trials oversight, and international institutional coordination.',
      linkText: lang === 'es' ? 'Ver más' : 'See more',
      actionUrl: '/about?tab=miembros'
    },
    cat: {
      id: 'cat',
      title: lang === 'es' ? 'Comité Asesor Técnico (CAT)' : 'Technical Advisory Committee (CAT)',
      subtitle: lang === 'es' ? 'Dra. Elsa González & Dr. Yoshi Ishikawa' : 'Dr. Elsa González & Dr. Yoshi Ishikawa',
      description: lang === 'es'
        ? 'Encargados de asesorar en líneas de investigación y actividades para el fortalecimiento de la Red. Además, asesorará a la Red en otros aspectos que generen capacidad y mayores recursos.'
        : 'In charge of advising on research lines and activities for strengthening the Network, as well as building research capacity and resources.',
      linkText: lang === 'es' ? 'Ver más' : 'See more',
      actionUrl: '/profesionales?tab=recursos'
    },
    gepr: {
      id: 'gepr',
      title: lang === 'es' ? 'Grupo estratégico de políticas regionales (GEPR)' : 'Strategic Regional Policy Group (GEPR)',
      subtitle: lang === 'es' ? 'Prevención, Tamizaje y Apoyo Comunitario' : 'Prevention, Screening & Patient Support',
      description: lang === 'es'
        ? 'Encargados de articular la evidencia científica con las políticas públicas de salud regional, promoviendo guías de práctica clínica, tamizaje materno y espacios de orientación ética y comunitaria.'
        : 'Tasked with connecting scientific evidence with regional public health policies, clinical guidelines, and community support.',
      linkText: lang === 'es' ? 'Ver más' : 'See more',
      actionUrl: '/pacientes?tab=faqs'
    },
    core: {
      id: 'core',
      title: lang === 'es' ? 'Centros Core de Coordinación' : 'Core Coordinating Centers',
      subtitle: 'IMTAvH - UPCH (Perú) & Imperial College London (Reino Unido)',
      description: lang === 'es'
        ? 'Centros fundadores de la Red RIII-HTLV. Albergan la secretaría ejecutiva, las cohortes clínicas históricas y los laboratorios de referencia en retrovirología humana.'
        : 'Founding centers hosting executive coordination, historical clinical cohorts, and reference retrovirology laboratories.',
      linkText: lang === 'es' ? 'Ver más' : 'See more',
      actionUrl: '/proyectos?tab=investigacion'
    },
    pasteur: {
      id: 'pasteur',
      title: 'Institut Pasteur',
      subtitle: lang === 'es' ? 'Centro Afiliado - Francia' : 'Affiliated Center - France',
      country: lang === 'es' ? 'Francia' : 'France',
      flag: '🇫🇷',
      description: lang === 'es'
        ? 'Institución miembro de la Red. Centro de referencia en oncogénesis viral, mecanismos de leucemogénesis en ATL y diagnóstico retrovirológico avanzado.'
        : 'Network member institution. Reference center in viral oncogenesis, leukemogenesis mechanisms in ATL, and retrovirology diagnostics.',
      linkText: lang === 'es' ? 'Ver más' : 'See more',
      externalUrl: 'https://www.pasteur.fr'
    },
    fiocruz: {
      id: 'fiocruz',
      title: 'Fundação Oswaldo Cruz (Fiocruz)',
      subtitle: lang === 'es' ? 'Centro Afiliado - Brasil' : 'Affiliated Center - Brazil',
      country: lang === 'es' ? 'Brasil' : 'Brazil',
      flag: '🇧🇷',
      description: lang === 'es'
        ? 'Institución miembro de la Red. Líder en vigilancia epidemiológica comunitaria, estudios de coinfecciones tropicales y salud pública en Sudamérica.'
        : 'Network member institution. Leader in community epidemiological surveillance, coinfections, and South American public health.',
      linkText: lang === 'es' ? 'Ver más' : 'See more',
      externalUrl: 'https://portal.fiocruz.br'
    },
    isciii: {
      id: 'isciii',
      title: 'Instituto de Salud Carlos III (ISCIII)',
      subtitle: lang === 'es' ? 'Centro Afiliado - España' : 'Affiliated Center - Spain',
      country: lang === 'es' ? 'España' : 'Spain',
      flag: '🇪🇸',
      description: lang === 'es'
        ? 'Institución miembro de la Red. Centro Nacional de Microbiología en Madrid, registro de HTLV y evaluación de cohortes en la cuenca mediterránea.'
        : 'Network member institution. National Microbiology Center in Madrid, HTLV registry, and cohort evaluations.',
      linkText: lang === 'es' ? 'Ver más' : 'See more',
      externalUrl: 'https://www.isciii.es'
    },
    stmarianna: {
      id: 'stmarianna',
      title: 'St. Marianna University School of Medicine',
      subtitle: lang === 'es' ? 'Centro Afiliado - Japón' : 'Affiliated Center - Japan',
      country: lang === 'es' ? 'Japón' : 'Japan',
      flag: '🇯🇵',
      description: lang === 'es'
        ? 'Institución miembro de la Red. Centro de excelencia internacional en ensayos clínicos terapéuticos y biomarcadores inmunológicos en HAM/TSP.'
        : 'Network member institution. Center of excellence in therapeutic clinical trials and immunological biomarkers in HAM/TSP.',
      linkText: lang === 'es' ? 'Ver más' : 'See more',
      externalUrl: 'https://www.marianna-u.ac.jp'
    }
  };

  // Integrantes / Miembros (Imagen 4)
  const teamNodes = [
    {
      institution: 'Universidad Peruana Cayetano Heredia (IMTAvH - UPCH)',
      nodeName: 'Nodo Coordinador - Perú 🇵🇪',
      members: [
        {
          name: 'Dr. Eduardo Gotuzzo',
          role: lang === 'es' ? 'Presidente Honorario RIII-HTLV' : 'Honorary President',
          title: lang === 'es' ? 'Profesor Emérito UPCH • Infectólogo Clínico' : 'Emeritus Professor UPCH • Clinical Infectologist',
          image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Dra. Elsa González',
          role: lang === 'es' ? 'Coordinadora Científica' : 'Scientific Coordinator',
          title: lang === 'es' ? 'Investigadora Principal IMTAvH • Virología' : 'Principal Investigator IMTAvH • Virology',
          image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Dr. Yoshi Ishikawa',
          role: lang === 'es' ? 'Investigador Clínico' : 'Clinical Researcher',
          title: lang === 'es' ? 'Especialista en Diagnóstico & FAQs' : 'Diagnostics & Clinical Follow-up',
          image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Dr. Renzo Calderón',
          role: lang === 'es' ? 'Epidemiología & Ensayos' : 'Epidemiology & Trials',
          title: lang === 'es' ? 'Investigador Adjunto IMTAvH' : 'Associate Investigator IMTAvH',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
        }
      ]
    },
    {
      institution: 'Imperial College London & Red Internacional',
      nodeName: 'Nodo Internacional & Reino Unido 🇬🇧',
      members: [
        {
          name: 'Prof. Graham P. Taylor',
          role: lang === 'es' ? 'Vicepresidente RIII-HTLV' : 'Vice President',
          title: lang === 'es' ? 'Director National Centre for Human Retrovirology' : 'Head National Centre for Human Retrovirology',
          image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Dra. Aileen Rowan',
          role: lang === 'es' ? 'Biología Celular & Carga Proviral' : 'Cellular Biology & Proviral Load',
          title: 'Imperial College London',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Prof. Antoine Gessain',
          role: lang === 'es' ? 'Oncogénesis Viral & ATL' : 'Viral Oncogenesis & ATL',
          title: 'Institut Pasteur (Francia)',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Dra. María Fernanda Ríos',
          role: lang === 'es' ? 'Vigilancia Epidemiológica' : 'Epidemiological Surveillance',
          title: 'Fiocruz / ISCIII',
          image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
        }
      ]
    }
  ];

  // 5 Objetivos específicos de la Red RIII-HTLV
  const specificObjectives = [
    {
      id: 1,
      num: 1,
      title: lang === 'es' ? 'Formalización y gobernanza' : 'Formalization & governance',
      description: lang === 'es'
        ? 'Institucionalizar la red mediante convenios, comité directivo, coordinaciones regionales e internacionales y documentos de gestión que aseguren gobernanza, ética multicéntrica y seguimiento.'
        : 'Institutionalize the network through agreements, steering committee, regional and international coordination, and management documents ensuring governance, multicenter ethics, and monitoring.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
      actionBtn: null
    },
    {
      id: 2,
      num: 2,
      title: lang === 'es' ? 'Implementación operativa y armonización científica' : 'Operational implementation & scientific harmonization',
      description: lang === 'es'
        ? 'Establecer equipos por líneas de investigación, procedimientos de coordinación, estándares metodológicos y gobernanza de datos para investigación multicéntrica.'
        : 'Establish research line teams, coordination procedures, methodological standards, and data governance for multicenter research.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
      actionBtn: {
        text: lang === 'es' ? 'Conoce las líneas de investigación' : 'Discover research lines',
        href: '/proyectos?tab=investigacion'
      }
    },
    {
      id: 3,
      num: 3,
      title: lang === 'es' ? 'Agenda estratégica y planificación quinquenal' : 'Strategic agenda & 5-year planning',
      description: lang === 'es'
        ? 'Elaborar un Plan de Trabajo Conjunto a 5 años que priorice líneas de investigación, defina actividades iniciales y establezca salvaguardas ambientales y sociales mediante el Plan de Gestión Ambiental y Social (PGAS).'
        : 'Develop a 5-year Joint Work Plan prioritizing research lines, defining initial activities, and establishing environmental and social safeguards through the Environmental and Social Management Plan (PGAS).',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
      actionBtn: null
    },
    {
      id: 4,
      num: 4,
      title: lang === 'es' ? 'Producción científica y desarrollo tecnológico inicial' : 'Scientific production & early technological development',
      description: lang === 'es'
        ? 'Generar entregables del primer año: cartera priorizada de proyectos, revisión sistemática de alcance sometida a revista indizada y plataforma web para difusión científica y recursos técnicos de la red.'
        : 'Deliver first-year milestones: prioritized project portfolio, scoping review submitted to an indexed journal, and a web platform for scientific dissemination and technical network resources.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
      actionBtn: null
    },
    {
      id: 5,
      num: 5,
      title: lang === 'es' ? 'Fortalecimiento de capacidades y sostenibilidad' : 'Capacity building & sustainability',
      description: lang === 'es'
        ? 'Impulsar formación, pasantías y productos replicables, presentar propuestas a fondos competitivos y desarrollar actividades de transferencia del conocimiento y difusión comunitaria sobre el HTLV.'
        : 'Promote training, internships, and replicable products, submit proposals to competitive grant calls, and conduct knowledge transfer and community outreach activities on HTLV.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
      actionBtn: null
    }
  ];

  const handleModalAction = (node) => {
    if (node.externalUrl) {
      window.open(node.externalUrl, '_blank', 'noopener,noreferrer');
    } else if (node.actionUrl) {
      setSelectedNode(null);
      router.push(node.actionUrl);
    }
  };

  return (
    <main className="w-full bg-slate-50 min-h-[calc(100vh-80px)] py-8 md:py-12 text-slate-900 flex flex-col justify-between">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera limpia sin selector de pestañas dentro de página */}
        <div className="pb-6 mb-8 border-b border-slate-200">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#003B49] tracking-tight">
            {activeTab === 'quienes-somos' && (lang === 'es' ? '¿Quiénes somos?' : '¿Who are we?')}
            {activeTab === 'objetivos' && (lang === 'es' ? 'Objetivos' : 'Objectives')}
            {activeTab === 'estructura' && (lang === 'es' ? 'Estructura y Gobernanza' : 'Structure & Governance')}
            {activeTab === 'miembros' && (lang === 'es' ? 'Instituciones Miembros & Integrantes' : 'Member Institutions & Team')}
            {activeTab === 'financiamiento' && (lang === 'es' ? 'Financiamiento' : 'Funding')}
          </h1>
        </div>

        {/* 1. QUIÉNES SOMOS */}
        {activeTab === 'quienes-somos' && (
          <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-8">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-widest text-[#087E8B] uppercase">
                    {lang === 'es' ? 'Plataforma Internacional' : 'International Platform'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003B49]">
                    {lang === 'es' ? '¿Quiénes somos?' : '¿Who are we?'}
                  </h2>
                </div>
                <div className="self-start sm:self-auto shrink-0">
                  <img 
                    src={lang === 'es' ? "/logos/LogoRedHTLV_PNG_ES.png" : "/logos/LogoHTLVNetwork_PNG_EN.png"}
                    alt={lang === 'es' ? "Logo Red HTLV" : "HTLV Network Logo"}
                    className="h-16 sm:h-20 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Texto principal descriptivo */}
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                {lang === 'es'
                  ? 'Es una plataforma internacional de colaboración que conecta instituciones académicas y de investigación de Lima, Ucayali y Cusco con socios de Japón, Reino Unido y Estados Unidos para fortalecer la investigación y la innovación frente al HTLV.'
                  : 'It is an international collaborative platform connecting academic and research institutions from Lima, Ucayali, and Cusco with partners in Japan, the United Kingdom, and the United States to advance HTLV research and innovation.'}
              </p>

              {/* Lista de 5 Puntos */}
              <div className="space-y-4 pt-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#003B49]">
                  {lang === 'es' ? 'Nuestras Líneas de Acción Prioritarias' : 'Our Priority Action Lines'}
                </h3>

                <div className="space-y-3.5">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#087E8B] transition-colors">
                    <span className="w-8 h-8 rounded-lg bg-[#003B49] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      1
                    </span>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {lang === 'es'
                        ? 'Impulsa la investigación y la innovación para identificar brechas y generar evidencia sobre la prevención, el diagnóstico, el tratamiento y la atención integral del HTLV.'
                        : 'Drives research and innovation to identify gaps and generate evidence on HTLV prevention, diagnosis, treatment, and comprehensive care.'}
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#087E8B] transition-colors">
                    <span className="w-8 h-8 rounded-lg bg-[#087E8B] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      2
                    </span>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {lang === 'es'
                        ? 'Promueve la colaboración científica entre instituciones nacionales e internacionales para desarrollar una agenda conjunta de investigación.'
                        : 'Promotes scientific collaboration among national and international institutions to develop a shared research agenda.'}
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#087E8B] transition-colors">
                    <span className="w-8 h-8 rounded-lg bg-[#E5A400] text-[#002538] flex items-center justify-center font-bold text-sm shrink-0">
                      3
                    </span>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {lang === 'es'
                        ? 'Fortalece las capacidades de investigación mediante actividades de formación, pasantías, mentorías y módulos de capacitación.'
                        : 'Strengthens research capacities through training activities, internships, mentorship programs, and instructional modules.'}
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#087E8B] transition-colors">
                    <span className="w-8 h-8 rounded-lg bg-[#A10D3A] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      4
                    </span>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {lang === 'es'
                        ? 'Facilita la transferencia de conocimiento hacia los servicios de salud, los tomadores de decisiones y las comunidades, promoviendo el uso de evidencia en las respuestas frente al HTLV.'
                        : 'Facilitates knowledge translation toward healthcare providers, policymakers, and communities, encouraging evidence-informed HTLV responses.'}
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#087E8B] transition-colors">
                    <span className="w-8 h-8 rounded-lg bg-[#002538] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      5
                    </span>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {lang === 'es'
                        ? 'Contribuye a posicionar el HTLV como una prioridad en las agendas de salud pública del Perú y del mundo, promoviendo la articulación entre la investigación, las políticas públicas y la atención de las pacientes.'
                        : 'Contributes to positioning HTLV as a global and national public health priority, bridging research, public policy, and patient care.'}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* 2. OBJETIVOS ESTRATÉGICOS */}
        {activeTab === 'objetivos' && (
          <div className="space-y-12 animate-fadeIn max-w-5xl mx-auto">
            
            {/* Título único */}
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003B49] tracking-tight">
                {lang === 'es' ? 'Objetivos Estratégicos de la Red RIII-HTLV' : 'Strategic Objectives of the RIII-HTLV Network'}
              </h2>
            </div>

            {/* Objetivo General */}
            <div className="bg-gradient-to-br from-[#003B49] to-[#087E8B] text-white p-7 sm:p-9 rounded-2xl shadow-md space-y-3 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-[#E5A400] text-slate-950">
                  {lang === 'es' ? 'Objetivo General' : 'General Objective'}
                </span>
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-slate-100 font-medium pt-1">
                {lang === 'es'
                  ? 'Consolidar la Red Internacional de Investigación e Innovación en HTLV como una plataforma de colaboración entre instituciones académicas y de investigación de Perú, Japón, Reino Unido y Estados Unidos, para desarrollar e implementar una agenda conjunta de investigación e innovación que permita identificar brechas y generar evidencia aplicable para fortalecer la prevención, el diagnóstico, el tratamiento y la atención integral del HTLV, contribuyendo a mejorar la calidad de vida y la continuidad de la atención de las poblaciones afectadas.'
                  : 'Consolidate the International Research and Innovation Network in HTLV as a collaborative platform among academic and research institutions from Peru, Japan, the United Kingdom, and the United States, to develop and implement a joint research and innovation agenda that identifies gaps and generates actionable evidence to strengthen HTLV prevention, diagnosis, treatment, and comprehensive care, improving quality of life and continuity of care for affected populations.'}
              </p>
            </div>

            {/* Sección Objetivos Específicos */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                  {lang === 'es' ? 'Objetivos Específicos' : 'Specific Objectives'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {lang === 'es' ? 'Haz clic en cada objetivo para ver los detalles a profundidad' : 'Click each objective to explore full details'}
                </p>
              </div>

              {/* Disposición dinámica de hexágonos: Fila 1 (3) y Fila 2 (2) */}
              <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 pt-4">
                
                {/* Fila 1: Objetivos 1, 2 y 3 */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                  {specificObjectives.slice(0, 3).map((obj) => (
                    <div
                      key={obj.id}
                      onClick={() => setSelectedObjective(obj)}
                      className="group cursor-pointer flex flex-col items-center text-center transition-all transform hover:-translate-y-2 duration-300 w-44 sm:w-52"
                    >
                      {/* Hexágono de 6 lados con imagen y texto de fondo */}
                      <div 
                        className="w-40 h-44 sm:w-48 sm:h-52 relative flex items-center justify-center p-5 shadow-lg group-hover:shadow-2xl transition-all duration-300 bg-[#003B49]"
                        style={{
                          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                        }}
                      >
                        {/* Imagen de fondo */}
                        <img 
                          src={obj.image} 
                          alt={obj.title}
                          className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-35 transition-opacity duration-300 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#003B49]/80 via-[#003B49]/60 to-[#087E8B]/80 group-hover:from-[#087E8B]/80 group-hover:to-[#003B49]/80 transition-colors"></div>
                        
                        {/* Contenido dentro del hexágono: Número grande y título del objetivo */}
                        <div className="relative z-10 flex flex-col items-center justify-center px-3 space-y-2">
                          <span className="text-3xl sm:text-4xl font-black text-[#E5A400] drop-shadow-sm font-sans">
                            {obj.num}
                          </span>
                          <h4 className="text-xs sm:text-[13px] font-bold text-white leading-snug line-clamp-3">
                            {obj.title}
                          </h4>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E5A400] text-slate-950 group-hover:bg-white transition-colors">
                            {lang === 'es' ? 'Ver más' : 'See more'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fila 2: Objetivos 4 y 5 */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 sm:-mt-2">
                  {specificObjectives.slice(3, 5).map((obj) => (
                    <div
                      key={obj.id}
                      onClick={() => setSelectedObjective(obj)}
                      className="group cursor-pointer flex flex-col items-center text-center transition-all transform hover:-translate-y-2 duration-300 w-44 sm:w-52"
                    >
                      {/* Hexágono de 6 lados con imagen y texto de fondo */}
                      <div 
                        className="w-40 h-44 sm:w-48 sm:h-52 relative flex items-center justify-center p-5 shadow-lg group-hover:shadow-2xl transition-all duration-300 bg-[#003B49]"
                        style={{
                          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                        }}
                      >
                        {/* Imagen de fondo */}
                        <img 
                          src={obj.image} 
                          alt={obj.title}
                          className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-35 transition-opacity duration-300 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#003B49]/80 via-[#003B49]/60 to-[#087E8B]/80 group-hover:from-[#087E8B]/80 group-hover:to-[#003B49]/80 transition-colors"></div>
                        
                        {/* Contenido dentro del hexágono: Número grande y título del objetivo */}
                        <div className="relative z-10 flex flex-col items-center justify-center px-3 space-y-2">
                          <span className="text-3xl sm:text-4xl font-black text-[#E5A400] drop-shadow-sm font-sans">
                            {obj.num}
                          </span>
                          <h4 className="text-xs sm:text-[13px] font-bold text-white leading-snug line-clamp-3">
                            {obj.title}
                          </h4>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E5A400] text-slate-950 group-hover:bg-white transition-colors">
                            {lang === 'es' ? 'Ver más' : 'See more'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Modal Pop-up sin bordes redondeados, sin píldora de objetivo, sin píldora de descripción y botón cerrar recto */}
            {selectedObjective && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xs animate-fadeIn"
                onClick={() => setSelectedObjective(null)}
              >
                <div
                  className="bg-white rounded-none max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 border border-slate-300 relative animate-scaleUp"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Encabezado sin píldora de objetivo */}
                  <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[#003B49] leading-snug">
                      {selectedObjective.num}. {selectedObjective.title}
                    </h3>
                    <button
                      type="button"
                      onClick={() => setSelectedObjective(null)}
                      className="text-slate-400 hover:text-slate-700 p-1 rounded-none hover:bg-slate-100 transition-colors font-bold text-lg leading-none cursor-pointer shrink-0"
                      aria-label="Cerrar modal"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Imagen del objetivo con bordes rectos */}
                  <div className="relative rounded-none overflow-hidden h-36 bg-slate-100 border border-slate-200">
                    <img 
                      src={selectedObjective.image} 
                      alt={selectedObjective.title}
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  </div>

                  {/* Texto de descripción directo, sin píldora de descripción y alcance */}
                  <div className="space-y-2">
                    <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-none border border-slate-200">
                      {selectedObjective.description}
                    </p>
                  </div>

                  {selectedObjective.actionBtn && (
                    <div className="pt-1">
                      <Link
                        href={selectedObjective.actionBtn.href}
                        onClick={() => setSelectedObjective(null)}
                        className="inline-flex items-center gap-2 py-2 px-4 rounded-none text-xs font-bold bg-[#003B49] hover:bg-[#087E8B] text-white shadow-xs transition-colors"
                      >
                        {selectedObjective.actionBtn.text} →
                      </Link>
                    </div>
                  )}

                  {/* Botón Cerrar sin bordes redondeados */}
                  <div className="pt-3 border-t border-slate-200 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setSelectedObjective(null)}
                      className="bg-[#E5A400] hover:bg-[#d09400] text-slate-950 font-bold px-6 py-2 rounded-none text-xs transition-colors cursor-pointer shadow-xs"
                    >
                      {lang === 'es' ? 'Cerrar' : 'Close'}
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* 3. ESTRUCTURA Y GOBERNANZA */}
        {activeTab === 'estructura' && (
          <div className="space-y-6 animate-fadeIn max-w-5xl mx-auto">
            
            {/* Título limpio sin card ni segmento de interactivo */}
            <div>
              <h3 className="text-2xl font-bold text-[#003B49]">
                {lang === 'es' ? 'Estructura y Gobernanza de la Red' : 'Network Structure & Governance'}
              </h3>
            </div>

            {/* Diagrama directo sin borde ni nada exterior */}
            <div className="w-full relative overflow-x-auto py-4">
              <div className="min-w-[760px] flex flex-col items-center">
                
                {/* NIVEL 1: Comité Directivo */}
                <div 
                  onClick={() => setSelectedNode(structureNodes.directivo)}
                  className="w-full max-w-[560px] bg-[#1A4B82] p-5 sm:p-6 rounded-2xl text-center cursor-pointer shadow-sm text-white transition-opacity hover:opacity-95"
                >
                  <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                    {structureNodes.directivo.title}
                  </h4>
                  <p className="text-sm font-bold text-white/95 mt-1.5">
                    {lang === 'es' ? 'Directores' : 'Directors'}
                  </p>
                  <p className="text-sm text-white/90 font-medium mt-0.5">
                    Dr. Eduardo Gotuzzo & Prof. Graham P. Taylor
                  </p>
                </div>

                {/* CONECTOR ENTRE NIVEL 1 Y NIVEL 2 */}
                <div className="w-0.5 h-6 bg-[#54738C]"></div>

                {/* BARRA HORIZONTAL QUE CONECTA CAT Y GEPR */}
                <div className="w-full max-w-[700px] relative">
                  <div className="h-0.5 bg-[#54738C] w-full"></div>
                  {/* Bajada izquierda a CAT */}
                  <div className="absolute left-[25%] -translate-x-1/2 top-0 w-0.5 h-6 bg-[#54738C]"></div>
                  {/* Bajada derecha a GEPR */}
                  <div className="absolute left-[75%] -translate-x-1/2 top-0 w-0.5 h-6 bg-[#54738C]"></div>
                </div>

                {/* NIVEL 2: Comités Asesores (CAT y GEPR) con línea vertical central */}
                <div className="relative w-full max-w-[700px]">
                  {/* Línea vertical continua que cruza por el centro conectando directo con Centros Core */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#54738C]"></div>

                  <div className="grid grid-cols-2 gap-8 w-full pt-6 relative z-10">
                    {/* CAT */}
                    <div 
                      onClick={() => setSelectedNode(structureNodes.cat)}
                      className="bg-[#ED7D31] p-4.5 rounded-xl text-center cursor-pointer shadow-sm transition-opacity hover:opacity-95 text-white flex flex-col justify-center min-h-[92px]"
                    >
                      <h5 className="text-base font-bold text-white leading-snug">
                        {structureNodes.cat.title}
                      </h5>
                      <p className="text-xs text-white/95 mt-1 font-medium">
                        {structureNodes.cat.subtitle}
                      </p>
                    </div>

                    {/* GEPR */}
                    <div 
                      onClick={() => setSelectedNode(structureNodes.gepr)}
                      className="bg-[#ED7D31] p-4.5 rounded-xl text-center cursor-pointer shadow-sm transition-opacity hover:opacity-95 text-white flex flex-col justify-center min-h-[92px]"
                    >
                      <h5 className="text-base font-bold text-white leading-snug">
                        {structureNodes.gepr.title}
                      </h5>
                      <p className="text-xs text-white/95 mt-1 font-medium">
                        {structureNodes.gepr.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CONECTOR VERTICAL DIRECTO A CENTROS CORE */}
                <div className="w-0.5 h-8 bg-[#54738C]"></div>

                {/* NIVEL 3: Centros Core de Coordinación */}
                <div 
                  onClick={() => setSelectedNode(structureNodes.core)}
                  className="w-full max-w-[640px] bg-[#2E75B6] p-5 sm:p-6 rounded-2xl text-center cursor-pointer shadow-sm text-white transition-opacity hover:opacity-95"
                >
                  <div className="flex items-center justify-between px-3 mb-2">
                    <span className="text-2xl drop-shadow-xs">🇵🇪</span>
                    <span className="text-2xl drop-shadow-xs">🇬🇧</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                    {lang === 'es' ? 'Centros Core' : 'Core Centers'}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/95 font-medium mt-1.5 leading-snug">
                    Instituto de Medicina Tropical Alexander von Humboldt (UPCH) – Perú
                  </p>
                  <p className="text-xs sm:text-sm text-white/95 font-medium leading-snug">
                    National Centre for Human Retrovirology, Imperial College London – Reino Unido
                  </p>
                </div>

                {/* CONECTOR HACIA CENTROS AFILIADOS */}
                <div className="w-0.5 h-8 bg-[#54738C]"></div>

                {/* BARRA HORIZONTAL CONECTANDO LOS 4 CENTROS AFILIADOS */}
                <div className="w-full max-w-[940px] relative">
                  <div className="h-0.5 bg-[#54738C] w-full"></div>
                  {/* 4 bajadas verticales alineadas exactamente al centro de cada tarjeta */}
                  <div className="absolute left-[12.5%] -translate-x-1/2 top-0 w-0.5 h-6 bg-[#54738C]"></div>
                  <div className="absolute left-[37.5%] -translate-x-1/2 top-0 w-0.5 h-6 bg-[#54738C]"></div>
                  <div className="absolute left-[62.5%] -translate-x-1/2 top-0 w-0.5 h-6 bg-[#54738C]"></div>
                  <div className="absolute left-[87.5%] -translate-x-1/2 top-0 w-0.5 h-6 bg-[#54738C]"></div>
                </div>

                {/* NIVEL 4: Centros Afiliados (4 columnas) */}
                <div className="w-full max-w-[940px] pt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
                    {[
                      structureNodes.pasteur,
                      structureNodes.fiocruz,
                      structureNodes.isciii,
                      structureNodes.stmarianna
                    ].map((node, i) => (
                      <div 
                        key={i}
                        onClick={() => setSelectedNode(node)}
                        className="bg-[#DCE4EC] hover:bg-[#D3DEE8] p-4 sm:p-5 rounded-2xl text-center cursor-pointer transition-colors flex flex-col justify-between min-h-[160px] shadow-2xs"
                      >
                        <div className="flex items-center justify-start w-full mb-1">
                          <span className="text-2xl leading-none">{node.flag}</span>
                        </div>
                        <div className="my-auto py-1">
                          <span className="text-xs sm:text-[13px] font-bold text-[#1A4B82] uppercase tracking-wide block">
                            {lang === 'es' ? 'Centro Afiliado' : 'Affiliated Center'}
                          </span>
                          <h6 className="font-semibold text-xs text-slate-700 mt-1 leading-snug">
                            {node.title}
                          </h6>
                        </div>
                        <span className="text-xs sm:text-sm font-bold italic text-[#1A4B82] mt-2 block">
                          {node.country}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* MODAL INSTITUCIONAL SOBRIO */}
            {selectedNode && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
                <div className="bg-white text-slate-900 w-full max-w-md rounded-xl p-6 border border-slate-200 shadow-xl relative text-center space-y-4">
                  
                  {/* Título */}
                  <h4 className="text-base font-bold text-[#003B49] leading-snug">
                    {selectedNode.title}:
                  </h4>

                  {/* Descripción clara y sobria */}
                  <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                    {selectedNode.description}
                  </p>

                  {/* Botones */}
                  <div className="pt-2 flex flex-col items-center gap-2">
                    <button
                      onClick={() => handleModalAction(selectedNode)}
                      className="w-44 bg-[#E5A400] hover:bg-[#CCA300] text-[#002538] font-semibold py-2 px-4 rounded-lg text-sm transition-colors cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A400]"
                    >
                      {selectedNode.linkText || (lang === 'es' ? 'Ver más' : 'See more')}
                    </button>
                    <button
                      onClick={() => setSelectedNode(null)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium py-1.5 px-4 rounded-lg transition-colors cursor-pointer focus-visible:outline-none"
                    >
                      {lang === 'es' ? 'Cerrar' : 'Close'}
                    </button>
                  </div>

                </div>
              </div>
            )}

          </div>
        )}

        {/* 3. INSTITUCIONES MIEMBROS & INTEGRANTES (Diseño estilo Harvard / QuEST LAC con nuestros colores) */}
        {activeTab === 'miembros' && (
          <div className="space-y-12 animate-fadeIn max-w-6xl mx-auto">
            {teamNodes.map((node, nodeIdx) => (
              <div key={nodeIdx} className="space-y-6">
                
                {/* Encabezado de la Institución / Nodo */}
                <div className="border-b-2 border-[#003B49]/20 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#087E8B] block">
                      {node.nodeName}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#003B49] mt-0.5">
                      {node.institution}
                    </h3>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#003B49]/10 text-[#003B49] self-start sm:self-auto">
                    {node.members.length} {lang === 'es' ? 'Investigadores' : 'Researchers'}
                  </span>
                </div>

                {/* Grid de Miembros con línea divisoria lateral naranja/mostaza y badges (Estilo foto de referencia) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {node.members.map((member, mIdx) => (
                    <div
                      key={mIdx}
                      className="relative pl-4 border-l-2 border-[#E5A400] flex flex-col justify-between space-y-4 py-1 group bg-white/50 p-2 rounded-r-lg hover:bg-white hover:shadow-sm transition-all"
                    >
                      <div className="space-y-3">
                        {/* Foto cuadrada nítida */}
                        <div className="w-full aspect-square rounded-sm overflow-hidden bg-slate-100 shadow-xs border border-slate-200/80">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Nombre del Investigador */}
                        <div>
                          <h4 className="text-base font-bold text-slate-900 group-hover:text-[#003B49] transition-colors leading-tight">
                            {member.name}
                          </h4>
                          
                          {/* Rol institucional */}
                          <p className="text-xs font-semibold text-[#003B49] mt-1 leading-snug">
                            {member.role}
                          </p>

                          {/* Cargo y Departamento */}
                          <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                            {member.title}
                          </p>
                        </div>
                      </div>

                      {/* Badge ovalado / pastilla con borde mostaza (idéntico al estilo de la referencia) */}
                      <div className="pt-1">
                        <span className="inline-block text-[11px] font-semibold text-black px-3 py-0.5 rounded-full border border-[#E5A400] bg-transparent">
                          {node.institution.includes('UPCH') ? (lang === 'es' ? 'Investigador Principal' : 'Principal Investigator') : (lang === 'es' ? 'Investigador Internacional' : 'International Faculty')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        )}

        {/* 4. ALIADOS ESTRATÉGICOS (Sin chips ni subtítulos) */}
        {/* 4. FINANCIAMIENTO */}
        {activeTab === 'financiamiento' && (
          <div className="space-y-6 animate-fadeIn max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Imagen izquierda representativa */}
              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-[420px] bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" 
                  alt="Cooperación y Salud Comunitaria" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido derecho de Financiamiento */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003B49] tracking-tight mb-4">
                    {lang === 'es' ? 'Financiamiento' : 'Funding'}
                  </h2>
                  <p className="text-base text-slate-700 leading-relaxed">
                    {lang === 'es'
                      ? 'La Red Internacional de Investigación e Innovación en HTLV cuenta con el financiamiento del Programa Nacional de Investigación Científica y Estudios Avanzados (PROCIENCIA), en el marco del concurso Redes de Ciencia, Tecnología e Innovación en Áreas Estratégicas.'
                      : 'The International Research and Innovation Network in HTLV is funded by the National Program for Scientific Research and Advanced Studies (PROCIENCIA), under the Science, Technology, and Innovation Networks in Strategic Areas grant scheme.'}
                  </p>
                </div>

                {/* Logos de CONCYTEC - PROCIENCIA en lugar de los 2 recuadros previos */}
                <div className="py-3 px-6 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                  <img 
                    src="/logos/concytec_prociencia.png" 
                    alt="CONCYTEC - PROCIENCIA" 
                    className="h-16 sm:h-20 w-auto object-contain"
                  />
                </div>

                {/* Descargo / Disclaimer de los Financiadores */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-500 leading-relaxed italic">
                    {lang === 'es'
                      ? 'El contenido es responsabilidad exclusiva de la Red HTLV y no necesariamente representa las opiniones oficiales de los financiadores.'
                      : 'The content is the sole responsibility of the Red HTLV and does not necessarily represent the official views of the funding organizations.'}
                  </p>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </main>
  );
}

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-20 text-center font-bold text-[#003B49]">Cargando...</div>}>
      <AboutContent />
    </Suspense>
  );
}