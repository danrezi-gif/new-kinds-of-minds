import type { NextConfig } from "next";

// Static export. BASE_PATH is set in CI for GitHub Pages project hosting
// (e.g. "/new-kinds-of-minds") and left empty for a custom domain.
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  outputFileTracingRoot: __dirname,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SUBMIT_ENDPOINT: process.env.NEXT_PUBLIC_SUBMIT_ENDPOINT || "https://clawagent.duckdns.org/nkm/submit",
  },
};

export default nextConfig;
