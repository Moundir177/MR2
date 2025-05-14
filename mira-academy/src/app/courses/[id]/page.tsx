import Link from 'next/link';

// Generate static paths for courses
export async function generateStaticParams() {
  // This would normally fetch from an API or database
  // For now, we'll use the sample course IDs
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' }
  ];
}

// Sample courses data
const coursesData = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "Master front-end and back-end technologies to build complete web applications.",
    category: "Web Development",
    level: "Intermediate",
    image: "🖥️",
  },
  {
    id: 2,
    title: "Data Science and Machine Learning",
    description: "Learn to analyze data and build predictive models with Python and popular ML libraries.",
    category: "Data Science",
    level: "Advanced",
    image: "📊",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Build native iOS and Android applications using modern frameworks.",
    category: "Mobile Development",
    level: "Intermediate",
    image: "📱",
  }
];

// Static page component
export default function CourseDetail({ params }: { params: { id: string } }) {
  const courseId = parseInt(params.id);
  const course = coursesData.find(c => c.id === courseId);

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Link
          href="/courses"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to Courses
        </Link>
        
        {course ? (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <div className="flex items-center mb-6">
              <span className="text-6xl mr-6">{course.image}</span>
              <div>
                <p className="text-gray-600">{course.description}</p>
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mr-2">
                    {course.category}
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <p>View the complete course details using our interactive site.</p>
              <p>Use the development server with <code>npm run dev</code> to see the full interactive version.</p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
            <p>Sorry, we couldn't find the course you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
} 