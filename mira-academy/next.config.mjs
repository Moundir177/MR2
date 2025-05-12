/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
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