import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 828, 1080, 1440, 1920],
    imageSizes: [96, 200, 320, 480],
  },
};

export default nextConfig;
