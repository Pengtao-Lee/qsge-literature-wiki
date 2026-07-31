---
title: "Technology, Geography, and Trade"
type: source
authors:
  - "Eaton, Jonathan"
  - "Kortum, Samuel"
year: 2002
slug: eaton-kortum-2002-technology-geography-trade
tags:
  - ricardian-trade
  - quantitative-trade
  - gravity
  - frechet
  - trade-elasticity
  - geography
  - gains-from-trade
  - general-equilibrium
raw_markdown: "[[raw_markdown/papers/eaton-kortum-2002-technology-geography-trade]]"
status: canonical
---

# Technology, Geography, and Trade (2002)

> **Paper claim** — A Ricardian model with a continuum of goods and country-specific Fréchet productivity distributions delivers structural gravity equations for bilateral trade, whose parameters (states of technology, a common comparative-advantage/trade-elasticity parameter θ, and iceberg geographic barriers) are estimated from 19 OECD countries' 1990 manufacturing trade, prices, and geography and used to quantify gains from trade, technology diffusion, and tariff counterfactuals.

Raw markdown: [[raw_markdown/papers/eaton-kortum-2002-technology-geography-trade]]

Published in *Econometrica*, Vol. 70, No. 5 (September 2002), pp. 1741–1779.

## Research Question

How can a Ricardian model (trade driven by technological differences) be extended from two countries to a many-country world with realistic geographic barriers, in a form simple enough to (i) match four basic facts — trade falls with distance, prices differ more across distant places, factor rewards differ across countries, and relative productivities vary across industries — and (ii) be structurally estimated and used for general-equilibrium policy counterfactuals? The paper asks what the resulting framework implies for gains from trade, patterns of specialization, the international spread of new technology, and the welfare effects of tariff reductions.

## Model / Experimental Design

The point of departure is the Dornbusch–Fischer–Samuelson (1977) two-country Ricardian continuum-of-goods model, generalized to N countries via a probabilistic representation of technology.

**Primitives.**
- Country i's efficiency in producing good j ∈ [0,1] is a draw of random variable Z_i from a country-specific **Fréchet (Type-II extreme value) distribution**: F_i(z) = exp(−T_i z^(−θ)), with T_i > 0 and θ > 1. T_i (the "state of technology") governs the location of the distribution and hence **absolute advantage**; θ, treated as common across countries, governs dispersion and hence the strength of **comparative advantage** (a lower θ means more heterogeneity, a stronger force for trade). Log-efficiency has standard deviation π/(θ√6); efficiency has geometric mean e^(γ/θ) T_i^(1/θ), γ = Euler's constant.
- Constant returns; unit input bundle cost c_i is common across goods within a country. Delivered price of good j from i to n is p_ni(j) = (c_i / z_i(j)) d_ni, where **iceberg geographic barriers** d_ni ≥ 1 (d_ii = 1) obey the triangle inequality d_ni ≤ d_nk d_ki.
- Perfect competition: buyers pay the lowest price across sources, p_n(j) = min_i p_ni(j). CES preferences over goods with elasticity σ (must satisfy σ < 1 + θ for a finite price index).

**Key derived objects.**
- Country n's price parameter: Φ_n = Σ_i T_i (c_i d_ni)^(−θ), summarizing world technology, input costs, and barriers.
- Probability i is the low-cost supplier to n (= trade share = expenditure share): **π_ni = T_i (c_i d_ni)^(−θ) / Φ_n** (equation 8/10) — a structural gravity equation.
- Exact CES price index: p_n = γ Φ_n^(−1/θ), where γ = [Γ((θ+1−σ)/θ)]^(1/(1−σ)); geographic barriers generate deviations from purchasing power parity.
- Trade/price link: (X_ni/X_n)/(X_ii/X_i) = (p_i d_ni / p_n)^(−θ) (equation 12), the "normalized import share."

**Closing the model.** Input cost c_i = w_i^β p_i^(1−β) (equation 14), with labor share β and intermediates the full CES bundle. Real wage w_i/p_i = γ^(−1/β) (T_i/π_ii)^(1/βθ) (equation 15), so gains from trade follow from the home expenditure share π_ii. Labor-market equilibrium (equations 18–21) is solved under two polar cases — **mobile labor** (manufacturing employment adjusts, wage fixed by non-manufacturing) and **immobile labor** (employment fixed, manufacturing wage adjusts). Non-manufactures are the costlessly traded numeraire.

