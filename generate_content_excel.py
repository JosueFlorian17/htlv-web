import os
import re
import pandas as pd
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

# Lista exhaustiva y categorizada de los textos de la plataforma
# Cada registro contiene:
# - ID: Código único de referencia (ej. HOME-001)
# - Sección / Página: Dónde se ubica en el sitio web
# - Componente / Elemento: Título, Subtítulo, Párrafo, Card, Botón, etc.
# - Función Cumplida (Objetivo UX/Médico): Qué rol cumple este texto para el usuario o profesional
# - Texto Actual / Placeholder: El texto actualmente renderizado en la web
# - Mínimo Caracteres Sugerido: Límite inferior para mantener la armonía del diseño
# - Máximo Caracteres Sugerido: Límite superior para evitar desbordes visuales
# - Texto Real / Propuesta del Profesional: Columna editable en blanco para el experto
# - Observaciones / Criterio Clínico: Guía técnica de redacción

data = [
    # ==========================================
    # 1. HEADER & NAVEGACIÓN GLOBAL
    # ==========================================
    {
        "ID": "NAV-001",
        "Página": "Global / Header",
        "Elemento": "Nombre de la Red (Logo)",
        "Función": "Identidad corporativa principal en la barra superior",
        "Texto Actual": "Red Internacional de Innovación e Investigación en HTLV",
        "Min Caracteres": 40,
        "Max Caracteres": 65,
        "Texto Profesional": "",
        "Observaciones / Guía": "Nombre institucional oficial consensuado por el consorcio."
    },
    {
        "ID": "NAV-002",
        "Página": "Global / Header",
        "Elemento": "Menú: Inicio",
        "Función": "Enlace de navegación a la portada principal",
        "Texto Actual": "Inicio",
        "Min Caracteres": 4,
        "Max Caracteres": 10,
        "Texto Profesional": "",
        "Observaciones / Guía": "Debe ser conciso de 1 sola palabra."
    },
    {
        "ID": "NAV-003",
        "Página": "Global / Header",
        "Elemento": "Menú: Acerca de la Red",
        "Función": "Acceso a la información fundacional y gobernanza",
        "Texto Actual": "Acerca de la Red",
        "Min Caracteres": 10,
        "Max Caracteres": 20,
        "Texto Profesional": "",
        "Observaciones / Guía": "Muestra Quiénes Somos, Objetivos, Estructura, Miembros y Financiamiento."
    },
    {
        "ID": "NAV-004",
        "Página": "Global / Header",
        "Elemento": "Menú: Qué es HTLV",
        "Función": "Acceso a divulgación biomédica del virus",
        "Texto Actual": "Qué es HTLV",
        "Min Caracteres": 8,
        "Max Caracteres": 15,
        "Texto Profesional": "",
        "Observaciones / Guía": "Orientado a pacientes y público general."
    },
    {
        "ID": "NAV-005",
        "Página": "Global / Header",
        "Elemento": "Menú: Profesionales",
        "Función": "Sección para personal médico e investigadores",
        "Texto Actual": "Profesionales",
        "Min Caracteres": 10,
        "Max Caracteres": 18,
        "Texto Profesional": "",
        "Observaciones / Guía": "Agrupa Guías clínicas, Webinars y Cursos cortos."
    },
    {
        "ID": "NAV-006",
        "Página": "Global / Header",
        "Elemento": "Menú: Pacientes",
        "Función": "Sección de acompañamiento, folletos y recursos para personas viviendo con HTLV",
        "Texto Actual": "Pacientes",
        "Min Caracteres": 8,
        "Max Caracteres": 15,
        "Texto Profesional": "",
        "Observaciones / Guía": "Contiene material educativo, folletos y charlas informativas."
    },
    {
        "ID": "NAV-007",
        "Página": "Global / Header",
        "Elemento": "Menú: Contacto",
        "Función": "Enlace a canal de comunicación institucional",
        "Texto Actual": "Contacto",
        "Min Caracteres": 6,
        "Max Caracteres": 12,
        "Texto Profesional": "",
        "Observaciones / Guía": "Formulario de contacto y sede central."
    },

    # ==========================================
    # 2. PÁGINA DE INICIO (PORTADA)
    # ==========================================
    {
        "ID": "HOME-001",
        "Página": "Inicio (Home)",
        "Elemento": "Hero Title (Título Principal)",
        "Función": "Encabezado de bienvenida de máximo impacto visual en portada",
        "Texto Actual": "Red Internacional de Innovación e Investigación en HTLV",
        "Min Caracteres": 40,
        "Max Caracteres": 70,
        "Texto Profesional": "",
        "Observaciones / Guía": "Título central. Evitar subtítulos redundantes."
    },
    {
        "ID": "HOME-002",
        "Página": "Inicio (Home)",
        "Elemento": "Hero Descripción",
        "Función": "Resumen conciso del propósito de la red en la portada",
        "Texto Actual": "Plataforma científica global coordinada por el Instituto de Medicina Tropical Alexander von Humboldt (UPCH) y el Imperial College London para la investigación clínica, diagnóstico molecular y políticas de salud pública sobre HTLV-1 y HTLV-2.",
        "Min Caracteres": 150,
        "Max Caracteres": 260,
        "Texto Profesional": "",
        "Observaciones / Guía": "Debe destacar la alianza científica UPCH-Imperial y su alcance integral."
    },
    {
        "ID": "HOME-003",
        "Página": "Inicio (Home)",
        "Elemento": "Hero Botón Primario",
        "Función": "Call to Action principal hacia la sección institucional",
        "Texto Actual": "Conocer la Red",
        "Min Caracteres": 10,
        "Max Caracteres": 20,
        "Texto Profesional": "",
        "Observaciones / Guía": "Dirige a /about."
    },
    {
        "ID": "HOME-004",
        "Página": "Inicio (Home)",
        "Elemento": "Hero Botón Secundario",
        "Función": "Call to Action secundario hacia las guías y cursos médicos",
        "Texto Actual": "Recursos Médicos",
        "Min Caracteres": 12,
        "Max Caracteres": 22,
        "Texto Profesional": "",
        "Observaciones / Guía": "Dirige a /profesionales."
    },
    {
        "ID": "HOME-005",
        "Página": "Inicio (Home)",
        "Elemento": "Card 1: Título",
        "Función": "Presentación del pilar de investigación en portada",
        "Texto Actual": "Investigación y Ensayos",
        "Min Caracteres": 15,
        "Max Caracteres": 30,
        "Texto Profesional": "",
        "Observaciones / Guía": "Tarjeta destacada #1 en el home."
    },
    {
        "ID": "HOME-006",
        "Página": "Inicio (Home)",
        "Elemento": "Card 1: Descripción",
        "Función": "Explicación del alcance de los proyectos colaborativos",
        "Texto Actual": "Desarrollo de ensayos multicéntricos, cuantificación proviral y vigilancia genómica con cohortes internacionales.",
        "Min Caracteres": 80,
        "Max Caracteres": 140,
        "Texto Profesional": "",
        "Observaciones / Guía": "Texto breve de apoyo a la tarjeta #1."
    },
    {
        "ID": "HOME-007",
        "Página": "Inicio (Home)",
        "Elemento": "Card 2: Título",
        "Función": "Presentación del pilar de capacitación médica",
        "Texto Actual": "Formación y Webinars",
        "Min Caracteres": 15,
        "Max Caracteres": 30,
        "Texto Profesional": "",
        "Observaciones / Guía": "Tarjeta destacada #2 en el home."
    },
    {
        "ID": "HOME-008",
        "Página": "Inicio (Home)",
        "Elemento": "Card 2: Descripción",
        "Función": "Explicación del programa de conferencias con expertos",
        "Texto Actual": "Ciclos de capacitación médica continua, talleres de estandarización de PCR y conferencias con retrovirólogos globales.",
        "Min Caracteres": 80,
        "Max Caracteres": 140,
        "Texto Profesional": "",
        "Observaciones / Guía": "Texto breve de apoyo a la tarjeta #2."
    },
    {
        "ID": "HOME-009",
        "Página": "Inicio (Home)",
        "Elemento": "Card 3: Título",
        "Función": "Presentación del pilar de apoyo a la comunidad",
        "Texto Actual": "Comunidad y Pacientes",
        "Min Caracteres": 15,
        "Max Caracteres": 30,
        "Texto Profesional": "",
        "Observaciones / Guía": "Tarjeta destacada #3 en el home."
    },
    {
        "ID": "HOME-010",
        "Página": "Inicio (Home)",
        "Elemento": "Card 3: Descripción",
        "Función": "Explicación de las herramientas de soporte a personas afectadas",
        "Texto Actual": "Material educativo validado, folletos de prevención materna y respuestas a preguntas frecuentes sin estigmas.",
        "Min Caracteres": 80,
        "Max Caracteres": 140,
        "Texto Profesional": "",
        "Observaciones / Guía": "Texto breve de apoyo a la tarjeta #3."
    },
    {
        "ID": "HOME-011",
        "Página": "Inicio (Home)",
        "Elemento": "Video Institucional: Título",
        "Función": "Título descriptivo del reproductor de video de la portada",
        "Texto Actual": "Video Institucional y Objetivos de la Red RIII-HTLV",
        "Min Caracteres": 35,
        "Max Caracteres": 60,
        "Texto Profesional": "",
        "Observaciones / Guía": "Acompaña al video de YouTube de la portada."
    },
    {
        "ID": "HOME-012",
        "Página": "Inicio (Home)",
        "Elemento": "Video Institucional: Subtítulo Nodos",
        "Función": "Lista resumida de instituciones fundadoras",
        "Texto Actual": "UPCH • Imperial College • Pasteur • Fiocruz • ISCIII • St. Marianna",
        "Min Caracteres": 40,
        "Max Caracteres": 80,
        "Texto Profesional": "",
        "Observaciones / Guía": "Nodos institucionales participantes."
    },
    {
        "ID": "HOME-013",
        "Página": "Inicio (Home)",
        "Elemento": "Bloque Pilares: Título",
        "Función": "Encabezado de la columna de compromisos clave",
        "Texto Actual": "Compromiso Científico Global",
        "Min Caracteres": 20,
        "Max Caracteres": 35,
        "Texto Profesional": "",
        "Observaciones / Guía": "Junto al video en la portada."
    },
    {
        "ID": "HOME-014",
        "Página": "Inicio (Home)",
        "Elemento": "Bloque Pilares: Descripción",
        "Función": "Resumen de la misión global frente a los retrovirus",
        "Texto Actual": "La Red RIII-HTLV reúne a centros de referencia en América Latina, Europa y Asia para articular la evidencia molecular con la toma de decisiones clínicas y sanitarias.",
        "Min Caracteres": 120,
        "Max Caracteres": 200,
        "Texto Profesional": "",
        "Observaciones / Guía": "Párrafo explicativo del bloque."
    },
    {
        "ID": "HOME-015",
        "Página": "Inicio (Home)",
        "Elemento": "Bullet 1: Diagnóstico Oportuno",
        "Función": "Pilar de diagnóstico temprano y armonización",
        "Texto Actual": "Diagnóstico y confirmación molecular oportuna: Algoritmos de PCR y Western Blot armonizados en laboratorios de la región.",
        "Min Caracteres": 80,
        "Max Caracteres": 140,
        "Texto Profesional": "",
        "Observaciones / Guía": "Formato: Título en negrita + explicación."
    },
    {
        "ID": "HOME-016",
        "Página": "Inicio (Home)",
        "Elemento": "Bullet 2: Prevención Vertical",
        "Función": "Pilar de corte de transmisión madre-hijo",
        "Texto Actual": "Prevención de la transmisión materno-infantil: Protocolos de tamizaje gestacional y sustitución segura de lactancia.",
        "Min Caracteres": 80,
        "Max Caracteres": 140,
        "Texto Profesional": "",
        "Observaciones / Guía": "Formato: Título en negrita + explicación."
    },
    {
        "ID": "HOME-017",
        "Página": "Inicio (Home)",
        "Elemento": "Bullet 3: Políticas Públicas",
        "Función": "Pilar de incidencia sanitaria en bancos de sangre y guías",
        "Texto Actual": "Incidencia en políticas públicas: Apoyo técnico para la inclusión del tamizaje obligatorio en bancos de sangre.",
        "Min Caracteres": 80,
        "Max Caracteres": 140,
        "Texto Profesional": "",
        "Observaciones / Guía": "Formato: Título en negrita + explicación."
    },
    {
        "ID": "HOME-018",
        "Página": "Inicio (Home)",
        "Elemento": "Bullet 4: Formación Continua",
        "Función": "Pilar de educación médica interdisciplinaria",
        "Texto Actual": "Capacitación interdisciplinaria continua: Webinars y cursos certificados para neurólogos, infectólogos y obstetras.",
        "Min Caracteres": 80,
        "Max Caracteres": 140,
        "Texto Profesional": "",
        "Observaciones / Guía": "Formato: Título en negrita + explicación."
    },
    {
        "ID": "HOME-019",
        "Página": "Inicio (Home)",
        "Elemento": "Carrusel de Miembros: Título",
        "Función": "Título del carrusel continuo de instituciones",
        "Texto Actual": "Miembros de la Red Internacional de Innovación e Investigación en HTLV",
        "Min Caracteres": 50,
        "Max Caracteres": 80,
        "Texto Profesional": "",
        "Observaciones / Guía": "Encabezado sobre el carrusel de logos."
    },

    # ==========================================
    # 3. ACERCA DE LA RED - QUIÉNES SOMOS
    # ==========================================
    {
        "ID": "ABOUT-001",
        "Página": "Acerca de la Red",
        "Elemento": "Título de Pestaña: Quiénes Somos",
        "Función": "Encabezado principal de la sección de presentación histórica e institucional",
        "Texto Actual": "Quiénes Somos",
        "Min Caracteres": 10,
        "Max Caracteres": 25,
        "Texto Profesional": "",
        "Observaciones / Guía": "Título limpio y directo."
    },
    {
        "ID": "ABOUT-002",
        "Página": "Acerca de la Red",
        "Elemento": "Quiénes Somos: Párrafo 1",
        "Función": "Contextualización histórica y origen fundacional de la Red",
        "Texto Actual": "La Red Internacional de Investigación e Innovación en HTLV (RIII-HTLV) es una alianza científica y académica multidisciplinaria que congrega a los principales centros de investigación, laboratorios de retrovirología y servicios clínicos especializados de América Latina, Europa y Asia, con el liderazgo central del Instituto de Medicina Tropical Alexander von Humboldt (IMTAvH) de la Universidad Peruana Cayetano Heredia (UPCH) en Lima, Perú, y el National Centre for Human Retrovirology del Imperial College London en el Reino Unido.",
        "Min Caracteres": 350,
        "Max Caracteres": 550,
        "Texto Profesional": "",
        "Observaciones / Guía": "Debe citar a las instituciones fundadoras y su alcance geográfico."
    },
    {
        "ID": "ABOUT-003",
        "Página": "Acerca de la Red",
        "Elemento": "Quiénes Somos: Párrafo 2",
        "Función": "Descripción de la problemática clínica y de salud pública que aborda la Red",
        "Texto Actual": "Nuestra misión colectiva surge ante la urgente necesidad de cerrar la brecha histórica en el diagnóstico, la atención clínica integral y la visibilidad de los retrovirus humanos HTLV-1 y HTLV-2. A pesar de afectar a millones de personas a nivel global y de ser agentes causales de enfermedades devastadoras y de alta morbimortalidad —como la Paraparesia Espástica Tropical / Mielopatía Asociada a HTLV-1 (HAM/TSP), la Leucemia/Linfoma de Células T del Adulto (ATL) y patologías inflamatorias sistémicas—, las infecciones por HTLV han permanecido tradicionalmente desatendidas en las agendas de salud pública.",
        "Min Caracteres": 380,
        "Max Caracteres": 580,
        "Texto Profesional": "",
        "Observaciones / Guía": "Debe nombrar las principales patologías (HAM/TSP, ATL)."
    },
    {
        "ID": "ABOUT-004",
        "Página": "Acerca de la Red",
        "Elemento": "Quiénes Somos: Párrafo 3",
        "Función": "Definición del modelo colaborativo traslacional",
        "Texto Actual": "A través de una infraestructura colaborativa basada en la confianza científica, el intercambio de datos en acceso abierto y la armonización de estándares metodológicos, la Red RIII-HTLV articula el conocimiento generado desde el laboratorio de biología molecular hasta la cabecera del paciente y los comités de políticas sanitarias, impulsando soluciones transformadoras para las comunidades más vulnerables.",
        "Min Caracteres": 300,
        "Max Caracteres": 480,
        "Texto Profesional": "",
        "Observaciones / Guía": "Conclusión sobre el modelo traslacional de la red."
    },
    {
        "ID": "ABOUT-005",
        "Página": "Acerca de la Red",
        "Elemento": "Misión: Título",
        "Función": "Encabezado de la declaración de misión",
        "Texto Actual": "Misión",
        "Min Caracteres": 5,
        "Max Caracteres": 15,
        "Texto Profesional": "",
        "Observaciones / Guía": "Título sobrio centrado."
    },
    {
        "ID": "ABOUT-006",
        "Página": "Acerca de la Red",
        "Elemento": "Misión: Declaración",
        "Función": "Enunciado rector de la misión institucional de la Red",
        "Texto Actual": "Generar, integrar y transferir evidencia científica rigurosa sobre el HTLV mediante la investigación colaborativa internacional, la formación médica continua y la incidencia activa en políticas de salud pública, con el propósito de erradicar la transmisión, optimizar el diagnóstico precoz y mejorar sustancialmente la calidad de vida de las personas que viven con el virus en el mundo.",
        "Min Caracteres": 250,
        "Max Caracteres": 420,
        "Texto Profesional": "",
        "Observaciones / Guía": "Debe resumir propósito, metodologías y beneficiarios."
    },
    {
        "ID": "ABOUT-007",
        "Página": "Acerca de la Red",
        "Elemento": "Visión: Título",
        "Función": "Encabezado de la declaración de visión",
        "Texto Actual": "Visión",
        "Min Caracteres": 5,
        "Max Caracteres": 15,
        "Texto Profesional": "",
        "Observaciones / Guía": "Título sobrio centrado."
    },
    {
        "ID": "ABOUT-008",
        "Página": "Acerca de la Red",
        "Elemento": "Visión: Declaración",
        "Función": "Enunciado rector de la visión institucional al horizonte 2030",
        "Texto Actual": "Ser reconocida globalmente como la red científica y de innovación de referencia en retrovirología humana, liderando la adopción de políticas universales de prevención, estándares diagnósticos de vanguardia y terapias efectivas que conduzcan hacia un futuro libre de enfermedades asociadas al HTLV.",
        "Min Caracteres": 220,
        "Max Caracteres": 360,
        "Texto Profesional": "",
        "Observaciones / Guía": "Debe expresar liderazgo global y meta final."
    },

    # ==========================================
    # 4. ACERCA DE LA RED - OBJETIVOS ESTRATÉGICOS
    # ==========================================
    {
        "ID": "OBJ-001",
        "Página": "Acerca de la Red",
        "Elemento": "Objetivo 1: Título",
        "Función": "Denominación del Objetivo Estratégico 1",
        "Texto Actual": "Consolidarse como la Red Internacional de Referencia en HTLV (RIII-HTLV)",
        "Min Caracteres": 45,
        "Max Caracteres": 80,
        "Texto Profesional": "",
        "Observaciones / Guía": "Inspirado en el modelo de gobernanza QuEST LAC."
    },
    {
        "ID": "OBJ-002",
        "Página": "Acerca de la Red",
        "Elemento": "Objetivo 1: Resumen de Tarjeta",
        "Función": "Descripción sintética visible en la tarjeta del Objetivo 1",
        "Texto Actual": "Articular una alianza científica global sólida que coordine centros de investigación, comités de políticas sanitarias y comunidades de práctica clínica.",
        "Min Caracteres": 100,
        "Max Caracteres": 180,
        "Texto Profesional": "",
        "Observaciones / Guía": "Texto visible antes de abrir el modal de detalles."
    },
    {
        "ID": "OBJ-003",
        "Página": "Acerca de la Red",
        "Elemento": "Objetivo 1: Pilar 1.1",
        "Función": "Iniciativa de centros coordinadores centrales",
        "Texto Actual": "Establecimiento de Centros Core de Coordinación: Articulación permanente entre el Instituto de Medicina Tropical Alexander von Humboldt (IMTAvH - UPCH) en Lima y el Imperial College London en el Reino Unido como centros rectores de coordinación científica, administración y biobanco de referencia.",
        "Min Caracteres": 200,
        "Max Caracteres": 340,
        "Texto Profesional": "",
        "Observaciones / Guía": "Detalle dentro del modal emergente."
    },
    {
        "ID": "OBJ-004",
        "Página": "Acerca de la Red",
        "Elemento": "Objetivo 1: Pilar 1.2",
        "Función": "Iniciativa de grupo estratégico de políticas",
        "Texto Actual": "Grupo Estratégico de Políticas Regionales (GEPR): Articulación activa de la evidencia científica con las políticas sanitarias en América Latina y el Caribe, promoviendo el tamizaje universal en bancos de sangre, el despistaje materno y la prevención efectiva de la transmisión vertical.",
        "Min Caracteres": 200,
        "Max Caracteres": 340,
        "Texto Profesional": "",
        "Observaciones / Guía": "Detalle dentro del modal emergente."
    },
    {
        "ID": "OBJ-005",
        "Página": "Acerca de la Red",
        "Elemento": "Objetivo 1: Pilar 1.3",
        "Función": "Iniciativa del comité asesor técnico",
        "Texto Actual": "Establecimiento de un Comité Asesor Técnico (CAT): Órgano consultivo colegiado de virólogos, infectólogos y epidemiólogos de prestigio internacional para orientar las líneas prioritarias de investigación y el fortalecimiento continuo de capacidades diagnósticas.",
        "Min Caracteres": 180,
        "Max Caracteres": 300,
        "Texto Profesional": "",
        "Observaciones / Guía": "Detalle dentro del modal emergente."
    },
    {
        "ID": "OBJ-006",
        "Página": "Acerca de la Red",
        "Elemento": "Objetivo 1: Pilar 1.4",
        "Función": "Iniciativa de articulación comunitaria",
        "Texto Actual": "Identificación y Articulación de una Comunidad de Interesados: Integración activa de investigadores clínicos, personal de salud, organizaciones de personas que viven con HTLV-1/2, autoridades sanitarias y organismos multilaterales en un ecosistema de intercambio continuo.",
        "Min Caracteres": 180,
        "Max Caracteres": 300,
        "Texto Profesional": "",
        "Observaciones / Guía": "Detalle dentro del modal emergente."
    },
    {
        "ID": "OBJ-007",
        "Página": "Acerca de la Red",
        "Elemento": "Objetivo 2: Título",
        "Función": "Denominación del Objetivo Estratégico 2",
        "Texto Actual": "Generación de Evidencia Científica y Armonización Diagnóstica",
        "Min Caracteres": 45,
        "Max Caracteres": 80,
        "Texto Profesional": "",
        "Observaciones / Guía": "Enfoque en laboratorio, biomarcadores y ensayos clínicos."
    },
    {
        "ID": "OBJ-008",
        "Página": "Acerca de la Red",
        "Elemento": "Objetivo 2: Resumen de Tarjeta",
        "Función": "Descripción sintética visible en la tarjeta del Objetivo 2",
        "Texto Actual": "Desarrollar protocolos diagnósticos moleculares de vanguardia, armonizar metodologías de carga proviral y ejecutar estudios clínicos multicéntricos.",
        "Min Caracteres": 100,
        "Max Caracteres": 180,
        "Texto Profesional": "",
        "Observaciones / Guía": "Texto visible antes de abrir el modal de detalles."
    },
    {
        "ID": "OBJ-009",
        "Página": "Acerca de la Red",
        "Elemento": "Objetivo 2: Pilar 2.1",
        "Función": "Iniciativa de estandarización de PCR y biomarcadores",
        "Texto Actual": "Estandarización de Algoritmos Diagnósticos y Carga Proviral: Armonización de protocolos de PCR cuantitativa en tiempo real (qPCR) y digital droplet PCR (ddPCR) entre los laboratorios miembros para asegurar comparabilidad internacional en la determinación de copias provirales por 100 PBMC.",
        "Min Caracteres": 200,
        "Max Caracteres": 340,
        "Texto Profesional": "",
        "Observaciones / Guía": "Detalle dentro del modal emergente."
    },
    {
        "ID": "OBJ-010",
        "Página": "Acerca de la Red",
        "Elemento": "Objetivo 2: Pilar 2.2",
        "Función": "Iniciativa de biobancos y muestras biológicas",
        "Texto Actual": "Plataforma de Biobanco y Muestras Biológicas Compartidas: Creación de un catálogo armonizado de sueros, plasmas, ADN y células mononucleares de sangre periférica (PBMC) bajo estrictos criterios éticos internacionales para acelerar investigaciones genómicas y de biomarcadores.",
        "Min Caracteres": 200,
        "Max Caracteres": 340,
        "Texto Profesional": "",
        "Observaciones / Guía": "Detalle dentro del modal emergente."
    },
    {
        "ID": "OBJ-011",
        "Página": "Acerca de la Red",
        "Elemento": "Objetivo 2: Pilar 2.3",
        "Función": "Iniciativa de ensayos clínicos multicéntricos",
        "Texto Actual": "Ensayos Clínicos Multicéntricos y Terapias Experimentales: Diseño y conducción de estudios clínicos prospectivos para evaluar fármacos inmunomoduladores, corticoides pulsados y nuevas moléculas dirigidas para frenar la progresión de HAM/TSP y ATL.",
        "Min Caracteres": 180,
        "Max Caracteres": 300,
        "Texto Profesional": "",
        "Observaciones / Guía": "Detalle dentro del modal emergente."
    },
    {
        "ID": "OBJ-012",
        "Página": "Acerca de la Red",
        "Elemento": "Objetivo 3: Título",
        "Función": "Denominación del Objetivo Estratégico 3",
        "Texto Actual": "Capacitación Médica, Transferencia y Soporte a la Comunidad",
        "Min Caracteres": 45,
        "Max Caracteres": 80,
        "Texto Profesional": "",
        "Observaciones / Guía": "Enfoque en docencia, webinars y educación a la comunidad."
    },
    {
        "ID": "OBJ-013",
        "Página": "Acerca de la Red",
        "Elemento": "Objetivo 3: Resumen de Tarjeta",
        "Función": "Descripción sintética visible en la tarjeta del Objetivo 3",
        "Texto Actual": "Fortalecer las competencias del personal de salud de primer nivel y empoderar a los pacientes y sus familias mediante recursos educativos rigurosos.",
        "Min Caracteres": 100,
        "Max Caracteres": 180,
        "Texto Profesional": "",
        "Observaciones / Guía": "Texto visible antes de abrir el modal de detalles."
    },
    {
        "ID": "OBJ-014",
        "Página": "Acerca de la Red",
        "Elemento": "Objetivo 3: Pilar 3.1",
        "Función": "Iniciativa de formación médica continua",
        "Texto Actual": "Programa de Capacitación Médica Continua y Cursos Cortos: Desarrollo de módulos formativos asincrónicos y talleres prácticos certificados sobre sospecha diagnóstica temprana, lectura de Western Blot y manejo clínico interdisciplinario para médicos generales y especialistas.",
        "Min Caracteres": 200,
        "Max Caracteres": 340,
        "Texto Profesional": "",
        "Observaciones / Guía": "Detalle dentro del modal emergente."
    },
    {
        "ID": "OBJ-015",
        "Página": "Acerca de la Red",
        "Elemento": "Objetivo 3: Pilar 3.2",
        "Función": "Iniciativa de webinars internacionales",
        "Texto Actual": "Ciclos de Webinars y Conferencias Internacionales: Organización periódica de conferencias magistrales transmitidas en vivo con traducción simultánea, reuniendo a investigadores pioneros para discutir los avances más recientes en retrovirología humana.",
        "Min Caracteres": 200,
        "Max Caracteres": 340,
        "Texto Profesional": "",
        "Observaciones / Guía": "Detalle dentro del modal emergente."
    },
    {
        "ID": "OBJ-016",
        "Página": "Acerca de la Red",
        "Elemento": "Objetivo 3: Pilar 3.3",
        "Función": "Iniciativa de educación para pacientes y familias",
        "Texto Actual": "Repositorio de Recursos y Guías para Pacientes: Producción de folletos ilustrados descargables, videos explicativos sin lenguaje estigmatizante y pautas de autocuidado y acompañamiento emocional para personas que reciben un diagnóstico de HTLV-1/2.",
        "Min Caracteres": 180,
        "Max Caracteres": 300,
        "Texto Profesional": "",
        "Observaciones / Guía": "Detalle dentro del modal emergente."
    },

    # ==========================================
    # 5. ACERCA DE LA RED - ESTRUCTURA Y GOBERNANZA
    # ==========================================
    {
        "ID": "GOV-001",
        "Página": "Acerca de la Red",
        "Elemento": "Estructura: Nivel 1 (Centros Core)",
        "Función": "Descripción del órgano máximo de coordinación científica",
        "Texto Actual": "Centros Core de Coordinación y Co-Dirección: Dirección General y Científica compartida por el IMTAvH - UPCH (Lima, Perú) y el Imperial College London (Reino Unido). Responsables de la gobernanza global, asignación de recursos y supervisión de proyectos.",
        "Min Caracteres": 180,
        "Max Caracteres": 290,
        "Texto Profesional": "",
        "Observaciones / Guía": "Nivel superior del organigrama."
    },
    {
        "ID": "GOV-002",
        "Página": "Acerca de la Red",
        "Elemento": "Estructura: Nivel 2 (CAT)",
        "Función": "Descripción del Comité Asesor Técnico",
        "Texto Actual": "Comité Asesor Técnico (CAT): Consejo científico consultivo de virólogos, neurólogos, hematólogos y bioeticistas internacionales que valida las guías clínicas y prioriza líneas de investigación.",
        "Min Caracteres": 140,
        "Max Caracteres": 240,
        "Texto Profesional": "",
        "Observaciones / Guía": "Segundo nivel del organigrama."
    },
    {
        "ID": "GOV-003",
        "Página": "Acerca de la Red",
        "Elemento": "Estructura: Nivel 2 (GEPR)",
        "Función": "Descripción del Grupo Estratégico de Políticas",
        "Texto Actual": "Grupo Estratégico de Políticas Regionales (GEPR): Enlace formal con ministerios de salud, OPS/OMS y agencias sanitarias para traducir la ciencia en resoluciones de tamizaje y cobertura.",
        "Min Caracteres": 140,
        "Max Caracteres": 240,
        "Texto Profesional": "",
        "Observaciones / Guía": "Segundo nivel lateral del organigrama."
    },
    {
        "ID": "GOV-004",
        "Página": "Acerca de la Red",
        "Elemento": "Estructura: Nivel 3 (Grupos de Trabajo)",
        "Función": "Descripción de los equipos operativos",
        "Texto Actual": "Grupos de Trabajo de los Nodos Miembros: Equipos de investigadores en laboratorios, hospitales universitarios y centros asociados ejecutando proyectos de virología, clínica y educación.",
        "Min Caracteres": 140,
        "Max Caracteres": 240,
        "Texto Profesional": "",
        "Observaciones / Guía": "Tercer nivel del organigrama."
    },

    # ==========================================
    # 6. ACERCA DE LA RED - FINANCIAMIENTO
    # ==========================================
    {
        "ID": "FIN-001",
        "Página": "Acerca de la Red",
        "Elemento": "Financiamiento: Título de Sección",
        "Función": "Encabezado del modelo de sostenibilidad y patrocinio",
        "Texto Actual": "Financiamiento y Sostenibilidad de la Red",
        "Min Caracteres": 25,
        "Max Caracteres": 50,
        "Texto Profesional": "",
        "Observaciones / Guía": "Pestaña dedicada a la transparencia financiera."
    },
    {
        "ID": "FIN-002",
        "Página": "Acerca de la Red",
        "Elemento": "Financiamiento: Introducción",
        "Función": "Declaración de transparencia e independencia académica",
        "Texto Actual": "La Red RIII-HTLV opera bajo un modelo de financiamiento mixto y transparente, sustentado en grants competitivos internacionales de investigación biomédica, cooperación académica interinstitucional y fondos no condicionados para la salud pública global.",
        "Min Caracteres": 180,
        "Max Caracteres": 300,
        "Texto Profesional": "",
        "Observaciones / Guía": "Párrafo introductorio de la sección."
    },
    {
        "ID": "FIN-003",
        "Página": "Acerca de la Red",
        "Elemento": "Financiamiento: Pilar Grants",
        "Función": "Detalle sobre financiamiento competitivo",
        "Texto Actual": "Grants Internacionales Concursables: Fondos obtenidos mediante convocatorias públicas y rigurosas de agencias como los National Institutes of Health (NIH), Wellcome Trust, Medical Research Council (MRC) y la Unión Europea (Horizon Europe) para proyectos específicos de retrovirología.",
        "Min Caracteres": 200,
        "Max Caracteres": 320,
        "Texto Profesional": "",
        "Observaciones / Guía": "Tarjeta #1 de financiamiento."
    },
    {
        "ID": "FIN-004",
        "Página": "Acerca de la Red",
        "Elemento": "Financiamiento: Pilar Académico",
        "Función": "Detalle sobre contrapartidas universitarias",
        "Texto Actual": "Aportes Institucionales y Contrapartidas Universitarias: Infraestructura de laboratorios de bioseguridad, tiempo de dedicación de investigadores principales y soporte administrativo provisto directamente por la UPCH, Imperial College London y los centros asociados.",
        "Min Caracteres": 200,
        "Max Caracteres": 320,
        "Texto Profesional": "",
        "Observaciones / Guía": "Tarjeta #2 de financiamiento."
    },
    {
        "ID": "FIN-005",
        "Página": "Acerca de la Red",
        "Elemento": "Financiamiento: Pilar Cooperación",
        "Función": "Detalle sobre donaciones y agencias multilaterales",
        "Texto Actual": "Cooperación Internacional y Filantropía Científica: Alianzas con fundaciones globales dedicadas a enfermedades desatendidas y donaciones orientadas al desarrollo de biobancos y becas para jóvenes investigadores de países endémicos.",
        "Min Caracteres": 180,
        "Max Caracteres": 300,
        "Texto Profesional": "",
        "Observaciones / Guía": "Tarjeta #3 de financiamiento."
    },

    # ==========================================
    # 7. QUÉ ES HTLV
    # ==========================================
    {
        "ID": "HTLV-001",
        "Página": "Qué es HTLV",
        "Elemento": "Título Principal",
        "Función": "Encabezado educativo de la sección",
        "Texto Actual": "¿Qué es el Virus Linfotrópico de Células T Humanas (HTLV)?",
        "Min Caracteres": 40,
        "Max Caracteres": 70,
        "Texto Profesional": "",
        "Observaciones / Guía": "Título divulgativo formal."
    },
    {
        "ID": "HTLV-002",
        "Página": "Qué es HTLV",
        "Elemento": "Definición Viral",
        "Función": "Explicación biológica del retrovirus",
        "Texto Actual": "El HTLV (Virus Linfotrópico de Células T Humanas) es un retrovirus perteneciente a la familia Retroviridae, género Deltaretrovirus. Fue el primer retrovirus humano oncogénico descubierto (1980 por Robert Gallo y colaboradores). A diferencia del VIH, no destruye masivamente las células inmunitarias de forma lítica, sino que se integra como provirus en el ADN genómico de los linfocitos T (principalmente CD4+ para HTLV-1 y CD8+ para HTLV-2), induciendo su proliferación clonal persistente.",
        "Min Caracteres": 380,
        "Max Caracteres": 550,
        "Texto Profesional": "",
        "Observaciones / Guía": "Definición médica fundamental."
    },
    {
        "ID": "HTLV-003",
        "Página": "Qué es HTLV",
        "Elemento": "Subtipos: HTLV-1 vs HTLV-2",
        "Función": "Diferenciación epidemiológica y clínica entre los dos virus",
        "Texto Actual": "HTLV-1 está causalmente asociado con patologías severas como la Paraparesia Espástica Tropical (HAM/TSP), la Leucemia/Linfoma de Células T del Adulto (ATL), uveítis y dermatitis infecciosa. HTLV-2 tiene una patogenicidad significativamente menor, habiéndose detectado casos raros de compromiso neurológico similar a HAM/TSP y mayor frecuencia en usuarios de drogas endovenosas y ciertas poblaciones indígenas.",
        "Min Caracteres": 320,
        "Max Caracteres": 480,
        "Texto Profesional": "",
        "Observaciones / Guía": "Diferenciación crucial para médicos y pacientes."
    },
    {
        "ID": "HTLV-004",
        "Página": "Qué es HTLV",
        "Elemento": "Vías de Transmisión (Puntos Clave)",
        "Función": "Educación preventiva sobre formas reales de contagio",
        "Texto Actual": "1. Transmisión Vertical: Principalmente a través de la lactancia materna prolongada (paso de linfocitos infectados en leche materna). 2. Vía Sexual: Relaciones sexuales sin preservativo (mayor eficiencia de hombre a mujer). 3. Vía Parenteral: Transfusión de sangre total o componentes celulares sin tamizar y uso compartido de agujas.",
        "Min Caracteres": 280,
        "Max Caracteres": 420,
        "Texto Profesional": "",
        "Observaciones / Guía": "Explicar claramente las 3 vías conocidas."
    },
    {
        "ID": "HTLV-005",
        "Página": "Qué es HTLV",
        "Elemento": "Formas de NO Transmisión",
        "Función": "Derribar mitos y estigmas comunitarios",
        "Texto Actual": "El HTLV NO se transmite por abrazar, besar, dar la mano, compartir cubiertos, usar el mismo baño, picaduras de mosquitos ni por contacto casual en la escuela o lugar de trabajo.",
        "Min Caracteres": 120,
        "Max Caracteres": 220,
        "Texto Profesional": "",
        "Observaciones / Guía": "Mensaje contundente para evitar la discriminación."
    },
    {
        "ID": "HTLV-006",
        "Página": "Qué es HTLV",
        "Elemento": "Enfermedades Asociadas: HAM/TSP",
        "Función": "Descripción clínica de la Paraparesia Espástica Tropical",
        "Texto Actual": "Paraparesia Espástica Tropical / Mielopatía Asociada a HTLV-1 (HAM/TSP): Mielopatía crónica e inflamatoria de la médula espinal que ocasiona debilidad progresiva en miembros inferiores, espasticidad, alteraciones de la marcha, dolor neuropático y disfunción vesical e intestinal.",
        "Min Caracteres": 200,
        "Max Caracteres": 320,
        "Texto Profesional": "",
        "Observaciones / Guía": "Afecta aproximadamente al 1-4% de los portadores."
    },
    {
        "ID": "HTLV-007",
        "Página": "Qué es HTLV",
        "Elemento": "Enfermedades Asociadas: ATL",
        "Función": "Descripción clínica de la Leucemia/Linfoma",
        "Texto Actual": "Leucemia/Linfoma de Células T del Adulto (ATL): Neoplasia maligna y agresiva de linfocitos T maduros que se presenta en formas agudas, linfomatosas, crónicas o smoldering, típicamente con hipercalcemia, lesiones cutáneas y linfadenopatías tras décadas de latencia.",
        "Min Caracteres": 200,
        "Max Caracteres": 320,
        "Texto Profesional": "",
        "Observaciones / Guía": "Afecta aproximadamente al 2-5% de los portadores."
    },

    # ==========================================
    # 8. PROFESIONALES - GUÍAS CLÍNICAS
    # ==========================================
    {
        "ID": "PROF-001",
        "Página": "Profesionales / Guías",
        "Elemento": "Guía 1: Título",
        "Función": "Nombre de la Guía de Práctica Clínica principal",
        "Texto Actual": "Guía de Práctica Clínica: Diagnóstico y Manejo de HTLV-1",
        "Min Caracteres": 40,
        "Max Caracteres": 70,
        "Texto Profesional": "",
        "Observaciones / Guía": "IMTAvH - Universidad Peruana Cayetano Heredia (UPCH), 2026."
    },
    {
        "ID": "PROF-002",
        "Página": "Profesionales / Guías",
        "Elemento": "Guía 1: Descripción",
        "Función": "Resumen técnico de las recomendaciones de la Guía 1",
        "Texto Actual": "Recomendaciones basadas en evidencia para tamizaje serológico, algoritmos de confirmación por Western Blot/PCR y criterios de derivación clínica.",
        "Min Caracteres": 110,
        "Max Caracteres": 180,
        "Texto Profesional": "",
        "Observaciones / Guía": "Tópicos: Tamizaje, Diagnóstico Diferencial, Criterios Belem."
    },
    {
        "ID": "PROF-003",
        "Página": "Profesionales / Guías",
        "Elemento": "Guía 2: Título",
        "Función": "Nombre del Consenso Internacional HAM/TSP",
        "Texto Actual": "Consenso Internacional en Paraparesia Espástica Tropical (HAM/TSP)",
        "Min Caracteres": 45,
        "Max Caracteres": 80,
        "Texto Profesional": "",
        "Observaciones / Guía": "Comité Científico RIII-HTLV & Consorcio Japón-UK, 2026."
    },
    {
        "ID": "PROF-004",
        "Página": "Profesionales / Guías",
        "Elemento": "Guía 2: Descripción",
        "Función": "Resumen técnico del protocolo neurológico unificado",
        "Texto Actual": "Protocolo unificado para el monitoreo neurológico, escalas funcionales (EDSS modificado), biomarcadores en LCR y pulsos de corticoides.",
        "Min Caracteres": 110,
        "Max Caracteres": 180,
        "Texto Profesional": "",
        "Observaciones / Guía": "Tópicos: Neurología, LCR, Manejo Motor y Urológico."
    },
    {
        "ID": "PROF-005",
        "Página": "Profesionales / Guías",
        "Elemento": "Guía 3: Título",
        "Función": "Nombre del Protocolo de Prevención de Transmisión Vertical",
        "Texto Actual": "Protocolo de Prevención de Transmisión Materno-Infantil",
        "Min Caracteres": 40,
        "Max Caracteres": 70,
        "Texto Profesional": "",
        "Observaciones / Guía": "Red RIII-HTLV & Sociedades de Infectología, 2027."
    },
    {
        "ID": "PROF-006",
        "Página": "Profesionales / Guías",
        "Elemento": "Guía 3: Descripción",
        "Función": "Resumen técnico del protocolo perinatal y lactancia",
        "Texto Actual": "Estrategias de tamizaje prenatal en poblaciones de alta prevalencia, manejo del puerperio y pautas de alimentación alternativa para recién nacidos.",
        "Min Caracteres": 110,
        "Max Caracteres": 180,
        "Texto Profesional": "",
        "Observaciones / Guía": "Tópicos: Perinatología, Lactancia Segura, Tamizaje Gestacional."
    },

    # ==========================================
    # 9. PROFESIONALES - WEBINARS
    # ==========================================
    {
        "ID": "WEBINAR-001",
        "Página": "Profesionales / Webinars",
        "Elemento": "Webinar 1: Título",
        "Función": "Tema de la conferencia magistral del Dr. Gotuzzo",
        "Texto Actual": "Actualización Global en Retrovirología: Retos Clínicos y Diagnósticos en HTLV-1 y HTLV-2",
        "Min Caracteres": 60,
        "Max Caracteres": 95,
        "Texto Profesional": "",
        "Observaciones / Guía": "Expositor: Dr. Eduardo Gotuzzo (UPCH, Perú). Fecha: 28/10/26."
    },
    {
        "ID": "WEBINAR-002",
        "Página": "Profesionales / Webinars",
        "Elemento": "Webinar 1: Descripción",
        "Función": "Sinopsis del contenido científico del Webinar 1",
        "Texto Actual": "Revisión epidemiológica mundial del HTLV-1 y HTLV-2, avances en la comprensión del reservorio viral, cuantificación de carga proviral y abordaje integral de coinfecciones en zonas endémicas.",
        "Min Caracteres": 150,
        "Max Caracteres": 240,
        "Texto Profesional": "",
        "Observaciones / Guía": "Duración: 58 min. Video ID: 1NqgEEReKhs."
    },
    {
        "ID": "WEBINAR-003",
        "Página": "Profesionales / Webinars",
        "Elemento": "Webinar 2: Título",
        "Función": "Tema de la conferencia magistral del Prof. Graham Taylor",
        "Texto Actual": "Manejo Clínico y Nuevos Biomarcadores en Paraparesia Espástica Tropical (HAM/TSP)",
        "Min Caracteres": 60,
        "Max Caracteres": 95,
        "Texto Profesional": "",
        "Observaciones / Guía": "Expositor: Prof. Graham P. Taylor (Imperial College London, UK). Fecha: 18/11/26."
    },
    {
        "ID": "WEBINAR-004",
        "Página": "Profesionales / Webinars",
        "Elemento": "Webinar 2: Descripción",
        "Función": "Sinopsis del contenido científico del Webinar 2",
        "Texto Actual": "Monitoreo longitudinal de pacientes con HAM/TSP, criterios neurofisiológicos, escalas de discapacidad motora y evaluación de biomarcadores inflamatorios en líquido cefalorraquídeo.",
        "Min Caracteres": 150,
        "Max Caracteres": 240,
        "Texto Profesional": "",
        "Observaciones / Guía": "Duración: 64 min. Video ID: rpmI1nhMOak."
    },
    {
        "ID": "WEBINAR-005",
        "Página": "Profesionales / Webinars",
        "Elemento": "Webinar 3: Título",
        "Función": "Tema de la conferencia magistral de la Dra. Elsa González",
        "Texto Actual": "Estandarización de PCR Proviral y Diagnóstico Oportuno de la Transmisión Vertical",
        "Min Caracteres": 60,
        "Max Caracteres": 95,
        "Texto Profesional": "",
        "Observaciones / Guía": "Expositora: Dra. Elsa González (IMTAvH - UPCH, Perú). Fecha: 09/12/26."
    },
    {
        "ID": "WEBINAR-006",
        "Página": "Profesionales / Webinars",
        "Elemento": "Webinar 3: Descripción",
        "Función": "Sinopsis del contenido científico del Webinar 3",
        "Texto Actual": "Protocolos armonizados para la cuantificación de copias provirales por célula, algoritmos de confirmación serológica y tamizaje gestacional para la prevención de la transmisión por lactancia.",
        "Min Caracteres": 150,
        "Max Caracteres": 240,
        "Texto Profesional": "",
        "Observaciones / Guía": "Duración: 52 min. Video ID: p-xTMvuecnM."
    },

    # ==========================================
    # 10. PROFESIONALES - CURSOS CORTOS
    # ==========================================
    {
        "ID": "CURSO-001",
        "Página": "Profesionales / Cursos",
        "Elemento": "Curso 1: Título",
        "Función": "Nombre del curso virtual asincrónico",
        "Texto Actual": "Curso Corto: Diagnóstico y Abordaje Clínico Integral del HTLV",
        "Min Caracteres": 45,
        "Max Caracteres": 75,
        "Texto Profesional": "",
        "Observaciones / Guía": "Modalidad: 100% Virtual • Asincrónico • 20 horas académicas. Apertura: 15/11/2026."
    },
    {
        "ID": "CURSO-002",
        "Página": "Profesionales / Cursos",
        "Elemento": "Curso 1: Público Objetivo",
        "Función": "Audiencia médica destinataria",
        "Texto Actual": "Médicos generales, infectólogos, neurólogos y obstetras",
        "Min Caracteres": 40,
        "Max Caracteres": 70,
        "Texto Profesional": "",
        "Observaciones / Guía": "Muestra los especialistas a los que va dirigido."
    },
    {
        "ID": "CURSO-003",
        "Página": "Profesionales / Cursos",
        "Elemento": "Curso 1: Descripción",
        "Función": "Plan de estudios sintético del Curso 1",
        "Texto Actual": "Formación especializada en bases biológicas, protocolos de tamizaje serológico, confirmación diagnóstica y manejo interdisciplinario de patologías asociadas al HTLV-1 y HTLV-2.",
        "Min Caracteres": 130,
        "Max Caracteres": 210,
        "Texto Profesional": "",
        "Observaciones / Guía": "Acompaña a la tarjeta y modal."
    },
    {
        "ID": "CURSO-004",
        "Página": "Profesionales / Cursos",
        "Elemento": "Curso 2: Título",
        "Función": "Nombre del taller semipresencial avanzado",
        "Texto Actual": "Taller Avanzado: Estandarización Molecular y Cuantificación de Carga Proviral",
        "Min Caracteres": 55,
        "Max Caracteres": 85,
        "Texto Profesional": "",
        "Observaciones / Guía": "Modalidad: Semipresencial • 15 horas de laboratorio y análisis. Apertura: 01/12/2026."
    },
    {
        "ID": "CURSO-005",
        "Página": "Profesionales / Cursos",
        "Elemento": "Curso 2: Público Objetivo",
        "Función": "Audiencia técnica de laboratorio destinataria",
        "Texto Actual": "Biólogos moleculares, tecnólogos médicos y personal de laboratorio",
        "Min Caracteres": 45,
        "Max Caracteres": 75,
        "Texto Profesional": "",
        "Observaciones / Guía": "Orientado a biólogos y técnicos laboratoristas."
    },
    {
        "ID": "CURSO-006",
        "Página": "Profesionales / Cursos",
        "Elemento": "Curso 2: Descripción",
        "Función": "Plan de estudios técnico del Curso 2",
        "Texto Actual": "Capacitación práctica en extracción de ácidos nucleicos, diseño y validación de partidores para qPCR proviral, cálculo de copias por célula y control de calidad analítica inter-laboratorios.",
        "Min Caracteres": 140,
        "Max Caracteres": 220,
        "Texto Profesional": "",
        "Observaciones / Guía": "Acompaña a la tarjeta y modal."
    },

    # ==========================================
    # 11. PACIENTES Y COMUNIDAD
    # ==========================================
    {
        "ID": "PAC-001",
        "Página": "Pacientes",
        "Elemento": "Aviso Importante (Disclaimer)",
        "Función": "Advertencia ética y legal sobre uso del contenido médico",
        "Texto Actual": "Aviso importante: La información y materiales presentados en esta plataforma tienen fines estrictamente educativos y de orientación general. No sustituyen bajo ninguna circunstancia la consulta médica especializada, el diagnóstico clínico ni el tratamiento farmacológico individualizado. Si tienes dudas sobre tu estado de salud, consulta con un profesional calificado.",
        "Min Caracteres": 280,
        "Max Caracteres": 420,
        "Texto Profesional": "",
        "Observaciones / Guía": "Encabezado obligatorio de bioética y responsabilidad legal."
    },
    {
        "ID": "PAC-002",
        "Página": "Pacientes",
        "Elemento": "Folleto 1: Título",
        "Función": "Nombre del folleto de orientación diagnóstica",
        "Texto Actual": "Viviendo con HTLV: Guía Integral y Cuidados Básicos",
        "Min Caracteres": 35,
        "Max Caracteres": 65,
        "Texto Profesional": "",
        "Observaciones / Guía": "Material descargable en PDF de la sección Pacientes."
    },
    {
        "ID": "PAC-003",
        "Página": "Pacientes",
        "Elemento": "Folleto 1: Descripción",
        "Función": "Resumen del contenido del folleto 1",
        "Texto Actual": "Folleto educativo que explica qué es el virus, desmitifica temores comunes, detalla los cuidados de salud recomendados y ofrece consejos para el bienestar físico y emocional.",
        "Min Caracteres": 130,
        "Max Caracteres": 200,
        "Texto Profesional": "",
        "Observaciones / Guía": "Lenguaje cálido, claro y no estigmatizante."
    },
    {
        "ID": "PAC-004",
        "Página": "Pacientes",
        "Elemento": "Folleto 2: Título",
        "Función": "Nombre del folleto sobre prevención en la gestación",
        "Texto Actual": "Maternidad Segura y HTLV: Pautas de Prevención",
        "Min Caracteres": 35,
        "Max Caracteres": 65,
        "Texto Profesional": "",
        "Observaciones / Guía": "Material descargable en PDF de la sección Pacientes."
    },
    {
        "ID": "PAC-005",
        "Página": "Pacientes",
        "Elemento": "Folleto 2: Descripción",
        "Función": "Resumen del contenido del folleto 2",
        "Texto Actual": "Orientación para gestantes y madres diagnosticadas con HTLV. Información sobre alimentación con fórmula maternizada y opciones seguras para proteger al recién nacido.",
        "Min Caracteres": 130,
        "Max Caracteres": 200,
        "Texto Profesional": "",
        "Observaciones / Guía": "Lenguaje empático sobre sustitución de lactancia."
    },
    {
        "ID": "PAC-006",
        "Página": "Pacientes",
        "Elemento": "Video 1: Título",
        "Función": "Nombre de la charla informativa sobre comprensión del virus",
        "Texto Actual": "¿Qué es el HTLV-1 y qué esperar tras el diagnóstico?",
        "Min Caracteres": 35,
        "Max Caracteres": 65,
        "Texto Profesional": "",
        "Observaciones / Guía": "Video educativo de YouTube (1NqgEEReKhs)."
    },
    {
        "ID": "PAC-007",
        "Página": "Pacientes",
        "Elemento": "Video 1: Descripción",
        "Función": "Resumen de la charla informativa del video 1",
        "Texto Actual": "Explicación clara sobre el curso benigno en más del 90% de personas, vías de no transmisión y vida cotidiana.",
        "Min Caracteres": 80,
        "Max Caracteres": 140,
        "Texto Profesional": "",
        "Observaciones / Guía": "Tranquiliza al paciente con evidencia de asintomáticos."
    },
    {
        "ID": "PAC-008",
        "Página": "Pacientes",
        "Elemento": "Video 2: Título",
        "Función": "Nombre de la charla sobre salud materno-infantil",
        "Texto Actual": "Maternidad Segura y Prevención de Transmisión Vertical",
        "Min Caracteres": 35,
        "Max Caracteres": 65,
        "Texto Profesional": "",
        "Observaciones / Guía": "Video educativo de YouTube (rpmI1nhMOak)."
    },
    {
        "ID": "PAC-009",
        "Página": "Pacientes",
        "Elemento": "Video 2: Descripción",
        "Función": "Resumen de la charla informativa del video 2",
        "Texto Actual": "Pautas clínicas para obstetras y madres sobre el reemplazo seguro de lactancia y control pediátrico del lactante.",
        "Min Caracteres": 80,
        "Max Caracteres": 140,
        "Texto Profesional": "",
        "Observaciones / Guía": "Orientación para la madre y el bebé."
    },

    # ==========================================
    # 12. PREGUNTAS FRECUENTES (FAQS)
    # ==========================================
    {
        "ID": "FAQ-001",
        "Página": "Preguntas Frecuentes",
        "Elemento": "FAQ 1: Pregunta",
        "Función": "Resolución de duda sobre gravedad y expectativa de vida",
        "Texto Actual": "¿Tener HTLV significa que inevitablemente enfermaré de cáncer o parálisis?",
        "Min Caracteres": 50,
        "Max Caracteres": 85,
        "Texto Profesional": "",
        "Observaciones / Guía": "Pregunta de alta angustia en pacientes recién diagnosticados."
    },
    {
        "ID": "FAQ-002",
        "Página": "Preguntas Frecuentes",
        "Elemento": "FAQ 1: Respuesta Médica",
        "Función": "Explicación estadística y clínica de portadores asintomáticos",
        "Texto Actual": "No. Más del 90% al 95% de las personas que viven con HTLV-1 permanecen como portadores asintomáticos a lo largo de toda su vida y nunca desarrollan patologías asociadas. Solo un porcentaje menor (aproximadamente entre el 2% y 5%) puede desarrollar ATL o HAM/TSP tras periodos de latencia prolongados de décadas. El seguimiento médico periódico permite monitorizar cualquier cambio clínico de manera oportuna.",
        "Min Caracteres": 320,
        "Max Caracteres": 480,
        "Texto Profesional": "",
        "Observaciones / Guía": "Dar cifras exactas basadas en la literatura médica."
    },
    {
        "ID": "FAQ-003",
        "Página": "Preguntas Frecuentes",
        "Elemento": "FAQ 2: Pregunta",
        "Función": "Resolución de duda sobre contagio en el hogar",
        "Texto Actual": "¿Puedo contagiar a mi familia conviviendo en el mismo hogar?",
        "Min Caracteres": 45,
        "Max Caracteres": 75,
        "Texto Profesional": "",
        "Observaciones / Guía": "Duda recurrente sobre estigma intrafamiliar."
    },
    {
        "ID": "FAQ-004",
        "Página": "Preguntas Frecuentes",
        "Elemento": "FAQ 2: Respuesta Médica",
        "Función": "Aclaración sobre convivencia cotidiana segura",
        "Texto Actual": "No. El virus no se transmite por el aire, saliva, sudor, lágrimas, abrazos, besos, compartir cubiertos, vasos, platos ni por usar los mismos servicios higiénicos o ropa de cama. La convivencia familiar cotidiana es 100% segura. Las únicas vías de transmisión comprobadas son sexual sin protección, lactancia materna y transfusión de sangre celular no tamizada.",
        "Min Caracteres": 280,
        "Max Caracteres": 420,
        "Texto Profesional": "",
        "Observaciones / Guía": "Enfatizar la total seguridad de la convivencia familiar."
    },
    {
        "ID": "FAQ-005",
        "Página": "Preguntas Frecuentes",
        "Elemento": "FAQ 3: Pregunta",
        "Función": "Resolución de duda sobre lactancia y maternidad",
        "Texto Actual": "Si soy una mujer diagnosticada con HTLV, ¿puedo dar de amamantar a mi bebé?",
        "Min Caracteres": 55,
        "Max Caracteres": 85,
        "Texto Profesional": "",
        "Observaciones / Guía": "Pregunta crítica en obstetricia y pediatría."
    },
    {
        "ID": "FAQ-006",
        "Página": "Preguntas Frecuentes",
        "Elemento": "FAQ 3: Respuesta Médica",
        "Función": "Explicación de la recomendación de fórmula maternizada",
        "Texto Actual": "Las guías de práctica clínica internacionales recomiendan evitar la lactancia materna exclusiva o prolongada, ya que la leche materna contiene células infectadas que representan la principal vía de transmisión madre-hijo (con un riesgo estimado de 15% a 25% si se amamanta por más de 6 meses). Se aconseja el uso de fórmula infantil maternizada segura desde el nacimiento para proteger completamente al bebé.",
        "Min Caracteres": 340,
        "Max Caracteres": 500,
        "Texto Profesional": "",
        "Observaciones / Guía": "Criterio de la OMS/OPS y consensos de la Red."
    },
    {
        "ID": "FAQ-007",
        "Página": "Preguntas Frecuentes",
        "Elemento": "FAQ 4: Pregunta",
        "Función": "Resolución de duda sobre cura o tratamiento actual",
        "Texto Actual": "¿Existe actualmente una cura definitiva o vacuna para el HTLV?",
        "Min Caracteres": 50,
        "Max Caracteres": 75,
        "Texto Profesional": "",
        "Observaciones / Guía": "Duda médica frecuente."
    },
    {
        "ID": "FAQ-008",
        "Página": "Preguntas Frecuentes",
        "Elemento": "FAQ 4: Respuesta Médica",
        "Función": "Estado del arte de la terapéutica y vacunas",
        "Texto Actual": "Actualmente no se dispone de una cura erradicadora ni de una vacuna preventiva comercialmente aprobada, debido a que el virus integra su genoma en los linfocitos. Sin embargo, existen tratamientos multidisciplinarios efectivos para controlar los síntomas inflamatorios, terapia física y neurourológica para HAM/TSP, y esquemas de quimioterapia e inmunoterapia para ATL. La Red investiga activamente nuevos antivirales e inhibidores moleculares.",
        "Min Caracteres": 360,
        "Max Caracteres": 520,
        "Texto Profesional": "",
        "Observaciones / Guía": "Explicar honestamente el estado de la ciencia actual."
    },

    # ==========================================
    # 13. CONTACTO Y SEDES
    # ==========================================
    {
        "ID": "CNT-001",
        "Página": "Contacto",
        "Elemento": "Título Principal",
        "Función": "Encabezado del canal de comunicación oficial",
        "Texto Actual": "Contacto Institucional",
        "Min Caracteres": 15,
        "Max Caracteres": 30,
        "Texto Profesional": "",
        "Observaciones / Guía": "Formulario y datos de coordinación."
    },
    {
        "ID": "CNT-002",
        "Página": "Contacto",
        "Elemento": "Subtítulo / Instrucción",
        "Función": "Explicación de los motivos válidos de consulta",
        "Texto Actual": "Escríbenos para consultas sobre líneas de investigación, colaboración académica, acceso a capacitaciones o información general de la red.",
        "Min Caracteres": 100,
        "Max Caracteres": 160,
        "Texto Profesional": "",
        "Observaciones / Guía": "Sin asteriscos de obligatoriedad ni campos redundantes."
    },
    {
        "ID": "CNT-003",
        "Página": "Contacto",
        "Elemento": "Etiqueta Campo 1",
        "Función": "Nombre del remitente",
        "Texto Actual": "Nombre Completo",
        "Min Caracteres": 10,
        "Max Caracteres": 20,
        "Texto Profesional": "",
        "Observaciones / Guía": "Sin asterisco obligatorio."
    },
    {
        "ID": "CNT-004",
        "Página": "Contacto",
        "Elemento": "Etiqueta Campo 2",
        "Función": "Correo del remitente",
        "Texto Actual": "Correo Electrónico",
        "Min Caracteres": 12,
        "Max Caracteres": 22,
        "Texto Profesional": "",
        "Observaciones / Guía": "Sin especificar si es personal o institucional."
    },
    {
        "ID": "CNT-005",
        "Página": "Contacto",
        "Elemento": "Etiqueta Campo 3",
        "Función": "Mensaje del remitente",
        "Texto Actual": "Mensaje",
        "Min Caracteres": 6,
        "Max Caracteres": 12,
        "Texto Profesional": "",
        "Observaciones / Guía": "Área de texto para la consulta del usuario."
    },
    {
        "ID": "CNT-006",
        "Página": "Contacto",
        "Elemento": "Título Bloque Sede",
        "Función": "Encabezado de localización física y correo oficial",
        "Texto Actual": "Recuerda que puedes encontrarnos en",
        "Min Caracteres": 25,
        "Max Caracteres": 40,
        "Texto Profesional": "",
        "Observaciones / Guía": "Reemplazó el texto anterior por solicitud expresa."
    },
    {
        "ID": "CNT-007",
        "Página": "Contacto",
        "Elemento": "Dirección Sede Central",
        "Función": "Ubicación física de la coordinación general",
        "Texto Actual": "Av. Honorio Delgado 430, San Martín de Porres, Lima, Perú • IMTAvH - UPCH",
        "Min Caracteres": 50,
        "Max Caracteres": 90,
        "Texto Profesional": "",
        "Observaciones / Guía": "Sede del Instituto de Medicina Tropical Alexander von Humboldt."
    },
    {
        "ID": "CNT-008",
        "Página": "Contacto",
        "Elemento": "Correo Electrónico Oficial",
        "Función": "Buzón institucional de atención",
        "Texto Actual": "contacto@red-htlv.org",
        "Min Caracteres": 15,
        "Max Caracteres": 30,
        "Texto Profesional": "",
        "Observaciones / Guía": "Correo de mesa de ayuda académica."
    },

    # ==========================================
    # 14. FOOTER (PIE DE PÁGINA)
    # ==========================================
    {
        "ID": "FOOT-001",
        "Página": "Global / Footer",
        "Elemento": "Nombre de la Red",
        "Función": "Identidad en el pie de página",
        "Texto Actual": "Red Internacional de Innovación e Investigación en HTLV (RIII-HTLV)",
        "Min Caracteres": 50,
        "Max Caracteres": 75,
        "Texto Profesional": "",
        "Observaciones / Guía": "Nombre institucional completo con sigla."
    },
    {
        "ID": "FOOT-002",
        "Página": "Global / Footer",
        "Elemento": "Descripción Breve",
        "Función": "Resumen en una frase de la misión del consorcio",
        "Texto Actual": "Consorcio científico internacional dedicado a la investigación biomédica, la armonización diagnóstica y las políticas de salud pública para retrovirus humanos.",
        "Min Caracteres": 130,
        "Max Caracteres": 200,
        "Texto Profesional": "",
        "Observaciones / Guía": "Ubicado bajo el logo en el pie de página."
    },
    {
        "ID": "FOOT-003",
        "Página": "Global / Footer",
        "Elemento": "Coordinación Central",
        "Función": "Mención a los dos centros rectores",
        "Texto Actual": "Coordinación Científica: IMTAvH - Universidad Peruana Cayetano Heredia (Lima, Perú) & Imperial College London (Reino Unido)",
        "Min Caracteres": 90,
        "Max Caracteres": 140,
        "Texto Profesional": "",
        "Observaciones / Guía": "Pie de página institucional."
    },
    {
        "ID": "FOOT-004",
        "Página": "Global / Footer",
        "Elemento": "Copyright & Derechos",
        "Función": "Declaración legal de derechos reservados",
        "Texto Actual": "© 2026 Red Internacional de Innovación e Investigación en HTLV (RIII-HTLV). Todos los derechos reservados.",
        "Min Caracteres": 80,
        "Max Caracteres": 120,
        "Texto Profesional": "",
        "Observaciones / Guía": "Línea final del footer con año vigente 2026."
    }
]

