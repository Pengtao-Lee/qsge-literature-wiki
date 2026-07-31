# QSGE Literature Wiki

The canonical knowledge layer. LLM-maintained.

> **Navigation rule**: read this file first, then the relevant subdirectory `_index.md`.

## Sections

| Directory | Page type | Role |
|---|---|---|
| `sources/` | Source pages | One page per paper — paper-specific |
| `concepts/` | Concept pages | Cross-paper concept definitions |
| `mechanisms/` | Mechanism pages | Causal pathway descriptions |
| `methods/` | Method pages | Research design and identification strategies |
| `measures/` | Measure pages | How key variables are operationalized |
| `debates/` | Debate pages | Competing claims and open tensions |
| `synthesis/` | Synthesis pages | Higher-level cumulative interpretations |
| `inbox/` | Draft pages | Staging area before promotion to sources/ |
| `templates/` | Templates | Page structure templates |
| `schema/` | Schema docs | Naming rules, frontmatter schema, workflow docs |

## Key Files

- `wiki/log.md` — append-only history of all ingest/synthesis/lint events
- `wiki/synthesis/overview.md` — high-level map of the literature

## Status

- **Papers:** 26 (14 English + 12 Chinese) — 12 added 2026-07-31 (QSGE second-batch expansion, MinerU-VLM conversion)
- **Source pages:** 26 — `wiki/sources/`
- **Concepts (9):** quantitative-spatial-equilibrium, gravity-in-spatial-economics, local-employment-elasticities-and-commuting, economics-of-the-hukou-system, data-as-a-non-rival-factor-in-spatial-models, ricardian-quantitative-trade, multi-sector-trade-and-input-output-linkages, agglomeration-and-dispersion-forces, internal-city-structure-and-density
- **Mechanisms (6):** endogenous-infrastructure-and-spatial-development, spatial-innovation-and-structural-transformation, capital-labor-dynamics-and-spatial-convergence, welfare-effects-of-migration-in-chinese-cities, firm-level-frictions-and-spatial-misallocation, carbon-policy-and-spatial-leakage
- **Debates (2):** government-and-urbanization, land-supply-regional-tilt-debate
- **Methods (3):** exact-hat-algebra, model-inversion-and-fundamentals-recovery, sufficient-statistics-in-spatial-models
- **Measures (2):** commuter-market-access, trade-elasticity-estimation
- **Synthesis (7):** trade-and-migration-cost-reductions-in-china, migration-barriers-and-spatial-inequality, network-infrastructure-and-market-integration, transport-infrastructure-and-urban-welfare, structural-transformation-and-regional-convergence, spatial-public-finance, overview
- **Last build:** 2026-07-31 (2-round /wiki-build: 12 source + 26 knowledge pages; workspace `agent_tasks/wikipedia-rewrite_202607310654/`)
- **Last lint:** 2026-07-31 — frontmatter PASS, orphans OK (log.md only, meta), links in wiki/ pass (raw-layer image refs only)
- **Last synthesis:** 2026-07-31 — 2-round build complete
