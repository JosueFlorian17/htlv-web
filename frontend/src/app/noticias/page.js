"use client";

import { useState } from 'react';
import Link from 'next/link';

const NOTICIAS_MOCK = [
  {
    id: 1,
    titulo: "Análisis de Redes Neuronales Convolucionales en la Detección Médica",
    segmento: "publicaciones",
    resumen: "Un estudio exhaustivo sobre la optimización de capas en arquitecturas CNN para agilizar el diagnóstico temprano por imágenes.",
    autor: "Dr. Aris Vidal",
    fecha: "28 Jun 2026",
    lectura: "5 min"
  },
  {
    id: 2,
    titulo: "Desarrollo de un Sistema de Gestión de Aguas usando IoT en Callao",
    segmento: "tesis",
    resumen: "Tesis de pregrado enfocada en mitigar el desperdicio de recursos hídricos en zonas urbanas críticas mediante sensores de flujo automatizados.",
    autor: "Ing. Bach. Luis Alfaro",
    fecha: "25 Jun 2026",
    lectura: "12 min"
  },
  {
    id: 3,
    titulo: "Convocatoria: Becas de Postgrado en Ciencias de la Computación 2026",
    segmento: "oportunidades",
    resumen: "La fundación científica abre el proceso de postulación anual para maestrías y doctorados con financiamiento completo.",
    autor: "Secretaría Académica",
    fecha: "29 Jun 2026",
    lectura: "3 min"
  }
];

export default function NoticiasFeedPage() {
  const [filtro, setFiltro] = useState('todos');

  const noticiasFiltradas = filtro === 'todos' 
    ? NOTICIAS_MOCK 
    : NOTICIAS_MOCK.filter(n => n.segmento === filtro);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Encabezado */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-950 tracking-tight">Portal Académico & Científico</h1>
        <p className="text-gray-500 mt-1">Explora los últimos aportes de la comunidad, investigaciones de grado y convocatorias vigentes.</p>
      </div>

      {/* Barra de Filtros por Segmento */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
        {['todos', 'publicaciones', 'tesis', 'oportunidades'].map((seg) => (
          <button
            key={seg}
            onClick={() => setFiltro(seg)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              filtro === seg 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {seg}
          </button>
        ))}
      </div>

      {/* Rejilla de Artículos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {noticiasFiltradas.map((item) => (
          <article key={item.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md mb-4 ${
                item.segmento === 'publicaciones' ? 'bg-purple-50 text-purple-600' :
                item.segmento === 'tesis' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'
              }`}>
                {item.segmento}
              </span>
              <h2 className="text-xl font-bold text-gray-900 leading-snug mb-2 hover:text-blue-600 transition-colors">
                <Link href={`/noticias/${item.id}`}>{item.titulo}</Link>
              </h2>
              <p className="text-gray-500 text-sm line-clamp-3 mb-6">{item.resumen}</p>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-50 text-xs text-gray-400">
              <div>
                Por <strong className="text-gray-700 font-medium">{item.autor}</strong>
                <span className="block mt-0.5">{item.fecha}</span>
              </div>
              <span>{item.lectura} de lectura</span>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}