---
title: "Migration and Resource Misallocation in China"
type: source
authors: [Xiaolu Li, Lin Ma, Yang Tang]
year: 2024
slug: li-ma-tang-2024-migration-misallocation
tags: [China, migration, misallocation, firm-level frictions, output wedges, labor wedges, spatial inequality, general-equilibrium, SMM, HSIEH-KLENOW, prefectures]
raw_markdown: raw_markdown/papers/li-ma-tang-2024-migration-misallocation.md
status: draft
---

# Migration and Resource Misallocation in China (2024)

> **Paper claim** — Firm-level output and labor frictions vary systematically across Chinese prefectures: richer prefectures have less dispersed frictions that are less correlated with productivity. Reducing within-prefecture misallocation by 0.01 in friction dispersion raises aggregate welfare by 3.19 percent and narrows spatial inequality, while internal migration partially offsets the aggregate welfare loss from frictions but worsens their distributional consequences.

Raw markdown: [[raw_markdown/papers/li-ma-tang-2024-migration-misallocation]]

## Research Question

How do firm-level output and labor frictions distort resource allocation across 237 Chinese prefectures, and how do these distortions interact with internal migration to shape aggregate welfare and spatial inequality? The paper structurally estimates the joint distribution of productivity and frictions within each location and quantifies their general equilibrium implications.

## Model / Experimental Design

A general equilibrium model combining Hsieh and Klenow (2009)-style firm-level wedges with a multi-region, heterogeneous-firm trade and migration framework:

- **Locations**: 237 Chinese prefectures (1998–2007), linked by internal trade (iceberg costs) and worker migration (Fréchet preference shocks with bilateral migration disutility).
- **Firms**: Melitz (2003) monopolistic competition with endogenous entry. Each firm draws productivity (Pareto), an output friction (revenue wedge \(\tau_y\)), and a labor friction (payroll wedge \(\tau_\ell\)) from a location-specific joint distribution \(G_j(a, \tau_y, \tau_\ell)\).
- **Output frictions** (\(\tau_y < 1\)): distort the firm's revenue margin (equivalent to a tax/subsidy on output).
- **Labor frictions** (\(\tau_\ell > -1\)): distort the effective wage the firm pays (payroll tax/subsidy).
- **Migration**: Workers are mobile subject to bilateral migration costs \(\lambda_{ij}\) (capturing hukou barriers, moving expenses) and idiosyncratic location preferences (Fréchet with shape \(\kappa = 2.02\)).
- **Government**: Local governments rebate friction revenue as lump-sum transfers; budget balance holds in each prefecture.
- **Equilibrium**: Wage and price vectors \(\{w_j, P_j\}\), population distribution \(\{L_j\}\), entry masses \(\{I_j\}\), and expenditures \(\{X_j\}\) satisfy: utility maximisation, profit maximisation, free entry, labour market clearing, trade balance, and government budget balance.

### Estimation strategy

- **Simulated Method of Moments (SMM)** with Gaussian copula to draw correlated \((a, \tau_y, \tau_\ell)\) triplets from the joint distribution defined by \(\delta_j = \{\sigma_{y,j}, \sigma_{\ell,j}, \theta_j, \rho_{ay,j}, \rho_{a\ell,j}, \rho_{y\ell,j}\}\).
- **Selection bias correction**: Simulated firms are ranked by augmented productivity \(\tilde{a}\) and only the top \(\widehat{N}_j\) firms (matching ASIF coverage) are used for moment computation, avoiding the need to solve general equilibrium in estimation.
- **17 moments per prefecture**: revenue percentile ratios (90/75, 75/50, 50/25, 25/10), standard deviation and percentile ratios of the estimated \(\log(1-\tau_y)\) and \(\log(1+\tau_\ell)\) distributions, and their correlations with revenue.
- **Weighting matrix**: inverse of the bootstrapped variance-covariance matrix of data moments.

### Calibration

