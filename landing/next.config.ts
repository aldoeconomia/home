import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "localhost:4500",
        "theqontrol.com",
        "www.theqontrol.com",
        "*.theqontrol.com",
      ],
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
