"use client";

import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function PublicacionesPage() {
  const { lang, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [openAbstracts, setOpenAbstracts] = useState({});

  const toggleAbstract = (id) => {
    setOpenAbstracts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const publications = [
    {
      id: 1,
      authors: "Gotuzzo Eduardo, González Elsa, Taylor Graham P., et al.",
      year: "2023",
      title: "Human T-cell lymphotropic virus type 1 (HTLV-1): Clinical spectrum, pathogenesis, and interventions in endemic areas",
      journal: "Lancet Infectious Diseases",
      doi: "10.1016/S1473-3099(23)00112-X",
      abstract: lang === 'es'
        ? "El virus linfotrópico de células T humanas tipo 1 (HTLV-1) continúa siendo un patógeno desatendido a nivel global. Esta revisión exhaustiva consolida la evidencia clínica de más de tres décadas de seguimiento en cohortes latinoamericanas, detallando los factores de riesgo de progresión a mielopatía asociada a HTLV (HAM/TSP) y leucemia de células T del adulto (ATL). Se discuten las estrategias de tamizaje prenatal y la necesidad urgente de políticas globales de salud pública basadas en evidencia sólida."
        : "Human T-cell lymphotropic virus type 1 (HTLV-1) remains a neglected global pathogen. This comprehensive review consolidates clinical evidence from more than three decades of follow-up in Latin American cohorts, detailing risk factors for progression to HTLV-associated myelopathy (HAM/TSP) and adult T-cell leukemia (ATL). Antenatal screening strategies and public health recommendations are discussed."
    },
    {
      id: 2,
      authors: "Taylor Graham P., Yamano Yoshihisa, González Elsa, Gotuzzo Eduardo.",
      year: "2022",
      title: "Proviral load as a prognostic biomarker for HTLV-1-associated myelopathy: A multicenter longitudinal study",
      journal: "Journal of Clinical Virology",
      doi: "10.1016/j.jcv.2022.105180",
      abstract: lang === 'es'
        ? "Evaluación multicéntrica de la cuantificación de la carga proviral de HTLV-1 en células mononucleares de sangre periférica (PBMC) como marcador de riesgo de progresión neurológica. Los resultados confirman que cargas provirales superiores al 10% en PBMC se asocian a un riesgo significativamente mayor de desarrollar síntomas motores y vesicales tempranos en pacientes portadores."
        : "Multicenter evaluation of HTLV-1 proviral load quantification in peripheral blood mononuclear cells (PBMC) as a biomarker for neurological progression. Findings demonstrate that proviral loads exceeding 10% in PBMC are strongly associated with increased risk of developing motor and urological symptoms."
    },
    {
      id: 3,
      authors: "González Elsa, Terashima Angélica, Gotuzzo Eduardo.",
      year: "2023",
      title: "Coinfection with HTLV-1 and Strongyloides stercoralis: Immunological disruption and clinical management",
      journal: "American Journal of Tropical Medicine and Hygiene",
      doi: "10.4269/ajtmh.22-0741",
      abstract: lang === 'es'
        ? "La coinfección entre HTLV-1 y Strongyloides stercoralis induce una polarización inmune desfavorable con disminución de la respuesta mediada por IgE y eosinófilos. El estudio describe los protocolos de tamizaje y esquemas reforzados con ivermectina para prevenir cuadros de hiperinfección y diseminación parasitaria potencialmente fatales en áreas endémicas del Perú."
        : "Coinfection with HTLV-1 and Strongyloides stercoralis induces an adverse immune shift characterized by impaired IgE and eosinophil responses. The study details screening protocols and reinforced ivermectin regimens to prevent life-threatening hyperinfection syndrome in endemic regions."
    },
    {
      id: 4,
      authors: "Kashanchi Fatah, Vicente Ana Carolina, Gotuzzo Eduardo, et al.",
      year: "2024",
      title: "Molecular epidemiology of HTLV-1 in Latin America and the Caribbean: Subtypes, diversity, and origin",
      journal: "Retrovirology",
      doi: "10.1186/s12977-024-00632-1",
      abstract: lang === 'es'
        ? "Análisis genómico filogenético de cepas aisladas en Perú, Brasil, Colombia y el Caribe. Los hallazgos demuestran la predominancia del subtipo cosmopolita (HTLV-1a) subgrupo transcontinental, respaldando hipótesis sobre múltiples introducciones históricas y estabilidad genómica proviral en poblaciones nativas y urbanas."
        : "Genomic phylogenetic analysis of viral strains isolated in Peru, Brazil, Colombia, and the Caribbean. Findings reveal the predominance of the Cosmopolitan subtype (HTLV-1a) Transcontinental subgroup, supporting historical introduction models and proviral genomic stability."
    },
    {
      id: 5,
      authors: "Gessain Antoine, Cassar Olivier, Taylor Graham P.",
      year: "2021",
      title: "Global epidemiology and prevention of Human T-cell Leukemia Virus type 1",
      journal: "Nature Reviews Microbiology",
      doi: "10.1038/s41579-021-00538-3",
      abstract: lang === 'es'
        ? "Revisión global sobre la carga de enfermedad del HTLV-1, con énfasis en el mapeo de áreas hiperendémicas y las intervenciones sanitarias preventivas más costo-efectivas para la eliminación de la transmisión materno-infantil y en bancos de sangre."
        : "Global review addressing the disease burden of HTLV-1, emphasizing hyperendemic cluster mapping and cost-effective health interventions to halt mother-to-child and transfusion transmission."
    }
  ];

  const filtered = publications.filter(p => {
    const term = searchTerm.toLowerCase();
    return (
      p.title.toLowerCase().includes(term) ||
      p.authors.toLowerCase().includes(term) ||
      p.year.includes(term) ||
      p.journal.toLowerCase().includes(term)
    );
  });

  return (
    <main className="w-full bg-white min-h-screen py-10 md:py-16 text-[#191c1e]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Cabecera Estilo QuEST LAC */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-[#003B49]/15">
          <div>
            <span className="text-[13px] font-black uppercase tracking-widest text-[#087E8B] block mb-1">
              {lang === 'es' ? 'Evidencia Científica' : 'Scientific Evidence'}
            </span>
            <h1 className="text-[36px] sm:text-[46px] font-black text-[#003B49] tracking-tight leading-none">
              {lang === 'es' ? 'Publicaciones' : 'Publications'}
            </h1>
            <p className="text-[17px] text-gray-600 mt-2">
              {lang === 'es' ? 'Artículos indexados elaborados por miembros de la Red RIII-HTLV.' : 'Peer-reviewed articles authored by members of the RIII-HTLV Network.'}
            </p>
          </div>

          {/* Buscador Simple */}
          <div className="w-full md:w-80">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400">search</span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={lang === 'es' ? "Buscar por autor, título o año..." : "Search by author, title or year..."}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#087E8B] focus:outline-none text-[15px]"
              />
            </div>
          </div>
        </div>

        {/* Listado de Artículos (Fiel a QuEST LAC) */}
        <div className="divide-y divide-gray-200 py-4">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-gray-500 text-[16px]">
              {lang === 'es' ? 'No se encontraron publicaciones.' : 'No publications found.'}
            </div>
          ) : (
            filtered.map((pub) => {
              const isOpen = !!openAbstracts[pub.id];
              const doiUrl = `https://doi.org/${pub.doi}`;

              return (
                <div key={pub.id} className="py-7 space-y-2">
                  
                  {/* Autores */}
                  <p className="text-[15px] font-medium text-gray-600">
                    {pub.authors}
                  </p>

                  {/* [Año] Título del Artículo como HIPERVÍNCULO directo al DOI */}
                  <h3 className="text-[18px] sm:text-[20px] font-black leading-snug">
                    <span className="text-[#A10D3A]">[{pub.year}]</span>{' '}
                    <a
                      href={doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#003B49] hover:text-[#087E8B] hover:underline transition-colors"
                      title={lang === 'es' ? "Abrir publicación oficial en DOI" : "Open official DOI publication"}
                    >
                      {pub.title}
                    </a>
                  </h3>

                  {/* Botón: Solo texto MOSTAZA (#E5A400), SIN FONDO, resaltado en negrita con flecha arriba/abajo */}
                  <div className="pt-1">
                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="inline-flex items-center gap-1 text-[15px] font-black text-[#E5A400] hover:text-[#c48d00] transition-colors cursor-pointer bg-transparent p-0 border-0 focus:outline-none"
                    >
                      <span>{lang === 'es' ? 'Resumen' : 'Abstract'}</span>
                      <span className="material-symbols-outlined text-[19px] leading-none transition-transform">
                        {isOpen ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>
                  </div>

                  {/* Cuadro Desplegable de Resumen (Solo enlace al DOI) */}
                  {isOpen && (
                    <div className="mt-4 p-6 bg-[#fffbf0] border-l-4 border-[#E5A400] rounded-r-2xl shadow-xs space-y-4 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-[12.5px] font-black uppercase tracking-wider text-[#b38000]">
                          {lang === 'es' ? 'Resumen del Artículo' : 'Article Abstract'} • {pub.journal}
                        </span>
                        <button
                          onClick={() => toggleAbstract(pub.id)}
                          className="text-[13px] font-bold text-[#b38000] hover:underline cursor-pointer"
                        >
                          {lang === 'es' ? 'Cerrar' : 'Close'} [x]
                        </button>
                      </div>

                      <p className="text-[15.5px] text-[#2c2214] leading-relaxed">
                        {pub.abstract}
                      </p>

                      {/* Solo el enlace DOI */}
                      <div className="pt-2 border-t border-[#E5A400]/30 flex items-center text-[14px]">
                        <a
                          href={doiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-[#A10D3A] hover:underline flex items-center gap-1.5"
                        >
                          <span className="material-symbols-outlined text-[17px]">open_in_new</span>
                          <span>DOI: {pub.doi}</span>
                        </a>
                      </div>
                    </div>
                  )}

                </div>
              );
            })
          )}
        </div>

      </div>
    </main>
  );
}
