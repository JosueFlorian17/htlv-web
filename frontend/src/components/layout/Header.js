"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentLang, setCurrentLang] = useState('es');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    // Cerrar menú móvil al cambiar de ruta
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const isActivePath = (path) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(path);
    };

    const navLinks = [
        { href: '/', label: 'Inicio' },
        { href: '/about', label: 'Acerca de' },
        { href: '/htlv', label: 'HTLV' },
        { href: '/proyectos', label: 'Proyectos' },
        { href: '/profesionales', label: 'Profesionales de la salud' },
        { href: '/pacientes', label: 'Pacientes' },
        { href: '/publicaciones', label: 'Publicaciones' },
        { href: '/contact', label: 'Contacto' },
    ];

    return (
        <>
            {/* Google Material Symbols */}
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

            {/* TopNavBar Principal */}
            <header className={`fixed top-0 left-0 right-0 h-20 w-full z-50 bg-[#f8f9fb] transition-all duration-200 ${isScrolled ? 'shadow-md border-b border-[#dcc0c0]' : 'border-b border-[#e5d5d5]'}`}>
                <div className="max-w-[1360px] mx-auto w-full h-full flex justify-between items-center px-4 md:px-8">
                    
                    {/* Logotipo Principal - Más visible y destacado */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-11 h-11 rounded-xl bg-[#5b0617] text-white flex items-center justify-center font-black text-xl shadow-sm group-hover:scale-105 transition-transform">
                                R
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[22px] md:text-[25px] font-black text-[#5b0617] tracking-tight leading-none group-hover:opacity-90 transition-opacity">
                                    RIII-HTLV
                                </span>
                                <span className="text-[10px] md:text-[11px] font-bold text-[#897172] tracking-wider uppercase mt-0.5">
                                    Red Internacional HTLV
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Menú de Navegación de Escritorio (7 Secciones Acordadas + Contacto) */}
                    <nav className="hidden xl:flex items-center gap-1 lg:gap-2">
                        {navLinks.map((link) => {
                            const active = isActivePath(link.href);
                            return (
                                <Link 
                                    key={link.href}
                                    href={link.href}
                                    className={`px-3 py-1.5 rounded-lg text-[13.5px] font-semibold transition-all ${
                                        active 
                                            ? 'text-[#5b0617] bg-[#ffdada]/60 font-bold' 
                                            : 'text-[#564242] hover:text-[#5b0617] hover:bg-black/5'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Selector de Idioma e Interacción */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center border border-[#dcc0c0] rounded-full px-2.5 py-1 text-[12px] font-bold bg-white text-[#564242] shadow-xs">
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

                        {/* Botón Móvil Hamburguesa */}
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="xl:hidden p-2 rounded-lg text-[#5b0617] hover:bg-[#ffdada]/30 transition-colors focus:outline-none"
                            aria-label="Abrir menú de navegación"
                        >
                            <span className="material-symbols-outlined text-3xl">
                                {isMobileMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Menú Desplegable Móvil */}
                {isMobileMenuOpen && (
                    <div className="xl:hidden fixed inset-x-0 top-20 bg-[#f8f9fb] border-b border-[#dcc0c0] shadow-xl py-4 px-6 z-40 max-h-[calc(100vh-80px)] overflow-y-auto animate-fadeIn">
                        <nav className="flex flex-col space-y-1">
                            {navLinks.map((link) => {
                                const active = isActivePath(link.href);
                                return (
                                    <Link 
                                        key={link.href}
                                        href={link.href}
                                        className={`px-4 py-3 rounded-xl text-[15px] font-bold transition-all flex items-center justify-between ${
                                            active 
                                                ? 'bg-[#5b0617] text-white' 
                                                : 'text-[#564242] hover:bg-[#ffdada]/40 hover:text-[#5b0617]'
                                        }`}
                                    >
                                        <span>{link.label}</span>
                                        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
}
