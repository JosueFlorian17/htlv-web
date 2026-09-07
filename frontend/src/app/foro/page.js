"use client";

import Link from 'next/link';

export default function ForumPage() {
  const categories = [
    {
      title: 'Apoyo Mutuo y Vivencias',
      desc: 'Un espacio empático y seguro para convivir con el HTLV, compartir la vida diaria y encontrar apoyo entre pares.',
      icon: 'volunteer_activism',
      members: '2.1k Miembros',
      tag: 'Espacio Seguro'
    },
    {
      title: 'Orientación y Preguntas Frecuentes',
      desc: 'Consultas educativas generales respondidas con base en consensos biomédicos oficiales de la red.',
      icon: 'clinical_notes',
      members: 'Respuestas Verificadas',
      tag: 'Educativo'
    },
    {
      title: 'Investigación y Ensayos',
      desc: 'Conozca los avances en estudios clínicos y cómo la comunidad contribuye a la ciencia global.',
      icon: 'biotech',
      members: '842 Temas',
      tag: 'Ciencia Participativa'
    },
    {
      title: 'Comunidad y Eventos',
      desc: 'Información sobre seminarios web educativos, talleres para pacientes y actividades de concientización.',
      icon: 'campaign',
      members: '456 Temas',
      tag: 'Convocatorias'
    }
  ];

  return (
    <>
      <main className="w-full pb-20">
        
        {/* Visual Hero */}
        <div className="relative w-full h-[400px] flex items-center overflow-hidden">
          <img 
            alt="Fondo de comunidad de apoyo" 
            className="absolute inset-0 w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAqoHDWygUj6bPDpSZRerHWyHsTC3E7Pmjcyviws4rXpdgLA8UVnLo8H805dBI8JpQqVluYgGb2DkoERH5N6Wch9SrudnJg5LaaZEOkPkgW7b7hvKy8EovQIgd90mrDozbLWn76rj3zYMGSg_Y5iMV-fQDhvGBRQTjuRyl8_otEiLhq7kvmJTafEx--gmJrXfHibnrAW4qAw_Lt8258hfGy8CPQicvEyMYu9aRLUPYSxcuuxG1hQPpnIbMZ0IdU_XppVKOzYm2Slc"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/70 to-transparent"></div>
          
          <div className="relative px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto w-full">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#5b0617] font-label-sm uppercase tracking-widest font-bold bg-[#ffdada] px-3 py-1 rounded-full">
                  Espacio Comunitario Moderado
                </span>
              </div>
              <h1 className="font-display text-display mb-3 text-[#5b0617]">
                Foro Comunitario RIII-HTLV
              </h1>
              <p className="font-body-lg text-body-lg text-[#564242] mb-6 leading-relaxed">
                Un entorno seguro, respetuoso y protegido para que personas viviendo con HTLV, familiares e investigadores compartan vivencias y construyan fortaleza colectiva.
              </p>
              <button className="bg-[#5b0617] text-white px-7 py-3.5 rounded-xl font-label-md font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">favorite</span>
                Compartir tu Experiencia
              </button>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto -mt-8 relative z-10 space-y-10">
          
          {/* Banner de Advertencia Legal, Antihate y Moderación */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Política Anti-Troll y Tolerancia Cero */}
            <div className="bg-white border-l-4 border-[#ba1a1a] p-5 rounded-r-2xl shadow-xs border-y border-r border-[#dcc0c0]">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#ba1a1a] text-2xl mt-0.5">gavel</span>
                <div className="space-y-1">
                  <h4 className="text-[13px] font-bold text-[#ba1a1a] uppercase tracking-wider">
                    Tolerancia Cero al Ciberacoso y Troleo
                  </h4>
                  <p className="text-[12px] text-[#564242] leading-relaxed">
                    Este es un espacio protegido. La discriminación, el estigma o los comentarios ofensivos hacia personas con HTLV resultarán en la <strong>expulsión y bloqueo permanente e inmediato de la cuenta</strong>. Las publicaciones son supervisadas por moderadores designados.
                  </p>
                </div>
              </div>
            </div>

            {/* Deslinde Médico y Ley 29733 */}
            <div className="bg-white border-l-4 border-[#5b0617] p-5 rounded-r-2xl shadow-xs border-y border-r border-[#dcc0c0]">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#5b0617] text-2xl mt-0.5">verified_user</span>
                <div className="space-y-1">
                  <h4 className="text-[13px] font-bold text-[#5b0617] uppercase tracking-wider">
                    Privacidad (Ley N° 29733) y Descargo Médico
                  </h4>
                  <p className="text-[12px] text-[#564242] leading-relaxed">
                    Las vivencias compartidas <strong>no constituyen diagnóstico ni prescripción médica</strong>. Por su seguridad, no publique datos clínicos sensibles ni diagnósticos privados. Los datos de registro están protegidos bajo la <strong>Ley N° 29733 de Protección de Datos Personales del Perú</strong>.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Grid Layout: Espacios y Discusiones */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Columna Izquierda: Espacios de la Comunidad */}
            <div className="lg:col-span-8 space-y-10">
              
              <section>
                <div className="border-b border-[#dcc0c0] pb-3 mb-6">
                  <h3 className="font-headline-md text-headline-md text-[#5b0617]">
                    Espacios de la Comunidad
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categories.map((cat, i) => (
                    <div 
                      key={i} 
                      className="bg-white p-6 border border-[#dcc0c0] rounded-2xl shadow-xs hover:border-[#5b0617] transition-all cursor-pointer group flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 bg-[#ffdada] text-[#5b0617] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#5b0617] group-hover:text-white transition-all shadow-2xs">
                          <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
                        </div>
                        <h4 className="font-bold text-[16px] text-[#191c1e] mb-1.5">{cat.title}</h4>
                        <p className="text-[#564242] text-[13px] leading-relaxed mb-4">{cat.desc}</p>
                      </div>
                      
                      <div className="flex items-center justify-between text-[11px] text-[#564242] pt-3 border-t border-[#dcc0c0]/40">
                        <span className="font-semibold text-[#5b0617]">
                          {cat.members}
                        </span>
                        <span className="bg-[#f8f9fb] px-2 py-0.5 rounded border border-[#dcc0c0] font-bold text-[#564242]">
                          {cat.tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Conversaciones Destacadas */}
              <section>
                <div className="border-b border-[#dcc0c0] pb-3 mb-6 flex justify-between items-center">
                  <h3 className="font-headline-md text-headline-md text-[#5b0617]">
                    Pautas y Temas Frecuentes
                  </h3>
                </div>

                <div className="bg-white border border-[#dcc0c0] rounded-2xl overflow-hidden divide-y divide-[#dcc0c0] shadow-xs">
                  
                  {/* Tema Fijado: Normas */}
                  <div className="p-5 bg-[#ffdada]/15 border-l-4 border-[#5b0617]">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-[#5b0617] text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">push_pin</span> Fijado
                      </span>
                      <span className="bg-[#f3f4f6] text-[#564242] px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border border-[#dcc0c0]">
                        Normas Oficiales
                      </span>
                    </div>
                    <h5 className="font-bold text-[15px] text-[#5b0617] mt-1">
                      Protocolo de Convivencia: Mantener un Espacio Libre de Estigma
                    </h5>
                    <p className="text-[12px] text-[#564242] mt-1 leading-relaxed">
                      Lectura obligatoria para todos los miembros: respeto irrestricto a la privacidad, empatía y prohibición de promoción comercial o consejos médicos no verificados.
                    </p>
                  </div>

                  {/* Tema 1 */}
                  <div className="p-5 hover:bg-[#f8f9fb] transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-[#d6e0f3] text-[#1d2b3a] px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        Apoyo y Experiencias
                      </span>
                    </div>
                    <h5 className="font-bold text-[15px] text-[#191c1e] mt-1">
                      Vivir con serenidad tras el diagnóstico de HTLV-1: Mi experiencia de acompañamiento
                    </h5>
                    <p className="text-[12px] text-[#564242] mt-1">
                      Espacio de reflexión sobre el impacto emocional inicial y la importancia del seguimiento con especialistas en infectología.
                    </p>
                  </div>

                  {/* Tema 2 */}
                  <div className="p-5 hover:bg-[#f8f9fb] transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-[#f3f4f6] text-[#564242] px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#dcc0c0]">
                        Hábitos Saludables
                      </span>
                    </div>
                    <h5 className="font-bold text-[15px] text-[#191c1e] mt-1">
                      Manejo de la actividad física y bienestar general en personas con HTLV
                    </h5>
                    <p className="text-[12px] text-[#564242] mt-1">
                      Recomendaciones generales de autocuidado supervisadas por el equipo de divulgación.
                    </p>
                  </div>

                </div>
              </section>

            </div>

            {/* Columna Derecha: Panel de Moderación y Pautas */}
            <aside className="lg:col-span-4 space-y-6">
              
              {/* Pautas Éticas de Moderación */}
              <div className="bg-[#5b0617] text-white p-6 rounded-2xl shadow-sm space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#ffdada] text-2xl">shield</span>
                  <h4 className="font-bold text-[16px]">Compromiso Ético</h4>
                </div>
                <ul className="text-[12px] space-y-2.5 opacity-90 leading-relaxed">
                  <li className="flex gap-2"><span>•</span> <strong>Confidencialidad:</strong> Respete la privacidad e identidad de cada usuario.</li>
                  <li className="flex gap-2"><span>•</span> <strong>Empatía:</strong> Comuníquese siempre con cordialidad y apoyo sincero.</li>
                  <li className="flex gap-2"><span>•</span> <strong>No Desinformación:</strong> Evite promover tratamientos no avalados por la ciencia.</li>
                  <li className="flex gap-2"><span>•</span> <strong>Reporte Activo:</strong> Notifique inmediatamente cualquier conducta inapropiada a los moderadores.</li>
                </ul>
              </div>

              {/* Estadísticas de la Comunidad */}
              <div className="bg-white p-6 border border-[#dcc0c0] rounded-2xl shadow-xs">
                <h4 className="font-bold text-[14px] text-[#191c1e] uppercase tracking-wider mb-4 border-b border-[#dcc0c0] pb-2">
                  Red de Apoyo RIII-HTLV
                </h4>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 bg-[#f8f9fb] rounded-xl border border-[#dcc0c0]">
                    <p className="text-[24px] font-black text-[#5b0617] leading-tight">2.1k+</p>
                    <p className="text-[11px] text-[#564242] font-semibold mt-0.5">Miembros Registrados</p>
                  </div>
                  <div className="p-3 bg-[#f8f9fb] rounded-xl border border-[#dcc0c0]">
                    <p className="text-[24px] font-black text-[#5b0617] leading-tight">100%</p>
                    <p className="text-[11px] text-[#564242] font-semibold mt-0.5">Moderado y Seguro</p>
                  </div>
                </div>
              </div>

              {/* Enlace a Recursos Educativos */}
              <div className="bg-[#f8f9fb] p-6 border border-[#dcc0c0] rounded-2xl shadow-xs">
                <h4 className="font-bold text-[14px] text-[#191c1e] mb-2">¿Busca información médica oficial?</h4>
                <p className="text-[12px] text-[#564242] leading-relaxed mb-4">
                  Consulte la guía clínica elaborada por los especialistas de la UPCH para conocer qué se sabe sobre el virus, diagnóstico y tratamientos.
                </p>
                <Link 
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#5b0617] hover:underline"
                >
                  <span>Ir a la Guía Clínica de HTLV</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>

            </aside>

          </div>

        </div>

      </main>
    </>
  );
}