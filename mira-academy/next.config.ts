import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  i18n: {
    locales: ['fr', 'ar', 'en'],
    defaultLocale: 'fr',
    localeDetection: false,
  },
};

export default nextConfig;