Pre-set parameters: congestion elasticity \(\psi = -0.1\) (Ahlfeldt et al. 2015), migration elasticity \(\kappa = 2.02\) (Caliendo et al. 2019), substitution elasticity \(\varepsilon = 6\). Location-specific labor shares \(\beta_j\) from ASIF normalised to match national IO table aggregate (0.37). Jointly calibrated (475 parameters): entry cost \(f_e\) (matches firms-to-population ratio from 2008 Economic Census), average trade cost \(\bar{t}\) (matches internal-trade-to-GDP = 0.625), average migration cost \(\bar{\lambda}\) (matches aggregate stay rate from 2005 One-Percent Population Survey), prefecture-specific productivity \(\{A_j\}\) and amenity \(\{\phi_j\}\) (match output and population from 2007 City Statistical Yearbooks). Trade and migration cost matrices proportional to the geographic cost matrix from Ma and Tang (2020).

## Main Results

1. **Dispersion of frictions**: Mean standard deviation of output frictions \(\tilde{\sigma}_y = 0.11\); labor frictions are an order of magnitude larger at \(\tilde{\sigma}_\ell = 1.18\). Input markets are substantially more distorted than output markets.

2. **Spatial gradient**: Richer (coastal) prefectures have significantly lower friction dispersion and weaker correlations with productivity. Coastal median \(\tilde{\sigma}_y = 0.085\) vs. inland/other median = 0.108. The correlations between output friction and productivity are near zero on the coasts (−0.020, −0.068) and positive in poorer regions (0.242, 0.239).

3. **Explanatory power**: The four friction parameters (dispersion and productivity correlation for each friction) jointly explain 13.3 percent of the observed cross-prefecture variation in per-capita GDP.

4. **Counterfactual — reducing dispersion by 0.01**: Aggregate welfare rises 3.19 percent (semi-elasticity −3.19). Separately, labor friction reduction contributes −1.97, output friction −1.20. The Gini coefficient of real wages falls by 0.26 percent. Net migration to the top-10 richest prefectures declines by 3.91 percent; smaller, poorer prefectures benefit disproportionately.

5. **Counterfactual — reducing productivity correlation**: Reducing absolute correlation by 0.01 raises aggregate welfare 0.84 percent. However, sign matters: negative \(\rho_{a\ell}\) in 146 prefectures means moving toward zero can dampen welfare in those locations.

6. **Migration interaction**: Shutting down migration amplifies the aggregate welfare impact of friction reduction (3.37 percent without migration vs. 3.19 percent with) because workers can no longer "escape" heavily distorted prefectures. Conversely, the spatial equalising effect is weaker without migration (Gini response: −0.25 vs. −0.30).

7. **Policy contrast**: Achieving the same 3.19 percent welfare gain through migration liberalisation (lowering \(\bar{\lambda}\) by 14.4 percent) *increases* spatial inequality (Gini rises 0.002), whereas reducing friction dispersion *decreases* it (Gini falls 0.001). The two policies are aggregate-welfare substitutes but spatial-inequality opposites.

8. **Robustness**: Results are qualitatively robust to alternative values of \(\psi\), \(\kappa\), \(\varepsilon\), and to introducing fixed costs of production/exporting.

## Mechanisms Identified

> **Paper claim** — Firm-level frictions generate misallocation through three channels: (1) within-prefecture, by distorting firms' factor and output decisions; (2) across prefectures, by permeating through trade linkages in intermediate input costs; (3) migration decisions, by affecting wage rates and price levels that determine workers' location choices. Migration acts as a partial escape valve from local misallocation — it dampens aggregate losses but concentrates population in less-distorted regions, worsening spatial inequality.

- Labor frictions (payroll wedges) are an order of magnitude larger than output frictions, making input-market distortions the dominant source of misallocation.
- The equalising effect of uniform friction reduction exhibits decreasing returns to scale: prefectures with initially higher dispersion benefit more, so the gap between rich and poor narrows.
- The welfare impact of productivity correlation depends on its sign: positive correlation (taxing productive firms) is unambiguously costly; negative correlation (subsidising productive firms) has an ambiguous net effect because it boosts output from productive firms while discouraging entry and variety.

Links: [[mechanism-labor-migration-escape]], [[mechanism-misallocation-channels]]

