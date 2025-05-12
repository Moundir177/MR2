'use client';

import { useLanguage } from '../../components/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import NewsletterSignup from '../../components/NewsletterSignup';

// Define service categories
const serviceCategories = [
  {
    id: 'counseling',
    name: {
      fr: 'Conseil de carrière',
      ar: 'الاستشارة المهنية',
      en: 'Career Counseling',
    },
    description: {
      fr: 'Des conseils personnalisés pour vous aider à planifier votre parcours professionnel et à prendre des décisions éclairées concernant votre carrière.',
      ar: 'نصائح مخصصة لمساعدتك في تخطيط مسارك المهني واتخاذ قرارات مستنيرة بشأن حياتك المهنية.',
      en: 'Personalized advice to help you plan your professional path and make informed decisions about your career.',
    },
    icon: (
      <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    id: 'resume',
    name: {
      fr: 'Préparation de CV',
      ar: 'إعداد السيرة الذاتية',
      en: 'Resume Preparation',
    },
    description: {
      fr: 'Assistance pour créer ou améliorer votre CV afin de mettre en valeur vos compétences et votre expérience de la manière la plus efficace.',
      ar: 'المساعدة في إنشاء أو تحسين سيرتك الذاتية لإبراز مهاراتك وخبرتك بالطريقة الأكثر فعالية.',
      en: 'Assistance in creating or improving your resume to showcase your skills and experience in the most effective way.',
    },
    icon: (
      <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 'interview',
    name: {
      fr: 'Préparation aux entretiens',
      ar: 'التحضير للمقابلات',
      en: 'Interview Preparation',
    },
    description: {
      fr: 'Sessions d\'entraînement et conseils pour vous aider à exceller lors des entretiens d\'embauche et à présenter vos compétences avec confiance.',
      ar: 'جلسات تدريبية ونصائح لمساعدتك على التفوق في مقابلات العمل وتقديم مهاراتك بثقة.',
      en: 'Training sessions and tips to help you excel in job interviews and present your skills with confidence.',
    },
    icon: (
      <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 'networking',
    name: {
      fr: 'Événements de réseautage',
      ar: 'فعاليات التواصل',
      en: 'Networking Events',
    },
    description: {
      fr: 'Accédez à des événements exclusifs qui vous permettent de rencontrer des employeurs potentiels et d\'élargir votre réseau professionnel.',
      ar: 'الوصول إلى الفعاليات الحصرية التي تتيح لك مقابلة أصحاب العمل المحتملين وتوسيع شبكتك المهنية.',
      en: 'Access to exclusive events that allow you to meet potential employers and expand your professional network.',
    },
    icon: (
      <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    id: 'placement',
    name: {
      fr: 'Placement professionnel',
      ar: 'التوظيف المهني',
      en: 'Job Placement',
    },
    description: {
      fr: 'Nous travaillons avec un réseau d\'entreprises partenaires pour vous aider à trouver des opportunités d\'emploi correspondant à vos compétences et intérêts.',
      ar: 'نعمل مع شبكة من الشركات الشريكة لمساعدتك في العثور على فرص عمل تتناسب مع مهاراتك واهتماماتك.',
      en: 'We work with a network of partner companies to help you find job opportunities that match your skills and interests.',
    },
    icon: (
      <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

// Define partner companies
const partnerCompanies = [
  {
    id: 'techcorp',
    name: 'TechCorp Solutions',
    logo: '/partners/techcorp.svg',
    industries: ['Technology', 'Software Development'],
  },
  {
    id: 'globalfinance',
    name: 'Global Finance Group',
    logo: '/partners/globalfinance.svg',
    industries: ['Finance', 'Banking'],
  },
  {
    id: 'mediamax',
    name: 'MediaMax International',
    logo: '/partners/mediamax.svg',
    industries: ['Media', 'Marketing'],
  },
  {
    id: 'healthplus',
    name: 'HealthPlus Systems',
    logo: '/partners/healthplus.svg',
    industries: ['Healthcare', 'Technology'],
  },
  {
    id: 'ecodesign',
    name: 'EcoDesign Studio',
    logo: '/partners/ecodesign.svg',
    industries: ['Design', 'Sustainability'],
  },
  {
    id: 'innovatech',
    name: 'InnovaTech Inc.',
    logo: '/partners/innovatech.svg',
    industries: ['Innovation', 'Research'],
  },
];

// Define success stories
const successStories = [
  {
    id: 'story1',
    name: 'Sarah K.',
    image: '/success-stories/sarah.jpg',
    program: {
      fr: 'Développement Web Full-Stack',
      ar: 'تطوير الويب فول ستاك',
      en: 'Full-Stack Web Development',
    },
    company: 'TechCorp Solutions',
    position: {
      fr: 'Développeuse Frontend Senior',
      ar: 'مطورة واجهات أمامية كبيرة',
      en: 'Senior Frontend Developer',
    },
    quote: {
      fr: 'Le service carrière de MIRA ACADEMY m\'a aidée à préparer mon portfolio et m\'a mise en relation avec des employeurs qui correspondent parfaitement à mes compétences et à mes aspirations.',
      ar: 'ساعدتني خدمة التوظيف في أكاديمية ميرا على إعداد ملف أعمالي وربطتني بأصحاب العمل الذين يتناسبون تمامًا مع مهاراتي وتطلعاتي.',
      en: 'MIRA ACADEMY\'s career service helped me prepare my portfolio and connected me with employers that perfectly match my skills and aspirations.',
    },
  },
  {
    id: 'story2',
    name: 'Mohammed A.',
    image: '/success-stories/mohammed.jpg',
    program: {
      fr: 'Science des Données et Intelligence Artificielle',
      ar: 'علوم البيانات والذكاء الاصطناعي',
      en: 'Data Science and Artificial Intelligence',
    },
    company: 'HealthPlus Systems',
    position: {
      fr: 'Analyste de données en santé',
      ar: 'محلل بيانات في مجال الصحة',
      en: 'Healthcare Data Analyst',
    },
    quote: {
      fr: 'Les ateliers de préparation aux entretiens m\'ont donné la confiance dont j\'avais besoin pour décrocher mon emploi de rêve. Je recommande vivement le service carrière à tous les étudiants.',
      ar: 'منحتني ورش عمل التحضير للمقابلات الثقة التي احتجتها للحصول على وظيفة أحلامي. أوصي بشدة بخدمة التوظيف لجميع الطلاب.',
      en: 'The interview preparation workshops gave me the confidence I needed to land my dream job. I highly recommend the career service to all students.',
    },
  },
  {
    id: 'story3',
    name: 'Leila B.',
    image: '/success-stories/leila.jpg',
    program: {
      fr: 'Marketing Digital et Médias Sociaux',
      ar: 'التسويق الرقمي ووسائل التواصل الاجتماعي',
      en: 'Digital Marketing and Social Media',
    },
    company: 'MediaMax International',
    position: {
      fr: 'Responsable des campagnes numériques',
      ar: 'مديرة الحملات الرقمية',
      en: 'Digital Campaign Manager',
    },
    quote: {
      fr: 'Grâce au réseau d\'entreprises partenaires de MIRA ACADEMY, j\'ai pu obtenir un stage qui s\'est transformé en emploi à temps plein. Le soutien que j\'ai reçu tout au long du processus a été inestimable.',
      ar: 'بفضل شبكة الشركات الشريكة لأكاديمية ميرا، تمكنت من الحصول على تدريب تحول إلى وظيفة بدوام كامل. كان الدعم الذي تلقيته طوال العملية لا يقدر بثمن.',
      en: 'Thanks to MIRA ACADEMY\'s network of partner companies, I was able to secure an internship that turned into full-time employment. The support I received throughout the process was invaluable.',
    },
  },
];

export default function CareerPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('services');
  
  const translations = {
    pageTitle: {
      fr: 'Services de Carrière',
      ar: 'خدمات التوظيف',
      en: 'Career Services',
    },
    description: {
      fr: 'Des ressources et du soutien pour vous aider à réussir votre transition vers le monde professionnel',
      ar: 'موارد ودعم لمساعدتك على النجاح في الانتقال إلى عالم العمل',
      en: 'Resources and support to help you successfully transition into the professional world',
    },
    services: {
      fr: 'Nos Services',
      ar: 'خدماتنا',
      en: 'Our Services',
    },
    partners: {
      fr: 'Entreprises Partenaires',
      ar: 'الشركات الشريكة',
      en: 'Partner Companies',
    },
    successStories: {
      fr: 'Témoignages de Réussite',
      ar: 'قصص النجاح',
      en: 'Success Stories',
    },
    contact: {
      fr: 'Contactez-nous',
      ar: 'اتصل بنا',
      en: 'Contact Us',
    },
    servicesHeading: {
      fr: 'Services de développement professionnel',
      ar: 'خدمات التطوير المهني',
      en: 'Professional Development Services',
    },
    servicesDescription: {
      fr: 'Nous offrons une gamme complète de services de carrière pour aider nos étudiants et diplômés à atteindre leurs objectifs professionnels.',
      ar: 'نقدم مجموعة شاملة من خدمات التوظيف لمساعدة طلابنا وخريجينا على تحقيق أهدافهم المهنية.',
      en: 'We offer a comprehensive range of career services to help our students and graduates achieve their professional goals.',
    },
    partnersHeading: {
      fr: 'Notre réseau d\'entreprises partenaires',
      ar: 'شبكتنا من الشركات الشريكة',
      en: 'Our Network of Partner Companies',
    },
    partnersDescription: {
      fr: 'Nous travaillons avec des entreprises leaders dans différents secteurs pour offrir à nos étudiants des opportunités de stage et d\'emploi exclusives.',
      ar: 'نعمل مع شركات رائدة في مختلف القطاعات لتقديم فرص تدريب وعمل حصرية لطلابنا.',
      en: 'We work with leading companies across various industries to provide our students with exclusive internship and job opportunities.',
    },
    storiesHeading: {
      fr: 'Histoires de réussite de nos diplômés',
      ar: 'قصص نجاح خريجينا',
      en: 'Success Stories from Our Graduates',
    },
    storiesDescription: {
      fr: 'Découvrez comment nos services de carrière ont aidé nos diplômés à trouver des emplois gratifiants dans leur domaine d\'étude.',
      ar: 'اكتشف كيف ساعدت خدمات التوظيف لدينا خريجينا في العثور على وظائف مجزية في مجال دراستهم.',
      en: 'Discover how our career services have helped our graduates find rewarding jobs in their field of study.',
    },
    program: {
      fr: 'Programme',
      ar: 'البرنامج',
      en: 'Program',
    },
    currentPosition: {
      fr: 'Poste actuel',
      ar: 'المنصب الحالي',
      en: 'Current Position',
    },
    contactHeading: {
      fr: 'Prenez rendez-vous avec un conseiller',
      ar: 'حدد موعدًا مع مستشار',
      en: 'Schedule an Appointment with a Counselor',
    },
    contactDescription: {
      fr: 'Nos conseillers en carrière sont disponibles pour vous aider à chaque étape de votre parcours professionnel. Contactez-nous pour prendre rendez-vous.',
      ar: 'مستشارو التوظيف لدينا متاحون لمساعدتك في كل خطوة من مسارك المهني. اتصل بنا لتحديد موعد.',
      en: 'Our career counselors are available to help you at every stage of your professional journey. Contact us to schedule an appointment.',
    },
    contactButton: {
      fr: 'Prendre rendez-vous',
      ar: 'تحديد موعد',
      en: 'Schedule Appointment',
    },
    newsletter: {
      fr: 'Recevez des conseils de carrière et des offres d\'emploi',
      ar: 'احصل على نصائح وظيفية وعروض عمل',
      en: 'Get career tips and job offers',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero section */}
      <div className="bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className={`text-center ${language === 'ar' ? 'font-arabic' : ''}`}>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {translations.pageTitle[language]}
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {translations.description[language]}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('services')}
              className={`${
                activeTab === 'services'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {translations.services[language]}
            </button>
            <button
              onClick={() => setActiveTab('partners')}
              className={`${
                activeTab === 'partners'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {translations.partners[language]}
            </button>
            <button
              onClick={() => setActiveTab('success')}
              className={`${
                activeTab === 'success'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {translations.successStories[language]}
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`${
                activeTab === 'contact'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {translations.contact[language]}
            </button>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Services tab */}
        {activeTab === 'services' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`text-center mb-12 ${language === 'ar' ? 'font-arabic' : ''}`}>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                {translations.servicesHeading[language]}
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-neutral-600">
                {translations.servicesDescription[language]}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all p-6"
                >
                  <div className={`flex flex-col ${language === 'ar' ? 'items-end text-right' : ''}`}>
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <h3 className={`text-xl font-bold text-neutral-900 mb-2 ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}>
                      {service.name[language]}
                    </h3>
                    <p className={`text-neutral-600 ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}>
                      {service.description[language]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Partners tab */}
        {activeTab === 'partners' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`text-center mb-12 ${language === 'ar' ? 'font-arabic' : ''}`}>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                {translations.partnersHeading[language]}
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-neutral-600">
                {translations.partnersDescription[language]}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {partnerCompanies.map((company) => (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all p-6 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-24 h-24 mb-4 flex items-center justify-center">
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="max-w-full max-h-full"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-2">
                    {company.name}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {company.industries.map((industry, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Success Stories tab */}
        {activeTab === 'success' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`text-center mb-12 ${language === 'ar' ? 'font-arabic' : ''}`}>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                {translations.storiesHeading[language]}
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-neutral-600">
                {translations.storiesDescription[language]}
              </p>
            </div>
            
            <div className="space-y-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8 md:flex ${
                    language === 'ar' ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="md:w-1/4 flex justify-center">
                    <div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden">
                      <img 
                        src={story.image} 
                        alt={story.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className={`md:w-3/4 mt-6 md:mt-0 ${
                    language === 'ar' ? 'md:pr-8 text-right' : 'md:pl-8'
                  }`}>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {story.name}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className={`text-sm font-medium text-neutral-500 ${
                          language === 'ar' ? 'font-arabic' : ''
                        }`}>
                          {translations.program[language]}:
                        </p>
                        <p className={`text-neutral-800 ${
                          language === 'ar' ? 'font-arabic' : ''
                        }`}>
                          {story.program[language]}
                        </p>
                      </div>
                      
                      <div>
                        <p className={`text-sm font-medium text-neutral-500 ${
                          language === 'ar' ? 'font-arabic' : ''
                        }`}>
                          {translations.currentPosition[language]}:
                        </p>
                        <p className={`text-neutral-800 ${
                          language === 'ar' ? 'font-arabic' : ''
                        }`}>
                          {story.position[language]} - {story.company}
                        </p>
                      </div>
                    </div>
                    
                    <blockquote className={`text-neutral-600 italic ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}>
                      "{story.quote[language]}"
                    </blockquote>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Contact tab */}
        {activeTab === 'contact' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`text-center mb-12 ${language === 'ar' ? 'font-arabic' : ''}`}>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                {translations.contactHeading[language]}
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-neutral-600">
                {translations.contactDescription[language]}
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className={`md:flex ${language === 'ar' ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 bg-primary-700 text-white p-8 md:p-12">
                  <div className={language === 'ar' ? 'text-right' : ''}>
                    <h3 className={`text-2xl font-bold mb-4 ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}>
                      {translations.contactHeading[language]}
                    </h3>
                    
                    <ul className="space-y-4">
                      {serviceCategories.map((service) => (
                        <li key={service.id} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <svg className="h-5 w-5 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className={`ml-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                            {service.name[language]}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8">
                      <Link
                        href="/contact"
                        className={`inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-primary-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                          language === 'ar' ? 'font-arabic' : ''
                        }`}
                      >
                        {translations.contactButton[language]}
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className={language === 'ar' ? 'text-right' : ''}>
                    <h3 className={`text-xl font-bold text-neutral-900 mb-4 ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}>
                      {translations.newsletter[language]}
                    </h3>
                    
                    <div className="mt-4">
                      <NewsletterSignup language={language} />
                    </div>
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