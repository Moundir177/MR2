'use client';

import { useLanguage } from '../../components/LanguageContext';
import { useAuth } from '../../components/AuthContext';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { language } = useLanguage();
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // If the user is already authenticated, redirect to the dashboard
  if (isAuthenticated) {
    router.push('/dashboard');
    return null;
  }
  
  const pageContent = {
    login: {
      title: {
        fr: 'Connexion',
        ar: 'تسجيل الدخول',
        en: 'Login',
      },
      subtitle: {
        fr: 'Accédez à votre compte pour suivre vos cours',
        ar: 'الوصول إلى حسابك لمتابعة دوراتك',
        en: 'Access your account to track your courses',
      },
      email: {
        label: {
          fr: 'Email',
          ar: 'البريد الإلكتروني',
          en: 'Email',
        },
        placeholder: {
          fr: 'votre@email.com',
          ar: 'بريدك@الإلكتروني.com',
          en: 'your@email.com',
        },
      },
      password: {
        label: {
          fr: 'Mot de passe',
          ar: 'كلمة المرور',
          en: 'Password',
        },
        placeholder: {
          fr: 'Votre mot de passe',
          ar: 'كلمة المرور الخاصة بك',
          en: 'Your password',
        },
      },
      remember: {
        fr: 'Se souvenir de moi',
        ar: 'تذكرني',
        en: 'Remember me',
      },
      forgot: {
        fr: 'Mot de passe oublié ?',
        ar: 'نسيت كلمة المرور؟',
        en: 'Forgot password?',
      },
      button: {
        fr: 'Se connecter',
        ar: 'تسجيل الدخول',
        en: 'Log in',
      },
      noAccount: {
        fr: 'Vous n\'avez pas de compte ?',
        ar: 'ليس لديك حساب؟',
        en: 'Don\'t have an account?',
      },
      register: {
        fr: 'S\'inscrire',
        ar: 'التسجيل',
        en: 'Register',
      },
    },
    register: {
      title: {
        fr: 'Créer un compte',
        ar: 'إنشاء حساب',
        en: 'Create an account',
      },
      subtitle: {
        fr: 'Rejoignez MIRA ACADEMY et commencez votre parcours d\'apprentissage',
        ar: 'انضم إلى أكاديمية ميرا وابدأ رحلة التعلم الخاصة بك',
        en: 'Join MIRA ACADEMY and start your learning journey',
      },
      name: {
        label: {
          fr: 'Nom complet',
          ar: 'الاسم الكامل',
          en: 'Full name',
        },
        placeholder: {
          fr: 'Votre nom',
          ar: 'اسمك',
          en: 'Your name',
        },
      },
      email: {
        label: {
          fr: 'Email',
          ar: 'البريد الإلكتروني',
          en: 'Email',
        },
        placeholder: {
          fr: 'votre@email.com',
          ar: 'بريدك@الإلكتروني.com',
          en: 'your@email.com',
        },
      },
      phone: {
        label: {
          fr: 'Téléphone',
          ar: 'رقم الهاتف',
          en: 'Phone',
        },
        placeholder: {
          fr: 'Votre numéro de téléphone',
          ar: 'رقم هاتفك',
          en: 'Your phone number',
        },
      },
      password: {
        label: {
          fr: 'Mot de passe',
          ar: 'كلمة المرور',
          en: 'Password',
        },
        placeholder: {
          fr: 'Créez un mot de passe',
          ar: 'إنشاء كلمة مرور',
          en: 'Create a password',
        },
      },
      confirmPassword: {
        label: {
          fr: 'Confirmer le mot de passe',
          ar: 'تأكيد كلمة المرور',
          en: 'Confirm password',
        },
        placeholder: {
          fr: 'Confirmer votre mot de passe',
          ar: 'تأكيد كلمة المرور الخاصة بك',
          en: 'Confirm your password',
        },
      },
      terms: {
        fr: 'J\'accepte les conditions d\'utilisation et la politique de confidentialité',
        ar: 'أوافق على شروط الاستخدام وسياسة الخصوصية',
        en: 'I agree to the terms of service and privacy policy',
      },
      button: {
        fr: 'S\'inscrire',
        ar: 'التسجيل',
        en: 'Register',
      },
      hasAccount: {
        fr: 'Vous avez déjà un compte ?',
        ar: 'لديك حساب بالفعل؟',
        en: 'Already have an account?',
      },
      login: {
        fr: 'Se connecter',
        ar: 'تسجيل الدخول',
        en: 'Log in',
      },
    },
    social: {
      title: {
        fr: 'Ou continuez avec',
        ar: 'أو تابع باستخدام',
        en: 'Or continue with',
      },
      google: {
        fr: 'Google',
        ar: 'جوجل',
        en: 'Google',
      },
      facebook: {
        fr: 'Facebook',
        ar: 'فيسبوك',
        en: 'Facebook',
      },
      apple: {
        fr: 'Apple',
        ar: 'أبل',
        en: 'Apple',
      },
    },
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    if (!email || !password) {
      setError('Please fill all required fields');
      setIsLoading(false);
      return;
    }
    
    try {
      const success = await login(email, password);
      if (success) {
        router.push('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred during login');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Simple validation
    if (!fullName || !email || !password || !confirmPassword) {
      setError('Please fill all required fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    // In a real app, you would call an API to register the user
    alert('Registration functionality would be implemented here in a real app');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link href="/" className="flex justify-center mb-6">
            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              MIRA ACADEMY
            </span>
          </Link>
          <h2 className={`text-3xl font-extrabold text-neutral-900 ${
            language === 'ar' ? 'font-arabic' : ''
          }`}>
            {isLogin 
              ? pageContent.login.title[language as keyof typeof pageContent.login.title]
              : pageContent.register.title[language as keyof typeof pageContent.register.title]
            }
          </h2>
          <p className={`mt-2 text-center text-sm text-neutral-600 max-w-md mx-auto ${
            language === 'ar' ? 'font-arabic' : ''
          }`}>
            {isLogin 
              ? pageContent.login.subtitle[language as keyof typeof pageContent.login.subtitle]
              : pageContent.register.subtitle[language as keyof typeof pageContent.register.subtitle]
            }
          </p>
        </motion.div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10"
        >
          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
              <p>{error}</p>
            </div>
          )}
          
          {isLogin ? (
            <form className={`space-y-6 ${language === 'ar' ? 'text-right' : ''}`} onSubmit={handleLogin}>
              <div>
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-medium text-neutral-700 ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {pageContent.login.email.label[language as keyof typeof pageContent.login.email.label]}
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`appearance-none block w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}
                    placeholder={pageContent.login.email.placeholder[language as keyof typeof pageContent.login.email.placeholder]}
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="password" 
                  className={`block text-sm font-medium text-neutral-700 ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {pageContent.login.password.label[language as keyof typeof pageContent.login.password.label]}
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`appearance-none block w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}
                    placeholder={pageContent.login.password.placeholder[language as keyof typeof pageContent.login.password.placeholder]}
                  />
                </div>
              </div>

              <div className={`flex items-center justify-between ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                  />
                  <label 
                    htmlFor="remember-me" 
                    className={`ml-2 block text-sm text-neutral-900 ${
                      language === 'ar' ? 'font-arabic mr-2 ml-0' : ''
                    }`}
                  >
                    {pageContent.login.remember[language as keyof typeof pageContent.login.remember]}
                  </label>
                </div>

                <div className="text-sm">
                  <a 
                    href="#" 
                    className={`font-medium text-primary-600 hover:text-primary-500 ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}
                  >
                    {pageContent.login.forgot[language as keyof typeof pageContent.login.forgot]}
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : ''
                  } ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {isLoading ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : null}
                  {pageContent.login.button[language as keyof typeof pageContent.login.button]}
                </button>
              </div>
            </form>
          ) : (
            <form className={`space-y-6 ${language === 'ar' ? 'text-right' : ''}`} onSubmit={handleRegister}>
              <div>
                <label 
                  htmlFor="name" 
                  className={`block text-sm font-medium text-neutral-700 ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {pageContent.register.name.label[language as keyof typeof pageContent.register.name.label]}
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`appearance-none block w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}
                    placeholder={pageContent.register.name.placeholder[language as keyof typeof pageContent.register.name.placeholder]}
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-medium text-neutral-700 ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {pageContent.register.email.label[language as keyof typeof pageContent.register.email.label]}
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`appearance-none block w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}
                    placeholder={pageContent.register.email.placeholder[language as keyof typeof pageContent.register.email.placeholder]}
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="phone" 
                  className={`block text-sm font-medium text-neutral-700 ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {pageContent.register.phone.label[language as keyof typeof pageContent.register.phone.label]}
                </label>
                <div className="mt-1">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`appearance-none block w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}
                    placeholder={pageContent.register.phone.placeholder[language as keyof typeof pageContent.register.phone.placeholder]}
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="password" 
                  className={`block text-sm font-medium text-neutral-700 ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {pageContent.register.password.label[language as keyof typeof pageContent.register.password.label]}
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`appearance-none block w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}
                    placeholder={pageContent.register.password.placeholder[language as keyof typeof pageContent.register.password.placeholder]}
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="confirm-password" 
                  className={`block text-sm font-medium text-neutral-700 ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {pageContent.register.confirmPassword.label[language as keyof typeof pageContent.register.confirmPassword.label]}
                </label>
                <div className="mt-1">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`appearance-none block w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}
                    placeholder={pageContent.register.confirmPassword.placeholder[language as keyof typeof pageContent.register.confirmPassword.placeholder]}
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                />
                <label 
                  htmlFor="terms" 
                  className={`ms-2 block text-sm text-neutral-700 ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {pageContent.register.terms[language as keyof typeof pageContent.register.terms]}
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                    language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {pageContent.register.button[language as keyof typeof pageContent.register.button]}
                </button>
              </div>
            </form>
          )}

          <div className="mt-6">
            <div className={`relative ${language === 'ar' ? 'text-right' : ''}`}>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className={`px-2 bg-white text-neutral-500 ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}>
                  {pageContent.social.title[language as keyof typeof pageContent.social.title]}
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-neutral-300 rounded-md shadow-sm bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50"
                >
                  <span className="sr-only">{pageContent.social.google[language as keyof typeof pageContent.social.google]}</span>
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-neutral-300 rounded-md shadow-sm bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50"
                >
                  <span className="sr-only">{pageContent.social.facebook[language as keyof typeof pageContent.social.facebook]}</span>
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-neutral-300 rounded-md shadow-sm bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50"
                >
                  <span className="sr-only">{pageContent.social.apple[language as keyof typeof pageContent.social.apple]}</span>
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.146 0c.66 0 1.3.255 1.94.762.64.506 1.13 1.207 1.48 2.102.447-.253.883-.38 1.308-.38 1.023 0 1.907.486 2.652 1.457.743.97 1.114 2.14 1.114 3.513 0 1.03-.234 2.054-.702 3.075-.47 1.02-1.14 1.87-2.016 2.55.157.77.236 1.66.236 2.666 0 1.417-.3 2.636-.9 3.662-.6 1.025-1.41 1.537-2.44 1.537-.788 0-1.435-.325-1.942-.976a3.75 3.75 0 01-.741-1.535A3.235 3.235 0 019.91 19.25c-.635 0-1.22-.182-1.755-.54-.536-.358-.94-.855-1.214-1.49-.275.5-.698.913-1.27 1.235-.57.325-1.16.485-1.764.485-.676 0-1.316-.188-1.922-.57a4.308 4.308 0 01-1.44-1.582A4.698 4.698 0 01.068 15.1c0-.97.33-1.79 1-2.47a3.2 3.2 0 012.333-.975c.424 0 .843.09 1.26.272a3.42 3.42 0 011.068.77c.02-.16.034-.33.034-.5 0-.427-.03-.825-.08-1.195a23.66 23.66 0 00-.378-2.15c-.122-.445-.366-1.327-.733-2.648C4.242 4.012 4.06 3.21 4.06 2.54c0-.72.248-1.317.742-1.8C5.297.256 5.887 0 6.545 0c.676 0 1.235.227 1.676.682.442.455.77 1.103.985 1.945.217.842.413 1.832.588 2.97.175 1.138.324 2.285.446 3.444.122 1.16.217 2.14.284 2.94.066.8.12 1.218.163 1.253.063-.126.13-.35.2-.67.072-.32.194-.938.368-1.855.173-.916.358-1.846.554-2.79.196-.945.358-1.58.487-1.905.24-.59.59-1.075 1.05-1.452.46-.377.954-.566 1.482-.566h.036zm-8 14.92a2 2 0 10-.001 3.999 2 2 0 000-3.999zm13.996-1.293a2 2 0 10-.001 3.999 2 2 0 000-3.999z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className={`mt-6 ${language === 'ar' ? 'text-right' : 'text-center'}`}>
            <p className={`text-sm text-neutral-600 ${
              language === 'ar' ? 'font-arabic' : ''
            }`}>
              {isLogin 
                ? pageContent.login.noAccount[language as keyof typeof pageContent.login.noAccount]
                : pageContent.register.hasAccount[language as keyof typeof pageContent.register.hasAccount]
              }
              {' '}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className={`font-medium text-primary-600 hover:text-primary-500 ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {isLogin 
                  ? pageContent.login.register[language as keyof typeof pageContent.login.register]
                  : pageContent.register.login[language as keyof typeof pageContent.register.login]
                }
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 