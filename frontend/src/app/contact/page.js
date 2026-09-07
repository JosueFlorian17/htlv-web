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
      alert("Por favor, acepte los términos de tratamiento de datos conforme a la Ley N° 29733.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <main className="py-12 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
        
        {/* Cabecera Principal */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-[#ffdada] text-[#5b0617] font-label-sm uppercase font-bold tracking-wider rounded-full">
              Canal Institucional
            </span>
            <span className="px-3 py-1 bg-[#f3f4f6] text-[#564242] font-label-sm font-semibold rounded-full border border-[#dcc0c0]">
              Sede Central UPCH - Lima, Perú
            </span>
          </div>
          <h1 className="font-display text-display text-[#5b0617] mb-3">Contacto Institucional & Alianzas</h1>
          <p className="font-body-lg text-body-lg text-[#564242] max-w-3xl leading-relaxed">
            Canal oficial para colaboraciones académicas, propuestas de investigación retrovirológica, ensayos multicéntricos y vinculación interinstitucional.
          </p>
        </section>

        {/* Deslinde Médico y Advertencia de Datos Sensibles */}
        <div className="mb-10 bg-[#ffdada]/30 border-l-4 border-[#5b0617] p-5 rounded-r-xl shadow-xs">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#5b0617] text-2xl flex-shrink-0 mt-0.5">health_and_safety</span>
            <div className="space-y-1">
              <h4 className="text-[13px] font-bold text-[#5b0617] uppercase tracking-wider">
                Deslinde de Responsabilidad Médica y Manejo de Datos Sensibles
              </h4>
              <p className="text-[12px] text-[#564242] leading-relaxed">
                Este formulario está destinado <strong>exclusivamente a consultas académicas, científicas e institucionales</strong>. Por regulaciones de bioética y confidencialidad médica (Ley N° 29733), <strong>no se atienden diagnósticos, interpretaciones de laboratorio ni consultas clínicas de pacientes por este canal</strong>. Si requiere orientación médica directa, acuda a su médico infectólogo o a su hospital de referencia.
              </p>
            </div>
          </div>
        </div>

        {/* Rejilla de Formulario e Información */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          
          {/* Columna del Formulario */}
          <div className="md:col-span-7 bg-white border border-[#dcc0c0] p-6 md:p-8 rounded-2xl shadow-sm">
            <h3 className="font-headline-md text-headline-md mb-6 text-[#191c1e]">
              Formulario de Solicitud Científica
            </h3>

            {submitted ? (
              <div className="p-8 bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl text-center space-y-4">
                <span className="material-symbols-outlined text-[#5b0617] text-5xl">check_circle</span>
                <h4 className="font-bold text-[18px] text-[#191c1e]">Solicitud Registrada Exitosamente</h4>
                <p className="text-[13px] text-[#564242] max-w-md mx-auto">
                  Gracias por comunicarse con la Red RIII-HTLV. La secretaría académica evaluará su solicitud institucional y responderá a su correo electrónico.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-[#5b0617] text-white rounded-lg text-[13px] font-bold hover:opacity-90 transition-all"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-label-sm font-bold text-[#564242] uppercase">Nombre</label>
                    <input 
                      name="firstName" 
                      value={formData.firstName} 
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-[#dcc0c0] bg-white focus:outline-none focus:ring-1 focus:ring-[#5b0617] text-[14px]" 
                      type="text" 
                      required 
                      placeholder="Ej. Carlos"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-label-sm font-bold text-[#564242] uppercase">Apellidos</label>
                    <input 
                      name="lastName" 
                      value={formData.lastName} 
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-[#dcc0c0] bg-white focus:outline-none focus:ring-1 focus:ring-[#5b0617] text-[14px]" 
                      type="text" 
                      required 
                      placeholder="Ej. Mendoza"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-label-sm font-bold text-[#564242] uppercase">Correo Electrónico Institucional</label>
                  <input 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-[#dcc0c0] bg-white focus:outline-none focus:ring-1 focus:ring-[#5b0617] text-[14px]" 
                    type="email" 
                    required 
                    placeholder="nombre@institucion.edu"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-label-sm font-bold text-[#564242] uppercase">Universidad / Centro de Investigación</label>
                  <input 
                    name="organization" 
                    value={formData.organization} 
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-[#dcc0c0] bg-white focus:outline-none focus:ring-1 focus:ring-[#5b0617] text-[14px]" 
                    type="text" 
                    required
                    placeholder="Ej. Universidad Peruana Cayetano Heredia"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-label-sm font-bold text-[#564242] uppercase">Tipo de Interacción</label>
                  <select 
                    name="inquiryType" 
                    value={formData.inquiryType} 
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-[#dcc0c0] bg-white focus:outline-none focus:ring-1 focus:ring-[#5b0617] text-[14px] cursor-pointer"
                  >
                    <option value="Investigación Científica">Propuesta de Investigación Colaborativa</option>
                    <option value="Ensayos Clínicos">Participación en Ensayos Clínicos Multicéntricos</option>
                    <option value="Intercambio Académico">Pasantías o Formación de Investigadores</option>
                    <option value="Acceso a Datos">Consulta sobre Repositorio y Datos</option>
                    <option value="Otro">Otro Asunto Institucional</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-label-sm font-bold text-[#564242] uppercase">Detalle de la Propuesta</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange}
                    rows="4" 
                    className="w-full p-3 rounded-lg border border-[#dcc0c0] bg-white focus:outline-none focus:ring-1 focus:ring-[#5b0617] text-[14px] resize-y" 
                    required
                    placeholder="Describa el objetivo académico, marco del proyecto o consulta institucional..."
                  ></textarea>
                </div>

                {/* Consentimiento Ley 29733 */}
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
                      Acepto el tratamiento de mis datos de contacto exclusivamente para fines de coordinación científica de conformidad con la <strong>Ley N° 29733 de Protección de Datos Personales del Perú</strong> y certifico que esta consulta no incluye datos clínicos sensibles de terceros.
                    </span>
                  </label>
                </div>

                <button 
                  className="w-full sm:w-auto bg-[#5b0617] text-white font-bold py-3.5 px-8 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm text-[14px]" 
                  type="submit"
                >
                  <span>Enviar Solicitud Institucional</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </form>
            )}
          </div>

          {/* Columna de Información Directa */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="bg-[#5b0617] text-white p-6 md:p-8 rounded-2xl shadow-sm flex-grow">
              <h3 className="font-headline-md text-headline-md mb-6 text-white font-bold">
                Sede Central RIII-HTLV
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffdada] text-2xl mt-0.5">location_on</span>
                  <div>
                    <p className="font-label-sm uppercase tracking-wider text-[#ffb3b5] font-bold">Instituto IMTAvH - UPCH</p>
                    <p className="text-[13px] text-white mt-0.5 leading-relaxed">
                      Av. Honorio Delgado 430, Urb. Ingeniería<br />
                      San Martín de Porres, Lima - Perú
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffdada] text-2xl mt-0.5">mail</span>
                  <div>
                    <p className="font-label-sm uppercase tracking-wider text-[#ffb3b5] font-bold">Secretaría Académica</p>
                    <p className="text-[13px] text-white font-semibold mt-0.5">secretaria.riii@cayetano.edu.pe</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffdada] text-2xl mt-0.5">account_balance</span>
                  <div>
                    <p className="font-label-sm uppercase tracking-wider text-[#ffb3b5] font-bold">Entidad Patrocinadora</p>
                    <p className="text-[13px] text-white mt-0.5">Universidad Peruana Cayetano Heredia (UPCH)</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <p className="font-label-sm uppercase tracking-wider text-[#ffb3b5] font-bold mb-3">Centros Colaboradores</p>
                  <p className="text-[12px] opacity-90">
                    Imperial College London (UK) • Institut Pasteur (Francia) • Fiocruz (Brasil) • ISCIII (España)
                  </p>
                </div>
              </div>
            </div>

            {/* Enlace rápido a La Red */}
            <div className="bg-white p-6 rounded-2xl border border-[#dcc0c0] text-[#191c1e] shadow-xs">
              <h4 className="font-bold text-[15px] mb-2">¿Desea conocer la estructura del consorcio?</h4>
              <p className="text-[13px] text-[#564242] mb-4">
                Explore las instituciones fundadoras, líneas estratégicas y comités directivos de la red.
              </p>
              <Link 
                href="/network"
                className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#5b0617] hover:underline"
              >
                <span>Ver Instituciones y Miembros</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

        </section>

      </main>
    </>
  );
}