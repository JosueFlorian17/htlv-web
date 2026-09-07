"use client";

import Link from 'next/link';

export default function ForumPage() {
  const categories = [
    {
      title: 'Apoyo Mutuo',
      desc: 'Un espacio desde el corazón para convivir con el HTLV, compartir la vida diaria y encontrar puntos en común.',
      icon: 'volunteer_activism',
      members: '2.1k Miembros',
      tag: 'Espacio de Apoyo'
    },
    {
      title: 'Guía de Expertos',
      desc: 'Reciba perspectivas educativas de profesionales de la salud dedicados a la atención del HTLV.',
      icon: 'clinical_notes',
      members: 'Respuestas Verificadas',
      tag: '150 Temas'
    },
    {
      title: 'Futuro del Cuidado',
      desc: 'Conozca los estudios clínicos y contribuya a la investigación global para una cura.',
      icon: 'biotech',
      members: '842 Temas',
      tag: 'Participación'
    },
    {
      title: 'Actualizaciones de la Red',
      desc: 'Manténgase informado sobre seminarios web educativos, campañas y eventos de la comunidad.',
      icon: 'campaign',
      members: '456 Temas',
      tag: 'Comunidad'
    }
  ];

  return (
    <>
      <main className="w-full">
        {/* Visual Hero */}
        <div className="relative w-full h-[450px] flex items-center overflow-hidden">
          <img 
            alt="Fondo de comunidad de apoyo" 
            className="absolute inset-0 w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAqoHDWygUj6bPDpSZRerHWyHsTC3E7Pmjcyviws4rXpdgLA8UVnLo8H805dBI8JpQqVluYgGb2DkoERH5N6Wch9SrudnJg5LaaZEOkPkgW7b7hvKy8EovQIgd90mrDozbLWn76rj3zYMGSg_Y5iMV-fQDhvGBRQTjuRyl8_otEiLhq7kvmJTafEx--gmJrXfHibnrAW4qAw_Lt8258hfGy8CPQicvEyMYu9aRLUPYSxcuuxG1hQPpnIbMZ0IdU_XppVKOzYm2Slc"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/60 to-transparent"></div>
          <div className="relative px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto w-full">
            <div className="max-w-2xl">
              <span className="text-primary font-label-sm uppercase tracking-widest mb-2 block">Nuestro Viaje Compartido</span>
              <h2 className="font-display text-display mb-4 text-[#191c1e]">Foro Comunitario RIII-HTLV</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Una cálida bienvenida a nuestra comunidad. Este es un espacio seguro y de apoyo para que pacientes, familias y profesionales compartan experiencias, encuentren empatía y construyan fortaleza juntos.</p>
              <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md flex items-center gap-2 hover:opacity-95 transition-all shadow-md group cursor-pointer">
                <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">favorite</span>
                Compartir tu Historia
              </button>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto -mt-12 relative z-10 pb-20">
          {/* Voices of the Community Quote Card */}
          <section className="mb-16">
            <div className="bg-surface border border-outline-variant rounded-2xl p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center bg-opacity-95 backdrop-blur-sm">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#ffdada] text-[#5b0617] rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">format_quote</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-headline-md text-primary mb-2">Voces de la Comunidad</h3>
                <p className="font-body-lg italic text-on-surface-variant leading-relaxed">"Conectarme con otros aquí me hizo darme cuenta de que no estoy sola. El apoyo ha sido mi ancla." — Sarah, Defensora del Paciente</p>
              </div>
              <div className="flex gap-4">
                <button className="p-2 rounded-full border border-outline-variant hover:bg-surface-container-low transition-colors cursor-pointer"><span className="material-symbols-outlined">chevron_left</span></button>
                <button className="p-2 rounded-full border border-outline-variant hover:bg-surface-container-low transition-colors cursor-pointer"><span className="material-symbols-outlined">chevron_right</span></button>
              </div>
            </div>
          </section>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Left Column: Categories and Discussions */}
            <div className="lg:col-span-8 space-y-12">
              {/* Community Spaces */}
              <section>
                <h3 className="font-headline-md text-headline-md mb-6 border-l-4 border-primary pl-4 text-[#191c1e]">Espacios de la Comunidad</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categories.map((cat, i) => (
                    <div key={i} className="bg-surface p-8 border border-outline-variant rounded-xl shadow-sm hover:border-primary transition-all cursor-pointer group flex flex-col justify-between">
                      <div>
                        <div className="w-14 h-14 bg-[#d6e0f3] text-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all shadow-sm">
                          <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
                        </div>
                        <h4 className="font-headline-md text-headline-md mb-2 text-[#191c1e]">{cat.title}</h4>
                        <p className="text-on-surface-variant text-body-md mb-6 leading-relaxed">{cat.desc}</p>
                      </div>
                      <div className="flex items-center justify-between text-label-sm text-on-surface-variant pt-4 border-t border-[#dcc0c0]/30">
                        <span className="flex items-center gap-1 font-bold text-[#564242]">
                          <span className="material-symbols-outlined text-[16px] text-primary">groups</span> 
                          {cat.members}
                        </span>
                        <span className="flex items-center gap-1 text-primary font-bold">
                          {cat.tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Latest Discussions */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-headline-md text-headline-md border-l-4 border-primary pl-4 text-[#191c1e]">Conversaciones de la Comunidad</h3>
                  <Link className="text-primary font-label-md flex items-center hover:underline cursor-pointer" href="/foro">
                    Ver Todo 
                    <span className="material-symbols-outlined ml-1">chevron_right</span>
                  </Link>
                </div>
                <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden divide-y divide-outline-variant shadow-sm">
                  {/* Pinned Topic 1 */}
                  <Link href="/foro/post/102" className="block p-6 bg-primary/[0.03] hover:bg-primary/[0.06] transition-colors group cursor-pointer border-l-4 border-primary">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="bg-primary text-on-primary px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                            <span className="material-symbols-outlined text-[12px] fill-1">push_pin</span> Fijado
                          </span>
                          <span className="bg-[#555f6f]/10 text-[#555f6f] px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Nuestra Ética</span>
                        </div>
                        <h5 className="font-body-lg font-semibold text-primary">Normas del foro: Mantener un espacio seguro</h5>
                        <p className="text-label-md text-on-surface-variant mt-1">Lectura esencial para todos los nuevos miembros • 128 comentarios • Última respuesta hace 1 hora</p>
                      </div>
                    </div>
                  </Link>

                  {/* Topic 1 */}
                  <Link href="/foro/post/102" className="block p-6 hover:bg-primary/[0.03] transition-colors group cursor-pointer border-l-4 border-[#ba1a1a]">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="bg-[#ffdad6] text-[#ba1a1a] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                            <span className="material-symbols-outlined text-[12px] fill-1">favorite</span> Historia de Paciente
                          </span>
                          <span className="text-label-sm text-on-surface-variant">• Hace 2 horas</span>
                        </div>
                        <h5 className="font-body-lg font-semibold group-hover:text-primary transition-colors text-[#191c1e]">Mi viaje con HTLV-1: Encontrando esperanza en la comunidad</h5>
                        <p className="text-label-md text-on-surface-variant mt-1 font-medium">Iniciado por Sara J. • 32 comentarios • Última respuesta hace 2 horas</p>
                      </div>
                      <div className="flex -space-x-2 self-center">
                        <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-dim"></div>
                        <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-dim flex items-center justify-center text-[10px] font-bold text-[#564242]">+12</div>
                      </div>
                    </div>
                  </Link>

                  {/* Topic 2 */}
                  <Link href="/foro/post/102" className="block p-6 hover:bg-primary/[0.03] transition-colors group cursor-pointer border-l-4 border-primary">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="bg-primary text-on-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                            <span className="material-symbols-outlined text-[12px]">health_and_safety</span> Apoyo de Pares
                          </span>
                          <span className="text-label-sm text-on-surface-variant">• Ayer</span>
                        </div>
                        <h5 className="font-body-lg font-semibold group-hover:text-primary transition-colors text-[#191c1e]">Manejo de la fatiga diaria: Consejos de la comunidad</h5>
                        <p className="text-label-md text-on-surface-variant mt-1 font-medium">Iniciado por Miguel K. • 45 respuestas • 312 vistas</p>
                      </div>
                      <div className="flex -space-x-2 self-center">
                        <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-dim"></div>
                        <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-dim"></div>
                        <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-dim flex items-center justify-center text-[10px] font-bold text-[#564242]">+18</div>
                      </div>
                    </div>
                  </Link>

                  {/* Topic 3 */}
                  <Link href="/foro/post/102" className="block p-6 hover:bg-primary/[0.03] transition-colors group cursor-pointer">
                    <div className="flex gap-4">
                      <div className="hidden sm:block">
                        <div className="w-10 h-10 rounded-full bg-surface-dim flex items-center justify-center overflow-hidden">
                          <span className="material-symbols-outlined text-[#564242]">account_circle</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="bg-[#555f6f]/10 text-[#555f6f] px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Investigador</span>
                          <span className="text-label-sm text-on-surface-variant">• Hace 5 horas</span>
                        </div>
                        <h5 className="font-body-lg font-semibold group-hover:text-primary transition-colors text-[#191c1e]">Recursos para estudiantes de doctorado en laboratorios de HTLV</h5>
                        <p className="text-label-md text-on-surface-variant mt-1">Iniciado por Julián Chen • 12 respuestas • 89 vistas</p>
                      </div>
                      <div className="flex -space-x-2 self-center">
                        <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-dim"></div>
                        <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-dim flex items-center justify-center text-[10px] font-bold text-[#564242]">+2</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </section>
            </div>

            {/* Right Column: Sidebar Panels */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Highlighted Talk */}
              <div className="bg-surface p-8 border border-outline-variant rounded-xl shadow-sm">
                <h4 className="font-headline-md text-headline-md mb-6 border-l-4 border-primary pl-4 text-[#191c1e]">Charla Destacada</h4>
                <div className="bg-primary/[0.03] p-5 rounded-lg border border-primary/10">
                  <span className="bg-[#ffdada] text-[#822530] px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">Visión Profesional</span>
                  <h5 className="font-label-md font-bold mb-2 text-[#191c1e]">Entendiendo la Transmisión del HTLV: Hechos vs. Mitos</h5>
                  <p className="text-label-sm text-on-surface-variant mb-4 leading-relaxed">El Dr. Marcus Thorne responde preguntas comunes de la comunidad sobre seguridad y prevención.</p>
                  <Link className="text-primary font-bold text-label-sm hover:underline flex items-center gap-1 cursor-pointer" href="/foro/post/102">
                    Únete a la Discusión 
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Community Reach / Stats */}
              <div className="bg-surface p-8 border border-outline-variant rounded-xl shadow-sm">
                <h4 className="font-headline-md text-headline-md mb-6 border-l-4 border-primary pl-4 text-[#191c1e]">Alcance Comunitario</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#f3f4f6] rounded-lg text-center border border-[#dcc0c0]/30">
                    <p className="text-[32px] font-bold text-primary leading-tight">4.2k</p>
                    <p className="text-label-sm text-[#564242] uppercase font-bold mt-1">Miembros</p>
                  </div>
                  <div className="p-4 bg-[#f3f4f6] rounded-lg text-center border border-[#dcc0c0]/30">
                    <p className="text-[32px] font-bold text-primary leading-tight">12k</p>
                    <p className="text-label-sm text-[#564242] uppercase font-bold mt-1">Historias</p>
                  </div>
                </div>
              </div>

              {/* Respect and Privacy Rules */}
              <div className="bg-primary-container p-8 rounded-xl text-on-primary-container shadow-inner">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-white text-3xl">gavel</span>
                  <h4 className="font-headline-md text-headline-md text-white">Respeto y Privacidad</h4>
                </div>
                <ul className="text-label-md space-y-3 opacity-90 text-white">
                  <li className="flex gap-2"><span>•</span> Respeta la privacidad de todos los miembros del foro.</li>
                  <li className="flex gap-2"><span>•</span> Comunícate con empatía y amabilidad.</li>
                  <li className="flex gap-2"><span>•</span> No se permite la promoción comercial ni consejos no solicitados.</li>
                </ul>
                <Link className="inline-block mt-6 font-bold underline text-white hover:opacity-95" href="#">
                  Leer declaración completa de ética
                </Link>
              </div>

              {/* Member Tools Quick Links */}
              <div className="bg-surface p-8 border border-outline-variant rounded-xl shadow-sm">
                <h4 className="font-headline-md text-headline-md mb-6 border-l-4 border-primary pl-4 text-[#191c1e]">Enlaces de Miembros</h4>
                <div className="space-y-3">
                  <Link className="flex items-center justify-between p-4 rounded-lg border border-outline-variant hover:bg-primary/[0.03] hover:border-primary transition-all group cursor-pointer" href="/contact">
                    <span className="font-label-md text-[#191c1e]">Unirse a la Red</span>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                  <Link className="flex items-center justify-between p-4 rounded-lg border border-outline-variant hover:bg-primary/[0.03] hover:border-primary transition-all group cursor-pointer" href="/login">
                    <span className="font-label-md text-[#191c1e]">Acceso al Portal</span>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">login</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}