import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
productionBrowserSourceMaps: false,
  // devIndicators: { buildActivity: true },

  reactCompiler: true,
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   productionBrowserSourceMaps: false,
//   devIndicators: { buildActivity: true },
// }

module.exports = nextConfig