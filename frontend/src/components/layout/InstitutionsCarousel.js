"use client";

import { useLanguage } from '../../context/LanguageContext';

export default function InstitutionsCarousel() {
  const { lang } = useLanguage();

  const logos = [
    {
      src: "/logos/cayetano_heredia_logo.png",
      alt: "Universidad Peruana Cayetano Heredia"
    },
    {
      src: "/logos/imperial_college_logo.png",
      alt: "Imperial College London"
    },
    {
      src: "/logos/unsaac_logo.png",
      alt: "Universidad Nacional de San Antonio Abad del Cusco"
    },
    {
      src: "/logos/unu_logo.png",
      alt: "Universidad Nacional de Ucayali"
    },
    {
      src: "/logos/uw_logo.png",
      alt: "University of Washington"
    },
    {
      src: "/logos/st_marianna_logo.png",
      alt: "St. Marianna University School of Medicine"
    }
  ];

  // Cuadruplicamos para garantizar un flujo infinito fluido sin cortes
  const displayLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="w-full bg-slate-50 border-t border-slate-200/80 py-8 sm:py-10 overflow-hidden pointer-events-none select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase tracking-wide text-[#003B49]">
          {lang === 'es' 
            ? 'Miembros de la Red Internacional de Innovación e Investigación en HTLV' 
            : 'Members of the International Innovation & Research Network on HTLV'}
        </h3>
      </div>

      {/* Ticker continuo exclusivo de logos */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_60px,_black_calc(100%-60px),transparent_100%)]">
        <div className="animate-marquee flex items-center gap-14 sm:gap-20 md:gap-24 py-3">
          {displayLogos.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center shrink-0 px-3"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-14 sm:h-16 md:h-20 w-auto max-w-[200px] sm:max-w-[260px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
