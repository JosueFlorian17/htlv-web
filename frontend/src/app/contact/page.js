"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    inquiryType: 'General Research',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Formulario enviado con éxito por ${formData.firstName} ${formData.lastName}`);
  };

  return (
    <>
      <main className="py-12 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
        {/* Header Section */}
        <section className="mb-12">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-label-sm uppercase tracking-wider rounded-full mb-4">Canal de Comunicación</span>
          <h1 className="font-display text-display text-primary mb-4">Centro de Contacto</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Póngase en contacto con la Red RIII-HTLV para colaboraciones de investigación, consultas sobre ensayos clínicos o solicitudes institucionales.</p>
        </section>

        {/* Contact Form & Info Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap">
          {/* Form Column */}
          <div className="md:col-span-7 bg-white border border-outline-variant p-8 rounded-xl shadow-sm">
            <h3 className="font-headline-md text-headline-md mb-6 text-[#191c1e]">Formulario de Consulta</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-label-sm font-bold text-on-surface-variant uppercase">Nombre</label>
                  <input 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-outline-variant bg-white focus:outline-none focus:ring-1 focus:ring-primary text-body-md" 
                    type="text" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-label-sm font-bold text-on-surface-variant uppercase">Apellido</label>
                  <input 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-outline-variant bg-white focus:outline-none focus:ring-1 focus:ring-primary text-body-md" 
                    type="text" 
                    required 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-label-sm font-bold text-on-surface-variant uppercase">Correo Electrónico</label>
                <input 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-outline-variant bg-white focus:outline-none focus:ring-1 focus:ring-primary text-body-md" 
                  type="email" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-label-sm font-bold text-on-surface-variant uppercase">Institución / Organización</label>
                <input 
                  name="organization" 
                  value={formData.organization} 
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-outline-variant bg-white focus:outline-none focus:ring-1 focus:ring-primary text-body-md" 
                  type="text" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-label-sm font-bold text-on-surface-variant uppercase">Tipo de Consulta</label>
                <select 
                  name="inquiryType" 
                  value={formData.inquiryType} 
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-outline-variant bg-white focus:outline-none focus:ring-1 focus:ring-primary text-body-md cursor-pointer"
                >
                  <option value="General Research">Investigación General</option>
                  <option value="Clinical Trial">Colaboración en Ensayos Clínicos</option>
                  <option value="Press & Media">Prensa y Medios</option>
                  <option value="Student Internship">Pasantías de Estudiantes</option>
                  <option value="Other">Otro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-label-sm font-bold text-on-surface-variant uppercase">Mensaje</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange}
                  rows="4" 
                  className="w-full p-3 rounded-lg border border-outline-variant bg-white focus:outline-none focus:ring-1 focus:ring-primary text-body-md resize-y" 
                  required
                ></textarea>
              </div>
              <button className="bg-primary text-white font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm" type="submit">
                <span>Enviar Consulta Formal</span>
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>

          {/* Info Column */}
          <div className="md:col-span-5 flex flex-col gap-gutter">
            {/* Institutional Contact Card */}
            <div className="bg-primary text-white p-8 rounded-xl shadow-sm flex-grow">
              <h3 className="font-headline-md text-headline-md mb-8 text-white font-bold">Contacto Directo</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#ffdada] text-3xl">corporate_fare</span>
                  <div>
                    <p className="font-label-sm uppercase tracking-wider text-[#ffb3b5] font-bold">Correo Institucional</p>
                    <p className="font-body-md text-white font-semibold mt-1">secretariat@riii-htlv.org</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#ffdada] text-3xl">language</span>
                  <div>
                    <p className="font-label-sm uppercase tracking-wider text-[#ffb3b5] font-bold">Sede Central</p>
                    <p className="font-body-md text-white mt-1 leading-relaxed">Centro Global de Investigación, Sector 12<br />Distrito Académico, Zona Internacional</p>
                  </div>
                </div>
                <div className="pt-8 border-t border-white/20">
                  <p className="font-label-sm uppercase tracking-wider text-[#ffb3b5] font-bold mb-4">Seguir Actualizaciones</p>
                  <div className="flex gap-4">
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/25 transition-all cursor-pointer">
                      <span className="material-symbols-outlined text-white text-xl">share</span>
                    </span>
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/25 transition-all cursor-pointer">
                      <span className="material-symbols-outlined text-white text-xl">link</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Mini Card */}
            <div className="bg-surface-container-highest p-8 rounded-xl border border-outline-variant text-[#191c1e]">
              <p className="font-body-md mb-6 leading-relaxed">Únase a nuestra red global de más de 450 investigadores e instituciones especializadas en HTLV.</p>
              <button className="w-full py-4 bg-white border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all cursor-pointer shadow-sm">
                Ver Todas las Instituciones Miembro
              </button>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-section-gap">
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-sm border border-outline-variant group">
            {/* Fallback Image for Map */}
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAccabBseFcKylFrw2ACPbOPUr5T-cnF49Y2ZOYwczsX6MyV0Y5urwpws1aAOu3ufx2Ke5svMnzVjNw488cnqh8OWd7hXJZPd6gcT7EQdOvqwzHmPWZGsFUZi7eIsnDEOZhTWRvDWC3GwZed5flNMMOjBL-9jg4PlMIA8XxWpvObBPG9cELumSbZwkjoItw794LHXP-jt5cxyebynbj9R2eWpH9NAVgArtfXT5JZOA9y058yKlRZ8QWY6ukWBgCmwcGWT_MazQuh-I')" }}
            ></div>
            {/* Map Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0 z-10 pointer-events-none">
              <div className="text-white text-center p-8">
                <span className="material-symbols-outlined text-4xl mb-2 text-white">touch_app</span>
                <h3 className="font-headline-md text-headline-md text-white font-bold">Red de Centros Interactiva</h3>
                <p className="font-label-md text-white/80 mt-1">Coloque el cursor para explorar las sedes regionales y los líderes locales</p>
              </div>
            </div>
            {/* Location Pins */}
            <div className="absolute top-1/4 left-1/3 z-20">
              <div className="relative group/pin">
                <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute inset-0"></div>
                <div className="w-4 h-4 bg-primary rounded-full relative border-2 border-white shadow-lg cursor-pointer"></div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white p-3 rounded-lg shadow-xl opacity-0 group-hover/pin:opacity-100 transition-all pointer-events-none border border-outline-variant z-30">
                  <p className="font-label-sm text-primary uppercase font-bold">Centro de Europa</p>
                  <p className="font-body-md font-bold text-on-surface mt-0.5">St. Mary's Institute</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">Líder: Dr. Graham Taylor</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-1/3 right-1/4 z-20">
              <div className="relative group/pin">
                <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute inset-0"></div>
                <div className="w-4 h-4 bg-primary rounded-full relative border-2 border-white shadow-lg cursor-pointer"></div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white p-3 rounded-lg shadow-xl opacity-0 group-hover/pin:opacity-100 transition-all pointer-events-none border border-outline-variant z-30">
                  <p className="font-label-sm text-primary uppercase font-bold">Centro de Suramérica</p>
                  <p className="font-body-md font-bold text-on-surface mt-0.5">São Paulo Research Inst.</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">Líder: Dr. Ricardo Ishak</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="bg-surface-container-low border border-outline-variant rounded-2xl py-12 text-center">
          <h2 className="font-headline-lg text-headline-lg mb-4 text-[#191c1e]">Comience su Alianza de Investigación</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto mb-8 font-body-md leading-relaxed">Proporcionamos recursos para solicitudes de financiación, acuerdos de intercambio de materiales y ensayos clínicos transfronterizos.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-6">
            <Link href="/network" className="bg-primary text-white font-bold py-4 px-10 rounded-lg hover:shadow-lg transition-all cursor-pointer shadow-sm">Unirse a la Red</Link>
            <button className="bg-white border border-outline text-on-surface font-bold py-4 px-10 rounded-lg hover:bg-surface-container-highest transition-all cursor-pointer">Descargar Kit de Prensa</button>
          </div>
        </section>
      </main>
    </>
  );
}