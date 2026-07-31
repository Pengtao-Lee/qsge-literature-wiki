---
title: "Spatial Structural Change"
type: source
authors:
  - "Fabian Eckert"
  - "Michael Peters"
year: 2022
slug: eckert-peters-2022-spatial-structural-change
tags:
  - structural-change
  - spatial-economics
  - economic-growth
  - technology-diffusion
  - regional-development
  - quantitative-spatial-model
  - non-homothetic-preferences
  - economic-history
  - us-industrialization
raw_markdown: "[[raw_markdown/papers/eckert-peters-2022-spatial-structural-change]]"
status: canonical
---

# Spatial Structural Change (2022)

> **Paper claim** — A quantitative theory in which growth, sectoral reallocation, and regional development are jointly determined shows that sectoral reallocation inherently disadvantages regions specialized in the declining sector, yet spatial forces — especially technology diffusion — can offset or reverse this bias, and did so during the first US structural transformation (1880–1920).

Raw markdown: [[raw_markdown/papers/eckert-peters-2022-spatial-structural-change]]

NBER Working Paper No. 30489, September 2022 (revised July 2025); JEL O1, R11. Fabian Eckert (UC San Diego), Michael Peters (Yale University and NBER).

## Research Question

Why does aggregate structural change — the shift of labor out of agriculture — produce the regional winners and losers it does? Standard macro models of structural change abstract from geography and so are silent on spatial outcomes; a naive Bartik-type intuition predicts that farm-intensive regions, being most exposed to the contracting sector, should suffer wage declines and out-migration. Yet between 1880 and 1920 the opposite happened: wages rose *fastest* in the most agricultural US regions, and 80% of the 25-point fall in the agricultural employment share occurred *within* regions rather than through rural-to-urban migration. The paper asks what spatial forces reconcile aggregate sectoral reallocation with observed rural-biased wage convergence.

## Model / Experimental Design

A dynamic quantitative spatial general-equilibrium model of growth. Structure:

- **Geography and sectors.** R discrete locations (regions), two sectors — agriculture (A) and manufacturing/non-agriculture (M). Regions differ in sectoral productivities, amenities, and fixed agricultural land endowments $\bar{T}_r$; linked by iceberg trade costs $\tau_{rjt}$, migration frictions, and technology diffusion.
- **Agriculture.** Perfectly competitive; self-employed farmers rent land, hold idiosyncratic Frechet ability $z_A^i$, and split unit time between production and technology adoption. Constant optimal adoption-time share $t_A = \gamma/(\gamma+1-\alpha)$, so all farmers in a region adopt the same technology $A_{rt}$. Decreasing returns to land (share $\alpha$).
- **Manufacturing.** Monopolistic competition with free entry; firms choose technology $Z_{rt}$ at adoption cost governed by $\psi_{rt}$; free entry pins net profits to entry cost.
- **Technology diffusion / catch-up.** Adoption costs depend on lagged own productivity and a distance-weighted aggregate of other regions' lagged productivity ($\mathcal{F}$). Catch-up parameters $\lambda_A, \lambda_M$ govern ease of adopting external technology; baseline sets the diffusion frontier to $\mathcal{F}_{rAt}=\max_j\{A_{j,t-1}\}$. When $\lambda_s>0$, lagging regions grow faster ("benefit of backwardness"); when $\lambda_s=0$, productivity growth is spatially uniform and the productivity distribution is stationary.
- **Preferences.** Non-homothetic PIGL preferences (following Boppart 2014); agricultural expenditure share falls with real income, asymptoting to $\phi$; Engel elasticity $\eta$ governs income effects. CES aggregation across varieties within each sector.
- **Labor supply.** Roy-type sectoral choice with sector-specific Frechet abilities (shape $\zeta$); Frechet location-preference shocks (shape $\varepsilon$) with migration frictions $\mu_{jr}$, congestible amenities $B_{rt}=B_{rt}L_{rt}^{-\rho}$, and an exogenous employment-growth shifter $n_{jt-1}$ (following Cruz and Rossi-Hansberg 2024) absorbing immigration/fertility.
- **Equilibrium.** Given initial $\{L_{r0},A_{r0},Z_{r0}\}$, a sequence of prices, allocations, and technologies satisfying optimization, free entry, market clearing, and the productivity laws of motion (Propositions 1–2). PIGL + Frechet yields closed-form representative-agent aggregate demand and welfare.

