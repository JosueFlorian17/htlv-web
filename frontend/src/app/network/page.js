"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function NetworkPage() {
  const [activePin, setActivePin] = useState(null);

  const togglePin = (pinId) => {
    setActivePin(activePin === pinId ? null : pinId);
  };

  const institutions = [
    {
      name: 'Universidad Peruana Cayetano Heredia (UPCH)',
      sub: 'Instituto de Medicina Tropical Alexander von Humboldt (IMTAvH)',
      country: 'Perú',
      role: 'Centro de Coordinación & Liderazgo Clínico-Epidemiológico',
      focus: 'Cohortes de seguimiento en HAM/TSP, coinfección TB-HTLV y diagnóstico molecular.',
      website: 'https://imtavh.cayetano.edu.pe',
      badge: 'Sede Principal'
    },
    {
      name: 'Imperial College London',
      sub: 'Section of Virology & National Centre for Human Retrovirology',
      country: 'Reino Unido',
      role: 'Centro de Biología Molecular e Inmunología',
      focus: 'Mecanismos de persistencia viral, carga proviral y regulación inmunológica de células T.',
      website: 'https://www.imperial.ac.uk',
      badge: 'Nodo Europeo'
    },
    {
      name: 'Institut Pasteur',
      sub: 'Unité d’Epidémiologie et Physiopathologie des Virus Oncogènes',
      country: 'Francia',
      role: 'Investigación Oncológica y Patogénesis de ATL',
      focus: 'Oncogénesis viral del gen Tax/HBZ y transformación celular en linfocitos T.',
      website: 'https://www.pasteur.fr',
      badge: 'Nodo Internacional'
    },
    {
      name: 'Universidade de São Paulo (USP) / Fiocruz',
      sub: 'Instituto Gonçalo Moniz & FMUSP',
      country: 'Brasil',
      role: 'Vigilancia Epidemiológica y Ensayos Multicéntricos',
      focus: 'Estudios de prevalencia comunitaria, impacto en donantes de sangre y salud pública.',
      website: 'https://www.fiocruz.br',
      badge: 'Nodo Sudamericano'
    },
    {
      name: 'Instituto de Salud Carlos III (ISCIII)',
      sub: 'Centro Nacional de Microbiología - Madrid',
      country: 'España',
      role: 'Registro Nacional y Redes de Vigilancia',
      focus: 'Monitoreo de subtipos virales y transmisión transfronteriza en Europa y América Latina.',
      website: 'https://www.isciii.es',
      badge: 'Nodo Ibérico'
    },
    {
      name: 'St. Marianna University School of Medicine',
      sub: 'Department of Rare Diseases & Neurovirology',
      country: 'Japón',
      role: 'Centro de Excelencia en Terapias para HAM/TSP',
      focus: 'Ensayos clínicos avanzados de anticuerpos monoclonales y biomarcadores neurológicos.',
      website: 'https://www.marianna-u.ac.jp',
      badge: 'Nodo Asia-Pacífico'
    }
  ];

  const committeeMembers = [
    {
      name: 'Dr. Eduardo Gotuzzo',
      role: 'Presidente Honorario | IMTAvH - UPCH (Perú)',
      desc: 'Profesor emérito e investigador pionero en enfermedades infecciosas y tropicales en América Latina.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3ogV_JqhtSHX8SvTJ4p1KmF4NEx1Aa2m3-RAIW-mPaDXc37CZuyN3__KYRf6vbJdxVMdVhugHOSUMUDoMM9Xx22IxI3T3wrxc5QWgHXVOA_4cIAQBt8EL-wm6ydmvTZfuEzf89oFVvTfQBRUxkHTQ4DaZm3qNwZtMG-HWhMNAuJKtSmOy2Q5h0rlGnJDXoDEKlp5wT3EnXqg0JzCQGE4mNz-HF8EZAtczOoCHQacrM_vw20BqSOTuksf3oV7Oc1JysM9JWnQz7kA'
    },
    {
      name: 'Prof. Graham P. Taylor',
      role: 'Vicepresidente | Imperial College London (UK)',
      desc: 'Líder del Centro Nacional de Retrovirología Humana de Reino Unido y referente en manejo de ATL y HAM/TSP.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgZj7_bCpWTnyBzAXOyOvypz2R4T5Ivzh8tFom4yOZWyrZZ9w5lz1CFYnk8X-nHIGrVMH6Y6wihKQRZpEc-6qhyG_eiyqwh3dOTe-Yvn8ASA_TLbUnQL5LRLalilaXav9saFMfIuNiGxk-02QpqhjSB6aJGu6jCYqE-9wg-3vP-n3f8HMAxr9lDke5GSQ98ekyUm3xbWiT3Vun3kzv41w4SRiyB_Y2SfIlNwAmMmkaPFUEMnKu1RBhOfKMuOG6uLxGvuyUJWcCHhY'
    },
    {
      name: 'Dra. Elsa González',
      role: 'Coordinadora Científica | IMTAvH - UPCH (Perú)',
      desc: 'Investigadora principal en diagnóstico molecular, coinfecciones y vigilancia materno-infantil de HTLV-1.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJt4xNgitIjw1jAkYZotalxqxpiycO6TCtfaegvWZsEDX104-XJg7_wiWpYoevzc5B5bZSjMv0A5el2JF4ksBGhbRcZwbMi7mUKZxhWA_P4KGbekzwxbn8uQchq8jrYOaED41iNstVWijcbqvf76TbFbzcD9KHIEAnL3Lmaf9LbEC49wxffvbmDLvzSQTHWovTJZ51ghruQCNTj8jNFsJkgQGua8Qj9coLj-SpWSeGzv5cIF4dQS_MyTdPjf8eY4yBc9266R15zBo'
    }
  ];

  return (
    <>
      <main className="px-margin-mobile md:px-margin-desktop py-12 max-w-[1280px] mx-auto">
        
        {/* Cabecera Principal */}
        <header className="mb-14 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-[#ffdada] text-[#5b0617] font-label-sm uppercase font-bold tracking-wider rounded-full">
              Consorcio Global
            </span>
            <span className="px-3 py-1 bg-[#f3f4f6] text-[#564242] font-label-sm font-semibold rounded-full border border-[#dcc0c0]">
              Liderazgo UPCH - Perú
            </span>
          </div>
          <h1 className="font-display text-display text-[#5b0617] mb-4">
            La Red Internacional de Investigación e Innovación en HTLV (RIII-HTLV)
          </h1>
          <p className="font-body-lg text-body-lg text-[#564242] leading-relaxed">
            Una alianza científica global que conecta a centros de investigación líderes de América Latina, Europa y Asia para estandarizar diagnósticos, acelerar descubrimientos terapéuticos y promover la salud pública.
          </p>
        </header>

        {/* Sección: Instituciones que nos forman */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4 border-b border-[#dcc0c0] pb-4">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-[#5b0617] mb-1">
                Instituciones Miembro del Consorcio
              </h2>
              <p className="text-[14px] text-[#564242]">
                Universidades e institutos de investigación que integran la red científica RIII-HTLV.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutions.map((inst, i) => (
              <div 
                key={i} 
                className="bg-white border border-[#dcc0c0] rounded-2xl p-6 shadow-sm hover:border-[#5b0617] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-[#ffdada] text-[#5b0617] px-2.5 py-0.5 rounded-full">
                      {inst.badge}
                    </span>
                    <span className="text-[12px] font-bold text-[#564242]">
                      {inst.country}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-[16px] text-[#191c1e] mb-1 leading-snug">
                    {inst.name}
                  </h3>
                  <p className="text-[12px] font-medium text-[#5b0617] mb-3">
                    {inst.sub}
                  </p>
                  
                  <div className="p-3 bg-[#f8f9fb] rounded-xl border border-[#dcc0c0]/50 mb-4 space-y-1">
                    <span className="block text-[11px] font-bold uppercase text-[#555f6f]">Rol Estratégico</span>
                    <p className="text-[12px] font-semibold text-[#191c1e]">{inst.role}</p>
                  </div>
                  
                  <p className="text-[12px] text-[#564242] leading-relaxed mb-4">
                    {inst.focus}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#dcc0c0]/50">
                  <a 
                    href={inst.website}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[12px] font-bold text-[#5b0617] hover:underline"
                  >
                    <span>Visitar sitio oficial</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bento Grid: Misión, Visión y Gobernanza */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-8 bg-white border border-[#dcc0c0] p-8 md:p-10 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-[12px] font-bold text-[#5b0617] uppercase tracking-wider mb-2 block">Propósito Científico</span>
              <h2 className="font-headline-lg text-headline-lg text-[#191c1e] mb-4">Nuestra Misión</h2>
              <p className="font-body-md text-[#564242] leading-relaxed mb-6">
                Fomentar la colaboración interdisciplinaria entre centros académicos de primer nivel para erradicar las enfermedades asociadas a los retrovirus HTLV-1 y HTLV-2. Promovemos el intercambio transparente de datos genómicos, la capacitación de jóvenes investigadores y la formulación de políticas públicas basadas en evidencia.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#dcc0c0]/60">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#5b0617]">public</span>
                <span className="text-[13px] font-bold text-[#191c1e]">Alcance en 4 Continentes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#5b0617]">biotech</span>
                <span className="text-[13px] font-bold text-[#191c1e]">Ciencia Abierta & Ética</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#5b0617]">school</span>
                <span className="text-[13px] font-bold text-[#191c1e]">Formación de Investigadores</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 bg-[#5b0617] text-white p-8 md:p-10 rounded-2xl flex flex-col justify-between shadow-md">
            <div>
              <span className="text-[12px] font-bold text-[#ffdada] uppercase tracking-wider mb-2 block">Impacto Global</span>
              <h2 className="text-[22px] md:text-[24px] font-bold text-white mb-4">Visión 2030</h2>
              <p className="text-[13px] opacity-90 leading-relaxed mb-6">
                Consolidar un repositorio clínico-genómico unificado y promover el tamizaje universal en bancos de sangre y control prenatal en todas las regiones endémicas del mundo.
              </p>
            </div>
            <ul className="space-y-2.5 text-[13px] opacity-95">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ffdada] text-[18px]">check_circle</span>
                <span>Estandarización de PCR y Western Blot</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ffdada] text-[18px]">check_circle</span>
                <span>Alianzas con la OPS/OMS</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Comité de Dirección y Científicos Referentes */}
        <section className="mb-16">
          <div className="border-b border-[#dcc0c0] pb-4 mb-8">
            <h2 className="font-headline-lg text-headline-lg text-[#5b0617] mb-1">
              Comité de Dirección y Científicos Referentes
            </h2>
            <p className="text-[14px] text-[#564242]">
              Liderazgo académico que guía las prioridades de investigación y ética de la red.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {committeeMembers.map((member, i) => (
              <div key={i} className="bg-white border border-[#dcc0c0] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#5b0617]">
                    <img className="w-full h-full object-cover" alt={member.name} src={member.image} />
                  </div>
                  <h3 className="font-bold text-[17px] text-[#191c1e] mb-1">{member.name}</h3>
                  <p className="text-[12px] font-bold text-[#5b0617] mb-3">{member.role}</p>
                  <p className="text-[13px] text-[#564242] leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}