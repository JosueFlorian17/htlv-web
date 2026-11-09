"use client";

import { useLanguage } from '../../context/LanguageContext';
import FaqSection from '../../components/faqs/FaqSection';

export default function FAQsPage() {
  const { lang } = useLanguage();

  return (
    <main className="w-full bg-slate-50 min-h-[calc(100vh-80px)] py-8 md:py-12 text-slate-900">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <FaqSection lang={lang} />
      </div>
    </main>
  );
}
