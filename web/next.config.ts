import type { NextConfig } from "next";
import path from "node:path";

// Detect if we're deploying to GitHub Pages (repo name becomes basePath)
const repo = process.env.GITHUB_REPOSITORY ?? "";
const repoName = repo.includes("/") ? repo.split("/")[1] : "";
const isGitHubPages = !!process.env.GITHUB_ACTIONS && !!repoName;
const basePath = isGitHubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",
  images: { unoptimized: true },
  // Required for GitHub Pages: add repo name as base path
  basePath: basePath,
  // Pin the file-tracing root
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
