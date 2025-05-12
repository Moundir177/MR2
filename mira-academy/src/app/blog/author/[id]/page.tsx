'use client';

import { useLanguage } from '../../../../components/LanguageContext';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import { blogPosts } from '../../blogData';
import NewsletterSignup from '../../../../components/NewsletterSignup';

type AuthorInfo = {
  id: string;
  name: string;
  title: {
    fr: string;
    ar: string;
    en: string;
  };
  avatar: string;
  bio: {
    fr: string;
    ar: string;
    en: string;
  };
  expertise: {
    fr: string[];
    ar: string[];
    en: string[];
  };
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
};

// Extended author information
const authors: AuthorInfo[] = [
  {
    id: 'sarah-leblanc',
    name: 'Dr. Sarah Leblanc',
    title: {
      fr: 'Spécialiste en pédagogie',
      ar: 'متخصصة في التربية',
      en: 'Educational Specialist',
    },
    avatar: '/authors/sarah.jpg',
    bio: {
      fr: 'Dr. Sarah Leblanc est une spécialiste en pédagogie avec plus de 15 ans d\'expérience dans le domaine de l\'éducation. Elle a travaillé avec diverses institutions pour développer des méthodes d\'apprentissage innovantes.',
      ar: 'الدكتورة سارة لوبلان متخصصة في التربية مع أكثر من 15 عامًا من الخبرة في مجال التعليم. عملت مع مختلف المؤسسات لتطوير طرق تعلم مبتكرة.',
      en: 'Dr. Sarah Leblanc is an educational specialist with over 15 years of experience in the field of education. She has worked with various institutions to develop innovative learning methods.',
    },
    expertise: {
      fr: ['Méthodes d\'apprentissage', 'Pédagogie moderne', 'Psychologie éducative'],
      ar: ['طرق التعلم', 'التربية الحديثة', 'علم النفس التربوي'],
      en: ['Learning methods', 'Modern pedagogy', 'Educational psychology'],
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sarah-leblanc',
      twitter: 'https://twitter.com/sarahleblanc',
    },
  },
  {
    id: 'mohammed-kaddour',
    name: 'Mohammed Kaddour',
    title: {
      fr: 'Expert en technologie éducative',
      ar: 'خبير في تكنولوجيا التعليم',
      en: 'Educational Technology Expert',
    },
    avatar: '/authors/mohammed.jpg',
    bio: {
      fr: 'Mohammed Kaddour est un expert en technologie éducative passionné par l\'intégration des nouvelles technologies dans les processus d\'apprentissage. Il a dirigé plusieurs projets de transformation numérique dans des établissements d\'enseignement.',
      ar: 'محمد قدور خبير في تكنولوجيا التعليم متحمس لدمج التقنيات الجديدة في عمليات التعلم. قاد العديد من مشاريع التحول الرقمي في المؤسسات التعليمية.',
      en: 'Mohammed Kaddour is an educational technology expert passionate about integrating new technologies into learning processes. He has led several digital transformation projects in educational institutions.',
    },
    expertise: {
      fr: ['Transformation numérique', 'E-learning', 'Intelligence artificielle dans l\'éducation'],
      ar: ['التحول الرقمي', 'التعلم الإلكتروني', 'الذكاء الاصطناعي في التعليم'],
      en: ['Digital transformation', 'E-learning', 'Artificial intelligence in education'],
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/in/mohammed-kaddour',
      website: 'https://mohammedkaddour.com',
    },
  },
  {
    id: 'leila-bouzidi',
    name: 'Leila Bouzidi',
    title: {
      fr: 'Directrice des Langues',
      ar: 'مديرة اللغات',
      en: 'Languages Director',
    },
    avatar: '/authors/leila.jpg',
    bio: {
      fr: 'Leila Bouzidi est linguiste et polyglotte, parlant couramment cinq langues. En tant que Directrice des Langues à MIRA ACADEMY, elle supervise tous les programmes linguistiques et développe des méthodes d\'apprentissage des langues innovantes.',
      ar: 'ليلى بوزيدي هي عالمة لغويات ومتعددة اللغات، تتحدث بطلاقة خمس لغات. بصفتها مديرة اللغات في أكاديمية ميرا، تشرف على جميع برامج اللغات وتطور طرقًا مبتكرة لتعلم اللغات.',
      en: 'Leila Bouzidi is a linguist and polyglot, fluently speaking five languages. As the Languages Director at MIRA ACADEMY, she oversees all language programs and develops innovative language learning methods.',
    },
    expertise: {
      fr: ['Linguistique appliquée', 'Apprentissage des langues', 'Communication interculturelle'],
      ar: ['اللغويات التطبيقية', 'تعلم اللغات', 'التواصل بين الثقافات'],
      en: ['Applied linguistics', 'Language learning', 'Intercultural communication'],
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/in/leila-bouzidi',
      twitter: 'https://twitter.com/leilabouzidi',
    },
  },
  {
    id: 'karim-mansouri',
    name: 'Karim Mansouri',
    title: {
      fr: 'Directeur des Programmes Tech',
      ar: 'مدير برامج التكنولوجيا',
      en: 'Tech Programs Director',
    },
    avatar: '/authors/karim.jpg',
    bio: {
      fr: 'Karim Mansouri possède une vaste expérience dans l\'industrie technologique, ayant travaillé pour plusieurs startups et grandes entreprises. Il dirige maintenant les programmes technologiques à MIRA ACADEMY, formant la prochaine génération de développeurs et d\'ingénieurs.',
      ar: 'يمتلك كريم منصوري خبرة واسعة في صناعة التكنولوجيا، حيث عمل لدى العديد من الشركات الناشئة والكبرى. يدير الآن برامج التكنولوجيا في أكاديمية ميرا، حيث يقوم بتدريب الجيل القادم من المطورين والمهندسين.',
      en: 'Karim Mansouri has extensive experience in the technology industry, having worked for several startups and major companies. He now directs the technology programs at MIRA ACADEMY, training the next generation of developers and engineers.',
    },
    expertise: {
      fr: ['Développement web', 'Data Science', 'Technologies cloud'],
      ar: ['تطوير الويب', 'علوم البيانات', 'تقنيات السحابة'],
      en: ['Web development', 'Data Science', 'Cloud technologies'],
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/in/karim-mansouri',
      website: 'https://karimmansouri.com',
    },
  },
  {
    id: 'amina-benali',
    name: 'Amina Benali',
    title: {
      fr: 'Responsable des anciens élèves',
      ar: 'مسؤولة الخريجين',
      en: 'Alumni Manager',
    },
    avatar: '/authors/amina.jpg',
    bio: {
      fr: 'Amina Benali maintient des liens solides avec les anciens étudiants de MIRA ACADEMY, organisant des événements de réseautage et suivant leurs parcours professionnels. Elle a une passion pour aider les étudiants à réussir leur transition vers le monde professionnel.',
      ar: 'تحافظ أمينة بن علي على روابط قوية مع خريجي أكاديمية ميرا، وتنظم فعاليات للتواصل وتتابع مساراتهم المهنية. لديها شغف لمساعدة الطلاب على النجاح في انتقالهم إلى عالم العمل.',
      en: 'Amina Benali maintains strong connections with MIRA ACADEMY alumni, organizing networking events and tracking their career paths. She has a passion for helping students successfully transition into the professional world.',
    },
    expertise: {
      fr: ['Développement de carrière', 'Réseautage professionnel', 'Mentorat'],
      ar: ['تطوير المسار المهني', 'التواصل المهني', 'الإرشاد'],
      en: ['Career development', 'Professional networking', 'Mentoring'],
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/in/amina-benali',
    },
  },
  {
    id: 'youssef-hamid',
    name: 'Youssef Hamid',
    title: {
      fr: 'Spécialiste de l\'apprentissage en ligne',
      ar: 'أخصائي التعلم عبر الإنترنت',
      en: 'E-Learning Specialist',
    },
    avatar: '/authors/youssef.jpg',
    bio: {
      fr: 'Youssef Hamid est spécialisé dans la conception de cours en ligne interactifs et engageants. Il a contribué au développement de la plateforme d\'apprentissage numérique de MIRA ACADEMY et aide les instructeurs à créer des contenus en ligne efficaces.',
      ar: 'يتخصص يوسف حامد في تصميم دورات تفاعلية وجذابة عبر الإنترنت. ساهم في تطوير منصة التعلم الرقمية في أكاديمية ميرا ويساعد المدرسين على إنشاء محتوى فعال عبر الإنترنت.',
      en: 'Youssef Hamid specializes in designing interactive and engaging online courses. He has contributed to the development of MIRA ACADEMY\'s digital learning platform and helps instructors create effective online content.',
    },
    expertise: {
      fr: ['Conception pédagogique', 'Technologies d\'apprentissage en ligne', 'Engagement des étudiants'],
      ar: ['التصميم التعليمي', 'تقنيات التعلم عبر الإنترنت', 'إشراك الطلاب'],
      en: ['Instructional design', 'E-learning technologies', 'Student engagement'],
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/in/youssef-hamid',
      twitter: 'https://twitter.com/youssefhamid',
      website: 'https://youssefhamid.com',
    },
  },
];

