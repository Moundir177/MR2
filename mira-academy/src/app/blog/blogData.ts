export interface BlogPost {
  id: number;
  title: {
    en: string;
    fr: string;
    ar: string;
  };
  author: string;
  authorId: string;
  date: string;
  category: {
    en: string;
    fr: string;
    ar: string;
  };
  excerpt: {
    en: string;
    fr: string;
    ar: string;
  };
  content?: {
    en: string;
    fr: string;
    ar: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: {
      en: "Getting Started with Web Development",
      fr: "Débuter avec le développement web",
      ar: "بدء العمل في تطوير الويب"
    },
    author: "John Doe",
    authorId: "john-doe",
    date: "2023-01-15",
    category: {
      en: "Web Development",
      fr: "Développement Web",
      ar: "تطوير الويب"
    },
    excerpt: {
      en: "Learn the fundamentals of web development, including HTML, CSS, and JavaScript to build your first website.",
      fr: "Apprenez les fondamentaux du développement web, y compris HTML, CSS et JavaScript pour créer votre premier site web.",
      ar: "تعلم أساسيات تطوير الويب، بما في ذلك HTML و CSS و JavaScript لبناء موقع الويب الأول الخاص بك."
    }
  },
  {
    id: 2,
    title: {
      en: "Data Science for Beginners",
      fr: "Science des données pour débutants",
      ar: "علوم البيانات للمبتدئين"
    },
    author: "Jane Smith",
    authorId: "jane-smith",
    date: "2023-02-10",
    category: {
      en: "Data Science",
      fr: "Science des Données",
      ar: "علوم البيانات"
    },
    excerpt: {
      en: "Discover the world of data science and learn how to analyze and visualize data to derive meaningful insights.",
      fr: "Découvrez le monde de la science des données et apprenez à analyser et à visualiser les données pour en tirer des informations utiles.",
      ar: "اكتشف عالم علوم البيانات وتعلم كيفية تحليل البيانات وتصورها لاستخلاص رؤى مفيدة."
    }
  },
  {
    id: 3,
    title: {
      en: "Digital Marketing Essentials",
      fr: "Les fondamentaux du marketing digital",
      ar: "أساسيات التسويق الرقمي"
    },
    author: "Ahmed Ibrahim",
    authorId: "ahmed-ibrahim",
    date: "2023-03-05",
    category: {
      en: "Digital Marketing",
      fr: "Marketing Digital",
      ar: "التسويق الرقمي"
    },
    excerpt: {
      en: "Master the essential strategies and tools for effective digital marketing campaigns in today's competitive market.",
      fr: "Maîtrisez les stratégies et les outils essentiels pour des campagnes de marketing digital efficaces sur le marché concurrentiel d'aujourd'hui.",
      ar: "أتقن الاستراتيجيات والأدوات الأساسية لحملات التسويق الرقمي الفعالة في سوق اليوم التنافسي."
    }
  },
  {
    id: 4,
    title: {
      en: "Mobile App Development with React Native",
      fr: "Développement d'applications mobiles avec React Native",
      ar: "تطوير تطبيقات الجوال باستخدام React Native"
    },
    author: "Maria Garcia",
    authorId: "maria-garcia",
    date: "2023-04-20",
    category: {
      en: "Mobile Development",
      fr: "Développement Mobile",
      ar: "تطوير الجوال"
    },
    excerpt: {
      en: "Build cross-platform mobile applications using React Native and JavaScript for both iOS and Android platforms.",
      fr: "Créez des applications mobiles multiplateformes à l'aide de React Native et JavaScript pour les plateformes iOS et Android.",
      ar: "بناء تطبيقات الهاتف المحمول عبر المنصات باستخدام React Native و JavaScript لمنصات iOS و Android."
    }
  },
  {
    id: 5,
    title: {
      en: "Introduction to Artificial Intelligence",
      fr: "Introduction à l'intelligence artificielle",
      ar: "مقدمة في الذكاء الاصطناعي"
    },
    author: "Alex Chen",
    authorId: "alex-chen",
    date: "2023-05-15",
    category: {
      en: "Artificial Intelligence",
      fr: "Intelligence Artificielle",
      ar: "الذكاء الاصطناعي"
    },
    excerpt: {
      en: "Explore the fundamentals of AI, including machine learning, neural networks, and their applications in various industries.",
      fr: "Explorez les fondamentaux de l'IA, y compris l'apprentissage automatique, les réseaux de neurones et leurs applications dans diverses industries.",
      ar: "استكشف أساسيات الذكاء الاصطناعي، بما في ذلك التعلم الآلي والشبكات العصبية وتطبيقاتها في مختلف الصناعات."
    }
  }
]; 