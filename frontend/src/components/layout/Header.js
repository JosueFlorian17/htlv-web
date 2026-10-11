"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';

export default function Header() {
    const pathname = usePathname();
    const { lang, setLang, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
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
        return pathname === path || pathname.startsWith(path + '/');
    };

    const navLinks = [
        { href: '/about', label: t('nav_about') },
        { href: '/htlv', label: t('nav_htlv') },
        { href: '/proyectos', label: t('nav_projects') },
        { href: '/profesionales', label: t('nav_professionals') },
        { href: '/pacientes', label: t('nav_patients') },
        { href: '/publicaciones', label: t('nav_publications') },
        { href: '/contact', label: t('nav_contact') },
    ];

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 h-20 w-full z-50 bg-[#f8f9fb] transition-all duration-200 ${isScrolled ? 'shadow-md border-b border-[#dcc0c0]' : 'border-b border-[#e2d4d4]'}`}>
                <div className="max-w-[1400px] mx-auto w-full h-full flex justify-between items-center px-4 md:px-8">
                    
                    {/* Logotipo Principal - Clickable para ir al Inicio */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-3.5 group" title="Ir al Inicio">
                            <div className="w-12 h-12 rounded-xl bg-[#5b0617] text-white flex items-center justify-center font-black text-2xl shadow-xs group-hover:scale-105 transition-transform">
                                R
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[24px] md:text-[27px] font-black text-[#5b0617] tracking-tight leading-none group-hover:opacity-90 transition-opacity">
                                    RIII-HTLV
                                </span>
                                <span className="text-[11.5px] font-bold text-[#897172] tracking-wider uppercase mt-1">
                                    {lang === 'es' ? 'Red Internacional HTLV' : 'International HTLV Network'}
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Menú de Navegación de Escritorio (Sin botón de Inicio, letras más grandes) */}
                    <nav className="hidden xl:flex items-center gap-1.5 lg:gap-2.5">
                        {navLinks.map((link) => {
                            const active = isActivePath(link.href);
                            return (
                                <Link 
                                    key={link.href}
                                    href={link.href}
                                    className={`px-3.5 py-2 rounded-xl text-[15.5px] font-bold transition-all ${
                                        active 
                                            ? 'text-[#5b0617] bg-[#ffdada]/60 shadow-2xs' 
                                            : 'text-[#443333] hover:text-[#5b0617] hover:bg-black/5'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Selector de Idiomas: Solo ES e Inglés */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center border border-[#dcc0c0] rounded-full p-1 bg-white text-[#443333] shadow-xs">
                            <button 
                                onClick={() => setLang('es')}
                                className={`px-3 py-1 rounded-full text-[13px] font-extrabold cursor-pointer transition-all ${lang === 'es' ? 'bg-[#5b0617] text-white shadow-2xs' : 'text-[#897172] hover:text-[#5b0617]'}`}
                                title="Español"
                            >
                                ES
                            </button>
                            <button 
                                onClick={() => setLang('en')}
                                className={`px-3 py-1 rounded-full text-[13px] font-extrabold cursor-pointer transition-all ${lang === 'en' ? 'bg-[#5b0617] text-white shadow-2xs' : 'text-[#897172] hover:text-[#5b0617]'}`}
                                title="English"
                            >
                                EN
                            </button>
                        </div>

                        {/* Botón Móvil Hamburguesa */}
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="xl:hidden p-2 rounded-xl text-[#5b0617] hover:bg-[#ffdada]/30 transition-colors focus:outline-none"
                            aria-label="Abrir menú"
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
                        <nav className="flex flex-col space-y-1.5">
                            {navLinks.map((link) => {
                                const active = isActivePath(link.href);
                                return (
                                    <Link 
                                        key={link.href}
                                        href={link.href}
                                        className={`px-4 py-3.5 rounded-xl text-[16px] font-bold transition-all flex items-center justify-between ${
                                            active 
                                                ? 'bg-[#5b0617] text-white' 
                                                : 'text-[#443333] hover:bg-[#ffdada]/40 hover:text-[#5b0617]'
                                        }`}
                                    >
                                        <span>{link.label}</span>
                                        <span className="material-symbols-outlined text-[20px]">chevron_right</span>
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
