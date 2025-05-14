import { Metadata } from 'next';
import Link from 'next/link';

// Sample instructors data (in a real app, this would come from an API)
const instructorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Senior Web Development Instructor",
    bio: "Dr. Johnson has over 10 years of experience in web development and has worked with companies like Google and Amazon. She specializes in front-end technologies and user experience design. Her teaching approach combines theoretical foundations with practical, hands-on projects that prepare students for real-world challenges.",
    avatar: "👩‍💻",
    expertise: ["React", "Vue.js", "UI/UX Design", "JavaScript", "HTML/CSS"],
    education: [
      "Ph.D. in Computer Science, Stanford University",
      "M.S. in Web Technologies, MIT",
      "B.S. in Software Engineering, UC Berkeley"
    ],
    courses: [
      { 
        id: 1, 
        title: "Full Stack Web Development",
        description: "Learn to build complete web applications with modern front-end and back-end technologies.",
        image: "🖥️"
      },
      { 
        id: 11, 
        title: "JavaScript Fundamentals",
        description: "Master the core concepts of JavaScript programming and ES6+ features.",
        image: "📱"
      }
    ],
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/in/sarahjohnson' },
      { platform: 'github', url: 'https://github.com/sarahjohnson' },
      { platform: 'website', url: 'https://sarahjohnson.dev' }
    ],
    testimonials: [
      {
        text: "Dr. Johnson's teaching style made complex React concepts easy to understand. Her practical approach helped me build my first production-ready application.",
        author: "Michael Brown",
        course: "Full Stack Web Development"
      },
      {
        text: "The JavaScript course exceeded my expectations. Dr. Johnson's explanations of advanced concepts were clear and the hands-on exercises reinforced my learning.",
        author: "Emma Garcia",
        course: "JavaScript Fundamentals"
      }
    ],
    achievements: [
      "Published 15+ articles in top tech journals",
      "Developed curriculum for 3 web development bootcamps",
      "Speaker at ReactConf 2021 and 2022",
      "Open source contributor to React ecosystem"
    ],
    featured: true
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Back-end Development Specialist",
    bio: "Michael is a back-end specialist with extensive experience in building scalable APIs and database systems. He previously worked at Microsoft and several successful startups. Michael is passionate about teaching students how to architect robust, efficient backend systems that can handle modern application demands.",
    avatar: "👨‍💻",
    expertise: ["Node.js", "Python", "MongoDB", "AWS", "System Architecture", "API Design"],
    education: [
      "M.S. in Computer Science, University of Washington",
      "B.S. in Information Systems, UCLA"
    ],
    courses: [
      { 
        id: 1, 
        title: "Full Stack Web Development",
        description: "Learn to build complete web applications with modern front-end and back-end technologies.",
        image: "🖥️" 
      },
      { 
        id: 12, 
        title: "API Development with Node.js",
        description: "Design and implement scalable RESTful and GraphQL APIs using Node.js and Express.",
        image: "🔌"
      }
    ],
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/in/michaelchen' },
      { platform: 'github', url: 'https://github.com/michaelchen' }
    ],
    testimonials: [
      {
        text: "Michael's deep knowledge of backend systems helped me understand how to design APIs that can scale. The course was challenging but extremely rewarding.",
        author: "David Patel",
        course: "API Development with Node.js"
      }
    ],
    achievements: [
      "Architected backend systems handling millions of requests per day",
      "Author of 'Modern API Design Patterns' book",
      "Technical reviewer for Node.js documentation"
    ],
    featured: true
  },
  {
    id: 3,
    name: "Dr. Emma Watson",
    role: "Data Science Lead",
    bio: "Dr. Watson leads our data science program and has published numerous papers on deep learning and natural language processing. Her work has been featured in major AI conferences worldwide. She brings both academic rigor and practical industry experience to her teaching, ensuring students understand both theoretical concepts and real-world applications.",
    avatar: "👩‍🔬",
    expertise: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Python", "TensorFlow", "PyTorch"],
    education: [
      "Ph.D. in Machine Learning, Carnegie Mellon University",
      "M.S. in Statistics, Oxford University",
      "B.S. in Mathematics, University of Edinburgh"
    ],
    courses: [
      { 
        id: 2, 
        title: "Data Science and Machine Learning",
        description: "Comprehensive introduction to data science fundamentals and machine learning algorithms.",
        image: "📊"
      },
      { 
        id: 7, 
        title: "Artificial Intelligence Engineering",
        description: "Advanced course on building and deploying production-ready AI systems.",
        image: "🤖"
      }
    ],
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/in/emmawatson' },
      { platform: 'twitter', url: 'https://twitter.com/emmawatson' }
    ],
    testimonials: [
      {
        text: "Dr. Watson makes complex machine learning concepts accessible. Her projects are challenging but she provides excellent guidance throughout the learning process.",
        author: "James Wilson",
        course: "Data Science and Machine Learning"
      },
      {
        text: "The AI Engineering course was exactly what I needed to take my skills to the next level. Dr. Watson's industry experience is evident in the practical focus of the course.",
        author: "Sophia Martinez",
        course: "Artificial Intelligence Engineering"
      }
    ],
    achievements: [
      "Published 20+ research papers in top AI conferences",
      "Developed novel NLP algorithms used by major tech companies",
      "Recipient of the National Science Foundation AI Research Grant",
      "Advisor for 3 AI startups"
    ],
    featured: true
  }
];

// Generate static paths for all instructors
export async function generateStaticParams() {
  return instructorsData.map((instructor) => ({
    id: instructor.id.toString()
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: { id: string } 
}): Promise<Metadata> {
  const instructor = instructorsData.find(i => i.id === parseInt(params.id));
  
  if (!instructor) {
    return {
      title: 'Instructor Not Found',
    };
  }
  
  return {
    title: `${instructor.name} - ${instructor.role}`,
    description: instructor.bio,
  };
}

// Static page component
export default function InstructorDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const instructor = instructorsData.find(i => i.id === parseInt(id));

  if (!instructor) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold">Instructor Not Found</h1>
        <p className="mt-4">Sorry, the instructor you're looking for doesn't exist.</p>
        <Link href="/instructors" className="mt-8 inline-block text-blue-600 hover:underline">
          View all instructors
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/instructors" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Back to all instructors
        </Link>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
          <div className="md:flex">
            <div className="md:flex-shrink-0 bg-blue-100 flex items-center justify-center text-7xl p-6">
              {instructor.avatar}
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900">{instructor.name}</h1>
              <p className="text-blue-600 font-medium mb-4">{instructor.role}</p>
              <p className="text-gray-700 mb-6">{instructor.bio}</p>
              
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-2">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {instructor.expertise.map((skill, index) => (
                    <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {instructor.education && (
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Education</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    {instructor.education.map((edu, index) => (
                      <li key={index}>{edu}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Courses by {instructor.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {instructor.courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="h-40 bg-gray-100 flex items-center justify-center text-5xl">
                  {course.image}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{course.title}</h3>
                  <p className="text-gray-700 mb-4">{course.description}</p>
                  <Link href={`/courses/${course.id}`} className="text-blue-600 font-medium hover:underline">
                    View course details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {instructor.testimonials && instructor.testimonials.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Student Testimonials</h2>
            <div className="grid grid-cols-1 gap-6">
              {instructor.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="italic text-gray-700 mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">Student, {testimonial.course}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {instructor.achievements && instructor.achievements.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Achievements</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {instructor.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
} 