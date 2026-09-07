"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function NetworkPage() {
  const [activePin, setActivePin] = useState(null);

  const togglePin = (pinId) => {
    setActivePin(activePin === pinId ? null : pinId);
  };

  const committeeMembers = [
    {
      name: 'Dra. Elena Rodríguez',
      role: 'Presidenta | Operaciones Perú',
      desc: 'Investigadora senior enfocada en patrones de transmisión materno-infantil de HTLV en regiones endémicas.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3ogV_JqhtSHX8SvTJ4p1KmF4NEx1Aa2m3-RAIW-mPaDXc37CZuyN3__KYRf6vbJdxVMdVhugHOSUMUDoMM9Xx22IxI3T3wrxc5QWgHXVOA_4cIAQBt8EL-wm6ydmvTZfuEzf89oFVvTfQBRUxkHTQ4DaZm3qNwZtMG-HWhMNAuJKtSmOy2Q5h0rlGnJDXoDEKlp5wT3EnXqg0JzCQGE4mNz-HF8EZAtczOoCHQacrM_vw20BqSOTuksf3oV7Oc1JysM9JWnQz7kA'
    },
    {
      name: 'Prof. Alistair Graham',
      role: 'Vicepresidente | Líder Europeo',
      desc: 'Experto en biología molecular y mecanismos de transformación de células T en el Imperial College London.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgZj7_bCpWTnyBzAXOyOvypz2R4T5Ivzh8tFom4yOZWyrZZ9w5lz1CFYnk8X-nHIGrVMH6Y6wihKQRZpEc-6qhyG_eiyqwh3dOTe-Yvn8ASA_TLbUnQL5LRLalilaXav9saFMfIuNiGxk-02QpqhjSB6aJGu6jCYqE-9wg-3vP-n3f8HMAxr9lDke5GSQ98ekyUm3xbWiT3Vun3kzv41w4SRiyB_Y2SfIlNwAmMmkaPFUEMnKu1RBhOfKMuOG6uLxGvuyUJWcCHhY'
    },
    {
      name: 'Dr. Kenji Sato',
      role: 'Coordinador Estratégico | Japón',
      desc: 'Pionero en terapias HAM/TSP y coordinación de ensayos clínicos en la red Pan-Pacífica.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJt4xNgitIjw1jAkYZotalxqxpiycO6TCtfaegvWZsEDX104-XJg7_wiWpYoevzc5B5bZSjMv0A5el2JF4ksBGhbRcZwbMi7mUKZxhWA_P4KGbekzwxbn8uQchq8jrYOaED41iNstVWijcbqvf76TbFbzcD9KHIEAnL3Lmaf9LbEC49wxffvbmDLvzSQTHWovTJZ51ghruQCNTj8jNFsJkgQGua8Qj9coLj-SpWSeGzv5cIF4dQS_MyTdPjf8eY4yBc9266R15zBo'
    }
  ];

  const documents = [
    { name: 'Constitución de la Red', size: '2.4 MB · PDF' },
    { name: 'Ética y Cumplimiento', size: '1.1 MB · PDF' },
    { name: 'Privilegios de Miembro', size: '850 KB · PDF' },
    { name: 'Informe Anual 2023', size: '5.2 MB · PDF' }
  ];

  return (
    <>
      <main className="px-margin-mobile md:px-margin-desktop py-12">
        {/* Hero Section */}
        <header className="mb-section-gap max-w-3xl">
          <span className="inline-block px-3 py-1 rounded bg-primary/10 text-primary font-label-sm uppercase tracking-wider mb-4">Sobre la Red</span>
          <h1 className="font-display text-display text-on-background mb-6">Uniendo la experiencia global para eliminar el HTLV.</h1>
          <p className="font-body-lg text-body-lg text-[#564242]">La Red Internacional de Investigación e Innovación en HTLV (RIII-HTLV) sirve como la principal infraestructura global para la colaboración académica, fomentando descubrimientos revolucionarios en retrovirología a través de la sinergia institucional.</p>
        </header>

        {/* Bento Grid: Mission & Objectives */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-section-gap">
          <div className="col-span-12 md:col-span-8 bg-white border border-[#dcc0c0] p-10 rounded-xl flex flex-col justify-between min-h-[400px] shadow-sm">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Nuestra Misión</h2>
              <p className="font-body-lg text-[#564242] leading-relaxed">
                Acelerar la erradicación de las enfermedades asociadas al HTLV cerrando la brecha entre la investigación clínica y la salud comunitaria en cuatro continentes. Aprovechamos los repositorios de datos compartidos y la tutoría internacional para empoderar a la próxima generación de investigadores.
              </p>
            </div>
            <div className="mt-8 flex gap-6 text-[14px] font-medium text-[#191c1e]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
                <span>Alcance Global</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>science</span>
                <span>Ciencia Abierta</span>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 bg-primary text-on-primary p-10 rounded-xl flex flex-col justify-between">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-white mb-6">Visión Principal</h2>
              <p className="font-body-md text-body-md opacity-90 leading-relaxed mb-8">
                Un mundo donde la infección por HTLV se previene eficazmente y las personas que viven con el virus tienen acceso a terapias curativas desarrolladas a través de una investigación global unificada.
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#ffdada]">check_circle</span>
                <span className="font-label-md">Estandarizando protocolos globales</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#ffdada]">check_circle</span>
                <span className="font-label-md">Eliminando los silos de investigación</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="mb-section-gap">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-[#191c1e] mb-2">Presencia Institucional</h2>
              <p className="font-body-md text-[#564242]">Centros de investigación estratégicos en los principales centros académicos.</p>
            </div>
            <div className="flex gap-4">
              <span className="flex items-center gap-2 font-label-sm text-label-sm"><div className="w-3 h-3 bg-primary rounded-full"></div> Centro de Investigación</span>
              <span className="flex items-center gap-2 font-label-sm text-label-sm"><div className="w-3 h-3 bg-[#dcc0c0] rounded-full"></div> Laboratorio Asociado</span>
            </div>
          </div>
          <div className="world-map-container h-[500px] w-full border border-outline-variant shadow-sm flex items-center justify-center relative overflow-hidden bg-white rounded-xl">
            <div className="absolute inset-0 opacity-10 grayscale">
              <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </div>
            {/* World Map Background Image */}
            <div className="relative w-full h-full">
              <img className="w-full h-full object-cover opacity-60" alt="Mapa mundial" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP-uBDKfTkFim3f9fwKb6zGvy2iP3ttm-i-c29tMi1ZXFSZiIOmIMqZomsEa_B0pXDDVBSdMMnNJSCcPPFdW7nePFee8C3GIlN_Ec6Qgyp6c_hKzmrwlB4sOWvgCt87kelA8Zd1vEHrQxJI4Sq535kMZHxHmnp4qU-aa03fMIYFCKMo_cES0m0MmaQBr1CGIST_WyfOIrRqx5UuR6KFyHU4JRC1Enidx7r_fFLDEaVjuXeL_51jTm8exS0aMNUo_gcBpzcwr1hM54" />
              
              {/* Map Pins */}
              {/* USA */}
              <div 
                onClick={() => togglePin('usa')}
                className="map-pin absolute w-3.5 h-3.5 bg-primary rounded-full cursor-pointer border border-white hover:scale-125 transition-transform" 
                style={{ top: '30%', left: '18%' }}
              >
                <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg border border-outline-variant transition-all pointer-events-none w-48 z-30 ${activePin === 'usa' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  <p className="font-label-sm text-primary mb-1">EE.UU.</p>
                  <p className="text-[10px] font-body-md text-on-surface">Asociación con los Institutos Nacionales de Salud (NIH)</p>
                </div>
              </div>

              {/* Peru */}
              <div 
                onClick={() => togglePin('peru')}
                className="map-pin absolute w-3.5 h-3.5 bg-primary rounded-full cursor-pointer border border-white hover:scale-125 transition-transform" 
                style={{ top: '65%', left: '28%' }}
              >
                <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg border border-outline-variant transition-all pointer-events-none w-48 z-30 ${activePin === 'peru' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  <p className="font-label-sm text-primary mb-1">Perú</p>
                  <p className="text-[10px] font-body-md text-on-surface">Instituto de Medicina Tropical Alexander von Humboldt</p>
                </div>
              </div>

              {/* UK */}
              <div 
                onClick={() => togglePin('uk')}
                className="map-pin absolute w-3.5 h-3.5 bg-primary rounded-full cursor-pointer border border-white hover:scale-125 transition-transform" 
                style={{ top: '25%', left: '47%' }}
              >
                <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg border border-outline-variant transition-all pointer-events-none w-48 z-30 ${activePin === 'uk' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  <p className="font-label-sm text-primary mb-1">Reino Unido</p>
                  <p className="text-[10px] font-body-md text-on-surface">Imperial College London - Facultad de Medicina</p>
                </div>
              </div>

              {/* Japan */}
              <div 
                onClick={() => togglePin('japan')}
                className="map-pin absolute w-3.5 h-3.5 bg-primary rounded-full cursor-pointer border border-white hover:scale-125 transition-transform" 
                style={{ top: '35%', left: '85%' }}
              >
                <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg border border-outline-variant transition-all pointer-events-none w-48 z-30 ${activePin === 'japan' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  <p className="font-label-sm text-primary mb-1">Japón</p>
                  <p className="text-[10px] font-body-md text-on-surface">Centro de Investigación Conjunta de la Universidad de Kumamoto</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Steering Committee Section */}
        <section className="mb-section-gap">
          <div className="mb-12">
            <h2 className="font-headline-lg text-headline-lg text-[#191c1e] mb-4">Comité de Dirección</h2>
            <p className="font-body-md text-[#564242] max-w-2xl">Liderado por expertos de renombre mundial en retrovirología, inmunología y políticas de salud pública, nuestro comité proporciona supervisión estratégica y garantiza la integridad científica.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committeeMembers.map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-lg mb-4 bg-surface-container shadow-sm">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={member.name} src={member.image} />
                </div>
                <h3 className="font-headline-md text-headline-md text-[#191c1e]">{member.name}</h3>
                <p className="font-label-md text-primary mb-3 font-semibold">{member.role}</p>
                <p className="font-body-md text-on-surface-variant leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Network Documents Section */}
        <section className="mb-section-gap p-12 bg-white border border-[#dcc0c0] rounded-xl shadow-sm hover:border-primary transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-[#191c1e] mb-2">Gobernanza de la Red</h2>
              <p className="font-body-md text-[#564242]">Estatutos oficiales, directrices éticas y marcos institucionales.</p>
            </div>
            <button className="mt-4 md:mt-0 flex items-center gap-2 text-primary font-bold text-label-md hover:underline cursor-pointer">
              Ver archivo completo <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc, i) => (
              <a key={i} className="flex items-center p-4 rounded-lg bg-[#f3f4f6] border border-transparent hover:border-primary/20 hover:bg-white transition-all group shadow-sm" href="#">
                <div className="w-12 h-12 flex items-center justify-center bg-[#ffdada] rounded text-[#5b0617] group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                  <span className="material-symbols-outlined">picture_as_pdf</span>
                </div>
                <div className="ml-4 overflow-hidden">
                  <p className="font-label-md text-label-md text-[#191c1e] truncate font-bold">{doc.name}</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">{doc.size}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <style jsx global>{`
        .map-pin::after {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border: 2px solid #5b0617;
          border-radius: 50%;
          opacity: 0;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
    </>
  );
}