"use client";

import { useState, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';
import FaqSection from '../../components/faqs/FaqSection';

function PacientesContent() {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabFromUrl = searchParams.get('tab');

  // Pestañas acordadas: 1. preguntas frecuentes, 2. recursos, 3. haz tu pregunta
  const [activeTab, setActiveTab] = useState(tabFromUrl || 'faqs');

  useEffect(() => {
    if (tabFromUrl && ['faqs', 'recursos', 'haz-tu-pregunta'].includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  const switchTab = (tabId) => {
    setActiveTab(tabId);
    router.push(`/pacientes?tab=${tabId}`, { scroll: false });
  };

  // FAQs colapsables
  const [openFaqs, setOpenFaqs] = useState({ 1: true });
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [showPatientFaqWip, setShowPatientFaqWip] = useState(false);
  const toggleFaq = (id) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Modal para visualización de folletos superpuesto a la pantalla
  const [selectedBrochure, setSelectedBrochure] = useState(null);

  // Descarga limpia sin popups invasivos
  const handleDownloadDoc = (title) => {
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', `${title.replace(/\s+/g, '_')}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

  return (
    <main className="w-full bg-[#f8fafc] min-h-[calc(100vh-80px)] py-8 sm:py-12 text-slate-900 flex flex-col justify-between">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera con Pestañas Horizontales */}
        <div className="pb-6 mb-8 border-b-2 border-[#003B49]/15">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#003B49] tracking-tight">
            {activeTab === 'faqs' && (lang === 'es' ? 'Preguntas Frecuentes para Pacientes' : 'Patient Frequently Asked Questions')}
            {activeTab === 'recursos' && (lang === 'es' ? 'Recursos de Apoyo y Material Educativo' : 'Support Resources & Educational Materials')}
            {activeTab === 'haz-tu-pregunta' && (lang === 'es' ? 'Haz tu Pregunta a la Red' : 'Ask Your Question to the Network')}
          </h1>
        </div>

        {/* 1. PESTAÑA: PREGUNTAS FRECUENTES (Buscador semántico integrado y 15 secciones oficiales) */}
        {activeTab === 'faqs' && <FaqSection lang={lang} />}

        {/* 2. PESTAÑA: RECURSOS DE APOYO (Sin chips, sin calculadora) */}
        {activeTab === 'recursos' && (
          <div className="space-y-12 animate-fadeIn max-w-5xl mx-auto py-2">
            
            {/* SECCIÓN 1: FOLLETOS Y GUÍAS DIGITALES (Con modal lightbox superpuesto) */}
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                  {lang === 'es' ? 'Folletos y Guías Informativas' : 'Brochures & Educational Guides'}
                </h2>
                <p className="text-slate-600 text-sm mt-0.5">
                  {lang === 'es' 
                    ? 'Materiales educativos elaborados por el Instituto de Medicina Tropical Alexander von Humboldt.'
                    : 'Educational materials prepared by the Alexander von Humboldt Institute of Tropical Medicine.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: lang === 'es' ? "Guía de Primeros Pasos tras el Diagnóstico" : "First Steps Guide After Diagnosis",
                    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
                    desc: lang === 'es' ? "Qué hacer tras recibir un resultado reactivo, mitos frecuentes y recomendaciones de tranquilidad." : "What to do after a reactive result, debunking myths, and calm guidance.",
                  },
                  {
                    title: lang === 'es' ? "Maternidad Segura y Cuidados del Bebé" : "Safe Motherhood & Infant Care",
                    img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1200&q=85",
                    desc: lang === 'es' ? "Prevención de la transmisión por leche materna y pautas de nutrición con fórmulas infantiles." : "Preventing nursing transmission and nutrition guidance with infant formulas.",
                  },
                  {
                    title: lang === 'es' ? "Rehabilitación y Movilidad en HAM/TSP" : "Physical Therapy & Mobility in HAM/TSP",
                    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85",
                    desc: lang === 'es' ? "Ejercicios terapéuticos para controlar la rigidez motora y preservar la autonomía física." : "Therapeutic exercises to manage motor stiffness and preserve physical autonomy.",
                  }
                ].map((brochure, i) => (
                  <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="h-44 w-full overflow-hidden bg-slate-100">
                        <img
                          src={brochure.img}
                          alt={brochure.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 space-y-2">
                        <h4 className="text-base font-bold text-[#003B49] leading-snug">
                          {brochure.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {brochure.desc}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <button
                        onClick={() => setSelectedBrochure(brochure)}
                        className="w-full bg-[#E5A400] hover:bg-[#cca300] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003B49] text-[#003B49] py-2 px-4 rounded-lg text-sm font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span className="material-symbols-outlined text-lg">menu_book</span>
                        <span>{lang === 'es' ? 'Leer Folleto Digital' : 'Read Digital Brochure'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECCIÓN 2: VIDEOTECA EDUCATIVA */}
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                  {lang === 'es' ? 'Videoteca Educativa' : 'Educational Video Library'}
                </h2>
                <p className="text-slate-600 text-sm mt-0.5">
                  {lang === 'es' 
                    ? 'Videos informativos preparados por especialistas de la Red para pacientes y sus familias.'
                    : 'Informational talks prepared by Network specialists for patients and families.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="relative aspect-video w-full bg-slate-900">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube-nocookie.com/embed/1NqgEEReKhs"
                      title={lang === 'es' ? "Comprendiendo el HTLV-1" : "Understanding HTLV-1"}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6 space-y-2">
                    <p className="text-xs font-semibold text-[#087E8B]">
                      {lang === 'es' ? 'Fundamentos Médicos' : 'Medical Fundamentals'}
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-[#003B49] leading-snug">
                      {lang === 'es' ? '¿Qué es el HTLV-1 y qué esperar tras el diagnóstico?' : 'What is HTLV-1 and what to expect after diagnosis?'}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {lang === 'es' 
                        ? 'Explicación clara sobre el curso benigno en más del 90% de personas, vías de no transmisión y vida cotidiana.'
                        : 'Clear overview of the benign course in >90% of individuals, non-transmission facts, and daily living.'}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="relative aspect-video w-full bg-slate-900">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube-nocookie.com/embed/rpmI1nhMOak"
                      title={lang === 'es' ? "Maternidad y Prevención Vertical" : "Maternity and Vertical Prevention"}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6 space-y-2">
                    <p className="text-xs font-semibold text-[#A10D3A]">
                      {lang === 'es' ? 'Salud Materno-Infantil' : 'Maternal-Child Health'}
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-[#003B49] leading-snug">
                      {lang === 'es' ? 'Maternidad Segura y Prevención de Transmisión Vertical' : 'Safe Motherhood & Prevention of Vertical Transmission'}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {lang === 'es' 
                        ? 'Pautas clínicas sobre tamizaje prenatal, parto seguro y el rol de las fórmulas sucedáneas.'
                        : 'Clinical guidelines on prenatal screening, safe delivery, and the protective role of infant formulas.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm shadow-sm">
              <span className="text-slate-600 font-medium">
                {lang === 'es' ? 'Todos los materiales son de libre acceso y distribución para pacientes y comunidad.' : 'All materials are freely accessible for community distribution.'}
              </span>
              <button
                onClick={() => switchTab('haz-tu-pregunta')}
                className="bg-[#003B49] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#087E8B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A400] transition-colors cursor-pointer text-sm shrink-0"
              >
                {lang === 'es' ? '¿Tienes dudas? Haz tu pregunta' : 'Have questions? Ask the Network'}
              </button>
            </div>

          </div>
        )}

        {/* MODAL LIGHTBOX SUPERPUESTO PARA FOLLETOS */}
        {selectedBrochure && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn"
            onClick={() => setSelectedBrochure(null)}
          >
            <div 
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
                <h3 className="font-bold text-base text-[#003B49]">
                  {selectedBrochure.title}
                </h3>
                <button
                  onClick={() => setSelectedBrochure(null)}
                  className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center font-bold text-sm cursor-pointer transition-colors"
                  aria-label="Cerrar"
                >
                  ✕
                </button>
              </div>
              <div className="p-4 max-h-[75vh] overflow-y-auto flex flex-col items-center">
                <img 
                  src={selectedBrochure.img} 
                  alt={selectedBrochure.title} 
                  className="w-full max-h-[55vh] object-contain rounded-lg border border-slate-200 shadow-sm"
                />
                <p className="text-sm text-slate-600 mt-4 leading-relaxed text-center">
                  {selectedBrochure.desc}
                </p>
              </div>
              <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end gap-3">
                <a
                  href={selectedBrochure.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#003B49] text-white text-xs font-semibold rounded-lg hover:bg-[#087E8B] transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  <span>{lang === 'es' ? 'Abrir imagen completa' : 'Open full image'}</span>
                </a>
                <button
                  onClick={() => setSelectedBrochure(null)}
                  className="px-4 py-2 bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-300 transition-colors cursor-pointer"
                >
                  {lang === 'es' ? 'Cerrar' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 3. PESTAÑA: HAZ TU PREGUNTA */}
        {activeTab === 'haz-tu-pregunta' && (
          <div className="animate-fadeIn max-w-5xl mx-auto py-2">
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl border border-slate-200 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Columna Izquierda: Información de Confidencialidad */}
                <div className="lg:col-span-5 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#003B49] leading-tight">
                    {lang === 'es' ? 'Envía tu consulta médica o personal' : 'Submit your medical or personal inquiry'}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {lang === 'es'
                      ? 'Tus dudas son recibidas directamente por el equipo médico del IMTAvH - UPCH y consejeros de la Red. No publicamos tus datos y te responderemos por correo.'
                      : 'Your queries are delivered directly to the IMTAvH - UPCH clinical counseling team. We never publish personal details.'}
                  </p>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2 font-bold text-[#087E8B] text-sm">
                      <span className="material-symbols-outlined text-lg">verified_user</span>
                      <span>{lang === 'es' ? 'Garantía Ética & Privacidad' : 'Privacy & Ethics Assurance'}</span>
                    </div>
                    <p>{lang === 'es' ? 'Cumplimiento estricto de la Ley N° 29733 de Protección de Datos Personales.' : 'Strict compliance with Data Protection standards.'}</p>
                  </div>
                </div>

                {/* Columna Derecha: Formulario Horizontal */}
                <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200">
                  {submitted ? (
                    <div className="py-8 text-center space-y-3 animate-fadeIn">
                      <span className="material-symbols-outlined text-5xl text-[#087E8B]">check_circle</span>
                      <h4 className="text-xl font-bold text-[#003B49]">
                        {lang === 'es' ? '¡Tu pregunta fue enviada!' : 'Your question was sent!'}
                      </h4>
                      <p className="text-sm text-slate-600 max-w-md mx-auto">
                        {lang === 'es' 
                          ? `Te responderemos al correo (${formData.email}) de manera privada.` 
                          : `We will reply to your email (${formData.email}) privately.`}
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ nombre: '', email: '', pais: '', tema: 'diagnostico', pregunta: '' });
                        }}
                        className="mt-3 bg-[#003B49] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#087E8B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A400] cursor-pointer"
                      >
                        {lang === 'es' ? 'Enviar otra consulta' : 'Send another inquiry'}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-[#003B49] mb-1">
                            {lang === 'es' ? 'Nombre o Pseudónimo' : 'Name or Nickname'}
                          </label>
                          <input
                            type="text"
                            placeholder={lang === 'es' ? "Opcional" : "Optional"}
                            value={formData.nombre}
                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#087E8B] focus:border-transparent transition"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-[#003B49] mb-1">
                            {lang === 'es' ? 'Correo Electrónico *' : 'Email Address *'}
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="tucorreo@ejemplo.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#087E8B] focus:border-transparent transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#003B49] mb-1">
                          {lang === 'es' ? 'Tu pregunta o consulta *' : 'Your question *'}
                        </label>
                        <textarea
                          required
                          rows="3"
                          placeholder={lang === 'es' ? "Escribe aquí tus dudas con tranquilidad..." : "Write your questions here..."}
                          value={formData.pregunta}
                          onChange={(e) => setFormData({ ...formData, pregunta: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#087E8B] focus:border-transparent resize-none transition"
                        ></textarea>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs text-slate-500 font-medium">
                          * {lang === 'es' ? 'Respuesta privada garantizada' : 'Private response guaranteed'}
                        </span>
                        <button
                          type="submit"
                          disabled={loading}
                          className="bg-[#A10D3A] hover:bg-[#850a2f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A400] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-sm cursor-pointer disabled:opacity-50"
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