## Methods and Measures

- **Hsieh-Klenow firm-level wedge estimation**: recovers \(\tau_y(k)\) and \(\tau_\ell(k)\) from firm sales, payroll, and total costs under CES monopolistic competition.
- **Simulated Method of Moments (SMM)** with Gaussian copula to structurally estimate the joint distribution parameters per prefecture without solving general equilibrium.
- **Revenue-rank sample selection** to correct for firm selection bias (ASIF only covers firms >5M RMB revenue). Augmented productivity \(\tilde{a}\) ranks firms irrespective of endogenous variables.
- **Pareto-conditional discretization**: frictions are discretised into a \(5 \times 5\) grid; conditional on each grid point, productivity is assumed Pareto and integrated analytically, significantly reducing computational cost.
- **Counterfactual simulation**: re-discretise friction grids under counterfactual parameters (\(\sigma\) and \(\rho\) reductions), re-estimate conditional productivity distributions, and solve the full general equilibrium.

Links: [[method-hsieh-klenow-wedges]], [[method-simulated-method-of-moments]], [[method-pareto-conditional-discretization]]

## Concepts Engaged

- **Misallocation**: Extends the Hsieh-Klenow framework from cross-country/sector comparisons to within-country spatial variation across 237 prefectures (Restuccia and Rogerson 2008, Hsieh and Klenow 2009, Brandt et al. 2013).
- **Spatial equilibrium**: Integrates micro-level misallocation into a quantitative spatial model with endogenous migration, showing that friction distributions shape the spatial distribution of population and income (Ma and Tang 2020, Redding and Rossi-Hansberg 2017).
- **Migration as an adjustment margin**: Demonstrates that internal migration is both a consequence of and a response to local misallocation — a two-way interaction absent from prior misallocation studies.
- **Place-based vs. people-based policy**: The welfare-equivalent policy comparison (friction reduction vs. migration liberalisation) directly speaks to the debate over whether to "help poor places" or "help poor people."

Links: [[concept-misallocation]], [[concept-spatial-equilibrium]], [[concept-migration-adjustment]]

## Connection to Debates

> **Paper claim** — The paper contributes to the debate on place-based versus people-based policies in China: reducing within-prefecture misallocation (a place-based policy) and liberalising migration barriers (a people-based policy) can achieve equivalent aggregate welfare gains but have opposite effects on spatial inequality. This implies policy-makers face a sharp trade-off between aggregate efficiency and spatial equity objectives unless both instruments are deployed in combination.

Links: [[debate-place-based-vs-people-based]], [[debate-internal-vs-external-liberalisation]]

## Theoretical / Empirical Significance

This is the first paper to structurally estimate firm-level frictions jointly with migration in a multi-region general equilibrium framework. Its key innovation is the SMM-based estimation strategy that overcomes the selection-bias and computational-cost barriers that previously limited micro-friction estimation to single-location settings. Empirically, it documents a robust spatial gradient in friction quality (richer prefectures have better-functioning markets) and quantifies the two-way interaction between migration and misallocation. The welfare-equivalent policy comparison (friction reduction vs. migration liberalisation) provides a novel framework for evaluating place-based reforms in developing economies with large internal barriers.

## Notes and Caveats

- Frictions are treated as exogenous; the underlying institutional or geographical causes (e.g., local government quality, SOE presence, infrastructure) are not explored.
- Analysis is limited to manufacturing firms in urban areas with >5M RMB revenue; results do not directly apply to agriculture, rural sectors, or the informal economy.
- Housing markets are abstracted away; congestion is modelled through a reduced-form functional form (\(\psi\)).
- The zero-mean assumption on \(\log(1-\tau_y)\) and \(\log(1+\tau_\ell)\) within each prefecture means the estimation identifies relative distortions within locations but not systematic cross-prefecture differences in friction levels. Robustness checks relaxing this assumption appear in Appendix D.
- The estimation covers 1998–2007; structural transformation since then (e.g., the rise of services, post-2014 hukou reform, high-speed rail expansion) may have altered the friction landscape.