df = pd.DataFrame(data)

# Exportar a Excel con formato avanzado usando openpyxl
output_path = os.path.abspath("Contenido_Web_RIII_HTLV_Para_Profesionales.xlsx")

wb = openpyxl.Workbook()
ws = wb.active
ws.title = "Matriz de Contenidos RIII-HTLV"

# Asegurar gridlines visibles
ws.views.sheetView[0].showGridLines = True

# Paleta de colores institucionales de la Red
NAVY_HEADER = "002538"      # Azul marino profundo institucional
TEAL_ACCENT = "087E8B"      # Turquesa institucional
AMBER_HIGHLIGHT = "E5A400"  # Dorado institucional
LIGHT_GRAY = "F8FAFC"       # Fondo claro filas pares
EDITABLE_FILL = "EFF6FF"    # Azul tenue especial para el campo editable del profesional
BORDER_COLOR = "CBD5E1"     # Gris elegante para bordes

font_header = Font(name="Calibri", size=11, bold=True, color="FFFFFF")
font_cell = Font(name="Calibri", size=10, color="0F172A")
font_editable = Font(name="Calibri", size=10, bold=True, color="1E3A8A")
font_id = Font(name="Calibri", size=10, bold=True, color="003B49")

fill_header = PatternFill(start_color=NAVY_HEADER, end_color=NAVY_HEADER, fill_type="solid")
fill_zebra = PatternFill(start_color=LIGHT_GRAY, end_color=LIGHT_GRAY, fill_type="solid")
fill_white = PatternFill(start_color="FFFFFF", end_color="FFFFFF", fill_type="solid")
fill_editable = PatternFill(start_color=EDITABLE_FILL, end_color=EDITABLE_FILL, fill_type="solid")

