'use client';

import { useState, useEffect } from 'react';
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
  duration: number; // in weeks
  instructors: string[];
  rating: number;
  studentsCount: number;
  price: number;
  image: string;
  featured?: boolean;
}

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
  {
    id: 4,
    title: {
      en: "Mobile App Development with React Native",
      fr: "Développement d'Applications Mobiles avec React Native",
      ar: "تطوير تطبيقات الجوال باستخدام React Native",
    },
    description: {
      en: "Build cross-platform mobile applications for iOS and Android using React Native.",
      fr: "Créez des applications mobiles multiplateformes pour iOS et Android avec React Native.",
      ar: "إنشاء تطبيقات جوال عبر المنصات لـ iOS و Android باستخدام React Native.",
    },
    category: "Mobile Development",
    level: "Intermediate",
    duration: 10,
    instructors: ["James Wilson"],
    rating: 4.6,
    studentsCount: 592,
    price: 749,
    image: "📱"
  },
  {
    id: 5,
    title: {
      en: "Cloud Computing and DevOps",
      fr: "Cloud Computing et DevOps",
      ar: "الحوسبة السحابية وDevOps",
    },
    description: {
      en: "Master cloud infrastructure, CI/CD pipelines, and modern development operations.",
      fr: "Maîtrisez l'infrastructure cloud, les pipelines CI/CD et les opérations de développement modernes.",
      ar: "إتقان البنية التحتية السحابية، وخطوط أنابيب CI/CD، وعمليات التطوير الحديثة.",
    },
    category: "DevOps",
    level: "Advanced",
    duration: 12,
    instructors: ["Alex Rodriguez", "Priya Patel"],
    rating: 4.8,
    studentsCount: 431,
    price: 899,
    image: "☁️"
  },
  {
    id: 6,
    title: {
      en: "Cybersecurity Fundamentals",
      fr: "Fondamentaux de la Cybersécurité",
      ar: "أساسيات الأمن السيبراني",
    },
    description: {
      en: "Learn essential security concepts, threat detection, and protection strategies.",
      fr: "Apprenez les concepts de sécurité essentiels, la détection des menaces et les stratégies de protection.",
      ar: "تعلم مفاهيم الأمان الأساسية واكتشاف التهديدات واستراتيجيات الحماية.",
    },
    category: "Cybersecurity",
    level: "Beginner",
    duration: 8,
    instructors: ["Robert Chen"],
    rating: 4.7,
    studentsCount: 385,
    price: 699,
    image: "🔒"
  },
  {
    id: 7,
    title: {
      en: "Artificial Intelligence Engineering",
      fr: "Ingénierie de l'Intelligence Artificielle",
      ar: "هندسة الذكاء الاصطناعي",
    },
    description: {
      en: "Build intelligent systems and algorithms that can learn and make decisions.",
      fr: "Construisez des systèmes intelligents et des algorithmes capables d'apprendre et de prendre des décisions.",
      ar: "بناء أنظمة وخوارزميات ذكية قادرة على التعلم واتخاذ القرارات.",
    },
    category: "AI",
    level: "Advanced",
    duration: 14,
    instructors: ["Maria Gonzalez", "John Smith"],
    rating: 4.9,
    studentsCount: 276,
    price: 999,
    image: "🤖"
  },
  {
    id: 8,
    title: {
      en: "Blockchain Development",
      fr: "Développement Blockchain",
      ar: "تطوير البلوكتشين",
    },
    description: {
      en: "Learn to build decentralized applications and smart contracts on blockchain platforms.",
      fr: "Apprenez à créer des applications décentralisées et des contrats intelligents sur des plateformes blockchain.",
      ar: "تعلم بناء التطبيقات اللامركزية والعقود الذكية على منصات البلوكتشين.",
    },
    category: "Blockchain",
    level: "Intermediate",
    duration: 10,
    instructors: ["Thomas Lee"],
    rating: 4.5,
    studentsCount: 198,
    price: 849,
    image: "⛓️"
  },
  {
    id: 9,
    title: {
      en: "Digital Marketing and SEO",
      fr: "Marketing Digital et SEO",
      ar: "التسويق الرقمي وتحسين محركات البحث",
    },
    description: {
      en: "Master digital marketing strategies, analytics, and search engine optimization.",
      fr: "Maîtrisez les stratégies de marketing digital, l'analytique et l'optimisation pour les moteurs de recherche.",
      ar: "إتقان استراتيجيات التسويق الرقمي والتحليلات وتحسين محركات البحث.",
    },
    category: "Marketing",
    level: "All Levels",
    duration: 6,
    instructors: ["Anna Martinez"],
    rating: 4.6,
    studentsCount: 512,
    price: 549,
    image: "📈"
  },
  {
    id: 10,
    title: {
      en: "Game Development with Unity",
      fr: "Développement de Jeux avec Unity",
      ar: "تطوير الألعاب باستخدام Unity",
    },
    description: {
      en: "Create engaging 2D and 3D games using the Unity game engine and C#.",
      fr: "Créez des jeux 2D et 3D captivants à l'aide du moteur de jeu Unity et de C#.",
      ar: "إنشاء ألعاب ثنائية وثلاثية الأبعاد جذابة باستخدام محرك ألعاب Unity ولغة C#.",
    },
    category: "Game Development",
    level: "Intermediate",
    duration: 12,
    instructors: ["Chris Taylor", "Sophie Kim"],
    rating: 4.8,
    studentsCount: 347,
    price: 799,
    image: "🎮"
  },
  {
    id: 11,
    title: {
      en: "Python Programming for Beginners",
      fr: "Programmation Python pour Débutants",
      ar: "برمجة Python للمبتدئين",
    },
    description: {
      en: "Start your programming journey with Python, perfect for those with no coding experience.",
      fr: "Commencez votre voyage de programmation avec Python, parfait pour ceux qui n'ont aucune expérience en codage.",
      ar: "ابدأ رحلة البرمجة الخاصة بك مع Python، مثالي لأولئك الذين ليس لديهم خبرة في البرمجة.",
    },
    category: "Programming",
    level: "Beginner",
    duration: 6,
    instructors: ["Jessica Adams"],
    rating: 4.9,
    studentsCount: 1532,
    price: 499,
    image: "🐍"
  },
  {
    id: 12,
    title: {
      en: "IoT Systems Development",
      fr: "Développement de Systèmes IoT",
      ar: "تطوير أنظمة إنترنت الأشياء",
    },
    description: {
      en: "Build connected devices and systems for the Internet of Things ecosystem.",
      fr: "Construisez des appareils et des systèmes connectés pour l'écosystème de l'Internet des objets.",
      ar: "بناء الأجهزة والأنظمة المتصلة لنظام إنترنت الأشياء.",
    },
    category: "IoT",
    level: "Intermediate",
    duration: 10,
    instructors: ["Daniel Wong"],
    rating: 4.7,
    studentsCount: 253,
    price: 749,
    image: "🔌"
  }
];

