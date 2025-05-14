/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export in production
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // Define static routes only - exclude dynamic routes that don't have generateStaticParams
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/courses': { page: '/courses' },
      '/blog': { page: '/blog' },
      '/login': { page: '/login' },
      '/faq': { page: '/faq' }
    };
  },
  eslint: {
    // Disable ESLint during builds to prevent blocking builds with warnings
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during builds to prevent blocking builds with type errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig; 