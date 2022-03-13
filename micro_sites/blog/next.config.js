/** @type {import('next').NextConfig} */

const {} = process.env

module.exports = {
  reactStrictMode: true,
  env: {},
  images: {
    domains: [],
  },
  basePath: '/blog',
  assetPrefix: 'blog/'
}

console.log('next.config.js', JSON.stringify(module.exports, null, 2))
