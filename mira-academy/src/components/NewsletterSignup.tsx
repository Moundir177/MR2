import { useState } from 'react';
import { motion } from 'framer-motion';

type NewsletterSignupProps = {
  language: 'fr' | 'ar' | 'en';
  compact?: boolean;
};

export default function NewsletterSignup({ language, compact = false }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const content = {
    title: {
      fr: 'Abonnez-vous à notre newsletter',
      ar: 'اشترك في نشرتنا الإخبارية',
      en: 'Subscribe to our newsletter',
    },
    description: {
      fr: 'Recevez nos derniers articles, conseils et actualités directement dans votre boîte mail.',
      ar: 'احصل على أحدث مقالاتنا ونصائحنا وأخبارنا مباشرة في صندوق البريد الخاص بك.',
      en: 'Get our latest articles, tips, and news directly in your inbox.',
    },
    placeholder: {
      fr: 'Votre adresse email',
      ar: 'عنوان بريدك الإلكتروني',
      en: 'Your email address',
    },
    submit: {
      fr: 'S\'abonner',
      ar: 'اشتراك',
      en: 'Subscribe',
    },
    submitting: {
      fr: 'Envoi en cours...',
      ar: 'جار الإرسال...',
      en: 'Subscribing...',
    },
    success: {
      fr: 'Merci de votre abonnement !',
      ar: 'شكرا لاشتراكك!',
      en: 'Thanks for subscribing!',
    },
    invalidEmail: {
      fr: 'Veuillez entrer une adresse email valide.',
      ar: 'يرجى إدخال عنوان بريد إلكتروني صالح.',
      en: 'Please enter a valid email address.',
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(content.invalidEmail[language]);
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  if (compact) {
    return (
      <div className={`bg-primary-50 rounded-lg p-4 ${
        language === 'ar' ? 'text-right' : ''
      }`}>
        <h3 className={`text-base font-medium text-neutral-900 mb-2 ${
          language === 'ar' ? 'font-arabic' : ''
        }`}>
          {content.title[language]}
        </h3>
        
        {isSuccess ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-sm text-green-600 ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {content.success[language]}
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-2">
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder={content.placeholder[language]}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`px-3 py-2 text-sm rounded-md border border-neutral-300 focus:ring-primary-500 focus:border-primary-500 ${
                  language === 'ar' ? 'text-right font-arabic' : ''
                }`}
                required
              />
              {error && (
                <p className={`text-xs text-red-500 ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}>
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-3 py-2 text-sm rounded-md bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:bg-primary-400 disabled:cursor-not-allowed ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {isSubmitting ? content.submitting[language] : content.submit[language]}
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-lg py-8 px-6 ${
      language === 'ar' ? 'text-right' : ''
    }`}>
      <div className="max-w-2xl mx-auto">
        <h2 className={`text-2xl font-bold text-white mb-3 ${
          language === 'ar' ? 'font-arabic' : ''
        }`}>
          {content.title[language]}
        </h2>
        <p className={`text-primary-100 mb-6 ${
          language === 'ar' ? 'font-arabic' : ''
        }`}>
          {content.description[language]}
        </p>
        
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white bg-opacity-20 rounded-md p-4"
          >
            <p className={`text-white font-medium ${
              language === 'ar' ? 'font-arabic' : ''
            }`}>
              {content.success[language]}
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className={`flex flex-col sm:flex-row gap-3 ${
              language === 'ar' ? 'flex-row-reverse' : ''
            }`}>
              <div className="flex-grow">
                <input
                  type="email"
                  placeholder={content.placeholder[language]}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 ${
                    language === 'ar' ? 'text-right font-arabic' : ''
                  }`}
                  required
                />
                {error && (
                  <p className={`mt-1 text-sm text-red-200 ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}>
                    {error}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 rounded-md bg-white text-primary-700 font-medium hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 disabled:bg-primary-100 disabled:cursor-not-allowed ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {isSubmitting ? content.submitting[language] : content.submit[language]}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
} 