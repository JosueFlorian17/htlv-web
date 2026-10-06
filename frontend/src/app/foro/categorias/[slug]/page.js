"use client";

import { useState, use } from 'react';
import Link from 'next/link';

export default function ForumCategorySpacePage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const CATEGORY_TITLES = {
    'apoyo-mutuo': 'Apoyo Mutuo y Vivencias',
    'orientacion-faqs': 'Orientación y Preguntas Frecuentes',
    'investigacion': 'Investigación y Ensayos Clínicos',
    'comunidad': 'Comunidad, Talleres y Eventos'
  };

  const title = CATEGORY_TITLES[slug] || (slug ? slug.replace('-', ' ') : 'Espacio Comunitario');

  const CATEGORY_POSTS = [
    { 
      id: "102", 
      title: "Vivir con serenidad tras el diagnóstico de HTLV-1: Mi experiencia de acompañamiento", 
      replies: 14, 
      views: 312, 
      author: "Elena M.", 
      time: "Hace 2 horas",
      excerpt: "Recibir el resultado reactivo de HTLV-1 en una donación de sangre fue un momento de gran incertidumbre..."
    },
    { 
      id: "103", 
      title: "Maternidad segura: Cómo gestionamos la lactancia y el cuidado del recién nacido", 
      replies: 9, 
      views: 185, 
      author: "Rosa V.", 
      time: "Ayer",
      excerpt: "Comparto cómo fue el proceso de tamizaje prenatal y la alimentación con fórmula infantil..."
    },
    { 
      id: "104", 
      title: "Manejo de la actividad física, fisioterapia y bienestar integral en portadores", 
      replies: 22, 
      views: 540, 
      author: "Javier S.", 
      time: "Hace 3 días",
      excerpt: "Recomendaciones prácticas sobre ejercicios de bajo impacto guiados por fisioterapia..."
    }
  ];

  return (
    <>
      <main className="pt-24 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 pb-24 min-h-screen">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[13px] text-[#564242] mb-6">
          <Link href="/foro" className="text-[#5b0617] font-bold hover:underline flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Foro Comunitario
          </Link>
          <span>/</span>
          <span className="text-[#191c1e] font-semibold capitalize">{title}</span>
        </div>

        {/* Category Header Card */}
        <div className="bg-white border border-[#dcc0c0] rounded-2xl p-6 sm:p-8 mb-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-[#5b0617] text-[11px] font-bold uppercase tracking-widest bg-[#ffdada] px-3 py-1 rounded-full inline-block mb-2">
              Espacio Activo
            </span>
            <h1 className="text-[26px] sm:text-[32px] font-bold text-[#191c1e] tracking-tight capitalize">
              {title}
            </h1>
            <p className="text-[13.5px] text-[#564242] mt-1">
              Conversaciones moderadas y experiencias compartidas en este espacio temático.
            </p>
          </div>
          <Link
            href="/foro"
            className="bg-[#5b0617] text-white px-5 py-2.5 rounded-xl text-[13px] font-bold flex items-center gap-2 hover:opacity-90 shadow-sm transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Compartir Historia
          </Link>
        </div>

        {/* List of Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-white border border-[#dcc0c0] rounded-2xl overflow-hidden shadow-xs divide-y divide-[#f0dede]">
            {CATEGORY_POSTS.map((thread) => (
              <Link 
                key={thread.id} 
                href={`/foro/post/${thread.id}`}
                className="p-6 hover:bg-[#f8f9fb] transition-colors flex justify-between items-center gap-4 cursor-pointer block"
              >
                <div>
                  <h3 className="text-[16px] font-bold text-[#191c1e] hover:text-[#5b0617] transition-colors leading-snug">
                    {thread.title}
                  </h3>
                  <p className="text-[13px] text-[#564242] mt-1.5 line-clamp-1">
                    {thread.excerpt}
                  </p>
                  <p className="text-[12px] text-[#897172] mt-2">
                    Iniciado por <strong className="text-[#191c1e] font-semibold">{thread.author}</strong> • {thread.time}
                  </p>
                </div>
                <div className="text-right min-w-[90px] hidden sm:block">
                  <span className="block text-[18px] font-bold text-[#5b0617]">{thread.replies}</span>
                  <span className="text-[10px] uppercase font-bold text-[#897172] tracking-wider">respuestas</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Mini Sidebar Information rules */}
          <div className="lg:col-span-4 bg-white p-6 border border-[#dcc0c0] rounded-2xl shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-[#f0dede] pb-3">
              <span className="material-symbols-outlined text-[#5b0617] text-[20px]">verified_user</span>
              <h4 className="text-[14.5px] font-bold text-[#191c1e]">Pautas de Convivencia</h4>
            </div>
            <p className="text-[12.5px] text-[#564242] leading-relaxed">
              Todas las vivencias dentro de este espacio son moderadas para garantizar un intercambio seguro, empático y libre de desinformación bajo la <strong>Ley N° 29733</strong>.
            </p>
            <div className="pt-2">
              <Link 
                href="/faqs"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#5b0617] hover:underline"
              >
                <span>Preguntas Frecuentes (FAQs)</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}