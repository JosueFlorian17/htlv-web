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
        <section className="relative h-[620px] lg:h-[750px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDByYMPLtKYqCEMGVUZD4o194qEJpgPjM0_qBzlngvraRPukzJpY95IgYZ5VBPv8Kq92t2nHLvukNCwr-UrX8WV1F3Gkj-z3LaKKU-VMpi8YZU7TTvEoYSVczw5QHu7OhC1uq1bdn8a-EWLjgjf0DyIYiFOSgeCNHUPC7s1-3wqq37gmVYrEYOHgkHCJJa7Yr3blmN_kpEepvFxIrdlVx1Z_VDkoF-2tYRmQiWD7g7weKugXpSkPTG0nYqMf8yENcfuTshV506gN_U")' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/60 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-[1280px] mx-auto w-full px-margin-mobile md:px-margin-desktop scroll-reveal">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-[#ffdada] text-[#5b0617] font-label-sm uppercase font-bold tracking-wider rounded-full">
                  Liderazgo Científico Global
                </span>
                <span className="px-3 py-1 bg-white/90 backdrop-blur-xs text-[#191c1e] font-label-sm font-semibold rounded-full border border-[#dcc0c0]">
                  UPCH • IMTAvH • Perú
                </span>
              </div>
              
              <h1 className="font-display text-display text-[#5b0617] leading-tight mb-6">
                Red Internacional de Investigación e Innovación en HTLV
              </h1>
              
              <p className="font-body-lg text-body-lg text-[#564242] mb-8 max-w-2xl leading-relaxed">
                Conectando a centros de excelencia en retrovirología humana para acelerar diagnósticos tempranos, protocolos terapéuticos y la erradicación global de las patologías asociadas al HTLV-1 y HTLV-2.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="bg-[#5b0617] text-white px-8 py-4 rounded-xl font-label-md font-bold shadow-md hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer">
                  ¿Qué es el HTLV? (Guía Clínica)
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>
                <Link href="/research" className="bg-white border border-[#dcc0c0] text-[#5b0617] px-8 py-4 rounded-xl font-label-md font-bold hover:bg-[#ffdada]/30 transition-all cursor-pointer shadow-xs">
                  Líneas de Investigación
                </Link>
                <Link href="/repository" className="bg-[#d6e0f3] text-[#1d2b3a] px-8 py-4 rounded-xl font-label-md font-bold hover:bg-[#c0d2f0] transition-all cursor-pointer">
                  Repositorio Científico
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Autoridad y Misión */}
        <section className="py-section-gap bg-surface">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop scroll-reveal">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-6 space-y-6">
                <span className="text-[#5b0617] font-bold tracking-widest uppercase text-label-sm block">Consorcio Institucional</span>
                <h2 className="font-headline-lg text-headline-lg text-[#191c1e]">
                  Excelencia Científica desde el Foco Endémico hacia el Mundo
                </h2>
                <div className="space-y-4 text-[#564242] leading-relaxed text-body-lg">
                  <p>
                    La <strong>RIII-HTLV</strong> es una red colaborativa internacional creada para unir la experiencia clínica de zonas de alta prevalencia como el Perú con la capacidad de investigación básica y molecular de laboratorios de referencia en Europa, América Latina y Asia.
                  </p>
                  <p>
                    Coordinada con la participación del <strong>Instituto de Medicina Tropical Alexander von Humboldt de la Universidad Peruana Cayetano Heredia (UPCH)</strong>, nuestra plataforma promueve la estandarización de pruebas diagnósticas, cohortes clínicas longitudinales y políticas de salud pública preventivas.
                  </p>
                </div>
                
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link href="/network" className="inline-flex items-center gap-2 text-[#5b0617] font-bold text-[14px] hover:underline">
                    <span>Conocer las Instituciones y Científicos</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              <div className="md:col-span-6 relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-sm border border-[#dcc0c0]">
                  <img className="w-full h-full object-cover" alt="Investigador científico en laboratorio de virología" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU9J5Ywe8zuxZhEIF-eF1CwVXkzqvCzJAqw4JeCxv6wRWHsUSr8sx5qTAzsxlp1bzxZ1s2QU5JAQS9asLX4KeWGPmKpmSC40i6gGfP4HZPEj6wknbzQfarJGDuCHwPMbZgEA0Y8llkwW-D_jFH2NnDVxexP1pwIbDK99IsiziYJgExeBz3NDfr2o4EjiU5lI3k1KIypfBV4AiCHkwd9ADlF-wewbddPVQBrRgPK1BZa95igtDQh6YwVywhE6uG8W6Cprc3yveXr0Q" />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-[#5b0617] text-white p-6 rounded-2xl hidden lg:block max-w-[300px] shadow-lg">
                  <p className="font-bold text-[15px] italic mb-1">"La integración de datos clínicos y genómicos salva vidas."</p>
                  <p className="text-[11px] text-[#ffdada] uppercase tracking-wider font-semibold">— Comité Científico RIII-HTLV</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosistema de Recursos Globales (Bento Grid Limpio) */}
        <section className="py-section-gap bg-[#f3f4f6] border-y border-[#dcc0c0]">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop scroll-reveal">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-headline-lg text-headline-lg mb-3 text-[#191c1e]">
                Plataforma Científica y Divulgativa
              </h2>
              <p className="text-[#564242] text-[14px]">
                Acceso centralizado a los módulos de conocimiento, investigación y gobernanza de la red.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              <Link href="/about" className="group bg-white p-6 rounded-2xl border border-[#dcc0c0] flex flex-col items-center text-center transition-all hover:shadow-md hover:border-[#5b0617]">
                <div className="w-14 h-14 rounded-full bg-[#ffdada] text-[#5b0617] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-3xl">coronavirus</span>
                </div>
                <h3 className="font-bold text-[14px] text-[#191c1e] mb-1">Sobre HTLV</h3>
                <p className="text-[11px] text-[#564242]">Guía médica y clínica</p>
              </Link>

              <Link href="/network" className="group bg-white p-6 rounded-2xl border border-[#dcc0c0] flex flex-col items-center text-center transition-all hover:shadow-md hover:border-[#5b0617]">
                <div className="w-14 h-14 rounded-full bg-[#d6e0f3] text-[#1d2b3a] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-3xl">hub</span>
                </div>
                <h3 className="font-bold text-[14px] text-[#191c1e] mb-1">La Red</h3>
                <p className="text-[11px] text-[#564242]">Instituciones y miembros</p>
              </Link>

              <Link href="/research" className="group bg-white p-6 rounded-2xl border border-[#dcc0c0] flex flex-col items-center text-center transition-all hover:shadow-md hover:border-[#5b0617]">
                <div className="w-14 h-14 rounded-full bg-[#ffdada] text-[#5b0617] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-3xl">biotech</span>
                </div>
                <h3 className="font-bold text-[14px] text-[#191c1e] mb-1">Investigación</h3>
                <p className="text-[11px] text-[#564242]">8 líneas científicas</p>
              </Link>

              <Link href="/repository" className="group bg-white p-6 rounded-2xl border border-[#dcc0c0] flex flex-col items-center text-center transition-all hover:shadow-md hover:border-[#5b0617]">
                <div className="w-14 h-14 rounded-full bg-[#d6e0f3] text-[#1d2b3a] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-3xl">menu_book</span>
                </div>
                <h3 className="font-bold text-[14px] text-[#191c1e] mb-1">Repositorio</h3>
                <p className="text-[11px] text-[#564242]">Buscador de literatura</p>
              </Link>

              <Link href="/resources" className="group bg-white p-6 rounded-2xl border border-[#dcc0c0] flex flex-col items-center text-center transition-all hover:shadow-md hover:border-[#5b0617]">
                <div className="w-14 h-14 rounded-full bg-[#ffdada] text-[#5b0617] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-3xl">play_circle</span>
                </div>
                <h3 className="font-bold text-[14px] text-[#191c1e] mb-1">Recursos & Multimedia</h3>
                <p className="text-[11px] text-[#564242]">Videos, 3D y simuladores</p>
              </Link>

              <Link href="/contact" className="group bg-white p-6 rounded-2xl border border-[#dcc0c0] flex flex-col items-center text-center transition-all hover:shadow-md hover:border-[#5b0617]">
                <div className="w-14 h-14 rounded-full bg-[#d6e0f3] text-[#1d2b3a] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-3xl">mail</span>
                </div>
                <h3 className="font-bold text-[14px] text-[#191c1e] mb-1">Contacto</h3>
                <p className="text-[11px] text-[#564242]">Alianzas institucionales</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Pilares Científicos y Contenido Permanente (Evergreen) */}
        <section className="py-section-gap">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop scroll-reveal">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4 border-b border-[#dcc0c0] pb-4">
              <div>
                <span className="text-[12px] font-bold text-[#5b0617] uppercase tracking-wider mb-1 block">Áreas Prioritarias</span>
                <h2 className="font-headline-lg text-headline-lg text-[#191c1e]">
                  Líneas Estratégicas de Investigación
                </h2>
              </div>
              <Link href="/research" className="text-[#5b0617] font-bold text-[14px] flex items-center gap-1 hover:underline">
                <span>Ver todos los proyectos</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-[#dcc0c0] p-6 rounded-2xl shadow-sm hover:border-[#5b0617] transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#ffdada] text-[#5b0617] flex items-center justify-center mb-4 font-bold">01</div>
                  <h3 className="font-bold text-[17px] text-[#191c1e] mb-2">Vigilancia Molecular y Subtipos</h3>
                  <p className="text-[13px] text-[#564242] leading-relaxed mb-4">
                    Caracterización genómica de cepas virales de HTLV-1/2 en América del Sur y correlación con el riesgo de progresión a patologías neurológicas y hematológicas.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#dcc0c0]/50 text-[12px] font-bold text-[#5b0617]">
                  Nodo: IMTAvH - UPCH / Imperial College
                </div>
              </div>

              <div className="bg-white border border-[#dcc0c0] p-6 rounded-2xl shadow-sm hover:border-[#5b0617] transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#d6e0f3] text-[#1d2b3a] flex items-center justify-center mb-4 font-bold">02</div>
                  <h3 className="font-bold text-[17px] text-[#191c1e] mb-2">Coinfecciones y Modulación Inmune</h3>
                  <p className="text-[13px] text-[#564242] leading-relaxed mb-4">
                    Estudio de la interacción inmunológica entre HTLV-1 y Tuberculosis (TB), Estrongiloidiasis y VIH en poblaciones endémicas del Perú y Brasil.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#dcc0c0]/50 text-[12px] font-bold text-[#1d2b3a]">
                  Nodo: Fiocruz / UPCH
                </div>
              </div>

              <div className="bg-white border border-[#dcc0c0] p-6 rounded-2xl shadow-sm hover:border-[#5b0617] transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#ffdada] text-[#5b0617] flex items-center justify-center mb-4 font-bold">03</div>
                  <h3 className="font-bold text-[17px] text-[#191c1e] mb-2">Ensayos Terapéuticos en HAM/TSP</h3>
                  <p className="text-[13px] text-[#564242] leading-relaxed mb-4">
                    Evaluación de nuevas estrategias inmunomoduladoras y anticuerpos monoclonales para frenar el deterioro motor en Paraparesia Espástica Tropical.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#dcc0c0]/50 text-[12px] font-bold text-[#5b0617]">
                  Nodo: St. Marianna / Institut Pasteur
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carrusel Institucional de Centros Colaboradores */}
        <section className="py-14 bg-[#f8f9fb] overflow-hidden border-t border-[#dcc0c0]">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop mb-8 text-center">
            <h2 className="font-label-sm uppercase tracking-[0.2em] text-[#897172] font-bold">
              Consorcio de Centros e Instituciones Participantes
            </h2>
          </div>
          
          <div className="flex overflow-hidden">
            <div className="partner-scroll">
              {[
                { name: 'UPCH - Perú', icon: 'account_balance' },
                { name: 'IMTAvH', icon: 'biotech' },
                { name: 'Imperial College London', icon: 'school' },
                { name: 'Institut Pasteur', icon: 'science' },
                { name: 'Fiocruz - Brasil', icon: 'hub' },
                { name: 'ISCIII - España', icon: 'health_and_safety' },
                { name: 'St. Marianna - Japón', icon: 'local_hospital' },
                { name: 'UPCH - Perú', icon: 'account_balance' },
                { name: 'IMTAvH', icon: 'biotech' },
                { name: 'Imperial College London', icon: 'school' }
              ].map((partner, index) => (
                <div key={index} className="flex items-center justify-center w-[260px] px-6 opacity-75 hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2.5 text-[#191c1e] bg-white px-4 py-2 rounded-xl border border-[#dcc0c0] shadow-2xs">
                    <span className="material-symbols-outlined text-[#5b0617] text-2xl">{partner.icon}</span>
                    <span className="font-bold text-[13px]">{partner.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Estilos para el scroll horizontal continuo */}
      <style jsx global>{`
        .partner-scroll {
          display: flex;
          width: calc(260px * 10);
          animation: scroll 35s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-260px * 5)); }
        }
      `}</style>
    </>
  );
}