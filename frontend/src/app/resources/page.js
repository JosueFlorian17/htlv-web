"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    {
      title: 'Materiales Educativos',
      desc: 'Módulos de cursos integrales y planes de estudio para instituciones académicas y proveedores de atención médica.',
      icon: 'school',
      count: '42 Elementos',
      bgClass: 'bg-primary-fixed text-primary'
    },
    {
      title: 'Directrices Globales',
      desc: 'Protocolos clínicos estandarizados y marcos éticos para los procedimientos de diagnóstico de HTLV-1.',
      icon: 'gavel',
      count: '12 Docs Oficiales',
      bgClass: 'bg-secondary-container text-secondary'
    },
    {
      title: 'Manuales de Laboratorio',
      desc: 'Guías técnicas paso a paso para el personal de laboratorio sobre el tamizaje y aislamiento de HTLV.',
      icon: 'menu_book',
      count: '18 Procedimientos',
      bgClass: 'bg-surface-container-highest text-on-surface-variant'
    }
  ];

  const resources = [
    {
      title: 'Guía Visual de la Transmisión Celular de HTLV-1',
      desc: 'Un mapeo visual de alta resolución de las teorías actuales sobre las sinapsis virales de HTLV-1 y la propagación de célula a célula.',
      type: 'INFOGRAFÍA',
      meta: 'PNG, 4.2 MB',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARYfAPMBJO95i3OeJqqO1e7PkQnZJtJw7yNBXqmtQc732fQblkTRZG4DLSA4ZAWAAZET0kb6fswrdyxKxCSTWdNRzWGmqfXfYwNLfipwH-p0-m5pXwrZHhnD_a14J9vF5G_IXD3aTl9SyWGwUZadWt6QIpMv8UVhmzRJcE7rURVkVIVqKV9mAY8x7yJ_a9JIfY6JlAAtTqwRCh4kffaOH-fkTmaX0Wo3JhcklYl6kNKHpWPe4B7HgLBpfAzi1F4nG0eOCwUV70CbA'
    },
    {
      title: 'Grabación de la Sesión del Simposio Global 2023',
      desc: 'Video completo de las ponencias sobre el desarrollo clínico de vacunas y epidemiología molecular del HTLV.',
      type: 'VIDEO',
      meta: 'MP4, 1.2 GB',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuXvO2-W-DPohAm0t3r6ufv176Em3axy9Q9TMOk3GBfqlKMStSeHmEsbpuVTTZN7f7pAkRPumO-Jqp79EnGUSIy8cSXKJxEc-t895RwABRrggDXIXbiY5p-NgWLSsLDHG79IP7Ee4bmaWLPDqRitTo1i9ORnmNswwL3-CCWxX-QtwWLhQTrxvs0X6UwfsSPRkFPiOT27UbLsWyJ3d6VRmLM7qzGlDOLirarSjBi_Gy_3OJea_Q0aZCOYZBKRWTBq-n0tnxLukm38k'
    },
    {
      title: 'Estatuto de Consenso en Diagnóstico de HTLV',
      desc: 'Directrices clínicas actualizadas para la diferenciación serológica y confirmación molecular de HTLV-1/2.',
      type: 'PDF OFICIAL',
      meta: 'PDF, 1.8 MB',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCs_ADncYu3IQcJxFxpu0kOP5pnS5GRkFRzvvkbICMG9Oce33JHFTQMkyP57gtCJFnApfDqwtjpwgQIAbwBpW6NORgt4yacS-7hR-5Jn36QwK3D_oF6d8lVu-mxR5XBVZF3JxLuN0BgZ6OYdwqa7Jg3VOZt3oeq1Lg53YUd-kANDXPw9GnZm325dFVQcBEgNK6jF3lw42RuqJftpYNO_oUBbsU22bdCqK2yU_cFbh59CClyAAVbeZLjqwkhDPGvfXp5NihQfRV0vss'
    },
    {
      title: 'Kit de Diagnóstico Rápido: Manual Técnico',
      desc: 'Instrucciones estandarizadas para el uso de pruebas CLIAs en entornos clínicos de bajos recursos.',
      type: 'MANUAL',
      meta: 'PDF, 850 KB',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCFzJcS4XQz33g1ZOJF2fMADRrJ4Nk-Y9FK0qHMT6qq9Vx8MvtJeMNGwWd2Wvl8Urz8v0DmcRl1XRgSn6DlQQ0DZ4NZz2xSY-YjVh_Ugtfkv3MXwuRiP7qvrXdRAMbYsfo7RMKGVqbqKC5plim7MELc13qU6FgZmE9huyF7E2xbcWWVbQNVRMGjShge2DotpHtNsCYLSNLSEhDTrw9esDxvK6-kcLZKq5W2zhFiAsLhwSfQYEP_p6LeRo-eX9wQFqouvK0hCBD77Q'
    }
  ];

  return (
    <>
      <main className="py-12 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
        {/* Hero / Header Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="font-display text-display text-primary mb-4">Repositorio de Recursos</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">El centro global para la documentación de investigación de HTLV-1/2, directrices estandarizadas y activos educativos curados por la Red Internacional.</p>
            </div>
            <div className="flex flex-wrap gap-2 flex-shrink-0">
              <span className="bg-primary-fixed text-[#822530] px-3 py-1 rounded-full font-label-sm text-label-sm uppercase font-bold">1,240 Recursos</span>
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-sm text-label-sm uppercase font-bold">Actualizado Diario</span>
            </div>
          </div>
        </section>

        {/* Search and Filter Bar */}
        <section className="mb-10 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-outline-variant bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-body-md" 
              placeholder="Buscar por título, autor o área de investigación..." 
              type="text" 
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-6 py-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors cursor-pointer bg-white">
              <span className="material-symbols-outlined text-[20px]">filter_list</span>
              <span className="font-label-md text-label-md">Filtros</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors cursor-pointer bg-white">
              <span className="material-symbols-outlined text-[20px]">sort</span>
              <span className="font-label-md text-label-md">Últimos</span>
            </button>
          </div>
        </section>

        {/* Category Grid (The Bento) */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-section-gap">
          {categories.map((cat, i) => (
            <div key={i} className="group cursor-pointer relative overflow-hidden rounded-xl border border-outline-variant bg-white shadow-sm transition-all hover:shadow-md hover:border-primary p-8 flex flex-col h-full">
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform ${cat.bgClass}`}>
                  <span className="material-symbols-outlined text-[28px]">{cat.icon}</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors text-[#191c1e]">{cat.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow leading-relaxed">{cat.desc}</p>
              <div className="mt-6 flex items-center justify-between border-t border-outline-variant pt-4">
                <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">{cat.count}</span>
                <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all">arrow_forward</span>
              </div>
            </div>
          ))}
        </section>

        {/* Resource Item List */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-headline-lg text-headline-lg text-[#191c1e]">Últimos Recursos</h2>
            <div className="flex gap-4">
              <button className="text-label-md text-primary font-bold hover:underline cursor-pointer">Ver Todo</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {resources.map((res, i) => (
              <div key={i} className="bg-white rounded-xl border border-outline-variant overflow-hidden flex flex-col group transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-48 w-full overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={res.title} src={res.image} />
                  <div className="absolute top-3 left-3">
                    <span className="bg-surface/90 backdrop-blur-sm text-primary font-label-sm text-label-sm px-2.5 py-1 rounded border border-primary/20 font-bold">{res.type}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="font-label-md text-label-md font-bold text-on-surface mb-2 leading-tight group-hover:text-primary transition-colors text-[#191c1e]">{res.title}</h4>
                  <p className="font-label-sm text-label-sm text-on-surface-variant mb-4 flex-grow line-clamp-3 leading-relaxed">{res.desc}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#dcc0c0]/30">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">{res.meta}</span>
                    <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all cursor-pointer">
                      <span className="material-symbols-outlined text-[20px]">download</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}