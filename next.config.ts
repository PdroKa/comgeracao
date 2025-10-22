import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
  },
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/',
        permanent: false
      }
    ]
  }
};

export default nextConfig;