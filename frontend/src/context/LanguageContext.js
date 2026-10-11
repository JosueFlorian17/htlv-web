"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({
  lang: 'es',
  setLang: () => {},
  t: (key) => key
});

export const translations = {
  es: {
    // Header & Nav
    nav_about: "Acerca de",
    nav_htlv: "HTLV",
    nav_projects: "Proyectos",
    nav_professionals: "Profesionales de la salud",
    nav_patients: "Pacientes",
    nav_publications: "Publicaciones",
    nav_contact: "Contacto",
    
    // Home
    home_title: "¿Qué es la Red RIII-HTLV?",
    home_desc: "Es la Red Internacional de Investigación e Innovación en HTLV, una alianza científica global para el desarrollo de evidencia de calidad, diagnóstico oportuno y terapias para la transformación de la salud en poblaciones afectadas por HTLV-1 y HTLV-2.",
    home_bullet1: "Investiga sobre la virología molecular, epidemiología y patogénesis del HTLV.",
    home_bullet2: "Promueve sinergias clínicas multicéntricas en Paraparesia Espástica Tropical (HAM/TSP) y Leucemia/Linfoma (ATL).",
    home_bullet3: "Estandariza protocolos de diagnóstico oportuno, carga proviral y prevención de la transmisión vertical.",
    home_bullet4: "Fortalece las capacidades regionales y orienta con evidencia científica a los tomadores de decisiones y a la comunidad.",
    home_btn_htlv: "¿Qué es el HTLV?",
    home_btn_patients: "Espacio para Pacientes",
    home_btn_members: "Ver Estructura de la Red",
    home_members_title: "Instituciones Miembros de la Red",
    home_quick_access: "Acceso Rápido",

    // About
    about_title: "Acerca de la Red RIII-HTLV",
    about_subtitle: "Estructura organizativa, comités, investigadores y documentos institucionales.",
    about_tab_structure: "Estructura Organizativa",
    about_tab_members: "Integrantes del Equipo",
    about_tab_objectives: "Misión & Objetivos",
    about_tab_docs: "Reglamento & Convenio",
    structure_hint: "Para conocer más sobre cada uno, haga clic sobre los diferentes cuadros:",
    btn_view_more: "Ver más",
    btn_close: "Cerrar",

    // HTLV
    htlv_title: "Virus Linfotrópico de Células T Humanas (HTLV)",
    htlv_subtitle: "Todo lo que necesitas saber sobre el HTLV de un vistazo interactivo.",
    htlv_tab_what: "¿Qué es el virus?",
    htlv_tab_types: "Tipos (HTLV-1 vs 2)",
    htlv_tab_spectrum: "Espectro (90/10)",
    htlv_tab_transmission: "Vías de Transmisión",
    htlv_tab_faqs: "Preguntas Frecuentes",

    // Publications
    pub_title: "Publicaciones Científicas",
    pub_subtitle: "Artículos indexados elaborados por investigadores de la Red RIII-HTLV.",
    pub_view_abstract: "Ver Resumen",
    pub_hide_abstract: "Cerrar",
    pub_search_placeholder: "Buscar por autor, título o año...",

    // Common
    visit_web: "Visitar sitio oficial",
    coordinator_node: "Coordinación Central: IMTAvH • UPCH (Lima, Perú)"
  },
  en: {
    // Header & Nav
    nav_about: "About",
    nav_htlv: "HTLV",
    nav_projects: "Projects",
    nav_professionals: "Health Professionals",
    nav_patients: "Patients",
    nav_publications: "Publications",
    nav_contact: "Contact",

    // Home
    home_title: "What is the RIII-HTLV Network?",
    home_desc: "It is the International Research and Innovation Network on HTLV, a global scientific alliance dedicated to generating quality evidence, early diagnosis, and therapeutic solutions for healthcare transformation in populations affected by HTLV-1 and HTLV-2.",
    home_bullet1: "Conducts cutting-edge research into HTLV molecular virology, epidemiology, and pathogenesis.",
    home_bullet2: "Promotes multicenter clinical synergies in Tropical Spastic Paraparesis (HAM/TSP) and Adult T-cell Leukemia (ATL).",
    home_bullet3: "Standardizes protocols for early diagnosis, proviral load quantification, and prevention of mother-to-child transmission.",
    home_bullet4: "Empowers regional health capacity and provides scientific evidence to policymakers, clinicians, and the community.",
    home_btn_htlv: "What is HTLV?",
    home_btn_patients: "Patient Space",
    home_btn_members: "View Network Structure",
    home_members_title: "Member Institutions",
    home_quick_access: "Quick Access",

    // About
    about_title: "About RIII-HTLV Network",
    about_subtitle: "Organizational structure, committees, team members, and institutional agreements.",
    about_tab_structure: "Organizational Structure",
    about_tab_members: "Team & Investigators",
    about_tab_objectives: "Mission & Objectives",
    about_tab_docs: "Bylaws & Agreement",
    structure_hint: "To learn more about each component, click on the boxes below:",
    btn_view_more: "Learn more",
    btn_close: "Close",

    // HTLV
    htlv_title: "Human T-cell Lymphotropic Virus (HTLV)",
    htlv_subtitle: "Everything you need to know about HTLV in an interactive glance.",
    htlv_tab_what: "What is the virus?",
    htlv_tab_types: "Types (HTLV-1 vs 2)",
    htlv_tab_spectrum: "Spectrum (90/10)",
    htlv_tab_transmission: "Transmission Routes",
    htlv_tab_faqs: "Frequently Asked Questions",

    // Publications
    pub_title: "Scientific Publications",
    pub_subtitle: "Peer-reviewed indexed papers authored by RIII-HTLV researchers.",
    pub_view_abstract: "View Abstract",
    pub_hide_abstract: "Close",
    pub_search_placeholder: "Search by author, title, or year...",

    // Common
    visit_web: "Visit official website",
    coordinator_node: "Central Coordination: IMTAvH • UPCH (Lima, Peru)"
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');

  useEffect(() => {
    const saved = localStorage.getItem('riii_lang');
    if (saved && (saved === 'es' || saved === 'en')) {
      setLang(saved);
    }
  }, []);

  const handleSetLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('riii_lang', newLang);
  };

  const t = (key) => {
    return translations[lang]?.[key] || translations['es']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
