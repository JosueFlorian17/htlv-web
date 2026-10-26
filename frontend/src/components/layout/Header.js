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

    // Estructura acordada
    const menuStructure = [
        {
            title: lang === 'es' ? 'Acerca de la Red' : 'About the Network',
            href: '/about?tab=quienes-somos',
            basePath: '/about',
            items: [
                { label: lang === 'es' ? '¿Quiénes somos?' : '¿Who are we?', href: '/about?tab=quienes-somos' },
                { label: lang === 'es' ? 'Objetivos' : 'Objectives', href: '/about?tab=objetivos' },
                { label: lang === 'es' ? 'Estructura y gobernanza' : 'Structure & governance', href: '/about?tab=estructura' },
                { label: lang === 'es' ? 'Instituciones miembros' : 'Member institutions', href: '/about?tab=miembros' },
                { label: lang === 'es' ? 'Financiamiento' : 'Funding', href: '/about?tab=financiamiento' }
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
                { label: lang === 'es' ? 'Guías clínicas internacionales' : 'International clinical guidelines', href: '/profesionales?tab=recursos' },
                { label: lang === 'es' ? 'Webinars' : 'Webinars', href: '/profesionales?tab=webinars' },
                { label: lang === 'es' ? 'Cursos' : 'Courses', href: '/profesionales?tab=cursos' }
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
            items: null
        },
        {
            title: lang === 'es' ? 'Contacto' : 'Contact',
            href: '/contact',
            basePath: '/contact',
            items: null
        }
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 h-24 sm:h-28 md:h-32 w-full z-50 transition-all duration-200 ${
            isScrolled 
                ? 'bg-[#001D2C] shadow-xl border-b border-white/10' 
                : 'bg-[#002538] border-b border-white/10'
        }`}>
            <div className="w-full h-full flex items-center justify-between">
                
                {/* Logo Principal Oficial (Bloque de fondo blanco con mínimo padding para aprovechar todo el espacio) */}
                <Link 
                    href="/" 
                    className="h-full bg-white px-1 sm:px-1.5 flex items-center justify-center shrink-0 border-r border-[#CBD5E1] shadow-xs hover:bg-slate-50 transition-colors py-0.5" 
                    title={lang === 'es' ? "Ir al Inicio" : "Go to Home"}
                >
                    <img 
                        src={lang === 'es' ? "/logos/LogoRedHTLV_PNG_ES.png" : "/logos/LogoHTLVNetwork_PNG_EN.png"}
                        alt={lang === 'es' ? "Logo Oficial Red HTLV" : "Official HTLV Network Logo"}
                        className="h-[92%] w-auto object-contain max-w-[340px] sm:max-w-[420px] md:max-w-[480px]"
                    />
                </Link>

                {/* Contenedor de Navegación e Idioma a la derecha */}
                <div className="flex items-center justify-end gap-2 sm:gap-4 lg:gap-5 px-2 sm:px-4 md:px-6 flex-1 min-w-0">
                    
                    {/* Menú de Escritorio con Desplegables en Hover (visible en 2xl para evitar colapsos o saltos de línea en laptops) */}
                    <nav className="hidden 2xl:flex items-center gap-1 shrink-0">
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
                                    {/* Si tiene opciones múltiples, el botón padre NO es un enlace clickable, solo despliega en hover */}
                                    {hasItems ? (
                                        <button
                                            type="button"
                                            className={`px-2.5 2xl:px-3 py-2 rounded-lg text-[15px] 2xl:text-[17px] font-semibold transition-colors flex items-center gap-1 cursor-default whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A400] ${
                                                active 
                                                    ? 'text-[#E5A400] bg-white/10' 
                                                    : 'text-white/90 hover:text-[#E5A400] hover:bg-white/5'
                                            }`}
                                        >
                                            <span className="whitespace-nowrap">{menu.title}</span>
                                            <span className="material-symbols-outlined text-[17px] transition-transform duration-150 group-hover:rotate-180 text-white/50 group-hover:text-[#E5A400]">
                                                expand_more
                                            </span>
                                        </button>
                                    ) : (
                                        <Link
                                            href={menu.href}
                                            className={`px-2.5 2xl:px-3 py-2 rounded-lg text-[15px] 2xl:text-[17px] font-semibold transition-colors flex items-center gap-1 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A400] ${
                                                active 
                                                    ? 'text-[#E5A400] bg-white/10' 
                                                    : 'text-white/90 hover:text-[#E5A400] hover:bg-white/5'
                                            }`}
                                        >
                                            <span className="whitespace-nowrap">{menu.title}</span>
                                        </Link>
                                    )}

                                    {/* Desplegable al hacer Hover (Solo los elementos internos son clickables) */}
                                    {hasItems && (
                                        <div className="absolute top-[85%] left-0 pt-2 hidden group-hover:block z-50">
                                            <div className="bg-[#001D2C] rounded-xl shadow-xl border border-white/10 py-2 min-w-[280px] animate-fadeIn">
                                                <div className="px-4 py-1.5 border-b border-white/10 text-xs font-semibold uppercase tracking-wider text-[#1E9CD7]">
                                                    {menu.title}
                                                </div>
                                                <div className="py-1">
                                                    {menu.items.map((subItem, sIdx) => (
                                                        <Link
                                                            key={sIdx}
                                                            href={subItem.href}
                                                            className="block px-4 py-2 text-[15px] font-medium text-white/85 hover:bg-white/10 hover:text-[#E5A400] transition-colors focus-visible:outline-none focus-visible:bg-white/10"
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
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <div className="flex items-center border border-white/20 rounded-full p-0.5 bg-white/5">
                            <button 
                                onClick={() => setLang('es')}
                                className={`px-2.5 sm:px-3 py-1 rounded-full text-[13px] sm:text-[14px] font-bold cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A400] ${
                                    lang === 'es' ? 'bg-[#E5A400] text-[#002538]' : 'text-white/70 hover:text-white'
                                }`}
                                aria-label="Español"
                            >
                                ES
                            </button>
                            <button 
                                onClick={() => setLang('en')}
                                className={`px-2.5 sm:px-3 py-1 rounded-full text-[13px] sm:text-[14px] font-bold cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A400] ${
                                    lang === 'en' ? 'bg-[#E5A400] text-[#002538]' : 'text-white/70 hover:text-white'
                                }`}
                                aria-label="English"
                            >
                                EN
                            </button>
                        </div>

                        {/* Botón Móvil Hamburguesa (visible cuando no está en pantalla extra grande) */}
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="2xl:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A400]"
                            aria-label="Menú"
                        >
                            <span className="material-symbols-outlined text-2xl">
                                {isMobileMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>

                </div>

            </div>

            {/* Menú Desplegable Móvil y Laptops compactas */}
            {isMobileMenuOpen && (
                <div className="2xl:hidden fixed inset-x-0 top-24 sm:top-28 md:top-32 bg-[#002538] border-b border-white/15 shadow-2xl py-6 px-6 z-50 max-h-[calc(100vh-100px)] overflow-y-auto">
                    <nav className="space-y-4">
                        {menuStructure.map((menu, idx) => (
                            <div key={idx} className="space-y-1">
                                {menu.items ? (
                                    <div className="font-bold text-base text-white py-1.5 border-b border-white/10 flex items-center justify-between">
                                        <span>{menu.title}</span>
                                        <span className="material-symbols-outlined text-sm text-[#E5A400]">expand_more</span>
                                    </div>
                                ) : (
                                    <Link
                                        href={menu.href}
                                        className="block font-bold text-base text-white hover:text-[#E5A400] py-1.5 border-b border-white/10"
                                    >
                                        {menu.title}
                                    </Link>
                                )}
                                {menu.items && (
                                    <div className="pl-3 space-y-1 pt-1">
                                        {menu.items.map((sub, sIdx) => (
                                             <Link
                                                 key={sIdx}
                                                 href={sub.href}
                                                 className="block text-sm font-medium text-white/80 hover:text-[#E5A400] py-1"
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
