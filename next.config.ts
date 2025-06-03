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
};

export default nextConfig;
/* config options here */
// async redirects() {
//   return [
//     {
//       source: '/',
//       destination: '/#',
//       permanent: true
//     }
//   ]
// }