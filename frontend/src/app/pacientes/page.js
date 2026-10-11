"use client";

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';

function PacientesContent() {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabFromUrl = searchParams.get('tab');

  // Orden exacto solicitado: 1. preguntas frecuentes, 2. recursos, 3. haz tu pregunta
  const [activeTab, setActiveTab] = useState(tabFromUrl || 'faqs');
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    if (tabFromUrl && ['faqs', 'recursos', 'haz-tu-pregunta'].includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  const switchTab = (tabId) => {
    setActiveTab(tabId);
    router.push(`/pacientes?tab=${tabId}`, { scroll: false });
  };

  // Formulario Haz tu pregunta
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    pais: '',
    tema: 'diagnostico',
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
    }, 600);
  };

  const patientFaqs = [
    {
      q: lang === 'es' ? "¿Qué significa tener HTLV y cómo afecta mi vida diaria?" : "What does having HTLV mean and how does it affect daily life?",
      a: lang === 'es' 
        ? "Tener HTLV significa que eres portador del virus. Es crucial saber que cerca del 90% de las personas son portadores asintomáticos y viven vidas plenas, largas y saludables sin desarrollar problemas médicos. Tu vida cotidiana, laboral y social continúa con normalidad."
        : "Testing positive means carrying the virus. Crucially, about 90% of individuals remain asymptomatic carriers living full, healthy lives. Daily work and social activities continue normally."
    },
    {
      q: lang === 'es' ? "¿Puedo contagiar a mi familia o amigos por convivir con ellos?" : "Can I transmit it to family or friends through everyday contact?",
      a: lang === 'es'
        ? "NO. El virus NO se contagia por abrazos, besos, compartir platos, vasos, cubiertos, ropa, baños ni piscinas. La convivencia familiar en el hogar es 100% segura y libre de riesgo."
        : "NO. The virus is NOT transmitted through hugging, kisses, shared food, glasses, toilets, or casual contact. Household living is 100% safe."
    },
    {
      q: lang === 'es' ? "¿Puedo tener hijos y formar una familia?" : "Can I have children and build a family?",
      a: lang === 'es'
        ? "Sí, totalmente. Si el padre es portador y la madre no, no hay transmisión al bebé. Si la madre es portadora, con el asesoramiento médico y la sustitución de la lactancia materna prolongada por fórmulas sucedáneas, el bebé tiene más de 95% de probabilidades de nacer libre del virus."
        : "Yes, absolutely. If the father is positive and the mother negative, there is no transmission to the baby. If the mother is positive, using formula instead of prolonged breastfeeding protects the child (>95% virus-free)."
    },
    {
      q: lang === 'es' ? "¿Qué cuidados y controles médicos debo tener?" : "What medical care and checkups are recommended?",
      a: lang === 'es'
        ? "Se recomienda una consulta anual de rutina con un médico infectólogo o neurólogo, mantener un estilo de vida saludable (alimentación balanceada, ejercicio, no fumar) y evitar donar sangre o hemoderivados."
        : "An annual checkup with an infectious disease or neurology specialist, maintaining a healthy lifestyle, and refraining from blood donation."
    }
  ];

  const resourcesList = [
    {
      title: lang === 'es' ? "Guía de Primeros Pasos tras el Diagnóstico" : "First Steps Guide After Diagnosis",
      category: lang === 'es' ? "Folleto Digital" : "Digital Brochure",
      desc: lang === 'es' ? "Pautas claras sobre qué esperar, recomendaciones iniciales y consejos para hablar con la familia." : "Clear steps on what to expect, lifestyle recommendations, and family communication.",
      actionText: lang === 'es' ? "Descargar Guía (PDF)" : "Download Guide (PDF)",
      color: "bg-[#003B49]"
    },
    {
      title: lang === 'es' ? "Maternidad Segura y HTLV" : "Safe Motherhood & HTLV",
      category: lang === 'es' ? "Infografía Clínica" : "Clinical Infographic",
      desc: lang === 'es' ? "Recomendaciones de tamizaje prenatal y opciones de alimentación para recién nacidos sin riesgo." : "Antenatal screening guidelines and safe feeding protocols for newborns.",
      actionText: lang === 'es' ? "Ver Infografía" : "View Infographic",
      color: "bg-[#087E8B]"
    },
    {
      title: lang === 'es' ? "Red de Centros de Apoyo y Atención" : "Support Centers Directory",
      category: lang === 'es' ? "Directorio" : "Directory",
      desc: lang === 'es' ? "Centros de salud, hospitales y servicios de infectología con experiencia en HTLV en Perú y el mundo." : "Hospitals and clinical centers with specialized HTLV units in Peru and globally.",
      actionText: lang === 'es' ? "Consultar Sedes" : "Explore Centers",
      color: "bg-[#A10D3A]"
    }
  ];

  return (
    <main className="w-full bg-[#f8f9fb] min-h-[calc(100vh-80px)] py-8 md:py-12 text-[#191c1e] flex flex-col justify-between">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">
        
        {/* Cabecera con Pestañas Horizontales (1. Preguntas frecuentes, 2. Recursos, 3. Haz tu pregunta) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-8 border-b-2 border-[#003B49]/15">
          <div>
            <span className="text-[12px] font-black uppercase tracking-widest text-[#087E8B] block mb-1">
              {lang === 'es' ? 'Comunidad y Bienestar' : 'Community & Well-being'}
            </span>
            <h1 className="text-[32px] sm:text-[42px] font-black text-[#003B49] tracking-tight leading-none">
              {lang === 'es' ? 'Espacio para Pacientes' : 'Patient Space'}
            </h1>
          </div>

          {/* Selector de Pestañas Horizontales */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'faqs', label: lang === 'es' ? '1. Preguntas frecuentes' : '1. FAQs', icon: 'quiz' },
              { id: 'recursos', label: lang === 'es' ? '2. Recursos de apoyo' : '2. Resources', icon: 'library_books' },
              { id: 'haz-tu-pregunta', label: lang === 'es' ? '3. Haz tu pregunta' : '3. Ask a question', icon: 'send' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                className={`px-5 py-3 rounded-2xl text-[15px] font-extrabold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#003B49] text-white shadow-md'
                    : 'bg-white border-2 border-gray-200 text-[#003B49] hover:border-[#087E8B] hover:bg-white'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 1. PESTAÑA: PREGUNTAS FRECUENTES (Aprovechando el espacio horizontal de un vistazo) */}
        {activeTab === 'faqs' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Columna Izquierda: Lista de Preguntas Clickables */}
                <div className="lg:col-span-5 space-y-3">
                  <span className="text-[12px] font-black uppercase tracking-wider text-[#A10D3A] block">
                    {lang === 'es' ? 'Selecciona una pregunta:' : 'Select a question:'}
                  </span>
                  {patientFaqs.map((faq, idx) => (
                    <button
                      key={idx}
                      onClick={() => setOpenFaq(idx)}
                      className={`w-full p-4 rounded-2xl text-left font-bold text-[15px] transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        openFaq === idx
                          ? 'bg-[#087E8B] text-white shadow-sm'
                          : 'bg-gray-50 border border-gray-200 text-[#003B49] hover:bg-gray-100'
                      }`}
                    >
                      <span className="leading-snug">{faq.q}</span>
                      <span className="material-symbols-outlined text-[18px]">
                        {openFaq === idx ? 'arrow_forward' : 'chevron_right'}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Columna Derecha: Respuesta en Pantalla Completa sin Scroll */}
                <div className="lg:col-span-7 bg-[#f8f9fb] p-8 rounded-3xl border-2 border-[#003B49]/15 space-y-5 min-h-[340px] flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="px-3 py-1 bg-[#E5A400] text-[#003B49] text-[12px] font-black uppercase tracking-wider rounded-md inline-block">
                      {lang === 'es' ? 'Respuesta Médica de la Red' : 'Medical Consensus'}
                    </span>
                    <h3 className="text-[22px] font-black text-[#003B49] leading-snug">
                      {patientFaqs[openFaq].q}
                    </h3>
                    <p className="text-[17px] text-[#332222] leading-relaxed pt-2">
                      {patientFaqs[openFaq].a}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-[14px]">
                    <span className="text-gray-500 font-semibold">
                      {lang === 'es' ? 'Información revisada por especialistas' : 'Reviewed by infectologists'}
                    </span>
                    <button
                      onClick={() => switchTab('haz-tu-pregunta')}
                      className="text-[#A10D3A] font-black hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>{lang === 'es' ? '¿Tienes otra duda? Pregunta aquí' : 'Have another question? Ask here'}</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* 2. PESTAÑA: RECURSOS (Aprovechando el espacio horizontal en tarjetas de 3 columnas de un vistazo) */}
        {activeTab === 'recursos' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resourcesList.map((res, idx) => (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-3xl border-2 border-gray-200 shadow-xs hover:border-[#087E8B] transition-all flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-3">
                    <span className="px-3 py-1 bg-[#003B49]/10 text-[#003B49] text-[12px] font-black uppercase tracking-wider rounded-md inline-block">
                      {res.category}
                    </span>
                    <h3 className="text-[21px] font-black text-[#003B49] leading-snug">
                      {res.title}
                    </h3>
                    <p className="text-[15.5px] text-[#443333] leading-relaxed">
                      {res.desc}
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => alert(`Accediendo a: ${res.title}`)}
                      className={`w-full ${res.color} text-white font-black py-3 px-5 rounded-2xl text-[14.5px] hover:opacity-95 transition-all shadow-md cursor-pointer flex items-center justify-center gap-2`}
                    >
                      <span className="material-symbols-outlined text-[18px]">download</span>
                      <span>{res.actionText}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 bg-white border border-gray-200 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 text-[14px]">
              <span className="text-gray-600 font-medium">
                {lang === 'es' ? 'Todos los materiales son de libre descarga y uso comunitario sin costo.' : 'All materials are freely accessible for community use.'}
              </span>
              <button
                onClick={() => switchTab('haz-tu-pregunta')}
                className="bg-[#E5A400] text-[#003B49] px-6 py-2.5 rounded-xl font-black hover:bg-[#cca300] transition-colors cursor-pointer"
              >
                {lang === 'es' ? 'Solicitar material específico' : 'Request specific material'}
              </button>
            </div>
          </div>
        )}

        {/* 3. PESTAÑA: HAZ TU PREGUNTA (Diseño horizontal estilizado de un vistazo) */}
        {activeTab === 'haz-tu-pregunta' && (
          <div className="animate-fadeIn">
            <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-[#003B49]/15 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Columna Izquierda: Información de Confidencialidad */}
                <div className="lg:col-span-5 space-y-4">
                  <span className="px-3 py-1 bg-[#A10D3A] text-white text-[12px] font-black uppercase tracking-wider rounded-md inline-block">
                    {lang === 'es' ? 'Canal Confidencial' : 'Confidential Channel'}
                  </span>
                  <h3 className="text-[26px] font-black text-[#003B49] leading-tight">
                    {lang === 'es' ? 'Envía tu consulta médica o personal' : 'Submit your medical or personal inquiry'}
                  </h3>
                  <p className="text-[16px] text-[#443333] leading-relaxed">
                    {lang === 'es'
                      ? 'Tus dudas son recibidas directamente por el equipo médico del IMTAvH - UPCH y consejeros de la Red. No publicamos tus datos y te responderemos por correo.'
                      : 'Your queries are delivered directly to the IMTAvH - UPCH clinical counseling team. We never publish personal details.'}
                  </p>

                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl space-y-2 text-[13.5px] text-gray-600">
                    <div className="flex items-center gap-2 font-bold text-[#087E8B]">
                      <span className="material-symbols-outlined text-[18px]">verified_user</span>
                      <span>{lang === 'es' ? 'Garantía Ética & Privacidad' : 'Privacy & Ethics Assurance'}</span>
                    </div>
                    <p>{lang === 'es' ? 'Cumplimiento estricto de la Ley N° 29733 de Protección de Datos Personales.' : 'Strict compliance with Data Protection standards.'}</p>
                  </div>
                </div>

                {/* Columna Derecha: Formulario Horizontal */}
                <div className="lg:col-span-7 bg-[#f8f9fb] p-6 md:p-8 rounded-3xl border border-gray-200">
                  {submitted ? (
                    <div className="py-8 text-center space-y-3 animate-fadeIn">
                      <span className="material-symbols-outlined text-5xl text-[#087E8B]">check_circle</span>
                      <h4 className="text-[22px] font-black text-[#003B49]">
                        {lang === 'es' ? '¡Tu pregunta fue enviada!' : 'Your question was sent!'}
                      </h4>
                      <p className="text-[15px] text-gray-600 max-w-md mx-auto">
                        {lang === 'es' 
                          ? `Te responderemos al correo (${formData.email}) de manera privada.` 
                          : `We will reply to your email (${formData.email}) privately.`}
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ nombre: '', email: '', pais: '', tema: 'diagnostico', pregunta: '' });
                        }}
                        className="mt-3 bg-[#003B49] text-white px-6 py-2.5 rounded-xl font-bold text-[14px] cursor-pointer"
                      >
                        {lang === 'es' ? 'Enviar otra consulta' : 'Send another inquiry'}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[13.5px] font-bold text-[#003B49] mb-1">
                            {lang === 'es' ? 'Nombre o Pseudónimo' : 'Name or Nickname'}
                          </label>
                          <input
                            type="text"
                            placeholder={lang === 'es' ? "Opcional" : "Optional"}
                            value={formData.nombre}
                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-[14.5px] focus:outline-none focus:border-[#087E8B]"
                          />
                        </div>

                        <div>
                          <label className="block text-[13.5px] font-bold text-[#003B49] mb-1">
                            {lang === 'es' ? 'Correo Electrónico *' : 'Email Address *'}
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="tucorreo@ejemplo.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-[14.5px] focus:outline-none focus:border-[#087E8B]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[13.5px] font-bold text-[#003B49] mb-1">
                          {lang === 'es' ? 'Tu pregunta o consulta *' : 'Your question *'}
                        </label>
                        <textarea
                          required
                          rows="3"
                          placeholder={lang === 'es' ? "Escribe aquí tus dudas con tranquilidad..." : "Write your questions here..."}
                          value={formData.pregunta}
                          onChange={(e) => setFormData({ ...formData, pregunta: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-[14.5px] focus:outline-none focus:border-[#087E8B] resize-none"
                        ></textarea>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[12px] text-gray-500 font-semibold">
                          * {lang === 'es' ? 'Respuesta privada garantizada' : 'Private response guaranteed'}
                        </span>
                        <button
                          type="submit"
                          disabled={loading}
                          className="bg-[#A10D3A] hover:bg-[#850a2f] text-white px-7 py-3 rounded-xl font-black text-[14.5px] transition-all shadow-md cursor-pointer disabled:opacity-50"
                        >
                          {loading ? '...' : (lang === 'es' ? 'Enviar pregunta' : 'Submit question')}
                        </button>
                      </div>
                    </form>
                  )}
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}

export default function PacientesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-20 text-center font-bold text-[#003B49]">Cargando...</div>}>
      <PacientesContent />
    </Suspense>
  );
}
