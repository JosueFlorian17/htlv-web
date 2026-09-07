"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentLang, setCurrentLang] = useState('es');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActivePath = (path) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(path);
    };

    const isNosotrosActive = () => {
        return pathname === '/network' || pathname === '/about';
    };

    return (
        <>
            {/* Iconos de Google Material Symbols oficiales */}
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

            {/* TopNavBar - Ancho completo y contenido alineado */}
            <nav className={`fixed top-0 left-0 right-0 h-20 w-full z-50 bg-[#f8f9fb] transition-all duration-200 ${isScrolled ? 'shadow-md' : 'border-b border-[#dcc0c0]'}`}>
                <div className="max-w-[1280px] mx-auto w-full h-full flex justify-between items-center px-6 md:px-10">
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <span className="text-[22px] md:text-[24px] font-extrabold text-[#5b0617] tracking-tight group-hover:opacity-90 transition-opacity">
                                RIII-HTLV
                            </span>
                        </Link>
                        
                        <div className="hidden lg:flex items-center gap-5">
                            <Link 
                                className={`text-[14px] font-medium transition-colors border-b-2 pb-1 ${
                                    isActivePath('/') && !pathname.includes('#')
                                        ? 'text-[#5b0617] font-bold border-[#5b0617]' 
                                        : 'text-[#564242] hover:text-[#5b0617] border-transparent'
                                }`} 
                                href="/"
                            >
                                Inicio
                            </Link>
                            
                            {/* Nosotros Dropdown */}
                            <div className="relative group flex items-center h-20">
                                <button 
                                    className={`flex items-center gap-1 text-[14px] font-medium transition-colors border-b-2 pb-1 cursor-pointer ${
                                        isNosotrosActive()
                                            ? 'text-[#5b0617] font-bold border-[#5b0617]' 
                                            : 'text-[#564242] hover:text-[#5b0617] border-transparent'
                                    }`}
                                >
                                    Sobre HTLV & La Red <span className="material-symbols-outlined text-sm">expand_more</span>
                                </button>
                                <div className="absolute top-[80%] left-0 hidden group-hover:block bg-[#f8f9fb] border border-[#dcc0c0] rounded-lg shadow-lg py-2 min-w-[210px] z-50">
                                    <Link 
                                        href="/about" 
                                        className={`block px-4 py-2 text-[14px] font-medium hover:bg-[#e7e8ea] ${pathname === '/about' ? 'text-[#5b0617] font-bold bg-[#e7e8ea]' : 'text-[#564242]'}`}
                                    >
                                        ¿Qué es el HTLV?
                                    </Link>
                                    <Link 
                                        href="/network" 
                                        className={`block px-4 py-2 text-[14px] font-medium hover:bg-[#e7e8ea] ${pathname === '/network' ? 'text-[#5b0617] font-bold bg-[#e7e8ea]' : 'text-[#564242]'}`}
                                    >
                                        La Red y Miembros
                                    </Link>
                                </div>
                            </div>

                            <Link 
                                className={`text-[14px] font-medium transition-colors border-b-2 pb-1 ${
                                    isActivePath('/research')
                                        ? 'text-[#5b0617] font-bold border-[#5b0617]' 
                                        : 'text-[#564242] hover:text-[#5b0617] border-transparent'
                                }`} 
                                href="/research"
                            >
                                Investigación
                            </Link>
                            
                            <Link 
                                className={`text-[14px] font-medium transition-colors border-b-2 pb-1 ${
                                    isActivePath('/repository')
                                        ? 'text-[#5b0617] font-bold border-[#5b0617]' 
                                        : 'text-[#564242] hover:text-[#5b0617] border-transparent'
                                }`} 
                                href="/repository"
                            >
                                Repositorio
                            </Link>
                            
                            <Link 
                                className={`text-[14px] font-medium transition-colors border-b-2 pb-1 ${
                                    isActivePath('/resources')
                                        ? 'text-[#5b0617] font-bold border-[#5b0617]' 
                                        : 'text-[#564242] hover:text-[#5b0617] border-transparent'
                                }`} 
                                href="/resources"
                            >
                                Recursos
                            </Link>

                            <Link 
                                className={`text-[14px] font-medium transition-colors border-b-2 pb-1 ${
                                    isActivePath('/foro')
                                        ? 'text-[#5b0617] font-bold border-[#5b0617]' 
                                        : 'text-[#564242] hover:text-[#5b0617] border-transparent'
                                }`} 
                                href="/foro"
                            >
                                Foro
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Selector de Idioma */}
                        <div className="flex items-center border border-[#dcc0c0] rounded-full px-2.5 py-1 text-[12px] font-bold bg-white text-[#564242] shadow-sm">
                            <span className="material-symbols-outlined text-[14px] mr-1 text-[#5b0617]">language</span>
                            <button 
                                onClick={() => setCurrentLang('es')}
                                className={`px-1 cursor-pointer transition-colors ${currentLang === 'es' ? 'text-[#5b0617] font-black' : 'text-[#897172] hover:text-[#5b0617]'}`}
                                title="Español"
                            >
                                ES
                            </button>
                            <span className="text-[#dcc0c0] text-[10px]">|</span>
                            <button 
                                onClick={() => setCurrentLang('en')}
                                className={`px-1 cursor-pointer transition-colors ${currentLang === 'en' ? 'text-[#5b0617] font-black' : 'text-[#897172] hover:text-[#5b0617]'}`}
                                title="English"
                            >
                                EN
                            </button>
                            <span className="text-[#dcc0c0] text-[10px]">|</span>
                            <button 
                                onClick={() => setCurrentLang('pt')}
                                className={`px-1 cursor-pointer transition-colors ${currentLang === 'pt' ? 'text-[#5b0617] font-black' : 'text-[#897172] hover:text-[#5b0617]'}`}
                                title="Português"
                            >
                                PT
                            </button>
                        </div>

                        {/* Botón de Contacto Institucional */}
                        <Link href="/contact">
                            <button className="bg-[#5b0617] text-white px-5 py-2 rounded-full text-[13px] md:text-[14px] font-semibold hover:opacity-90 transition-all cursor-pointer shadow-sm">
                                Contacto
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
