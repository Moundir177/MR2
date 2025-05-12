'use client';

import { useLanguage } from './LanguageContext';
import { motion } from './motion';
import Link from 'next/link';
import Image from 'next/image';

type BlogPost = {
  id: string;
  title: {
    fr: string;
    ar: string;
    en: string;
  };
  excerpt: {
    fr: string;
    ar: string;
    en: string;
  };
  author: string;
  date: {
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
};

export default function BlogSection() {
  const { language } = useLanguage();

  const sectionText = {
    title: {
      fr: 'Notre Blog',
      ar: 'مدونتنا',
      en: 'Our Blog',
    },
    subtitle: {
      fr: 'Découvrez nos derniers articles et actualités',
      ar: 'اكتشف أحدث مقالاتنا وأخبارنا',
      en: 'Discover our latest articles and news',
    },
    readMore: {
      fr: 'Lire la suite',
      ar: 'قراءة المزيد',
      en: 'Read more',
    },
    viewAll: {
      fr: 'Voir tous les articles',
      ar: 'عرض جميع المقالات',
      en: 'View all articles',
    },
    publishedOn: {
      fr: 'Publié le',
      ar: 'نُشر في',
      en: 'Published on',
    },
    by: {
      fr: 'par',
      ar: 'بواسطة',
      en: 'by',
    },
  };

  const blogPosts: BlogPost[] = [
    {
      id: 'post-1',
      title: {
        fr: 'Les 5 Compétences Technologiques les Plus Demandées en 2023',
        ar: 'المهارات التقنية الخمسة الأكثر طلبًا في 2023',
        en: 'The 5 Most In-Demand Tech Skills in 2023',
      },
      excerpt: {
        fr: 'Découvrez les compétences technologiques qui sont les plus recherchées par les employeurs cette année et comment vous pouvez les acquérir.',
        ar: 'اكتشف المهارات التقنية الأكثر طلبًا من قبل أصحاب العمل هذا العام وكيف يمكنك اكتسابها.',
        en: 'Discover the tech skills that are most sought after by employers this year and how you can acquire them.',
      },
      author: 'Karim Mansouri',
      date: {
        fr: '15 juin 2023',
        ar: '15 يونيو 2023',
        en: 'June 15, 2023',
      },
      image: '/blog/tech-skills.jpg',
      category: {
        fr: 'Technologie',
        ar: 'تكنولوجيا',
        en: 'Technology',
      },
    },
    {
      id: 'post-2',
      title: {
        fr: 'Comment l\'IA Transforme l\'Éducation en Algérie',
        ar: 'كيف يغير الذكاء الاصطناعي التعليم في الجزائر',
        en: 'How AI is Transforming Education in Algeria',
      },
      excerpt: {
        fr: 'L\'intelligence artificielle révolutionne le secteur de l\'éducation en Algérie. Voici comment les institutions locales adoptent cette technologie.',
        ar: 'الذكاء الاصطناعي يحدث ثورة في قطاع التعليم في الجزائر. إليك كيف تتبنى المؤسسات المحلية هذه التكنولوجيا.',
        en: 'Artificial intelligence is revolutionizing the education sector in Algeria. Here\'s how local institutions are adopting this technology.',
      },
      author: 'Dr. Amina Kaddour',
      date: {
        fr: '28 mai 2023',
        ar: '28 مايو 2023',
        en: 'May 28, 2023',
      },
      image: '/blog/ai-education.jpg',
      category: {
        fr: 'Éducation',
        ar: 'تعليم',
        en: 'Education',
      },
    },
    {
      id: 'post-3',
      title: {
        fr: 'Conseils pour Réussir son Entretien d\'Embauche',
        ar: 'نصائح للنجاح في مقابلة العمل',
        en: 'Tips for Succeeding in Your Job Interview',
      },
      excerpt: {
        fr: 'Préparez-vous à impressionner lors de votre prochain entretien d\'embauche avec ces conseils pratiques de nos experts en développement de carrière.',
        ar: 'استعد لإحداث انطباع في مقابلة عملك القادمة مع هذه النصائح العملية من خبراء تطوير المهنة لدينا.',
        en: 'Prepare to impress at your next job interview with these practical tips from our career development experts.',
      },
      author: 'Leila Bouaziz',
      date: {
        fr: '10 avril 2023',
        ar: '10 أبريل 2023',
        en: 'April 10, 2023',
      },
      image: '/blog/interview-tips.jpg',
      category: {
        fr: 'Carrière',
        ar: 'مهنة',
        en: 'Career',
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
            className={`mt-4 text-lg text-neutral-600 max-w-3xl mx-auto ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {sectionText.subtitle[language]}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="h-48 bg-neutral-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-xl font-bold text-neutral-400">
                    {post.id.toUpperCase()}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div 
                  className={`inline-block px-3 py-1 text-xs font-semibold text-primary-700 bg-primary-50 rounded-full mb-3 ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {post.category[language]}
                </div>
                <h3 
                  className={`text-xl font-semibold text-neutral-900 mb-2 ${
                    language === 'ar' ? 'font-arabic text-right' : ''
                  }`}
                >
                  {post.title[language]}
                </h3>
                <p 
                  className={`text-neutral-600 mb-4 ${
                    language === 'ar' ? 'font-arabic text-right' : ''
                  }`}
                >
                  {post.excerpt[language]}
                </p>
                <div 
                  className={`flex items-center justify-between text-sm ${
                    language === 'ar' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className={`text-neutral-500 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {sectionText.publishedOn[language]} {post.date[language]} {sectionText.by[language]} {post.author}
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href={`/blog/${post.id}`}
                    className={`text-primary-600 hover:text-primary-800 font-medium inline-flex items-center ${
                      language === 'ar' ? 'font-arabic flex-row-reverse' : ''
                    }`}
                  >
                    {sectionText.readMore[language]}
                    <svg 
                      className={`${language === 'ar' ? 'mr-2' : 'ml-2'} -mr-1 w-4 h-4 ${
                        language === 'ar' ? 'transform rotate-180' : ''
                      }`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      ></path>
                    </svg>
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
            href="/blog"
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