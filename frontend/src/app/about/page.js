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
    <main className="w-full bg-slate-50 min-h-[calc(100vh-80px)] py-8 md:py-12 text-slate-900 flex flex-col justify-between">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera con 4 Pestañas */}
        <div className="pb-6 mb-8 border-b border-slate-200">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#003B49] tracking-tight">
            {activeTab === 'quienes-somos' && (lang === 'es' ? 'Quiénes Somos y Objetivos' : 'About Us & Objectives')}
            {activeTab === 'estructura' && (lang === 'es' ? 'Estructura y Gobernanza' : 'Structure & Governance')}
            {activeTab === 'miembros' && (lang === 'es' ? 'Instituciones Miembros' : 'Member Institutions')}
            {activeTab === 'aliados' && (lang === 'es' ? 'Aliados Estratégicos' : 'Strategic Allies')}
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#087E8B] block">
                    {lang === 'es' ? 'Misión Institucional' : 'Institutional Mission'}
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {lang === 'es'
                      ? 'Generar evidencia clínica rigurosa, estandarizar metodologías diagnósticas de carga proviral y guiar políticas de salud pública preventivas en la región.'
                      : 'Generate rigorous clinical evidence, standardize proviral load diagnostic assays, and guide preventive public health policies.'}
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#E5A400] block">
                    {lang === 'es' ? 'Visión Global' : 'Global Vision'}
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {lang === 'es'
                      ? 'Consolidarse como la plataforma científica de referencia mundial en retrovirología humana, integrando a pacientes, médicos y organismos multilaterales.'
                      : 'Become the world benchmark scientific platform in human retrovirology, integrating patients, clinicians, and multilateral agencies.'}
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 2. ESTRUCTURA Y GOBERNANZA */}
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
              <div className="min-w-[700px] flex flex-col items-center">
                
                {/* NIVEL 1: Comité Directivo */}
                <div 
                  onClick={() => setSelectedNode(structureNodes.directivo)}
                  className="w-full max-w-[500px] bg-[#002538] hover:bg-[#00314a] border border-[#002538] p-5 rounded-xl text-center cursor-pointer shadow-xs transition-colors text-white"
                >
                  <h4 className="text-[19px] font-black tracking-tight text-white">
                    {structureNodes.directivo.title}
                  </h4>
                  <p className="text-[12px] uppercase font-bold text-[#E5A400] mt-1">
                    {lang === 'es' ? 'Directores' : 'Directors'}
                  </p>
                  <p className="text-[14px] text-white/95 font-medium">
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
                  
                  {/* CAT (Tono ámbar suave sobre fondo claro) */}
                  <div 
                    onClick={() => setSelectedNode(structureNodes.cat)}
                    className="bg-[#FFF9F0] hover:bg-[#FFF3E0] border-2 border-[#D98A2C] p-4.5 rounded-xl text-center cursor-pointer shadow-xs transition-colors"
                  >
                    <h5 className="text-[16px] font-black text-[#2D1B08]">
                      {structureNodes.cat.title}
                    </h5>
                    <p className="text-[13px] text-[#7A4B13] mt-1 font-medium">
                      {structureNodes.cat.subtitle}
                    </p>
                  </div>

                  {/* GEPR (Tono vino suave sobre fondo claro) */}
                  <div 
                    onClick={() => setSelectedNode(structureNodes.gepr)}
                    className="bg-[#FFF0F3] hover:bg-[#FFE6EC] border-2 border-[#A10D3A] p-4.5 rounded-xl text-center cursor-pointer shadow-xs transition-colors"
                  >
                    <h5 className="text-[16px] font-black text-[#330814]">
                      {structureNodes.gepr.title}
                    </h5>
                    <p className="text-[13px] text-[#7A132C] mt-1 font-medium">
                      {structureNodes.gepr.subtitle}
                    </p>
                  </div>

                </div>

                {/* CONECTOR ORTOGONAL 2 (Vertical desde centro hacia Centros Core) */}
                <div className="w-0.5 h-8 bg-gray-400"></div>

                {/* NIVEL 3: Centros Core de Coordinación */}
                <div 
                  onClick={() => setSelectedNode(structureNodes.core)}
                  className="w-full max-w-[580px] bg-[#003B49] hover:bg-[#004758] border border-[#003B49] p-5 rounded-xl text-center cursor-pointer shadow-xs transition-colors text-white"
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-lg">🇵🇪</span>
                    <h4 className="text-[18px] font-black text-white">
                      {structureNodes.core.title}
                    </h4>
                    <span className="text-lg">🇬🇧</span>
                  </div>
                  <p className="text-[13.5px] text-white/95">
                    Instituto de Medicina Tropical Alexander von Humboldt (UPCH) – Perú
                  </p>
                  <p className="text-[13.5px] text-white/95">
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
                        className="bg-white hover:border-[#087E8B] border-2 border-gray-200 p-4 rounded-xl text-center cursor-pointer transition-colors flex flex-col justify-between min-h-[140px] shadow-2xs"
                      >
                        <div>
                          <div className="text-xl mb-1">{node.flag}</div>
                          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                            {lang === 'es' ? 'Centro Afiliado' : 'Affiliated Center'}
                          </span>
                          <h6 className="font-bold text-[13.5px] text-[#002538] mt-1 leading-snug">
                            {node.title}
                          </h6>
                        </div>
                        <span className="text-[12px] text-gray-500 mt-2 block font-medium">
                          {node.subtitle.split(' - ')[1] || node.subtitle}
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
        {activeTab === 'aliados' && (
          <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#003B49] mb-1">
                  {lang === 'es' ? 'Aliados Estratégicos & Documentos Institucionales' : 'Strategic Allies & Institutional Documents'}
                </h3>
                <p className="text-sm text-slate-600">
                  {lang === 'es'
                    ? 'Convenio marco y estatutos que respaldan las alianzas científicas internacionales.'
                    : 'Framework agreement and bylaws underpinning international scientific partnerships.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg space-y-4 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-[#003B49]">
                      {lang === 'es' ? 'Reglamento Interno de la Red' : 'Internal Network Bylaws'}
                    </h4>
                    <p className="text-sm text-slate-600 mt-2">
                      {lang === 'es'
                        ? 'Normativa sobre autorías científicas compartidas, comités y adhesión de nuevos nodos.'
                        : 'Guidelines on joint authorship, committee operations, and new node admissions.'}
                    </p>
                  </div>
                  <Link 
                    href="/contact"
                    className="w-full bg-[#003B49] hover:bg-[#002B36] text-white py-2.5 px-4 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087E8B]"
                  >
                    <span className="material-symbols-outlined text-[18px]">description</span>
                    <span>{lang === 'es' ? 'Solicitar Reglamento' : 'Request Bylaws'}</span>
                  </Link>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg space-y-4 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-[#003B49]">
                      {lang === 'es' ? 'Convenio Marco de Colaboración' : 'Framework Collaboration Agreement'}
                    </h4>
                    <p className="text-sm text-slate-600 mt-2">
                      {lang === 'es'
                        ? 'Acuerdo interinstitucional para movilidad de investigadores y proyectos multicéntricos.'
                        : 'Inter-institutional agreement for researcher mobility and multicenter projects.'}
                    </p>
                  </div>
                  <Link 
                    href="/contact"
                    className="w-full bg-[#A10D3A] hover:bg-[#850a2f] text-white py-2.5 px-4 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A10D3A]"
                  >
                    <span className="material-symbols-outlined text-[18px]">handshake</span>
                    <span>{lang === 'es' ? 'Consultar Adhesión' : 'Inquire Partnership'}</span>
                  </Link>
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