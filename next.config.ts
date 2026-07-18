import type { NextConfig } from "next";

// GITHUB_PAGES=true adds the /Portfolio basePath needed for project pages
// (must match the repo name's exact case — Pages paths are case-sensitive);
// Vercel and local dev serve from /.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/Portfolio" : "",
  images: { unoptimized: true },
};

export default nextConfig;