const CourseCard = ({ course, language }: { course: Course, language: string }) => {
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useAuth();
  const isInUserWishlist = isInWishlist(course.id);
  
  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to course detail page
    
    if (isInUserWishlist) {
      removeFromWishlist(course.id);
    } else {
      addToWishlist(course.id);
    }
  };
  
  // Multilingual content
  const content = {
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
    weeks: {
      en: "weeks",
      fr: "semaines",
      ar: "أسابيع",
    },
    students: {
      en: "students",
      fr: "étudiants",
      ar: "طلاب",
    },
    viewDetails: {
      en: "View Details",
      fr: "Voir les détails",
      ar: "عرض التفاصيل",
    },
    featured: {
      en: "Featured",
      fr: "En vedette",
      ar: "مميز",
    },
    addToWishlist: {
      en: "Add to Wishlist",
      fr: "Ajouter aux favoris",
      ar: "أضف إلى قائمة الرغبات",
    },
    removeFromWishlist: {
      en: "Remove from Wishlist",
      fr: "Retirer des favoris",
      ar: "إزالة من قائمة الرغبات",
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col relative"
    >
      {course.featured && (
        <div className="absolute top-4 right-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-bold">
          {content.featured[language as keyof typeof content.featured]}
        </div>
      )}
      <div className="p-6 bg-primary-50 flex items-center justify-center h-48 relative">
        <button
          onClick={handleWishlistToggle}
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          aria-label={isInUserWishlist 
            ? content.removeFromWishlist[language as keyof typeof content.removeFromWishlist]
            : content.addToWishlist[language as keyof typeof content.addToWishlist]
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isInUserWishlist ? 'text-red-500 fill-current' : 'text-gray-400'}`} viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
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
              {course.rating.toFixed(1)} ({course.studentsCount} {content.students[language as keyof typeof content.students]})
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
        <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : 'justify-between'}`}>
          <span className="text-2xl font-bold text-gray-900">${course.price}</span>
          <Link 
            href={`/courses/${course.id}`}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            {content.viewDetails[language as keyof typeof content.viewDetails]}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function CoursesPage() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [priceRange, setPriceRange] = useState(1000);
  const [durationFilter, setDurationFilter] = useState('');
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(coursesData);
  
  // Multilingual content
  const content = {
    title: {
      en: "Our Courses",
      fr: "Nos Cours",
      ar: "دوراتنا",
    },
    subtitle: {
      en: "Discover our comprehensive range of courses designed to help you achieve your career goals",
      fr: "Découvrez notre gamme complète de cours conçus pour vous aider à atteindre vos objectifs professionnels",
      ar: "اكتشف مجموعتنا الشاملة من الدورات المصممة لمساعدتك على تحقيق أهدافك المهنية",
    },
    search: {
      en: "Search",
      fr: "Rechercher",
      ar: "بحث",
    },
    searchPlaceholder: {
      en: "Search by course title, description, or instructor...",
      fr: "Rechercher par titre de cours, description ou instructeur...",
      ar: "البحث حسب عنوان الدورة أو الوصف أو المدرب...",
    },
    category: {
      en: "Category",
      fr: "Catégorie",
      ar: "الفئة",
    },
    allCategories: {
      en: "All Categories",
      fr: "Toutes les catégories",
      ar: "جميع الفئات",
    },
    level: {
      en: "Level",
      fr: "Niveau",
      ar: "المستوى",
    },
    allLevels: {
      en: "All Levels",
      fr: "Tous les niveaux",
      ar: "جميع المستويات",
    },
    duration: {
      en: "Duration",
      fr: "Durée",
      ar: "المدة",
    },
    anyDuration: {
      en: "Any Duration",
      fr: "Toute durée",
      ar: "أي مدة",
    },
    shortDuration: {
      en: "Short (≤ 6 weeks)",
      fr: "Court (≤ 6 semaines)",
      ar: "قصير (≤ 6 أسابيع)",
    },
    mediumDuration: {
      en: "Medium (7-10 weeks)",
      fr: "Moyen (7-10 semaines)",
      ar: "متوسط (7-10 أسابيع)",
    },
    longDuration: {
      en: "Long (> 10 weeks)",
      fr: "Long (> 10 semaines)",
      ar: "طويل (> 10 أسابيع)",
    },
    priceRange: {
      en: "Price Range: Up to",
      fr: "Gamme de prix: Jusqu'à",
      ar: "نطاق السعر: حتى",
    },
    resetFilters: {
      en: "Reset Filters",
      fr: "Réinitialiser les filtres",
      ar: "إعادة تعيين عوامل التصفية",
    },
    noCoursesFound: {
      en: "No Courses Found",
      fr: "Aucun cours trouvé",
      ar: "لم يتم العثور على دورات",
    },
    couldntFind: {
      en: "We couldn't find any courses matching your criteria.",
      fr: "Nous n'avons pas pu trouver de cours correspondant à vos critères.",
      ar: "لم نتمكن من العثور على أي دورات تطابق معاييرك.",
    },
  };
  
  const categories = Array.from(new Set(coursesData.map(course => course.category)));
  const levels = ['Beginner', 'Intermediate', 'Advanced', 'All Levels'];
  
  useEffect(() => {
    const filtered = coursesData.filter(course => {
      // Search term filter
      const matchesSearch = 
        course.title[language as keyof typeof course.title].toLowerCase().includes(searchTerm.toLowerCase()) || 
        course.description[language as keyof typeof course.description].toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructors.some(instructor => 
          instructor.toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      // Category filter
      const matchesCategory = selectedCategory === '' || course.category === selectedCategory;
      
      // Level filter
      const matchesLevel = selectedLevel === '' || course.level === selectedLevel;
      
      // Price filter
      const matchesPrice = course.price <= priceRange;
      
      // Duration filter
      let matchesDuration = true;
      if (durationFilter === 'short') {
        matchesDuration = course.duration <= 6;
      } else if (durationFilter === 'medium') {
        matchesDuration = course.duration > 6 && course.duration <= 10;
      } else if (durationFilter === 'long') {
        matchesDuration = course.duration > 10;
      }
      
      return matchesSearch && matchesCategory && matchesLevel && matchesPrice && matchesDuration;
    });
    
    setFilteredCourses(filtered);
  }, [searchTerm, selectedCategory, selectedLevel, priceRange, durationFilter, language]);
  
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedLevel('');
    setPriceRange(1000);
    setDurationFilter('');
  };

  return (
    <>
      <SEOMetadata 
        title={content.title[language as keyof typeof content.title]}
        description={content.subtitle[language as keyof typeof content.subtitle]}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with Brand Colors */}
        <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-center ${language === 'ar' ? 'font-arabic text-right' : ''}`}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {content.title[language as keyof typeof content.title]}
              </h1>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                {content.subtitle[language as keyof typeof content.subtitle]}
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="mb-10 bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {/* Search input */}
              <div className="md:col-span-3 lg:col-span-2">
                <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {content.search[language as keyof typeof content.search]}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={content.searchPlaceholder[language as keyof typeof content.searchPlaceholder]}
                    className={`w-full p-3 ${language === 'ar' ? 'pr-10 text-right font-arabic' : 'pl-10'} border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className={`absolute ${language === 'ar' ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 text-gray-400`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Category filter */}
              <div>
                <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {content.category[language as keyof typeof content.category]}
                </label>
                <select
                  className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${language === 'ar' ? 'font-arabic text-right' : ''}`}
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">{content.allCategories[language as keyof typeof content.allCategories]}</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              {/* Level filter */}
              <div>
                <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {content.level[language as keyof typeof content.level]}
                </label>
                <select
                  className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${language === 'ar' ? 'font-arabic text-right' : ''}`}
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                >
                  <option value="">{content.allLevels[language as keyof typeof content.allLevels]}</option>
                  {levels.map((level, index) => (
                    <option key={index} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              
              {/* Duration filter */}
              <div>
                <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {content.duration[language as keyof typeof content.duration]}
                </label>
                <select
                  className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${language === 'ar' ? 'font-arabic text-right' : ''}`}
                  value={durationFilter}
                  onChange={(e) => setDurationFilter(e.target.value)}
                >
                  <option value="">{content.anyDuration[language as keyof typeof content.anyDuration]}</option>
                  <option value="short">{content.shortDuration[language as keyof typeof content.shortDuration]}</option>
                  <option value="medium">{content.mediumDuration[language as keyof typeof content.mediumDuration]}</option>
                  <option value="long">{content.longDuration[language as keyof typeof content.longDuration]}</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6 border-t border-gray-200 pt-6">
              <div className={`flex flex-col md:flex-row ${language === 'ar' ? 'md:flex-row-reverse' : ''} justify-between items-start md:items-center`}>
                <div className="mb-4 md:mb-0">
                  <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                    {content.priceRange[language as keyof typeof content.priceRange]} ${priceRange}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="50"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <button
                  onClick={resetFilters}
                  className={`px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}
                >
                  {content.resetFilters[language as keyof typeof content.resetFilters]}
                </button>
              </div>
            </div>
          </div>
          
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} language={language} />
              ))}
            </div>
          ) : (
            <div className={`text-center py-16 bg-white rounded-xl shadow-lg ${language === 'ar' ? 'font-arabic' : ''}`}>
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {content.noCoursesFound[language as keyof typeof content.noCoursesFound]}
              </h3>
              <p className="text-gray-600 mb-6">
                {content.couldntFind[language as keyof typeof content.couldntFind]}
              </p>
              <button 
                onClick={resetFilters}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                {content.resetFilters[language as keyof typeof content.resetFilters]}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 