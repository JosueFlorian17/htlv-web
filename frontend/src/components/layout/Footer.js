"use client";

import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer({ hasSidebar = false }) {
  const { lang, t } = useLanguage();

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
    <footer className="w-full py-12 px-6 md:px-12 bg-[#f1f3f5] border-t border-[#dcc0c0] text-[#443333]">
      <div className={`max-w-[1400px] w-full mx-auto space-y-10 ${hasSidebar ? 'lg:pl-64' : ''}`}>
        
        {/* Columnas Principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Identidad de la Red */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#5b0617] text-white flex items-center justify-center font-black text-xl">
                R
              </div>
              <div>
                <span className="text-[22px] font-black text-[#5b0617] block leading-tight">RIII-HTLV</span>
                <span className="text-[12px] font-bold text-[#897172] uppercase tracking-wider">
                  {lang === 'es' ? 'Red Internacional HTLV' : 'International HTLV Network'}
                </span>
              </div>
            </div>
            <p className="text-[14.5px] text-[#564242] leading-relaxed">
              {lang === 'es'
                ? 'Alianza científica global coordinada desde el IMTAvH de la Universidad Peruana Cayetano Heredia (UPCH) para la investigación de excelencia, prevención y acompañamiento en HTLV-1 y HTLV-2.'
                : 'Global scientific alliance coordinated from IMTAvH - Universidad Peruana Cayetano Heredia (UPCH) for research excellence, prevention, and patient care in HTLV-1 and HTLV-2.'}
            </p>
          </div>

          {/* Navegación */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[14px] font-black text-[#191c1e] uppercase tracking-wider border-b border-[#dcc0c0]/60 pb-2">
              {lang === 'es' ? 'Secciones' : 'Navigation'}
            </h4>
            <nav className="flex flex-col gap-2 text-[14.5px] font-semibold">
              <Link className="hover:text-[#5b0617] hover:underline transition-colors" href="/about">{t('nav_about')}</Link>
              <Link className="hover:text-[#5b0617] hover:underline transition-colors text-[#5b0617]" href="/htlv">{t('nav_htlv')}</Link>
              <Link className="hover:text-[#5b0617] hover:underline transition-colors" href="/proyectos">{t('nav_projects')}</Link>
              <Link className="hover:text-[#5b0617] hover:underline transition-colors" href="/profesionales">{t('nav_professionals')}</Link>
              <Link className="hover:text-[#5b0617] hover:underline transition-colors text-[#5b0617]" href="/pacientes">{t('nav_patients')}</Link>
              <Link className="hover:text-[#5b0617] hover:underline transition-colors" href="/publicaciones">{t('nav_publications')}</Link>
              <Link className="hover:text-[#5b0617] hover:underline transition-colors" href="/contact">{t('nav_contact')}</Link>
            </nav>
          </div>

          {/* Instituciones Miembros */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[14px] font-black text-[#191c1e] uppercase tracking-wider border-b border-[#dcc0c0]/60 pb-2">
              {lang === 'es' ? 'Instituciones Miembros' : 'Member Institutions'}
            </h4>
            <div className="flex flex-col gap-2 text-[13.5px]">
              {memberInstitutions.map((inst, idx) => (
                <a 
                  key={idx}
                  href={inst.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#443333] hover:text-[#5b0617] hover:underline flex items-center gap-1.5 transition-colors"
                >
                  <span className="material-symbols-outlined text-[14px] text-[#897172]">open_in_new</span>
                  <span>{inst.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Sede y Contacto */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[14px] font-black text-[#191c1e] uppercase tracking-wider border-b border-[#dcc0c0]/60 pb-2">
              {lang === 'es' ? 'Sede Central' : 'Central Coordination'}
            </h4>
            <div className="space-y-2 text-[14px]">
              <p className="font-bold text-[#191c1e]">Instituto de Medicina Tropical Alexander von Humboldt</p>
              <p className="text-[13px] text-[#564242]">Universidad Peruana Cayetano Heredia (UPCH)</p>
              <p className="text-[13px] text-[#564242]">Av. Honorio Delgado 430, San Martín de Porres, Lima, Perú</p>
              <div className="pt-2">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#5b0617] hover:underline bg-[#ffdada]/60 px-3 py-1.5 rounded-xl"
                >
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                  <span>{lang === 'es' ? 'Formulario de Contacto' : 'Contact Form'}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="pt-6 border-t border-[#dcc0c0] flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-[#897172]">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} Red Internacional de Investigación e Innovación en HTLV (RIII-HTLV).
          </p>
          <div className="flex items-center gap-4">
            <span>{lang === 'es' ? 'Protección de Datos (Ley N° 29733)' : 'Data Protection'}</span>
            <span>•</span>
            <span>{lang === 'es' ? 'Acceso Abierto a la Información' : 'Open Access'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}