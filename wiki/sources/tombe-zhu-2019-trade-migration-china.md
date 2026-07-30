---
title: "Trade, Migration, and Productivity: A Quantitative Analysis of China"
type: source
authors: [Trevor Tombe, Xiaodong Zhu]
year: 2019
slug: tombe-zhu-2019-trade-migration-china
tags: [China, migration, internal trade, productivity, hukou, misallocation, general-equilibrium]
raw_markdown: raw_markdown/papers/tombe-zhu-2019-trade-migration-china.md
status: draft
---

# Trade, Migration, and Productivity: A Quantitative Analysis of China (2019)

> **Paper claim** — Between 2000 and 2005, reductions in internal trade and migration costs accounted for 28 percent of China's aggregate labor productivity growth, while reductions in international trade costs accounted for only 8 percent; despite these declines, remaining frictions imply large potential gains from further reform.

Raw markdown: [[raw_markdown/papers/tombe-zhu-2019-trade-migration-china]]

## Research Question

What role did reductions in internal and external trade costs and migration costs play in China's aggregate labor productivity growth between 2000 and 2005? The paper distinguishes between the widely emphasised "export-led" narrative and the less-studied internal policy reforms (hukou reform, SOE restructuring, infrastructure investment) that lowered frictions within China.

## Model / Experimental Design

A two-sector (agriculture, non-agriculture), multi-region (30 Chinese provinces plus the rest of the world) general equilibrium model combining:

- **Trade side**: Eaton and Kortum (2002) with iceberg trade costs, Fréchet productivity draws, and input-output linkages. Internal and external trade costs are separately identified via Head-Ries indices adjusted for exporter-specific asymmetries.
- **Migration side**: Workers choose locations and sectors subject to migration costs (modelled as utility wedges) and heterogeneous location preferences (Fréchet). Land is collectively owned — migrants forfeit land income when leaving their hukou location, an institutional friction absent from most spatial models.
- **Equilibrium**: Solved in changes (Dekle, Eaton, Kortum 2007), requiring only elasticities and initial trade/migration shares rather than full cost levels.

Key calibrated parameters: trade elasticity θ = 4, migration elasticity κ = 1.5 (estimated via IV regressions using Bartik-style and neighbour-income instruments).

## Main Results

1. **Migration costs were extremely high in 2000** — the average cost of rural-to-urban migration within a province was equivalent to shrinking real income by a factor of nearly 3; between-province agricultural-to-non-agricultural migration costs averaged 25.2. Between 2000 and 2005, migration costs fell 18 percent on average and nearly 40 percent for between-province moves.

2. **Internal trade costs fell 10–15 percent** (2002–2007); international trade costs fell nearly 10 percent in non-agriculture and 25 percent in agriculture. Internal trade shares rose by 7 percentage points on average; external shares by only 1 point.

3. **Decomposition of 57.1 percent aggregate labour productivity growth (2000–2005):**
   - Productivity (T) changes: 36.9 pp (64 percent of growth)
   - Internal trade cost reductions: 10.2 pp (18 percent)
   - Migration cost reductions: 5.6 pp (10 percent)
   - External trade cost reductions: 4.5 pp (8 percent)
   - Together, trade and migration friction reductions account for 36 percent of observed growth.

4. **Counterfactual simulations**: Reducing China's internal trade costs to Canadian levels would raise real GDP by 12.5 percent and welfare by 16.3 percent. Lowering migration costs to achieve a US-like one-third inter-provincial migrant share would raise real GDP by 12.8 percent and welfare by 45.6 percent.

5. **Land reform**: Allowing workers to retain land income regardless of location would nearly double within-province migration, raise welfare by 11.8 percent, but slightly reduce measured real GDP (−2.4 percent) due to urban-to-rural reallocation.

## Mechanisms Identified

