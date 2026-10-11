"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3500);
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full relative mt-16 font-sans">
      
      {/* 1. FRANJA SUPERIOR BLANCA (Exacta a IRVA: fondo blanco con Contact y Our Location a la derecha) */}
      <div className="w-full bg-white border-t border-b border-gray-200/90 py-5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-end items-start md:items-center gap-6 md:gap-12">
          
          {/* Bloque Contact */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg border-2 border-[#1E9CD7] flex items-center justify-center text-[#1E9CD7] bg-white shadow-xs">
              <span className="material-symbols-outlined text-[24px]">mail</span>
            </div>
            <div className="text-left">
              <span className="block font-black text-[#002838] text-[15px] leading-tight">
                {lang === 'es' ? 'Contacto' : 'Contact'}
              </span>
              <Link href="/contact" className="text-[13px] text-gray-500 hover:text-[#1E9CD7] font-medium transition-colors">
                {lang === 'es' ? 'Formulario oficial de contacto' : 'Use our Contact form'}
              </Link>
            </div>
          </div>

          {/* Separador diagonal sutil */}
          <div className="h-9 w-px bg-gray-300 rotate-12 hidden md:block"></div>

          {/* Bloque Our Location */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg border-2 border-[#1E9CD7] flex items-center justify-center text-[#1E9CD7] bg-white shadow-xs">
              <span className="material-symbols-outlined text-[24px]">location_on</span>
            </div>
            <div className="text-left">
              <span className="block font-black text-[#002838] text-[15px] leading-tight">
                {lang === 'es' ? 'Nuestra Sede' : 'Our Location'}
              </span>
              <span className="text-[13px] text-gray-500 font-medium">
                Av. Honorio Delgado 430, IMTAvH - UPCH, Lima, Perú
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* 2. CUERPO AZUL NOCHE DEL FOOTER (Con la tarjeta Contact Us sobresaliendo hacia arriba) */}
      <div className="w-full bg-[#002538] text-white pt-6 pb-14 relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* TARJETA CONTACT US CELESTE (Forma exacta a Imagen 2: esquina sup-der curvada, esquinas rectas en el resto) */}
            <div className="lg:col-span-4 relative z-20 mt-2 lg:-mt-24">
              <div className="bg-[#1E9CD7] text-white p-7 rounded-tl-none rounded-tr-[58px] rounded-bl-none rounded-br-none shadow-2xl space-y-4">
                
                {/* Ícono de sobre blanco idéntico a IRVA */}
                <div className="w-14 h-10 bg-white rounded-md flex items-center justify-center text-[#1E9CD7] shadow-sm">
                  <span className="material-symbols-outlined text-[28px]">mail</span>
                </div>

                <h3 className="text-[25px] font-black tracking-tight text-white">
                  {lang === 'es' ? 'Contáctanos' : 'Contact Us'}
                </h3>

                {sent ? (
                  <div className="p-6 bg-white/20 text-center space-y-2 animate-fadeIn">
                    <span className="material-symbols-outlined text-4xl text-white">check_circle</span>
                    <p className="font-bold text-[15px]">
                      {lang === 'es' ? 'Mensaje enviado a la secretaría.' : 'Message sent to the secretariat.'}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 pt-1">
                    <input
                      type="text"
                      placeholder={lang === 'es' ? "Nombre" : "Name"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-none bg-[#EAEAEA] text-[#191c1e] text-[14px] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/80"
                    />
                    <input
                      type="email"
                      required
                      placeholder={lang === 'es' ? "Correo Electrónico" : "Email Address"}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-none bg-[#EAEAEA] text-[#191c1e] text-[14px] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/80"
                    />
                    <textarea
                      required
                      rows="4"
                      placeholder={lang === 'es' ? "Mensaje" : "Message"}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-none bg-[#EAEAEA] text-[#191c1e] text-[14px] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/80 resize-none"
                    ></textarea>
                    <div className="flex justify-end pt-1">
                      <button
                        type="submit"
                        className="bg-[#0B3456] hover:bg-[#07253D] text-white px-7 py-2.5 rounded-none text-[14px] font-bold transition-colors shadow-md cursor-pointer"
                      >
                        {lang === 'es' ? 'Enviar Mensaje' : 'Send Message'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* 3 COLUMNAS DE ENLACES (Exactas a IRVA: About IRVA / Research / IRVA) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-[14.5px] pt-4 lg:pt-2">
              
              {/* Columna 1: About RIII-HTLV */}
              <div className="space-y-3">
                <h4 className="text-[18px] font-black text-white tracking-tight">
                  {lang === 'es' ? 'Acerca de RIII-HTLV' : 'About RIII-HTLV'}
                </h4>
                <p className="text-white/80 leading-relaxed text-[13.5px]">
                  {lang === 'es'
                    ? 'La misión de la Red Internacional de Investigación e Innovación en HTLV (RIII-HTLV) es fomentar la investigación retrovirológica de excelencia en HTLV-1 y HTLV-2, facilitando el diálogo entre grupos científicos y transfiriendo evidencia de calidad para la salud comunitaria.'
                    : 'The mission of the International Research and Innovation Network on HTLV (RIII-HTLV) is to foster retrovirology research excellence on HTLV-1 and HTLV-2, promoting collaborative scientific dialogue and transferring evidence to public health.'}
                </p>
              </div>

              {/* Columna 2: Research / Investigación */}
              <div className="space-y-3">
                <h4 className="text-[18px] font-black text-white tracking-tight">
                  {lang === 'es' ? 'Investigación' : 'Research'}
                </h4>
                <ul className="space-y-2.5 font-medium text-[14px]">
                  <li>
                    <Link href="/profesionales?tab=recursos" className="hover:text-[#1E9CD7] transition-colors flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[17px] text-white/90">arrow_circle_right</span>
                      <span>{lang === 'es' ? 'Guías Clínicas' : 'Guidelines'}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/publicaciones" className="hover:text-[#1E9CD7] transition-colors flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[17px] text-white/90">arrow_circle_right</span>
                      <span>{lang === 'es' ? 'Publicaciones' : 'Publications'}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/proyectos?tab=investigacion" className="hover:text-[#1E9CD7] transition-colors flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[17px] text-white/90">arrow_circle_right</span>
                      <span>{lang === 'es' ? 'Proyectos Activos' : 'Events & Projects'}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/profesionales?tab=webinars" className="hover:text-[#1E9CD7] transition-colors flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[17px] text-white/90">arrow_circle_right</span>
                      <span>{lang === 'es' ? 'Webinars & Eventos' : 'Meetings'}</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Columna 3: RIII-HTLV Institucional */}
              <div className="space-y-3">
                <h4 className="text-[18px] font-black text-white tracking-tight">
                  RIII-HTLV
                </h4>
                <ul className="space-y-2.5 font-medium text-[14px]">
                  <li>
                    <Link href="/about?tab=quienes-somos" className="hover:text-[#1E9CD7] transition-colors flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[17px] text-white/90">arrow_circle_right</span>
                      <span>{lang === 'es' ? 'Quiénes Somos' : 'About Us'}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about?tab=estructura" className="hover:text-[#1E9CD7] transition-colors flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[17px] text-white/90">arrow_circle_right</span>
                      <span>{lang === 'es' ? 'Estructura & Gobierno' : 'Our Team'}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about?tab=miembros" className="hover:text-[#1E9CD7] transition-colors flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[17px] text-white/90">arrow_circle_right</span>
                      <span>{lang === 'es' ? 'Instituciones Miembros' : 'Member Nodes'}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-[#1E9CD7] transition-colors flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[17px] text-white/90">arrow_circle_right</span>
                      <span>{lang === 'es' ? 'Contacto Central' : 'Contact Central'}</span>
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>

    </footer>
  );
}