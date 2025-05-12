'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from '../../../components/motion';
import Link from 'next/link';
import SEOMetadata from '../../../components/SEOMetadata';

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
  content: string;
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
    content: `
    <p>The COVID-19 pandemic accelerated the adoption of online education across the globe. What was once considered an alternative learning method quickly became the primary way students of all ages continued their education during lockdowns. Now, as we move forward, the landscape of online education continues to evolve in fascinating ways.</p>
    
    <h2>The New Normal in Education</h2>
    <p>Online learning is no longer just a contingency plan – it has become an integral part of the educational ecosystem. Schools, universities, and training programs are developing hybrid models that combine the best aspects of in-person and online instruction.</p>
    
    <p>Research indicates that students who participate in well-designed online courses often perform better than those in traditional classroom settings. This is attributed to several factors:</p>
    
    <ul>
      <li>The ability to learn at one's own pace</li>
      <li>Access to diverse learning materials beyond textbooks</li>
      <li>Reduced anxiety for students who may feel intimidated in classroom settings</li>
      <li>The development of self-discipline and time management skills</li>
    </ul>
    
    <h2>Technology Enhancements Driving Innovation</h2>
    <p>As online education becomes more sophisticated, we're seeing remarkable technological advancements that enhance the learning experience:</p>
    
    <h3>Artificial Intelligence</h3>
    <p>AI is personalizing the learning journey by adapting content to individual student needs. Intelligent tutoring systems can identify where students struggle and provide targeted assistance. Some platforms can even predict learning outcomes and suggest interventions before a student falls behind.</p>
    
    <h3>Virtual and Augmented Reality</h3>
    <p>VR and AR technologies are transforming how students interact with complex concepts. Medical students can practice surgical procedures in virtual environments, history students can "visit" ancient civilizations, and engineering students can manipulate 3D models of their designs in real-time.</p>
    
    <h3>Collaborative Learning Platforms</h3>
    <p>Digital spaces designed specifically for group learning are evolving beyond simple video conferencing. These platforms integrate project management tools, real-time document collaboration, and interactive whiteboards to simulate and sometimes improve upon the collaborative aspects of traditional classrooms.</p>
    
    <h2>Challenges and Opportunities</h2>
    <p>Despite the progress, online education still faces significant challenges:</p>
    
    <p>The "digital divide" remains a substantial barrier, with students in under-resourced communities lacking access to reliable internet connections and devices. Educational institutions and governments must address these inequities to ensure online education doesn't exacerbate existing social disparities.</p>
    
    <p>Additionally, educators require ongoing professional development to effectively teach in digital environments. Teaching online demands different skills than traditional classroom instruction, including technical proficiency and strategies for engaging students remotely.</p>
    
    <h2>The Path Forward</h2>
    <p>As we look to the future, the most successful educational approaches will likely combine the convenience and technological advantages of online learning with the social and hands-on aspects of in-person education. This hybrid model represents not just a compromise but potentially a superior approach that captures the benefits of both worlds.</p>
    
    <p>Educational institutions that embrace innovation while maintaining their commitment to accessibility and quality will lead the way in this new era of learning. The future of education isn't just online – it's adaptive, inclusive, and continually evolving to meet the needs of learners in an increasingly complex world.</p>
    `,
    coverImage: "🌐", // Placeholder for an actual image URL
    category: "Education Technology",
    tags: ["Online Learning", "EdTech", "Future of Education", "E-Learning Trends"],
    publishedDate: "2023-03-15",
    author: {
      id: 1,
      name: "Dr. Maya Phillips",
      role: "Education Technology Specialist",
      avatar: "👩‍🏫", // Placeholder for an actual image URL
      bio: "Dr. Phillips has over 15 years of experience in educational technology research and implementation. She consults with universities and education companies on creating effective online learning environments."
    },
    readTime: 8
  },
  {
    id: 2,
    slug: 'mastering-data-science-fundamentals',
    title: 'Mastering Data Science Fundamentals: A Beginner\'s Guide',
    excerpt: 'An introduction to the key concepts and skills needed to start a successful journey in data science.',
    content: `
    <p>Data Science continues to be one of the most sought-after career paths in the technology sector. For those looking to enter this dynamic field, understanding the fundamental concepts is essential for building a strong foundation. This guide breaks down the core elements every beginner should master.</p>
    
    <h2>Understanding the Data Science Landscape</h2>
    <p>Before diving into specific skills, it's important to understand what data science encompasses. At its core, data science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.</p>
    
    <p>The data science workflow typically includes:</p>
    <ol>
      <li>Asking the right questions</li>
      <li>Data acquisition and cleaning</li>
      <li>Exploratory data analysis</li>
      <li>Model building and evaluation</li>
      <li>Communication of results</li>
      <li>Implementation of insights</li>
    </ol>
    
    <h2>Essential Technical Skills</h2>
    
    <h3>Programming Languages</h3>
    <p>Most data scientists rely heavily on Python and/or R. Python has become the industry standard due to its versatility and extensive libraries specifically designed for data analysis and machine learning, such as:</p>
    <ul>
      <li>Pandas for data manipulation and analysis</li>
      <li>NumPy for numerical computations</li>
      <li>Scikit-learn for machine learning algorithms</li>
      <li>Matplotlib and Seaborn for data visualization</li>
    </ul>
    
    <h3>Statistics and Mathematics</h3>
    <p>A solid understanding of statistical methods is crucial. Key concepts include:</p>
    <ul>
      <li>Descriptive statistics</li>
      <li>Probability distributions</li>
      <li>Hypothesis testing</li>
      <li>Regression analysis</li>
      <li>Basic linear algebra and calculus</li>
    </ul>
    
    <h3>Machine Learning</h3>
    <p>While advanced machine learning might seem intimidating, beginners should start by understanding:</p>
    <ul>
      <li>The difference between supervised and unsupervised learning</li>
      <li>Common algorithms like linear regression, logistic regression, decision trees, and k-means clustering</li>
      <li>Concepts of model training, validation, and testing</li>
      <li>Evaluation metrics for different types of problems</li>
    </ul>
    
    <h2>Practical Learning Path</h2>
    
    <h3>Start with Structured Courses</h3>
    <p>Begin your journey with structured courses that provide a comprehensive introduction to data science concepts. Many online platforms offer beginner-friendly courses that combine theory with practical exercises.</p>
    
    <h3>Work on Real Projects</h3>
    <p>Theory alone won't develop your skills. Apply what you've learned to real-world datasets by:</p>
    <ul>
      <li>Participating in Kaggle competitions</li>
      <li>Working on public datasets relevant to your interests</li>
      <li>Contributing to open-source data science projects</li>
    </ul>
    
    <h3>Build a Portfolio</h3>
    <p>As you complete projects, compile them into a portfolio that demonstrates your skills to potential employers. GitHub is an excellent platform for showcasing your code and analysis.</p>
    
    <h2>Beyond Technical Skills</h2>
    
    <p>Data science isn't just about algorithms and code. Successful data scientists also excel at:</p>
    
    <h3>Communication</h3>
    <p>The ability to explain complex findings to non-technical stakeholders is invaluable. Practice translating your technical insights into clear, actionable recommendations.</p>
    
    <h3>Domain Knowledge</h3>
    <p>Understanding the business or scientific context of your data makes your analysis more relevant and impactful. Consider specializing in a field that interests you, such as healthcare, finance, or marketing.</p>
    
    <h2>Continuing Your Journey</h2>
    
    <p>Data science is a rapidly evolving field. Staying current with new technologies and methodologies is essential for long-term success. Join online communities, attend conferences, follow relevant blogs, and never stop learning.</p>
    
    <p>Remember that becoming proficient in data science takes time and persistence. Focus on building a strong foundation in the fundamentals, and gradually expand your knowledge as you gain experience. With dedication and practice, you'll be well on your way to a rewarding career in this exciting field.</p>
    `,
    coverImage: "📊", // Placeholder for an actual image URL
    category: "Data Science",
    tags: ["Data Science", "Machine Learning", "Programming", "Career Development"],
    publishedDate: "2023-02-28",
    author: {
      id: 2,
      name: "Alex Rivera",
      role: "Lead Data Scientist",
      avatar: "👨‍💻", // Placeholder for an actual image URL
      bio: "Alex has worked as a data scientist at several Fortune 500 companies and tech startups. He's passionate about mentoring new data scientists and making complex concepts accessible to beginners."
    },
    readTime: 12
  },
  {
    id: 3,
    slug: 'effective-study-techniques',
    title: 'Effective Study Techniques Based on Cognitive Science',
    excerpt: 'Research-backed methods to improve learning efficiency and information retention for students of all ages.',
    content: `
    <p>The science of learning has evolved significantly in recent decades, providing valuable insights into how our brains process, store, and retrieve information. By applying these research-backed techniques, you can dramatically improve your study efficiency and knowledge retention.</p>
    
    <h2>Understanding How Memory Works</h2>
    <p>Before diving into specific techniques, it's helpful to understand the basic processes involved in learning. When we learn new information, it passes through three stages:</p>
    
    <ol>
      <li><strong>Encoding:</strong> Converting information into a form that can be stored in memory</li>
      <li><strong>Storage:</strong> Maintaining encoded information in memory over time</li>
      <li><strong>Retrieval:</strong> Accessing and recalling stored information when needed</li>
    </ol>
    
    <p>Effective study techniques target one or more of these processes to enhance learning outcomes.</p>
    
    <h2>Evidence-Based Study Techniques</h2>
    
    <h3>1. Spaced Repetition</h3>
    <p>Rather than cramming all your study into one session (massed practice), distribute your study sessions over time. Research consistently shows that spacing your learning leads to better long-term retention.</p>
    
    <p><strong>How to implement:</strong> If you're studying for an exam that's 30 days away, it's better to study for 1 hour per day for 10 days (with days off in between) than to study for 10 hours straight on a single day.</p>
    
    <h3>2. Retrieval Practice</h3>
    <p>Testing yourself on material is far more effective than simply re-reading or highlighting text. Each time you retrieve information from memory, you strengthen the neural pathways associated with that knowledge.</p>
    
    <p><strong>How to implement:</strong> Use flashcards, practice quizzes, or simply close your book and write down everything you remember about a topic. Even if you struggle to recall information, the effort enhances learning.</p>
    
    <h3>3. Interleaving</h3>
    <p>Instead of focusing on one topic or problem type at a time (blocked practice), mix different topics or types of problems within a single study session.</p>
    
    <p><strong>How to implement:</strong> If you're studying mathematics, alternate between different types of problems rather than completing all problems of one type before moving to the next.</p>
    
    <h3>4. Elaboration</h3>
    <p>Connect new information to what you already know by asking questions like "How does this relate to...?" or "Why does this work the way it does?"</p>
    
    <p><strong>How to implement:</strong> After learning a new concept, take a few minutes to reflect on how it connects to your existing knowledge or real-world applications.</p>
    
    <h3>5. Concrete Examples</h3>
    <p>Abstract concepts become easier to understand and remember when illustrated with specific examples.</p>
    
    <p><strong>How to implement:</strong> For each key concept you're studying, try to come up with at least one concrete example or application.</p>
    
    <h2>Optimizing Your Study Environment</h2>
    
    <h3>Minimize Distractions</h3>
    <p>Research indicates that even brief interruptions can significantly disrupt the learning process. Each time you switch from studying to checking your phone, for example, you incur a "switching cost" that reduces efficiency.</p>
    
    <p><strong>How to implement:</strong> Study in a quiet location, turn off notifications, and consider using website blockers during study sessions.</p>
    
    <h3>Sleep and Learning</h3>
    <p>Sleep plays a crucial role in memory consolidation—the process by which memories are strengthened and reorganized. Studies show that learning followed by adequate sleep results in better retention than continuous waking study.</p>
    
    <p><strong>How to implement:</strong> Review important material shortly before sleeping, and prioritize consistent, quality sleep especially during intensive learning periods.</p>
    
    <h2>Tailoring Techniques to Your Learning Style</h2>
    
    <p>While the techniques above are effective for most learners, individual differences can influence which methods work best for you. Experiment with different approaches and combinations to discover your optimal study strategy.</p>
    
    <p>Some learners benefit from visual aids like mind maps or diagrams, while others retain information better through verbal explanations or teaching concepts to others (known as the "protégé effect").</p>
    
    <h2>The Importance of Metacognition</h2>
    
    <p>Perhaps the most powerful study skill is metacognition—thinking about your own thinking and learning processes. Regularly reflect on questions like:</p>
    
    <ul>
      <li>What am I trying to accomplish with this study session?</li>
      <li>How well do I understand this material?</li>
      <li>Which study techniques seem to be working best for me?</li>
      <li>What adjustments should I make to my approach?</li>
    </ul>
    
    <p>This self-awareness allows you to adapt your strategies based on their effectiveness rather than persisting with methods that aren't producing results.</p>
    
    <h2>Putting It All Together</h2>
    
    <p>Effective studying isn't about spending more time with your books—it's about using that time strategically. By incorporating these evidence-based techniques into your routine, you can significantly enhance your learning efficiency and knowledge retention.</p>
    
    <p>Remember that learning is a skill that improves with practice. As you experiment with these methods, you'll develop a personalized approach that maximizes your cognitive resources and helps you achieve your educational goals.</p>
    `,
    coverImage: "📚", // Placeholder for an actual image URL
    category: "Learning Techniques",
    tags: ["Study Tips", "Learning Science", "Memory Techniques", "Student Success"],
    publishedDate: "2023-03-10",
    author: {
      id: 3,
      name: "Dr. Samuel Chen",
      role: "Cognitive Psychologist",
      avatar: "👨‍🔬", // Placeholder for an actual image URL
      bio: "Dr. Chen specializes in learning and memory research at the University of California. His work focuses on translating cognitive science findings into practical applications for educators and students."
    },
    readTime: 10
  }
];

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be a fetch request to an API
    const fetchPost = () => {
      setIsLoading(true);
      
      // Simulate API delay
      setTimeout(() => {
        const foundPost = blogPosts.find(post => post.slug === slug);
        setPost(foundPost || null);
        
        if (foundPost) {
          // Find related posts that share the same category or tags
          const related = blogPosts
            .filter(p => p.id !== foundPost.id && (
              p.category === foundPost.category || 
              p.tags.some(tag => foundPost.tags.includes(tag))
            ))
            .slice(0, 3);
          
          setRelatedPosts(related);
        }
        
        setIsLoading(false);
      }, 500);
    };
    
    fetchPost();
  }, [slug]);

  // Format the date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
        <p className="text-gray-600 mb-6 text-center">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link
          href="/blog"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          View All Blog Posts
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEOMetadata 
        title={post.title}
        description={post.excerpt}
        ogType="article"
        keywords={post.tags.join(', ')}
      />
    
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 font-medium mb-8 hover:text-blue-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Blog
          </Link>
          
          <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="h-64 bg-gray-200 flex items-center justify-center text-9xl">
              {post.coverImage}
            </div>
            
            <div className="p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4">
                  <Link
                    href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full hover:bg-blue-200 transition-colors"
                  >
                    {post.category}
                  </Link>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h1>
                
                <div className="flex items-center mb-6">
                  <span className="text-5xl mr-4">{post.author.avatar}</span>
                  <div>
                    <p className="font-medium text-gray-900">{post.author.name}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <span>{formatDate(post.publishedDate)}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Link
                        key={index}
                        href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200 transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="text-6xl mr-6">{post.author.avatar}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{post.author.name}</h3>
                    <p className="text-blue-600 mb-2">{post.author.role}</p>
                    <p className="text-gray-700">{post.author.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
          
          {relatedPosts.length > 0 && (
            <div className="max-w-4xl mx-auto mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl shadow-sm overflow-hidden"
                  >
                    <div className="h-44 bg-gray-100 flex items-center justify-center text-5xl">
                      {relatedPost.coverImage}
                    </div>
                    
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-3">
                        {relatedPost.category}
                      </span>
                      
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{relatedPost.title}</h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-500">{formatDate(relatedPost.publishedDate)}</div>
                        
                        <Link
                          href={`/blog/${relatedPost.slug}`}
                          className="text-blue-600 font-medium text-sm hover:text-blue-800"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPostPage; 