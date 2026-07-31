---
title: "公共支出区域均等化政策效果的定量评估——基于量化空间一般均衡模型的分析"
type: source
authors: [周慧珺, 龚六堂]
year: 2024
slug: zhou-gong-2024-public-expenditure-equalization
tags: [quantitative-spatial-equilibrium, fiscal-expenditure, regional-equalization, population-mobility, welfare, misallocation, China, public-economics]
raw_markdown: "[[raw_markdown/papers/zhou-gong-2024-public-expenditure-equalization]]"
status: canonical
---

# 公共支出区域均等化政策效果的定量评估 (2024)

> **Paper claim** — Using a quantitative spatial general equilibrium (QSE) model with population mobility and heterogeneous resident preferences, equalizing per-capita *productive* fiscal expenditure across regions raises both aggregate output (+1.505%) and welfare (+1.555%), whereas fully equalizing *social-security* expenditure yields a larger welfare gain (+2.693%) at the cost of a small output decline (−0.625%).

Raw markdown: [[raw_markdown/papers/zhou-gong-2024-public-expenditure-equalization]]

## Research Question

Does the regional equalization (区域均等化) of public fiscal expenditure improve overall economic output and resident welfare, and by how much quantitatively? Because fiscal expenditure spans distinct categories (社会保障, 交通运输, etc.) whose channels and magnitudes differ, which type of expenditure yields more effective results, and how should the two types be optimally allocated? The paper motivates this by China's persistent regional imbalance (e.g., Beijing per-capita GDP ~200,000 yuan vs. 40,000–50,000 in some underdeveloped regions, a >4× gap). It notes that raising underdeveloped-region spending via transfer payments may, given the central government's limited total resources, slow developed-region growth and reduce aggregate output/welfare — an efficiency-vs-welfare tension the paper aims to quantify.

## Model / Experimental Design

A **quantitative spatial general equilibrium model** built on Desmet & Rossi-Hansberg (2013), Tombe & Zhu (2019), and Blouri & Ehrlich (2020), extended to include government land revenue and region-heterogeneous fiscal expenditure.

- **Setup:** Q regions, N̄ total workers. Each worker has idiosyncratic location preference φ_i(l) drawn from an i.i.d. Fréchet distribution with shape parameter κ (migration elasticity, calibrated to 1.462), and freely chooses residence based on preference plus objective conditions.
- **Residents:** Utility depends on location preference, government-provided welfare g_i, and consumption of non-housing (c^M) and housing (c^H) goods (Cobb-Douglas inner nest with θ_M=0.8, θ_H=0.2, θ_W=0.1). Government welfare g_i = G_i^S / N_i^{χ_W}, where G_i^S is social-security expenditure and χ_W (set to 1, i.e. rival/congestible public good) governs the congestion elasticity of public-good provision.
- **Firms:** Each region has a housing firm (H; capital, labor, residential land) producing non-tradable housing, and a non-housing firm (M; capital, labor, industrial land, intermediates) producing tradable goods. Both Cobb-Douglas. Non-housing TFP A_i^M = Ā_i^M (G_i^M)^{μ_M} — productive expenditure G_i^M raises TFP with elasticity μ_M (set to 0.006). Tradable goods combined via CES with substitution elasticity σ=4.
- **Government:** A central government reallocates expenditure across regions; revenue from taxes (VAT, corporate and personal income tax) plus land-transfer income (residential and industrial). Expenditure split into productive (G_i^M) and social-security (G_i^S). Mimics a two-tier central–local structure where the center uses transfers to equalize.
- **Equilibrium:** Prices, quantities, and regional populations clear labor, housing, product, and capital markets under resident utility maximization and firm profit maximization.
- **Calibration:** Factor shares — housing 0.3/0.4/0.3 (capital/labor/land); non-housing 0.2/0.2/0.02 with intermediate share 0.58. Counterfactual simulations hold total fiscal expenditure fixed (except in the "further discussion" extensions).

## Main Results

**Baseline per-capita equalization (total expenditure held fixed), Table 1:**

| Outcome | Productive expenditure | Social-security expenditure |
|---|---|---|
| Aggregate output | **+1.505%** | **−0.625%** |
| Resident welfare | **+1.555%** | **+2.693%** |
| GINI | −0.990% | −2.469% |
| Theil index | −2.051% | −5.349% |
| HHI | −2.948% | −8.650% |

- Both expenditure types' equalization reduce regional welfare inequality (measured by GINI, Theil, and HHI following Shorrocks 1980); social-security equalization is the **more efficient** inequality-reducer despite a smaller overall adjustment magnitude, and the improvement is largest for middle-welfare regions.
- Productive-expenditure equalization improves both output and welfare (misallocation-removal dominates); its weakness is over-penalizing megacities due to its highly polarized initial distribution and "one-size-fits-all" equalization.
- Social-security equalization directly raises resident utility but pulls labor from high-wage/high-productivity developed regions to higher-welfare/lower-productivity regions, worsening production distortion → output falls.

**Degree of equalization (Section 5.2):**
- As productive-expenditure equalization increases, output improvement **first rises then falls**, peaking at an actual equalization degree ψ ≈ **82%**; welfare improvement rises monotonically.
- As social-security equalization increases, output decline and welfare improvement both grow monotonically. A purely output-focused government should make **no** adjustment to social-security expenditure.
- Two equalization metrics used: a theory-based index (coefficient s_N^ϑ from optimal-expenditure eq. 13) and an "actual" degree ψ where adjusted expenditure = ψ·(national per-capita) + (1−ψ)·(pre-adjustment). ψ ranges 0–100%, giving fuller coverage than the s_N^ϑ index.

