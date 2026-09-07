"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ScientificRepositoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('Todos los años');
  const [activeArea, setActiveArea] = useState('Virología');
  const [sortBy, setSortBy] = useState('Relevancia');
  
  // Estado para los checkboxes del tipo de documento
  const [docTypes, setDocTypes] = useState({
    journal: true,
    thesis: false,
    conference: false,
    guidelines: false,
    dataset: false
  });

  const handleCheckboxChange = (type) => {
    setDocTypes({ ...docTypes, [type]: !docTypes[type] });
  };

  const clearFilters = () => {
    setSearchQuery('');
    setActiveArea('Virología');
    setSelectedYear('Todos los años');
    setSortBy('Relevancia');
    setDocTypes({
      journal: false,
      thesis: false,
      conference: false,
      guidelines: false,
      dataset: false
    });
  };

  return (
    <>
      {/* 2. HERO SECTION: SEARCH BAR */}
      <section className="bg-surface-container-low border-b border-outline-variant py-16 w-full">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-label-sm uppercase tracking-wider rounded-full mb-4">Portal de Búsqueda</span>
          <h1 className="font-display text-display text-primary mb-6">Repositorio Científico</h1>
          <div className="relative group max-w-4xl mx-auto">
            <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-on-surface-variant text-[24px]">search</span>
            <input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-outline-variant rounded-full py-5 pl-16 pr-32 text-body-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm" 
              placeholder="Buscar publicaciones, tesis, conjuntos de datos y ensayos clínicos..." 
              type="text" 
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
              <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md hover:opacity-90 active:scale-95 transition-all shadow-sm cursor-pointer">Buscar</button>
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-4 text-label-sm text-on-surface-variant">
            <span>Tendencias: <i className="not-italic text-primary hover:underline cursor-pointer">Patogénesis de HTLV-1</i></span>
            <span>•</span>
            <span><i className="not-italic text-primary hover:underline cursor-pointer">Evolución de Retrovirus</i></span>
            <span>•</span>
            <span><i className="not-italic text-primary hover:underline cursor-pointer">Epidemiología 2024</i></span>
          </div>
        </div>
      </section>

      {/* 3. MAIN CONTENT AREA: SIDEBAR + RESULTS */}
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col lg:flex-row gap-12">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          <div className="sticky top-28 space-y-10 pr-2">
            {/* Year Filter */}
            <div className="space-y-4">
              <h3 className="font-label-md text-primary uppercase tracking-wider">Año de Publicación</h3>
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full bg-white border border-outline-variant rounded-lg p-3 text-body-md focus:border-primary focus:ring-0 focus:outline-none cursor-pointer"
              >
                <option>Todos los años</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020 y anteriores</option>
              </select>
            </div>

            {/* Research Area Tags */}
            <div className="space-y-4">
              <h3 className="font-label-md text-primary uppercase tracking-wider">Área de Investigación</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { en: 'Virology', es: 'Virología' },
                  { en: 'Immunology', es: 'Inmunología' },
                  { en: 'Clinical', es: 'Clínica' },
                  { en: 'Epidemiology', es: 'Epidemiología' },
                  { en: 'Neurology', es: 'Neurología' },
                  { en: 'Public Health', es: 'Salud Pública' }
                ].map((area) => (
                  <button 
                    key={area.en}
                    onClick={() => setActiveArea(area.es)}
                    className={`px-3 py-1.5 rounded-full text-label-sm font-semibold transition-all cursor-pointer ${
                      activeArea === area.es 
                        ? 'bg-primary text-on-primary shadow-sm' 
                        : 'border border-outline-variant text-on-surface-variant hover:border-primary'
                    }`}
                  >
                    {area.es}
                  </button>
                ))}
              </div>
            </div>

            {/* Document Type Checkboxes */}
            <div className="space-y-4">
              <h3 className="font-label-md text-primary uppercase tracking-wider">Tipo de Documento</h3>
              <div className="space-y-3">
                {[
                  { id: 'journal', label: 'Revista con Revisión por Pares' },
                  { id: 'thesis', label: 'Tesis Doctoral' },
                  { id: 'conference', label: 'Artículo de Conferencia' },
                  { id: 'guidelines', label: 'Directrices Clínicas' },
                  { id: 'dataset', label: 'Conjunto de Datos' }
                ].map((type) => (
                  <label key={type.id} className="flex items-center gap-3 cursor-pointer group select-none">
                    <input 
                      checked={docTypes[type.id]}
                      onChange={() => handleCheckboxChange(type.id)}
                      className="rounded border-outline-variant text-primary focus:ring-primary w-5 h-5 accent-primary cursor-pointer"
                      type="checkbox" 
                    />
                    <span className="text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">{type.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <button 
              onClick={clearFilters}
              className="w-full py-3 border border-primary text-primary font-label-md rounded-lg hover:bg-primary-fixed transition-colors cursor-pointer"
            >
              Limpiar todos los filtros
            </button>
          </div>
        </aside>

        {/* Search Results */}
        <section className="flex-grow space-y-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-on-surface-variant font-label-md">Mostrando 1,284 resultados para <span className="text-on-surface font-bold">"HTLV-1"</span></p>
            <div className="flex items-center gap-2">
              <span className="text-label-sm text-on-surface-variant">Ordenar por:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none text-label-md font-bold text-primary focus:ring-0 p-0 pr-6 focus:outline-none cursor-pointer"
              >
                <option value="Relevancia">Relevancia</option>
                <option value="Newest First">Más recientes primero</option>
                <option value="Oldest First">Más antiguos primero</option>
                <option value="Most Cited">Más citados</option>
              </select>
            </div>
          </div>

          {/* Result Card 1 */}
          <article className="bg-white border border-outline-variant rounded-xl p-8 hover:shadow-sm transition-all group">
            <div className="flex justify-between items-start gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded text-label-sm uppercase tracking-tighter">Publicación</span>
                  <span className="text-on-surface-variant text-label-sm">• 12 de mar, 2024</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors cursor-pointer">
                  Análisis genómico de variantes de HTLV-1 en África subsahariana: implicaciones para el desarrollo de vacunas
                </h2>
                <p className="text-on-surface-variant font-body-md">
                  <span className="font-bold text-[#191c1e]">Autores:</span> Dra. Sarah Jenkins, Prof. Liam Okonjo, Dra. Maria Silva, et al.
                </p>
                <p className="text-on-surface-variant font-body-md italic">
                  Revista Internacional de Investigación de Retrovirus, Vol. 45, Edición 3.
                </p>
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2 rounded-lg font-label-md hover:opacity-90 transition-all cursor-pointer shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">download</span>
                    Descargar PDF
                  </button>
                  <button className="flex items-center gap-2 border border-outline-variant text-on-surface px-5 py-2 rounded-lg font-label-md hover:bg-surface-container-low transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-[20px]">link</span>
                    Ver DOI
                  </button>
                  <button className="ml-auto text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                    <span className="material-symbols-outlined">bookmark</span>
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Result Card 2 */}
          <article className="bg-white border border-outline-variant rounded-xl p-8 hover:shadow-sm transition-all group">
            <div className="flex justify-between items-start gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-label-sm uppercase tracking-tighter">Tesis</span>
                  <span className="text-on-surface-variant text-label-sm">• 28 de ene, 2024</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors cursor-pointer">
                  Determinantes socioeconómicos de la transmisión de HTLV-1 en poblaciones migrantes urbanas
                </h2>
                <p className="text-on-surface-variant font-body-md">
                  <span className="font-bold text-[#191c1e]">Autor:</span> Elena Rodríguez, Candidata a PhD
                </p>
                <p className="text-on-surface-variant font-body-md italic">
                  Facultad de Salud Pública, Universidad de São Paulo.
                </p>
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2 rounded-lg font-label-md hover:opacity-90 transition-all cursor-pointer shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">download</span>
                    Descargar PDF (14MB)
                  </button>
                  <button className="flex items-center gap-2 border border-outline-variant text-on-surface px-5 py-2 rounded-lg font-label-md hover:bg-surface-container-low transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                    Enlace al Repositorio
                  </button>
                  <button className="ml-auto text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                    <span className="material-symbols-outlined">bookmark</span>
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Result Card 3 */}
          <article className="bg-white border border-outline-variant rounded-xl p-8 hover:shadow-sm transition-all group">
            <div className="flex justify-between items-start gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded text-label-sm uppercase tracking-tighter">Publicación</span>
                  <span className="text-on-surface-variant text-label-sm">• 05 de dic, 2023</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors cursor-pointer">
                  Resultados clínicos a largo plazo de HAM/TSP: un estudio longitudinal multicéntrico
                </h2>
                <p className="text-on-surface-variant font-body-md">
                  <span className="font-bold text-[#191c1e]">Autores:</span> Prof. Takashi Sato, Dr. Kevin Miller, Dr. Anita Gupta, et al.
                </p>
                <p className="text-on-surface-variant font-body-md italic">
                  Lancet Neurology (Suplemento), Vol. 22.
                </p>
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2 rounded-lg font-label-md hover:opacity-90 transition-all cursor-pointer shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">download</span>
                    Descargar PDF
                  </button>
                  <button className="flex items-center gap-2 border border-outline-variant text-on-surface px-5 py-2 rounded-lg font-label-md hover:bg-surface-container-low transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-[20px]">link</span>
                    Ver DOI
                  </button>
                  <button className="ml-auto text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                    <span className="material-symbols-outlined">bookmark</span>
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Pagination */}
          <div className="pt-12 flex justify-center items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-all cursor-pointer">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold">1</button>
          </div>
        </section>
      </div>
    </>
  );
}