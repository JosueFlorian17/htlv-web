import '../styles/globals.css';
import Header from '../components/layout/Header';
import MainLayoutWrapper from '../components/layout/MainLayoutWrapper';

export const metadata = {
  title: 'Portal de Noticias & Foro',
  description: 'Noticias frescas y debates comunitarios',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#f8f9fb] text-gray-900 flex flex-col min-h-screen pt-20">
        {/* Barra de navegación superior fija */}
        <Header />
        
        {/* Contenido dinámico de cada página con layout unificado */}
        <MainLayoutWrapper>
          {children}
        </MainLayoutWrapper>
      </body>
    </html>
  )
}