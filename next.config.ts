import type { NextConfig } from 'next'

const isDev = process.env.NODE_ENV !== 'production'

// next/font self-hosts the Google fonts at build time, so font-src stays 'self'.
// Next.js emits inline bootstrap scripts, so script-src needs 'unsafe-inline'
// (dev also needs 'unsafe-eval' for React's debugging tools).
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://*.google-analytics.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com",
  "frame-src https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ')

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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      { source: '/professional-pricing',    destination: '/professionals/pricing', permanent: true },
      { source: '/headshot-pricing',        destination: '/pricing',               permanent: true },
      { source: '/actor-pricing',           destination: '/actors/pricing',        permanent: true },
      { source: '/booking',                 destination: '/bookings',              permanent: true },
      { source: '/actor-headshots-toronto', destination: '/actors',                permanent: true },
      { source: '/2259-2',                  destination: '/',                      permanent: true },
    ]
  },
}

export default nextConfig
