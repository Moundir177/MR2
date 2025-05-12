'use client';

import { useLanguage } from './LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const { language } = useLanguage();

  const heroContent = {
    title: {
      fr: 'Bienvenue à MIRA ACADEMY',
      ar: 'مرحباً بكم في أكاديمية ميرا',
      en: 'Welcome to MIRA ACADEMY',
    },
    subtitle: {
      fr: 'Votre partenaire pour l\'excellence académique et professionnelle',
      ar: 'شريكك للتميز الأكاديمي والمهني',
      en: 'Your partner for academic and professional excellence',
    },
    cta: {
      fr: 'Découvrir nos cours',
      ar: 'اكتشف دوراتنا',
      en: 'Discover our courses',
    },
    secondaryCta: {
      fr: 'En savoir plus',
      ar: 'معرفة المزيد',
      en: 'Learn more',
    },
  };

  return (
    <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <svg className="h-full w-full" viewBox="0 0 800 800">
            <defs>
              <pattern id="pattern-circles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="24" fill="currentColor" className="text-primary-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 transform lg:translate-x-1/2 xl:-translate-y-1/2">
          <div className="h-72 w-72 rounded-full bg-secondary-500 opacity-20 blur-3xl filter lg:h-96 lg:w-96"></div>
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 transform lg:-translate-x-1/2 xl:translate-y-1/2">
          <div className="h-72 w-72 rounded-full bg-accent-500 opacity-20 blur-3xl filter lg:h-96 lg:w-96"></div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-24 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <div>
              <h1 
                className={`text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl ${
                  language === 'ar' ? 'font-arabic text-right' : ''
                }`}
              >
                {heroContent.title[language as keyof typeof heroContent.title]}
              </h1>
              <p 
                className={`mt-6 max-w-lg text-xl text-primary-100 sm:max-w-3xl ${
                  language === 'ar' ? 'font-arabic text-right' : ''
                }`}
              >
                {heroContent.subtitle[language as keyof typeof heroContent.subtitle]}
              </p>
              <div className={`mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 ${
                language === 'ar' ? 'justify-end' : ''
              }`}>
                <Link
                  href="/courses"
                  className={`rounded-md bg-secondary-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {heroContent.cta[language as keyof typeof heroContent.cta]}
                </Link>
                <Link
                  href="/about"
                  className={`rounded-md bg-primary-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {heroContent.secondaryCta[language as keyof typeof heroContent.secondaryCta]}
                </Link>
              </div>
              <div className="mt-16 flex items-center justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="relative h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                      <div className={`h-full w-full bg-primary-${300 + (i * 100)} flex items-center justify-center text-white text-xs font-bold`}>
                        {String.fromCharCode(64 + i)}
                      </div>
                    </div>
                  ))}
                </div>
                <p className={`ms-4 text-sm font-medium text-primary-100 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'fr' 
                    ? 'Rejoignez +1000 étudiants' 
                    : language === 'ar' 
                      ? 'انضم إلى +1000 طالب'
                      : 'Join +1000 students'}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-[400px] lg:h-[500px] lg:w-[500px]">
              <div className="absolute inset-0 rounded-full bg-accent-500 opacity-20 blur-3xl filter"></div>
              <div className="relative h-full w-full overflow-hidden rounded-xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-transparent"></div>
                <div className="h-full w-full bg-white">
                  {/* Placeholder for image */}
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-100 to-accent-100">
                    <span className="text-4xl font-bold text-primary-900">MIRA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 