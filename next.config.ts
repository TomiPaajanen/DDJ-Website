import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 't4.ftcdn.net' },
      { hostname: 'web-japan.org' },
      { hostname: 'support.discord.com' },
      { hostname: 'cdn.vectorstock.com' },
    ],
  },
};

export default nextConfig;
