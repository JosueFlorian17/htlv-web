"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function OpportunitiesPage() {
  const [activeTab, setActiveTab] = useState('all');

  const opportunities = [
    {
      id: 1,
      type: 'pasantias',
      typeName: 'Pasantía',
      title: 'Políticas de Salud Pública y Epidemiología',
      institution: 'Fiocruz Research Institute • Río de Janeiro',
      desc: 'Prácticas de verano centradas en programas de vigilancia epidemiológica para HTLV en América del Sur. Ideal para estudiantes de maestría.',
      deadline: 'Límite: 01 Nov 2024',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCc44HLGZvwY2LRLESBpWRczwHz791PuYHG7pBad6cHHiVR0ZmKDy-LLY61Hv-MRAYJBkaDLb9ZvqXzPHtPe-PrhqSHgg_82Lh6RcRqMrcPyw47vg_qBTX01h1_ycVRJeQZuTY8X-NtOCpn1DwWPNSo6SNH-yFnPp7DKmD0FAJGbOTVbQTlGqrrNTI8qKZ1q9l39g-qZgXZq3sSJFzQokfykarrLEReTbPjMdKEpheyYJgOeCPIO8sTz-k6yYuTsfCTNqlGmkeZGHM',
      tagClass: 'bg-secondary-container text-on-secondary-container'
    },
    {
      id: 2,
      type: 'cursos',
      typeName: 'Curso Avanzado',
      title: 'Inmunopatología de las Infecciones por HTLV',
      institution: 'Kumamoto University • Aula Virtual',
      desc: 'Un programa intensivo especializado de 4 semanas que cubre la inmunología celular y la patología de HAM/TSP y ATL.',
      deadline: 'Límite: 20 Sep 2024',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATvtuw2LeutLshetXr-JdNoQJLKbpua5wR-ItXIRp2PJP0aJ2nrEmLFUdEkhnmADosvjF__YtuaGPx_f9cK32q17Rj4zqtn73k2In6Q0ZBcBQjeR7fNqyGXwy2MnAMbVD9fJUGbl6jftThm1YDi66iJnK5QaR9CJsVsa1qrWVMwX--z3mYBsnlu2JVHt4s0gngtKfUxw5d48I7TU6-XpdmUk5cpncMgJ2YZzckje7rBYbK609fyjN6_IT9frQdQ-d7bS5_TdREsp0',
      tagClass: 'bg-surface-container-highest text-on-surface-variant'
    },
    {
      id: 3,
      type: 'becas',
      typeName: 'Premio de Investigación',
      title: 'Premio a la Excelencia para Jóvenes Investigadores',
      institution: 'The HTLV Society • Global',
      desc: 'Financiamiento completo para viajes y registro en el próximo Congreso Internacional sobre HTLV para científicos en las primeras etapas de su carrera.',
      deadline: 'Límite: 15 Nov 2024',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiZBDGr6xcUCxikip9zQRyXHyPBdzjH51J2fjdIyDnU8axFDdNdaLyGTPHo64KdTLxNf78ZBCH_ymzWrz3C7Ef9Nsek46b_E280UtSFZGSOFilr44TTEZKqlUxgkgBy3PqH2xdFTamPp72X9KsOthd1omUgf4vBXNcVTEQtWZqXX4K9c5rjhs2hxo-dZZZ4s48iFSG9gJCMf8DYP1aRQseoBTt8nHWx9yYLMSlPlNPSkajvldbattECBHE2pvCRMx2Qm_-OaiQhm4',
      tagClass: 'bg-tertiary-container text-on-tertiary-container'
    }
  ];

  const filteredOpportunities = activeTab === 'all' 
    ? opportunities 
    : opportunities.filter(o => o.type === activeTab);

  return (
    <>
      <main className="py-12 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
        {/* Hero / Header Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="font-display text-display text-primary mb-4">Convocatorias y Oportunidades</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">Explore financiamiento, becas, pasantías y cursos avanzados ofrecidos por los centros asociados a la red RIII-HTLV.</p>
            </div>
            <div className="flex flex-wrap gap-2 flex-shrink-0">
              <span className="bg-primary-fixed text-[#822530] px-3 py-1 rounded-full font-label-sm text-label-sm uppercase font-bold">Convocatorias Activas</span>
            </div>
          </div>
        </section>

        {/* Tab Controls */}
        <section className="mb-10 border-b border-[#dcc0c0] flex gap-6 overflow-x-auto pb-1">
          {[
            { id: 'all', label: 'Ver Todas' },
            { id: 'financiamiento', label: 'Financiamiento' },
            { id: 'pasantias', label: 'Pasantías' },
            { id: 'cursos', label: 'Cursos' },
            { id: 'becas', label: 'Becas' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-label-md font-bold transition-all border-b-2 cursor-pointer ${
                activeTab === tab.id 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-on-surface-variant hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </section>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Main call out (Convocatoria Destacada: Global Innovation Grant 2025) */}
          {activeTab === 'all' || activeTab === 'financiamiento' ? (
            <div className="bg-white border border-outline-variant rounded-xl overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300 md:col-span-2 shadow-sm">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/2 overflow-hidden h-64 md:h-auto relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Documentos de financiación científica" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1VcYLVq6TfkESe5WeGXdTfKdIzA2tg3tBMk14SPtlaIPSqqaFTQPKQBHEfiibZVOKPwCcrTjkZrgVvcL6JplblXU8ErxrPI1Vl_LwoXH0pNHTelRMSGEsVR4omOyWcxjwF_OsQmd60t4HciYIfuRHEz61-s03_wSK3UFB381vBzCfLLkprT06denSVJbwksD6UNgi5V4ZCR5_09xGVeh0g8bPtb6jqeG4rLxVRfEiSMb46qiswi1CAb6pW0OMu_CEBc3aS-Sj71E" />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 bg-primary-container text-white text-label-sm font-label-sm uppercase rounded font-bold">Fondo de Investigación</span>
                      <span className="text-primary font-bold font-label-sm text-label-sm">Límite: 30 Dic 2024</span>
                    </div>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 text-[#191c1e]">Beca de Innovación Global 2025</h3>
                    <p className="font-label-md text-label-md text-on-surface-variant mb-4">Red Internacional de HTLV (RIII-HTLV)</p>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Financiamiento de hasta $150,000 para proyectos de investigación intercontinentales destinados a mejorar el acceso al diagnóstico de HTLV-1 en entornos de bajos recursos. La colaboración entre al menos dos países miembros de la red es obligatoria.</p>
                  </div>
                  <button className="w-full mt-6 py-4 bg-primary text-on-primary font-label-md text-label-md rounded-lg flex justify-center items-center gap-2 hover:opacity-90 transition-all cursor-pointer shadow-sm">
                    Postularse Ahora <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ) : null}

          {/* Render Filtered Cards */}
          {filteredOpportunities.map((op) => (
            <div key={op.id} className="bg-white border border-outline-variant rounded-xl overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300 shadow-sm">
              <div className="h-48 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={op.title} src={op.image} />
              </div>
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 text-label-sm font-label-sm uppercase rounded font-bold ${op.tagClass}`}>{op.typeName}</span>
                    <span className="text-primary font-bold font-label-sm text-label-sm">{op.deadline}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-[#191c1e]">{op.title}</h3>
                  <p className="font-label-md text-label-md text-on-surface-variant mb-4">{op.institution}</p>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">{op.desc}</p>
                </div>
                <button className="w-full py-4 bg-primary text-on-primary font-label-md text-label-md rounded-lg flex justify-center items-center gap-2 hover:opacity-90 transition-all cursor-pointer shadow-sm">
                  Postularse Ahora <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Partnership CTA */}
        <section className="mt-section-gap p-12 bg-[#ffdada]/30 border border-[#dcc0c0] rounded-2xl flex flex-col md:flex-row items-center gap-8 text-[#191c1e] overflow-hidden relative">
          <div className="relative z-10 flex-grow">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4 font-bold">Asociación Institucional</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">¿Tiene su institución alguna oportunidad para investigadores de HTLV? Conéctese con la Red RIII-HTLV para difundir sus vacantes a nivel mundial.</p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-all cursor-pointer shadow-md">Enviar una Oportunidad</button>
              <button className="px-8 py-4 border border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-all cursor-pointer">Contactar Alianzas</button>
            </div>
          </div>
          <div 
            className="w-full md:w-1/3 h-64 bg-cover bg-center rounded-xl border border-outline-variant/30 flex-shrink-0" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-YfA_VdqoOCTB17Rfz4Rrek0V54lfyMh_RSThwuP0xHCGkgYoS572qJAlNpLBEvXrc2ULkPg089LkPy-QfBv-r0VupA7Gc0vG7OpjKBq2eTlFBjtzzPSR8sf7MSdY-XlrDo_yeZr98r8PS70_BkGclIS0hxzfbtb5nFi_PF11Kp3HpzUo4W7kbbmd8DRvFnRVnpYucTor3zjNQBpmQ7ho2vRL0O23KL3A9i1HNcFOSNPLKbCPW9G_XsEVX85peLBVuqSYq46t9aA')" }}
          ></div>
        </section>
      </main>
    </>
  );
}