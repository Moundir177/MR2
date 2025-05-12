'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useAuth } from '../../../components/AuthContext';
import { useLanguage } from '../../../components/LanguageContext';

interface Instructor {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  expertise: string[];
}

interface Module {
  id: number;
  title: string;
  description: string;
  lessons: {
    id: number;
    title: string;
    duration: string;
    type: 'video' | 'quiz' | 'reading' | 'assignment';
  }[];
}

interface Course {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: number; // in weeks
  instructors: string[];
  instructorDetails?: Instructor[];
  modules?: Module[];
  prerequisites?: string[];
  objectives?: string[];
  rating: number;
  reviewsCount?: number;
  studentsCount: number;
  price: number;
  image: string;
  featured?: boolean;
}

// Sample courses data - this would typically come from an API
const coursesData: Course[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "Master front-end and back-end technologies to build complete web applications.",
    longDescription: "This comprehensive course covers all aspects of full stack web development, from front-end technologies like HTML, CSS, and JavaScript frameworks to back-end systems including Node.js, databases, and API development. You'll learn modern development practices, deployment, and how to build complete, responsive web applications from scratch.",
    category: "Web Development",
    level: "Intermediate",
    duration: 12,
    instructors: ["Sarah Johnson", "Michael Chen"],
    instructorDetails: [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "Senior Web Developer",
        bio: "Sarah has over 10 years of experience in web development and has worked with companies like Google and Amazon. She specializes in front-end technologies and user experience design.",
        avatar: "👩‍💻",
        expertise: ["React", "Vue.js", "UI/UX Design"]
      },
      {
        id: 2,
        name: "Michael Chen",
        role: "Back-end Engineer",
        bio: "Michael is a back-end specialist with extensive experience in building scalable APIs and database systems. He previously worked at Microsoft and several successful startups.",
        avatar: "👨‍💻",
        expertise: ["Node.js", "MongoDB", "AWS", "System Architecture"]
      }
    ],
    modules: [
      {
        id: 1,
        title: "Foundations of Web Development",
        description: "Learn the core technologies that power the web.",
        lessons: [
          { id: 1, title: "HTML Fundamentals", duration: "45 min", type: "video" },
          { id: 2, title: "CSS Styling and Layout", duration: "1 hr", type: "video" },
          { id: 3, title: "JavaScript Basics", duration: "1.5 hrs", type: "video" },
          { id: 4, title: "Building Your First Web Page", duration: "2 hrs", type: "assignment" }
        ]
      },
      {
        id: 2,
        title: "Front-end Frameworks",
        description: "Master modern JavaScript frameworks for building interactive UIs.",
        lessons: [
          { id: 5, title: "Introduction to React", duration: "1 hr", type: "video" },
          { id: 6, title: "State Management", duration: "45 min", type: "video" },
          { id: 7, title: "Building Components", duration: "1.5 hrs", type: "video" },
          { id: 8, title: "React Project: Dynamic UI", duration: "3 hrs", type: "assignment" }
        ]
      },
      {
        id: 3,
        title: "Back-end Development",
        description: "Learn server-side programming and database management.",
        lessons: [
          { id: 9, title: "Node.js Fundamentals", duration: "1 hr", type: "video" },
          { id: 10, title: "Express Framework", duration: "45 min", type: "video" },
          { id: 11, title: "Database Integration with MongoDB", duration: "1.5 hrs", type: "video" },
          { id: 12, title: "Building RESTful APIs", duration: "1 hr", type: "video" },
          { id: 13, title: "Back-end Project", duration: "4 hrs", type: "assignment" }
        ]
      }
    ],
    prerequisites: [
      "Basic understanding of HTML and CSS",
      "Familiarity with programming concepts",
      "A computer with internet access"
    ],
    objectives: [
      "Build complete web applications from scratch",
      "Master front-end frameworks like React",
      "Develop server-side applications with Node.js",
      "Design and implement database solutions",
      "Deploy applications to production environments"
    ],
    rating: 4.8,
    reviewsCount: 342,
    studentsCount: 1247,
    price: 799,
    image: "🖥️",
    featured: true
  },
  {
    id: 2,
    title: "Data Science and Machine Learning",
    description: "Learn to analyze data and build predictive models with Python and popular ML libraries.",
    longDescription: "This intensive course provides a comprehensive introduction to data science and machine learning. You'll learn to collect, clean, and analyze data, as well as build and deploy machine learning models. From statistical analysis to deep learning, this course covers the essential skills needed for a career in data science.",
    category: "Data Science",
    level: "Advanced",
    duration: 10,
    instructors: ["David Miller", "Emma Watson"],
    instructorDetails: [
      {
        id: 3,
        name: "David Miller",
        role: "Data Scientist",
        bio: "David is a data scientist with a Ph.D. in Computer Science. He has worked on machine learning projects at Facebook and Netflix, specializing in recommendation systems.",
        avatar: "👨‍🔬",
        expertise: ["Machine Learning", "Python", "Data Analysis", "Deep Learning"]
      },
      {
        id: 4,
        name: "Emma Watson",
        role: "AI Researcher",
        bio: "Emma has a background in mathematics and computer science. She has published several papers on AI and works as a consultant for major tech companies.",
        avatar: "👩‍🔬",
        expertise: ["Neural Networks", "TensorFlow", "Computer Vision"]
      }
    ],
    modules: [
      {
        id: 1,
        title: "Python for Data Science",
        description: "Master Python programming for data analysis.",
        lessons: [
          { id: 1, title: "Python Basics for Data Science", duration: "1 hr", type: "video" },
          { id: 2, title: "Working with NumPy and Pandas", duration: "1.5 hrs", type: "video" },
          { id: 3, title: "Data Visualization with Matplotlib", duration: "1 hr", type: "video" },
          { id: 4, title: "Data Analysis Project", duration: "3 hrs", type: "assignment" }
        ]
      },
      {
        id: 2,
        title: "Machine Learning Fundamentals",
        description: "Learn the core concepts and algorithms of machine learning.",
        lessons: [
          { id: 5, title: "Introduction to Machine Learning", duration: "1 hr", type: "video" },
          { id: 6, title: "Supervised Learning Algorithms", duration: "2 hrs", type: "video" },
          { id: 7, title: "Unsupervised Learning", duration: "1.5 hrs", type: "video" },
          { id: 8, title: "Model Evaluation and Improvement", duration: "1 hr", type: "video" },
          { id: 9, title: "ML Project: Predictive Model", duration: "4 hrs", type: "assignment" }
        ]
      }
    ],
    prerequisites: [
      "Basic programming knowledge",
      "Understanding of algebra and statistics",
      "A computer with Python installed"
    ],
    objectives: [
      "Master Python for data analysis",
      "Build and evaluate machine learning models",
      "Apply statistical methods to real-world data",
      "Create data visualizations to communicate insights",
      "Deploy machine learning models to production"
    ],
    rating: 4.9,
    reviewsCount: 289,
    studentsCount: 985,
    price: 899,
    image: "📊",
    featured: true
  }
];

