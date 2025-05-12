'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SEOMetadata from '../../components/SEOMetadata';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Amina Patel",
      role: "Founder & CEO",
      bio: "Dr. Patel founded Mira Academy with a vision to make quality education accessible to everyone. With a Ph.D. in Education from Harvard and 15+ years of experience in EdTech, she leads our mission to transform online learning.",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Academic Officer",
      bio: "Michael oversees our curriculum development and academic standards. His background in instructional design and experience at leading universities ensures our courses meet the highest educational standards.",
      avatar: "👨‍🏫"
    },
    {
      name: "Sarah Kim",
      role: "Head of Technology",
      bio: "Sarah leads our engineering team, developing the platform that powers Mira Academy. Her expertise in educational technology creates an engaging and effective learning experience for all our students.",
      avatar: "👩‍💻"
    },
    {
      name: "David Nwosu",
      role: "Director of Student Success",
      bio: "David and his team support students throughout their learning journey. With a background in education psychology, he works to ensure every student has the resources they need to succeed.",
      avatar: "👨‍🎓"
    }
  ];

  const milestones = [
    {
      year: 2018,
      title: "Foundation",
      description: "Mira Academy was founded with a mission to provide accessible, high-quality education to learners worldwide."
    },
    {
      year: 2019,
      title: "First Courses",
      description: "Launched our first set of programming and data science courses with 500 enrolled students."
    },
    {
      year: 2020,
      title: "Global Expansion",
      description: "Expanded our reach to 50+ countries and introduced multilingual course support."
    },
    {
      year: 2021,
      title: "Industry Partnerships",
      description: "Established partnerships with leading tech companies to develop industry-relevant curriculum."
    },
    {
      year: 2022,
      title: "Scholarship Program",
      description: "Launched a scholarship program providing free education to 1,000+ students from underrepresented backgrounds."
    },
    {
      year: 2023,
      title: "Accreditation",
      description: "Received official accreditation for our professional certification programs."
    }
  ];

  return (
    <>
      <SEOMetadata 
        title="About Mira Academy"
        description="Learn about Mira Academy's mission, values, team, and journey to transform online education."
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Mira Academy</h1>
              <p className="text-xl md:text-2xl">
                Transforming lives through accessible, high-quality education
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Mission Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                At Mira Academy, our mission is to empower individuals worldwide with the knowledge and skills 
                they need to succeed in the digital age. We believe education should be accessible, engaging, and 
                relevant to real-world challenges.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We're committed to breaking down barriers to education by providing affordable, flexible learning 
                options that accommodate diverse backgrounds, learning styles, and career goals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through innovative teaching methods, cutting-edge technology, and a supportive learning community, 
                we aim to inspire lifelong learning and help our students realize their full potential.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Excellence</h3>
                    <p className="text-gray-700">
                      We are committed to the highest standards of educational quality and continuously strive to improve our courses and teaching methods.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Inclusivity</h3>
                    <p className="text-gray-700">
                      We welcome learners from all backgrounds and work to create an inclusive environment where everyone can thrive.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Innovation</h3>
                    <p className="text-gray-700">
                      We embrace new technologies and teaching methods to create engaging, effective learning experiences.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Community</h3>
                    <p className="text-gray-700">
                      We foster a supportive community where students and instructors collaborate, share ideas, and grow together.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the passionate educators and innovators behind Mira Academy
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-gray-50 rounded-xl shadow-md overflow-hidden"
                >
                  <div className="p-6 bg-blue-50 flex items-center justify-center">
                    <span className="text-7xl">{member.avatar}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 mb-4">{member.role}</p>
                    <p className="text-gray-700">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link
                href="/instructors"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Meet Our Instructors
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Our Journey Timeline */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The story of Mira Academy's growth and impact
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative pb-12 last:pb-0"
              >
                <div className={`flex items-start ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  {/* Timeline line */}
                  <div className="hidden md:block w-1/2 md:pr-8 md:pl-8 relative">
                    <div className="h-full w-0.5 bg-blue-200 absolute right-0 left-0 ml-auto mr-auto"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white rounded-xl shadow-md p-6 md:w-1/2 z-10">
                    <div className="bg-blue-600 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-700">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                {index < milestones.length - 1 && (
                  <div className="hidden md:block absolute w-4 h-4 bg-blue-600 rounded-full left-1/2 transform -translate-x-1/2 bottom-0"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-xl max-w-3xl mx-auto">
                The numbers behind our mission to transform education
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white bg-opacity-10 rounded-xl p-6 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">50,000+</div>
                <p className="text-lg">Students Worldwide</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white bg-opacity-10 rounded-xl p-6 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">100+</div>
                <p className="text-lg">Expert Instructors</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white bg-opacity-10 rounded-xl p-6 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">200+</div>
                <p className="text-lg">Courses Available</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white bg-opacity-10 rounded-xl p-6 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">92%</div>
                <p className="text-lg">Satisfaction Rate</p>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-5xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Learning Community</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Whether you're looking to advance your career, learn new skills, or pursue your passion, 
              Mira Academy has a course for you. Start your learning journey today.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                href="/courses"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Explore Our Courses
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
} 