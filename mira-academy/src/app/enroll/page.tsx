'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '../../components/LanguageContext';
import SEOMetadata from '../../components/SEOMetadata';

// Multilingual content
const content = {
  enroll: {
    en: "Enrollment Process",
    fr: "Processus d'inscription",
    ar: "عملية التسجيل",
  },
  enrollSubtitle: {
    en: "Complete the following steps to enroll in your chosen course",
    fr: "Complétez les étapes suivantes pour vous inscrire au cours choisi",
    ar: "أكمل الخطوات التالية للتسجيل في الدورة التي اخترتها",
  },
  personalInfo: {
    en: "Personal Information",
    fr: "Informations personnelles",
    ar: "المعلومات الشخصية",
  },
  firstName: {
    en: "First Name",
    fr: "Prénom",
    ar: "الاسم الأول",
  },
  lastName: {
    en: "Last Name",
    fr: "Nom de famille",
    ar: "اسم العائلة",
  },
  email: {
    en: "Email Address",
    fr: "Adresse email",
    ar: "عنوان البريد الإلكتروني",
  },
  phone: {
    en: "Phone Number",
    fr: "Numéro de téléphone",
    ar: "رقم الهاتف",
  },
  address: {
    en: "Address (Optional)",
    fr: "Adresse (Optionnel)",
    ar: "العنوان (اختياري)",
  },
  continue: {
    en: "Continue",
    fr: "Continuer",
    ar: "متابعة",
  },
  courseSelection: {
    en: "Course Selection",
    fr: "Sélection du cours",
    ar: "اختيار الدورة",
  },
  selectCourse: {
    en: "Select a course",
    fr: "Sélectionnez un cours",
    ar: "اختر دورة",
  },
  duration: {
    en: "Duration",
    fr: "Durée",
    ar: "المدة",
  },
  startDate: {
    en: "Start Date",
    fr: "Date de début",
    ar: "تاريخ البدء",
  },
  chooseStartDate: {
    en: "Choose a start date",
    fr: "Choisissez une date de début",
    ar: "اختر تاريخ البدء",
  },
  courseRequired: {
    en: "Please select a course",
    fr: "Veuillez sélectionner un cours",
    ar: "الرجاء اختيار دورة",
  },
  startDateRequired: {
    en: "Please select a start date",
    fr: "Veuillez sélectionner une date de début",
    ar: "الرجاء اختيار تاريخ البدء",
  },
  back: {
    en: "Back",
    fr: "Retour",
    ar: "رجوع",
  },
  // Add error messages
  firstNameRequired: {
    en: "First name is required",
    fr: "Le prénom est requis",
    ar: "الاسم الأول مطلوب",
  },
  lastNameRequired: {
    en: "Last name is required",
    fr: "Le nom de famille est requis",
    ar: "اسم العائلة مطلوب",
  },
  emailRequired: {
    en: "Email is required",
    fr: "L'email est requis",
    ar: "البريد الإلكتروني مطلوب",
  },
  emailInvalid: {
    en: "Email is invalid",
    fr: "L'email est invalide",
    ar: "البريد الإلكتروني غير صالح",
  },
  phoneRequired: {
    en: "Phone number is required",
    fr: "Le numéro de téléphone est requis",
    ar: "رقم الهاتف مطلوب",
  },
  weeks: {
    en: "weeks",
    fr: "semaines",
    ar: "أسابيع",
  },
  select: {
    en: "Select",
    fr: "Sélectionner",
    ar: "اختر",
  }
};

