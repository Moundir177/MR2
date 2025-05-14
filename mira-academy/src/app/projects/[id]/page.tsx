'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Generate static paths for all projects
export async function generateStaticParams() {
  // In a real application, this would fetch from an API
  return [
    { id: '1' },
    { id: '2' }
  ];
}

interface Project {
  id: number;
  title: string;
  student: string;
  course: string;
  description: string;
  technologies: string[];
  image: string;
  category: string;
  fullDescription?: string;
  projectImages?: string[];
  timeline?: { date: string; milestone: string }[];
  studentBio?: string;
}

// This would typically come from an API or database
const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    student: "Maria Rodriguez",
    course: "Full Stack Web Development",
    description: "A complete e-commerce solution with product catalog, shopping cart, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe API"],
    image: "🛒",
    category: "Web Development",
    fullDescription: "This comprehensive e-commerce platform was developed to provide a seamless shopping experience for both customers and store administrators. It features a responsive design, intuitive product browsing, secure checkout process, and a robust admin dashboard for inventory and order management. The application uses React for the frontend with Redux for state management, Node.js and Express for the backend API, and MongoDB for data storage. Payment processing is handled securely through the Stripe API, and the platform includes features like user authentication, product reviews, wish lists, and detailed order tracking.",
    projectImages: ["🏪", "🛍️", "💻", "📱", "💳"],
    timeline: [
      { date: "Week 1-2", milestone: "Project planning and wireframing" },
      { date: "Week 3-5", milestone: "Backend API development" },
      { date: "Week 6-8", milestone: "Frontend UI implementation" },
      { date: "Week 9-10", milestone: "Payment integration and testing" },
      { date: "Week 11-12", milestone: "Final testing and deployment" }
    ],
    studentBio: "Maria Rodriguez is a passionate full-stack developer with a background in computer science. After completing her Bachelor's degree, she joined the Full Stack Web Development course to enhance her practical skills and build real-world applications. She is particularly interested in e-commerce solutions and creating intuitive user experiences."
  },
  {
    id: 2,
    title: "Financial Dashboard",
    student: "Ahmed Hassan",
    course: "Data Analytics Bootcamp",
    description: "Interactive financial dashboard with real-time data visualization and predictive analytics.",
    technologies: ["Python", "Tableau", "SQL", "Pandas", "Scikit-learn", "Flask"],
    image: "📊",
    category: "Data Science",
    fullDescription: "This financial dashboard project provides intuitive visualization of complex financial data to support decision-making processes. The dashboard includes interactive charts, trend analysis, and predictive models that forecast financial performance based on historical data. It allows users to filter data by various parameters such as time periods, geographic regions, and business segments. The backend is powered by Python with Flask for API endpoints, while data processing utilizes Pandas and Scikit-learn for analysis and prediction. The frontend visualizations are created using Tableau, providing rich, interactive charts and graphs that make complex financial data easily understandable.",
    projectImages: ["📈", "💹", "📉", "📋", "🖥️"],
    timeline: [
      { date: "Week 1-3", milestone: "Data collection and database design" },
      { date: "Week 4-5", milestone: "Data cleaning and preparation" },
      { date: "Week 6-8", milestone: "Analytics models development" },
      { date: "Week 9-10", milestone: "Dashboard design and implementation" },
      { date: "Week 11-12", milestone: "Testing and refinement" }
    ],
    studentBio: "Ahmed Hassan has a background in finance and has always been interested in how data can drive better financial decisions. He joined the Data Analytics Bootcamp to enhance his technical skills and learn modern approaches to financial analysis and visualization. His goal is to bridge the gap between finance professionals and data science capabilities."
  }
];

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchProject = () => {
      setTimeout(() => {
        const foundProject = projects.find(p => p.id === Number(id));
        setProject(foundProject || null);
        setIsLoading(false);
      }, 500);
    };

    fetchProject();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <Link
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <Link
          href="/projects"
          className="inline-flex items-center text-blue-600 font-medium mb-8 hover:text-blue-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Projects
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-gray-900"
              >
                {project.title}
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-2 md:mt-0 px-4 py-2 bg-blue-100 text-blue-800 text-sm rounded-full"
              >
                {project.category}
              </motion.span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 text-gray-600"
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>By <strong className="text-gray-900">{project.student}</strong></span>
              </div>
              <div className="hidden md:block h-5 w-px bg-gray-300"></div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Course: <strong className="text-gray-900">{project.course}</strong></span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex overflow-x-auto py-8 px-8 gap-6 bg-gray-50"
          >
            {project.projectImages?.map((image, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-64 h-48 bg-white rounded-lg shadow-md flex items-center justify-center"
              >
                <span className="text-7xl">{image}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {project.timeline && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Timeline</h2>
                  <div className="space-y-6">
                    {project.timeline.map((item, index) => (
                      <div key={index} className="relative pl-8">
                        <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-blue-500"></div>
                        {index < project.timeline!.length - 1 && (
                          <div className="absolute left-2 top-5 h-full w-0.5 bg-blue-200"></div>
                        )}
                        <div className="mb-1 font-bold text-gray-900">{item.date}</div>
                        <div className="text-gray-700">{item.milestone}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">About the Student</h2>
                <div className="flex items-center justify-center mb-6">
                  <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
                    {project.student.charAt(0)}
                  </div>
                </div>
                <h3 className="text-center text-lg font-bold text-gray-900 mb-2">{project.student}</h3>
                <p className="text-center text-blue-600 mb-4">{project.course} Student</p>
                <p className="text-gray-700 leading-relaxed">
                  {project.studentBio || "A dedicated student passionate about applying their skills to create innovative solutions."}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Interested in Similar Projects?</h2>
                <p className="text-gray-700 mb-6">
                  Explore our courses and start building your own portfolio of impressive projects.
                </p>
                <Link
                  href="/courses"
                  className="block w-full py-3 px-4 bg-blue-600 text-white text-center font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Browse Courses
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 