"use client";

import Link from 'next/link';

export default function Footer({ hasSidebar = false }) {
  return (
    <footer className="w-full py-16 px-10 bg-[#d9dadc] border-t border-[#dcc0c0]">
      <div className={`max-w-[1280px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${hasSidebar ? '' : 'mx-auto'}`}>
        <div className="col-span-1 lg:col-span-2">
          <span className="text-[24px] font-bold text-[#191c1e]">RIII-HTLV</span>
          <p className="mt-4 text-[14px] text-[#564242] max-w-md leading-relaxed">
            Red Internacional de Investigación e Innovación en HTLV. Dedicada a la erradicación del HTLV y sus enfermedades asociadas mediante la excelencia científica global.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="text-[14px] font-bold text-[#191c1e] uppercase tracking-wider">Recursos</h6>
          <nav className="flex flex-col gap-2 text-[12px] text-[#564242]">
            <Link className="hover:underline transition-all" href="/contact">Contáctenos</Link>
            <Link className="hover:underline transition-all" href="#">Política de Privacidad</Link>
            <Link className="hover:underline transition-all" href="#">Correo Institucional</Link>
            <Link className="hover:underline transition-all" href="#">Acceso de Socios</Link>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="text-[14px] font-bold text-[#191c1e] uppercase tracking-wider">Conectar</h6>
          <div className="flex gap-4">
            <Link className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center hover:bg-[#5b0617]/10 transition-colors" href="#">
              <span className="material-symbols-outlined text-[#5b0617] text-sm">share</span>
            </Link>
            <Link className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center hover:bg-[#5b0617]/10 transition-colors" href="#">
              <span className="material-symbols-outlined text-[#5b0617] text-sm">alternate_email</span>
            </Link>
          </div>
          <p className="mt-4 text-[12px] text-[#564242]" suppressHydrationWarning>
            © {new Date().getFullYear()} Red Internacional de Investigación e Innovación en HTLV. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}