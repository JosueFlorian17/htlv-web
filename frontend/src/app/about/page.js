"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('quienes-somos');

  const leaders = [
    {
      name: 'Dr. Eduardo Gotuzzo',
      role: 'Presidente Honorario',
      institution: 'Instituto de Medicina Tropical Alexander von Humboldt (IMTAvH) - UPCH (Perú)',
      bio: 'Profesor emérito e investigador pionero en enfermedades infecciosas y tropicales en América Latina. Ha liderado durante más de tres décadas las cohortes clínicas y estudios de transmisión de HTLV-1 en el Perú.',
      specialty: 'Infectología & Medicina Tropical'
    },
    {
      name: 'Prof. Graham P. Taylor',
      role: 'Vicepresidente',
      institution: 'Section of Virology, Imperial College London (Reino Unido)',
      bio: 'Director del Centro Nacional de Retrovirología Humana de Reino Unido en el St Mary\'s Hospital. Referente global en la fisiopatología, diagnóstico y ensayos terapéuticos en HAM/TSP y ATL.',
      specialty: 'Retrovirología Clínica'
    },
    {
      name: 'Dra. Elsa González',
      role: 'Coordinadora Científica',
      institution: 'Instituto de Medicina Tropical Alexander von Humboldt (IMTAvH) - UPCH (Perú)',
      bio: 'Investigadora principal enfocada en la epidemiología molecular del HTLV-1, coinfecciones con tuberculosis y estrongiloidiasis, y protocolos de prevención de la transmisión vertical.',
      specialty: 'Epidemiología & Virología Molecular'
    }
  ];

  const allies = [
    {
      name: 'Universidad Peruana Cayetano Heredia (UPCH)',
      country: 'Perú',
      role: 'Coordinación General y Sede Académica',
      url: 'https://www.cayetano.edu.pe'
    },
    {
      name: 'Instituto de Medicina Tropical Alexander von Humboldt (IMTAvH)',
      country: 'Perú',
      role: 'Sede Clínica e Investigación de Campo',
      url: 'https://medicina.cayetano.edu.pe/imtavh/'
    },
    {
      name: 'Imperial College London',
      country: 'Reino Unido',
      role: 'Biología Celular e Inmunología Viral',
      url: 'https://www.imperial.ac.uk'
    },
    {
      name: 'Institut Pasteur',
      country: 'Francia',
      role: 'Patogénesis Viral y Oncogénesis',
      url: 'https://www.pasteur.fr'
    },
    {
      name: 'Fundação Oswaldo Cruz (Fiocruz)',
      country: 'Brasil',
      role: 'Vigilancia Epidemiológica en Donantes y Comunidades',
      url: 'https://portal.fiocruz.br'
    },
    {
      name: 'Instituto de Salud Carlos III (ISCIII)',
      country: 'España',
      role: 'Registro y Epidemiología Transfronteriza',
      url: 'https://www.isciii.es'
    },
    {
      name: 'St. Marianna University School of Medicine',
      country: 'Japón',
      role: 'Ensayos Terapéuticos y Biomarcadores en HAM/TSP',
      url: 'https://www.marianna-u.ac.jp'
    }
  ];

  return (
    <main className="w-full bg-[#f8f9fb] min-h-screen py-10 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        
        {/* Cabecera Principal */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <span className="px-3 py-1 bg-[#ffdada] text-[#5b0617] text-[12px] font-black uppercase tracking-widest rounded-full inline-block">
            Institucional
          </span>
          <h1 className="text-[34px] sm:text-[44px] font-black text-[#191c1e] tracking-tight leading-tight">
            Acerca de la Red RIII-HTLV
          </h1>
          <p className="text-[17px] text-[#564242] leading-relaxed max-w-3xl mx-auto">
            Conozca nuestra historia, principios fundacionales, estructura de gobernanza y documentos que rigen nuestra labor científica internacional.
          </p>

          {/* Selector de Pestañas Rápidas */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {[
              { id: 'quienes-somos', label: 'Quiénes Somos & Objetivos', icon: 'info' },
              { id: 'estructura', label: 'Estructura & Miembros', icon: 'groups' },
              { id: 'aliados', label: 'Aliados Estratégicos', icon: 'handshake' },
              { id: 'documentos', label: 'Reglamento & Convenio', icon: 'description' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-[14px] font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#5b0617] text-white shadow-sm'
                    : 'bg-white border border-[#dcc0c0] text-[#564242] hover:bg-[#ffdada]/30 hover:text-[#5b0617]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Contenido Dinámico por Pestaña */}
        <div className="max-w-4xl mx-auto">
          
          {/* 1. Quiénes Somos y Objetivos */}
          {activeTab === 'quienes-somos' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#dcc0c0] shadow-xs space-y-6">
                <div>
                  <h2 className="text-[24px] font-black text-[#5b0617] mb-3">
                    Quiénes Somos
                  </h2>
                  <p className="text-[15.5px] text-[#564242] leading-relaxed">
                    La <strong>Red Internacional de Investigación e Innovación en HTLV (RIII-HTLV)</strong> es un consorcio académico y científico que reúne a investigadores clínicos, biomédicos y epidemiólogos de instituciones de prestigio en América Latina, Europa y Asia.
                  </p>
                  <p className="text-[15.5px] text-[#564242] leading-relaxed mt-3">
                    Bajo la coordinación del <strong>Instituto de Medicina Tropical Alexander von Humboldt (IMTAvH) de la Universidad Peruana Cayetano Heredia (UPCH)</strong>, la red articula esfuerzos de centros ubicados en regiones endémicas con laboratorios de alta complejidad biológica para cerrar la brecha en el estudio de los Retrovirus Humanos T-Linfotrópicos (HTLV-1 y HTLV-2).
                  </p>
                </div>

                <div className="border-t border-[#dcc0c0] pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#f8f9fb] p-6 rounded-xl border border-[#dcc0c0]">
                    <div className="w-10 h-10 rounded-lg bg-[#ffdada] text-[#5b0617] flex items-center justify-center font-bold mb-3">
                      <span className="material-symbols-outlined">flag</span>
                    </div>
                    <h3 className="text-[18px] font-bold text-[#191c1e] mb-2">Misión</h3>
                    <p className="text-[14px] text-[#564242] leading-relaxed">
                      Generar conocimiento científico riguroso, promover políticas preventivas de salud pública y facilitar la transferencia de tecnologías diagnósticas y terapéuticas para reducir el impacto del HTLV en las personas afectadas.
                    </p>
                  </div>

                  <div className="bg-[#f8f9fb] p-6 rounded-xl border border-[#dcc0c0]">
                    <div className="w-10 h-10 rounded-lg bg-[#d6e0f3] text-[#1d2b3a] flex items-center justify-center font-bold mb-3">
                      <span className="material-symbols-outlined">visibility</span>
                    </div>
                    <h3 className="text-[18px] font-bold text-[#191c1e] mb-2">Visión</h3>
                    <p className="text-[14px] text-[#564242] leading-relaxed">
                      Consolidarse como la plataforma internacional de referencia en la investigación de retrovirología humana, integrando a centros de salud, universidades y organismos sanitarios globales en favor de la erradicación de las enfermedades por HTLV.
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#dcc0c0] pt-6 space-y-4">
                  <h3 className="text-[20px] font-bold text-[#191c1e]">
                    Objetivos Principales
                  </h3>
                  <ul className="space-y-3 text-[15px] text-[#564242]">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#5b0617] text-xl mt-0.5">check_circle</span>
                      <span><strong>Diagnóstico Oportuno:</strong> Estandarizar métodos serológicos y moleculares de confirmación accesibles en países de alta prevalencia.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#5b0617] text-xl mt-0.5">check_circle</span>
                      <span><strong>Investigación Clínica & Ensayos:</strong> Desarrollar estudios de cohortes longitudinales en Paraparesia Espástica Tropical (HAM/TSP) y Leucemia/Linfoma de Células T (ATL).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#5b0617] text-xl mt-0.5">check_circle</span>
                      <span><strong>Prevención de la Transmisión:</strong> Promover el tamizaje prenatal, la consejería de lactancia segura y el control estricto en bancos de sangre.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#5b0617] text-xl mt-0.5">check_circle</span>
                      <span><strong>Formación y Apoyo:</strong> Capacitar a profesionales de la salud y brindar un canal de orientación confiable para pacientes y sus familias.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* 2. Estructura y Biografías Integradas */}
          {activeTab === 'estructura' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-white p-8 rounded-2xl border border-[#dcc0c0] shadow-xs">
                <h2 className="text-[24px] font-black text-[#5b0617] mb-2">
                  Estructura de Gobernanza & Comité Científico
                </h2>
                <p className="text-[14.5px] text-[#564242] mb-6">
                  La Red cuenta con una estructura simplificada que reúne el liderazgo de investigadores clínicos de amplia trayectoria internacional.
                </p>

                <div className="space-y-6">
                  {leaders.map((leader, idx) => (
                    <div 
                      key={idx}
                      className="p-6 bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl flex flex-col md:flex-row gap-5 items-start"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-[#5b0617] text-white flex items-center justify-center font-bold text-2xl flex-shrink-0">
                        {leader.name.split(' ')[1]?.[0] || 'D'}
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-[18px] font-bold text-[#191c1e]">
                            {leader.name}
                          </h3>
                          <span className="px-3 py-0.5 bg-[#ffdada] text-[#5b0617] text-[12px] font-bold rounded-full">
                            {leader.role}
                          </span>
                        </div>
                        <p className="text-[13px] font-semibold text-[#897172]">
                          {leader.institution} • <span className="text-[#5b0617]">{leader.specialty}</span>
                        </p>
                        <p className="text-[14px] text-[#564242] leading-relaxed pt-1">
                          {leader.bio}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3. Aliados Estratégicos */}
          {activeTab === 'aliados' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-white p-8 rounded-2xl border border-[#dcc0c0] shadow-xs">
                <h2 className="text-[24px] font-black text-[#5b0617] mb-2">
                  Aliados Estratégicos e Instituciones Participantes
                </h2>
                <p className="text-[14.5px] text-[#564242] mb-6">
                  Centros de investigación, universidades y hospitales que conforman formalmente la alianza RIII-HTLV.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {allies.map((ally, idx) => (
                    <a
                      key={idx}
                      href={ally.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl hover:border-[#5b0617] hover:shadow-xs transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#897172]">
                            {ally.country}
                          </span>
                          <span className="material-symbols-outlined text-[16px] text-[#897172] group-hover:text-[#5b0617]">
                            open_in_new
                          </span>
                        </div>
                        <h3 className="text-[16px] font-bold text-[#191c1e] group-hover:text-[#5b0617] transition-colors">
                          {ally.name}
                        </h3>
                        <p className="text-[13px] text-[#564242] mt-1">
                          {ally.role}
                        </p>
                      </div>
                      <div className="pt-3 mt-2 border-t border-[#dcc0c0]/50 text-[12px] font-semibold text-[#5b0617]">
                        Ir al sitio institucional →
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 4. Documentos Institucionales: Reglamento y Convenio */}
          {activeTab === 'documentos' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-white p-8 rounded-2xl border border-[#dcc0c0] shadow-xs space-y-6">
                <div>
                  <h2 className="text-[24px] font-black text-[#5b0617] mb-2">
                    Documentos Institucionales
                  </h2>
                  <p className="text-[14.5px] text-[#564242]">
                    Instrumentos legales y normativos que rigen el funcionamiento, la gobernanza y los acuerdos de cooperación de la red.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Ficha: Reglamento Interno */}
                  <div className="p-6 bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl space-y-4 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#ffdada] text-[#5b0617] flex items-center justify-center font-bold mb-3">
                        <span className="material-symbols-outlined text-2xl">gavel</span>
                      </div>
                      <span className="text-[11px] font-bold text-[#897172] uppercase tracking-wider">
                        Normativa de Funcionamiento
                      </span>
                      <h3 className="text-[18px] font-bold text-[#191c1e] mt-1">
                        Reglamento Interno de la Red RIII-HTLV
                      </h3>
                      <p className="text-[13.5px] text-[#564242] mt-2 leading-relaxed">
                        Define los derechos y deberes de las instituciones miembros, los procedimientos para la incorporación de nuevos nodos, las pautas de autoría científica en publicaciones conjuntas y la toma de decisiones del comité.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#dcc0c0]">
                      <button 
                        onClick={() => alert('El documento oficial del Reglamento Interno está en proceso de firma y aprobación por los miembros del consorcio.')}
                        className="w-full bg-[#5b0617] text-white py-2.5 px-4 rounded-xl text-[13px] font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">download</span>
                        <span>Consultar Reglamento</span>
                      </button>
                    </div>
                  </div>

                  {/* Ficha: Convenio Marco */}
                  <div className="p-6 bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl space-y-4 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#d6e0f3] text-[#1d2b3a] flex items-center justify-center font-bold mb-3">
                        <span className="material-symbols-outlined text-2xl">history_edu</span>
                      </div>
                      <span className="text-[11px] font-bold text-[#897172] uppercase tracking-wider">
                        Acuerdo Interinstitucional
                      </span>
                      <h3 className="text-[18px] font-bold text-[#191c1e] mt-1">
                        Convenio Marco de Colaboración
                      </h3>
                      <p className="text-[13.5px] text-[#564242] mt-2 leading-relaxed">
                        Acuerdo interinstitucional suscrito para el intercambio académico, transferencia mutua de metodologías de diagnóstico, movilidad de investigadores y desarrollo de proyectos científicos multicéntricos.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#dcc0c0]">
                      <button 
                        onClick={() => alert('El documento marco del Convenio Interinstitucional se encuentra disponible a través de la secretaría de coordinación en IMTAvH.')}
                        className="w-full bg-[#1d2b3a] text-white py-2.5 px-4 rounded-xl text-[13px] font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">download</span>
                        <span>Consultar Convenio Marco</span>
                      </button>
                    </div>
                  </div>

                </div>

                <div className="p-4 bg-[#ffdada]/30 border border-[#dcc0c0] rounded-xl text-[13px] text-[#564242] flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#5b0617] text-xl mt-0.5">verified</span>
                  <p>
                    Para solicitar copias certificadas o requerir acreditación de membresía para la postulación a fondos concursables, comuníquese a través del <Link href="/contact" className="text-[#5b0617] font-bold underline">formulario institucional de contacto</Link>.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </main>
  );
}