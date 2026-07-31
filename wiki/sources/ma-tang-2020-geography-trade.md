---
title: "Geography, Trade, and Internal Migration in China"
type: source
authors: ["Ma, Lin", "Tang, Yang"]
year: 2020
slug: ma-tang-2020-geography-trade
tags: [migration, trade, economic-geography, hukou, firm-entry, welfare, china]
raw_markdown: "raw_markdown/papers/ma-tang-2020-geography-trade.md"
status: canonical
---

# Geography, Trade, and Internal Migration in China (2020)

> **Paper claim** — Inflows of migrant workers increase welfare in destination Chinese cities despite congestion and wage-depression effects, because endogenous firm entry expands varieties and lowers prices; the positive impacts spill over to neighboring cities through inter-city trade.

Raw markdown: [[raw_markdown/papers/ma-tang-2020-geography-trade]]

## Research Question

Do residents in destination Chinese cities benefit from the massive internal migration of the post-Mao era, or do the negative effects of congestion, wage depression, and competition for jobs dominate? If the local impacts are positive, through what mechanisms do migrants benefit their destination cities? How do geography and trade networks shape these welfare effects?

## Model / Experimental Design

The paper develops a **multi-city general equilibrium trade model** with three key building blocks:

- **Production:** A Melitz (2003) framework with heterogeneous firms, monopolistic competition, and endogenous firm entry/exit in both a tradable and a non-tradable sector in each city. Firms draw productivity from a Pareto distribution; only sufficiently productive firms survive and serve each market.
- **Trade:** Inter-city trade is subject to iceberg costs and fixed exporting costs. Geographic trade costs are estimated from the actual Chinese transportation network (road, railway, and waterway) using a discrete-choice framework following Allen and Arkolakis (2014), with distances computed via the Fast Marching Method on high-resolution raster maps.
- **Migration:** Individuals choose locations based on real wages, congestion disutility (parameterised as $C(L_j) = \rho (L_j / \bar{L})^\phi$), origin-destination-specific migration barriers, and idiosyncratic Gumbel-distributed preference shocks. The migration decision yields a gravity equation for bilateral flows.

**Estimation:** The model is quantified to 279 prefecture-level Chinese cities plus the rest of the world. Geographic costs are estimated first from transportation infrastructure data; the remaining 12 structural parameters (trade costs, migration frictions, congestion elasticities, city-specific barriers, relative TFP) are jointly estimated via Simulated Methods of Moments (SMM) using a novel iterative Particle Swarm Optimization (PSO) algorithm. Moments target the bilateral migration matrix (2000–2005), the firm count distribution, internal trade share, and international trade openness. Standard errors are bootstrapped (100 repetitions).

**Counter-factual strategy:** To isolate the local impacts of migration, the authors compare the 2005 benchmark equilibrium to a counter-factual that reverts the population distribution to its 2000 levels by raising migration frictions. They also simulate the removal of city-specific Hukou barriers and reductions in internal/international trade frictions.

## Main Results

1. **Positive local impacts in all destination cities.** Between 2000 and 2005, 40 out of 279 cities received net population inflow (average 9.3% growth). In these cities, real wages rose by 4.7% and welfare (net of congestion) by 4.0%. Congestion disutility offset approximately 15% of the real wage gain.

2. **Firm entry is the key mechanism.** Absent endogenous firm entry (fixing the number of firms), the local impacts of migration turn negative: 46 of 55 inflow cities experience lower real wages and 47 experience lower welfare. This replicates the finding of Tombe and Zhu (2019), whose Eaton-Kortum framework lacks an extensive margin.

3. **Neighboring cities benefit most.** The top welfare beneficiaries are not Beijing or Shanghai but their neighboring cities (Tianjin, Suzhou, Hangzhou, Foshan), which receive productivity spillovers through trade without suffering the surge in congestion.

4. **City-specific Hukou barriers are costly.** Shanghai's migration barrier is 24% above the national average, followed by Guangzhou (13%) and Beijing (8%). Removing these additional barriers raises national welfare by 0.7–3.9%. Local welfare improves in Beijing (+9.7%) and Guangzhou (+18.6%) but falls in Shanghai (−8.3%) due to extreme congestion.

5. **Largest cities are underpopulated.** The population that maximises welfare in Beijing (18.1M) and at the national level (21M) substantially exceeds the 2005 level (12.6M), confirming Au and Henderson (2006).

6. **Migration amplifies gains from international trade by ~55%.** A 10% reduction in international trade barriers raises aggregate income by 12.7% with migration versus 8.2% without. Migration dampens wage pressures in coastal export-oriented cities, enabling further firm growth. Without both migration and firm entry, gains from trade fall to 5.5%.

7. **Internal trade and migration are weak substitutes.** Internal trade liberalisation benefits smaller cities disproportionately, reducing the need to migrate; conversely, migration reduces the need for inter-city trade.

## Mechanisms Identified

