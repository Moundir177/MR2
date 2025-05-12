'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  student: string;
  course: string;
  description: string;
  technologies: string[];
  image: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    student: "Maria Rodriguez",
    course: "Full Stack Web Development",
    description: "A complete e-commerce solution with product catalog, shopping cart, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "🛒",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Financial Dashboard",
    student: "Ahmed Hassan",
    course: "Data Analytics Bootcamp",
    description: "Interactive financial dashboard with real-time data visualization and predictive analytics.",
    technologies: ["Python", "Tableau", "SQL"],
    image: "📊",
    category: "Data Science"
  },
  {
    id: 3,
    title: "Mobile Fitness App",
    student: "Jennifer Lee",
    course: "Mobile App Development",
    description: "Fitness tracking application with workout plans, nutrition guidance, and progress tracking.",
    technologies: ["React Native", "Firebase", "Redux"],
    image: "💪",
    category: "Mobile Development"
  },
  {
    id: 4,
    title: "AI Image Generator",
    student: "Carlos Mendez",
    course: "Artificial Intelligence Fundamentals",
    description: "An AI-powered image generation tool that creates artwork based on text descriptions.",
    technologies: ["Python", "TensorFlow", "OpenAI API"],
    image: "🎨",
    category: "Artificial Intelligence"
  },
  {
    id: 5,
    title: "Smart Home Dashboard",
    student: "Priya Sharma",
    course: "IoT Development",
    description: "Control panel for smart home devices with automation features and energy usage tracking.",
    technologies: ["JavaScript", "MQTT", "Raspberry Pi"],
    image: "🏠",
    category: "IoT"
  },
  {
    id: 6,
    title: "Inventory Management System",
    student: "David Wilson",
    course: "Enterprise Software Development",
    description: "Comprehensive inventory tracking system with barcode scanning and reporting features.",
    technologies: ["Java", "Spring Boot", "MySQL"],
    image: "📦",
    category: "Enterprise"
  },
  {
    id: 7,
    title: "Virtual Reality Tour App",
    student: "Kim Minji",
    course: "VR/AR Development",
    description: "Immersive virtual reality application for exploring tourist destinations and historical sites.",
    technologies: ["Unity", "C#", "Oculus SDK"],
    image: "🌍",
    category: "VR/AR"
  },
  {
    id: 8,
    title: "Cryptocurrency Tracker",
    student: "Thomas Wright",
    course: "Blockchain Development",
    description: "Real-time cryptocurrency tracking application with price alerts and portfolio management.",
    technologies: ["React", "Redux", "Web3.js"],
    image: "💰",
    category: "Blockchain"
  },
  {
    id: 9,
    title: "Language Learning Platform",
    student: "Sophie Chen",
    course: "Educational Technology",
    description: "Interactive language learning platform with speech recognition and personalized learning paths.",
    technologies: ["Vue.js", "Express", "MongoDB"],
    image: "🗣️",
    category: "EdTech"
  },
  {
    id: 10,
    title: "Healthcare Management System",
    student: "James Thompson",
    course: "Health Informatics",
    description: "Comprehensive healthcare management system for patient records and appointment scheduling.",
    technologies: ["Angular", "Node.js", "PostgreSQL"],
    image: "🏥",
    category: "Healthcare"
  },
  {
    id: 11,
    title: "Social Media Analytics Tool",
    student: "Olivia Parker",
    course: "Digital Marketing Analytics",
    description: "Social media performance tracking tool with engagement metrics and competitive analysis.",
    technologies: ["Python", "Django", "D3.js"],
    image: "📱",
    category: "Marketing"
  },
  {
    id: 12,
    title: "Sustainable Energy Dashboard",
    student: "Michael Green",
    course: "Environmental Data Science",
    description: "Dashboard for monitoring renewable energy sources with impact analysis and optimization suggestions.",
    technologies: ["React", "Python", "TensorFlow"],
    image: "♻️",
    category: "Sustainability"
  }
];

const categories = Array.from(new Set(projects.map(project => project.category)));

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <span className="text-6xl">{project.image}</span>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
            {project.category}
          </span>
        </div>
        <p className="text-sm text-blue-600 mb-2">By {project.student}</p>
        <p className="text-xs text-gray-500 mb-3">{project.course}</p>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, index: number) => (
            <span 
              key={index}
              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link 
          href={`/projects/${project.id}`}
          className="text-blue-600 font-medium hover:text-blue-800 text-sm flex items-center"
        >
          View Project Details
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === '' || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Student Projects Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore the incredible projects created by our talented students across various domains
          </p>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Search projects by title, technology, or student name..."
                  className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="w-full md:w-48">
                <select
                  className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-500">No projects match your search criteria.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('');}}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 