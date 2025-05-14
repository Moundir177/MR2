import { Metadata } from 'next';
import { blogPosts } from '../blogData';
import type { BlogPost } from '../blogData';
import Link from 'next/link';

// Generate static paths for all blog posts
export async function generateStaticParams() {
  // Map the blog data to generate all possible slug values
  return blogPosts.map((post) => ({
    slug: post.id
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const post = blogPosts.find(post => post.id === params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }
  
  return {
    title: post.title.en,
    description: post.excerpt.en,
  };
}

// Static page component
export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = blogPosts.find(post => post.id === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold">Blog Post Not Found</h1>
        <p className="mt-4">Sorry, the blog post you're looking for doesn't exist.</p>
        <Link href="/blog" className="mt-8 inline-block text-blue-600 hover:underline">
          Back to all posts
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-4">{post.title.en}</h1>
          <div className="flex items-center mb-6">
            <img 
              src={post.author.avatar || '/default-avatar.png'} 
              alt={post.author.name} 
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-gray-600 text-sm">{post.author.title.en}</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime.en}</span>
            <span className="mx-2">•</span>
            <span>{post.category.en}</span>
          </div>
        </header>
        
        <div className="prose max-w-none mb-10">
          <div dangerouslySetInnerHTML={{ __html: post.content.en }} />
        </div>
        
        <footer className="mt-10 pt-8 border-t border-gray-200">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map(tag => (
                <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">About the Author</h3>
            <p>{post.author.name} - {post.author.title.en}</p>
          </div>
          
          <div className="mt-10">
            <Link href="/blog" className="text-blue-600 hover:underline">
              ← Back to all posts
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
} 