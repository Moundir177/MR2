'use client';

import { useLanguage } from '../../../components/LanguageContext';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import NewsletterSignup from '../../../components/NewsletterSignup';

// Program data - in a real application, this would come from a database or API
const programs = [
  {
    id: 'web-development',
    type: 'certificate',
    name: {
      fr: 'Développement Web Full-Stack',
      ar: 'تطوير الويب فول ستاك',
      en: 'Full-Stack Web Development',
    },
    duration: {
      fr: '6 mois',
      ar: '6 أشهر',
      en: '6 months',
    },
    level: {
      fr: 'Intermédiaire',
      ar: 'متوسط',
      en: 'Intermediate',
    },
    price: {
      fr: '12 500 €',
      ar: '12,500 €',
      en: '€12,500',
    },
    description: {
      fr: 'Apprenez à créer des applications web complètes en utilisant les technologies modernes de front-end et back-end.',
      ar: 'تعلم كيفية إنشاء تطبيقات ويب كاملة باستخدام تقنيات الواجهة الأمامية والخلفية الحديثة.',
      en: 'Learn to build complete web applications using modern front-end and back-end technologies.',
    },
    longDescription: {
      fr: 'Ce programme intensif de développement web vous formera sur toutes les compétences nécessaires pour devenir un développeur full-stack. Vous apprendrez les langages HTML, CSS et JavaScript, ainsi que des frameworks populaires comme React, Node.js et Express. Le programme comprend également des modules sur les bases de données, la sécurité web et le déploiement d\'applications. À la fin du programme, vous aurez un portfolio de projets pour démontrer vos compétences aux employeurs potentiels.',
      ar: 'سيدربك هذا البرنامج المكثف لتطوير الويب على جميع المهارات اللازمة لتصبح مطور فول ستاك. ستتعلم لغات HTML و CSS و JavaScript، بالإضافة إلى أطر العمل الشائعة مثل React و Node.js و Express. يتضمن البرنامج أيضًا وحدات حول قواعد البيانات وأمان الويب ونشر التطبيقات. في نهاية البرنامج، سيكون لديك مجموعة من المشاريع لإظهار مهاراتك لأصحاب العمل المحتملين.',
      en: 'This intensive web development program will train you on all the skills necessary to become a full-stack developer. You\'ll learn HTML, CSS, and JavaScript languages, as well as popular frameworks like React, Node.js, and Express. The program also includes modules on databases, web security, and application deployment. By the end of the program, you\'ll have a portfolio of projects to demonstrate your skills to potential employers.',
    },
    image: '/programs/web-development.jpg',
    instructor: {
      name: 'Karim Mansouri',
      title: {
        fr: 'Directeur des Programmes Tech',
        ar: 'مدير برامج التكنولوجيا',
        en: 'Tech Programs Director',
      },
      image: '/authors/karim.jpg',
      bio: {
        fr: 'Karim est un développeur web chevronné avec plus de 10 ans d\'expérience dans le développement d\'applications web à grande échelle.',
        ar: 'كريم مطور ويب متمرس مع أكثر من 10 سنوات من الخبرة في تطوير تطبيقات الويب واسعة النطاق.',
        en: 'Karim is a seasoned web developer with over 10 years of experience in developing large-scale web applications.',
      },
    },
    modules: [
      {
        title: {
          fr: 'Fondamentaux du développement web',
          ar: 'أساسيات تطوير الويب',
          en: 'Web Development Fundamentals',
        },
        duration: {
          fr: '4 semaines',
          ar: '4 أسابيع',
          en: '4 weeks',
        },
        topics: [
          {
            fr: 'HTML5 et structure sémantique',
            ar: 'HTML5 والهيكل الدلالي',
            en: 'HTML5 and semantic structure',
          },
          {
            fr: 'CSS3, Flexbox et Grid',
            ar: 'CSS3 و Flexbox و Grid',
            en: 'CSS3, Flexbox, and Grid',
          },
          {
            fr: 'JavaScript ES6+ et DOM manipulation',
            ar: 'JavaScript ES6+ والتلاعب بالـ DOM',
            en: 'JavaScript ES6+ and DOM manipulation',
          },
          {
            fr: 'Responsive design et médias queries',
            ar: 'التصميم المتجاوب واستعلامات الوسائط',
            en: 'Responsive design and media queries',
          },
        ],
      },
      {
        title: {
          fr: 'Frontend avec React',
          ar: 'الواجهة الأمامية مع React',
          en: 'Frontend with React',
        },
        duration: {
          fr: '6 semaines',
          ar: '6 أسابيع',
          en: '6 weeks',
        },
        topics: [
          {
            fr: 'Composants React et props',
            ar: 'مكونات React والخصائص',
            en: 'React components and props',
          },
          {
            fr: 'Gestion d\'état avec Hooks',
            ar: 'إدارة الحالة باستخدام Hooks',
            en: 'State management with Hooks',
          },
          {
            fr: 'Routage avec React Router',
            ar: 'التوجيه باستخدام React Router',
            en: 'Routing with React Router',
          },
          {
            fr: 'Gestion d\'état global avec Redux',
            ar: 'إدارة الحالة العالمية باستخدام Redux',
            en: 'Global state management with Redux',
          },
        ],
      },
      {
        title: {
          fr: 'Backend avec Node.js',
          ar: 'الخلفية مع Node.js',
          en: 'Backend with Node.js',
        },
        duration: {
          fr: '6 semaines',
          ar: '6 أسابيع',
          en: '6 weeks',
        },
        topics: [
          {
            fr: 'APIs RESTful avec Express',
            ar: 'واجهات برمجة التطبيقات RESTful مع Express',
            en: 'RESTful APIs with Express',
          },
          {
            fr: 'Bases de données NoSQL avec MongoDB',
            ar: 'قواعد البيانات NoSQL مع MongoDB',
            en: 'NoSQL databases with MongoDB',
          },
          {
            fr: 'Authentication et Authorization',
            ar: 'المصادقة والتفويض',
            en: 'Authentication and Authorization',
          },
          {
            fr: 'Déploiement et CI/CD',
            ar: 'النشر و CI/CD',
            en: 'Deployment and CI/CD',
          },
        ],
      },
      {
        title: {
          fr: 'Projet Capstone',
          ar: 'مشروع التخرج',
          en: 'Capstone Project',
        },
        duration: {
          fr: '8 semaines',
          ar: '8 أسابيع',
          en: '8 weeks',
        },
        topics: [
          {
            fr: 'Conception et planification de projet',
            ar: 'تصميم وتخطيط المشروع',
            en: 'Project design and planning',
          },
          {
            fr: 'Développement fullstack',
            ar: 'تطوير فول ستاك',
            en: 'Fullstack development',
          },
          {
            fr: 'Tests et QA',
            ar: 'الاختبارات وضمان الجودة',
            en: 'Testing and QA',
          },
          {
            fr: 'Déploiement et présentation',
            ar: 'النشر والعرض التقديمي',
            en: 'Deployment and presentation',
          },
        ],
      },
    ],
    featured: true,
  },
  // Other programs would be here in a complete implementation
];

