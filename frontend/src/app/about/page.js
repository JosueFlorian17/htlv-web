"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AboutHTLVPage() {
  const [activeSection, setActiveSection] = useState('what-is-htlv');

  const navItems = [
    { id: 'what-is-htlv', label: '1. ¿Qué es el HTLV?', icon: 'biotech' },
    { id: 'clinical-spectrum', label: '2. Espectro Clínico (90/10)', icon: 'pie_chart' },
    { id: 'transmission', label: '3. Vías de Transmisión', icon: 'share' },
    { id: 'peru-leadership', label: '4. Liderazgo de Perú y UPCH', icon: 'account_balance' },
    { id: 'diagnosis', label: '5. Diagnóstico & Manejo', icon: 'medical_services' },
    { id: 'faqs', label: '6. Preguntas Frecuentes', icon: 'quiz' },
  ];

  // Scrollspy y sincronización con el hash de la URL
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      const valid = navItems.some(item => item.id === hashId);
      if (valid) {
        setActiveSection(hashId);
      }
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140; // Offset del header
      const sectionElements = navItems
        .map(item => document.getElementById(item.id))
        .filter(Boolean);

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el.offsetTop <= scrollPosition) {
          setActiveSection(el.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const handlePrintPDF = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const faqItems = [
    {
      q: "¿El HTLV-1 es lo mismo que el VIH?",
      a: "No. Aunque ambos son retrovirus, el HTLV no produce el síndrome de inmunodeficiencia adquirida (SIDA). En lugar de destruir masivamente las células T, el HTLV-1 causa proliferación celular desregulada (que en raros casos evoluciona a leucemia ATL) o respuestas inflamatorias crónicas en la médula espinal (HAM/TSP)."
    },
    {
      q: "¿Existe cura o vacuna para el HTLV?",
      a: "Actualmente no existe una vacuna disponible ni un tratamiento curativo que elimine el virus. El enfoque médico consiste en la prevención activa, el monitoreo periódico de la carga proviral y el tratamiento oportuno de las complicaciones inflamatorias o hematológicas."
    },
    {
      q: "¿Cómo se previene la transmisión de madre a hijo?",
      a: "La principal medida preventiva es el tamizaje serológico prenatal de la madre. En madres seropositivas para HTLV-1, la recomendación pediátrica internacional es suspender la lactancia materna y alimentar al recién nacido con sucedáneos de leche materna (fórmula)."
    },
    {
      q: "¿Dónde puedo realizarme una prueba de descarte en el Perú?",
      a: "En el Perú, el despistaje serológico se realiza en bancos de sangre autorizados, hospitales de referencia nacional y en centros de excelencia como el Instituto de Medicina Tropical Alexander von Humboldt (UPCH) en Lima."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <>
      {/* Schema.org Structured Data para SEO Médico */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="pt-8 pb-20 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto print:p-0 print:m-0 print:max-w-full">
        
        {/* Cabecera Principal con Autoridad y Botón de PDF */}
        <header className="mb-8 border-b border-[#dcc0c0] pb-4 print:mb-2 print:pb-2">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="inline-block px-3 py-0.5 bg-[#ffdada] text-[#5b0617] text-[11px] uppercase font-bold tracking-wider rounded-full print:text-[8pt] print:py-0">
                  Guía Clínica & Científica
                </span>
                <span className="inline-block px-3 py-0.5 bg-[#d6e0f3] text-[#1d2b3a] text-[11px] font-semibold rounded-full print:text-[8pt] print:py-0">
                  Respaldo UPCH - Perú
                </span>
              </div>
              <h1 className="font-display text-[30px] md:text-[38px] text-[#5b0617] mb-1 leading-tight print:text-[16pt] print:mb-0.5">
                Virus Linfotrópico de Células T Humanas (HTLV)
              </h1>
              <p className="text-[13.5px] md:text-[14.5px] text-[#564242] leading-snug print:text-[8.5pt]">
                Consenso científico, epidemiología global y protocolos clínicos elaborados por investigadores de la <strong>Universidad Peruana Cayetano Heredia (UPCH)</strong> y la <strong>Red Internacional RIII-HTLV</strong>.
              </p>
            </div>
            
            {/* Botón de Exportación en PDF */}
            <div className="flex-shrink-0 print:hidden">
              <button
                onClick={handlePrintPDF}
                className="flex items-center gap-2 bg-[#5b0617] text-white px-5 py-3 rounded-xl font-label-md font-bold hover:opacity-90 transition-all shadow-sm cursor-pointer"
                title="Descargar o imprimir documento clínico"
              >
                <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                Descargar Guía en PDF
              </button>
            </div>
          </div>

          {/* Insignia de Validación Científica */}
          <div className="mt-3 flex flex-wrap items-center gap-2.5 text-[11px] text-[#897172] bg-white p-2 rounded-lg border border-[#dcc0c0] print:mt-1.5 print:p-1.5 print:text-[7.5pt]">
            <span className="flex items-center gap-1 font-bold text-[#5b0617]">
              <span className="material-symbols-outlined text-[14px] print:hidden">verified</span>
              Revisión Médica Oficial:
            </span>
            <span>Supervisado por infectólogos y virólogos del Instituto de Medicina Tropical Alexander von Humboldt (UPCH)</span>
            <span>•</span>
            <span className="text-[#564242] font-semibold">Actualizado: 2026</span>
          </div>
        </header>

        {/* Contenedor Principal: 2 columnas en Web, bloque continuo en Print */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] print:block gap-8 items-start">
          
          {/* Navegación Lateral Interactiva (TOC) - Oculta en PDF */}
          <aside className="hidden lg:block sticky top-28 h-[calc(100vh-140px)] overflow-y-auto pr-2 print:hidden">
            <div className="bg-[#f3f4f6] p-5 rounded-xl shadow-xs border border-[#dcc0c0]">
              <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#5b0617] mb-4">Contenido de la Guía</h3>
              <nav className="flex flex-col gap-1.5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={`flex items-center gap-2.5 px-3.5 py-2.5 text-[13px] rounded-lg transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#ffdada] text-[#5b0617] font-bold border-l-4 border-[#5b0617] shadow-2xs'
                          : 'text-[#564242] font-medium hover:bg-[#e7e8ea] hover:text-[#191c1e]'
                      }`}
                    >
                      <span className={`material-symbols-outlined text-[18px] ${isActive ? 'text-[#5b0617]' : 'text-[#897172]'}`}>
                        {item.icon}
                      </span>
                      {item.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-6 pt-6 border-t border-[#dcc0c0] text-center space-y-3">
                <p className="text-[11px] text-[#564242]">¿Requieres información técnica de investigación?</p>
                <Link 
                  href="/repository"
                  className="block w-full py-2 bg-white border border-[#5b0617] text-[#5b0617] text-[12px] font-bold rounded-lg hover:bg-[#ffdada] transition-all"
                >
                  Consultar Repositorio
                </Link>
              </div>
            </div>
          </aside>

          {/* Secciones de Contenido Visual */}
          <div className="flex flex-col gap-10 print:gap-2.5 print:w-full">
            
            {/* SECCIÓN 1: ¿QUÉ ES EL HTLV? */}
            <section className="scroll-mt-28 print-card print-avoid-break" id="what-is-htlv">
              <div className="bg-white md:p-6 p-4 rounded-2xl print:p-0 print:border-0">
                <div className="flex items-center gap-2.5 mb-3 print:mb-1.5">
                  <span className="w-7 h-7 rounded-full bg-[#ffdada] text-[#5b0617] flex items-center justify-center font-bold text-[13px] print:w-5 print:h-5 print:text-[8.5pt]">1</span>
                  <h2 className="font-headline-lg text-[20px] md:text-[22px] text-[#5b0617] font-bold print:text-[11.5pt]">
                    ¿Qué se sabe del HTLV?
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 print-grid-2 gap-4 items-center">
                  <div className="space-y-2 text-[13px] text-[#191c1e] leading-snug print:text-[8pt] print:space-y-1">
                    <p>
                      El <strong>Virus Linfotrópico de Células T Humanas (HTLV)</strong> fue el <strong>primer retrovirus humano descubierto</strong> (1980). Pertenece a la familia <em>Retroviridae</em> y afecta predominantemente a los linfocitos T CD4+.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-0.5">
                      <div className="p-2 bg-[#f8f9fb] border border-[#dcc0c0] rounded-lg text-center print:p-1">
                        <span className="block text-[13.5px] font-extrabold text-[#5b0617] print:text-[9pt]">HTLV-1</span>
                        <span className="text-[10.5px] text-[#564242] leading-tight print:text-[7.5pt]">Oncogénico y neurotrópico de alto impacto.</span>
                      </div>
                      <div className="p-2 bg-[#f8f9fb] border border-[#dcc0c0] rounded-lg text-center print:p-1">
                        <span className="block text-[13.5px] font-extrabold text-[#555f6f] print:text-[9pt]">HTLV-2</span>
                        <span className="text-[10.5px] text-[#564242] leading-tight print:text-[7.5pt]">Menor patogenicidad, prevalencia focal.</span>
                      </div>
                    </div>
                    <p className="text-[12px] text-[#564242] print:text-[7.5pt]">
                      A diferencia de otros virus, el HTLV se integra al genoma del hospedero en forma de <strong>provirus</strong> y se propaga por contacto célula a célula.
                    </p>
                  </div>

                  <div className="bg-[#f8f9fb] p-3.5 rounded-xl border border-[#dcc0c0] space-y-2 print:p-2 print:space-y-1">
                    <h4 className="text-[12px] font-bold text-[#191c1e] uppercase tracking-wider flex items-center gap-1.5 print:text-[8pt]">
                      <span className="material-symbols-outlined text-[#5b0617] text-[16px] print:hidden">public</span>
                      Datos Epidemiológicos Globales
                    </h4>
                    <div className="space-y-1.5 text-[12px] print:text-[7.5pt]">
                      <div className="flex justify-between items-center border-b border-[#dcc0c0]/50 pb-1">
                        <span className="text-[#564242]">Población Afectada:</span>
                        <strong className="text-[#5b0617]">5 - 10 Millones</strong>
                      </div>
                      <div className="flex justify-between items-center border-b border-[#dcc0c0]/50 pb-1">
                        <span className="text-[#564242]">Focos Principales:</span>
                        <strong className="text-[#191c1e]">Perú, Brasil, Japón, Caribe</strong>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#564242]">Tipo de Retrovirus:</span>
                        <strong className="text-[#191c1e]">Deltaretrovirus (Integrado)</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECCIÓN 2: ESPECTRO CLÍNICO (90% ASINTOMÁTICOS VS 10% SINTOMÁTICOS) */}
            <section className="scroll-mt-28 print-card print-avoid-break" id="clinical-spectrum">
              <div className="bg-white md:p-6 p-4 rounded-2xl print:p-0 print:border-0">
                <div className="flex items-center gap-2.5 mb-3 print:mb-1.5">
                  <span className="w-7 h-7 rounded-full bg-[#ffdada] text-[#5b0617] flex items-center justify-center font-bold text-[13px] print:w-5 print:h-5 print:text-[8.5pt]">2</span>
                  <div>
                    <h2 className="font-headline-lg text-[20px] md:text-[22px] text-[#5b0617] font-bold print:text-[11.5pt]">
                      Espectro Clínico: El Modelo 90% vs 10%
                    </h2>
                    <p className="text-[11.5px] text-[#564242] print:text-[7.5pt]">
                      Comprensión del curso natural de la infección y patologías asociadas
                    </p>
                  </div>
                </div>

                {/* Infografía de Proporciones Clínicas */}
                <div className="grid grid-cols-1 md:grid-cols-12 print-grid-90-10 gap-3 items-stretch">
                  
                  {/* Tarjeta 90% Asintomáticos */}
                  <div className="md:col-span-5 bg-[#f3f4f6] border border-[#555f6f]/30 p-4 rounded-xl flex flex-col justify-between print:p-2">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[26px] font-black text-[#555f6f] leading-none print:text-[15pt]">~90%</span>
                        <span className="material-symbols-outlined text-xl text-[#555f6f] print:hidden">health_and_safety</span>
                      </div>
                      <h3 className="text-[14px] font-bold text-[#191c1e] mb-1 print:text-[9pt]">Portadores Asintomáticos</h3>
                      <p className="text-[11.5px] text-[#564242] leading-snug print:text-[7.5pt]">
                        La gran mayoría no desarrollará síntomas. No obstante, son portadores del provirus y pueden transmitirlo si no se aplican medidas preventivas.
                      </p>
                    </div>
                    <div className="mt-2 pt-1 border-t border-[#dcc0c0] text-[10.5px] font-bold text-[#555f6f] print:text-[7pt]">
                      Control recomendado: Anual.
                    </div>
                  </div>

                  {/* Tarjeta 10% Patologías Graves */}
                  <div className="md:col-span-7 bg-[#ffdada]/25 border border-[#5b0617] p-4 rounded-xl flex flex-col justify-between print:p-2">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[26px] font-black text-[#5b0617] leading-none print:text-[15pt]">5% - 10%</span>
                        <span className="material-symbols-outlined text-xl text-[#5b0617] print:hidden">warning</span>
                      </div>
                      <h3 className="text-[14px] font-bold text-[#5b0617] mb-0.5 print:text-[9pt]">Enfermedades Asociadas a HTLV-1</h3>
                      <p className="text-[11px] text-[#191c1e] mb-2 print:text-[7pt]">
                        Un porcentaje menor puede desarrollar patologías severas:
                      </p>
                      
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="bg-white p-1.5 rounded border border-[#dcc0c0]">
                          <strong className="block text-[11px] text-[#5b0617] print:text-[7.5pt]">PET / HAM</strong>
                          <span className="text-[9.5px] text-[#564242] leading-tight block print:text-[6.8pt]">Paraparesia espástica progresiva.</span>
                        </div>
                        <div className="bg-white p-1.5 rounded border border-[#dcc0c0]">
                          <strong className="block text-[11px] text-[#5b0617] print:text-[7.5pt]">LLTA / ATL</strong>
                          <span className="text-[9.5px] text-[#564242] leading-tight block print:text-[6.8pt]">Leucemia/Linfoma células T adulto.</span>
                        </div>
                        <div className="bg-white p-1.5 rounded border border-[#dcc0c0]">
                          <strong className="block text-[11px] text-[#5b0617] print:text-[7.5pt]">Uveítis HTLV-1</strong>
                          <span className="text-[9.5px] text-[#564242] leading-tight block print:text-[6.8pt]">Inflamación ocular crónica.</span>
                        </div>
                        <div className="bg-white p-1.5 rounded border border-[#dcc0c0]">
                          <strong className="block text-[11px] text-[#5b0617] print:text-[7.5pt]">Dermatitis Inf.</strong>
                          <span className="text-[9.5px] text-[#564242] leading-tight block print:text-[6.8pt]">Eczema recidivante en niños.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* SECCIÓN 3: VÍAS DE TRANSMISIÓN */}
            <section className="scroll-mt-28 print-card print-avoid-break" id="transmission">
              <div className="bg-white md:p-6 p-4 rounded-2xl print:p-0 print:border-0">
                <div className="flex items-center gap-2.5 mb-3 print:mb-1.5">
                  <span className="w-7 h-7 rounded-full bg-[#ffdada] text-[#5b0617] flex items-center justify-center font-bold text-[13px] print:w-5 print:h-5 print:text-[8.5pt]">3</span>
                  <h2 className="font-headline-lg text-[20px] md:text-[22px] text-[#5b0617] font-bold print:text-[11.5pt]">
                    Vías de Transmisión y Prevención
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 print-grid-3 gap-3">
                  {/* Vía Vertical */}
                  <div className="bg-[#f8f9fb] border border-[#dcc0c0] p-3 rounded-xl text-center space-y-1.5 print:p-2 print:space-y-1">
                    <div className="w-8 h-8 mx-auto rounded-full bg-[#ffdada] text-[#5b0617] flex items-center justify-center print:hidden">
                      <span className="material-symbols-outlined text-lg">child_care</span>
                    </div>
                    <h3 className="font-bold text-[13px] text-[#191c1e] print:text-[8.5pt]">1. Madre a Hijo (Vertical)</h3>
                    <p className="text-[11px] text-[#564242] leading-snug print:text-[7.2pt]">
                      Por <strong>lactancia materna prolongada (&gt; 6 meses)</strong> por linfocitos en leche.
                    </p>
                    <div className="p-1 bg-white rounded border border-[#dcc0c0] text-[9.5px] font-bold text-[#5b0617] print:text-[6.8pt]">
                      Prevención: Sucedáneos de leche materna.
                    </div>
                  </div>

                  {/* Vía Sexual */}
                  <div className="bg-[#f8f9fb] border border-[#dcc0c0] p-3 rounded-xl text-center space-y-1.5 print:p-2 print:space-y-1">
                    <div className="w-8 h-8 mx-auto rounded-full bg-[#ffdada] text-[#5b0617] flex items-center justify-center print:hidden">
                      <span className="material-symbols-outlined text-lg">favorite</span>
                    </div>
                    <h3 className="font-bold text-[13px] text-[#191c1e] print:text-[8.5pt]">2. Vía Sexual</h3>
                    <p className="text-[11px] text-[#564242] leading-snug print:text-[7.2pt]">
                      Relaciones sin protección. Mayor tasa documentada de hombre a mujer.
                    </p>
                    <div className="p-1 bg-white rounded border border-[#dcc0c0] text-[9.5px] font-bold text-[#5b0617] print:text-[6.8pt]">
                      Prevención: Preservativos de barrera.
                    </div>
                  </div>

                  {/* Vía Parenteral */}
                  <div className="bg-[#f8f9fb] border border-[#dcc0c0] p-3 rounded-xl text-center space-y-1.5 print:p-2 print:space-y-1">
                    <div className="w-8 h-8 mx-auto rounded-full bg-[#ffdada] text-[#5b0617] flex items-center justify-center print:hidden">
                      <span className="material-symbols-outlined text-lg">bloodtype</span>
                    </div>
                    <h3 className="font-bold text-[13px] text-[#191c1e] print:text-[8.5pt]">3. Vía Parenteral</h3>
                    <p className="text-[11px] text-[#564242] leading-snug print:text-[7.2pt]">
                      Transfusiones celulares no tamizadas, trasplante o agujas compartidas.
                    </p>
                    <div className="p-1 bg-white rounded border border-[#dcc0c0] text-[9.5px] font-bold text-[#5b0617] print:text-[6.8pt]">
                      Prevención: Tamizaje estricto en sangre.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECCIÓN 4: LIDERAZGO CIENTÍFICO DE PERÚ Y LA UPCH (Inicia Página 2 en Print) */}
            <section className="scroll-mt-28 print-page-break-before print-peru-card print-avoid-break" id="peru-leadership">
              <div className="bg-[#5b0617] text-white rounded-2xl p-6 md:p-8 shadow-xs print:p-0 print:bg-transparent print:text-[#191c1e] print:border-0">
                <div className="flex items-center gap-2.5 mb-3 print:mb-1.5">
                  <span className="w-7 h-7 rounded-full bg-white text-[#5b0617] print:bg-[#ffdada] print:text-[#5b0617] flex items-center justify-center font-bold text-[13px] print:w-5 print:h-5 print:text-[8.5pt]">4</span>
                  <h2 className="text-[20px] md:text-[22px] font-bold print-peru-header print:text-[11.5pt]">
                    Perú y Cayetano Heredia: Referentes Mundiales
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 print-grid-peru gap-4 items-center">
                  <div className="md:col-span-7 space-y-2 text-[12.5px] leading-snug opacity-95 print:opacity-100 print:text-[8pt] print:space-y-1">
                    <p>
                      El <strong>Perú</strong> alberga una de las poblaciones con mayor prevalencia de HTLV-1 a nivel global, con focos históricos en la cuenca andina y costa.
                    </p>
                    <p>
                      El <strong>Instituto de Medicina Tropical Alexander von Humboldt (IMTAvH)</strong> de la <strong>Universidad Peruana Cayetano Heredia (UPCH)</strong> lidera estudios mundiales en:
                    </p>
                    <ul className="list-disc pl-4 space-y-0.5 text-[11.5px] print:text-[7.5pt]">
                      <li>Evolución clínica y factores de riesgo en Paraparesia Espástica Tropical (HAM/TSP).</li>
                      <li>Coinfección de HTLV-1 con Tuberculosis (TB) y Estrongiloidiasis.</li>
                      <li>Desarrollo y validación de técnicas de diagnóstico molecular por PCR en tiempo real.</li>
                    </ul>
                  </div>

                  <div className="md:col-span-5 bg-white/10 print-peru-subbox p-3 rounded-xl border border-white/20 space-y-2 print:p-2 print:space-y-1">
                    <h4 className="text-[11px] uppercase font-bold tracking-wider text-[#ffdada] print:text-[#5b0617] print:text-[7.5pt]">
                      Comité y Doctores Referentes
                    </h4>
                    <div className="space-y-1.5 text-[11.5px] print:text-[7.5pt]">
                      <div className="border-b border-white/20 print:border-[#dcc0c0] pb-1">
                        <strong className="block text-white print:text-[#191c1e]">Dr. Eduardo Gotuzzo</strong>
                        <span className="text-[10px] opacity-80 print:opacity-100 print:text-[6.8pt]">Profesor Emérito UPCH • Referente Mundial en Enf. Tropicales</span>
                      </div>
                      <div className="border-b border-white/20 print:border-[#dcc0c0] pb-1">
                        <strong className="block text-white print:text-[#191c1e]">Dra. Elsa González</strong>
                        <span className="text-[10px] opacity-80 print:opacity-100 print:text-[6.8pt]">Investigadora Principal IMTAvH-UPCH • Retrovirología</span>
                      </div>
                      <div>
                        <strong className="block text-white print:text-[#191c1e]">Red Internacional RIII-HTLV</strong>
                        <span className="text-[10px] opacity-80 print:opacity-100 print:text-[6.8pt]">Imperial College London, Institut Pasteur, Fiocruz</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECCIÓN 5: DIAGNÓSTICO Y MANEJO CLÍNICO */}
            <section className="scroll-mt-28 print-card print-avoid-break" id="diagnosis">
              <div className="bg-white md:p-6 p-4 rounded-2xl print:p-0 print:border-0">
                <div className="flex items-center gap-2.5 mb-3 print:mb-1.5">
                  <span className="w-7 h-7 rounded-full bg-[#ffdada] text-[#5b0617] flex items-center justify-center font-bold text-[13px] print:w-5 print:h-5 print:text-[8.5pt]">5</span>
                  <h2 className="font-headline-lg text-[20px] md:text-[22px] text-[#5b0617] font-bold print:text-[11.5pt]">
                    Algoritmo de Diagnóstico y Manejo
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 print-grid-3 gap-3 mb-3 print:mb-1.5">
                  <div className="p-3 bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl print:p-2">
                    <span className="text-[10.5px] font-bold text-[#5b0617] uppercase block mb-0.5 print:text-[7pt]">Paso 1: Tamizaje</span>
                    <h4 className="font-bold text-[13px] text-[#191c1e] mb-0.5 print:text-[8.5pt]">ELISA / Quimioluminiscencia</h4>
                    <p className="text-[11px] text-[#564242] print:text-[7.2pt]">Detección de anticuerpos totales anti-HTLV-1/2.</p>
                  </div>
                  <div className="p-3 bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl print:p-2">
                    <span className="text-[10.5px] font-bold text-[#5b0617] uppercase block mb-0.5 print:text-[7pt]">Paso 2: Confirmación</span>
                    <h4 className="font-bold text-[13px] text-[#191c1e] mb-0.5 print:text-[8.5pt]">Western Blot / LIA</h4>
                    <p className="text-[11px] text-[#564242] print:text-[7.2pt]">Diferenciación entre serotipos HTLV-1 y HTLV-2.</p>
                  </div>
                  <div className="p-3 bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl print:p-2">
                    <span className="text-[10.5px] font-bold text-[#5b0617] uppercase block mb-0.5 print:text-[7pt]">Paso 3: Monitoreo</span>
                    <h4 className="font-bold text-[13px] text-[#191c1e] mb-0.5 print:text-[8.5pt]">PCR Cuantitativa (Carga Proviral)</h4>
                    <p className="text-[11px] text-[#564242] print:text-[7.2pt]">Medición de copias virales por 100 células.</p>
                  </div>
                </div>

                <div className="p-2.5 bg-[#ffdada]/25 border border-[#dcc0c0] rounded-xl flex items-start gap-2 print:p-1.5">
                  <span className="material-symbols-outlined text-[#5b0617] text-[16px] mt-0.5 print:hidden">info</span>
                  <p className="text-[11px] text-[#564242] leading-snug print:text-[7pt]">
                    <strong>Pauta de Seguimiento:</strong> Personas asintomáticas requieren control clínico anual. En casos de HAM/TSP o ATL, se activa el protocolo multidisciplinario (infectología, neurología, hematología).
                  </p>
                </div>
              </div>
            </section>

            {/* SECCIÓN 6: PREGUNTAS FRECUENTES (FAQ) */}
            <section className="scroll-mt-28 print-card print-avoid-break" id="faqs">
              <div className="bg-white md:p-6 p-4 rounded-2xl print:p-0 print:border-0">
                <div className="flex items-center gap-2.5 mb-3 print:mb-1.5">
                  <span className="w-7 h-7 rounded-full bg-[#ffdada] text-[#5b0617] flex items-center justify-center font-bold text-[13px] print:w-5 print:h-5 print:text-[8.5pt]">6</span>
                  <div>
                    <h2 className="font-headline-lg text-[20px] md:text-[22px] text-[#5b0617] font-bold print:text-[11.5pt]">
                      Preguntas Frecuentes sobre el HTLV
                    </h2>
                    <p className="text-[11px] text-[#564242] print:text-[7pt]">
                      Respuestas directas basadas en evidencia biomédica
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 print-grid-faqs gap-2.5 print:gap-1.5">
                  {faqItems.map((item, index) => (
                    <div key={index} className="bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl p-3 print:p-1.5">
                      <h4 className="font-bold text-[12.5px] text-[#5b0617] mb-1 print:text-[8pt]">
                        {item.q}
                      </h4>
                      <p className="text-[11.5px] text-[#564242] leading-snug print:text-[7pt]">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Pie de página institucional para la versión impresa */}
            <div className="hidden print:block pt-1 border-t border-[#dcc0c0] text-center text-[6.8pt] text-[#897172]">
              <p>
                <strong>Deslinde Médico:</strong> Este documento es de carácter divulgativo y científico. No sustituye la consulta médica especializada. Desarrollado con el respaldo de investigadores del Instituto de Medicina Tropical Alexander von Humboldt (UPCH) y la Red RIII-HTLV. Conforme a la Ley N° 29733 de Protección de Datos Personales.
              </p>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}