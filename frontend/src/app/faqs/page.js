"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function FAQsPage() {
  const [copied, setCopied] = useState(false);

  const handleDownloadPDF = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const faqList = [
    {
      id: 1,
      q: "1. ¿Qué es el HTLV?",
      a: "El Virus Linfotrópico de Células T Humanas (HTLV, por sus siglas en inglés) es una infección viral crónica causada por dos retrovirus humanos relacionados: el HTLV-1 y el HTLV-2. El HTLV-1 afecta predominantemente a los linfocitos T CD4+ y está asociado a neoplasias hematológicas y enfermedades inflamatorias de la médula espinal, mientras que el HTLV-2 infecta principalmente linfocitos T CD8+ y suele presentar un curso clínico más benigno. Una vez que una persona adquiere el HTLV, el provirus integra su genoma en el ADN del huésped y permanece en el organismo de forma permanente, pudiendo reactivarse o inducir proliferación celular con el tiempo. (Poiesz et al., 1980; Hinuma et al., 1981; Bangham, 2018; Matsuoka & Jeang, 2011)."
    },
    {
      id: 2,
      q: "2. ¿Qué tan común es el HTLV?",
      a: "El HTLV es una infección prevalente en diversas regiones del mundo, estimándose que entre 5 y 10 millones de personas viven con el HTLV-1 a nivel global. Las zonas de mayor prevalencia incluyen el suroeste de Japón, África subsahariana, las islas del Caribe, comunidades aborígenes de Australia Central y la cuenca andina de Sudamérica. En el Perú, la seroprevalencia en la población general y donantes de sangre se sitúa entre el 1% y el 3%, alcanzando tasas de hasta 4% a 7% en poblaciones específicas de la sierra y la selva. Muchas personas con HTLV desconocen su estado serológico debido a que no experimentan síntomas evidentes durante décadas. (Looker et al., 2015; Gessain & Cassar, 2012; Gotuzzo et al., 2010; OMS, 2021)."
    },
    {
      id: 3,
      q: "3. ¿Cómo se transmite el HTLV?",
      a: "El HTLV se transmite a través del contacto directo célula a célula con fluidos corporales que contienen linfocitos infectados vivos. Las principales vías de transmisión son: (1) Transmisión vertical de madre a hijo, predominantemente a través de la lactancia materna prolongada (>6 meses); (2) Transmisión por vía sexual, mediante relaciones sexuales desprotegidas (con mayor eficiencia de hombre a mujer); y (3) Transmisión parenteral o transfusional, a través de transfusiones de sangre o hemoderivados celulares no tamizados y el uso compartido de agujas contaminadas. El virus no se transmite por contacto casual, abrazos, compartir vajilla, agua, alimentos ni por picaduras de mosquitos. (Paiva & Casseb, 2015; Rosadas & Taylor, 2019; CDC, 2021)."
    },
    {
      id: 4,
      q: "4. ¿Qué síntomas causa el HTLV?",
      a: "Aproximadamente el 90% al 95% de las personas infectadas son portadores asintomáticos a lo largo de toda su vida y no desarrollan complicaciones clínicas. Sin embargo, entre un 5% y un 10% de los portadores desarrolla patologías graves a lo largo de décadas de infección. Entre las principales se encuentran la Paraparesia Espástica Tropical / Mielopatía Asociada al HTLV-1 (HAM/TSP), un trastorno neuroinflamatorio que provoca debilidad en las piernas, rigidez, dificultad progresiva para caminar y disfunción urinaria o intestinal; y la Leucemia/Linfoma de Células T del Adulto (ATL), un cáncer hematológico agresivo. Otras manifestaciones incluyen uveítis intermedia y dermatitis infecciosa en niños. (Johnston et al., 2014; Bangham et al., 2015; Einsiedel et al., 2018; Martin et al., 2018)."
    },
    {
      id: 5,
      q: "5. ¿Qué significa infección latente?",
      a: "Tras la infección primaria, el ARN del HTLV se transcribe a ADN mediante la enzima transcriptasa inversa y se integra de manera irreversible en el genoma cromosómico de los linfocitos T humanos en forma de provirus. Esto se denomina estado de latencia e integración proviral. El virus puede permanecer en latencia transcripcional durante años sin liberar viriones infecciosos en el plasma, manteniéndose mediante la proliferación mitótica de las células hospedadoras clonales bajo la expresión constante del gen antisentido HBZ. Factores como el estrés celular, alteraciones inmunitarias y comorbilidades pueden modular esta dinámica. (Bloom, 2016; Satou et al., 2016; Matsuoka & Green, 2009)."
    },
    {
      id: 6,
      q: "6. ¿Cómo se trata el HTLV?",
      a: "Actualmente no existe una cura definitiva ni un fármaco antiviral único que elimine el provirus del organismo. Sin embargo, existen tratamientos médicos para manejar y mitigar los síntomas de las enfermedades asociadas. En pacientes con HAM/TSP, se emplean pulsos de corticosteroides (metilprednisolona), medicamentos inmunomoduladores y rehabilitación motora y urológica integral. Para la Leucemia/Linfoma de Células T del Adulto (ATL), los protocolos médicos incluyen combinaciones de quimioterapia intensiva (CHOP/LSG15), esquemas antivirales con Zidovudina más Interferón-alfa (AZT/IFN-α), el anticuerpo monoclonal Mogamulizumab (anti-CCR4) y el trasplante de células progenitoras hematopoyéticas en casos seleccionados. (Tsukasaki et al., 2020; Yamano & Sato, 2012; CDC, 2021)."
    },
    {
      id: 7,
      q: "7. ¿Qué es la Carga Proviral y el desprendimiento viral?",
      a: "A diferencia de otros virus donde se cuantifica la carga viral libre en plasma, en el HTLV se mide la Carga Proviral (CPV), que corresponde al porcentaje de células mononucleares en sangre periférica (PBMC) que contienen el genoma viral integrado. Una carga proviral elevada (superior al 1% - 5% de células infectadas) se correlaciona con un riesgo significativamente más alto de progresión hacia patologías inflamatorias como HAM/TSP y una mayor probabilidad de transmisión a parejas sexuales o recién nacidos. El monitoreo periódico de la CPV por PCR cuantitativa en centros de referencia como el IMTAvH-UPCH es una herramienta fundamental de seguimiento. (Tronstein et al., 2011; Iwanaga et al., 2010; Grassi et al., 2011)."
    },
    {
      id: 8,
      q: "8. ¿Por qué el HTLV es importante para la salud pública?",
      a: "El HTLV afecta a millones de personas a nivel global y puede producir cuadros neurológicos altamente discapacitantes y neoplasias hematológicas de pronóstico reservado. Además, las personas con HTLV pueden presentar un mayor riesgo de coinfecciones (como tuberculosis o estrongiloidiasis) y complicaciones en neonatos por lactancia materna no controlada. Durante años ha sido una infección desatendida, lo que llevó a la Organización Mundial de la Salud (OMS) a publicar en 2021 un informe técnico instando a la vigilancia epidemiológica activa, el tamizaje prenatal sistemático y la inversión en investigación científica. (Freeman et al., 2006; Martin et al., 2018; OMS, 2021)."
    },
    {
      id: 9,
      q: "9. ¿Cómo se puede reducir el riesgo de propagación del HTLV?",
      a: "La prevención de la transmisión se logra mediante medidas claras de salud pública: (1) Tamizaje serológico prenatal a todas las mujeres embarazadas, recomendando la sustitución de la lactancia materna por fórmulas infantiles seguras en madres seropositivas (o lactancia acortada a menos de 3 meses si la fórmula no es accesible); (2) Uso correcto y consistente del preservativo en todas las relaciones sexuales; (3) Tamizaje serológico obligatorio en el 100% de los donantes de sangre y órganos con leucorreducción de hemoderivados; y (4) Diálogo abierto y asesoramiento médico a los portadores y sus parejas. (Wald et al., 2001; Gotuzzo et al., 2010; Rosadas et al., 2020; CDC, 2021)."
    },
    {
      id: 10,
      q: "10. ¿Qué nuevos tratamientos para el HTLV se están estudiando?",
      a: "Investigadores a nivel internacional estudian nuevas vacunas terapéuticas, fármacos inmunomoduladores y terapias dirigidas para frenar la proliferación celular inducida por el virus. Entre las líneas de investigación activas destacan los inhibidores selectivos de la quinasa CDK9, inhibidores de la interacción Tax/HBZ, anticuerpos monoclonales de nueva generación y terapias celulares avanzadas (células CAR-T) orientadas a destruir de forma específica los linfocitos clonales anormales. (Bernstein et al., 2017; Johnston et al., 2014; Fujisawa et al., 2021; Tagaya et al., 2023)."
    },
    {
      id: 11,
      q: "11. ¿Están los científicos estudiando la edición genética (CRISPR) para curar el HTLV?",
      a: "Sí. Diversos equipos científicos están evaluando herramientas de edición genómica como CRISPR/Cas9 para escindir o inactivar secuencias clave del ADN proviral integrado en el genoma de las células hospedadoras (específicamente dirigidas a las regiones reguladoras LTR y a los genes oncogénicos tax y hbz). Las investigaciones preclínicas en modelos celulares han demostrado la capacidad de reducir significativamente la carga proviral sin afectar los genes celulares esenciales, aunque estas tecnologías se encuentran aún en fases de validación experimental antes de su aplicación en ensayos clínicos humanos. (Aubert et al., 2020; Jerome et al., 2021; Raza et al., 2022)."
    },
    {
      id: 12,
      q: "12. ¿Por qué ha sido difícil desarrollar una vacuna contra el HTLV?",
      a: "El desarrollo de una vacuna profiláctica ha enfrentado retos biológicos considerables debido a que el HTLV se transmite principalmente mediante contacto célula a célula protegido de los anticuerpos neutralizantes circulantes y establece una integración proviral permanente en el genoma del hospedero. Adicionalmente, la baja replicación viral extracelular limita la exposición de antígenos en superficie. Los investigadores continúan explorando vacunas de subunidades, vectores virales y vacunas de ARN mensajero diseñadas para inducir respuestas inmunitarias de células T citotóxicas (CD8+) de alta afinidad. (Johnston et al., 2014; Bernstein et al., 2017; Tagaya et al., 2023)."
    },
    {
      id: 13,
      q: "13. ¿Existen ensayos clínicos e investigaciones sobre el HTLV en curso?",
      a: "Sí. En todo el mundo se desarrollan ensayos clínicos y estudios de cohortes para evaluar nuevos tratamientos, biomarcadores de progresión y estrategias preventivas para el HTLV-1 y HTLV-2. En el Perú, el Instituto de Medicina Tropical Alexander von Humboldt (IMTAvH) de la Universidad Peruana Cayetano Heredia (UPCH) lidera desde hace décadas una de las cohortes prospectivas más grandes y reconocidas del mundo, colaborando activamente con la Red Internacional RIII-HTLV y centros de investigación de Japón, Europa y América. La información sobre ensayos clínicos internacionales registrados puede consultarse en plataformas oficiales como ClinicalTrials.gov. (Johnston & Corey, 2016; Gotuzzo et al., 2023; Clark et al., 2016)."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map(item => ({
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
      {/* Schema.org Structured Data para Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ESTILOS DE IMPRESIÓN PERSONALIZADOS PARA EL REPORTE PDF IDÉNTICO AL DOCUMENTO */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 14mm 15mm 15mm 15mm;
          }
          body {
            background-color: #ffffff !important;
            color: #000000 !important;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
            font-size: 9.5pt !important;
            line-height: 1.45 !important;
          }
          nav, footer, .web-only {
            display: none !important;
          }
          .print-header-bar {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            padding-bottom: 8px !important;
            margin-bottom: 18px !important;
            border-bottom: 2px solid #ea580c !important;
          }
          .print-q-block {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            margin-bottom: 16px !important;
          }
          .print-q-title {
            font-size: 13pt !important;
            font-weight: 700 !important;
            color: #000000 !important;
            margin-bottom: 6px !important;
          }
          .print-q-text {
            font-size: 9.5pt !important;
            color: #111111 !important;
            line-height: 1.45 !important;
          }
        }
      `}</style>

      <main className="min-h-screen bg-white text-[#191c1e] pt-24 pb-24 px-4 sm:px-6 lg:px-8 print:p-0 print:m-0 print:bg-white">
        
        {/* Cabecera institucional exclusiva para PDF / Print (Aparece al inicio de cada impresión) */}
        <div className="hidden print-header-bar print:flex justify-between items-center pb-3 mb-6 border-b-2 border-[#ea580c]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#5b0617] text-white flex items-center justify-center font-bold text-sm">
              R
            </div>
            <div>
              <span className="font-extrabold text-[#5b0617] text-[13pt] tracking-tight block leading-none">
                RIII-HTLV
              </span>
              <span className="text-[7.5pt] text-[#564242] uppercase tracking-wider font-semibold">
                Red Internacional de Investigación en HTLV • UPCH
              </span>
            </div>
          </div>
          <span className="text-[9pt] text-[#0284c7] font-medium underline">
            https://htlv-web.org/faqs
          </span>
        </div>

        <div className="max-w-[840px] mx-auto">
          
          {/* Breadcrumbs de navegación en web */}
          <div className="web-only flex items-center gap-2 text-[13px] text-[#564242] mb-6">
            <Link href="/" className="hover:text-[#5b0617] transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-[#5b0617] transition-colors">Sobre HTLV</Link>
            <span>/</span>
            <span className="text-[#5b0617] font-semibold">Preguntas Frecuentes (FAQs)</span>
          </div>

          {/* Título Principal */}
          <header className="mb-8 print:mb-6">
            <h1 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[#111827] leading-[1.2] mb-4">
              Virus Linfotrópico de Células T Humanas (HTLV): Preguntas Frecuentes
            </h1>
            
            <p className="web-only text-[15px] sm:text-[16px] text-[#4b5563] leading-relaxed mb-6">
              Respuestas fundamentales basadas en evidencia biomédica y consenso clínico elaboradas por investigadores del <strong>Instituto de Medicina Tropical Alexander von Humboldt (IMTAvH) de la Universidad Peruana Cayetano Heredia (UPCH)</strong> y la <strong>Red Internacional RIII-HTLV</strong>.
            </p>

            {/* Barra de Acciones: Botón Descargar PDF y Compartir */}
            <div className="web-only flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={handleDownloadPDF}
                className="bg-[#0284c7] hover:bg-[#0369a1] text-white px-5 py-2.5 rounded-lg font-semibold text-[14px] shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[19px]">download</span>
                Descargar PDF
              </button>

              <button
                onClick={handleCopyLink}
                className="bg-white border border-[#d1d5db] text-[#374151] hover:bg-[#f9fafb] px-4 py-2.5 rounded-lg font-medium text-[14px] transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {copied ? 'check' : 'share'}
                </span>
                {copied ? '¡Enlace copiado!' : 'Compartir'}
              </button>
            </div>
          </header>

          {/* Lista de Preguntas y Respuestas 1 a 13 */}
          <section className="space-y-8 print:space-y-4">
            {faqList.map((item) => (
              <article key={item.id} className="print-q-block border-b border-[#f3f4f6] pb-6 print:border-0 print:pb-0">
                <h2 className="print-q-title font-bold text-[20px] sm:text-[22px] text-[#111827] mb-2.5 leading-snug">
                  {item.q}
                </h2>
                <p className="print-q-text text-[15.5px] sm:text-[16.5px] text-[#374151] leading-[1.65] font-normal">
                  {item.a}
                </p>
              </article>
            ))}
          </section>

          {/* Pie de página con Deslinde Legal y Normativo */}
          <footer className="mt-12 pt-6 border-t border-[#e5e7eb] text-[12px] text-[#6b7280] leading-relaxed">
            <p>
              <strong>Deslinde Médico:</strong> Esta guía de preguntas frecuentes es de carácter divulgativo y científico. No reemplaza el criterio ni la atención médica especializada. Elaborado con el respaldo científico de investigadores del Instituto de Medicina Tropical Alexander von Humboldt (UPCH) y la Red Internacional RIII-HTLV. Conforme a la Ley N° 29733 de Protección de Datos Personales.
            </p>
          </footer>

        </div>
      </main>
    </>
  );
}
