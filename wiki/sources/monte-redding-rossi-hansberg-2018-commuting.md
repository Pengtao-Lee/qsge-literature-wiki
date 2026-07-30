---
title: "Commuting, Migration, and Local Employment Elasticities"
type: source
authors:
  - Ferdinando Monte
  - Stephen J. Redding
  - Esteban Rossi-Hansberg
year: 2018
slug: monte-redding-rossi-hansberg-2018-commuting
tags:
  - spatial-economics
  - commuting
  - local-labor-markets
  - quantitative-spatial-models
  - labor-demand-shocks
  - gravity-equation
raw_markdown: "raw_markdown/papers/monte-redding-rossi-hansberg-2018-commuting.md"
status: draft
---

# Commuting, Migration, and Local Employment Elasticities (2018)

> **Paper claim** — Local employment elasticities with respect to labor demand shocks are not a single parameter but are heterogeneous across locations depending on the openness of local labor markets to commuting, with substantial variation (0.5–2.5) explained largely by commuting linkages rather than standard controls such as size, wages, or land area.

Raw markdown: [[raw_markdown/papers/monte-redding-rossi-hansberg-2018-commuting]]

## Research Question

How does the elasticity of local employment with respect to a labor demand shock differ across locations, and what role do spatial linkages in commuting markets play in generating this heterogeneity? The paper asks whether conventional reduced-form estimates of a single local employment elasticity are misleading when applied to individual counties that differ in their connectedness to neighboring labor markets.

## Model / Experimental Design

The authors develop a quantitative general equilibrium model with an arbitrary number of locations linked in both goods markets (costly trade, monopolistic competition, increasing returns) and factor markets (migration and commuting). Workers have Cobb-Douglas preferences over tradable goods and residential land, and receive Fréchet-distributed idiosyncratic amenity shocks for each bilateral residence-workplace pair (McFadden 1974; Eaton and Kortum 2002). Commuting is subject to iceberg utility costs. The model yields gravity equations for both trade and commuting flows. The framework is quantified to match observed US county-level data on employment, wages, commuting flows (ACS 2006–2010), bilateral trade (Commodity Flow Survey), and land area, recovering unobserved location fundamentals (productivity and amenities) that exactly rationalize the observed data as an equilibrium. Counterfactuals follow the Dekle-Eaton-Kortum (2007) approach using changes.

The empirical component uses quasi-experimental variation from million dollar plant (MDP) location decisions (following Greenstone, Hornbeck, and Moretti 2010), comparing winner and runner-up counties in site-selection competitions to test whether commuting openness shapes employment responses to labor demand shocks.

## Main Results

1. **Heterogeneous local employment elasticities.** The general equilibrium elasticity of employment to a 5 percent county-specific productivity shock varies from approximately 0.5 to 2.5 across US counties, with a mean of 1.52. The corresponding resident elasticity ranges from 0.2 to 1.2, with less dispersion.
2. **Commuting openness explains most of the variation.** The residence own commuting share alone yields an R² of 0.89 in explaining cross-county variation in employment elasticities (Table 2, column 5). Standard controls (log employment, wages, land area, neighbor characteristics) reach only 0.51 (column 4). Partial equilibrium commuting-linkage measures raise the R² to 0.93–0.95.
3. **MDP quasi-experimental results.** Winner counties show approximately 5.7 percent higher employment than runner-up counties after a MDP announcement (Table 3, column 1). The treatment effect is significantly larger in counties with more open commuting markets (negative coefficient on the commuting-share interaction, columns 2–8). This heterogeneity is robust to industry-year, census-region-year, and state-year fixed effects. Event-study estimates show no pre-trends.
4. **Welfare gains from commuting cost reductions.** Reducing commuting costs by the median observed change from 1990–2010 (12 percent) yields a welfare gain of 3.3 percent. Reductions at the 75th percentile imply a 6.9 percent gain (Table 5).
5. **Gravity estimates.** The distance elasticity for commuting flows (−4.43) is substantially larger than for goods trade (−1.29), confirming that moving people is costlier than moving goods across space.
6. **Housing supply interactions.** Introducing Saiz (2010) housing supply elasticities shifts the distribution of elasticities rightward but does not reduce the heterogeneity in employment elasticities, because commuting allows workers to access high-productivity locations without residing there.

## Mechanisms Identified

> **Paper claim** — Commuting is the primary channel through which local employment elasticities vary across locations. The ability of firms in a location to attract workers depends not only on attracting local residents through migration but also on attracting commuters from nearby locations, and this commuting channel generates systematic heterogeneity in employment responses to labor demand shocks.

