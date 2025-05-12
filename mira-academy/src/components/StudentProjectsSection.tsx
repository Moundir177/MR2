'use client';

import { motion } from '../components/motion';
import Link from 'next/link';
import { useState } from 'react';

interface Technology {
  name: string;
}

interface Project {
  id: number;
  title: string;
  student: string;
  course: string;
  description: string;
  technologies: string[];
  image: string;
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
  },
  {
    id: 2,
    title: "Financial Dashboard",
    student: "Ahmed Hassan",
    course: "Data Analytics Bootcamp",
    description: "Interactive financial dashboard with real-time data visualization and predictive analytics.",
    technologies: ["Python", "Tableau", "SQL"],
    image: "📊",
  },
  {
    id: 3,
    title: "Mobile Fitness App",
    student: "Jennifer Lee",
    course: "Mobile App Development",
    description: "Fitness tracking application with workout plans, nutrition guidance, and progress tracking.",
    technologies: ["React Native", "Firebase", "Redux"],
    image: "💪",
  },
  {
    id: 4,
    title: "AI Image Generator",
    student: "Carlos Mendez",
    course: "Artificial Intelligence Fundamentals",
    description: "An AI-powered image generation tool that creates artwork based on text descriptions.",
    technologies: ["Python", "TensorFlow", "OpenAI API"],
    image: "🎨",
  },
  {
    id: 5,
    title: "Smart Home Dashboard",
    student: "Priya Sharma",
    course: "IoT Development",
    description: "Control panel for smart home devices with automation features and energy usage tracking.",
    technologies: ["JavaScript", "MQTT", "Raspberry Pi"],
    image: "🏠",
  },
  {
    id: 6,
    title: "Inventory Management System",
    student: "David Wilson",
    course: "Enterprise Software Development",
    description: "Comprehensive inventory tracking system with barcode scanning and reporting features.",
    technologies: ["Java", "Spring Boot", "MySQL"],
    image: "📦",
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="h-48 bg-gray-100 flex items-center justify-center transition-all duration-300"
        style={{ 
          backgroundColor: isHovered ? '#f0f7ff' : '#f9fafb',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          transformOrigin: 'center',
        }}
      >
        <span className="text-6xl">{project.image}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
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

const StudentProjectsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of the amazing projects our students have created after completing our courses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            href="/projects"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View All Student Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentProjectsSection; 