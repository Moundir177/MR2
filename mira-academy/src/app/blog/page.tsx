import Link from 'next/link';
import { blogPosts } from './blogData';

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">MIRA ACADEMY Blog</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map(post => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                      {post.category.en}
                    </span>
                    <h3 className="text-2xl font-bold mb-3">{post.title.en}</h3>
                    <p className="text-gray-600 mb-4">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="text-gray-700 mb-4">{post.excerpt.en}</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg mr-3">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          <Link href={`/blog/author/${post.authorId}`}>
                            {post.author}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map(post => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <div className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow p-6 h-full">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-3">
                    {post.category.en}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{post.title.en}</h3>
                  <p className="text-gray-600 mb-3">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <p className="text-gray-700 mb-4">{post.excerpt.en.substring(0, 120)}...</p>
                  <Link 
                    href={`/blog/author/${post.authorId}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {post.author}
                  </Link>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 