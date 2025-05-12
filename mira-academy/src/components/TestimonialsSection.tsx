'use client';

import { useLanguage } from './LanguageContext';
import { useState } from 'react';

type Language = 'fr' | 'ar' | 'en';

type Testimonial = {
  id: string;
  name: string;
  role: {
    fr: string;
    ar: string;
    en: string;
  };
  content: {
    fr: string;
    ar: string;
    en: string;
  };
  image: string;
  rating: number;
};

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionText = {
    title: {
      fr: 'Ce que disent nos étudiants',
      ar: 'ما يقوله طلابنا',
      en: 'What Our Students Say',
    },
    subtitle: {
      fr: 'Des milliers d\'étudiants ont déjà fait confiance à MIRA ACADEMY pour leur formation',
      ar: 'آلاف الطلاب وثقوا بالفعل في أكاديمية ميرا لتدريبهم',
      en: 'Thousands of students have already trusted MIRA ACADEMY for their training',
    },
  };

  const testimonials: Testimonial[] = [
    {
      id: 'testimonial-1',
      name: 'Amina Benkaci',
      role: {
        fr: 'Étudiante en développement web',
        ar: 'طالبة في تطوير الويب',
        en: 'Web Development Student',
      },
      content: {
        fr: 'Les cours de MIRA ACADEMY m\'ont permis d\'acquérir les compétences nécessaires pour lancer ma carrière en développement web. Les formateurs sont excellents et le contenu est très bien structuré.',
        ar: 'سمحت لي دورات أكاديمية ميرا باكتساب المهارات اللازمة لبدء حياتي المهنية في تطوير الويب. المدربون ممتازون والمحتوى منظم جيدًا.',
        en: 'MIRA ACADEMY courses have allowed me to acquire the necessary skills to launch my career in web development. The trainers are excellent and the content is very well structured.',
      },
      image: '/testimonial-1.jpg',
      rating: 5,
    },
    {
      id: 'testimonial-2',
      name: 'Karim Hadj',
      role: {
        fr: 'Professionnel en marketing',
        ar: 'محترف في التسويق',
        en: 'Marketing Professional',
      },
      content: {
        fr: 'J\'ai suivi le cours de marketing digital de MIRA ACADEMY et cela a vraiment transformé ma façon de travailler. Les connaissances acquises sont immédiatement applicables et ont eu un impact significatif sur mes performances.',
        ar: 'لقد أخذت دورة التسويق الرقمي من أكاديمية ميرا وقد غيرت حقًا طريقة عملي. المعرفة المكتسبة قابلة للتطبيق على الفور وكان لها تأثير كبير على أدائي.',
        en: 'I took MIRA ACADEMY\'s digital marketing course and it really transformed the way I work. The knowledge gained is immediately applicable and has had a significant impact on my performance.',
      },
      image: '/testimonial-2.jpg',
      rating: 4,
    },
    {
      id: 'testimonial-3',
      name: 'Leila Mebarki',
      role: {
        fr: 'Entrepreneure',
        ar: 'رائدة أعمال',
        en: 'Entrepreneur',
      },
      content: {
        fr: 'En tant qu\'entrepreneure, les formations de MIRA ACADEMY m\'ont donné les outils et les compétences pour développer mon entreprise. L\'aspect pratique des cours et l\'accompagnement sont exceptionnels.',
        ar: 'بصفتي رائدة أعمال، زودتني دورات أكاديمية ميرا بالأدوات والمهارات لتطوير عملي. الجانب العملي للدورات والدعم استثنائيان.',
        en: 'As an entrepreneur, MIRA ACADEMY training has given me the tools and skills to grow my business. The practical aspect of the courses and the support are exceptional.',
      },
      image: '/testimonial-3.jpg',
      rating: 5,
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className={`text-3xl font-bold text-neutral-900 sm:text-4xl ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {sectionText.title[language as Language]}
          </h2>
          <p 
            className={`mt-4 text-lg text-neutral-600 max-w-3xl mx-auto ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {sectionText.subtitle[language as Language]}
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 bg-gradient-to-br from-primary-500 to-primary-700 text-white p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="h-24 w-24 rounded-full bg-white/20 mx-auto flex items-center justify-center text-3xl font-bold">
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                  <div className="mt-4">
                    <div className={`text-xl font-bold ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {testimonials[activeIndex].name}
                    </div>
                    <div className={`text-primary-200 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {testimonials[activeIndex].role[language as Language]}
                    </div>
                    <div className="mt-2 flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-primary-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12 flex-1 flex items-center">
                <blockquote>
                  <p 
                    className={`text-lg md:text-xl text-neutral-700 leading-relaxed ${
                      language === 'ar' ? 'font-arabic text-right' : ''
                    }`}
                  >
                    "{testimonials[activeIndex].content[language as Language]}"
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            <button
              type="button"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
              onClick={handlePrev}
            >
              <span className="sr-only">Previous</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`h-3 w-3 rounded-full ${
                  activeIndex === index ? 'bg-primary-500' : 'bg-neutral-300'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </button>
            ))}
            <button
              type="button"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
              onClick={handleNext}
            >
              <span className="sr-only">Next</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 