> **Paper claim** — The dominant channel is labour reallocation from agriculture to non-agriculture (accounting for ~90 percent of migration gains), enabled by lower migration costs; internal trade cost reductions operate through expanded within-country specialisation and input-output linkages that magnify gains beyond what final-goods-only models predict.

- Reductions in internal trade costs disproportionately lower goods prices in poor interior regions, slightly *reducing* incentives for inter-provincial migration (substitution channel).
- The hukou system and collective land ownership create recurring flow costs (not sunk) that persistently distort location choices.
- Intermediate input linkages amplify trade gains by a factor of ~3–4 relative to a model without intermediates.

Links: [[mechanism-migration-labor-reallocation]], [[mechanism-hukou-distortion]]

## Methods and Measures

- **Head-Ries index** adjusted for exporter-specific asymmetries (Tombe 2015) to estimate bilateral trade costs from trade shares.
- **Fréchet migration choice model** with IV estimation of the migration elasticity κ, using Bartik-style expected income instruments and distance-weighted neighbour income.
- **Regional price levels** constructed from Brandt and Holz (2006) 1990 benchmarks chained with provincial CPIs.
- **Migration data** from 1 percent sample of the 2000 Population Census and 20 percent sample of the 2005 mini-census.
- **Trade data** from Li (2010) and Zhang and Qi (2012) inter-regional input-output tables for 2002 and 2007.

Links: [[method-head-ries-trade-costs]], [[method-frechet-migration-choice]]

## Concepts Engaged

- **Misallocation**: The paper models trade and migration costs as specific, measurable sources of factor misallocation across space and sectors, contributing to the macro-development misallocation literature (Restuccia and Rogerson 2008, Hsieh and Klenow 2009).
- **Internal vs. external integration**: Distinguishes the growth contributions of within-country versus international trade liberalisation — a distinction often obscured in aggregate analyses.
- **Spatial equilibrium**: Applies the quantitative spatial economics framework (Ahlfeldt et al. 2015, Redding 2016) to China's institutional environment.
- **Hukou as a migration friction**: Models the household registration system as an ongoing flow cost rather than a sunk barrier, interacting with collective land ownership.

Links: [[concept-misallocation]], [[concept-spatial-equilibrium]], [[concept-internal-trade]]

## Connection to Debates

> **Paper claim** — The paper directly challenges the "export-led growth" narrative for China's 2000–2005 boom: internal reforms (hukou liberalisation, anti-protectionist directives, highway construction, SOE reform) were far more important than WTO accession for aggregate productivity. External trade liberalisation mattered, but its contribution (8 percent) was dwarfed by internal friction reductions (28 percent).

Links: [[debate-china-export-led-growth]], [[debate-internal-vs-external-liberalisation]]

## Theoretical / Empirical Significance

The paper provides the first unified quantitative framework for China that jointly endogenises internal trade, international trade, and worker migration across regions and sectors. It demonstrates that (a) internal frictions dominate external ones in a large continental economy, (b) intermediate input linkages are quantitatively essential for trade-gain magnitudes, and (c) China's collective land ownership creates a distinctive urban-to-rural migration channel under land reform. The decomposition methodology — averaging marginal contributions across all permutations — addresses the path-dependence problem in growth accounting with multiple interacting channels.

## Notes and Caveats

- The analysis covers only 2000–2005; results may not generalise to later periods when different reforms (e.g., high-speed rail, further hukou relaxation after 2014) became salient.
- External trade liberalisation may contribute through FDI and technology transfer channels (Ramondo and Rodríguez-Clare 2013) that are not modelled.
- Migration costs are inferred as a residual and may partly reflect unmodelled amenity differences across provinces; the quantitative results rely on the assumption that systematic location preferences did not change over the period.
- The welfare gains from migration cost reductions include a direct utility effect of lower costs, which mechanically inflates welfare relative to GDP gains.
- The counterfactual land reform simulation shows welfare gains but a *decline* in measured real GDP, highlighting that GDP and welfare can move in opposite directions when institutional frictions are removed.
