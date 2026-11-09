"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';
import FaqSection from '../../components/faqs/FaqSection';

function HTLVContent() {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabFromUrl = searchParams.get('tab');

  const [activeTab, setActiveTab] = useState(tabFromUrl || 'que-es');

  useEffect(() => {
    if (tabFromUrl && ['que-es', 'faqs'].includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const scrollToInfo = () => {
    const el = document.getElementById('info-que-es');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full bg-slate-50 min-h-[calc(100vh-80px)] py-8 md:py-12 text-slate-900 flex flex-col justify-between">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de Página */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#003B49] tracking-tight">
              {activeTab === 'que-es'
                ? (lang === 'es' ? '¿Qué es el HTLV?' : 'What is HTLV?')
                : (lang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions')}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="bg-[#003B49] hover:bg-[#002B36] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087E8B]"
            >
              <span className="material-symbols-outlined text-[18px]">print</span>
              <span>{lang === 'es' ? 'Imprimir PDF' : 'Print PDF'}</span>
            </button>
          </div>
        </div>

        {/* 1. PESTAÑA: ¿QUÉ ES EL HTLV? */}
        {activeTab === 'que-es' && (
          <div className="space-y-12 animate-fadeIn text-slate-800">

            {/* HERO BANNER: Banner con fondo azul marino/turquesa y partículas 3D del virus */}
            <section className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-r from-[#001D2C] via-[#02323c] to-[#011B24] shadow-xl text-white min-h-[220px] sm:min-h-[260px] flex items-center p-6 sm:p-10 md:p-12 border border-[#087E8B]/20">
              {/* Imagen del virus 3D en la parte derecha */}
              <div className="absolute right-0 top-0 bottom-0 w-full sm:w-1/2 overflow-hidden pointer-events-none opacity-85 sm:opacity-95 flex justify-end">
                <img 
                  src="/htlv_hero_virus.jpg" 
                  alt="HTLV-1 3D Virion" 
                  className="h-full w-auto object-cover object-left"
                />
              </div>

              {/* Degradado para garantizar legibilidad óptima sobre el texto */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#001D2C] via-[#001D2C]/90 sm:via-[#001D2C]/80 to-transparent z-10 sm:max-w-[70%]"></div>

              {/* Contenido del Hero Banner */}
              <div className="relative z-20 max-w-xl space-y-4">
                <div className="inline-block">
                  <span className="bg-[#E5A400] text-[#001D2C] text-xs font-black uppercase px-3 py-1 rounded-md tracking-wider shadow-xs">
                    HTLV-1
                  </span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                  {lang === 'es' ? 'Conoce el HTLV' : 'Learn about HTLV'}
                </h2>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  {lang === 'es'
                    ? 'Un retrovirus que puede causar cáncer y enfermedades neurológicas en las personas infectadas.'
                    : 'A retrovirus that can cause cancer and neurological diseases in infected individuals.'}
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={scrollToInfo}
                    className="inline-flex items-center gap-2 bg-[#A10D3A] hover:bg-[#850A2F] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-md transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span>{lang === 'es' ? 'Conoce más sobre el HTLV' : 'Learn more about HTLV'}</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </section>

            <div id="info-que-es" className="space-y-12 pt-2">

              {/* SECCIÓN 1: ¿QUÉ ES EL HTLV? (Barra amarilla) */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-6 bg-[#E5A400] rounded-xs shrink-0"></span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                    {lang === 'es' ? '¿Qué es el HTLV?' : 'What is HTLV?'}
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Columna Izquierda: Definición + Tarjetas suaves de Retrovirus y Células T */}
                  <div className="lg:col-span-7 space-y-5">
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {lang === 'es'
                        ? 'El virus linfotrópico de células T humanas tipo 1 (HTLV-1) es un retrovirus que incorpora su material genético al ADN de las células del organismo y puede causar diversas enfermedades, incluyendo cáncer y afecciones neurológicas.'
                        : 'Human T-cell lymphotropic virus type 1 (HTLV-1) is a retrovirus that integrates its genetic material into the DNA of the host organism\'s cells and can cause various diseases, including cancer and neurological disorders.'}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                      {/* Tarjeta Retrovirus */}
                      <div className="bg-[#EAF4F7] p-4 rounded-xl border border-[#D5E8EE] flex items-start gap-3.5">
                        <span className="material-symbols-outlined text-[#087E8B] text-3xl shrink-0 mt-0.5">
                          biotech
                        </span>
                        <div>
                          <h4 className="font-bold text-[#003B49] text-sm sm:text-base">
                            {lang === 'es' ? 'Retrovirus' : 'Retrovirus'}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed mt-1">
                            {lang === 'es'
                              ? 'Incorpora su material genético al ADN de las células del organismo.'
                              : 'Integrates its viral genetic material into the DNA of the host cells.'}
                          </p>
                        </div>
                      </div>

                      {/* Tarjeta Células T */}
                      <div className="bg-[#EAF4F7] p-4 rounded-xl border border-[#D5E8EE] flex items-start gap-3.5">
                        <span className="material-symbols-outlined text-[#A10D3A] text-3xl shrink-0 mt-0.5">
                          bubble_chart
                        </span>
                        <div>
                          <h4 className="font-bold text-[#003B49] text-sm sm:text-base">
                            {lang === 'es' ? 'Células T' : 'T Cells'}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed mt-1">
                            {lang === 'es'
                              ? 'Infecta principalmente a las células T, un tipo de célula del sistema inmunitario.'
                              : 'Primarily infects T cells, a key component of the immune system.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Columna Derecha: ¿Qué enfermedades puede causar? */}
                  <div className="lg:col-span-5 bg-slate-50/70 p-5 sm:p-6 rounded-xl border border-slate-200/80 space-y-4">
                    <h3 className="font-bold text-base sm:text-lg text-[#003B49]">
                      {lang === 'es' ? '¿Qué enfermedades puede causar?' : 'What diseases can it cause?'}
                    </h3>

                    <div className="space-y-3.5 pt-1">
                      {/* ATL */}
                      <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-200/70 shadow-2xs">
                        <span className="px-3 py-1 rounded-full bg-[#FCE7F3] text-[#A10D3A] font-black text-xs shrink-0 tracking-wide">
                          ATL
                        </span>
                        <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                          {lang === 'es'
                            ? 'Leucemia/linfoma de células T del adulto.'
                            : 'Adult T-cell leukemia/lymphoma.'}
                        </span>
                      </div>

                      {/* HAM/TSP */}
                      <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-200/70 shadow-2xs">
                        <span className="px-3 py-1 rounded-full bg-[#FEF3C7] text-[#B45309] font-black text-xs shrink-0 tracking-wide">
                          HAM/TSP
                        </span>
                        <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                          {lang === 'es'
                            ? 'Mielopatía asociada al HTLV-1 / paraparesia espástica tropical.'
                            : 'HTLV-1-associated myelopathy / tropical spastic paraparesis.'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>


              {/* SECCIÓN 2: ¿QUÉ TAN FRECUENTE ES EL HTLV-1? (Barra granate/rojo y caja azul claro) */}
              <section className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-6 bg-[#A10D3A] rounded-xs shrink-0"></span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                    {lang === 'es' ? '¿Qué tan frecuente es el HTLV-1?' : 'How common is HTLV-1?'}
                  </h2>
                </div>

                <div className="bg-[#F0F7FA] p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Columna Izquierda: Párrafo + Métricas estadísticas */}
                    <div className="lg:col-span-5 space-y-5">
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                        {lang === 'es'
                          ? 'El HTLV-1 está presente en diversas regiones del mundo. Se estima que entre 5 y 20 millones de personas viven con esta infección, aunque su frecuencia varía considerablemente entre las distintas poblaciones.'
                          : 'HTLV-1 is present in diverse regions worldwide. An estimated 5 to 20 million people live with this infection, although frequency varies considerably among different populations.'}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                        {/* Métrica 1: 5 - 20 millones */}
                        <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-xs flex items-start gap-3">
                          <span className="material-symbols-outlined text-[#A10D3A] text-3xl shrink-0 mt-0.5">
                            group
                          </span>
                          <div>
                            <div className="font-extrabold text-[#003B49] text-base sm:text-lg leading-tight">
                              5 – 20 millones
                            </div>
                            <div className="text-[11px] text-slate-500 leading-tight mt-1">
                              {lang === 'es'
                                ? 'Personas que viven con HTLV-1 en el mundo.'
                                : 'People living with HTLV-1 worldwide.'}
                            </div>
                          </div>
                        </div>

                        {/* Métrica 2: < 1 % */}
                        <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-xs flex items-start gap-3">
                          <span className="material-symbols-outlined text-[#A10D3A] text-3xl shrink-0 mt-0.5">
                            bar_chart
                          </span>
                          <div>
                            <div className="font-extrabold text-[#003B49] text-base sm:text-lg leading-tight">
                              &lt; 1 %
                            </div>
                            <div className="text-[11px] text-slate-500 leading-tight mt-1">
                              {lang === 'es'
                                ? 'Prevalencia en la población general de América del Norte.'
                                : 'Prevalence in general North American population.'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Columna Derecha: Mapa mundial visual centrado en los países endémicos */}
                    <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-xl border border-slate-200/70 shadow-xs space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                        
                        {/* Ilustración visual del mapa mundial con zonas endémicas destacadas */}
                        <div className="md:col-span-7 flex items-center justify-center">
                          <img 
                            src="/htlv_pure_map.png" 
                            alt="Mapa de prevalencia mundial de HTLV-1" 
                            className="w-full h-auto max-h-[220px] object-contain drop-shadow-xs"
                          />
                        </div>

                        {/* Lista de principales regiones con viñetas vino */}
                        <div className="md:col-span-5 space-y-3">
                          <h4 className="font-bold text-xs sm:text-sm text-[#003B49] leading-snug">
                            {lang === 'es' 
                              ? 'Principales regiones con mayor prevalencia' 
                              : 'Main regions with higher prevalence'}
                          </h4>

                          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                            <li className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#A10D3A] shrink-0"></span>
                              <span>{lang === 'es' ? 'Japón (Suroeste)' : 'Japan (Southwestern)'}</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#A10D3A] shrink-0"></span>
                              <span>{lang === 'es' ? 'África subsahariana' : 'Sub-Saharan Africa'}</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#A10D3A] shrink-0"></span>
                              <span>{lang === 'es' ? 'América del Sur' : 'South America'}</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#A10D3A] shrink-0"></span>
                              <span>{lang === 'es' ? 'El Caribe' : 'The Caribbean'}</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#A10D3A] shrink-0"></span>
                              <span>{lang === 'es' ? 'Australia Central' : 'Central Australia'}</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#A10D3A] shrink-0"></span>
                              <span>{lang === 'es' ? 'Norte de Irán' : 'Northern Iran'}</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Nota aclaratoria sobre distribución regional no uniforme */}
                      <div className="pt-3 border-t border-slate-100">
                        <p className="text-xs text-slate-500 leading-relaxed italic">
                          {lang === 'es'
                            ? 'Es importante tener en cuenta que la prevalencia de HTLV-1 no es uniforme dentro de un mismo país o región. Algunas localidades pueden presentar tasas de infección muy elevadas, mientras que otras zonas de ese mismo territorio pueden tener una prevalencia considerablemente menor.'
                            : 'Prevalence of HTLV-1 is not uniform within a single country or region. Certain localities can present very elevated infection rates, while other areas of that same territory may have considerably lower prevalence.'}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </section>


              {/* SECCIÓN 3: SÍNTOMAS DEL HTLV-1 (Barra teal) */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-6 bg-[#087E8B] rounded-xs shrink-0"></span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                    {lang === 'es' ? 'Síntomas y manifestaciones clínicas' : 'Symptoms and Clinical Manifestations'}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {lang === 'es'
                    ? 'La mayoría de las personas infectadas por HTLV-1 no presenta síntomas. Sin embargo, algunas pueden desarrollar enfermedades asociadas al virus varias décadas después de la infección, principalmente leucemia/linfoma de células T del adulto (ATL/ATLL) y mielopatía asociada al HTLV-1/paraparesia espástica tropical (HAM/TSP).'
                    : 'Most people infected with HTLV-1 do not develop symptoms. However, some individuals may develop virus-associated diseases several decades after infection, primarily adult T-cell leukemia/lymphoma (ATL/ATLL) and HTLV-1-associated myelopathy/tropical spastic paraparesis (HAM/TSP).'}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  
                  {/* Tarjeta Síntomas ATL */}
                  <div className="bg-[#FAF7F8] p-5 sm:p-6 rounded-xl border border-rose-100 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full bg-[#FCE7F3] text-[#A10D3A] font-black text-xs uppercase tracking-wide">
                        ATL / ATLL
                      </span>
                      <h4 className="font-bold text-sm sm:text-base text-[#003B49]">
                        {lang === 'es' ? 'Síntomas de ATL/ATLL' : 'Symptoms of ATL/ATLL'}
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                      <div className="bg-white p-2.5 rounded-lg border border-slate-200/60 shadow-2xs flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#A10D3A] text-base">check_circle</span>
                        <span>{lang === 'es' ? 'Fatiga' : 'Fatigue'}</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-lg border border-slate-200/60 shadow-2xs flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#A10D3A] text-base">check_circle</span>
                        <span>{lang === 'es' ? 'Erupciones cutáneas' : 'Skin rashes'}</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-lg border border-slate-200/60 shadow-2xs flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#A10D3A] text-base">check_circle</span>
                        <span>{lang === 'es' ? 'Ganglios inflamados' : 'Swollen lymph nodes'}</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-lg border border-slate-200/60 shadow-2xs flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#A10D3A] text-base">check_circle</span>
                        <span>{lang === 'es' ? 'Estreñimiento' : 'Constipation'}</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-lg border border-slate-200/60 shadow-2xs flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#A10D3A] text-base">check_circle</span>
                        <span>{lang === 'es' ? 'Confusión' : 'Confusion'}</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-lg border border-slate-200/60 shadow-2xs flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#A10D3A] text-base">check_circle</span>
                        <span>{lang === 'es' ? 'Dolor óseo' : 'Bone pain'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tarjeta Síntomas HAM/TSP */}
                  <div className="bg-[#FAF8F5] p-5 sm:p-6 rounded-xl border border-amber-100 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full bg-[#FEF3C7] text-[#B45309] font-black text-xs uppercase tracking-wide">
                        HAM / TSP
                      </span>
                      <h4 className="font-bold text-sm sm:text-base text-[#003B49]">
                        {lang === 'es' ? 'Síntomas de HAM/TSP' : 'Symptoms of HAM/TSP'}
                      </h4>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <div className="bg-white p-2.5 rounded-lg border border-slate-200/60 shadow-2xs flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#B45309] text-base shrink-0">check_circle</span>
                        <span>{lang === 'es' ? 'Debilidad o rigidez progresiva en piernas' : 'Progressive leg weakness or stiffness'}</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-lg border border-slate-200/60 shadow-2xs flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#B45309] text-base shrink-0">check_circle</span>
                        <span>{lang === 'es' ? 'Dolor de espalda' : 'Back pain'}</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-lg border border-slate-200/60 shadow-2xs flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#B45309] text-base shrink-0">check_circle</span>
                        <span>{lang === 'es' ? 'Incontinencia urinaria' : 'Urinary incontinence'}</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-lg border border-slate-200/60 shadow-2xs flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#B45309] text-base shrink-0">check_circle</span>
                        <span>{lang === 'es' ? 'Entumecimiento u hormigueo (neuropatía)' : 'Numbness or tingling (neuropathy)'}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </section>


              {/* SECCIÓN 4: ENFERMEDADES ASOCIADAS AL HTLV-1 (Barra azul marino) */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-6 bg-[#003B49] rounded-xs shrink-0"></span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                    {lang === 'es' ? '¿Qué enfermedades puede causar el HTLV-1?' : 'What diseases can HTLV-1 cause?'}
                  </h2>
                </div>

                <div className="p-4 rounded-xl bg-[#EAF4F7] border border-[#D5E8EE] flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#087E8B] text-2xl shrink-0">
                    info
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                    {lang === 'es'
                      ? 'Se estima que aproximadamente 1 de cada 20 personas infectadas (5%) desarrollará ATL/ATLL o HAM/TSP a lo largo de su vida.'
                      : 'It is estimated that approximately 1 in 20 infected individuals (5%) will develop ATL/ATLL or HAM/TSP during their lifetime.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
                  
                  {/* Enfermedad 1: ATL */}
                  <div className="bg-[#FAF7F8] p-5 sm:p-6 rounded-xl border border-rose-100 space-y-3">
                    <h4 className="text-base font-bold text-[#003B49] leading-snug">
                      {lang === 'es' 
                        ? 'Leucemia/linfoma de células T del adulto (ATL/ATLL)' 
                        : 'Adult T-cell leukemia/lymphoma (ATL/ATLL)'}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {lang === 'es'
                        ? 'Es un tipo de cáncer de la sangre que afecta a los linfocitos T. Se clasifica en cuatro subtipos clínicos con distintas características y pronósticos:'
                        : 'A type of blood cancer affecting T lymphocytes. It is classified into four clinical subtypes with differing management and prognoses:'}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="px-2.5 py-1 rounded-md bg-white border border-rose-200 text-xs font-bold text-slate-800">
                        {lang === 'es' ? 'Agudo' : 'Acute'}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-white border border-rose-200 text-xs font-bold text-slate-800">
                        {lang === 'es' ? 'Linfomatoso' : 'Lymphomatous'}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-white border border-rose-200 text-xs font-bold text-slate-800">
                        {lang === 'es' ? 'Crónico' : 'Chronic'}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-white border border-rose-200 text-xs font-bold text-slate-800">
                        {lang === 'es' ? 'Latente (Smoldering)' : 'Smoldering'}
                      </span>
                    </div>
                  </div>

                  {/* Enfermedad 2: HAM/TSP */}
                  <div className="bg-[#FAF8F5] p-5 sm:p-6 rounded-xl border border-amber-100 space-y-3">
                    <h4 className="text-base font-bold text-[#003B49] leading-snug">
                      {lang === 'es' 
                        ? 'Mielopatía asociada al HTLV-1 / Paraparesia Espástica Tropical (HAM/TSP)' 
                        : 'HTLV-1-associated myelopathy / Tropical Spastic Paraparesis (HAM/TSP)'}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {lang === 'es'
                        ? 'Es una enfermedad neurológica que presenta características similares a la esclerosis múltiple. Provoca debilidad muscular progresiva y alteraciones del sistema nervioso que comprometen la movilidad y calidad de vida.'
                        : 'A neurological disease sharing features with multiple sclerosis. It causes progressive muscle weakness and spinal cord damage that impairs motor function and quality of life.'}
                    </p>
                  </div>

                </div>

                {/* Enfermedades inflamatorias y autoinmunes */}
                <div className="pt-2">
                  <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200/80 space-y-2">
                    <h5 className="font-bold text-xs sm:text-sm text-[#003B49]">
                      {lang === 'es' ? 'Otras condiciones inflamatorias y autoinmunes' : 'Other inflammatory and autoimmune conditions'}
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {lang === 'es'
                        ? 'El HTLV-1 también podría estar relacionado con afecciones en estudio, entre las que se encuentran:'
                        : 'HTLV-1 may also be associated with conditions currently under investigation, including:'}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-800">
                        {lang === 'es' ? 'Dermatitis infectiva' : 'Infective dermatitis'}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-800">
                        {lang === 'es' ? 'Uveítis' : 'Uveitis'}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-800">
                        {lang === 'es' ? 'Síndrome de Sjögren' : 'Sjögren\'s syndrome'}
                      </span>
                    </div>
                  </div>
                </div>
              </section>


              {/* SECCIÓN 5: ¿CÓMO CAUSA ENFERMEDADES EL HTLV-1? (Barra amarilla) */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-6 bg-[#E5A400] rounded-xs shrink-0"></span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                    {lang === 'es' ? '¿Cómo causa enfermedades el HTLV-1?' : 'How does HTLV-1 cause diseases?'}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Paso 1 */}
                  <div className="bg-[#EAF4F7] p-5 rounded-xl border border-[#D5E8EE] flex flex-col justify-between space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 rounded-full bg-[#087E8B] text-white font-black text-xs flex items-center justify-center">
                        1
                      </span>
                      <span className="material-symbols-outlined text-[#087E8B] text-xl">
                        coronavirus
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#003B49]">
                        {lang === 'es' ? 'Ingreso celular' : 'Cellular entry'}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        {lang === 'es'
                          ? 'Infecta principalmente los linfocitos T CD4+ del sistema inmunitario.'
                          : 'Primarily enters and infects CD4+ T lymphocytes of the immune system.'}
                      </p>
                    </div>
                  </div>

                  {/* Paso 2 */}
                  <div className="bg-[#EAF4F7] p-5 rounded-xl border border-[#D5E8EE] flex flex-col justify-between space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 rounded-full bg-[#087E8B] text-white font-black text-xs flex items-center justify-center">
                        2
                      </span>
                      <span className="material-symbols-outlined text-[#087E8B] text-xl">
                        change_circle
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#003B49]">
                        {lang === 'es' ? 'Transcripción inversa' : 'Reverse transcription'}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        {lang === 'es'
                          ? 'Transforma su ARN viral en ADN dentro de la célula infectada.'
                          : 'Converts its viral genomic RNA into DNA within the host cell.'}
                      </p>
                    </div>
                  </div>

                  {/* Paso 3 */}
                  <div className="bg-[#EAF4F7] p-5 rounded-xl border border-[#D5E8EE] flex flex-col justify-between space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 rounded-full bg-[#087E8B] text-white font-black text-xs flex items-center justify-center">
                        3
                      </span>
                      <span className="material-symbols-outlined text-[#087E8B] text-xl">
                        dna
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#003B49]">
                        {lang === 'es' ? 'Integración proviral' : 'Proviral integration'}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        {lang === 'es'
                          ? 'Incorpora el ADN viral (provirus) de manera permanente al ADN celular.'
                          : 'Integrates viral DNA (provirus) permanently into host cell chromosomes.'}
                      </p>
                    </div>
                  </div>

                  {/* Paso 4 */}
                  <div className="bg-[#EAF4F7] p-5 rounded-xl border border-[#D5E8EE] flex flex-col justify-between space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 rounded-full bg-[#087E8B] text-white font-black text-xs flex items-center justify-center">
                        4
                      </span>
                      <span className="material-symbols-outlined text-[#A10D3A] text-xl">
                        warning
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#003B49]">
                        {lang === 'es' ? 'Proliferación o daño' : 'Proliferation or injury'}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        {lang === 'es'
                          ? 'Tras décadas, puede inducir proliferación anormal (ATL) o daño nervioso (HAM/TSP).'
                          : 'After decades, can cause abnormal proliferation (ATL) or neuroinflammation (HAM/TSP).'}
                      </p>
                    </div>
                  </div>
                </div>
              </section>


              {/* SECCIÓN 6: TRANSMISIÓN DEL HTLV (Barra vino) */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-6 bg-[#A10D3A] rounded-xs shrink-0"></span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                    {lang === 'es' ? '¿Cómo se transmite el HTLV-1?' : 'How is HTLV-1 transmitted?'}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Vía 1 */}
                  <div className="bg-[#FAF8F5] p-5 rounded-xl border border-amber-100 space-y-3 flex flex-col justify-between">
                    <span className="material-symbols-outlined text-[#B45309] text-3xl">
                      favorite
                    </span>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#003B49]">
                        {lang === 'es' ? 'Transmisión sexual' : 'Sexual transmission'}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        {lang === 'es'
                          ? 'Mediante relaciones sexuales vaginales, anales u orales sin protección.'
                          : 'Through unprotected vaginal, anal, or oral sexual relations.'}
                      </p>
                    </div>
                  </div>

                  {/* Vía 2 */}
                  <div className="bg-[#FAF8F5] p-5 rounded-xl border border-amber-100 space-y-3 flex flex-col justify-between">
                    <span className="material-symbols-outlined text-[#B45309] text-3xl">
                      child_care
                    </span>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#003B49]">
                        {lang === 'es' ? 'Madre a hijo' : 'Mother-to-child'}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        {lang === 'es'
                          ? 'Principalmente a través de la lactancia materna prolongada.'
                          : 'Primarily through prolonged breastfeeding.'}
                      </p>
                    </div>
                  </div>

                  {/* Vía 3 */}
                  <div className="bg-[#FAF8F5] p-5 rounded-xl border border-amber-100 space-y-3 flex flex-col justify-between">
                    <span className="material-symbols-outlined text-[#B45309] text-3xl">
                      vaccines
                    </span>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#003B49]">
                        {lang === 'es' ? 'Sangre contaminada' : 'Contaminated blood'}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        {lang === 'es'
                          ? 'Por compartir agujas o jeringas en el uso de drogas inyectables.'
                          : 'By sharing contaminated needles or syringes.'}
                      </p>
                    </div>
                  </div>

                  {/* Vía 4 */}
                  <div className="bg-[#FAF8F5] p-5 rounded-xl border border-amber-100 space-y-3 flex flex-col justify-between">
                    <span className="material-symbols-outlined text-[#B45309] text-3xl">
                      local_hospital
                    </span>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#003B49]">
                        {lang === 'es' ? 'Transfusiones o trasplantes' : 'Transfusions and transplants'}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        {lang === 'es'
                          ? 'De manera poco frecuente en centros con programas de tamizaje.'
                          : 'Infrequently, in healthcare settings with established blood screening.'}
                      </p>
                    </div>
                  </div>
                </div>
              </section>


              {/* SECCIÓN 7: FACTORES DE RIESGO (Barra teal) */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-6 bg-[#087E8B] rounded-xs shrink-0"></span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                    {lang === 'es' ? '¿Cuáles son los factores de riesgo?' : 'What are the risk factors?'}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#EAF4F7] p-5 rounded-xl border border-[#D5E8EE] flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#087E8B] text-2xl shrink-0 mt-0.5">
                      check_box
                    </span>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#003B49]">
                        {lang === 'es' ? 'Uso de drogas inyectables' : 'Injection drug use'}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        {lang === 'es'
                          ? 'El uso de drogas inyectables y el intercambio de agujas o jeringas contaminadas.'
                          : 'Use of injection drugs and sharing needles or contaminated equipment.'}
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#EAF4F7] p-5 rounded-xl border border-[#D5E8EE] flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#087E8B] text-2xl shrink-0 mt-0.5">
                      check_box
                    </span>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#003B49]">
                        {lang === 'es' ? 'Origen o residencia en zona endémica' : 'Endemic origin or residence'}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        {lang === 'es'
                          ? 'Haber nacido o vivir en una región donde la prevalencia de HTLV-1 es elevada.'
                          : 'Being born or residing in a geographical area with elevated HTLV-1 prevalence.'}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

            </div>

          </div>
        )}

        {/* 2. PESTAÑA: PREGUNTAS FRECUENTES */}
        {activeTab === 'faqs' && <FaqSection lang={lang} />}

      </div>
    </main>
  );
}

export default function HTLVPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-20 text-center font-bold text-[#003B49]">Cargando...</div>}>
      <HTLVContent />
    </Suspense>
  );
}
