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

  // Organigrama interactivo (Estructura y Gobernanza)
  const structureNodes = {
    directivo: {
      id: 'directivo',
      title: lang === 'es' ? 'Comité Directivo RIII-HTLV' : 'RIII-HTLV Steering Committee',
      subtitle: lang === 'es' ? 'Directores: Dr. Eduardo Gotuzzo & Prof. Graham P. Taylor' : 'Directors: Dr. Eduardo Gotuzzo & Prof. Graham P. Taylor',
      flag: '🌐',
      description: lang === 'es'
        ? 'Máximo órgano de gobierno de la red. Fija la dirección científica, supervisa ensayos multicéntricos y representa a la alianza ante organismos sanitarios internacionales.'
        : 'Supreme governing body of the network. Sets scientific strategy, oversees clinical trials, and represents the alliance before global health agencies.',
      members: [
        'Dr. Eduardo Gotuzzo (Presidente Honorario - IMTAvH / UPCH)',
        'Prof. Graham P. Taylor (Vicepresidente - Imperial College London)'
      ],
      linkText: lang === 'es' ? 'Ver investigadores del equipo' : 'View Team Investigators',
      actionUrl: '/about?tab=miembros'
    },
    cat: {
      id: 'cat',
      title: lang === 'es' ? 'Comité Asesor Técnico (CAT)' : 'Technical Advisory Committee (TAC)',
      subtitle: lang === 'es' ? 'Dra. Elsa González & Dr. Yoshi Ishikawa' : 'Dr. Elsa González & Dr. Yoshi Ishikawa',
      flag: '🔬',
      description: lang === 'es'
        ? 'Equipo técnico en virología molecular y estandarización diagnóstica. Define protocolos de carga proviral y control inter-laboratorios.'
        : 'Technical team in molecular virology and diagnostic standardization. Sets proviral load protocols and quality control.',
      members: [
        'Dra. Elsa González (Epidemiología Molecular - UPCH)',
        'Dr. Yoshi Ishikawa (Investigación Clínica & Biomarcadores)'
      ],
      linkText: lang === 'es' ? 'Ver Recursos Clínicos' : 'View Clinical Resources',
      actionUrl: '/profesionales?tab=recursos'
    },
    gepr: {
      id: 'gepr',
      title: lang === 'es' ? 'Grupo Estratégico de Políticas y Comunidad' : 'Strategic Policy & Community Group',
      subtitle: lang === 'es' ? 'Prevención, Tamizaje y Apoyo a Pacientes' : 'Prevention, Screening & Patient Support',
      flag: '🏛️',
      description: lang === 'es'
        ? 'Articula la evidencia con políticas sanitarias, erradicación de transmisión vertical y orientación comunitaria.'
        : 'Connects scientific evidence with health policy, vertical transmission prevention, and community counseling.',
      members: [
        'Comité de Perinatología y Lactancia Segura',
        'Coordinación de Orientación al Paciente'
      ],
      linkText: lang === 'es' ? 'Ir al Espacio de Pacientes' : 'Go to Patient Space',
      actionUrl: '/pacientes?tab=faqs'
    },
    core: {
      id: 'core',
      title: lang === 'es' ? 'Centros Core de Coordinación' : 'Core Coordinating Centers',
      subtitle: 'IMTAvH - UPCH (Perú 🇵🇪) & Imperial College London (UK 🇬🇧)',
      flag: '🇵🇪 🇬🇧',
      description: lang === 'es'
        ? 'Centros fundadores de la Red RIII-HTLV. Albergan la secretaría ejecutiva, las cohortes clínicas históricas y los laboratorios de referencia en retrovirología humana.'
        : 'Founding centers hosting executive coordination, historical clinical cohorts, and reference retrovirology laboratories.',
      members: [
        'Instituto de Medicina Tropical Alexander von Humboldt (UPCH - Lima, Perú)',
        'National Centre for Human Retrovirology (Imperial College London - UK)'
      ],
      linkText: lang === 'es' ? 'Ver Proyectos Activos' : 'View Active Projects',
      actionUrl: '/proyectos?tab=investigacion'
    },
    pasteur: {
      id: 'pasteur',
      title: 'Institut Pasteur',
      subtitle: lang === 'es' ? 'Centro Afiliado - Francia' : 'Affiliated Center - France',
      flag: '🇫🇷',
      description: lang === 'es' ? 'Nodo líder en oncogénesis viral y transformación leucémica de células T (ATL).' : 'Leading node in viral oncogenesis and adult T-cell leukemia (ATL).',
      linkText: lang === 'es' ? 'Visitar Sitio Web Oficial' : 'Visit Official Website',
      externalUrl: 'https://www.pasteur.fr'
    },
    fiocruz: {
      id: 'fiocruz',
      title: 'Fundação Oswaldo Cruz (Fiocruz)',
      subtitle: lang === 'es' ? 'Centro Afiliado - Brasil' : 'Affiliated Center - Brazil',
      flag: '🇧🇷',
      description: lang === 'es' ? 'Vigilancia epidemiológica comunitaria y coinfecciones en Sudamérica.' : 'Epidemiological surveillance and coinfections in South America.',
      linkText: lang === 'es' ? 'Visitar Sitio Web Oficial' : 'Visit Official Website',
      externalUrl: 'https://portal.fiocruz.br'
    },
    isciii: {
      id: 'isciii',
      title: 'Instituto de Salud Carlos III (ISCIII)',
      subtitle: lang === 'es' ? 'Centro Afiliado - España' : 'Affiliated Center - Spain',
      flag: '🇪🇸',
      description: lang === 'es' ? 'Centro Nacional de Microbiología en Madrid y registro de HTLV.' : 'National Microbiology Center in Madrid and national registry.',
      linkText: lang === 'es' ? 'Visitar Sitio Web Oficial' : 'Visit Official Website',
      externalUrl: 'https://www.isciii.es'
    },
    stmarianna: {
      id: 'stmarianna',
      title: 'St. Marianna University School of Medicine',
      subtitle: lang === 'es' ? 'Centro Afiliado - Japón' : 'Affiliated Center - Japan',
      flag: '🇯🇵',
      description: lang === 'es' ? 'Ensayos terapéuticos y biomarcadores en HAM/TSP.' : 'Therapeutic trials and biomarkers in HAM/TSP.',
      linkText: lang === 'es' ? 'Visitar Sitio Web Oficial' : 'Visit Official Website',
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

        {/* 2. ESTRUCTURA Y GOBERNANZA (Mapa interactivo con modal moderno) */}
        {activeTab === 'estructura' && (
          <div className="space-y-6 animate-fadeIn max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-3xl border-2 border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#087E8B] text-3xl">account_tree</span>
                <div>
                  <h3 className="text-[20px] font-black text-[#003B49]">
                    {lang === 'es' ? 'Mapa de Gobernanza de la Red' : 'Network Governance Organigram'}
                  </h3>
                  <p className="text-[14px] text-gray-600">
                    {lang === 'es' ? 'Haga clic en cualquiera de los cuadros para abrir el detalle:' : 'Click on any box to open details:'}
                  </p>
                </div>
              </div>
              <span className="text-[12px] font-black uppercase tracking-wider px-3 py-1 bg-[#E5A400] text-[#003B49] rounded-lg">
                {lang === 'es' ? 'Clickable' : 'Clickable'}
              </span>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl border-2 border-gray-200 shadow-sm relative">
              <div className="flex flex-col items-center space-y-8">
                
                {/* Nivel 1: Comité Directivo */}
                <div 
                  onClick={() => setSelectedNode(structureNodes.directivo)}
                  className="w-full max-w-[580px] bg-[#003B49] hover:bg-[#002b36] text-white p-6 rounded-2xl text-center cursor-pointer shadow-md transition-all hover:scale-[1.02] border-2 border-transparent hover:border-[#E5A400]"
                >
                  <span className="text-[12px] font-black uppercase tracking-widest text-[#E5A400] block mb-1">
                    {lang === 'es' ? 'Gobernanza General' : 'General Governance'}
                  </span>
                  <h4 className="text-[22px] font-black">
                    {structureNodes.directivo.title}
                  </h4>
                  <p className="text-[15px] text-white/90 mt-1 font-semibold">
                    {structureNodes.directivo.subtitle}
                  </p>
                  <span className="mt-2 inline-block text-[12px] text-[#E5A400] underline font-bold">
                    {lang === 'es' ? 'Click para ver detalles' : 'Click to see details'} →
                  </span>
                </div>

                <div className="w-1 h-8 bg-[#087E8B]/40"></div>

                {/* Nivel 2: Comités Asesores */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[780px]">
                  <div 
                    onClick={() => setSelectedNode(structureNodes.cat)}
                    className="bg-[#087E8B] hover:bg-[#0aa0b0] text-white p-5 rounded-2xl text-center cursor-pointer shadow-sm transition-all hover:scale-[1.02]"
                  >
                    <span className="text-[12px] font-black uppercase tracking-widest text-white/90 block mb-1">
                      {structureNodes.cat.flag} {lang === 'es' ? 'Asesoría Molecular' : 'Molecular Advisory'}
                    </span>
                    <h5 className="text-[18px] font-black">
                      {structureNodes.cat.title}
                    </h5>
                    <p className="text-[13.5px] text-white/90 mt-1">
                      {structureNodes.cat.subtitle}
                    </p>
                  </div>

                  <div 
                    onClick={() => setSelectedNode(structureNodes.gepr)}
                    className="bg-[#A10D3A] hover:bg-[#850a2f] text-white p-5 rounded-2xl text-center cursor-pointer shadow-sm transition-all hover:scale-[1.02]"
                  >
                    <span className="text-[12px] font-black uppercase tracking-widest text-white/90 block mb-1">
                      {structureNodes.gepr.flag} {lang === 'es' ? 'Salud Pública' : 'Public Health'}
                    </span>
                    <h5 className="text-[18px] font-black">
                      {structureNodes.gepr.title}
                    </h5>
                    <p className="text-[13.5px] text-white/90 mt-1">
                      {structureNodes.gepr.subtitle}
                    </p>
                  </div>
                </div>

                <div className="w-1 h-8 bg-[#087E8B]/40"></div>

                {/* Nivel 3: Centros Core */}
                <div 
                  onClick={() => setSelectedNode(structureNodes.core)}
                  className="w-full max-w-[680px] bg-[#003B49] hover:bg-[#002b36] text-white p-6 rounded-2xl text-center cursor-pointer shadow-md transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-xl">🇵🇪</span>
                    <span className="text-[12px] font-black uppercase tracking-widest text-[#E5A400]">
                      {structureNodes.core.title}
                    </span>
                    <span className="text-xl">🇬🇧</span>
                  </div>
                  <h4 className="text-[20px] font-black">
                    Instituto de Medicina Tropical Alexander von Humboldt (UPCH)
                  </h4>
                  <p className="text-[15px] text-[#E5A400] mt-0.5 font-bold">
                    & Imperial College London
                  </p>
                </div>

                <div className="w-1 h-8 bg-[#087E8B]/40"></div>

                {/* Nivel 4: Nodos Afiliados */}
                <div className="w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      structureNodes.pasteur,
                      structureNodes.fiocruz,
                      structureNodes.isciii,
                      structureNodes.stmarianna
                    ].map((node, i) => (
                      <div 
                        key={i}
                        onClick={() => setSelectedNode(node)}
                        className="bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-[#087E8B] p-5 rounded-2xl text-center cursor-pointer transition-all hover:scale-105"
                      >
                        <div className="text-2xl mb-1">{node.flag}</div>
                        <span className="text-[11.5px] font-bold text-gray-500 uppercase block">{node.subtitle}</span>
                        <h5 className="font-black text-[16px] text-[#003B49] mt-1">{node.title}</h5>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* MODAL MODERNO */}
            {selectedNode && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
                <div className="bg-[#003B49] text-white w-full max-w-lg rounded-3xl p-8 border-2 border-[#E5A400] shadow-2xl relative space-y-6">
                  <div className="text-center space-y-1">
                    <span className="text-3xl block mb-1">{selectedNode.flag}</span>
                    <h3 className="text-[24px] font-black text-white">
                      {selectedNode.title}
                    </h3>
                    <p className="text-[14px] text-[#E5A400] font-semibold">
                      {selectedNode.subtitle}
                    </p>
                  </div>

                  <div className="p-4 bg-white/10 rounded-2xl text-[15px] text-white/90 leading-relaxed text-center">
                    {selectedNode.description}
                  </div>

                  {selectedNode.members && (
                    <div className="space-y-1 text-center text-[14px] text-white/80">
                      {selectedNode.members.map((m, i) => (
                        <p key={i}>• {m}</p>
                      ))}
                    </div>
                  )}

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleModalAction(selectedNode)}
                      className="flex-1 bg-[#E5A400] hover:bg-[#cca300] text-[#003B49] py-3 px-6 rounded-xl text-[15px] font-black transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span>{selectedNode.linkText || 'Ver más'}</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                    <button
                      onClick={() => setSelectedNode(null)}
                      className="sm:w-32 bg-white/20 hover:bg-white/30 text-white py-3 px-6 rounded-xl text-[15px] font-bold transition-all cursor-pointer"
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