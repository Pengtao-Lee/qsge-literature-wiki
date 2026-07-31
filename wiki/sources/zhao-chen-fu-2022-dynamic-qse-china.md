---
title: "Theoretical Advances and Chinese Applications of Dynamic Quantitative Spatial Equilibrium Models"
type: source
authors: [Zhao Fuyang, Chen Binkai, Fu Chunyang]
year: 2022
slug: zhao-chen-fu-2022-dynamic-qse-china
tags: [quantitative-spatial-equilibrium, dynamic-model, china-economy, survey-review, new-development-pattern]
raw_markdown: "raw_markdown/papers/zhao-chen-fu-2022-dynamic-qse-china.md"
status: reviewed
---

# Theoretical Advances and Chinese Applications of Dynamic Quantitative Spatial Equilibrium Models (2022)

> **Survey claim** — This paper provides the first comprehensive review of dynamic quantitative spatial equilibrium (DQSE) models in either Chinese or English, systematising the theoretical framework across labour, capital, and firm dynamics, identifying the curse of dimensionality as the central technical barrier, and demonstrating through a Chinese macroeconomic application that introducing spatial population migration dramatically slows convergence and challenges steady-state-based macroeconomic analysis.

Raw markdown: [[raw_markdown/papers/zhao-chen-fu-2022-dynamic-qse-china]]

## Scope and Purpose of the Review

What gap does this survey address? While existing reviews (Redding and Rossi-Hansberg, 2017; Proost and Thisse, 2019; Ju and Chen, 2020) cover static quantitative spatial models, no prior work in either Chinese or English has systematically reviewed the **dynamic** extension. The authors argue that the dynamic turn is necessary for three reasons: (1) fields such as macroeconomics and financial economics inherently require intertemporal decision frameworks; (2) objects like real estate and intergenerational education migration have natural intertemporal attributes; (3) slow-evolving processes (infrastructure, environmental change) produce divergent short- and long-run effects that only dynamic models can separate.

## Theoretical Framework Systematised

The paper organises the DQSE literature into three dynamic modules within a unified notation system:

**Labour dynamics.** Four canonical approaches to dynamic migration are presented: (a) infinite-horizon migration with Frechet-distributed idiosyncratic preferences (Artuç et al., 2010; Caliendo et al., 2019), where workers choose consumption in-period and relocate at period-end; (b) multiplicatively separable migration costs (Desmet et al., 2018), which collapses the infinite-horizon problem into repeated static decisions; (c) two-period overlapping-generations frameworks with migration at youth (Eckert and Peters, 2018; Eckert and Kleineberg, 2021); (d) employment dynamics including search-and-matching frictions (Bilal, 2021) and labour-force participation choices.

**Capital dynamics.** Three investment structures are distinguished: (a) a central planner accumulating capital across all regions (Eaton et al., 2016); (b) immobile region-specific investors accumulating local capital (Walsh, 2019; Caliendo and Parro, 2020); (c) two-period OLG with a single savings decision (Eckert and Peters, 2018). The interaction of migration and savings generates a "historical path dependence of wealth distribution" that can explode the state space.

**Firm dynamics.** Five dimensions are covered: entry and exit, migration and relocation, R&D investment, technology diffusion (distance-dependent across regions and network-dependent across firms), and production-network linkages.

### Key Technical Challenge: The Curse of Dimensionality

The paper identifies the interaction of spatial and temporal dimensions as the central technical obstacle. When agents simultaneously make migration and savings decisions, the state space expands explosively: in a model with N regions and T periods, heterogeneous types grow as N^T, what the paper terms a "dimensionality poison curse." Three coping strategies in the literature are catalogued: (i) direct dimensionality reduction (exogenising capital or assuming free labour mobility); (ii) segregating investment from migration decisions (region-specific non-migrating investors); (iii) breaking the feedback loop between current actions and future states through clever modelling shortcuts (multiplicatively separable migration costs, R&D setups that collapse to static problems).

## Application to China's Macroeconomy

