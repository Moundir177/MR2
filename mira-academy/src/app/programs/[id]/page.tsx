import Link from 'next/link';

// Generate static paths for all programs
export async function generateStaticParams() {
  // In a real application, this would fetch from an API
  return [
    { id: 'web-development' },
    { id: 'data-science' },
    { id: 'digital-marketing' },
    { id: 'graphic-design' },
    { id: 'language-mastery' },
    { id: 'business-administration' }
  ];
}

// Program data - simplified for static rendering
const programs = [
  {
    id: 'web-development',
    name: {
      en: 'Full-Stack Web Development',
    },
    description: {
      en: 'Learn to build complete web applications using modern front-end and back-end technologies.',
    },
    image: '/programs/web-development.jpg',
  },
  {
    id: 'data-science',
    name: {
      en: 'Data Science & Analytics',
    },
    description: {
      en: 'Master data analysis, visualization, and machine learning techniques.',
    },
    image: '/programs/data-science.jpg',
  },
  {
    id: 'digital-marketing',
    name: {
      en: 'Digital Marketing',
    },
    description: {
      en: 'Learn to create and execute effective digital marketing campaigns.',
    },
    image: '/programs/digital-marketing.jpg',
  }
];

// Static page component
export default function ProgramDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const program = programs.find(p => p.id === id);

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Link
          href="/programs"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to Programs
        </Link>
        
        {program ? (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4">{program.name.en}</h1>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-1/3 bg-gray-100 rounded-lg h-48 flex items-center justify-center text-6xl">
                🎓
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-6">{program.description.en}</p>
                
                <div className="prose max-w-none">
                  <p>View the complete program details using our interactive site.</p>
                  <p>Use the development server with <code>npm run dev</code> to see the full interactive version.</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4">Program Not Found</h1>
            <p>Sorry, we couldn't find the program you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
} 