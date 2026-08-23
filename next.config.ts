import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // The dev overlay badge sits in the bottom-left corner and ends up in every
  // screenshot sent to the client, which instantly reads as "unfinished".
  devIndicators: false,
  images: {
    // Photography usually carries most of the visual weight on a site like this —
    // serve the smallest format the browser accepts.
    // See .agents/08-accessibility-and-performance.md.
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['motion', 'gsap'],
  },
}

export default nextConfig
