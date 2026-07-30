import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages — pre-generates all wiki pages at build time.
  // Chat surface degrades gracefully (no backend needed for Search + Browse).
  output: "export",
  // The wiki viewer page and search page are fully static (generateStaticParams).
  // The home page (Chat) degrades to a notice when no API is present.
  images: { unoptimized: true },

  // Pin the file-tracing root to this web project so Next.js does not infer a
  // different workspace root (which emits a warning) when the repo sits inside
  // a larger monorepo or alongside other lockfiles.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
