'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';

// Multi-language content
const content = {
  title: {
    en: "Career Path Programs",
    fr: "Programmes de Carrière",
    ar: "برامج المسار المهني",
  },
  subtitle: {
    en: "Comprehensive learning paths designed to transform your career",
    fr: "Des parcours d'apprentissage complets conçus pour transformer votre carrière",
    ar: "مسارات تعليمية شاملة مصممة لتحويل مسارك المهني",
  },
  duration: {
    en: "Duration",
    fr: "Durée",
    ar: "المدة",
  },
  level: {
    en: "Level",
    fr: "Niveau",
    ar: "المستوى",
  },
  months: {
    en: "months",
    fr: "mois",
    ar: "أشهر",
  },
  courses: {
    en: "courses",
    fr: "cours",
    ar: "دورات",
  },
  job: {
    en: "Target Job",
    fr: "Emploi Cible",
    ar: "الوظيفة المستهدفة",
  },
  viewProgram: {
    en: "View Program",
    fr: "Voir le Programme",
    ar: "عرض البرنامج",
  },
  exploreAll: {
    en: "Explore All Programs",
    fr: "Explorer Tous les Programmes",
    ar: "استكشاف جميع البرامج",
  },
};

// Program data
const programs = [
  {
    id: 1,
    title: {
      en: "Full Stack Web Developer",
      fr: "Développeur Web Full Stack",
      ar: "مطور ويب متكامل",
    },
    description: {
      en: "Master front-end and back-end development from scratch, culminating in a professional portfolio of web applications.",
      fr: "Maîtrisez le développement front-end et back-end à partir de zéro, pour créer un portfolio professionnel d'applications web.",
      ar: "أتقن تطوير الواجهة الأمامية والخلفية من الصفر، وصولاً إلى إنشاء محفظة احترافية من تطبيقات الويب.",
    },
    courses: 5,
    duration: 6,
    image: "🖥️",
    level: {
      en: "Beginner to Advanced",
      fr: "Débutant à Avancé",
      ar: "من المبتدئ إلى المتقدم",
    },
    job: {
      en: "Full Stack Developer",
      fr: "Développeur Full Stack",
      ar: "مطور ويب متكامل",
    },
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    title: {
      en: "Data Science Professional",
      fr: "Professionnel en Science des Données",
      ar: "محترف علم البيانات",
    },
    description: {
      en: "Develop expertise in data analysis, machine learning, and AI applications to solve complex business problems.",
      fr: "Développez une expertise en analyse de données, apprentissage automatique et applications d'IA pour résoudre des problèmes commerciaux complexes.",
      ar: "طور خبرتك في تحليل البيانات والتعلم الآلي وتطبيقات الذكاء الاصطناعي لحل المشاكل التجارية المعقدة.",
    },
    courses: 6,
    duration: 8,
    image: "📊",
    level: {
      en: "Intermediate to Advanced",
      fr: "Intermédiaire à Avancé",
      ar: "من المتوسط إلى المتقدم",
    },
    job: {
      en: "Data Scientist",
      fr: "Scientifique des Données",
      ar: "عالم بيانات",
    },
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    title: {
      en: "UX/UI Design Specialist",
      fr: "Spécialiste en Design UX/UI",
      ar: "أخصائي تصميم UX/UI",
    },
    description: {
      en: "Learn to create beautiful, user-centered designs and interfaces that engage users and deliver business results.",
      fr: "Apprenez à créer des designs et des interfaces beaux et centrés sur l'utilisateur qui engagent les utilisateurs et produisent des résultats commerciaux.",
      ar: "تعلم إنشاء تصميمات وواجهات جميلة تركز على المستخدم وتجذب المستخدمين وتحقق نتائج الأعمال.",
    },
    courses: 4,
    duration: 5,
    image: "🎨",
    level: {
      en: "Beginner to Intermediate",
      fr: "Débutant à Intermédiaire",
      ar: "من المبتدئ إلى المتوسط",
    },
    job: {
      en: "UX/UI Designer",
      fr: "Designer UX/UI",
      ar: "مصمم UX/UI",
    },
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 4,
    title: {
      en: "Cloud Engineering Path",
      fr: "Parcours d'Ingénierie Cloud",
      ar: "مسار هندسة السحابة",
    },
    description: {
      en: "Build expertise in cloud infrastructure, DevOps practices, and platform engineering for modern applications.",
      fr: "Acquérez une expertise en infrastructure cloud, pratiques DevOps et ingénierie de plateforme pour les applications modernes.",
      ar: "بناء الخبرة في البنية التحتية السحابية وممارسات DevOps وهندسة المنصات للتطبيقات الحديثة.",
    },
    courses: 5,
    duration: 7,
    image: "☁️",
    level: {
      en: "Intermediate to Advanced",
      fr: "Intermédiaire à Avancé",
      ar: "من المتوسط إلى المتقدم",
    },
    job: {
      en: "Cloud Engineer",
      fr: "Ingénieur Cloud",
      ar: "مهندس سحابة",
    },
    color: "from-teal-500 to-emerald-600",
  },
];

export default function FeaturedPrograms() {
  const { language } = useLanguage();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {content.title[language as keyof typeof content.title]}
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'ar' ? 'font-arabic' : ''}`}>
            {content.subtitle[language as keyof typeof content.subtitle]}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full transform transition-transform hover:scale-105"
            >
              <div className={`bg-gradient-to-r ${program.color} text-white p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl">{program.image}</span>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs">
                    {program.courses} {content.courses[language as keyof typeof content.courses]}
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {program.title[language as keyof typeof program.title]}
                </h3>
              </div>
              
              <div className="p-6 flex-grow">
                <p className={`text-gray-600 mb-4 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {program.description[language as keyof typeof program.description]}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className={`text-xs text-gray-500 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                      {content.duration[language as keyof typeof content.duration]}
                    </p>
                    <p className={`font-medium ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                      {program.duration} {content.months[language as keyof typeof content.months]}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className={`text-xs text-gray-500 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                      {content.level[language as keyof typeof content.level]}
                    </p>
                    <p className={`font-medium text-sm ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                      {program.level[language as keyof typeof program.level]}
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className={`text-xs text-gray-500 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                    {content.job[language as keyof typeof content.job]}
                  </p>
                  <p className={`font-medium ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                    {program.job[language as keyof typeof program.job]}
                  </p>
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <Link
                  href={`/programs/${program.id}`}
                  className={`block w-full text-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {content.viewProgram[language as keyof typeof content.viewProgram]}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            href="/programs"
            className={`inline-block px-6 py-3 border-2 border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {content.exploreAll[language as keyof typeof content.exploreAll]}
          </Link>
        </div>
      </div>
    </section>
  );
} 