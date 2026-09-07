"use client";

import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  // Micro-interacciones de scroll-reveal para las secciones
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative h-[650px] lg:h-[800px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDByYMPLtKYqCEMGVUZD4o194qEJpgPjM0_qBzlngvraRPukzJpY95IgYZ5VBPv8Kq92t2nHLvukNCwr-UrX8WV1F3Gkj-z3LaKKU-VMpi8YZU7TTvEoYSVczw5QHu7OhC1uq1bdn8a-EWLjgjf0DyIYiFOSgeCNHUPC7s1-3wqq37gmVYrEYOHgkHCJJa7Yr3blmN_kpEepvFxIrdlVx1Z_VDkoF-2tYRmQiWD7g7weKugXpSkPTG0nYqMf8yENcfuTshV506gN_U")' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/40 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto w-full px-margin-mobile md:px-margin-desktop scroll-reveal">
            <div className="max-w-3xl">
              <h1 className="font-display text-display text-primary leading-tight mb-6">
                Red Internacional de Investigación e Innovación en HTLV
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl">
                Conectando la ciencia, la innovación y la colaboración internacional para avanzar en la comprensión y el tratamiento de las patologías asociadas al HTLV en todo el mundo.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md shadow-lg hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer">
                  Conocer sobre HTLV
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>
                <Link href="/research" className="bg-white/80 backdrop-blur border border-outline-variant text-primary px-8 py-4 rounded-lg font-label-md hover:bg-white transition-all cursor-pointer">
                  Explorar Investigación
                </Link>
                <Link href="/contact" className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-lg font-label-md hover:bg-secondary-fixed transition-all cursor-pointer">
                  Unirse a la Red
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-section-gap bg-surface">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop scroll-reveal">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-6">
                <span className="text-primary font-bold tracking-widest uppercase text-label-sm mb-4 block">Sobre la Red</span>
                <h2 className="font-headline-lg text-headline-lg mb-8 text-[#191c1e]">Impulsando el Descubrimiento Científico Global sobre HTLV</h2>
                <div className="space-y-6 text-on-surface-variant leading-relaxed text-body-lg">
                  <p>La RIII-HTLV es una plataforma interdisciplinaria dedicada a fomentar la cooperación global entre virólogos, clínicos e investigadores líderes. Nuestra misión es acelerar estrategias de investigación innovadoras para el Virus Linfotrópico de Células T Humanas (HTLV).</p>
                  <p>Al aprovechar la experiencia colectiva y el intercambio de datos de alta calidad, cerramos la brecha entre la ciencia de laboratorio y los resultados clínicos, asegurando que los avances académicos se traduzcan en innovaciones que salvan vidas para los pacientes en todo el mundo.</p>
                </div>
              </div>
              <div className="md:col-span-6 relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-sm">
                  <img className="w-full h-full object-cover" alt="Investigador científico" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU9J5Ywe8zuxZhEIF-eF1CwVXkzqvCzJAqw4JeCxv6wRWHsUSr8sx5qTAzsxlp1bzxZ1s2QU5JAQS9asLX4KeWGPmKpmSC40i6gGfP4HZPEj6wknbzQfarJGDuCHwPMbZgEA0Y8llkwW-D_jFH2NnDVxexP1pwIbDK99IsiziYJgExeBz3NDfr2o4EjiU5lI3k1KIypfBV4AiCHkwd9ADlF-wewbddPVQBrRgPK1BZa95igtDQh6YwVywhE6uG8W6Cprc3yveXr0Q" />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-primary-container p-8 rounded-xl hidden lg:block max-w-[280px]">
                  <p className="text-on-primary-container font-headline-md italic mb-2">"La colaboración es la clave para resolver desafíos virológicos complejos."</p>
                  <p className="text-on-primary-container/80 text-label-md">— Comité Ejecutivo Global</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access Bento Grid */}
        <section className="py-section-gap bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop scroll-reveal">
            <h2 className="font-headline-lg text-headline-lg text-center mb-16 text-[#191c1e]">Ecosistema de Recursos Globales</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <Link href="/about" className="group bg-surface p-8 rounded-xl border border-outline-variant flex flex-col items-center text-center transition-all hover:shadow-lg hover:border-primary">
                <span className="material-symbols-outlined text-primary/60 text-4xl mb-4 transition-transform group-hover:scale-110 group-hover:text-primary">coronavirus</span>
                <h3 className="font-label-md text-label-md font-bold text-on-surface">HTLV</h3>
              </Link>
              <Link href="/research" className="group bg-surface p-8 rounded-xl border border-outline-variant flex flex-col items-center text-center transition-all hover:shadow-lg hover:border-primary">
                <span className="material-symbols-outlined text-primary/60 text-4xl mb-4 transition-transform group-hover:scale-110 group-hover:text-primary">biotech</span>
                <h3 className="font-label-md text-label-md font-bold text-on-surface">Investigación</h3>
              </Link>
              <Link href="/repository" className="group bg-surface p-8 rounded-xl border border-outline-variant flex flex-col items-center text-center transition-all hover:shadow-lg hover:border-primary">
                <span className="material-symbols-outlined text-primary/60 text-4xl mb-4 transition-transform group-hover:scale-110 group-hover:text-primary">folder_shared</span>
                <h3 className="font-label-md text-label-md font-bold text-on-surface">Repositorio</h3>
              </Link>
              <Link href="/resources" className="group bg-surface p-8 rounded-xl border border-outline-variant flex flex-col items-center text-center transition-all hover:shadow-lg hover:border-primary">
                <span className="material-symbols-outlined text-primary/60 text-4xl mb-4 transition-transform group-hover:scale-110 group-hover:text-primary">library_books</span>
                <h3 className="font-label-md text-label-md font-bold text-on-surface">Recursos</h3>
              </Link>
              <Link href="/opportunities" className="group bg-surface p-8 rounded-xl border border-outline-variant flex flex-col items-center text-center transition-all hover:shadow-lg hover:border-primary">
                <span className="material-symbols-outlined text-primary/60 text-4xl mb-4 transition-transform group-hover:scale-110 group-hover:text-primary">work</span>
                <h3 className="font-label-md text-label-md font-bold text-on-surface">Oportunidades</h3>
              </Link>
              <Link href="/foro" className="group bg-surface p-8 rounded-xl border border-outline-variant flex flex-col items-center text-center transition-all hover:shadow-lg hover:border-primary">
                <span className="material-symbols-outlined text-primary/60 text-4xl mb-4 transition-transform group-hover:scale-110 group-hover:text-primary">forum</span>
                <h3 className="font-label-md text-label-md font-bold text-on-surface">Foro</h3>
              </Link>
            </div>
          </div>
        </section>

        {/* News & Events */}
        <section className="py-section-gap">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop scroll-reveal">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-[#191c1e]">Actualizaciones de la Red</h2>
                <p className="text-on-surface-variant mt-2">Últimas noticias y próximos encuentros científicos.</p>
              </div>
              <Link className="text-primary font-bold text-label-md flex items-center gap-1 hover:underline cursor-pointer" href="/news">
                Ver Todo
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* News Feed */}
              <div className="lg:col-span-8 space-y-8">
                {/* News Card 1 */}
                <Link href="/news" className="group flex flex-col md:flex-row bg-surface rounded-xl overflow-hidden border border-outline-variant hover:border-primary transition-colors cursor-pointer">
                  <div className="md:w-1/3 aspect-[4/3] overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Mesa de laboratorio científico" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd4nt3JsQUi4G4c3_EZ_H0ySDeO2QBlS6g2cnYUSLeZlYxHaA2oYREkon85s4RvFZINz7-CNDBhILddgo8SDnLqAudQC9omIMJyPI4cWjlMLCJD2Aa8kW94DBq1grMfNQJKmk__zgat7dwCF1FxdXQDrSpnwThJ2uUOiboGfxFZWfZsZjc1A8Ao-HLevaEY4zxY0xMe_3tgmbBzPvgueW4upV1s1u37dfz5hKvk-BTCID0qtFs69GyN2QZzxhSWFcS8ehHZ4_IGBg" />
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col justify-center">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-label-sm w-fit mb-4 uppercase tracking-wider">Investigación</span>
                    <h3 className="font-headline-md text-headline-md mb-2 group-hover:text-primary transition-colors text-[#191c1e]">Avance en Técnicas de Tipificación Molecular de HTLV-1</h3>
                    <p className="text-on-surface-variant text-body-md line-clamp-2">Nuevos hallazgos sugieren que los protocolos de secuenciación avanzada pueden mejorar significativamente la precisión de la estratificación de pacientes...</p>
                    <div className="mt-4 flex items-center gap-4 text-label-sm text-on-surface-variant/70">
                      <span>24 de Octubre, 2024</span>
                      <span>•</span>
                      <span>5 min de lectura</span>
                    </div>
                  </div>
                </Link>
                {/* News Card 2 */}
                <Link href="/news" className="group flex flex-col md:flex-row bg-surface rounded-xl overflow-hidden border border-outline-variant hover:border-primary transition-colors cursor-pointer">
                  <div className="md:w-1/3 aspect-[4/3] overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Microscopio digital de alta tecnología" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABjYEK4eEoXBt02mWJqVR8Ivb6nM1e4IesXgpHSog7UlmStPxRO910TBvhdP52mZlVs8iKzs3sgwHYvVAdKgc0pBNtS6Xk2Q2rOdxGsWtCqn3Hy-1JWBgv74PHFw0RKrw9A1Qj6KQQc6QKIYu9lO6692ngoB8808WiwaMUkD0WG-2xCIpk4qoi9NvfoDSKPy6k-ym-mGhb868FzxXJBtlDAuj_B0OqWrVdrQRJo0IiwE8TcRug02bYZVkW36Z8uZ73ARPjpaGWdlA" />
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col justify-center">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-label-sm w-fit mb-4 uppercase tracking-wider">Políticas Globales</span>
                    <h3 className="font-headline-md text-headline-md mb-2 group-hover:text-primary transition-colors text-[#191c1e]">RIII-HTLV se Une al Consorcio Internacional de Salud</h3>
                    <p className="text-on-surface-variant text-body-md line-clamp-2">La alianza tiene como objetivo estandarizar el diagnóstico de laboratorio en diversos sistemas de salud en el Hemisferio Sur...</p>
                    <div className="mt-4 flex items-center gap-4 text-label-sm text-on-surface-variant/70">
                      <span>18 de Octubre, 2024</span>
                      <span>•</span>
                      <span>3 min de lectura</span>
                    </div>
                  </div>
                </Link>
                {/* News Card 3 */}
                <Link href="/news" className="group flex flex-col md:flex-row bg-surface rounded-xl overflow-hidden border border-outline-variant hover:border-primary transition-colors cursor-pointer">
                  <div className="md:w-1/3 aspect-[4/3] overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Colaboración científica" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuB_uL1vEDoo9gLLKIPSgqbeghSj-c5jet9ZS5Ym6y-vJsx4PTWHqhKsxObrpaUiuSFg3NMN8RG-8ZxFzUzekAU9El3VxdSmEGiHrkmC4YiBYCq1KfQdFAofR8W7MTmC-WRDJWeQKjG6mZT43EWVYMnrE6Y-kMbASa0vnaVL7_zv_PAEskACUMxuPHtIQ8Pz5phgVUZh2SP-zsaUW3NWCp2NShaMzDciKzgc3NFHyV6Qe5DJsyrh6YYOaq2iYJKNF5gdrE4BpGBsU" />
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col justify-center">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-label-sm w-fit mb-4 uppercase tracking-wider">Comunidad</span>
                    <h3 className="font-headline-md text-headline-md mb-2 group-hover:text-primary transition-colors text-[#191c1e]">Convocatoria de Becas de Investigación Abierta para 2025</h3>
                    <p className="text-on-surface-variant text-body-md line-clamp-2">Se invita a investigadores principiantes a postularse a la prestigiosa Beca de Innovación HTLV en los centros participantes...</p>
                    <div className="mt-4 flex items-center gap-4 text-label-sm text-on-surface-variant/70">
                      <span>12 de Octubre, 2024</span>
                      <span>•</span>
                      <span>4 min de lectura</span>
                    </div>
                  </div>
                </Link>
              </div>
              {/* Events Feed */}
              <div className="lg:col-span-4">
                <div className="bg-surface-container-high p-8 rounded-2xl h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline-md text-headline-md mb-8 flex items-center gap-2 text-[#191c1e]">
                      <span className="material-symbols-outlined text-primary">event</span>
                      Próximos Eventos
                    </h3>
                    <div className="space-y-8">
                      {/* Event 1 */}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-16 h-20 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center text-center border border-outline-variant">
                          <span className="text-label-sm text-primary font-bold uppercase">Nov</span>
                          <span className="text-headline-md font-bold text-[#191c1e]">14</span>
                        </div>
                        <div>
                          <h4 className="font-label-md font-bold text-on-surface hover:text-primary transition-colors cursor-pointer leading-tight">Simposio Virtual: HTLV y Co-infecciones</h4>
                          <p className="text-label-sm text-on-surface-variant mt-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">schedule</span> 14:00 GMT
                          </p>
                          <p className="text-label-sm text-on-surface-variant flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">location_on</span> Online
                          </p>
                        </div>
                      </div>
                      {/* Event 2 */}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-16 h-20 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center text-center border border-outline-variant">
                          <span className="text-label-sm text-primary font-bold uppercase">Dic</span>
                          <span className="text-headline-md font-bold text-[#191c1e]">02</span>
                        </div>
                        <div>
                          <h4 className="font-label-md font-bold text-on-surface hover:text-primary transition-colors cursor-pointer leading-tight">Reunión Anual de la Red Regional de HTLV</h4>
                          <p className="text-label-sm text-on-surface-variant mt-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">schedule</span> 09:00 local
                          </p>
                          <p className="text-label-sm text-on-surface-variant flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">location_on</span> París, Francia
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-8 py-3 border border-primary text-primary rounded-lg font-label-md hover:bg-primary/5 transition-all cursor-pointer">
                    Enviar un Evento
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Carousel */}
        <section className="py-section-gap bg-surface overflow-hidden border-t border-outline-variant/30">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop mb-12 scroll-reveal">
            <h2 className="text-center font-label-md text-on-surface-variant uppercase tracking-[0.2em]">Nuestras Instituciones Participantes</h2>
          </div>
          <div className="flex overflow-hidden scroll-reveal">
            <div className="partner-scroll">
              {/* Partner Logos */}
              {[
                { name: 'Global Univ.', icon: 'account_balance' },
                { name: 'Medical Inst.', icon: 'school' },
                { name: 'BioResearch', icon: 'science' },
                { name: 'Health Net', icon: 'hub' },
                { name: 'Virology Org', icon: 'public' },
                { name: 'Global Univ.', icon: 'account_balance' },
                { name: 'Medical Inst.', icon: 'school' },
                { name: 'BioResearch', icon: 'science' },
                { name: 'Health Net', icon: 'hub' },
                { name: 'Virology Org', icon: 'public' }
              ].map((partner, index) => (
                <div key={index} className="flex items-center justify-center w-[250px] px-10 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <div className="flex items-center gap-2 text-[#191c1e]">
                    <span className="material-symbols-outlined text-4xl">{partner.icon}</span>
                    <span className="font-bold text-lg">{partner.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Estilos específicos para la animación infinita */}
      <style jsx global>{`
        .partner-scroll {
          display: flex;
          width: calc(250px * 10);
          animation: scroll 40s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-250px * 5)); }
        }
      `}</style>
    </>
  );
}