export default function ProgramDetail() {
  const { language } = useLanguage();
  const params = useParams();
  const programId = params.id as string;
  const [activeTab, setActiveTab] = useState<string>('overview');
  
  // Find the program by ID
  const program = programs.find(p => p.id === programId);
  
  const translations = {
    backToPrograms: {
      fr: 'Retour aux programmes',
      ar: 'العودة إلى البرامج',
      en: 'Back to programs',
    },
    overview: {
      fr: 'Aperçu',
      ar: 'نظرة عامة',
      en: 'Overview',
    },
    curriculum: {
      fr: 'Programme',
      ar: 'المنهج',
      en: 'Curriculum',
    },
    instructor: {
      fr: 'Instructeur',
      ar: 'المدرب',
      en: 'Instructor',
    },
    registration: {
      fr: 'Inscription',
      ar: 'التسجيل',
      en: 'Registration',
    },
    duration: {
      fr: 'Durée',
      ar: 'المدة',
      en: 'Duration',
    },
    level: {
      fr: 'Niveau',
      ar: 'المستوى',
      en: 'Level',
    },
    price: {
      fr: 'Prix',
      ar: 'السعر',
      en: 'Price',
    },
    type: {
      fr: 'Type',
      ar: 'النوع',
      en: 'Type',
    },
    startDate: {
      fr: 'Prochaine session',
      ar: 'الدورة القادمة',
      en: 'Next session',
    },
    apply: {
      fr: 'Postuler maintenant',
      ar: 'قدم طلبك الآن',
      en: 'Apply now',
    },
    schedule: {
      fr: 'Prenez rendez-vous avec un conseiller',
      ar: 'حدد موعدًا مع مستشار',
      en: 'Schedule an appointment with a counselor',
    },
    subscribe: {
      fr: 'Recevez des informations sur nos programmes',
      ar: 'احصل على معلومات حول برامجنا',
      en: 'Get information about our programs',
    },
    certificate: {
      fr: 'Certificat',
      ar: 'شهادة',
      en: 'Certificate',
    },
    diploma: {
      fr: 'Diplôme',
      ar: 'دبلوم',
      en: 'Diploma',
    },
    professional: {
      fr: 'Formation Professionnelle',
      ar: 'تدريب مهني',
      en: 'Professional Training',
    },
    moduleTitle: {
      fr: 'Module',
      ar: 'الوحدة',
      en: 'Module',
    },
    topics: {
      fr: 'Sujets couverts',
      ar: 'المواضيع المشمولة',
      en: 'Topics covered',
    },
    programNotFound: {
      fr: 'Programme non trouvé',
      ar: 'البرنامج غير موجود',
      en: 'Program not found',
    },
  };

  if (!program) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <h1 className={`text-2xl font-bold text-neutral-900 mb-6 ${
          language === 'ar' ? 'font-arabic' : ''
        }`}>
          {translations.programNotFound[language]}
        </h1>
        <Link
          href="/programs"
          className={`inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
            language === 'ar' ? 'font-arabic' : ''
          }`}
        >
          {translations.backToPrograms[language]}
        </Link>
      </div>
    );
  }

  const programType = {
    certificate: translations.certificate[language],
    diploma: translations.diploma[language],
    professional: translations.professional[language],
  }[program.type];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Header */}
      <div className="bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Link
            href="/programs"
            className={`inline-flex items-center text-sm font-medium text-white hover:text-primary-100 mb-8 ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            <svg className="-ml-1 mr-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {translations.backToPrograms[language]}
          </Link>
          
          <div className={`md:flex md:items-center md:justify-between ${
            language === 'ar' ? 'md:flex-row-reverse' : ''
          }`}>
            <div className={`md:flex-1 ${language === 'ar' ? 'text-right' : ''}`}>
              <motion.h1 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {program.name[language]}
              </motion.h1>
              <motion.p 
                className="text-xl text-primary-100"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {program.description[language]}
              </motion.p>
              
              <div className="mt-6 flex flex-wrap gap-4">
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-primary-700 text-white">
                  {translations.type[language]}: {programType}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-primary-700 text-white">
                  {translations.duration[language]}: {program.duration[language]}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-primary-700 text-white">
                  {translations.level[language]}: {program.level[language]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`${
                activeTab === 'overview'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {translations.overview[language]}
            </button>
            <button
              onClick={() => setActiveTab('curriculum')}
              className={`${
                activeTab === 'curriculum'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {translations.curriculum[language]}
            </button>
            <button
              onClick={() => setActiveTab('instructor')}
              className={`${
                activeTab === 'instructor'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {translations.instructor[language]}
            </button>
            <button
              onClick={() => setActiveTab('registration')}
              className={`${
                activeTab === 'registration'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {translations.registration[language]}
            </button>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`md:flex md:gap-8 ${language === 'ar' ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="md:w-2/3">
              <div className={`bg-white rounded-xl shadow-md overflow-hidden p-6 mb-8 ${
                language === 'ar' ? 'text-right' : ''
              }`}>
                <h2 className={`text-2xl font-bold text-neutral-900 mb-4 ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}>
                  {program.name[language]}
                </h2>
                <p className={`text-neutral-700 leading-relaxed whitespace-pre-line ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}>
                  {program.longDescription[language]}
                </p>
              </div>
              
              <div className="h-64 md:h-96 bg-neutral-200 rounded-xl overflow-hidden mb-8">
                {program.image && (
                  <img
                    src={program.image}
                    alt={program.name[language]}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-8">
                <div className="p-6 border-b border-gray-200">
                  <h3 className={`text-lg font-medium text-neutral-900 mb-4 ${
                    language === 'ar' ? 'text-right font-arabic' : ''
                  }`}>
                    {program.name[language]}
                  </h3>
                  
                  <div className={`space-y-3 ${
                    language === 'ar' ? 'text-right' : ''
                  }`}>
                    <div className="flex justify-between">
                      <span className={`text-neutral-500 ${
                        language === 'ar' ? 'font-arabic' : ''
                      }`}>
                        {translations.type[language]}:
                      </span>
                      <span className={`font-medium ${
                        language === 'ar' ? 'font-arabic' : ''
                      }`}>
                        {programType}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className={`text-neutral-500 ${
                        language === 'ar' ? 'font-arabic' : ''
                      }`}>
                        {translations.duration[language]}:
                      </span>
                      <span className={`font-medium ${
                        language === 'ar' ? 'font-arabic' : ''
                      }`}>
                        {program.duration[language]}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className={`text-neutral-500 ${
                        language === 'ar' ? 'font-arabic' : ''
                      }`}>
                        {translations.level[language]}:
                      </span>
                      <span className={`font-medium ${
                        language === 'ar' ? 'font-arabic' : ''
                      }`}>
                        {program.level[language]}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className={`text-neutral-500 ${
                        language === 'ar' ? 'font-arabic' : ''
                      }`}>
                        {translations.price[language]}:
                      </span>
                      <span className={`font-medium ${
                        language === 'ar' ? 'font-arabic' : ''
                      }`}>
                        {program.price[language]}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className={`text-neutral-500 ${
                        language === 'ar' ? 'font-arabic' : ''
                      }`}>
                        {translations.startDate[language]}:
                      </span>
                      <span className={`font-medium ${
                        language === 'ar' ? 'font-arabic' : ''
                      }`}>
                        15 Janvier 2024
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <Link
                    href="/contact"
                    className={`block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}
                  >
                    {translations.apply[language]}
                  </Link>
                  
                  <Link
                    href="/contact"
                    className={`block w-full text-center mt-4 px-4 py-2 border border-primary-300 rounded-md shadow-sm text-base font-medium text-primary-700 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}
                  >
                    {translations.schedule[language]}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Curriculum tab */}
        {activeTab === 'curriculum' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`bg-white rounded-xl shadow-md overflow-hidden p-6 mb-8 ${
              language === 'ar' ? 'text-right' : ''
            }`}>
              <h2 className={`text-2xl font-bold text-neutral-900 mb-6 ${
                language === 'ar' ? 'font-arabic' : ''
              }`}>
                {translations.curriculum[language]} - {program.name[language]}
              </h2>
              
              <div className="space-y-8">
                {program.modules.map((module, index) => (
                  <div 
                    key={index}
                    className="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
                  >
                    <h3 className={`text-xl font-semibold text-neutral-900 flex items-center ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}>
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary-100 text-primary-800 mr-2">
                        {index + 1}
                      </span>
                      {translations.moduleTitle[language]} {index + 1}: {module.title[language]}
                    </h3>
                    
                    <p className={`text-neutral-500 mt-2 ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}>
                      {translations.duration[language]}: {module.duration[language]}
                    </p>
                    
                    <div className="mt-4">
                      <h4 className={`text-sm uppercase font-medium tracking-wide text-neutral-500 mb-2 ${
                        language === 'ar' ? 'font-arabic' : ''
                      }`}>
                        {translations.topics[language]}:
                      </h4>
                      
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li 
                            key={topicIndex}
                            className={`flex items-start ${
                              language === 'ar' ? 'text-right' : ''
                            }`}
                          >
                            <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className={language === 'ar' ? 'font-arabic' : ''}>
                              {topic[language]}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Instructor tab */}
        {activeTab === 'instructor' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`bg-white rounded-xl shadow-md overflow-hidden p-6 mb-8 ${
              language === 'ar' ? 'text-right' : ''
            }`}>
              <div className={`md:flex ${
                language === 'ar' ? 'md:flex-row-reverse' : ''
              }`}>
                <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                  <div className="h-40 w-40 rounded-full overflow-hidden">
                    <img 
                      src={program.instructor.image} 
                      alt={program.instructor.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                
                <div className={`md:w-3/4 ${
                  language === 'ar' ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <h2 className={`text-2xl font-bold text-neutral-900 mb-2 ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}>
                    {program.instructor.name}
                  </h2>
                  
                  <p className={`text-neutral-600 mb-4 ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}>
                    {program.instructor.title[language]}
                  </p>
                  
                  <p className={`text-neutral-700 leading-relaxed ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}>
                    {program.instructor.bio[language]}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Registration tab */}
        {activeTab === 'registration' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`bg-white rounded-xl shadow-md overflow-hidden ${
              language === 'ar' ? 'text-right' : ''
            }`}>
              <div className={`md:flex ${language === 'ar' ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 bg-primary-700 text-white p-8 md:p-12">
                  <h2 className={`text-2xl font-bold mb-4 ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}>
                    {translations.apply[language]}
                  </h2>
                  
                  <p className={`mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {program.name[language]}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span>{translations.price[language]}:</span>
                      <span className="font-medium">{program.price[language]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{translations.startDate[language]}:</span>
                      <span className="font-medium">15 Janvier 2024</span>
                    </div>
                  </div>
                  
                  <Link
                    href="/contact"
                    className={`inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-primary-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}
                  >
                    {translations.apply[language]}
                  </Link>
                </div>
                
                <div className="md:w-1/2 p-8 md:p-12">
                  <h3 className={`text-xl font-bold text-neutral-900 mb-4 ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}>
                    {translations.subscribe[language]}
                  </h3>
                  
                  <div className="mt-4">
                    <NewsletterSignup language={language} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 