The mechanism operates through the gravity structure of commuting: locations with lower residence own commuting shares (more open to commuting) can draw additional workers from a broader hinterland when a positive productivity shock occurs, without requiring proportional increases in local residents and the associated land-price adjustment. The paper formalizes this through partial equilibrium elasticities derived from the model that decompose the general equilibrium response into commuting, migration, and trade-linkage components.

Links: [[mechanism-commuting-labor-supply]]

## Methods and Measures

- **Quantitative spatial general equilibrium model** — Fréchet idiosyncratic amenities, CES monopolistic competition in goods, iceberg commuting and trade costs, inelastic/elastic land supply.
- **Exact-hat algebra** (Dekle, Eaton, and Kortum 2007) — counterfactuals solved using observed initial equilibrium shares without estimating unobserved fundamentals.
- **Gravity equation estimation** — trade cost elasticity (−1.29) estimated from CFS bilateral trade; commuting cost elasticity (−4.43) estimated from ACS county-to-county flows with workplace and residence fixed effects; Fréchet shape parameter (ε = 3.30) estimated in a second step instrumenting wages with productivity.
- **MDP event-study / difference-in-differences** — specification following Greenstone, Hornbeck, and Moretti (2010) with county, case, and year fixed effects, and interactions with commuting openness measures (residence own commuting share, workplace own commuting share, and their average/minimum).
- **Own commuting share** — primary measure: share of a county's residents who work in the same county (λ_{ii|i}^R). Available from Census data back to 1960.

Links: [[method-quantitative-spatial-equilibrium]], [[method-exact-hat-algebra]], [[method-difference-in-differences-MDP]]

## Concepts Engaged

- **Local employment elasticity** — the paper shows this is not a structural parameter but an endogenous variable shaped by spatial linkages.
- **Commuting openness** — a location's connectedness to surrounding labor markets through worker flows; distinct from migration and trade openness.
- **Spatial equilibrium** — workers sort across residence-workplace pairs based on wages, prices, amenities, and commuting costs; expected utility equalized across all bilateral commutes.
- **Gravity in commuting** — commuting flows follow a gravity equation with distance elasticity ≈ 4× that of goods trade.
- **Home market effect** — productivity shocks generate more-than-proportional employment responses in the model because of increasing returns and endogenous variety.

Links: [[concept-local-employment-elasticity]], [[concept-commuting-openness]], [[concept-spatial-equilibrium]]

## Connection to Debates

> **Paper claim** — The paper contributes to the debate on how local labor markets respond to economic shocks by showing that ignoring commuting linkages (as most reduced-form empirical work does) leads to substantial mismeasurement of treatment effects, and that commuting-zone boundaries do not fully eliminate these spillovers.

The paper speaks to the long-standing empirical literature on local labor demand shocks (Bartik shocks, trade shocks, natural resource booms, business cycle fluctuations) by demonstrating that spatial linkages in commuting are first-order for assessing local impacts. It also engages the debate on housing supply regulation and spatial misallocation (Hsieh and Moretti 2017): improvements in commuting technology are shown to be an alternative to relaxing housing supply constraints for enabling workers to access productive locations. Finally, it bridges the trade-and-geography literature (which typically models factor mobility across regions) and the urban economics literature (which models commuting within cities) into a unified framework.

Links: [[debate-local-labor-market-shocks]], [[debate-housing-supply-and-spatial-misallocation]]

## Theoretical / Empirical Significance

This paper is significant for three reasons. First, it provides a tractable unified framework integrating goods trade, migration, and commuting across an arbitrary set of locations — previously these forces were studied in separate literatures (trade/economic geography for goods and migration; urban economics for commuting). Second, it delivers a clear empirical finding with direct practical implications: the residence own commuting share (available from Census data since 1960) captures the vast majority of heterogeneity in local employment elasticities and can be included in reduced-form regressions as a control, without requiring the full structural model. Third, the welfare estimates suggest that changes in commuting costs — an understudied margin relative to trade costs — have economically large aggregate effects (3.3 percent welfare gain from the median 1990–2010 reduction), comparable to the gains from opening the US economy to international trade.

## Notes and Caveats

1. The model abstracts from non-tradable goods other than housing/land, which may lead to overestimation of welfare gains from commuting cost reductions.
2. Bilateral trade data between counties are not directly observed; trade shares are imputed using the model's gravity structure estimated from higher-level CFS data.
3. The MDP analysis covers 82 plants from 1972–2003; the sample is limited to large manufacturing plants, and findings may not generalize to smaller or non-manufacturing labor demand shocks.
4. The model assumes a single worker type; heterogeneity in skills and occupational choice is not modeled.
5. Commuting costs are treated as exogenous iceberg costs in utility space rather than modeled as time costs or congestion, abstracting from the micro-foundations of transportation.
6. The welfare analysis assumes no change in the aggregate supply of land and does not incorporate general equilibrium effects from national land ownership.
