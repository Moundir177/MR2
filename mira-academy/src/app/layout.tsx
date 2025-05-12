import './globals.css';
import { LanguageProvider } from '../components/LanguageContext';
import { AuthProvider } from '../components/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Inter, Roboto, Amiri } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto = Roboto({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-amiri',
});

export const metadata = {
  title: 'MIRA ACADEMY - Training Center in Algeria',
  description: 'Leading educational institution in Algeria offering high-quality training in various fields. Courses available in French, Arabic, and English.',
  keywords: 'education, training, Algeria, courses, professional development, multilingual education, Algiers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable} ${amiri.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans">
        <LanguageProvider>
          <AuthProvider>
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
