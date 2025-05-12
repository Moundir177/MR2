'use client';

import { useState, useEffect } from 'react';
import { motion } from '../../components/motion';
import Link from 'next/link';
import SEOMetadata from '../../components/SEOMetadata';

interface Author {
  id: number;
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  tags: string[];
  publishedDate: string;
  author: Author;
  readTime: number;
}

// Sample blog post data (in a real app, this would come from a CMS or API)
const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'the-future-of-online-education',
    title: 'The Future of Online Education in a Post-Pandemic World',
    excerpt: 'How online learning is evolving to meet the demands of students and educators after the global shift to remote education.',
    coverImage: "🌐", // Placeholder for an actual image URL
    category: "Education Technology",
    tags: ["Online Learning", "EdTech", "Future of Education", "E-Learning Trends"],
    publishedDate: "2023-03-15",
    author: {
      id: 1,
      name: "Dr. Maya Phillips",
      role: "Education Technology Specialist",
      avatar: "👩‍🏫", // Placeholder for an actual image URL
      bio: "Dr. Phillips has over 15 years of experience in educational technology research and implementation."
    },
    readTime: 8
  },
  {
    id: 2,
    slug: 'mastering-data-science-fundamentals',
    title: 'Mastering Data Science Fundamentals: A Beginner\'s Guide',
    excerpt: 'An introduction to the key concepts and skills needed to start a successful journey in data science.',
    coverImage: "📊", // Placeholder for an actual image URL
    category: "Data Science",
    tags: ["Data Science", "Machine Learning", "Programming", "Career Development"],
    publishedDate: "2023-02-28",
    author: {
      id: 2,
      name: "Alex Rivera",
      role: "Lead Data Scientist",
      avatar: "👨‍💻", // Placeholder for an actual image URL
      bio: "Alex has worked as a data scientist at several Fortune 500 companies and tech startups."
    },
    readTime: 12
  },
  {
    id: 3,
    slug: 'effective-study-techniques',
    title: 'Effective Study Techniques Based on Cognitive Science',
    excerpt: 'Research-backed methods to improve learning efficiency and information retention for students of all ages.',
    coverImage: "📚", // Placeholder for an actual image URL
    category: "Learning Techniques",
    tags: ["Study Tips", "Learning Science", "Memory Techniques", "Student Success"],
    publishedDate: "2023-03-10",
    author: {
      id: 3,
      name: "Dr. Samuel Chen",
      role: "Cognitive Psychologist",
      avatar: "👨‍🔬", // Placeholder for an actual image URL
      bio: "Dr. Chen specializes in learning and memory research at the University of California."
    },
    readTime: 10
  },
  {
    id: 4,
    slug: 'choosing-the-right-programming-language',
    title: 'Choosing the Right Programming Language for Your Career Goals',
    excerpt: 'A guide to selecting the most appropriate programming language based on your industry interests and career aspirations.',
    coverImage: "💻", // Placeholder for an actual image URL
    category: "Programming",
    tags: ["Programming", "Career Development", "Coding", "Tech Skills"],
    publishedDate: "2023-03-05",
    author: {
      id: 4,
      name: "Jessica Wong",
      role: "Senior Software Engineer",
      avatar: "👩‍💻", // Placeholder for an actual image URL
      bio: "Jessica has been coding for over 10 years and has mentored dozens of entry-level developers."
    },
    readTime: 9
  },
  {
    id: 5,
    slug: 'benefits-of-language-immersion',
    title: 'The Benefits of Language Immersion Programs for Adult Learners',
    excerpt: 'How immersive language learning environments accelerate fluency and cultural understanding for adult students.',
    coverImage: "🗣️", // Placeholder for an actual image URL
    category: "Language Learning",
    tags: ["Language Learning", "Immersion", "Adult Education", "Cultural Studies"],
    publishedDate: "2023-03-12",
    author: {
      id: 5,
      name: "Dr. Lisa Martinez",
      role: "Linguistics Professor",
      avatar: "👩‍🏫", // Placeholder for an actual image URL
      bio: "Dr. Martinez has developed language immersion programs for universities and corporations worldwide."
    },
    readTime: 7
  },
  {
    id: 6,
    slug: 'future-of-ai-in-education',
    title: 'The Future of AI in Education: Possibilities and Challenges',
    excerpt: 'Exploring how artificial intelligence is transforming educational experiences and what it means for students and educators.',
    coverImage: "🤖", // Placeholder for an actual image URL
    category: "Education Technology",
    tags: ["AI", "EdTech", "Future of Education", "Personalized Learning"],
    publishedDate: "2023-03-20",
    author: {
      id: 6,
      name: "Michael Zhang",
      role: "AI Education Researcher",
      avatar: "👨‍🔬", // Placeholder for an actual image URL
      bio: "Michael leads research on AI applications in educational settings at Stanford University."
    },
    readTime: 11
  }
];

// Get all unique categories
const allCategories = Array.from(new Set(blogPosts.map(post => post.category)));

// Get all unique tags
const allTags = Array.from(
  new Set(blogPosts.flatMap(post => post.tags))
).sort();

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [sortBy, setSortBy] = useState<'latest' | 'oldest' | 'title'>('latest');

  // Filter and sort posts whenever filter criteria change
  useEffect(() => {
    let filtered = [...blogPosts];
    
    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    // Apply tag filter
    if (selectedTag) {
      filtered = filtered.filter(post => post.tags.includes(selectedTag));
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'latest':
        filtered.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime());
        break;
      case 'title':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }
    
    setFilteredPosts(filtered);
  }, [selectedCategory, selectedTag, searchQuery, sortBy]);

  // Format the date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setSelectedTag(null);
    setSortBy('latest');
  };

  return (
    <>
      <SEOMetadata 
        title="Blog"
        description="Explore our latest articles on education, technology, and professional development."
      />
      
      <div className="bg-gray-50 pt-16 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mira Academy Blog
            </h1>
            <p className="text-xl text-gray-600">
              Insights, guides, and expert perspectives on education and professional development
            </p>
          </motion.div>
          
          {/* Search and Filters */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Search input */}
                <div className="col-span-1 md:col-span-3">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search articles..."
                      className="w-full p-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Category filter */}
                <div>
                  <select
                    value={selectedCategory || ''}
                    onChange={(e) => setSelectedCategory(e.target.value || null)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All Categories</option>
                    {allCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Tag filter */}
                <div>
                  <select
                    value={selectedTag || ''}
                    onChange={(e) => setSelectedTag(e.target.value || null)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All Tags</option>
                    {allTags.map((tag) => (
                      <option key={tag} value={tag}>
                        {tag}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Sort options */}
                <div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'latest' | 'oldest' | 'title')}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="latest">Latest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="title">Sort by Title</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <button 
                  onClick={clearFilters}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear Filters
                </button>
                <p className="text-sm text-gray-600">
                  Showing {filteredPosts.length} of {blogPosts.length} articles
                </p>
              </div>
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm overflow-hidden h-full flex flex-col"
                  >
                    <div className="h-48 bg-gray-100 flex items-center justify-center text-6xl">
                      {post.coverImage}
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                      
                      <div className="mt-auto">
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-3">{post.author.avatar}</span>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                            <p className="text-xs text-gray-600">{post.author.role}</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="text-xs text-gray-500">
                            {formatDate(post.publishedDate)} • {post.readTime} min read
                          </div>
                          
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-blue-600 font-medium text-sm hover:text-blue-800"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-lg mx-auto text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Articles Found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any articles matching your search criteria. Try adjusting your filters or search terms.
              </p>
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPage; 