**Estimation sample.** Bilateral manufacturing trade, retail prices of 50 manufactured goods, and geography for **19 OECD countries in 1990**; the off-diagonal gives **342 informative bilateral observations**.

## Main Results

- **Trade-price "first look" (Section 3).** Normalized import shares never exceed 0.2 (far below the 1.0 of a zero-gravity world) and range over four orders of magnitude across country-pairs. Regressing normalized shares on the price/geography measure D_ni (correlation −0.40) yields a method-of-moments estimate **θ = 8.28**, implying a 15% standard deviation of efficiency for given T. This is the baseline value used throughout.
- **Alternative θ estimates.** Using wage data (relating S_i to R&D stocks and schooling, instrumenting wages with workforce and density): OLS θ = 2.84, 2SLS θ = 3.60 (endogeneity of wages raises the estimate as expected). Using the price measure directly: OLS θ = 2.44, but 2SLS (geography terms as instruments for D_ni) θ = 12.86, supporting an errors-in-variables interpretation. The paper adopts **θ = 8.28 as central**, with 3.60 and 12.86 as bounds.
- **Bilateral trade equation (Table III, GLS, equation 30).** "Competitiveness" S_i = (1/β)ln T_i − θ ln w_i is captured by source dummies; Japan is most competitive, closely followed by the U.S.; Belgium and Greece least. Distance strongly inhibits trade (−θd rises from −3.10 in [0,375) miles to −6.56 in [6000+) miles); shared language helps (0.51), borders/EC/EFTA matter little. ~25% of residual variance is reciprocal. β = 0.21 (labor share in gross manufacturing output).
- **Implied geographic barriers (Table VII, θ = 8.28).** A typical country faces a 45% cost barrier at the closest distance band, rising to 121% at the farthest. Shared border −4%, shared language −6%. The U.S. is the most open destination (−25% relative to average); Greece the least (+33%).
- **States of technology (Table VI).** Japan's apparent competitive edge over the U.S. comes from **lower wages, not higher technology**; the U.S. has the highest T_i (normalized to 1). Belgium's low competitiveness is largely its high wage.
- **Gains from trade — autarky (Table IX).** Moving to autarky in manufactures costs from 0.2% (Japan) to 10.3% (Belgium) of welfare (mobile labor); the immobile-labor loss is only slightly larger. Four "natural manufacturers" (Germany, Japan, Sweden, UK) see manufacturing employment shrink under autarky.
- **Zero gravity (Table X).** Eliminating all barriers raises welfare 16–24% and would raise world trade to ~five times its current level; large countries (Germany, Japan, U.S.) lose their size-based manufacturing edge. A more realistic across-the-board barrier cut to 69% of baseline **doubles world trade**, raising welfare 1–3% and cutting manufacturing prices 10–20%.
- **Benefits of foreign technology (Table XI).** A 20% rise in one country's T spreads abroad, but gains approach the home gain only for nearby countries able to downsize manufacturing (e.g., Canada captures ~87% of a U.S. improvement; Germany's small neighbors >50% of a German improvement; distant/large Japan gains little). Under immobile labor, large manufacturers (Germany, Japan) can suffer welfare **losses** from technical improvement elsewhere.
- **Tariffs (Section 6.4, baseline uniform 5% tariff).** Multilateral elimination raises welfare almost everywhere (up to 1.31% for Belgium, mobile labor). **Unilateral U.S. elimination hurts only the U.S.** (−0.005% mobile / −0.13% immobile, standard optimal-tariff logic); Canada gains most. EC internal tariff removal (Table XII) produces trade diversion whose winners/losers depend critically on labor mobility.

## Mechanisms Identified

> **Paper claim** — Trade responds to costs and barriers at the **extensive margin**: as a source becomes more expensive or remote it exports a *narrower range of goods*, rather than selling less of each good (the intensive-margin adjustment of Armington/monopolistic-competition models). The sensitivity of trade to costs and geography is governed by the **technology parameter θ** (heterogeneity of production), not the preference parameter σ (heterogeneity of consumption).

