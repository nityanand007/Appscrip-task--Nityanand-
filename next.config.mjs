/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com'],
  },
  distDir: "build",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
