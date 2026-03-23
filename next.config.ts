import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/alpine-shred',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