Additional channels: intermediates make location matter for specialization (input costs feed back through Φ_i); geographic barriers generate PPP deviations linking trade flows to price differences; and the home expenditure share π_ii is a sufficient statistic for gains from trade (equation 15).

## Methods and Measures

- Structural (quantitative) gravity estimation via GLS with source and destination fixed effects and a reciprocal-error variance structure (two-way vs. one-way barrier components).
- Method-of-moments, OLS, and 2SLS estimation of θ using three distinct data sources (trade+prices, wages+R&D, prices directly), with instrumental variables (workforce, population density; geography proxies for D_ni) to address wage endogeneity and errors-in-variables.
- Trade-cost measure D_ni built from retail prices of 50 goods: log price ratios r_ni(j), with ln d_ni proxied by the **second-highest** r_ni across goods (equation 13).
- Geographic-barrier proxies: six distance bands, shared border, shared language, EC and EFTA membership.
- Counterfactual computation of the general equilibrium (equations 16, 17, 20/21) under mobile vs. immobile labor, benchmarked against a baseline calibrated to actual employment and GDP (RMSE of baseline vs. actual wages = 5.0%).
- Data sources: OECD STAN and UN–Statistics Canada bilateral trade; World Bank ICP prices (Hooper–Vrankovich items); Coe–Helpman R&D stocks; Kyriacou schooling; Summers–Heston workforce.

## Concepts Engaged

- [[gravity-in-spatial-economics]] — the model provides microfoundations for the gravity equation, with trade elasticity θ as the structural object beneath the reduced-form distance coefficient.
- [[quantitative-spatial-equilibrium]] — an early exemplar of the structural, estimable, counterfactual-ready general-equilibrium approach that later quantitative spatial models build on.

Also engaged: Ricardian comparative advantage, Fréchet/extreme-value technology, iceberg trade costs, CES demand, gains-from-trade sufficient statistics, and trade in intermediates.

## Connection to Debates

> **Paper claim** — Against Heckscher-Ohlin-Vanek (which ignores location, assumes common technology, and predicts no bilateral volumes) and against Armington/monopolistic-competition foundations for gravity (where specialization is preordained by product differentiation and adjustment is intensive-margin), the paper shows that **technology differences plus geographic barriers can jointly determine specialization and bilateral volumes** within a tractable Ricardian general equilibrium. The parameter θ plays the role that Armington/CES substitution elasticities play in rival models, but derives from technological heterogeneity rather than preferences.

## Theoretical / Empirical Significance

Foundational for the modern quantitative trade literature. It is the "EK model" — the first Ricardian framework to serve as the empirical basis for bilateral trade flows, and the origin of the Fréchet-based approach in which a single trade elasticity θ governs both the gravity structure and welfare. The home-share formula (equation 15) prefigures the Arkolakis–Costinot–Rodríguez-Clare gains-from-trade sufficient-statistic result. Its structural-gravity, iceberg-cost, extreme-value machinery is directly inherited by quantitative economic geography and spatial-equilibrium models, making it a common ancestor for much of the surrounding literature in this collection.

## Notes and Caveats

- θ estimates vary widely by method (2.44–12.86); the central 8.28 is a method-of-moments choice, and counterfactual magnitudes shift with θ.
- The model suppresses heterogeneity in geographic barriers across manufacturing goods; the authors caution the counterfactuals are illustrative of model mechanics, not definitive policy analysis.
- Capital is ignored as a factor (intermediates play an analogous role); labor is the only internationally immobile factor.
- Only manufactures trade is modeled; autarky costs therefore understate the loss from ceasing all trade. Non-manufactures are assumed costlessly tradable numeraire.
- Estimation confounds are handled by IV, but the direct price-based trade-cost measure D_ni is subject to errors-in-variables; the technology-independence (Fréchet) assumption can be relaxed to a correlated form (parameter ρ) with T and θ reinterpreted.
- Cross-section of 19 OECD countries in a single year (1990); external validity to non-OECD or later periods is untested here.
