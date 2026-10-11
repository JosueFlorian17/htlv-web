"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutPage() {
  const { lang, t } = useLanguage();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('estructura');
  const [selectedNode, setSelectedNode] = useState(null);

  // Datos para los nodos de la Estructura (Organigrama interactivo como QuEST LAC)
  const structureNodes = {
    directivo: {
      id: 'directivo',
      title: lang === 'es' ? 'Comité Directivo RIII-HTLV' : 'RIII-HTLV Steering Committee',
      subtitle: lang === 'es' ? 'Directores: Dr. Eduardo Gotuzzo & Prof. Graham P. Taylor' : 'Directors: Dr. Eduardo Gotuzzo & Prof. Graham P. Taylor',
      flag: '🌐',
      description: lang === 'es'
        ? 'Máximo órgano de gobierno de la red. Responsable de fijar la dirección estratégica, supervisar los ensayos clínicos multicéntricos y representar a la alianza ante organismos internacionales como la OPS y la OMS.'
        : 'The network’s supreme governing body. Responsible for setting strategic direction, supervising multicenter clinical trials, and representing the alliance before global health agencies.',
      members: [
        'Dr. Eduardo Gotuzzo (Presidente Honorario - IMTAvH / UPCH)',
        'Prof. Graham P. Taylor (Vicepresidente - Imperial College London)'
      ],
      linkText: lang === 'es' ? 'Ver integrantes del Comité' : 'View Committee Members',
      actionUrl: '#integrantes'
    },
    cat: {
      id: 'cat',
      title: lang === 'es' ? 'Comité Asesor Técnico (CAT)' : 'Technical Advisory Committee (TAC)',
      subtitle: lang === 'es' ? 'Coordinación: Dra. Elsa González & Dr. Yoshi Ishikawa' : 'Coordination: Dr. Elsa González & Dr. Yoshi Ishikawa',
      flag: '🔬',
      description: lang === 'es'
        ? 'Equipo técnico especializado en virología molecular, genómica y estandarización diagnóstica. Define los protocolos de carga proviral, control de calidad inter-laboratorios y criterios de laboratorio clínico.'
        : 'Specialized technical team in molecular virology, genomics, and diagnostic standardization. Sets proviral load protocols, inter-laboratory quality control, and clinical criteria.',
      members: [
        'Dra. Elsa González (Epidemiología Molecular - UPCH)',
        'Dr. Yoshi Ishikawa (Investigación Clínica & Biomarcadores)'
      ],
      linkText: lang === 'es' ? 'Ver Recursos Clínicos' : 'View Clinical Resources',
      actionUrl: '/profesionales'
    },
    gepr: {
      id: 'gepr',
      title: lang === 'es' ? 'Grupo Estratégico de Políticas y Comunidad' : 'Strategic Policy & Community Group',
      subtitle: lang === 'es' ? 'Salud Pública, Prevención y Pacientes' : 'Public Health, Prevention & Patients',
      flag: '🏛️',
      description: lang === 'es'
        ? 'Articula la evidencia científica con guías de salud pública, eliminación de la transmisión materno-infantil y apoyo directo a comunidades y personas con diagnóstico de HTLV.'
        : 'Bridges scientific evidence with public health guidelines, mother-to-child transmission prevention, and direct support to communities living with HTLV.',
      members: [
        'Comité de Perinatología y Lactancia Segura',
        'Coordinación de Orientación al Paciente'
      ],
      linkText: lang === 'es' ? 'Ir al Espacio de Pacientes' : 'Go to Patient Space',
      actionUrl: '/pacientes'
    },
    core: {
      id: 'core',
      title: lang === 'es' ? 'Centros Core de Coordinación' : 'Core Coordinating Centers',
      subtitle: 'IMTAvH - Universidad Peruana Cayetano Heredia (Perú) & Imperial College London (UK)',
      flag: '🇵🇪 🇬🇧',
      description: lang === 'es'
        ? 'Son los centros de investigación fundadores de la Red RIII-HTLV. Albergan la secretaría ejecutiva, las cohortes clínicas longitudinales históricas y los laboratorios de referencia en retrovirología humana.'
        : 'The founding research institutions of the RIII-HTLV Network. Hosting the executive coordination, historical clinical cohorts, and reference retrovirology laboratories.',
      members: [
        'Instituto de Medicina Tropical Alexander von Humboldt (UPCH - Lima, Perú)',
        'Section of Virology & National Centre for Human Retrovirology (Imperial College London - UK)'
      ],
      linkText: lang === 'es' ? 'Ver Proyectos de la Red' : 'View Network Projects',
      actionUrl: '/proyectos'
    },
    pasteur: {
      id: 'pasteur',
      title: 'Institut Pasteur',
      subtitle: lang === 'es' ? 'Centro Afiliado - Francia' : 'Affiliated Center - France',
      flag: '🇫🇷',
      description: lang === 'es'
        ? 'Nodo líder en patogénesis viral, transformación oncológica de células T e investigación de mecanismos leucemogénicos del HTLV-1 (ATL).'
        : 'Leading node in viral pathogenesis, T-cell oncogenesis, and leukemogenic mechanisms of HTLV-1 (ATL).',
      members: ['Unité d’Epidémiologie et Physiopathologie des Virus Oncogènes'],
      linkText: lang === 'es' ? 'Visitar Sitio Web Oficial' : 'Visit Official Website',
      externalUrl: 'https://www.pasteur.fr'
    },
    fiocruz: {
      id: 'fiocruz',
      title: 'Fundação Oswaldo Cruz (Fiocruz)',
      subtitle: lang === 'es' ? 'Centro Afiliado - Brasil' : 'Affiliated Center - Brazil',
      flag: '🇧🇷',
      description: lang === 'es'
        ? 'Nodo de vigilancia epidemiológica comunitaria, estudios en bancos de sangre y coinfecciones en poblaciones del noreste brasileño y la cuenca amazónica.'
        : 'Epidemiological surveillance node focusing on blood bank donors, community cohorts, and coinfections in Brazil and South America.',
      members: ['Instituto Gonçalo Moniz & FIOCRUZ Bahia'],
      linkText: lang === 'es' ? 'Visitar Sitio Web Oficial' : 'Visit Official Website',
      externalUrl: 'https://portal.fiocruz.br'
    },
    isciii: {
      id: 'isciii',
      title: 'Instituto de Salud Carlos III (ISCIII)',
      subtitle: lang === 'es' ? 'Centro Afiliado - España' : 'Affiliated Center - Spain',
      flag: '🇪🇸',
      description: lang === 'es'
        ? 'Centro Nacional de Microbiología en Madrid. Coordinador del Registro Español de HTLV y nodo de enlace transatlántico en epidemiología viral.'
        : 'National Microbiology Center in Madrid. Coordinates the national registry and Atlantic epidemiology network.',
      members: ['Centro Nacional de Microbiología - Madrid'],
      linkText: lang === 'es' ? 'Visitar Sitio Web Oficial' : 'Visit Official Website',
      externalUrl: 'https://www.isciii.es'
    },
    stmarianna: {
      id: 'stmarianna',
      title: 'St. Marianna University School of Medicine',
      subtitle: lang === 'es' ? 'Centro Afiliado - Japón' : 'Affiliated Center - Japan',
      flag: '🇯🇵',
      description: lang === 'es'
        ? 'Centro internacional de excelencia en ensayos clínicos terapéuticos para Paraparesia Espástica Tropical (HAM/TSP) y biomarcadores en líquido cefalorraquídeo.'
        : 'International center of excellence in HAM/TSP therapeutic trials, monoclonal antibodies, and CSF biomarkers.',
      members: ['Department of Rare Diseases & Neurovirology - Kawasaki'],
      linkText: lang === 'es' ? 'Visitar Sitio Web Oficial' : 'Visit Official Website',
      externalUrl: 'https://www.marianna-u.ac.jp'
    }
  };

  // Datos para Integrantes / Nosotros (Organizado visualmente como en la imagen 4)
  const teamNodes = [
    {
      institution: 'Universidad Peruana Cayetano Heredia (IMTAvH - UPCH)',
      nodeName: 'Nodo Coordinador - Perú 🇵🇪',
      members: [
        {
          name: 'Dr. Eduardo Gotuzzo',
          role: lang === 'es' ? 'Presidente Honorario RIII-HTLV' : 'Honorary President',
          title: lang === 'es' ? 'Profesor Emérito UPCH • Infectólogo Clínico' : 'Emeritus Professor UPCH • Clinical Infectious Diseases',
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
          title: lang === 'es' ? 'Especialista en Diagnóstico & FAQs' : 'Diagnostics Specialist & FAQs',
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
          title: lang === 'es' ? 'Líder National Centre for Human Retrovirology' : 'Head of National Centre for Human Retrovirology',
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
    } else if (node.actionUrl === '#integrantes') {
      setSelectedNode(null);
      setActiveTab('integrantes');
    } else if (node.actionUrl) {
      setSelectedNode(null);
      router.push(node.actionUrl);
    }
  };

  return (
    <main className="w-full bg-[#f8f9fb] min-h-screen py-10 md:py-14">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Cabecera Principal */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-10">
          <h1 className="text-[34px] sm:text-[44px] font-black text-[#191c1e] tracking-tight leading-tight">
            {t('about_title')}
          </h1>
          <p className="text-[18px] text-[#443333] max-w-3xl mx-auto leading-relaxed">
            {t('about_subtitle')}
          </p>

          {/* Selector de Pestañas Principales (Letras Grandes y Claras) */}
          <div className="pt-4 flex flex-wrap justify-center gap-3">
            {[
              { id: 'estructura', label: t('about_tab_structure'), icon: 'account_tree' },
              { id: 'integrantes', label: t('about_tab_members'), icon: 'groups' },
              { id: 'mision', label: t('about_tab_objectives'), icon: 'flag' },
              { id: 'documentos', label: t('about_tab_docs'), icon: 'description' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-xl text-[16px] font-bold flex items-center gap-2.5 transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#5b0617] text-white shadow-sm'
                    : 'bg-white border border-[#dcc0c0] text-[#443333] hover:bg-[#ffdada]/40 hover:text-[#5b0617]'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 1. PESTAÑA: ESTRUCTURA (Mapa Visual Clickable Estilo QuEST LAC, Imágenes 2 y 3) */}
        {activeTab === 'estructura' && (
          <div className="space-y-6 animate-fadeIn max-w-5xl mx-auto">
            
            {/* Banner de Instrucción (Igual a la imagen 2 de QuEST LAC) */}
            <div className="bg-white p-5 rounded-2xl border border-[#dcc0c0] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#5b0617] text-3xl">touch_app</span>
                <div>
                  <h2 className="text-[20px] font-black text-[#191c1e]">
                    {lang === 'es' ? 'Organigrama de la Red RIII-HTLV' : 'RIII-HTLV Organizational Structure'}
                  </h2>
                  <p className="text-[14.5px] text-[#564242]">
                    {t('structure_hint')}
                  </p>
                </div>
              </div>
              <span className="text-[12px] font-extrabold uppercase tracking-wider px-3 py-1 bg-[#ffdada] text-[#5b0617] rounded-lg">
                {lang === 'es' ? 'Interactivo' : 'Interactive'}
              </span>
            </div>

            {/* Diagrama de Árbol / Organigrama Visual */}
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-[#dcc0c0] shadow-sm relative overflow-hidden">
              <div className="flex flex-col items-center space-y-8 relative">
                
                {/* Nivel 1: Comité Directivo (Caja Superior Central) */}
                <div 
                  onClick={() => setSelectedNode(structureNodes.directivo)}
                  className="w-full max-w-[580px] bg-[#1d2b3a] hover:bg-[#25374a] text-white p-6 rounded-2xl text-center cursor-pointer shadow-md transition-all hover:scale-[1.02] border-2 border-transparent hover:border-[#ffdada]"
                >
                  <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#ffdada] block mb-1">
                    {lang === 'es' ? 'Gobernanza General' : 'General Governance'}
                  </span>
                  <h3 className="text-[22px] font-black">
                    {structureNodes.directivo.title}
                  </h3>
                  <p className="text-[15px] text-white/90 mt-1 font-semibold">
                    {structureNodes.directivo.subtitle}
                  </p>
                  <span className="mt-2 inline-block text-[12px] text-[#ffdada] underline font-bold">
                    {lang === 'es' ? 'Click para ver detalles' : 'Click to see details'} →
                  </span>
                </div>

                {/* Línea vertical conectora */}
                <div className="w-1 h-8 bg-[#5b0617]/40"></div>

                {/* Nivel 2: Comités Asesores Laterales (CAT y GEPR) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[780px]">
                  
                  {/* CAT */}
                  <div 
                    onClick={() => setSelectedNode(structureNodes.cat)}
                    className="bg-[#d97706] hover:bg-[#b45309] text-white p-5 rounded-2xl text-center cursor-pointer shadow-sm transition-all hover:scale-[1.02]"
                  >
                    <span className="text-[12px] font-extrabold uppercase tracking-widest text-white/90 block mb-1">
                      {structureNodes.cat.flag} {lang === 'es' ? 'Asesoría Molecular' : 'Molecular Advisory'}
                    </span>
                    <h3 className="text-[18px] font-black leading-snug">
                      {structureNodes.cat.title}
                    </h3>
                    <p className="text-[13.5px] text-white/90 mt-1">
                      {structureNodes.cat.subtitle}
                    </p>
                  </div>

                  {/* GEPR */}
                  <div 
                    onClick={() => setSelectedNode(structureNodes.gepr)}
                    className="bg-[#c2410c] hover:bg-[#9a3412] text-white p-5 rounded-2xl text-center cursor-pointer shadow-sm transition-all hover:scale-[1.02]"
                  >
                    <span className="text-[12px] font-extrabold uppercase tracking-widest text-white/90 block mb-1">
                      {structureNodes.gepr.flag} {lang === 'es' ? 'Salud Pública' : 'Public Health'}
                    </span>
                    <h3 className="text-[18px] font-black leading-snug">
                      {structureNodes.gepr.title}
                    </h3>
                    <p className="text-[13.5px] text-white/90 mt-1">
                      {structureNodes.gepr.subtitle}
                    </p>
                  </div>

                </div>

                {/* Línea vertical conectora */}
                <div className="w-1 h-8 bg-[#5b0617]/40"></div>

                {/* Nivel 3: Centros Core (IMTAvH UPCH & Imperial College) */}
                <div 
                  onClick={() => setSelectedNode(structureNodes.core)}
                  className="w-full max-w-[680px] bg-[#5b0617] hover:bg-[#70091e] text-white p-6 rounded-2xl text-center cursor-pointer shadow-md transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-xl">🇵🇪</span>
                    <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#ffdada]">
                      {structureNodes.core.title}
                    </span>
                    <span className="text-xl">🇬🇧</span>
                  </div>
                  <h3 className="text-[20px] font-black leading-snug">
                    Instituto de Medicina Tropical Alexander von Humboldt (UPCH)
                  </h3>
                  <p className="text-[15px] text-[#ffdada] mt-0.5 font-bold">
                    & Imperial College London
                  </p>
                </div>

                {/* Línea vertical conectora */}
                <div className="w-1 h-8 bg-[#5b0617]/40"></div>

                {/* Nivel 4: Centros Afiliados / Nodos Regionales (Grid con banderas) */}
                <div className="w-full">
                  <div className="text-center mb-4">
                    <span className="text-[13px] font-extrabold uppercase tracking-widest text-[#897172]">
                      {lang === 'es' ? 'Centros Afiliados y Nodos Internacionales' : 'Affiliated Centers & International Nodes'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    
                    {/* Pasteur */}
                    <div 
                      onClick={() => setSelectedNode(structureNodes.pasteur)}
                      className="bg-[#f1f3f5] hover:bg-[#e7e8ea] border-2 border-[#dcc0c0] hover:border-[#5b0617] p-5 rounded-2xl text-center cursor-pointer transition-all hover:scale-105"
                    >
                      <div className="text-2xl mb-1">{structureNodes.pasteur.flag}</div>
                      <span className="text-[11.5px] font-bold text-[#897172] block uppercase">Centro Afiliado</span>
                      <h4 className="font-extrabold text-[16px] text-[#191c1e] mt-1">{structureNodes.pasteur.title}</h4>
                      <p className="text-[13px] text-[#564242] mt-0.5">Francia</p>
                    </div>

                    {/* Fiocruz */}
                    <div 
                      onClick={() => setSelectedNode(structureNodes.fiocruz)}
                      className="bg-[#f1f3f5] hover:bg-[#e7e8ea] border-2 border-[#dcc0c0] hover:border-[#5b0617] p-5 rounded-2xl text-center cursor-pointer transition-all hover:scale-105"
                    >
                      <div className="text-2xl mb-1">{structureNodes.fiocruz.flag}</div>
                      <span className="text-[11.5px] font-bold text-[#897172] block uppercase">Centro Afiliado</span>
                      <h4 className="font-extrabold text-[16px] text-[#191c1e] mt-1">Fundação Oswaldo Cruz</h4>
                      <p className="text-[13px] text-[#564242] mt-0.5">Brasil</p>
                    </div>

                    {/* ISCIII */}
                    <div 
                      onClick={() => setSelectedNode(structureNodes.isciii)}
                      className="bg-[#f1f3f5] hover:bg-[#e7e8ea] border-2 border-[#dcc0c0] hover:border-[#5b0617] p-5 rounded-2xl text-center cursor-pointer transition-all hover:scale-105"
                    >
                      <div className="text-2xl mb-1">{structureNodes.isciii.flag}</div>
                      <span className="text-[11.5px] font-bold text-[#897172] block uppercase">Centro Afiliado</span>
                      <h4 className="font-extrabold text-[16px] text-[#191c1e] mt-1">Instituto de Salud Carlos III</h4>
                      <p className="text-[13px] text-[#564242] mt-0.5">España</p>
                    </div>

                    {/* St. Marianna */}
                    <div 
                      onClick={() => setSelectedNode(structureNodes.stmarianna)}
                      className="bg-[#f1f3f5] hover:bg-[#e7e8ea] border-2 border-[#dcc0c0] hover:border-[#5b0617] p-5 rounded-2xl text-center cursor-pointer transition-all hover:scale-105"
                    >
                      <div className="text-2xl mb-1">{structureNodes.stmarianna.flag}</div>
                      <span className="text-[11.5px] font-bold text-[#897172] block uppercase">Centro Afiliado</span>
                      <h4 className="font-extrabold text-[16px] text-[#191c1e] mt-1">St. Marianna University</h4>
                      <p className="text-[13px] text-[#564242] mt-0.5">Japón</p>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* MODAL MODERNO INTERACTIVO (Reemplaza la pantalla negra de la imagen 3 con look moderno y estilizado) */}
            {selectedNode && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
                <div className="bg-[#191c1e] text-white w-full max-w-lg rounded-3xl p-8 border-2 border-[#5b0617] shadow-2xl relative space-y-6">
                  
                  {/* Cabecera del Modal */}
                  <div className="text-center space-y-1">
                    <span className="text-3xl block mb-1">{selectedNode.flag}</span>
                    <h3 className="text-[24px] font-black text-white">
                      {selectedNode.title}
                    </h3>
                    <p className="text-[14px] text-[#ffdada] font-semibold">
                      {selectedNode.subtitle}
                    </p>
                  </div>

                  {/* Descripción Detallada */}
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-[15px] text-white/90 leading-relaxed text-center">
                    {selectedNode.description}
                  </div>

                  {/* Miembros / Entidades Clave */}
                  {selectedNode.members && (
                    <div className="space-y-2">
                      <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#ffdada] block text-center">
                        {lang === 'es' ? 'Integrantes / Unidades Clave' : 'Key Members / Units'}
                      </span>
                      <div className="space-y-1 text-center">
                        {selectedNode.members.map((m, i) => (
                          <p key={i} className="text-[14px] font-medium text-white/80">
                            • {m}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Botones de Acción (Ver Más & Cerrar, como en QuEST LAC) */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleModalAction(selectedNode)}
                      className="flex-1 bg-[#d97706] hover:bg-[#b45309] text-white py-3 px-6 rounded-xl text-[15px] font-black transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span>{selectedNode.linkText || t('btn_view_more')}</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                    
                    <button
                      onClick={() => setSelectedNode(null)}
                      className="sm:w-32 bg-white/20 hover:bg-white/30 text-white py-3 px-6 rounded-xl text-[15px] font-bold transition-all cursor-pointer"
                    >
                      {t('btn_close')}
                    </button>
                  </div>

                </div>
              </div>
            )}

          </div>
        )}

        {/* 2. PESTAÑA: NOSOTROS / INTEGRANTES (Fiel a la Imagen 4 de QuEST LAC: Galería de Personas por Nodo) */}
        {activeTab === 'integrantes' && (
          <div className="space-y-10 animate-fadeIn max-w-6xl mx-auto">
            
            {/* Banner de Introducción */}
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[12.5px] font-extrabold uppercase tracking-widest text-[#5b0617] block mb-1">
                {lang === 'es' ? 'Comunidad Científica' : 'Scientific Community'}
              </span>
              <h2 className="text-[28px] md:text-[34px] font-black text-[#191c1e]">
                {lang === 'es' ? 'Investigadores y Directivos de la Red' : 'Network Investigators and Directors'}
              </h2>
              <p className="text-[16px] text-[#564242] mt-1">
                {lang === 'es' 
                  ? 'Profesionales de amplia trayectoria dedicados al estudio y erradicación del HTLV.' 
                  : 'Experienced professionals dedicated to the research and eradication of HTLV.'}
              </p>
            </div>

            {/* Secciones por Institución / Nodo (Igual a las dos columnas de la imagen 4) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {teamNodes.map((node, nodeIdx) => (
                <div 
                  key={nodeIdx}
                  className="bg-white p-8 rounded-3xl border border-[#dcc0c0] shadow-xs space-y-6 flex flex-col justify-between"
                >
                  {/* Encabezado del Nodo */}
                  <div className="border-b border-[#dcc0c0] pb-4 flex items-center justify-between">
                    <div>
                      <span className="text-[12px] font-black uppercase tracking-wider text-[#5b0617] block">
                        {node.nodeName}
                      </span>
                      <h3 className="text-[20px] font-black text-[#191c1e] mt-0.5">
                        {node.institution}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[#ffdada] text-[#5b0617] flex items-center justify-center font-bold text-xl flex-shrink-0">
                      R
                    </div>
                  </div>

                  {/* Lista de Miembros con Tarjetas Estilizadas (Estilo Hexágono / Retrato Imagen 4) */}
                  <div className="space-y-4">
                    {node.members.map((member, mIdx) => (
                      <div 
                        key={mIdx}
                        className="p-4 rounded-2xl bg-[#f8f9fb] border border-[#dcc0c0] hover:border-[#5b0617] transition-all flex items-center gap-4 group"
                      >
                        {/* Avatar / Foto estilizada */}
                        <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#5b0617] flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform bg-[#ffdada]">
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Datos de la persona (Letras grandes y legibles) */}
                        <div className="space-y-0.5">
                          <h4 className="text-[17px] font-black text-[#191c1e] group-hover:text-[#5b0617] transition-colors">
                            {member.name}
                          </h4>
                          <span className="inline-block text-[13px] font-bold text-[#5b0617] bg-[#ffdada]/60 px-2 py-0.5 rounded-md">
                            {member.role}
                          </span>
                          <p className="text-[13px] text-[#564242]">
                            {member.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pie de tarjeta */}
                  <div className="pt-3 border-t border-[#dcc0c0]/50 text-center">
                    <span className="text-[13px] font-semibold text-[#897172]">
                      {lang === 'es' ? 'Afiliación verificada por el consorcio' : 'Verified affiliation with the consortium'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* 3. PESTAÑA: MISIÓN & OBJETIVOS */}
        {activeTab === 'mision' && (
          <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#dcc0c0] shadow-xs space-y-6">
              <div>
                <h2 className="text-[26px] font-black text-[#5b0617] mb-3">
                  {lang === 'es' ? 'Misión & Visión de la Red RIII-HTLV' : 'RIII-HTLV Mission & Vision'}
                </h2>
                <p className="text-[17px] text-[#443333] leading-relaxed">
                  {lang === 'es'
                    ? 'La Red Internacional de Investigación e Innovación en HTLV (RIII-HTLV) articula centros de investigación clínica, biológica y epidemiológica en América Latina, Europa y Asia para cerrar la brecha del conocimiento y el tratamiento de las enfermedades causadas por el HTLV.'
                    : 'The International Research and Innovation Network on HTLV (RIII-HTLV) connects clinical, biological, and epidemiological centers across Latin America, Europe, and Asia to close the knowledge and treatment gap in HTLV-associated diseases.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-[#f8f9fb] border border-[#dcc0c0] space-y-2">
                  <span className="text-[13px] font-black uppercase text-[#5b0617] block">
                    {lang === 'es' ? 'Misión' : 'Mission'}
                  </span>
                  <p className="text-[15px] text-[#443333] leading-relaxed">
                    {lang === 'es'
                      ? 'Generar evidencia científica rigurosa, promover políticas de salud pública preventivas y facilitar el acceso a diagnósticos y terapias oportunas.'
                      : 'Generate rigorous scientific evidence, promote preventive public health policies, and facilitate access to timely diagnosis and therapy.'}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#f8f9fb] border border-[#dcc0c0] space-y-2">
                  <span className="text-[13px] font-black uppercase text-[#1d2b3a] block">
                    {lang === 'es' ? 'Visión' : 'Vision'}
                  </span>
                  <p className="text-[15px] text-[#443333] leading-relaxed">
                    {lang === 'es'
                      ? 'Consolidarse como la plataforma global líder en retrovirología humana para la erradicación progresiva de las patologías asociadas al HTLV.'
                      : 'Consolidate as the leading global human retrovirology platform for the progressive elimination of HTLV-associated pathologies.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. PESTAÑA: DOCUMENTOS (Reglamento & Convenio) */}
        {activeTab === 'documentos' && (
          <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#dcc0c0] shadow-xs space-y-6">
              <div>
                <h2 className="text-[26px] font-black text-[#5b0617] mb-2">
                  {lang === 'es' ? 'Documentos Institucionales' : 'Institutional Documents'}
                </h2>
                <p className="text-[16px] text-[#443333]">
                  {lang === 'es'
                    ? 'Normativa oficial que rige la gobernanza, derechos y deberes de los miembros de la red.'
                    : 'Official bylaws governing the rights, duties, and consensus of network members.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-[#f8f9fb] border border-[#dcc0c0] rounded-2xl space-y-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[12px] font-extrabold uppercase tracking-wider text-[#897172] block">
                      {lang === 'es' ? 'Gobernanza' : 'Governance'}
                    </span>
                    <h3 className="text-[19px] font-black text-[#191c1e] mt-1">
                      {lang === 'es' ? 'Reglamento Interno de la Red' : 'Network Internal Bylaws'}
                    </h3>
                    <p className="text-[14.5px] text-[#564242] mt-2 leading-relaxed">
                      {lang === 'es'
                        ? 'Establece las funciones del comité directivo, criterios de incorporación de nuevos centros y pautas éticas en publicaciones conjuntas.'
                        : 'Establishes steering committee duties, criteria for affiliated nodes, and publication ethical standards.'}
                    </p>
                  </div>
                  <button 
                    onClick={() => alert(lang === 'es' ? 'Reglamento disponible para los centros miembros a través de la secretaría en IMTAvH.' : 'Bylaws available to member centers through IMTAvH secretariat.')}
                    className="w-full bg-[#5b0617] text-white py-3 px-4 rounded-xl text-[14px] font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span>{lang === 'es' ? 'Consultar Reglamento' : 'Download Bylaws'}</span>
                  </button>
                </div>

                <div className="p-6 bg-[#f8f9fb] border border-[#dcc0c0] rounded-2xl space-y-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[12px] font-extrabold uppercase tracking-wider text-[#897172] block">
                      {lang === 'es' ? 'Marco Legal' : 'Legal Framework'}
                    </span>
                    <h3 className="text-[19px] font-black text-[#191c1e] mt-1">
                      {lang === 'es' ? 'Convenio Marco de Colaboración' : 'Framework Collaboration Agreement'}
                    </h3>
                    <p className="text-[14.5px] text-[#564242] mt-2 leading-relaxed">
                      {lang === 'es'
                        ? 'Acuerdo interinstitucional para el intercambio académico, transferencia de metodologías de diagnóstico y proyectos multicéntricos.'
                        : 'Inter-institutional agreement for academic exchange, diagnostic methods transfer, and multicenter projects.'}
                    </p>
                  </div>
                  <button 
                    onClick={() => alert(lang === 'es' ? 'Convenio marco disponible mediante coordinación institucional.' : 'Agreement available through institutional coordination.')}
                    className="w-full bg-[#1d2b3a] text-white py-3 px-4 rounded-xl text-[14px] font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span>{lang === 'es' ? 'Consultar Convenio' : 'Download Agreement'}</span>
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