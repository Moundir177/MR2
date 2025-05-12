'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SEOMetadata from '../../components/SEOMetadata';

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
  }[];
  education?: string[];
  socialLinks?: {
    platform: 'linkedin' | 'twitter' | 'github' | 'website';
    url: string;
  }[];
  featured?: boolean;
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
      { id: 1, title: "Full Stack Web Development" },
      { id: 11, title: "JavaScript Fundamentals" }
    ],
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/in/sarahjohnson' },
      { platform: 'github', url: 'https://github.com/sarahjohnson' },
      { platform: 'website', url: 'https://sarahjohnson.dev' }
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
      { id: 1, title: "Full Stack Web Development" },
      { id: 12, title: "API Development with Node.js" }
    ],
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/in/michaelchen' },
      { platform: 'github', url: 'https://github.com/michaelchen' }
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
      { id: 2, title: "Data Science and Machine Learning" },
      { id: 7, title: "Artificial Intelligence Engineering" }
    ],
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/in/emmawatson' },
      { platform: 'twitter', url: 'https://twitter.com/emmawatson' }
    ],
    featured: true
  },
  {
    id: 4,
    name: "David Miller",
    role: "Data Analytics Instructor",
    bio: "David has implemented data science solutions across finance, healthcare, and retail sectors. He specializes in predictive analytics and time series forecasting. His classes focus on practical skills that help students solve real business problems with data.",
    avatar: "👨‍🔬",
    expertise: ["Data Analysis", "Business Intelligence", "SQL", "Python", "R", "Tableau", "Power BI"],
    education: [
      "MBA with Data Analytics concentration, Harvard Business School",
      "B.S. in Economics, University of Chicago"
    ],
    courses: [
      { id: 2, title: "Data Science and Machine Learning" },
      { id: 13, title: "Business Analytics" }
    ],
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/in/davidmiller' }
    ]
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "UX/UI Design Instructor",
    bio: "Lisa has 8+ years of experience designing user experiences for major brands and startups. Her design philosophy centers on creating intuitive, accessible interfaces that delight users while meeting business objectives. Her workshop-based teaching style emphasizes creativity and practical skill development.",
    avatar: "👩‍🎨",
    expertise: ["User Experience Design", "User Interface Design", "Figma", "Adobe XD", "Design Systems", "Design Thinking"],
    education: [
      "MFA in Interaction Design, Rhode Island School of Design",
      "B.A. in Graphic Design, Parsons School of Design"
    ],
    courses: [
      { id: 3, title: "UX/UI Design Fundamentals" }
    ],
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/in/lisapark' },
      { platform: 'website', url: 'https://lisapark.design' }
    ]
  },
  {
    id: 6,
    name: "Dr. Samuel Chen",
    role: "Learning Science Specialist",
    bio: "Dr. Chen specializes in learning and memory research at the University of California. His work focuses on translating cognitive science findings into practical applications for educators and students. He helps our curriculum designers create highly effective learning experiences based on scientific principles.",
    avatar: "👨‍🔬",
    expertise: ["Cognitive Psychology", "Learning Science", "Educational Technology", "Instructional Design"],
    education: [
      "Ph.D. in Cognitive Psychology, Stanford University",
      "M.A. in Educational Psychology, Columbia University",
      "B.A. in Psychology, Yale University"
    ],
    courses: [
      { id: 14, title: "Learning How to Learn" },
      { id: 15, title: "Memory Techniques for Students" }
    ],
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/in/samuelchen' },
      { platform: 'twitter', url: 'https://twitter.com/drsamchen' }
    ]
  },
  {
    id: 7,
    name: "Jessica Wong",
    role: "Programming Instructor",
    bio: "Jessica has been coding for over 10 years and has mentored dozens of entry-level developers. She specializes in making complex programming concepts accessible to beginners and helping intermediate developers level up their skills with industry best practices.",
    avatar: "👩‍💻",
    expertise: ["Python", "Java", "C++", "Data Structures", "Algorithms"],
    education: [
      "M.S. in Computer Science, UC San Diego",
      "B.S. in Computer Engineering, University of Michigan"
    ],
    courses: [
      { id: 11, title: "Python Programming for Beginners" },
      { id: 16, title: "Algorithms and Data Structures" }
    ],
    socialLinks: [
      { platform: 'github', url: 'https://github.com/jessicawong' }
    ]
  },
  {
    id: 8,
    name: "Alex Rodriguez",
    role: "DevOps & Cloud Computing Instructor",
    bio: "Alex specializes in DevOps practices, cloud infrastructure, and site reliability engineering. With experience at AWS and several tech startups, he brings practical, industry-relevant knowledge to the classroom, teaching students how to build and maintain modern cloud infrastructure.",
    avatar: "👨‍💻",
    expertise: ["Cloud Computing", "AWS", "Azure", "Kubernetes", "Docker", "CI/CD", "Infrastructure as Code"],
    education: [
      "M.S. in Cloud Computing, Georgia Tech",
      "B.S. in Information Technology, Purdue University"
    ],
    courses: [
      { id: 5, title: "Cloud Computing and DevOps" },
      { id: 17, title: "Kubernetes for Developers" }
    ],
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/in/alexrodriguez' },
      { platform: 'github', url: 'https://github.com/alexrodriguez' }
    ]
  }
];

