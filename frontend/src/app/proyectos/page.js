"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

export default function ProyectosPage() {
  const { lang, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('todos');

  const projects = [
    {
      title: lang === 'es' ? "Vigilancia Molecular y Filogenia de Cepas de HTLV-1/2 en América del Sur" : "Molecular Surveillance and Phylogeny of HTLV-1/2 Strains in South America",
      node: "IMTAvH - UPCH (Perú) / Imperial College London (UK)",
      category: "epidemiologia",
      status: lang === 'es' ? "Activo (2024-2027)" : "Active (2024-2027)",
      desc: lang === 'es'
        ? "Secuenciación genómica profunda para mapear la diversidad de subtipos de HTLV-1a y su correlación con la tasa de progresión a patología neurológica en poblaciones andinas y amazónicas."
        : "Deep genomic sequencing to map HTLV-1a subtype diversity and its correlation with neurological progression in Andean and Amazonian populations.",
      funding: lang === 'es' ? "Financiamiento Internacional Concursable" : "Competitive International Grant"
    },
    {
      title: lang === 'es' ? "Ensayo Clínico Piloto en Terapias Dirigidas para HAM/TSP" : "Pilot Clinical Trial on Targeted Therapies for HAM/TSP",
      node: "St. Marianna University (Japón) / UPCH (Perú)",
      category: "clinica",
      status: "Fase II",
      desc: lang === 'es'
        ? "Evaluación de la seguridad y respuesta de biomarcadores en pacientes con paraparesia espástica tratados con nuevas moléculas inmunomoduladoras y seguimiento motor cuantitativo."
        : "Safety and biomarker response assessment in tropical spastic paraparesis patients treated with novel immunomodulatory molecules.",
      funding: "Consorcio Japón - América Latina"
    },
    {
      title: lang === 'es' ? "Interacción Inmunológica y Coinfección: HTLV-1, Tuberculosis y Estrongiloidiasis" : "Immunological Interaction and Coinfection: HTLV-1, Tuberculosis and Strongyloidiasis",
      node: "Fiocruz (Brasil) / UPCH (Perú)",
      category: "inmunologia",
      status: lang === 'es' ? "Activo" : "Active",
      desc: lang === 'es'
        ? "Estudio de las alteraciones en la respuesta de citoquinas en portadores de HTLV-1 que desarrollan tuberculosis activa o estrongiloidiasis diseminada en focos endémicos."
        : "Investigation of cytokine profile alterations in HTLV-1 carriers presenting with active tuberculosis or disseminated strongyloidiasis.",
      funding: "Fondos de Cooperación Sur-Sur"
    }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <main className="w-full bg-[#f8f9fb] min-h-screen py-10 md:py-16 text-[#191c1e]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Cabecera Principal */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="px-3.5 py-1 bg-[#ffdada] text-[#5b0617] text-[13px] font-black uppercase tracking-widest rounded-full inline-block">
            {lang === 'es' ? 'Investigación & Desarrollo' : 'Research & Development'}
          </span>
          <h1 className="text-[34px] sm:text-[46px] font-black text-[#191c1e] tracking-tight leading-tight">
            {lang === 'es' ? 'Proyectos de la Red RIII-HTLV' : 'RIII-HTLV Network Projects'}
          </h1>
          <p className="text-[18px] text-[#443333] leading-relaxed">
            {lang === 'es'
              ? 'Iniciativas multicéntricas impulsadas por los centros miembros para generar evidencia de vanguardia, ensayos clínicos y soluciones de salud pública.'
              : 'Multicenter initiatives driven by member institutions to generate cutting-edge evidence, clinical trials, and public health interventions.'}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          
          {/* Listado de Proyectos con Letras Grandes */}
          <div className="space-y-6">
            {filteredProjects.map((proj, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-3xl border border-[#dcc0c0] shadow-xs space-y-3 hover:border-[#5b0617] transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 bg-[#ffdada] text-[#5b0617] text-[12px] font-extrabold rounded-lg">
                    {proj.status}
                  </span>
                  <span className="text-[13px] font-semibold text-[#897172]">
                    {proj.funding}
                  </span>
                </div>

                <h2 className="text-[21px] font-black text-[#191c1e]">
                  {proj.title}
                </h2>

                <p className="text-[14px] font-bold text-[#5b0617]">
                  {lang === 'es' ? 'Nodo Responsable:' : 'Responsible Node:'} {proj.node}
                </p>

                <p className="text-[16px] text-[#443333] leading-relaxed">
                  {proj.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Solicitud de Carta de Acreditación */}
          <div className="bg-white p-8 rounded-3xl border-2 border-[#5b0617]/20 shadow-xs space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#ffdada] text-[#5b0617] flex items-center justify-center font-bold text-2xl flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">verified_user</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-[22px] font-black text-[#191c1e]">
                  {lang === 'es' ? 'Acreditación de Colaboración de la Red' : 'Network Collaboration Accreditation'}
                </h3>
                <p className="text-[15.5px] text-[#443333] leading-relaxed">
                  {lang === 'es'
                    ? '¿Va a postular a fondos de investigación (NIH, Wellcome Trust, Fondecyt, Horizon Europe)? La coordinación emite cartas formales de respaldo institucional para proyectos alineados a la red.'
                    : 'Applying for research grants (NIH, Wellcome Trust, Fondecyt, Horizon Europe)? Coordination issues official institutional endorsement letters for aligned projects.'}
                </p>
              </div>
            </div>

            <div className="pt-2 text-right">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#5b0617] text-white px-6 py-3 rounded-xl text-[14.5px] font-bold hover:opacity-90 transition-all shadow-xs"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span>{lang === 'es' ? 'Solicitar Carta de Colaboración' : 'Request Collaboration Letter'}</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