**Government objective weight φ (Figure 4):** Central objective U_g weights aggregate GDP by φ. For social-security expenditure, higher welfare weight → prefer full equality; higher output weight → maintain high big-city spending. Productive-expenditure policy is relatively **insensitive** to φ and strongly favors full inter-regional equalization regardless.

**Extensions (further discussion):**
- *New spending (not budget-neutral), Table 2:* An added 1 trillion yuan of productive expenditure raises output +2.074% and welfare +1.163% (even without equalization); the same in social-security expenditure raises welfare +7.691% with **zero** output change (uniform increase → no relative-attractiveness shift → no migration). 500 billion: +1.108%/+0.621% (productive), 0%/+4.264% (social-security). 10% increase: +0.716%/+0.402% and 0%/+1.669%.
- *Selective subsidy to weak regions, Table 3:* subsidize only below-average regions up to the mean. Productive: output +3.467%, welfare +2.263%. Social-security: output −0.201%, welfare +4.896%. Selective subsidy delivers **stronger** output and welfare gains (but weaker inequality improvement) than full equalization.
- *Government-managed funds earmarked (Table 4):* keeping land-transfer-financed fund spending un-equalized. Productive: output +1.594%, welfare +1.519%. Social-security: −0.624% / +2.693%. Qualitatively unchanged.
- *Perception/experience-based equalization (Table 5):* adjust by ratio of local to mean welfare (power function, exponent −1), only topping up below-mean regions. Productive: +1.584% / +1.007%. Social-security: −0.115% / +4.247%.

**Robustness:** Conclusions qualitatively unchanged across σ ∈ {3, 3.5, 4.5, 5}, κ ∈ {1.53, 1.5}, and χ_W ∈ {0.5, 1.5}.

## Mechanisms Identified

> **Paper claim** — Equalization has two opposing forces: (1) reducing inter-regional differences lowers factor misallocation, reducing distortion and raising output/welfare; (2) because each 1% cut in high-spending regions hurts more than each 1% rise in low-spending regions helps (declining marginal effect + higher base in developed regions), the loss from de-funding developed regions is the main drag on output.

- **Channel separation:** Social-security expenditure operates through the **labor-supply** side (raising local welfare g_i → higher indirect utility → in-migration → labor supply up, equilibrium wage down); productive expenditure operates through the **labor-demand** side (raising TFP A_i^M → higher marginal product → wages and labor up).
- **Direct vs. spillover effects:** In the spatial equilibrium, any region's expenditure change spills to all others through labor, capital, and goods-market flows; wage/labor elasticities decompose into a region-invariant direct effect and a population-share-weighted indirect (spillover) effect (eqs. 9–12).
- Marginal output effect scales with a region's GDP share; marginal welfare effect scales with population share — output depends on the tradable (non-housing) sector, welfare more on the housing sector and living costs.

Links: population mobility, spatial misallocation

## Methods and Measures

- Quantitative spatial general equilibrium (QSE) modeling with counterfactual simulation / calibration.
- Inequality measures: GINI (weights low-welfare regions), Theil index (weights high-welfare regions), and HHI — generalized entropy with parameter 2, following Shorrocks (1980), weighting middle-welfare regions.
- Data: 《中国统计年鉴》, input-output tables, 1% population sampling data.

Links: [[quantitative-spatial-equilibrium]]

## Concepts Engaged

- Regional equalization of fiscal expenditure (公共支出区域均等化); productive vs. social-security expenditure.
- Population mobility / factor allocation (人口流动、要素配置).
- Spatial misallocation and its removal.
- Efficiency-vs-welfare (output-vs-welfare) tradeoff and government objective weighting.

Links: population mobility, spatial misallocation

## Connection to Debates

> **Paper claim** — Contra a naive view that redistributive equalization must sacrifice aggregate output, productive-expenditure equalization can raise output and welfare simultaneously; the genuine tradeoff arises only for social-security expenditure, and even there both types can be run independently and combined per government preference.

- Extends the misallocation/QSE literature (Hsieh & Klenow 2009; Fajgelbaum et al. 2019; Tombe & Zhu 2019) from studying misallocation per se toward evaluating an actual fiscal policy.
- Closest antecedent: 周慧珺等 (2022) analyzed single-region expenditure channels and direct/spillover decomposition but did not introduce equalization policy — this paper adds it.

## Theoretical / Empirical Significance

Three stated contributions: (1) introduces China-specific institutions/policy into a QSE model, delivering the elasticity and mechanism of fiscal-expenditure allocation on regional and aggregate economy; (2) simulates equalization's role in the multi-goal problem of steady growth, higher living standards, and reduced income inequality, and how it varies with equalization degree; (3) distinguishes how different expenditure types differ in economic impact, providing theoretical grounding for broader/sustained policy. Policy implications: strengthen basic public-service equalization; follow place-based ("因地制宜") principles matching regions' main-function positioning rather than blind full equalization (which can cause output loss past ~82% for productive spending); allocate expenditure types by policy goal.

## Notes and Caveats

- Purely theoretical/simulation-based; no reduced-form causal identification.
- Simplifications acknowledged by the authors: no region-heterogeneous industrial structure and no high-/low-skill labor preference heterogeneity across regions; hence no industrial-upgrading spillovers and no heterogeneous population responses to policy — flagged as future work.
- Total fiscal expenditure held fixed in the baseline (relaxed only in extensions); land-transfer income treated as ordinary fiscal revenue in the baseline (relaxed in the earmarked-fund extension).
- Eq. (13) for optimal per-capita expenditure is not an explicit solution (GDP share and population share are endogenous to per-capita expenditure); it only guides the numerical simulation direction.
- The relative adjustment magnitudes of the two expenditure types differ (productive's overall adjustment is larger), so the raw output/welfare percentage differences cannot be directly read as one type being "more effective."
