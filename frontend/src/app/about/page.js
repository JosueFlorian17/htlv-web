"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AboutHTLVPage() {
  const [activeSection, setActiveSection] = useState('what-is-htlv');

  // IntersectionObserver para alternar los estados del menú lateral de manera asíncrona
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.isIntersecting && id) {
          setActiveSection(id);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handlePrintPDF = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es el virus HTLV y en qué se diferencia del VIH?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El HTLV (Virus Linfotrópico de Células T Humanas) es un retrovirus de la familia Retroviridae. A diferencia del VIH, no destruye masivamente los linfocitos T ni causa inmunodeficiencia adquirida generalizada (SIDA); en cambio, el HTLV-1 promueve la proliferación clonal linfocitaria y puede inducir enfermedades inflamatorias crónicas o malignidades como la Leucemia/Linfoma de Células T del Adulto (ATL) y la Paraparesia Espástica Tropical (HAM/TSP)."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuáles son las principales vías de transmisión del HTLV-1/2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El HTLV se transmite por tres vías principales: 1) Vertical (de madre a hijo principalmente mediante la lactancia materna prolongada), 2) Sexual (relaciones sexuales sin protección), y 3) Parenteral (transfusiones sanguíneas no tamizadas, trasplantes o uso compartido de agujas)."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué el Perú y la Universidad Peruana Cayetano Heredia son referentes mundiales en HTLV?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El Perú es una de las regiones con mayor endemicidad de HTLV-1 en el mundo. El Instituto de Medicina Tropical Alexander von Humboldt (IMTAvH) de la Universidad Peruana Cayetano Heredia (UPCH) ha liderado durante décadas estudios pioneros en epidemiología, diagnóstico molecular, coinfección con tuberculosis y manejo clínico de la Paraparesia Espástica Tropical."
        }
      },
      {
        "@type": "Question",
        "name": "¿El HTLV tiene cura o vacuna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Actualmente no existe una vacuna comercial ni un tratamiento curativo que erradique por completo el virus del organismo. El manejo se orienta al control periódico de la carga proviral, la prevención de la transmisión secundaria y tratamientos dirigidos para controlar los síntomas inflamatorios o quimioterapia en casos de ATL."
        }
      }
    ]
  };

  return (
    <>
      {/* Schema.org Structured Data para SEO Médico */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="pt-10 pb-20 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
        
        {/* Cabecera Principal con Autoridad y Botón de PDF */}
        <header className="mb-12 border-b border-[#dcc0c0] pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-block px-3 py-1 bg-[#ffdada] text-[#5b0617] font-label-sm uppercase font-bold tracking-wider rounded-full">
                  Guía Clínica & Científica
                </span>
                <span className="inline-block px-3 py-1 bg-[#d6e0f3] text-[#1d2b3a] font-label-sm font-semibold rounded-full">
                  Respaldo UPCH - Perú
                </span>
              </div>
              <h1 className="font-display text-display text-[#5b0617] mb-3 leading-tight">
                Virus Linfotrópico de Células T Humanas (HTLV)
              </h1>
              <p className="font-body-lg text-body-lg text-[#564242] leading-relaxed">
                Consenso científico, epidemiología global y protocolos clínicos actualizados elaborados por investigadores de la <strong>Universidad Peruana Cayetano Heredia (UPCH)</strong> y la <strong>Red Internacional RIII-HTLV</strong>.
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
          <div className="mt-6 flex flex-wrap items-center gap-4 text-[12px] text-[#897172] bg-white p-3 rounded-lg border border-[#dcc0c0]">
            <span className="flex items-center gap-1 font-bold text-[#5b0617]">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Revisión Médica Oficial
            </span>
            <span>•</span>
            <span>Supervisado por infectólogos y virólogos del Instituto de Medicina Tropical Alexander von Humboldt (UPCH)</span>
            <span>•</span>
            <span className="text-[#564242] font-medium">Actualizado: Septiembre 2026</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] print:block print:w-full gap-10 items-start">
          
          {/* Navegación Lateral Interactiva (TOC) */}
          <aside className="hidden lg:block sticky top-28 h-[calc(100vh-140px)] overflow-y-auto pr-2 print:hidden">
            <div className="bg-[#f3f4f6] p-5 rounded-xl shadow-xs border border-[#dcc0c0]">
              <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#5b0617] mb-4">Contenido de la Guía</h3>
              <nav className="flex flex-col gap-1.5">
                <a 
                  className={`flex items-center gap-2.5 px-3 py-2.5 text-[13px] font-medium text-[#564242] hover:bg-[#e7e8ea] transition-all rounded-lg ${
                    activeSection === 'what-is-htlv' ? 'text-[#5b0617] font-bold bg-[#ffdada]' : ''
                  }`} 
                  href="#what-is-htlv"
                >
                  <span className="material-symbols-outlined text-[18px]">biotech</span> 1. ¿Qué es el HTLV?
                </a>
                <a 
                  className={`flex items-center gap-2.5 px-3 py-2.5 text-[13px] font-medium text-[#564242] hover:bg-[#e7e8ea] transition-all rounded-lg ${
                    activeSection === 'clinical-spectrum' ? 'text-[#5b0617] font-bold bg-[#ffdada]' : ''
                  }`} 
                  href="#clinical-spectrum"
                >
                  <span className="material-symbols-outlined text-[18px]">pie_chart</span> 2. Espectro Clínico (90/10)
                </a>
                <a 
                  className={`flex items-center gap-2.5 px-3 py-2.5 text-[13px] font-medium text-[#564242] hover:bg-[#e7e8ea] transition-all rounded-lg ${
                    activeSection === 'transmission' ? 'text-[#5b0617] font-bold bg-[#ffdada]' : ''
                  }`} 
                  href="#transmission"
                >
                  <span className="material-symbols-outlined text-[18px]">share</span> 3. Vías de Transmisión
                </a>
                <a 
                  className={`flex items-center gap-2.5 px-3 py-2.5 text-[13px] font-medium text-[#564242] hover:bg-[#e7e8ea] transition-all rounded-lg ${
                    activeSection === 'peru-leadership' ? 'text-[#5b0617] font-bold bg-[#ffdada]' : ''
                  }`} 
                  href="#peru-leadership"
                >
                  <span className="material-symbols-outlined text-[18px]">account_balance</span> 4. Liderazgo de Perú y UPCH
                </a>
                <a 
                  className={`flex items-center gap-2.5 px-3 py-2.5 text-[13px] font-medium text-[#564242] hover:bg-[#e7e8ea] transition-all rounded-lg ${
                    activeSection === 'diagnosis' ? 'text-[#5b0617] font-bold bg-[#ffdada]' : ''
                  }`} 
                  href="#diagnosis"
                >
                  <span className="material-symbols-outlined text-[18px]">medical_services</span> 5. Diagnóstico & Manejo
                </a>
                <a 
                  className={`flex items-center gap-2.5 px-3 py-2.5 text-[13px] font-medium text-[#564242] hover:bg-[#e7e8ea] transition-all rounded-lg ${
                    activeSection === 'faqs' ? 'text-[#5b0617] font-bold bg-[#ffdada]' : ''
                  }`} 
                  href="#faqs"
                >
                  <span className="material-symbols-outlined text-[18px]">quiz</span> 6. Preguntas Frecuentes
                </a>
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
          <div className="flex flex-col gap-16 print:gap-6 print:w-full">
            
            {/* SECCIÓN 1: ¿QUÉ ES EL HTLV? */}
            <section className="scroll-mt-28" id="what-is-htlv">
              <div className="bg-white border border-[#dcc0c0] rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-10 rounded-full bg-[#ffdada] text-[#5b0617] flex items-center justify-center font-bold">1</span>
                  <h2 className="font-headline-lg text-headline-lg text-[#5b0617]">¿Qué se sabe del HTLV?</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4 text-body-md text-[#191c1e] leading-relaxed">
                    <p>
                      El <strong>Virus Linfotrópico de Células T Humanas (HTLV)</strong> fue el <strong>primer retrovirus humano descubierto</strong> (1980). Pertenece a la familia <em>Retroviridae</em> y afecta predominantemente a los linfocitos T CD4+.
                    </p>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl text-center">
                        <span className="block text-[18px] font-extrabold text-[#5b0617]">HTLV-1</span>
                        <span className="text-[12px] text-[#564242]">Oncogénico y neurotrópico de alto impacto clínico.</span>
                      </div>
                      <div className="p-3 bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl text-center">
                        <span className="block text-[18px] font-extrabold text-[#555f6f]">HTLV-2</span>
                        <span className="text-[12px] text-[#564242]">Menor patogenicidad, prevalente en ciertas poblaciones.</span>
                      </div>
                    </div>
                    <p className="text-[14px] text-[#564242]">
                      A diferencia de otros virus, el HTLV se integra al genoma del hospedero en forma de <strong>provirus</strong> y se propaga principalmente por contacto célula a célula.
                    </p>
                  </div>

                  <div className="bg-[#f8f9fb] p-6 rounded-xl border border-[#dcc0c0] space-y-4">
                    <h4 className="text-[14px] font-bold text-[#191c1e] uppercase tracking-wider flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#5b0617]">public</span>
                      Datos Epidemiológicos Globales
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b border-[#dcc0c0]/50 pb-2">
                        <span className="text-[13px] text-[#564242]">Población Afectada:</span>
                        <strong className="text-[14px] text-[#5b0617]">5 - 10 Millones</strong>
                      </div>
                      <div className="flex justify-between items-center border-b border-[#dcc0c0]/50 pb-2">
                        <span className="text-[13px] text-[#564242]">Focos Principales:</span>
                        <strong className="text-[13px] text-[#191c1e]">Perú, Brasil, Japón, Caribe</strong>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[13px] text-[#564242]">Tipo de Retrovirus:</span>
                        <strong className="text-[13px] text-[#191c1e]">Deltaretrovirus (Integrado)</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECCIÓN 2: ESPECTRO CLÍNICO (90% ASINTOMÁTICOS VS 10% SINTOMÁTICOS) */}
            <section className="scroll-mt-28" id="clinical-spectrum">
              <div className="bg-white border border-[#dcc0c0] rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-10 rounded-full bg-[#ffdada] text-[#5b0617] flex items-center justify-center font-bold">2</span>
                  <div>
                    <h2 className="font-headline-lg text-headline-lg text-[#5b0617]">Espectro Clínico: El Modelo 90% vs 10%</h2>
                    <p className="text-[13px] text-[#564242]">Comprensión del curso natural de la infección y patologías asociadas</p>
                  </div>
                </div>

                {/* Infografía de Proporciones Clínicas */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-8">
                  {/* Tarjeta 90% Asintomáticos */}
                  <div className="md:col-span-5 bg-[#f3f4f6] border-2 border-[#555f6f]/30 p-6 rounded-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[36px] font-black text-[#555f6f] leading-none">~90%</span>
                        <span className="material-symbols-outlined text-3xl text-[#555f6f]">health_and_safety</span>
                      </div>
                      <h3 className="text-[18px] font-bold text-[#191c1e] mb-2">Portadores Asintomáticos</h3>
                      <p className="text-[13px] text-[#564242] leading-relaxed">
                        La gran mayoría de las personas que viven con HTLV-1 no desarrollarán síntomas a lo largo de su vida. No obstante, son portadores del provirus y pueden transmitirlo si no se aplican medidas preventivas.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#dcc0c0] text-[12px] font-semibold text-[#555f6f]">
                      Recomendación: Control anual de carga proviral.
                    </div>
                  </div>

                  {/* Tarjeta 10% Patologías Graves */}
                  <div className="md:col-span-7 bg-[#ffdada]/30 border-2 border-[#5b0617] p-6 rounded-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[36px] font-black text-[#5b0617] leading-none">5% - 10%</span>
                        <span className="material-symbols-outlined text-3xl text-[#5b0617]">warning</span>
                      </div>
                      <h3 className="text-[18px] font-bold text-[#5b0617] mb-2">Enfermedades Asociadas a HTLV-1</h3>
                      <p className="text-[13px] text-[#191c1e] mb-4">
                        Un porcentaje menor de portadores puede desarrollar manifestaciones clínicas severas:
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded-lg border border-[#dcc0c0]">
                          <strong className="block text-[13px] text-[#5b0617]">PET / HAM</strong>
                          <span className="text-[11px] text-[#564242]">Paraparesia Espástica Tropical. Trastorno neurológico crónico progresivo.</span>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-[#dcc0c0]">
                          <strong className="block text-[13px] text-[#5b0617]">LLTA / ATL</strong>
                          <span className="text-[11px] text-[#564242]">Leucemia/Linfoma de Células T del Adulto. Malignidad hematológica agresiva.</span>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-[#dcc0c0]">
                          <strong className="block text-[13px] text-[#5b0617]">Uveítis por HTLV-1</strong>
                          <span className="text-[11px] text-[#564242]">Inflamación ocular crónica con visión borrosa.</span>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-[#dcc0c0]">
                          <strong className="block text-[13px] text-[#5b0617]">Dermatitis Infecciosa</strong>
                          <span className="text-[11px] text-[#564242]">Eczema recidivante e infecciones cutáneas en niños.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECCIÓN 3: VÍAS DE TRANSMISIÓN */}
            <section className="scroll-mt-28" id="transmission">
              <div className="bg-white border border-[#dcc0c0] rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-10 rounded-full bg-[#ffdada] text-[#5b0617] flex items-center justify-center font-bold">3</span>
                  <h2 className="font-headline-lg text-headline-lg text-[#5b0617]">Vías de Transmisión y Prevención</h2>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  {/* Vía Vertical */}
                  <div className="bg-[#f8f9fb] border border-[#dcc0c0] p-6 rounded-xl text-center space-y-3 hover:border-[#5b0617] transition-all">
                    <div className="w-14 h-14 mx-auto rounded-full bg-[#ffdada] text-[#5b0617] flex items-center justify-center shadow-xs">
                      <span className="material-symbols-outlined text-3xl">child_care</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-[#191c1e]">1. Madre a Hijo (Vertical)</h3>
                    <p className="text-[13px] text-[#564242] leading-relaxed">
                      Principalmente por <strong>lactancia materna prolongada (&gt; 6 meses)</strong> mediante linfocitos infectados en la leche.
                    </p>
                    <div className="p-2 bg-white rounded border border-[#dcc0c0] text-[11px] font-bold text-[#5b0617]">
                      Prevención: Tamizaje gestacional y uso de fórmulas infantiles seguras.
                    </div>
                  </div>

                  {/* Vía Sexual */}
                  <div className="bg-[#f8f9fb] border border-[#dcc0c0] p-6 rounded-xl text-center space-y-3 hover:border-[#5b0617] transition-all">
                    <div className="w-14 h-14 mx-auto rounded-full bg-[#ffdada] text-[#5b0617] flex items-center justify-center shadow-xs">
                      <span className="material-symbols-outlined text-3xl">favorite</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-[#191c1e]">2. Vía Sexual</h3>
                    <p className="text-[13px] text-[#564242] leading-relaxed">
                      Contacto sexual sin protección. Mayor tasa de transmisión documentada de hombre a mujer.
                    </p>
                    <div className="p-2 bg-white rounded border border-[#dcc0c0] text-[11px] font-bold text-[#5b0617]">
                      Prevención: Uso consistente de preservativos de barrera.
                    </div>
                  </div>

                  {/* Vía Parenteral */}
                  <div className="bg-[#f8f9fb] border border-[#dcc0c0] p-6 rounded-xl text-center space-y-3 hover:border-[#5b0617] transition-all">
                    <div className="w-14 h-14 mx-auto rounded-full bg-[#ffdada] text-[#5b0617] flex items-center justify-center shadow-xs">
                      <span className="material-symbols-outlined text-3xl">bloodtype</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-[#191c1e]">3. Vía Parenteral</h3>
                    <p className="text-[13px] text-[#564242] leading-relaxed">
                      Transfusiones de componentes celulares no tamizados, trasplante de órganos o uso compartido de agujas.
                    </p>
                    <div className="p-2 bg-white rounded border border-[#dcc0c0] text-[11px] font-bold text-[#5b0617]">
                      Prevención: Tamizaje serológico obligatorio en bancos de sangre.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECCIÓN 4: LIDERAZGO CIENTÍFICO DE PERÚ Y LA UPCH */}
            <section className="scroll-mt-28" id="peru-leadership">
              <div className="bg-[#5b0617] text-white rounded-2xl p-6 md:p-10 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-10 rounded-full bg-white text-[#5b0617] flex items-center justify-center font-bold">4</span>
                  <h2 className="text-[24px] md:text-[28px] font-bold">
                    Perú y Cayetano Heredia: Referentes Mundiales
                  </h2>
                </div>

                <div className="grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4 text-[14px] leading-relaxed opacity-95">
                    <p>
                      El <strong>Perú</strong> alberga una de las poblaciones con mayor prevalencia de HTLV-1 a nivel global, con focos históricos en la cuenca andina y regiones costeras.
                    </p>
                    <p>
                      El <strong>Instituto de Medicina Tropical Alexander von Humboldt (IMTAvH)</strong> de la <strong>Universidad Peruana Cayetano Heredia (UPCH)</strong> es pionero en la investigación mundial sobre HTLV, liderando estudios fundamentales en:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-[13px]">
                      <li>Evolución clínica y factores de riesgo en Paraparesia Espástica Tropical (HAM/TSP).</li>
                      <li>Interacción biológica y coinfección de HTLV-1 con Tuberculosis (TB) y Estrongiloidiasis.</li>
                      <li>Desarrollo y validación de técnicas de diagnóstico molecular por PCR en tiempo real.</li>
                    </ul>
                  </div>

                  <div className="md:col-span-5 bg-white/10 p-6 rounded-xl border border-white/20 space-y-4 backdrop-blur-xs">
                    <h4 className="text-[13px] uppercase font-bold tracking-wider text-[#ffdada]">
                      Comité y Doctores Referentes
                    </h4>
                    <div className="space-y-3 text-[13px]">
                      <div className="border-b border-white/20 pb-2">
                        <strong className="block text-white">Dr. Eduardo Gotuzzo</strong>
                        <span className="text-[11px] opacity-80">Profesor Emérito UPCH • Referente Mundial en Enfermedades Tropicales e Infecciosas</span>
                      </div>
                      <div className="border-b border-white/20 pb-2">
                        <strong className="block text-white">Dra. Elsa González</strong>
                        <span className="text-[11px] opacity-80">Investigadora Principal IMTAvH-UPCH • Especialista en HTLV y Retrovirología</span>
                      </div>
                      <div>
                        <strong className="block text-white">Red Internacional RIII-HTLV</strong>
                        <span className="text-[11px] opacity-80">Alianza con Imperial College London, Institut Pasteur y Fiocruz</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECCIÓN 5: DIAGNÓSTICO Y MANEJO CLÍNICO */}
            <section className="scroll-mt-28" id="diagnosis">
              <div className="bg-white border border-[#dcc0c0] rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-10 rounded-full bg-[#ffdada] text-[#5b0617] flex items-center justify-center font-bold">5</span>
                  <h2 className="font-headline-lg text-headline-lg text-[#5b0617]">Algoritmo de Diagnóstico y Manejo</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="p-5 bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl">
                    <span className="text-[12px] font-bold text-[#5b0617] uppercase block mb-1">Paso 1: Tamizaje</span>
                    <h4 className="font-bold text-[15px] text-[#191c1e] mb-2">ELISA / Quimioluminiscencia</h4>
                    <p className="text-[12px] text-[#564242]">Prueba inicial para detectar anticuerpos totales anti-HTLV-1/2.</p>
                  </div>
                  <div className="p-5 bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl">
                    <span className="text-[12px] font-bold text-[#5b0617] uppercase block mb-1">Paso 2: Confirmación</span>
                    <h4 className="font-bold text-[15px] text-[#191c1e] mb-2">Western Blot / LIA</h4>
                    <p className="text-[12px] text-[#564242]">Diferenciación específica entre serotipos HTLV-1 y HTLV-2.</p>
                  </div>
                  <div className="p-5 bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl">
                    <span className="text-[12px] font-bold text-[#5b0617] uppercase block mb-1">Paso 3: Monitoreo</span>
                    <h4 className="font-bold text-[15px] text-[#191c1e] mb-2">PCR Cuantitativa (Carga Proviral)</h4>
                    <p className="text-[12px] text-[#564242]">Medición del número de copias virales integradas por 100 células.</p>
                  </div>
                </div>

                <div className="p-4 bg-[#ffdada]/30 border border-[#dcc0c0] rounded-xl flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#5b0617] mt-0.5">info</span>
                  <p className="text-[12px] text-[#564242] leading-relaxed">
                    <strong>Pauta de Seguimiento:</strong> Las personas asintomáticas deben realizarse un control clínico y neurológico anual. En casos de diagnóstico de HAM/TSP o ATL, se activa el protocolo multidisciplinario de infectología, neurología, hematología y rehabilitación.
                  </p>
                </div>
              </div>
            </section>

            {/* SECCIÓN 6: PREGUNTAS FRECUENTES (FAQ) CON SCHEMA SEO */}
            <section className="scroll-mt-28" id="faqs">
              <div className="bg-white border border-[#dcc0c0] rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-10 rounded-full bg-[#ffdada] text-[#5b0617] flex items-center justify-center font-bold">6</span>
                  <div>
                    <h2 className="font-headline-lg text-headline-lg text-[#5b0617]">Preguntas Frecuentes sobre el HTLV</h2>
                    <p className="text-[13px] text-[#564242]">Respuestas directas basadas en evidencia biomédica</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <details className="group bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl overflow-hidden transition-all duration-200">
                    <summary className="flex justify-between items-center p-5 cursor-pointer list-none font-bold text-[15px] text-[#191c1e]">
                      <span>¿El HTLV-1 es lo mismo que el VIH?</span>
                      <span className="material-symbols-outlined text-[#5b0617] transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="px-5 pb-5 text-[13px] text-[#564242] leading-relaxed border-t border-[#dcc0c0]/40 pt-3">
                      No. Aunque ambos son retrovirus, el HTLV no produce el síndrome de inmunodeficiencia adquirida (SIDA). En lugar de destruir las células T, el HTLV-1 causa proliferación celular desregulada (que en raros casos evoluciona a leucemia ATL) o respuestas inflamatorias en la médula espinal (HAM/TSP).
                    </div>
                  </details>

                  <details className="group bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl overflow-hidden transition-all duration-200">
                    <summary className="flex justify-between items-center p-5 cursor-pointer list-none font-bold text-[15px] text-[#191c1e]">
                      <span>¿Existe cura o vacuna para el HTLV?</span>
                      <span className="material-symbols-outlined text-[#5b0617] transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="px-5 pb-5 text-[13px] text-[#564242] leading-relaxed border-t border-[#dcc0c0]/40 pt-3">
                      Actualmente no existe una vacuna disponible ni un tratamiento curativo que elimine el virus. El enfoque médico consiste en la prevención activa, el monitoreo periódico de la carga proviral y el tratamiento oportuno de las complicaciones inflamatorias o hematológicas.
                    </div>
                  </details>

                  <details className="group bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl overflow-hidden transition-all duration-200">
                    <summary className="flex justify-between items-center p-5 cursor-pointer list-none font-bold text-[15px] text-[#191c1e]">
                      <span>¿Cómo se previene la transmisión de madre a hijo?</span>
                      <span className="material-symbols-outlined text-[#5b0617] transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="px-5 pb-5 text-[13px] text-[#564242] leading-relaxed border-t border-[#dcc0c0]/40 pt-3">
                      La principal medida preventiva es el tamizaje serológico prenatal de la madre. En madres seropositivas para HTLV-1, la recomendación pediátrica internacional es suspender la lactancia materna y alimentar al recién nacido con sucedáneos de leche materna (fórmula).
                    </div>
                  </details>

                  <details className="group bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl overflow-hidden transition-all duration-200">
                    <summary className="flex justify-between items-center p-5 cursor-pointer list-none font-bold text-[15px] text-[#191c1e]">
                      <span>¿Dónde puedo realizarme una prueba de descarte en el Perú?</span>
                      <span className="material-symbols-outlined text-[#5b0617] transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="px-5 pb-5 text-[13px] text-[#564242] leading-relaxed border-t border-[#dcc0c0]/40 pt-3">
                      En el Perú, el despistaje serológico se realiza en bancos de sangre autorizados, hospitales de referencia nacional y en centros de excelencia como el Instituto de Medicina Tropical Alexander von Humboldt (UPCH) en Lima.
                    </div>
                  </details>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}