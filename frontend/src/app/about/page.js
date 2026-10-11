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
  // 1. quienes-somos, 2. estructura, 3. miembros, 4. aliados
  const [activeTab, setActiveTab] = useState(tabFromUrl || 'quienes-somos');
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    if (tabFromUrl && ['quienes-somos', 'estructura', 'miembros', 'aliados'].includes(tabFromUrl)) {
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

  const handleModalAction = (node) => {
    if (node.externalUrl) {
      window.open(node.externalUrl, '_blank', 'noopener,noreferrer');
    } else if (node.actionUrl) {
      setSelectedNode(null);
      router.push(node.actionUrl);
    }
  };

  return (
    <main className="w-full bg-[#f8f9fb] min-h-[calc(100vh-80px)] py-8 md:py-12 text-[#191c1e] flex flex-col justify-between">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">
        
        {/* Cabecera con 4 Pestañas Exactas Solicitadas:
            1. Quiénes somos y objetivos
            2. Estructura y gobernanza
            3. Instituciones miembros
            4. Aliados estratégicos
        */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-8 border-b-2 border-[#003B49]/15">
          <div>
            <span className="text-[12px] font-black uppercase tracking-widest text-[#087E8B] block mb-1">
              {lang === 'es' ? 'Identidad & Organización' : 'Identity & Governance'}
            </span>
            <h1 className="text-[32px] sm:text-[42px] font-black text-[#003B49] tracking-tight leading-none">
              {lang === 'es' ? 'Acerca de la Red' : 'About the Network'}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'quienes-somos', label: lang === 'es' ? 'Quiénes somos y objetivos' : 'About us & objectives', icon: 'info' },
              { id: 'estructura', label: lang === 'es' ? 'Estructura y gobernanza' : 'Structure & governance', icon: 'account_tree' },
              { id: 'miembros', label: lang === 'es' ? 'Instituciones miembros' : 'Member institutions', icon: 'groups' },
              { id: 'aliados', label: lang === 'es' ? 'Aliados estratégicos' : 'Strategic allies', icon: 'handshake' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                className={`px-4 py-3 rounded-2xl text-[14.5px] font-extrabold flex items-center gap-2 transition-all cursor-pointer ${
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

        {/* 1. QUIÉNES SOMOS Y OBJETIVOS */}
        {activeTab === 'quienes-somos' && (
          <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-gray-200 shadow-xs space-y-6">
              <div>
                <span className="px-3 py-1 bg-[#A10D3A] text-white text-[12px] font-black uppercase rounded-md inline-block mb-2">
                  RIII-HTLV
                </span>
                <h2 className="text-[28px] font-black text-[#003B49]">
                  {lang === 'es' ? 'Quiénes Somos' : 'Who We Are'}
                </h2>
                <p className="text-[17px] text-[#443333] leading-relaxed mt-2">
                  {lang === 'es'
                    ? 'La Red Internacional de Investigación e Innovación en HTLV (RIII-HTLV) es una alianza científica y académica internacional coordinada por el Instituto de Medicina Tropical Alexander von Humboldt (IMTAvH) de la Universidad Peruana Cayetano Heredia (UPCH).'
                    : 'The International Research and Innovation Network on HTLV (RIII-HTLV) is an international scientific alliance coordinated by the Alexander von Humboldt Tropical Medicine Institute (IMTAvH) at Universidad Peruana Cayetano Heredia (UPCH).'}
                </p>
                <p className="text-[17px] text-[#443333] leading-relaxed mt-2">
                  {lang === 'es'
                    ? 'Nuestra meta es articular a centros situados en focos endémicos con laboratorios de referencia en Europa, América Latina y Asia para acelerar el diagnóstico oportuno, los protocolos terapéuticos y la erradicación progresiva de las patologías asociadas al HTLV-1 y HTLV-2.'
                    : 'Our goal is to connect centers located in endemic areas with reference laboratories in Europe, Latin America, and Asia to accelerate early diagnosis, therapeutics, and progressive eradication of HTLV-1 and HTLV-2.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-[#f8f9fb] border-2 border-[#003B49]/15 space-y-2">
                  <span className="text-[13px] font-black uppercase text-[#087E8B] block">
                    {lang === 'es' ? 'Misión Institucional' : 'Institutional Mission'}
                  </span>
                  <p className="text-[15px] text-[#332222] leading-relaxed">
                    {lang === 'es'
                      ? 'Generar evidencia clínica rigurosa, estandarizar metodologías diagnósticas de carga proviral y guiar políticas de salud pública preventivas en la región.'
                      : 'Generate rigorous clinical evidence, standardize proviral load diagnostic assays, and guide preventive public health policies.'}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#f8f9fb] border-2 border-[#003B49]/15 space-y-2">
                  <span className="text-[13px] font-black uppercase text-[#E5A400] block">
                    {lang === 'es' ? 'Visión Global' : 'Global Vision'}
                  </span>
                  <p className="text-[15px] text-[#332222] leading-relaxed">
                    {lang === 'es'
                      ? 'Consolidarse como la plataforma científica de referencia mundial en retrovirología humana, integrando a pacientes, médicos y organismos multilaterales.'
                      : 'Become the world’s benchmark scientific platform in human retrovirology, integrating patients, clinicians, and multilateral agencies.'}
                  </p>
                </div>
              </div>

              <div className="pt-2 text-right">
                <button
                  onClick={() => switchTab('estructura')}
                  className="bg-[#003B49] hover:bg-[#087E8B] text-white px-6 py-3 rounded-xl font-bold text-[14.5px] transition-all inline-flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>{lang === 'es' ? 'Ver Estructura y Gobernanza' : 'View Structure & Governance'}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. ESTRUCTURA Y GOBERNANZA (Organigrama conectado idéntico a QuEST LAC - Imagen 2) */}
        {activeTab === 'estructura' && (
          <div className="space-y-6 animate-fadeIn max-w-5xl mx-auto">
            
            {/* Cabecera Informativa */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#087E8B] text-3xl">account_tree</span>
                <div>
                  <h3 className="text-[20px] font-black text-[#003B49]">
                    {lang === 'es' ? 'Estructura y Gobernanza de la Red' : 'Network Structure & Governance'}
                  </h3>
                  <p className="text-[14px] text-gray-600">
                    {lang === 'es' ? 'Haga clic en cualquiera de las áreas para consultar los detalles:' : 'Click on any area to view details:'}
                  </p>
                </div>
              </div>
              <span className="text-[12px] font-bold uppercase tracking-wider px-3 py-1 bg-gray-100 text-[#003B49] rounded-lg">
                {lang === 'es' ? 'Interactivo' : 'Interactive'}
              </span>
            </div>

            {/* Canvas Oscuro del Organigrama (Exacto a QuEST LAC - Imagen 2) */}
            <div className="bg-[#15202D] text-white p-6 md:p-12 rounded-3xl border border-gray-800 shadow-2xl relative overflow-x-auto">
              <div className="min-w-[700px] flex flex-col items-center">
                
                {/* NIVEL 1: Comité Directivo */}
                <div 
                  onClick={() => setSelectedNode(structureNodes.directivo)}
                  className="w-full max-w-[500px] bg-[#0A1624] hover:bg-[#0e1e30] border border-white/20 p-5 rounded-xl text-center cursor-pointer shadow-md transition-all hover:scale-[1.01]"
                >
                  <h4 className="text-[19px] font-black tracking-tight text-white">
                    {structureNodes.directivo.title}
                  </h4>
                  <p className="text-[12px] uppercase font-bold text-gray-400 mt-1">
                    {lang === 'es' ? 'Directores' : 'Directors'}
                  </p>
                  <p className="text-[14px] text-white/90 font-medium">
                    Dr. Eduardo Gotuzzo & Prof. Graham P. Taylor
                  </p>
                </div>

                {/* CONECTOR ORTOGONAL 1 (Vertical desde Nivel 1) */}
                <div className="w-0.5 h-6 bg-gray-400"></div>

                {/* BARRA HORIZONTAL QUE CONECTA CAT Y GEPR */}
                <div className="w-full max-w-[680px] relative">
                  <div className="h-0.5 bg-gray-400 w-full"></div>
                  {/* Bajada izquierda a CAT */}
                  <div className="absolute left-0 top-0 w-0.5 h-6 bg-gray-400"></div>
                  {/* Bajada derecha a GEPR */}
                  <div className="absolute right-0 top-0 w-0.5 h-6 bg-gray-400"></div>
                </div>

                {/* NIVEL 2: Comités Asesores (CAT y GEPR) */}
                <div className="grid grid-cols-2 gap-8 w-full max-w-[680px] pt-6">
                  
                  {/* CAT (Tono ámbar/marrón como QuEST LAC) */}
                  <div 
                    onClick={() => setSelectedNode(structureNodes.cat)}
                    className="bg-[#362215] hover:bg-[#452b1b] border border-[#D98A2C]/40 p-4.5 rounded-xl text-center cursor-pointer shadow-sm transition-all hover:scale-[1.01]"
                  >
                    <h5 className="text-[16px] font-black text-white">
                      {structureNodes.cat.title}
                    </h5>
                    <p className="text-[13px] text-white/80 mt-1">
                      {structureNodes.cat.subtitle}
                    </p>
                  </div>

                  {/* GEPR (Tono vino/rojizo como QuEST LAC) */}
                  <div 
                    onClick={() => setSelectedNode(structureNodes.gepr)}
                    className="bg-[#361522] hover:bg-[#451b2c] border border-[#A10D3A]/40 p-4.5 rounded-xl text-center cursor-pointer shadow-sm transition-all hover:scale-[1.01]"
                  >
                    <h5 className="text-[16px] font-black text-white">
                      {structureNodes.gepr.title}
                    </h5>
                    <p className="text-[13px] text-white/80 mt-1">
                      {structureNodes.gepr.subtitle}
                    </p>
                  </div>

                </div>

                {/* CONECTOR ORTOGONAL 2 (Vertical desde centro hacia Centros Core) */}
                <div className="w-0.5 h-8 bg-gray-400"></div>

                {/* NIVEL 3: Centros Core de Coordinación */}
                <div 
                  onClick={() => setSelectedNode(structureNodes.core)}
                  className="w-full max-w-[580px] bg-[#0A1A28] hover:bg-[#0e2336] border border-white/20 p-5 rounded-xl text-center cursor-pointer shadow-md transition-all hover:scale-[1.01]"
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-lg">🇵🇪</span>
                    <h4 className="text-[18px] font-black text-white">
                      {structureNodes.core.title}
                    </h4>
                    <span className="text-lg">🇬🇧</span>
                  </div>
                  <p className="text-[13.5px] text-white/90">
                    Instituto de Medicina Tropical Alexander von Humboldt (UPCH) – Perú
                  </p>
                  <p className="text-[13.5px] text-white/90">
                    National Centre for Human Retrovirology, Imperial College London – Reino Unido
                  </p>
                </div>

                {/* CONECTOR ORTOGONAL 3 (Vertical hacia la barra horizontal de Nodos Afiliados) */}
                <div className="w-0.5 h-8 bg-gray-400"></div>

                {/* BARRA HORIZONTAL CONECTANDO LOS 4 CENTROS AFILIADOS */}
                <div className="w-full max-w-[880px] relative">
                  <div className="h-0.5 bg-gray-400 w-full"></div>
                  {/* 4 bajadas verticales alineadas a cada tarjeta */}
                  <div className="absolute left-[12.5%] top-0 w-0.5 h-6 bg-gray-400"></div>
                  <div className="absolute left-[37.5%] top-0 w-0.5 h-6 bg-gray-400"></div>
                  <div className="absolute left-[62.5%] top-0 w-0.5 h-6 bg-gray-400"></div>
                  <div className="absolute left-[87.5%] top-0 w-0.5 h-6 bg-gray-400"></div>
                </div>

                {/* NIVEL 4: Centros Afiliados (4 columnas) */}
                <div className="w-full max-w-[880px] pt-6">
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      structureNodes.pasteur,
                      structureNodes.fiocruz,
                      structureNodes.isciii,
                      structureNodes.stmarianna
                    ].map((node, i) => (
                      <div 
                        key={i}
                        onClick={() => setSelectedNode(node)}
                        className="bg-[#1A2634] hover:bg-[#223346] border border-white/10 hover:border-white/30 p-4 rounded-xl text-center cursor-pointer transition-all hover:scale-[1.02] flex flex-col justify-between min-h-[140px]"
                      >
                        <div>
                          <div className="text-xl mb-1">{node.flag}</div>
                          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                            {lang === 'es' ? 'Centro Afiliado' : 'Affiliated Center'}
                          </span>
                          <h6 className="font-bold text-[13.5px] text-white mt-1 leading-snug">
                            {node.title}
                          </h6>
                        </div>
                        <span className="text-[12px] text-gray-400 mt-2 block font-medium">
                          {node.subtitle.replace(/.*- /, '')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* MODAL INSTITUCIONAL SOBRIO (Exacto a QuEST LAC - Imagen 2) */}
            {selectedNode && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-fadeIn">
                <div className="bg-[#182330] text-white w-full max-w-md rounded-2xl p-6 border border-white/10 shadow-2xl relative text-center space-y-4">
                  
                  {/* Título en negrita exacto a QuEST LAC */}
                  <h4 className="text-[17px] font-bold text-white leading-snug">
                    {selectedNode.title}:
                  </h4>

                  {/* Descripción clara y sobria */}
                  <p className="text-[14px] text-white/90 leading-relaxed max-w-sm mx-auto">
                    {selectedNode.description}
                  </p>

                  {/* Botones estilo QuEST LAC: Botón ámbar "Ver más" y botón oscuro "Cerrar" */}
                  <div className="pt-2 flex flex-col items-center gap-2">
                    <button
                      onClick={() => handleModalAction(selectedNode)}
                      className="w-44 bg-[#D98A2C] hover:bg-[#c27923] text-white font-bold py-2 px-5 rounded-md text-[14.5px] transition-all cursor-pointer shadow-sm"
                    >
                      {selectedNode.linkText || (lang === 'es' ? 'Ver más' : 'See more')}
                    </button>
                    <button
                      onClick={() => setSelectedNode(null)}
                      className="bg-[#213346] hover:bg-[#2c435c] text-white/90 text-[12px] font-medium py-1 px-4 rounded-md transition-all cursor-pointer"
                    >
                      {lang === 'es' ? 'Cerrar' : 'Close'}
                    </button>
                  </div>

                </div>
              </div>
            )}

          </div>
        )}

        {/* 3. INSTITUCIONES MIEMBROS & INTEGRANTES (Imagen 4) */}
        {activeTab === 'miembros' && (
          <div className="space-y-8 animate-fadeIn max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {teamNodes.map((node, nodeIdx) => (
                <div 
                  key={nodeIdx}
                  className="bg-white p-8 rounded-3xl border-2 border-gray-200 shadow-xs space-y-6 flex flex-col justify-between"
                >
                  <div className="border-b-2 border-gray-100 pb-4 flex items-center justify-between">
                    <div>
                      <span className="text-[12px] font-black uppercase tracking-wider text-[#A10D3A] block">
                        {node.nodeName}
                      </span>
                      <h3 className="text-[20px] font-black text-[#003B49] mt-0.5">
                        {node.institution}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[#003B49] text-white flex items-center justify-center font-black text-xl">
                      R
                    </div>
                  </div>

                  <div className="space-y-4">
                    {node.members.map((member, mIdx) => (
                      <div 
                        key={mIdx}
                        className="p-4 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#087E8B] transition-all flex items-center gap-4 group"
                      >
                        <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#003B49] flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform bg-[#087E8B]/20">
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="space-y-0.5">
                          <h4 className="text-[17px] font-black text-[#003B49] group-hover:text-[#A10D3A] transition-colors">
                            {member.name}
                          </h4>
                          <span className="inline-block text-[13px] font-bold text-[#A10D3A] bg-[#A10D3A]/10 px-2 py-0.5 rounded-md">
                            {member.role}
                          </span>
                          <p className="text-[13px] text-gray-600">
                            {member.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-gray-100 text-center">
                    <span className="text-[13px] font-semibold text-gray-500">
                      {lang === 'es' ? 'Afiliación formal a la Red RIII-HTLV' : 'Formal RIII-HTLV Network affiliation'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. ALIADOS ESTRATÉGICOS (Documentos, convenios y reglamento) */}
        {activeTab === 'aliados' && (
          <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-gray-200 shadow-xs space-y-6">
              <div>
                <h3 className="text-[26px] font-black text-[#003B49] mb-2">
                  {lang === 'es' ? 'Aliados Estratégicos & Documentos Institucionales' : 'Strategic Allies & Institutional Documents'}
                </h3>
                <p className="text-[16px] text-gray-600">
                  {lang === 'es'
                    ? 'Convenio marco y estatutos que respaldan las alianzas científicas internacionales.'
                    : 'Framework agreement and bylaws underpinning international scientific partnerships.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 border-2 border-gray-200 rounded-2xl space-y-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[12px] font-black uppercase text-[#087E8B] block">
                      Gobernanza
                    </span>
                    <h4 className="text-[19px] font-black text-[#003B49] mt-1">
                      {lang === 'es' ? 'Reglamento Interno de la Red' : 'Internal Network Bylaws'}
                    </h4>
                    <p className="text-[14.5px] text-gray-600 mt-2">
                      {lang === 'es'
                        ? 'Normativa sobre autorías científicas compartidas, comités y adhesión de nuevos nodos.'
                        : 'Guidelines on joint authorship, committee operations, and new node admissions.'}
                    </p>
                  </div>
                  <button 
                    onClick={() => alert('Documento normativo disponible vía secretaría académica.')}
                    className="w-full bg-[#003B49] hover:bg-[#087E8B] text-white py-3 px-4 rounded-xl text-[14px] font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span>{lang === 'es' ? 'Consultar Reglamento' : 'Download Bylaws'}</span>
                  </button>
                </div>

                <div className="p-6 bg-gray-50 border-2 border-gray-200 rounded-2xl space-y-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[12px] font-black uppercase text-[#A10D3A] block">
                      Convenios
                    </span>
                    <h4 className="text-[19px] font-black text-[#003B49] mt-1">
                      {lang === 'es' ? 'Convenio Marco de Colaboración' : 'Framework Collaboration Agreement'}
                    </h4>
                    <p className="text-[14.5px] text-gray-600 mt-2">
                      {lang === 'es'
                        ? 'Acuerdo interinstitucional para movilidad de investigadores y proyectos multicéntricos.'
                        : 'Inter-institutional agreement for researcher mobility and multicenter projects.'}
                    </p>
                  </div>
                  <button 
                    onClick={() => alert('Convenio disponible a través de la coordinación institucional.')}
                    className="w-full bg-[#A10D3A] hover:bg-[#850a2f] text-white py-3 px-4 rounded-xl text-[14px] font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span>{lang === 'es' ? 'Consultar Convenio Marco' : 'Download Agreement'}</span>
                  </button>
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