export default async function DetalleNoticiaPage({ params }) {
  // Desempaquetamos de manera asíncrona el id de la URL
  const { id } = await params;

  // En un escenario real, buscaríamos la publicación correspondiente en PostgreSQL usando este ID
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Botón Volver */}
      <a href="/news" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors inline-block mb-6">
        ← Volver a Noticias
      </a>

      {/* Artículo Principal */}
      <article className="bg-white p-8 sm:p-12 rounded-2xl border border-gray-100 shadow-sm">
        <header className="border-b border-gray-100 pb-6 mb-6">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-purple-600 mb-3">
            <span>Noticias</span>
            <span>•</span>
            <span className="text-gray-400">ID del Artículo: {id}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight">
            Investigación y Documentación Científica en Desarrollo
          </h1>
          
          <div className="flex items-center space-x-3 text-sm text-gray-500 mt-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-xs">
              AA
            </div>
            <div>
              <p className="font-medium text-gray-800">Cuerpo de Editores Académicos</p>
              <p className="text-xs text-gray-400">Publicado el 29 de Junio, 2026</p>
            </div>
          </div>
        </header>

        {/* Cuerpo del Artículo */}
        <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed space-y-6 text-base">
          <p>
            El desarrollo científico contemporáneo exige plataformas optimizadas donde los investigadores puedan contrastar datos, compartir el progreso de sus tesis de grado y debatir las metodologías aplicadas sin la distorsión de algoritmos comerciales de recomendación.
          </p>
          <h3 className="text-lg font-bold text-gray-900 pt-2">Metodología y Revisión por Pares</h3>
          <p>
            Cada publicación indexada en este segmento pasa por un filtro de metadatos que garantiza que tanto el planteamiento del problema como las conclusiones preliminares sigan un estándar riguroso. Los usuarios registrados en el foro pueden abrir hilos de réplica vinculados directamente a este identificador documental.
          </p>
          <blockquote>
            "La democratización del conocimiento técnico empieza al simplificar los canales donde la comunidad universitaria debate y expone sus hallazgos."
          </blockquote>
        </div>

        {/* Zona de Vinculación al Foro */}
        <div className="mt-12 bg-blue-50 border border-blue-100 p-6 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h4 className="text-base font-bold text-blue-900">¿Tienes dudas o aportes sobre este artículo?</h4>
            <p className="text-sm text-blue-700 mt-0.5">Existe un hilo de discusión abierto en la sección de debates foro.</p>
          </div>
          <a href="/foro" className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2.5 rounded-lg shadow-sm transition-colors whitespace-nowrap">
            Participar en el Debate
          </a>
        </div>
      </article>
    </main>
  );
}