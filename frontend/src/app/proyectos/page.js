"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ProyectosPage() {
  const [activeFilter, setActiveFilter] = useState('todos');

  const projects = [
    {
      title: "Vigilancia Molecular y Filogenia de Cepas de HTLV-1/2 en América del Sur",
      node: "IMTAvH - UPCH (Perú) / Imperial College London (UK)",
      category: "epidemiologia",
      status: "Activo (2024-2027)",
      desc: "Secuenciación genómica profunda para mapear la diversidad de subtipos de HTLV-1a y su correlación con la tasa de progresión a patología neurológica en poblaciones andinas y amazónicas.",
      funding: "Financiamiento Internacional Concursable"
    },
    {
      title: "Ensayo Clínico Piloto en Terapias Dirigidas para HAM/TSP",
      node: "St. Marianna University (Japón) / UPCH (Perú)",
      category: "clinica",
      status: "Activo (Fase II)",
      desc: "Evaluación de la seguridad y respuesta de biomarcadores en pacientes con paraparesia espástica tratados con nuevas moléculas inmunomoduladoras y seguimiento motor cuantitativo.",
      funding: "Consorcio Japón - América Latina"
    },
    {
      title: "Interacción Inmunológica y Coinfección: HTLV-1, Tuberculosis y Estrongiloidiasis",
      node: "Fiocruz (Brasil) / UPCH (Perú)",
      category: "inmunologia",
      status: "Activo",
      desc: "Estudio de las alteraciones en la respuesta de citoquinas Th1/Th2 en portadores de HTLV-1 que desarrollan tuberculosis activa o estrongiloidiasis diseminada en focos endémicos.",
      funding: "Fondos de Cooperación Sur-Sur"
    },
    {
      title: "Estandarización de Algoritmos de Tamizaje Prenatal y Lactancia Segura",
      node: "Red RIII-HTLV Multicéntrico",
      category: "salud-publica",
      status: "En Implementación",
      desc: "Validación de protocolos costo-efectivos para la detección de HTLV-1 en gestantes de primer nivel de atención y evaluación del impacto en la eliminación de la transmisión vertical.",
      funding: "Iniciativa de Salud Pública RIII-HTLV"
    }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <main className="w-full bg-[#f8f9fb] min-h-screen py-10 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        
        {/* Cabecera Principal */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <span className="px-3 py-1 bg-[#ffdada] text-[#5b0617] text-[12px] font-black uppercase tracking-widest rounded-full inline-block">
            Investigación & Desarrollo
          </span>
          <h1 className="text-[34px] sm:text-[46px] font-black text-[#191c1e] tracking-tight leading-tight">
            Proyectos de la Red RIII-HTLV
          </h1>
          <p className="text-[17px] text-[#564242] leading-relaxed max-w-3xl mx-auto">
            Iniciativas multicéntricas impulsadas por los centros miembros para generar evidencia de vanguardia, ensayos clínicos y soluciones de salud pública.
          </p>

          {/* Filtros */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {[
              { id: 'todos', label: 'Todos los Proyectos' },
              { id: 'epidemiologia', label: 'Epidemiología & Genómica' },
              { id: 'clinica', label: 'Ensayos Clínicos' },
              { id: 'inmunologia', label: 'Inmunología & Coinfección' },
              { id: 'salud-publica', label: 'Salud Pública' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-[13px] font-bold transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#5b0617] text-white shadow-xs'
                    : 'bg-white border border-[#dcc0c0] text-[#564242] hover:bg-[#ffdada]/30'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Listado de Proyectos */}
          <div className="space-y-5">
            {filteredProjects.map((proj, idx) => (
              <div 
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#dcc0c0] shadow-xs space-y-3 hover:border-[#5b0617] transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 bg-[#ffdada] text-[#5b0617] text-[11px] font-bold rounded-md">
                    {proj.status}
                  </span>
                  <span className="text-[12px] font-semibold text-[#897172]">
                    {proj.funding}
                  </span>
                </div>

                <h2 className="text-[20px] font-bold text-[#191c1e]">
                  {proj.title}
                </h2>

                <p className="text-[13px] font-bold text-[#5b0617]">
                  Nodo Responsable: {proj.node}
                </p>

                <p className="text-[14px] text-[#564242] leading-relaxed">
                  {proj.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Sección Especial: Acreditación y Cartas de Colaboración (Mencionada en la reunión) */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border-2 border-[#5b0617]/20 shadow-xs space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#ffdada] text-[#5b0617] flex items-center justify-center font-bold text-2xl flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">verified_user</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-[22px] font-bold text-[#191c1e]">
                  Acreditación de Colaboración de la Red en Proyectos
                </h3>
                <p className="text-[14px] text-[#564242] leading-relaxed">
                  ¿Es investigador de una institución miembro o asociada y va a postular a fondos concursables (como Fondecyt, Wellcome Trust, NIH, Horizon Europe)?
                </p>
              </div>
            </div>

            <p className="text-[14px] text-[#564242] leading-relaxed">
              La coordinación general de la <strong>RIII-HTLV</strong> emite cartas formales de respaldo institucional y acreditación de participación en la red para proyectos científicos que se alineen con nuestros objetivos prioritarios.
            </p>

            <div className="p-4 bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-[13px] text-[#564242]">
                <strong>Requisitos:</strong> Resumen del protocolo (abstract), investigadores participantes y mención del nodo de la Red involucrado.
              </div>
              <Link
                href="/contact"
                className="bg-[#5b0617] text-white px-5 py-2.5 rounded-xl text-[13px] font-bold hover:opacity-90 transition-all flex items-center gap-1.5 flex-shrink-0"
              >
                <span className="material-symbols-outlined text-[16px]">mail</span>
                <span>Solicitar Carta de Colaboración</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
