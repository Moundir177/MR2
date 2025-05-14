/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // Skip type checking in build
  typescript: {
    ignoreBuildErrors: true
  },
  // Skip ESLint in build
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig; 