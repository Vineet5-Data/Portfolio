import type { NextConfig } from "next";

// GITHUB_PAGES=true adds the /Portfolio basePath needed for project pages
// (must match the repo name's exact case — Pages paths are case-sensitive);
// Vercel and local dev serve from /.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const basePath = isGitHubPages ? "/Portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // exposed so plain <a href> assets (resume.pdf) get the basePath too —
  // Next only rewrites next/link and _next assets, not raw anchors
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
};

export default nextConfig;