const InstructorCard = ({ instructor }: { instructor: Instructor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
    >
      <div className="p-6 flex items-center justify-center">
        <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-6xl">{instructor.avatar}</span>
        </div>
      </div>
      
      <div className="px-6 pb-6 flex-grow flex flex-col">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">{instructor.name}</h3>
          <p className="text-blue-600">{instructor.role}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Areas of Expertise:</h4>
          <div className="flex flex-wrap gap-2">
            {instructor.expertise.slice(0, 5).map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                {skill}
              </span>
            ))}
            {instructor.expertise.length > 5 && (
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                +{instructor.expertise.length - 5} more
              </span>
            )}
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Courses:</h4>
          <ul className="space-y-1">
            {instructor.courses.map((course, index) => (
              <li key={index}>
                <Link href={`/courses/${course.id}`} className="text-blue-600 hover:text-blue-800 text-sm">
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto pt-4 flex justify-between items-center">
          <div className="flex space-x-2">
            {instructor.socialLinks?.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                {link.platform === 'linkedin' && 'in'}
                {link.platform === 'twitter' && 't'}
                {link.platform === 'github' && 'gh'}
                {link.platform === 'website' && 'www'}
              </a>
            ))}
          </div>
          
          <Link
            href={`/instructors/${instructor.id}`}
            className="px-4 py-2 text-blue-600 font-medium text-sm hover:text-blue-800"
          >
            View Profile
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function InstructorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState<string | null>(null);
  const [filteredInstructors, setFilteredInstructors] = useState<Instructor[]>(instructorsData);
  
  // Get all unique expertise areas
  const allExpertise = Array.from(
    new Set(instructorsData.flatMap(instructor => instructor.expertise))
  ).sort();
  
  // Filter instructors whenever filter criteria change
  useEffect(() => {
    let filtered = [...instructorsData];
    
    // Apply expertise filter
    if (selectedExpertise) {
      filtered = filtered.filter(instructor => 
        instructor.expertise.includes(selectedExpertise)
      );
    }
    
    // Apply search filter
    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase();
      filtered = filtered.filter(instructor => 
        instructor.name.toLowerCase().includes(query) || 
        instructor.role.toLowerCase().includes(query) ||
        instructor.bio.toLowerCase().includes(query) ||
        instructor.expertise.some(skill => skill.toLowerCase().includes(query)) ||
        instructor.courses.some(course => course.title.toLowerCase().includes(query))
      );
    }
    
    setFilteredInstructors(filtered);
  }, [selectedExpertise, searchTerm]);
  
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedExpertise(null);
  };

  return (
    <>
      <SEOMetadata 
        title="Our Instructors"
        description="Meet our world-class instructors with expertise in programming, data science, design, and more."
      />
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Instructors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry experts and academics with years of real-world experience
            </p>
          </motion.div>
          
          {/* Featured Instructors */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Instructors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {instructorsData
                .filter(instructor => instructor.featured)
                .map(instructor => (
                  <InstructorCard key={instructor.id} instructor={instructor} />
                ))
              }
            </div>
          </div>
          
          {/* Filters */}
          <div className="mb-10 bg-white rounded-xl shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Search input */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by name, expertise, or course..."
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Expertise filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Expertise</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={selectedExpertise || ''}
                  onChange={(e) => setSelectedExpertise(e.target.value || null)}
                >
                  <option value="">All Areas of Expertise</option>
                  {allExpertise.map((expertise) => (
                    <option key={expertise} value={expertise}>
                      {expertise}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={resetFilters}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>
          
          {/* All Instructors */}
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Instructors</h2>
          {filteredInstructors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredInstructors.map(instructor => (
                <InstructorCard key={instructor.id} instructor={instructor} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-md">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Instructors Found</h3>
              <p className="text-gray-600 mb-6">We couldn't find any instructors matching your criteria.</p>
              <button 
                onClick={resetFilters}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 