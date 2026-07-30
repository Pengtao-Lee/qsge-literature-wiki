/**
 * Domain-agnostic site identity. Every user-facing brand string flows from
 * here, driven by `NEXT_PUBLIC_*` env vars (build-time) with generic defaults so
 * the template runs out of the box. Override these in `.env.local` (see
 * `.env.example`) to brand the wiki for your own research domain.
 */
export const siteConfig = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE ?? "QSGE Literature Wiki",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
    "Quantitative Spatial General Equilibrium knowledge base — from classical spatial economics to dynamic frontier extensions.",
  greeting:
    process.env.NEXT_PUBLIC_SITE_GREETING ?? "Ask the QSGE wiki…",
  composerPlaceholder:
    process.env.NEXT_PUBLIC_SITE_PLACEHOLDER ?? "Search the spatial economics literature…",
};
