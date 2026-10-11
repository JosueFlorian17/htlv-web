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
    <footer className="w-full bg-[#003B49] text-white pt-10 relative">
      
      {/* 1. Franja Superior de Contacto & Ubicación (Exacta a la imagen 1) */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-8 border-b border-white/15">
        <div className="flex flex-col md:flex-row justify-end items-start md:items-center gap-8 md:gap-16 text-[14.5px]">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#E5A400]">
              <span className="material-symbols-outlined text-2xl">mail</span>
            </div>
            <div>
              <p className="font-extrabold text-[#E5A400] uppercase text-[12px] tracking-wider">
                {lang === 'es' ? 'Contacto' : 'Contact'}
              </p>
              <Link href="/contact" className="hover:underline text-white font-semibold">
                {lang === 'es' ? 'Formulario oficial de la Red' : 'Official contact form'}
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#087E8B]">
              <span className="material-symbols-outlined text-2xl">location_on</span>
            </div>
            <div>
              <p className="font-extrabold text-[#087E8B] uppercase text-[12px] tracking-wider">
                {lang === 'es' ? 'Sede Central' : 'Our Location'}
              </p>
              <p className="text-white font-semibold">
                Av. Honorio Delgado 430, IMTAvH - UPCH, Lima, Perú
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Cuerpo del Footer (Tarjeta celeste flotante a la izquierda y 3 columnas a la derecha) */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Tarjeta Curvada Celeste / Turquesa de Contacto (Idéntica a la imagen 1) */}
          <div className="lg:col-span-4 bg-[#087E8B] text-white p-7 rounded-3xl shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-3xl">mail</span>
              </div>
              <h3 className="text-[22px] font-black tracking-tight text-white">
                {lang === 'es' ? 'Contáctanos' : 'Contact Us'}
              </h3>
            </div>

            {sent ? (
              <div className="p-6 bg-white/15 rounded-2xl text-center space-y-2 animate-fadeIn">
                <span className="material-symbols-outlined text-4xl text-[#E5A400]">check_circle</span>
                <p className="font-bold text-[15px]">
                  {lang === 'es' ? 'Mensaje enviado a la secretaría.' : 'Message sent to the secretariat.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder={lang === 'es' ? "Nombre" : "Name"}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white text-[#191c1e] text-[14px] placeholder-gray-500 focus:outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder={lang === 'es' ? "Correo Electrónico" : "Email Address"}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white text-[#191c1e] text-[14px] placeholder-gray-500 focus:outline-none"
                />
                <textarea
                  required
                  rows="3"
                  placeholder={lang === 'es' ? "Mensaje" : "Message"}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white text-[#191c1e] text-[14px] placeholder-gray-500 focus:outline-none resize-none"
                ></textarea>
                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-[#003B49] hover:bg-[#002630] text-white px-6 py-2.5 rounded-xl text-[14px] font-bold transition-all shadow-md cursor-pointer"
                  >
                    {lang === 'es' ? 'Enviar Mensaje' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Columnas Informativas a la Derecha */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-[14.5px]">
            
            {/* Columna 1: About RIII-HTLV */}
            <div className="space-y-3">
              <h4 className="text-[17px] font-black text-[#E5A400] uppercase tracking-wider">
                {lang === 'es' ? 'Acerca de RIII-HTLV' : 'About RIII-HTLV'}
              </h4>
              <p className="text-white/80 leading-relaxed text-[14px]">
                {lang === 'es'
                  ? 'La misión de la Red Internacional de Investigación e Innovación en HTLV (RIII-HTLV) es fomentar la investigación retrovirológica de excelencia en HTLV-1 y HTLV-2, facilitando el diálogo entre grupos científicos y transfiriendo evidencia de calidad para la salud comunitaria.'
                  : 'The mission of the International Research and Innovation Network on HTLV (RIII-HTLV) is to foster retrovirology research excellence on HTLV-1 and HTLV-2, promoting collaborative scientific dialogue and transferring evidence to public health.'}
              </p>
            </div>

            {/* Columna 2: Research */}
            <div className="space-y-3">
              <h4 className="text-[17px] font-black text-[#E5A400] uppercase tracking-wider">
                {lang === 'es' ? 'Investigación' : 'Research'}
              </h4>
              <ul className="space-y-2.5 font-medium">
                <li>
                  <Link href="/profesionales?tab=recursos" className="hover:text-[#E5A400] transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-[17px] text-[#087E8B]">arrow_circle_right</span>
                    <span>{lang === 'es' ? 'Guías Clínicas' : 'Guidelines'}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/publicaciones" className="hover:text-[#E5A400] transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-[17px] text-[#087E8B]">arrow_circle_right</span>
                    <span>{lang === 'es' ? 'Publicaciones' : 'Publications'}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/proyectos?tab=investigacion" className="hover:text-[#E5A400] transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-[17px] text-[#087E8B]">arrow_circle_right</span>
                    <span>{lang === 'es' ? 'Proyectos Activos' : 'Projects'}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/profesionales?tab=webinars" className="hover:text-[#E5A400] transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-[17px] text-[#087E8B]">arrow_circle_right</span>
                    <span>{lang === 'es' ? 'Webinars & Eventos' : 'Webinars & Events'}</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 3: RIII-HTLV Institucional */}
            <div className="space-y-3">
              <h4 className="text-[17px] font-black text-[#E5A400] uppercase tracking-wider">
                RIII-HTLV
              </h4>
              <ul className="space-y-2.5 font-medium">
                <li>
                  <Link href="/about?tab=quienes-somos" className="hover:text-[#E5A400] transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-[17px] text-[#087E8B]">arrow_circle_right</span>
                    <span>{lang === 'es' ? 'Quiénes Somos' : 'About Us'}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about?tab=estructura" className="hover:text-[#E5A400] transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-[17px] text-[#087E8B]">arrow_circle_right</span>
                    <span>{lang === 'es' ? 'Estructura & Gobierno' : 'Structure & Team'}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about?tab=miembros" className="hover:text-[#E5A400] transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-[17px] text-[#087E8B]">arrow_circle_right</span>
                    <span>{lang === 'es' ? 'Instituciones Miembros' : 'Member Nodes'}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#E5A400] transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-[17px] text-[#087E8B]">arrow_circle_right</span>
                    <span>{lang === 'es' ? 'Contacto Central' : 'Contact Hub'}</span>
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* 3. Sub-barra Inferior Curvada (Idéntica a la parte inferior de la imagen 1) */}
      <div className="w-full bg-[#002B36] py-5 px-6 md:px-12 border-t border-white/10 relative">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-white/70">
          
          {/* Legales & Copyright */}
          <div className="space-y-1 text-center md:text-left">
            <p className="space-x-3">
              <Link href="/contact" className="hover:underline hover:text-white">
                {lang === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
              </Link>
              <span>|</span>
              <span>{lang === 'es' ? 'Ley N° 29733 (Perú)' : 'Data Protection'}</span>
            </p>
            <p>
              Copyright © {new Date().getFullYear()} RIII-HTLV. {lang === 'es' ? 'Todos los derechos reservados.' : 'All Rights Reserved.'}
            </p>
          </div>

          {/* Logotipo Central */}
          <div className="flex items-center gap-2 text-white font-black text-[18px]">
            <span className="material-symbols-outlined text-2xl text-[#087E8B]">public</span>
            <span>RIII-HTLV</span>
          </div>

          {/* Redes Sociales & Botón Scroll To Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                title="Facebook"
              >
                f
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                title="X (Twitter)"
              >
                𝕏
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors font-bold text-xs"
                title="LinkedIn"
              >
                in
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-[#087E8B] hover:bg-[#0aa0b0] text-white flex items-center justify-center shadow-lg transition-all cursor-pointer"
              title="Volver arriba"
            >
              <span className="material-symbols-outlined text-xl">expand_less</span>
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}