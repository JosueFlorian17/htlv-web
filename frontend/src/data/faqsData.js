// FAQ Data extracted strictly from official Excel with 15 sections and 160 Q&As
// Bilingual (Spanish and English) with semantic search support

export const FAQ_SECTIONS = [
  {
    "id": "sec-01",
    "number": 1,
    "title": {
      "es": "Fundamentos del HTLV-1",
      "en": "HTLV-1 Fundamentals"
    },
    "count": 19
  },
  {
    "id": "sec-02",
    "number": 2,
    "title": {
      "es": "Pruebas para detectar la infección por HTLV",
      "en": "Testing for HTLV Infection"
    },
    "count": 11
  },
  {
    "id": "sec-03",
    "number": 3,
    "title": {
      "es": "Pruebas durante el control prenatal",
      "en": "Testing During Prenatal Care"
    },
    "count": 5
  },
  {
    "id": "sec-04",
    "number": 4,
    "title": {
      "es": "Transmisión e infección",
      "en": "Transmission and Infection"
    },
    "count": 13
  },
  {
    "id": "sec-05",
    "number": 5,
    "title": {
      "es": "Prevención de la infección",
      "en": "Infection Prevention"
    },
    "count": 5
  },
  {
    "id": "sec-06",
    "number": 6,
    "title": {
      "es": "Prevención de transmisión maternoinfantil",
      "en": "Mother-to-Child Transmission Prevention"
    },
    "count": 6
  },
  {
    "id": "sec-07",
    "number": 7,
    "title": {
      "es": "Personas portadoras",
      "en": "Carriers of HTLV-1"
    },
    "count": 17
  },
  {
    "id": "sec-08",
    "number": 8,
    "title": {
      "es": "Gestantes portadoras",
      "en": "Pregnant Carriers"
    },
    "count": 12
  },
  {
    "id": "sec-09",
    "number": 9,
    "title": {
      "es": "Hijos de personas portadoras",
      "en": "Children of Carriers"
    },
    "count": 13
  },
  {
    "id": "sec-10",
    "number": 10,
    "title": {
      "es": "Enfermedades asociadas: ATLL",
      "en": "Associated Diseases: ATLL"
    },
    "count": 16
  },
  {
    "id": "sec-11",
    "number": 11,
    "title": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "count": 23
  },
  {
    "id": "sec-12",
    "number": 12,
    "title": {
      "es": "Enfermedades asociadas: HU/HAU",
      "en": "Associated Diseases: HU/HAU"
    },
    "count": 9
  },
  {
    "id": "sec-13",
    "number": 13,
    "title": {
      "es": "Otras enfermedades relacionadas",
      "en": "Other Related Conditions"
    },
    "count": 3
  },
  {
    "id": "sec-14",
    "number": 14,
    "title": {
      "es": "Prevención de enfermedades",
      "en": "Disease Prevention"
    },
    "count": 2
  },
  {
    "id": "sec-15",
    "number": 15,
    "title": {
      "es": "Sistemas de apoyo y prestaciones",
      "en": "Support Systems and Services"
    },
    "count": 6
  }
];

