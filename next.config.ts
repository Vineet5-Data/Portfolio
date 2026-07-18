import type { NextConfig } from "next";

// GITHUB_PAGES=true adds the /portfolio basePath needed for project pages;
// Vercel and local dev serve from /.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/portfolio" : "",
  images: { unoptimized: true },
};

export default nextConfig;
