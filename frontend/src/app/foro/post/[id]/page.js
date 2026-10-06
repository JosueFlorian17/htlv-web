"use client";

import { useState, use } from 'react';
import Link from 'next/link';

export default function ForumPostDetailPage({ params }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  // Mock post database by ID
  const POST_DATABASE = {
    "101": {
      title: "Protocolo de Convivencia: Mantener un Espacio Libre de Estigma",
      category: "Normas Oficiales",
      categoryColor: "bg-[#5b0617] text-white",
      author: "Comité de Moderación RIII-HTLV",
      role: "Equipo UPCH • Moderador Oficial",
      time: "Fijado",
      content: `Bienvenidas y bienvenidos a la comunidad oficial de la Red Internacional de Investigación e Innovación en HTLV (RIII-HTLV).

Este espacio tiene como objetivo brindar acompañamiento, soporte entre pares e información basada en evidencia científica. Para preservar la seguridad emocional y privacidad de todos los participantes, solicitamos el cumplimiento estricto de las siguientes pautas:

1. Confidencialidad Absoluta: Respete la identidad y privacidad de cada participante. No comparta información sensible de terceros sin su consentimiento explícito (Ley N° 29733).
2. Trato Empático y Libre de Estigma: No se tolerará ningún tipo de discriminación, juicio moral ni comentarios despectivos.
3. Cero Desinformación: Evite la recomendación de pseudoterapias, tratamientos milagrosos o medicamentos sin respaldo médico formal.
4. Consulta Médica Primaria: Recuerde que las experiencias individuales no sustituyen el criterio ni las indicaciones de su infectólogo o especialista de cabecera.`,
      comments: [
        {
          id: 1,
          user: "Elena M.",
          role: "Defensora de Pacientes",
          time: "Hace 1 día",
          text: "Excelente iniciativa. Como persona viviendo con HTLV desde hace más de 10 años, contar con un espacio seguro y avalado por la UPCH es fundamental para derribar el miedo inicial.",
          likes: 12
        },
        {
          id: 2,
          user: "Carlos R.",
          role: "Miembro de la Comunidad",
          time: "Hace 18 horas",
          text: "Totalmente de acuerdo con el compromiso ético. La empatía y la buena información son las mejores herramientas contra la desinformación.",
          likes: 8
        },
        {
          id: 3,
          user: "Dra. Carmen V.",
          role: "Consultora Médica IMTAvH",
          time: "Hace 12 horas",
          text: "Desde el Instituto Alexander von Humboldt reafirmamos nuestro compromiso con la comunidad de portadores y familiares para acompañarlos con ciencia y calidez humana.",
          likes: 15
        }
      ]
    },
    "102": {
      title: "Vivir con serenidad tras el diagnóstico de HTLV-1: Mi experiencia de acompañamiento",
      category: "Apoyo y Vivencias",
      categoryColor: "bg-[#ffdada] text-[#5b0617]",
      author: "Elena M.",
      role: "Defensora de Pacientes • Lima",
      time: "Hace 2 horas",
      content: `Quiero compartir mi testimonio para quienes acaban de recibir un resultado serológico reactivo a HTLV-1.

Cuando me enteré hace 12 años a raíz de una donación de sangre, sentí mucha angustia porque desconocía completamente el virus y encontré poca información clara en internet. Sin embargo, acudir al consultorio especializado del Instituto de Medicina Tropical Alexander von Humboldt (UPCH) cambió todo.

Me explicaron con claridad la regla del 90/10: que la gran mayoría de portadores somos asintomáticos y que con un control anual de carga proviral y hábitos saludables se puede tener una vida plena, activa y tranquila.

A quienes están pasando por el impacto del diagnóstico: no están solos, busquen médicos especializados y no se dejen abrumar por el pánico.`,
      comments: [
        {
          id: 1,
          user: "Patricia G.",
          role: "Miembro Nuevo",
          time: "Hace 1 hora",
          text: "Muchas gracias por tus palabras, Elena. Justo recibí mi confirmatorio la semana pasada y leerte me da muchísima tranquilidad y esperanza.",
          likes: 6
        },
        {
          id: 2,
          user: "Dr. Thorne",
          role: "Consultor Clínico",
          time: "Hace 45 min",
          text: "Testimonios como el tuyo son invaluables, Elena. El acompañamiento psicoemocional y la adherencia al control periódico son pilares clave para el bienestar a largo plazo.",
          likes: 9
        },
        {
          id: 3,
          user: "Miguel A.",
          role: "Miembro de la Comunidad",
          time: "Hace 20 min",
          text: "Coincido totalmente. Llevo 7 años con diagnóstico asintomático y el chequeo anual me da completa tranquilidad.",
          likes: 4
        }
      ]
    },
    "103": {
      title: "Maternidad segura: Cómo gestionamos la lactancia y el cuidado del recién nacido",
      category: "Maternidad y Prevención",
      categoryColor: "bg-[#d6e0f3] text-[#1d2b3a]",
      author: "Rosa V.",
      role: "Miembro de la Comunidad • Cusco",
      time: "Ayer",
      content: `Quiero compartir mi experiencia como mamá seropositiva para HTLV-1.

Durante mis controles prenatales en el hospital regional me realizaron el despistaje serológico. Al confirmarse el resultado, el equipo de pediatría e infectología me orientó para suspender la lactancia materna y alimentar a mi bebé con fórmula infantil desde el nacimiento.

Hoy mi hijo tiene 3 años, le realizamos sus pruebas de seguimiento molecular y serológico y está 100% libre del virus. La prevención a tiempo sí funciona y salva vidas.`,
      comments: [
        {
          id: 1,
          user: "Lucía F.",
          role: "Gestante",
          time: "Hace 5 horas",
          text: "¡Qué testimonio tan esperanzador! Estoy en mi séptimo mes de gestación y tenía dudas sobre la fórmula, pero tu experiencia me da total seguridad.",
          likes: 7
        },
        {
          id: 2,
          user: "Dra. Sofía M.",
          role: "Pediatra Neonatóloga",
          time: "Hace 3 horas",
          text: "Excelente testimonio, Rosa. La evidencia científica demuestra que la fórmula infantil en madres seropositivas reduce la tasa de transmisión vertical a casi 0%.",
          likes: 11
        }
      ]
    },
    "104": {
      title: "Manejo de la actividad física, fisioterapia y bienestar integral en portadores",
      category: "Hábitos Saludables",
      categoryColor: "bg-[#f3f4f6] text-[#564242]",
      author: "Javier S.",
      role: "Miembro Activo • Trujillo",
      time: "Hace 3 días",
      content: `Abro este tema para compartir mi rutina de acondicionamiento físico adaptada.

Mi fisioterapeuta me recomendó ejercicios de bajo impacto como natación, bicicleta estática y estiramientos diarios de miembros inferiores durante 30 minutos. Esto me ha ayudado notablemente a evitar contracturas musculares, mejorar el equilibrio y reducir el cansancio.

¿Qué tipo de actividades físicas o rutinas de autocuidado les han funcionado mejor a ustedes?`,
      comments: [
        {
          id: 1,
          user: "Alberto K.",
          role: "Miembro de la Comunidad",
          time: "Hace 2 días",
          text: "Yo practico yoga suave y pilates dos veces por semana y me ha ayudado muchísimo con la flexibilidad y el manejo del estrés.",
          likes: 5
        },
        {
          id: 2,
          user: "Lic. Andrea T.",
          role: "Fisioterapeuta",
          time: "Hace 1 día",
          text: "Muy buenas recomendaciones, Javier. Los ejercicios de fortalecimiento del core y la propiocepción en miembros inferiores son esenciales para mantener la estabilidad de la marcha.",
          likes: 8
        }
      ]
    }
  };

  const defaultPost = {
    title: `Conversación y Preguntas en la Comunidad #${id}`,
    category: "Comunidad y Apoyo",
    categoryColor: "bg-[#ffdada] text-[#5b0617]",
    author: "Usuario de la Comunidad",
    role: "Participante",
    time: "Reciente",
    content: "Espacio abierto para el intercambio de experiencias, consultas y acompañamiento entre personas que conviven con el HTLV e investigadores.",
    comments: [
      {
        id: 1,
        user: "Moderador RIII-HTLV",
        role: "Equipo UPCH",
        time: "Hace 1 hora",
        text: "Bienvenido a esta conversación. Recuerde consultar siempre a su médico tratante ante cualquier duda sintomática.",
        likes: 3
      }
    ]
  };

  const currentPost = POST_DATABASE[id] || defaultPost;

  // Local state for comments and replies
  const [commentList, setCommentList] = useState(currentPost.comments);
  const [newCommentText, setNewCommentText] = useState('');
  const [commenterName, setCommenterName] = useState('');
  const [isAnonymousComment, setIsAnonymousComment] = useState(false);
  const [likes, setLikes] = useState(24);
  const [hasLiked, setHasLiked] = useState(false);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment = {
      id: Date.now(),
      user: isAnonymousComment ? "Usuario Anónimo" : (commenterName.trim() || "Participante"),
      role: "Comunidad RIII-HTLV",
      time: "Hace un momento",
      text: newCommentText.trim(),
      likes: 0
    };

    setCommentList([...commentList, newComment]);
    setNewCommentText('');
    setCommenterName('');
    setIsAnonymousComment(false);
  };

  const handleLikePost = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  return (
    <>
      <main className="min-h-screen bg-[#f8f9fb] pt-24 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[880px] mx-auto space-y-6">
          
          {/* Breadcrumbs y Botón Volver */}
          <div className="flex items-center justify-between text-[13px] text-[#564242]">
            <Link 
              href="/foro" 
              className="inline-flex items-center gap-1.5 font-bold text-[#5b0617] hover:underline"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Volver al Foro Comunitario
            </Link>
            <span className="text-[12px] bg-white border border-[#dcc0c0] px-2.5 py-0.5 rounded-full">
              Hilo de Conversación ID: #{id}
            </span>
          </div>

          {/* Publicación Principal (Post / Historia) */}
          <article className="bg-white border border-[#dcc0c0] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            
            <header className="border-b border-[#f0dede] pb-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className={`px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${currentPost.categoryColor}`}>
                  {currentPost.category}
                </span>
                <span className="text-[12px] text-[#897172]">{currentPost.time}</span>
              </div>

              <h1 className="font-bold text-[22px] sm:text-[26px] text-[#191c1e] leading-snug">
                {currentPost.title}
              </h1>

              <div className="flex items-center gap-3 pt-1">
                <div className="w-10 h-10 rounded-full bg-[#5b0617] text-white flex items-center justify-center font-bold text-sm">
                  {currentPost.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[14px] text-[#191c1e]">{currentPost.author}</h4>
                  <p className="text-[11.5px] text-[#897172]">{currentPost.role}</p>
                </div>
              </div>
            </header>

            {/* Contenido de la Historia */}
            <div className="text-[14.5px] sm:text-[15.5px] text-[#332222] leading-[1.7] whitespace-pre-line">
              {currentPost.content}
            </div>

            {/* Acciones de la Publicación: Likes y Comentarios */}
            <footer className="pt-4 border-t border-[#f0dede] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={handleLikePost}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-all cursor-pointer ${
                    hasLiked 
                      ? 'bg-[#ffdada] text-[#5b0617]' 
                      : 'bg-[#f8f9fb] text-[#564242] border border-[#dcc0c0] hover:bg-[#ffdada]/30'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {hasLiked ? 'favorite' : 'favorite_border'}
                  </span>
                  <span>{likes} Me gusta</span>
                </button>

                <div className="flex items-center gap-1.5 text-[13px] text-[#564242] font-semibold">
                  <span className="material-symbols-outlined text-[18px] text-[#5b0617]">forum</span>
                  <span>{commentList.length} Comentarios</span>
                </div>
              </div>

              <span className="text-[11.5px] text-[#897172] hidden sm:inline">
                Protegido por Ley N° 29733
              </span>
            </footer>

          </article>

          {/* Sección de Comentarios y Respuestas de la Comunidad */}
          <section className="space-y-4">
            
            <div className="flex items-center justify-between pb-1">
              <h3 className="font-bold text-[18px] text-[#5b0617] flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">chat</span>
                Comentarios y Acompañamiento ({commentList.length})
              </h3>
            </div>

            {/* Lista de Comentarios */}
            <div className="space-y-3.5">
              {commentList.map((c) => (
                <div 
                  key={c.id} 
                  className="bg-white border border-[#dcc0c0] rounded-xl p-5 shadow-2xs space-y-2 hover:border-[#5b0617]/50 transition-colors"
                >
                  <div className="flex items-center justify-between text-[12.5px] border-b border-[#f3f4f6] pb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#ffdada] text-[#5b0617] flex items-center justify-center font-bold text-xs">
                        {c.user.charAt(0)}
                      </div>
                      <span className="font-bold text-[#191c1e]">{c.user}</span>
                      <span className="bg-[#f3f4f6] text-[#564242] text-[10px] font-bold px-2 py-0.5 rounded-md border border-[#dcc0c0]">
                        {c.role}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#897172]">{c.time}</span>
                  </div>

                  <p className="text-[13.5px] text-[#443333] leading-relaxed pt-1">
                    {c.text}
                  </p>

                  <div className="flex items-center justify-end gap-3 pt-1 text-[11.5px] text-[#897172]">
                    <span className="flex items-center gap-1 hover:text-[#5b0617] cursor-pointer">
                      <span className="material-symbols-outlined text-[14px]">thumb_up</span>
                      <span>{c.likes || 0}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Formulario para Agregar Nuevo Comentario */}
            <div className="bg-white border border-[#dcc0c0] rounded-2xl p-6 shadow-sm space-y-4 mt-6">
              
              <div className="flex items-center gap-2 border-b border-[#f0dede] pb-3">
                <span className="material-symbols-outlined text-[#5b0617] text-[20px]">reply</span>
                <h4 className="font-bold text-[15px] text-[#191c1e]">
                  Añadir un comentario o palabra de aliento
                </h4>
              </div>

              <form onSubmit={handleAddComment} className="space-y-3.5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <input
                    type="text"
                    disabled={isAnonymousComment}
                    value={commenterName}
                    onChange={(e) => setCommenterName(e.target.value)}
                    placeholder={isAnonymousComment ? "Comentando en modo anónimo" : "Tu nombre o seudónimo (opcional)"}
                    className="flex-1 px-3.5 py-2 text-[12.5px] rounded-lg border border-[#dcc0c0] bg-[#f8f9fb] focus:bg-white focus:outline-none focus:border-[#5b0617] disabled:opacity-50"
                  />
                  <label className="flex items-center gap-1.5 text-[12px] text-[#564242] cursor-pointer whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={isAnonymousComment}
                      onChange={(e) => setIsAnonymousComment(e.target.checked)}
                      className="rounded accent-[#5b0617]"
                    />
                    <span>Comentar como Anónimo</span>
                  </label>
                </div>

                <textarea
                  required
                  rows="3"
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  placeholder="Escribe tu comentario respetuoso y empático aquí..."
                  className="w-full px-3.5 py-2.5 text-[13px] rounded-lg border border-[#dcc0c0] bg-[#f8f9fb] focus:bg-white focus:outline-none focus:border-[#5b0617] resize-none"
                ></textarea>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-[#897172] italic">
                    Espacio moderado • No sustituye consulta médica
                  </span>
                  <button
                    type="submit"
                    className="bg-[#5b0617] hover:opacity-90 text-white px-5 py-2 rounded-xl font-bold text-[12.5px] transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">send</span>
                    Publicar Comentario
                  </button>
                </div>
              </form>

            </div>

          </section>

        </div>
      </main>
    </>
  );
}