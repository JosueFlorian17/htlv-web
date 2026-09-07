"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const events = [
    {
      day: '12',
      month: 'NOV',
      year: '2024',
      title: 'Taller de Métodos de Tipificación Molecular',
      desc: 'Capacitación práctica presencial y virtual sobre protocolos avanzados de tipificación de subtipos de HTLV-1.',
      time: '10:00 - 16:00 GMT',
      location: 'Imperial College London & Virtual',
      type: 'TALLER'
    },
    {
      day: '18',
      month: 'NOV',
      year: '2024',
      title: 'Simposio Internacional: HTLV y Co-infecciones',
      desc: 'Exploración de la dinámica clínica entre HTLV-1, VIH y tuberculosis en regiones altamente endémicas.',
      time: '14:00 - 18:00 GMT',
      location: 'Virtual',
      type: 'SIMPOSIO'
    },
    {
      day: '02',
      month: 'DIC',
      year: '2024',
      title: 'Foro Anual de Consorcios de Investigación',
      desc: 'Reunión de gobernanza y presentación de informes de progreso de las 8 líneas de investigación.',
      time: '09:00 - 17:00 local',
      location: 'París, Francia',
      type: 'REUNIÓN'
    }
  ];

  return (
    <>
      {/* Header Section */}
      <header className="py-12 bg-surface">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-label-sm uppercase tracking-wider rounded-full mb-4">Impacto e Información</span>
              <h1 className="font-display text-display text-primary mb-4">Noticias</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">Manténgase al día con los últimos avances científicos, noticias institucionales y eventos académicos organizados por la comunidad de investigación RIII-HTLV.</p>
            </div>
            <div className="flex gap-4 border-b border-outline-variant pb-1">
              <button 
                onClick={() => setActiveTab('all')}
                className={`pb-2 text-label-md font-bold border-b-2 cursor-pointer ${activeTab === 'all' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant'}`}
              >
                Ver Todo
              </button>
              <button 
                onClick={() => setActiveTab('news')}
                className={`pb-2 text-label-md font-bold border-b-2 cursor-pointer ${activeTab === 'news' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant'}`}
              >
                Noticias
              </button>
              <button 
                onClick={() => setActiveTab('events')}
                className={`pb-2 text-label-md font-bold border-b-2 cursor-pointer ${activeTab === 'events' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant'}`}
              >
                Eventos
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
        {/* Bento Grid News Layout */}
        {(activeTab === 'all' || activeTab === 'news') && (
          <section className="mb-section-gap">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {/* Featured News Card */}
              <div className="md:col-span-8 group cursor-pointer">
                <div className="bg-white rounded-xl overflow-hidden border border-outline-variant shadow-sm hover:shadow-md hover:border-primary transition-all h-full flex flex-col justify-between">
                  <div className="h-80 w-full relative overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Investigadores trabajando en laboratorio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcD29lXstUu_IXvcAWEidHu0-7K7fZgHUL9-PtF0ObBYVOObRLVPDd8C3uvvd6tTMApiAgcNlT1gXsoIrU5DUr2lTWH-l4V6bWfO1cxIUfQo6iFMX8OO5gsWTt082JmTFF86Gc9dF5nM9QgAUGgA31qSfMl8riwpY-w7GlTj-RzsxsQ3vCnGMKZy3abQJ6Hl3nmWYg1q9cuB3NANJ_U2KuNvSXIShXwz87nw5zevdp2nQBJ8N7qoqls8Red0YfN3ddYteyWdeSJ7E" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-label-sm font-bold">ACTUALIZACIÓN CIENTÍFICA</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow justify-between">
                    <div>
                      <span className="text-primary font-bold text-label-sm mb-2 block">24 de Octubre, 2024</span>
                      <h3 className="font-headline-lg text-headline-lg mb-4 group-hover:text-primary transition-colors text-[#191c1e]">Avance en Protocolos de Diagnóstico Molecular de HTLV-1</h3>
                      <p className="text-on-surface-variant font-body-md leading-relaxed mb-6">El Consorcio Internacional ha publicado un conjunto revisado de directrices para la detección molecular de HTLV-1, priorizando la accesibilidad para entornos de bajos recursos y una mayor sensibilidad en la detección en etapas tempranas.</p>
                    </div>
                    <div className="pt-6 flex items-center text-primary font-bold border-t border-outline-variant/30 mt-auto">
                      <span>Leer Reporte Completo</span>
                      <span className="material-symbols-outlined ml-2">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side Cards */}
              <div className="md:col-span-4 flex flex-col gap-gutter">
                <div className="bg-white p-8 rounded-xl border border-outline-variant shadow-sm hover:border-primary transition-all flex flex-col justify-between h-1/2">
                  <div>
                    <span className="text-primary font-bold text-label-sm mb-2 block">21 de Octubre, 2024</span>
                    <h4 className="font-headline-md text-headline-md mb-2 text-[#191c1e]">Nuevo Centro Regional en el Sudeste Asiático</h4>
                    <p className="text-on-surface-variant text-label-md leading-relaxed">Ampliando la presencia de la red para mejorar la vigilancia epidemiológica en la cuenca del Pacífico.</p>
                  </div>
                  <div className="pt-4 flex items-center text-primary font-label-md uppercase tracking-tight font-bold border-t border-outline-variant/30 mt-4">
                    <span>Noticias de la Red</span>
                    <span className="material-symbols-outlined text-[18px] ml-1">chevron_right</span>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl border border-outline-variant shadow-sm hover:border-primary transition-all flex flex-col justify-between h-1/2">
                  <div>
                    <span className="text-primary font-bold text-label-sm mb-2 block">15 de Octubre, 2024</span>
                    <h4 className="font-headline-md text-headline-md mb-2 text-[#191c1e]">Ganadores de Becas de Publicación Anual</h4>
                    <p className="text-on-surface-variant text-label-md leading-relaxed">Celebrando los logros de cinco investigadores principiantes del consorcio global.</p>
                  </div>
                  <div className="pt-4 flex items-center text-primary font-label-md uppercase tracking-tight font-bold border-t border-outline-variant/30 mt-4">
                    <span>Logros</span>
                    <span className="material-symbols-outlined text-[18px] ml-1">chevron_right</span>
                  </div>
                </div>
              </div>

              {/* Three Column Regular Items */}
              <div className="md:col-span-4 group cursor-pointer">
                <div className="bg-white rounded-xl overflow-hidden border border-outline-variant shadow-sm hover:border-primary transition-all flex flex-col h-full justify-between">
                  <div className="h-48 w-full bg-surface-container overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="Consenso científico papel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrsBYFiHBR0dnKO7rwGzndt-NoFkaQVIX3PtadXGV840iBUgZMr7mbRPxrk6bUiNa0SNV-KrG3W2dG7OvVXAnv3JGIucJ3gHNMicU96OhXKS32EHc6aINjwpSAVpsGiIbpvZ9U3QWRAKRW3YPpqQF7t9QrQC9bEndIYZvmqzjNVM9Iwzf5_mFSrE-tVOpqz_UD78gwxiepspgejsejoOpFmHXQsuWQELvqVD3SmtT6qsIED02DPFXmuH3SaFykyAvg-nahwrVvDxA" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-on-surface-variant font-label-sm opacity-70 block mb-2">12 de Octubre, 2024</span>
                      <h4 className="font-headline-md text-headline-md text-[#191c1e] mb-2 leading-tight">Acuerdo de Intercambio de Datos Interinstitucionales</h4>
                      <p className="text-on-surface-variant text-label-md leading-relaxed">Protocolos de repositorio unificados establecidos para 12 centros de investigación principales.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 group cursor-pointer">
                <div className="bg-white rounded-xl overflow-hidden border border-outline-variant shadow-sm hover:border-primary transition-all flex flex-col h-full justify-between">
                  <div className="h-48 w-full bg-surface-container overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="Congreso de investigadores" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiaoIJnJKoclM7eyxPd18lxisITwzgh0bDPhqfFogK9-tPszsvUv6fs0s_qQOlWpG3xNemYstsVEC-GF-lJSFRW41DVaZVn4urI-oRz79q15iZtsNzySjQTeiAi_Xkfi_50ygokMnE2mUFCZRLXXIldq5OGzKNmkEOyUPmZNKHjBGLkHX5Ehb0LX4rGW-Ki9id3wKbgrSdcn_I0mkCdTl3IMajywAr27B186U4MmEHt5OxetpKtbqyJ1paWreVViGy1xWdYyaTEBM" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-on-surface-variant font-label-sm opacity-70 block mb-2">08 de Octubre, 2024</span>
                      <h4 className="font-headline-md text-headline-md text-[#191c1e] mb-2 leading-tight">Resumen del Día Mundial del HTLV-1</h4>
                      <p className="text-on-surface-variant text-label-md leading-relaxed">Resumen de las actividades globales de concientización e informes de impacto en salud pública.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 group cursor-pointer">
                <div className="bg-white rounded-xl overflow-hidden border border-outline-variant shadow-sm hover:border-primary transition-all flex flex-col h-full justify-between">
                  <div className="h-48 w-full bg-surface-container overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="Tablero digital de visualización" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa1Ud8t7OSTFq69LQdsKili6g__PKminha5lcjfLiSUNbe3M_G60ayLHjBIvQqCr50ke0c5XzgoUFWuohEKGAa8vxT1M4MlZYOtf4QRvlyVZBD89TktyHZCGJfmJIFuB_cLocJzNmhma1Z_uIG8Cm8f0kTYrHvk4LoDZng7DYuExRfG-WQriT1uYzZYsyZnPo58Ycmk1WwJb9MTgENg-wJ4lvr36UDiJzQqNEeSHpBQNLjmjL00PoEN2NNW9rMuKIowx9jJOAClgw" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-on-surface-variant font-label-sm opacity-70 block mb-2">01 de Octubre, 2024</span>
                      <h4 className="font-headline-md text-headline-md text-[#191c1e] mb-2 leading-tight">Expansión del Repositorio Digital</h4>
                      <p className="text-on-surface-variant text-label-md leading-relaxed">Más de 500 nuevos resúmenes clínicos añadidos al portal de búsqueda de miembros.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Academic Calendar Section */}
        {(activeTab === 'all' || activeTab === 'events') && (
          <section className="bg-white border border-outline-variant p-8 md:p-12 rounded-2xl shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary">Calendario Académico</h2>
                <p className="text-on-surface-variant font-body-md">Reuniones científicas y talleres técnicos para el cuarto trimestre de 2024.</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-white border border-outline px-4 py-2 rounded-lg font-label-md flex items-center gap-2 hover:bg-surface-container-low transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-[20px]">filter_list</span>
                  Filtrar por Tipo
                </button>
                <button className="bg-primary text-white px-4 py-2 rounded-lg font-label-md flex items-center gap-2 hover:opacity-90 transition-all cursor-pointer shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">calendar_add_on</span>
                  Sincronizar Calendario
                </button>
              </div>
            </div>
            <div className="space-y-6">
              {events.map((ev, i) => (
                <div key={i} className="bg-white rounded-xl border border-outline-variant shadow-sm flex flex-col md:flex-row hover:shadow-md hover:border-primary transition-all overflow-hidden group">
                  <div className="md:w-48 bg-primary text-white p-6 flex flex-col items-center justify-center text-center flex-shrink-0">
                    <span className="text-label-sm uppercase font-bold tracking-widest opacity-80">{ev.month}</span>
                    <span className="text-[48px] font-bold leading-tight font-display">{ev.day}</span>
                    <span className="text-label-md font-bold">{ev.year}</span>
                  </div>
                  <div className="flex-grow p-8 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                    <div>
                      <span className="bg-[#ffdada] text-[#822530] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 inline-block">{ev.type}</span>
                      <h4 className="font-headline-md text-headline-md text-[#191c1e] group-hover:text-primary transition-colors leading-tight mb-2">{ev.title}</h4>
                      <p className="text-on-surface-variant text-body-md leading-relaxed">{ev.desc}</p>
                    </div>
                    <div className="flex-shrink-0 border-l border-outline-variant/50 pl-6 space-y-2 text-label-sm text-on-surface-variant">
                      <p className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">schedule</span> {ev.time}</p>
                      <p className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">location_on</span> {ev.location}</p>
                      <button className="mt-4 px-6 py-2.5 border border-primary text-primary rounded-lg font-bold hover:bg-primary/5 transition-all cursor-pointer">
                        Registrarse
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}