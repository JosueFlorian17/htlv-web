import Link from 'next/link';

export default async function ForumCategorySpacePage({ params }) {
  // Desempaquetamos la promesa de parámetros según las reglas de Next.js 16+
  const { slug } = await params;

  const CATEGORY_POSTS = [
    { id: 201, title: `Actualizaciones clínicas y grupos de apoyo en ${slug}`, replies: 14, views: 245, author: "Dr. Evans", time: "hace 3 horas" },
    { id: 202, title: `Manejo de síntomas base bajo enfoques multidisciplinarios`, replies: 89, views: 1012, author: "Defensora_Sara", time: "Ayer" }
  ];

  return (
    <>
      <main className="pt-12 max-w-[1280px] mx-auto px-10 pb-20">
        
        {/* Category Header Card */}
        <div className="bg-white border border-[#dcc0c0] rounded-2xl p-8 mb-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-[#5b0617] text-[12px] font-bold uppercase tracking-widest">Espacio Activo</span>
            <h1 className="text-[36px] font-bold text-[#191c1e] tracking-tight capitalize mt-1">
              {slug ? slug.replace('-', ' ') : 'Tablero Comunitario'}
            </h1>
          </div>
          <button className="bg-[#5b0617] text-white px-5 py-2.5 rounded-lg text-[14px] font-bold flex items-center gap-2 hover:bg-[#5b0617]/90 shadow-sm transition-colors">
            <span className="material-symbols-outlined text-[18px]">add_comment</span> + Crear Nuevo Hilo
          </button>
        </div>

        {/* Dynamic Bento List Mapping */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-white border border-[#dcc0c0] rounded-xl overflow-hidden shadow-sm divide-y divide-[#dcc0c0]">
            {CATEGORY_POSTS.map((thread) => (
              <div key={thread.id} className="p-6 hover:bg-[#f3f4f6] transition-colors flex justify-between items-center gap-4">
                <div>
                  <Link href={`/foro/post/${thread.id}`} className="text-[17px] font-bold text-[#191c1e] hover:text-[#5b0617] transition-colors block">
                    {thread.title}
                  </Link>
                  <p className="text-[13px] text-[#564242] mt-1">
                    Iniciado por <strong className="text-[#191c1e] font-semibold">{thread.author}</strong> • {thread.time}
                  </p>
                </div>
                <div className="text-right min-w-[80px] hidden sm:block">
                  <span className="block text-[18px] font-bold text-[#5b0617]">{thread.replies}</span>
                  <span className="text-[10px] uppercase font-bold text-[#564242] tracking-wider">respuestas</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mini Sidebar Information rules */}
          <div className="lg:col-span-4 bg-white p-6 border border-[#dcc0c0] rounded-xl shadow-sm space-y-4">
            <h4 className="text-[15px] font-bold border-b border-[#dcc0c0] pb-2">Controles del Espacio</h4>
            <p className="text-[13px] text-[#564242] leading-relaxed">
              Todas las discusiones terapéuticas y clínicas dentro de este nodo son revisadas por nuestros defensores regionales para prevenir afirmaciones médicas no verificadas.
            </p>
          </div>
        </div>

      </main>
    </>
  );
}