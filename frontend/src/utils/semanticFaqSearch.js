/**
 * Utilidad de búsqueda semántica y expansión de sinónimos para FAQs de HTLV
 * Soporte bilingüe (Español / Inglés)
 */

// Diccionario semántico de sinónimos y conceptos clínicos relacionados
export const HTLV_SYNONYMS = {
  // Transmisión y contagio
  transmision: ['contagio', 'propagar', 'infeccion', 'transmitir', 'pasar', 'adquirir', 'via', 'vias', 'diseminacion', 'pegar', 'transmission', 'spread', 'contract', 'routes', 'vertical', 'horizontal'],
  transmission: ['transmision', 'spread', 'contagion', 'infection', 'acquire', 'routes', 'pass', 'vertical', 'horizontal', 'mother'],
  contagio: ['transmision', 'propagar', 'infeccion', 'transmitir', 'pasar', 'adquirir', 'vias', 'contagious', 'spread'],
  sexo: ['sexual', 'sexuales', 'relaciones', 'coito', 'preservativo', 'condon', 'pareja', 'sex', 'condom', 'partner', 'intercourse'],
  sex: ['sexual', 'relations', 'condom', 'partner', 'intercourse', 'protection', 'preservativo', 'sexo'],
  lactancia: ['leche', 'bebe', 'hijo', 'madre', 'pecho', 'materna', 'formula', 'maternidad', 'amamantar', 'calostro', 'breastfeeding', 'milk', 'baby', 'infant', 'mother', 'nursing', 'colostrum'],
  breastfeeding: ['milk', 'baby', 'infant', 'mother', 'formula', 'nursing', 'colostrum', 'lactancia', 'leche', 'amamantar'],
  sangre: ['transfusion', 'donacion', 'donar', 'plasma', 'banco de sangre', 'agujas', 'jeringas', 'pinchazo', 'blood', 'donation', 'transfusion', 'needles'],
  blood: ['transfusion', 'donation', 'donate', 'plasma', 'blood bank', 'needles', 'sangre', 'transfusiones'],
  
  // Enfermedades y síntomas
  sintomas: ['signos', 'molestias', 'dolor', 'manifestaciones', 'clinica', 'cuadro', 'complicaciones', 'symptoms', 'signs', 'pain'],
  symptoms: ['signs', 'pain', 'manifestations', 'clinical', 'complications', 'sintomas', 'molestias'],
  paraparesia: ['ham', 'tsp', 'mielopatia', 'paralisis', 'piernas', 'caminar', 'marcha', 'rigidez', 'espastica', 'orina', 'vejiga', 'incontinencia', 'neurologico', 'nervios', 'myelopathy', 'spastic', 'stiffness', 'legs', 'walking', 'bladder', 'urinary'],
  ham: ['tsp', 'paraparesia', 'mielopatia', 'espastica', 'piernas', 'caminar', 'rigidez', 'vejiga', 'myelopathy', 'spastic', 'paraparesis'],
  myelopathy: ['ham', 'tsp', 'paraparesis', 'spastic', 'legs', 'walking', 'stiffness', 'mielopatia', 'paraparesia'],
  leucemia: ['linfoma', 'atl', 'atll', 'cancer', 'tumor', 'neoplasia', 'onco', 'hematologico', 'globulos blancos', 'leukemia', 'lymphoma', 'white blood cells'],
  leukemia: ['lymphoma', 'atl', 'atll', 'cancer', 'tumor', 'leucemia', 'linfoma'],
  uveitis: ['ojo', 'ojos', 'vista', 'vision', 'ocular', 'inflamacion', 'moscas', 'volantes', 'eye', 'eyes', 'sight', 'blur', 'hu', 'hau'],
  eye: ['uveitis', 'vision', 'sight', 'ocular', 'blur', 'floaters', 'ojo', 'vista'],
  artritis: ['reumatoide', 'articulaciones', 'reumatologia', 'arthritis', 'rheumatoid', 'joints'],
  arthritis: ['rheumatoid', 'joints', 'artritis', 'reumatoide'],
  piel: ['dermatitis', 'infecciosa', 'erupcion', 'alergia', 'comezon', 'skin', 'rash'],

  // Pruebas y diagnóstico
  diagnostico: ['prueba', 'test', 'analisis', 'tamizaje', 'descarte', 'resultado', 'positivo', 'negativo', 'serologia', 'elisa', 'western blot', 'pcr', 'inmunoblot', 'indeterminado', 'diagnosis', 'screening', 'testing'],
  diagnosis: ['test', 'testing', 'screening', 'elisa', 'western blot', 'pcr', 'immunoblot', 'indeterminate', 'positive', 'negative', 'diagnostico'],
  prueba: ['diagnostico', 'test', 'analisis', 'tamizaje', 'descarte', 'positivo', 'serologia', 'pcr', 'testing', 'screening'],
  screening: ['tamizaje', 'prueba', 'cribado', 'test', 'initial'],
  carga: ['proviral', 'cpv', 'copias', 'cuantificacion', 'adn', 'dna', 'linfocitos', 'cantidad', 'load', 'proviral load', 'copies'],
  load: ['proviral', 'copies', 'dna', 'quantification', 'carga'],

  // Manejo y terapia
  cura: ['curar', 'tratamiento', 'medicamento', 'farmaco', 'pastilla', 'terapia', 'remedio', 'alivio', 'vacuna', 'cure', 'treatment', 'medication'],
  cure: ['treatment', 'medication', 'therapy', 'vaccine', 'cura', 'tratamiento'],
  tratamiento: ['cura', 'curar', 'medicamento', 'farmaco', 'terapia', 'pastillas', 'corticoides', 'esteroides', 'interferon', 'quimioterapia', 'vacuna', 'treatment', 'therapy', 'drugs', 'steroids', 'chemotherapy'],
  treatment: ['therapy', 'medication', 'drugs', 'steroids', 'corticosteroids', 'interferon', 'chemotherapy', 'tratamiento', 'terapia'],
  vacuna: ['inmunizacion', 'prevencion', 'cura', 'profilaxis', 'vaccine', 'vaccination'],
  vaccine: ['immunization', 'vacuna', 'shots'],

  // Conceptos generales
  diferencia: ['vih', 'sida', 'distinto', 'comparacion', 'virus', 'difference', 'hiv', 'aids'],
  vih: ['sida', 'inmunodeficiencia', 'diferencia', 'retrovirus', 'hiv', 'aids'],
  hiv: ['aids', 'vih', 'sida', 'retrovirus', 'difference'],
  embarazo: ['gestacion', 'parto', 'bebe', 'hijo', 'madre', 'maternidad', 'cesarea', 'prenatal', 'pregnancy', 'delivery', 'cesarean'],
  pregnancy: ['prenatal', 'maternal', 'delivery', 'baby', 'infant', 'childbirth', 'cesarean', 'embarazo', 'parto'],
  familia: ['pareja', 'hijos', 'convivencia', 'abrazos', 'besos', 'casa', 'cubiertos', 'cotidiano', 'hermanos', 'family', 'household', 'children'],
  family: ['household', 'partner', 'children', 'relatives', 'siblings', 'familia', 'hijos']
};

// Normalizar texto (remover acentos, signos y convertir a minúsculas)
export function normalizeText(text = '') {
  return String(text)
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
 * @param {Object} faq - { q: string, a: string, categoryLabel?: string, sectionTitle?: string }
 * @returns {number} Score de relevancia (0 si no coincide)
 */
export function calculateSemanticScore(query, faq) {
  const normQuery = normalizeText(query);
  if (!normQuery) return 1;

  const normQ = normalizeText(faq.q || '');
  const normA = normalizeText(faq.a || '');
  const normCat = normalizeText(faq.categoryLabel || faq.sectionTitle || '');

  // Coincidencia exacta completa en pregunta o categoría (máxima puntuación)
  if (normQ.includes(normQuery)) return 100;
  if (normCat.includes(normQuery)) return 80;

  const queryTokens = normQuery.split(' ').filter(t => t.length > 1);
  if (queryTokens.length === 0) return 0;

  // Expandir tokens con sinónimos
  const expandedTokens = new Set(queryTokens);
  queryTokens.forEach(token => {
    if (HTLV_SYNONYMS[token]) {
      HTLV_SYNONYMS[token].forEach(syn => expandedTokens.add(syn));
    }
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
    // En la categoría / sección
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
