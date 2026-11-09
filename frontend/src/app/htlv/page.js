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
    <main className="w-full bg-slate-50 min-h-[calc(100vh-80px)] text-slate-900 flex flex-col justify-between">

      {/* 1. PESTAÑA: ¿QUÉ ES EL HTLV? */}
      {activeTab === 'que-es' && (
        <div className="animate-fadeIn text-slate-800">

          {/* ═══════════════════════════════════════════════════════════
              HERO BANNER — fondo oscuro, virus derecha, badge amber
          ════════════════════════════════════════════════════════════ */}
          <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#001D2C] via-[#02323c] to-[#001a24] text-white min-h-[200px] sm:min-h-[240px] flex items-center px-8 sm:px-12 md:px-16 py-10">
            {/* Virus 3D background — right side */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
              <img
                src="/htlv_hero_virus.jpg"
                alt="HTLV-1 3D Virion"
                className="h-full w-full object-cover object-left"
              />
            </div>
            {/* Left-to-right gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#001D2C] via-[#001D2C]/85 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-lg space-y-3">
              <div>
                <span className="inline-block bg-[#E5A400] text-[#001D2C] text-xs font-black uppercase px-3 py-1 rounded-md tracking-wider">
                  HTLV-1
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                {lang === 'es' ? 'Conoce el HTLV' : 'Learn about HTLV'}
              </h1>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {lang === 'es'
                  ? 'Un retrovirus que puede causar cáncer y enfermedades neurológicas en las personas infectadas.'
                  : 'A retrovirus that can cause cancer and neurological diseases in infected individuals.'}
              </p>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={scrollToInfo}
                  className="inline-flex items-center gap-2 bg-[#A10D3A] hover:bg-[#850A2F] text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md transition-colors cursor-pointer"
                >
                  <span>{lang === 'es' ? 'Conoce más sobre el HTLV' : 'Learn more about HTLV'}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </section>

          <div id="info-que-es" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

            {/* ═══════════════════════════════════════════════════════════
                SECCIÓN 1: ¿QUÉ ES EL HTLV?
                Layout: 3 columnas en fila — texto | 2 tarjetas | enfermedades
            ════════════════════════════════════════════════════════════ */}
            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1.1fr] gap-6 lg:gap-8 items-start">

                  {/* Col 1: Título con barra amarilla + Texto */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-1 h-7 bg-[#E5A400] rounded-sm shrink-0" />
                      <h2 className="text-lg sm:text-xl font-bold text-[#003B49]">
                        {lang === 'es' ? '¿Qué es el HTLV?' : 'What is HTLV?'}
                      </h2>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {lang === 'es'
                        ? 'El virus linfotrópico de células T humanas tipo 1 (HTLV-1) es un retrovirus que incorpora su material genético al ADN de las células del organismo y puede causar diversas enfermedades, incluyendo cáncer y afecciones neurológicas.'
                        : 'Human T-cell lymphotropic virus type 1 (HTLV-1) is a retrovirus that integrates its genetic material into the DNA of the host organism\'s cells and can cause various diseases, including cancer and neurological disorders.'}
                    </p>
                  </div>

                  {/* Col 2: Dos tarjetas flotantes — Retrovirus y Células T */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Tarjeta Retrovirus */}
                    <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center text-center space-y-2 shadow-sm">
                      <span className="material-symbols-outlined text-[#087E8B] text-4xl">biotech</span>
                      <h4 className="font-bold text-[#003B49] text-sm">
                        {lang === 'es' ? 'Retrovirus' : 'Retrovirus'}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {lang === 'es'
                          ? 'Incorpora su material genético al ADN de las células del organismo.'
                          : 'Integrates its genetic material into the DNA of the host cells.'}
                      </p>
                    </div>

                    {/* Tarjeta Células T */}
                    <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center text-center space-y-2 shadow-sm">
                      <span className="material-symbols-outlined text-[#A10D3A] text-4xl">bubble_chart</span>
                      <h4 className="font-bold text-[#003B49] text-sm">
                        {lang === 'es' ? 'Células T' : 'T Cells'}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {lang === 'es'
                          ? 'Infecta principalmente a las células T, un tipo de célula del sistema inmunitario.'
                          : 'Primarily infects T cells, a key component of the immune system.'}
                      </p>
                    </div>
                  </div>

                  {/* Col 3: ¿Qué enfermedades puede causar? */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-sm sm:text-base text-[#003B49]">
                      {lang === 'es' ? '¿Qué enfermedades puede causar?' : 'What diseases can it cause?'}
                    </h3>

                    {/* ATL */}
                    <div className="flex items-start gap-3">
                      <span className="px-3 py-1 rounded-full bg-[#FCE7F3] text-[#A10D3A] font-black text-xs shrink-0 tracking-wide mt-0.5">
                        ATL
                      </span>
                      <span className="text-sm text-slate-700 leading-snug">
                        {lang === 'es'
                          ? 'Leucemia/linfoma de células T del adulto.'
                          : 'Adult T-cell leukemia/lymphoma.'}
                      </span>
                    </div>

                    {/* HAM/TSP */}
                    <div className="flex items-start gap-3">
                      <span className="px-2 py-1 rounded-full bg-[#FEF3C7] text-[#B45309] font-black text-xs shrink-0 tracking-wide mt-0.5">
                        HAM/TSP
                      </span>
                      <span className="text-sm text-slate-700 leading-snug">
                        {lang === 'es'
                          ? 'Mielopatía asociada al HTLV-1 / paraparesia espástica tropical.'
                          : 'HTLV-1-associated myelopathy / tropical spastic paraparesis.'}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </section>


            {/* ═══════════════════════════════════════════════════════════
                SECCIÓN 2: ¿QUÉ TAN FRECUENTE ES EL HTLV-1?
                Layout: fondo azul-gris claro, izq=texto+stats, der=mapa SVG+leyenda
            ════════════════════════════════════════════════════════════ */}
            <section className="bg-[#EDF4F7] rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6 lg:gap-8 items-center">

                {/* Columna izquierda: título + párrafo + métricas */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1 h-7 bg-[#A10D3A] rounded-sm shrink-0" />
                    <h2 className="text-lg sm:text-xl font-bold text-[#003B49]">
                      {lang === 'es' ? '¿Qué tan frecuente es el HTLV-1?' : 'How common is HTLV-1?'}
                    </h2>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed">
                    {lang === 'es'
                      ? 'El HTLV-1 está presente en diversas regiones del mundo. Se estima que entre 5 y 20 millones de personas viven con esta infección, aunque su frecuencia varía considerablemente entre las distintas poblaciones.'
                      : 'HTLV-1 is present in diverse regions worldwide. An estimated 5 to 20 million people live with this infection, although frequency varies considerably among different populations.'}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {/* Stat 1 */}
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[#A10D3A] text-3xl shrink-0">group</span>
                      <div>
                        <div className="font-extrabold text-[#003B49] text-base leading-tight">
                          5 – 20 {lang === 'es' ? 'millones' : 'million'}
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                          {lang === 'es'
                            ? 'Personas que viven con HTLV-1 en el mundo.'
                            : 'People living with HTLV-1 worldwide.'}
                        </div>
                      </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[#A10D3A] text-3xl shrink-0">bar_chart</span>
                      <div>
                        <div className="font-extrabold text-[#003B49] text-base leading-tight">
                          &lt; 1 %
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                          {lang === 'es'
                            ? 'Prevalencia en la población general de América del Norte.'
                            : 'Prevalence in the general North American population.'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Columna derecha: Mapa SVG + Leyenda */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                    
                    {/* Mapa SVG Mundial */}
                    <div className="flex-1 w-full min-w-0">
                      <svg
                        viewBox="0 0 1000 500"
                        className="w-full h-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label={lang === 'es' ? 'Mapa de prevalencia mundial de HTLV-1' : 'World map of HTLV-1 prevalence'}
                      >
                        {/* ── OCÉANOS (fondo) ── */}
                        <rect width="1000" height="500" fill="#E8F4FA" rx="8" />

                        {/* ═══ NORTE AMERICA ═══ */}
                        {/* Canada */}
                        <path d="M120,30 L200,25 L240,40 L260,60 L250,90 L220,100 L200,110 L170,105 L140,95 L115,80 L105,55 Z" fill="#CBD5E1" />
                        {/* USA */}
                        <path d="M115,100 L200,110 L250,100 L270,120 L275,155 L255,170 L200,175 L150,170 L110,160 L95,140 L100,118 Z" fill="#CBD5E1" />
                        {/* Mexico */}
                        <path d="M110,170 L200,175 L215,195 L210,220 L185,235 L155,230 L125,215 L105,195 L105,175 Z" fill="#CBD5E1" />

                        {/* ═══ CENTROAMERICA ═══ */}
                        <path d="M165,230 L200,225 L215,240 L205,255 L185,255 L168,245 Z" fill="#CBD5E1" />

                        {/* ═══ CARIBE — ENDÉMICO ═══ */}
                        <ellipse cx="215" cy="210" rx="12" ry="7" fill="#A10D3A" />
                        <ellipse cx="232" cy="207" rx="8" ry="5" fill="#A10D3A" />
                        <ellipse cx="245" cy="210" rx="6" ry="4" fill="#A10D3A" />
                        <circle cx="225" cy="220" r="5" fill="#A10D3A" />

                        {/* ═══ SUR AMERICA — ENDÉMICO ═══ */}
                        {/* Colombia / Venezuela top */}
                        <path d="M175,255 L225,250 L255,260 L265,280 L250,295 L225,295 L200,285 L175,275 Z" fill="#A10D3A" />
                        {/* Brasil / Peru / Bolivia — core endemic */}
                        <path d="M175,275 L250,295 L275,310 L285,345 L280,380 L255,400 L225,405 L195,395 L170,375 L155,345 L150,310 L160,285 Z" fill="#A10D3A" />
                        {/* Chile / Argentina */}
                        <path d="M180,395 L215,405 L225,435 L215,460 L195,470 L175,460 L168,435 L172,415 Z" fill="#CBD5E1" />

                        {/* ═══ EUROPA ═══ */}
                        <path d="M440,30 L510,25 L535,45 L545,70 L530,90 L500,100 L465,95 L440,78 L432,55 Z" fill="#CBD5E1" />
                        {/* UK */}
                        <path d="M430,40 L445,35 L450,55 L438,65 L428,55 Z" fill="#CBD5E1" />
                        {/* Iberia */}
                        <path d="M420,80 L455,75 L460,95 L450,110 L428,110 L415,95 Z" fill="#CBD5E1" />

                        {/* ═══ AFRICA — ENDÉMICO ═══ */}
                        {/* Norte Africa (no endémico) */}
                        <path d="M430,110 L540,105 L565,120 L565,165 L540,170 L430,170 L415,150 L418,125 Z" fill="#CBD5E1" />
                        {/* Africa Occidental */}
                        <path d="M420,170 L455,170 L465,195 L460,230 L440,250 L415,250 L400,230 L400,195 L410,175 Z" fill="#A10D3A" />
                        {/* Africa Central */}
                        <path d="M455,170 L540,170 L560,185 L565,220 L555,255 L530,270 L500,270 L470,255 L460,230 L465,195 Z" fill="#A10D3A" />
                        {/* Africa Oriental */}
                        <path d="M540,170 L575,165 L590,185 L595,220 L585,255 L565,270 L555,255 L565,220 L560,185 Z" fill="#A10D3A" />
                        {/* Africa del Sur */}
                        <path d="M460,255 L530,255 L565,270 L575,300 L565,335 L540,355 L510,360 L480,355 L455,335 L445,300 L450,270 Z" fill="#A10D3A" />

                        {/* Madagascar */}
                        <ellipse cx="595" cy="315" rx="12" ry="25" fill="#A10D3A" />

                        {/* ═══ ORIENTE MEDIO ═══ */}
                        {/* Irán Norte — ENDÉMICO */}
                        <path d="M600,100 L650,95 L670,108 L665,128 L640,135 L610,130 L595,118 Z" fill="#A10D3A" />
                        {/* Resto Oriente Medio */}
                        <path d="M555,120 L600,115 L595,118 L610,130 L605,155 L575,165 L555,155 L545,138 L548,122 Z" fill="#CBD5E1" />
                        {/* Arabia Saudita */}
                        <path d="M555,155 L605,155 L615,175 L610,195 L590,205 L565,200 L548,185 L548,165 Z" fill="#CBD5E1" />

                        {/* ═══ ASIA CENTRAL / INDIA ═══ */}
                        <path d="M650,80 L730,75 L755,95 L750,130 L720,145 L685,145 L660,135 L648,112 Z" fill="#CBD5E1" />
                        {/* India */}
                        <path d="M690,145 L730,145 L745,165 L745,200 L730,225 L710,235 L695,230 L680,210 L678,180 L683,158 Z" fill="#CBD5E1" />

                        {/* ═══ ASIA ORIENTAL ═══ */}
                        {/* China */}
                        <path d="M730,70 L820,65 L840,85 L845,120 L825,145 L780,155 L748,145 L735,125 L735,90 Z" fill="#CBD5E1" />
                        {/* Korea */}
                        <path d="M835,100 L855,95 L865,112 L855,128 L838,128 L832,112 Z" fill="#CBD5E1" />
                        {/* Japon — ENDÉMICO (Kyushu area) */}
                        <path d="M865,100 L880,95 L892,105 L895,125 L882,138 L866,138 L858,122 L860,108 Z" fill="#A10D3A" />
                        <ellipse cx="882" cy="145" rx="8" ry="12" fill="#A10D3A" />
                        <ellipse cx="873" cy="158" rx="6" ry="8" fill="#A10D3A" />

                        {/* ═══ SUDESTE ASIATICO ═══ */}
                        <path d="M770,165 L810,160 L825,175 L820,200 L800,210 L775,205 L762,188 Z" fill="#CBD5E1" />
                        {/* Indonesia */}
                        <path d="M790,215 L850,210 L870,222 L865,235 L825,240 L795,235 L783,225 Z" fill="#CBD5E1" />

                        {/* ═══ AUSTRALIA — ENDÉMICO (centro/norte) ═══ */}
                        {/* Australia completa */}
                        <path d="M810,270 L880,265 L920,280 L930,315 L920,350 L895,370 L860,375 L825,365 L800,340 L795,305 L800,278 Z" fill="#CBD5E1" />
                        {/* Zona endémica — centro norte */}
                        <ellipse cx="862" cy="310" rx="38" ry="28" fill="#A10D3A" />

                        {/* ═══ NUEVA ZELANDA ═══ */}
                        <ellipse cx="940" cy="380" rx="10" ry="20" fill="#CBD5E1" />
                      </svg>
                    </div>

                    {/* Leyenda */}
                    <div className="shrink-0 w-full sm:w-44 space-y-2">
                      <h4 className="font-bold text-xs text-[#003B49] leading-snug">
                        {lang === 'es'
                          ? 'Principales regiones con mayor prevalencia'
                          : 'Main regions with higher prevalence'}
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {[
                          lang === 'es' ? 'Japón' : 'Japan',
                          lang === 'es' ? 'África' : 'Africa',
                          lang === 'es' ? 'América del Sur' : 'South America',
                          lang === 'es' ? 'El Caribe' : 'The Caribbean',
                          lang === 'es' ? 'Australia' : 'Australia',
                          lang === 'es' ? 'Irán' : 'Iran',
                        ].map((region) => (
                          <li key={region} className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#A10D3A] shrink-0" />
                            <span>{region}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Nota aclaratoria */}
                  <p className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 leading-relaxed italic">
                    {lang === 'es'
                      ? 'La prevalencia de HTLV-1 no es uniforme dentro de un mismo país o región. Algunas localidades pueden presentar tasas de infección muy elevadas, mientras que otras zonas del mismo territorio pueden tener una prevalencia considerablemente menor.'
                      : 'HTLV-1 prevalence is not uniform within a single country or region. Certain localities can present very elevated infection rates, while other areas may have considerably lower prevalence.'}
                  </p>
                </div>

              </div>
            </section>


            {/* ═══════════════════════════════════════════════════════════
                SECCIÓN 3: SÍNTOMAS Y MANIFESTACIONES CLÍNICAS
            ════════════════════════════════════════════════════════════ */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="w-1 h-7 bg-[#087E8B] rounded-sm shrink-0" />
                <h2 className="text-lg sm:text-xl font-bold text-[#003B49]">
                  {lang === 'es' ? 'Síntomas y manifestaciones clínicas' : 'Symptoms and Clinical Manifestations'}
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {lang === 'es'
                  ? 'La mayoría de las personas infectadas por HTLV-1 no presenta síntomas. Sin embargo, algunas pueden desarrollar enfermedades asociadas al virus varias décadas después de la infección, principalmente leucemia/linfoma de células T del adulto (ATL/ATLL) y mielopatía asociada al HTLV-1/paraparesia espástica tropical (HAM/TSP).'
                  : 'Most people infected with HTLV-1 do not develop symptoms. However, some individuals may develop virus-associated diseases several decades after infection, primarily adult T-cell leukemia/lymphoma (ATL/ATLL) and HTLV-1-associated myelopathy/tropical spastic paraparesis (HAM/TSP).'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tarjeta ATL */}
                <div className="bg-[#FAF7F8] p-5 rounded-xl border border-rose-100 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full bg-[#FCE7F3] text-[#A10D3A] font-black text-xs uppercase tracking-wide">
                      ATL / ATLL
                    </span>
                    <h4 className="font-bold text-sm text-[#003B49]">
                      {lang === 'es' ? 'Síntomas de ATL/ATLL' : 'Symptoms of ATL/ATLL'}
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                    {[
                      lang === 'es' ? 'Fatiga' : 'Fatigue',
                      lang === 'es' ? 'Erupciones cutáneas' : 'Skin rashes',
                      lang === 'es' ? 'Ganglios inflamados' : 'Swollen lymph nodes',
                      lang === 'es' ? 'Estreñimiento' : 'Constipation',
                      lang === 'es' ? 'Confusión' : 'Confusion',
                      lang === 'es' ? 'Dolor óseo' : 'Bone pain',
                    ].map((s) => (
                      <div key={s} className="bg-white p-2.5 rounded-lg border border-slate-200/60 shadow-xs flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#A10D3A] text-sm">check_circle</span>
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tarjeta HAM/TSP */}
                <div className="bg-[#FAF8F5] p-5 rounded-xl border border-amber-100 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full bg-[#FEF3C7] text-[#B45309] font-black text-xs uppercase tracking-wide">
                      HAM / TSP
                    </span>
                    <h4 className="font-bold text-sm text-[#003B49]">
                      {lang === 'es' ? 'Síntomas de HAM/TSP' : 'Symptoms of HAM/TSP'}
                    </h4>
                  </div>
                  <div className="space-y-2 text-xs text-slate-700">
                    {[
                      lang === 'es' ? 'Debilidad o rigidez progresiva en piernas' : 'Progressive leg weakness or stiffness',
                      lang === 'es' ? 'Dolor de espalda' : 'Back pain',
                      lang === 'es' ? 'Incontinencia urinaria' : 'Urinary incontinence',
                      lang === 'es' ? 'Entumecimiento u hormigueo (neuropatía)' : 'Numbness or tingling (neuropathy)',
                    ].map((s) => (
                      <div key={s} className="bg-white p-2.5 rounded-lg border border-slate-200/60 shadow-xs flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#B45309] text-sm shrink-0">check_circle</span>
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>


            {/* ═══════════════════════════════════════════════════════════
                SECCIÓN 4: ENFERMEDADES ASOCIADAS
            ════════════════════════════════════════════════════════════ */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="w-1 h-7 bg-[#003B49] rounded-sm shrink-0" />
                <h2 className="text-lg sm:text-xl font-bold text-[#003B49]">
                  {lang === 'es' ? '¿Qué enfermedades puede causar el HTLV-1?' : 'What diseases can HTLV-1 cause?'}
                </h2>
              </div>

              <div className="p-4 rounded-xl bg-[#EAF4F7] border border-[#D5E8EE] flex items-center gap-3">
                <span className="material-symbols-outlined text-[#087E8B] text-2xl shrink-0">info</span>
                <p className="text-sm text-slate-800 leading-relaxed font-medium">
                  {lang === 'es'
                    ? 'Se estima que aproximadamente 1 de cada 20 personas infectadas (5%) desarrollará ATL/ATLL o HAM/TSP a lo largo de su vida.'
                    : 'It is estimated that approximately 1 in 20 infected individuals (5%) will develop ATL/ATLL or HAM/TSP during their lifetime.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* ATL */}
                <div className="bg-[#FAF7F8] p-5 rounded-xl border border-rose-100 space-y-3">
                  <h4 className="text-sm font-bold text-[#003B49] leading-snug">
                    {lang === 'es'
                      ? 'Leucemia/linfoma de células T del adulto (ATL/ATLL)'
                      : 'Adult T-cell leukemia/lymphoma (ATL/ATLL)'}
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {lang === 'es'
                      ? 'Es un tipo de cáncer de la sangre que afecta a los linfocitos T. Se clasifica en cuatro subtipos clínicos con distintas características y pronósticos:'
                      : 'A type of blood cancer affecting T lymphocytes. It is classified into four clinical subtypes with differing management and prognoses:'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      lang === 'es' ? 'Agudo' : 'Acute',
                      lang === 'es' ? 'Linfomatoso' : 'Lymphomatous',
                      lang === 'es' ? 'Crónico' : 'Chronic',
                      lang === 'es' ? 'Latente (Smoldering)' : 'Smoldering',
                    ].map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-white border border-rose-200 text-xs font-bold text-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* HAM/TSP */}
                <div className="bg-[#FAF8F5] p-5 rounded-xl border border-amber-100 space-y-3">
                  <h4 className="text-sm font-bold text-[#003B49] leading-snug">
                    {lang === 'es'
                      ? 'Mielopatía asociada al HTLV-1 / Paraparesia Espástica Tropical (HAM/TSP)'
                      : 'HTLV-1-associated myelopathy / Tropical Spastic Paraparesis (HAM/TSP)'}
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {lang === 'es'
                      ? 'Es una enfermedad neurológica que presenta características similares a la esclerosis múltiple. Provoca debilidad muscular progresiva y alteraciones del sistema nervioso que comprometen la movilidad y calidad de vida.'
                      : 'A neurological disease sharing features with multiple sclerosis. It causes progressive muscle weakness and spinal cord damage that impairs motor function and quality of life.'}
                  </p>
                </div>
              </div>

              {/* Otras condiciones */}
              <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 space-y-2">
                <h5 className="font-bold text-sm text-[#003B49]">
                  {lang === 'es' ? 'Otras condiciones inflamatorias y autoinmunes' : 'Other inflammatory and autoimmune conditions'}
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'es'
                    ? 'El HTLV-1 también podría estar relacionado con afecciones en estudio, entre las que se encuentran:'
                    : 'HTLV-1 may also be associated with conditions currently under investigation, including:'}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    lang === 'es' ? 'Dermatitis infectiva' : 'Infective dermatitis',
                    'Uveítis',
                    lang === 'es' ? 'Síndrome de Sjögren' : 'Sjögren\'s syndrome',
                  ].map((c) => (
                    <span key={c} className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-800">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </section>


            {/* ═══════════════════════════════════════════════════════════
                SECCIÓN 5: ¿CÓMO CAUSA ENFERMEDADES EL HTLV-1?
            ════════════════════════════════════════════════════════════ */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="w-1 h-7 bg-[#E5A400] rounded-sm shrink-0" />
                <h2 className="text-lg sm:text-xl font-bold text-[#003B49]">
                  {lang === 'es' ? '¿Cómo causa enfermedades el HTLV-1?' : 'How does HTLV-1 cause diseases?'}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    step: 1,
                    icon: 'coronavirus',
                    color: '#087E8B',
                    title: lang === 'es' ? 'Ingreso celular' : 'Cellular entry',
                    text: lang === 'es'
                      ? 'Infecta principalmente los linfocitos T CD4+ del sistema inmunitario.'
                      : 'Primarily enters and infects CD4+ T lymphocytes of the immune system.',
                  },
                  {
                    step: 2,
                    icon: 'change_circle',
                    color: '#087E8B',
                    title: lang === 'es' ? 'Transcripción inversa' : 'Reverse transcription',
                    text: lang === 'es'
                      ? 'Transforma su ARN viral en ADN dentro de la célula infectada.'
                      : 'Converts its viral genomic RNA into DNA within the host cell.',
                  },
                  {
                    step: 3,
                    icon: 'dna',
                    color: '#087E8B',
                    title: lang === 'es' ? 'Integración proviral' : 'Proviral integration',
                    text: lang === 'es'
                      ? 'Incorpora el ADN viral (provirus) de manera permanente al ADN celular.'
                      : 'Integrates viral DNA (provirus) permanently into host cell chromosomes.',
                  },
                  {
                    step: 4,
                    icon: 'warning',
                    color: '#A10D3A',
                    title: lang === 'es' ? 'Proliferación o daño' : 'Proliferation or injury',
                    text: lang === 'es'
                      ? 'Tras décadas, puede inducir proliferación anormal (ATL) o daño nervioso (HAM/TSP).'
                      : 'After decades, can cause abnormal proliferation (ATL) or neuroinflammation (HAM/TSP).',
                  },
                ].map(({ step, icon, color, title, text }) => (
                  <div key={step} className="bg-[#EAF4F7] p-5 rounded-xl border border-[#D5E8EE] flex flex-col space-y-3">
                    <div className="flex items-center justify-between">
                      <span
                        className="w-7 h-7 rounded-full text-white font-black text-xs flex items-center justify-center"
                        style={{ backgroundColor: color }}
                      >
                        {step}
                      </span>
                      <span className="material-symbols-outlined text-xl" style={{ color }}>
                        {icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#003B49]">{title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>


            {/* ═══════════════════════════════════════════════════════════
                SECCIÓN 6: ¿CÓMO SE TRANSMITE EL HTLV-1?
            ════════════════════════════════════════════════════════════ */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="w-1 h-7 bg-[#A10D3A] rounded-sm shrink-0" />
                <h2 className="text-lg sm:text-xl font-bold text-[#003B49]">
                  {lang === 'es' ? '¿Cómo se transmite el HTLV-1?' : 'How is HTLV-1 transmitted?'}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    icon: 'favorite',
                    color: '#B45309',
                    bg: '#FAF8F5',
                    border: 'border-amber-100',
                    title: lang === 'es' ? 'Transmisión sexual' : 'Sexual transmission',
                    text: lang === 'es'
                      ? 'Mediante relaciones sexuales vaginales, anales u orales sin protección.'
                      : 'Through unprotected vaginal, anal, or oral sexual relations.',
                  },
                  {
                    icon: 'child_care',
                    color: '#B45309',
                    bg: '#FAF8F5',
                    border: 'border-amber-100',
                    title: lang === 'es' ? 'Madre a hijo' : 'Mother-to-child',
                    text: lang === 'es'
                      ? 'Principalmente a través de la lactancia materna prolongada.'
                      : 'Primarily through prolonged breastfeeding.',
                  },
                  {
                    icon: 'vaccines',
                    color: '#B45309',
                    bg: '#FAF8F5',
                    border: 'border-amber-100',
                    title: lang === 'es' ? 'Sangre contaminada' : 'Contaminated blood',
                    text: lang === 'es'
                      ? 'Por compartir agujas o jeringas en el uso de drogas inyectables.'
                      : 'By sharing contaminated needles or syringes.',
                  },
                  {
                    icon: 'local_hospital',
                    color: '#B45309',
                    bg: '#FAF8F5',
                    border: 'border-amber-100',
                    title: lang === 'es' ? 'Transfusiones o trasplantes' : 'Transfusions and transplants',
                    text: lang === 'es'
                      ? 'De manera poco frecuente en centros con programas de tamizaje.'
                      : 'Infrequently, in healthcare settings with established blood screening.',
                  },
                ].map(({ icon, color, bg, border, title, text }) => (
                  <div key={title} className={`p-5 rounded-xl border ${border} space-y-3 flex flex-col`} style={{ backgroundColor: bg }}>
                    <span className="material-symbols-outlined text-3xl" style={{ color }}>{icon}</span>
                    <div>
                      <h4 className="font-bold text-sm text-[#003B49]">{title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>


            {/* ═══════════════════════════════════════════════════════════
                SECCIÓN 7: FACTORES DE RIESGO
            ════════════════════════════════════════════════════════════ */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="w-1 h-7 bg-[#087E8B] rounded-sm shrink-0" />
                <h2 className="text-lg sm:text-xl font-bold text-[#003B49]">
                  {lang === 'es' ? '¿Cuáles son los factores de riesgo?' : 'What are the risk factors?'}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: lang === 'es' ? 'Uso de drogas inyectables' : 'Injection drug use',
                    text: lang === 'es'
                      ? 'El uso de drogas inyectables y el intercambio de agujas o jeringas contaminadas.'
                      : 'Use of injection drugs and sharing needles or contaminated equipment.',
                  },
                  {
                    title: lang === 'es' ? 'Origen o residencia en zona endémica' : 'Endemic origin or residence',
                    text: lang === 'es'
                      ? 'Haber nacido o vivir en una región donde la prevalencia de HTLV-1 es elevada.'
                      : 'Being born or residing in a geographical area with elevated HTLV-1 prevalence.',
                  },
                ].map(({ title, text }) => (
                  <div key={title} className="bg-[#EAF4F7] p-5 rounded-xl border border-[#D5E8EE] flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#087E8B] text-2xl shrink-0 mt-0.5">check_box</span>
                    <div>
                      <h4 className="font-bold text-sm text-[#003B49]">{title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      )}

      {/* 2. PESTAÑA: PREGUNTAS FRECUENTES */}
      {activeTab === 'faqs' && (
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <FaqSection lang={lang} />
        </div>
      )}

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
