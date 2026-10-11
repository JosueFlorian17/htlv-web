"use client";

import Link from 'next/link';

export default function Home() {
  const memberInstitutions = [
    {
      name: 'Universidad Peruana Cayetano Heredia',
      acronym: 'UPCH',
      location: 'Lima, Perú',
      role: 'Institución Coordinadora',
      url: 'https://www.cayetano.edu.pe',
      badge: 'Coordinación'
    },
    {
      name: 'Inst. de Medicina Tropical Alexander von Humboldt',
      acronym: 'IMTAvH',
      location: 'Lima, Perú',
      role: 'Sede Central & Clínica',
      url: 'https://medicina.cayetano.edu.pe/imtavh/',
      badge: 'Sede Científica'
    },
    {
      name: 'Imperial College London',
      acronym: 'ICL',
      location: 'Londres, Reino Unido',
      role: 'Biología Molecular & Virología',
      url: 'https://www.imperial.ac.uk',
      badge: 'Nodo Europa'
    },
    {
      name: 'Institut Pasteur',
      acronym: 'Pasteur',
      location: 'París, Francia',
      role: 'Investigación Oncológica & ATL',
      url: 'https://www.pasteur.fr',
      badge: 'Nodo Europa'
    },
    {
      name: 'Fundação Oswaldo Cruz',
      acronym: 'Fiocruz',
      location: 'Río de Janeiro / Salvador, Brasil',
      role: 'Vigilancia Epidemiológica',
      url: 'https://portal.fiocruz.br',
      badge: 'Nodo Sudamérica'
    },
    {
      name: 'Instituto de Salud Carlos III',
      acronym: 'ISCIII',
      location: 'Madrid, España',
      role: 'Salud Pública & Registros',
      url: 'https://www.isciii.es',
      badge: 'Nodo Europa'
    },
    {
      name: 'St. Marianna University School of Medicine',
      acronym: 'St. Marianna',
      location: 'Kawasaki, Japón',
      role: 'Ensayos Clínicos en HAM/TSP',
      url: 'https://www.marianna-u.ac.jp',
      badge: 'Nodo Asia'
    }
  ];

  return (
    <main className="w-full bg-[#f8f9fb]">
      
      {/* 1. Hero Section Simplificado (Inspirado en QUEST: Limpio, Visual, Letras Grandes, Logo Visible) */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#e5d5d5] bg-gradient-to-b from-[#f8f9fb] via-[#f4eded]/50 to-[#f8f9fb]">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* Logo de la Red Claramente Visible */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white border border-[#dcc0c0] rounded-2xl shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#5b0617] text-white flex items-center justify-center font-black text-xl shadow-xs">
                R
              </div>
              <div className="text-left">
                <span className="block text-[18px] md:text-[20px] font-black text-[#5b0617] leading-none">
                  RIII-HTLV
                </span>
                <span className="text-[11px] font-bold text-[#897172] tracking-wider uppercase">
                  Red Internacional de Investigación e Innovación en HTLV
                </span>
              </div>
            </div>

            {/* Título Principal con Letras Grandes y Claras */}
            <h1 className="text-[36px] sm:text-[46px] lg:text-[56px] font-black text-[#191c1e] tracking-tight leading-[1.12]">
              Uniendo la ciencia global frente al <span className="text-[#5b0617]">HTLV</span>
            </h1>

            {/* Presentación Oficial de la Red en 2 Oraciones (Acuerdo Explícito de la Reunión) */}
            <p className="text-[18px] sm:text-[21px] text-[#564242] leading-relaxed font-normal max-w-3xl mx-auto">
              La <strong>Red Internacional de Investigación e Innovación en HTLV (RIII-HTLV)</strong> es una alianza científica global creada para generar evidencia de excelencia, optimizar el diagnóstico temprano y desarrollar terapias efectivas frente a las patologías asociadas al HTLV. 
              Coordinada desde el <strong>Instituto de Medicina Tropical Alexander von Humboldt</strong> de la <strong>Universidad Peruana Cayetano Heredia (UPCH)</strong>, articula a instituciones de referencia de América Latina, Europa y Asia para mejorar la vida de las personas afectadas.
            </p>

            {/* Botones de Acción Directa a las Secciones Clave */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
              <Link 
                href="/htlv"
                className="bg-[#5b0617] text-white px-7 py-3.5 rounded-xl text-[15px] font-bold shadow-sm hover:opacity-95 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">medical_information</span>
                <span>¿Qué es el HTLV?</span>
              </Link>
              <Link 
                href="/pacientes"
                className="bg-white border-2 border-[#5b0617] text-[#5b0617] px-7 py-3.5 rounded-xl text-[15px] font-bold hover:bg-[#ffdada]/30 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">favorite</span>
                <span>Espacio para Pacientes</span>
              </Link>
              <Link 
                href="/profesionales"
                className="bg-[#d6e0f3] text-[#1d2b3a] px-7 py-3.5 rounded-xl text-[15px] font-bold hover:bg-[#c3d3ec] transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">clinical_notes</span>
                <span>Profesionales de la Salud</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Instituciones Miembros (Logos Visibles y Enlazados Directamente a sus Páginas) */}
      <section className="py-12 bg-white border-b border-[#e5d5d5]">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#5b0617] block mb-1">
              Alianza Interinstitucional
            </span>
            <h2 className="text-[24px] md:text-[28px] font-black text-[#191c1e]">
              Instituciones Miembros de la Red
            </h2>
            <p className="text-[14px] text-[#564242] mt-1">
              Haga clic sobre cada institución para acceder a su portal web oficial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {memberInstitutions.map((inst, index) => (
              <a
                key={index}
                href={inst.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-[#f8f9fb] border border-[#dcc0c0] rounded-2xl hover:border-[#5b0617] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 bg-[#ffdada] text-[#5b0617] text-[11px] font-bold rounded-lg uppercase tracking-wider">
                      {inst.badge}
                    </span>
                    <span className="material-symbols-outlined text-[18px] text-[#897172] group-hover:text-[#5b0617] transition-colors">
                      open_in_new
                    </span>
                  </div>
                  <h3 className="font-bold text-[16px] text-[#191c1e] group-hover:text-[#5b0617] transition-colors leading-snug">
                    {inst.name}
                  </h3>
                  <p className="text-[12px] font-semibold text-[#897172] mt-0.5">
                    {inst.location}
                  </p>
                </div>
                
                <div className="pt-4 mt-3 border-t border-[#dcc0c0]/60 flex items-center justify-between text-[12px] text-[#564242]">
                  <span>{inst.role}</span>
                  <span className="font-bold text-[#5b0617] group-hover:underline">Visitar web</span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Accesos Principales Organizados (Las Secciones Definidas en la Reunión) */}
      <section className="py-16 max-w-[1360px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#5b0617] block mb-1">
            Estructura Web
          </span>
          <h2 className="text-[28px] md:text-[34px] font-black text-[#191c1e]">
            Contenidos y Servicios de la Red
          </h2>
          <p className="text-[15px] text-[#564242] mt-1">
            Información diferenciada y accesible tanto para pacientes como para la comunidad científica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card: Acerca de la Red */}
          <Link 
            href="/about"
            className="group bg-white p-7 rounded-2xl border border-[#dcc0c0] hover:border-[#5b0617] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#ffdada] text-[#5b0617] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">account_balance</span>
              </div>
              <h3 className="text-[20px] font-bold text-[#191c1e] group-hover:text-[#5b0617] transition-colors mb-2">
                Acerca de la Red
              </h3>
              <p className="text-[14px] text-[#564242] leading-relaxed">
                Quiénes somos, objetivos estratégicos, estructura con directivos, aliados internacionales, reglamento interno y convenio marco de colaboración.
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-[#dcc0c0]/60 flex items-center gap-1.5 text-[13px] font-bold text-[#5b0617]">
              <span>Explorar institución</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </Link>

          {/* Card: HTLV */}
          <Link 
            href="/htlv"
            className="group bg-white p-7 rounded-2xl border border-[#dcc0c0] hover:border-[#5b0617] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#d6e0f3] text-[#1d2b3a] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">coronavirus</span>
              </div>
              <h3 className="text-[20px] font-bold text-[#191c1e] group-hover:text-[#5b0617] transition-colors mb-2">
                ¿Qué es el HTLV?
              </h3>
              <p className="text-[14px] text-[#564242] leading-relaxed">
                Información científica sobre el virus, diferencias entre HTLV-1 y HTLV-2, espectro clínico, formas de transmisión y preguntas frecuentes explicadas.
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-[#dcc0c0]/60 flex items-center gap-1.5 text-[13px] font-bold text-[#5b0617]">
              <span>Conocer sobre el virus</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </Link>

          {/* Card: Pacientes (con espacio para enviar preguntas) */}
          <Link 
            href="/pacientes"
            className="group bg-white p-7 rounded-2xl border-2 border-[#5b0617]/30 hover:border-[#5b0617] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#ffdada] text-[#5b0617] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">favorite</span>
              </div>
              <h3 className="text-[20px] font-bold text-[#191c1e] group-hover:text-[#5b0617] transition-colors mb-2">
                Espacio para Pacientes
              </h3>
              <p className="text-[14px] text-[#564242] leading-relaxed">
                Orientación cercana y comprensible para personas diagnosticadas y sus familias, con un formulario directo para enviar preguntas a los especialistas.
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-[#dcc0c0]/60 flex items-center gap-1.5 text-[13px] font-bold text-[#5b0617]">
              <span>Ir a pacientes y preguntas</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </Link>

          {/* Card: Profesionales de la salud */}
          <Link 
            href="/profesionales"
            className="group bg-white p-7 rounded-2xl border border-[#dcc0c0] hover:border-[#5b0617] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#d6e0f3] text-[#1d2b3a] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">medical_services</span>
              </div>
              <h3 className="text-[20px] font-bold text-[#191c1e] group-hover:text-[#5b0617] transition-colors mb-2">
                Profesionales de la Salud
              </h3>
              <p className="text-[14px] text-[#564242] leading-relaxed">
                Guías de práctica clínica, criterios de tamizaje y diagnóstico, grabaciones de webinars académicos y catálogo de cursos cortos de actualización médica.
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-[#dcc0c0]/60 flex items-center gap-1.5 text-[13px] font-bold text-[#5b0617]">
              <span>Ver recursos clínicos</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </Link>

          {/* Card: Proyectos */}
          <Link 
            href="/proyectos"
            className="group bg-white p-7 rounded-2xl border border-[#dcc0c0] hover:border-[#5b0617] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#ffdada] text-[#5b0617] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">biotech</span>
              </div>
              <h3 className="text-[20px] font-bold text-[#191c1e] group-hover:text-[#5b0617] transition-colors mb-2">
                Proyectos de la Red
              </h3>
              <p className="text-[14px] text-[#564242] leading-relaxed">
                Iniciativas de investigación colaborativas en marcha, líneas prioritarias y acreditación de cartas de colaboración para proyectos postulados.
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-[#dcc0c0]/60 flex items-center gap-1.5 text-[13px] font-bold text-[#5b0617]">
              <span>Ver proyectos de la Red</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </Link>

          {/* Card: Publicaciones */}
          <Link 
            href="/publicaciones"
            className="group bg-white p-7 rounded-2xl border border-[#dcc0c0] hover:border-[#5b0617] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#d6e0f3] text-[#1d2b3a] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">menu_book</span>
              </div>
              <h3 className="text-[20px] font-bold text-[#191c1e] group-hover:text-[#5b0617] transition-colors mb-2">
                Publicaciones Científicas
              </h3>
              <p className="text-[14px] text-[#564242] leading-relaxed">
                Repositorio sencillo de artículos publicados por los miembros de la red con citas bibliográficas, resúmenes y enlaces directos de lectura.
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-[#dcc0c0]/60 flex items-center gap-1.5 text-[13px] font-bold text-[#5b0617]">
              <span>Explorar publicaciones</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </Link>

        </div>
      </section>

      {/* 4. Material Visual Real & Espacio para Video de Bienvenida */}
      <section className="py-16 bg-[#f1f3f5] border-t border-[#e5d5d5]">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Video de Bienvenida Real de la Red */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#5b0617] block">
                Comunidad Científica
              </span>
              <h2 className="text-[26px] md:text-[32px] font-black text-[#191c1e]">
                Video de Bienvenida & Difusión
              </h2>
              <p className="text-[14.5px] text-[#564242] leading-relaxed">
                Conozca los testimonios, objetivos y actividades de los especialistas de la Red Internacional RIII-HTLV en su labor diaria frente al virus.
              </p>

              {/* Contenedor de Video de YouTube Real Embebido */}
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-md border border-[#dcc0c0] bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/n3GzS_WnQ0I?rel=0"
                  title="Video Informativo HTLV"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Fotografías de Actividades de la Red */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#5b0617] block">
                Actividades en Terreno
              </span>
              <h3 className="text-[22px] font-black text-[#191c1e]">
                Encuentros y Trabajo de Laboratorio
              </h3>
              <p className="text-[13.5px] text-[#564242]">
                Registro de actividades de investigación clínica, capacitaciones del personal de salud y talleres de trabajo interinstitucionales.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-xl overflow-hidden shadow-xs border border-[#dcc0c0] aspect-4/3 bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" 
                    alt="Trabajo de laboratorio en retrovirología"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-xs border border-[#dcc0c0] aspect-4/3 bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80" 
                    alt="Reunión científica de investigadores"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-xs border border-[#dcc0c0] aspect-4/3 bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80" 
                    alt="Atención médica y seguimiento de pacientes"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-xs border border-[#dcc0c0] aspect-4/3 bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80" 
                    alt="Análisis molecular y diagnóstico"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Llamado a la Acción y Contacto */}
      <section className="py-14 bg-white border-t border-[#e5d5d5]">
        <div className="max-w-[1000px] mx-auto px-4 text-center space-y-4">
          <h2 className="text-[26px] md:text-[32px] font-black text-[#191c1e]">
            ¿Interesado en colaborar o resolver dudas con la Red?
          </h2>
          <p className="text-[15px] text-[#564242] max-w-2xl mx-auto leading-relaxed">
            Estamos abiertos al diálogo con instituciones de investigación, personal médico y personas que buscan información confiable y orientación.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-[#5b0617] text-white px-7 py-3 rounded-xl text-[14px] font-bold shadow-sm hover:opacity-95 transition-all"
            >
              Contactar a la Coordinación
            </Link>
            <Link 
              href="/pacientes"
              className="bg-[#f8f9fb] border border-[#dcc0c0] text-[#564242] hover:text-[#5b0617] px-7 py-3 rounded-xl text-[14px] font-bold hover:bg-[#ffdada]/30 transition-all"
            >
              Enviar una Pregunta
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}