'use client';

import { useLanguage } from './LanguageContext';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Course = {
  id: string;
  title: {
    fr: string;
    ar: string;
    en: string;
  };
  description: {
    fr: string;
    ar: string;
    en: string;
  };
  image: string;
  category: {
    fr: string;
    ar: string;
    en: string;
  };
  duration: string;
  level: {
    fr: string;
    ar: string;
    en: string;
  };
  rating: number;
  students: number;
  price: {
    original: number;
    discounted?: number;
  };
  instructor: string;
};

const featuredCourses: Course[] = [
  {
    id: 'course-1',
    title: {
      fr: 'Développement Web Moderne',
      ar: 'تطوير الويب الحديث',
      en: 'Modern Web Development',
    },
    description: {
      fr: 'Apprenez à créer des sites web modernes en utilisant les dernières technologies comme React, Next.js et Tailwind CSS.',
      ar: 'تعلم إنشاء مواقع ويب حديثة باستخدام أحدث التقنيات مثل React و Next.js و Tailwind CSS.',
      en: 'Learn to create modern websites using the latest technologies like React, Next.js, and Tailwind CSS.',
    },
    image: '/courses/web-dev.jpg',
    category: {
      fr: 'Développement',
      ar: 'تطوير',
      en: 'Development',
    },
    duration: '12 h',
    level: {
      fr: 'Débutant',
      ar: 'مبتدئ',
      en: 'Beginner',
    },
    rating: 4.8,
    students: 1250,
    price: {
      original: 12000,
      discounted: 9500,
    },
    instructor: 'Prof. Mohamed Benali',
  },
  {
    id: 'course-2',
    title: {
      fr: 'Marketing Digital',
      ar: 'التسويق الرقمي',
      en: 'Digital Marketing',
    },
    description: {
      fr: 'Maîtrisez les stratégies de marketing digital pour développer votre entreprise, y compris SEO, médias sociaux et publicité en ligne.',
      ar: 'أتقن استراتيجيات التسويق الرقمي لتنمية أعمالك، بما في ذلك تحسين محركات البحث، ووسائل التواصل الاجتماعي، والإعلان عبر الإنترنت.',
      en: 'Master digital marketing strategies to grow your business, including SEO, social media, and online advertising.',
    },
    image: '/courses/digital-marketing.jpg',
    category: {
      fr: 'Marketing',
      ar: 'تسويق',
      en: 'Marketing',
    },
    duration: '10 h',
    level: {
      fr: 'Intermédiaire',
      ar: 'متوسط',
      en: 'Intermediate',
    },
    rating: 4.6,
    students: 980,
    price: {
      original: 10000,
      discounted: 8500,
    },
    instructor: 'Karim Mansouri',
  },
  {
    id: 'course-3',
    title: {
      fr: 'Intelligence Artificielle',
      ar: 'الذكاء الاصطناعي',
      en: 'Artificial Intelligence',
    },
    description: {
      fr: 'Découvrez les fondements de l\'IA et comment l\'appliquer dans vos projets, y compris l\'apprentissage automatique et profond.',
      ar: 'اكتشف أساسيات الذكاء الاصطناعي وكيفية تطبيقه في مشاريعك، بما في ذلك التعلم الآلي والعميق.',
      en: 'Discover the fundamentals of AI and how to apply it in your projects, including machine learning and deep learning.',
    },
    image: '/courses/ai.jpg',
    category: {
      fr: 'Technologie',
      ar: 'تكنولوجيا',
      en: 'Technology',
    },
    duration: '15 h',
    level: {
      fr: 'Avancé',
      ar: 'متقدم',
      en: 'Advanced',
    },
    rating: 4.9,
    students: 750,
    price: {
      original: 15000,
      discounted: 12000,
    },
    instructor: 'Dr. Amina Kaddour',
  },
  {
    id: 'course-4',
    title: {
      fr: 'Communication Professionnelle',
      ar: 'التواصل المهني',
      en: 'Professional Communication',
    },
    description: {
      fr: 'Améliorez vos compétences en communication pour exceller dans votre carrière et développer votre réseau professionnel.',
      ar: 'حسّن مهارات التواصل لديك للتفوق في حياتك المهنية وتطوير شبكتك المهنية.',
      en: 'Improve your communication skills to excel in your career and develop your professional network.',
    },
    image: '/courses/communication.jpg',
    category: {
      fr: 'Développement Personnel',
      ar: 'تطوير شخصي',
      en: 'Personal Development',
    },
    duration: '8 h',
    level: {
      fr: 'Tous niveaux',
      ar: 'جميع المستويات',
      en: 'All levels',
    },
    rating: 4.7,
    students: 1420,
    price: {
      original: 8000,
      discounted: 6500,
    },
    instructor: 'Leila Bouaziz',
  },
];

