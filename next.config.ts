import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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