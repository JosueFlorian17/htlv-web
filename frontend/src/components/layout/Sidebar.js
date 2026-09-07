"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  
  const links = [
    { href: '/about', label: 'Sobre HTLV', icon: 'science' },
    { href: '/network', label: 'La Red', icon: 'hub' },
    { href: '/research', label: 'Investigación', icon: 'biotech' },
    { href: '/repository', label: 'Repositorio', icon: 'menu_book' },
    { href: '/resources', label: 'Recursos', icon: 'folder' },
    { href: '/foro', label: 'Foro Comunitario', icon: 'forum' },
    { href: '/contact', label: 'Contacto', icon: 'mail' },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 p-6 bg-[#f3f4f6] border-r border-[#dcc0c0] h-[calc(100vh-80px)] fixed left-0 top-20 z-40">
      <div className="p-2 mb-6">
        <h2 className="text-[20px] font-bold text-[#5b0617]">Navegación</h2>
        <p className="text-[#564242] text-[13px] font-medium opacity-80">Red Global de Investigación</p>
      </div>
      <nav className="flex flex-col gap-2 px-1">
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 p-3 rounded-lg text-[14px] transition-all font-medium ${
                isActive
                  ? 'text-[#5b0617] font-bold bg-[#ffdada]'
                  : 'text-[#564242] hover:bg-[#e7e8ea]'
              }`}
            >
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "" }}
              >
                {link.icon}
              </span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto p-2">
        <div className="p-3 bg-white border border-[#dcc0c0] rounded-lg text-center shadow-xs">
          <p className="text-[11px] font-bold text-[#5b0617] uppercase tracking-wider mb-1">Autoridad Científica</p>
          <p className="text-[11px] text-[#564242]">Liderado con el respaldo de UPCH e instituciones globales.</p>
        </div>
      </div>
    </aside>
  );
}