export const FAQS_DATA = [
  {
    "id": 1,
    "sectionId": "sec-01",
    "sectionNumber": 1,
    "sectionTitle": {
      "es": "Fundamentos del HTLV-1",
      "en": "HTLV-1 Fundamentals"
    },
    "q": {
      "es": "¿Qué es el HTLV-1?",
      "en": "What is HTLV-1?"
    },
    "a": {
      "es": "El HTLV-1 (virus linfotrópico de células T humanas tipo 1) es un retrovirus que infecta principalmente ciertos linfocitos T, un tipo de glóbulo blanco. Es diferente del VIH: ambos pertenecen a la familia de los retrovirus, pero son virus distintos y causan problemas de salud diferentes. En Perú es una infección de importancia para la salud pública. Recuerda que tener el virus no significa que la persona vaya a desarrollar necesariamente una enfermedad.",
      "en": "HTLV-1 (human T-cell lymphotropic virus type 1) is a retrovirus that primarily infects certain T lymphocytes, a type of white blood cell. It is different from HIV: both belong to the retrovirus family, but they are different viruses and cause different health problems. In Peru it is an infection of importance for public health. Remember that having the virus does not mean that the person will necessarily develop a disease."
    }
  },
  {
    "id": 2,
    "sectionId": "sec-01",
    "sectionNumber": 1,
    "sectionTitle": {
      "es": "Fundamentos del HTLV-1",
      "en": "HTLV-1 Fundamentals"
    },
    "q": {
      "es": "¿Qué es un retrovirus?",
      "en": "What is a retrovirus?"
    },
    "a": {
      "es": "Un retrovirus es un tipo de virus cuyo material genético está formado por ARN. Cuando entra en una célula humana, utiliza una enzima llamada transcriptasa inversa para convertir ese ARN en ADN. Luego, este ADN se incorpora al material genético de la célula y puede permanecer allí, permitiendo que el virus continúe su ciclo de infección.  El HTLV-1 es un retrovirus humano porque infecta las células de las personas.",
      "en": "A retrovirus is a type of virus whose genetic material is made up of RNA. When it enters a human cell, it uses an enzyme called reverse transcriptase to convert that RNA into DNA. This DNA is then incorporated into the cell's genetic material and can remain there, allowing the virus to continue its infection cycle.  HTLV-1 is a human retrovirus because it infects people's cells."
    }
  },
  {
    "id": 3,
    "sectionId": "sec-01",
    "sectionNumber": 1,
    "sectionTitle": {
      "es": "Fundamentos del HTLV-1",
      "en": "HTLV-1 Fundamentals"
    },
    "q": {
      "es": "¿Qué es un provirus?",
      "en": "What is a provirus?"
    },
    "a": {
      "es": "Cuando el HTLV-1 infecta una célula, convierte su material genético (ARN) en ADN y lo incorpora al ADN de la célula. Esta copia del material genético del virus, que queda dentro de la célula, se conoce como provirus. El provirus contiene la información necesaria para producir componentes del virus, como su material genético y sus proteínas. Sin embargo, a diferencia del VIH, el HTLV-1 produce muy pocas partículas virales capaces de infectar otras células. Por eso, es poco frecuente encontrar el virus libre en la sangre. Una vez que se incorpora al ADN de la célula, el provirus permanece allí. Puede integrarse en diferentes lugares del ADN y, por lo general, cada célula infectada contiene una sola copia.",
      "en": "When HTLV-1 infects a cell, it converts its genetic material (RNA) into DNA and incorporates it into the cell's DNA. This copy of the virus's genetic material, which remains inside the cell, is known as a provirus. The provirus contains the information necessary to produce components of the virus, such as its genetic material and proteins. However, unlike HIV, HTLV-1 produces very few viral particles capable of infecting other cells. Therefore, it is rare to find the virus free in the blood. Once incorporated into the cell's DNA, the provirus remains there. It can integrate into different places in the DNA, and each infected cell usually contains a single copy."
    }
  },
  {
    "id": 4,
    "sectionId": "sec-01",
    "sectionNumber": 1,
    "sectionTitle": {
      "es": "Fundamentos del HTLV-1",
      "en": "HTLV-1 Fundamentals"
    },
    "q": {
      "es": "¿En qué parte del organismo infecta el HTLV-1?",
      "en": "Where in the body does HTLV-1 infect?"
    },
    "a": {
      "es": "El HTLV-1 infecta principalmente células del sistema inmunitario, especialmente un tipo de glóbulo blanco llamado linfocito T CD4. Estas células se encuentran en la sangre y también en diferentes tejidos del organismo, como los ganglios linfáticos. Por eso, el HTLV-1 no afecta únicamente a un órgano, sino que puede permanecer en distintas partes del cuerpo donde se encuentran las células infectadas.",
      "en": "HTLV-1 primarily infects cells of the immune system, especially a type of white blood cell called a CD4 T cell. These cells are found in the blood and also in different tissues of the body, such as lymph nodes. Therefore, HTLV-1 does not only affect one organ, but can remain in different parts of the body where infected cells are found."
    }
  },
  {
    "id": 5,
    "sectionId": "sec-01",
    "sectionNumber": 1,
    "sectionTitle": {
      "es": "Fundamentos del HTLV-1",
      "en": "HTLV-1 Fundamentals"
    },
    "q": {
      "es": "¿Qué ocurre después de que el HTLV-1 entra en una célula T?",
      "en": "What happens after HTLV-1 enters a T cell?"
    },
    "a": {
      "es": "Cuando el HTLV-1 entra en una célula T, utiliza una enzima llamada transcriptasa inversa para convertir su material genético (ARN) en ADN. Luego, este ADN se incorpora al material genético de la célula. A esta copia del virus que queda integrada se le conoce como provirus. Por eso, una persona se considera infectada por HTLV-1 cuando el material genético del virus se encuentra integrado en el ADN de sus células.",
      "en": "When HTLV-1 enters a T cell, it uses an enzyme called reverse transcriptase to convert its genetic material (RNA) into DNA. This DNA is then incorporated into the cell's genetic material. This copy of the virus that remains integrated is known as a provirus. Therefore, a person is considered infected by HTLV-1 when the genetic material of the virus is integrated into the DNA of their cells."
    }
  },
  {
    "id": 6,
    "sectionId": "sec-01",
    "sectionNumber": 1,
    "sectionTitle": {
      "es": "Fundamentos del HTLV-1",
      "en": "HTLV-1 Fundamentals"
    },
    "q": {
      "es": "¿Qué es una célula infectada por HTLV-1?",
      "en": "What is an HTLV-1 infected cell?"
    },
    "a": {
      "es": "Una célula infectada por HTLV-1 es una célula que contiene el material genético del virus integrado en su propio ADN. Esto significa que el virus ha incorporado su información genética dentro de la célula y puede permanecer allí durante mucho tiempo. El HTLV-1 infecta principalmente un tipo de glóbulo blanco llamado linfocito T CD4, que normalmente se encuentran en la sangre y en tejidos linfáticos, como los ganglios linfáticos.",
      "en": "A cell infected by HTLV-1 is a cell that contains the genetic material of the virus integrated into its own DNA. This means that the virus has incorporated its genetic information into the cell and can remain there for a long time. HTLV-1 primarily infects a type of white blood cell called a CD4 T cell, which is normally found in the blood and lymphatic tissues, such as lymph nodes."
    }
  },
  {
    "id": 7,
    "sectionId": "sec-01",
    "sectionNumber": 1,
    "sectionTitle": {
      "es": "Fundamentos del HTLV-1",
      "en": "HTLV-1 Fundamentals"
    },
    "q": {
      "es": "Una vez que una persona se infecta por HTLV-1, ¿permanece infectada para siempre?",
      "en": "Once a person is infected with HTLV-1, does he or she stay infected forever?"
    },
    "a": {
      "es": "La infección por HTLV-1 ocurre cuando el material genético del virus se integra en el ADN cromosómico (genómico) de la célula huésped y se convierte en un provirus. Una vez integrado, el provirus no se desprende y se transmite a las células descendientes cuando la célula se divide. Actualmente no es posible eliminar el provirus mediante medicamentos u otros medios, por lo que, una vez establecida la infección por HTLV-1, esta persiste durante toda la vida.",
      "en": "HTLV-1 infection occurs when the virus's genetic material integrates into the chromosomal (genomic) DNA of the host cell and becomes a provirus. Once integrated, the provirus does not break off and is transmitted to descendant cells when the cell divides. It is currently not possible to eliminate the provirus through medication or other means, so once HTLV-1 infection is established, it persists throughout life."
    }
  },
  {
    "id": 8,
    "sectionId": "sec-01",
    "sectionNumber": 1,
    "sectionTitle": {
      "es": "Fundamentos del HTLV-1",
      "en": "HTLV-1 Fundamentals"
    },
    "q": {
      "es": "¿Cómo se propaga la infección por HTLV-1 dentro del organismo?",
      "en": "How does HTLV-1 infection spread within the body?"
    },
    "a": {
      "es": "El HTLV-1 se propaga dentro del organismo de dos maneras. La primera ocurre cuando una célula infectada entra en contacto con una célula sana y le transmite el virus, lo que puede dar lugar a una nueva infección.\n\nLa segunda ocurre cuando una célula infectada se multiplica y produce nuevas células que también contienen el virus. A este proceso se le conoce como proliferación clonal.",
      "en": "HTLV-1 spreads within the body in two ways. The first occurs when an infected cell comes into contact with a healthy cell and transmits the virus to it, which can lead to a new infection.\n\nThe second occurs when an infected cell multiplies and produces new cells that also contain the virus. This process is known as clonal proliferation."
    }
  },
  {
    "id": 9,
    "sectionId": "sec-01",
    "sectionNumber": 1,
    "sectionTitle": {
      "es": "Fundamentos del HTLV-1",
      "en": "HTLV-1 Fundamentals"
    },
    "q": {
      "es": "¿Cómo controla el organismo la infección por HTLV-1?",
      "en": "How does the body control HTLV-1 infection?"
    },
    "a": {
      "es": "El sistema inmunitario humano ayuda a mantener bajo control la infección por HTLV-1, limitando su propagación dentro del organismo. Aunque el virus permanece en las células infectadas, las defensas del cuerpo ayudan a evitar que estas aumenten en número de manera descontrolada.\n\nPor eso, en la mayoría de las personas, la cantidad de células infectadas se mantiene relativamente estable gracias al equilibrio entre la capacidad del virus para propagarse y la respuesta del sistema inmunitario.",
      "en": "The human immune system helps keep HTLV-1 infection under control, limiting its spread within the body. Although the virus remains in infected cells, the body's defenses help prevent them from increasing in number uncontrollably.\n\nTherefore, in most people, the number of infected cells remains relatively stable thanks to the balance between the virus's ability to spread and the immune system's response."
    }
  },
  {
    "id": 10,
    "sectionId": "sec-01",
    "sectionNumber": 1,
    "sectionTitle": {
      "es": "Fundamentos del HTLV-1",
      "en": "HTLV-1 Fundamentals"
    },
    "q": {
      "es": "¿Qué significa ser portador de HTLV-1?",
      "en": "What does it mean to be a carrier of HTLV-1?"
    },
    "a": {
      "es": "A diferencia de virus como el de la gripe, la infección por HTLV-1 no suele producir síntomas. Alrededor del 95 % de las personas infectadas por HTLV-1 no desarrolla durante su vida enfermedades causadas por esta infección y puede vivir de la misma manera que una persona no infectada. Se denomina portadora de HTLV-1 a la persona que mantiene el virus en su organismo sin presentar síntomas. Sin embargo, algunas personas portadoras pueden desarrollar enfermedades como la leucemia/linfoma de células T del adulto (ATLL), la mielopatía asociada al HTLV-1 (HAM) y la uveítis asociada al HTLV-1 (HU/HAU).",
      "en": "Unlike viruses such as the flu, HTLV-1 infection does not usually cause symptoms. About 95% of people infected with HTLV-1 do not develop diseases caused by this infection during their lifetime and can live the same life as an uninfected person. A person who maintains the virus in their body without presenting symptoms is called an HTLV-1 carrier. However, some carriers can develop diseases such as adult T-cell leukemia/lymphoma (ATLL), HTLV-1-associated myelopathy (HAM), and HTLV-1-associated uveitis (HU/HAU)."
    }
  },
  {
    "id": 11,
    "sectionId": "sec-01",
    "sectionNumber": 1,
    "sectionTitle": {
      "es": "Fundamentos del HTLV-1",
      "en": "HTLV-1 Fundamentals"
    },
    "q": {
      "es": "¿Qué enfermedades puede causar la infección por HTLV-1?",
      "en": "What diseases can HTLV-1 infection cause?"
    },
    "a": {
      "es": "A lo largo de su vida, alrededor del 5 % de las personas portadoras de HTLV-1 desarrolla la leucemia/linfoma de células T del adulto (ATLL), una enfermedad de la sangre, y aproximadamente el 0,3 % desarrolla la mielopatía asociada al HTLV-1 (HAM), una enfermedad neurológica. También se sabe que entre 90 y 110 de cada 100.000 portadores presentan uveítis asociada al HTLV-1 (HU/HAU), una enfermedad ocular. Se sospecha que el HTLV-1 también podría estar relacionado con el síndrome de Sjögren, la miositis, enfermedades pulmonares y la artritis, pero la relación causal no está clara. Una misma persona puede desarrollar más de una de estas enfermedades.",
      "en": "Over the course of their lives, about 5% of people who carry HTLV-1 develop adult T-cell leukemia/lymphoma (ATLL), a blood disease, and about 0.3% develop HTLV-1-associated myelopathy (HAM), a neurological disease. It is also known that between 90 and 110 out of every 100,000 carriers have HTLV-1-associated uveitis (HU/HAU), an eye disease. It is suspected that HTLV-1 could also be related to Sjögren's syndrome, myositis, lung diseases and arthritis, but the causal relationship is unclear. The same person can develop more than one of these diseases."
    }
  },
  {
    "id": 12,
    "sectionId": "sec-01",
    "sectionNumber": 1,
    "sectionTitle": {
      "es": "Fundamentos del HTLV-1",
      "en": "HTLV-1 Fundamentals"
    },
    "q": {
      "es": "¿Qué personas portadoras de HTLV-1 tienen mayor probabilidad de desarrollar ATLL?",
      "en": "Which HTLV-1 carriers are most likely to develop ATLL?"
    },
    "a": {
      "es": "No todas las personas que tienen HTLV-1 desarrollan leucemia/linfoma de células T del adulto (ATLLL). Sin embargo, algunas características pueden aumentar la probabilidad de desarrollar esta enfermedad. Normalmente, el sistema inmunitario ayuda a mantener bajo control las células infectadas por HTLV-1. En algunas personas, una célula infectada puede comenzar a multiplicarse más de lo habitual y producir muchas copias de sí misma. A este grupo de células se le conoce como clon. Con el tiempo, estas células pueden acumular cambios en su material genético y, en algunos casos, convertirse en células cancerosas, causando el ATLLL.\n\nSe ha observado un mayor riesgo de desarrollar ATLLL en personas cuya carga proviral es elevada. Algunos estudios han identificado un mayor riesgo cuando las células infectadas representan el 4 % o más de las células sanguíneas analizadas. Otros factores que pueden aumentar el riesgo son el tabaquismo y tener familiares que hayan desarrollado ATLLL.\n\nEs importante recordar que tener una carga proviral elevada o alguno de estos factores no significa necesariamente que una persona desarrollará ATLL.",
      "en": "Not all people who have HTLV-1 develop adult T-cell leukemia/lymphoma (ATLL). However, some characteristics can increase the likelihood of developing this disease. Normally, the immune system helps keep HTLV-1-infected cells under control. In some people, an infected cell may begin to multiply more than usual and make many copies of itself. This group of cells is known as a clone. Over time, these cells can accumulate changes in their genetic material and, in some cases, become cancer cells, causing ATLL.\n\nAn increased risk of developing ATLL has been observed in people whose proviral load is high. Some studies have identified an increased risk when infected cells make up 4% or more of the blood cells tested. Other factors that may increase the risk are smoking and having family members who have developed ATLL.\n\nIt is important to remember that having a high proviral load or any of these factors does not necessarily mean that a person will develop ATLL."
    }
  },
  {
    "id": 13,
    "sectionId": "sec-01",
    "sectionNumber": 1,
    "sectionTitle": {
      "es": "Fundamentos del HTLV-1",
      "en": "HTLV-1 Fundamentals"
    },
    "q": {
      "es": "¿Qué personas portadoras de HTLV-1 tienen mayor probabilidad de desarrollar HAM?",
      "en": "Which HTLV-1 carriers are most likely to develop HAM?"
    },
    "a": {
      "es": "No todas las personas con HTLV-1 desarrollan mielopatía asociada al HTLV-1 (HAM). Sin embargo, el riesgo puede ser mayor en quienes tienen una mayor cantidad de células infectadas por el virus (carga proviral elevada).\n\nTambién pueden influir ciertas características genéticas y una respuesta muy intensa del sistema inmunitario, que puede provocar inflamación y daño en la médula espinal. Además, las personas que adquieren HTLV-1 a través de un trasplante de órganos pueden tener mayor riesgo de desarrollar HAM. Por eso, se recomienda realizar pruebas para detectar HTLV-1 tanto al donante como al receptor antes del trasplante.\n\nTener estos factores de riesgo no significa que necesariamente se desarrollará HAM.",
      "en": "Not all people with HTLV-1 develop HTLV-1-associated myelopathy (HAM). However, the risk may be higher in those who have a greater number of cells infected by the virus (high proviral load).\n\nCertain genetic characteristics and a very intense immune system response can also play a role, which can cause inflammation and damage to the spinal cord. Additionally, people who acquire HTLV-1 through an organ transplant may be at increased risk of developing HAM. Therefore, it is recommended to test both the donor and the recipient for HTLV-1 before transplant.\n\nHaving these risk factors does not mean that you will necessarily develop HAM."
    }
  },
  {
    "id": 14,
    "sectionId": "sec-01",
    "sectionNumber": 1,
    "sectionTitle": {
      "es": "Fundamentos del HTLV-1",
      "en": "HTLV-1 Fundamentals"
    },
    "q": {
      "es": "¿Qué personas portadoras de HTLV-1 tienen mayor probabilidad de desarrollar uveítis (HU/HAU)?",
      "en": "Which HTLV-1 carriers are most likely to develop uveitis (HU/HAU)?"
    },
    "a": {
      "es": "El riesgo de uveítis asociada al HTLV-1 (HU/HAU) puede ser mayor en personas con una carga proviral elevada. También se ha descrito una asociación con la enfermedad de Graves y ciertos tratamientos, pero eso no permite predecir por sí solo quién desarrollará uveítis. La valoración debe hacerla el médico tratante; si aparece visión borrosa, enrojecimiento ocular, dolor o nuevas manchas flotantes, se recomienda evaluación oftalmológica.",
      "en": "The risk of HTLV-1-associated uveitis (HU/HAU) may be higher in people with a high proviral load. An association with Graves' disease and certain treatments has also been described, but this alone does not predict who will develop uveitis. The assessment must be made by the treating physician; If blurred vision, eye redness, pain or new floaters appear, ophthalmological evaluation is recommended."
    }
  },
  {
    "id": 15,
    "sectionId": "sec-01",
    "sectionNumber": 1,
    "sectionTitle": {
      "es": "Fundamentos del HTLV-1",
      "en": "HTLV-1 Fundamentals"
    },
    "q": {
      "es": "¿Es posible saber cuándo se produjo la infección por HTLV-1?",
      "en": "Is it possible to know when HTLV-1 infection occurred?"
    },
    "a": {
      "es": "La infección por HTLV-1 no produce síntomas característicos inmediatamente después de la infección. Por ello, es difícil saber cuándo se produjo, salvo que la persona se haya realizado pruebas de anticuerpos contra HTLV-1 de forma periódica.",
      "en": "HTLV-1 infection does not produce characteristic symptoms immediately after infection. Therefore, it is difficult to know when it occurred, unless the person has been tested for antibodies against HTLV-1 periodically."
    }
  },
  {
    "id": 16,
    "sectionId": "sec-01",
    "sectionNumber": 1,
    "sectionTitle": {
      "es": "Fundamentos del HTLV-1",
      "en": "HTLV-1 Fundamentals"
    },
    "q": {
      "es": "¿Cuántas personas portadoras de HTLV-1 hay?",
      "en": "How many people carrying HTLV-1 are there?"
    },
    "a": {
      "es": "No hay un conteo nacional reciente y único que permita dar una cifra exacta para todo el Perú. Algunas publicaciones científicas [cita] estiman que podría haber entre 150 000 y 450 000 personas portadoras, pero es una estimación.",
      "en": "There is no recent and single national count that allows giving an exact figure for all of Peru. Some scientific publications [citation] estimate that there could be between 150,000 and 450,000 carriers, but this is an estimate."
    }
  },
  {
    "id": 17,
    "sectionId": "sec-01",
    "sectionNumber": 1,
    "sectionTitle": {
      "es": "Fundamentos del HTLV-1",
      "en": "HTLV-1 Fundamentals"
    },
    "q": {
      "es": "¿En qué regiones hay más personas portadoras de HTLV-1?",
      "en": "In which regions are there more people carrying HTLV-1?"
    },
    "a": {
      "es": "Perú es un país donde el HTLV-1 está presente y se han descrito diferencias de prevalencia entre regiones y grupos poblacionales. No debe asumirse que la distribución es uniforme en todo el territorio. Aún no se tiene evidencia con certeza sobre la región con mayor prevalencia.",
      "en": "Peru is a country where HTLV-1 is present and differences in prevalence have been described between regions and population groups. It should not be assumed that the distribution is uniform throughout the territory. There is still no certain evidence about the region with the highest prevalence."
    }
  },
  {
    "id": 18,
    "sectionId": "sec-01",
    "sectionNumber": 1,
    "sectionTitle": {
      "es": "Fundamentos del HTLV-1",
      "en": "HTLV-1 Fundamentals"
    },
    "q": {
      "es": "¿La Organización Mundial de la Salud (OMS) está trabajando en medidas contra la infección por HTLV-1?",
      "en": "Is the World Health Organization (WHO) working on measures against HTLV-1 infection?"
    },
    "a": {
      "es": "La OMS ha organizado consultas técnicas y publicado documentos sobre HTLV-1, reconociendo la necesidad de mejorar la prevención, el diagnóstico, la atención y la investigación. Para conocer las orientaciones internacionales vigentes, conviene consultar directamente los recursos de la OMS y la OPS. En nuestra sección de Guías Internacionales y Cursos podrá encontrar más información.",
      "en": "WHO has organized technical consultations and published documents on HTLV-1, recognizing the need to improve prevention, diagnosis, care and research. To know the current international guidelines, it is advisable to consult directly the resources of the WHO and PAHO. In our International Guides and Courses section you can find more information."
    }
  },
  {
    "id": 19,
    "sectionId": "sec-01",
    "sectionNumber": 1,
    "sectionTitle": {
      "es": "Fundamentos del HTLV-1",
      "en": "HTLV-1 Fundamentals"
    },
    "q": {
      "es": "¿Qué es el Día Mundial del HTLV?",
      "en": "What is World HTLV Day?"
    },
    "a": {
      "es": "El Día Mundial del HTLV se conmemora el 10 de noviembre para aumentar el conocimiento sobre el virus, reducir el estigma y promover acciones de prevención, diagnóstico, atención e investigación. En Perú, puede ser una oportunidad para difundir información clara sobre las vías de transmisión, el significado de ser portador y la importancia de la orientación sanitaria. La campaña debe evitar presentar la infección como sinónimo de enfermedad.",
      "en": "World HTLV Day is commemorated on November 10 to increase knowledge about the virus, reduce stigma and promote prevention, diagnosis, care and research actions. In Peru, it can be an opportunity to disseminate clear information about transmission routes, the meaning of being a carrier and the importance of health guidance. The campaign must avoid presenting infection as synonymous with disease."
    }
  },
  {
    "id": 20,
    "sectionId": "sec-02",
    "sectionNumber": 2,
    "sectionTitle": {
      "es": "Pruebas para detectar la infección por HTLV",
      "en": "Testing for HTLV Infection"
    },
    "q": {
      "es": "¿Cómo se puede determinar si una persona está infectada por HTLV-1?",
      "en": "How can you determine if a person is infected with HTLV-1?"
    },
    "a": {
      "es": "Para detectar la infección por HTLV-1, se realiza un análisis de sangre que busca anticuerpos contra el virus (HTLV-1/2). Si el resultado de esta primera prueba es reactivo, se necesitan otras pruebas para confirmar si la persona tiene la infección y determinar el tipo de HTLV.\n\nEs importante recordar que un resultado reactivo en la primera prueba no significa necesariamente que tengas HTLV-1. Si recibes este resultado, consulta con tu médico tratante para que te explique qué significa, te oriente sobre las pruebas adicionales y te indique los siguientes pasos.",
      "en": "To detect HTLV-1 infection, a blood test is performed that looks for antibodies to the virus (HTLV-1/2). If the result of this first test is reactive, other tests are needed to confirm if the person has the infection and determine the type of HTLV.\n\nIt is important to remember that a reactive result on the first test does not necessarily mean that you have HTLV-1. If you receive this result, consult your treating doctor to explain what it means, guide you about additional tests, and indicate next steps."
    }
  },
  {
    "id": 21,
    "sectionId": "sec-02",
    "sectionNumber": 2,
    "sectionTitle": {
      "es": "Pruebas para detectar la infección por HTLV",
      "en": "Testing for HTLV Infection"
    },
    "q": {
      "es": "¿Qué es la prueba o tamizaje inicial?",
      "en": "What is the initial test or screening?"
    },
    "a": {
      "es": "Es la primera prueba que se realiza para detectar anticuerpos contra el HTLV-1 en la sangre. Su objetivo es identificar a las personas que podrían tener la infección. Si el resultado es reactivo, comunicate con tu médico y evalúen si se necesitan otras pruebas para confirmar el diágnostico",
      "en": "It is the first test performed to detect antibodies against HTLV-1 in the blood. Its goal is to identify people who could have the infection. If the result is reactive, contact your doctor and evaluate if other tests are needed to confirm the diagnosis."
    }
  },
  {
    "id": 22,
    "sectionId": "sec-02",
    "sectionNumber": 2,
    "sectionTitle": {
      "es": "Pruebas para detectar la infección por HTLV",
      "en": "Testing for HTLV Infection"
    },
    "q": {
      "es": "¿Qué es la prueba confirmatoria?",
      "en": "What is confirmatory testing?"
    },
    "a": {
      "es": "La prueba confirmatoria se realiza después de un resultado positivo para distinguir una infección verdadera de un falso positivo. Tus resultados iniciales deben ser evaluados por tu médico tratante antes de dar por confirmado el diagnóstico.",
      "en": "Confirmatory testing is performed after a positive result to distinguish a true infection from a false positive. Your initial results should be evaluated by your treating doctor before confirming the diagnosis."
    }
  },
  {
    "id": 23,
    "sectionId": "sec-02",
    "sectionNumber": 2,
    "sectionTitle": {
      "es": "Pruebas para detectar la infección por HTLV",
      "en": "Testing for HTLV Infection"
    },
    "q": {
      "es": "¿Qué significa que el resultado quede indeterminado?",
      "en": "What does it mean that the result is indeterminate?"
    },
    "a": {
      "es": "Un resultado indeterminado significa que las pruebas realizadas no permiten confirmar ni descartar la infección con suficiente certeza. Tu médico puede indicar otra prueba confirmatoria, repetir la muestra o solicitar una prueba molecular, según el caso. Recuerda que el resultado no equivale automáticamente a tener HTLV-1 ni a estar libre de infección. Solicita que el establecimiento te explique cuál es el siguiente paso y cuándo debes volver.",
      "en": "An indeterminate result means that the tests performed cannot confirm or rule out the infection with sufficient certainty. Your doctor may order another confirmatory test, repeat the sample or request a molecular test, depending on the case. Remember that the result is not automatically equivalent to having HTLV-1 or being free of infection. Ask the establishment to explain what the next step is and when you should return."
    }
  },
  {
    "id": 24,
    "sectionId": "sec-02",
    "sectionNumber": 2,
    "sectionTitle": {
      "es": "Pruebas para detectar la infección por HTLV",
      "en": "Testing for HTLV Infection"
    },
    "q": {
      "es": "¿Qué es un falso positivo?",
      "en": "What is a false positive?"
    },
    "a": {
      "es": "Un falso positivo ocurre cuando una prueba indica que una persona podría tener HTLV-1, aunque en realidad no esté infectada.\n\nPor eso, una prueba inicial reactiva no significa necesariamente que la persona tenga el virus. Es necesario realizar una prueba confirmatoria, como el Western Blot o el INNO-LIA, para determinar si existe una infección por HTLV-1. En algunos casos, también puede ser necesario realizar una prueba molecular (PCR).",
      "en": "A false positive occurs when a test indicates that a person might have HTLV-1, even though they are not actually infected.\n\nTherefore, an initial reactive test does not necessarily mean that the person has the virus. A confirmatory test, such as Western Blot or INNO-LIA, is necessary to determine if HTLV-1 infection exists. In some cases, a molecular test (PCR) may also be necessary."
    }
  },
  {
    "id": 25,
    "sectionId": "sec-02",
    "sectionNumber": 2,
    "sectionTitle": {
      "es": "Pruebas para detectar la infección por HTLV",
      "en": "Testing for HTLV Infection"
    },
    "q": {
      "es": "¿Dónde se puede realizar una prueba para detectar la infección por HTLV-1?",
      "en": "Where can you get tested for HTLV-1 infection?"
    },
    "a": {
      "es": "La disponibilidad puede variar entre establecimientos del MINSA, EsSalud, servicios privados y laboratorios de referencia. Consulta en tu centro de salud u hospital si realizan la prueba de anticuerpos y si cuenta con alguna prueba confirmatoria si el resultado es positivo. Siempre consulta con tu médico para que determine la ruta de evaluación apropiada.",
      "en": "Availability may vary between MINSA establishments, EsSalud, private services and reference laboratories. Check with your health center or hospital if they perform the antibody test and if they have any confirmatory test if the result is positive. Always consult with your doctor to determine the appropriate evaluation route."
    }
  },
  {
    "id": 26,
    "sectionId": "sec-02",
    "sectionNumber": 2,
    "sectionTitle": {
      "es": "Pruebas para detectar la infección por HTLV",
      "en": "Testing for HTLV Infection"
    },
    "q": {
      "es": "¿Cuánto cuesta una prueba para detectar la infección por HTLV-1?",
      "en": "How much does a test for HTLV-1 infection cost?"
    },
    "a": {
      "es": "El costo depende del establecimiento, del tipo de prueba y de la cobertura que tengas. Antes de realizarla, pregunta por el costo del tamizaje, la prueba confirmatoria y cualquier prueba adicional con tu médico tratante, así como por las opciones de cobertura o referencia.",
      "en": "The cost depends on the establishment, the type of test and the coverage you have. Before taking it, ask about the cost of the screening, confirmatory test and any additional tests with your treating doctor, as well as coverage or referral options."
    }
  },
  {
    "id": 27,
    "sectionId": "sec-02",
    "sectionNumber": 2,
    "sectionTitle": {
      "es": "Pruebas para detectar la infección por HTLV",
      "en": "Testing for HTLV Infection"
    },
    "q": {
      "es": "¿Se puede saber si una persona tiene HTLV-1 al donar sangre?",
      "en": "Can you tell if a person has HTLV-1 by donating blood?"
    },
    "a": {
      "es": "Sí. En Perú, toda la sangre donada se analiza para detectar HTLV-1/2 y otras infecciones que podrían transmitirse mediante una transfusión. Sin embargo, donar sangre no es una forma de hacerse una prueba para saber si tienes HTLV-1. Si deseas conocer tu estado de infección, debes acudir a un establecimiento de salud o laboratorio y solicitar la prueba correspondiente.\n\nSi recibes una notificación por un resultado reactivo después de donar sangre, debes acudir al servicio indicado para realizar las pruebas adicionales que permitan confirmar el resultado.",
      "en": "Yes. In Peru, all donated blood is tested for HTLV-1/2 and other infections that could be transmitted through transfusion. However, donating blood is not a way to get tested for HTLV-1. If you want to know your infection status, you must go to a health facility or laboratory and request the corresponding test.\n\nIf you receive a notification for a reactive result after donating blood, you should go to the indicated service to perform additional tests to confirm the result."
    }
  },
  {
    "id": 28,
    "sectionId": "sec-02",
    "sectionNumber": 2,
    "sectionTitle": {
      "es": "Pruebas para detectar la infección por HTLV",
      "en": "Testing for HTLV Infection"
    },
    "q": {
      "es": "¿Qué significan la carga proviral de HTLV-1 y la proporción de células infectadas?",
      "en": "What do HTLV-1 proviral load and proportion of infected cells mean?"
    },
    "a": {
      "es": "La carga proviral es una medida que permite conocer cuántas copias del material genético del HTLV-1 hay en las células de la sangre. A diferencia de otros virus, el HTLV-1 permanece principalmente dentro de las células infectadas y casi no circula libremente en la sangre. Por eso, para medir la cantidad de virus, se analiza el material genético viral presente en estas células.\n\nComo generalmente cada célula infectada contiene una copia del material genético del virus (provirus), la cantidad de provirus permite estimar cuántas células están infectadas. La carga proviral puede expresarse como el número de copias del virus por cada 100 células sanguíneas analizadas o como un porcentaje de células infectadas.",
      "en": "The proviral load is a measure that allows us to know how many copies of the HTLV-1 genetic material there are in the blood cells. Unlike other viruses, HTLV-1 remains mainly inside infected cells and almost does not circulate freely in the blood. Therefore, to measure the amount of virus, the viral genetic material present in these cells is analyzed.\n\nSince each infected cell generally contains a copy of the virus's genetic material (provirus), the number of proviruses allows us to estimate how many cells are infected. Proviral load can be expressed as the number of copies of the virus per 100 blood cells analyzed or as a percentage of infected cells."
    }
  },
  {
    "id": 29,
    "sectionId": "sec-02",
    "sectionNumber": 2,
    "sectionTitle": {
      "es": "Pruebas para detectar la infección por HTLV",
      "en": "Testing for HTLV Infection"
    },
    "q": {
      "es": "¿Dónde se puede medir la carga proviral de HTLV-1?",
      "en": "Where can HTLV-1 proviral load be measured?"
    },
    "a": {
      "es": "La carga proviral mide la cantidad de material genético viral integrado en las células y puede ser útil en determinadas evaluaciones especializadas. No es una prueba que necesariamente se ofrezca en todos los establecimientos ni se requiere de rutina para toda persona portadora. Consulta con tu médico si requieres esta medición y si el laboratorio correspondiente la realiza.",
      "en": "Proviral load measures the amount of viral genetic material integrated into cells and may be useful in certain specialized evaluations. It is not a test that is necessarily offered in all establishments nor is it routinely required for every carrier. Consult your doctor if you require this measurement and if the corresponding laboratory performs it."
    }
  },
  {
    "id": 30,
    "sectionId": "sec-02",
    "sectionNumber": 2,
    "sectionTitle": {
      "es": "Pruebas para detectar la infección por HTLV",
      "en": "Testing for HTLV Infection"
    },
    "q": {
      "es": "Si creo que podría haberme infectado por HTLV-1, ¿cuándo debería hacerme la prueba?",
      "en": "If I think I might have been infected with HTLV-1, when should I get tested?"
    },
    "a": {
      "es": "Después de una infección reciente, los anticuerpos pueden tardar un tiempo en detectarse; ese intervalo se llama período ventana. Por eso, una prueba demasiado temprana puede no detectar la infección. El momento adecuado y la necesidad de repetirla dependen del tipo de exposición y de la prueba disponible. Consulta al profesional de salud y no traslades automáticamente al Perú los plazos descritos en estudios de otros países.",
      "en": "After a recent infection, it may take a while for antibodies to be detected; That interval is called the window period. Therefore, testing too early may not detect the infection. The right time and the need to repeat it depend on the type of exposure and the test available. Consult your health professional and do not automatically transfer the deadlines described in studies from other countries to Peru."
    }
  },
  {
    "id": 31,
    "sectionId": "sec-03",
    "sectionNumber": 3,
    "sectionTitle": {
      "es": "Pruebas durante el control prenatal",
      "en": "Testing During Prenatal Care"
    },
    "q": {
      "es": "¿En qué momento del embarazo debo realizarme la prueba de diágnostico para HTLV-1?",
      "en": "At what point in pregnancy should I take the diagnostic test for HTLV-1?"
    },
    "a": {
      "es": "Se recomienda realizar la prueba para HTLV-1 lo antes posible, preferentemente durante la primera consulta prenatal. Si existe la posibilidad de que hayas estado expuesta al virus durante el embarazo, tu médico puede indicar una nueva prueba más adelante.\n\nConsulta con tu obstetra para saber si necesitas realizarte esta prueba y recibir orientación durante tu embarazo.",
      "en": "It is recommended to test for HTLV-1 as soon as possible, preferably during the first prenatal visit. If there's a chance you were exposed to the virus during pregnancy, your doctor may order retesting later.\n\nConsult your obstetrician to find out if you need to have this test and receive guidance during your pregnancy."
    }
  },
  {
    "id": 32,
    "sectionId": "sec-03",
    "sectionNumber": 3,
    "sectionTitle": {
      "es": "Pruebas durante el control prenatal",
      "en": "Testing During Prenatal Care"
    },
    "q": {
      "es": "Me han informado de que tengo HTLV-1. ¿Podré dar a luz sin problemas?",
      "en": "I have been informed that I have HTLV-1. Will I be able to give birth without problems?"
    },
    "a": {
      "es": "Un resultado positivo de HTLV-1 no significa que no puedas tener un embarazo o dar a luz. Muchas mujeres con HTLV-1 pueden tener hijos. Sin embargo, es importante que converses con tu médico tratante y con el equipo de obstetricia para recibir orientación durante el embarazo y planificar cómo reducir el riesgo de transmitir el virus a tu bebé, especialmente durante la lactancia.\n\nTambién es importante que recibas información y acompañamiento para tomar decisiones sobre tu embarazo con tranquilidad y seguridad.",
      "en": "A positive HTLV-1 result does not mean you cannot have a pregnancy or give birth. Many women with HTLV-1 can have children. However, it is important that you talk to your treating doctor and obstetrics team to receive guidance during pregnancy and plan how to reduce the risk of transmitting the virus to your baby, especially while breastfeeding.\n\nIt is also important that you receive information and support to make decisions about your pregnancy with peace of mind and security."
    }
  },
  {
    "id": 33,
    "sectionId": "sec-03",
    "sectionNumber": 3,
    "sectionTitle": {
      "es": "Pruebas durante el control prenatal",
      "en": "Testing During Prenatal Care"
    },
    "q": {
      "es": "Me han informado de que tengo HTLV-1. ¿Debería hablarlo con mi esposo?",
      "en": "I have been informed that I have HTLV-1. Should I talk to my husband about it?"
    },
    "a": {
      "es": "Hablar sobre el diagnóstico de HTLV-1 con tu esposo o pareja puede ser importante para que ambos conozcan la infección y puedan cuidar su salud. También pueden conversar con un profesional de salud para resolver sus dudas y saber si tu pareja necesita realizarse la prueba de HTLV-1.\n\nRecuerda que puedes recibir orientación para hablar sobre el tema y que tu diagnóstico debe ser tratado de manera confidencial. Es importante que te sientas segura y acompañada al tomar esta decisión.",
      "en": "Talking about the HTLV-1 diagnosis with your husband or partner can be important so that you both know about the infection and can take care of your health. You can also talk to a health professional to resolve your questions and find out if your partner needs to be tested for HTLV-1.\n\nRemember that you can receive guidance to talk about the issue and that your diagnosis should be treated confidentially. It is important that you feel safe and accompanied when making this decision."
    }
  },
  {
    "id": 34,
    "sectionId": "sec-03",
    "sectionNumber": 3,
    "sectionTitle": {
      "es": "Pruebas durante el control prenatal",
      "en": "Testing During Prenatal Care"
    },
    "q": {
      "es": "Me hice la prueba de anticuerpos contra HTLV-1 en el embarazo anterior. ¿Tengo que repetirla en un nuevo embarazo?",
      "en": "I was tested for HTLV-1 antibodies in my previous pregnancy. Do I have to repeat it in a new pregnancy?"
    },
    "a": {
      "es": "Depende del resultado de tu prueba anterior. Si fue negativa, puede ser necesario repetirla si desde entonces has podido estar expuesta al virus. Si el resultado fue positivo y se confirmó la infección, generalmente no necesitas repetirla, porque el virus permanece en el organismo.\n\nConsulta con tu médico tratante u obstetra para que revise tu resultado anterior y te indique si necesitas una nueva prueba durante este embarazo.",
      "en": "It depends on the result of your previous test. If it was negative, it may be necessary to repeat it if you have since been exposed to the virus. If the result was positive and the infection was confirmed, you generally do not need to repeat it, because the virus remains in the body.\n\nConsult your treating doctor or obstetrician to review your previous result and tell you if you need a new test during this pregnancy."
    }
  },
  {
    "id": 35,
    "sectionId": "sec-03",
    "sectionNumber": 3,
    "sectionTitle": {
      "es": "Pruebas durante el control prenatal",
      "en": "Testing During Prenatal Care"
    },
    "q": {
      "es": "No me hicieron la prueba de HTLV-1 en el embarazo anterior, pero ahora he resultado positiva. Amamanté a mi hijo mayor. ¿Debo preocuparme?",
      "en": "I was not tested for HTLV-1 in the previous pregnancy, but now I have tested positive. I breastfed my oldest son. Should I be worried?"
    },
    "a": {
      "es": "No necesariamente. Tener HTLV-1 no significa que tu hijo también esté infectado. Sin embargo, si ya tenías el virus cuando lo amamantaste, pudo existir riesgo de transmisión, ya que el HTLV-1 puede transmitirse a través de la leche materna.\n\nEs importante que consultes con tu médico tratante y el de tu hijo para que evalúen si necesita realizarse una prueba y cuándo sería el momento adecuado. Recuerda que no debes sentirte culpable. Lo importante es recibir orientación médica para cuidar la salud de tu hijo.",
      "en": "Not necessarily. Having HTLV-1 does not mean your child is also infected. However, if you already had the virus when you breastfed, there could be a risk of transmission, since HTLV-1 can be transmitted through breast milk.\n\nIt is important that you consult with your and your child's treating doctor to evaluate whether a test needs to be performed and when the appropriate time would be. Remember that you should not feel guilty. The important thing is to receive medical guidance to take care of your child's health."
    }
  },
  {
    "id": 36,
    "sectionId": "sec-04",
    "sectionNumber": 4,
    "sectionTitle": {
      "es": "Transmisión e infección",
      "en": "Transmission and Infection"
    },
    "q": {
      "es": "¿Cómo se transmite el HTLV-1?",
      "en": "How is HTLV-1 transmitted?"
    },
    "a": {
      "es": "El HTLV-1 se transmite principalmente de tres maneras: de madre a hijo, sobre todo a través de la leche materna durante la lactancia; mediante relaciones sexuales sin preservativo con una persona infectada; y a través de la sangre, por ejemplo, mediante transfusiones de sangre contaminada, el uso compartido de agujas o jeringas y algunos trasplantes de órganos. \n\nEl HTLV-1 no se transmite por la convivencia cotidiana, como abrazar, compartir alimentos o utensilios, toser o estornudar. Por lo tanto, puedes convivir y compartir actividades con una persona que tiene HTLV-1 sin riesgo de infección por estas vías.",
      "en": "HTLV-1 is transmitted mainly in three ways: from mother to child, especially through breast milk during breastfeeding; through condomless sex with an infected person; and through blood, for example, through contaminated blood transfusions, the sharing of needles or syringes, and some organ transplants.\n\nHTLV-1 is not transmitted through everyday contact, such as hugging, sharing food or utensils, coughing or sneezing. Therefore, you can live and share activities with a person who has HTLV-1 without risk of infection through these routes."
    }
  },
  {
    "id": 37,
    "sectionId": "sec-04",
    "sectionNumber": 4,
    "sectionTitle": {
      "es": "Transmisión e infección",
      "en": "Transmission and Infection"
    },
    "q": {
      "es": "¿El HTLV-1 se transmite a los familiares?",
      "en": "Is HTLV-1 transmitted to family members?"
    },
    "a": {
      "es": "El HTLV-1 no se transmite por la convivencia familiar cotidiana. Puedes abrazar, compartir alimentos, utensilios y espacios con una persona que tiene el virus sin riesgo de infectarte. Sin embargo, sí puede transmitirse de madre a hijo a través de la lactancia materna, mediante relaciones sexuales sin preservativo o por contacto con sangre contaminada. Por eso, no es necesario evitar el contacto ni las actividades cotidianas con un familiar que tiene HTLV-1.",
      "en": "HTLV-1 is not transmitted through everyday family life. You can hug, share food, utensils and spaces with a person who has the virus without risk of becoming infected. However, it can be transmitted from mother to child through breastfeeding, through sexual relations without a condom or through contact with contaminated blood. Therefore, it is not necessary to avoid contact or daily activities with a family member who has HTLV-1."
    }
  },
  {
    "id": 38,
    "sectionId": "sec-04",
    "sectionNumber": 4,
    "sectionTitle": {
      "es": "Transmisión e infección",
      "en": "Transmission and Infection"
    },
    "q": {
      "es": "¿Qué significan la transmisión vertical y la transmisión horizontal?",
      "en": "What do vertical transmission and horizontal transmission mean?"
    },
    "a": {
      "es": "La transmisión vertical ocurre cuando una madre transmite el HTLV-1 a su hijo, principalmente a través de la leche materna durante la lactancia. Por otro lado, la transmisión horizontal ocurre cuando el virus pasa de una persona a otra por otras vías, como las relaciones sexuales sin preservativo o el contacto con sangre contaminada.",
      "en": "Vertical transmission occurs when a mother transmits HTLV-1 to her child, primarily through breast milk during breastfeeding. On the other hand, horizontal transmission occurs when the virus passes from one person to another through other means, such as sexual relations without a condom or contact with contaminated blood."
    }
  },
  {
    "id": 39,
    "sectionId": "sec-04",
    "sectionNumber": 4,
    "sectionTitle": {
      "es": "Transmisión e infección",
      "en": "Transmission and Infection"
    },
    "q": {
      "es": "¿Puedo haber transmitido HTLV-1 a mi esposo o esposa?",
      "en": "Could I have transmitted HTLV-1 to my husband or wife?"
    },
    "a": {
      "es": "El HTLV-1 puede transmitirse a través de las relaciones sexuales sin preservativo, pero esto no significa que tu pareja necesariamente se haya infectado. El riesgo puede aumentar cuando se mantienen relaciones sexuales sin protección durante un período prolongado. La transmisión parece ser más frecuente de hombre a mujer, aunque puede ocurrir en ambas direcciones.\n\nSi tienes HTLV-1, es importante que tu pareja reciba orientación médica y pueda realizarse una prueba para saber si también tiene el virus. Mientras tanto, el uso de preservativo ayuda a reducir el riesgo de transmisión.",
      "en": "HTLV-1 can be transmitted through condomless sex, but this doesn't mean your partner has necessarily been infected. The risk may increase when you have unprotected sex for a long period of time. Transmission appears to be more frequent from men to women, although it can occur in both directions.\n\nIf you have HTLV-1, it is important that your partner receives medical advice and can be tested to see if they also have the virus. Meanwhile, condom use helps reduce the risk of transmission."
    }
  },
  {
    "id": 40,
    "sectionId": "sec-04",
    "sectionNumber": 4,
    "sectionTitle": {
      "es": "Transmisión e infección",
      "en": "Transmission and Infection"
    },
    "q": {
      "es": "Si me han diagnosticado HTLV-1, ¿debería evitar las relaciones sexuales?",
      "en": "If I have been diagnosed with HTLV-1, should I avoid sex?"
    },
    "a": {
      "es": "Un diagnóstico de HTLV-1 no significa que debas evitar toda relación sexual, pero sí es recomendable conversar con tu pareja sobre prevención. El uso correcto y constante del preservativo reduce el riesgo de transmisión sexual.        \n\nSi desean tener hijos, reciban consejería antes del embarazo para revisar las opciones disponibles y prevenir la transmisión maternoinfantil. La decisión debe ser informada y compartida, sin presiones ni estigma.",
      "en": "A diagnosis of HTLV-1 does not mean that you should avoid all sexual relations, but it is advisable to talk to your partner about prevention. Correct and consistent use of condoms reduces the risk of sexual transmission.\n\nIf you want to have children, receive pre-pregnancy counseling to review available options and prevent mother-to-child transmission. The decision must be informed and shared, without pressure or stigma."
    }
  },
  {
    "id": 41,
    "sectionId": "sec-04",
    "sectionNumber": 4,
    "sectionTitle": {
      "es": "Transmisión e infección",
      "en": "Transmission and Infection"
    },
    "q": {
      "es": "¿Hay prácticas sexuales en las que sea más fácil transmitir o contraer HTLV-1?",
      "en": "Are there sexual practices in which it is easier to transmit or contract HTLV-1?"
    },
    "a": {
      "es": "Hasta el momento no se han realizado suficientes investigaciones y no se conoce la respuesta con precisión. En general, se supone que las prácticas en las que hay contacto con sangre o secreciones mucosas podrían implicar un mayor riesgo, porque facilitarían la entrada de células infectadas por HTLV-1 vivas en el organismo. Sin embargo, esto no se ha confirmado.",
      "en": "To date, not enough research has been done and the answer is not precisely known. In general, it is assumed that practices in which there is contact with blood or mucous secretions could imply a greater risk, because they would facilitate the entry of live HTLV-1 infected cells into the body. However, this has not been confirmed."
    }
  },
  {
    "id": 42,
    "sectionId": "sec-04",
    "sectionNumber": 4,
    "sectionTitle": {
      "es": "Transmisión e infección",
      "en": "Transmission and Infection"
    },
    "q": {
      "es": "¿Qué es la infección por transfusión de sangre?",
      "en": "What is blood transfusion infection?"
    },
    "a": {
      "es": "El HTLV-1 puede transmitirse cuando una persona recibe una transfusión de sangre que contiene células infectadas por el virus. En Perú, todas las donaciones de sangre pasan por pruebas para detectar HTLV-1/2 antes de ser utilizadas desde 1997, lo que ayuda a prevenir la transmisión. \n\nSi recibiste una transfusión hace muchos años o en otro país, consulta con tu médico para evaluar si necesitas realizarte una prueba de HTLV-1.",
      "en": "HTLV-1 can be transmitted when a person receives a blood transfusion containing cells infected by the virus. In Peru, all blood donations are tested for HTLV-1/2 before being used since 1997, which helps prevent transmission.\n\nIf you received a transfusion many years ago or in another country, talk to your doctor to see if you need to get tested for HTLV-1."
    }
  },
  {
    "id": 43,
    "sectionId": "sec-04",
    "sectionNumber": 4,
    "sectionTitle": {
      "es": "Transmisión e infección",
      "en": "Transmission and Infection"
    },
    "q": {
      "es": "He recibido una transfusión de sangre. ¿Es posible que me haya infectado por HTLV-1?",
      "en": "I have received a blood transfusion. Is it possible that I have been infected by HTLV-1?"
    },
    "a": {
      "es": "No necesariamente. Haber recibido una transfusión de sangre no significa que te hayas infectado por HTLV-1. El riesgo depende de cuándo y dónde recibiste la transfusión, así como de los controles que se realizaban en ese momento.\n\nSi tienes dudas, consulta con tu médico tratante para evaluar si necesitas realizarte una prueba de HTLV-1.",
      "en": "Not necessarily. Having received a blood transfusion does not mean that you have been infected by HTLV-1. The risk depends on when and where you received the transfusion, as well as the checks that were carried out at that time.\n\nIf you have concerns, consult with your treating doctor to evaluate whether you need to undergo an HTLV-1 test."
    }
  },
  {
    "id": 44,
    "sectionId": "sec-04",
    "sectionNumber": 4,
    "sectionTitle": {
      "es": "Transmisión e infección",
      "en": "Transmission and Infection"
    },
    "q": {
      "es": "He recibido una transfusión de sangre en el extranjero. ¿Es posible que me haya infectado por HTLV-1?",
      "en": "I have received a blood transfusion abroad. Is it possible that I have been infected by HTLV-1?"
    },
    "a": {
      "es": "Depende del país, del período y de los procedimientos de tamizaje de sangre que se aplicaban en el momento de la transfusión.\n\nLa prevalencia del HTLV-1 también varía entre regiones. Si recibiste sangre en el extranjero y te preocupa una posible exposición, coméntalo con un profesional de salud para que evalúe la prueba. No puede estimarse el riesgo únicamente por el país.",
      "en": "It depends on the country, the period and the blood screening procedures that were applied at the time of the transfusion.\n\nThe prevalence of HTLV-1 also varies between regions. If you received blood abroad and are concerned about possible exposure, discuss it with a health professional to evaluate the test. The risk cannot be estimated by country alone."
    }
  },
  {
    "id": 45,
    "sectionId": "sec-04",
    "sectionNumber": 4,
    "sectionTitle": {
      "es": "Transmisión e infección",
      "en": "Transmission and Infection"
    },
    "q": {
      "es": "¿El HTLV-1 es muy contagioso?",
      "en": "Is HTLV-1 very contagious?"
    },
    "a": {
      "es": "El HTLV-1 tiene una baja capacidad de transmisión mediante el contacto cotidiano. Para que ocurra la infección, es necesario que células infectadas vivas ingresen al organismo de otra persona. Estas células mueren fácilmente al secarse, exponerse al calor o entrar en contacto con detergentes o agua. \n\nPor eso, el HTLV-1 no se transmite al abrazar, dar la mano, compartir alimentos o utensilios, ni al toser o estornudar. Sin embargo, sí puede transmitirse a través de la lactancia materna, las relaciones sexuales y la sangre contaminada.",
      "en": "HTLV-1 has a low transmission capacity through everyday contact. For infection to occur, live infected cells need to enter another person's body. These cells are easily killed by drying out, exposure to heat, or coming into contact with detergents or water.\n\nTherefore, HTLV-1 is not transmitted by hugging, shaking hands, sharing food or utensils, or coughing or sneezing. However, it can be transmitted through breastfeeding, sexual relations and contaminated blood."
    }
  },
  {
    "id": 46,
    "sectionId": "sec-04",
    "sectionNumber": 4,
    "sectionTitle": {
      "es": "Transmisión e infección",
      "en": "Transmission and Infection"
    },
    "q": {
      "es": "¿El HTLV-1 se transmite en la vida cotidiana?",
      "en": "Is HTLV-1 transmitted in everyday life?"
    },
    "a": {
      "es": "No. El HTLV-1 no se transmite por las actividades cotidianas. Puedes abrazar, besar, dar la mano, compartir alimentos y utensilios, sentarte cerca de una persona infectada o utilizar el mismo baño o piscina sin riesgo de contraer el virus. Tampoco se transmite al toser o estornudar.\n\nSin embargo, es importante evitar compartir objetos que puedan tener restos de sangre, como cepillos de dientes o máquinas de afeitar. También se deben utilizar instrumentos debidamente esterilizados para realizar tatuajes o perforaciones, y nunca compartir agujas o jeringas. Estas situaciones pueden representar un riesgo de transmisión si los instrumentos contienen sangre con células infectadas",
      "en": "No. HTLV-1 is not transmitted through everyday activities. You can hug, kiss, shake hands, share food and utensils, sit near an infected person, or use the same bathroom or pool without risk of contracting the virus. It is also not transmitted by coughing or sneezing.\n\nHowever, it is important to avoid sharing objects that may have traces of blood on them, such as toothbrushes or razors. Properly sterilized instruments should also be used to perform tattoos or piercings, and never share needles or syringes. These situations may represent a risk of transmission if the instruments contain blood with infected cells."
    }
  },
  {
    "id": 47,
    "sectionId": "sec-04",
    "sectionNumber": 4,
    "sectionTitle": {
      "es": "Transmisión e infección",
      "en": "Transmission and Infection"
    },
    "q": {
      "es": "¿Se puede contraer HTLV-1 durante procedimientos médicos?",
      "en": "Can you get HTLV-1 during medical procedures?"
    },
    "a": {
      "es": "En general, no. Los procedimientos médicos, como consultas, análisis de sangre, inyecciones o cirugías, no transmiten HTLV-1 cuando se utilizan materiales esterilizados o descartables. El riesgo podría existir si se utiliza instrumental contaminado con sangre infectada o si se recibe sangre u órganos de una persona con HTLV-1.\n\nSi tienes dudas sobre algún procedimiento médico que hayas recibido, consulta con tu médico tratante.",
      "en": "In general, no. Medical procedures, such as consultations, blood tests, injections or surgeries, do not transmit HTLV-1 when sterile or disposable materials are used. The risk could exist if instruments contaminated with infected blood are used or if blood or organs are received from a person with HTLV-1.\n\nIf you have questions about any medical procedure you have received, consult your treating doctor."
    }
  },
  {
    "id": 48,
    "sectionId": "sec-04",
    "sectionNumber": 4,
    "sectionTitle": {
      "es": "Transmisión e infección",
      "en": "Transmission and Infection"
    },
    "q": {
      "es": "¿El HTLV-1 es hereditario?",
      "en": "Is HTLV-1 hereditary?"
    },
    "a": {
      "es": "No. El HTLV-1 no se transmite de padres a hijos a través de los genes, por lo que no es una enfermedad hereditaria. Sin embargo, una madre con HTLV-1 puede transmitir el virus a su bebé, principalmente a través de la leche materna durante la lactancia. En este caso, se trata de una infección y no de una herencia genética.",
      "en": "No. HTLV-1 is not transmitted from parents to children through genes, so it is not a hereditary disease. However, a mother with HTLV-1 can transmit the virus to her baby, primarily through breast milk during breastfeeding. In this case, it is an infection and not a genetic inheritance."
    }
  },
  {
    "id": 49,
    "sectionId": "sec-05",
    "sectionNumber": 5,
    "sectionTitle": {
      "es": "Prevención de la infección",
      "en": "Infection Prevention"
    },
    "q": {
      "es": "¿Cómo se puede prevenir la infección por HTLV-1?",
      "en": "How can you prevent HTLV-1 infection?"
    },
    "a": {
      "es": "Para prevenir la infección por HTLV-1, se recomienda utilizar preservativo durante las relaciones sexuales, no compartir agujas, jeringas ni objetos que puedan tener restos de sangre, como máquinas de afeitar o cepillos de dientes. También es importante asegurarse de que los instrumentos utilizados para tatuajes y perforaciones estén debidamente esterilizados y que la sangre donada pase por pruebas para detectar el virus.\n\nEn el caso de las mujeres con HTLV-1 que están embarazadas, es importante recibir orientación médica sobre cómo alimentar al bebé, ya que el virus puede transmitirse a través de la leche materna. La alimentación con fórmula infantil, en lugar de leche materna, ayuda a prevenir esta vía de transmisión.",
      "en": "To prevent HTLV-1 infection, it is recommended to use condoms during sexual relations, do not share needles, syringes or objects that may have traces of blood, such as razors or toothbrushes. It is also important to ensure that instruments used for tattoos and piercings are properly sterilized and that donated blood is tested for the virus.\n\nFor women with HTLV-1 who are pregnant, it is important to receive medical guidance on how to feed the baby, since the virus can be transmitted through breast milk. Feeding infant formula, instead of breast milk, helps prevent this route of transmission."
    }
  },
  {
    "id": 50,
    "sectionId": "sec-05",
    "sectionNumber": 5,
    "sectionTitle": {
      "es": "Prevención de la infección",
      "en": "Infection Prevention"
    },
    "q": {
      "es": "Mi pareja está infectada por HTLV-1. ¿Puedo prevenir la infección?",
      "en": "My partner is infected with HTLV-1. Can I prevent infection?"
    },
    "a": {
      "es": "El HTLV-1 puede transmitirse por vía sexual, aunque el riesgo no es igual en todas las situaciones. El uso correcto y constante del preservativo ayuda a reducir la exposición. También puede ser útil hablar con la pareja sobre las pruebas y la prevención. La decisión de hacerse pruebas debe ser voluntaria y acompañada de consejería. Si desean tener hijos, consulten antes con su médico tratante para recibir información sobre opciones y riesgos.",
      "en": "HTLV-1 can be transmitted sexually, although the risk is not the same in all situations. Correct and consistent condom use helps reduce exposure. It may also be helpful to talk to your partner about testing and prevention. The decision to undergo testing must be voluntary and accompanied by counseling. If you want to have children, consult your treating doctor first to receive information about options and risks."
    }
  },
  {
    "id": 51,
    "sectionId": "sec-05",
    "sectionNumber": 5,
    "sectionTitle": {
      "es": "Prevención de la infección",
      "en": "Infection Prevention"
    },
    "q": {
      "es": "Mi pareja está infectada por HTLV-1. ¿Podemos tener hijos?",
      "en": "My partner is infected with HTLV-1. Can we have children?"
    },
    "a": {
      "es": "Ser portador/a de HTLV-1 no significa que no puedas tener hijos. Lo recomendable es recibir consejería antes del embarazo para conversar sobre la transmisión sexual y maternoinfantil, la evaluación de la pareja y el plan de alimentación del bebé.",
      "en": "Being a carrier of HTLV-1 does not mean that you cannot have children. It is advisable to receive counseling before pregnancy to discuss sexual and mother-to-child transmission, the evaluation of the couple and the baby's feeding plan."
    }
  },
  {
    "id": 52,
    "sectionId": "sec-05",
    "sectionNumber": 5,
    "sectionTitle": {
      "es": "Prevención de la infección",
      "en": "Infection Prevention"
    },
    "q": {
      "es": "¿Existe una vacuna contra el HTLV-1?",
      "en": "Is there a vaccine against HTLV-1?"
    },
    "a": {
      "es": "Lamentablemente, por el momento no existe ninguna vacuna eficaz para prevenir la infección por HTLV-1.",
      "en": "Unfortunately, there is currently no effective vaccine to prevent HTLV-1 infection."
    }
  },
  {
    "id": 53,
    "sectionId": "sec-05",
    "sectionNumber": 5,
    "sectionTitle": {
      "es": "Prevención de la infección",
      "en": "Infection Prevention"
    },
    "q": {
      "es": "¿Existe algún medicamento para tratar la infección por HTLV-1?",
      "en": "Is there any medication to treat HTLV-1 infection?"
    },
    "a": {
      "es": "Lamentablemente, por el momento no existe ningún medicamento que elimine el virus del organismo.",
      "en": "Unfortunately, at the moment there is no medication that eliminates the virus from the body."
    }
  },
  {
    "id": 54,
    "sectionId": "sec-06",
    "sectionNumber": 6,
    "sectionTitle": {
      "es": "Prevención de transmisión maternoinfantil",
      "en": "Mother-to-Child Transmission Prevention"
    },
    "q": {
      "es": "¿Qué es la transmisión maternoinfantil?",
      "en": "What is mother-to-child transmission?"
    },
    "a": {
      "es": "La transmisión maternoinfantil ocurre cuando una madre transmite el HTLV-1 a su bebé. Esto sucede principalmente durante la lactancia materna, porque la leche puede contener células infectadas por el virus. \n\nLa transmisión durante el embarazo o el parto también es posible, pero hay evidencia limitada y se considera poco frecuente.",
      "en": "Mother-to-child transmission occurs when a mother transmits HTLV-1 to her baby. This mainly happens during breastfeeding, because milk may contain cells infected by the virus.\n\nTransmission during pregnancy or childbirth is also possible, but there is limited evidence and it is considered rare."
    }
  },
  {
    "id": 55,
    "sectionId": "sec-06",
    "sectionNumber": 6,
    "sectionTitle": {
      "es": "Prevención de transmisión maternoinfantil",
      "en": "Mother-to-Child Transmission Prevention"
    },
    "q": {
      "es": "¿Por qué el HTLV-1 se transmite a través de la leche materna?",
      "en": "Why is HTLV-1 transmitted through breast milk?"
    },
    "a": {
      "es": "La leche materna contiene células que forman parte de las defensas de tu cuerpo. Si tienes HTLV-1, algunas de estas células pueden estar infectadas y transmitir el virus a tu bebé durante la lactancia. Por eso, cuanto más tiempo dure la lactancia, mayor puede ser el riesgo de transmisión. \n\nSi tienes HTLV-1, conversa con tu médico tratante para recibir orientación sobre las opciones de alimentación para tu bebé. Recuerda que no es tu culpa: lo importante es contar con información y acompañamiento de los profesionales de salud.",
      "en": "Breast milk contains cells that are part of your body's defenses. If you have HTLV-1, some of these cells may be infected and transmit the virus to your baby during breastfeeding. Therefore, the longer breastfeeding lasts, the greater the risk of transmission may be.\n\nIf you have HTLV-1, talk to your treating doctor for guidance on feeding options for your baby. Remember that it is not your fault: the important thing is to have information and support from health professionals."
    }
  },
  {
    "id": 56,
    "sectionId": "sec-06",
    "sectionNumber": 6,
    "sectionTitle": {
      "es": "Prevención de transmisión maternoinfantil",
      "en": "Mother-to-Child Transmission Prevention"
    },
    "q": {
      "es": "¿Qué puedo hacer para evitar transmitir HTLV-1 a mi bebé?",
      "en": "What can I do to avoid transmitting HTLV-1 to my baby?"
    },
    "a": {
      "es": "Si tienes HTLV-1 y estás embarazada, conversa con tu médico sobre las opciones para alimentar a tu bebé. Alimentarlo con fórmula infantil en lugar de leche materna evita que se exponga al virus durante la lactancia. Para que esta opción sea segura, es importante contar con fórmula suficiente, agua segura y orientación para prepararla correctamente. \n\nNo tienes que tomar esta decisión sola: el equipo de salud puede acompañarte y orientarte según tu situación.",
      "en": "If you have HTLV-1 and are pregnant, talk to your doctor about feeding options for your baby. Feeding infant formula instead of breast milk prevents exposure to the virus while breastfeeding. For this option to be safe, it is important to have sufficient formula, safe water, and guidance on how to prepare it correctly.\n\nYou don't have to make this decision alone: ​​the health team can accompany you and guide you according to your situation."
    }
  },
  {
    "id": 57,
    "sectionId": "sec-06",
    "sectionNumber": 6,
    "sectionTitle": {
      "es": "Prevención de transmisión maternoinfantil",
      "en": "Mother-to-Child Transmission Prevention"
    },
    "q": {
      "es": "¿Es seguro si no doy leche materna al bebé?",
      "en": "Is it safe if I don't give breast milk to the baby?"
    },
    "a": {
      "es": "No dar leche materna evita la principal vía de transmisión del HTLV-1 de madre a bebé y reduce considerablemente el riesgo de infección. Sin embargo, no permite asegurar que el riesgo sea completamente cero, ya que existe información limitada sobre otras formas de transmisión menos frecuentes durante el embarazo o el parto.\n\nSi alimentas a tu bebé con fórmula infantil, es importante contar con orientación del equipo de salud y las condiciones necesarias para prepararla de forma segura.",
      "en": "Not giving breast milk prevents the main route of transmission of HTLV-1 from mother to baby and considerably reduces the risk of infection. However, it does not ensure that the risk is completely zero, since there is limited information on other less frequent forms of transmission during pregnancy or childbirth.\n\nIf you feed your baby with infant formula, it is important to have guidance from the health team and the necessary conditions to prepare it safely."
    }
  },
  {
    "id": 58,
    "sectionId": "sec-06",
    "sectionNumber": 6,
    "sectionTitle": {
      "es": "Prevención de transmisión maternoinfantil",
      "en": "Mother-to-Child Transmission Prevention"
    },
    "q": {
      "es": "Si también existe la posibilidad de infección intrauterina o durante el parto, ¿no sería aceptable dar leche materna?",
      "en": "If there is also the possibility of infection in utero or during childbirth, wouldn't it be acceptable to give breast milk?"
    },
    "a": {
      "es": "Aunque se han descrito otras formas de transmisión durante el embarazo o el parto, estas son mucho menos frecuentes y no se han estudiado lo suficiente.  \n\nLa lactancia materna sigue siendo la principal vía por la que el HTLV-1 puede pasar de la madre al bebé. Por eso, la posibilidad de transmisión durante el embarazo o el parto no elimina el riesgo asociado a la lactancia. Conversa con tu equipo de salud para conocer las opciones de alimentación más adecuadas para ti y tu bebé.",
      "en": "Although other forms of transmission during pregnancy or childbirth have been described, these are much less common and have not been studied enough.\n\nBreastfeeding remains the main route by which HTLV-1 can pass from mother to baby. Therefore, the possibility of transmission during pregnancy or childbirth does not eliminate the risk associated with breastfeeding. Talk to your health team to find out the most appropriate feeding options for you and your baby."
    }
  },
  {
    "id": 59,
    "sectionId": "sec-06",
    "sectionNumber": 6,
    "sectionTitle": {
      "es": "Prevención de transmisión maternoinfantil",
      "en": "Mother-to-Child Transmission Prevention"
    },
    "q": {
      "es": "¿Es necesario prevenir la infección si la probabilidad de desarrollar ATLLL o HAM no es alta?",
      "en": "Is it necessary to prevent infection if the probability of developing ATLL or HAM is not high?"
    },
    "a": {
      "es": "Aunque la mayoría de las personas con HTLV-1 nunca desarrolla enfermedades como ATLLL o HAM, la infección permanece en el organismo durante toda la vida y puede transmitirse a otras personas. Además, no es posible saber con certeza quién desarrollará alguna de estas enfermedades. Por eso, prevenir nuevas infecciones sigue siendo importante para evitar que más personas contraigan el virus y puedan presentar problemas de salud asociados a él.",
      "en": "Although most people with HTLV-1 never develop diseases such as ATLL or HAM, the infection remains in the body throughout life and can be transmitted to other people. Furthermore, it is not possible to know with certainty who will develop any of these diseases. Therefore, preventing new infections remains important to prevent more people from contracting the virus and potentially developing health problems associated with it."
    }
  },
  {
    "id": 60,
    "sectionId": "sec-07",
    "sectionNumber": 7,
    "sectionTitle": {
      "es": "Personas portadoras",
      "en": "Carriers of HTLV-1"
    },
    "q": {
      "es": "¿Qué significa ser portador de HTLV-1?",
      "en": "What does it mean to be a carrier of HTLV-1?"
    },
    "a": {
      "es": "Significa que tienes el virus HTLV-1 en tu organismo. El 95% de las personas con esta infección no presenta síntomas y puede vivir muchos años sin desarrollar una enfermedad relacionada con el virus. Sin embargo, algunas pueden desarrollar enfermedades como la leucemia/linfoma de células T del adulto (ATLLL), la mielopatía asociada al HTLV-1 (HAM) o la uveítis asociada al HTLV-1 (HU/HAU). Aunque no tengas síntomas, puedes transmitir el virus a otras personas.",
      "en": "It means that you have the HTLV-1 virus in your body. 95% of people with this infection do not have symptoms and can live for many years without developing an illness related to the virus. However, some can develop diseases such as adult T-cell leukemia/lymphoma (ATLL), HTLV-1-associated myelopathy (HAM), or HTLV-1-associated uveitis (HU/HAU). Even if you don't have symptoms, you can transmit the virus to other people."
    }
  },
  {
    "id": 61,
    "sectionId": "sec-07",
    "sectionNumber": 7,
    "sectionTitle": {
      "es": "Personas portadoras",
      "en": "Carriers of HTLV-1"
    },
    "q": {
      "es": "¿Es posible saber cuándo se produjo la infección por HTLV-1?",
      "en": "Is it possible to know when HTLV-1 infection occurred?"
    },
    "a": {
      "es": "Generalmente, no es posible saber con exactitud cuándo adquiriste el HTLV-1, porque la infección no suele producir síntomas al inicio. Si te realizaste una prueba anteriormente y el resultado fue negativo, y luego una prueba confirmatoria fue positiva, esos resultados pueden ayudar a establecer un periodo aproximado en el que ocurrió la infección, pero no permiten conocer la fecha exacta.",
      "en": "Generally, it is not possible to know exactly when you acquired HTLV-1, because the infection does not usually cause symptoms at first. If you have had a test previously and the result was negative, and then a confirmatory test was positive, those results can help establish an approximate period in which the infection occurred, but they do not allow us to know the exact date."
    }
  },
  {
    "id": 62,
    "sectionId": "sec-07",
    "sectionNumber": 7,
    "sectionTitle": {
      "es": "Personas portadoras",
      "en": "Carriers of HTLV-1"
    },
    "q": {
      "es": "Si me han identificado como portador/a de HTLV-1, ¿qué debería hacer?",
      "en": "If I have been identified as a carrier of HTLV-1, what should I do?"
    },
    "a": {
      "es": "Solicita una consulta en el establecimiento donde recibiste el resultado o una referencia a un servicio con experiencia en HTLV-1. Pide que te expliquen si el diagnóstico fue confirmado, qué significa ser portador/a, qué síntomas deben motivar una evaluación y si necesitas seguimiento. El virus no se transmite por la convivencia diaria, por lo que no necesitas aislarte ni evitar el contacto social. Si estás embarazada o planeas un embarazo, conversa cuanto antes sobre prevención de la transmisión al bebé.",
      "en": "Request a consultation at the facility where you received the result or a referral to a service with experience in HTLV-1. Ask them to explain if the diagnosis was confirmed, what it means to be a carrier, what symptoms should prompt an evaluation, and if you need follow-up. The virus is not transmitted through daily coexistence, so you do not need to isolate yourself or avoid social contact. If you are pregnant or planning a pregnancy, talk as soon as possible about preventing transmission to the baby."
    }
  },
  {
    "id": 63,
    "sectionId": "sec-07",
    "sectionNumber": 7,
    "sectionTitle": {
      "es": "Personas portadoras",
      "en": "Carriers of HTLV-1"
    },
    "q": {
      "es": "Si me han identificado como portador/a de HTLV-1, ¿debería decírselo a mi familia?",
      "en": "If I have been identified as a carrier of HTLV-1, should I tell my family?"
    },
    "a": {
      "es": "Decidir a quién contarle sobre tu diagnóstico es algo personal. Compartir esta información con las personas de confianza puede ayudar a que comprendan cómo se transmite el HTLV-1 y conozcan si necesitan realizarse una prueba. Si temes rechazo, conflicto o violencia, busca consejería antes de comunicarlo. La información sobre tu diagnóstico debe tratarse con confidencialidad.",
      "en": "Deciding who to tell about your diagnosis is personal. Sharing this information with people you trust can help them understand how HTLV-1 is transmitted and whether they need to get tested. If you fear rejection, conflict, or violence, seek counseling before reporting it. Information about your diagnosis must be treated confidentially."
    }
  },
  {
    "id": 64,
    "sectionId": "sec-07",
    "sectionNumber": 7,
    "sectionTitle": {
      "es": "Personas portadoras",
      "en": "Carriers of HTLV-1"
    },
    "q": {
      "es": "Si me han identificado como portador/a de HTLV-1, ¿deberían hacerse pruebas también mis familiares?",
      "en": "If I have been identified as a carrier of HTLV-1, should my family members also be tested?"
    },
    "a": {
      "es": "No todas las familias necesitan hacerse pruebas de manera automática. La decisión depende de antecedentes, síntomas, posibles exposiciones y de si la persona desea conocer su estado. Un profesional puede explicar beneficios, limitaciones y consecuencias del resultado para que cada familiar decida con información. Consulta con tu médico para conocer quiénes podrían realizarse una prueba y dónde realizarla.",
      "en": "Not all families automatically need testing. The decision depends on history, symptoms, possible exposures, and whether the person wants to know their status. A professional can explain benefits, limitations and consequences of the result so that each family member can decide with information. Check with your doctor to find out who could get a test and where to get it done."
    }
  },
  {
    "id": 65,
    "sectionId": "sec-07",
    "sectionNumber": 7,
    "sectionTitle": {
      "es": "Personas portadoras",
      "en": "Carriers of HTLV-1"
    },
    "q": {
      "es": "¿Hay algo que una persona portadora de HTLV-1 deba tener en cuenta en la vida cotidiana?",
      "en": "Is there anything that a person carrying HTLV-1 should take into account in everyday life?"
    },
    "a": {
      "es": "Puedes continuar con tu vida cotidiana con normalidad. El HTLV-1 no se transmite por abrazar, dar la mano, compartir alimentos o utensilios, utilizar el mismo baño ni convivir con otras personas, así que usted puede continuar con su vida como antes aunque esté infectado/a por HTLV-1. Sin embargo, debes tener en cuenta que puede transmitirse por relaciones sexuales, mediante sangre contaminada y durante la lactancia materna. Para reducir el riesgo, utiliza preservativo durante las relaciones sexuales y evita compartir objetos que puedan tener restos de sangre, como cepillos de dientes o cuchillas de afeitar. Tampoco compartas agujas o jeringas.",
      "en": "You can continue with your daily life as normal. HTLV-1 is not transmitted by hugging, shaking hands, sharing food or utensils, using the same bathroom, or living with other people, so you can continue with your life as before even if you are infected with HTLV-1. However, you must keep in mind that it can be transmitted through sexual relations, through contaminated blood and during breastfeeding. To reduce the risk, use a condom during sex and avoid sharing objects that may have traces of blood on them, such as toothbrushes or razor blades. Don't share needles or syringes either."
    }
  },
  {
    "id": 66,
    "sectionId": "sec-07",
    "sectionNumber": 7,
    "sectionTitle": {
      "es": "Personas portadoras",
      "en": "Carriers of HTLV-1"
    },
    "q": {
      "es": "¿Puede una persona portadora de HTLV-1 tener hijos?",
      "en": "Can a person carrying HTLV-1 have children?"
    },
    "a": {
      "es": "Sí, ser portador/a de HTLV-1 no impide necesariamente tener hijos. Sin embargo, si estás pensando en un embarazo, es recomendable conversar previamente con tu médico y con un profesional de salud con experiencia en HTLV-1. Así podrás recibir orientación sobre cómo reducir el riesgo de transmitir el virus a tu pareja o a tu bebé y conocer las opciones de alimentación infantil disponibles.",
      "en": "Yes, being a carrier of HTLV-1 does not necessarily prevent you from having children. However, if you are thinking about pregnancy, it is advisable to talk beforehand with your doctor and a health professional with experience in HTLV-1. This way you can receive guidance on how to reduce the risk of transmitting the virus to your partner or baby and learn about the infant feeding options available."
    }
  },
  {
    "id": 67,
    "sectionId": "sec-07",
    "sectionNumber": 7,
    "sectionTitle": {
      "es": "Personas portadoras",
      "en": "Carriers of HTLV-1"
    },
    "q": {
      "es": "¿Puede una persona portadora de HTLV-1 donar sangre?",
      "en": "Can a person carrying HTLV-1 donate blood?"
    },
    "a": {
      "es": "Si tienes una infección por HTLV-1 confirmada, no debes donar sangre. El virus puede transmitirse a través de la sangre y poner en riesgo a la persona que la recibe. En el Perú, las donaciones de sangre pasan por pruebas de tamizaje para detectar HTLV-I/II, entre otras infecciones. Si tienes un diagnóstico confirmado, comunícalo al personal del banco de sangre.",
      "en": "If you have a confirmed HTLV-1 infection, you should not donate blood. The virus can be transmitted through blood and put the person who receives it at risk. In Peru, blood donations undergo screening tests to detect HTLV-I/II, among other infections. If you have a confirmed diagnosis, notify the blood bank staff."
    }
  },
  {
    "id": 68,
    "sectionId": "sec-07",
    "sectionNumber": 7,
    "sectionTitle": {
      "es": "Personas portadoras",
      "en": "Carriers of HTLV-1"
    },
    "q": {
      "es": "¿Puede una persona portadora de HTLV-1 donar o recibir un trasplante de órganos?",
      "en": "Can a person carrying HTLV-1 donate or receive an organ transplant?"
    },
    "a": {
      "es": "El HTLV-1 puede transmitirse mediante un órgano de una persona infectada, por lo que la evaluación del donante y del receptor es importante. La posibilidad de realizar el trasplante debe evaluarse individualmente, según el órgano, la situación de salud del donante y del receptor, y los criterios del programa de trasplantes. Tener HTLV-1 no debe interpretarse por sí solo como una respuesta definitiva sobre la posibilidad de recibir un trasplante.",
      "en": "HTLV-1 can be transmitted through an organ from an infected person, so evaluation of the donor and recipient is important. The possibility of performing the transplant must be evaluated individually, depending on the organ, the health situation of the donor and the recipient, and the criteria of the transplant program. Having HTLV-1 should not be interpreted by itself as a definitive answer about the possibility of receiving a transplant."
    }
  },
  {
    "id": 69,
    "sectionId": "sec-07",
    "sectionNumber": 7,
    "sectionTitle": {
      "es": "Personas portadoras",
      "en": "Carriers of HTLV-1"
    },
    "q": {
      "es": "¿Puede una persona portadora de HTLV-1 ser donante para un trasplante de células madre hematopoyéticas?",
      "en": "Can a person carrying HTLV-1 be a donor for a hematopoietic stem cell transplant?"
    },
    "a": {
      "es": "La posibilidad de donar células madre hematopoyéticas depende de los criterios del registro o programa de donación y de la evaluación médica. Si tienes HTLV-1, informa tu diagnóstico al equipo responsable y consulta si puedes ser considerado/a como donante. La decisión debe basarse en las normas y los criterios aplicables al programa o servicio de salud específico.",
      "en": "The possibility of donating hematopoietic stem cells depends on the criteria of the registry or donation program and the medical evaluation. If you have HTLV-1, report your diagnosis to the responsible team and ask if you can be considered as a donor. The decision must be based on the standards and criteria applicable to the specific health program or service."
    }
  },
  {
    "id": 70,
    "sectionId": "sec-07",
    "sectionNumber": 7,
    "sectionTitle": {
      "es": "Personas portadoras",
      "en": "Carriers of HTLV-1"
    },
    "q": {
      "es": "¿Puede una persona portadora de HTLV-1 donar su cuerpo a la ciencia?",
      "en": "Can a person carrying HTLV-1 donate their body to science?"
    },
    "a": {
      "es": "La donación del cuerpo a la ciencia depende de los criterios de cada universidad o institución receptora y de la normativa aplicable. Si deseas hacerlo, consulta directamente a la institución elegida y declara tus antecedentes de salud.",
      "en": "The donation of the body to science depends on the criteria of each receiving university or institution and the applicable regulations. If you wish to do so, consult the chosen institution directly and declare your health history."
    }
  },
  {
    "id": 71,
    "sectionId": "sec-07",
    "sectionNumber": 7,
    "sectionTitle": {
      "es": "Personas portadoras",
      "en": "Carriers of HTLV-1"
    },
    "q": {
      "es": "Tengo artritis reumatoide y soy portador/a de HTLV-1. ¿Qué debo tener en cuenta?",
      "en": "I have rheumatoid arthritis and I am a carrier of HTLV-1. What should I take into account?"
    },
    "a": {
      "es": "Tener HTLV-1 no significa necesariamente que haya causado tu artritis reumatoide. Existe limitada evidencia sobre el tema y todavía no se conoce completamente cómo influye el HTLV-1 en la evolución de la artritis ni en la respuesta a sus tratamientos. Es importante que tanto tu reumatólogo como el profesional que realiza tu seguimiento por HTLV-1 conozcan ambos diagnósticos. No suspendas ni cambies tus medicamentos por tu cuenta. El equipo médico debe evaluar qué tratamiento es más adecuado para tu situación.",
      "en": "Having HTLV-1 does not necessarily mean that it caused your rheumatoid arthritis. There is limited evidence on the subject and it is not yet completely known how HTLV-1 influences the progression of arthritis or the response to its treatments. It is important that both your rheumatologist and the professional who monitors you for HTLV-1 know both diagnoses. Do not stop or change your medications on your own. The medical team must evaluate which treatment is most appropriate for your situation."
    }
  },
  {
    "id": 72,
    "sectionId": "sec-07",
    "sectionNumber": 7,
    "sectionTitle": {
      "es": "Personas portadoras",
      "en": "Carriers of HTLV-1"
    },
    "q": {
      "es": "Si un familiar ha sido identificado como portador de HTLV-1, ¿debería hacerme la prueba?",
      "en": "If a family member has been identified as a carrier of HTLV-1, should I get tested?"
    },
    "a": {
      "es": "Si un familiar tiene HTLV-1, puedes conversar con un profesional sobre tu propio riesgo y decidir si deseas hacerte la prueba. Depende de tu relación con esa persona y de las posibles situaciones de exposición al virus. Por ejemplo, puede ser importante que te realices una prueba si eres su pareja sexual o si recibiste lactancia materna de esa persona cuando ya tenía HTLV-1. \n\nEl hecho de convivir o compartir alimentos y espacios con alguien que tiene el virus no representa un riesgo de transmisión. Consulta con un profesional de salud para evaluar tu caso y decidir si necesitas realizarte la prueba.",
      "en": "If a family member has HTLV-1, you can talk to a professional about your own risk and decide if you want to get tested. It depends on your relationship with that person and the possible situations of exposure to the virus. For example, it may be important to get tested if you are their sexual partner or if you were breastfed by them when they already had HTLV-1.\n\nLiving or sharing food and spaces with someone who has the virus does not represent a risk of transmission. Consult with a health professional to evaluate your case and decide if you need to be tested."
    }
  },
  {
    "id": 73,
    "sectionId": "sec-07",
    "sectionNumber": 7,
    "sectionTitle": {
      "es": "Personas portadoras",
      "en": "Carriers of HTLV-1"
    },
    "q": {
      "es": "Antes donaba sangre y no me informaron de nada, pero ahora he recibido una notificación de HTLV-1 positivo. ¿Por qué?",
      "en": "I used to donate blood and they didn't inform me of anything, but now I have received a notification of positive HTLV-1. Because?"
    },
    "a": {
      "es": "Un resultado previo negativo o una notificación posterior pueden depender del tipo de prueba, el momento en que se realizó, la sensibilidad del método o una exposición ocurrida después. Una notificación de resultado positivo no debe interpretarse sin revisar el proceso confirmatorio. Solicita al banco de sangre que te explique qué prueba se usó y dónde completar la evaluación diagnóstica.",
      "en": "A previous negative result or subsequent reporting may depend on the type of test, the timing of the test, the sensitivity of the method, or a subsequent exposure. A notification of a positive result should not be interpreted without reviewing the confirmatory process. Ask the blood bank to explain what test was used and where to complete the diagnostic evaluation."
    }
  },
  {
    "id": 74,
    "sectionId": "sec-07",
    "sectionNumber": 7,
    "sectionTitle": {
      "es": "Personas portadoras",
      "en": "Carriers of HTLV-1"
    },
    "q": {
      "es": "Si me han identificado como portador/a de HTLV-1, ¿necesito hacerme controles médicos periódicos?",
      "en": "If I have been identified as a carrier of HTLV-1, do I need to have regular medical check-ups?"
    },
    "a": {
      "es": "No todas las personas portadoras requieren exactamente el mismo calendario de controles. El seguimiento se individualiza según síntomas, antecedentes, evaluación clínica y disponibilidad de pruebas. Conversa con tu médico sobre si necesitas controles y qué síntomas requieren consulta.",
      "en": "Not all carriers require exactly the same schedule of controls. Follow-up is individualized based on symptoms, history, clinical evaluation, and availability of tests. Talk to your doctor about whether you need check-ups and what symptoms require consultation."
    }
  },
  {
    "id": 75,
    "sectionId": "sec-07",
    "sectionNumber": 7,
    "sectionTitle": {
      "es": "Personas portadoras",
      "en": "Carriers of HTLV-1"
    },
    "q": {
      "es": "Me preocupa desarrollar ATLL o HAM. ¿Qué debería hacer?",
      "en": "I am worried about developing ATLL or HAM. What should I do?"
    },
    "a": {
      "es": "Ser portador/a no significa que necesariamente desarrollarás ATLLL, HAM u otra enfermedad.  Lo importante es realizar una evaluación médica y conocer qué seguimiento necesitas. Consulta si presentas síntomas nuevos o persistentes, como aumentado de tamaño de los glanglios, fiebre o cansancio sin explicación, debilidad progresiva en las piernas, dificultad para caminar, problemas para controlar la orina o alteraciones de la visión.",
      "en": "Being a carrier does not mean that you will necessarily develop ATLL, HAM or another disease.  The important thing is to carry out a medical evaluation and know what follow-up you need. See if you have new or persistent symptoms, such as enlarged glands, unexplained fever or tiredness, progressive weakness in the legs, difficulty walking, problems controlling urine, or vision changes."
    }
  },
  {
    "id": 76,
    "sectionId": "sec-07",
    "sectionNumber": 7,
    "sectionTitle": {
      "es": "Personas portadoras",
      "en": "Carriers of HTLV-1"
    },
    "q": {
      "es": "¿Puedo recibir vacunas, como las contra la COVID-19?",
      "en": "Can I receive vaccines, such as those against COVID-19?"
    },
    "a": {
      "es": "El diagnóstico de HTLV-1 no es, por sí solo, una razón para dejar de recibir las vacunas recomendadas. Sin embargo, si has desarrollado una enfermedad asociada al virus o recibes medicamentos que disminuyen las defensas, el profesional que te atiende debe evaluar qué vacunas necesitas y cuál es el mejor momento para recibirlas. \n\nConsulta antes de vacunarte si estás siguiendo algún tratamiento que pueda afectar tu sistema inmunitario.",
      "en": "A diagnosis of HTLV-1 is not, by itself, a reason to stop receiving recommended vaccines. However, if you have developed a disease associated with the virus or are receiving medications that lower your defenses, the professional treating you must evaluate which vaccines you need and what is the best time to receive them.\n\nCheck before getting vaccinated if you are following any treatment that may affect your immune system."
    }
  },
  {
    "id": 77,
    "sectionId": "sec-08",
    "sectionNumber": 8,
    "sectionTitle": {
      "es": "Gestantes portadoras",
      "en": "Pregnant Carriers"
    },
    "q": {
      "es": "¿La infección por HTLV-1 afecta al embarazo, al parto o al desarrollo del bebé?",
      "en": "Does HTLV-1 infection affect pregnancy, childbirth, or baby development?"
    },
    "a": {
      "es": "Tener HTLV-1 no suele impedir que quedes embarazada ni significa que tu bebé necesariamente tendrá problemas de salud o de desarrollo. Sin embargo, el virus puede transmitirse de madre a hijo, principalmente durante la lactancia materna. Por eso, es importante que recibas orientación durante el embarazo para conocer cómo reducir el riesgo de transmisión y planificar el cuidado de tu bebé.",
      "en": "Having HTLV-1 does not usually prevent you from getting pregnant nor does it mean that your baby will necessarily have health or developmental problems. However, the virus can be transmitted from mother to child, mainly during breastfeeding. Therefore, it is important that you receive guidance during pregnancy to learn how to reduce the risk of transmission and plan the care of your baby."
    }
  },
  {
    "id": 78,
    "sectionId": "sec-08",
    "sectionNumber": 8,
    "sectionTitle": {
      "es": "Gestantes portadoras",
      "en": "Pregnant Carriers"
    },
    "q": {
      "es": "¿Es preferible dar a luz por cesárea?",
      "en": "Is it preferable to give birth by cesarean section?"
    },
    "a": {
      "es": "No necesariamente. Tener HTLV-1, por sí solo, no es motivo para realizar una cesárea. La vía del parto debe decidirse según las condiciones de tu embarazo y las indicaciones habituales del equipo de obstetricia. La principal medida para reducir la transmisión de madre a hijo está relacionada con las decisiones sobre la alimentación del bebé, no con el tipo de parto.",
      "en": "Not necessarily. Having HTLV-1, by itself, is not a reason to perform a cesarean section. The route of delivery must be decided according to the conditions of your pregnancy and the usual indications of the obstetrics team. The main measure to reduce transmission from mother to child is related to decisions about feeding the baby, not the type of delivery."
    }
  },
  {
    "id": 79,
    "sectionId": "sec-08",
    "sectionNumber": 8,
    "sectionTitle": {
      "es": "Gestantes portadoras",
      "en": "Pregnant Carriers"
    },
    "q": {
      "es": "¿Qué puedo hacer para evitar transmitir el HTLV-1 a mi bebé?",
      "en": "What can I do to avoid transmitting HTLV-1 to my baby?"
    },
    "a": {
      "es": "El primer paso es confirmar el diagnóstico y conversar antes del parto con obstetricia, pediatría e infectología si está disponible. La principal vía de transmisión de madre a hijo es la lactancia materna. Alimentar al bebé con fórmula infantil en lugar de leche materna evita su exposición al virus por esta vía. Sin embargo, la decisión debe considerar si puedes disponer de fórmula suficiente, agua segura y condiciones adecuadas para prepararla. El equipo de salud debe acompañarte para elegir la opción más segura y adecuada para tu situación.",
      "en": "The first step is to confirm the diagnosis and talk before delivery with obstetrics, pediatrics and infectious diseases if available. The main route of transmission from mother to child is breastfeeding. Feeding the baby infant formula instead of breast milk prevents exposure to the virus in this way. However, the decision should consider whether you can have enough formula, safe water, and suitable conditions to prepare it. The health team must accompany you to choose the safest and most appropriate option for your situation."
    }
  },
  {
    "id": 80,
    "sectionId": "sec-08",
    "sectionNumber": 8,
    "sectionTitle": {
      "es": "Gestantes portadoras",
      "en": "Pregnant Carriers"
    },
    "q": {
      "es": "Quiero alimentar a mi bebé con leche materna. ¿Existe alguna manera de hacerlo?",
      "en": "I want to feed my baby with breast milk. Is there a way to do it?"
    },
    "a": {
      "es": "Es comprensible que quieras amamantar a tu bebé. Sin embargo, si tienes HTLV-1, la leche materna puede transmitir el virus. Antes de tomar una decisión, conversa con tu equipo de salud para conocer qué opciones existen, qué se sabe sobre sus riesgos y cuáles pueden aplicarse a tu situación.",
      "en": "It's understandable that you want to breastfeed your baby. However, if you have HTLV-1, breast milk can transmit the virus. Before making a decision, talk to your health team to learn what options exist, what is known about their risks, and which ones may apply to your situation."
    }
  },
  {
    "id": 81,
    "sectionId": "sec-08",
    "sectionNumber": 8,
    "sectionTitle": {
      "es": "Gestantes portadoras",
      "en": "Pregnant Carriers"
    },
    "q": {
      "es": "¿Puedo darle al bebé solamente el calostro?",
      "en": "Can I give the baby only colostrum?"
    },
    "a": {
      "es": "El calostro es la primera leche que produces después del parto y también puede contener células infectadas por HTLV-1. Por eso, no debe asumirse que dar calostro durante unos pocos días está libre de riesgo de transmisión. Si tienes HTLV-1, conversa con tu equipo de salud antes del parto sobre las opciones de alimentación para tu bebé.",
      "en": "Colostrum is the first milk you produce after giving birth and may also contain cells infected by HTLV-1. Therefore, it should not be assumed that giving colostrum for a few days is free of the risk of transmission. If you have HTLV-1, talk to your health team before delivery about feeding options for your baby."
    }
  },
  {
    "id": 82,
    "sectionId": "sec-08",
    "sectionNumber": 8,
    "sectionTitle": {
      "es": "Gestantes portadoras",
      "en": "Pregnant Carriers"
    },
    "q": {
      "es": "¿La alimentación con fórmula previene por completo la infección?",
      "en": "Does formula feeding completely prevent infection?"
    },
    "a": {
      "es": "Alimentar a tu bebé con fórmula infantil en lugar de leche materna evita la exposición al HTLV-1 a través de la lactancia y reduce considerablemente el riesgo de transmisión. Sin embargo, no permite asegurar que el riesgo sea absolutamente cero, porque se han descrito otras formas de transmisión mucho menos frecuentes durante el embarazo o el parto. Si eliges esta opción, es importante contar con fórmula suficiente, agua segura y orientación para prepararla correctamente.",
      "en": "Feeding your baby infant formula instead of breast milk prevents exposure to HTLV-1 through breastfeeding and greatly reduces the risk of transmission. However, it does not ensure that the risk is absolutely zero, because other, much less frequent forms of transmission have been described during pregnancy or childbirth. If you choose this option, it is important to have enough formula, safe water, and guidance on how to prepare it correctly."
    }
  },
  {
    "id": 83,
    "sectionId": "sec-08",
    "sectionNumber": 8,
    "sectionTitle": {
      "es": "Gestantes portadoras",
      "en": "Pregnant Carriers"
    },
    "q": {
      "es": "¿Qué proporción de niños se infecta según el método de alimentación elegido?",
      "en": "What proportion of children become infected depending on the feeding method chosen?"
    },
    "a": {
      "es": "El riesgo de transmisión puede variar según el tiempo que dure la lactancia y otros factores relacionados con la madre y el bebé. En general, cuanto más prolongada es la lactancia materna, mayor puede ser la posibilidad de transmisión.",
      "en": "The risk of transmission may vary depending on the duration of breastfeeding and other factors related to the mother and baby. In general, the longer you breastfeed, the greater the chance of transmission."
    }
  },
  {
    "id": 84,
    "sectionId": "sec-08",
    "sectionNumber": 8,
    "sectionTitle": {
      "es": "Gestantes portadoras",
      "en": "Pregnant Carriers"
    },
    "q": {
      "es": "¿Cómo debería elegir el método de alimentación?",
      "en": "How should I choose the feeding method?"
    },
    "a": {
      "es": "La decisión debe tomarse con información clara y orientación del equipo de salud, teniendo en cuenta tu diagnóstico, las opciones disponibles y las condiciones de tu familia. Es importante considerar si tendrás acceso continuo a fórmula infantil, agua segura y condiciones adecuadas para prepararla, así como el seguimiento nutricional que necesitará tu bebé.",
      "en": "The decision must be made with clear information and guidance from the health team, taking into account your diagnosis, the available options and your family's conditions. It is important to consider whether you will have continued access to infant formula, safe water and adequate conditions to prepare it, as well as the nutritional monitoring your baby will need."
    }
  },
  {
    "id": 85,
    "sectionId": "sec-08",
    "sectionNumber": 8,
    "sectionTitle": {
      "es": "Gestantes portadoras",
      "en": "Pregnant Carriers"
    },
    "q": {
      "es": "¿Qué debo hacer si mi familia o las personas de mi entorno me preguntan por qué no doy leche materna?",
      "en": "What should I do if my family or people around me ask me why I don't give breast milk?"
    },
    "a": {
      "es": "Si alguien te pregunta por qué no estás dando leche materna, puedes responder: «Estamos siguiendo la orientación del equipo de salud para cuidar a nuestro bebé». No tienes obligación de explicar tu diagnóstico ni compartir detalles personales con familiares o amistades si no lo deseas. Si recibes comentarios que te incomodan o sientes presión para amamantar, recuerda que tienes derecho a decidir cómo alimentar a tu bebé con orientación médica y sin ser juzgada. Si necesitas apoyo para hablar con tu familia, puedes pedir al personal de salud que te ayude a preparar una explicación sencilla.",
      "en": "If someone asks you why you are not giving breast milk, you can answer: \"We are following the guidance of the health team to care for our baby.\" You are under no obligation to explain your diagnosis or share personal details with family or friends if you do not wish to. If you receive comments that make you uncomfortable or feel pressure to breastfeed, remember that you have the right to decide how to feed your baby with medical guidance and without judgment. If you need support talking to your family, you can ask healthcare staff to help you prepare a simple explanation."
    }
  },
  {
    "id": 86,
    "sectionId": "sec-08",
    "sectionNumber": 8,
    "sectionTitle": {
      "es": "Gestantes portadoras",
      "en": "Pregnant Carriers"
    },
    "q": {
      "es": "Me siento culpable por no dar leche materna. ¿Qué puedo hacer?",
      "en": "I feel guilty for not giving breast milk. What can I do?"
    },
    "a": {
      "es": "Es comprensible que sientas tristeza o culpa si esperabas amamantar a tu bebé. Sin embargo, tener HTLV-1 no es algo que hayas elegido, y tomar medidas para reducir el riesgo de transmisión también es una forma de cuidar a tu bebé. Recuerda que esta decisión no define tu valor como madre: elegir otra forma de alimentar a tu bebé no te convierte en una mala madre. Si estos sentimientos te generan mucho malestar, conversa con el equipo de salud o solicita apoyo psicológico.",
      "en": "It's understandable that you might feel sadness or guilt if you were hoping to breastfeed your baby. However, having HTLV-1 is not something you chose, and taking steps to reduce the risk of transmission is also a way to care for your baby. Remember that this decision does not define your value as a mother: choosing another way to feed your baby does not make you a bad mother. If these feelings make you very uncomfortable, talk to your health team or request psychological support."
    }
  },
  {
    "id": 87,
    "sectionId": "sec-08",
    "sectionNumber": 8,
    "sectionTitle": {
      "es": "Gestantes portadoras",
      "en": "Pregnant Carriers"
    },
    "q": {
      "es": "¿Qué debo hacer si el resultado de mi prueba de anticuerpos contra HTLV-1 queda indeterminado?",
      "en": "What should I do if my HTLV-1 antibody test result is indeterminate?"
    },
    "a": {
      "es": "Un resultado indeterminado significa que la prueba no ha permitido confirmar ni descartar la infección. Esto no quiere decir necesariamente que tengas HTLV-1. El equipo médico debe evaluar si necesitas otras pruebas o repetir el análisis para aclarar el resultado. Si estás embarazada, solicita orientación lo antes posible para resolver tus dudas y conocer las opciones de prevención. No tomes decisiones definitivas sobre la alimentación de tu bebé basándote únicamente en un resultado que todavía no está confirmado.",
      "en": "An indeterminate result means that the test has not confirmed or ruled out infection. This does not necessarily mean that you have HTLV-1. The medical team should evaluate whether you need further tests or repeat the analysis to clarify the result. If you are pregnant, seek guidance as soon as possible to resolve your doubts and learn about prevention options. Do not make final decisions about feeding your baby based solely on a result that is not yet confirmed."
    }
  },
  {
    "id": 88,
    "sectionId": "sec-08",
    "sectionNumber": 8,
    "sectionTitle": {
      "es": "Gestantes portadoras",
      "en": "Pregnant Carriers"
    },
    "q": {
      "es": "Me han identificado como portadora de HTLV-1 durante el control prenatal. ¿Qué va a pasar conmigo?",
      "en": "I have been identified as a carrier of HTLV-1 during prenatal care. What's going to happen to me?"
    },
    "a": {
      "es": "Primero se debe aclarar si el diagnóstico está confirmado. Si tienes HTLV-1, eso no significa que necesariamente desarrollarás una enfermedad ni que tu bebé ya esté infectado. Tu equipo profesional de salud te orientará sobre cómo cuidar tu salud, las opciones para alimentar a tu bebé y las medidas para reducir el riesgo de transmisión. También podrás consultar tus dudas y recibir apoyo durante el embarazo y después del parto. No tienes que afrontar esta situación sola.",
      "en": "It must first be clarified whether the diagnosis is confirmed. If you have HTLV-1, that doesn't mean you will necessarily develop a disease or that your baby is already infected. Your professional health team will guide you on how to care for your health, feeding options for your baby, and measures to reduce the risk of transmission. You can also ask your questions and receive support during pregnancy and after childbirth. You don't have to face this situation alone."
    }
  },
  {
    "id": 89,
    "sectionId": "sec-09",
    "sectionNumber": 9,
    "sectionTitle": {
      "es": "Hijos de personas portadoras",
      "en": "Children of Carriers"
    },
    "q": {
      "es": "¿Qué probabilidad hay de que mi hijo se haya infectado?",
      "en": "What is the probability that my child has been infected?"
    },
    "a": {
      "es": "El riesgo depende de si tenías HTLV-1 cuando nació tu hijo y de si recibió leche materna, así como del tiempo que duró la lactancia. Sin embargo, haber estado expuesto al virus no significa necesariamente que se haya infectado. Consulta con su pediatra para evaluar si necesita una prueba y cuándo sería conveniente realizarla.",
      "en": "The risk depends on whether you had HTLV-1 when your child was born and whether he or she received breast milk, as well as how long you were breast-feeding. However, having been exposed to the virus does not necessarily mean that you have been infected. Consult your pediatrician to evaluate if you need a test and when it would be appropriate to have it done."
    }
  },
  {
    "id": 90,
    "sectionId": "sec-09",
    "sectionNumber": 9,
    "sectionTitle": {
      "es": "Hijos de personas portadoras",
      "en": "Children of Carriers"
    },
    "q": {
      "es": "No sabía que era portadora de HTLV-1 y amamanté a mi hijo. ¿Qué probabilidad hay de que se haya infectado?",
      "en": "I didn't know I was an HTLV-1 carrier and I breastfed my son. What is the probability that it has been infected?"
    },
    "a": {
      "es": "Haber amamantado antes de conocer el diagnóstico no significa que el niño se haya infectado. El riesgo aumenta con la exposición a la leche materna, pero no todos los niños expuestos adquieren la infección. Consulta con el pediatra para que evalúe los antecedentes de tu hijo y te oriente sobre las pruebas que podría necesitar. Recuerda que no debes sentirte culpable.",
      "en": "Having breastfed before knowing the diagnosis does not mean that the child has been infected. The risk increases with exposure to breast milk, but not all exposed children acquire the infection. Consult your pediatrician to evaluate your child's history and advise you on the tests he or she may need. Remember that you should not feel guilty."
    }
  },
  {
    "id": 91,
    "sectionId": "sec-09",
    "sectionNumber": 9,
    "sectionTitle": {
      "es": "Hijos de personas portadoras",
      "en": "Children of Carriers"
    },
    "q": {
      "es": "¿Qué puedo hacer para evitar transmitir HTLV-1 a mi hijo?",
      "en": "What can I do to avoid transmitting HTLV-1 to my child?"
    },
    "a": {
      "es": "Si tienes HTLV-1, conversa con tu equipo de salud antes del parto sobre cómo alimentar a tu bebé. Como el virus se transmite principalmente a través de la leche materna, alimentarlo con fórmula infantil en lugar de amamantar evita su exposición al virus por esta vía. Si tu hijo ya recibió leche materna, no significa que se haya infectado, consulta con su pediatra para saber si necesita una prueba y cuándo realizarla.",
      "en": "If you have HTLV-1, talk to your health team before delivery about how to feed your baby. Since the virus is primarily transmitted through breast milk, feeding infant formula instead of breastfeeding prevents exposure to the virus this way. If your child has already received breast milk, it does not mean that he or she has been infected. Consult your pediatrician to find out if you need a test and when to do it."
    }
  },
  {
    "id": 92,
    "sectionId": "sec-09",
    "sectionNumber": 9,
    "sectionTitle": {
      "es": "Hijos de personas portadoras",
      "en": "Children of Carriers"
    },
    "q": {
      "es": "¿Debo tener alguna precaución especial con un niño nacido de una gestante portadora de HTLV-1?",
      "en": "Should I take any special precautions with a child born to a pregnant woman who is a carrier of HTLV-1?"
    },
    "a": {
      "es": "Tu hijo puede realizar sus actividades habituales y no necesita estar aislado. Es importante que su pediatra conozca tus antecedentes para evaluar si necesita algún seguimiento. Tener HTLV-1 en la familia no es motivo para limitar el contacto ni las actividades del niño. Cualquier control específico debe ser definido por pediatría según la exposición y la edad.",
      "en": "Your child can carry out their usual activities and does not need to be isolated. It is important that your pediatrician knows your history to evaluate if any follow-up is needed. Having HTLV-1 in the family is not a reason to limit the child's contact or activities. Any specific control must be defined by pediatrics according to exposure and age."
    }
  },
  {
    "id": 93,
    "sectionId": "sec-09",
    "sectionNumber": 9,
    "sectionTitle": {
      "es": "Hijos de personas portadoras",
      "en": "Children of Carriers"
    },
    "q": {
      "es": "¿Debería hacerle una prueba a mi hijo para saber si se ha infectado por HTLV-1?",
      "en": "Should I test my child to see if he or she has been infected with HTLV-1?"
    },
    "a": {
      "es": "Si tu hijo pudo haber estado expuesto al HTLV-1 durante el embarazo o la lactancia, consulta con su pediatra sobre la posibilidad de realizarle una prueba. Es importante elegir el momento adecuado, porque los anticuerpos que recibe de la madre durante el embarazo pueden interferir con los resultados de las pruebas realizadas a una edad temprana.",
      "en": "If your child may have been exposed to HTLV-1 during pregnancy or breastfeeding, ask your pediatrician about testing. It is important to choose the right time, because the antibodies you receive from the mother during pregnancy can interfere with the results of tests done at a young age."
    }
  },
  {
    "id": 94,
    "sectionId": "sec-09",
    "sectionNumber": 9,
    "sectionTitle": {
      "es": "Hijos de personas portadoras",
      "en": "Children of Carriers"
    },
    "q": {
      "es": "¿Cuándo se puede saber si mi hijo se ha infectado?",
      "en": "When can I know if my child has been infected?"
    },
    "a": {
      "es": "Depende de la edad de tu hijo y del tipo de prueba disponible. Las pruebas de anticuerpos realizadas demasiado pronto pueden ser difíciles de interpretar porque todavía pueden detectarse anticuerpos que recibió durante el embarazo. El pediatra o especialista te indicará cuándo es conveniente realizar la prueba.",
      "en": "It depends on your child's age and the type of test available. Antibody tests done too early can be difficult to interpret because antibodies you received during pregnancy may still be detected. The pediatrician or specialist will tell you when it is convenient to perform the test."
    }
  },
  {
    "id": 95,
    "sectionId": "sec-09",
    "sectionNumber": 9,
    "sectionTitle": {
      "es": "Hijos de personas portadoras",
      "en": "Children of Carriers"
    },
    "q": {
      "es": "Si quiero investigar si mi hijo se ha infectado, ¿cómo debería explicárselo?",
      "en": "If I want to investigate if my child has been infected, how should I explain it to them?"
    },
    "a": {
      "es": "Explícale la situación de acuerdo con su edad y lo que pueda comprender. Si es pequeño, puedes recibir orientación del equipo de salud sobre cómo acompañarlo durante las evaluaciones. A medida que crezca, podrás conversar con él de manera gradual y sencilla, sin generar miedo ni culpa. La decisión debe proteger la privacidad y el bienestar del niño, y puede apoyarse con psicología o consejería si la familia tiene dudas.",
      "en": "Explain the situation to him according to his age and what he can understand. If it is small, you can receive guidance from the health team on how to accompany it during the evaluations. As he grows, you will be able to talk to him gradually and easily, without generating fear or guilt. The decision must protect the privacy and well-being of the child, and may be supported by psychology or counseling if the family has concerns."
    }
  },
  {
    "id": 96,
    "sectionId": "sec-09",
    "sectionNumber": 9,
    "sectionTitle": {
      "es": "Hijos de personas portadoras",
      "en": "Children of Carriers"
    },
    "q": {
      "es": "He descubierto que mi hijo está infectado por HTLV-1. ¿Qué probabilidad hay de que desarrolle una enfermedad?",
      "en": "I have discovered that my son is infected with HTLV-1. How likely is it that you will develop a disease?"
    },
    "a": {
      "es": "Estar infectado no significa que el niño vaya a desarrollar una enfermedad asociada al HTLV-1. La mayoría de las personas portadoras permanece sin síntomas, pero es importante recibir atención clínica que permita evaluar cualquier problema futuro. Un pediatra o especialista debe explicar el riesgo de manera comprensible y orientar qué seguimiento realmente se necesita.",
      "en": "Being infected does not mean that the child will develop a disease associated with HTLV-1. Most carriers remain symptom-free, but it is important to receive clinical care to evaluate any future problems. A pediatrician or specialist should explain the risk in an understandable way and guide what follow-up is really needed."
    }
  },
  {
    "id": 97,
    "sectionId": "sec-09",
    "sectionNumber": 9,
    "sectionTitle": {
      "es": "Hijos de personas portadoras",
      "en": "Children of Carriers"
    },
    "q": {
      "es": "He descubierto que mi hijo está infectado por HTLV-1. ¿Debe tener algún cuidado especial en su vida cotidiana?",
      "en": "I have discovered that my son is infected with HTLV-1. Should you take any special care in your daily life?"
    },
    "a": {
      "es": "Tu hijo puede jugar, estudiar, abrazar a otras personas y compartir alimentos y espacios con normalidad. El HTLV-1 no se transmite por estas actividades cotidianas. No necesita estar aislado ni evitar el contacto con otros niños. Las precauciones se relacionan con las vías conocidas de transmisión, no con el contacto social. Tu equipo de salud puede aclarar dudas a la familia y ayudar a prevenir el estigma.",
      "en": "Your child can play, study, hug other people and share food and spaces normally. HTLV-1 is not transmitted through these everyday activities. You do not need to be isolated or avoid contact with other children. The precautions relate to known routes of transmission, not social contact. Your health team can clarify doubts for the family and help prevent stigma."
    }
  },
  {
    "id": 98,
    "sectionId": "sec-09",
    "sectionNumber": 9,
    "sectionTitle": {
      "es": "Hijos de personas portadoras",
      "en": "Children of Carriers"
    },
    "q": {
      "es": "Si mi hijo está infectado por HTLV-1, ¿puede transmitirlo a sus hermanos?",
      "en": "If my child is infected with HTLV-1, can he or she pass it on to his or her siblings?"
    },
    "a": {
      "es": "El HTLV-1 no se transmite por jugar, abrazarse o vivir en la misma casa. Por lo tanto, tus hijos pueden compartir sus actividades cotidianas sin riesgo de transmisión por estas vías. Las principales formas de transmisión son la lactancia materna, las relaciones sexuales y el contacto con sangre infectada.",
      "en": "HTLV-1 is not transmitted by playing, hugging, or living in the same house. Therefore, your children can share their daily activities without risk of transmission through these routes. The main forms of transmission are breastfeeding, sexual relations and contact with infected blood."
    }
  },
  {
    "id": 99,
    "sectionId": "sec-09",
    "sectionNumber": 9,
    "sectionTitle": {
      "es": "Hijos de personas portadoras",
      "en": "Children of Carriers"
    },
    "q": {
      "es": "Si mi hijo está infectado por HTLV-1, ¿pueden rechazarlo en una guardería, jardín de infancia o escuela?",
      "en": "If my child is infected with HTLV-1, can he or she be turned away from a daycare, kindergarten, or school?"
    },
    "a": {
      "es": "El HTLV-1 no se transmite por jugar con otros niños, compartir el aula ni convivir en la escuela. Por eso, tu hijo puede asistir a clases y participar en las actividades escolares con normalidad. Su diagnóstico no debe ser motivo de rechazo o discriminación. Si ocurre alguna situación de este tipo, puedes solicitar orientación a la institución educativa y al personal de salud. Recuerda que la información sobre su diagnóstico debe tratarse con confidencialidad.",
      "en": "HTLV-1 is not transmitted by playing with other children, sharing a classroom, or living together at school. Therefore, your child can attend classes and participate in school activities normally. Your diagnosis should not be a reason for rejection or discrimination. If any situation of this type occurs, you can request guidance from the educational institution and health personnel. Remember that information about your diagnosis must be treated confidentially."
    }
  },
  {
    "id": 100,
    "sectionId": "sec-09",
    "sectionNumber": 9,
    "sectionTitle": {
      "es": "Hijos de personas portadoras",
      "en": "Children of Carriers"
    },
    "q": {
      "es": "Si mi hijo está infectado por HTLV-1, ¿qué debo hacer con sus vacunas?",
      "en": "If my child is infected with HTLV-1, what should I do about his or her vaccines?"
    },
    "a": {
      "es": "Tener HTLV-1 no significa que tu hijo deba dejar de recibir las vacunas habituales. Consulta con su pediatra para seguir el calendario de vacunación vigente en el país y saber si necesita alguna consideración especial según su estado de salud o los tratamientos que reciba.",
      "en": "Having HTLV-1 does not mean that your child should stop receiving regular vaccines. Consult your pediatrician to follow the current vaccination schedule in the country and find out if you need any special consideration depending on your health status or the treatments you receive."
    }
  },
  {
    "id": 101,
    "sectionId": "sec-09",
    "sectionNumber": 9,
    "sectionTitle": {
      "es": "Hijos de personas portadoras",
      "en": "Children of Carriers"
    },
    "q": {
      "es": "¿Debo decirle a mi hijo que está infectado por HTLV-1? Si es así, ¿cuándo debería hacerlo?",
      "en": "Should I tell my child that he or she is infected with HTLV-1? If so, when should I do it?"
    },
    "a": {
      "es": "Depende de su edad y de su capacidad para comprender la información. Es recomendable recibir orientación del pediatra o de un profesional de psicología para explicárselo de manera sencilla, gradual y sin generar miedo. Lo importante es que pueda comprender su situación y participar progresivamente en el cuidado de su salud.",
      "en": "It depends on your age and your ability to understand the information. It is advisable to receive guidance from a pediatrician or a psychology professional to explain it in a simple, gradual way and without generating fear. The important thing is that you can understand your situation and progressively participate in your health care."
    }
  },
  {
    "id": 102,
    "sectionId": "sec-10",
    "sectionNumber": 10,
    "sectionTitle": {
      "es": "Enfermedades asociadas: ATLL",
      "en": "Associated Diseases: ATLL"
    },
    "q": {
      "es": "¿Qué tipo de enfermedad es la ATLLL?",
      "en": "What type of disease is ATLL?"
    },
    "a": {
      "es": "La leucemia/linfoma de células T del adulto (ATLL, por sus siglas en inglés: adult T-cell leukemia/lymphoma) es un tipo de cáncer relacionado con la infección por HTLV-1. Se desarrolla cuando algunos linfocitos T infectados por el virus (células que forman parte de las defensas del organismo) se vuelven cancerosos y comienzan a multiplicarse sin control. Puede aparecer muchos años después de adquirir el virus y es más frecuente en personas adultas mayores.\n\nLa enfermedad puede causar fiebre persistente, cansancio intenso, inflamación de los ganglios y lesiones en la piel. Además, al afectar las células de las defensas, puede debilitar el sistema inmunitario y aumentar el riesgo de infecciones. En los casos más graves, puede afectar distintos órganos y poner en riesgo la vida. Las personas que tienen HAM (mielopatía asociada al HTLV-1) también pueden desarrollar ATLL. Es importante recordar que tener HTLV-1 no significa que necesariamente desarrollarás ATLL.",
      "en": "Adult T-cell leukemia/lymphoma (ATLL) is a type of cancer related to HTLV-1 infection. It develops when some T lymphocytes infected by the virus (cells that are part of the body's defenses) become cancerous and begin to multiply uncontrollably. It can appear many years after acquiring the virus and is more common in older adults.\n\nThe disease can cause persistent fever, severe fatigue, swollen glands, and skin lesions. In addition, by affecting defense cells, it can weaken the immune system and increase the risk of infections. In the most serious cases, it can affect different organs and put life at risk. People who have HAM (HTLV-1-associated myelopathy) can also develop ATLL. It is important to remember that having HTLV-1 does not mean that you will necessarily develop ATLL."
    }
  },
  {
    "id": 103,
    "sectionId": "sec-10",
    "sectionNumber": 10,
    "sectionTitle": {
      "es": "Enfermedades asociadas: ATLL",
      "en": "Associated Diseases: ATLL"
    },
    "q": {
      "es": "¿Con qué frecuencia las personas portadoras de HTLV-1 desarrollan ATLL?",
      "en": "How often do people carrying HTLV-1 develop ATLL?"
    },
    "a": {
      "es": "Se estima que alrededor del 5 % de las personas con HTLV-1 desarrolla ATLL a lo largo de su vida. Esto significa que aproximadamente 5 de cada 100 personas pueden presentar esta enfermedad, mientras que la gran mayoría nunca la desarrolla. Algunas investigaciones han encontrado diferencias según el sexo: aproximadamente 1 de cada 20 hombres y 1 de cada 40 mujeres con HTLV-1 podría desarrollar ATLL. Estas cifras son estimaciones y no permiten saber con certeza qué ocurrirá en una persona en particular.",
      "en": "It is estimated that about 5% of people with HTLV-1 develop ATLL during their lifetime. This means that approximately 5 out of every 100 people may develop this disease, while the vast majority never develop it. Some research has found differences by sex: About 1 in 20 men and 1 in 40 women with HTLV-1 may develop ATLL. These figures are estimates and do not allow us to know with certainty what will happen to a particular person."
    }
  },
  {
    "id": 104,
    "sectionId": "sec-10",
    "sectionNumber": 10,
    "sectionTitle": {
      "es": "Enfermedades asociadas: ATLL",
      "en": "Associated Diseases: ATLL"
    },
    "q": {
      "es": "¿Qué síntomas aparecen cuando se desarrolla ATLL?",
      "en": "What symptoms appear when ATLL develops?"
    },
    "a": {
      "es": "En las formas aguda y linfomatosa, que son las principales formas clínicas de ATLL, se produce inflamación de los ganglios linfáticos de todo el cuerpo y aumento del tamaño del hígado y del bazo, además de fiebre. También son frecuentes síntomas cutáneos, como eritema (erupciones rojas) y nódulos bajo la piel, así como síntomas digestivos, entre ellos diarrea y dolor abdominal. Cuando la ATLL empeora y aumenta el nivel de calcio en la sangre, pueden aparecer cansancio generalizado, estreñimiento y alteraciones de la consciencia. \n\nLa forma latente (smoldering) suele ser asintomática y, si hay síntomas, casi siempre se limitan a lesiones cutáneas. La forma crónica también suele ser asintomática, aunque puede acompañarse de inflamación de los ganglios linfáticos.",
      "en": "In the acute and lymphomatous forms, which are the main clinical forms of ATLL, there is inflammation of the lymph nodes throughout the body and an enlargement of the liver and spleen, as well as fever. Skin symptoms, such as erythema (red rashes) and nodules under the skin, are also common, as are digestive symptoms, including diarrhea and abdominal pain. When ATLL worsens and the level of calcium in the blood increases, generalized fatigue, constipation, and altered consciousness may occur.\n\nThe latent form (smoldering) is usually asymptomatic and, if symptoms are present, they are almost always limited to skin lesions. The chronic form is also usually asymptomatic, although it may be accompanied by inflammation of the lymph nodes."
    }
  },
  {
    "id": 105,
    "sectionId": "sec-10",
    "sectionNumber": 10,
    "sectionTitle": {
      "es": "Enfermedades asociadas: ATLL",
      "en": "Associated Diseases: ATLL"
    },
    "q": {
      "es": "¿Cómo se diagnostica la ATLL?",
      "en": "How is ATLL diagnosed?"
    },
    "a": {
      "es": "Para diagnosticar la ATLL, el médico combina diferentes evaluaciones y pruebas. Primero, revisa tus síntomas y realiza un examen físico. Después, solicita análisis de sangre para observar las células sanguíneas y detectar posibles alteraciones, como el aumento de ciertas células o del calcio en la sangre.\n\nEn algunos casos, es necesario tomar una pequeña muestra de un ganglio inflamado o de una lesión en la piel (biopsia) para examinarla y determinar si contiene células cancerosas. También se realizan pruebas para confirmar la relación de estas células con el HTLV-1. Es importante recordar que tener una prueba positiva para HTLV-1 no significa que tengas ATLL: se necesitan estudios adicionales para confirmar esta enfermedad.",
      "en": "To diagnose ATLL, the doctor combines different evaluations and tests. First, review your symptoms and perform a physical exam. Next, he or she orders blood tests to look at the blood cells and detect possible changes, such as an increase in certain cells or calcium in the blood.\n\nIn some cases, a small sample of a swollen lymph node or skin lesion (biopsy) needs to be taken to be examined to see if it contains cancer cells. Tests are also performed to confirm the relationship of these cells with HTLV-1. It is important to remember that having a positive test for HTLV-1 does not mean you have ATLL: additional studies are needed to confirm this disease."
    }
  },
  {
    "id": 106,
    "sectionId": "sec-10",
    "sectionNumber": 10,
    "sectionTitle": {
      "es": "Enfermedades asociadas: ATLL",
      "en": "Associated Diseases: ATLL"
    },
    "q": {
      "es": "¿Qué es la clasificación de las formas de ATLL?",
      "en": "What is the classification of ATLL forms?"
    },
    "a": {
      "es": "La ATLL se clasifica en cuatro tipos: aguda, linfomatosa, crónica y latente (smoldering) (smoldering). Esta clasificación se basa en los resultados de los análisis de sangre, la cantidad de células anormales y las partes del cuerpo afectadas.\n\nSegún su evolución, las formas aguda y linfomatosa se consideran agresivas porque suelen avanzar rápidamente. En cambio, las formas crónica y latente (smoldering) generalmente avanzan más lentamente y se consideran indolentes. Esta clasificación ayuda al médico a comprender cómo puede evolucionar la enfermedad y decidir el tratamiento o seguimiento más adecuado para cada persona.",
      "en": "ATLL is classified into four types: acute, lymphomatous, chronic, and latent (smoldering). This classification is based on blood test results, the number of abnormal cells, and the parts of the body affected.\n\nDepending on their evolution, the acute and lymphomatous forms are considered aggressive because they usually progress rapidly. On the other hand, chronic and latent forms (smoldering) generally progress more slowly and are considered indolent. This classification helps the doctor understand how the disease may evolve and decide the most appropriate treatment or follow-up for each person."
    }
  },
  {
    "id": 107,
    "sectionId": "sec-10",
    "sectionNumber": 10,
    "sectionTitle": {
      "es": "Enfermedades asociadas: ATLL",
      "en": "Associated Diseases: ATLL"
    },
    "q": {
      "es": "¿Qué pruebas se realizan para conocer el estado de la ATLL?",
      "en": "What tests are performed to know the status of ATLL?"
    },
    "a": {
      "es": "Una vez diagnosticada la ATLL, pueden realizarse otras pruebas para conocer cuánto ha avanzado la enfermedad y qué partes del cuerpo están afectadas. Además de los análisis de sangre, el médico puede solicitar una tomografía o una tomografía por emisión de positrones para observar los ganglios y otros órganos.\n\nTambién pueden realizarse estudios de la médula ósea, que es el tejido dentro de los huesos donde se producen las células de la sangre. En determinadas situaciones, se analiza el líquido que rodea el cerebro y la médula espinal o se realiza una endoscopia para evaluar el aparato digestivo. No todas las personas necesitan todas estas pruebas; la selección depende de cada caso.",
      "en": "Once ATLL is diagnosed, other tests may be done to find out how far the disease has progressed and what parts of the body are affected. In addition to blood tests, your doctor may order a CT scan or PET scan to look at lymph nodes and other organs.\n\nStudies may also be done of the bone marrow, which is the tissue inside the bones where blood cells are made. In certain situations, the fluid surrounding the brain and spinal cord is tested or an endoscopy is performed to evaluate the digestive system. Not everyone needs all of these tests; The selection depends on each case."
    }
  },
  {
    "id": 108,
    "sectionId": "sec-10",
    "sectionNumber": 10,
    "sectionTitle": {
      "es": "Enfermedades asociadas: ATLL",
      "en": "Associated Diseases: ATLL"
    },
    "q": {
      "es": "¿Cómo evoluciona la ATLL?",
      "en": "How does ATLL evolve?"
    },
    "a": {
      "es": "La evolución de la ATLL varía según el tipo de enfermedad y los resultados de los análisis de sangre. Las formas aguda y linfomatosa suelen avanzar rápidamente. La forma crónica también puede avanzar rápidamente cuando presenta ciertas alteraciones en los análisis, como niveles elevados de LDH o nitrógeno ureico, o niveles bajos de albúmina.\n\nEn cambio, las formas crónica y latente (smoldering) suelen evolucionar más lentamente. En estos casos, el médico puede recomendar controles periódicos sin iniciar tratamiento de inmediato. Sin embargo, algunas pueden volverse más agresivas con el tiempo. Por eso, es importante mantener los controles médicos, aunque no presentes síntomas.",
      "en": "The course of ATLL varies depending on the type of disease and the results of blood tests. The acute and lymphomatous forms usually progress rapidly. The chronic form can also progress rapidly when there are certain abnormalities in the tests, such as high levels of LDH or urea nitrogen, or low levels of albumin.\n\nOn the other hand, the chronic and latent forms (smoldering) usually evolve more slowly. In these cases, the doctor may recommend periodic check-ups without starting treatment immediately. However, some may become more aggressive over time. Therefore, it is important to maintain medical check-ups, even if you do not present symptoms."
    }
  },
  {
    "id": 109,
    "sectionId": "sec-10",
    "sectionNumber": 10,
    "sectionTitle": {
      "es": "Enfermedades asociadas: ATLL",
      "en": "Associated Diseases: ATLL"
    },
    "q": {
      "es": "¿Qué tratamientos existen para la ATLL?",
      "en": "What treatments are available for ATLL?"
    },
    "a": {
      "es": "El tratamiento depende del tipo de ATLL, de cuánto ha avanzado la enfermedad y del estado general de salud de la persona.\n\nEn las formas agresivas, generalmente se utiliza quimioterapia, que consiste en administrar medicamentos para destruir las células cancerosas o impedir que sigan creciendo. En determinados casos también pueden utilizarse otros medicamentos que actúan sobre las células cancerosas o modifican la respuesta del sistema inmunitario. Para algunas personas puede considerarse un trasplante de células madre de un donante.\n\nEn las formas que avanzan lentamente y no presentan señales de empeoramiento, el médico puede recomendar controles frecuentes sin iniciar quimioterapia inmediatamente. Si existen lesiones en la piel, también pueden indicarse cremas u otros tratamientos específicos. Además, es importante prevenir y tratar oportunamente las infecciones, ya que la ATLL puede afectar las defensas del organismo.",
      "en": "Treatment depends on the type of ATLL, how far the disease has progressed, and the person's general health.\n\nIn aggressive forms, chemotherapy is generally used, which consists of administering drugs to destroy cancer cells or prevent them from continuing to grow. In certain cases, other medications that act on cancer cells or modify the immune system response can also be used. For some people, a donor stem cell transplant may be considered.\n\nIn forms that progress slowly and show no signs of worsening, the doctor may recommend frequent check-ups without starting chemotherapy immediately. If there are skin lesions, creams or other specific treatments may also be indicated. In addition, it is important to prevent and promptly treat infections, since ATLL can affect the body's defenses."
    }
  },
  {
    "id": 110,
    "sectionId": "sec-10",
    "sectionNumber": 10,
    "sectionTitle": {
      "es": "Enfermedades asociadas: ATLL",
      "en": "Associated Diseases: ATLL"
    },
    "q": {
      "es": "¿Cómo es el proceso de tratamiento de la ATLL?",
      "en": "What is the ATLL treatment process like?"
    },
    "a": {
      "es": "Después de confirmar el diagnóstico, el equipo médico realiza pruebas para determinar el tipo de ATLL, conocer cuánto ha avanzado y evaluar tu estado general de salud. Con esta información, el especialista te explicará las opciones disponibles, los beneficios y los posibles efectos secundarios de cada tratamiento.\n\nUna vez elegido el plan, comenzará el tratamiento y se realizarán controles para evaluar cómo responde la enfermedad. Durante todo el proceso, es importante comunicar al médico cualquier síntoma nuevo, molestia o preocupación. El seguimiento también permite ajustar el tratamiento cuando sea necesario.",
      "en": "After confirming the diagnosis, the medical team performs tests to determine the type of ATLL, find out how far it has progressed, and evaluate your general health. With this information, the specialist will explain the available options, the benefits and possible side effects of each treatment.\n\nOnce the plan is chosen, treatment will begin and controls will be carried out to evaluate how the disease responds. Throughout the process, it is important to communicate any new symptoms, discomfort or concerns to your doctor. Monitoring also allows treatment to be adjusted when necessary."
    }
  },
  {
    "id": 111,
    "sectionId": "sec-10",
    "sectionNumber": 10,
    "sectionTitle": {
      "es": "Enfermedades asociadas: ATLL",
      "en": "Associated Diseases: ATLL"
    },
    "q": {
      "es": "¿Qué es la quimioterapia?",
      "en": "What is chemotherapy?"
    },
    "a": {
      "es": "La quimioterapia es un tratamiento que utiliza medicamentos para destruir las células cancerosas o impedir que sigan multiplicándose. En el caso de la ATLL, generalmente se combinan varios medicamentos para actuar contra la enfermedad.\n\nSin embargo, estos medicamentos también pueden afectar algunas células sanas del organismo. Por eso, pueden aparecer efectos secundarios como cansancio, náuseas, vómitos, caída del cabello, llagas en la boca o mayor riesgo de infecciones. Estos efectos varían según los medicamentos utilizados y cada persona puede experimentarlos de manera diferente. El equipo médico puede indicar medicamentos y cuidados para prevenirlos o aliviarlos.",
      "en": "Chemotherapy is a treatment that uses drugs to kill cancer cells or stop them from dividing. In the case of ATLL, several medications are usually combined to act against the disease.\n\nHowever, these medications can also affect some healthy cells in the body. Therefore, side effects such as fatigue, nausea, vomiting, hair loss, mouth sores or increased risk of infections may appear. These effects vary depending on the medications used and each person may experience them differently. The medical team can prescribe medications and care to prevent or alleviate them."
    }
  },
  {
    "id": 112,
    "sectionId": "sec-10",
    "sectionNumber": 10,
    "sectionTitle": {
      "es": "Enfermedades asociadas: ATLL",
      "en": "Associated Diseases: ATLL"
    },
    "q": {
      "es": "¿Qué es el trasplante de células madre hematopoyéticas?",
      "en": "What is hematopoietic stem cell transplant?"
    },
    "a": {
      "es": "Es un tratamiento que permite reemplazar las células que producen la sangre por células sanas provenientes de un donante. Para realizarlo, primero se administra un tratamiento intenso, generalmente con quimioterapia y, en algunos casos, radioterapia, para eliminar las células cancerosas y preparar el organismo para recibir las nuevas células.\n \nDespués, las células madre del donante se administran a través de una vena, de manera similar a una transfusión. Estas células llegan a la médula ósea y comienzan a producir nuevos glóbulos rojos, glóbulos blancos y plaquetas. Para realizar el trasplante, es importante encontrar un donante cuyas características sean compatibles con las del paciente. Es un procedimiento complejo que requiere hospitalización y seguimiento especializado porque puede producir complicaciones, como infecciones o la enfermedad de injerto contra huésped.",
      "en": "It is a treatment that allows you to replace the cells that produce blood with healthy cells from a donor. To do this, an intense treatment is first administered, usually with chemotherapy and, in some cases, radiotherapy, to eliminate cancer cells and prepare the body to receive the new cells.\n \nThe donor stem cells are then administered through a vein, similar to a transfusion. These cells reach the bone marrow and begin to produce new red blood cells, white blood cells, and platelets. To perform the transplant, it is important to find a donor whose characteristics are compatible with those of the patient It is a complex procedure that requires hospitalization and specialized monitoring because it can cause complications, such as infections or graft-versus-host disease."
    }
  },
  {
    "id": 113,
    "sectionId": "sec-10",
    "sectionNumber": 10,
    "sectionTitle": {
      "es": "Enfermedades asociadas: ATLL",
      "en": "Associated Diseases: ATLL"
    },
    "q": {
      "es": "¿Qué son las células madre hematopoyéticas?",
      "en": "What are hematopoietic stem cells?"
    },
    "a": {
      "es": "Son células que se encuentran principalmente en la médula ósea, el tejido que está dentro de algunos huesos y donde se produce la sangre. Se llaman células madre porque tienen la capacidad de producir diferentes tipos de células sanguíneas: glóbulos rojos, que transportan oxígeno; glóbulos blancos, que ayudan a combatir infecciones; y plaquetas, que permiten que la sangre coagule y detenga los sangrados.\n\nEstas células también pueden encontrarse en la sangre que circula por el cuerpo y en la sangre del cordón umbilical. Son las células que se utilizan en los trasplantes para ayudar a recuperar la producción de sangre del paciente.",
      "en": "They are cells found mainly in the bone marrow, the tissue inside some bones and where blood is produced. They are called stem cells because they have the ability to produce different types of blood cells: red blood cells, which carry oxygen; white blood cells, which help fight infections; and platelets, which allow blood to clot and stop bleeding.\n\nThese cells can also be found in the blood circulating through the body and in umbilical cord blood. They are the cells that are used in transplants to help recover the patient's blood production."
    }
  },
  {
    "id": 114,
    "sectionId": "sec-10",
    "sectionNumber": 10,
    "sectionTitle": {
      "es": "Enfermedades asociadas: ATLL",
      "en": "Associated Diseases: ATLL"
    },
    "q": {
      "es": "¿Qué es la enfermedad de injerto contra huésped (GVHD)?",
      "en": "What is graft versus host disease (GVHD)?"
    },
    "a": {
      "es": "Es una complicación que puede aparecer después de un trasplante de células madre de un donante. Ocurre cuando algunas células de las defensas del donante reconocen el cuerpo de la persona que recibió el trasplante como extraño y comienzan a atacar sus tejidos y órganos.\n\nPuede afectar principalmente la piel, el hígado y el aparato digestivo, y producir síntomas como sarpullido, diarrea, dolor abdominal o coloración amarillenta de la piel y los ojos. Su gravedad puede variar y, en algunos casos, puede poner en riesgo la vida. Por eso, requiere controles y tratamiento con medicamentos que regulan la respuesta del sistema inmunitario. Aunque es una posible complicación del trasplante, las células del donante también pueden ayudar a combatir las células cancerosas que hayan quedado en el organismo.",
      "en": "It is a complication that can appear after a stem cell transplant from a donor. It occurs when some cells from the donor's defenses recognize the body of the person who received the transplant as foreign and begin to attack their tissues and organs.\n\nIt can mainly affect the skin, liver and digestive system, and cause symptoms such as rash, diarrhea, abdominal pain or yellowing of the skin and eyes. Its severity can vary and, in some cases, can be life-threatening. Therefore, it requires controls and treatment with medications that regulate the immune system response. Although it is a possible complication of the transplant, the donor cells can also help fight cancer cells that have remained in the body."
    }
  },
  {
    "id": 115,
    "sectionId": "sec-10",
    "sectionNumber": 10,
    "sectionTitle": {
      "es": "Enfermedades asociadas: ATLL",
      "en": "Associated Diseases: ATLL"
    },
    "q": {
      "es": "¿Quién puede ser candidato a un trasplante de células madre hematopoyéticas?",
      "en": "Who can be a candidate for a hematopoietic stem cell transplant?"
    },
    "a": {
      "es": "El trasplante puede considerarse principalmente en personas con formas agresivas de ATLL o cuando una forma inicialmente lenta se transforma en una más agresiva. Sin embargo, no todas las personas pueden recibir este tratamiento.\n\nPara determinar si eres candidato, el equipo médico evalúa el tipo y la evolución de la enfermedad, tu edad, tu estado general de salud y el funcionamiento de tus órganos. También es necesario encontrar un donante compatible. La decisión debe tomarse de manera individual con el equipo especializado en trasplantes.",
      "en": "Transplantation may be considered primarily in people with aggressive forms of ATLL or when an initially slow form transforms into a more aggressive one. However, not everyone can receive this treatment.\n\nTo determine if you are a candidate, the medical team evaluates the type and progression of the disease, your age, your general state of health, and the functioning of your organs. It is also necessary to find a compatible donor. The decision must be made individually with the specialized transplant team."
    }
  },
  {
    "id": 116,
    "sectionId": "sec-10",
    "sectionNumber": 10,
    "sectionTitle": {
      "es": "Enfermedades asociadas: ATLL",
      "en": "Associated Diseases: ATLL"
    },
    "q": {
      "es": "¿Cuánto cuesta el tratamiento de la ATLL?",
      "en": "How much does ATLL treatment cost?"
    },
    "a": {
      "es": "El costo depende del tipo de ATLL, los medicamentos que necesites, los análisis, las hospitalizaciones y los procedimientos indicados. Si se requiere un trasplante, los gastos pueden ser mayores debido a la complejidad del tratamiento y al seguimiento posterior.\n\nPuedes consultar con tu seguro de salud (SIS, EsSalud o seguro privado) qué tratamientos y procedimientos están cubiertos. También puedes acudir al área de trabajo social del establecimiento de salud para recibir orientación sobre los gastos, las referencias y los apoyos disponibles.",
      "en": "The cost depends on the type of ATLL, the medications you need, the tests, hospitalizations, and indicated procedures. If a transplant is required, expenses may be higher due to the complexity of the treatment and subsequent follow-up.\n\nYou can check with your health insurance (SIS, EsSalud or private insurance) which treatments and procedures are covered. You can also go to the social work area of ​​the health facility to receive guidance on expenses, referrals, and available supports."
    }
  },
  {
    "id": 117,
    "sectionId": "sec-10",
    "sectionNumber": 10,
    "sectionTitle": {
      "es": "Enfermedades asociadas: ATLL",
      "en": "Associated Diseases: ATLL"
    },
    "q": {
      "es": "Si he desarrollado ATLL, ¿debería analizarse si mis familiares están infectados por HTLV-1?",
      "en": "If I have developed ATLL, should my family members be tested for HTLV-1 infection?"
    },
    "a": {
      "es": "Tener ATLL significa que tienes una enfermedad relacionada con el HTLV-1, pero no significa que todos tus familiares tengan el virus. Sin embargo, es importante que tu pareja sexual y tus hijos, especialmente si recibieron leche materna cuando ya tenías la infección, consulten con un profesional de salud sobre la posibilidad de realizarse una prueba.\n\nEl HTLV-1 no se transmite por convivir, abrazarse o compartir alimentos y espacios. Por eso, tus familiares no deben sentirse obligados a hacerse pruebas únicamente por vivir contigo. El equipo de salud puede orientarlos según sus antecedentes y las posibles vías de exposición. No debe presionarse a nadie a examinarse, el profesional puede ayudar a evaluar los antecedentes y a proteger la confidencialidad.",
      "en": "Having ATLL means you have a disease related to HTLV-1, but it does not mean that everyone in your family has the virus. However, it is important that your sexual partner and your children, especially if they received breast milk when you already had the infection, consult with a health professional about the possibility of testing.\n\nHTLV-1 is not transmitted by living together, hugging or sharing food and spaces. Therefore, your family members should not feel obligated to undergo testing just because they live with you. The health team can guide them based on their history and possible routes of exposure. No one should be pressured to get tested, the professional can help evaluate the background and protect confidentiality."
    }
  },
  {
    "id": 118,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Qué tipo de enfermedad es la HAM?",
      "en": "What type of disease is HAM?"
    },
    "a": {
      "es": "La mielopatía asociada al HTLV-1 (HAM, por sus siglás en ingles), también conocida como paraparesia espástica tropical, se denomina como HAM/TSP.\n\nEs una enfermedad inflamatoria que afecta la médula espinal. Esta contiene los nervios que permiten mover las piernas y controlar funciones como la micción y la evacuación. Cuando se inflama y se daña, pueden aparecer debilidad y rigidez en las piernas, dificultad para caminar y problemas urinarios o intestinales. Es una enfermedad crónica que puede avanzar con el tiempo, aunque su evolución varía de una persona a otra.",
      "en": "HTLV-1-associated myelopathy (HAM), also known as tropical spastic paraparesis, is called HAM/TSP.\n\nIt is an inflammatory disease that affects the spinal cord. This contains the nerves that allow you to move your legs and control functions such as urination and evacuation. When it becomes inflamed and damaged, weakness and stiffness in the legs, difficulty walking, and urinary or intestinal problems may occur. It is a chronic disease that can progress over time, although its evolution varies from one person to another."
    }
  },
  {
    "id": 119,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Con qué frecuencia las personas portadoras de HTLV-1 desarrollan HAM?",
      "en": "How often do people carrying HTLV-1 develop HAM?"
    },
    "a": {
      "es": "La incidencia anual de HAM entre las personas portadoras de HTLV-1 es de aproximadamente una persona por cada 30.000. Se estima que la probabilidad de desarrollar la enfermedad a lo largo de la vida es de alrededor del 0,3%. No se cuenta con una estimación nacional para el Perú, por lo que no es posible establecer una cifra exacta.",
      "en": "The annual incidence of HAM among HTLV-1 carriers is approximately one person per 30,000. The lifetime probability of developing the disease is estimated to be around 0.3%. There is no national estimate for Peru, so it is not possible to establish an exact figure."
    }
  },
  {
    "id": 120,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Qué síntomas aparecen cuando se desarrolla HAM?",
      "en": "What symptoms appear when HAM develops?"
    },
    "a": {
      "es": "Los síntomas más frecuentes afectan el movimiento de las piernas, la sensibilidad y el control de la vejiga y el intestino. Puedes presentar debilidad, rigidez, espasmos musculares, dificultad para caminar, hormigueo o dolor en las piernas y la zona lumbar. También pueden aparecer necesidad frecuente de orinar, dificultad para vaciar la vejiga, estreñimiento y, en algunos casos, problemas sexuales. No todas las personas presentan los mismos síntomas ni estos aparecen al mismo tiempo.",
      "en": "The most common symptoms affect leg movement, sensation, and bladder and bowel control. You may experience weakness, stiffness, muscle spasms, difficulty walking, tingling, or pain in your legs and lower back. Frequent need to urinate, difficulty emptying the bladder, constipation and, in some cases, sexual problems may also occur. Not all people present the same symptoms nor do they appear at the same time."
    }
  },
  {
    "id": 121,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Cómo se diagnostica HAM?",
      "en": "How is HAM diagnosed?"
    },
    "a": {
      "es": "El diagnóstico requiere una evaluación neurológica y diferentes pruebas. Primero, el médico evalúa síntomas como la debilidad y rigidez de ambas piernas y solicita un análisis de sangre para detectar anticuerpos contra el HTLV-1. También puede realizar una punción lumbar para obtener una muestra del líquido que rodea el cerebro y la médula espinal, y comprobar si hay evidencia de infección por HTLV-1. Además, puede solicitar una resonancia magnética de la médula espinal para buscar alteraciones y descartar otras enfermedades que produzcan síntomas similares. El diagnóstico se establece considerando todos estos resultados.",
      "en": "Diagnosis requires a neurological evaluation and different tests. First, the doctor evaluates symptoms such as weakness and stiffness in both legs and orders a blood test to detect antibodies to HTLV-1. He or she may also perform a lumbar puncture to obtain a sample of fluid surrounding the brain and spinal cord and check for evidence of HTLV-1 infection. Additionally, you may request an MRI of the spinal cord to look for abnormalities and rule out other diseases that cause similar symptoms. The diagnosis is established considering all these results."
    }
  },
  {
    "id": 122,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Qué son los trastornos del movimiento asociados a HAM?",
      "en": "What are movement disorders associated with HAM?"
    },
    "a": {
      "es": "Son las dificultades para mover las piernas debido a la debilidad y rigidez muscular. Al principio, puedes notar que caminas más lento, sientes las piernas pesadas, tropiezas con facilidad o tienes dificultad para subir y bajar escaleras. A medida que la enfermedad avanza, puede ser necesario utilizar un bastón, andador o silla de ruedas para desplazarte con mayor seguridad. La progresión es diferente en cada persona y no todas llegan a necesitar estas ayudas.",
      "en": "These are difficulties moving the legs due to muscle weakness and stiffness. At first, you may notice that you walk more slowly, your legs feel heavy, you stumble easily, or you have difficulty going up and down stairs. As the disease progresses, it may be necessary to use a cane, walker, or wheelchair to get around more safely. The progression is different for each person and not everyone needs these aids."
    }
  },
  {
    "id": 123,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Qué son las alteraciones de la sensibilidad asociadas a HAM?",
      "en": "What are the sensitivity alterations associated with HAM?"
    },
    "a": {
      "es": "Son síntomas como la disminución de la sensibilidad al tacto en la parte inferior del cuerpo, el entumecimiento o el dolor, y se observan en aproximadamente el 60% de los pacientes con HAM. A menudo son más intensos desde las rodillas hacia abajo, aunque en algunas personas afectan a una zona más amplia, desde el pecho o el abdomen hasta ambas piernas. Si el dolor es intenso, puede interferir con la vida cotidiana y quizá sea necesario controlarlo con medicamentos.",
      "en": "Symptoms such as decreased sensitivity to touch in the lower part of the body, numbness or pain are seen in approximately 60% of patients with HAM. They are often most intense from the knees down, although in some people they affect a wider area, from the chest or abdomen to both legs. If the pain is severe, it can interfere with daily life and may need to be controlled with medication."
    }
  },
  {
    "id": 124,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Qué es la disfunción vesical asociada a HAM?",
      "en": "What is bladder dysfunction associated with HAM?"
    },
    "a": {
      "es": "Es la dificultad para controlar o vaciar la vejiga debido a la alteración de los nervios que regulan la orina. Puedes sentir ganas de orinar con mucha frecuencia, tener dificultad para aguantar la orina o presentar escapes antes de llegar al baño. También puedes tener dificultad para iniciar la micción o sentir que la vejiga no se vacía por completo. En algunos casos, queda orina acumulada y aumenta el riesgo de infecciones urinarias. Es importante consultar con un médico para evaluar estos problemas y recibir el tratamiento adecuado.",
      "en": "It is the difficulty in controlling or emptying the bladder due to alteration of the nerves that regulate urine. You may feel the need to urinate very frequently, have difficulty holding your urine, or leak before reaching the bathroom. You may also have difficulty starting urination or feel like your bladder is not emptying completely. In some cases, urine remains accumulated and increases the risk of urinary tract infections. It is important to consult with a doctor to evaluate these problems and receive appropriate treatment."
    }
  },
  {
    "id": 125,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Qué son los trastornos de la evacuación asociados a HAM?",
      "en": "What are evacuation disorders associated with HAM?"
    },
    "a": {
      "es": "Son problemas para controlar o evacuar las heces. El más frecuente es el estreñimiento, que puede producir dificultad para evacuar, heces duras y sensación de evacuación incompleta. Algunas personas también pueden presentar dificultad para controlar la salida de las heces. Estos problemas pueden afectar la vida cotidiana, por lo que es importante comentarlos con el médico para recibir orientación sobre la alimentación, los hábitos intestinales y los tratamientos disponibles.",
      "en": "These are problems controlling or evacuating stool. The most common is constipation, which can cause difficulty in evacuating, hard stools, and a feeling of incomplete evacuation. Some people may also have difficulty controlling the passage of stool. These problems can affect daily life, so it is important to discuss them with your doctor for guidance on diet, bowel habits, and available treatments."
    }
  },
  {
    "id": 126,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Cómo se desarrolla HAM?",
      "en": "How is HAM developed?"
    },
    "a": {
      "es": "Aunque todavía no se conoce completamente por qué algunas personas con HTLV-1 desarrollan HAM/TSP, se sabe que la inflamación de la médula espinal desempeña un papel importante. Algunas células infectadas por HTLV-1 llegan a la médula espinal y activan las defensas del organismo. Durante este proceso se liberan sustancias que producen inflamación. Cuando esta inflamación se mantiene durante mucho tiempo, puede dañar los nervios de la médula espinal. Esto explica por qué aparecen problemas para caminar, alteraciones de la sensibilidad y dificultades para controlar la vejiga y el intestino.",
      "en": "Although it is not yet fully known why some people with HTLV-1 develop HAM/TSP, spinal cord inflammation is known to play an important role. Some cells infected by HTLV-1 reach the spinal cord and activate the body's defenses. During this process, substances are released that cause inflammation. When this inflammation persists for a long time, it can damage the nerves in the spinal cord. This explains why walking problems, sensitivity alterations and difficulties controlling the bladder and bowel appear."
    }
  },
  {
    "id": 127,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Cómo evoluciona HAM?",
      "en": "How does HAM evolve?"
    },
    "a": {
      "es": "La evolución de HAM varía mucho de una persona a otra. En cuanto a la capacidad para caminar, aproximadamente el 80 % de los pacientes presenta una progresión lenta después del inicio de la enfermedad (casos de progresión lenta). El 20% experimenta una progresión relativamente rápida y pierde la capacidad de caminar de forma independiente en un plazo de dos años, a veces en solo unos meses (casos de progresión rápida). En raras ocasiones, la enfermedad es leve y los síntomas apenas progresan después de su aparición (casos con progresión detenida).",
      "en": "The evolution of HAM varies greatly from one person to another. Regarding the ability to walk, approximately 80% of patients have slow progression after the onset of the disease (slow progression cases). 20% experience relatively rapid progression and lose the ability to walk independently within two years, sometimes in just a few months (rapid progression cases). Rarely, the disease is mild and symptoms barely progress after onset (arrested cases)."
    }
  },
  {
    "id": 128,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Qué determina la velocidad de progresión de HAM?",
      "en": "What determines the rate of progression of HAM?"
    },
    "a": {
      "es": "La velocidad de progresión está relacionada, en parte, con el grado de inflamación que existe en la médula espinal. Cuando la inflamación es intensa, los síntomas pueden empeorar más rápidamente; cuando es menor, la enfermedad puede avanzar más lentamente. Sin embargo, todavía no se conoce el porqué algunas personas presentan más inflamación que otras. La evaluación médica y algunas pruebas pueden ayudar a conocer la actividad de la enfermedad.",
      "en": "The speed of progression is related, in part, to the degree of inflammation that exists in the spinal cord. When inflammation is severe, symptoms may worsen more quickly; When it is lower, the disease may progress more slowly. However, it is not yet known why some people have more inflammation than others. Medical evaluation and some tests can help determine the activity of the disease."
    }
  },
  {
    "id": 129,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Cómo se puede evaluar la velocidad de progresión de HAM?",
      "en": "How can the rate of progression of HAM be assessed?"
    },
    "a": {
      "es": "El médico evalúa si la enfermedad está avanzando mediante las consultas neurológicas y la comparación de tu capacidad para realizar actividades cotidianas. Puede observar cuánto tardas en caminar una distancia determinada, cuánto puedes caminar en varios minutos, si tienes dificultad para levantarte de una silla o si necesitas nuevas ayudas para desplazarte. En algunos casos, también pueden analizarse sustancias relacionadas con la inflamación en el líquido que rodea el cerebro y la médula espinal. Estas pruebas especializadas no están disponibles en todos los establecimientos y no son necesarias para todas las personas, consulta con tu médico.",
      "en": "The doctor evaluates whether the disease is progressing through neurological consultations and comparing your ability to perform daily activities. You can see how long it takes you to walk a given distance, how far you can walk in several minutes, whether you have trouble getting up from a chair, or whether you need new aids to get around. In some cases, substances related to inflammation may also be tested in the fluid surrounding the brain and spinal cord. These specialized tests are not available in all establishments and are not necessary for all people, consult your doctor."
    }
  },
  {
    "id": 130,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Qué enfermedades pueden coexistir con HAM?",
      "en": "What diseases can coexist with HAM?"
    },
    "a": {
      "es": "Algunas personas con HAM/TSP también pueden presentar otras enfermedades relacionadas con HTLV-1, como uveítis (inflamación dentro del ojo), artritis (inflamación de las articulaciones), sequedad ocular o inflamación de la piel y los pulmones. Si tienes otra enfermedad y necesitas tratamiento, es importante que informes a los médicos que tienes HTLV-1 y HAM/TSP. Así podrán evaluar los medicamentos más adecuados y coordinar tu atención entre las especialidades necesarias.",
      "en": "Some people with HAM/TSP may also have other HTLV-1-related diseases, such as uveitis (inflammation inside the eye), arthritis (inflammation of the joints), dry eyes, or inflammation of the skin and lungs. If you have another illness and need treatment, it is important to tell your doctors that you have HTLV-1 and HAM/TSP. This way they will be able to evaluate the most appropriate medications and coordinate your care between the necessary specialties."
    }
  },
  {
    "id": 131,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Qué tratamientos existen para HAM?",
      "en": "What treatments exist for HAM?"
    },
    "a": {
      "es": "Actualmente, no existe un tratamiento que elimine el HTLV-1 del organismo ni que cure completamente la HAM/TSP. Sin embargo, existen tratamientos que pueden ayudar a controlar la inflamación y otros que permiten aliviar los síntomas.\n\nSegún la evolución de la enfermedad, el médico puede indicar medicamentos antiinflamatorios, como los corticosteroides, en determinados casos. También pueden utilizarse medicamentos para reducir la rigidez muscular, aliviar el dolor y controlar los problemas urinarios e intestinales. La fisioterapia y la rehabilitación son importantes para mantener la movilidad y realizar las actividades cotidianas con mayor seguridad. El tratamiento se adapta a las necesidades de cada persona, consulta con tu médico.",
      "en": "Currently, there is no treatment that eliminates HTLV-1 from the body or completely cures HAM/TSP. However, there are treatments that can help control inflammation and others that relieve symptoms.\n\nDepending on the evolution of the disease, the doctor may prescribe anti-inflammatory medications, such as corticosteroids, in certain cases. Medications may also be used to reduce muscle stiffness, relieve pain, and control urinary and intestinal problems. Physical therapy and rehabilitation are important to maintain mobility and perform daily activities more safely. The treatment is adapted to the needs of each person, consult with your doctor."
    }
  },
  {
    "id": 132,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Cuál es el proceso habitual del tratamiento de HAM?",
      "en": "What is the usual process of HAM treatment?"
    },
    "a": {
      "es": "Después de confirmar el diagnóstico, el médico evalúa cómo se encuentra tu capacidad para caminar, si existen problemas urinarios o intestinales y qué tan rápido han avanzado los síntomas. También puede solicitar análisis de sangre y del líquido que rodea el cerebro y la médula espinal para evaluar la inflamación. Antes de indicar medicamentos que disminuyen la respuesta inmunitaria, es importante descartar ciertas infecciones que podrían empeorar con el tratamiento. Con esta información, tu especialista define si necesitas medicamentos para controlar la inflamación, tratamientos para aliviar los síntomas, rehabilitación o una combinación de estas medidas. Recuerda que durante el seguimiento, tu médico evaluará tu respuesta y ajustará el tratamiento cuando sea necesario.",
      "en": "After confirming the diagnosis, the doctor evaluates your ability to walk, whether there are urinary or intestinal problems, and how quickly the symptoms have progressed. He or she may also order tests of the blood and fluid surrounding the brain and spinal cord to evaluate inflammation. Before prescribing medications that decrease the immune response, it is important to rule out certain infections that could worsen with treatment. With this information, your specialist defines whether you need medications to control inflammation, treatments to relieve symptoms, rehabilitation or a combination of these measures. Remember that during follow-up, your doctor will evaluate your response and adjust treatment when necessary."
    }
  },
  {
    "id": 133,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Cuáles son los principales tratamientos para HAM?",
      "en": "What are the main treatments for HAM?"
    },
    "a": {
      "es": "Los corticosteroides son los principales medicamentos utilizados para tratar la HAM. Estos ayudan a reducir la inflamación de la médula espinal y pueden administrarse por vía oral o mediante una infusión intravenosa, conocida como terapia de pulsos. La elección del tratamiento depende de la actividad de la enfermedad y de la rapidez con que progresan los síntomas.\n\n-Cuando la enfermedad progresa rápidamente: si la inflamación es intensa y la dificultad para caminar empeora en poco tiempo, el médico puede iniciar el tratamiento con pulsos de corticosteroides por vía intravenosa y continuar después con corticosteroides por vía oral. Es importante evaluar e iniciar el tratamiento oportunamente para intentar evitar un mayor deterioro\n\n-Cuando la enfermedad progresa lentamente: el médico puede evaluar el grado de inflamación mediante análisis del líquido cefalorraquídeo y considerar el uso de corticosteroides por vía oral. En algunos casos, este tratamiento puede ayudar a frenar el avance de los problemas de movimiento. Sin embargo, su uso prolongado puede producir efectos secundarios, como la osteoporosis, por lo que requiere controles médicos y ajustes de la dosis\n\n-Cuando los síntomas se mantienen estables: si la enfermedad muestra poca progresión durante un tiempo prolongado y la inflamación es leve, el médico puede considerar que los posibles efectos secundarios del tratamiento superan sus beneficios y recomendar controles periódicos\n\nEl tratamiento debe adaptarse a cada persona y requiere seguimiento por un médico con experiencia en HAM, quien evaluará la evolución de los síntomas, la respuesta al tratamiento y sus posibles efectos secundarios.",
      "en": "Corticosteroids are the main medications used to treat HAM. These help reduce inflammation of the spinal cord and can be given orally or through an intravenous infusion, known as pulse therapy. The choice of treatment depends on the activity of the disease and how quickly symptoms progress.\n\n-When the disease progresses rapidly: if the inflammation is intense and the difficulty walking worsens in a short time, the doctor can start treatment with pulses of intravenous corticosteroids and then continue with oral corticosteroids. It is important to evaluate and start treatment promptly to try to avoid further deterioration.\n\n-When the disease progresses slowly: the doctor can evaluate the degree of inflammation by analyzing the cerebrospinal fluid and consider the use of oral corticosteroids. In some cases, this treatment can help slow the progression of movement problems. However, prolonged use can cause side effects, such as osteoporosis, requiring medical monitoring and dosage adjustments.\n\n-When symptoms remain stable: if the disease shows little progression for a long time and the inflammation is mild, the doctor may consider that the possible side effects of the treatment outweigh its benefits and recommend periodic check-ups\n\nTreatment must be adapted to each person and requires monitoring by a doctor with experience in HAM, who will evaluate the evolution of symptoms, the response to treatment and its possible side effects."
    }
  },
  {
    "id": 134,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Qué tratamientos existen para la rigidez de las piernas causada por HAM?",
      "en": "What treatments are available for leg stiffness caused by HAM?"
    },
    "a": {
      "es": "La rigidez de las piernas, también llamada espasticidad, puede tratarse con medicamentos y fisioterapia. Entre los medicamentos utilizados se encuentran el baclofeno y la tizanidina, que ayudan a relajar los músculos y disminuir los espasmos. También pueden indicarse ejercicios de estiramiento y rehabilitación para mejorar la movilidad y facilitar actividades como caminar o levantarse de una silla. El tratamiento depende de la intensidad de la rigidez y de cómo afecta tus actividades diarias. Consulta con tu médico o neurólogo para evaluar tus síntomas y conocer qué tratamiento es el más adecuado para ti.",
      "en": "Leg stiffness, also called spasticity, can be treated with medications and physical therapy. Among the medications used are baclofen and tizanidine, which help relax muscles and reduce spasms. Stretching and rehabilitation exercises may also be indicated to improve mobility and facilitate activities such as walking or getting up from a chair. Treatment depends on the intensity of the stiffness and how it affects your daily activities. Consult your doctor or neurologist to evaluate your symptoms and find out what treatment is best for you."
    }
  },
  {
    "id": 135,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Qué tratamientos existen para la disfunción vesical causada por HAM?",
      "en": "What treatments are available for bladder dysfunction caused by HAM?"
    },
    "a": {
      "es": "La disfunción vesical asociada a HAM es una alteración en el funcionamiento de la vejiga, que puede dificultar el control o la expulsión de la orina. Puede causar ganas frecuentes de orinar, escapes de orina o dificultad para vaciar completamente la vejiga.\n\nEl tratamiento depende del problema que presentes. El médico puede indicar medicamentos para controlar los síntomas o recomendar el cateterismo intermitente, que consiste en introducir una sonda delgada por la uretra para vaciar la vejiga y retirarla después. No todas las personas necesitan este procedimiento. Consulta con tu médico o urólogo para saber qué tratamiento es adecuado para ti.",
      "en": "Bladder dysfunction associated with HAM is an alteration in the functioning of the bladder, which can make it difficult to control or expel urine. It may cause frequent urges to urinate, urine leakage, or difficulty emptying the bladder completely.\n\nThe treatment depends on the problem you present. The doctor may prescribe medications to control symptoms or recommend intermittent catheterization, which involves inserting a thin tube through the urethra to empty the bladder and then remove it. Not all people need this procedure. Consult your doctor or urologist to find out what treatment is right for you."
    }
  },
  {
    "id": 136,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Qué ejercicios son útiles para las personas con HAM?",
      "en": "What exercises are useful for people with HAM?"
    },
    "a": {
      "es": "Los ejercicios y la rehabilitación ayudan a mantener la movilidad, la fuerza muscular y la capacidad para realizar actividades cotidianas. Según tu condición, un fisioterapeuta puede recomendarte estiramientos de las piernas, ejercicios para fortalecer los músculos, entrenamiento del equilibrio y práctica de la marcha. Si tienes dificultad para caminar, pueden utilizarse bastones, andadores u otras ayudas para reducir el riesgo de caídas. Es importante que los ejercicios se adapten a tu capacidad física y se realicen con orientación profesional, evitando movimientos que puedan ocasionar lesiones.",
      "en": "Exercises and rehabilitation help maintain mobility, muscle strength, and the ability to perform daily activities. Depending on your condition, a physical therapist may recommend leg stretches, muscle-strengthening exercises, balance training, and walking practice. If you have difficulty walking, canes, walkers, or other aids can be used to reduce the risk of falls. It is important that the exercises are adapted to your physical capacity and are performed with professional guidance, avoiding movements that could cause injuries."
    }
  },
  {
    "id": 137,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Qué son los esteroides?",
      "en": "What are steroids?"
    },
    "a": {
      "es": "Los corticosteroides son medicamentos que reducen la inflamación y disminuyen la actividad del sistema inmunitario. En HAM/TSP se utilizan para controlar la inflamación de la médula espinal y, en algunos casos, pueden ayudar a mejorar los síntomas o frenar su progresión. Pueden administrarse por vía intravenosa durante algunos días o por vía oral durante un periodo determinado. \n\nSu uso requiere supervisión médica porque pueden producir efectos secundarios, como aumento de la presión arterial, elevación del azúcar en la sangre, osteoporosis y mayor riesgo de infecciones. No debes iniciar ni suspender este tratamiento por tu cuenta. Consulta con tu médico para saber si es adecuado para ti y cómo debes utilizarlo.",
      "en": "Corticosteroids are medications that reduce inflammation and decrease the activity of the immune system. In HAM/TSP they are used to control inflammation of the spinal cord and, in some cases, can help improve symptoms or slow their progression. They can be administered intravenously for a few days or orally for a certain period.\n\nTheir use requires medical supervision because they can cause side effects, such as increased blood pressure, elevated blood sugar, osteoporosis and increased risk of infections. You should not start or stop this treatment on your own. Consult your doctor to find out if it is right for you and how you should use it."
    }
  },
  {
    "id": 138,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Cuánto cuesta el tratamiento de HAM?",
      "en": "How much does HAM treatment cost?"
    },
    "a": {
      "es": "El costo depende de los medicamentos, las consultas médicas, los análisis, las hospitalizaciones y las sesiones de rehabilitación que necesites. En Perú, puedes consultar con tu seguro de salud qué atenciones y tratamientos están cubiertos. También puedes acudir al área de trabajo social del establecimiento de salud para recibir orientación sobre los gastos, las referencias y los apoyos disponibles.",
      "en": "The cost depends on the medications, doctor visits, tests, hospital stays, and rehabilitation sessions you need. In Peru, you can check with your health insurance what care and treatments are covered. You can also go to the social work area of ​​the health facility to receive guidance on expenses, referrals, and available supports."
    }
  },
  {
    "id": 139,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "¿Qué debo tener en cuenta para convivir bien con HAM?",
      "en": "What should I take into account to live well with HAM?"
    },
    "a": {
      "es": "Es importante seguir tus controles médicos y realizar los ejercicios de rehabilitación indicados para mantener tu movilidad y fuerza muscular. También debes tomar precauciones para evitar caídas, como utilizar bastón o andador si lo necesitas y mantener los espacios de tu casa libres de obstáculos. \n\nPresta atención a los problemas urinarios y consulta si presentas molestias que puedan indicar una infección, como dolor o ardor al orinar o fiebre. Si tienes dificultad para moverte durante periodos prolongados, es importante cuidar la piel y cambiar de posición para evitar heridas por presión. Con el tratamiento, la rehabilitación y el apoyo adecuado, puedes mantener tu independencia y calidad de vida.",
      "en": "It is important to follow your medical check-ups and perform the indicated rehabilitation exercises to maintain your mobility and muscle strength. You should also take precautions to avoid falls, such as using a cane or walker if you need it and keeping the spaces in your home free of obstacles.\n\nPay attention to urinary problems and see if you have discomfort that may indicate an infection, such as pain or burning when urinating or fever. If you have difficulty moving for long periods, it is important to take care of your skin and change positions to avoid pressure injuries. With the right treatment, rehabilitation, and support, you can maintain your independence and quality of life."
    }
  },
  {
    "id": 140,
    "sectionId": "sec-11",
    "sectionNumber": 11,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HAM",
      "en": "Associated Diseases: HAM/TSP"
    },
    "q": {
      "es": "Si he desarrollado HAM, ¿deberían hacerse pruebas de HTLV-1 mis familiares?",
      "en": "If I have developed HAM, should my family members be tested for HTLV-1?"
    },
    "a": {
      "es": "No necesariamente todos tus familiares necesitan realizarse una prueba. Sin embargo, puede ser importante que tu pareja sexual y tus hijos, especialmente si recibieron leche materna cuando ya tenías la infección, consulten con un profesional de salud para evaluar si necesitan una prueba de HTLV-1. El virus no se transmite por convivir, abrazarse o compartir alimentos y espacios. La orientación debe ser individual y respetar la decisión y la privacidad de cada persona.",
      "en": "Not all of your family members necessarily need to be tested. However, it may be important for your sexual partner and your children, especially if they received breast milk when you were already infected, to consult with a health professional to evaluate whether they need an HTLV-1 test. The virus is not transmitted by living together, hugging or sharing food and spaces. Guidance must be individual and respect the decision and privacy of each person."
    }
  },
  {
    "id": 141,
    "sectionId": "sec-12",
    "sectionNumber": 12,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HU/HAU",
      "en": "Associated Diseases: HU/HAU"
    },
    "q": {
      "es": "¿Qué tipo de enfermedad es la HU/HAU?",
      "en": "What type of disease is HU/HAU?"
    },
    "a": {
      "es": "HU/HAU es la abreviatura de uveítis asociada al HTLV-1, una enfermedad en la que se produce inflamación en la úvea, una estructura situada dentro del ojo. La uveítis puede tener diversas causas y se ha determinado que HU/HAU representa el 0,9 % de todos los casos de uveítis. La enfermedad es aproximadamente dos veces más frecuente en mujeres que en hombres y se sabe que aparece con mayor frecuencia en personas con antecedentes de enfermedad de Graves. HU/HAU se presenta a menudo junto con HAM.",
      "en": "HU/HAU is the abbreviation for HTLV-1-associated uveitis, a disease in which inflammation occurs in the uvea, a structure located inside the eye. Uveitis can have a variety of causes and it has been determined that HU/HAU accounts for 0.9% of all uveitis cases. The disease is approximately twice as common in women as in men and is known to occur more frequently in people with a history of Graves' disease. HU/HAU often occurs together with HAM."
    }
  },
  {
    "id": 142,
    "sectionId": "sec-12",
    "sectionNumber": 12,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HU/HAU",
      "en": "Associated Diseases: HU/HAU"
    },
    "q": {
      "es": "¿Con qué frecuencia las personas portadoras de HTLV-1 desarrollan HU/HAU?",
      "en": "How often do HTLV-1 carriers develop HU/HAU?"
    },
    "a": {
      "es": "Se sabe que entre 90 y 110 de cada 100.000 personas portadoras de HTLV-1 presentan uveítis asociada al HTLV-1 (HU/HAU). No se cuenta con una estimación nacional para el Perú, por lo que no es posible establecer una cifra exacta.",
      "en": "It is known that between 90 and 110 out of every 100,000 HTLV-1 carriers have HTLV-1-associated uveitis (HU/HAU). There is no national estimate for Peru, so it is not possible to establish an exact figure."
    }
  },
  {
    "id": 143,
    "sectionId": "sec-12",
    "sectionNumber": 12,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HU/HAU",
      "en": "Associated Diseases: HU/HAU"
    },
    "q": {
      "es": "¿Qué síntomas aparecen cuando se desarrolla HU/HAU?",
      "en": "What symptoms appear when HU/HAU develops?"
    },
    "a": {
      "es": "Los síntomas pueden incluir ver puntos o pequeñas manchas que parecen flotar delante de los ojos (conocidas como «moscas volantes»), visión borrosa, enrojecimiento ocular o disminución de la visión. Si tienes alguno de estos síntomas, acude pronto a un oftalmólogo. Recuerda informarle que tienes HTLV-1, desde cuándo presentas los síntomas y cómo han cambiado.",
      "en": "Symptoms may include seeing dots or small spots that appear to float in front of your eyes (known as “floaters”), blurred vision, eye redness, or decreased vision. If you have any of these symptoms, see an ophthalmologist soon. Remember to inform them that you have HTLV-1, how long you have had your symptoms and how they have changed."
    }
  },
  {
    "id": 144,
    "sectionId": "sec-12",
    "sectionNumber": 12,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HU/HAU",
      "en": "Associated Diseases: HU/HAU"
    },
    "q": {
      "es": "¿Cómo se diagnostica HU/HAU?",
      "en": "How is HU/HAU diagnosed?"
    },
    "a": {
      "es": "El diagnóstico se realiza cuando se cumplen tres condiciones: se observan hallazgos característicos de uveítis durante la evaluación oftalmológica, la prueba de anticuerpos contra HTLV-1 en sangre es positiva y se descartan otras posibles causas de la inflamación ocular.",
      "en": "The diagnosis is made when three conditions are met: characteristic findings of uveitis are observed during the ophthalmological evaluation, the HTLV-1 antibody test in the blood is positive, and other possible causes of ocular inflammation are ruled out."
    }
  },
  {
    "id": 145,
    "sectionId": "sec-12",
    "sectionNumber": 12,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HU/HAU",
      "en": "Associated Diseases: HU/HAU"
    },
    "q": {
      "es": "¿Cómo evoluciona HU/HAU?",
      "en": "How does HU/HAU evolve?"
    },
    "a": {
      "es": "La evolución de la uveítis suele ser favorable con el tratamiento adecuado. La inflamación del ojo disminuye y la mayoría de las personas presenta una mejoría en uno o dos meses. \n\nSin embargo, la enfermedad puede reaparecer después del tratamiento. Se estima que esto ocurre entre el 30 % y el 40 % de los casos, por lo que es importante mantener los controles oftalmológicos con su especialista de salud.",
      "en": "The evolution of uveitis is usually favorable with appropriate treatment. Eye inflammation decreases and most people see improvement within one to two months.\n\nHowever, the disease may come back after treatment. It is estimated that this occurs between 30% and 40% of cases, so it is important to maintain ophthalmological checkups with your health specialist."
    }
  },
  {
    "id": 146,
    "sectionId": "sec-12",
    "sectionNumber": 12,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HU/HAU",
      "en": "Associated Diseases: HU/HAU"
    },
    "q": {
      "es": "¿Qué tratamientos existen para HU/HAU?",
      "en": "What treatments are available for HU/HAU?"
    },
    "a": {
      "es": "La uveítis se trata con corticosteroides, medicamentos que ayudan a reducir la inflamación. Estos pueden administrarse en forma de gotas oftálmicas o por vía oral. Si la inflamación dentro del ojo es intensa, también puede indicarse una terapia de pulsos de corticosteroides por vía intravenosa.\n\nEl tratamiento debe ser indicado y supervisado por un oftalmólogo, de acuerdo con la intensidad de la inflamación y la evolución de la enfermedad.",
      "en": "Uveitis is treated with corticosteroids, medications that help reduce inflammation. These can be administered in the form of eye drops or orally. If the inflammation inside the eye is severe, pulse therapy of intravenous corticosteroids may also be indicated.\n\nTreatment must be indicated and supervised by an ophthalmologist, according to the intensity of the inflammation and the evolution of the disease."
    }
  },
  {
    "id": 147,
    "sectionId": "sec-12",
    "sectionNumber": 12,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HU/HAU",
      "en": "Associated Diseases: HU/HAU"
    },
    "q": {
      "es": "¿Cuál es el proceso habitual de tratamiento de HU/HAU?",
      "en": "What is the usual treatment process for HU/HAU?"
    },
    "a": {
      "es": "Después de diagnosticar HU/HAU, se realizan evaluaciones en medicina interna para comprobar si co-existen HAM o ATLL. \n\nSi la persona presenta únicamente uveítis, el tratamiento se realiza en el servicio de oftalmología, generalmente con gotas oftálmicas de corticosteroides o corticosteroides por vía oral. La mayoría de los casos mejora después de aproximadamente uno o dos meses de tratamiento.",
      "en": "After HU/HAU is diagnosed, evaluations are performed in internal medicine to check if HAM or ATLL co-exist.\n\nIf the person has only uveitis, treatment is performed in the ophthalmology service, generally with corticosteroid eye drops or oral corticosteroids. Most cases improve after about one to two months of treatment."
    }
  },
  {
    "id": 148,
    "sectionId": "sec-12",
    "sectionNumber": 12,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HU/HAU",
      "en": "Associated Diseases: HU/HAU"
    },
    "q": {
      "es": "¿Cuánto cuesta el tratamiento de HU/HAU?",
      "en": "How much does HU/HAU treatment cost?"
    },
    "a": {
      "es": "El costo del tratamiento depende de las consultas, los medicamentos, los procedimientos y el seguimiento oftalmológico. En Perú, consulta en el establecimiento donde recibes atención y con la oficina de tu seguro de salud (SIS, EsSalud o seguro privado) para conocer la cobertura y los costos.",
      "en": "The cost of treatment depends on consultations, medications, procedures and ophthalmological follow-up. In Peru, check with the facility where you receive care and with your health insurance office (SIS, EsSalud or private insurance) to find out coverage and costs."
    }
  },
  {
    "id": 149,
    "sectionId": "sec-12",
    "sectionNumber": 12,
    "sectionTitle": {
      "es": "Enfermedades asociadas: HU/HAU",
      "en": "Associated Diseases: HU/HAU"
    },
    "q": {
      "es": "Si he desarrollado HU/HAU, ¿deberían hacerse pruebas de HTLV-1 mis familiares?",
      "en": "If I have developed HU/HAU, should my family members be tested for HTLV-1?"
    },
    "a": {
      "es": "Una persona con HU/HAU puede conversar con sus familiares sobre la infección y ofrecerles información para que decidan si desean una evaluación. No debe asumirse que todos necesitan pruebas, ni que todos están infectados. \n\nEl personal de salud puede ofrecer consejería para explicar las vías de transmisión, orientar sobre quiénes podrían beneficiarse de una prueba y resolver las dudas de tus familiares. Es importante respetar la decisión y la confidencialidad de cada persona.",
      "en": "A person with HU/HAU can talk to family members about the infection and offer them information so they can decide if they want an evaluation. It should not be assumed that everyone needs testing, nor that everyone is infected.\n\nHealth personnel can offer counseling to explain the routes of transmission, guide who could benefit from a test, and answer your family members' questions. It is important to respect each person's decision and confidentiality."
    }
  },
  {
    "id": 150,
    "sectionId": "sec-13",
    "sectionNumber": 13,
    "sectionTitle": {
      "es": "Otras enfermedades relacionadas",
      "en": "Other Related Conditions"
    },
    "q": {
      "es": "Soy portador/a de HTLV-1 y también tengo artritis reumatoide. ¿Puedo desarrollar ATLL, HAM o HU/HAU?",
      "en": "I am a carrier of HTLV-1 and also have rheumatoid arthritis. Can I develop ATLL, HAM or HU/HAU?"
    },
    "a": {
      "es": "Se han registrado casos de personas con artritis reumatoide e infección por HTLV-1 que también han desarrollado otras enfermedades relacionadas con este virus, como leucemia/linfoma de células T del adulto (ATLL), mielopatía asociada al HTLV-1 (HAM) o uveítis asociada al HTLV-1 (HU/HAU). Sin embargo, todavía no se sabe si tener artritis reumatoide aumenta el riesgo de desarrollar estas enfermedades en las personas con HTLV-1. Por lo tanto, no se puede afirmar que tener ambas condiciones implique una mayor probabilidad de desarrollar alguna de ellas.",
      "en": "There have been cases of people with rheumatoid arthritis and HTLV-1 infection who have also developed other diseases related to this virus, such as adult T-cell leukemia/lymphoma (ATLL), HTLV-1-associated myelopathy (HAM), or HTLV-1-associated uveitis (HU/HAU). However, it is not yet known whether having rheumatoid arthritis increases the risk of developing these diseases in people with HTLV-1. Therefore, it cannot be said that having both conditions implies a greater probability of developing any of them."
    }
  },
  {
    "id": 151,
    "sectionId": "sec-13",
    "sectionNumber": 13,
    "sectionTitle": {
      "es": "Otras enfermedades relacionadas",
      "en": "Other Related Conditions"
    },
    "q": {
      "es": "Soy portador/a de HTLV-1 y tengo artritis reumatoide. ¿El tratamiento de la artritis reumatoide puede hacer que desarrolle ATLL, HAM o HU/HAU?",
      "en": "I am a carrier of HTLV-1 and have rheumatoid arthritis. Can rheumatoid arthritis treatment cause you to develop ATLL, HAM, or HU/HAU?"
    },
    "a": {
      "es": "Hasta la fecha no se han publicado informes que muestren que el tratamiento de la artritis reumatoide modifica el número de células infectadas por HTLV-1 (carga proviral) ni informes de que aumente la probabilidad de desarrollar leucemia/linfoma de células T del adulto (ATLL), mielopatía asociada al HTLV-1 (HAM) o uveítis asociada al HTLV-1 (HU/HAU). Por ello, las personas con HTLV-1 pueden recibir el tratamiento habitual para la artritis reumatoide.\n\nEs importante que tu reumatólogo conozca tu diagnóstico para que pueda evaluar el tratamiento más adecuado y realizar el seguimiento correspondiente. No suspendas ni modifiques tus medicamentos sin consultarlo.",
      "en": "To date, there have been no reports showing that rheumatoid arthritis treatment changes the number of HTLV-1-infected cells (proviral load) or reports that it increases the likelihood of developing adult T-cell leukemia/lymphoma (ATLL), HTLV-1-associated myelopathy (HAM), or HTLV-1-associated uveitis (HU/HAU). Therefore, people with HTLV-1 can receive standard treatment for rheumatoid arthritis.\n\nIt is important that your rheumatologist knows your diagnosis so that he can evaluate the most appropriate treatment and carry out the corresponding follow-up. Do not stop or modify your medications without consulting."
    }
  },
  {
    "id": 152,
    "sectionId": "sec-13",
    "sectionNumber": 13,
    "sectionTitle": {
      "es": "Otras enfermedades relacionadas",
      "en": "Other Related Conditions"
    },
    "q": {
      "es": "Tengo artritis reumatoide. ¿Debería hacerme una prueba de infección por HTLV-1?",
      "en": "I have rheumatoid arthritis. Should I get tested for HTLV-1 infection?"
    },
    "a": {
      "es": "No se puede afirmar que todas las personas con artritis reumatoide deban realizarse una prueba para detectar HTLV-1. La información disponible tampoco demuestra que tener artritis reumatoide, por sí sola, sea motivo suficiente para solicitar esta prueba.\n\nSin embargo, si presentas síntomas o signos que hagan sospechar alguna enfermedad relacionada con HTLV-1, como ATLL, HAM/TSP o uveítis, tu médico puede considerar necesario realizar una evaluación para detectar la infección. La decisión de hacerte la prueba debe conversarse con el profesional de salud, quien puede explicarte qué significa un resultado positivo y orientarte para que decidas con la información necesaria.",
      "en": "It cannot be said that everyone with rheumatoid arthritis should be tested for HTLV-1. The available information also does not demonstrate that having rheumatoid arthritis, by itself, is a sufficient reason to request this test.\n\nHowever, if you have symptoms or signs that raise suspicion of an HTLV-1-related disease, such as ATLL, HAM/TSP, or uveitis, your doctor may consider testing for infection necessary. The decision to take the test should be discussed with your health professional, who can explain what a positive result means and guide you so that you can decide with the necessary information."
    }
  },
  {
    "id": 153,
    "sectionId": "sec-14",
    "sectionNumber": 14,
    "sectionTitle": {
      "es": "Prevención de enfermedades",
      "en": "Disease Prevention"
    },
    "q": {
      "es": "Soy portador/a de HTLV-1. ¿Existen métodos para prevenir la aparición de ATLL, HAM o HU/HAU?",
      "en": "I am a carrier of HTLV-1. Are there methods to prevent the appearance of ATLL, HAM or HU/HAU?"
    },
    "a": {
      "es": "Lamentablemente, no existen medidas médicas comprobadas que permitan prevenir la aparición de leucemia/linfoma de células T del adulto (ATLL), mielopatía asociada al HTLV-1 (HAM) o uveítis asociada al HTLV-1 (HU/HAU). Investigadores alrededor del mundo continúan estudiando los mecanismos por los que aparecen estas enfermedades y buscando formas de prevenirlas.",
      "en": "Unfortunately, there are no proven medical measures to prevent the development of adult T-cell leukemia/lymphoma (ATLL), HTLV-1-associated myelopathy (HAM), or HTLV-1-associated uveitis (HU/HAU). Researchers around the world continue to study the mechanisms by which these diseases appear and look for ways to prevent them."
    }
  },
  {
    "id": 154,
    "sectionId": "sec-14",
    "sectionNumber": 14,
    "sectionTitle": {
      "es": "Prevención de enfermedades",
      "en": "Disease Prevention"
    },
    "q": {
      "es": "Soy portador/a de HTLV-1. ¿Qué puedo hacer para evitar desarrollar ATLL, HAM o HU/HAU?",
      "en": "I am a carrier of HTLV-1. What can I do to avoid developing ATLL, HAM or HU/HAU?"
    },
    "a": {
      "es": "Algunos estudios han encontrado que el riesgo de desarrollar leucemia/linfoma de células T del adulto (ATLL) es mayor entre quienes fuman, y que aumenta según la cantidad de cigarrillos consumidos y el tiempo durante el cual se ha fumado. Por ello, si fumas, se recomienda dejar el tabaco.\n\nEn cuanto a la mielopatía asociada al HTLV-1 (HAM) y la uveítis asociada al HTLV-1 (HU/HAU), actualmente no se conocen medidas específicas que hayan demostrado reducir el riesgo de desarrollarlas. Es importante mantener tus controles médicos y consultar si presentas síntomas nuevos.",
      "en": "Some studies have found that the risk of developing adult T-cell leukemia/lymphoma (ATLL) is higher among those who smoke, and that it increases with the number of cigarettes smoked and the length of time smoked. Therefore, if you smoke, it is recommended to quit tobacco.\n\nRegarding HTLV-1-associated myelopathy (HAM) and HTLV-1-associated uveitis (HU/HAU), there are currently no specific measures known that have been shown to reduce the risk of developing them. It is important to maintain your medical check-ups and consult if you present new symptoms."
    }
  },
  {
    "id": 155,
    "sectionId": "sec-15",
    "sectionNumber": 15,
    "sectionTitle": {
      "es": "Sistemas de apoyo y prestaciones",
      "en": "Support Systems and Services"
    },
    "q": {
      "es": "¿Existen asociaciones de pacientes?",
      "en": "Are there patient associations?"
    },
    "a": {
      "es": "Las asociaciones de pacientes pueden ofrecer acompañamiento, orientación práctica y espacios para compartir experiencias. Lamentablemente, en Perú no existe una asociación de pacientes que reúna y represente a personas con los diferentes diagnósticos asociados al HTLV-1 hasta el momento.",
      "en": "Patient associations can offer support, practical guidance and spaces to share experiences. Unfortunately, in Peru there is no patient association that brings together and represents people with the different diagnoses associated with HTLV-1 to date."
    }
  },
  {
    "id": 156,
    "sectionId": "sec-15",
    "sectionNumber": 15,
    "sectionTitle": {
      "es": "Sistemas de apoyo y prestaciones",
      "en": "Support Systems and Services"
    },
    "q": {
      "es": "¿Existe ayuda para cubrir los costos del tratamiento?",
      "en": "Is there help to cover the costs of treatment?"
    },
    "a": {
      "es": "Los apoyos económicos dependen de la afiliación y de las prestaciones de salud disponibles. Si tienes SIS, EsSalud o seguro privado, solicita a tu asegurador y al área de trabajo social del hospital que expliquen qué consultas, pruebas, medicamentos y procedimientos están cubiertos y cómo tramitar referencias.",
      "en": "Financial support depends on membership and available health benefits. If you have SIS, EsSalud or private insurance, ask your insurer and the hospital's social work area to explain what consultations, tests, medications and procedures are covered and how to process referrals."
    }
  },
  {
    "id": 157,
    "sectionId": "sec-15",
    "sectionNumber": 15,
    "sectionTitle": {
      "es": "Sistemas de apoyo y prestaciones",
      "en": "Support Systems and Services"
    },
    "q": {
      "es": "¿Los pacientes con HAM pueden compatibilizar el tratamiento y el trabajo?",
      "en": "Can patients with HAM combine treatment and work?"
    },
    "a": {
      "es": "Algunas personas con HAM pueden continuar trabajando, según la movilidad, los síntomas, el tratamiento y las exigencias del puesto. La rehabilitación, las adaptaciones laborales y el diálogo con salud ocupacional pueden ayudar a mantener la actividad cuando sea posible.",
      "en": "Some people with HAM can continue to work, depending on mobility, symptoms, treatment, and job demands. Rehabilitation, work accommodations, and discussion with occupational health can help maintain activity when possible."
    }
  },
  {
    "id": 158,
    "sectionId": "sec-15",
    "sectionNumber": 15,
    "sectionTitle": {
      "es": "Sistemas de apoyo y prestaciones",
      "en": "Support Systems and Services"
    },
    "q": {
      "es": "¿Qué pueden hacer los pacientes con HAM para prepararse ante un desastre?",
      "en": "What can HAM patients do to prepare for a disaster?"
    },
    "a": {
      "es": "En Perú conviene prepararse para sismos, lluvias intensas, inundaciones, huaicos y deslizamientos, según la región donde vivas. Una persona con HAM puede tener listo un plan familiar, contactos de emergencia, medicación suficiente dentro de lo indicado, documentos clínicos, ayudas para la movilidad, insumos de cateterismo si los utiliza y un plan de evacuación accesible. Comenta las necesidades específicas con familiares, cuidadores y tu médico tratante.",
      "en": "In Peru it is advisable to prepare for earthquakes, heavy rains, floods, landslides and landslides, depending on the region where you live. A person with HAM can have a family plan ready, emergency contacts, sufficient medication as indicated, clinical documents, mobility aids, catheterization supplies if used, and an accessible evacuation plan. Discuss specific needs with family members, caregivers, and your treating physician."
    }
  },
  {
    "id": 159,
    "sectionId": "sec-15",
    "sectionNumber": 15,
    "sectionTitle": {
      "es": "Sistemas de apoyo y prestaciones",
      "en": "Support Systems and Services"
    },
    "q": {
      "es": "¿Dónde puedo consultar dudas sobre HTLV-1?",
      "en": "Where can I ask questions about HTLV-1?"
    },
    "a": {
      "es": "Empieza por el establecimiento de salud donde recibiste el diagnóstico y solicita que te expliquen los resultados, el seguimiento y si corresponde una referencia a infectología, hematología, neurología u oftalmología. La disponibilidad de servicios y pruebas varía entre regiones. \n\nRecuerda que el centro de referencia para HTLV-1 en Perú queda en el Instituto de Medicina Tropical Alexander von Humboldt.",
      "en": "Start with the health facility where you received the diagnosis and ask that they explain the results, the follow-up and if appropriate a referral to infectious disease, hematology, neurology or ophthalmology. Availability of services and tests varies between regions.\n\nRemember that the reference center for HTLV-1 in Peru is at the Alexander von Humboldt Institute of Tropical Medicine."
    }
  }
];

/**
 * Returns the FAQs formatted for the active language.
 * @param {'es' | 'en'} lang
 * @param {string | null} sectionId - optional filter by section
 */
export function getLocalizedFaqs(lang = 'es', sectionId = null) {
  const isEn = lang === 'en';
  let filtered = FAQS_DATA;
  if (sectionId && sectionId !== 'all') {
    filtered = filtered.filter(item => item.sectionId === sectionId);
  }
  return filtered.map(item => ({
    id: item.id,
    sectionId: item.sectionId,
    sectionNumber: item.sectionNumber,
    sectionTitle: isEn ? item.sectionTitle.en : item.sectionTitle.es,
    categoryLabel: isEn ? item.sectionTitle.en : item.sectionTitle.es,
    q: isEn ? item.q.en : item.q.es,
    a: isEn ? item.a.en : item.a.es
  }));
}