export default function CourseDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useAuth();
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'instructors'>('overview');
  const [expandedModules, setExpandedModules] = useState<number[]>([]);
  
  // Check if course is in wishlist
  const inWishlist = course ? isInWishlist(course.id) : false;
  
  const handleWishlistToggle = () => {
    if (!course) return;
    
    if (inWishlist) {
      removeFromWishlist(course.id);
    } else {
      addToWishlist(course.id);
    }
  };
  
  // Multilingual content for wishlist
  const wishlistText = {
    addToWishlist: {
      en: "Add to Wishlist",
      fr: "Ajouter aux favoris",
      ar: "أضف إلى قائمة الرغبات",
    },
    removeFromWishlist: {
      en: "Remove from Wishlist",
      fr: "Retirer des favoris",
      ar: "إزالة من قائمة الرغبات",
    },
    enrollNow: {
      en: "Enroll Now",
      fr: "S'inscrire maintenant",
      ar: "سجل الآن",
    },
    backToCourses: {
      en: "Back to Courses",
      fr: "Retour aux cours",
      ar: "العودة إلى الدورات",
    }
  };

  useEffect(() => {
    // Simulate API fetch
    const fetchCourse = () => {
      setTimeout(() => {
        const foundCourse = coursesData.find(c => c.id === Number(id));
        setCourse(foundCourse || null);
        setIsLoading(false);
      }, 500);
    };

    fetchCourse();
  }, [id]);

  const toggleModule = (moduleId: number) => {
    setExpandedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h1>
        <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or has been removed.</p>
        <Link
          href="/courses"
          className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          {wishlistText.backToCourses[language as keyof typeof wishlistText.backToCourses]}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <Link
          href="/courses"
          className="inline-flex items-center text-primary-600 font-medium mb-8 hover:text-primary-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          {wishlistText.backToCourses[language as keyof typeof wishlistText.backToCourses]}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
            >
              <div className="p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
                <p className="text-xl text-gray-600 mb-6">{course.description}</p>
                
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center">
                    <div className="text-yellow-500 mr-2">
                      {'★'.repeat(Math.floor(course.rating))}
                      {course.rating % 1 !== 0 && '☆'}
                      {'☆'.repeat(5 - Math.ceil(course.rating))}
                    </div>
                    <span className="text-gray-600">
                      {course.rating.toFixed(1)} ({course.reviewsCount || 0} reviews)
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="text-gray-600">{course.studentsCount} students enrolled</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">{course.duration} weeks</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-gray-600">{course.level}</span>
                  </div>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg mb-6">
                  <div className="flex items-center text-blue-800 font-medium mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Last updated: March 2023
                  </div>
                  <p className="text-blue-600">This course is regularly updated with new content and improved materials based on student feedback and industry changes.</p>
                </div>
              </div>
              
              <div className="border-t border-gray-100">
                <div className="flex border-b">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`flex-1 py-4 px-6 text-center font-medium ${
                      activeTab === 'overview' 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('curriculum')}
                    className={`flex-1 py-4 px-6 text-center font-medium ${
                      activeTab === 'curriculum' 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    Curriculum
                  </button>
                  <button
                    onClick={() => setActiveTab('instructors')}
                    className={`flex-1 py-4 px-6 text-center font-medium ${
                      activeTab === 'instructors' 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    Instructors
                  </button>
                </div>
                
                <div className="p-8">
                  {activeTab === 'overview' && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Course</h2>
                      <p className="text-gray-700 mb-8 leading-relaxed">
                        {course.longDescription || course.description}
                      </p>
                      
                      {course.objectives && (
                        <div className="mb-8">
                          <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {course.objectives.map((objective, index) => (
                              <li key={index} className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">{objective}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {course.prerequisites && (
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4">Prerequisites</h3>
                          <ul className="space-y-2">
                            {course.prerequisites.map((prerequisite, index) => (
                              <li key={index} className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-gray-700">{prerequisite}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {activeTab === 'curriculum' && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Content</h2>
                      <div className="text-gray-600 mb-6">
                        {course.modules?.length || 0} modules • {
                          course.modules?.reduce((total, module) => total + module.lessons.length, 0) || 0
                        } lessons • {course.duration} weeks of content
                      </div>
                      
                      {course.modules ? (
                        <div className="space-y-4">
                          {course.modules.map((module) => (
                            <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
                              <button
                                onClick={() => toggleModule(module.id)}
                                className="w-full bg-gray-50 px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition-colors"
                              >
                                <div className="flex items-center">
                                  <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className={`h-5 w-5 mr-2 text-gray-500 transition-transform ${
                                      expandedModules.includes(module.id) ? 'transform rotate-90' : ''
                                    }`} 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                  <div className="text-left">
                                    <h3 className="font-bold text-gray-900">{module.title}</h3>
                                    <p className="text-gray-600 text-sm">{module.description}</p>
                                  </div>
                                </div>
                                <span className="text-gray-500 text-sm">{module.lessons.length} lessons</span>
                              </button>
                              
                              {expandedModules.includes(module.id) && (
                                <div className="border-t border-gray-200">
                                  {module.lessons.map((lesson) => (
                                    <div key={lesson.id} className="px-6 py-4 flex justify-between items-center border-b border-gray-100 last:border-b-0">
                                      <div className="flex items-center">
                                        {lesson.type === 'video' && (
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                          </svg>
                                        )}
                                        {lesson.type === 'quiz' && (
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                          </svg>
                                        )}
                                        {lesson.type === 'reading' && (
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                          </svg>
                                        )}
                                        {lesson.type === 'assignment' && (
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                          </svg>
                                        )}
                                        <span className="text-gray-800">{lesson.title}</span>
                                      </div>
                                      <span className="text-gray-500 text-sm">{lesson.duration}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600">Curriculum details coming soon.</p>
                      )}
                    </div>
                  )}
                  
                  {activeTab === 'instructors' && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Instructors</h2>
                      
                      {course.instructorDetails ? (
                        <div className="space-y-8">
                          {course.instructorDetails.map((instructor) => (
                            <div key={instructor.id} className="flex flex-col md:flex-row gap-6">
                              <div className="w-32 h-32 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center mx-auto md:mx-0">
                                <span className="text-6xl">{instructor.avatar}</span>
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
                                <p className="text-blue-600 mb-3">{instructor.role}</p>
                                <p className="text-gray-700 mb-4">
                                  {instructor.bio}
                                </p>
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Areas of Expertise:</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {instructor.expertise.map((skill, index) => (
                                      <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                                        {skill}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {course.instructors.map((instructor, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                <span className="text-2xl">{instructor.charAt(0)}</span>
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-900">{instructor}</h3>
                                <p className="text-gray-600">Course Instructor</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-6"
            >
              <div className="p-6">
                <div className="aspect-w-16 aspect-h-9 bg-primary-100 rounded-lg flex items-center justify-center mb-6 relative overflow-hidden">
                  <span className="text-8xl absolute transform scale-150 opacity-20">{course.image}</span>
                  <span className="text-7xl relative z-10">{course.image}</span>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold text-gray-900">${course.price}</span>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-bold">{course.rating.toFixed(1)}</span>
                  </div>
                </div>
                
                <Link 
                  href={`/enroll?course=${course.id}`}
                  className="w-full block text-center py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors mb-4"
                >
                  {wishlistText.enrollNow[language as keyof typeof wishlistText.enrollNow]}
                </Link>
                
                <button 
                  onClick={handleWishlistToggle}
                  className={`w-full py-3 px-4 flex items-center justify-center rounded-lg border transition-colors ${
                    inWishlist 
                      ? 'border-red-500 text-red-600 bg-red-50 hover:bg-red-100' 
                      : 'border-primary-500 text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 mr-2 ${inWishlist ? 'text-red-500 fill-current' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                    />
                  </svg>
                  {inWishlist 
                    ? wishlistText.removeFromWishlist[language as keyof typeof wishlistText.removeFromWishlist]
                    : wishlistText.addToWishlist[language as keyof typeof wishlistText.addToWishlist]
                  }
                </button>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Full lifetime access</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <span>Cloud-based course materials</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <span>Community access</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">Not sure? Try a free preview</p>
                    <button className="text-blue-600 font-medium hover:text-blue-800">
                      Watch Sample Lesson
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 