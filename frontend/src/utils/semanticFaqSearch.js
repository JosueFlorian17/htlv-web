/**
 * Utilidad de búsqueda semántica y expansión de sinónimos para FAQs de HTLV
 */

// Diccionario semántico de sinónimos y conceptos clínicos relacionados
export const HTLV_SYNONYMS = {
  // Transmisión y contagio
  transmision: ['contagio', 'propagar', 'infeccion', 'transmitir', 'pasar', 'adquirir', 'via', 'vias', 'diseminacion', 'pegar'],
  contagio: ['transmision', 'propagar', 'infeccion', 'transmitir', 'pasar', 'adquirir', 'vias'],
  sexo: ['sexual', 'sexuales', 'relaciones', 'coito', 'preservativo', 'condon', 'pareja'],
  lactancia: ['leche', 'bebe', 'hijo', 'madre', 'pecho', 'materna', 'formula', 'maternidad', 'amamantar'],
  sangre: ['transfusion', 'donacion', 'donar', 'plasma', 'banco de sangre', 'agujas', 'jeringas', 'pinchazo'],
  
  // Enfermedades y síntomas
  sintomas: ['signos', 'molestias', 'dolor', 'manifestaciones', 'clinica', 'cuadro', 'complicaciones'],
  paraparesia: ['ham', 'tsp', 'mielopatia', 'paralisis', 'piernas', 'caminar', 'marcha', 'rigidez', 'espastica', 'orina', 'vejiga', 'incontinencia', 'neurologico', 'nervios'],
  leucemia: ['linfoma', 'atl', 'cancer', 'tumor', 'neoplasia', 'onco', 'hematologico', 'globulos blancos'],
  uveitis: ['ojo', 'ojos', 'vista', 'vision', 'ocular', 'inflamacion'],
  piel: ['dermatitis', 'infecciosa', 'erupcion', 'alergia', 'comezon'],

  // Pruebas y diagnóstico
  diagnostico: ['prueba', 'test', 'analisis', 'tamizaje', 'descarte', 'resultado', 'positivo', 'negativo', 'serologia', 'elisa', 'western blot', 'pcr'],
  prueba: ['diagnostico', 'test', 'analisis', 'tamizaje', 'descarte', 'positivo', 'serologia', 'pcr'],
  carga: ['proviral', 'cpv', 'copias', 'cuantificacion', 'ADN', 'linfocitos', 'cantidad'],

  // Manejo y terapia
  cura: ['curar', 'tratamiento', 'medicamento', 'farmaco', 'pastilla', 'terapia', 'remedio', 'alivio', 'vacuna'],
  tratamiento: ['cura', 'curar', 'medicamento', 'farmaco', 'terapia', 'pastillas', 'corticoides', 'interferon', 'quimioterapia', 'vacuna', 'ensayos'],
  vacuna: ['inmunizacion', 'prevencion', 'cura', 'profilaxis'],

  // Conceptos generales
  diferencia: ['vih', 'sida', 'distinto', 'comparacion', 'virus'],
  vih: ['sida', 'inmunodeficiencia', 'diferencia', 'retrovirus'],
  embarazo: ['gestacion', 'parto', 'bebe', 'hijo', 'madre', 'maternidad', 'cesarea'],
  familia: ['pareja', 'hijos', 'convivencia', 'abrazos', 'besos', 'casa', 'cubiertos', 'cotidiano']
};

// Normalizar texto (remover acentos, signos y convertir a minúsculas)
export function normalizeText(text = '') {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Quita tildes
    .replace(/[^a-z0-9\s]/g, ' ') // Solo alfanumérico y espacios
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Realiza un scoring semántico de un elemento FAQ dado un query de usuario.
 * @param {string} query - Lo que el usuario escribe en el buscador
 * @param {Object} faq - { q: string, a: string, categoryLabel?: string }
 * @returns {number} Score de relevancia (0 si no coincide)
 */
export function calculateSemanticScore(query, faq) {
  const normQuery = normalizeText(query);
  if (!normQuery) return 1;

  const normQ = normalizeText(faq.q || '');
  const normA = normalizeText(faq.a || '');
  const normCat = normalizeText(faq.categoryLabel || '');

  // Coincidencia exacta completa en pregunta o categoría (máxima puntuación)
  if (normQ.includes(normQuery)) return 100;
  if (normCat.includes(normQuery)) return 80;

  const queryTokens = normQuery.split(' ').filter(t => t.length > 1);
  if (queryTokens.length === 0) return 0;

  // Expandir tokens con sinónimos
  const expandedTokens = new Set(queryTokens);
  queryTokens.forEach(token => {
    // Si el token directo está en el diccionario
    if (HTLV_SYNONYMS[token]) {
      HTLV_SYNONYMS[token].forEach(syn => expandedTokens.add(syn));
    }
    // Si el token es subcadena o contiene alguna clave
    Object.keys(HTLV_SYNONYMS).forEach(key => {
      if (token.includes(key) || key.includes(token)) {
        HTLV_SYNONYMS[key].forEach(syn => expandedTokens.add(syn));
      }
    });
  });

  let score = 0;
  let matchesCount = 0;

  expandedTokens.forEach(token => {
    const isDirectToken = queryTokens.includes(token);
    const weight = isDirectToken ? 3 : 1.5;

    // En el título de la pregunta (peso más alto)
    if (normQ.includes(token)) {
      score += 10 * weight;
      matchesCount++;
    }
    // En la categoría
    else if (normCat.includes(token)) {
      score += 6 * weight;
      matchesCount++;
    }
    // En el cuerpo de la respuesta
    else if (normA.includes(token)) {
      score += 3 * weight;
      matchesCount++;
    }
  });

  return matchesCount > 0 ? score : 0;
}

/**
 * Filtra y ordena las FAQs según la búsqueda semántica
 */
export function filterFaqsSemantically(faqs, query) {
  if (!query || !query.trim()) return faqs;

  const scored = faqs
    .map(faq => ({
      faq,
      score: calculateSemanticScore(query, faq)
    }))
    .filter(item => item.score > 0);

  // Ordenar de mayor relevancia a menor
  scored.sort((a, b) => b.score - a.score);

  return scored.map(item => item.faq);
}
