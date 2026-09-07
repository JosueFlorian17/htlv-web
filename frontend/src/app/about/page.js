"use client";

import { useState, useEffect } from 'react';

export default function AboutHTLVPage() {
  const [activeSection, setActiveSection] = useState('what-is-htlv');

  // IntersectionObserver para alternar los estados del menú lateral de manera asíncrona
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
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

  return (
    <>
      <main className="pt-12 pb-20 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
        <header className="mb-16">
          <h1 className="font-display text-display text-primary mb-4">Virus Linfotrópico de Células T Humanas (HTLV)</h1>
          <p className="font-body-lg text-body-lg text-[#564242] max-w-3xl">
            Una guía clínica y de investigación integral para comprender el HTLV-1 y el HTLV-2, sus impactos fisiológicos y los protocolos de manejo actuales dentro de los marcos de salud global.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Sticky Sidebar Navigation (SideNavBar Pattern) */}
          <aside className="hidden lg:block sticky top-28 h-[calc(100vh-160px)] overflow-y-auto pr-2">
            <div className="bg-[#f3f4f6] p-6 rounded-xl shadow-sm border border-[#dcc0c0]">
              <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#564242] mb-6">Navegación</h3>
              <nav className="flex flex-col gap-2">
                <a 
                  className={`flex items-center gap-3 px-4 py-3 text-[14px] font-medium text-[#564242] hover:bg-[#e7e8ea] transition-all rounded-lg ${
                    activeSection === 'what-is-htlv' ? 'text-[#5b0617] font-bold bg-[#ffdada]' : ''
                  }`} 
                  href="#what-is-htlv"
                >
                  <span className="material-symbols-outlined">info</span> ¿Qué es el HTLV?
                </a>
                <a 
                  className={`flex items-center gap-3 px-4 py-3 text-[14px] font-medium text-[#564242] hover:bg-[#e7e8ea] transition-all rounded-lg ${
                    activeSection === 'transmission' ? 'text-[#5b0617] font-bold bg-[#ffdada]' : ''
                  }`} 
                  href="#transmission"
                >
                  <span className="material-symbols-outlined">share</span> Transmisión
                </a>
                <a 
                  className={`flex items-center gap-3 px-4 py-3 text-[14px] font-medium text-[#564242] hover:bg-[#e7e8ea] transition-all rounded-lg ${
                    activeSection === 'diagnosis' ? 'text-[#5b0617] font-bold bg-[#ffdada]' : ''
                  }`} 
                  href="#diagnosis"
                >
                  <span className="material-symbols-outlined">biotech</span> Diagnóstico
                </a>
                <a 
                  className={`flex items-center gap-3 px-4 py-3 text-[14px] font-medium text-[#564242] hover:bg-[#e7e8ea] transition-all rounded-lg ${
                    activeSection === 'treatment' ? 'text-[#5b0617] font-bold bg-[#ffdada]' : ''
                  }`} 
                  href="#treatment"
                >
                  <span className="material-symbols-outlined">medical_services</span> Tratamiento
                </a>
                <a 
                  className={`flex items-center gap-3 px-4 py-3 text-[14px] font-medium text-[#564242] hover:bg-[#e7e8ea] transition-all rounded-lg ${
                    activeSection === 'faqs' ? 'text-[#5b0617] font-bold bg-[#ffdada]' : ''
                  }`} 
                  href="#faqs"
                >
                  <span className="material-symbols-outlined">quiz</span> Preguntas Frecuentes
                </a>
              </nav>
              <div className="mt-8 pt-8 border-t border-[#dcc0c0]">
                <button className="w-full bg-[#5b0617] text-white py-3 rounded-lg text-[14px] font-bold hover:opacity-90 transition-all cursor-pointer">
                  Portal de Miembros
                </button>
              </div>
            </div>
          </aside>

          {/* Content Sections */}
          <div className="flex flex-col gap-20">
            {/* Section: What is HTLV? */}
            <section className="scroll-mt-32" id="what-is-htlv">
              <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden p-8 shadow-sm hover:border-[#5b0617] transition-all duration-200">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-6">¿Qué es el HTLV?</h2>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="space-y-4 font-body-md text-body-md text-[#191c1e] leading-relaxed">
                    <p>El virus linfotrópico T humano (HTLV) es un retrovirus que infecta predominantemente a los linfocitos T CD4+. A diferencia del VIH, el HTLV-1 y el HTLV-2 se asocian típicamente con una infección crónica en la que la mayoría de las personas permanecen como portadores asintomáticos a lo largo de su vida.</p>
                    <p>Sin embargo, aproximadamente entre el 5% y el 10% de las personas infectadas desarrollan condiciones clínicas graves, que incluyen:</p>
                    <ul className="list-disc pl-5 space-y-2 text-on-surface-variant">
                      <li>Leucemia/Linfoma de células T del adulto (ATL)</li>
                      <li>Mielopatía asociada al HTLV-1 / Paraparesia espástica tropical (HAM/TSP)</li>
                      <li>Trastornos inflamatorios crónicos (Uveítis, Dermatitis)</li>
                    </ul>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-[#dcc0c0] aspect-video">
                    <img className="w-full h-full object-cover" alt="Ilustración científica del virión HTLV-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs_ADncYu3IQcJxFxpu0kOP5pnS5GRkFRzvvkbICMG9Oce33JHFTQMkyP57gtCJFnApfDqwtjpwgQIAbwBpW6NORgt4yacS-7hR-5Jn36QwK3D_oF6d8lVu-mxR5XBVZF3JxLuN0BgZ6OYdwqa7Jg3VOZt3oeq1Lg53YUd-kANDXPw9GnZm325dFVQcBEgNK6jF3lw42RuqJftpYNO_oUBbsU22bdCqK2yU_cFbh59CClyAAVbeZLjqwkhDPGvfXp5NihQfRV0vss" />
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Transmission */}
            <section className="scroll-mt-32" id="transmission">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-8 px-2">Vías de Transmisión</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white border border-[#E5E7EB] p-8 rounded-xl text-center space-y-4 shadow-sm hover:border-primary transition-all">
                  <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>child_care</span>
                  <h3 className="font-headline-md text-headline-md text-[#191c1e]">Vertical</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Primordialmente a través de la lactancia prolongada (generalmente &gt;6 meses), donde el virus está presente en los linfocitos dentro de la leche materna.</p>
                </div>
                <div className="bg-white border border-[#E5E7EB] p-8 rounded-xl text-center space-y-4 shadow-sm hover:border-primary transition-all">
                  <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  <h3 className="font-headline-md text-headline-md text-[#191c1e]">Sexual</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Transmisión mediante contacto sexual sin protección. Los estudios indican una mayor eficiencia de transmisión de hombre a mujer.</p>
                </div>
                <div className="bg-white border border-[#E5E7EB] p-8 rounded-xl text-center space-y-4 shadow-sm hover:border-primary transition-all">
                  <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>bloodtype</span>
                  <h3 className="font-headline-md text-headline-md text-[#191c1e]">Parenteral</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Por transfusión de productos sanguíneos contaminados, trasplante de órganos o intercambio de agujas en usuarios de drogas inyectables.</p>
                </div>
              </div>
            </section>

            {/* Section: Diagnosis */}
            <section className="scroll-mt-32" id="diagnosis">
              <div className="bg-white border border-[#E5E7EB] rounded-xl p-8 shadow-sm hover:border-primary transition-all">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Vías de Diagnóstico</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-primary">1</div>
                      <div>
                        <h4 className="font-label-md text-label-md text-primary uppercase mb-1">Tamizaje</h4>
                        <p className="font-body-md text-body-md text-[#191c1e]">Ensayos inmunoenzimáticos (EIA) o inmunoensayos quimioluminiscentes (CLIA) para detectar anticuerpos contra HTLV-1/2.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-primary">2</div>
                      <div>
                        <h4 className="font-label-md text-label-md text-primary uppercase mb-1">Confirmatorio</h4>
                        <p className="font-body-md text-body-md text-[#191c1e]">Western Blot o inmunodiagnóstico en línea (LIA) para diferenciar entre los tipos HTLV-1 y HTLV-2.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-primary">3</div>
                      <div>
                        <h4 className="font-label-md text-label-md text-primary uppercase mb-1">Molecular</h4>
                        <p className="font-body-md text-body-md text-[#191c1e]">Reacción en cadena de la polimerasa (PCR) para cuantificar la carga proviral, crucial para monitorear la progresión de la enfermedad.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#f3f4f6] rounded-lg p-6 flex flex-col justify-center border border-[#dcc0c0]">
                    <p className="italic text-on-surface-variant font-body-md mb-4 text-center">"El diagnóstico temprano es clave para prevenir la transmisión secundaria y garantizar un control de por vida ante la progresión sintomática."</p>
                    <div className="flex justify-center">
                      <img className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-sm" alt="Técnico de laboratorio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCFzJcS4XQz33g1ZOJF2fMADRrJ4Nk-Y9FK0qHMT6qq9Vx8MvtJeMNGwWd2Wvl8Urz8v0DmcRl1XRgSn6DlQQ0DZ4NZz2xSY-YjVh_Ugtfkv3MXwuRiP7qvrXdRAMbYsfo7RMKGVqbqKC5plim7MELc13qU6FgZmE9huyF7E2xbcWWVbQNVRMGjShge2DotpHtNsCYLSNLSEhDTrw9esDxvK6-kcLZKq5W2zhFiAsLhwSfQYEP_p6LeRo-eX9wQFqouvK0hCBD77Q" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Treatment */}
            <section className="scroll-mt-32" id="treatment">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-8 px-2">Manejo Clínico</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border border-[#E5E7EB] p-8 rounded-xl border-l-4 border-l-primary shadow-sm hover:border-primary transition-all">
                  <h3 className="font-headline-md text-headline-md mb-4 text-[#191c1e]">Enfoques Terapéuticos</h3>
                  <ul className="space-y-4 font-body-md text-body-md text-[#191c1e]">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      <span><strong>Asintomáticos:</strong> Monitoreo periódico de recuentos de CD4/CD8 y carga proviral cada 6-12 meses.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      <span><strong>ATL:</strong> Quimioterapia agresiva combinada con Zidovudina e Interferón alfa.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      <span><strong>HAM/TSP:</strong> Corticoesteroides y fisioterapia para controlar el deterioro neurológico y la inflamación.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border border-[#E5E7EB] p-8 rounded-xl border-l-4 border-l-secondary shadow-sm hover:border-[#555f6f] transition-all">
                  <h3 className="font-headline-md text-headline-md mb-4 text-[#191c1e]">Pautas de Cuidado del Paciente</h3>
                  <ul className="space-y-4 font-body-md text-body-md text-[#191c1e]">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-xl">info</span>
                      <span>Educación sobre prevención de la transmisión mediante métodos de barrera y evitar la lactancia materna.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-xl">info</span>
                      <span>Apoyo psicológico para portadores crónicos para manejar el impacto emocional del diagnóstico.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-xl">info</span>
                      <span>Integración con departamentos de neurología y oncología para una atención multidisciplinaria coordinada.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section: FAQs */}
            <section className="scroll-mt-32" id="faqs">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-8 px-2">Preguntas Frecuentes</h2>
              <div className="space-y-4">
                <details className="group bg-white border border-[#E5E7EB] rounded-xl shadow-sm hover:border-[#5b0617] transition-all duration-200">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <span className="font-headline-md text-headline-md text-[#191c1e]">¿Existe una vacuna para el HTLV?</span>
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 font-body-md text-body-md text-on-surface-variant">
                    <p>Actualmente no existe una vacuna disponible comercialmente para HTLV-1 o HTLV-2. La investigación sobre vacunas preventivas sigue en curso, pero el enfoque principal sigue siendo el tamizaje y la prevención de la transmisión.</p>
                  </div>
                </details>
                <details className="group bg-white border border-[#E5E7EB] rounded-xl shadow-sm hover:border-[#5b0617] transition-all duration-200">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <span className="font-headline-md text-headline-md text-[#191c1e]">¿Puede el HTLV-1 causar SIDA?</span>
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 font-body-md text-body-md text-on-surface-variant">
                    <p>No. Aunque el HTLV es un retrovirus como el VIH, no suele causar la inmunodeficiencia profunda característica del SIDA. En su lugar, provoca proliferación celular descontrolada (leucemia) o respuestas inflamatorias.</p>
                  </div>
                </details>
                <details className="group bg-white border border-[#E5E7EB] rounded-xl shadow-sm hover:border-[#5b0617] transition-all duration-200">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <span className="font-headline-md text-headline-md text-[#191c1e]">¿Qué tan común es el HTLV a nivel mundial?</span>
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 font-body-md text-body-md text-on-surface-variant">
                    <p>Se estima que entre 5 y 10 millones de personas viven con HTLV-1 en todo el mundo. Es altamente endémico en Japón, la región del Caribe, partes de América del Sur y el África subsahariana.</p>
                  </div>
                </details>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}