'use client';

import { useLanguage } from './LanguageContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FAQ = {
  id: string;
  question: {
    fr: string;
    ar: string;
    en: string;
  };
  answer: {
    fr: string;
    ar: string;
    en: string;
  };
};

export default function FAQSection() {
  const { language } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const sectionText = {
    title: {
      fr: 'Questions Fréquemment Posées',
      ar: 'الأسئلة الشائعة',
      en: 'Frequently Asked Questions',
    },
    subtitle: {
      fr: 'Trouvez des réponses aux questions les plus courantes sur MIRA ACADEMY',
      ar: 'ابحث عن إجابات للأسئلة الأكثر شيوعًا حول أكاديمية ميرا',
      en: 'Find answers to the most common questions about MIRA ACADEMY',
    },
    contact: {
      fr: 'Vous n\'avez pas trouvé votre réponse?',
      ar: 'لم تجد إجابتك؟',
      en: 'Didn\'t find your answer?',
    },
    contactLink: {
      fr: 'Contactez-nous',
      ar: 'اتصل بنا',
      en: 'Contact us',
    },
  };

  const faqs: FAQ[] = [
    {
      id: 'faq-1',
      question: {
        fr: 'Quels types de cours MIRA ACADEMY propose-t-elle?',
        ar: 'ما هي أنواع الدورات التي تقدمها أكاديمية ميرا؟',
        en: 'What types of courses does MIRA ACADEMY offer?',
      },
      answer: {
        fr: 'MIRA ACADEMY propose une large gamme de cours dans les domaines des technologies de l\'information, du marketing digital, du développement personnel, des langues étrangères, et de la gestion d\'entreprise. Nos formations sont conçues pour répondre aux besoins du marché du travail algérien et international.',
        ar: 'تقدم أكاديمية ميرا مجموعة واسعة من الدورات في مجالات تكنولوجيا المعلومات والتسويق الرقمي والتنمية الشخصية واللغات الأجنبية وإدارة الأعمال. تم تصميم دوراتنا التدريبية لتلبية احتياجات سوق العمل الجزائري والدولي.',
        en: 'MIRA ACADEMY offers a wide range of courses in the fields of information technology, digital marketing, personal development, foreign languages, and business management. Our training programs are designed to meet the needs of both the Algerian and international job markets.',
      },
    },
    {
      id: 'faq-2',
      question: {
        fr: 'Les cours sont-ils en ligne ou en présentiel?',
        ar: 'هل الدورات عبر الإنترنت أم حضورية؟',
        en: 'Are the courses online or in-person?',
      },
      answer: {
        fr: 'Nous proposons à la fois des cours en ligne et en présentiel pour répondre aux différents besoins de nos étudiants. Les formations en ligne offrent flexibilité et accessibilité, tandis que les cours en présentiel permettent une interaction directe avec les formateurs et les autres étudiants. Certaines formations sont également disponibles en format hybride.',
        ar: 'نقدم دورات عبر الإنترنت وحضورية لتلبية الاحتياجات المختلفة لطلابنا. توفر الدورات عبر الإنترنت المرونة وإمكانية الوصول، بينما تسمح الدورات الحضورية بالتفاعل المباشر مع المدربين والطلاب الآخرين. تتوفر بعض الدورات التدريبية أيضًا بتنسيق هجين.',
        en: 'We offer both online and in-person courses to accommodate the different needs of our students. Online training provides flexibility and accessibility, while in-person courses allow for direct interaction with trainers and other students. Some training programs are also available in a hybrid format.',
      },
    },
    {
      id: 'faq-3',
      question: {
        fr: 'Comment puis-je m\'inscrire à un cours?',
        ar: 'كيف يمكنني التسجيل في دورة؟',
        en: 'How can I register for a course?',
      },
      answer: {
        fr: 'L\'inscription peut se faire en ligne via notre site web, par téléphone, ou en personne à notre centre principal à Alger. Pour vous inscrire en ligne, naviguez vers la page du cours qui vous intéresse, cliquez sur "S\'inscrire maintenant", puis suivez les instructions pour compléter votre inscription et effectuer le paiement.',
        ar: 'يمكن إجراء التسجيل عبر الإنترنت من خلال موقعنا الإلكتروني أو عبر الهاتف أو شخصيًا في مركزنا الرئيسي في الجزائر العاصمة. للتسجيل عبر الإنترنت، انتقل إلى صفحة الدورة التي تهتم بها، وانقر على "التسجيل الآن"، ثم اتبع التعليمات لإكمال تسجيلك وإجراء الدفع.',
        en: 'Registration can be done online through our website, by phone, or in person at our main center in Algiers. To register online, navigate to the page of the course you\'re interested in, click on "Register Now", then follow the instructions to complete your registration and make payment.',
      },
    },
    {
      id: 'faq-4',
      question: {
        fr: 'Proposez-vous des certifications reconnues?',
        ar: 'هل تقدمون شهادات معترف بها؟',
        en: 'Do you offer recognized certifications?',
      },
      answer: {
        fr: 'Oui, MIRA ACADEMY propose plusieurs types de certifications. Nous offrons nos propres certificats pour tous les cours complétés avec succès. De plus, nous sommes partenaires de plusieurs organismes nationaux et internationaux de certification, ce qui permet à nos étudiants de passer des examens pour obtenir des certifications reconnues mondialement dans leurs domaines respectifs.',
        ar: 'نعم، تقدم أكاديمية ميرا عدة أنواع من الشهادات. نقدم شهاداتنا الخاصة لجميع الدورات التي تم إكمالها بنجاح. بالإضافة إلى ذلك، نحن شركاء مع العديد من هيئات إصدار الشهادات الوطنية والدولية، مما يسمح لطلابنا بإجراء امتحانات للحصول على شهادات معترف بها عالميًا في مجالاتهم.',
        en: 'Yes, MIRA ACADEMY offers several types of certifications. We provide our own certificates for all courses successfully completed. Additionally, we partner with several national and international certification bodies, allowing our students to take exams to obtain globally recognized certifications in their respective fields.',
      },
    },
    {
      id: 'faq-5',
      question: {
        fr: 'Existe-t-il des options de financement ou des bourses disponibles?',
        ar: 'هل هناك خيارات تمويل أو منح دراسية متاحة؟',
        en: 'Are there any financing options or scholarships available?',
      },
      answer: {
        fr: 'Oui, nous offrons diverses options pour rendre nos formations accessibles. Nous proposons des plans de paiement échelonné pour la plupart de nos cours. Nous avons également un programme de bourses limité pour les étudiants exceptionnels et ceux confrontés à des difficultés financières. De plus, nous collaborons avec certaines entreprises et organisations qui peuvent parrainer la formation de leurs employés.',
        ar: 'نعم، نقدم خيارات متنوعة لجعل تدريباتنا في متناول الجميع. نقدم خطط دفع بالتقسيط لمعظم دوراتنا. لدينا أيضًا برنامج منح دراسية محدود للطلاب المتميزين وأولئك الذين يواجهون صعوبات مالية. بالإضافة إلى ذلك، نتعاون مع بعض الشركات والمنظمات التي قد ترعى تدريب موظفيها.',
        en: 'Yes, we offer various options to make our training accessible. We provide installment payment plans for most of our courses. We also have a limited scholarship program for outstanding students and those facing financial hardship. Additionally, we collaborate with certain companies and organizations that may sponsor their employees\' training.',
      },
    },
    {
      id: 'faq-6',
      question: {
        fr: 'Comment puis-je contacter le service client?',
        ar: 'كيف يمكنني الاتصال بخدمة العملاء؟',
        en: 'How can I contact customer service?',
      },
      answer: {
        fr: 'Vous pouvez contacter notre service client par téléphone au +213 (0) 23 45 67 89, par e-mail à support@mira-academy.dz, ou via le formulaire de contact sur notre site web. Notre équipe de support est disponible du dimanche au jeudi, de 9h à 17h. Pour les demandes urgentes en dehors des heures de bureau, vous pouvez utiliser notre chat en direct sur le site web.',
        ar: 'يمكنك الاتصال بخدمة العملاء عبر الهاتف على +213 (0) 23 45 67 89، أو عبر البريد الإلكتروني على support@mira-academy.dz، أو من خلال نموذج الاتصال على موقعنا الإلكتروني. فريق الدعم لدينا متاح من الأحد إلى الخميس، من الساعة 9 صباحًا حتى 5 مساءً. للطلبات العاجلة خارج ساعات العمل، يمكنك استخدام الدردشة المباشرة على موقع الويب.',
        en: 'You can contact our customer service by phone at +213 (0) 23 45 67 89, by email at support@mira-academy.dz, or via the contact form on our website. Our support team is available Sunday through Thursday, from 9am to 5pm. For urgent inquiries outside of business hours, you can use our live chat on the website.',
      },
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 bg-neutral-50">
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

        <div className="max-w-3xl mx-auto">
          <div 
            className={`space-y-4 ${
              language === 'ar' ? 'text-right' : ''
            }`}
          >
            {faqs.map((faq) => (
              <motion.div 
                key={faq.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <button
                  className={`flex justify-between items-center w-full px-6 py-4 text-left ${
                    language === 'ar' ? 'flex-row-reverse font-arabic' : ''
                  }`}
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <span className="text-lg font-medium text-neutral-900">
                    {faq.question[language]}
                  </span>
                  <div 
                    className={`flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center ${
                      openFAQ === faq.id ? "bg-primary-500" : "bg-primary-100"
                    }`}
                  >
                    <svg 
                      className={`h-3 w-3 transition-transform duration-200 ${
                        openFAQ === faq.id ? "transform rotate-180 text-white" : "text-primary-600"
                      }`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div 
                        className={`px-6 pb-4 text-neutral-700 ${
                          language === 'ar' ? 'font-arabic' : ''
                        }`}
                      >
                        <div className="mt-2">
                          <p>{faq.answer[language]}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className={`mt-10 text-center ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-neutral-600">
              {sectionText.contact[language]}
              {' '}
              <a 
                href="#contact" 
                className="text-primary-600 hover:text-primary-500 font-medium underline"
              >
                {sectionText.contactLink[language]}
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 