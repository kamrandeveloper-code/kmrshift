import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ['10.23.218.42'],
  images: {
    // 90 keeps text in interface screenshots crisp.
    qualities: [75, 90],
  },
};

export default nextConfig;
