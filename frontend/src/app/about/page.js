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
          image: 'https://images.unsplash.com/photo-1594824813580-c081e7d8d697?auto=format&fit=crop&w=400&q=80'
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

  // 3 Objetivos estratégicos adaptados fielmente a las referencias QuEST LAC (Imágenes 1, 2 y 3)
  const objectivesData = [
    {
      id: 1,
      num: '01',
      title: lang === 'es'
        ? 'Consolidarse como la Red Internacional de Referencia en HTLV (RIII-HTLV)'
        : 'Consolidate as the International Benchmark Network on HTLV (RIII-HTLV)',
      shortTitle: lang === 'es'
        ? 'Red Internacional de Referencia'
        : 'International Reference Network',
      summary: lang === 'es'
        ? 'Articular una alianza científica global sólida que coordine centros de investigación, comités de políticas sanitarias y comunidades de práctica clínica.'
        : 'Establish a solid global scientific alliance coordinating research hubs, health policy committees, and clinical practice communities.',
      color: '#087E8B',
      pillars: [
        {
          title: lang === 'es' ? 'Establecimiento de Centros Core de Coordinación' : 'Establishment of Core Coordinating Centers',
          icon: 'hub',
          badge: lang === 'es' ? 'Coordinación Central' : 'Central Coordination',
          description: lang === 'es'
            ? 'Articulación permanente entre el Instituto de Medicina Tropical Alexander von Humboldt (IMTAvH - UPCH) en Lima y el Imperial College London en el Reino Unido como centros rectores de coordinación científica, administración y biobanco de referencia.'
            : 'Permanent collaboration between the Alexander von Humboldt Institute (IMTAvH - UPCH) in Lima and Imperial College London as core hubs for scientific coordination, administration, and reference biobanking.',
          linkText: lang === 'es' ? 'Ver Centros Miembros' : 'View Member Centers',
          actionTab: 'miembros'
        },
        {
          title: lang === 'es' ? 'Grupo Estratégico de Políticas Regionales (GEPR)' : 'Strategic Regional Policy Group (GEPR)',
          icon: 'policy',
          badge: lang === 'es' ? 'Políticas Públicas' : 'Public Policy',
          description: lang === 'es'
            ? 'Articulación activa de la evidencia científica con las políticas sanitarias en América Latina y el Caribe, promoviendo el tamizaje universal en bancos de sangre, el despistaje materno y la prevención efectiva de la transmisión vertical.'
            : 'Active translation of scientific evidence into health policies across Latin America, advocating for universal blood screening, maternal antenatal testing, and stopping mother-to-child transmission.',
          linkText: lang === 'es' ? 'Ver Estructura GEPR' : 'View GEPR Structure',
          actionTab: 'estructura'
        },
        {
          title: lang === 'es' ? 'Establecimiento de un Comité Asesor Técnico (CAT)' : 'Establishment of a Technical Advisory Committee (CAT)',
          icon: 'tune',
          badge: lang === 'es' ? 'Asesoría Científica' : 'Scientific Advisory',
          description: lang === 'es'
            ? 'Órgano consultivo colegiado de virólogos, infectólogos y epidemiólogos de prestigio internacional para orientar las líneas prioritarias de investigación y el fortalecimiento continuo de capacidades diagnósticas.'
            : 'Consultative board of international virologists, infectious disease specialists, and epidemiologists guiding priority research lines and diagnostic capacity building.',
          linkText: lang === 'es' ? 'Ver Comité CAT' : 'View CAT Committee',
          actionTab: 'estructura'
        },
        {
          title: lang === 'es' ? 'Identificación y Articulación de una Comunidad de Interesados' : 'Identification & Engagement of a Stakeholder Community',
          icon: 'groups',
          badge: lang === 'es' ? 'Comunidad & Pacientes' : 'Community & Patients',
          description: lang === 'es'
            ? 'Integración activa de investigadores clínicos, personal de salud, organizaciones de personas que viven con HTLV-1/2, autoridades sanitarias y organismos multilaterales en un ecosistema de intercambio continuo.'
            : 'Active engagement of researchers, healthcare workers, patient organizations, public health authorities, and international agencies into a vibrant collaborative ecosystem.',
          linkText: lang === 'es' ? 'Recursos Comunitarios' : 'Community Resources',
          actionTab: null,
          externalLink: '/pacientes?tab=faqs'
        }
      ]
    },
    {
      id: 2,
      num: '02',
      title: lang === 'es'
        ? 'Promover el Desarrollo de Capacidades de Investigación y Diagnóstico en Sistemas de Salud'
        : 'Promote Research and Diagnostic Capacity Building Across Health Systems',
      shortTitle: lang === 'es'
        ? 'Capacidades y Diagnóstico'
        : 'Capacities & Diagnostics',
      summary: lang === 'es'
        ? 'Estandarizar metodologías de laboratorio, capacitar al personal sanitario y fortalecer la vigilancia epidemiológica en áreas endémicas y redes hospitalarias.'
        : 'Standardize laboratory assays, train healthcare personnel, and strengthen epidemiological surveillance across endemic regions and hospital networks.',
      color: '#1A4B82',
      pillars: [
        {
          title: lang === 'es' ? 'Estandarización de Metodologías Diagnósticas y Carga Proviral' : 'Standardization of Diagnostic Assays & Proviral Load',
          icon: 'biotech',
          badge: lang === 'es' ? 'Diagnóstico Preciso' : 'Accurate Diagnostics',
          description: lang === 'es'
            ? 'Armonización de paneles de referencia y protocolos moleculares de PCR en tiempo real para cuantificación de carga proviral (PVL) y pruebas serológicas confirmatorias con control de calidad inter-laboratorios.'
            : 'Harmonization of reference panels and real-time qPCR protocols for proviral load (PVL) quantification and confirmatory serology with cross-laboratory quality assurance.',
          linkText: lang === 'es' ? 'Ver Recursos Diagnósticos' : 'View Diagnostic Resources',
          actionTab: null,
          externalLink: '/profesionales?tab=recursos'
        },
        {
          title: lang === 'es' ? 'Capacitación y Formación Continua de Profesionales' : 'Continuous Education & Professional Training',
          icon: 'school',
          badge: lang === 'es' ? 'Educación Médica' : 'Medical Education',
          description: lang === 'es'
            ? 'Programas formativos especializados, seminarios web internacionales y cursos cortos acreditados para médicos, neurólogos, hematólogos, enfermeros y tecnólogos en el manejo integral del paciente con HTLV.'
            : 'Specialized training curricula, international webinars, and accredited short courses for clinicians, neurologists, hematologists, and laboratory technologists in comprehensive HTLV patient management.',
          linkText: lang === 'es' ? 'Ver Cursos & Webinars' : 'View Courses & Webinars',
          actionTab: null,
          externalLink: '/profesionales?tab=cursos'
        },
        {
          title: lang === 'es' ? 'Fortalecimiento de la Vigilancia Epidemiológica Regional' : 'Strengthening Regional Epidemiological Surveillance',
          icon: 'travel_explore',
          badge: lang === 'es' ? 'Vigilancia Activa' : 'Active Surveillance',
          description: lang === 'es'
            ? 'Apoyo técnico y metodológico a sistemas de salud pública para la detección activa en áreas de alta endemicidad, comunidades originarias y poblaciones vulnerables donde el virus suele ser desatendido.'
            : 'Methodological support for public health systems to enable active case-finding in high-prevalence areas, indigenous communities, and neglected populations.',
          linkText: lang === 'es' ? 'Ver Información Epidemiológica' : 'View Epidemiology',
          actionTab: null,
          externalLink: '/htlv?tab=que-es'
        },
        {
          title: lang === 'es' ? 'Transferencia Tecnológica y Protocolos Abiertos' : 'Technology Transfer & Open Protocol Repositories',
          icon: 'menu_book',
          badge: lang === 'es' ? 'Acceso Abierto' : 'Open Access',
          description: lang === 'es'
            ? 'Disponibilización abierta de protocolos operativos estandarizados (POEs), guías de manejo clínico y fichas técnicas de libre acceso para elevar la calidad asistencial en centros descentralizados.'
            : 'Open-access distribution of standard operating procedures, clinical guidelines, and technical fact sheets to elevate the standard of care in decentralized clinical centers.',
          linkText: lang === 'es' ? 'Consultar Guías' : 'Consult Guidelines',
          actionTab: null,
          externalLink: '/profesionales?tab=recursos'
        }
      ]
    },
    {
      id: 3,
      num: '03',
      title: lang === 'es'
        ? 'Realizar Investigación Pertinente para la Región y Compartir Evidencia con Tomadores de Decisión'
        : 'Conduct Regionally Relevant Research & Share Evidence with Policymakers',
      shortTitle: lang === 'es'
        ? 'Investigación Pertinente y Políticas'
        : 'Relevant Research & Policy',
      summary: lang === 'es'
        ? 'Desarrollar proyectos traslacionales, monitorear cohortes clínicas a largo plazo y traducir los hallazgos científicos en políticas de salud pública efectivas.'
        : 'Develop translational projects, track longitudinal clinical cohorts, and translate scientific findings into actionable public health policies.',
      color: '#003B49',
      pillars: [
        {
          title: lang === 'es' ? 'Desarrollo de una Cartera de Proyectos Colaborativos' : 'Development of a Collaborative Research Portfolio',
          icon: 'science',
          badge: lang === 'es' ? 'Ensayos Multicéntricos' : 'Multicenter Trials',
          description: lang === 'es'
            ? 'Diseño y ejecución de estudios colaborativos sobre patogenia viral, biomarcadores moleculares de progresión a Paraparesia Espástica Tropical (HAM/TSP) y Leucemia/Linfoma (ATL), así como ensayos con nuevas terapias.'
            : 'Design and execution of collaborative studies on viral pathogenesis, molecular biomarkers of progression to HAM/TSP and ATL, and clinical trials evaluating novel targeted therapies.',
          linkText: lang === 'es' ? 'Ver Proyectos Activos' : 'View Active Projects',
          actionTab: null,
          externalLink: '/proyectos?tab=investigacion'
        },
        {
          title: lang === 'es' ? 'Seguimiento y Análisis de Cohortes Clínicas y Epidemiológicas' : 'Longitudinal Clinical & Epidemiological Cohort Analysis',
          icon: 'analytics',
          badge: lang === 'es' ? 'Cohortes Clínicas' : 'Clinical Cohorts',
          description: lang === 'es'
            ? 'Consolidación de registros multicéntricos estandarizados y cohortes de seguimiento clínico a largo plazo para evaluar determinantes de salud, coinfecciones tropicales y calidad de vida de las personas que viven con HTLV.'
            : 'Consolidation of standardized multicenter clinical registries and long-term follow-up cohorts to evaluate progression predictors, tropical coinfections, and health-related quality of life.',
          linkText: lang === 'es' ? 'Ver Resultados & Avances' : 'View Results & Progress',
          actionTab: null,
          externalLink: '/proyectos?tab=avances'
        },
        {
          title: lang === 'es' ? 'Vínculos con Decisores y Políticas Basadas en Evidencia' : 'Engagement with Decision-Makers & Evidence-Based Policy',
          icon: 'account_tree',
          badge: lang === 'es' ? 'Incidencia Sanitaria' : 'Health Advocacy',
          description: lang === 'es'
            ? 'Articulación directa con ministerios de salud, legisladores y agencias sanitarias internacionales (OPS/OMS) para formular políticas públicas respaldadas en evidencia científica: tamizaje universal, guías de práctica clínica y financiamiento para el control del virus.'
            : 'Direct engagement with health ministries, lawmakers, and international agencies (PAHO/WHO) to advance evidence-based policies: universal screening, clinical guidelines, and funding for viral eradication.',
          linkText: lang === 'es' ? 'Contactar con la Red' : 'Contact the Network',
          actionTab: null,
          externalLink: '/contact'
        }
      ]
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
            {activeTab === 'quienes-somos' && (lang === 'es' ? 'Quiénes Somos' : 'Who We Are')}
            {activeTab === 'objetivos' && (lang === 'es' ? 'Objetivos' : 'Objectives')}
            {activeTab === 'estructura' && (lang === 'es' ? 'Estructura y Gobernanza' : 'Structure & Governance')}
            {activeTab === 'miembros' && (lang === 'es' ? 'Instituciones Miembros' : 'Member Institutions')}
            {activeTab === 'financiamiento' && (lang === 'es' ? 'Financiamiento' : 'Funding')}
          </h1>
        </div>

        {/* 1. QUIÉNES SOMOS Y OBJETIVOS */}
        {activeTab === 'quienes-somos' && (
          <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                    {lang === 'es' ? 'Quiénes Somos' : 'Who We Are'}
                  </h2>
                </div>
                <div className="self-start sm:self-auto">
                  <img 
                    src={lang === 'es' ? "/logos/LogoRedHTLV_PNG_ES.png" : "/logos/LogoHTLVNetwork_PNG_EN.png"}
                    alt={lang === 'es' ? "Logo Red HTLV" : "HTLV Network Logo"}
                    className="h-16 sm:h-20 w-auto object-contain"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-base text-slate-700 leading-relaxed">
                  {lang === 'es'
                    ? 'La Red Internacional de Investigación e Innovación en HTLV (RIII-HTLV) es una alianza científica y académica internacional coordinada por el Instituto de Medicina Tropical Alexander von Humboldt (IMTAvH) de la Universidad Peruana Cayetano Heredia (UPCH).'
                    : 'The International Research and Innovation Network on HTLV (RIII-HTLV) is an international scientific alliance coordinated by the Alexander von Humboldt Tropical Medicine Institute (IMTAvH) at Universidad Peruana Cayetano Heredia (UPCH).'}
                </p>
                <p className="text-base text-slate-700 leading-relaxed">
                  {lang === 'es'
                    ? 'Nuestra meta es articular a centros situados en focos endémicos con laboratorios de referencia en Europa, América Latina y Asia para acelerar el diagnóstico oportuno, los protocolos terapéuticos y la erradicación progresiva de las patologías asociadas al HTLV-1 y HTLV-2.'
                    : 'Our goal is to connect centers located in endemic areas with reference laboratories in Europe, Latin America, and Asia to accelerate early diagnosis, therapeutics, and progressive eradication of HTLV-1 and HTLV-2.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                <div className="space-y-2 text-center">
                  <h3 className="font-bold text-base sm:text-lg text-[#087E8B] tracking-wide">
                    – {lang === 'es' ? 'Misión Institucional' : 'Institutional Mission'} –
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {lang === 'es'
                      ? 'Generar evidencia clínica rigurosa, estandarizar metodologías diagnósticas de carga proviral y guiar políticas de salud pública preventivas en la región.'
                      : 'Generate rigorous clinical evidence, standardize proviral load diagnostic assays, and guide preventive public health policies.'}
                  </p>
                </div>

                <div className="space-y-2 text-center">
                  <h3 className="font-bold text-base sm:text-lg text-[#E5A400] tracking-wide">
                    – {lang === 'es' ? 'Visión Global' : 'Global Vision'} –
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {lang === 'es'
                      ? 'Consolidarse como la plataforma científica de referencia mundial en retrovirología humana, integrando a pacientes, médicos y organismos multilaterales.'
                      : 'Become the world benchmark scientific platform in human retrovirology, integrating patients, clinicians, and multilateral agencies.'}
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 2. OBJETIVOS ESTRATÉGICOS (Fiel a QuEST LAC - Imágenes 1, 2 y 3) */}
        {activeTab === 'objetivos' && (
          <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
            
            {/* Introducción / Encabezado de Objetivos */}
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-bold tracking-widest text-[#087E8B] uppercase">
                {lang === 'es' ? 'Metas y Compromiso Estratégico' : 'Goals & Strategic Commitment'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003B49] tracking-tight">
                {lang === 'es' ? 'Objetivos Estratégicos de la Red RIII-HTLV' : 'Strategic Objectives of the RIII-HTLV Network'}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {lang === 'es'
                  ? 'Guiados por la excelencia científica, la cooperación regional y la salud comunitaria, orientamos el trabajo conjunto en tres ejes de acción prioritarios.'
                  : 'Guided by scientific excellence, regional cooperation, and community health, we focus collaborative efforts across three core strategic axes.'}
              </p>
            </div>

            {/* Tarjetas de los 3 Objetivos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {objectivesData.map((obj) => (
                <div
                  key={obj.id}
                  className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-[#087E8B]">
                        {obj.num}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
                        {lang === 'es' ? `Objetivo ${obj.id}` : `Objective ${obj.id}`}
                      </span>
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-[#003B49] leading-snug">
                      {obj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {obj.summary}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedObjective(obj)}
                      className="w-full py-2.5 px-4 rounded-lg text-xs font-bold transition-colors flex items-center justify-center bg-[#E5A400] hover:bg-[#d09400] text-slate-900 shadow-xs cursor-pointer"
                    >
                      {lang === 'es' ? 'Ver detalles' : 'See details'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal de Detalles del Objetivo (Superpuesto en pantalla sin scroll) */}
            {selectedObjective && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-xs animate-fadeIn overflow-y-auto"
                onClick={() => setSelectedObjective(null)}
              >
                <div
                  className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl space-y-6 my-8 border border-slate-100 max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Encabezado del Modal */}
                  <div className="border-b border-slate-100 pb-4 flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded bg-[#003B49] text-white tracking-wider">
                        {lang === 'es' ? `Objetivo ${selectedObjective.id}` : `Objective ${selectedObjective.id}`}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#003B49] leading-snug">
                        {selectedObjective.title}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedObjective(null)}
                      className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors font-bold text-lg leading-none cursor-pointer shrink-0"
                      aria-label="Cerrar modal"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Subtítulo "A través de :" */}
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-bold text-[#003B49] uppercase tracking-wider">
                      {lang === 'es' ? 'A través de :' : 'Through :'}
                    </h4>
                    <div className="h-0.5 bg-[#087E8B]/30 w-16"></div>
                  </div>

                  {/* Lista de Iniciativas (Sin iconos, estructuradas con numeración limpia) */}
                  <div className="space-y-4">
                    {selectedObjective.pillars.map((pillar, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white transition-all space-y-2"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h5 className="font-bold text-base text-[#003B49]">
                            {idx + 1}. {pillar.title}
                          </h5>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700">
                            {pillar.badge}
                          </span>
                        </div>

                        <p className="text-sm text-slate-700 leading-relaxed">
                          {pillar.description}
                        </p>

                        {(pillar.actionTab || pillar.externalLink) && (
                          <div className="pt-1">
                            {pillar.actionTab ? (
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedObjective(null);
                                  switchTab(pillar.actionTab);
                                }}
                                className="text-xs font-bold text-[#087E8B] hover:text-[#003B49] transition-colors cursor-pointer"
                              >
                                {pillar.linkText} →
                              </button>
                            ) : (
                              <Link
                                href={pillar.externalLink}
                                onClick={() => setSelectedObjective(null)}
                                className="text-xs font-bold text-[#087E8B] hover:text-[#003B49] transition-colors"
                              >
                                {pillar.linkText} →
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Botón Cerrar al pie */}
                  <div className="pt-4 border-t border-slate-100 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setSelectedObjective(null)}
                      className="bg-[#E5A400] hover:bg-[#d09400] text-slate-900 font-bold px-6 py-2 rounded-lg text-sm transition-colors cursor-pointer shadow-xs"
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

        {/* 3. INSTITUCIONES MIEMBROS & INTEGRANTES */}
        {activeTab === 'miembros' && (
          <div className="space-y-8 animate-fadeIn max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {teamNodes.map((node, nodeIdx) => (
                <div 
                  key={nodeIdx}
                  className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between"
                >
                  <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#A10D3A] block">
                        {node.nodeName}
                      </span>
                      <h3 className="text-lg font-bold text-[#003B49] mt-0.5">
                        {node.institution}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-[#003B49] text-white flex items-center justify-center font-bold text-lg">
                      R
                    </div>
                  </div>

                  <div className="space-y-3">
                    {node.members.map((member, mIdx) => (
                      <div 
                        key={mIdx}
                        className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-[#087E8B] transition-colors flex flex-col justify-center space-y-1 group"
                      >
                        <h4 className="text-sm font-bold text-[#003B49] group-hover:text-[#A10D3A] transition-colors">
                          {member.name}
                        </h4>
                        <p className="text-xs font-semibold text-[#A10D3A]">
                          {member.role}
                        </p>
                        <p className="text-xs text-slate-500">
                          {member.title}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-center">
                    <span className="text-xs font-medium text-slate-500">
                      {lang === 'es' ? 'Afiliación formal a la Red RIII-HTLV' : 'Formal RIII-HTLV Network affiliation'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
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
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1A4B82] tracking-tight mb-4">
                    {lang === 'es' ? 'Financiamiento' : 'Funding'}
                  </h2>
                  <p className="text-base text-slate-700 leading-relaxed">
                    {lang === 'es'
                      ? 'La Red RIII-HTLV cuenta con el apoyo financiero y la cooperación estratégica de la Agencia Suiza para el Desarrollo y la Cooperación (COSUDE) y el Banco Interamericano de Desarrollo (BID), así como de fondos multilaterales de investigación científica y salud global.'
                      : 'The RIII-HTLV Network receives financial support and strategic cooperation from the Swiss Agency for Development and Cooperation (SDC) and the Inter-American Development Bank (IDB), as well as multilateral scientific and global health research funds.'}
                  </p>
                </div>

                {/* Logos de Financiadores / Cooperantes */}
                <div className="py-4 flex flex-wrap items-center gap-8 sm:gap-12">
                  {/* IDB */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#004C97] flex items-center justify-center text-white font-black text-xs shadow-xs">
                      IDB
                    </div>
                    <div className="leading-tight">
                      <span className="font-extrabold text-[#004C97] text-lg block tracking-tight">IDB</span>
                      <span className="text-[11px] text-slate-500 font-medium block">
                        {lang === 'es' ? 'Banco Interamericano de Desarrollo' : 'Inter-American Development Bank'}
                      </span>
                    </div>
                  </div>

                  {/* COSUDE (Suiza) */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-[#D52B1E] flex items-center justify-center text-white font-bold text-lg shadow-xs">
                      +
                    </div>
                    <div className="leading-tight">
                      <span className="font-bold text-slate-900 text-sm block">
                        {lang === 'es' ? 'Agencia Suiza para el Desarrollo' : 'Swiss Agency for Development'}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium block">
                        {lang === 'es' ? 'y la Cooperación COSUDE' : 'and Cooperation (SDC)'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Descargo / Disclaimer de los Financiadores */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-500 leading-relaxed italic">
                    {lang === 'es'
                      ? 'El contenido es responsabilidad exclusiva de la Red RIII-HTLV y no necesariamente representa las opiniones oficiales de los financiadores.'
                      : 'The content is the sole responsibility of the RIII-HTLV Network and does not necessarily represent the official views of the funding organizations.'}
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