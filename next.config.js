/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  cacheOnFrontEndNav : true,
  reloadOnOnline : true,
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  // next.js config
  reactStrictMode: false,
  experimental: {
    appDir: true,             // <---- Comment and Uncomment this
  },
})
