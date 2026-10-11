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
    const [activeDropdown, setActiveDropdown] = useState(null);

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
        setActiveDropdown(null);
    }, [pathname]);

    const isActive = (path) => {
        return pathname === path || pathname.startsWith(path + '/');
    };

    // Estructura exacta solicitada por el usuario
    const menuStructure = [
        {
            title: lang === 'es' ? 'Acerca de la Red' : 'About the Network',
            href: '/about?tab=quienes-somos',
            basePath: '/about',
            items: [
                { label: lang === 'es' ? 'Quiénes somos y objetivos' : 'About us & objectives', href: '/about?tab=quienes-somos' },
                { label: lang === 'es' ? 'Estructura y gobernanza' : 'Structure & governance', href: '/about?tab=estructura' },
                { label: lang === 'es' ? 'Instituciones miembros' : 'Member institutions', href: '/about?tab=miembros' },
                { label: lang === 'es' ? 'Aliados estratégicos' : 'Strategic allies', href: '/about?tab=aliados' }
            ]
        },
        {
            title: 'HTLV',
            href: '/htlv?tab=que-es',
            basePath: '/htlv',
            items: [
                { label: lang === 'es' ? '¿Qué es el HTLV?' : 'What is HTLV?', href: '/htlv?tab=que-es' },
                { label: lang === 'es' ? 'Preguntas frecuentes' : 'Frequently Asked Questions', href: '/htlv?tab=faqs' }
            ]
        },
        {
            title: lang === 'es' ? 'Proyectos' : 'Projects',
            href: '/proyectos?tab=investigacion',
            basePath: '/proyectos',
            items: [
                { label: lang === 'es' ? 'Proyectos de investigación' : 'Research projects', href: '/proyectos?tab=investigacion' },
                { label: lang === 'es' ? 'Resultados y avances' : 'Results & breakthroughs', href: '/proyectos?tab=avances' },
                { label: lang === 'es' ? 'Oportunidades para tesistas' : 'Opportunities for researchers', href: '/proyectos?tab=tesistas' }
            ]
        },
        {
            title: lang === 'es' ? 'Profesionales de la salud' : 'Health Professionals',
            href: '/profesionales?tab=recursos',
            basePath: '/profesionales',
            items: [
                { label: lang === 'es' ? 'Recursos clínicos' : 'Clinical resources', href: '/profesionales?tab=recursos' },
                { label: lang === 'es' ? 'Webinars' : 'Webinars', href: '/profesionales?tab=webinars' },
                { label: lang === 'es' ? 'Cursos cortos' : 'Short courses', href: '/profesionales?tab=cursos' }
            ]
        },
        {
            title: lang === 'es' ? 'Pacientes' : 'Patients',
            href: '/pacientes?tab=faqs',
            basePath: '/pacientes',
            items: [
                { label: lang === 'es' ? 'Preguntas frecuentes' : 'Frequently Asked Questions', href: '/pacientes?tab=faqs' },
                { label: lang === 'es' ? 'Recursos de apoyo' : 'Support resources', href: '/pacientes?tab=recursos' },
                { label: lang === 'es' ? 'Haz tu pregunta' : 'Ask your question', href: '/pacientes?tab=haz-tu-pregunta' }
            ]
        },
        {
            title: lang === 'es' ? 'Publicaciones' : 'Publications',
            href: '/publicaciones',
            basePath: '/publicaciones',
            items: null // enlace directo
        },
        {
            title: lang === 'es' ? 'Contacto' : 'Contact',
            href: '/contact',
            basePath: '/contact',
            items: null // enlace directo
        }
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 h-20 w-full z-50 bg-white transition-all duration-200 ${isScrolled ? 'shadow-md border-b border-[#087E8B]/20' : 'border-b border-gray-200'}`}>
            <div className="max-w-[1400px] mx-auto w-full h-full flex justify-between items-center px-4 md:px-8">
                
                {/* Logo Principal (Clickable para ir a Inicio) */}
                <Link href="/" className="flex items-center gap-3 group" title="Ir al Inicio">
                    <div className="w-12 h-12 rounded-2xl bg-[#003B49] text-white flex items-center justify-center font-black text-2xl shadow-sm group-hover:scale-105 transition-transform">
                        R
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[24px] md:text-[26px] font-black text-[#003B49] tracking-tight leading-none group-hover:text-[#A10D3A] transition-colors">
                            RIII-HTLV
                        </span>
                        <span className="text-[11px] font-extrabold text-[#087E8B] tracking-wider uppercase mt-1">
                            {lang === 'es' ? 'Red Internacional HTLV' : 'International HTLV Network'}
                        </span>
                    </div>
                </Link>

                {/* Menú de Escritorio con Desplegables en Hover */}
                <nav className="hidden xl:flex items-center gap-1">
                    {menuStructure.map((menu, idx) => {
                        const active = isActive(menu.basePath);
                        const hasItems = menu.items && menu.items.length > 0;

                        return (
                            <div 
                                key={idx}
                                className="relative group py-6"
                                onMouseEnter={() => setActiveDropdown(menu.title)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={menu.href}
                                    className={`px-3 py-2 rounded-xl text-[15px] font-bold transition-all flex items-center gap-1 ${
                                        active 
                                            ? 'text-[#A10D3A] bg-[#A10D3A]/10' 
                                            : 'text-[#003B49] hover:text-[#A10D3A] hover:bg-gray-100'
                                    }`}
                                >
                                    <span>{menu.title}</span>
                                    {hasItems && (
                                        <span className="material-symbols-outlined text-[16px] transition-transform group-hover:rotate-180 text-gray-500">
                                            expand_more
                                        </span>
                                    )}
                                </Link>

                                {/* Desplegable al hacer Hover */}
                                {hasItems && (
                                    <div className="absolute top-[85%] left-0 pt-2 hidden group-hover:block z-50">
                                        <div className="bg-white rounded-2xl shadow-xl border-2 border-[#003B49]/15 py-3 min-w-[260px] animate-fadeIn">
                                            <div className="px-4 pb-2 border-b border-gray-100 text-[11px] font-black uppercase tracking-wider text-[#087E8B]">
                                                {menu.title}
                                            </div>
                                            <div className="pt-1">
                                                {menu.items.map((subItem, sIdx) => (
                                                    <Link
                                                        key={sIdx}
                                                        href={subItem.href}
                                                        className="block px-4 py-2.5 text-[14px] font-bold text-[#003B49] hover:bg-[#A10D3A]/10 hover:text-[#A10D3A] transition-colors"
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>

                {/* Selector de Idiomas (Solo ES y EN) */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center border-2 border-[#003B49]/20 rounded-full p-1 bg-white shadow-xs">
                        <button 
                            onClick={() => setLang('es')}
                            className={`px-3 py-1 rounded-full text-[13px] font-black cursor-pointer transition-all ${lang === 'es' ? 'bg-[#003B49] text-white' : 'text-gray-500 hover:text-[#003B49]'}`}
                        >
                            ES
                        </button>
                        <button 
                            onClick={() => setLang('en')}
                            className={`px-3 py-1 rounded-full text-[13px] font-black cursor-pointer transition-all ${lang === 'en' ? 'bg-[#003B49] text-white' : 'text-gray-500 hover:text-[#003B49]'}`}
                        >
                            EN
                        </button>
                    </div>

                    {/* Botón Móvil Hamburguesa */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="xl:hidden p-2 rounded-xl text-[#003B49] hover:bg-gray-100 transition-colors"
                        aria-label="Menú"
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {isMobileMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>

            </div>

            {/* Menú Desplegable Móvil */}
            {isMobileMenuOpen && (
                <div className="xl:hidden fixed inset-x-0 top-20 bg-white border-b-2 border-[#003B49]/20 shadow-2xl py-6 px-6 z-50 max-h-[calc(100vh-80px)] overflow-y-auto">
                    <nav className="space-y-4">
                        {menuStructure.map((menu, idx) => (
                            <div key={idx} className="space-y-1">
                                <Link
                                    href={menu.href}
                                    className="block font-black text-[17px] text-[#003B49] hover:text-[#A10D3A] py-1 border-b border-gray-100"
                                >
                                    {menu.title}
                                </Link>
                                {menu.items && (
                                    <div className="pl-3 space-y-1 pt-1">
                                        {menu.items.map((sub, sIdx) => (
                                            <Link
                                                key={sIdx}
                                                href={sub.href}
                                                className="block text-[14px] font-bold text-gray-700 hover:text-[#A10D3A] py-1"
                                            >
                                                • {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
