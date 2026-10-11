"use client";

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { lang, t } = useLanguage();

  return (
    <main className="w-full bg-white text-slate-900">
      
      {/* 1. SECCIÓN SUPERIOR HERO */}
      <section className="w-full bg-[#003B49] py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Composición Fotográfica */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <div className="relative w-full max-w-xl aspect-16/10 sm:aspect-16/9 flex items-center justify-center">
                
                {/* Elementos geométricos sutiles de fondo */}
                <div className="absolute left-4 top-6 w-32 h-32 bg-[#E5A400]/70 -skew-x-12 rounded-2xl transform -rotate-6"></div>
                <div className="absolute left-28 bottom-4 w-32 h-32 bg-[#087E8B]/70 -skew-x-12 rounded-2xl transform rotate-12"></div>
                
                {/* Rejilla de fotos de actividades de salud y clínicas */}
                <div className="relative z-10 grid grid-cols-3 gap-3 w-full h-full p-2">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-white/20">
                    <img 
                      src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80" 
                      alt="Centro de salud y atención comunitaria"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg border border-white/20">
                    <img 
                      src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80" 
                      alt="Atención médica y cuidado de pacientes"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg border border-white/20">
                    <img 
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" 
                      alt="Laboratorio de investigación molecular"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Tarjeta de Titular con Botón Mostaza */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 text-[#003B49] p-6 sm:p-8 rounded-2xl shadow-lg border border-white/40 space-y-6">
                
                <div className="space-y-4">
                  <div>
                    <img 
                      src={lang === 'es' ? "/logos/LogoRedHTLV_PNG_ES.png" : "/logos/LogoHTLVNetwork_PNG_EN.png"}
                      alt={lang === 'es' ? "Logo Red HTLV" : "HTLV Network Logo"}
                      className="h-12 sm:h-14 w-auto object-contain"
                    />
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-[#003B49]">
                    {lang === 'es'
                      ? 'Generando Evidencia de Calidad para la Transformación de la Salud en Poblaciones Afectadas'
                      : 'Generating Quality Evidence for Health Transformation in HTLV-Affected Populations'}
                  </h1>
                </div>

                <p className="text-base text-slate-700 leading-relaxed">
                  {lang === 'es'
                    ? 'Alianza internacional de centros de excelencia liderada por el Instituto de Medicina Tropical Alexander von Humboldt (UPCH) para el diagnóstico temprano, la investigación clínica y el cuidado integral.'
                    : 'International alliance of excellence led by Alexander von Humboldt Tropical Medicine Institute (UPCH) for early diagnosis, clinical research, and patient care.'}
                </p>

                <div>
                  <Link
                    href="/about?tab=quienes-somos"
                    className="inline-flex items-center justify-center bg-[#E5A400] hover:bg-[#CCA300] text-[#002538] font-semibold px-6 py-3 rounded-lg text-sm transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A400] focus-visible:ring-offset-2"
                  >
                    {lang === 'es' ? 'Conoce más' : 'Learn more'}
                  </Link>
                </div>

              </div>
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
                  src="https://www.youtube-nocookie.com/embed/n3GzS_WnQ0I?rel=0"
                  title="Video RIII-HTLV"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-base text-[#003B49]">
                  {lang === 'es' ? 'Video Institucional y Objetivos de la Red RIII-HTLV' : 'RIII-HTLV Institutional Video & Objectives'}
                </h3>
                <p className="text-xs text-[#087E8B] font-semibold mt-1">
                  UPCH • Imperial College • Pasteur • Fiocruz • ISCIII • St. Marianna
                </p>
              </div>
            </div>

            {/* Columna Derecha: Texto Corto con los Bullets y Botón */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#003B49] leading-tight">
                  {lang === 'es' ? '¿Qué es la Red RIII-HTLV?' : 'What is the RIII-HTLV Network?'}
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