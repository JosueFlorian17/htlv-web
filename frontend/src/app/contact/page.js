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
      alert(lang === 'es' ? "Por favor, autorice el tratamiento de contacto." : "Please accept contact authorization.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <main className="w-full bg-[#f8f9fb] min-h-[calc(100vh-80px)] py-10 md:py-16 text-[#191c1e]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Cabecera Principal */}
        <section className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="px-3.5 py-1 bg-[#A10D3A] text-white text-[12px] font-black uppercase tracking-widest rounded-md">
              {lang === 'es' ? 'Canal Institucional' : 'Institutional Channel'}
            </span>
            <span className="px-3.5 py-1 bg-[#087E8B]/10 text-[#087E8B] text-[12px] font-bold rounded-md">
              Sede Central IMTAvH • UPCH (Lima, Perú)
            </span>
          </div>

          <h1 className="text-[34px] sm:text-[46px] font-black text-[#003B49] tracking-tight leading-tight">
            {lang === 'es' ? 'Contacto & Enlaces Institucionales' : 'Contact & Institutional Links'}
          </h1>
          <p className="text-[17px] text-[#443333] leading-relaxed">
            {lang === 'es'
              ? 'Canal oficial para consultas académicas, propuestas de colaboración científica, solicitudes de acreditación de proyectos y vinculación con la red.'
              : 'Official channel for academic inquiries, research collaborations, project endorsement requests, and institutional liaisons.'}
          </p>

          {/* Banner de Orientación a Pacientes */}
          <div className="p-4 bg-white border-2 border-[#003B49]/15 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-left shadow-xs">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#A10D3A] text-2xl">favorite</span>
              <span className="text-[14.5px] text-[#003B49] font-bold">
                {lang === 'es' ? '¿Eres paciente o familiar y deseas hacer una consulta médica o personal?' : 'Are you a patient or family member looking for guidance?'}
              </span>
            </div>
            <Link
              href="/pacientes?tab=haz-tu-pregunta"
              className="bg-[#A10D3A] hover:bg-[#850a2f] text-white px-5 py-2.5 rounded-xl text-[13.5px] font-black transition-all flex items-center gap-1.5 flex-shrink-0 cursor-pointer shadow-xs"
            >
              <span>{lang === 'es' ? 'Ir a Haz tu pregunta' : 'Go to Ask a Question'}</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </section>

        {/* Rejilla de Formulario e Información */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 max-w-6xl mx-auto">
          
          {/* Columna del Formulario */}
          <div className="md:col-span-7 bg-white border-2 border-gray-200 p-8 rounded-3xl shadow-xs">
            <h2 className="text-[22px] font-black mb-6 text-[#003B49]">
              {lang === 'es' ? 'Formulario de Contacto Institucional' : 'Institutional Contact Form'}
            </h2>

            {submitted ? (
              <div className="p-8 bg-[#f8f9fb] border-2 border-[#087E8B]/30 rounded-2xl text-center space-y-4 animate-fadeIn">
                <span className="material-symbols-outlined text-[#087E8B] text-5xl">check_circle</span>
                <h3 className="font-black text-[20px] text-[#003B49]">
                  {lang === 'es' ? 'Solicitud Registrada Exitosamente' : 'Inquiry Successfully Submitted'}
                </h3>
                <p className="text-[14.5px] text-gray-600 max-w-md mx-auto">
                  {lang === 'es'
                    ? 'Gracias por comunicarse con la Red RIII-HTLV. La coordinación general en el IMTAvH - UPCH responderá a su correo a la brevedad.'
                    : 'Thank you for contacting RIII-HTLV. The coordination secretariat at IMTAvH - UPCH will respond shortly.'}
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#003B49] text-white rounded-xl text-[13px] font-bold hover:bg-[#087E8B] transition-all cursor-pointer"
                >
                  {lang === 'es' ? 'Enviar otra solicitud' : 'Submit another inquiry'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold text-[#003B49]">{lang === 'es' ? 'Nombre *' : 'First Name *'}</label>
                    <input 
                      name="firstName" 
                      value={formData.firstName} 
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#087E8B] text-[14px]" 
                      type="text" 
                      required 
                      placeholder="Ej. Carlos"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold text-[#003B49]">{lang === 'es' ? 'Apellidos *' : 'Last Name *'}</label>
                    <input 
                      name="lastName" 
                      value={formData.lastName} 
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#087E8B] text-[14px]" 
                      type="text" 
                      required 
                      placeholder="Ej. Mendoza"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[13px] font-bold text-[#003B49]">{lang === 'es' ? 'Correo Electrónico *' : 'Email Address *'}</label>
                  <input 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#087E8B] text-[14px]" 
                    type="email" 
                    required 
                    placeholder="nombre@institucion.edu"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[13px] font-bold text-[#003B49]">{lang === 'es' ? 'Institución / Universidad' : 'Institution / University'}</label>
                  <input 
                    name="organization" 
                    value={formData.organization} 
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#087E8B] text-[14px]" 
                    type="text" 
                    placeholder="Ej. Universidad / Centro de Investigación"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[13px] font-bold text-[#003B49]">{lang === 'es' ? 'Motivo de la Comunicación' : 'Inquiry Reason'}</label>
                  <select 
                    name="inquiryType" 
                    value={formData.inquiryType} 
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#087E8B] text-[14px] cursor-pointer"
                  >
                    <option value="Investigación Científica">{lang === 'es' ? 'Propuesta de Investigación o Proyecto' : 'Research Proposal or Project'}</option>
                    <option value="Acreditación">{lang === 'es' ? 'Solicitud de Carta de Acreditación de la Red' : 'Network Endorsement Letter Request'}</option>
                    <option value="Capacitación">{lang === 'es' ? 'Consultas sobre Cursos o Webinars' : 'Courses or Webinars Information'}</option>
                    <option value="Adhesión">{lang === 'es' ? 'Incorporación de Nueva Institución Aliada' : 'New Member Node Affiliation'}</option>
                    <option value="Otro">{lang === 'es' ? 'Otro Asunto Institucional' : 'Other Institutional Subject'}</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[13px] font-bold text-[#003B49]">{lang === 'es' ? 'Mensaje *' : 'Message *'}</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange}
                    rows="4" 
                    className="w-full p-2.5 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#087E8B] text-[14px] resize-none" 
                    required
                    placeholder={lang === 'es' ? "Describa su consulta o propuesta institucional..." : "Describe your request or institutional inquiry..."}
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
                      className="mt-1 h-4 w-4 rounded text-[#003B49] cursor-pointer"
                    />
                    <span className="text-[12px] text-gray-600 leading-tight">
                      {lang === 'es'
                        ? 'Autorizo el tratamiento de mis datos de contacto exclusivamente para coordinaciones institucionales conforme a la Ley N° 29733 de Protección de Datos Personales.'
                        : 'I authorize processing of contact data exclusively for institutional coordination under Data Protection standards.'}
                    </span>
                  </label>
                </div>

                <button 
                  className="w-full sm:w-auto bg-[#003B49] hover:bg-[#087E8B] text-white font-black py-3 px-8 rounded-xl transition-all shadow-md text-[14px] cursor-pointer" 
                  type="submit"
                >
                  {lang === 'es' ? 'Enviar Solicitud Institucional' : 'Submit Institutional Request'}
                </button>
              </form>
            )}
          </div>

          {/* Columna de Enlaces a Instituciones Miembros y Sede */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* Tarjeta Sede Central */}
            <div className="bg-[#003B49] text-white p-7 rounded-3xl shadow-sm space-y-4">
              <h3 className="text-[20px] font-black text-white">
                {lang === 'es' ? 'Sede de Coordinación' : 'Coordination Center'}
              </h3>
              
              <div className="space-y-3 text-[14px]">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#E5A400] text-xl mt-0.5">location_on</span>
                  <div>
                    <p className="font-bold text-[#E5A400]">Instituto IMTAvH • UPCH</p>
                    <p className="text-white/80 mt-0.5">
                      Av. Honorio Delgado 430, San Martín de Porres, Lima, Perú
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#E5A400] text-xl mt-0.5">mail</span>
                  <div>
                    <p className="font-bold text-[#E5A400]">{lang === 'es' ? 'Correo de Coordinación' : 'Coordination Email'}</p>
                    <p className="text-white/90 font-semibold mt-0.5">contacto.riii@cayetano.edu.pe</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#E5A400] text-xl mt-0.5">language</span>
                  <div>
                    <p className="font-bold text-[#E5A400]">Sitio Web IMTAvH</p>
                    <a 
                      href="https://medicina.cayetano.edu.pe/imtavh/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white underline hover:text-[#E5A400]"
                    >
                      medicina.cayetano.edu.pe/imtavh/
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Directorio de Enlaces a Instituciones Miembros */}
            <div className="bg-white p-6 rounded-3xl border-2 border-gray-200 text-[#191c1e] shadow-xs space-y-3">
              <h4 className="font-black text-[16px] text-[#003B49]">
                {lang === 'es' ? 'Directorio de Nodos Miembros' : 'Member Nodes Directory'}
              </h4>
              <p className="text-[13px] text-gray-600">
                {lang === 'es' ? 'Enlaces oficiales a las instituciones fundadoras:' : 'Official links to founding institutions:'}
              </p>

              <div className="space-y-2 pt-1 text-[13.5px]">
                {memberInstitutions.map((inst, i) => (
                  <a
                    key={i}
                    href={inst.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-100 text-[#003B49] font-bold transition-all group"
                  >
                    <span>{inst.name}</span>
                    <span className="material-symbols-outlined text-[15px] text-gray-400 group-hover:text-[#A10D3A]">open_in_new</span>
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