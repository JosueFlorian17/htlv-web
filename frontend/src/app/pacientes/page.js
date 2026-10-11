"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

export default function PacientesPage() {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    pais: '',
    tipoPregunta: 'diagnostico',
    pregunta: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.pregunta) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <main className="w-full bg-[#f8f9fb] min-h-screen py-10 md:py-16 text-[#191c1e]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Cabecera Principal - Empática y Cálida */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="px-3.5 py-1 bg-[#ffdada] text-[#5b0617] text-[13px] font-black uppercase tracking-widest rounded-full inline-block">
            {lang === 'es' ? 'Acompañamiento & Orientación' : 'Support & Guidance'}
          </span>
          <h1 className="text-[34px] sm:text-[46px] font-black text-[#191c1e] tracking-tight leading-tight">
            {lang === 'es' ? 'Espacio para Pacientes y Familias' : 'Patient & Family Space'}
          </h1>
          <p className="text-[18px] text-[#443333] leading-relaxed">
            {lang === 'es' 
              ? 'Información clara, cálida y sin tecnicismos para ayudarte a comprender tu diagnóstico, cuidar tu salud y resolver todas tus dudas en un espacio seguro y confidencial.' 
              : 'Clear, compassionate, and jargon-free guidance to help you understand your diagnosis, safeguard your health, and resolve your questions in a safe, confidential environment.'}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          
          {/* Mensaje de Tranquilidad */}
          <div className="bg-white p-8 rounded-3xl border border-[#dcc0c0] shadow-xs space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#ffdada] text-[#5b0617] flex items-center justify-center font-bold text-3xl flex-shrink-0">
                <span className="material-symbols-outlined text-3xl">favorite</span>
              </div>
              <div className="space-y-1">
                <h2 className="text-[22px] font-black text-[#191c1e]">
                  {lang === 'es' 
                    ? 'Si tienes un diagnóstico positivo, respira: estás en un lugar seguro' 
                    : 'If you tested positive, take a deep breath: you are in a safe place'}
                </h2>
                <p className="text-[16px] text-[#443333] leading-relaxed">
                  {lang === 'es'
                    ? 'Cerca del 90% de las personas que viven con HTLV son portadores asintomáticos que disfrutan de una vida plena, activa y saludable sin llegar a desarrollar complicaciones graves.'
                    : 'Approximately 90% of individuals living with HTLV are asymptomatic carriers who enjoy a full, active, and healthy life without ever developing severe complications.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#f8f9fb] border border-[#dcc0c0]">
                <h3 className="font-bold text-[15px] text-[#5b0617] mb-1">
                  {lang === 'es' ? 'No estás solo/a' : 'You are not alone'}
                </h3>
                <p className="text-[14px] text-[#564242]">
                  {lang === 'es' ? 'Especialistas de la Red te acompañan con calidez.' : 'Network specialists provide caring clinical guidance.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f8f9fb] border border-[#dcc0c0]">
                <h3 className="font-bold text-[15px] text-[#5b0617] mb-1">
                  {lang === 'es' ? 'Tu hogar es seguro' : 'Your home is safe'}
                </h3>
                <p className="text-[14px] text-[#564242]">
                  {lang === 'es' ? 'No se contagia por abrazos, besos, vajilla ni baños.' : 'No transmission via hugging, kisses, shared plates, or toilets.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f8f9fb] border border-[#dcc0c0]">
                <h3 className="font-bold text-[15px] text-[#5b0617] mb-1">
                  {lang === 'es' ? 'Control anual' : 'Annual checkup'}
                </h3>
                <p className="text-[14px] text-[#564242]">
                  {lang === 'es' ? 'Una consulta médica anual de rutina es suficiente.' : 'A routine yearly checkup ensures long-term peace of mind.'}
                </p>
              </div>
            </div>
          </div>

          {/* Formulario Confidencial para Enviar Preguntas */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-[#5b0617]/30 shadow-md space-y-6">
            <div>
              <span className="text-[13px] font-black uppercase tracking-wider text-[#5b0617] block mb-1">
                {lang === 'es' ? 'Espacio Confidencial' : 'Confidential Space'}
              </span>
              <h2 className="text-[26px] font-black text-[#191c1e]">
                {lang === 'es' ? 'Envíanos tu pregunta directamente' : 'Send your question directly'}
              </h2>
              <p className="text-[16px] text-[#564242] mt-1 leading-relaxed">
                {lang === 'es'
                  ? '¿Tienes dudas sobre síntomas, tu resultado o vida en pareja? Déjanos tu consulta. El equipo médico y de consejería de la Red RIII-HTLV te responderá a tu correo electrónico de forma totalmente privada.'
                  : 'Have questions regarding symptoms, test results, or daily life? Submit your query. The RIII-HTLV counseling team will respond directly to your email in total privacy.'}
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#ffdada]/40 border border-[#dcc0c0] rounded-2xl text-center space-y-4 animate-fadeIn">
                <span className="material-symbols-outlined text-[#5b0617] text-5xl">check_circle</span>
                <h3 className="text-[22px] font-black text-[#191c1e]">
                  {lang === 'es' ? '¡Tu pregunta ha sido recibida con éxito!' : 'Your question has been received!'}
                </h3>
                <p className="text-[15px] text-[#443333] max-w-lg mx-auto">
                  {lang === 'es'
                    ? `Un especialista responderá a tu correo (${formData.email}) a la brevedad. Gracias por tu confianza.`
                    : `A medical counselor will reply to your email (${formData.email}) shortly. Thank you for your trust.`}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ nombre: '', email: '', pais: '', tipoPregunta: 'diagnostico', pregunta: '' });
                  }}
                  className="bg-[#5b0617] text-white px-6 py-2.5 rounded-xl text-[14px] font-bold cursor-pointer hover:opacity-90 transition-all"
                >
                  {lang === 'es' ? 'Enviar otra consulta' : 'Submit another query'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[14px] font-bold text-[#191c1e] mb-1">
                      {lang === 'es' ? 'Nombre o Pseudónimo (Opcional)' : 'Name or Nickname (Optional)'}
                    </label>
                    <input
                      type="text"
                      placeholder={lang === 'es' ? "Ej. María o Anónimo" : "e.g., Maria or Anonymous"}
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#dcc0c0] bg-[#f8f9fb] text-[15px] focus:bg-white focus:outline-none focus:border-[#5b0617]"
                    />
                  </div>

                  <div>
                    <label className="block text-[14px] font-bold text-[#191c1e] mb-1">
                      {lang === 'es' ? 'Correo Electrónico (Para recibir respuesta) *' : 'Email Address (To receive reply) *'}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tucorreo@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#dcc0c0] bg-[#f8f9fb] text-[15px] focus:bg-white focus:outline-none focus:border-[#5b0617]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-[#191c1e] mb-1">
                    {lang === 'es' ? 'Describe tu pregunta con total confianza *' : 'Describe your question with confidence *'}
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder={lang === 'es' ? "Escribe tu consulta aquí con calma..." : "Type your inquiry here..."}
                    value={formData.pregunta}
                    onChange={(e) => setFormData({ ...formData, pregunta: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#dcc0c0] bg-[#f8f9fb] text-[15px] focus:bg-white focus:outline-none focus:border-[#5b0617]"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-[13px] text-[#897172] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-[#5b0617]">lock</span>
                    <span>{lang === 'es' ? 'Datos confidenciales y protegidos.' : 'Confidential and protected data.'}</span>
                  </span>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto bg-[#5b0617] text-white px-8 py-3.5 rounded-xl text-[15px] font-bold hover:opacity-95 transition-all shadow-xs cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (lang === 'es' ? 'Enviando...' : 'Sending...') : (lang === 'es' ? 'Enviar mi pregunta' : 'Submit my question')}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </main>
  );
}