## Main Results

**Analytical (the inherent urban bias).** Proposition 3 shows local income and agricultural employment share are fully determined by two sectoral revenue-productivity shifters ($\mathcal{Z}_{rt}, \mathcal{A}_{rt}$). Proposition 4 decomposes local wage growth and industrialization into shock incidence times exposure elasticities $\phi(s_{rAt})$ and $\psi(s_{rAt})$; agricultural specialization $s_{rAt}$ is a sufficient statistic for exposure. Key implication: if productivity growth is spatially balanced and trade is free, a falling aggregate agricultural share *necessarily* produces urban-biased wage growth. Rural-biased growth requires spatially uneven revenue-productivity growth tilted toward farm regions — via catch-up growth, rural-favoring market-access gains, or rural population decline that eases decreasing returns to land.

**Motivating facts (US 1880–1920).** GDP per capita doubled (~2% annual growth); agricultural employment share fell from 50% to 25% (a ~22–25 point decline). Industrialization was fastest at intermediate initial specialization (U-shaped): a region with 60% farm employment in 1880 saw a 22-point decline over 40 years. Contrary to Bartik logic, the most agricultural regions grew 1.5–2 percentage points faster in wages per year; the cross-CZ standard deviation of log wages fell from 0.41 to 0.22.

**Calibration fit.** Estimated on a balanced panel of 495 commuting zones. The model exactly matches three time-series targets — a 22-point (21.38) farm-share decline, 2% annual GDP-per-capita growth, and a 9-point (−8.95) drop in the farm relative price — and the two rural-convergence regression coefficients ($\beta_w=0.27$, $\beta_{sA}=-0.49$). The untargeted quadratic industrialization coefficient ($\gamma_{sA}=0.42$ model vs. 0.45 data) is closely matched. Estimated catch-up parameters: $\lambda_A=0.73$, $\lambda_M=0.28$. Rural labor markets experienced a productivity growth premium of roughly 3 percentage points, slightly larger in agriculture.

**Quantitative decomposition (Proposition 4).** Spatial differences in productivity growth account for the bulk of rural wage convergence and industrialization; demand shifts and population growth are secondary. Agricultural TFP catch-up alone would have raised rural wages by nearly 2% annually and accounts for rural wage convergence; manufacturing catch-up drives rural industrialization (agricultural catch-up alone would *slow* industrialization by reinforcing farm comparative advantage).

