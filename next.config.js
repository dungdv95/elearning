/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;
