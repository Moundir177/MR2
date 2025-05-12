'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '../../components/LanguageContext';
import SEOMetadata from '../../components/SEOMetadata';

// Multi-language content
const content = {
  title: {
    en: "Learning Path Programs",
    fr: "Programmes de Parcours d'Apprentissage",
    ar: "برامج مسارات التعلم",
  },
  subtitle: {
    en: "Comprehensive career-focused programs to help you reach your professional goals",
    fr: "Des programmes complets axés sur la carrière pour vous aider à atteindre vos objectifs professionnels",
    ar: "برامج شاملة تركز على المسار المهني لمساعدتك على تحقيق أهدافك المهنية",
  },
  filterBy: {
    en: "Filter by",
    fr: "Filtrer par",
    ar: "تصفية حسب",
  },
  category: {
    en: "Category",
    fr: "Catégorie",
    ar: "الفئة",
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
  all: {
    en: "All Categories",
    fr: "Toutes les catégories",
    ar: "جميع الفئات",
  },
  allLevels: {
    en: "All Levels",
    fr: "Tous les niveaux",
    ar: "جميع المستويات",
  },
  allDurations: {
    en: "Any Duration",
    fr: "Toute durée",
    ar: "أي مدة",
  },
  beginner: {
    en: "Beginner",
    fr: "Débutant",
    ar: "مبتدئ",
  },
  intermediate: {
    en: "Intermediate",
    fr: "Intermédiaire",
    ar: "متوسط",
  },
  advanced: {
    en: "Advanced",
    fr: "Avancé",
    ar: "متقدم",
  },
  shortTerm: {
    en: "Short (1-3 months)",
    fr: "Court (1-3 mois)",
    ar: "قصير (1-3 أشهر)",
  },
  mediumTerm: {
    en: "Medium (4-6 months)",
    fr: "Moyen (4-6 mois)",
    ar: "متوسط (4-6 أشهر)",
  },
  longTerm: {
    en: "Long (7+ months)",
    fr: "Long (7+ mois)",
    ar: "طويل (7+ أشهر)",
  },
  resetFilters: {
    en: "Reset Filters",
    fr: "Réinitialiser les filtres",
    ar: "إعادة تعيين عوامل التصفية",
  },
  searchPlaceholder: {
    en: "Search programs...",
    fr: "Rechercher des programmes...",
    ar: "البحث عن البرامج...",
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
  targetJob: {
    en: "Target Job",
    fr: "Emploi Cible",
    ar: "الوظيفة المستهدفة",
  },
  viewProgram: {
    en: "View Details",
    fr: "Voir les détails",
    ar: "عرض التفاصيل",
  },
  noResults: {
    en: "No programs match your criteria",
    fr: "Aucun programme ne correspond à vos critères",
    ar: "لا توجد برامج تطابق معاييرك",
  },
  tryAdjusting: {
    en: "Try adjusting your filters",
    fr: "Essayez d'ajuster vos filtres",
    ar: "حاول ضبط عوامل التصفية الخاصة بك",
  },
};

// Program data
const programsData = [
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
    levelCategory: "beginner-advanced",
    job: {
      en: "Full Stack Developer",
      fr: "Développeur Full Stack",
      ar: "مطور ويب متكامل",
    },
    color: "from-blue-500 to-indigo-600",
    category: "web-development",
    categoryName: {
      en: "Web Development",
      fr: "Développement Web",
      ar: "تطوير الويب",
    },
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
    levelCategory: "intermediate-advanced",
    job: {
      en: "Data Scientist",
      fr: "Scientifique des Données",
      ar: "عالم بيانات",
    },
    color: "from-purple-500 to-pink-600",
    category: "data-science",
    categoryName: {
      en: "Data Science",
      fr: "Science des Données",
      ar: "علم البيانات",
    },
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
    levelCategory: "beginner-intermediate",
    job: {
      en: "UX/UI Designer",
      fr: "Designer UX/UI",
      ar: "مصمم UX/UI",
    },
    color: "from-amber-500 to-orange-600",
    category: "design",
    categoryName: {
      en: "Design",
      fr: "Design",
      ar: "التصميم",
    },
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
    levelCategory: "intermediate-advanced",
    job: {
      en: "Cloud Engineer",
      fr: "Ingénieur Cloud",
      ar: "مهندس سحابة",
    },
    color: "from-teal-500 to-emerald-600",
    category: "cloud-computing",
    categoryName: {
      en: "Cloud Computing",
      fr: "Informatique en Nuage",
      ar: "الحوسبة السحابية",
    },
  },
  {
    id: 5,
    title: {
      en: "Mobile App Development",
      fr: "Développement d'Applications Mobiles",
      ar: "تطوير تطبيقات الجوال",
    },
    description: {
      en: "Learn to build cross-platform mobile applications using React Native, Flutter, and native iOS/Android development.",
      fr: "Apprenez à créer des applications mobiles multiplateformes à l'aide de React Native, Flutter et du développement natif iOS/Android.",
      ar: "تعلم بناء تطبيقات الجوال متعددة المنصات باستخدام React Native وFlutter وتطوير iOS/Android الأصلي.",
    },
    courses: 4,
    duration: 6,
    image: "📱",
    level: {
      en: "Intermediate",
      fr: "Intermédiaire",
      ar: "متوسط",
    },
    levelCategory: "intermediate",
    job: {
      en: "Mobile Developer",
      fr: "Développeur Mobile",
      ar: "مطور تطبيقات الجوال",
    },
    color: "from-orange-500 to-red-600",
    category: "mobile-development",
    categoryName: {
      en: "Mobile Development",
      fr: "Développement Mobile",
      ar: "تطوير تطبيقات الجوال",
    },
  },
  {
    id: 6,
    title: {
      en: "Cybersecurity Specialist",
      fr: "Spécialiste en Cybersécurité",
      ar: "أخصائي الأمن السيبراني",
    },
    description: {
      en: "Develop the skills to protect systems and networks from cyber threats, with hands-on training in ethical hacking and security analysis.",
      fr: "Développez les compétences pour protéger les systèmes et les réseaux contre les cybermenaces, avec une formation pratique au piratage éthique et à l'analyse de sécurité.",
      ar: "تطوير المهارات لحماية الأنظمة والشبكات من التهديدات السيبرانية، مع تدريب عملي على القرصنة الأخلاقية وتحليل الأمن.",
    },
    courses: 6,
    duration: 8,
    image: "🔒",
    level: {
      en: "Intermediate to Advanced",
      fr: "Intermédiaire à Avancé",
      ar: "من المتوسط إلى المتقدم",
    },
    levelCategory: "intermediate-advanced",
    job: {
      en: "Security Analyst",
      fr: "Analyste de Sécurité",
      ar: "محلل أمني",
    },
    color: "from-red-500 to-rose-600",
    category: "cybersecurity",
    categoryName: {
      en: "Cybersecurity",
      fr: "Cybersécurité",
      ar: "الأمن السيبراني",
    },
  },
  {
    id: 7,
    title: {
      en: "Artificial Intelligence Engineer",
      fr: "Ingénieur en Intelligence Artificielle",
      ar: "مهندس الذكاء الاصطناعي",
    },
    description: {
      en: "Master the fundamentals of AI, machine learning, and deep learning to build intelligent systems and applications.",
      fr: "Maîtrisez les fondamentaux de l'IA, de l'apprentissage automatique et de l'apprentissage profond pour créer des systèmes et des applications intelligents.",
      ar: "إتقان أساسيات الذكاء الاصطناعي والتعلم الآلي والتعلم العميق لبناء أنظمة وتطبيقات ذكية.",
    },
    courses: 7,
    duration: 9,
    image: "🤖",
    level: {
      en: "Advanced",
      fr: "Avancé",
      ar: "متقدم",
    },
    levelCategory: "advanced",
    job: {
      en: "AI Engineer",
      fr: "Ingénieur IA",
      ar: "مهندس ذكاء اصطناعي",
    },
    color: "from-blue-600 to-violet-600",
    category: "artificial-intelligence",
    categoryName: {
      en: "Artificial Intelligence",
      fr: "Intelligence Artificielle",
      ar: "الذكاء الاصطناعي",
    },
  },
  {
    id: 8,
    title: {
      en: "Digital Marketing Specialist",
      fr: "Spécialiste en Marketing Digital",
      ar: "أخصائي التسويق الرقمي",
    },
    description: {
      en: "Learn to create and execute effective digital marketing strategies across multiple channels including SEO, social media, and email marketing.",
      fr: "Apprenez à créer et à exécuter des stratégies de marketing digital efficaces sur plusieurs canaux, notamment le référencement, les médias sociaux et le marketing par e-mail.",
      ar: "تعلم إنشاء وتنفيذ استراتيجيات تسويق رقمي فعالة عبر قنوات متعددة بما في ذلك تحسين محركات البحث ووسائل التواصل الاجتماعي والتسويق عبر البريد الإلكتروني.",
    },
    courses: 5,
    duration: 4,
    image: "📈",
    level: {
      en: "Beginner to Intermediate",
      fr: "Débutant à Intermédiaire",
      ar: "من المبتدئ إلى المتوسط",
    },
    levelCategory: "beginner-intermediate",
    job: {
      en: "Digital Marketer",
      fr: "Spécialiste Marketing Digital",
      ar: "مسوق رقمي",
    },
    color: "from-green-500 to-emerald-600",
    category: "marketing",
    categoryName: {
      en: "Marketing",
      fr: "Marketing",
      ar: "التسويق",
    },
  },
];

export default function ProgramsPage() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [filteredPrograms, setFilteredPrograms] = useState(programsData);
  
  // Extract unique categories
  const categories = Array.from(
    new Set(programsData.map(program => program.category))
  ).map(category => {
    const program = programsData.find(p => p.category === category);
    return {
      value: category,
      label: program?.categoryName[language as keyof typeof program.categoryName] || category,
    };
  });
  
  // Handle search and filtering
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    applyFilters(e.target.value, selectedCategory, selectedLevel, selectedDuration);
  };
  
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    applyFilters(searchTerm, e.target.value, selectedLevel, selectedDuration);
  };
  
  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLevel(e.target.value);
    applyFilters(searchTerm, selectedCategory, e.target.value, selectedDuration);
  };
  
  const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDuration(e.target.value);
    applyFilters(searchTerm, selectedCategory, selectedLevel, e.target.value);
  };
  
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedLevel('');
    setSelectedDuration('');
    setFilteredPrograms(programsData);
  };
  
  const applyFilters = (search: string, category: string, level: string, duration: string) => {
    let results = programsData;
    
    // Apply search term filter
    if (search) {
      results = results.filter(program => 
        program.title[language as keyof typeof program.title].toLowerCase().includes(search.toLowerCase()) ||
        program.description[language as keyof typeof program.description].toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Apply category filter
    if (category) {
      results = results.filter(program => program.category === category);
    }
    
    // Apply level filter
    if (level) {
      results = results.filter(program => program.levelCategory.includes(level));
    }
    
    // Apply duration filter
    if (duration) {
      if (duration === 'short') {
        results = results.filter(program => program.duration <= 3);
      } else if (duration === 'medium') {
        results = results.filter(program => program.duration > 3 && program.duration <= 6);
      } else if (duration === 'long') {
        results = results.filter(program => program.duration > 6);
      }
    }
    
    setFilteredPrograms(results);
  };

  return (
    <>
      <SEOMetadata 
        title={content.title[language as keyof typeof content.title]}
        description={content.subtitle[language as keyof typeof content.subtitle]}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
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
        
        <div className="container mx-auto px-4 py-12">
          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-10">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder={content.searchPlaceholder[language as keyof typeof content.searchPlaceholder]}
                    className={`w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                      language === 'ar' ? 'font-arabic text-right pr-10 pl-4' : ''
                    }`}
                  />
                  <div className={`absolute ${language === 'ar' ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 text-gray-400`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-auto">
                  <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                    {content.category[language as keyof typeof content.category]}
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className={`w-full sm:w-40 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                      language === 'ar' ? 'font-arabic text-right' : ''
                    }`}
                  >
                    <option value="">{content.all[language as keyof typeof content.all]}</option>
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="w-full sm:w-auto">
                  <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                    {content.level[language as keyof typeof content.level]}
                  </label>
                  <select
                    value={selectedLevel}
                    onChange={handleLevelChange}
                    className={`w-full sm:w-40 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                      language === 'ar' ? 'font-arabic text-right' : ''
                    }`}
                  >
                    <option value="">{content.allLevels[language as keyof typeof content.allLevels]}</option>
                    <option value="beginner">{content.beginner[language as keyof typeof content.beginner]}</option>
                    <option value="intermediate">{content.intermediate[language as keyof typeof content.intermediate]}</option>
                    <option value="advanced">{content.advanced[language as keyof typeof content.advanced]}</option>
                  </select>
                </div>
                
                <div className="w-full sm:w-auto">
                  <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                    {content.duration[language as keyof typeof content.duration]}
                  </label>
                  <select
                    value={selectedDuration}
                    onChange={handleDurationChange}
                    className={`w-full sm:w-52 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                      language === 'ar' ? 'font-arabic text-right' : ''
                    }`}
                  >
                    <option value="">{content.allDurations[language as keyof typeof content.allDurations]}</option>
                    <option value="short">{content.shortTerm[language as keyof typeof content.shortTerm]}</option>
                    <option value="medium">{content.mediumTerm[language as keyof typeof content.mediumTerm]}</option>
                    <option value="long">{content.longTerm[language as keyof typeof content.longTerm]}</option>
                  </select>
                </div>
                
                <div className="w-full sm:w-auto self-end">
                  <button
                    onClick={resetFilters}
                    className={`w-full sm:w-auto px-4 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}
                  >
                    {content.resetFilters[language as keyof typeof content.resetFilters]}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Programs Grid */}
          {filteredPrograms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
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
                        {content.targetJob[language as keyof typeof content.targetJob]}
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
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className={`text-2xl font-bold text-gray-900 mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {content.noResults[language as keyof typeof content.noResults]}
              </h3>
              <p className={`text-gray-600 mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {content.tryAdjusting[language as keyof typeof content.tryAdjusting]}
              </p>
              <button
                onClick={resetFilters}
                className={`px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}
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