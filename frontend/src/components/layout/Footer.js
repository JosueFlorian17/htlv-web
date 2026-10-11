"use client";

import Link from 'next/link';

export default function Footer({ hasSidebar = false }) {
  const memberInstitutions = [
    { name: 'Universidad Peruana Cayetano Heredia (UPCH)', url: 'https://www.cayetano.edu.pe' },
    { name: 'Instituto de Medicina Tropical Alexander von Humboldt (IMTAvH)', url: 'https://medicina.cayetano.edu.pe/imtavh/' },
    { name: 'Imperial College London', url: 'https://www.imperial.ac.uk' },
    { name: 'Institut Pasteur (Francia)', url: 'https://www.pasteur.fr' },
    { name: 'Fundação Oswaldo Cruz (Fiocruz - Brasil)', url: 'https://portal.fiocruz.br' },
    { name: 'Instituto de Salud Carlos III (ISCIII - España)', url: 'https://www.isciii.es' },
    { name: 'St. Marianna University School of Medicine (Japón)', url: 'https://www.marianna-u.ac.jp' }
  ];

  return (
    <footer className="w-full py-12 px-6 md:px-10 bg-[#f1f3f5] border-t border-[#dcc0c0] text-[#564242]">
      <div className={`max-w-[1360px] w-full mx-auto space-y-10 ${hasSidebar ? 'lg:pl-64' : ''}`}>
        
        {/* Columnas Principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Identidad de la Red */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#5b0617] text-white flex items-center justify-center font-black text-lg">
                R
              </div>
              <div>
                <span className="text-[20px] font-black text-[#5b0617] block leading-tight">RIII-HTLV</span>
                <span className="text-[11px] font-bold text-[#897172] uppercase tracking-wider">Red Internacional HTLV</span>
              </div>
            </div>
            <p className="text-[13px] text-[#564242] leading-relaxed">
              Alianza científica y colaborativa entre centros de referencia en América Latina, Europa y Asia para la investigación integral, prevención, diagnóstico oportuno y acompañamiento en HTLV-1 y HTLV-2.
            </p>
            <div className="pt-1 text-[12px] text-[#897172]">
              <span>Sede de Coordinación: IMTAvH • UPCH (Lima, Perú)</span>
            </div>
          </div>

          {/* Navegación Principal (7 Secciones Acordadas) */}
          <div className="flex flex-col gap-3">
            <h6 className="text-[13px] font-bold text-[#191c1e] uppercase tracking-wider border-b border-[#dcc0c0]/60 pb-2">
              Secciones
            </h6>
            <nav className="flex flex-col gap-2 text-[13px]">
              <Link className="hover:text-[#5b0617] hover:underline transition-colors" href="/">Inicio</Link>
              <Link className="hover:text-[#5b0617] hover:underline transition-colors" href="/about">Acerca de la Red</Link>
              <Link className="hover:text-[#5b0617] hover:underline transition-colors font-medium text-[#5b0617]" href="/htlv">HTLV (Información & FAQs)</Link>
              <Link className="hover:text-[#5b0617] hover:underline transition-colors" href="/proyectos">Proyectos de la Red</Link>
              <Link className="hover:text-[#5b0617] hover:underline transition-colors" href="/profesionales">Profesionales de la Salud</Link>
              <Link className="hover:text-[#5b0617] hover:underline transition-colors font-medium text-[#5b0617]" href="/pacientes">Pacientes & Preguntas</Link>
              <Link className="hover:text-[#5b0617] hover:underline transition-colors" href="/publicaciones">Publicaciones Científicas</Link>
              <Link className="hover:text-[#5b0617] hover:underline transition-colors" href="/contact">Contacto</Link>
            </nav>
          </div>

          {/* Instituciones Miembros y Enlaces Directos */}
          <div className="flex flex-col gap-3">
            <h6 className="text-[13px] font-bold text-[#191c1e] uppercase tracking-wider border-b border-[#dcc0c0]/60 pb-2">
              Instituciones Miembros
            </h6>
            <div className="flex flex-col gap-1.5 text-[12.5px]">
              {memberInstitutions.map((inst, idx) => (
                <a 
                  key={idx}
                  href={inst.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#564242] hover:text-[#5b0617] hover:underline flex items-center gap-1 transition-colors"
                >
                  <span className="material-symbols-outlined text-[13px] text-[#897172]">open_in_new</span>
                  <span>{inst.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Sede y Contacto */}
          <div className="flex flex-col gap-3">
            <h6 className="text-[13px] font-bold text-[#191c1e] uppercase tracking-wider border-b border-[#dcc0c0]/60 pb-2">
              Sede Central & Consultas
            </h6>
            <div className="space-y-2 text-[13px]">
              <p className="font-semibold text-[#191c1e]">Instituto de Medicina Tropical Alexander von Humboldt</p>
              <p className="text-[12px]">Universidad Peruana Cayetano Heredia (UPCH)</p>
              <p className="text-[12px] text-[#564242]">Av. Honorio Delgado 430, San Martín de Porres, Lima, Perú</p>
              <div className="pt-2">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#5b0617] hover:underline bg-[#ffdada]/60 px-3 py-1.5 rounded-lg"
                >
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                  Formulario de Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="pt-6 border-t border-[#dcc0c0] flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] text-[#897172]">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} Red Internacional de Investigación e Innovación en HTLV (RIII-HTLV).
          </p>
          <div className="flex items-center gap-4 text-[12px]">
            <span>Protección de Datos Personales (Ley N° 29733)</span>
            <span>•</span>
            <span>Acceso Abierto a la Información</span>
          </div>
        </div>

      </div>
    </footer>
  );
}