"use client";

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { lang, t } = useLanguage();

  return (
    <main className="w-full bg-white text-[#191c1e]">
      
      {/* 1. SECCIÓN SUPERIOR HERO (Exacta a la Imagen 2 de QuEST LAC) */}
      <section className="w-full bg-[#003B49] py-12 md:py-16 px-6 md:px-12 text-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Composión Fotográfica Hexagonal (Igual a la imagen 2 con fotos de clínica, centro de salud y laboratorio) */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <div className="relative w-full max-w-[620px] aspect-16/10 sm:aspect-16/9 flex items-center justify-center">
                
                {/* Elementos geométricos de fondo en mostaza, turquesa y guinda */}
                <div className="absolute left-4 top-6 w-32 h-32 bg-[#E5A400] opacity-80 -skew-x-12 rounded-3xl transform -rotate-6"></div>
                <div className="absolute left-28 bottom-4 w-32 h-32 bg-[#087E8B] opacity-80 -skew-x-12 rounded-3xl transform rotate-12"></div>
                
                {/* Rejilla de fotos de actividades de salud y clínicas */}
                <div className="relative z-10 grid grid-cols-3 gap-3 w-full h-full p-2">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                    <img 
                      src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80" 
                      alt="Centro de salud y atención comunitaria"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 transform -translate-y-3">
                    <img 
                      src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80" 
                      alt="Atención médica y cuidado de pacientes"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 transform translate-y-3">
                    <img 
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" 
                      alt="Laboratorio de investigación molecular"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Tarjeta de Titular con Botón Mostaza (Exacto a la tarjeta blanca flotante de la imagen 2) */}
            <div className="lg:col-span-5">
              <div className="bg-[#f8f9fb] text-[#003B49] p-8 md:p-10 rounded-3xl shadow-2xl border-2 border-white/30 space-y-6">
                
                <div className="space-y-4">
                  <div>
                    <img 
                      src={lang === 'es' ? "/logos/LogoRedHTLV_PNG_ES.png" : "/logos/LogoHTLVNetwork_PNG_EN.png"}
                      alt={lang === 'es' ? "Logo Red HTLV" : "HTLV Network Logo"}
                      className="h-12 sm:h-14 w-auto object-contain"
                    />
                  </div>
                  <h1 className="text-[25px] sm:text-[30px] font-black leading-snug text-[#003B49]">
                    {lang === 'es'
                      ? 'Generando Evidencia de Calidad para la Transformación de la Salud en Poblaciones Afectadas'
                      : 'Generating Quality Evidence for Health Transformation in HTLV-Affected Populations'}
                  </h1>
                </div>

                <p className="text-[15.5px] text-[#443333] leading-relaxed">
                  {lang === 'es'
                    ? 'Alianza internacional de centros de excelencia liderada por el Instituto de Medicina Tropical Alexander von Humboldt (UPCH) para el diagnóstico temprano, la investigación clínica y el cuidado integral.'
                    : 'International alliance of excellence led by Alexander von Humboldt Tropical Medicine Institute (UPCH) for early diagnosis, clinical research, and patient care.'}
                </p>

                <div>
                  <Link
                    href="/about?tab=quienes-somos"
                    className="inline-block bg-[#E5A400] hover:bg-[#cca300] text-[#003B49] font-black px-8 py-3.5 rounded-xl text-[15.5px] transition-all shadow-md hover:scale-105 cursor-pointer"
                  >
                    {lang === 'es' ? 'Conoce más' : 'Learn more'}
                  </Link>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. SECCIÓN INFERIOR: 1 VIDEO DE YOUTUBE + TEXTO CORTO CON BULLETS Y BOTÓN "CONOCE MÁS" (Requerimiento explícito) */}
      <section className="w-full py-14 px-6 md:px-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Columna Izquierda: 1 Video de YouTube (Como se solicitó: solo pon 1 video) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/n3GzS_WnQ0I?rel=0"
                  title="Video RIII-HTLV"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="text-center">
                <h3 className="font-black text-[18px] text-[#003B49]">
                  {lang === 'es' ? 'Video Institucional y Objetivos de la Red RIII-HTLV' : 'RIII-HTLV Institutional Video & Objectives'}
                </h3>
                <p className="text-[13.5px] text-[#087E8B] font-bold mt-0.5">
                  UPCH • Imperial College • Pasteur • Fiocruz • ISCIII • St. Marianna
                </p>
              </div>
            </div>

            {/* Columna Derecha: Texto Corto con los Bullets y Botón "Conoce más" */}
            <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-3xl border-2 border-gray-200 shadow-sm space-y-6">
              
              <div>
                <span className="text-[12.5px] font-black uppercase tracking-widest text-[#087E8B] block mb-1">
                  {lang === 'es' ? 'Presentación de la Red' : 'Network Overview'}
                </span>
                <h2 className="text-[26px] sm:text-[30px] font-black text-[#003B49] leading-tight">
                  {lang === 'es' ? '¿Qué es la Red RIII-HTLV?' : 'What is the RIII-HTLV Network?'}
                </h2>
                <p className="text-[16px] text-[#443333] leading-relaxed mt-2">
                  {lang === 'es'
                    ? 'La Red Internacional de Investigación e Innovación en HTLV articula a los principales centros de referencia en América Latina, Europa y Asia para transformar la respuesta médica y social ante el HTLV-1 y HTLV-2.'
                    : 'The International Research and Innovation Network on HTLV coordinates leading reference centers across Latin America, Europe, and Asia to transform the clinical and social response to HTLV-1 and HTLV-2.'}
                </p>
              </div>

              {/* Bullets solicitados */}
              <div className="space-y-3.5 text-[15.5px] text-[#332222]">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#A10D3A] text-2xl flex-shrink-0 mt-0.5">
                    biotech
                  </span>
                  <p className="leading-snug">
                    {lang === 'es' 
                      ? 'Investiga sobre la virología molecular, epidemiología y patogénesis del virus.' 
                      : 'Researches molecular virology, epidemiology, and viral pathogenesis.'}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#087E8B] text-2xl flex-shrink-0 mt-0.5">
                    hub
                  </span>
                  <p className="leading-snug">
                    {lang === 'es'
                      ? 'Promueve sinergias clínicas multicéntricas en Paraparesia Espástica Tropical (HAM/TSP) y Leucemia/Linfoma (ATL).'
                      : 'Promotes multicenter clinical synergies in HAM/TSP and Adult T-cell Leukemia (ATL).'}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#E5A400] text-2xl flex-shrink-0 mt-0.5">
                    verified
                  </span>
                  <p className="leading-snug">
                    {lang === 'es'
                      ? 'Estandariza protocolos de diagnóstico oportuno, carga proviral y prevención de la transmisión vertical.'
                      : 'Standardizes early diagnosis protocols, proviral load assays, and vertical transmission prevention.'}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#003B49] text-2xl flex-shrink-0 mt-0.5">
                    groups
                  </span>
                  <p className="leading-snug">
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
                  className="inline-flex items-center gap-2 bg-[#003B49] hover:bg-[#087E8B] text-white px-7 py-3.5 rounded-xl text-[15px] font-black transition-all shadow-md cursor-pointer"
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