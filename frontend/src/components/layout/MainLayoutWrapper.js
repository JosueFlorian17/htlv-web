"use client";

import Footer from './Footer';

export default function MainLayoutWrapper({ children }) {
  return (
    <div className="flex-grow flex flex-col min-h-screen">
      <div className="flex-grow w-full">
        {children}
      </div>
      <Footer />
    </div>
  );
}