export default function FeaturedCourses() {
  const { language } = useLanguage();

  const sectionText = {
    title: {
      fr: 'Nos Cours',
      ar: 'دوراتنا',
      en: 'Our Courses',
    },
    subtitle: {
      fr: 'Explorez nos cours les plus populaires',
      ar: 'استكشف دوراتنا الأكثر شعبية',
      en: 'Explore our most popular courses',
    },
    viewAll: {
      fr: 'Voir tous les cours',
      ar: 'عرض جميع الدورات',
      en: 'View all courses',
    },
    enrollNow: {
      fr: 'S\'inscrire maintenant',
      ar: 'سجل الآن',
      en: 'Enroll now',
    },
    currency: {
      fr: 'DA',
      ar: 'د.ج',
      en: 'DA',
    },
    students: {
      fr: 'étudiants',
      ar: 'طلاب',
      en: 'students',
    },
    rating: {
      fr: 'Note:',
      ar: 'تقييم:',
      en: 'Rating:',
    },
    instructor: {
      fr: 'Instructeur:',
      ar: 'المدرب:',
      en: 'Instructor:',
    },
  };

  // Format price with spaces as thousand separators
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  // Star rating component
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(rating) ? 'text-yellow-400' : 'text-neutral-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-1 text-xs text-neutral-600">{rating.toFixed(1)}</span>
      </div>
    );
  };

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
    <section className="py-16 bg-white">
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
            className={`mt-4 text-lg text-neutral-600 ${
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
          {featuredCourses.map((course) => (
            <motion.div 
              key={course.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="h-48 bg-primary-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-600">{course.id.toUpperCase()}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span 
                    className={`px-3 py-1 text-xs font-semibold text-primary-700 bg-primary-50 rounded-full ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}
                  >
                    {course.category[language]}
                  </span>
                  <div className="flex items-center">
                    <svg 
                      className="h-4 w-4 text-neutral-400 mr-1" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span className="text-xs text-neutral-500">{course.duration}</span>
                  </div>
                </div>

                <h3 
                  className={`text-xl font-semibold text-neutral-900 mb-2 ${
                    language === 'ar' ? 'font-arabic text-right' : ''
                  }`}
                >
                  {course.title[language]}
                </h3>
                <p 
                  className={`text-neutral-600 mb-4 line-clamp-3 ${
                    language === 'ar' ? 'font-arabic text-right' : ''
                  }`}
                >
                  {course.description[language]}
                </p>

                <div className={`flex items-center gap-2 mb-3 ${language === 'ar' ? 'justify-end' : ''}`}>
                  <span className={`text-xs text-neutral-500 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {sectionText.rating[language]}
                  </span>
                  <StarRating rating={course.rating} />
                </div>

                <div className={`flex items-center gap-2 mb-3 ${language === 'ar' ? 'justify-end' : ''}`}>
                  <span className={`text-xs text-neutral-500 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {sectionText.instructor[language]}
                  </span>
                  <span className={`text-sm font-medium ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {course.instructor}
                  </span>
                </div>

                <div className={`flex items-center gap-2 mb-4 ${language === 'ar' ? 'justify-end' : ''}`}>
                  <svg 
                    className="h-4 w-4 text-neutral-400" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  <span className={`text-xs text-neutral-500 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {course.students} {sectionText.students[language]}
                  </span>
                </div>

                <div className={`flex items-center justify-between ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex items-center gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                    {course.price.discounted ? (
                      <>
                        <span className="text-lg font-bold text-primary-600">
                          {formatPrice(course.price.discounted)} {sectionText.currency[language]}
                        </span>
                        <span className="text-sm text-neutral-400 line-through">
                          {formatPrice(course.price.original)} {sectionText.currency[language]}
                        </span>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-primary-600">
                        {formatPrice(course.price.original)} {sectionText.currency[language]}
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/courses/${course.id}`}
                    className={`px-3 py-1.5 text-sm font-medium text-white bg-primary-500 rounded-md hover:bg-primary-600 transition-colors ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}
                  >
                    {sectionText.enrollNow[language]}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/courses"
            className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-50 hover:bg-primary-100 transition-colors ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {sectionText.viewAll[language]}
            <svg 
              className={`ml-2 -mr-1 h-5 w-5 ${language === 'ar' ? 'transform rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 