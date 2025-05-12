'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '../../components/LanguageContext';
import SEOMetadata from '../../components/SEOMetadata';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: 'general' | 'courses' | 'pricing' | 'technical' | 'career';
}

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [filteredFAQs, setFilteredFAQs] = useState<FAQ[]>([]);
  const { language } = useLanguage();
  
  // Multilingual content
  const content = {
    title: {
      fr: 'Questions fréquemment posées',
      ar: 'الأسئلة المتداولة',
      en: 'Frequently Asked Questions',
    },
    subtitle: {
      fr: 'Trouvez des réponses aux questions courantes sur notre plateforme, nos cours et nos services',
      ar: 'ابحث عن إجابات للأسئلة الشائعة حول منصتنا ودوراتنا وخدماتنا',
      en: 'Find answers to common questions about our platform, courses, and services',
    },
    search: {
      fr: 'Rechercher',
      ar: 'بحث',
      en: 'Search',
    },
    searchPlaceholder: {
      fr: 'Rechercher des questions ou des mots-clés...',
      ar: 'ابحث عن أسئلة أو كلمات رئيسية...',
      en: 'Search for questions or keywords...',
    },
    category: {
      fr: 'Filtrer par catégorie',
      ar: 'تصفية حسب الفئة',
      en: 'Filter by Category',
    },
    allCategories: {
      fr: 'Toutes les catégories',
      ar: 'جميع الفئات',
      en: 'All Categories',
    },
    showing: {
      fr: 'Affichage de',
      ar: 'عرض',
      en: 'Showing',
    },
    of: {
      fr: 'sur',
      ar: 'من',
      en: 'of',
    },
    questions: {
      fr: 'questions',
      ar: 'أسئلة',
      en: 'questions',
    },
    resetFilters: {
      fr: 'Réinitialiser les filtres',
      ar: 'إعادة تعيين عوامل التصفية',
      en: 'Reset Filters',
    },
    noQuestionsFound: {
      fr: 'Aucune question trouvée',
      ar: 'لم يتم العثور على أسئلة',
      en: 'No Questions Found',
    },
    couldntFind: {
      fr: 'Nous n\'avons pas pu trouver de questions correspondant à vos critères.',
      ar: 'لم نتمكن من العثور على أي أسئلة تطابق معاييرك.',
      en: 'We couldn\'t find any questions matching your criteria.',
    },
    stillHaveQuestions: {
      fr: 'Vous avez encore des questions?',
      ar: 'هل لا تزال لديك أسئلة؟',
      en: 'Still Have Questions?',
    },
    cantFindAnswer: {
      fr: 'Vous ne trouvez pas la réponse que vous cherchez? Notre équipe de support est là pour vous aider.',
      ar: 'لا يمكنك العثور على الإجابة التي تبحث عنها؟ فريق الدعم لدينا موجود للمساعدة.',
      en: 'Can\'t find the answer you\'re looking for? Our support team is here to help.',
    },
    contactUs: {
      fr: 'Contactez-nous',
      ar: 'اتصل بنا',
      en: 'Contact Us',
    },
    browseByCategory: {
      fr: 'Parcourir par catégorie',
      ar: 'تصفح حسب الفئة',
      en: 'Browse by Category',
    },
    categories: {
      general: {
        fr: 'Questions générales',
        ar: 'أسئلة عامة',
        en: 'General Questions',
      },
      courses: {
        fr: 'Cours et apprentissage',
        ar: 'الدورات والتعلم',
        en: 'Courses & Learning',
      },
      pricing: {
        fr: 'Prix et paiement',
        ar: 'التسعير والدفع',
        en: 'Pricing & Payment',
      },
      technical: {
        fr: 'Support technique',
        ar: 'الدعم التقني',
        en: 'Technical Support',
      },
      career: {
        fr: 'Carrière et emplois',
        ar: 'المسار المهني والوظائف',
        en: 'Career & Jobs',
      },
    },
  };
  
  // Sample FAQ data (in a real app, this would come from an API)
  const faqData: FAQ[] = [
    // General FAQs
    {
      id: 1,
      question: "What is Mira Academy?",
      answer: "Mira Academy is an online learning platform that offers high-quality courses in technology, business, design, and personal development. Our mission is to provide accessible, engaging education that helps learners achieve their personal and professional goals.",
      category: "general"
    },
    {
      id: 2,
      question: "How do I create an account?",
      answer: "To create an account, click the 'Sign Up' button in the top right corner of our website. You can register using your email address or sign up with your Google, Facebook, or Apple account for quicker access.",
      category: "general"
    },
    {
      id: 3,
      question: "What makes Mira Academy different from other online learning platforms?",
      answer: "Mira Academy stands out through our focus on practical, industry-relevant skills, world-class instructors with real-world experience, interactive learning methods, personalized support, and a vibrant community of learners. We're committed to not just teaching theory, but helping you apply what you learn to real-world challenges.",
      category: "general"
    },
    
    // Courses FAQs
    {
      id: 4,
      question: "How long do I have access to course materials?",
      answer: "Once enrolled, you have lifetime access to the course materials, including any future updates to the curriculum. This allows you to learn at your own pace and revisit content whenever you need a refresher.",
      category: "courses"
    },
    {
      id: 5,
      question: "Are there any prerequisites for courses?",
      answer: "Prerequisites vary by course. Each course page clearly lists any required knowledge or skills needed before enrollment. For beginners, we offer introductory courses with no prerequisites. For more advanced courses, we'll recommend foundational courses to take first if you need to build your skills.",
      category: "courses"
    },
    {
      id: 6,
      question: "How are courses structured?",
      answer: "Our courses typically include video lectures, reading materials, practical exercises, quizzes, and projects. Many courses also feature interactive elements like coding challenges or design exercises. Most courses are self-paced, though some include scheduled live sessions with instructors.",
      category: "courses"
    },
    {
      id: 7,
      question: "Do I get a certificate upon completion?",
      answer: "Yes, after completing all required components of a course (lectures, assignments, and assessments), you'll receive a personalized certificate of completion. Our certificates can be added to your LinkedIn profile and shared with potential employers.",
      category: "courses"
    },
    
    // Pricing FAQs
    {
      id: 8,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay. For corporate training, we also offer invoice-based payments and purchase orders.",
      category: "pricing"
    },
    {
      id: 9,
      question: "Do you offer any discounts?",
      answer: "Yes, we regularly offer promotional discounts for new students, seasonal sales, and special offers for multiple course purchases. We also have special pricing for students, educators, and non-profit organizations. Subscribe to our newsletter for updates on upcoming promotions.",
      category: "pricing"
    },
    {
      id: 10,
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a 30-day money-back guarantee for all our courses. If you're not completely satisfied with your learning experience, contact our support team within 30 days of enrollment for a full refund, no questions asked.",
      category: "pricing"
    },
    {
      id: 11,
      question: "Do you offer scholarships or financial aid?",
      answer: "Yes, we have a scholarship program designed to support learners from underrepresented groups and those facing financial hardship. Applications are reviewed quarterly. Visit our Scholarships page to learn more about eligibility criteria and application deadlines.",
      category: "pricing"
    },
    
    // Technical FAQs
    {
      id: 12,
      question: "What technical requirements do I need to access the courses?",
      answer: "Our platform works on any modern web browser (Chrome, Firefox, Safari, Edge). For the best experience, we recommend a stable internet connection, updated browser, and speakers or headphones. Some programming courses may have specific software requirements, which are detailed on the course page.",
      category: "technical"
    },
    {
      id: 13,
      question: "Can I download course videos for offline viewing?",
      answer: "Yes, our mobile app allows you to download videos for offline viewing. This feature is available for iOS and Android devices. Downloaded content is accessible for 30 days within the app before requiring reconnection to the internet.",
      category: "technical"
    },
    {
      id: 14,
      question: "What should I do if I encounter technical issues?",
      answer: "If you experience technical difficulties, first try refreshing your browser or clearing your cache. For persistent issues, visit our Help Center for troubleshooting guides or contact our technical support team through the Support chat button or by emailing support@mira-academy.com.",
      category: "technical"
    },
    
    // Career FAQs
    {
      id: 15,
      question: "Will these courses help me get a job?",
      answer: "Our courses are designed with employability in mind, focusing on in-demand skills and practical experience. While we cannot guarantee job placement, many of our students have successfully transitioned to new careers or advanced in their current roles. Our Career Services team also offers resources like resume reviews, interview preparation, and job search strategies.",
      category: "career"
    },
    {
      id: 16,
      question: "Do you offer career counseling or job placement services?",
      answer: "Yes, we offer career guidance services including one-on-one career coaching sessions, resume and portfolio reviews, mock interviews, and access to our employer network. Advanced career services are available to students who complete full learning tracks or specializations.",
      category: "career"
    },
    {
      id: 17,
      question: "How can I highlight my Mira Academy certifications to employers?",
      answer: "You can add your certificates directly to your LinkedIn profile, include them in your resume's education or certifications section, and showcase projects completed during your courses in your portfolio. We also provide guidelines on how to effectively communicate your new skills to potential employers.",
      category: "career"
    }
  ];
  
  // Filter FAQs whenever filter criteria change
  useEffect(() => {
    let filtered = [...faqData];
    
    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }
    
    // Apply search filter
    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase();
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query)
      );
    }
    
    setFilteredFAQs(filtered);
  }, [selectedCategory, searchTerm]);
  
  // Toggle FAQ expansion
  const toggleFAQ = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  // Reset filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory(null);
  };
  
  // Get unique categories
  const categories = [
    { id: 'general', label: content.categories.general[language as keyof typeof content.categories.general] },
    { id: 'courses', label: content.categories.courses[language as keyof typeof content.categories.courses] },
    { id: 'pricing', label: content.categories.pricing[language as keyof typeof content.categories.pricing] },
    { id: 'technical', label: content.categories.technical[language as keyof typeof content.categories.technical] },
    { id: 'career', label: content.categories.career[language as keyof typeof content.categories.career] }
  ];

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
          {/* Search and Filter Section */}
          <div className="mb-10 bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              {/* Search input */}
              <div className="md:col-span-3">
                <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {content.search[language as keyof typeof content.search]}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={content.searchPlaceholder[language as keyof typeof content.searchPlaceholder]}
                    className={`w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                      language === 'ar' ? 'font-arabic text-right pr-10 pl-3' : ''
                    }`}
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
                  className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                    language === 'ar' ? 'font-arabic text-right' : ''
                  }`}
                  value={selectedCategory || ''}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                >
                  <option value="">
                    {content.allCategories[language as keyof typeof content.allCategories]}
                  </option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className={`flex justify-between items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <p className={`text-gray-600 text-sm ${language === 'ar' ? 'font-arabic' : ''}`}>
                {content.showing[language as keyof typeof content.showing]} {filteredFAQs.length} {content.of[language as keyof typeof content.of]} {faqData.length} {content.questions[language as keyof typeof content.questions]}
              </p>
              
              <button
                onClick={resetFilters}
                className={`px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {content.resetFilters[language as keyof typeof content.resetFilters]}
              </button>
            </div>
          </div>
          
          {/* FAQ List */}
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className={`w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors ${
                      language === 'ar' ? 'font-arabic text-right flex-row-reverse' : ''
                    }`}
                  >
                    <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                    <span className={`${language === 'ar' ? 'ml-0 mr-4' : 'ml-4'} transition-transform duration-300 ${expandedId === faq.id ? 'rotate-180' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  
                  {expandedId === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className={`text-gray-700 pt-2 border-t border-gray-100 ${
                        language === 'ar' ? 'font-arabic text-right' : ''
                      }`}>{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <div className={`text-center py-16 bg-white rounded-xl shadow-md ${
              language === 'ar' ? 'font-arabic' : ''
            }`}>
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {content.noQuestionsFound[language as keyof typeof content.noQuestionsFound]}
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
          
          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`mt-16 bg-primary-50 rounded-xl shadow-lg p-8 text-center ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.stillHaveQuestions[language as keyof typeof content.stillHaveQuestions]}
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              {content.cantFindAnswer[language as keyof typeof content.cantFindAnswer]}
            </p>
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors inline-flex items-center"
            >
              {content.contactUs[language as keyof typeof content.contactUs]}
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
          
          {/* Category Quick Links */}
          <div className="mt-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${
              language === 'ar' ? 'font-arabic text-right' : ''
            }`}>
              {content.browseByCategory[language as keyof typeof content.browseByCategory]}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -5 }}
                  className={`bg-white rounded-xl shadow-md p-4 text-center cursor-pointer hover:shadow-lg transition-all ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="mb-2">
                    {category.id === 'general' && <span className="text-3xl">ℹ️</span>}
                    {category.id === 'courses' && <span className="text-3xl">📚</span>}
                    {category.id === 'pricing' && <span className="text-3xl">💰</span>}
                    {category.id === 'technical' && <span className="text-3xl">🛠️</span>}
                    {category.id === 'career' && <span className="text-3xl">💼</span>}
                  </div>
                  <h3 className="font-medium text-gray-900">{category.label}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}