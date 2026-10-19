"use client";

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { lang, t } = useLanguage();

  return (
    <main className="w-full bg-white text-slate-900">
      
      {/* 1. SECCIÓN SUPERIOR HERO CON FOTO DE FONDO */}
      <section className="w-full relative min-h-[480px] md:min-h-[540px] flex items-center py-14 md:py-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 text-white overflow-hidden">
        {/* Imagen de fondo */}
        <img 
          src="/hero-bg.jpg" 
          alt="Red Internacional de Investigación e Innovación en HTLV"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Capa de contraste con degradado sutil para legibilidad impecable (orientado hacia la derecha donde está el texto) */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#001D2C]/95 via-[#002538]/85 to-[#003B49]/40"></div>

        <div className="max-w-7xl w-full mx-auto relative z-10 flex justify-end">
          <div className="max-w-xl lg:max-w-2xl space-y-5 sm:space-y-6 flex flex-col items-end text-right">
            
            {/* Logo dinámico por idioma (Español / Inglés) sin recuadro */}
            <img 
              src={lang === 'es' ? "/logos/hero_logo_es.png" : "/logos/hero_logo_en.png"}
              alt={lang === 'es' ? "Logo Red HTLV" : "HTLV Network Logo"}
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain drop-shadow-md"
            />

            {/* Titular en blanco (la fuente y negrita son administradas globalmente) */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-extrabold text-white drop-shadow-md">
              {lang === 'es'
                ? 'Red Internacional de Investigación e Innovación en HTLV'
                : 'International Research and Innovation Network on HTLV'}
            </h1>

            {/* Botón Mostaza */}
            <div className="pt-2">
              <Link
                href="/about?tab=quienes-somos"
                className="inline-flex items-center justify-center bg-[#E5A400] hover:bg-[#CCA300] text-[#002538] font-bold px-7 py-3.5 rounded-lg text-sm sm:text-base transition-colors shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A400] focus-visible:ring-offset-2"
              >
                {lang === 'es' ? 'Conoce más' : 'Learn more'}
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECCIÓN INFERIOR: 1 VIDEO DE YOUTUBE + TEXTO CORTO CON BULLETS */}
      <section className="w-full py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Columna Izquierda: 1 Video de YouTube */}
            <div className="lg:col-span-6 space-y-4">
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/1NqgEEReKhs?rel=0"
                  title={lang === 'es' ? "¿Quiénes somos?" : "Who are we?"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="text-center pt-1">
                <h3 className="font-extrabold text-xl sm:text-2xl text-[#003B49] tracking-tight">
                  {lang === 'es' ? '¿Quiénes somos?' : '¿Who are we?'}
                </h3>
              </div>
            </div>

            {/* Columna Derecha: Texto Corto con los Bullets y Botón */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003B49] leading-tight">
                  {lang === 'es' ? '¿Qué es la red HTLV?' : 'What is the HTLV network?'}
                </h2>
                <p className="text-base text-slate-700 leading-relaxed mt-2">
                  {lang === 'es'
                    ? 'La Red Internacional de Investigación e Innovación en HTLV articula a los principales centros de referencia en América Latina, Europa y Asia para transformar la respuesta médica y social ante el HTLV-1 y HTLV-2.'
                    : 'The International Research and Innovation Network on HTLV coordinates leading reference centers across Latin America, Europe, and Asia to transform the clinical and social response to HTLV-1 and HTLV-2.'}
                </p>
              </div>

              {/* Bullets */}
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#A10D3A] text-xl shrink-0 mt-0.5">
                    biotech
                  </span>
                  <p className="leading-relaxed">
                    {lang === 'es' 
                      ? 'Investiga sobre la virología molecular, epidemiología y patogénesis del virus.' 
                      : 'Researches molecular virology, epidemiology, and viral pathogenesis.'}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#087E8B] text-xl shrink-0 mt-0.5">
                    hub
                  </span>
                  <p className="leading-relaxed">
                    {lang === 'es'
                      ? 'Promueve sinergias clínicas multicéntricas en Paraparesia Espástica Tropical (HAM/TSP) y Leucemia/Linfoma (ATL).'
                      : 'Promotes multicenter clinical synergies in HAM/TSP and Adult T-cell Leukemia (ATL).'}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#E5A400] text-xl shrink-0 mt-0.5">
                    verified
                  </span>
                  <p className="leading-relaxed">
                    {lang === 'es'
                      ? 'Estandariza protocolos de diagnóstico oportuno, carga proviral y prevención de la transmisión vertical.'
                      : 'Standardizes early diagnosis protocols, proviral load assays, and vertical transmission prevention.'}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#003B49] text-xl shrink-0 mt-0.5">
                    groups
                  </span>
                  <p className="leading-relaxed">
                    {lang === 'es'
                      ? 'Fortalece las capacidades regionales y orienta con evidencia científica a los tomadores de decisiones.'
                      : 'Empowers regional health systems and guides policymakers with robust scientific evidence.'}
                  </p>
                </div>
              </div>

              {/* Botón que lleva a Conoce más */}
              <div className="pt-2">
                <Link
                  href="/about?tab=quienes-somos"
                  className="inline-flex items-center gap-2 bg-[#003B49] hover:bg-[#002B36] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087E8B] focus-visible:ring-offset-2"
                >
                  <span>{lang === 'es' ? 'Conoce más sobre la Red' : 'Learn more about the Network'}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}