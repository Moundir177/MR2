'use client';

import { useLanguage } from './LanguageContext';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇩🇿' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 rounded-md px-2 py-1 text-sm font-medium text-neutral-700 hover:bg-neutral-100 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className={language === 'ar' ? 'font-arabic' : ''}>{currentLanguage?.name}</span>
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as 'fr' | 'ar' | 'en');
                  setIsOpen(false);
                }}
                className={`${
                  language === lang.code ? 'bg-primary-50 text-primary-700' : 'text-neutral-700'
                } flex w-full items-center px-4 py-2 text-sm hover:bg-neutral-50`}
                role="menuitem"
              >
                <span className="mr-2 text-lg">{lang.flag}</span>
                <span className={lang.code === 'ar' ? 'font-arabic' : ''}>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 