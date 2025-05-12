'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import SEOMetadata from '../../../components/SEOMetadata';

interface Instructor {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  expertise: string[];
  courses: {
    id: number;
    title: string;
    description?: string;
    image?: string;
  }[];
  education?: string[];
  socialLinks?: {
    platform: 'linkedin' | 'twitter' | 'github' | 'website';
    url: string;
  }[];
  featured?: boolean;
  testimonials?: {
    text: string;
    author: string;
    course: string;
  }[];
  achievements?: string[];
}

// Sample instructors data (in a real app, this would come from an API)
const instructorsData: Instructor[] = [
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

export default function InstructorDetail() {
  const { id } = useParams();
  const [instructor, setInstructor] = useState<Instructor | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'courses' | 'testimonials' | 'about'>('about');

  useEffect(() => {
    // Simulate API fetch
    const fetchInstructor = () => {
      setTimeout(() => {
        const foundInstructor = instructorsData.find(i => i.id === Number(id));
        setInstructor(foundInstructor || null);
        setIsLoading(false);
      }, 500);
    };

    fetchInstructor();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!instructor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Instructor Not Found</h1>
        <p className="text-gray-600 mb-6">The instructor you're looking for doesn't exist or has been removed.</p>
        <Link
          href="/instructors"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Browse All Instructors
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEOMetadata 
        title={`${instructor.name} - Instructor Profile`}
        description={`Learn about ${instructor.name}, ${instructor.role} at Mira Academy. Explore their expertise, courses, and achievements.`}
      />
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/instructors"
            className="inline-flex items-center text-blue-600 font-medium mb-8 hover:text-blue-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Instructors
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-6"
              >
                <div className="p-6 flex flex-col items-center">
                  <div className="w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-7xl">{instructor.avatar}</span>
                  </div>
                  
                  <h1 className="text-2xl font-bold text-gray-900 text-center mb-1">{instructor.name}</h1>
                  <p className="text-blue-600 font-medium text-center mb-4">{instructor.role}</p>
                  
                  <div className="flex justify-center space-x-3 mb-6">
                    {instructor.socialLinks?.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        {link.platform === 'linkedin' && 'in'}
                        {link.platform === 'twitter' && 't'}
                        {link.platform === 'github' && 'gh'}
                        {link.platform === 'website' && 'www'}
                      </a>
                    ))}
                  </div>
                  
                  <div className="w-full border-t border-gray-100 pt-6">
                    <h2 className="text-sm uppercase font-semibold text-gray-600 tracking-wider mb-3">Areas of Expertise</h2>
                    <div className="flex flex-wrap gap-2">
                      {instructor.expertise.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {instructor.education && (
                    <div className="w-full border-t border-gray-100 mt-6 pt-6">
                      <h2 className="text-sm uppercase font-semibold text-gray-600 tracking-wider mb-3">Education</h2>
                      <ul className="space-y-2">
                        {instructor.education.map((edu, index) => (
                          <li key={index} className="text-sm text-gray-700">
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="w-full border-t border-gray-100 mt-6 pt-6">
                    <Link
                      href={`/contact?subject=Question for ${instructor.name}`}
                      className="w-full py-2 px-4 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Contact Instructor
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
              >
                <div className="border-b border-gray-100">
                  <div className="flex">
                    <button
                      onClick={() => setActiveTab('about')}
                      className={`flex-1 py-4 px-6 text-center font-medium ${
                        activeTab === 'about' 
                          ? 'text-blue-600 border-b-2 border-blue-600' 
                          : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      About
                    </button>
                    <button
                      onClick={() => setActiveTab('courses')}
                      className={`flex-1 py-4 px-6 text-center font-medium ${
                        activeTab === 'courses' 
                          ? 'text-blue-600 border-b-2 border-blue-600' 
                          : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      Courses
                    </button>
                    {instructor.testimonials && instructor.testimonials.length > 0 && (
                      <button
                        onClick={() => setActiveTab('testimonials')}
                        className={`flex-1 py-4 px-6 text-center font-medium ${
                          activeTab === 'testimonials' 
                            ? 'text-blue-600 border-b-2 border-blue-600' 
                            : 'text-gray-600 hover:text-blue-600'
                        }`}
                      >
                        Testimonials
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="p-8">
                  {activeTab === 'about' && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">About {instructor.name}</h2>
                      <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                        {instructor.bio}
                      </p>
                      
                      {instructor.achievements && (
                        <div className="mb-8">
                          <h3 className="text-xl font-bold text-gray-900 mb-4">Achievements</h3>
                          <ul className="space-y-3">
                            {instructor.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-blue-600 mr-3">✓</span>
                                <span className="text-gray-700">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {activeTab === 'courses' && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Courses by {instructor.name}</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {instructor.courses.map((course, index) => (
                          <Link key={index} href={`/courses/${course.id}`}>
                            <div className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors">
                              <div className="flex items-center mb-4">
                                <span className="text-4xl mr-4">{course.image || '📚'}</span>
                                <h3 className="text-lg font-bold text-gray-900">{course.title}</h3>
                              </div>
                              {course.description && (
                                <p className="text-gray-700">{course.description}</p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      <div className="mt-8 text-center">
                        <Link
                          href="/courses"
                          className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors inline-flex items-center"
                        >
                          Browse All Courses
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'testimonials' && instructor.testimonials && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Testimonials</h2>
                      <div className="space-y-6">
                        {instructor.testimonials.map((testimonial, index) => (
                          <div key={index} className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-400">
                            <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                            <div className="flex justify-between items-center">
                              <p className="font-medium text-gray-900">- {testimonial.author}</p>
                              <span className="text-sm text-gray-500">Course: {testimonial.course}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-blue-50 rounded-xl shadow-lg overflow-hidden p-8"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">Instructor Feedback</h2>
                <div className="flex items-center mb-6">
                  <div className="flex items-center mr-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 font-bold text-gray-900">4.9/5</span>
                  </div>
                  <span className="text-gray-600">Based on {Math.floor(Math.random() * 100) + 50} student ratings</span>
                </div>
                <p className="text-gray-700 mb-6">
                  Students consistently praise {instructor.name}'s teaching style, depth of knowledge, and ability to explain complex concepts in an accessible way.
                </p>
                <div className="flex justify-between">
                  <Link
                    href={`/courses?instructor=${instructor.id}`}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Enroll in a Course
                  </Link>
                  <Link
                    href={`/events?speaker=${instructor.name}`}
                    className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Upcoming Events
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 