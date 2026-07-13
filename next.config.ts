import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production optimizations
  reactStrictMode: true,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  output: "standalone",

  // Compression
  compress: true,

  // SEO: 301 redirects — consolidate duplicate invoice synonym pages into /invoice-generator
  async redirects() {
    return [
      '/online-invoice-generator',
      '/invoice-maker',
      '/free-invoice-maker',
      '/invoice-creator',
      '/invoice-generator-no-login',
      '/simple-invoice-generator',
      '/freelance-invoice-generator',
      '/invoice-generator-pdf',
      '/invoice-pdf-generator',
      '/invoice-template-pdf',
      '/free-invoice-template',
      '/simple-invoice-template',
      '/freelance-invoice-template',
      '/invoice-template-simple',
    ].map(source => ({
      source,
      destination: '/invoice-generator',
      permanent: true,
    }));
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ];
  },
};

export default nextConfig;
