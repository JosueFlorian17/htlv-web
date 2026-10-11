"use client";

import { useState } from 'react';

export default function PublicacionesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedAbstract, setExpandedAbstract] = useState(null);

  const publications = [
    {
      id: 1,
      title: "Human T-cell lymphotropic virus type 1 (HTLV-1): Clinical spectrum, pathogenesis, and interventions in endemic areas",
      authors: "Gotuzzo E., González E., Taylor G.P., et al.",
      journal: "Lancet Infectious Diseases",
      year: "2023",
      doi: "10.1016/S1473-3099(23)00112-X",
      pubmed: "37201940",
      abstract: "El virus linfotrópico de células T humanas tipo 1 (HTLV-1) continúa siendo un patógeno desatendido a nivel global. Esta revisión exhaustiva consolida la evidencia clínica de más de tres décadas de seguimiento en cohortes latinoamericanas, detallando los factores de riesgo de progresión a mielopatía asociada a HTLV (HAM/TSP) y leucemia de células T del adulto (ATL). Se discuten las estrategias de tamizaje prenatal y la necesidad urgente de políticas globales de salud pública."
    },
    {
      id: 2,
      title: "Proviral load as a prognostic biomarker for HTLV-1-associated myelopathy: A multicenter longitudinal study",
      authors: "Taylor G.P., Yamano Y., González E., Gotuzzo E.",
      journal: "Journal of Clinical Virology",
      year: "2022",
      doi: "10.1016/j.jcv.2022.105180",
      pubmed: "35468512",
      abstract: "Evaluación multicéntrica de la cuantificación de la carga proviral de HTLV-1 en células mononucleares de sangre periférica (PBMC) como marcador de riesgo de progresión neurológica. Los resultados confirman que cargas provirales superiores al 10% en PBMC se asocian a un riesgo significativamente mayor de desarrollar síntomas motores y vesicales tempranos."
    },
    {
      id: 3,
      title: "Coinfection with HTLV-1 and Strongyloides stercoralis: Immunological disruption and clinical management",
      authors: "González E., Terashima A., Gotuzzo E.",
      journal: "American Journal of Tropical Medicine and Hygiene",
      year: "2023",
      doi: "10.4269/ajtmh.22-0741",
      pubmed: "36878411",
      abstract: "La coinfección entre HTLV-1 y Strongyloides stercoralis induce una polarización inmune desfavorable con disminución de la respuesta mediada por IgE y eosinófilos. El estudio describe los protocolos de tamizaje y esquemas reforzados con ivermectina para prevenir cuadros de hiperinfección y diseminación parasitaria potencialmente fatales."
    },
    {
      id: 4,
      title: "Molecular epidemiology of HTLV-1 in Latin America and the Caribbean: Subtypes, diversity, and origin",
      authors: "Kashanchi F., Vicente A.C., Gotuzzo E., et al.",
      journal: "Retrovirology",
      year: "2024",
      doi: "10.1186/s12977-024-00632-1",
      pubmed: "38501249",
      abstract: "Análisis genómico filogenético de cepas aisladas en Perú, Brasil, Colombia y el Caribe. Los hallazgos demuestran la predominancia del subtipo cosmopolita (HTLV-1a) subgrupo transcontinental, respaldando hipótesis sobre múltiples introducciones históricas y estabilidad genómica proviral."
    }
  ];

  const filteredPublications = publications.filter(pub => {
    const q = searchTerm.toLowerCase();
    return (
      pub.title.toLowerCase().includes(q) ||
      pub.authors.toLowerCase().includes(q) ||
      pub.journal.toLowerCase().includes(q) ||
      pub.year.includes(q)
    );
  });

  const toggleAbstract = (id) => {
    setExpandedAbstract(expandedAbstract === id ? null : id);
  };

  return (
    <main className="w-full bg-[#f8f9fb] min-h-screen py-10 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        
        {/* Cabecera Principal */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <span className="px-3 py-1 bg-[#ffdada] text-[#5b0617] text-[12px] font-black uppercase tracking-widest rounded-full inline-block">
            Repositorio Bibliográfico
          </span>
          <h1 className="text-[34px] sm:text-[46px] font-black text-[#191c1e] tracking-tight leading-tight">
            Publicaciones Científicas de la Red
          </h1>
          <p className="text-[17px] text-[#564242] leading-relaxed max-w-3xl mx-auto">
            Listado de artículos indexados en revistas biomédicas internacionales elaborados por investigadores y centros miembros de la Red RIII-HTLV.
          </p>

          {/* Buscador Sencillo */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-3 text-[#897172]">search</span>
              <input
                type="text"
                placeholder="Buscar por título, autor, revista o año..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#dcc0c0] bg-white text-[14px] focus:outline-none focus:border-[#5b0617] shadow-xs"
              />
            </div>
          </div>
        </div>

        {/* Listado de Artículos */}
        <div className="max-w-4xl mx-auto space-y-5">
          {filteredPublications.length === 0 ? (
            <div className="bg-white p-8 rounded-2xl border border-[#dcc0c0] text-center text-[#564242]">
              No se encontraron publicaciones con el término de búsqueda ingresado.
            </div>
          ) : (
            filteredPublications.map(pub => {
              const isExpanded = expandedAbstract === pub.id;
              return (
                <div 
                  key={pub.id}
                  className="bg-white p-7 rounded-2xl border border-[#dcc0c0] shadow-xs space-y-3 hover:border-[#5b0617] transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[12px] font-bold text-[#5b0617] bg-[#ffdada]/60 px-2.5 py-0.5 rounded-md">
                      {pub.journal} • {pub.year}
                    </span>
                    <div className="flex items-center gap-2 text-[12px] text-[#897172]">
                      <span>DOI: {pub.doi}</span>
                    </div>
                  </div>

                  <h2 className="text-[19px] font-bold text-[#191c1e] leading-snug">
                    {pub.title}
                  </h2>

                  <p className="text-[13.5px] font-semibold text-[#564242]">
                    <strong>Cita:</strong> {pub.authors} ({pub.year}). <em>{pub.journal}</em>.
                  </p>

                  {/* Resumen (Abstract) Expandible */}
                  <div className="pt-2">
                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="text-[13px] font-bold text-[#5b0617] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {isExpanded ? 'expand_less' : 'expand_more'}
                      </span>
                      <span>{isExpanded ? 'Ocultar Resumen (Abstract)' : 'Ver Resumen (Abstract)'}</span>
                    </button>

                    {isExpanded && (
                      <div className="mt-3 p-4 bg-[#f8f9fb] border border-[#dcc0c0] rounded-xl text-[13.5px] text-[#564242] leading-relaxed animate-fadeIn">
                        <strong className="block text-[#191c1e] mb-1 font-bold">Resumen:</strong>
                        {pub.abstract}
                      </div>
                    )}
                  </div>

                  {/* Enlaces a PubMed y DOI */}
                  <div className="pt-3 border-t border-[#dcc0c0]/50 flex flex-wrap items-center gap-4 text-[12.5px]">
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5b0617] font-bold hover:underline flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                      <span>Ver artículo en revista (DOI)</span>
                    </a>
                    {pub.pubmed && (
                      <a
                        href={`https://pubmed.ncbi.nlm.nih.gov/${pub.pubmed}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1d2b3a] font-bold hover:underline flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[14px]">link</span>
                        <span>Ficha PubMed ({pub.pubmed})</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </main>
  );
}
