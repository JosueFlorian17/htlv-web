"use client";

import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function MainLayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // List of paths that need a sidebar
  const sidebarPaths = [
    '/network',
    '/research',
    '/resources',
    '/opportunities',
    '/news',
    '/contact'
  ];
  
  const hasSidebar = sidebarPaths.some(
    (path) => pathname === path || pathname.startsWith(path + '/')
  );

  return (
    <div className="flex-grow flex flex-col">
      {hasSidebar ? (
        <div className="flex-grow flex flex-col lg:pl-64 relative w-full">
          <Sidebar />
          <div className="flex-grow flex flex-col w-full min-w-0">
            <div className="flex-grow w-full max-w-[1280px]">
              {children}
            </div>
            <Footer hasSidebar={true} />
          </div>
        </div>
      ) : (
        <div className="flex-grow flex flex-col">
          <div className="flex-grow w-full">
            {children}
          </div>
          <Footer hasSidebar={false} />
        </div>
      )}
    </div>
  );
}
