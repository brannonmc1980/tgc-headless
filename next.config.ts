import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.wordpress.com',
      },
      {
        protocol: 'https',
        hostname: '**.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'media.thegospelcoalition.org',
      },
      // Add your WordPress CDN here:
      // { protocol: 'https', hostname: 'cms.yourdomain.com' },
    ],
  },
  // Enable ISR for WordPress API data
  experimental: {},
}

export default nextConfig
