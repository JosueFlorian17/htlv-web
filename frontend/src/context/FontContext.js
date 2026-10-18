"use client";

import { createContext, useContext, useState, useEffect } from 'react';

export const FONT_OPTIONS = [
  {
    id: 'montserrat',
    name: 'Montserrat (Black 900)',
    family: "'Montserrat', sans-serif",
    headingsWeight: '900',
    description: 'Impactante, sólida y de prestigio institucional.',
  },
  {
    id: 'plus-jakarta',
    name: 'Plus Jakarta Sans (ExtraBold 800)',
    family: "'Plus Jakarta Sans', sans-serif",
    headingsWeight: '800',
    description: 'Geométrica moderna, limpia y altamente legible.',
  },
  {
    id: 'outfit',
    name: 'Outfit (Black 900)',
    family: "'Outfit', sans-serif",
    headingsWeight: '900',
    description: 'Enérgica, contemporánea y memorable.',
  },
  {
    id: 'manrope',
    name: 'Manrope (ExtraBold 800)',
    family: "'Manrope', sans-serif",
    headingsWeight: '800',
    description: 'Estructurada, tecnológica y de gran seriedad científica.',
  },
  {
    id: 'sora',
    name: 'Sora (ExtraBold 800)',
    family: "'Sora', sans-serif",
    headingsWeight: '800',
    description: 'Diseñada para pantallas, nítida y con carácter distintivo.',
  },
  {
    id: 'space-grotesk',
    name: 'Space Grotesk (Bold 700)',
    family: "'Space Grotesk', sans-serif",
    headingsWeight: '700',
    description: 'Estilo tech-académico, muy memorable sin perder sobriedad.',
  },
  {
    id: 'bricolage',
    name: 'Bricolage Grotesque (Bold 800)',
    family: "'Bricolage Grotesque', sans-serif",
    headingsWeight: '800',
    description: 'Audaz, expresiva y con fuerte identidad propia.',
  },
  {
    id: 'syne',
    name: 'Syne (ExtraBold 800)',
    family: "'Syne', sans-serif",
    headingsWeight: '800',
    description: 'Vanguardista, potente y contundente.',
  },
  {
    id: 'unbounded',
    name: 'Unbounded (Bold 700)',
    family: "'Unbounded', sans-serif",
    headingsWeight: '700',
    description: 'Ultra ancha, futurista y de altísimo impacto visual.',
  },
  {
    id: 'cabinet',
    name: 'Cabinet Grotesk (Black 800)',
    family: "'Cabinet Grotesk', sans-serif",
    headingsWeight: '800',
    description: 'Neogrotesca imponente, de rigor editorial.',
  },
];

const FontContext = createContext();

export function FontProvider({ children }) {
  const [fontIndex, setFontIndex] = useState(0);

  // Load saved preference from localStorage if available
  useEffect(() => {
    const saved = localStorage.getItem('htlv_preview_font_index');
    if (saved !== null) {
      const idx = parseInt(saved, 10);
      if (!isNaN(idx) && idx >= 0 && idx < FONT_OPTIONS.length) {
        setFontIndex(idx);
      }
    }
  }, []);

  const changeFont = (index) => {
    setFontIndex(index);
    if (typeof window !== 'undefined') {
      localStorage.setItem('htlv_preview_font_index', index.toString());
    }
  };

  const nextFont = () => {
    const nextIdx = (fontIndex + 1) % FONT_OPTIONS.length;
    changeFont(nextIdx);
  };

  const prevFont = () => {
    const prevIdx = (fontIndex - 1 + FONT_OPTIONS.length) % FONT_OPTIONS.length;
    changeFont(prevIdx);
  };

  const currentFont = FONT_OPTIONS[fontIndex];

  return (
    <FontContext.Provider
      value={{
        fontIndex,
        currentFont,
        fonts: FONT_OPTIONS,
        changeFont,
        nextFont,
        prevFont,
      }}
    >
      <div 
        id="global-font-wrapper"
        style={{
          fontFamily: currentFont.family,
        }}
        className="contents"
      >
        <style jsx global>{`
          body, html {
            font-family: ${currentFont.family} !important;
          }
          h1, h2, h3, h4, h5, h6 {
            font-family: ${currentFont.family} !important;
          }
          h1 {
            font-weight: ${currentFont.headingsWeight} !important;
            letter-spacing: -0.025em;
          }
          h2 {
            font-weight: ${currentFont.headingsWeight === '900' ? '800' : currentFont.headingsWeight} !important;
            letter-spacing: -0.02em;
          }
          h3, h4 {
            font-weight: 700 !important;
          }
          button, input, select, textarea {
            font-family: ${currentFont.family} !important;
          }
        `}</style>
        {children}
      </div>
    </FontContext.Provider>
  );
}

export function useFont() {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error('useFont must be used within a FontProvider');
  }
  return context;
}