thin_side = Side(border_style="thin", color=BORDER_COLOR)
border_cell = Border(left=thin_side, right=thin_side, top=thin_side, bottom=thin_side)
border_editable = Border(
    left=Side(border_style="medium", color="2563EB"),
    right=Side(border_style="medium", color="2563EB"),
    top=thin_side,
    bottom=thin_side
)

headers = [
    "ID",
    "Página / Sección",
    "Elemento UI",
    "Función Cumplida (Objetivo UX / Médico)",
    "Texto Actual (Placeholder / Base)",
    "Mín. Caracteres",
    "Máx. Caracteres",
    "Texto Real Sugerido (A rellenar por el Profesional)",
    "Criterio Clínico / Observaciones Técnicas"
]

# Escribir Título general en la fila 1
ws.merge_cells("A1:I1")
title_cell = ws["A1"]
title_cell.value = "MATRIZ DE CONTENIDO Y REDACCIÓN EDITORIAL - RED INTERNACIONAL DE INNOVACIÓN E INVESTIGACIÓN EN HTLV (RIII-HTLV)"
title_cell.font = Font(name="Calibri", size=14, bold=True, color="FFFFFF")
title_cell.fill = PatternFill(start_color=NAVY_HEADER, end_color=NAVY_HEADER, fill_type="solid")
title_cell.alignment = Alignment(horizontal="center", vertical="center")
ws.row_dimensions[1].height = 35

