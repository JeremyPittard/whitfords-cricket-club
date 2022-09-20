/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["images.unsplash.com"],
  },
  optimizeFonts: true,
};

module.exports = nextConfig;
