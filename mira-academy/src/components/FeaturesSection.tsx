'use client';

import { useLanguage } from './LanguageContext';

type Feature = {
  id: string;
  title: {
    fr: string;
    ar: string;
    en: string;
  };
  description: {
    fr: string;
    ar: string;
    en: string;
  };
  icon: React.ReactNode;
};

export default function FeaturesSection() {
  const { language } = useLanguage();

  const sectionText = {
    title: {
      fr: 'Pourquoi Choisir MIRA ACADEMY',
      ar: 'لماذا تختار أكاديمية ميرا',
      en: 'Why Choose MIRA ACADEMY',
    },
    subtitle: {
      fr: 'Nous offrons une expérience d\'apprentissage complète pour votre réussite professionnelle',
      ar: 'نقدم تجربة تعليمية شاملة لنجاحك المهني',
      en: 'We offer a comprehensive learning experience for your professional success',
    },
  };

  const features: Feature[] = [
    {
      id: 'quality',
      title: {
        fr: 'Éducation de qualité',
        ar: 'تعليم عالي الجودة',
        en: 'Quality Education',
      },
      description: {
        fr: 'Des cours développés par des experts dans leur domaine, avec un contenu à jour et pertinent.',
        ar: 'دورات طورها خبراء في مجالهم، مع محتوى محدث وذو صلة.',
        en: 'Courses developed by experts in their field, with up-to-date and relevant content.',
      },
      icon: (
        <svg className="h-8 w-8 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: 'certified',
      title: {
        fr: 'Certification reconnue',
        ar: 'شهادات معترف بها',
        en: 'Recognized Certification',
      },
      description: {
        fr: 'Obtenez des certifications reconnues nationalement qui valoriseront votre CV et augmenteront vos opportunités professionnelles.',
        ar: 'احصل على شهادات معترف بها على المستوى الوطني والتي ستعزز سيرتك الذاتية وتزيد من فرصك المهنية.',
        en: 'Get nationally recognized certifications that will enhance your CV and increase your professional opportunities.',
      },
      icon: (
        <svg className="h-8 w-8 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      id: 'flexible',
      title: {
        fr: 'Apprentissage flexible',
        ar: 'تعلم مرن',
        en: 'Flexible Learning',
      },
      description: {
        fr: 'Apprenez à votre rythme, où que vous soyez. Accédez à vos cours 24/7 sur tous vos appareils.',
        ar: 'تعلم حسب وتيرتك، أينما كنت. الوصول إلى دوراتك على مدار الساعة وعلى جميع أجهزتك.',
        en: 'Learn at your own pace, wherever you are. Access your courses 24/7 on all your devices.',
      },
      icon: (
        <svg className="h-8 w-8 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 'support',
      title: {
        fr: 'Support personnalisé',
        ar: 'دعم مخصص',
        en: 'Personalized Support',
      },
      description: {
        fr: 'Bénéficiez d\'un accompagnement personnalisé avec nos formateurs experts pour répondre à toutes vos questions.',
        ar: 'استفد من الدعم الشخصي مع المدربين الخبراء لدينا للإجابة على جميع أسئلتك.',
        en: 'Benefit from personalized support with our expert trainers to answer all your questions.',
      },
      icon: (
        <svg className="h-8 w-8 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
    },
    {
      id: 'modern',
      title: {
        fr: 'Contenu moderne',
        ar: 'محتوى حديث',
        en: 'Modern Content',
      },
      description: {
        fr: 'Des cours constamment mis à jour pour refléter les dernières tendances et technologies du marché.',
        ar: 'دورات يتم تحديثها باستمرار لتعكس أحدث اتجاهات وتقنيات السوق.',
        en: 'Courses constantly updated to reflect the latest market trends and technologies.',
      },
      icon: (
        <svg className="h-8 w-8 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
    },
    {
      id: 'community',
      title: {
        fr: 'Communauté active',
        ar: 'مجتمع نشط',
        en: 'Active Community',
      },
      description: {
        fr: 'Rejoignez une communauté d\'apprenants et d\'experts pour partager des connaissances et développer votre réseau professionnel.',
        ar: 'انضم إلى مجتمع من المتعلمين والخبراء لمشاركة المعرفة وتطوير شبكتك المهنية.',
        en: 'Join a community of learners and experts to share knowledge and develop your professional network.',
      },
      icon: (
        <svg className="h-8 w-8 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className={`text-3xl font-bold text-neutral-900 sm:text-4xl ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {sectionText.title[language as keyof typeof sectionText.title]}
          </h2>
          <p 
            className={`mt-4 text-lg text-neutral-600 max-w-3xl mx-auto ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {sectionText.subtitle[language as keyof typeof sectionText.subtitle]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 mb-4">
                {feature.icon}
              </div>
              <h3 
                className={`text-xl font-semibold text-neutral-900 mb-2 ${
                  language === 'ar' ? 'font-arabic text-right' : ''
                }`}
              >
                {feature.title[language as keyof typeof feature.title]}
              </h3>
              <p 
                className={`text-neutral-600 ${
                  language === 'ar' ? 'font-arabic text-right' : ''
                }`}
              >
                {feature.description[language as keyof typeof feature.description]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 