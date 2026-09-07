"use client";

import Link from 'next/link';

export default function ResearchPage() {
  const researchLines = [
    {
      title: 'Ciencias Básicas',
      desc: 'Exploración de la biología molecular, la patogénesis y los mecanismos fundamentales de la interacción virus-hospedador.',
      icon: 'science'
    },
    {
      title: 'Diagnóstico',
      desc: 'Desarrollo de herramientas de diagnóstico altamente sensibles y específicas para una detección temprana y precisa.',
      icon: 'biotech'
    },
    {
      title: 'Clínica',
      desc: 'Estudios longitudinales multicéntricos enfocados en la progresión de la enfermedad y manifestaciones clínicas.',
      icon: 'stethoscope'
    },
    {
      title: 'Terapéutica',
      desc: 'Innovación en protocolos de tratamiento y estrategias de reposicionamiento de fármacos para enfermedades asociadas al HTLV.',
      icon: 'medication'
    },
    {
      title: 'Prevención Vertical',
      desc: 'Estrategias para prevenir la transmisión de madre a hijo y proteger a las futuras generaciones.',
      icon: 'family_restroom'
    },
    {
      title: 'Vacunas',
      desc: 'Aceleración del desarrollo de vacunas profilácticas y terapéuticas contra el HTLV.',
      icon: 'vaccines'
    },
    {
      title: 'Epidemiología',
      desc: 'Mapeo de la prevalencia global y comprensión de los factores ambientales de transmisión.',
      icon: 'public'
    },
    {
      title: 'Social/Ética',
      desc: 'Abordar el impacto humano, el estigma y las consideraciones éticas en la investigación y el cuidado.',
      icon: 'psychology_alt'
    }
  ];

  return (
    <>
      <main className="px-margin-mobile md:px-margin-desktop py-12">
        {/* Hero Section */}
        <section className="mb-section-gap">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-3/5">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary font-label-sm uppercase tracking-wider rounded-full mb-4">Descubrimiento Científico</span>
              <h1 className="font-display text-display text-[#191c1e] mb-6 leading-tight">Avanzando en la Investigación Global de HTLV Mediante la Colaboración</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">La RIII-HTLV coordina 8 líneas de investigación distintas orientadas a descifrar las complejidades del Virus de la Leucemia de Células T Humanas, cerrando la brecha entre la ciencia básica y la aplicación clínica.</p>
              <div className="flex gap-4">
                <Link href="/repository" className="bg-primary text-white px-8 py-4 rounded-xl font-label-md hover:shadow-lg transition-all cursor-pointer">Explorar Publicaciones</Link>
                <Link href="/resources" className="border border-outline text-primary px-8 py-4 rounded-xl font-label-md hover:bg-[#f3f4f6] transition-all cursor-pointer">Protocolo de Investigación</Link>
              </div>
            </div>
            <div className="md:w-2/5 relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10"></div>
              <img className="w-full h-full object-cover" alt="Colaboración científica en laboratorio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpB8f2JoNfJOl32TANb3Kt0FoRueJyop4_ZYl73mHOWx66OYb1EOnoY-QYF5DOQY7ELqaDX5UNLwSDOEVdBIWe9l2TnP2V50VSQqWE-7i82gYk4prmKGNDyNXcsORsai21Alv0osWEamRphAhVxXX44vB7fHcl8yb-D8bUySGNuLMty2-BsN-g8VZfTby3__HaylYMzpQpwLPGNURPQhB67wDfuBwVvdjyA5b9CY1hWtRj753hfSkZ2vQ23Vt-9QUaAGqaT18UrT8" />
            </div>
          </div>
        </section>

        {/* Research Lines Bento Grid */}
        <section className="mb-section-gap">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-[#191c1e] mb-2">Nuestras Líneas de Investigación</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">8 pilares estratégicos que definen el futuro de la comprensión del HTLV</p>
            </div>
            <div className="hidden md:flex gap-2">
              <div className="w-12 h-1 bg-primary rounded-full"></div>
              <div className="w-4 h-1 bg-outline-variant rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchLines.map((line, i) => (
              <div key={i} className="bg-white border border-outline-variant p-8 rounded-[2rem] hover:border-primary transition-all group flex flex-col h-full shadow-sm">
                <div>
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">{line.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-3 group-hover:text-primary transition-colors text-[#191c1e]">{line.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">{line.desc}</p>
                </div>
                <a className="flex items-center gap-2 text-primary font-label-md hover:gap-3 transition-all mt-auto pt-4 border-t border-[#dcc0c0]/30" href="#">
                  Proyectos Relacionados
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Active Projects & Future Research */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-section-gap">
          {/* Current Projects */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-lg text-headline-lg text-[#191c1e]">Proyectos Actuales</h2>
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-sm">Activo Ahora</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white border border-outline-variant p-6 rounded-2xl flex gap-6 hover:shadow-sm hover:border-primary transition-all">
                <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Plato de Petri con cultivos científicos" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx2tJI7Bmky5PERl3w5HSdWvHGgXTFTTeiOSNkvhJomwvMdU_2RxAK4p1FfqXK2Y2PvxpyUDhBWo33HKWP9foiyEbQ3IAXdPw7-Di9jW-DqksomE75HZil2rdLNJlcdsCL2o3uk0j63hZUBFTqswlBpX1nRlvEMpsmVK2Nb8Ziwc6l5txV9-Jd3JXxBmCuvXWaZW3RCqxN-hv1SFfB7l6uHhdmTJPU1IP82tshFYdcMLI-v7AmW0R2yfHJi3iz1cZRMRBxwlWpSEo" />
                </div>
                <div>
                  <div className="flex gap-2 mb-2">
                    <span className="text-[10px] uppercase font-bold text-primary bg-primary/5 px-2 py-0.5 rounded">Molecular</span>
                    <span className="text-[10px] uppercase font-bold text-secondary bg-secondary/5 px-2 py-0.5 rounded">En curso</span>
                  </div>
                  <h4 className="font-headline-md text-[18px] leading-tight mb-1 text-[#191c1e]">Análisis Genómico de Polimorfismos de HTLV-1</h4>
                  <p className="font-body-md text-label-md text-on-surface-variant line-clamp-2">Investigación de variaciones genéticas en tres continentes para identificar marcadores de virulencia.</p>
                </div>
              </div>
              <div className="bg-white border border-outline-variant p-6 rounded-2xl flex gap-6 hover:shadow-sm hover:border-primary transition-all">
                <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Visualización de redes globales" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALVuE8dQHb3PE22XbYAD0fOtHIyR9OI_KHO31EhpGkwc35ezCrz9CHMUW-LN6UNKT7pfaN0kN-uaeRg0bfv68FIFuDjzSNyRiAeZu3Ef4Mg3VBtmEznE6c1QjAsjY42lmwluBzhIrp57ega-VRxtglJlt0_lNP7XKrakdf_-fAhCLlsTN0jm-7NO-Rlm8Vzl08CyfwiEO3CRp4whb0fis-3i8uTDUfFHDB6qQPeewpDYvd9ZRrUVML98Px4Ix01Fty5A8MJthqjfA" />
                </div>
                <div>
                  <div className="flex gap-2 mb-2">
                    <span className="text-[10px] uppercase font-bold text-primary bg-primary/5 px-2 py-0.5 rounded">Clínico</span>
                    <span className="text-[10px] uppercase font-bold text-secondary bg-secondary/5 px-2 py-0.5 rounded">Fase II</span>
                  </div>
                  <h4 className="font-headline-md text-[18px] leading-tight mb-1 text-[#191c1e]">Ensayo de Intervención Temprana en HAM/TSP</h4>
                  <p className="font-body-md text-label-md text-on-surface-variant line-clamp-2">Evaluación de terapias inmunomoduladoras combinadas para la paraparesia en etapa temprana.</p>
                </div>
              </div>
              <div className="bg-white border border-outline-variant p-6 rounded-2xl flex gap-6 hover:shadow-sm hover:border-primary transition-all">
                <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Científico trabajando con datos" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGt_efPXPBTSrARpwxqWRJw1jpJ6tqhCeL8FIXcd4lpHCgPDHVjud6Z9NUI3B6SIqEElmwxsgFznLiZkqwss3HxNcJNDaIrV0oMplpiUB5tAhfjeh4tklo6EFbJYEG_PkX5Y3_l_UQBuFP6HDL8EEUUQI1Ijdkpj9_6m2YnCO2XMdc3vAYlgSz8dQFYpkPPl-nkpVQEggtvhahcn3XoWm13NBpnLgW7rDYuD239mXJXrxWN8vvVuC7xH-QujuPaiYDdTpbt2daTt8" />
                </div>
                <div>
                  <div className="flex gap-2 mb-2">
                    <span className="text-[10px] uppercase font-bold text-primary bg-primary/5 px-2 py-0.5 rounded">Epidemiología</span>
                    <span className="text-[10px] uppercase font-bold text-secondary bg-secondary/5 px-2 py-0.5 rounded">Global</span>
                  </div>
                  <h4 className="font-headline-md text-[18px] leading-tight mb-1 text-[#191c1e]">Registro Global de Prevalencia de HTLV</h4>
                  <p className="font-body-md text-label-md text-on-surface-variant line-clamp-2">Estandarización de la recopilación de datos en 14 países para crear un mapa de vigilancia unificado.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Future Research */}
          <div className="bg-[#f3f4f6] border border-[#dcc0c0] rounded-[2.5rem] p-10 flex flex-col gap-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-[#191c1e] mb-4">Futuras Iniciativas de Investigación</h2>
              <p className="font-body-md text-[#564242]">Próximos proyectos actualmente en fase de financiación y diseño de protocolo. Abierto para miembros de consorcios internacionales.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 pb-6 border-b border-[#dcc0c0]">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-primary">rocket_launch</span>
                </div>
                <div>
                  <h5 className="font-label-md font-bold mb-1 text-[#191c1e]">Ensayo de Vacuna Terapéutica de Próxima Generación (2025)</h5>
                  <p className="font-label-sm text-on-surface-variant">Utilización de tecnología de ARNm para dirigir antígenos Tax y HBZ en portadores asintomáticos.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-6 border-b border-[#dcc0c0]">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-primary">diversity_3</span>
                </div>
                <div>
                  <h5 className="font-label-md font-bold mb-1 text-[#191c1e]">Programa de Vigilancia de HTLV Pan-Africano</h5>
                  <p className="font-label-sm text-on-surface-variant">Extensión del alcance de la red a regiones del África subsahariana con alta endemicidad y bajos recursos.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-6">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-primary">memory</span>
                </div>
                <div>
                  <h5 className="font-label-md font-bold mb-1 text-[#191c1e]">Modelado de Patogénesis Impulsado por IA</h5>
                  <p className="font-label-sm text-on-surface-variant">Aplicación del aprendizaje automático para predecir el desarrollo de ATL basado en la dinámica de la carga proviral.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}