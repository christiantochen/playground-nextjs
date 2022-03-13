/** @type {import('next').NextConfig} */

const { API_URL } = process.env

module.exports = {
  reactStrictMode: true,
  env: {
    API_URL,
  },
  images: {
    domains: [],
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/blog',
        destination: `http://localhost:3100/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `http://localhost:3100/blog/:path*`,
      },
    ]
  },
}

console.log('next.config.js', JSON.stringify(module.exports, null, 2))
