import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enables gzip/brotli compression
  compress: true,
  // Strict mode for catching issues in dev
  reactStrictMode: true,
  // Removes X-Powered-By header
  poweredByHeader: false,
}

export default nextConfig
