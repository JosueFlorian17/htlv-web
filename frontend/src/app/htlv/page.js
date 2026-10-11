"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function HTLVPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const faqs = [
    {
      q: "¿Qué significa tener HTLV-1 y en qué se diferencia del VIH?",
      a: "El HTLV (Virus Linfotrópico de Células T Humanas) y el VIH son ambos retrovirus que infectan linfocitos, pero son virus completamente distintos que causan patologías diferentes. A diferencia del VIH, el HTLV-1 NO produce inmunodeficiencia adquirida generalizada (SIDA). La inmensa mayoría de las personas con HTLV-1 (~90%) permanecen como portadores asintomáticos durante toda su vida sin desarrollar enfermedades graves."
    },
    {
      q: "¿Cuáles son las principales enfermedades asociadas al HTLV-1?",
      a: "Aproximadamente entre el 5% y el 10% de los portadores de HTLV-1 pueden desarrollar con los años afecciones específicas: 1) Paraparesia Espástica Tropical / Mielopatía Asociada a HTLV (HAM/TSP), un cuadro neurológico inflamatorio crónico que afecta la movilidad de las extremidades inferiores y la vejiga; 2) Leucemia/Linfoma de Células T del Adulto (ATL), una neoplasia hematológica; 3) Manifestaciones inflamatorias secundarias como uveítis, dermatitis infecciosa y artritis."
    },
    {
      q: "¿Cómo se transmite el HTLV?",
      a: "El virus se transmite principalmente por tres vías que requieren el paso de células vivas infectadas: 1) De madre a hijo a través de la lactancia materna prolongada (la vía vertical más importante); 2) Vía sexual sin preservativo, con mayor eficiencia de hombre a mujer; 3) Vía sanguínea, principalmente por transfusión de hemoderivados no tamizados o intercambio de agujas contaminadas."
    },
    {
      q: "¿El HTLV se contagia por abrazar, besar, compartir vasos o contacto casual?",
      a: "NO. El HTLV no se transmite por la saliva, el sudor, lágrimas, abrazos, besos, cubiertos, inodoros ni picaduras de insectos. La convivencia familiar cotidiana y social es completamente segura y no representa ningún riesgo de transmisión."
    },
    {
      q: "¿Cómo se diagnostica la infección por HTLV?",
      a: "El diagnóstico se realiza mediante una prueba serológica de tamizaje en sangre (ELISA o quimioluminiscencia). Si resulta positiva o reactiva, SIEMPRE debe ser confirmada mediante una segunda prueba especializada, como Western Blot o pruebas moleculares de PCR / carga proviral para determinar si es HTLV-1 o HTLV-2."
    },
    {
      q: "¿Existe tratamiento para erradicar el virus del cuerpo?",
      a: "Actualmente no existe un tratamiento farmacológico capaz de eliminar completamente el virus del organismo (similar a otros retrovirus y virus como el herpes). Sin embargo, existe manejo clínico muy efectivo para los síntomas, fisioterapia especializada, inmunomoduladores para HAM/TSP y quimioterapia/anticuerpos monoclonales para ATL. El seguimiento periódico con el especialista es la piedra angular del bienestar."
    },
    {
      q: "¿Qué precauciones debe tomar una persona con diagnóstico positivo?",
      a: "Las medidas recomendadas son: 1) No donar sangre, órganos ni semen; 2) Utilizar preservativo en relaciones sexuales con parejas no portadoras; 3) En mujeres gestantes, planificar una lactancia segura mediante sucedáneos de leche materna bajo supervisión médica; 4) Realizar controles médicos anuales de seguimiento con el equipo de infectología o neurología."
    }
  ];

  return (
    <main className="w-full bg-[#f8f9fb] min-h-screen py-10 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        
        {/* Cabecera Principal */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-14">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="px-3 py-1 bg-[#ffdada] text-[#5b0617] text-[12px] font-black uppercase tracking-widest rounded-full">
              Información Científica & Médica
            </span>
            <span className="px-3 py-1 bg-[#d6e0f3] text-[#1d2b3a] text-[12px] font-bold rounded-full">
              Diferenciado de la Gestión de la Red
            </span>
          </div>

          <h1 className="text-[34px] sm:text-[46px] font-black text-[#191c1e] tracking-tight leading-tight">
            Virus Linfotrópico de Células T Humanas (HTLV)
          </h1>
          <p className="text-[17px] text-[#564242] leading-relaxed max-w-3xl mx-auto">
            Guía de referencia sobre biología viral, tipos de HTLV, espectro clínico, formas de transmisión y respuestas médicas a dudas frecuentes.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={handlePrint}
              className="bg-[#5b0617] text-white px-5 py-2.5 rounded-xl text-[14px] font-bold hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px]">print</span>
              <span>Imprimir / Guardar en PDF</span>
            </button>
            <Link
              href="/pacientes"
              className="bg-white border border-[#dcc0c0] text-[#564242] hover:text-[#5b0617] px-5 py-2.5 rounded-xl text-[14px] font-bold hover:bg-[#ffdada]/30 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">favorite</span>
              <span>¿Eres paciente? Consulta aquí</span>
            </Link>
          </div>
        </div>

        {/* 1. ¿Qué es el HTLV? y Virología */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#dcc0c0] shadow-xs space-y-6">
            <div>
              <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#5b0617] block mb-1">
                Fundamentos Biomédicos
              </span>
              <h2 className="text-[26px] font-black text-[#191c1e]">
                ¿Qué es el HTLV?
              </h2>
            </div>

            <p className="text-[15.5px] text-[#564242] leading-relaxed">
              El <strong>HTLV (Human T-cell Lymphotropic Virus)</strong> fue el primer retrovirus humano descubierto (en 1980 por el equipo del Dr. Robert Gallo). Es un retrovirus del género <em>Deltaretrovirus</em> que infecta principalmente a las células del sistema inmunitario llamadas <strong>linfocitos T</strong> (tanto CD4+ como CD8+).
            </p>
            <p className="text-[15.5px] text-[#564242] leading-relaxed">
              A través de la enzima transcriptasa reversa, el virus integra su material genético en el ADN celular del huésped en forma de provirus. Esto genera una infección crónica y persistente que acompaña a la persona durante toda su vida, aunque en la gran mayoría no llega a producir síntomas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              <div className="p-5 rounded-xl bg-[#f8f9fb] border border-[#dcc0c0]">
                <div className="flex items-center gap-2 text-[#5b0617] font-bold text-[16px] mb-2">
                  <span className="material-symbols-outlined">coronavirus</span>
                  <span>HTLV-1 (Tipo 1)</span>
                </div>
                <p className="text-[13.5px] text-[#564242] leading-relaxed">
                  Es el tipo de mayor relevancia médica global. Se asocia directamente al desarrollo de Paraparesia Espástica Tropical (HAM/TSP), Leucemia de Células T del Adulto (ATL), uveítis y dermatitis infecciosa. Es prevalente en Perú, Japón, Brasil, el Caribe y África subsahariana.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#f8f9fb] border border-[#dcc0c0]">
                <div className="flex items-center gap-2 text-[#1d2b3a] font-bold text-[16px] mb-2">
                  <span className="material-symbols-outlined">biotech</span>
                  <span>HTLV-2 (Tipo 2)</span>
                </div>
                <p className="text-[13.5px] text-[#564242] leading-relaxed">
                  Presenta una patogenicidad mucho menor. Se encuentra frecuentemente en pueblos originarios de América y en personas que comparten material de inyección. Muy rara vez se asocia a trastornos neurológicos subagudos.
                </p>
              </div>
            </div>
          </div>

          {/* 2. El Espectro Clínico (La Regla del 90/10) */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#dcc0c0] shadow-xs space-y-6">
            <div>
              <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#5b0617] block mb-1">
                Evolución de la Infección
              </span>
              <h2 className="text-[26px] font-black text-[#191c1e]">
                El Espectro Clínico: Portadores Asintomáticos vs. Enfermedad
              </h2>
            </div>

            <p className="text-[15.5px] text-[#564242] leading-relaxed">
              El aspecto más tranquilizador y clínicamente relevante del HTLV-1 es su comportamiento en la población:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-6 p-6 rounded-2xl bg-[#ffdada]/30 border-2 border-[#5b0617]/30 text-center space-y-2">
                <span className="text-[44px] font-black text-[#5b0617] block leading-none">~90%</span>
                <h3 className="text-[18px] font-bold text-[#191c1e]">Portadores Asintomáticos</h3>
                <p className="text-[13.5px] text-[#564242] leading-relaxed">
                  La gran mayoría de las personas con el virus conviven con él de manera equilibrada y <strong>nunca desarrollarán ninguna patología asociada</strong> a lo largo de su vida.
                </p>
              </div>

              <div className="md:col-span-6 p-6 rounded-2xl bg-[#f8f9fb] border border-[#dcc0c0] text-center space-y-2">
                <span className="text-[44px] font-black text-[#1d2b3a] block leading-none">5% - 10%</span>
                <h3 className="text-[18px] font-bold text-[#191c1e]">Riesgo de Patología a Largo Plazo</h3>
                <p className="text-[13.5px] text-[#564242] leading-relaxed">
                  Solo una pequeña fracción puede desarrollar complicaciones tras décadas de infección, principalmente mediadas por carga proviral elevada o predisposición genética.
                </p>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <h3 className="text-[18px] font-bold text-[#191c1e]">Patologías Asociadas al HTLV-1:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-[#dcc0c0] bg-white">
                  <h4 className="font-bold text-[15px] text-[#5b0617] mb-1">Paraparesia Espástica Tropical (HAM/TSP)</h4>
                  <p className="text-[13px] text-[#564242]">
                    Afecta entre el 2% y 3% de portadores. Causa rigidez muscular, dificultad progresiva para caminar y disfunción urinaria debido a inflamación en la médula espinal.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-[#dcc0c0] bg-white">
                  <h4 className="font-bold text-[15px] text-[#5b0617] mb-1">Leucemia/Linfoma de Células T (ATL)</h4>
                  <p className="text-[13px] text-[#564242]">
                    Ocurre en 2% a 5%, predominantemente en personas infectadas durante la infancia por lactancia materna prolongada. Es una proliferación neoplásica de linfocitos T.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Vías de Transmisión y Prevención */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#dcc0c0] shadow-xs space-y-6">
            <div>
              <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#5b0617] block mb-1">
                Epidemiología y Cuidados
              </span>
              <h2 className="text-[26px] font-black text-[#191c1e]">
                ¿Cómo se Transmite y Cómo se Previene?
              </h2>
            </div>

            <p className="text-[15.5px] text-[#564242] leading-relaxed">
              El virus necesita células vivas para pasar de una persona a otra. Se transmite únicamente por:
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-[#f8f9fb] rounded-xl border border-[#dcc0c0] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#5b0617] text-2xl mt-0.5">child_care</span>
                <div>
                  <h4 className="font-bold text-[15px] text-[#191c1e]">1. Transmisión Madre-Hijo (Lactancia Materna)</h4>
                  <p className="text-[13.5px] text-[#564242] mt-0.5">
                    Ocurre fundamentalmente por la leche materna con lactancias mayores a 6 meses. La prevención consiste en el tamizaje prenatal de la madre y el uso de fórmulas sucedáneas de leche materna recomendadas por el médico.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#f8f9fb] rounded-xl border border-[#dcc0c0] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#5b0617] text-2xl mt-0.5">favorite_border</span>
                <div>
                  <h4 className="font-bold text-[15px] text-[#191c1e]">2. Transmisión Sexual</h4>
                  <p className="text-[13.5px] text-[#564242] mt-0.5">
                    A través de relaciones sexuales sin protección. La prevención se logra mediante el uso consistente y correcto del preservativo.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#f8f9fb] rounded-xl border border-[#dcc0c0] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#5b0617] text-2xl mt-0.5">bloodtype</span>
                <div>
                  <h4 className="font-bold text-[15px] text-[#191c1e]">3. Transmisión Sanguínea</h4>
                  <p className="text-[13.5px] text-[#564242] mt-0.5">
                    Históricamente por transfusión de sangre celular. Hoy en día, el tamizaje universal en bancos de sangre en países como Perú ha reducido drásticamente esta vía.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Preguntas Frecuentes (FAQs de Eduardo Gotuzzo y Yoshi Ishikawa) */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#dcc0c0] shadow-xs space-y-6">
            <div>
              <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#5b0617] block mb-1">
                Preguntas Frecuentes (FAQs)
              </span>
              <h2 className="text-[26px] font-black text-[#191c1e]">
                Dudas Habituales sobre el HTLV
              </h2>
              <p className="text-[14.5px] text-[#564242] mt-1">
                Respuestas consensuadas por los infectólogos y especialistas de la Red Internacional RIII-HTLV.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index}
                    className="border border-[#dcc0c0] rounded-xl overflow-hidden transition-all bg-[#f8f9fb]"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-5 text-left font-bold text-[15.5px] text-[#191c1e] hover:text-[#5b0617] flex items-center justify-between gap-4 transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="material-symbols-outlined text-2xl text-[#5b0617] flex-shrink-0">
                        {isOpen ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="p-5 pt-0 text-[14px] text-[#564242] leading-relaxed border-t border-[#dcc0c0]/50 bg-white">
                        <div className="pt-3">
                          {faq.a}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-4 text-center">
              <Link
                href="/pacientes"
                className="inline-flex items-center gap-2 text-[#5b0617] font-bold text-[14px] hover:underline"
              >
                <span>¿Tienes una duda que no aparece aquí? Envíanos tu pregunta en el espacio de pacientes</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
