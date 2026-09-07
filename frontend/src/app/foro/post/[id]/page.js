import Link from 'next/link';

export default async function ForumPostDetailPage({ params }) {
  // Desempaquetamos la promesa del identificador de la URL
  const { id } = await params;

  const CONVERSATION_STREAM = [
    { id: 1, user: "Sara J.", role: "Defensora del Paciente", text: "Abro este hilo para enfatizar la importancia de establecer límites en la carga de trabajo diaria al manejar la fatiga de base.", time: "hace 2 horas", isAuthor: true },
    { id: 2, user: "Dr. Thorne", role: "Consultor Clínico", text: "Absolutamente, Sara. Los datos de monitoreo clínico indican que manejar los umbrales de estrés físico se correlaciona directamente con la estabilización de los parámetros provirales.", time: "hace 1 hora", isAuthor: false }
  ];

  return (
    <>
      <main className="pt-12 max-w-[1000px] mx-auto px-6 pb-20">
        
        {/* Stream of posts */}
        <div className="space-y-6">
          {CONVERSATION_STREAM.map((post) => (
            <article 
              key={post.id} 
              className={`p-6 bg-white border rounded-xl shadow-sm transition-all ${
                post.isAuthor ? 'border-l-4 border-l-[#5b0617]' : 'border-[#dcc0c0]'
              }`}
            >
              <header className="flex justify-between items-center border-b border-[#f3f4f6] pb-3 mb-4 text-[13px]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#191c1e]">{post.user}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    post.isAuthor ? 'bg-[#ffdada] text-[#5b0617]' : 'bg-[#f3f4f6] text-[#564242]'
                  }`}>
                    {post.role}
                  </span>
                </div>
                <span className="text-[#564242] font-medium">{post.time}</span>
              </header>
              <p className="text-[15px] leading-[24px] text-[#564242] whitespace-pre-line">
                {post.text}
              </p>
            </article>
          ))}
        </div>

        {/* Input Interactive Form Box for Safe Response */}
        <div className="mt-8 bg-white border border-[#dcc0c0] rounded-xl p-6 shadow-sm">
          <h4 className="text-[14px] font-bold text-[#191c1e] mb-3">Únete a esta conversación segura</h4>
          <textarea 
            rows="4" 
            className="w-full bg-[#f8f9fb] border border-[#dcc0c0] rounded-lg p-3 text-[14px] text-[#191c1e] placeholder-[#564242]/50 focus:outline-none focus:border-[#5b0617] resize-none"
            placeholder="Contribuye con empatía y conciencia clínica..."
          ></textarea>
          <div className="flex justify-between items-center mt-4">
            <span className="text-[11px] text-[#564242] font-medium italic">Nodo de Referencia ID: #{id}</span>
            <button className="bg-[#5b0617] text-white px-5 py-2 rounded-lg text-[13px] font-bold hover:opacity-90 shadow-sm">
              Publicar Respuesta Segura
            </button>
          </div>
        </div>

      </main>
    </>
  );
}