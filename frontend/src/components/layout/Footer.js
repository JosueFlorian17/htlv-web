"use client";

import Link from 'next/link';

export default function Footer({ hasSidebar = false }) {
  return (
    <footer className="w-full py-14 px-6 md:px-10 bg-[#e7e8ea] border-t border-[#dcc0c0] text-[#564242]">
      <div className={`max-w-[1280px] w-full mx-auto space-y-10 ${hasSidebar ? 'lg:pl-64' : ''}`}>
        
        {/* Aviso y Descargo de Responsabilidad Médica Destacado */}
        <div className="bg-[#f8f9fb] border-l-4 border-[#5b0617] p-5 rounded-r-xl shadow-xs">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#5b0617] text-2xl flex-shrink-0 mt-0.5">verified_user</span>
            <div className="space-y-1">
              <h5 className="text-[13px] font-bold text-[#191c1e] uppercase tracking-wider">
                Aviso de Carácter Científico y Descargo Médico
              </h5>
              <p className="text-[12px] text-[#564242] leading-relaxed">
                El contenido publicado en este portal de la <strong>Red Internacional de Investigación e Innovación en HTLV (RIII-HTLV)</strong> tiene propósitos exclusivamente académicos, científicos y de divulgación en salud pública. <strong>No constituye, reemplaza ni sustituye el criterio médico, diagnóstico ni tratamiento profesional.</strong> Si usted sospecha o ha sido diagnosticado con infección por HTLV, consulte siempre a un médico especialista o infectólogo calificado en su centro de salud.
              </p>
            </div>
          </div>
        </div>

        {/* Columnas Principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[22px] font-bold text-[#5b0617]">RIII-HTLV</span>
              <span className="text-[11px] bg-[#ffdada] text-[#5b0617] font-bold px-2 py-0.5 rounded">
                Perú & Global
              </span>
            </div>
            <p className="text-[13px] text-[#564242] max-w-lg leading-relaxed">
              Red colaborativa internacional para la investigación epidemiológica, biológica y clínica de los Retrovirus Humanos T-Linfotrópicos (HTLV-1/2), con el liderazgo científico del Instituto de Medicina Tropical Alexander von Humboldt de la Universidad Peruana Cayetano Heredia (UPCH) y centros de excelencia global.
            </p>
            <div className="pt-2 text-[12px] text-[#897172]">
              <span>Ley N° 29733 (Protección de Datos Personales - Perú) & Estándares Éticos Internacionales</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h6 className="text-[13px] font-bold text-[#191c1e] uppercase tracking-wider border-b border-[#dcc0c0]/60 pb-2">
              Navegación Científica
            </h6>
            <nav className="flex flex-col gap-2 text-[13px]">
              <Link className="hover:text-[#5b0617] hover:underline transition-colors" href="/about">¿Qué es el HTLV?</Link>
              <Link className="hover:text-[#5b0617] hover:underline transition-colors" href="/network">La Red y Miembros</Link>
              <Link className="hover:text-[#5b0617] hover:underline transition-colors" href="/research">Líneas de Investigación</Link>
              <Link className="hover:text-[#5b0617] hover:underline transition-colors" href="/repository">Repositorio Documental</Link>
              <Link className="hover:text-[#5b0617] hover:underline transition-colors" href="/resources">Recursos Descargables</Link>
              <Link className="hover:text-[#5b0617] hover:underline transition-colors" href="/foro">Foro Comunitario</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <h6 className="text-[13px] font-bold text-[#191c1e] uppercase tracking-wider border-b border-[#dcc0c0]/60 pb-2">
              Institucional & Contacto
            </h6>
            <div className="space-y-2 text-[13px]">
              <p className="font-semibold text-[#191c1e]">Sede Central:</p>
              <p className="text-[12px]">Av. Honorio Delgado 430, San Martín de Porres, Lima - Perú</p>
              <p className="text-[12px]">Instituto de Medicina Tropical Alexander von Humboldt (UPCH)</p>
              <div className="pt-2">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#5b0617] hover:underline"
                >
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                  Formulario de Contacto Institucional
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior de Copyright y Privacidad */}
        <div className="pt-6 border-t border-[#dcc0c0] flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] text-[#897172]">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} Red Internacional de Investigación e Innovación en HTLV (RIII-HTLV). Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-[12px]">
            <span>Protección de Datos (Ley N° 29733)</span>
            <span>•</span>
            <span>Uso Académico y Científico</span>
          </div>
        </div>

      </div>
    </footer>
  );
}