/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    GOAPP_API_URL: process.env.GOAPP_API_URL,
    GOAPP_API_KEY: process.env.GOAPP_API_KEY,
    GOAPP_AUTH_API_URL: process.env.GOAPP_AUTH_API_URL,
  },
  images: {
    domains: ['media.dev.goapp.co.id', 'media.dev.alpha.dari.id'],
  },
}

console.log('next.config.js', JSON.stringify(module.exports, null, 2))
