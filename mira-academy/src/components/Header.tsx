'use client';

import { useState } from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from './LanguageContext';
import { useAuth } from './AuthContext';

type NavItem = {
  key: string;
  label: {
    fr: string;
    ar: string;
    en: string;
  };
  href: string;
};

const navItems: NavItem[] = [
  {
    key: 'home',
    label: {
      fr: 'Accueil',
      ar: 'الرئيسية',
      en: 'Home',
    },
    href: '/',
  },
  {
    key: 'courses',
    label: {
      fr: 'Cours',
      ar: 'الدورات',
      en: 'Courses',
    },
    href: '/courses',
  },
  {
    key: 'programs',
    label: {
      fr: 'Programmes',
      ar: 'البرامج',
      en: 'Programs',
    },
    href: '/programs',
  },
  {
    key: 'about',
    label: {
      fr: 'À propos',
      ar: 'من نحن',
      en: 'About',
    },
    href: '/about',
  },
  {
    key: 'contact',
    label: {
      fr: 'Contact',
      ar: 'اتصل بنا',
      en: 'Contact',
    },
    href: '/contact',
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { language } = useLanguage();
  const { user, isAuthenticated, logout, wishlist } = useAuth();
  
  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                MIRA ACADEMY
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  language === 'ar' ? 'font-arabic' : ''
                } border-transparent hover:border-primary-500 hover:text-primary-600 transition-colors`}
              >
                {item.label[language as keyof typeof item.label]}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <LanguageSwitcher />
            
            {isAuthenticated ? (
              <div className="relative ml-3">
                <div className="flex items-center space-x-4">
                  {/* Wishlist Icon */}
                  <Link href="/wishlist" className="relative p-1 text-gray-600 hover:text-primary-600 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {wishlist.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                        {wishlist.length}
                      </span>
                    )}
                  </Link>
                  
                  {/* Notification Icon */}
                  <button className="relative p-1 text-gray-600 hover:text-primary-600 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    {/* Notification badge */}
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                  </button>
                  
                  {/* User Menu */}
                  <div>
                    <button
                      type="button"
                      className="flex items-center max-w-xs rounded-full bg-primary-100 p-1 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      id="user-menu-button"
                      onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    >
                      <span className="sr-only">Open user menu</span>
                      <div className="h-8 w-8 rounded-full flex items-center justify-center bg-primary-500 text-white font-bold">
                        <span>{user?.name.charAt(0) || 'U'}</span>
                      </div>
                    </button>
                  </div>
                </div>
                
                {/* User Menu Dropdown */}
                {isUserMenuOpen && (
                  <div
                    className={`absolute ${language === 'ar' ? 'left-0' : 'right-0'} mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10`}
                    tabIndex={-1}
                  >
                    <Link
                      href="/dashboard"
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${language === 'ar' ? 'font-arabic text-right' : ''}`}
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      {language === 'fr' ? 'Tableau de bord' : language === 'ar' ? 'لوحة القيادة' : 'Dashboard'}
                    </Link>
                    <Link
                      href="/dashboard/profile"
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${language === 'ar' ? 'font-arabic text-right' : ''}`}
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      {language === 'fr' ? 'Profil' : language === 'ar' ? 'الملف الشخصي' : 'Profile'}
                    </Link>
                    <Link
                      href="/wishlist"
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${language === 'ar' ? 'font-arabic text-right' : ''}`}
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      {language === 'fr' ? 'Favoris' : language === 'ar' ? 'المفضلة' : 'Wishlist'}
                      {wishlist.length > 0 && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                          {wishlist.length}
                        </span>
                      )}
                    </Link>
                    <Link
                      href="/dashboard/settings"
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${language === 'ar' ? 'font-arabic text-right' : ''}`}
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      {language === 'fr' ? 'Paramètres' : language === 'ar' ? 'الإعدادات' : 'Settings'}
                    </Link>
                    <div className="border-t border-gray-200 my-1"></div>
                    <button
                      onClick={handleLogout}
                      className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${language === 'ar' ? 'font-arabic text-right' : ''}`}
                    >
                      {language === 'fr' ? 'Déconnexion' : language === 'ar' ? 'تسجيل الخروج' : 'Sign out'}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  href="/login"
                  className={`px-4 py-2 text-sm font-medium rounded-md text-primary-600 border border-primary-500 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {language === 'fr' ? 'Connexion' : language === 'ar' ? 'تسجيل الدخول' : 'Login'}
                </Link>
                <Link
                  href="/enroll"
                  className={`px-4 py-2 text-sm font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {language === 'fr' ? 'S\'inscrire' : language === 'ar' ? 'التسجيل' : 'Sign Up'}
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-50 hover:text-primary-600 ${
                  language === 'ar' ? 'font-arabic text-right' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label[language as keyof typeof item.label]}
              </Link>
            ))}
            
            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  className={`block px-3 py-2 text-base font-medium text-primary-600 hover:bg-neutral-50 ${
                    language === 'ar' ? 'font-arabic text-right' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'fr' ? 'Tableau de bord' : language === 'ar' ? 'لوحة القيادة' : 'Dashboard'}
                </Link>
                <Link
                  href="/wishlist"
                  className={`block px-3 py-2 text-base font-medium text-primary-600 hover:bg-neutral-50 ${
                    language === 'ar' ? 'font-arabic text-right' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'fr' ? 'Favoris' : language === 'ar' ? 'المفضلة' : 'Wishlist'}
                  {wishlist.length > 0 && (
                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {wishlist.length}
                    </span>
                  )}
                </Link>
                <button
                  className={`block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-neutral-50 ${
                    language === 'ar' ? 'font-arabic text-right' : ''
                  }`}
                  onClick={handleLogout}
                >
                  {language === 'fr' ? 'Déconnexion' : language === 'ar' ? 'تسجيل الخروج' : 'Sign out'}
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className={`block px-3 py-2 text-base font-medium text-primary-600 hover:bg-neutral-50 ${
                    language === 'ar' ? 'font-arabic text-right' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'fr' ? 'Connexion' : language === 'ar' ? 'تسجيل الدخول' : 'Login'}
                </Link>
                <Link
                  href="/enroll"
                  className={`block px-3 py-2 text-base font-medium text-primary-600 hover:bg-neutral-50 ${
                    language === 'ar' ? 'font-arabic text-right' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'fr' ? 'S\'inscrire' : language === 'ar' ? 'التسجيل' : 'Sign Up'}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
} 