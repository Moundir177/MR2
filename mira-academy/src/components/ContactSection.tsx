'use client';

import { useLanguage } from './LanguageContext';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const sectionText = {
    title: {
      fr: 'Contactez-Nous',
      ar: 'اتصل بنا',
      en: 'Contact Us',
    },
    subtitle: {
      fr: 'Nous sommes là pour répondre à vos questions',
      ar: 'نحن هنا للإجابة على أسئلتكم',
      en: 'We\'re here to answer your questions',
    },
    form: {
      name: {
        fr: 'Nom complet',
        ar: 'الاسم الكامل',
        en: 'Full name',
      },
      email: {
        fr: 'Adresse e-mail',
        ar: 'البريد الإلكتروني',
        en: 'Email address',
      },
      phone: {
        fr: 'Numéro de téléphone',
        ar: 'رقم الهاتف',
        en: 'Phone number',
      },
      message: {
        fr: 'Votre message',
        ar: 'رسالتك',
        en: 'Your message',
      },
      submit: {
        fr: 'Envoyer le message',
        ar: 'إرسال الرسالة',
        en: 'Send message',
      },
      success: {
        fr: 'Merci! Votre message a été envoyé.',
        ar: 'شكرا! تم إرسال رسالتك.',
        en: 'Thank you! Your message has been sent.',
      },
    },
    info: {
      address: {
        title: {
          fr: 'Adresse',
          ar: 'العنوان',
          en: 'Address',
        },
        content: {
          fr: '123 Avenue Mohammed Khemisti, Alger, Algérie',
          ar: '123 شارع محمد خميستي، الجزائر العاصمة، الجزائر',
          en: '123 Mohammed Khemisti Avenue, Algiers, Algeria',
        },
      },
      phone: {
        title: {
          fr: 'Téléphone',
          ar: 'الهاتف',
          en: 'Phone',
        },
        content: {
          fr: '+213 (0) 23 45 67 89',
          ar: '+213 (0) 23 45 67 89',
          en: '+213 (0) 23 45 67 89',
        },
      },
      email: {
        title: {
          fr: 'Email',
          ar: 'البريد الإلكتروني',
          en: 'Email',
        },
        content: {
          fr: 'contact@mira-academy.dz',
          ar: 'contact@mira-academy.dz',
          en: 'contact@mira-academy.dz',
        },
      },
      hours: {
        title: {
          fr: 'Heures d\'ouverture',
          ar: 'ساعات العمل',
          en: 'Working hours',
        },
        content: {
          fr: 'Dimanche - Jeudi: 9h - 17h',
          ar: 'الأحد - الخميس: 9 صباحًا - 5 مساءً',
          en: 'Sunday - Thursday: 9am - 5pm',
        },
      },
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would normally send the data to your backend
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 }
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className={`text-3xl font-bold text-neutral-900 sm:text-4xl ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
            variants={itemVariants}
          >
            {sectionText.title[language]}
          </motion.h2>
          <motion.p 
            className={`mt-4 text-lg text-neutral-600 max-w-3xl mx-auto ${
              language === 'ar' ? 'font-arabic' : ''
            }`}
            variants={itemVariants}
          >
            {sectionText.subtitle[language]}
          </motion.p>
        </motion.div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${language === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className={`p-8 h-full flex items-center justify-center ${language === 'ar' ? 'font-arabic' : ''}`}>
                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-neutral-900">{sectionText.form.success[language]}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={`p-8 ${language === 'ar' ? 'text-right' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className={`block text-sm font-medium text-neutral-700 mb-1 ${language === 'ar' ? 'font-arabic' : ''}`}
                    >
                      {sectionText.form.name[language]}
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 rounded-md border border-neutral-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 ${language === 'ar' ? 'font-arabic' : ''}`}
                      dir={language === 'ar' ? 'rtl' : 'ltr'}
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className={`block text-sm font-medium text-neutral-700 mb-1 ${language === 'ar' ? 'font-arabic' : ''}`}
                    >
                      {sectionText.form.email[language]}
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 rounded-md border border-neutral-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 ${language === 'ar' ? 'font-arabic' : ''}`}
                      dir={language === 'ar' ? 'rtl' : 'ltr'}
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="phone" 
                      className={`block text-sm font-medium text-neutral-700 mb-1 ${language === 'ar' ? 'font-arabic' : ''}`}
                    >
                      {sectionText.form.phone[language]}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 rounded-md border border-neutral-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 ${language === 'ar' ? 'font-arabic' : ''}`}
                      dir={language === 'ar' ? 'rtl' : 'ltr'}
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="message" 
                      className={`block text-sm font-medium text-neutral-700 mb-1 ${language === 'ar' ? 'font-arabic' : ''}`}
                    >
                      {sectionText.form.message[language]}
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 rounded-md border border-neutral-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 ${language === 'ar' ? 'font-arabic' : ''}`}
                      dir={language === 'ar' ? 'rtl' : 'ltr'}
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className={`w-full bg-primary-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200 ${language === 'ar' ? 'font-arabic' : ''}`}
                    >
                      {sectionText.form.submit[language]}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
          
          {/* Contact Info and Map */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Contact Information */}
            <div className={`bg-white rounded-xl shadow-lg p-8 ${language === 'ar' ? 'text-right' : ''}`}>
              <h3 className={`text-xl font-bold text-neutral-900 mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'fr' ? 'Informations de contact' : 
                 language === 'ar' ? 'معلومات الاتصال' : 
                 'Contact Information'}
              </h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className={`flex-shrink-0 ${language === 'ar' ? 'ml-3' : 'mr-3'}`}>
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className={`text-sm font-medium text-neutral-500 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {sectionText.info.address.title[language]}
                    </p>
                    <p className={`mt-1 text-neutral-900 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {sectionText.info.address.content[language]}
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className={`flex-shrink-0 ${language === 'ar' ? 'ml-3' : 'mr-3'}`}>
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className={`text-sm font-medium text-neutral-500 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {sectionText.info.phone.title[language]}
                    </p>
                    <p className={`mt-1 text-neutral-900 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {sectionText.info.phone.content[language]}
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className={`flex-shrink-0 ${language === 'ar' ? 'ml-3' : 'mr-3'}`}>
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className={`text-sm font-medium text-neutral-500 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {sectionText.info.email.title[language]}
                    </p>
                    <p className={`mt-1 text-neutral-900 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {sectionText.info.email.content[language]}
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className={`flex-shrink-0 ${language === 'ar' ? 'ml-3' : 'mr-3'}`}>
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className={`text-sm font-medium text-neutral-500 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {sectionText.info.hours.title[language]}
                    </p>
                    <p className={`mt-1 text-neutral-900 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {sectionText.info.hours.content[language]}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-lg h-80 bg-neutral-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102456.53102539172!2d3.0162030961551406!3d36.76266748276465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb26977ea659f%3A0x3e42c9f5b2b6e280!2sAlgiers%2C%20Algeria!5e0!3m2!1sen!2sus!4v1652364807342!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 