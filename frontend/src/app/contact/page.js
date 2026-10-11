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
    <main className="w-full bg-white min-h-[calc(100vh-80px)] py-10 md:py-16 text-[#191c1e]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Cabecera Limpia e Integrada (Sin tarjetas flotantes) */}
        <section className="pb-8 border-b border-gray-200 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[13px] font-black uppercase tracking-widest text-[#087E8B] block mb-1">
                {lang === 'es' ? 'Canal Institucional' : 'Institutional Channel'}
              </span>
              <h1 className="text-[34px] sm:text-[44px] font-black text-[#003B49] tracking-tight leading-tight">
                {lang === 'es' ? 'Contacto' : 'Contact'}
              </h1>
              <p className="text-[16.5px] text-gray-600 mt-2 max-w-2xl">
                {lang === 'es'
                  ? 'Canal oficial para colaboraciones científicas, acreditación de proyectos y vinculación institucional con la Red RIII-HTLV.'
                  : 'Official channel for scientific collaborations, project endorsements, and institutional liaisons with the RIII-HTLV Network.'}
              </p>
            </div>

            {/* Enlace sutil de orientación para pacientes (sin tarjeta) */}
            <div className="text-left md:text-right pt-2 md:pt-0">
              <span className="text-xs text-gray-500 block mb-1">
                {lang === 'es' ? '¿Consulta de paciente o familiar?' : 'Patient or family inquiry?'}
              </span>
              <Link
                href="/pacientes?tab=haz-tu-pregunta"
                className="text-[#A10D3A] font-black hover:underline inline-flex items-center gap-1 text-[14px]"
              >
                <span>{lang === 'es' ? 'Espacio Haz tu pregunta' : 'Ask your question space'}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Estructura Integrada y Unificada (Reducción de tarjetas) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Columna Izquierda: Formulario Directo (Superficie limpia sin marco de tarjeta pesada) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-[20px] font-black text-[#003B49]">
              {lang === 'es' ? 'Envíanos un mensaje institucional' : 'Send an institutional message'}
            </h2>

            {submitted ? (
              <div className="p-8 bg-gray-50 border border-[#087E8B]/30 rounded-2xl text-center space-y-4 animate-fadeIn">
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
                      className="w-full p-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#087E8B] text-[14px]" 
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
                      className="w-full p-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#087E8B] text-[14px]" 
                      type="text" 
                      required 
                      placeholder="Ej. Mendoza"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[13px] font-bold text-[#003B49]">{lang === 'es' ? 'Correo Electrónico Institucional *' : 'Institutional Email *'}</label>
                  <input 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#087E8B] text-[14px]" 
                    type="email" 
                    required 
                    placeholder="nombre@institucion.edu"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[13px] font-bold text-[#003B49]">{lang === 'es' ? 'Institución / Centro de Investigación' : 'Institution / Research Center'}</label>
                  <input 
                    name="organization" 
                    value={formData.organization} 
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#087E8B] text-[14px]" 
                    type="text" 
                    placeholder="Ej. Universidad / Instituto"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[13px] font-bold text-[#003B49]">{lang === 'es' ? 'Motivo de la Comunicación' : 'Inquiry Reason'}</label>
                  <select 
                    name="inquiryType" 
                    value={formData.inquiryType} 
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#087E8B] text-[14px] cursor-pointer"
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
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#087E8B] text-[14px] resize-none" 
                    required
                    placeholder={lang === 'es' ? "Describa su consulta o propuesta institucional..." : "Describe your request or institutional inquiry..."}
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
                      className="mt-1 h-4 w-4 rounded text-[#003B49] cursor-pointer"
                    />
                    <span className="text-[12.5px] text-gray-600 leading-tight">
                      {lang === 'es'
                        ? 'Autorizo el tratamiento de mis datos de contacto exclusivamente para fines de coordinación institucional.'
                        : 'I authorize processing of contact data exclusively for institutional coordination.'}
                    </span>
                  </label>
                </div>

                <button 
                  className="bg-[#003B49] hover:bg-[#087E8B] text-white font-bold py-3 px-8 rounded-xl transition-all shadow-sm text-[14.5px] cursor-pointer" 
                  type="submit"
                >
                  {lang === 'es' ? 'Enviar Solicitud' : 'Submit Request'}
                </button>
              </form>
            )}
          </div>

          {/* Columna Derecha: Información Integrada en Lista Limpia (Sin tarjetas separadas) */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-gray-200 lg:pl-10 space-y-8 pt-8 lg:pt-0">
            
            {/* Sede Central en formato de lista institucional */}
            <div className="space-y-4">
              <h3 className="text-[18px] font-black text-[#003B49]">
                {lang === 'es' ? 'Sede Central de Coordinación' : 'Coordination Center'}
              </h3>
              
              <div className="space-y-3 text-[14.5px] text-gray-700">
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
                    <a href="mailto:contacto.riii@cayetano.edu.pe" className="text-[#087E8B] hover:underline">
                      contacto.riii@cayetano.edu.pe
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#087E8B] text-xl mt-0.5">language</span>
                  <div>
                    <strong className="block text-[#003B49]">Sitio Web IMTAvH</strong>
                    <a 
                      href="https://medicina.cayetano.edu.pe/imtavh/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#087E8B] hover:underline"
                    >
                      medicina.cayetano.edu.pe/imtavh/
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Directorio de Nodos en lista limpia */}
            <div className="space-y-3 pt-6 border-t border-gray-200">
              <h3 className="text-[18px] font-black text-[#003B49]">
                {lang === 'es' ? 'Directorio de Nodos Miembros' : 'Member Nodes Directory'}
              </h3>
              
              <div className="divide-y divide-gray-100 text-[14px]">
                {memberInstitutions.map((inst, i) => (
                  <a
                    key={i}
                    href={inst.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 flex items-center justify-between text-gray-700 hover:text-[#087E8B] font-medium transition-colors group"
                  >
                    <span>{inst.name}</span>
                    <span className="material-symbols-outlined text-[16px] text-gray-400 group-hover:text-[#087E8B]">open_in_new</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}