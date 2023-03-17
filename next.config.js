/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.devtool = false
    return config
  }
}

module.exports = nextConfig
