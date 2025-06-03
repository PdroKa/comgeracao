import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/adoraicuritiba',
        permanent: true
      }
    ]
  }
};

export default nextConfig;