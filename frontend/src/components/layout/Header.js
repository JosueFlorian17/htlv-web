"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

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

    const isNoticiasActive = () => {
        return pathname === '/news' || pathname.startsWith('/news/') || pathname === '/noticias' || pathname.startsWith('/noticias/');
    };

    return (
        <>
            {/* Iconos de Google Material Symbols oficiales */}
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

            {/* TopNavBar - Restringido al ancho máximo y centrado para pantallas Landscape */}
            <nav className={`fixed top-0 left-0 right-0 h-20 w-full z-50 bg-[#f8f9fb] transition-all duration-200 ${isScrolled ? 'shadow-md' : 'border-b border-[#dcc0c0]'}`}>
                <div className="max-w-[1280px] mx-auto w-full h-full flex justify-between items-center px-10">
                    <div className="flex items-center gap-6">
                        <Link href="/" className="text-[24px] font-bold text-[#5b0617] tracking-tight">RIII-HTLV</Link>
                        <div className="hidden lg:flex items-center gap-4">
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
                                    Nosotros <span className="material-symbols-outlined text-sm">expand_more</span>
                                </button>
                                <div className="absolute top-[80%] left-0 hidden group-hover:block bg-[#f8f9fb] border border-[#dcc0c0] rounded-lg shadow-sm py-2 min-w-[180px] z-50">
                                    <Link 
                                        href="/#what-is-htlv" 
                                        className="block px-4 py-2 text-[14px] font-medium text-[#564242] hover:bg-[#e7e8ea]"
                                    >
                                        ¿Qué es el HTLV?
                                    </Link>
                                    <Link 
                                        href="/network" 
                                        className={`block px-4 py-2 text-[14px] font-medium hover:bg-[#e7e8ea] ${pathname === '/network' ? 'text-[#5b0617] font-bold bg-[#e7e8ea]' : 'text-[#564242]'}`}
                                    >
                                        La Red
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
                                    isActivePath('/opportunities')
                                        ? 'text-[#5b0617] font-bold border-[#5b0617]' 
                                        : 'text-[#564242] hover:text-[#5b0617] border-transparent'
                                }`} 
                                href="/opportunities"
                            >
                                Oportunidades
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
                            <Link 
                                className={`text-[14px] font-medium transition-colors border-b-2 pb-1 ${
                                    isNoticiasActive()
                                        ? 'text-[#5b0617] font-bold border-[#5b0617]' 
                                        : 'text-[#564242] hover:text-[#5b0617] border-transparent'
                                }`} 
                                href="/news"
                            >
                                Noticias
                            </Link>
                        </div>
                    </div>
                    <Link href="/contact">
                        <button className="bg-[#5b0617] text-white px-6 py-2 rounded-full text-[14px] font-medium hover:opacity-90 transition-all cursor-pointer">Contacto</button>
                    </Link>
                </div>
            </nav>
        </>
    );
}
