'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '../../components/LanguageContext';
import { useAuth } from '../../components/AuthContext';
import SEOMetadata from '../../components/SEOMetadata';

interface Course {
  id: number;
  title: {
    en: string;
    fr: string;
    ar: string;
  };
  description: {
    en: string;
    fr: string;
    ar: string;
  };
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: number;
  instructors: string[];
  rating: number;
  studentsCount: number;
  price: number;
  image: string;
  featured?: boolean;
}

// Multilingual content
const content = {
  title: {
    en: "My Wishlist",
    fr: "Ma Liste de Souhaits",
    ar: "قائمة رغباتي",
  },
  subtitle: {
    en: "Courses you've saved for later",
    fr: "Cours que vous avez sauvegardés pour plus tard",
    ar: "الدورات التي حفظتها لوقت لاحق",
  },
  emptyWishlist: {
    en: "Your wishlist is empty",
    fr: "Votre liste de souhaits est vide",
    ar: "قائمة رغباتك فارغة",
  },
  browseCourses: {
    en: "Browse Courses",
    fr: "Parcourir les Cours",
    ar: "تصفح الدورات",
  },
  removeFromWishlist: {
    en: "Remove from Wishlist",
    fr: "Retirer de la Liste",
    ar: "إزالة من القائمة",
  },
  level: {
    en: "Level",
    fr: "Niveau",
    ar: "المستوى",
  },
  duration: {
    en: "Duration",
    fr: "Durée",
    ar: "المدة",
  },
  weeks: {
    en: "weeks",
    fr: "semaines",
    ar: "أسابيع",
  },
  loginPrompt: {
    en: "Please log in to view your wishlist",
    fr: "Veuillez vous connecter pour voir votre liste de souhaits",
    ar: "يرجى تسجيل الدخول لعرض قائمة رغباتك",
  },
  goToLogin: {
    en: "Go to Login",
    fr: "Aller à la Connexion",
    ar: "الذهاب إلى تسجيل الدخول",
  },
  viewDetails: {
    en: "View Details",
    fr: "Voir les détails",
    ar: "عرض التفاصيل",
  },
  enroll: {
    en: "Enroll Now",
    fr: "S'inscrire Maintenant",
    ar: "سجل الآن",
  },
};

// For demo purposes, we'll include coursesData from the courses page
const coursesData: Course[] = [
  {
    id: 1,
    title: {
      en: "Full Stack Web Development",
      fr: "Développement Web Full Stack",
      ar: "تطوير الويب المتكامل",
    },
    description: {
      en: "Master front-end and back-end technologies to build complete web applications.",
      fr: "Maîtrisez les technologies front-end et back-end pour construire des applications web complètes.",
      ar: "إتقان تقنيات الواجهة الأمامية والخلفية لبناء تطبيقات ويب كاملة.",
    },
    category: "Web Development",
    level: "Intermediate",
    duration: 12,
    instructors: ["Sarah Johnson", "Michael Chen"],
    rating: 4.8,
    studentsCount: 1247,
    price: 799,
    image: "🖥️",
    featured: true
  },
  {
    id: 2,
    title: {
      en: "Data Science and Machine Learning",
      fr: "Science des Données et Apprentissage Automatique",
      ar: "علوم البيانات والتعلم الآلي",
    },
    description: {
      en: "Learn to analyze data and build predictive models with Python and popular ML libraries.",
      fr: "Apprenez à analyser des données et à créer des modèles prédictifs avec Python et les bibliothèques ML populaires.",
      ar: "تعلم تحليل البيانات وبناء نماذج تنبؤية باستخدام Python ومكتبات التعلم الآلي الشائعة.",
    },
    category: "Data Science",
    level: "Advanced",
    duration: 10,
    instructors: ["David Miller", "Emma Watson"],
    rating: 4.9,
    studentsCount: 985,
    price: 899,
    image: "📊",
    featured: true
  },
  {
    id: 3,
    title: {
      en: "UX/UI Design Fundamentals",
      fr: "Fondamentaux du Design UX/UI",
      ar: "أساسيات تصميم تجربة المستخدم/واجهة المستخدم",
    },
    description: {
      en: "Design user-centered digital experiences with industry-standard tools and methodologies.",
      fr: "Concevez des expériences numériques centrées sur l'utilisateur avec des outils et méthodologies standard de l'industrie.",
      ar: "تصميم تجارب رقمية تركز على المستخدم باستخدام أدوات ومنهجيات قياسية في الصناعة.",
    },
    category: "Design",
    level: "Beginner",
    duration: 8,
    instructors: ["Lisa Park"],
    rating: 4.7,
    studentsCount: 763,
    price: 649,
    image: "🎨",
    featured: true
  },
  // Add more courses as needed
];