# Subtítulo explicativo en la fila 2
ws.merge_cells("A2:I2")
sub_cell = ws["A2"]
sub_cell.value = "Instrucciones: El profesional o especialista médico debe ingresar los textos oficiales definitivos en la columna H (sombreada en azul claro), respetando los límites sugeridos para preservar la estructura visual del diseño."
sub_cell.font = Font(name="Calibri", size=10, italic=True, color="FFFFFF")
sub_cell.fill = PatternFill(start_color=TEAL_ACCENT, end_color=TEAL_ACCENT, fill_type="solid")
sub_cell.alignment = Alignment(horizontal="center", vertical="center")
ws.row_dimensions[2].height = 25

# Escribir encabezados en fila 4
ws.row_dimensions[4].height = 28
for col_idx, header in enumerate(headers, 1):
    cell = ws.cell(row=4, column=col_idx)
    cell.value = header
    cell.font = font_header
    cell.fill = fill_header
    cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
    cell.border = border_cell

# Escribir filas de datos a partir de fila 5
current_row = 5
for item in data:
    ws.row_dimensions[current_row].height = 45  # Altura cómoda para leer textos largos
    
    # ID
    c1 = ws.cell(row=current_row, column=1, value=item["ID"])
    c1.font = font_id
    c1.alignment = Alignment(horizontal="center", vertical="center")
    c1.border = border_cell
    c1.fill = fill_zebra if current_row % 2 == 0 else fill_white
    
    # Página
    c2 = ws.cell(row=current_row, column=2, value=item["Página"])
    c2.font = font_cell
    c2.alignment = Alignment(horizontal="left", vertical="center")
    c2.border = border_cell
    c2.fill = fill_zebra if current_row % 2 == 0 else fill_white
    
    # Elemento UI
    c3 = ws.cell(row=current_row, column=3, value=item["Elemento"])
    c3.font = font_cell
    c3.alignment = Alignment(horizontal="left", vertical="center")
    c3.border = border_cell
    c3.fill = fill_zebra if current_row % 2 == 0 else fill_white
    
    # Función Cumplida
    c4 = ws.cell(row=current_row, column=4, value=item["Función"])
    c4.font = font_cell
    c4.alignment = Alignment(horizontal="left", vertical="center", wrap_text=True)
    c4.border = border_cell
    c4.fill = fill_zebra if current_row % 2 == 0 else fill_white
    
    # Texto Actual
    c5 = ws.cell(row=current_row, column=5, value=item["Texto Actual"])
    c5.font = font_cell
    c5.alignment = Alignment(horizontal="left", vertical="center", wrap_text=True)
    c5.border = border_cell
    c5.fill = fill_zebra if current_row % 2 == 0 else fill_white
    
    # Mín Caracteres
    c6 = ws.cell(row=current_row, column=6, value=item["Min Caracteres"])
    c6.font = font_cell
    c6.alignment = Alignment(horizontal="center", vertical="center")
    c6.border = border_cell
    c6.fill = fill_zebra if current_row % 2 == 0 else fill_white
    
    # Máx Caracteres
    c7 = ws.cell(row=current_row, column=7, value=item["Max Caracteres"])
    c7.font = font_cell
    c7.alignment = Alignment(horizontal="center", vertical="center")
    c7.border = border_cell
    c7.fill = fill_zebra if current_row % 2 == 0 else fill_white
    
    # Texto Real Sugerido (A rellenar)
    c8 = ws.cell(row=current_row, column=8, value=item["Texto Profesional"])
    c8.font = font_editable
    c8.alignment = Alignment(horizontal="left", vertical="center", wrap_text=True)
    c8.border = border_editable
    c8.fill = fill_editable
    
    # Criterio Clínico / Observaciones
    c9 = ws.cell(row=current_row, column=9, value=item["Observaciones / Guía"])
    c9.font = font_cell
    c9.alignment = Alignment(horizontal="left", vertical="center", wrap_text=True)
    c9.border = border_cell
    c9.fill = fill_zebra if current_row % 2 == 0 else fill_white
    
    current_row += 1

# Ajustar anchos de columnas
col_widths = {
    1: 14,  # ID
    2: 24,  # Página / Sección
    3: 28,  # Elemento UI
    4: 38,  # Función Cumplida
    5: 55,  # Texto Actual
    6: 15,  # Min Caracteres
    7: 15,  # Max Caracteres
    8: 55,  # Texto Real Sugerido (Columna ancha para escribir)
    9: 45   # Criterio Clínico
}

for col_idx, width in col_widths.items():
    col_letter = get_column_letter(col_idx)
    ws.column_dimensions[col_letter].width = width

# Inmovilizar paneles (filas 1 a 4 congeladas para que siempre se vean los encabezados al scrollear)
ws.freeze_panes = "A5"

# Guardar archivo
wb.save(output_path)
print(f"Archivo generado exitosamente en: {output_path}")
