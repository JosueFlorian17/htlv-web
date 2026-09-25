"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useContent } from '../../context/ContentContext';

export default function EditorMasterPage() {
  const {
    content,
    updateText,
    resetAllContent,
    downloadExcel,
    saveStatus,
    lastSavedTime
  } = useContent();

  const [selectedSection, setSelectedSection] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL'); // 'ALL' | 'MODIFIED' | 'PENDING'

  // Sections List
  const sections = [
    { id: 'ALL', name: 'Todas las Secciones' },
    { id: '01_INICIO', name: '01. Inicio / Home' },
    { id: '02_ACERCA_DE_HTLV', name: '02. Acerca de HTLV' },
    { id: '03_RED_CONSORCIO', name: '03. Red y Miembros' },
    { id: '04_INVESTIGACION', name: '04. Investigación' },
    { id: '05_RECURSOS_MULTIMEDIA', name: '05. Recursos & Media' },
    { id: '06_OPORTUNIDADES', name: '06. Oportunidades' },
    { id: '07_CONTACTO_Y_LEGAL', name: '07. Contacto & Legal' }
  ];

  // List of items
  const items = useMemo(() => {
    return Object.values(content).filter((item) => {
      // Section filter
      if (selectedSection !== 'ALL' && item.section !== selectedSection) {
        return false;
      }
      // Status filter
      const isModified = item.currentValue && item.currentValue !== item.defaultValue;
      if (statusFilter === 'MODIFIED' && !isModified) return false;
      if (statusFilter === 'PENDING' && isModified) return false;

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inId = (item.id || '').toLowerCase().includes(q);
        const inLabel = (item.label || '').toLowerCase().includes(q);
        const inVal = (item.currentValue || '').toLowerCase().includes(q);
        const inDef = (item.defaultValue || '').toLowerCase().includes(q);
        return inId || inLabel || inVal || inDef;
      }
      return true;
    });
  }, [content, selectedSection, statusFilter, searchQuery]);

  // Total stats
  const totalCount = Object.keys(content).length;
  const modifiedCount = Object.values(content).filter(
    (item) => item.currentValue && item.currentValue !== item.defaultValue
  ).length;
  const progressPercent = totalCount > 0 ? Math.round((modifiedCount / totalCount) * 100) : 0;

  return (
    <main className="min-h-screen bg-[#f8f9fb] py-10 px-4 md:px-8 max-w-[1500px] mx-auto">
      {/* Cabecera del Panel Editorial */}
      <header className="bg-white rounded-3xl border border-[#dcc0c0] p-6 md:p-8 shadow-xs mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-0.5 bg-[#5b0617] text-white text-[11px] font-bold uppercase tracking-wider rounded-full">
                Centro de Gestión Editorial CMS
              </span>
              <span className="px-3 py-0.5 bg-[#ffdada] text-[#5b0617] text-[11px] font-bold rounded-full border border-[#dcc0c0]">
                Sincronización en Tiempo Real
              </span>
            </div>
            <h1 className="font-display text-[28px] md:text-[34px] text-[#5b0617] font-bold leading-tight">
              Editor de Contenidos Oficiales y Exportador Excel
            </h1>
            <p className="text-[13.5px] text-[#564242] max-w-3xl leading-relaxed">
              Edita y valida en tiempo real todos los textos de la plataforma web. Cada modificación se almacena de forma instantánea en el código, base de datos local y se refleja en la exportación a Excel.
            </p>
          </div>

          {/* Barra de progreso y acciones rápidas */}
          <div className="bg-[#f8f9fb] p-5 rounded-2xl border border-[#dcc0c0] min-w-[300px] space-y-3">
            <div className="flex justify-between items-center text-[12.5px]">
              <span className="font-bold text-[#191c1e]">Progreso de Textos Oficiales:</span>
              <strong className="text-[#5b0617] font-mono">{modifiedCount} / {totalCount} ({progressPercent}%)</strong>
            </div>
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#5b0617] to-rose-600 transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                onClick={downloadExcel}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-bold text-[12px] shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                Descargar Excel (.xlsx)
              </button>

              <Link
                href="/"
                className="bg-[#1d2b3a] hover:bg-[#2c3e50] text-white px-4 py-2.5 rounded-xl font-bold text-[12px] shadow-sm transition-all flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">visibility</span>
                Ver Web en Vivo
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Barra de Filtros y Búsqueda */}
      <section className="bg-white rounded-2xl border border-[#dcc0c0] p-4 mb-6 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Selector de Secciones */}
        <div className="flex flex-wrap items-center gap-1.5">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setSelectedSection(sec.id)}
              className={`px-3 py-1.5 rounded-xl text-[11.5px] font-bold transition-all cursor-pointer ${
                selectedSection === sec.id
                  ? 'bg-[#5b0617] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-[#564242]'
              }`}
            >
              {sec.name}
            </button>
          ))}
        </div>

        {/* Buscador y Filtro de Estado */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="relative flex-1 sm:w-64">
            <input
              type="text"
              placeholder="Buscar por ID, sección o texto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-[12px] border border-[#dcc0c0] rounded-xl focus:ring-2 focus:ring-[#5b0617] outline-none bg-white text-[#191c1e]"
            />
            <span className="material-symbols-outlined text-[16px] text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2">
              search
            </span>
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-1.5 text-[12px] border border-[#dcc0c0] rounded-xl bg-white text-[#564242] font-semibold outline-none cursor-pointer"
          >
            <option value="ALL">Todos los Estados</option>
            <option value="MODIFIED">Solo Modificados ({modifiedCount})</option>
            <option value="PENDING">Solo Pendientes ({totalCount - modifiedCount})</option>
          </select>
        </div>
      </section>

      {/* Tabla Interactiva de Contenidos (Excel View) */}
      <section className="bg-white rounded-3xl border border-[#dcc0c0] shadow-xs overflow-hidden">
        <div className="p-4 border-b border-[#dcc0c0] bg-[#f8f9fb] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#5b0617] text-[20px]">table_chart</span>
            <h2 className="font-bold text-[15px] text-[#191c1e]">
              Tabla Maestra de Edición ({items.length} campos)
            </h2>
          </div>
          <div className="text-[11.5px] font-mono text-[#897172] flex items-center gap-2">
            {saveStatus === 'saving' && <span className="text-amber-600 animate-pulse">⏳ Guardando cambios...</span>}
            {saveStatus === 'saved' && <span className="text-emerald-600">✓ Cambios guardados {lastSavedTime}</span>}
            {saveStatus === 'idle' && <span>Autoguardado activo</span>}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1d2b3a] text-white text-[11px] uppercase tracking-wider font-bold">
                <th className="p-3.5 w-40 text-center">ID Técnico</th>
                <th className="p-3.5 w-52">Sección / Componente</th>
                <th className="p-3.5 w-72">Texto Actual (Placeholder)</th>
                <th className="p-3.5 min-w-[340px]">Texto Oficial Definitivo (Editable ✍️)</th>
                <th className="p-3.5 w-64">Pautas & Límite</th>
                <th className="p-3.5 w-28 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#dcc0c0]/60 text-[12.5px]">
              {items.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-[#897172]">
                    No se encontraron campos que coincidan con los filtros seleccionados.
                  </td>
                </tr>
              ) : (
                items.map((item) => {
                  const isModified = item.currentValue && item.currentValue !== item.defaultValue;
                  return (
                    <tr
                      key={item.id}
                      className={`hover:bg-slate-50/80 transition-colors ${
                        isModified ? 'bg-amber-50/30' : ''
                      }`}
                    >
                      {/* ID Técnico */}
                      <td className="p-3.5 text-center align-top">
                        <span className="font-mono text-[10.5px] font-bold text-[#555f6f] bg-slate-100 px-2 py-1 rounded border border-slate-200 block">
                          {item.id}
                        </span>
                        <span className="text-[9.5px] text-[#897172] block mt-1">
                          {item.section}
                        </span>
                      </td>

                      {/* Sección / Label */}
                      <td className="p-3.5 align-top font-bold text-[#191c1e]">
                        {item.label}
                      </td>

                      {/* Placeholder Original */}
                      <td className="p-3.5 align-top text-[#564242] text-[11.5px] leading-relaxed bg-slate-50/50">
                        {item.defaultValue}
                      </td>

                      {/* Input / Textarea Editable */}
                      <td className="p-3.5 align-top">
                        <div className="space-y-1">
                          {item.defaultValue.length > 80 || item.maxLength?.includes('palabras') ? (
                            <textarea
                              rows={3}
                              value={item.currentValue}
                              onChange={(e) => updateText(item.id, e.target.value)}
                              className="w-full p-2.5 text-[12.5px] border border-[#dcc0c0] rounded-xl focus:ring-2 focus:ring-[#5b0617] focus:border-transparent outline-none bg-white text-[#191c1e] shadow-xs"
                              placeholder="Escribe el texto oficial aquí..."
                            />
                          ) : (
                            <input
                              type="text"
                              value={item.currentValue}
                              onChange={(e) => updateText(item.id, e.target.value)}
                              className="w-full p-2 text-[12.5px] border border-[#dcc0c0] rounded-xl focus:ring-2 focus:ring-[#5b0617] focus:border-transparent outline-none bg-white text-[#191c1e] shadow-xs"
                              placeholder="Escribe el texto oficial aquí..."
                            />
                          )}

                          <div className="flex justify-between items-center text-[10.5px] text-[#897172]">
                            <span>
                              {isModified ? (
                                <strong className="text-amber-600">● Modificado</strong>
                              ) : (
                                <span className="text-slate-400">○ Sin modificar</span>
                              )}
                            </span>
                            <span>
                              Caracteres: <strong className="text-[#5b0617]">{item.currentValue?.length || 0}</strong>
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Pautas y Recomendaciones */}
                      <td className="p-3.5 align-top text-[11.5px] space-y-1">
                        <p className="text-[#2c3e50] italic leading-tight">
                          💡 {item.guidelines}
                        </p>
                        <div className="text-[10.5px] font-bold text-[#5b0617] bg-[#ffdada]/60 px-2 py-0.5 rounded inline-block">
                          Límite: {item.maxLength}
                        </div>
                      </td>

                      {/* Acciones */}
                      <td className="p-3.5 align-top text-center">
                        {isModified && (
                          <button
                            onClick={() => updateText(item.id, item.defaultValue, 'Pendiente')}
                            className="text-[10.5px] text-rose-600 hover:text-rose-800 hover:underline cursor-pointer block mx-auto"
                            title="Revertir a valor por defecto"
                          >
                            Revertir
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Botón inferior de exportación */}
      <footer className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-6 rounded-2xl border border-[#dcc0c0] shadow-xs">
        <div className="text-[12.5px] text-[#564242]">
          <strong className="text-[#5b0617]">Nota:</strong> Todos los cambios se guardan automáticamente. Puedes descargar el archivo Excel completo en cualquier momento.
        </div>
        <div className="flex gap-3">
          <button
            onClick={resetAllContent}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[12px] rounded-xl transition-all cursor-pointer"
          >
            Restablecer Todo
          </button>
          <button
            onClick={downloadExcel}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[13px] rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            Descargar Excel Completo (.xlsx)
          </button>
        </div>
      </footer>
    </main>
  );
}
