'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Instructor = {
  id: string;
  name: string;
  position: {
    fr: string;
    ar: string;
    en: string;
  };
  bio: {
    fr: string;
    ar: string;
    en: string;
  };
  image: string;
  socialMedia: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
};

export default function InstructorsSection() {
  const { language } = useLanguage();

  const sectionText = {
    title: {
      fr: 'Notre Équipe d\'Experts',
      ar: 'فريق الخبراء لدينا',
      en: 'Our Expert Team',
    },
    subtitle: {
      fr: 'Rencontrez nos instructeurs qualifiés et expérimentés',
      ar: 'تعرف على مدربينا المؤهلين وذوي الخبرة',
      en: 'Meet our qualified and experienced instructors',
    },
  };

  const instructors: Instructor[] = [
    {
      id: 'instructor-1',
      name: 'Prof. Mohamed Benali',
      position: {
        fr: 'Expert en Développement Web',
        ar: 'خبير في تطوير الويب',
        en: 'Web Development Expert',
      },
      bio: {
        fr: 'Avec plus de 15 ans d\'expérience dans le développement web et mobile, Mohamed a travaillé pour plusieurs multinationales avant de rejoindre MIRA ACADEMY.',
        ar: 'مع أكثر من 15 عامًا من الخبرة في تطوير الويب والجوال، عمل محمد لدى العديد من الشركات متعددة الجنسيات قبل الانضمام إلى أكاديمية ميرا.',
        en: 'With over 15 years of experience in web and mobile development, Mohamed has worked for several multinationals before joining MIRA ACADEMY.',
      },
      image: '/instructors/instructor1.jpg',
      socialMedia: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      id: 'instructor-2',
      name: 'Dr. Amina Kaddour',
      position: {
        fr: 'Spécialiste en Intelligence Artificielle',
        ar: 'متخصصة في الذكاء الاصطناعي',
        en: 'Artificial Intelligence Specialist',
      },
      bio: {
        fr: 'Dr. Amina est titulaire d\'un doctorat en informatique et a publié plusieurs articles de recherche sur l\'IA et l\'apprentissage automatique.',
        ar: 'د. أمينة حاصلة على دكتوراه في علوم الكمبيوتر ونشرت العديد من الأوراق البحثية حول الذكاء الاصطناعي والتعلم الآلي.',
        en: 'Dr. Amina holds a PhD in Computer Science and has published several research papers on AI and machine learning.',
      },
      image: '/instructors/instructor2.jpg',
      socialMedia: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
      },
    },
    {
      id: 'instructor-3',
      name: 'Karim Mansouri',
      position: {
        fr: 'Consultant en Marketing Digital',
        ar: 'مستشار في التسويق الرقمي',
        en: 'Digital Marketing Consultant',
      },
      bio: {
        fr: 'Karim a aidé plus de 100 entreprises à développer leur présence en ligne et à augmenter leurs revenus grâce à des stratégies de marketing digital innovantes.',
        ar: 'ساعد كريم أكثر من 100 شركة في تطوير وجودها عبر الإنترنت وزيادة إيراداتها من خلال استراتيجيات التسويق الرقمي المبتكرة.',
        en: 'Karim has helped over 100 businesses develop their online presence and increase revenue through innovative digital marketing strategies.',
      },
      image: '/instructors/instructor3.jpg',
      socialMedia: {
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
      },
    },
    {
      id: 'instructor-4',
      name: 'Leila Bouaziz',
      position: {
        fr: 'Experte en Langues et Communication',
        ar: 'خبيرة في اللغات والاتصال',
        en: 'Language and Communication Expert',
      },
      bio: {
        fr: 'Polyglotte parlant couramment cinq langues, Leila est spécialisée dans l\'enseignement des langues étrangères et des compétences en communication professionnelle.',
        ar: 'تتحدث ليلى بطلاقة خمس لغات، وهي متخصصة في تدريس اللغات الأجنبية ومهارات التواصل المهني.',
        en: 'A polyglot speaking five languages fluently, Leila specializes in teaching foreign languages and professional communication skills.',
      },
      image: '/instructors/instructor4.jpg',
      socialMedia: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-16 bg-neutral-50">
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

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {instructors.map((instructor) => (
            <motion.div 
              key={instructor.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="relative h-64 bg-primary-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-full bg-primary-200 flex items-center justify-center text-2xl font-bold text-primary-600">
                    {instructor.name.charAt(0)}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 
                  className={`text-xl font-semibold text-neutral-900 mb-1 ${
                    language === 'ar' ? 'font-arabic text-right' : ''
                  }`}
                >
                  {instructor.name}
                </h3>
                <p 
                  className={`text-primary-600 mb-4 ${
                    language === 'ar' ? 'font-arabic text-right' : ''
                  }`}
                >
                  {instructor.position[language]}
                </p>
                <p 
                  className={`text-neutral-600 mb-6 ${
                    language === 'ar' ? 'font-arabic text-right' : ''
                  }`}
                >
                  {instructor.bio[language]}
                </p>
                <div className={`flex space-x-4 ${language === 'ar' ? 'justify-end' : ''}`}>
                  {instructor.socialMedia.linkedin && (
                    <a href={instructor.socialMedia.linkedin} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-primary-600 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                  {instructor.socialMedia.twitter && (
                    <a href={instructor.socialMedia.twitter} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-primary-600 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  )}
                  {instructor.socialMedia.instagram && (
                    <a href={instructor.socialMedia.instagram} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-primary-600 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 