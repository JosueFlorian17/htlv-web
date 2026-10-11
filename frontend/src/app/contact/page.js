"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    inquiryType: 'Investigación Científica',
    message: '',
    termsAccepted: false
  });

  const [submitted, setSubmitted] = useState(false);

  const memberInstitutions = [
    { name: 'Universidad Peruana Cayetano Heredia (UPCH)', url: 'https://www.cayetano.edu.pe', country: 'Perú' },
    { name: 'Instituto de Medicina Tropical Alexander von Humboldt (IMTAvH)', url: 'https://medicina.cayetano.edu.pe/imtavh/', country: 'Perú' },
    { name: 'Imperial College London', url: 'https://www.imperial.ac.uk', country: 'Reino Unido' },
    { name: 'Institut Pasteur', url: 'https://www.pasteur.fr', country: 'Francia' },
    { name: 'Fundação Oswaldo Cruz (Fiocruz)', url: 'https://portal.fiocruz.br', country: 'Brasil' },
    { name: 'Instituto de Salud Carlos III (ISCIII)', url: 'https://www.isciii.es', country: 'España' },
    { name: 'St. Marianna University School of Medicine', url: 'https://www.marianna-u.ac.jp', country: 'Japón' }
  ];

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
      alert("Por favor, confirme la autorización de contacto.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <main className="w-full bg-[#f8f9fb] min-h-screen py-10 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        
        {/* Cabecera Principal */}
        <section className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="px-3 py-1 bg-[#ffdada] text-[#5b0617] text-[12px] font-black uppercase tracking-widest rounded-full">
              Canal de Comunicación
            </span>
            <span className="px-3 py-1 bg-[#d6e0f3] text-[#1d2b3a] text-[12px] font-bold rounded-full">
              Sede Central IMTAvH • UPCH (Lima, Perú)
            </span>
          </div>

          <h1 className="text-[34px] sm:text-[46px] font-black text-[#191c1e] tracking-tight leading-tight">
            Contacto & Enlaces Institucionales
          </h1>
          <p className="text-[17px] text-[#564242] max-w-3xl mx-auto leading-relaxed">
            Canal oficial para consultas institucionales, solicitudes de colaboración científica, acreditaciones de proyectos y acceso a las instituciones miembros de la Red RIII-HTLV.
          </p>

          {/* Banner Amigable de Orientación a Pacientes */}
          <div className="p-4 bg-white border border-[#dcc0c0] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-left shadow-xs">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#5b0617] text-2xl">favorite</span>
              <span className="text-[14px] text-[#564242]">
                ¿Eres paciente o familiar y deseas hacer una consulta sobre HTLV?
              </span>
            </div>
            <Link
              href="/pacientes"
              className="bg-[#5b0617] text-white px-4 py-2 rounded-xl text-[13px] font-bold hover:opacity-90 transition-all flex items-center gap-1.5 flex-shrink-0"
            >
              <span>Ir al Espacio de Pacientes</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </section>

        {/* Rejilla de Formulario e Información */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 max-w-6xl mx-auto">
          
          {/* Columna del Formulario */}
          <div className="md:col-span-7 bg-white border border-[#dcc0c0] p-6 md:p-8 rounded-2xl shadow-xs">
            <h2 className="text-[22px] font-black mb-6 text-[#191c1e]">
              Formulario de Contacto Institucional
            </h2>

            {submitted ? (
              <div className="p-8 bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl text-center space-y-4 animate-fadeIn">
                <span className="material-symbols-outlined text-[#5b0617] text-5xl">check_circle</span>
                <h3 className="font-bold text-[18px] text-[#191c1e]">Solicitud Registrada Exitosamente</h3>
                <p className="text-[13.5px] text-[#564242] max-w-md mx-auto">
                  Gracias por comunicarse con la Red RIII-HTLV. La coordinación general en el IMTAvH - UPCH evaluará su mensaje y responderá a su correo electrónico a la brevedad.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#5b0617] text-white rounded-xl text-[13px] font-bold hover:opacity-90 transition-all cursor-pointer"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold text-[#564242]">Nombre *</label>
                    <input 
                      name="firstName" 
                      value={formData.firstName} 
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-xl border border-[#dcc0c0] bg-[#f8f9fb] focus:bg-white focus:outline-none focus:border-[#5b0617] text-[14px]" 
                      type="text" 
                      required 
                      placeholder="Ej. Carlos"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold text-[#564242]">Apellidos *</label>
                    <input 
                      name="lastName" 
                      value={formData.lastName} 
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-xl border border-[#dcc0c0] bg-[#f8f9fb] focus:bg-white focus:outline-none focus:border-[#5b0617] text-[14px]" 
                      type="text" 
                      required 
                      placeholder="Ej. Mendoza"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[13px] font-bold text-[#564242]">Correo Electrónico *</label>
                  <input 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-xl border border-[#dcc0c0] bg-[#f8f9fb] focus:bg-white focus:outline-none focus:border-[#5b0617] text-[14px]" 
                    type="email" 
                    required 
                    placeholder="nombre@institucion.edu"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[13px] font-bold text-[#564242]">Institución u Organización</label>
                  <input 
                    name="organization" 
                    value={formData.organization} 
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-xl border border-[#dcc0c0] bg-[#f8f9fb] focus:bg-white focus:outline-none focus:border-[#5b0617] text-[14px]" 
                    type="text" 
                    placeholder="Ej. Hospital / Universidad / Centro de Investigación"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[13px] font-bold text-[#564242]">Motivo de la Comunicación</label>
                  <select 
                    name="inquiryType" 
                    value={formData.inquiryType} 
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-xl border border-[#dcc0c0] bg-[#f8f9fb] focus:bg-white focus:outline-none focus:border-[#5b0617] text-[14px] cursor-pointer"
                  >
                    <option value="Investigación Científica">Propuesta de Investigación o Proyecto</option>
                    <option value="Acreditación">Solicitud de Carta de Acreditación de la Red</option>
                    <option value="Capacitación">Consultas sobre Cursos o Webinars</option>
                    <option value="Adhesión">Incorporación de Nueva Institución Aliada</option>
                    <option value="Otro">Otro Asunto Institucional</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[13px] font-bold text-[#564242]">Mensaje o Detalle *</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange}
                    rows="4" 
                    className="w-full p-2.5 rounded-xl border border-[#dcc0c0] bg-[#f8f9fb] focus:bg-white focus:outline-none focus:border-[#5b0617] text-[14px] resize-y" 
                    required
                    placeholder="Describa su solicitud, proyecto o consulta institucional..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 rounded border-[#dcc0c0] text-[#5b0617] focus:ring-[#5b0617] cursor-pointer"
                    />
                    <span className="text-[12px] text-[#564242] leading-tight">
                      Autorizo el tratamiento de mis datos exclusivamente para coordinaciones institucionales de la Red conforme a la Ley N° 29733 de Protección de Datos Personales.
                    </span>
                  </label>
                </div>

                <button 
                  className="w-full sm:w-auto bg-[#5b0617] text-white font-bold py-3 px-8 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs text-[14px]" 
                  type="submit"
                >
                  <span>Enviar Mensaje</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </form>
            )}
          </div>

          {/* Columna de Enlaces a Instituciones Miembros y Sede */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* Tarjeta Sede Central */}
            <div className="bg-[#5b0617] text-white p-7 rounded-2xl shadow-xs space-y-5">
              <h3 className="text-[20px] font-bold text-white">
                Sede de Coordinación
              </h3>
              
              <div className="space-y-4 text-[13.5px]">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffdada] text-xl mt-0.5">location_on</span>
                  <div>
                    <p className="font-bold text-[#ffdada]">Instituto IMTAvH • UPCH</p>
                    <p className="text-white mt-0.5 leading-snug">
                      Av. Honorio Delgado 430, San Martín de Porres, Lima, Perú
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffdada] text-xl mt-0.5">mail</span>
                  <div>
                    <p className="font-bold text-[#ffdada]">Correo de Coordinación</p>
                    <p className="text-white font-semibold mt-0.5">contacto.riii@cayetano.edu.pe</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffdada] text-xl mt-0.5">language</span>
                  <div>
                    <p className="font-bold text-[#ffdada]">Sitio Web IMTAvH</p>
                    <a 
                      href="https://medicina.cayetano.edu.pe/imtavh/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white underline hover:text-[#ffdada]"
                    >
                      medicina.cayetano.edu.pe/imtavh/
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Directorio de Enlaces a Instituciones Miembros */}
            <div className="bg-white p-6 rounded-2xl border border-[#dcc0c0] text-[#191c1e] shadow-xs space-y-3">
              <h3 className="font-bold text-[16px]">Enlaces a las Instituciones Miembros</h3>
              <p className="text-[13px] text-[#564242]">
                Acceda directamente a los portales oficiales de cada entidad de la red:
              </p>

              <div className="space-y-2 pt-1 text-[13px]">
                {memberInstitutions.map((inst, i) => (
                  <a
                    key={i}
                    href={inst.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-[#ffdada]/30 text-[#564242] hover:text-[#5b0617] transition-all group"
                  >
                    <span className="font-semibold text-[13px]">{inst.name}</span>
                    <span className="material-symbols-outlined text-[15px] text-[#897172] group-hover:text-[#5b0617]">open_in_new</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </section>

      </div>
    </main>
  );
}