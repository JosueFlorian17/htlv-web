"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ForumPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  // Form State
  const [authorName, setAuthorName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Apoyo Mutuo y Vivencias');
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const categories = [
    {
      slug: 'apoyo-mutuo',
      title: 'Apoyo Mutuo y Vivencias',
      desc: 'Un espacio empático y seguro para convivir con el HTLV, compartir la vida diaria y encontrar apoyo entre pares.',
      icon: 'volunteer_activism',
      members: '2.1k Miembros',
      tag: 'Espacio Seguro'
    },
    {
      slug: 'orientacion-faqs',
      title: 'Orientación y Preguntas Frecuentes',
      desc: 'Consultas educativas generales respondidas con base en consensos biomédicos oficiales de la red.',
      icon: 'clinical_notes',
      members: 'Respuestas Verificadas',
      tag: 'Educativo'
    },
    {
      slug: 'investigacion',
      title: 'Investigación y Ensayos',
      desc: 'Conozca los avances en estudios clínicos y cómo la comunidad contribuye a la ciencia global.',
      icon: 'biotech',
      members: '842 Temas',
      tag: 'Ciencia Participativa'
    },
    {
      slug: 'comunidad',
      title: 'Comunidad y Eventos',
      desc: 'Información sobre seminarios web educativos, talleres para pacientes y actividades de concientización.',
      icon: 'campaign',
      members: '456 Temas',
      tag: 'Convocatorias'
    }
  ];

  const [posts, setPosts] = useState([
    {
      id: "101",
      pinned: true,
      tag: "Normas Oficiales",
      tagColor: "bg-[#5b0617] text-white",
      title: "Protocolo de Convivencia: Mantener un Espacio Libre de Estigma",
      excerpt: "Lectura obligatoria para todos los miembros: respeto irrestricto a la privacidad, empatía y prohibición de promoción comercial o consejos médicos no verificados.",
      author: "Comité de Moderación RIII-HTLV",
      role: "Equipo UPCH",
      time: "Fijado",
      commentsCount: 6,
      likesCount: 42
    },
    {
      id: "102",
      pinned: false,
      tag: "Apoyo y Vivencias",
      tagColor: "bg-[#ffdada] text-[#5b0617]",
      title: "Vivir con serenidad tras el diagnóstico de HTLV-1: Mi experiencia de acompañamiento",
      excerpt: "Recibir el resultado fue un impacto, pero contar con información científica y el apoyo del equipo médico del IMTAvH me permitió entender cómo cuidarme y llevar una vida plena.",
      author: "Elena M.",
      role: "Defensora de Pacientes • Lima",
      time: "Hace 2 horas",
      commentsCount: 14,
      likesCount: 28
    },
    {
      id: "103",
      pinned: false,
      tag: "Maternidad y Prevención",
      tagColor: "bg-[#d6e0f3] text-[#1d2b3a]",
      title: "Maternidad segura: Cómo gestionamos la lactancia y el cuidado del recién nacido",
      excerpt: "Comparto cómo fue el proceso de tamizaje prenatal y la alimentación con fórmula infantil para proteger a mi bebé de la transmisión vertical.",
      author: "Rosa V.",
      role: "Miembro de la Comunidad • Cusco",
      time: "Ayer",
      commentsCount: 9,
      likesCount: 19
    },
    {
      id: "104",
      pinned: false,
      tag: "Hábitos Saludables",
      tagColor: "bg-[#f3f4f6] text-[#564242]",
      title: "Manejo de la actividad física, fisioterapia y bienestar integral en portadores",
      excerpt: "Recomendaciones prácticas sobre ejercicios de bajo impacto, estiramientos y rutinas que me han ayudado a mantener la movilidad y reducir la fatiga.",
      author: "Javier S.",
      role: "Miembro Activo • Trujillo",
      time: "Hace 3 días",
      commentsCount: 22,
      likesCount: 35
    }
  ]);

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!postTitle.trim() || !postContent.trim() || !acceptedTerms) {
      alert("Por favor complete el título, contenido y acepte el compromiso ético.");
      return;
    }

    const newPost = {
      id: String(Date.now()),
      pinned: false,
      tag: selectedCategory,
      tagColor: "bg-[#ffdada] text-[#5b0617]",
      title: postTitle,
      excerpt: postContent.slice(0, 140) + (postContent.length > 140 ? '...' : ''),
      author: isAnonymous ? "Usuario Anónimo" : (authorName.trim() || "Participante"),
      role: "Testimonio Comunitario",
      time: "Hace un momento",
      commentsCount: 0,
      likesCount: 1
    };

    setPosts([newPost, ...posts]);
    setIsModalOpen(false);
    setPostTitle('');
    setPostContent('');
    setAuthorName('');
    setIsAnonymous(false);
    setAcceptedTerms(false);
    setSuccessToast(true);
    setTimeout(() => setSuccessToast(false), 4000);
  };

  return (
    <>
      <main className="w-full pb-24">
        
        {/* Visual Hero */}
        <div className="relative w-full h-[380px] md:h-[420px] flex items-center overflow-hidden">
          <img 
            alt="Fondo de comunidad de apoyo" 
            className="absolute inset-0 w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAqoHDWygUj6bPDpSZRerHWyHsTC3E7Pmjcyviws4rXpdgLA8UVnLo8H805dBI8JpQqVluYgGb2DkoERH5N6Wch9SrudnJg5LaaZEOkPkgW7b7hvKy8EovQIgd90mrDozbLWn76rj3zYMGSg_Y5iMV-fQDhvGBRQTjuRyl8_otEiLhq7kvmJTafEx--gmJrXfHibnrAW4qAw_Lt8258hfGy8CPQicvEyMYu9aRLUPYSxcuuxG1hQPpnIbMZ0IdU_XppVKOzYm2Slc"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/80 to-transparent"></div>
          
          <div className="relative px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto w-full">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#5b0617] font-label-sm uppercase tracking-widest font-bold bg-[#ffdada] px-3 py-1 rounded-full">
                  Espacio Comunitario Moderado
                </span>
              </div>
              <h1 className="font-display text-display mb-3 text-[#5b0617] leading-tight">
                Foro Comunitario RIII-HTLV
              </h1>
              <p className="font-body-lg text-body-lg text-[#564242] mb-6 leading-relaxed">
                Un entorno seguro, respetuoso y protegido para que personas viviendo con HTLV, familiares e investigadores compartan vivencias y construyan fortaleza colectiva.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#5b0617] text-white px-7 py-3.5 rounded-xl font-label-md font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-md cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">add_circle</span>
                  Compartir tu Historia
                </button>
                <Link
                  href="/faqs"
                  className="bg-white border border-[#dcc0c0] text-[#5b0617] px-6 py-3.5 rounded-xl font-label-md font-bold flex items-center gap-2 hover:bg-[#ffdada]/30 transition-all shadow-xs"
                >
                  <span className="material-symbols-outlined text-[20px]">quiz</span>
                  Preguntas Frecuentes
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Notificación Toast de Éxito */}
        {successToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#1e4620] text-white px-5 py-3.5 rounded-xl shadow-lg flex items-center gap-3 border border-[#4ade80]/30 animate-bounce">
            <span className="material-symbols-outlined text-green-300">check_circle</span>
            <span className="text-[13.5px] font-semibold">¡Tu historia ha sido compartida con éxito en la comunidad!</span>
          </div>
        )}

        {/* Content Container */}
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto -mt-8 relative z-10 space-y-10">
          
          {/* Banner de Advertencia Legal, Antihate y Moderación */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Política Anti-Troll y Tolerancia Cero */}
            <div className="bg-white border-l-4 border-[#ba1a1a] p-5 rounded-r-2xl shadow-xs border-y border-r border-[#dcc0c0]">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#ba1a1a] text-2xl mt-0.5">gavel</span>
                <div className="space-y-1">
                  <h4 className="text-[13px] font-bold text-[#ba1a1a] uppercase tracking-wider">
                    Tolerancia Cero al Ciberacoso y Troleo
                  </h4>
                  <p className="text-[12px] text-[#564242] leading-relaxed">
                    Este es un espacio protegido. La discriminación, el estigma o los comentarios ofensivos hacia personas con HTLV resultarán en la <strong>expulsión y bloqueo permanente e inmediato de la cuenta</strong>. Las publicaciones son supervisadas por moderadores designados.
                  </p>
                </div>
              </div>
            </div>

            {/* Deslinde Médico y Ley 29733 */}
            <div className="bg-white border-l-4 border-[#5b0617] p-5 rounded-r-2xl shadow-xs border-y border-r border-[#dcc0c0]">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#5b0617] text-2xl mt-0.5">verified_user</span>
                <div className="space-y-1">
                  <h4 className="text-[13px] font-bold text-[#5b0617] uppercase tracking-wider">
                    Privacidad (Ley N° 29733) y Descargo Médico
                  </h4>
                  <p className="text-[12px] text-[#564242] leading-relaxed">
                    Las vivencias compartidas <strong>no constituyen diagnóstico ni prescripción médica</strong>. Por su seguridad, no publique datos clínicos sensibles ni diagnósticos privados. Los datos de registro están protegidos bajo la <strong>Ley N° 29733 de Protección de Datos Personales del Perú</strong>.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Grid Layout: Espacios y Discusiones */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Columna Izquierda: Espacios de la Comunidad y Publicaciones */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Espacios / Categorías */}
              <section>
                <div className="border-b border-[#dcc0c0] pb-3 mb-6 flex justify-between items-center">
                  <h3 className="font-headline-md text-headline-md text-[#5b0617]">
                    Espacios de la Comunidad
                  </h3>
                  <span className="text-[12px] text-[#564242]">Haz clic para explorar los temas</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categories.map((cat) => (
                    <Link 
                      key={cat.slug} 
                      href={`/foro/categorias/${cat.slug}`}
                      className="bg-white p-6 border border-[#dcc0c0] rounded-2xl shadow-xs hover:border-[#5b0617] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 bg-[#ffdada] text-[#5b0617] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#5b0617] group-hover:text-white transition-all shadow-2xs">
                          <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
                        </div>
                        <h4 className="font-bold text-[16px] text-[#191c1e] mb-1.5 group-hover:text-[#5b0617] transition-colors">
                          {cat.title}
                        </h4>
                        <p className="text-[#564242] text-[13px] leading-relaxed mb-4">{cat.desc}</p>
                      </div>
                      
                      <div className="flex items-center justify-between text-[11.5px] text-[#564242] pt-3 border-t border-[#dcc0c0]/40">
                        <span className="font-semibold text-[#5b0617] flex items-center gap-1">
                          <span>{cat.members}</span>
                        </span>
                        <span className="bg-[#f8f9fb] px-2.5 py-0.5 rounded-full border border-[#dcc0c0] font-bold text-[#564242] group-hover:bg-[#ffdada]/40 transition-colors">
                          {cat.tag} →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Conversaciones y Vivencias de la Comunidad */}
              <section>
                <div className="border-b border-[#dcc0c0] pb-3 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-[#5b0617]">
                      Vivencias y Conversaciones
                    </h3>
                    <p className="text-[12px] text-[#564242]">
                      Haz clic en cualquier publicación para leer la historia completa y los comentarios
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#5b0617] hover:underline cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">add_comment</span>
                    + Nueva Publicación
                  </button>
                </div>

                <div className="space-y-4">
                  {posts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/foro/post/${post.id}`}
                      className={`block p-5 bg-white border rounded-2xl shadow-xs hover:shadow-md hover:border-[#5b0617] transition-all cursor-pointer ${
                        post.pinned ? 'border-l-4 border-l-[#5b0617] bg-[#ffdada]/10' : 'border-[#dcc0c0]'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          {post.pinned && (
                            <span className="bg-[#5b0617] text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                              <span className="material-symbols-outlined text-[12px]">push_pin</span> Fijado
                            </span>
                          )}
                          <span className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider ${post.tagColor}`}>
                            {post.tag}
                          </span>
                        </div>
                        <span className="text-[11.5px] text-[#897172] font-medium">{post.time}</span>
                      </div>

                      <h4 className="font-bold text-[16px] text-[#191c1e] hover:text-[#5b0617] transition-colors mb-1.5 leading-snug">
                        {post.title}
                      </h4>

                      <p className="text-[13px] text-[#564242] leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-3 border-t border-[#f0dede] text-[12px]">
                        <div className="flex items-center gap-2 text-[#564242]">
                          <span className="material-symbols-outlined text-[16px] text-[#5b0617]">account_circle</span>
                          <span className="font-bold text-[#191c1e]">{post.author}</span>
                          <span className="text-[#897172] hidden sm:inline">• {post.role}</span>
                        </div>

                        <div className="flex items-center gap-4 text-[#5b0617] font-bold">
                          <span className="flex items-center gap-1 hover:text-[#5b0617] transition-colors">
                            <span className="material-symbols-outlined text-[16px]">chat_bubble</span>
                            <span>{post.commentsCount} comentarios</span>
                          </span>
                          <span className="flex items-center gap-1 text-[#897172]">
                            <span className="material-symbols-outlined text-[16px]">favorite</span>
                            <span>{post.likesCount}</span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

            </div>

            {/* Columna Derecha: Panel de Moderación y Pautas */}
            <aside className="lg:col-span-4 space-y-6">
              
              {/* Pautas Éticas de Moderación (CORREGIDO Y ALINEADO PERFECTAMENTE) */}
              <div className="bg-[#5b0617] text-white p-6 rounded-2xl shadow-sm space-y-4">
                <div className="flex items-center gap-2.5 border-b border-white/20 pb-3">
                  <span className="material-symbols-outlined text-[#ffdada] text-2xl">shield</span>
                  <h4 className="font-bold text-[16px] tracking-wide">Compromiso Ético</h4>
                </div>
                
                <div className="space-y-3.5 text-[12.5px] leading-relaxed">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#ffdada] font-bold mt-0.5">•</span>
                    <div>
                      <strong className="text-white font-bold">Confidencialidad:</strong>{' '}
                      <span className="text-white/90">Respete la privacidad e identidad de cada usuario.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-[#ffdada] font-bold mt-0.5">•</span>
                    <div>
                      <strong className="text-white font-bold">Empatía:</strong>{' '}
                      <span className="text-white/90">Comuníquese siempre con cordialidad y apoyo sincero.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-[#ffdada] font-bold mt-0.5">•</span>
                    <div>
                      <strong className="text-white font-bold">No Desinformación:</strong>{' '}
                      <span className="text-white/90">Evite promover tratamientos no avalados por la ciencia.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-[#ffdada] font-bold mt-0.5">•</span>
                    <div>
                      <strong className="text-white font-bold">Reporte Activo:</strong>{' '}
                      <span className="text-white/90">Notifique inmediatamente cualquier conducta inapropiada a los moderadores.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón Destacado de Compartir Historia */}
              <div className="bg-white p-6 border border-[#dcc0c0] rounded-2xl shadow-xs text-center space-y-3">
                <div className="w-12 h-12 bg-[#ffdada] text-[#5b0617] rounded-full flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-2xl">edit_note</span>
                </div>
                <h4 className="font-bold text-[15px] text-[#191c1e]">
                  ¿Deseas compartir tu experiencia?
                </h4>
                <p className="text-[12px] text-[#564242] leading-relaxed">
                  Tu historia puede ser el apoyo y la guía que otra persona necesita en su proceso.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#5b0617] text-white py-2.5 rounded-xl font-bold text-[13px] hover:opacity-90 transition-all cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[18px]">add_circle</span>
                  Publicar Historia
                </button>
              </div>

              {/* Estadísticas de la Comunidad */}
              <div className="bg-white p-6 border border-[#dcc0c0] rounded-2xl shadow-xs">
                <h4 className="font-bold text-[14px] text-[#191c1e] uppercase tracking-wider mb-4 border-b border-[#dcc0c0] pb-2">
                  Red de Apoyo RIII-HTLV
                </h4>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 bg-[#f8f9fb] rounded-xl border border-[#dcc0c0]">
                    <p className="text-[24px] font-black text-[#5b0617] leading-tight">2.1k+</p>
                    <p className="text-[11px] text-[#564242] font-semibold mt-0.5">Miembros Registrados</p>
                  </div>
                  <div className="p-3 bg-[#f8f9fb] rounded-xl border border-[#dcc0c0]">
                    <p className="text-[24px] font-black text-[#5b0617] leading-tight">100%</p>
                    <p className="text-[11px] text-[#564242] font-semibold mt-0.5">Moderado y Seguro</p>
                  </div>
                </div>
              </div>

              {/* Enlace a Recursos Educativos */}
              <div className="bg-[#f8f9fb] p-6 border border-[#dcc0c0] rounded-2xl shadow-xs">
                <h4 className="font-bold text-[14px] text-[#191c1e] mb-2">¿Busca información médica oficial?</h4>
                <p className="text-[12px] text-[#564242] leading-relaxed mb-4">
                  Consulte la guía oficial con 13 preguntas frecuentes sobre virología, diagnóstico y tratamientos.
                </p>
                <Link 
                  href="/faqs"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#5b0617] hover:underline"
                >
                  <span>Ir a Preguntas Frecuentes (FAQs)</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>

            </aside>

          </div>

        </div>

        {/* MODAL INTERACTIVO: COMPARTIR TU HISTORIA / EXPERIENCIA */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#dcc0c0] relative my-8 animate-fadeIn">
              
              <div className="flex items-center justify-between border-b border-[#f0dede] pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#ffdada] text-[#5b0617] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">edit_square</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[18px] text-[#5b0617]">Compartir tu Historia</h3>
                    <p className="text-[11.5px] text-[#564242]">Espacio seguro moderado por la Red RIII-HTLV</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-[#897172] hover:text-[#5b0617] transition-colors p-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[22px]">close</span>
                </button>
              </div>

              <form onSubmit={handleCreatePost} className="space-y-4">
                
                {/* Nombre / Pseudónimo */}
                <div>
                  <label className="block text-[12.5px] font-bold text-[#191c1e] mb-1">
                    Tu Nombre o Pseudónimo
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      disabled={isAnonymous}
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder={isAnonymous ? "Publicación en modo anónimo" : "Ej. María G. (Lima)"}
                      className="flex-1 px-3.5 py-2 text-[13px] rounded-lg border border-[#dcc0c0] bg-[#f8f9fb] focus:bg-white focus:outline-none focus:border-[#5b0617] disabled:opacity-50"
                    />
                    <label className="flex items-center gap-1.5 text-[12px] text-[#564242] cursor-pointer whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={isAnonymous}
                        onChange={(e) => setIsAnonymous(e.target.checked)}
                        className="rounded accent-[#5b0617]"
                      />
                      <span>Anónimo</span>
                    </label>
                  </div>
                </div>

                {/* Categoría / Espacio */}
                <div>
                  <label className="block text-[12.5px] font-bold text-[#191c1e] mb-1">
                    Espacio o Tema
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3.5 py-2 text-[13px] rounded-lg border border-[#dcc0c0] bg-[#f8f9fb] focus:bg-white focus:outline-none focus:border-[#5b0617]"
                  >
                    <option value="Apoyo Mutuo y Vivencias">Apoyo Mutuo y Vivencias</option>
                    <option value="Orientación y Preguntas">Orientación y Preguntas</option>
                    <option value="Maternidad y Prevención">Maternidad y Prevención</option>
                    <option value="Hábitos y Bienestar">Hábitos y Bienestar</option>
                    <option value="Investigación Participativa">Investigación Participativa</option>
                  </select>
                </div>

                {/* Título de la Historia */}
                <div>
                  <label className="block text-[12.5px] font-bold text-[#191c1e] mb-1">
                    Título de tu Historia o Pregunta
                  </label>
                  <input
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                    placeholder="Ej. Mi experiencia aprendiendo a cuidar mi salud tras el diagnóstico"
                    className="w-full px-3.5 py-2 text-[13px] rounded-lg border border-[#dcc0c0] bg-[#f8f9fb] focus:bg-white focus:outline-none focus:border-[#5b0617]"
                  />
                </div>

                {/* Contenido */}
                <div>
                  <label className="block text-[12.5px] font-bold text-[#191c1e] mb-1">
                    Comparte tu Vivencia o Reflexión
                  </label>
                  <textarea
                    required
                    rows="5"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    placeholder="Escribe tu historia aquí. Recuerda mantener un tono constructivo y no incluir datos médicos sensibles ajenos..."
                    className="w-full px-3.5 py-2.5 text-[13px] rounded-lg border border-[#dcc0c0] bg-[#f8f9fb] focus:bg-white focus:outline-none focus:border-[#5b0617] resize-none"
                  ></textarea>
                </div>

                {/* Compromiso Ético y Ley 29733 */}
                <div className="p-3 bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl text-[11.5px] text-[#564242] space-y-2">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="mt-0.5 rounded accent-[#5b0617]"
                    />
                    <span>
                      Acepto el <strong>Compromiso Ético</strong> del foro y entiendo que este espacio es de apoyo mutuo y divulgación, no de asesoría médica vinculante (Ley N° 29733).
                    </span>
                  </label>
                </div>

                {/* Botones de Acción */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-[13px] font-bold text-[#564242] hover:bg-[#f3f4f6] rounded-lg transition-colors cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-[#5b0617] hover:opacity-90 text-white px-6 py-2.5 rounded-lg font-bold text-[13px] transition-all shadow-sm cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    Publicar Historia
                  </button>
                </div>

              </form>

            </div>
          </div>
        )}

      </main>
    </>
  );
}