**No-catch-up counterfactual (Table 2).** Re-calibrating with $\lambda_A=\lambda_M=0$ (raising aggregate frontier growth to $g_A=0.29$, $g_M=0.30$) still matches aggregate growth and prices and yields a 17.5-point farm-share decline, but spatial predictions invert: urban wage growth ~0.5 pp/year faster than rural, $\beta_w$ reverses sign, rural industrialization collapses (a 60%-farm region's decline falls from 25 points to under 10), and the "within-region" share of the aggregate farm-share decline falls from ~80% to ~50% as labor reallocates spatially toward cities. Conclusion: without catch-up, initially agricultural regions would not merely have stagnated — they would have fallen further behind.

## Mechanisms Identified

> **Paper claim** — Aggregate structural change is inherently urban-biased (Bartik-like exposure), but spatial productivity catch-up through technology diffusion counteracts and can reverse this bias; catch-up in agriculture drives rural wage convergence while catch-up in manufacturing drives rural industrialization.

- **Bartik-like exposure channel** — sectoral specialization determines exposure; falling aggregate farm share mechanically disadvantages farm-specialized regions.
- **Productivity catch-up / benefit of backwardness** — diffusion from the frontier lets initially low-productivity (agricultural, land-abundant) regions grow faster in both sectors.
- **Incidence vs. exposure interaction** — a force matters for a region only when both the shock incidence and the region's exposure elasticity are high.
- **Non-homothetic demand** — falling agricultural expenditure share as income rises shifts market access toward manufacturing, an engine of aggregate structural change.

## Methods and Measures

- **Quantitative spatial general-equilibrium calibration** with model inversion: invert 1880 static equilibrium conditions to recover region-specific fundamentals ($A_{r1880}, Z_{r1880}, B_{r1880}, T_{r1880}$); finds agricultural regions lagged in *both* sectors, their farm comparative advantage stemming from land abundance, not high farm productivity.
- **Indirect inference** to estimate catch-up parameters $\lambda_A, \lambda_M$ and amenity-bias $\xi$, targeting rural-convergence regressions of wage growth and industrialization (and population growth) on initial farm share.
- **Out-of-model structural estimation**: $\zeta=1.6$ from within-CZ farm-size (acreage) distributions; migration gravity ($\varpi\varepsilon=2.8$) from linked-census bilateral flows.
- **Robustness / validation**: flexible model inversion for 1880/1900/1920 confirms rural-biased productivity growth is not a functional-form artifact; a Mincerian human-capital extension shows education cannot explain rural catch-up (near-zero agricultural returns to schooling); direct agricultural yields (output per acre) corroborate rural yield catch-up.
- **Parameters set from literature**: $\sigma_A=\sigma_M=8.22$ (Donaldson and Hornbeck 2016), $\alpha=0.4$ (Valentinyi and Herrendorf 2008), $\rho=0.15$ (Allen and Donaldson 2020); trade costs taken from Donaldson and Hornbeck's reconstructed rail network; $\phi=0.01$ (2020 farm share), $\eta=0.80$, $\nu=1$ (normalization).
- **Data**: full-count Decennial Census (1860/1880/1900/1920, IPUMS), Census of Manufacturing (wages) and Census of Agriculture (land values, farm-size bins) via NHGIS, constant-boundary CZ crosswalk (Eckert et al. 2020), aggregate series from Historical Statistics of the United States.

## Concepts Engaged

Structural change / structural transformation; quantitative spatial economics; technology diffusion and productivity convergence; non-homothetic (PIGL) preferences and Engel effects; market access (Donaldson–Hornbeck); economic geography and regional inequality; benefit of backwardness.

## Connection to Debates

> **Paper claim** — Modern macro models of structural change reproduce the sectoral facts but, by abstracting from geography, misidentify who gains and loses; a spatial theory is needed, and whether structural change raises regional inequality depends on the strength of spatial linkages, above all technology diffusion.

Bridges the macro structural-change literature (Kongsamut–Rebelo–Xie 2001; Ngai–Pissarides 2007; Boppart 2014; Comin–Lashkari–Mestieri 2021; Herrendorf–Rogerson–Valentinyi) with dynamic quantitative spatial economics (Allen–Arkolakis 2014; Redding–Rossi-Hansberg 2017; Caliendo–Dvorkin–Parro 2019; Kleinman–Liu–Redding 2023; Desmet–Nagy–Rossi-Hansberg 2018). Distinguished from Caselli–Coleman (2001, education-driven North–South convergence), Nagy (2023, pre-1860 city formation), and Bohr–Mestieri–Robert-Nicoud (2024, two-region NEG). Contemporary relevance: the manufacturing-to-services transition appears to *amplify* regional inequality, suggesting weaker diffusion in services than in 19th-century agriculture/manufacturing.

## Theoretical / Empirical Significance

Provides the first general quantitative theory jointly determining aggregate growth, sectoral transformation, and spatial reallocation, with tractable closed-form aggregation (PIGL + Frechet) and an analytical exposure decomposition (Propositions 3–4) applicable to a broad class of models. Empirically resolves the puzzle that the first US structural transformation featured rural-biased wage growth against Bartik intuition, attributing it to strong rural productivity catch-up. Introduces a new spatial panel (495 CZs, 1860–1920) linking complete-count population, manufacturing, and agricultural censuses. The framework generalizes to today's services transition and to other developing economies undergoing their first structural transformation.

## Notes and Caveats

- Two-sector abstraction: "manufacturing" bundles all non-agricultural activity (manufacturing plus services), limiting resolution on the modern services transition it hopes to inform.
- Each model period spans 20 years; frontier growth rates reported per 20-year period (agriculture ~1%, manufacturing ~17%).
- Baseline assumes fixed agricultural land supply and a spatially frictionless diffusion frontier ($\max_j A_{j,t-1}$); robustness relaxes both (elastic land $\varrho=1.2$; distance-attenuated frontier $\varsigma=5, \iota=1$) without overturning conclusions.
- Estimated urban-biased amenity growth ($\xi=-1.1$) is required to reconcile faster rural wage growth with only weakly rural-biased population growth — an inferred, model-consistent force rather than a directly measured one.
- Findings are historical (US 1880–1920); external validity to the services transition or other countries is conjectured, not demonstrated. Baseline abstracts from human capital and capital deepening (human-capital extension shown isomorphic and not explanatory of rural catch-up).