// Add more multilingual content for the payment step
const paymentContent = {
  payment: {
    en: "Payment Information",
    fr: "Informations de paiement",
    ar: "معلومات الدفع",
  },
  cardName: {
    en: "Name on Card",
    fr: "Nom sur la carte",
    ar: "الاسم على البطاقة",
  },
  cardNumber: {
    en: "Card Number",
    fr: "Numéro de carte",
    ar: "رقم البطاقة",
  },
  expiration: {
    en: "Expiration Date",
    fr: "Date d'expiration",
    ar: "تاريخ انتهاء الصلاحية",
  },
  cvv: {
    en: "CVV",
    fr: "CVV",
    ar: "رمز التحقق",
  },
  month: {
    en: "Month",
    fr: "Mois",
    ar: "شهر",
  },
  year: {
    en: "Year",
    fr: "Année",
    ar: "سنة",
  },
  orderSummary: {
    en: "Order Summary",
    fr: "Résumé de la commande",
    ar: "ملخص الطلب",
  },
  course: {
    en: "Course",
    fr: "Cours",
    ar: "الدورة",
  },
  startingOn: {
    en: "Starting on",
    fr: "Commençant le",
    ar: "يبدأ في",
  },
  total: {
    en: "Total",
    fr: "Total",
    ar: "المجموع",
  },
  cardNameRequired: {
    en: "Name on card is required",
    fr: "Le nom sur la carte est requis",
    ar: "الاسم على البطاقة مطلوب",
  },
  cardNumberRequired: {
    en: "Card number is required",
    fr: "Le numéro de carte est requis",
    ar: "رقم البطاقة مطلوب",
  },
  cardNumberInvalid: {
    en: "Card number is invalid",
    fr: "Le numéro de carte est invalide",
    ar: "رقم البطاقة غير صالح",
  },
  expirationRequired: {
    en: "Expiration date is required",
    fr: "La date d'expiration est requise",
    ar: "تاريخ انتهاء الصلاحية مطلوب",
  },
  cvvRequired: {
    en: "CVV is required",
    fr: "Le CVV est requis",
    ar: "رمز التحقق مطلوب",
  },
  cvvInvalid: {
    en: "CVV is invalid",
    fr: "Le CVV est invalide",
    ar: "رمز التحقق غير صالح",
  },
  completePayment: {
    en: "Complete Payment",
    fr: "Finaliser le paiement",
    ar: "إتمام الدفع",
  }
};

// Add confirmation step multilingual content
const confirmationContent = {
  success: {
    en: "Enrollment Successful!",
    fr: "Inscription réussie !",
    ar: "تم التسجيل بنجاح!",
  },
  thankYou: {
    en: "Thank you for enrolling with Mira Academy",
    fr: "Merci de vous être inscrit à Mira Academy",
    ar: "شكرا لتسجيلك في أكاديمية ميرا",
  },
  orderDetails: {
    en: "Order Details",
    fr: "Détails de la commande",
    ar: "تفاصيل الطلب",
  },
  name: {
    en: "Name",
    fr: "Nom",
    ar: "الاسم",
  },
  email: {
    en: "Email",
    fr: "Email",
    ar: "البريد الإلكتروني",
  },
  course: {
    en: "Course",
    fr: "Cours",
    ar: "الدورة",
  },
  startDate: {
    en: "Start Date",
    fr: "Date de début",
    ar: "تاريخ البدء",
  },
  total: {
    en: "Total Paid",
    fr: "Total payé",
    ar: "المبلغ المدفوع",
  },
  orderNumber: {
    en: "Order Number",
    fr: "Numéro de commande",
    ar: "رقم الطلب",
  },
  nextSteps: {
    en: "Next Steps",
    fr: "Prochaines étapes",
    ar: "الخطوات التالية",
  },
  emailSent: {
    en: "We've sent you a confirmation email with all the details of your enrollment",
    fr: "Nous vous avons envoyé un email de confirmation avec tous les détails de votre inscription",
    ar: "لقد أرسلنا إليك بريدًا إلكترونيًا للتأكيد مع جميع تفاصيل تسجيلك",
  },
  setupAccount: {
    en: "Set up your student account",
    fr: "Configurez votre compte étudiant",
    ar: "إعداد حساب الطالب الخاص بك",
  },
  accessCourse: {
    en: "Access your course materials",
    fr: "Accédez à vos supports de cours",
    ar: "الوصول إلى مواد الدورة التدريبية الخاصة بك",
  },
  joinOrientation: {
    en: "Join the orientation session",
    fr: "Rejoignez la session d'orientation",
    ar: "انضم إلى جلسة التوجيه",
  },
  dashboardButton: {
    en: "Go to Student Dashboard",
    fr: "Aller au tableau de bord étudiant",
    ar: "الذهاب إلى لوحة تحكم الطالب",
  },
  coursesButton: {
    en: "Browse More Courses",
    fr: "Parcourir plus de cours",
    ar: "تصفح المزيد من الدورات",
  }
};

