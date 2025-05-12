'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutUsSection() {
  const { language } = useLanguage();

  const sectionText = {
    title: {
      fr: 'À Propos de MIRA ACADEMY',
      ar: 'حول أكاديمية ميرا',
      en: 'About MIRA ACADEMY',
    },
    subtitle: {
      fr: 'Former la prochaine génération de leaders algériens',
      ar: 'تدريب الجيل القادم من القادة الجزائريين',
      en: 'Training the next generation of Algerian leaders',
    },
    description: {
      fr: 'MIRA ACADEMY est une institution éducative algérienne de premier plan, dédiée à offrir des formations de haute qualité dans divers domaines. Notre mission est de doter les étudiants des compétences essentielles pour réussir dans un monde en constante évolution. Fondée sur des principes d\'excellence, d\'innovation et d\'accessibilité, nous nous engageons à créer un environnement d\'apprentissage stimulant qui favorise la croissance personnelle et professionnelle.',
      ar: 'أكاديمية ميرا هي مؤسسة تعليمية جزائرية رائدة، مكرسة لتقديم تدريب عالي الجودة في مختلف المجالات. مهمتنا هي تزويد الطلاب بالمهارات الأساسية للنجاح في عالم دائم التغير. تأسست على مبادئ التميز والابتكار وسهولة الوصول، نحن ملتزمون بخلق بيئة تعليمية محفزة تعزز النمو الشخصي والمهني.',
      en: 'MIRA ACADEMY is a leading Algerian educational institution dedicated to providing high-quality training in various fields. Our mission is to equip students with the essential skills to succeed in an ever-changing world. Founded on principles of excellence, innovation, and accessibility, we are committed to creating a stimulating learning environment that fosters personal and professional growth.',
    },
    stats: {
      studentsTitle: {
        fr: 'Étudiants Formés',
        ar: 'الطلاب المدربين',
        en: 'Students Trained',
      },
      coursesTitle: {
        fr: 'Cours Proposés',
        ar: 'الدورات المقدمة',
        en: 'Courses Offered',
      },
      instructorsTitle: {
        fr: 'Instructeurs Experts',
        ar: 'مدربين خبراء',
        en: 'Expert Instructors',
      },
      yearsTitle: {
        fr: 'Années d\'Expérience',
        ar: 'سنوات الخبرة',
        en: 'Years of Experience',
      },
    },
    values: {
      title: {
        fr: 'Nos Valeurs',
        ar: 'قيمنا',
        en: 'Our Values',
      },
      excellence: {
        title: {
          fr: 'Excellence',
          ar: 'التميز',
          en: 'Excellence',
        },
        description: {
          fr: 'Nous nous efforçons de maintenir les normes les plus élevées dans tous les aspects de notre enseignement.',
          ar: 'نسعى جاهدين للحفاظ على أعلى المعايير في جميع جوانب تعليمنا.',
          en: 'We strive to maintain the highest standards in all aspects of our teaching.',
        },
      },
      innovation: {
        title: {
          fr: 'Innovation',
          ar: 'الابتكار',
          en: 'Innovation',
        },
        description: {
          fr: 'Nous adoptons constamment de nouvelles méthodes et technologies pour améliorer l\'expérience d\'apprentissage.',
          ar: 'نتبنى باستمرار أساليب وتقنيات جديدة لتحسين تجربة التعلم.',
          en: 'We continually adopt new methods and technologies to enhance the learning experience.',
        },
      },
      accessibility: {
        title: {
          fr: 'Accessibilité',
          ar: 'سهولة الوصول',
          en: 'Accessibility',
        },
        description: {
          fr: 'Nous croyons que l\'éducation de qualité devrait être accessible à tous, indépendamment de leur origine.',
          ar: 'نؤمن بأن التعليم الجيد يجب أن يكون متاحًا للجميع، بغض النظر عن خلفيتهم.',
          en: 'We believe quality education should be accessible to everyone, regardless of their background.',
        },
      },
      community: {
        title: {
          fr: 'Communauté',
          ar: 'المجتمع',
          en: 'Community',
        },
        description: {
          fr: 'Nous favorisons un fort sentiment d\'appartenance et de soutien parmi nos étudiants et notre personnel.',
          ar: 'نعزز الشعور القوي بالانتماء والدعم بين طلابنا وموظفينا.',
          en: 'We foster a strong sense of belonging and support among our students and staff.',
        },
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
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

        <div className={`flex flex-col lg:flex-row gap-8 mb-16 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/globe.svg"
                alt="MIRA ACADEMY"
                fill
                style={{ objectFit: 'contain' }}
                priority
                className="p-12 bg-neutral-100"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/60 to-transparent"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={`h-full flex flex-col justify-center ${language === 'ar' ? 'text-right font-arabic' : ''}`}>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {sectionText.description[language]}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className={`text-center p-4 rounded-lg bg-white shadow-md ${language === 'ar' ? 'font-arabic' : ''}`}>
                  <div className="text-3xl font-bold text-primary-600">5000+</div>
                  <div className="text-neutral-600">{sectionText.stats.studentsTitle[language]}</div>
                </div>
                
                <div className={`text-center p-4 rounded-lg bg-white shadow-md ${language === 'ar' ? 'font-arabic' : ''}`}>
                  <div className="text-3xl font-bold text-primary-600">50+</div>
                  <div className="text-neutral-600">{sectionText.stats.coursesTitle[language]}</div>
                </div>
                
                <div className={`text-center p-4 rounded-lg bg-white shadow-md ${language === 'ar' ? 'font-arabic' : ''}`}>
                  <div className="text-3xl font-bold text-primary-600">30+</div>
                  <div className="text-neutral-600">{sectionText.stats.instructorsTitle[language]}</div>
                </div>
                
                <div className={`text-center p-4 rounded-lg bg-white shadow-md ${language === 'ar' ? 'font-arabic' : ''}`}>
                  <div className="text-3xl font-bold text-primary-600">10+</div>
                  <div className="text-neutral-600">{sectionText.stats.yearsTitle[language]}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 
            className={`text-2xl font-bold text-neutral-900 mb-8 text-center ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {sectionText.values.title[language]}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className={`bg-white p-6 rounded-xl shadow-md ${language === 'ar' ? 'font-arabic text-right' : ''}`}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-neutral-900 mb-2">
                {sectionText.values.excellence.title[language]}
              </h4>
              <p className="text-neutral-600">
                {sectionText.values.excellence.description[language]}
              </p>
            </motion.div>
            
            <motion.div 
              className={`bg-white p-6 rounded-xl shadow-md ${language === 'ar' ? 'font-arabic text-right' : ''}`}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-neutral-900 mb-2">
                {sectionText.values.innovation.title[language]}
              </h4>
              <p className="text-neutral-600">
                {sectionText.values.innovation.description[language]}
              </p>
            </motion.div>
            
            <motion.div 
              className={`bg-white p-6 rounded-xl shadow-md ${language === 'ar' ? 'font-arabic text-right' : ''}`}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-neutral-900 mb-2">
                {sectionText.values.accessibility.title[language]}
              </h4>
              <p className="text-neutral-600">
                {sectionText.values.accessibility.description[language]}
              </p>
            </motion.div>
            
            <motion.div 
              className={`bg-white p-6 rounded-xl shadow-md ${language === 'ar' ? 'font-arabic text-right' : ''}`}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-neutral-900 mb-2">
                {sectionText.values.community.title[language]}
              </h4>
              <p className="text-neutral-600">
                {sectionText.values.community.description[language]}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 