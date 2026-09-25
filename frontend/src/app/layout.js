import '../styles/globals.css';
import Header from '../components/layout/Header';
import MainLayoutWrapper from '../components/layout/MainLayoutWrapper';
import { ContentProvider } from '../context/ContentContext';
import EditorFloatingBar from '../components/layout/EditorFloatingBar';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://htlv-web.vercel.app');

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'RIII-HTLV | Red Internacional de Investigación e Innovación en HTLV',
    template: '%s | RIII-HTLV'
  },
  description: 'Plataforma científica oficial de la Red Internacional de Investigación e Innovación en HTLV (RIII-HTLV), con el liderazgo del Instituto de Medicina Tropical Alexander von Humboldt - UPCH (Perú). Guías clínicas, epidemiología, repositorio y consensos internacionales sobre HTLV-1 y HTLV-2.',
  keywords: [
    'HTLV',
    'HTLV-1',
    'HTLV-2',
    'Retrovirus',
    'Paraparesia Espástica Tropical',
    'HAM/TSP',
    'Leucemia Linfoma de Células T del Adulto',
    'ATL',
    'Cayetano Heredia',
    'UPCH',
    'IMTAvH',
    'Perú',
    'Epidemiología HTLV',
    'Investigación retroviral'
  ],
  authors: [{ name: 'RIII-HTLV & UPCH' }],
  creator: 'Red Internacional de Investigación e Innovación en HTLV',
  publisher: 'Universidad Peruana Cayetano Heredia (UPCH)',
  alternates: {
    canonical: '/',
    languages: {
      'es': '/',
      'en': '/en',
      'pt': '/pt',
      'x-default': '/'
    }
  },
  openGraph: {
    title: 'RIII-HTLV | Red Internacional de Investigación e Innovación en HTLV',
    description: 'Consenso científico, epidemiología y guías clínicas sobre el virus HTLV-1/2 lideradas por la Universidad Peruana Cayetano Heredia y centros internacionales.',
    url: siteUrl,
    siteName: 'RIII-HTLV Digital Research Hub',
    locale: 'es_PE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link rel="alternate" hrefLang="es" href={`${siteUrl}/`} />
        <link rel="alternate" hrefLang="en" href={`${siteUrl}/en`} />
        <link rel="alternate" hrefLang="pt" href={`${siteUrl}/pt`} />
        <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/`} />
      </head>
      <body className="bg-[#f8f9fb] text-gray-900 flex flex-col min-h-screen pt-20">
        <ContentProvider>
          {/* Barra de navegación superior fija */}
          <Header />
          
          {/* Contenido dinámico de cada página con layout unificado */}
          <MainLayoutWrapper>
            {children}
          </MainLayoutWrapper>

          {/* Barra flotante interactiva de edición en vivo y sincronización */}
          <EditorFloatingBar />
        </ContentProvider>
      </body>
    </html>
  );
}