import Link from 'next/link';
import { blogPosts } from '../blogData';

// Generate static paths for all blog posts
export async function generateStaticParams() {
  // This will be used during the static build to generate all blog post pages
  return blogPosts.map(post => ({
    id: post.id.toString()
  }));
}

// Static page component
export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id);
  const post = blogPosts.find(p => p.id === postId);

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to Blog
        </Link>
        
        {post ? (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4">{post.title.en}</h1>
            <div className="flex items-center mb-6">
              <span className="text-gray-600">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="mx-2">•</span>
              <span className="text-blue-600">{post.author}</span>
              <span className="mx-2">•</span>
              <span className="text-gray-600">{post.category.en}</span>
            </div>
            
            <div className="prose max-w-none">
              <p>{post.excerpt.en}</p>
              <p>View the full article using our interactive site.</p>
              <p>Use the development server with <code>npm run dev</code> to see the full interactive version.</p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p>Sorry, we couldn't find the blog post you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
} 