// Step components for the enrollment process
const PersonalInfoStep = ({ 
  formData, 
  updateFormData, 
  nextStep,
  language
}: { 
  formData: any; 
  updateFormData: (data: any) => void; 
  nextStep: () => void;
  language: string;
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName?.trim()) {
      newErrors.firstName = content.firstNameRequired[language as keyof typeof content.firstNameRequired];
    }
    
    if (!formData.lastName?.trim()) {
      newErrors.lastName = content.lastNameRequired[language as keyof typeof content.lastNameRequired];
    }
    
    if (!formData.email?.trim()) {
      newErrors.email = content.emailRequired[language as keyof typeof content.emailRequired];
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = content.emailInvalid[language as keyof typeof content.emailInvalid];
    }
    
    if (!formData.phone?.trim()) {
      newErrors.phone = content.phoneRequired[language as keyof typeof content.phoneRequired];
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      nextStep();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
        {content.personalInfo[language as keyof typeof content.personalInfo]}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`} htmlFor="firstName">
            {content.firstName[language as keyof typeof content.firstName]}
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName || ''}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
              errors.firstName ? 'border-red-500' : 'border-gray-300'
            } ${language === 'ar' ? 'font-arabic text-right' : ''}`}
          />
          {errors.firstName && (
            <p className={`mt-1 text-sm text-red-600 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>{errors.firstName}</p>
          )}
        </div>
        
        <div>
          <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`} htmlFor="lastName">
            {content.lastName[language as keyof typeof content.lastName]}
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName || ''}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
              errors.lastName ? 'border-red-500' : 'border-gray-300'
            } ${language === 'ar' ? 'font-arabic text-right' : ''}`}
          />
          {errors.lastName && (
            <p className={`mt-1 text-sm text-red-600 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>{errors.lastName}</p>
          )}
        </div>
      </div>
      
      <div className="mb-6">
        <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`} htmlFor="email">
          {content.email[language as keyof typeof content.email]}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } ${language === 'ar' ? 'font-arabic text-right' : ''}`}
        />
        {errors.email && (
          <p className={`mt-1 text-sm text-red-600 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>{errors.email}</p>
        )}
      </div>
      
      <div className="mb-6">
        <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`} htmlFor="phone">
          {content.phone[language as keyof typeof content.phone]}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone || ''}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          } ${language === 'ar' ? 'font-arabic text-right' : ''}`}
        />
        {errors.phone && (
          <p className={`mt-1 text-sm text-red-600 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>{errors.phone}</p>
        )}
      </div>
      
      <div className="mb-6">
        <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`} htmlFor="address">
          {content.address[language as keyof typeof content.address]}
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address || ''}
          onChange={handleChange}
          className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
            language === 'ar' ? 'font-arabic text-right' : ''
          }`}
        />
      </div>
      
      <div className={`flex ${language === 'ar' ? 'justify-start' : 'justify-end'}`}>
        <button
          type="submit"
          className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          {content.continue[language as keyof typeof content.continue]}
        </button>
      </div>
    </form>
  );
};

