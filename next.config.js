/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  // babel: {
  //   plugins: [
  //     ["styled-components", { "ssr": true }]
  //   ]
  // },
}

module.exports = nextConfig