export default function WishlistPage() {
  const { language } = useLanguage();
  const { wishlist, removeFromWishlist, isAuthenticated, isLoading } = useAuth();
  const [wishlistCourses, setWishlistCourses] = useState<Course[]>([]);
  
  useEffect(() => {
    if (!isLoading) {
      // Filter courses that are in the wishlist
      const courses = coursesData.filter(course => wishlist.includes(course.id));
      setWishlistCourses(courses);
    }
  }, [wishlist, isLoading]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md text-center">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className={`text-2xl font-bold text-gray-900 mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {content.loginPrompt[language as keyof typeof content.loginPrompt]}
          </h2>
          <Link 
            href="/login" 
            className={`inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {content.goToLogin[language as keyof typeof content.goToLogin]}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOMetadata 
        title={content.title[language as keyof typeof content.title]}
        description={content.subtitle[language as keyof typeof content.subtitle]}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
          <div className="container mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${language === 'ar' ? 'font-arabic text-right' : ''}`}
            >
              <h1 className="text-4xl font-bold mb-2">
                {content.title[language as keyof typeof content.title]}
              </h1>
              <p className="text-xl text-primary-100">
                {content.subtitle[language as keyof typeof content.subtitle]}
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          {wishlistCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wishlistCourses.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col relative"
                >
                  <button
                    onClick={() => removeFromWishlist(course.id)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
                    aria-label={content.removeFromWishlist[language as keyof typeof content.removeFromWishlist]}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <div className="p-6 bg-primary-50 flex items-center justify-center h-48">
                    <span className="text-7xl">{course.image}</span>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-4 flex-grow">
                      <h3 className={`text-xl font-bold text-gray-900 mb-2 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                        {course.title[language as keyof typeof course.title]}
                      </h3>
                      <div className="flex items-center mb-1">
                        <div className="flex items-center text-yellow-500 mr-1">
                          {'★'.repeat(Math.floor(course.rating))}
                          {course.rating % 1 !== 0 && '☆'}
                          {'☆'.repeat(5 - Math.ceil(course.rating))}
                        </div>
                        <span className="text-gray-600 text-sm">
                          {course.rating.toFixed(1)} ({course.studentsCount})
                        </span>
                      </div>
                      <p className={`text-gray-600 mb-3 text-sm ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                        {course.instructors.join(', ')}
                      </p>
                      <p className={`text-gray-700 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                        {course.description[language as keyof typeof course.description]}
                      </p>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-gray-100 px-3 py-2 rounded-md">
                        <p className={`text-xs text-gray-500 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                          {content.duration[language as keyof typeof content.duration]}
                        </p>
                        <p className={`font-semibold text-gray-800 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                          {course.duration} {content.weeks[language as keyof typeof content.weeks]}
                        </p>
                      </div>
                      <div className="bg-gray-100 px-3 py-2 rounded-md">
                        <p className={`text-xs text-gray-500 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                          {content.level[language as keyof typeof content.level]}
                        </p>
                        <p className={`font-semibold text-gray-800 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                          {course.level}
                        </p>
                      </div>
                    </div>
                    <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''} justify-between`}>
                      <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                      <div className="space-x-2">
                        <Link 
                          href={`/courses/${course.id}`}
                          className={`px-3 py-2 text-sm font-medium text-primary-600 border border-primary-500 rounded-lg hover:bg-primary-50 transition-colors ${
                            language === 'ar' ? 'font-arabic mx-2' : ''
                          }`}
                        >
                          {content.viewDetails[language as keyof typeof content.viewDetails]}
                        </Link>
                        <Link 
                          href={`/enroll?course=${course.id}`}
                          className={`px-3 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors ${
                            language === 'ar' ? 'font-arabic' : ''
                          }`}
                        >
                          {content.enroll[language as keyof typeof content.enroll]}
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center max-w-md mx-auto">
              <div className="text-6xl mb-4">💭</div>
              <h3 className={`text-2xl font-bold text-gray-900 mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {content.emptyWishlist[language as keyof typeof content.emptyWishlist]}
              </h3>
              <Link 
                href="/courses" 
                className={`inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {content.browseCourses[language as keyof typeof content.browseCourses]}
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 