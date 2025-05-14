import Link from 'next/link';
import { blogPosts } from '../../blogData';

// Generate static paths for all blog authors
export async function generateStaticParams() {
  // Get unique author IDs from blog posts
  const authorIds = [...new Set(blogPosts.map(post => post.authorId))];
  return authorIds.map(id => ({ id }));
}

// Author data
const authors = {
  'john-doe': {
    name: 'John Doe',
    bio: 'Web development expert with over 10 years of experience in creating responsive and user-friendly websites.',
    avatar: '👨‍💻',
    title: 'Web Development Instructor'
  },
  'jane-smith': {
    name: 'Jane Smith',
    bio: 'Data scientist specializing in machine learning algorithms and data visualization techniques.',
    avatar: '👩‍🔬',
    title: 'Data Science Professor'
  },
  'ahmed-ibrahim': {
    name: 'Ahmed Ibrahim',
    bio: 'Digital marketing strategist with experience in SEO, SEM, and social media marketing campaigns.',
    avatar: '👨‍💼',
    title: 'Digital Marketing Specialist'
  },
  'maria-garcia': {
    name: 'Maria Garcia',
    bio: 'Mobile app developer with expertise in cross-platform development frameworks and UX design.',
    avatar: '👩‍💻',
    title: 'Mobile Development Lead'
  },
  'alex-chen': {
    name: 'Alex Chen',
    bio: 'AI researcher focused on deep learning models and their practical applications in various industries.',
    avatar: '🧠',
    title: 'AI Research Scientist'
  }
};

export default function AuthorPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const author = authors[id as keyof typeof authors];
  const authorPosts = blogPosts.filter(post => post.authorId === id);

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to Blog
        </Link>
        
        {author ? (
          <>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-5xl">
                  {author.avatar}
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2">{author.name}</h1>
                  <p className="text-blue-600 mb-4">{author.title}</p>
                  <p className="text-gray-700">{author.bio}</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">Articles by {author.name}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {authorPosts.map(post => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <div className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow p-6 h-full">
                    <h3 className="text-xl font-bold mb-3">{post.title.en}</h3>
                    <p className="text-gray-600 mb-4">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="text-gray-700">{post.excerpt.en.substring(0, 120)}...</p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4">Author Not Found</h1>
            <p>Sorry, we couldn't find the author you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
} 