> **Paper claim** — The extensive margin of firm entry (expansion of varieties in destination cities) is the causal channel through which immigration raises local welfare. Population inflows simultaneously lower nominal wages and expand local demand; these forces raise expected profits, induce firm entry, and lower the ideal price index through a "love of variety" effect. This mechanism dominates the negative channels of congestion and wage compression.

A secondary mechanism is **trade-mediated spillovers**: productivity gains in "superstar" cities propagate to neighbouring cities through reduced prices for tradable goods, benefiting those spared from congestion.

Links: firm entry and variety expansion, trade spillovers

## Methods and Measures

- **Fast Marching Method (FMM)** on rasterised transportation maps to estimate mode-specific distances (road, rail, waterway) between all city pairs.
- **Discrete-choice transportation framework** (Allen and Arkolakis 2014) to estimate the geographic trade cost matrix $T(i,j)$ from mode-specific distance and trade-volume shares.
- **Simulated Methods of Moments (SMM)** with a novel **iterative Particle Swarm Optimisation (PSO)** algorithm for joint estimation of 12 structural parameters.
- **Model-based instrumental variables** (following Allen et al. 2014): simulated inflow rates from a parameter perturbation serve as instruments for actual inflow rates in reduced-form regressions on per-capita GDP and firm counts.
- **Bootstrap inference** (100 repetitions) for standard errors on all estimated parameters.
- **Counter-factual comparative statics** between two spatial equilibria (2000 vs. 2005 population distributions) to isolate migration impacts.

Links: fast-marching method, particle swarm optimization, simulated methods of moments

## Concepts Engaged

- **Hukou system** — the household registration system that imposes city-specific migration barriers, modelled as origin-destination-specific utility costs $\lambda_{ij}$ with city-specific augmentations $\delta_i$.
- **Congestion disutility** — additive utility cost increasing in city population, parameterised as $C(L_j) = \rho (L_j/\bar{L})^\phi$.
- **Love of variety** — CES utility over a continuum of differentiated varieties; the price index falls as more firms enter, which is the core channel through which immigration raises local welfare.
- **Spatial equilibrium** — workers sort across cities until no one can gain by moving, balancing real wages, congestion, migration frictions, and idiosyncratic preferences.
- **Trade-migration substitutability/complementarity** — internal trade and migration are substitutes (both move goods/people across space), but migration and international trade are complements (migration amplifies gains from trade liberalisation).

Links: [[economics-of-the-hukou-system]], congestion disutility, love of variety, [[quantitative-spatial-equilibrium]]

## Connection to Debates

> **Paper claim** — The paper directly enters the debate on whether immigration benefits destination regions. Against findings from Eaton-Kortum-type frameworks (Tombe and Zhu 2019) where destination regions suffer from immigration, this paper shows that incorporating the extensive margin of firm entry reverses the sign: all destination cities benefit. This reframes the policy debate on Hukou reform: further liberalisation is welfare-improving not only nationally but also locally in most large cities.

The paper also contributes to the debate on the gains from trade by showing that spatial factor reallocation is a quantitatively dominant channel — overlooked by standard quantitative trade models — amplifying gains by 55%.

Links: immigration and local welfare, gains from trade with migration

## Theoretical / Empirical Significance

This paper makes three distinct contributions to the literature on trade, migration, and economic geography. First, it establishes that endogenous firm entry is quantitatively decisive for the local welfare effects of migration — a mechanism present in Melitz-type models but absent in the Eaton-Kortum frameworks used by prior work on China's internal migration (Tombe and Zhu 2019; Fan 2015). Second, it is the first to incorporate China's detailed transportation networks (road, rail, waterway) into a structural model of internal migration, revealing that the geographic placement of infrastructure determines which cities capture the spillover benefits. Third, it demonstrates that internal migration amplifies gains from international trade by a wide margin through spatial labour reallocation, a channel missed by standard trade models that assume immobile labour. The iterative PSO algorithm is a methodological contribution for estimating computationally heavy general-equilibrium models.

## Notes and Caveats

- **Remittances omitted.** The model does not include remittances from migrants to their origin cities due to data limitations, likely causing the negative welfare estimates for origin cities to be overstated.
- **No agricultural sector.** The model abstracts from the rural-urban margin and the agricultural sector, which may affect welfare calculations for migrant-sending regions.
- **Housing market absent.** The model captures congestion disutility as a reduced-form utility cost but does not model the housing market explicitly, where rising housing prices are a major channel of migration impacts in practice.
- **Static model.** Despite heavy computation, the model is static and does not capture the dynamic adjustment path of migration, firm entry, or capital accumulation.
- **Air transportation omitted.** Passenger air travel (less than 0.8% of traffic 2000–2005) is excluded; this is unlikely to affect results but may become more relevant for later periods.
- **External validity.** The results are specific to China's 2000–2005 period and institutional context (Hukou system, state-guided urbanisation). Application to other countries or time periods would require re-estimation.