export default function AuthorProfilePage() {
  const { language } = useLanguage();
  const params = useParams();
  const authorId = params.id as string;
  const [isLoading, setIsLoading] = useState(true);
  
  // Find the author details
  const author = authors.find(a => a.id === authorId);
  
  // Get all posts by this author
  const authorPosts = useMemo(() => {
    return blogPosts.filter(post => 
      post.author.name === author?.name
    );
  }, [author]);
  
  useEffect(() => {
    // Simulate loading state for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [authorId]);
  
  const pageContent = {
    backToList: {
      fr: 'Retour au blog',
      ar: 'العودة إلى المدونة',
      en: 'Back to blog',
    },
    articles: {
      fr: 'Articles',
      ar: 'المقالات',
      en: 'Articles',
    },
    expertise: {
      fr: 'Domaines d\'expertise',
      ar: 'مجالات الخبرة',
      en: 'Areas of expertise',
    },
    follow: {
      fr: 'Suivre',
      ar: 'متابعة',
      en: 'Follow',
    },
    publishedOn: {
      fr: 'Publié le',
      ar: 'نشر في',
      en: 'Published on',
    },
    readMore: {
      fr: 'Lire l\'article',
      ar: 'قراءة المقال',
      en: 'Read article',
    },
    allAuthors: {
      fr: 'Tous nos auteurs',
      ar: 'جميع الكتاب لدينا',
      en: 'All our authors',
    },
    noArticles: {
      fr: 'Aucun article publié pour le moment.',
      ar: 'لم يتم نشر أي مقالات حتى الآن.',
      en: 'No articles published yet.',
    },
    authorNotFound: {
      fr: 'Auteur non trouvé',
      ar: 'الكاتب غير موجود',
      en: 'Author not found',
    }
  };
  
  // Format date based on language
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    
    if (language === 'fr') {
      return new Intl.DateTimeFormat('fr-FR', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      }).format(date);
    } else if (language === 'ar') {
      return new Intl.DateTimeFormat('ar-SA', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      }).format(date);
    } else {
      return new Intl.DateTimeFormat('en-US', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      }).format(date);
    }
  };
  
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="h-52 w-52 bg-gray-200 rounded-lg"></div>
            <div className="flex-1">
              <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/4 mb-6"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
            </div>
          </div>
          <div className="h-8 bg-gray-200 rounded w-1/4 mt-12 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-48 bg-gray-200 rounded"></div>
            <div className="h-48 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!author) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <h1 className={`text-2xl font-bold text-neutral-900 mb-6 ${
          language === 'ar' ? 'font-arabic' : ''
        }`}>
          {pageContent.authorNotFound[language]}
        </h1>
        <Link
          href="/blog"
          className={`inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
            language === 'ar' ? 'font-arabic' : ''
          }`}
        >
          {pageContent.backToList[language]}
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/blog"
          className={`inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-500 mb-8 ${
            language === 'ar' ? 'font-arabic' : ''
          }`}
        >
          <svg className="-ml-1 mr-1 h-5 w-5 text-primary-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          {pageContent.backToList[language]}
        </Link>
        
        <div className={`flex flex-col md:flex-row gap-8 ${
          language === 'ar' ? 'md:flex-row-reverse' : ''
        }`}>
          {/* Author avatar and info */}
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="h-48 w-48 mx-auto rounded-full overflow-hidden mb-6">
                  <img 
                    src={author.avatar} 
                    alt={author.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <div className={`text-center ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}>
                  <h1 className="text-2xl font-bold text-neutral-900 mb-1">{author.name}</h1>
                  <p className="text-neutral-600 mb-4">{author.title[language]}</p>
                  
                  {/* Social links */}
                  {author.socialLinks && (
                    <div className="flex justify-center space-x-4 mb-6">
                      {author.socialLinks.linkedin && (
                        <a href={author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-700">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      )}
                      {author.socialLinks.twitter && (
                        <a href={author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-700">
                          <span className="sr-only">Twitter</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      )}
                      {author.socialLinks.website && (
                        <a href={author.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-700">
                          <span className="sr-only">Website</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10 12c0 .685-.07 1.354-.202 2h-3.853c.121-1.293.129-2.707.031-4h3.854c.16.643.265 1.307.17 2zm-.296-4h-3.381c-.411-1.848-1.118-3.418-2.053-4.534 2.34 1.008 4.164 2.979 5.434 4.534zm-1.605 8h-2.359c.361-.757.661-1.609.882-2.5h2.088c-.241.826-.569 1.599-.611 2.5zm-3.447 0h-3.652v-2.5h4.129c-.263.953-.614 1.806-.477 2.5zm-3.652-4h4.343c.136 1.293.172 2.707.048 4h-4.391v-4zm0-2v-4h3.936c-.173 1.293-.23 2.707-.135 4h-3.801zm2.06-6h-2.06v4h3.247c-.145-1.526-.164-2.963-.289-4h-.899zm-2.06 14h2.559c-.487-1.518-.73-3.016-.892-4.5h-1.667v4.5zm.034 2c1.084 1.636 2.293 3 3.196 4-2.125-.947-3.814-2.784-3.196-4zm3.966 3.901c-.939-1.116-1.636-2.686-2.043-4.534h2.434c-.21.337-.43.678-.391.633zm2.434-6.901h-3.651v-4h4.214c-.164 1.293-.218 2.707-.32 4h-.243zm4.214-6h-8.428v-4h8.428v4zm0 2v4h-4.214c-.317-1.293-.376-2.707-.241-4h4.163l.292.zm-11.277-4c-.211.337-.43.678-.391.633.034-.033-.274-.44-.583-.633h.974zm-2.8 0h2.177c-.937 1.116-1.634 2.686-2.041 4.534h-2.359c.557-1.635 1.377-3.344 2.223-4.534zm-2.177 6.534h2.359c-.241.826-.554 1.599-.65 2.5h-2.302c.193-.674.375-1.337.593-1.998v-.502zm6.059 7.466c-.985-.483-1.818-1.317-2.51-2.28 1.284.904 2.851 1.773 3.95 2.5l-.498-.082c-.317-.051-.628-.085-.942-.138zm-7.066-2.28c.985-.483 1.818-1.317 2.51-2.28-1.284.904-2.851 1.773-3.95 2.5l.498-.082c.317-.051.628-.085.942-.138z" fillRule="evenodd" clipRule="evenodd" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Expertise */}
                <div className={`${
                  language === 'ar' ? 'text-right' : ''
                }`}>
                  <h2 className={`text-lg font-medium text-neutral-900 mb-3 ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}>
                    {pageContent.expertise[language]}
                  </h2>
                  <div className={`flex flex-wrap gap-2 ${
                    language === 'ar' ? 'justify-end' : ''
                  }`}>
                    {author.expertise[language].map((skill, index) => (
                      <span 
                        key={index}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 ${
                          language === 'ar' ? 'font-arabic' : ''
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Newsletter signup (compact) */}
            <div className="mt-6">
              <NewsletterSignup language={language} compact={true} />
            </div>
          </div>
          
          {/* Author bio and articles */}
          <div className="md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className={`bg-white rounded-xl shadow-md overflow-hidden p-6 mb-8 ${
                language === 'ar' ? 'text-right' : ''
              }`}>
                <p className={`text-neutral-700 leading-relaxed ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}>
                  {author.bio[language]}
                </p>
              </div>
              
              <h2 className={`text-2xl font-bold text-neutral-900 mb-6 ${
                language === 'ar' ? 'font-arabic' : ''
              }`}>
                {pageContent.articles[language]} ({authorPosts.length})
              </h2>
              
              {authorPosts.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {authorPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    >
                      <article className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
                        language === 'ar' ? 'text-right' : ''
                      }`}>
                        <div className={`flex flex-col md:flex-row ${
                          language === 'ar' ? 'md:flex-row-reverse' : ''
                        }`}>
                          <div className="md:w-1/3">
                            <Link href={`/blog/${post.id}`} className="block h-full">
                              <div className="h-48 bg-neutral-200 relative overflow-hidden">
                                {post.image && (
                                  <img 
                                    src={post.image} 
                                    alt={post.title[language]} 
                                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                  />
                                )}
                              </div>
                            </Link>
                          </div>
                          
                          <div className="p-6 md:w-2/3">
                            <div className={`flex justify-between items-center mb-3 ${
                              language === 'ar' ? 'flex-row-reverse' : ''
                            }`}>
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 ${
                                language === 'ar' ? 'font-arabic' : ''
                              }`}>
                                {post.category[language]}
                              </span>
                              <span className={`text-sm text-neutral-500 ${
                                language === 'ar' ? 'font-arabic' : ''
                              }`}>
                                {pageContent.publishedOn[language]} {formatDate(post.date)}
                              </span>
                            </div>
                            
                            <Link href={`/blog/${post.id}`}>
                              <h3 className={`text-xl font-bold text-neutral-900 mb-2 hover:text-primary-600 transition-colors ${
                                language === 'ar' ? 'font-arabic' : ''
                              }`}>
                                {post.title[language]}
                              </h3>
                            </Link>
                            
                            <p className={`text-neutral-600 mb-4 ${
                              language === 'ar' ? 'font-arabic' : ''
                            }`}>
                              {post.excerpt[language]}
                            </p>
                            
                            <Link
                              href={`/blog/${post.id}`}
                              className={`inline-flex items-center text-primary-600 hover:text-primary-500 font-medium ${
                                language === 'ar' ? 'font-arabic' : ''
                              }`}
                            >
                              {pageContent.readMore[language]} {language === 'ar' ? '←' : '→'}
                            </Link>
                          </div>
                        </div>
                      </article>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className={`text-center py-12 bg-white rounded-xl shadow-md ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}>
                  <p className="text-neutral-600">{pageContent.noArticles[language]}</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 