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
  basePath: '/principles',
  assetPrefix: 'principles/',
}

console.log('next.config.js', JSON.stringify(module.exports, null, 2))
