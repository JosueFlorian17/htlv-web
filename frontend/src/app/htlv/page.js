"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';
import FaqSection from '../../components/faqs/FaqSection';

function HTLVContent() {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabFromUrl = searchParams.get('tab');

  const [activeTab, setActiveTab] = useState(tabFromUrl || 'que-es');

  useEffect(() => {
    if (tabFromUrl && ['que-es', 'faqs'].includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <main className="w-full bg-slate-50 min-h-[calc(100vh-80px)] py-8 md:py-12 text-slate-900 flex flex-col justify-between">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de Página */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#003B49] tracking-tight">
              {activeTab === 'que-es'
                ? (lang === 'es' ? '¿Qué es el HTLV?' : 'What is HTLV?')
                : (lang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions')}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="bg-[#003B49] hover:bg-[#002B36] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087E8B]"
            >
              <span className="material-symbols-outlined text-[18px]">print</span>
              <span>{lang === 'es' ? 'Imprimir PDF' : 'Print PDF'}</span>
            </button>
          </div>
        </div>

        {/* 1. PESTAÑA: ¿QUÉ ES EL HTLV? (Minimalista, sin cajas de colores ni florituras) */}
        {activeTab === 'que-es' && (
          <article className="max-w-4xl mx-auto py-2 space-y-10 animate-fadeIn text-slate-800">
            
            {/* 1. ¿Qué es el HTLV? */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                {lang === 'es' ? '¿Qué es el HTLV?' : 'What is HTLV?'}
              </h2>
              <div className="space-y-3 text-base text-slate-700 leading-relaxed font-normal">
                <p>
                  {lang === 'es'
                    ? 'El virus linfotrópico de células T humanas tipo 1 (HTLV-1) es un retrovirus que puede causar cáncer y enfermedades neurológicas en las personas infectadas. Los retrovirus incorporan su material genético al ADN de las células del organismo.'
                    : 'Human T-cell lymphotropic virus type 1 (HTLV-1) is a retrovirus that can cause cancer and neurological diseases in infected individuals. Retroviruses incorporate their genetic material into the DNA of the host organism\'s cells.'}
                </p>
                <p>
                  {lang === 'es'
                    ? 'Un pequeño porcentaje de personas infectadas por HTLV-1 desarrolla leucemia/linfoma de células T del adulto (ATL o ATLL) o mielopatía asociada al HTLV-1/paraparesia espástica tropical (HAM/TSP).'
                    : 'A small percentage of individuals infected with HTLV-1 develops adult T-cell leukemia/lymphoma (ATL or ATLL) or HTLV-1-associated myelopathy/tropical spastic paraparesis (HAM/TSP).'}
                </p>
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* 2. ¿Qué tan frecuente es el HTLV-1? */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                {lang === 'es' ? '¿Qué tan frecuente es el HTLV-1?' : 'How common is HTLV-1?'}
              </h2>
              <div className="space-y-3 text-base text-slate-700 leading-relaxed font-normal">
                <p>
                  {lang === 'es'
                    ? 'El HTLV-1 está presente en diversas regiones del mundo. Se estima que entre 5 y 20 millones de personas viven con esta infección, aunque su frecuencia varía considerablemente entre las distintas poblaciones.'
                    : 'HTLV-1 is present in various regions worldwide. An estimated 5 to 20 million people live with this infection, although its prevalence varies considerably among different populations.'}
                </p>
                <p>
                  {lang === 'es'
                    ? 'Por ejemplo, menos del 1 % de la población de América del Norte está infectada por HTLV-1. En cambio, en determinadas zonas de Japón, África, América del Sur, Australia, Irán y el Caribe, la prevalencia puede alcanzar un tercio de la población o incluso superar esa proporción.'
                    : 'For example, less than 1% of the North American population is infected with HTLV-1. Conversely, in certain areas of Japan, Africa, South America, Australia, Iran, and the Caribbean, prevalence can reach one-third of the population or even exceed that proportion.'}
                </p>
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* 3. Síntomas y causas */}
            <section className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                {lang === 'es' ? 'Síntomas y causas' : 'Symptoms and Causes'}
              </h2>

              {/* ¿Cuáles son los síntomas del HTLV-1? */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-[#003B49]">
                  {lang === 'es' ? '¿Cuáles son los síntomas del HTLV-1?' : 'What are the symptoms of HTLV-1?'}
                </h3>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  {lang === 'es'
                    ? 'La mayoría de las personas infectadas por HTLV-1 no presenta síntomas. Sin embargo, algunas pueden desarrollar enfermedades asociadas al virus varias décadas después de la infección, principalmente leucemia/linfoma de células T del adulto (ATL/ATLL) y mielopatía asociada al HTLV-1/paraparesia espástica tropical (HAM/TSP).'
                    : 'Most people infected with HTLV-1 do not develop symptoms. However, some may develop virus-associated diseases several decades after infection, primarily adult T-cell leukemia/lymphoma (ATL/ATLL) and HTLV-1-associated myelopathy/tropical spastic paraparesis (HAM/TSP).'}
                </p>

                <div className="space-y-2 pt-2">
                  <p className="text-base font-semibold text-slate-800">
                    {lang === 'es' ? 'Los síntomas de ATL/ATLL pueden incluir:' : 'Symptoms of ATL/ATLL may include:'}
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-slate-700">
                    <li>{lang === 'es' ? 'Fatiga' : 'Fatigue'}</li>
                    <li>{lang === 'es' ? 'Erupciones cutáneas' : 'Skin rashes'}</li>
                    <li>{lang === 'es' ? 'Inflamación de los ganglios linfáticos' : 'Swollen lymph nodes'}</li>
                    <li>{lang === 'es' ? 'Estreñimiento' : 'Constipation'}</li>
                    <li>{lang === 'es' ? 'Confusión' : 'Confusion'}</li>
                    <li>{lang === 'es' ? 'Dolor óseo' : 'Bone pain'}</li>
                  </ul>
                </div>

                <div className="space-y-2 pt-2">
                  <p className="text-base font-semibold text-slate-800">
                    {lang === 'es' ? 'Los síntomas de HAM/TSP pueden incluir:' : 'Symptoms of HAM/TSP may include:'}
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-slate-700">
                    <li>{lang === 'es' ? 'Debilidad o rigidez progresiva en una o ambas piernas' : 'Progressive weakness or stiffness in one or both legs'}</li>
                    <li>{lang === 'es' ? 'Dolor de espalda' : 'Back pain'}</li>
                    <li>{lang === 'es' ? 'Incontinencia urinaria' : 'Urinary incontinence'}</li>
                    <li>{lang === 'es' ? 'Entumecimiento u hormigueo (neuropatía periférica)' : 'Numbness or tingling (peripheral neuropathy)'}</li>
                  </ul>
                </div>
              </div>

              {/* ¿Qué enfermedades puede causar el HTLV-1? */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg sm:text-xl font-bold text-[#003B49]">
                  {lang === 'es' ? '¿Qué enfermedades puede causar el HTLV-1?' : 'What diseases can HTLV-1 cause?'}
                </h3>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  {lang === 'es'
                    ? 'El HTLV-1 puede causar leucemia/linfoma de células T del adulto (ATL/ATLL) o mielopatía asociada al HTLV-1/paraparesia espástica tropical (HAM/TSP). Se estima que aproximadamente 1 de cada 20 personas infectadas (5%) desarrollará alguna de estas enfermedades a lo largo de su vida.'
                    : 'HTLV-1 can cause adult T-cell leukemia/lymphoma (ATL/ATLL) or HTLV-1-associated myelopathy/tropical spastic paraparesis (HAM/TSP). It is estimated that approximately 1 in 20 infected individuals (5%) will develop one of these diseases during their lifetime.'}
                </p>

                <div className="space-y-2 pt-1">
                  <h4 className="text-base font-bold text-[#003B49]">
                    {lang === 'es' ? 'Leucemia/linfoma de células T del adulto (ATL/ATLL)' : 'Adult T-cell leukemia/lymphoma (ATL/ATLL)'}
                  </h4>
                  <p className="text-base text-slate-700 leading-relaxed font-normal">
                    {lang === 'es'
                      ? 'Es un tipo de cáncer de la sangre que afecta a los linfocitos T. Se clasifica en cuatro subtipos: agudo, linfomatoso, crónico y latente (smoldering). Cada subtipo presenta características clínicas y opciones de tratamiento diferentes, así como distintos pronósticos.'
                      : 'A type of blood cancer affecting T lymphocytes. It is classified into four subtypes: acute, lymphomatous, chronic, and smoldering. Each subtype features distinct clinical characteristics, treatment options, and prognoses.'}
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  <h4 className="text-base font-bold text-[#003B49]">
                    {lang === 'es' ? 'Mielopatía asociada al HTLV-1/paraparesia espástica tropical (HAM/TSP)' : 'HTLV-1-associated myelopathy/tropical spastic paraparesis (HAM/TSP)'}
                  </h4>
                  <p className="text-base text-slate-700 leading-relaxed font-normal">
                    {lang === 'es'
                      ? 'Es una enfermedad neurológica que presenta algunas características similares a la esclerosis múltiple. Provoca debilidad muscular y alteraciones progresivas del sistema nervioso, que pueden afectar la movilidad y la calidad de vida de las personas.'
                      : 'A neurological disease that shares features with multiple sclerosis. It causes muscle weakness and progressive nervous system impairment that can affect mobility and quality of life.'}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <p className="text-base text-slate-700 leading-relaxed font-normal">
                    {lang === 'es'
                      ? 'El HTLV-1 también podría estar relacionado con enfermedades inflamatorias y autoinmunes. Sin embargo, todavía no se ha establecido una asociación concluyente. Entre estas enfermedades se encuentran:'
                      : 'HTLV-1 may also be associated with inflammatory and autoimmune diseases; however, a conclusive link has not yet been definitively established. Among these conditions are:'}
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-slate-700">
                    <li>{lang === 'es' ? 'Dermatitis' : 'Dermatitis'}</li>
                    <li>{lang === 'es' ? 'Uveítis' : 'Uveitis'}</li>
                    <li>{lang === 'es' ? 'Síndrome de Sjögren' : 'Sjögren\'s syndrome'}</li>
                  </ul>
                </div>
              </div>

              {/* ¿Cómo causa enfermedades el HTLV-1? */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg sm:text-xl font-bold text-[#003B49]">
                  {lang === 'es' ? '¿Cómo causa enfermedades el HTLV-1?' : 'How does HTLV-1 cause diseases?'}
                </h3>
                <div className="space-y-3 text-base text-slate-700 leading-relaxed font-normal">
                  <p>
                    {lang === 'es'
                      ? 'Cuando el HTLV-1 ingresa al organismo, infecta principalmente los linfocitos T CD4+ (también conocidos como células T colaboradoras), que forman parte del sistema inmunitario y ayudan al organismo a combatir las infecciones.'
                      : 'When HTLV-1 enters the body, it primarily infects CD4+ T lymphocytes (also known as helper T cells), which form part of the immune system and help fight infections.'}
                  </p>
                  <p>
                    {lang === 'es'
                      ? 'Al igual que otros retrovirus, el HTLV-1 contiene su información genética en forma de ARN. Una vez dentro de la célula, transforma su ARN en ADN mediante un proceso denominado transcripción inversa. Posteriormente, incorpora ese ADN viral (conocido como provirus) al ADN de la célula infectada.'
                      : 'Like other retroviruses, HTLV-1 carries its genetic information in the form of RNA. Once inside the host cell, it converts its RNA into DNA via reverse transcription. It then integrates this viral DNA (the provirus) into the host cell\'s chromosomal DNA.'}
                  </p>
                  <p>
                    {lang === 'es'
                      ? 'De esta manera, la célula incorpora la información genética del virus y puede utilizarla para producir nuevas copias virales.'
                      : 'In this manner, the host cell permanently integrates the viral genetic code and can use it to produce new viral copies.'}
                  </p>
                  <p>
                    {lang === 'es'
                      ? 'Las nuevas copias del HTLV-1 pueden infectar a otros linfocitos T CD4+. En la mayoría de las personas, este proceso no produce síntomas. Sin embargo, en algunos casos, después de varias décadas, la infección puede provocar una proliferación anormal de linfocitos T y dar lugar al desarrollo de ATL/ATLL. En otros casos, la infección puede asociarse con alteraciones del sistema nervioso y producir HAM/TSP.'
                      : 'These new copies of HTLV-1 can infect other CD4+ T cells. In most individuals, this process causes no symptoms. However, in some cases after several decades, infection can trigger abnormal T-cell proliferation and lead to ATL/ATLL. In other cases, infection may be associated with nervous system damage resulting in HAM/TSP.'}
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* 4. Transmisión del HTLV */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                {lang === 'es' ? 'Transmisión del HTLV' : 'Transmission of HTLV'}
              </h2>
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#003B49]">
                  {lang === 'es' ? '¿Cómo se transmite el HTLV-1?' : 'How is HTLV-1 transmitted?'}
                </h3>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  {lang === 'es'
                    ? 'El HTLV-1 se transmite principalmente a través de las siguientes vías:'
                    : 'HTLV-1 is transmitted primarily through the following routes:'}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-slate-700">
                  <li>
                    <strong className="font-semibold text-slate-900">{lang === 'es' ? 'Transmisión sexual:' : 'Sexual transmission:'}</strong>{' '}
                    {lang === 'es' ? 'mediante relaciones sexuales vaginales, anales u orales' : 'through vaginal, anal, or oral sexual contact'}
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900">{lang === 'es' ? 'Transmisión de madre a hijo:' : 'Mother-to-child transmission:'}</strong>{' '}
                    {lang === 'es' ? 'principalmente a través de la lactancia materna' : 'primarily through prolonged breastfeeding'}
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900">{lang === 'es' ? 'Exposición a sangre contaminada:' : 'Exposure to contaminated blood:'}</strong>{' '}
                    {lang === 'es' ? 'por compartir agujas o jeringas' : 'by sharing needles or syringes'}
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900">{lang === 'es' ? 'Transfusiones de sangre o trasplantes de órganos:' : 'Blood transfusions or organ transplants:'}</strong>{' '}
                    {lang === 'es' ? 'de manera poco frecuente' : 'infrequently, in screened healthcare settings'}
                  </li>
                </ul>
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* 5. Factores de riesgo */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#003B49]">
                {lang === 'es' ? 'Factores de riesgo' : 'Risk Factors'}
              </h2>
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#003B49]">
                  {lang === 'es' ? '¿Cuáles son los factores de riesgo para contraer HTLV-1?' : 'What are the risk factors for acquiring HTLV-1?'}
                </h3>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  {lang === 'es'
                    ? 'Entre los principales factores de riesgo para adquirir la infección por HTLV-1 se encuentran:'
                    : 'Among the primary risk factors for acquiring HTLV-1 infection are:'}
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-base text-slate-700">
                  <li>{lang === 'es' ? 'El uso de drogas inyectables y el intercambio de agujas o jeringas' : 'Injection drug use and sharing needles or syringes'}</li>
                  <li>{lang === 'es' ? 'Haber nacido o vivir en una región donde la infección por HTLV-1 es frecuente' : 'Being born or residing in a region where HTLV-1 infection is prevalent'}</li>
                </ul>

                <div className="pt-2 space-y-2">
                  <p className="text-base text-slate-700 leading-relaxed font-normal">
                    {lang === 'es'
                      ? 'Las regiones donde se han identificado mayores prevalencias de HTLV-1 incluyen:'
                      : 'Regions identified with higher prevalence of HTLV-1 include:'}
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-slate-700">
                    <li>{lang === 'es' ? 'Suroeste de Japón' : 'Southwestern Japan'}</li>
                    <li>{lang === 'es' ? 'África subsahariana' : 'Sub-Saharan Africa'}</li>
                    <li>{lang === 'es' ? 'Algunas regiones de América del Sur' : 'Certain regions of South America'}</li>
                    <li>{lang === 'es' ? 'El Caribe' : 'The Caribbean'}</li>
                    <li>{lang === 'es' ? 'Norte de Irán' : 'Northern Iran'}</li>
                    <li>{lang === 'es' ? 'Australia Central' : 'Central Australia'}</li>
                  </ul>
                </div>

                <p className="text-base text-slate-700 leading-relaxed font-normal pt-2">
                  {lang === 'es'
                    ? 'Es importante tener en cuenta que la prevalencia de HTLV-1 no es uniforme dentro de un mismo país o región. Algunas localidades pueden presentar tasas de infección muy elevadas, mientras que otras zonas de ese mismo territorio pueden tener una prevalencia considerablemente menor.'
                    : 'It is important to bear in mind that HTLV-1 prevalence is not uniform within a country or region. Certain localities can present very elevated infection rates, while other areas of that same territory may have considerably lower prevalence.'}
                </p>
              </div>
            </section>

          </article>
        )}

        {/* 2. PESTAÑA: PREGUNTAS FRECUENTES */}
        {activeTab === 'faqs' && <FaqSection lang={lang} />}

      </div>
    </main>
  );
}

export default function HTLVPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-20 text-center font-bold text-[#003B49]">Cargando...</div>}>
      <HTLVContent />
    </Suspense>
  );
}
