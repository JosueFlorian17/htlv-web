"use client";

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { lang, t } = useLanguage();

  const memberInstitutions = [
    {
      name: 'Universidad Peruana Cayetano Heredia',
      acronym: 'UPCH',
      location: 'Lima, Perú',
      url: 'https://www.cayetano.edu.pe',
      address: 'Av. Honorio Delgado 430, Urb. Ingeniería, Lima',
      phone: '(+51 1) 319-0000'
    },
    {
      name: 'Instituto de Medicina Tropical Alexander von Humboldt',
      acronym: 'IMTAvH',
      location: 'Lima, Perú',
      url: 'https://medicina.cayetano.edu.pe/imtavh/',
      address: 'Sede Clínica e Investigación en Retrovirología',
      phone: 'contacto.riii@cayetano.edu.pe'
    },
    {
      name: 'Imperial College London',
      acronym: 'ICL',
      location: 'Londres, Reino Unido',
      url: 'https://www.imperial.ac.uk',
      address: 'National Centre for Human Retrovirology',
      phone: 'imperial.ac.uk'
    }
  ];

  return (
    <main className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-between bg-white text-[#191c1e]">
      
      {/* Sección Principal (Inspirada fielmente en la imagen de QuEST LAC: Todo de un vistazo) */}
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 py-8 lg:py-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Columna Izquierda: Gráfica / Ilustración Visual Estilo QuEST */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[460px] aspect-4/3 lg:aspect-square rounded-3xl bg-gradient-to-br from-[#ffdada]/60 via-[#f8f9fb] to-[#ffdada]/30 border-2 border-[#dcc0c0] p-8 flex flex-col justify-between overflow-hidden shadow-xs">
              
              {/* Patrón arquitectónico de líneas diagonales como QuEST */}
              <div className="absolute -right-10 -bottom-10 w-72 h-72 opacity-15 pointer-events-none">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#5b0617]">
                  <line x1="0" y1="20" x2="200" y2="20" stroke="currentColor" strokeWidth="6" />
                  <line x1="0" y1="50" x2="200" y2="50" stroke="currentColor" strokeWidth="6" />
                  <line x1="0" y1="80" x2="200" y2="80" stroke="currentColor" strokeWidth="6" />
                  <line x1="0" y1="110" x2="200" y2="110" stroke="currentColor" strokeWidth="6" />
                  <line x1="0" y1="140" x2="200" y2="140" stroke="currentColor" strokeWidth="6" />
                  <line x1="0" y1="170" x2="200" y2="170" stroke="currentColor" strokeWidth="6" />
                </svg>
              </div>

              {/* Distintivo de la Red */}
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#5b0617] text-white flex items-center justify-center font-black text-2xl shadow-sm">
                  R
                </div>
                <div>
                  <span className="block text-[22px] font-black text-[#5b0617] leading-tight">
                    RIII-HTLV
                  </span>
                  <span className="text-[12px] font-bold text-[#897172] uppercase tracking-wider">
                    {lang === 'es' ? 'Consorcio Científico' : 'Scientific Consortium'}
                  </span>
                </div>
              </div>

              {/* Mensaje Focal */}
              <div className="space-y-3 relative z-10">
                <span className="inline-block px-3.5 py-1 bg-[#5b0617] text-white text-[13px] font-extrabold uppercase tracking-wider rounded-lg">
                  {lang === 'es' ? 'Evidencia & Salud Pública' : 'Evidence & Public Health'}
                </span>
                <h3 className="text-[26px] font-black text-[#191c1e] leading-snug">
                  {lang === 'es' 
                    ? 'Investigación de excelencia desde las regiones endémicas hacia el mundo' 
                    : 'Excellence in research from endemic regions to the world'}
                </h3>
              </div>

              {/* Enlace Directo */}
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[15px] font-extrabold text-[#5b0617] hover:underline"
                >
                  <span>{lang === 'es' ? 'Conocer Estructura y Miembros' : 'Explore Structure & Members'}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Contenido Exacto al Estilo QuEST LAC (Letras Grandes, sin scroll excesivo) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Título Principal */}
            <div>
              <h1 className="text-[34px] sm:text-[42px] font-black text-[#191c1e] tracking-tight leading-tight">
                {t('home_title')}
              </h1>
              
              {/* Descripción Oficial en 2 Oraciones */}
              <p className="text-[18px] sm:text-[20px] text-[#443333] leading-relaxed mt-3 font-normal">
                {t('home_desc')}
              </p>
            </div>

            {/* Dos Logotipos de la Red Lado a Lado (Como en QuEST LAC) */}
            <div className="flex flex-wrap items-center gap-6 py-2 border-y border-[#dcc0c0]/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#5b0617] text-white flex items-center justify-center font-bold text-lg">
                  R
                </div>
                <div>
                  <span className="block text-[17px] font-black text-[#5b0617]">RIII-HTLV</span>
                  <span className="text-[11.5px] font-bold text-[#897172] uppercase tracking-wider">Global Research</span>
                </div>
              </div>

              <div className="h-8 w-px bg-[#dcc0c0] hidden sm:block"></div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1d2b3a] text-white flex items-center justify-center font-bold text-lg">
                  UPCH
                </div>
                <div>
                  <span className="block text-[17px] font-black text-[#1d2b3a]">IMTAvH • Perú</span>
                  <span className="text-[11.5px] font-bold text-[#897172] uppercase tracking-wider">Coordinating Node</span>
                </div>
              </div>
            </div>

            {/* Puntos Clave con Iconos Circulares (Exacto al diseño de QuEST LAC) */}
            <div className="space-y-3.5 text-[16px] sm:text-[17px] text-[#332222]">
              <div className="flex items-start gap-3.5">
                <span className="material-symbols-outlined text-[#5b0617] text-2xl mt-0.5 flex-shrink-0">
                  language
                </span>
                <p className="leading-snug">{t('home_bullet1')}</p>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="material-symbols-outlined text-[#5b0617] text-2xl mt-0.5 flex-shrink-0">
                  biotech
                </span>
                <p className="leading-snug">{t('home_bullet2')}</p>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="material-symbols-outlined text-[#5b0617] text-2xl mt-0.5 flex-shrink-0">
                  verified
                </span>
                <p className="leading-snug">{t('home_bullet3')}</p>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="material-symbols-outlined text-[#5b0617] text-2xl mt-0.5 flex-shrink-0">
                  groups
                </span>
                <p className="leading-snug">{t('home_bullet4')}</p>
              </div>
            </div>

            {/* Botones de Navegación Rápida */}
            <div className="pt-2 flex flex-wrap gap-3.5">
              <Link 
                href="/htlv"
                className="bg-[#5b0617] text-white px-6 py-3 rounded-xl text-[16px] font-bold hover:opacity-95 transition-all shadow-xs flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">medical_information</span>
                <span>{t('home_btn_htlv')}</span>
              </Link>
              
              <Link 
                href="/pacientes"
                className="bg-[#ffdada] text-[#5b0617] border border-[#5b0617]/30 px-6 py-3 rounded-xl text-[16px] font-bold hover:bg-[#ffdada]/70 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">favorite</span>
                <span>{t('home_btn_patients')}</span>
              </Link>

              <Link 
                href="/about"
                className="bg-[#f8f9fb] border border-[#dcc0c0] text-[#332222] hover:text-[#5b0617] px-6 py-3 rounded-xl text-[16px] font-bold hover:bg-white transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">account_tree</span>
                <span>{t('home_btn_members')}</span>
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* Barra Inferior de Instituciones Miembros (Estilo Barra QuEST: Fondo Sólido con Nombres y Enlaces) */}
      <div className="w-full bg-[#5b0617] text-white py-6 px-6 md:px-12 border-t-2 border-[#3d030e]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-[13.5px]">
          
          {/* Nodo UPCH */}
          <div className="space-y-1">
            <a 
              href="https://www.cayetano.edu.pe" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold text-[15px] text-[#ffdada] hover:underline flex items-center gap-1.5"
            >
              <span>Universidad Peruana Cayetano Heredia</span>
              <span className="material-symbols-outlined text-[15px]">open_in_new</span>
            </a>
            <p className="text-white/80">Av. Honorio Delgado 430, Urb. Ingeniería, Lima, Perú</p>
            <p className="text-white/70 text-[12.5px]">(+51 1) 319-0000</p>
          </div>

          {/* Nodo IMTAvH */}
          <div className="space-y-1">
            <a 
              href="https://medicina.cayetano.edu.pe/imtavh/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold text-[15px] text-[#ffdada] hover:underline flex items-center gap-1.5"
            >
              <span>Instituto de Medicina Tropical Alexander von Humboldt</span>
              <span className="material-symbols-outlined text-[15px]">open_in_new</span>
            </a>
            <p className="text-white/80">Sede Científica Central de la Red RIII-HTLV</p>
            <p className="text-white/70 text-[12.5px]">contacto.riii@cayetano.edu.pe</p>
          </div>

          {/* Contacto & Nodos Internacionales */}
          <div className="space-y-1 md:text-right">
            <p className="font-bold text-[15px] text-[#ffdada]">Nodos Colaboradores Internacionales</p>
            <p className="text-white/80">Imperial College London • Pasteur • Fiocruz • ISCIII • St. Marianna</p>
            <div className="pt-1">
              <Link href="/contact" className="text-[#ffdada] underline font-bold hover:text-white">
                {lang === 'es' ? 'Contáctanos / Redes Oficiales' : 'Contact Us / Official Channels'}
              </Link>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}