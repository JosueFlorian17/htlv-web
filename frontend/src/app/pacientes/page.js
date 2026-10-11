"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function PacientesPage() {
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
    <main className="w-full bg-[#f8f9fb] min-h-screen py-10 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        
        {/* Cabecera Principal - Empática y Humana */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-14">
          <span className="px-3 py-1 bg-[#ffdada] text-[#5b0617] text-[12px] font-black uppercase tracking-widest rounded-full inline-block">
            Acompañamiento & Orientación
          </span>
          <h1 className="text-[34px] sm:text-[46px] font-black text-[#191c1e] tracking-tight leading-tight">
            Espacio para Pacientes y Familias
          </h1>
          <p className="text-[17px] text-[#564242] leading-relaxed max-w-3xl mx-auto">
            Información clara, cálida y sin tecnicismos para ayudarte a comprender tu diagnóstico, cuidar tu salud y resolver todas tus dudas en un espacio seguro.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Mensaje de Bienvenida y Tranquilidad */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#dcc0c0] shadow-xs space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#ffdada] text-[#5b0617] flex items-center justify-center font-bold text-2xl flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">favorite</span>
              </div>
              <div>
                <h2 className="text-[22px] font-bold text-[#191c1e] mb-1">
                  Si has recibido un diagnóstico positivo, respira y mantén la calma
                </h2>
                <p className="text-[14.5px] text-[#564242] leading-relaxed">
                  Recibir una noticia médica inesperada puede generar incertidumbre o temor. Sin embargo, es fundamental que sepas que <strong>cerca del 90% de las personas que viven con HTLV son portadores asintomáticos</strong> que disfrutan de una vida plena, activa y longeva sin llegar a desarrollar complicaciones graves.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#f8f9fb] border border-[#dcc0c0]">
                <div className="flex items-center gap-2 text-[#5b0617] font-bold text-[14px] mb-1">
                  <span className="material-symbols-outlined text-lg">check_circle</span>
                  <span>No estás solo</span>
                </div>
                <p className="text-[13px] text-[#564242]">
                  Existen equipos de salud y especialistas en infectología y neurología dedicados a acompañarte con empatía.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f8f9fb] border border-[#dcc0c0]">
                <div className="flex items-center gap-2 text-[#5b0617] font-bold text-[14px] mb-1">
                  <span className="material-symbols-outlined text-lg">home</span>
                  <span>Tu hogar es seguro</span>
                </div>
                <p className="text-[13px] text-[#564242]">
                  El virus no se contagia por abrazar, besar, compartir alimentos, vasos, platos ni baños con tus seres queridos.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f8f9fb] border border-[#dcc0c0]">
                <div className="flex items-center gap-2 text-[#5b0617] font-bold text-[14px] mb-1">
                  <span className="material-symbols-outlined text-lg">calendar_today</span>
                  <span>Control periódico</span>
                </div>
                <p className="text-[13px] text-[#564242]">
                  Una consulta médica anual de rutina es el paso clave para monitorizar tu salud general y resolver inquietudes.
                </p>
              </div>
            </div>
          </div>

          {/* Formulario para Enviar Preguntas (El Espacio Acordado en la Reunión) */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border-2 border-[#5b0617]/30 shadow-md space-y-6">
            <div>
              <div className="flex items-center gap-2 text-[#5b0617] font-bold text-[13px] uppercase tracking-wider mb-1">
                <span className="material-symbols-outlined text-lg">contact_support</span>
                <span>Espacio Confidencial de Preguntas</span>
              </div>
              <h2 className="text-[26px] font-black text-[#191c1e]">
                Envíanos tu pregunta
              </h2>
              <p className="text-[14.5px] text-[#564242] mt-1 leading-relaxed">
                ¿Tienes alguna duda sobre tu resultado, síntomas, vida en pareja, embarazo o cuidados? Déjanos tu consulta a continuación. Nuestro equipo médico y de consejería de la Red te responderá de forma privada y respetuosa.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-[#ffdada]/40 border border-[#dcc0c0] rounded-xl text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 bg-[#5b0617] text-white rounded-full flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-2xl">check</span>
                </div>
                <h3 className="text-[20px] font-bold text-[#191c1e]">¡Tu pregunta ha sido recibida con éxito!</h3>
                <p className="text-[14px] text-[#564242] max-w-lg mx-auto">
                  Un médico o consejero de nuestro equipo de la Red RIII-HTLV revisará tu consulta y te responderá al correo electrónico indicado (<strong>{formData.email}</strong>). Gracias por tu confianza.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ nombre: '', email: '', pais: '', tipoPregunta: 'diagnostico', pregunta: '' });
                  }}
                  className="mt-3 bg-[#5b0617] text-white px-5 py-2 rounded-xl text-[13px] font-bold hover:opacity-90 transition-all cursor-pointer"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-bold text-[#191c1e] mb-1">
                      Nombre o Pseudónimo (Opcional)
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. María o Anónimo"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#dcc0c0] bg-[#f8f9fb] focus:bg-white focus:outline-none focus:border-[#5b0617] text-[14px]"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#191c1e] mb-1">
                      Correo Electrónico (Para recibir respuesta) *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tucorreo@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#dcc0c0] bg-[#f8f9fb] focus:bg-white focus:outline-none focus:border-[#5b0617] text-[14px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-bold text-[#191c1e] mb-1">
                      Ciudad o País de Residencia
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Lima, Perú / Madrid, España"
                      value={formData.pais}
                      onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#dcc0c0] bg-[#f8f9fb] focus:bg-white focus:outline-none focus:border-[#5b0617] text-[14px]"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#191c1e] mb-1">
                      Tema de la Consulta
                    </label>
                    <select
                      value={formData.tipoPregunta}
                      onChange={(e) => setFormData({ ...formData, tipoPregunta: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#dcc0c0] bg-[#f8f9fb] focus:bg-white focus:outline-none focus:border-[#5b0617] text-[14px]"
                    >
                      <option value="diagnostico">Confirmación de diagnóstico / Pruebas</option>
                      <option value="cuidados">Cuidados y estilo de vida</option>
                      <option value="embarazo">Embarazo y lactancia</option>
                      <option value="pareja">Relaciones de pareja y prevención</option>
                      <option value="sintomas">Síntomas neurológicos o generales</option>
                      <option value="otro">Otro tema</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#191c1e] mb-1">
                    Describe tu pregunta con confianza *
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Escribe tu consulta aquí con toda la tranquilidad. Cuéntanos qué dudas tienes..."
                    value={formData.pregunta}
                    onChange={(e) => setFormData({ ...formData, pregunta: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#dcc0c0] bg-[#f8f9fb] focus:bg-white focus:outline-none focus:border-[#5b0617] text-[14px]"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-[12px] text-[#897172] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#5b0617]">lock</span>
                    <span>Tus datos son 100% confidenciales bajo normas de protección de datos.</span>
                  </span>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto bg-[#5b0617] text-white px-7 py-3 rounded-xl text-[14px] font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
                  >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>{loading ? 'Enviando...' : 'Enviar mi pregunta'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Preguntas Frecuentes Resueltas de Pacientes */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#dcc0c0] shadow-xs space-y-6">
            <h3 className="text-[22px] font-black text-[#191c1e]">
              Dudas habituales de pacientes resueltas
            </h3>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-[#f8f9fb] border border-[#dcc0c0]">
                <h4 className="font-bold text-[15px] text-[#5b0617] mb-1">
                  ¿Puedo tener hijos si soy portador de HTLV?
                </h4>
                <p className="text-[13.5px] text-[#564242] leading-relaxed">
                  Sí, totalmente. Si el padre es portador y la madre no, no hay transmisión al bebé durante la gestación. Si la madre es portadora, el riesgo de transmisión durante el embarazo o parto es menor al 3%; el principal mecanismo es la lactancia materna prolongada. Por ello, con el uso de fórmulas sucedáneas guiadas por el pediatra, el bebé tiene más del 95% de probabilidades de nacer libre del virus.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#f8f9fb] border border-[#dcc0c0]">
                <h4 className="font-bold text-[15px] text-[#5b0617] mb-1">
                  ¿Debo seguir una dieta especial o tomar suplementos?
                </h4>
                <p className="text-[13.5px] text-[#564242] leading-relaxed">
                  No se requiere ninguna dieta restrictiva ni suplementos costosos no respaldados. La recomendación médica es mantener un estilo de vida saludable: alimentación balanceada, actividad física regular, evitar el consumo excesivo de alcohol y tabaco, y gestionar el estrés.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#f8f9fb] border border-[#dcc0c0]">
                <h4 className="font-bold text-[15px] text-[#5b0617] mb-1">
                  ¿Con qué frecuencia debo ir al médico?
                </h4>
                <p className="text-[13.5px] text-[#564242] leading-relaxed">
                  Si no tienes ningún síntoma neurológico ni de otro tipo, se recomienda una evaluación médica de rutina una vez al año con un infectólogo o médico capacitado. Si notas dificultades al caminar, rigidez o cambios urinarios, consulta pronto con tu médico.
                </p>
              </div>
            </div>

            <div className="pt-2 text-center">
              <Link 
                href="/htlv"
                className="inline-flex items-center gap-1.5 text-[#5b0617] font-bold text-[14px] hover:underline"
              >
                <span>Ver la guía científica completa sobre HTLV</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
