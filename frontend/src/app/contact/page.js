"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

export default function ContactPage() {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    termsAccepted: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert(lang === 'es' ? "Por favor, autorice el tratamiento de contacto." : "Please accept contact authorization.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <main className="w-full bg-[#f8fafc] min-h-[calc(100vh-80px)] py-8 sm:py-12 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Limpia e Integrada (Sin tarjetas flotantes) */}
        <section className="pb-6 border-b-2 border-[#003B49]/15 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#003B49] tracking-tight">
                {lang === 'es' ? 'Contacto' : 'Contact'}
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                {lang === 'es'
                  ? 'Canal oficial para colaboraciones científicas, acreditación de proyectos y vinculación institucional con la Red HTLV.'
                  : 'Official channel for scientific collaborations, project endorsements, and institutional liaisons with the HTLV Network.'}
              </p>
            </div>

            {/* Enlace sutil de orientación para pacientes (sin tarjeta) */}
            <div className="text-left md:text-right pt-2 md:pt-0">
              <span className="text-xs text-slate-500 block mb-0.5">
                {lang === 'es' ? '¿Consulta de paciente o familiar?' : 'Patient or family inquiry?'}
              </span>
              <Link
                href="/pacientes?tab=haz-tu-pregunta"
                className="text-[#A10D3A] font-semibold hover:underline inline-flex items-center gap-1 text-sm"
              >
                <span>{lang === 'es' ? 'Espacio Haz tu pregunta' : 'Ask your question space'}</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Estructura Integrada y Unificada */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Columna Izquierda: Formulario Directo */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xl font-bold text-[#003B49]">
              {lang === 'es' ? 'Envíanos un mensaje institucional' : 'Send an institutional message'}
            </h2>

            {submitted ? (
              <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-4 animate-fadeIn">
                <span className="material-symbols-outlined text-[#087E8B] text-5xl">check_circle</span>
                <h3 className="font-bold text-xl text-[#003B49]">
                  {lang === 'es' ? 'Solicitud Registrada Exitosamente' : 'Inquiry Successfully Submitted'}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  {lang === 'es'
                    ? 'Gracias por comunicarse con la Red HTLV. La coordinación general en el IMTAvH - UPCH responderá a su correo a la brevedad.'
                    : 'Thank you for contacting Red HTLV. The coordination secretariat at IMTAvH - UPCH will respond shortly.'}
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#003B49] text-white rounded-lg text-sm font-semibold hover:bg-[#087E8B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A400] transition-colors cursor-pointer"
                >
                  {lang === 'es' ? 'Enviar otra solicitud' : 'Submit another inquiry'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-[#003B49]">{lang === 'es' ? 'Nombre' : 'First Name'}</label>
                    <input 
                      name="firstName" 
                      value={formData.firstName} 
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#087E8B] focus:border-transparent text-sm text-slate-900 transition" 
                      type="text" 
                      required 
                      placeholder="Ej. Carlos"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-[#003B49]">{lang === 'es' ? 'Apellidos' : 'Last Name'}</label>
                    <input 
                      name="lastName" 
                      value={formData.lastName} 
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#087E8B] focus:border-transparent text-sm text-slate-900 transition" 
                      type="text" 
                      required 
                      placeholder="Ej. Mendoza"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-[#003B49]">{lang === 'es' ? 'Correo Electrónico' : 'Email'}</label>
                  <input 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#087E8B] focus:border-transparent text-sm text-slate-900 transition" 
                    type="email" 
                    required 
                    placeholder="nombre@ejemplo.com"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-[#003B49]">{lang === 'es' ? 'Mensaje' : 'Message'}</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange}
                    rows="4" 
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#087E8B] focus:border-transparent text-sm text-slate-900 resize-none transition" 
                    required
                    placeholder={lang === 'es' ? "Describa su consulta o mensaje..." : "Describe your request or message..."}
                  ></textarea>
                </div>

                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-[#003B49] focus:ring-[#087E8B] cursor-pointer"
                    />
                    <span className="text-xs text-slate-600 leading-normal">
                      {lang === 'es'
                        ? 'Autorizo el tratamiento de mis datos de contacto exclusivamente para fines de coordinación institucional.'
                        : 'I authorize processing of contact data exclusively for institutional coordination.'}
                    </span>
                  </label>
                </div>

                <button 
                  className="bg-[#003B49] hover:bg-[#087E8B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A400] text-white font-semibold py-2.5 px-8 rounded-lg transition-colors shadow-sm text-sm cursor-pointer" 
                  type="submit"
                >
                  {lang === 'es' ? 'Enviar Solicitud' : 'Submit Request'}
                </button>
              </form>
            )}
          </div>

          {/* Columna Derecha: Información Integrada en Lista Limpia */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-slate-200 lg:pl-10 space-y-6 pt-8 lg:pt-0">
            
            {/* Sede Central en formato de lista institucional */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#003B49]">
                {lang === 'es' ? 'Recuerda que puedes encontrarnos en' : 'You can find us at'}
              </h3>
              
              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#087E8B] text-xl mt-0.5">location_on</span>
                  <div>
                    <strong className="block text-[#003B49]">Instituto IMTAvH • UPCH</strong>
                    <span>Av. Honorio Delgado 430, San Martín de Porres, Lima, Perú</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#087E8B] text-xl mt-0.5">mail</span>
                  <div>
                    <strong className="block text-[#003B49]">{lang === 'es' ? 'Correo Electrónico' : 'Email'}</strong>
                    <a href="mailto:contacto.riii@cayetano.edu.pe" className="text-[#087E8B] hover:underline font-medium">
                      contacto.riii@cayetano.edu.pe
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}