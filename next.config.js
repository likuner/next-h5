/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  webpack: (config) => {
    return config
  }
}

module.exports = nextConfig
