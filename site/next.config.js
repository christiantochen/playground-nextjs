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
        source: '/principles',
        destination: `http://localhost:3100/principles`,
      },
      {
        source: '/principles/:path*',
        destination: `http://localhost:3100/principles/:path*`,
      },
    ]
  },
}

console.log('next.config.js', JSON.stringify(module.exports, null, 2))
