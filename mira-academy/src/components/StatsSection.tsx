'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

type StatItem = {
  id: string;
  value: number;
  label: {
    fr: string;
    ar: string;
    en: string;
  };
  icon: React.ReactNode;
  suffix?: string;
};

export default function StatsSection() {
  const { language } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionText = {
    title: {
      fr: 'MIRA ACADEMY en Chiffres',
      ar: 'أكاديمية ميرا بالأرقام',
      en: 'MIRA ACADEMY in Numbers',
    },
    subtitle: {
      fr: 'Découvrez notre impact sur l\'éducation en Algérie',
      ar: 'اكتشف تأثيرنا على التعليم في الجزائر',
      en: 'Discover our impact on education in Algeria',
    },
  };

  const stats: StatItem[] = [
    {
      id: 'students',
      value: 5000,
      label: {
        fr: 'Étudiants Formés',
        ar: 'الطلاب المدربين',
        en: 'Students Trained',
      },
      icon: (
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      suffix: '+',
    },
    {
      id: 'courses',
      value: 50,
      label: {
        fr: 'Cours Proposés',
        ar: 'الدورات المقدمة',
        en: 'Courses Offered',
      },
      icon: (
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      suffix: '+',
    },
    {
      id: 'instructors',
      value: 30,
      label: {
        fr: 'Instructeurs Experts',
        ar: 'مدربين خبراء',
        en: 'Expert Instructors',
      },
      icon: (
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      suffix: '+',
    },
    {
      id: 'years',
      value: 10,
      label: {
        fr: 'Années d\'Expérience',
        ar: 'سنوات الخبرة',
        en: 'Years of Experience',
      },
      icon: (
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      suffix: '+',
    },
  ];

  // Animated counter component
  const Counter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (inView) {
        let start = 0;
        const end = value;
        const duration = 2000; // ms
        const increment = end / (duration / 16); // 60fps
        
        const timer = setInterval(() => {
          start += increment;
          if (start > end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        
        return () => clearInterval(timer);
      }
    }, [inView, value]);
    
    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 
            className={`text-3xl font-bold text-neutral-900 sm:text-4xl ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {sectionText.title[language]}
          </h2>
          <p 
            className={`mt-4 text-lg text-neutral-600 max-w-3xl mx-auto ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {sectionText.subtitle[language]}
          </p>
        </motion.div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              className="bg-white rounded-lg shadow-md p-6 text-center"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600 mb-4">
                {stat.icon}
              </div>
              <div 
                className={`text-4xl font-bold text-primary-600 mb-2 ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {inView ? (
                  <Counter value={stat.value} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix || ''}`
                )}
              </div>
              <div 
                className={`text-neutral-600 font-medium ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {stat.label[language]}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 