/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Ensure that the output is static HTML
  output: 'export',
  // Add base path if your site is served from a subdirectory
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  // Set asset prefix to empty string for static export
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Disable server-side rendering at build time
  target: 'serverless',
  // Enable static HTML export
  trailingSlash: true,
  // Add any other Next.js config options here
};

module.exports = nextConfig;
