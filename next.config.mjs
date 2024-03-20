/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