The paper implements an illustrative DQSE model for China combining infinite-horizon labour migration (following Artuç et al., 2010, and Caliendo et al., 2019), region-specific capital investors (following Walsh, 2019), and Eaton-Kortum interregional trade. The model is calibrated to Chinese provincial data using five-year-frequency census migration matrices, interprovincial input-output tables (Li Shantong team), provincial capital stocks, and estimated migration elasticities (instrumental-variable estimation following Tombe and Zhu, 2019).

### Key Findings from the Application

1. **Slow convergence.** With spatial migration, the half-life of GDP convergence exceeds 30 years, several times longer than the canonical neoclassical prediction (~5 years). The interaction of population-distribution convergence and capital-stock convergence mutually slows the system.

2. **Non-monotonic dynamics.** Contrary to neoclassical steady-state analysis, some provinces' GDP paths are non-monotonic (rising then falling) as population first inflows then outflows, demonstrating that steady-state relationships may not hold along the transition path.

3. **Population, not capital, determines long-run structure.** Ultimately, it is population distribution — not capital accumulation — that drives the spatial pattern of economic activity. Capital follows population in the long run.

4. **Agglomeration yields per-capita convergence despite total-output divergence.** Provincial GDP totals diverge (coefficient of variation rises) as population concentrates, but per-capita GDP converges because labour moves toward higher-productivity regions, raising marginal products in source regions.

5. **Policy simulation of migration-cost reductions.** Reducing migration costs for eastern provinces (encouraging inflow) raises steady-state GDP by ~2.5%, while reducing out-migration costs from central/western provinces has modest or negative long-run effects, underscoring the efficiency gains from directing population toward high-productivity regions.

## Methods and Measures

Key methodological elements include:
- Dynamic hat-algebra ("dynamic exact change") algorithm for solving the high-dimensional equilibrium system
- Frechet-distributed idiosyncratic location preferences (migration elasticity parameter 1/ρ)
- Eaton-Kortum trade structure with constant trade elasticity θ = 4
- Cobb-Douglas production with labour share ≈ 0.5
- Five-period frequency calibration to match Chinese census data cycles

Links: [[quantitative-spatial-equilibrium]], dynamic hat algebra

## Concepts Engaged

Links: dynamic quantitative spatial equilibrium, curse of dimensionality, new development pattern, population migration, regional convergence

## Connection to Debates

> **Survey contribution** — The paper intervenes in the debate over whether steady-state analysis suffices for Chinese macroeconomic research. By showing that migration slows convergence so drastically that the steady state may be empirically irrelevant, it argues for dynamic transition-path analysis as the appropriate method for studying a large, spatially fragmented developing economy undergoing structural transformation.

Links: steady-state vs. transition dynamics, population dividend vs. investment

## Significance for the Literature

This survey matters for several reasons. First, it fills an acknowledged gap: no prior review had systematically covered the dynamic turn in quantitative spatial economics, a rapidly growing literature at the intersection of trade, geography, and macroeconomics. Second, by unifying diverse dynamic modelling approaches under a common notation, it provides an accessible entry point for Chinese researchers. Third, the illustrative application generates substantive findings — the slow-convergence result, the primacy of population over capital — that carry direct policy implications for China's "new development pattern" and unified national market strategy. Fourth, it maps out four high-priority Chinese application areas (unified national market, spatial macroeconomic problems, housing price divergence, carbon-peak/neutrality policy) that are likely to shape the next wave of DQSE research.

## Notes and Caveats

As a survey, the paper's novel contribution is its own illustrative application, which deliberately abstracts from several real-world complexities: no firm dynamics (entry, exit, R&D, technology diffusion), no input-output structure, no intermediate goods, no monopolistic competition (all firms are perfectly competitive), and no non-tradable sector. The model is calibrated at a five-year frequency using data up to 2010, which may not capture more recent structural changes in the Chinese economy. The paper acknowledges that the numerical simulation is "more qualitative than quantitative" and that computational constraints and data limitations remain binding for many potential extensions. Several cited references appear as unpublished manuscripts or working papers, reflecting the fast-moving nature of the field.