const CourseSelectionStep = ({ 
  formData, 
  updateFormData, 
  nextStep, 
  prevStep,
  language
}: { 
  formData: any; 
  updateFormData: (data: any) => void; 
  nextStep: () => void;
  prevStep: () => void;
  language: string;
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const courses = [
    {
      id: 1,
      title: {
        en: "Full Stack Web Development",
        fr: "Développement Web Full Stack",
        ar: "تطوير الويب المتكامل",
      },
      price: 799,
      duration: "12",
      startDates: ["March 15, 2023", "April 10, 2023", "May 5, 2023"],
      image: "🖥️"
    },
    {
      id: 2,
      title: {
        en: "Data Science and Machine Learning",
        fr: "Science des Données et Apprentissage Automatique",
        ar: "علوم البيانات والتعلم الآلي",
      },
      price: 899,
      duration: "10",
      startDates: ["March 20, 2023", "April 15, 2023", "May 10, 2023"],
      image: "📊"
    },
    {
      id: 3,
      title: {
        en: "UX/UI Design Fundamentals",
        fr: "Fondamentaux du Design UX/UI",
        ar: "أساسيات تصميم تجربة المستخدم/واجهة المستخدم",
      },
      price: 649,
      duration: "8",
      startDates: ["March 5, 2023", "April 1, 2023", "May 1, 2023"],
      image: "🎨"
    }
  ];

  const handleCourseSelect = (courseId: number) => {
    // Find the selected course to get the title
    const selectedCourse = courses.find(course => course.id === courseId);
    
    updateFormData({ 
      ...formData, 
      courseId, 
      startDate: '', 
      courseTitle: selectedCourse?.title[language as keyof typeof selectedCourse.title],
      coursePrice: selectedCourse?.price
    });
  };
  
  const handleStartDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateFormData({ ...formData, startDate: e.target.value });
  };
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.courseId) {
      newErrors.courseId = content.courseRequired[language as keyof typeof content.courseRequired];
    }
    
    if (!formData.startDate) {
      newErrors.startDate = content.startDateRequired[language as keyof typeof content.startDateRequired];
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      nextStep();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
        {content.courseSelection[language as keyof typeof content.courseSelection]}
      </h2>
      
      {errors.courseId && (
        <p className={`mb-4 text-sm text-red-600 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>{errors.courseId}</p>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {courses.map(course => (
          <div 
            key={course.id}
            onClick={() => handleCourseSelect(course.id)}
            className={`bg-white rounded-lg border-2 p-6 cursor-pointer transition-all hover:shadow-md ${
              formData.courseId === course.id 
                ? 'border-primary-500 bg-primary-50' 
                : 'border-gray-200 hover:border-primary-300'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="text-4xl">{course.image}</div>
              <div className="text-lg font-bold text-primary-600">${course.price}</div>
            </div>
            <h3 className={`text-lg font-bold text-gray-900 mb-2 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
              {course.title[language as keyof typeof course.title]}
            </h3>
            <p className={`text-gray-600 mb-2 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
              {content.duration[language as keyof typeof content.duration]}: {course.duration} {content.weeks[language as keyof typeof content.weeks]}
            </p>
            <div className="mt-2 flex items-center">
              {formData.courseId === course.id && (
                <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
              <span className={formData.courseId === course.id ? 'font-medium text-primary-700' : 'text-gray-500'}>
                {formData.courseId === course.id ? content.select[language as keyof typeof content.select] : content.select[language as keyof typeof content.select]}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {formData.courseId && (
        <div className="mb-8">
          <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`} htmlFor="startDate">
            {content.startDate[language as keyof typeof content.startDate]}
          </label>
          <select
            id="startDate"
            name="startDate"
            value={formData.startDate || ''}
            onChange={handleStartDateChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
              errors.startDate ? 'border-red-500' : 'border-gray-300'
            } ${language === 'ar' ? 'font-arabic text-right' : ''}`}
          >
            <option value="">{content.chooseStartDate[language as keyof typeof content.chooseStartDate]}</option>
            {courses.find(course => course.id === formData.courseId)?.startDates.map((date, index) => (
              <option key={index} value={date}>{date}</option>
            ))}
          </select>
          {errors.startDate && (
            <p className={`mt-1 text-sm text-red-600 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>{errors.startDate}</p>
          )}
        </div>
      )}
      
      <div className={`flex ${language === 'ar' ? 'flex-row-reverse' : 'justify-between'}`}>
        <button
          type="button"
          onClick={prevStep}
          className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
          {content.back[language as keyof typeof content.back]}
        </button>
        <button
          type="submit"
          className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          {content.continue[language as keyof typeof content.continue]}
        </button>
      </div>
    </form>
  );
};

const PaymentStep = ({ 
  formData, 
  updateFormData, 
  nextStep, 
  prevStep,
  language
}: { 
  formData: any; 
  updateFormData: (data: any) => void; 
  nextStep: () => void;
  prevStep: () => void;
  language: string;
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    updateFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.cardName?.trim()) {
      newErrors.cardName = paymentContent.cardNameRequired[language as keyof typeof paymentContent.cardNameRequired];
    }
    
    if (!formData.cardNumber?.trim()) {
      newErrors.cardNumber = paymentContent.cardNumberRequired[language as keyof typeof paymentContent.cardNumberRequired];
    } else if (formData.cardNumber.replace(/\s/g, '').length !== 16) {
      newErrors.cardNumber = paymentContent.cardNumberInvalid[language as keyof typeof paymentContent.cardNumberInvalid];
    }
    
    if (!formData.expirationMonth || !formData.expirationYear) {
      newErrors.expiration = paymentContent.expirationRequired[language as keyof typeof paymentContent.expirationRequired];
    }
    
    if (!formData.cvv?.trim()) {
      newErrors.cvv = paymentContent.cvvRequired[language as keyof typeof paymentContent.cvvRequired];
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = paymentContent.cvvInvalid[language as keyof typeof paymentContent.cvvInvalid];
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      nextStep();
    }
  };
  
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };
  
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardNumber(e.target.value);
    updateFormData({ ...formData, cardNumber: formattedValue });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
        {paymentContent.payment[language as keyof typeof paymentContent.payment]}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Payment Form */}
        <div>
          <div className="mb-6">
            <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`} htmlFor="cardName">
              {paymentContent.cardName[language as keyof typeof paymentContent.cardName]}
            </label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={formData.cardName || ''}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                errors.cardName ? 'border-red-500' : 'border-gray-300'
              } ${language === 'ar' ? 'font-arabic text-right' : ''}`}
            />
            {errors.cardName && (
              <p className={`mt-1 text-sm text-red-600 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>{errors.cardName}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`} htmlFor="cardNumber">
              {paymentContent.cardNumber[language as keyof typeof paymentContent.cardNumber]}
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber || ''}
              onChange={handleCardNumberChange}
              maxLength={19}
              placeholder="XXXX XXXX XXXX XXXX"
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                errors.cardNumber ? 'border-red-500' : 'border-gray-300'
              } ${language === 'ar' ? 'font-arabic text-right' : ''}`}
            />
            {errors.cardNumber && (
              <p className={`mt-1 text-sm text-red-600 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>{errors.cardNumber}</p>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`} htmlFor="expirationMonth">
                {paymentContent.expiration[language as keyof typeof paymentContent.expiration]}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <select
                  id="expirationMonth"
                  name="expirationMonth"
                  value={formData.expirationMonth || ''}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                    errors.expiration ? 'border-red-500' : 'border-gray-300'
                  } ${language === 'ar' ? 'font-arabic text-right' : ''}`}
                >
                  <option value="">{paymentContent.month[language as keyof typeof paymentContent.month]}</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={i + 1}>{String(i + 1).padStart(2, '0')}</option>
                  ))}
                </select>
                
                <select
                  id="expirationYear"
                  name="expirationYear"
                  value={formData.expirationYear || ''}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                    errors.expiration ? 'border-red-500' : 'border-gray-300'
                  } ${language === 'ar' ? 'font-arabic text-right' : ''}`}
                >
                  <option value="">{paymentContent.year[language as keyof typeof paymentContent.year]}</option>
                  {Array.from({ length: 10 }, (_, i) => {
                    const year = new Date().getFullYear() + i;
                    return <option key={year} value={year}>{year}</option>;
                  })}
                </select>
              </div>
              {errors.expiration && (
                <p className={`mt-1 text-sm text-red-600 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>{errors.expiration}</p>
              )}
            </div>
            
            <div>
              <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`} htmlFor="cvv">
                {paymentContent.cvv[language as keyof typeof paymentContent.cvv]}
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv || ''}
                onChange={handleChange}
                maxLength={4}
                placeholder="XXX"
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                  errors.cvv ? 'border-red-500' : 'border-gray-300'
                } ${language === 'ar' ? 'font-arabic text-right' : ''}`}
              />
              {errors.cvv && (
                <p className={`mt-1 text-sm text-red-600 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>{errors.cvv}</p>
              )}
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className={`text-lg font-bold text-gray-900 mb-4 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
            {paymentContent.orderSummary[language as keyof typeof paymentContent.orderSummary]}
          </h3>
          
          <div className="flex items-center mb-4">
            <div className="bg-primary-100 p-3 rounded-full mr-4">
              <span className="text-2xl">{formData.courseImage || '📚'}</span>
            </div>
            <div>
              <p className={`font-medium text-gray-900 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                {formData.courseTitle}
              </p>
              <p className={`text-sm text-gray-600 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                {paymentContent.startingOn[language as keyof typeof paymentContent.startingOn]}: {formData.startDate}
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4 mb-6">
            <div className={`flex justify-between py-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <span className={`text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {paymentContent.course[language as keyof typeof paymentContent.course]}
              </span>
              <span className="font-medium">${formData.coursePrice}</span>
            </div>
          </div>
          
          <div className={`flex justify-between py-3 border-t border-gray-200 text-lg font-bold ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <span className={`${language === 'ar' ? 'font-arabic' : ''}`}>
              {paymentContent.total[language as keyof typeof paymentContent.total]}
            </span>
            <span>${formData.coursePrice}</span>
          </div>
        </div>
      </div>
      
      <div className={`flex mt-8 ${language === 'ar' ? 'flex-row-reverse' : 'justify-between'}`}>
        <button
          type="button"
          onClick={prevStep}
          className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
          {content.back[language as keyof typeof content.back]}
        </button>
        
        <button
          type="submit"
          className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          {paymentContent.completePayment[language as keyof typeof paymentContent.completePayment]}
        </button>
      </div>
    </form>
  );
};

const ConfirmationStep = ({ 
  formData,
  language
}: { 
  formData: any;
  language: string;
}) => {
  // Generate a random order number for the demo
  const orderNumber = `MRA-${Math.floor(Math.random() * 900000) + 100000}`;
  
  return (
    <div>
      <div className="text-center mb-8">
        <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className={`text-2xl font-bold text-gray-900 mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
          {confirmationContent.success[language as keyof typeof confirmationContent.success]}
        </h2>
        <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
          {confirmationContent.thankYou[language as keyof typeof confirmationContent.thankYou]}
        </p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className={`text-lg font-bold text-gray-900 mb-4 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
          {confirmationContent.orderDetails[language as keyof typeof confirmationContent.orderDetails]}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className={`text-sm text-gray-500 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
              {confirmationContent.name[language as keyof typeof confirmationContent.name]}
            </p>
            <p className={`font-medium ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
              {formData.firstName} {formData.lastName}
            </p>
          </div>
          
          <div>
            <p className={`text-sm text-gray-500 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
              {confirmationContent.email[language as keyof typeof confirmationContent.email]}
            </p>
            <p className={`font-medium ${language === 'ar' ? 'font-arabic text-right' : ''}`}>{formData.email}</p>
          </div>
          
          <div>
            <p className={`text-sm text-gray-500 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
              {confirmationContent.course[language as keyof typeof confirmationContent.course]}
            </p>
            <p className={`font-medium ${language === 'ar' ? 'font-arabic text-right' : ''}`}>{formData.courseTitle}</p>
          </div>
          
          <div>
            <p className={`text-sm text-gray-500 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
              {confirmationContent.startDate[language as keyof typeof confirmationContent.startDate]}
            </p>
            <p className={`font-medium ${language === 'ar' ? 'font-arabic text-right' : ''}`}>{formData.startDate}</p>
          </div>
          
          <div>
            <p className={`text-sm text-gray-500 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
              {confirmationContent.total[language as keyof typeof confirmationContent.total]}
            </p>
            <p className="font-medium">${formData.coursePrice}</p>
          </div>
          
          <div>
            <p className={`text-sm text-gray-500 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
              {confirmationContent.orderNumber[language as keyof typeof confirmationContent.orderNumber]}
            </p>
            <p className="font-medium">{orderNumber}</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className={`text-lg font-bold text-gray-900 mb-4 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
          {confirmationContent.nextSteps[language as keyof typeof confirmationContent.nextSteps]}
        </h3>
        
        <p className={`text-gray-600 mb-6 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
          {confirmationContent.emailSent[language as keyof typeof confirmationContent.emailSent]}
        </p>
        
        <ul className="space-y-3">
          <li className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <div className={`flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center ${language === 'ar' ? 'ml-3' : 'mr-3'}`}>
              <span className="text-primary-600 text-sm font-bold">1</span>
            </div>
            <span className={`${language === 'ar' ? 'font-arabic text-right' : ''}`}>
              {confirmationContent.setupAccount[language as keyof typeof confirmationContent.setupAccount]}
            </span>
          </li>
          
          <li className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <div className={`flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center ${language === 'ar' ? 'ml-3' : 'mr-3'}`}>
              <span className="text-primary-600 text-sm font-bold">2</span>
            </div>
            <span className={`${language === 'ar' ? 'font-arabic text-right' : ''}`}>
              {confirmationContent.accessCourse[language as keyof typeof confirmationContent.accessCourse]}
            </span>
          </li>
          
          <li className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <div className={`flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center ${language === 'ar' ? 'ml-3' : 'mr-3'}`}>
              <span className="text-primary-600 text-sm font-bold">3</span>
            </div>
            <span className={`${language === 'ar' ? 'font-arabic text-right' : ''}`}>
              {confirmationContent.joinOrientation[language as keyof typeof confirmationContent.joinOrientation]}
            </span>
          </li>
        </ul>
      </div>
      
      <div className={`flex flex-col sm:flex-row gap-4 ${language === 'ar' ? 'sm:flex-row-reverse' : ''}`}>
        <Link 
          href="/dashboard" 
          className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors text-center"
        >
          {confirmationContent.dashboardButton[language as keyof typeof confirmationContent.dashboardButton]}
        </Link>
        
        <Link 
          href="/courses" 
          className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-center"
        >
          {confirmationContent.coursesButton[language as keyof typeof confirmationContent.coursesButton]}
        </Link>
      </div>
    </div>
  );
};

export default function EnrollmentPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const { language } = useLanguage();
  
  const updateFormData = (data: any) => {
    setFormData({ ...formData, ...data });
  };
  
  const nextStep = () => {
    setStep(step + 1);
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      <SEOMetadata 
        title={content.enroll[language as keyof typeof content.enroll]}
        description={content.enrollSubtitle[language as keyof typeof content.enrollSubtitle]}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-center ${language === 'ar' ? 'font-arabic text-right' : ''}`}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {content.enroll[language as keyof typeof content.enroll]}
              </h1>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                {content.enrollSubtitle[language as keyof typeof content.enrollSubtitle]}
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          {/* Enrollment Steps Indicator */}
          <div className="mb-12">
            <div className="flex justify-between items-center w-full max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div key={stepNumber} className="flex flex-col items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-2 transition-colors duration-300 ${
                      step === stepNumber 
                        ? 'bg-primary-600' 
                        : step > stepNumber 
                          ? 'bg-green-500' 
                          : 'bg-gray-300'
                    }`}
                  >
                    {step > stepNumber ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      stepNumber
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Progress Bar */}
            <div className="h-2 bg-gray-200 rounded-full max-w-4xl mx-auto mt-4">
              <div 
                className="h-full bg-primary-600 rounded-full transition-all duration-300"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              ></div>
            </div>
          </div>
          
          {/* Step Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="personal-info"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <PersonalInfoStep 
                    formData={formData} 
                    updateFormData={updateFormData} 
                    nextStep={nextStep}
                    language={language}
                  />
                </motion.div>
              )}
              
              {step === 2 && (
                <motion.div
                  key="course-selection"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CourseSelectionStep 
                    formData={formData} 
                    updateFormData={updateFormData} 
                    nextStep={nextStep} 
                    prevStep={prevStep}
                    language={language}
                  />
                </motion.div>
              )}
              
              {step === 3 && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <PaymentStep 
                    formData={formData} 
                    updateFormData={updateFormData} 
                    nextStep={nextStep} 
                    prevStep={prevStep}
                    language={language}
                  />
                </motion.div>
              )}
              
              {step === 4 && (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ConfirmationStep 
                    formData={formData}
                    language={language}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
} 