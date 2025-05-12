export type BlogPost = {
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
  content: {
    fr: string;
    ar: string;
    en: string;
  };
  author: {
    name: string;
    title: {
      fr: string;
      ar: string;
      en: string;
    };
    avatar: string;
  };
  category: {
    fr: string;
    ar: string;
    en: string;
  };
  date: string;
  image: string;
  readTime: {
    fr: string;
    ar: string;
    en: string;
  };
  tags?: string[];
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    id: 'effective-learning-techniques',
    title: {
      fr: 'Techniques d\'apprentissage efficaces pour les étudiants',
      ar: 'تقنيات تعلم فعالة للطلاب',
      en: 'Effective learning techniques for students',
    },
    excerpt: {
      fr: 'Découvrez des méthodes d\'apprentissage efficaces pour améliorer votre rétention et compréhension.',
      ar: 'اكتشف طرق تعلم فعالة لتحسين الاحتفاظ بالمعلومات والفهم.',
      en: 'Discover effective learning methods to improve your retention and understanding.',
    },
    content: {
      fr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
      ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
    },
    author: {
      name: 'Dr. Sarah Leblanc',
      title: {
        fr: 'Spécialiste en pédagogie',
        ar: 'متخصصة في التربية',
        en: 'Educational Specialist',
      },
      avatar: '/authors/sarah.jpg',
    },
    category: {
      fr: 'Éducation',
      ar: 'تعليم',
      en: 'Education',
    },
    date: '2023-05-15',
    image: '/blog/learning-techniques.jpg',
    readTime: {
      fr: '5 min de lecture',
      ar: '5 دقائق قراءة',
      en: '5 min read',
    },
    tags: ['learning', 'education', 'students'],
    featured: true
  },
  {
    id: 'digital-transformation-education',
    title: {
      fr: 'La transformation numérique dans l\'éducation',
      ar: 'التحول الرقمي في التعليم',
      en: 'Digital transformation in education',
    },
    excerpt: {
      fr: 'Comment la technologie change le paysage éducatif en Algérie et dans le monde.',
      ar: 'كيف تغير التكنولوجيا المشهد التعليمي في الجزائر والعالم.',
      en: 'How technology is changing the educational landscape in Algeria and worldwide.',
    },
    content: {
      fr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
      ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
    },
    author: {
      name: 'Mohammed Kaddour',
      title: {
        fr: 'Expert en technologie éducative',
        ar: 'خبير في تكنولوجيا التعليم',
        en: 'Educational Technology Expert',
      },
      avatar: '/authors/mohammed.jpg',
    },
    category: {
      fr: 'Technologie',
      ar: 'تكنولوجيا',
      en: 'Technology',
    },
    date: '2023-06-22',
    image: '/blog/digital-education.jpg',
    readTime: {
      fr: '8 min de lecture',
      ar: '8 دقائق قراءة',
      en: '8 min read',
    },
    tags: ['technology', 'education', 'digital']
  },
  {
    id: 'language-learning-benefits',
    title: {
      fr: 'Les avantages du multilinguisme dans la carrière professionnelle',
      ar: 'فوائد تعدد اللغات في المسار المهني',
      en: 'Benefits of multilingualism in professional careers',
    },
    excerpt: {
      fr: 'Pourquoi apprendre plusieurs langues peut booster votre carrière et ouvrir de nouvelles opportunités.',
      ar: 'لماذا يمكن لتعلم لغات متعددة أن يعزز حياتك المهنية ويفتح فرصاً جديدة.',
      en: 'Why learning multiple languages can boost your career and open new opportunities.',
    },
    content: {
      fr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
      ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
    },
    author: {
      name: 'Leila Bouzidi',
      title: {
        fr: 'Directrice des Langues',
        ar: 'مديرة اللغات',
        en: 'Languages Director',
      },
      avatar: '/authors/leila.jpg',
    },
    category: {
      fr: 'Langues',
      ar: 'لغات',
      en: 'Languages',
    },
    date: '2023-07-10',
    image: '/blog/language-learning.jpg',
    readTime: {
      fr: '6 min de lecture',
      ar: '6 دقائق قراءة',
      en: '6 min read',
    },
    tags: ['languages', 'career', 'professional development']
  },
  {
    id: 'job-market-skills',
    title: {
      fr: 'Les compétences les plus demandées sur le marché du travail en 2023',
      ar: 'المهارات الأكثر طلباً في سوق العمل في 2023',
      en: 'Most in-demand skills in the job market in 2023',
    },
    excerpt: {
      fr: 'Analyse des tendances du marché du travail et des compétences recherchées par les employeurs.',
      ar: 'تحليل اتجاهات سوق العمل والمهارات التي يبحث عنها أصحاب العمل.',
      en: 'Analysis of job market trends and skills sought by employers.',
    },
    content: {
      fr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
      ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
    },
    author: {
      name: 'Karim Mansouri',
      title: {
        fr: 'Directeur des Programmes Tech',
        ar: 'مدير برامج التكنولوجيا',
        en: 'Tech Programs Director',
      },
      avatar: '/authors/karim.jpg',
    },
    category: {
      fr: 'Carrière',
      ar: 'مهنة',
      en: 'Career',
    },
    date: '2023-08-05',
    image: '/blog/job-market.jpg',
    readTime: {
      fr: '7 min de lecture',
      ar: '7 دقائق قراءة',
      en: '7 min read',
    },
    tags: ['career', 'job market', 'skills']
  },
  {
    id: 'student-success-stories',
    title: {
      fr: 'Histoires de réussite d\'étudiants de MIRA ACADEMY',
      ar: 'قصص نجاح طلاب أكاديمية ميرا',
      en: 'MIRA ACADEMY student success stories',
    },
    excerpt: {
      fr: 'Découvrez comment nos anciens étudiants ont réussi à atteindre leurs objectifs professionnels après leur formation.',
      ar: 'اكتشف كيف نجح طلابنا السابقون في تحقيق أهدافهم المهنية بعد تدريبهم.',
      en: 'Discover how our alumni succeeded in reaching their professional goals after their training.',
    },
    content: {
      fr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
      ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
    },
    author: {
      name: 'Amina Benali',
      title: {
        fr: 'Responsable des anciens élèves',
        ar: 'مسؤولة الخريجين',
        en: 'Alumni Manager',
      },
      avatar: '/authors/amina.jpg',
    },
    category: {
      fr: 'Témoignages',
      ar: 'شهادات',
      en: 'Testimonials',
    },
    date: '2023-09-12',
    image: '/blog/success-stories.jpg',
    readTime: {
      fr: '10 min de lecture',
      ar: '10 دقائق قراءة',
      en: '10 min read',
    },
    tags: ['success stories', 'testimonials', 'alumni']
  },
  {
    id: 'online-learning-tips',
    title: {
      fr: 'Conseils pour réussir votre apprentissage en ligne',
      ar: 'نصائح للنجاح في التعلم عبر الإنترنت',
      en: 'Tips for successful online learning',
    },
    excerpt: {
      fr: 'Maximisez votre expérience d\'apprentissage en ligne avec ces conseils pratiques et stratégies efficaces.',
      ar: 'عزز تجربة التعلم عبر الإنترنت الخاصة بك مع هذه النصائح العملية والاستراتيجيات الفعالة.',
      en: 'Maximize your online learning experience with these practical tips and effective strategies.',
    },
    content: {
      fr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
      ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
    },
    author: {
      name: 'Youssef Hamid',
      title: {
        fr: 'Spécialiste de l\'apprentissage en ligne',
        ar: 'أخصائي التعلم عبر الإنترنت',
        en: 'E-Learning Specialist',
      },
      avatar: '/authors/youssef.jpg',
    },
    category: {
      fr: 'Apprentissage en ligne',
      ar: 'التعلم عبر الإنترنت',
      en: 'Online Learning',
    },
    date: '2023-10-05',
    image: '/blog/online-learning.jpg',
    readTime: {
      fr: '8 min de lecture',
      ar: '8 دقائق قراءة',
      en: '8 min read',
    },
    tags: ['online learning', 'e-learning', 'study tips'],
    featured: true
  }
]; 