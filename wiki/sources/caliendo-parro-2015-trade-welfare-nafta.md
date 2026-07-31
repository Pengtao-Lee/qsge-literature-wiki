---
title: "Estimates of the Trade and Welfare Effects of NAFTA"
type: source
authors: [Caliendo, Lorenzo; Parro, Fernando]
year: 2015
slug: caliendo-parro-2015-trade-welfare-nafta
tags: [quantitative-trade, eaton-kortum, input-output-linkages, intermediate-goods, tariffs, nafta, exact-hat-algebra, trade-elasticity, general-equilibrium, welfare-gains-from-trade]
raw_markdown: "[[raw_markdown/papers/caliendo-parro-2015-trade-welfare-nafta]]"
status: canonical
---

# Estimates of the Trade and Welfare Effects of NAFTA (2015)

> **Paper claim** — A multi-country, multi-sector Ricardian (Eaton–Kortum) model with sectoral input–output linkages and traded intermediate goods, solved in relative changes ("exact hat algebra"), shows that NAFTA's tariff reductions raised Mexico's welfare by 1.31%, the U.S.'s by 0.08%, and lowered Canada's by 0.06%, and that these gains are substantially larger than what one-sector or no-linkage models imply.

Raw markdown: [[raw_markdown/papers/caliendo-parro-2015-trade-welfare-nafta]]

Published in *Review of Economic Studies* (2015), Vol. 82(1), pp. 1–44. First version November 2012; accepted May 2014. JEL codes: F10, F11, F13, F14, F17.

## Research Question

How large are the trade and welfare effects of tariff changes once one accounts for sectoral heterogeneity, trade in intermediate goods, and input–output (I–O) linkages across sectors — and specifically, what were the trade and welfare effects of NAFTA's tariff reductions on Mexico, Canada, and the U.S.? A secondary methodological question: how can sectoral trade elasticities be estimated in a way consistent with any gravity-type trade model, without assuming symmetric trade costs?

## Model / Experimental Design

A general-equilibrium Ricardian trade model with **N countries and J sectors** (sectors are tradable or non-tradable; one factor of production, labour, mobile across sectors but not countries; perfect competition, constant returns to scale).

- **Preferences.** Cobb–Douglas over sectoral final goods (equation 1), with sectoral consumption shares $\alpha_n^j$.
- **Production.** A continuum of intermediate goods $\omega^j$ per sector, produced from labour and composite intermediate goods ("materials") drawn from all sectors, in Cobb–Douglas form with value-added share $\gamma_n^j$ and material shares $\gamma_n^{k,j}$ (with $\sum_k \gamma_n^{k,j} = 1-\gamma_n^j$). The unit input-bundle cost $c_n^j$ depends on wages and on the prices of composite goods from **all** sectors — this is the I–O linkage channel (equation 2).
- **Productivity.** Producer efficiencies drawn from a Fréchet distribution with country-sector location parameter $\lambda_n^j$ (absolute advantage) and sector-specific shape parameter $\theta^j$ (dispersion / comparative advantage; $\theta^j$ is the trade elasticity). Non-tradables modelled by setting iceberg cost $\kappa_{in}^j = \infty$.
- **Trade costs.** Two components: iceberg costs $d_{ni}^j \geq 1$ and ad-valorem tariffs $\tau_{ni}^j$, combined as $\kappa_{ni}^j = (1+\tau_{ni}^j)d_{ni}^j$. Delivers a multi-sector gravity equation for bilateral trade shares $\pi_{ni}^j$ (equation 6).
- **"Exact hat algebra."** Rather than solving for levels, the model is expressed in **relative changes** (a variable with a hat is $\hat{x}=x'/x$) from a base year (equations 10–14). This lets counterfactuals be computed from observable base-year trade shares, I–O shares, value-added shares, and the elasticities $\theta^j$ alone — without estimating unobserved fundamentals like $\lambda_n^j$ or iceberg costs $d_{ni}^j$. Solved by guessing a wage vector and iterating on trade balance.
- **Calibration.** N = 31 (30 countries + constructed rest of world), J = 40 sectors (20 tradable, 20 non-tradable, at 2-digit ISIC Rev. 3). Base year **1993** (year before NAFTA). Data: bilateral trade (UN COMTRADE), gross output / value added (OECD STAN, INDSTAT2, OECD I–O), I–O tables (WIOD, OECD), tariffs for 1993 and 2005 (UNCTAD-TRAINS).
- **Counterfactual.** Feeds observed tariff changes 1993→2005 (both within NAFTA and toward the rest of the world) into the model to identify the pure effect of tariff reductions.

## Main Results

**Welfare effects of NAFTA's tariff reductions (holding rest-of-world tariffs at 1993 levels):**
- Mexico **+1.31%**, U.S. **+0.08%**, Canada **−0.06%**. Real wages rose for all three (Mexico +1.72%, Canada +0.32%, U.S. +0.11%). Not all members gained in welfare — Canada suffered a small loss.
- Decomposition into terms-of-trade vs. volume-of-trade effects: most gains come from **volume of trade** (Mexico +1.72%, Canada +0.04%, U.S. +0.04% volume-of-trade component). Terms of trade: Mexico −0.41%, Canada −0.11% (deteriorate, mostly from falling export prices), U.S. +0.04% (improves, from cheaper imports from Mexico).
- Bilateral decomposition: welfare gains from **trade creation** with NAFTA members are +1.80% (Mexico) and +0.08% (Canada); **trade diversion** from the rest of the world costs −0.08% (Mexico) and −0.04% (Canada). Trade creation dominates diversion.

**Trade effects (intra-bloc):** aggregate intra-bloc trade rose **118% for Mexico, 11% for Canada, 41% for the U.S.** (Table 5 detail: Mexico's imports from Canada +116.6% and from U.S. +118.3%; U.S. imports from Mexico +109.5% vs. from Canada +6.6%). Mexico's role as an intermediate-goods supplier grew sharply.

**Sectoral specialization.** NAFTA raised Mexico's export concentration (normalized Herfindahl 0.092→0.138; Electrical Machinery rose from ~1/5 to ~1/3 of exports, 20.79%→34.07%) while Canada and the U.S. became slightly more diversified. A handful of sectors — Textiles (most protected in Mexico, ~18% avg. tariff), Petroleum (homogeneous, high elasticity), Electrical Machinery, and Autos (high material shares, strong I–O feedback) — drive most aggregate terms-of-trade and volume-of-trade effects.

**Effects given world tariff changes (1993→2005, all agreements).** Every country in the sample gained; China gained the most (+13.9%). NAFTA members: Mexico +1.36%, Canada +0.10%, U.S. +0.22%. Netting out NAFTA, Canada was the largest NAFTA winner from world tariff reductions. NAFTA's own contribution given world changes: Mexico +1.17%, Canada −0.06%, U.S. +0.08% — Mexico's gain is smaller here because world liberalization raises the opportunity cost (trade diversion) of the bloc.

**Model comparison (mechanism importance).** Relative to the benchmark, welfare effects are on average **71% lower in a one-sector model, 62% lower without materials, 50% lower without sectoral linkages**; trade effects are 50%, 26%, and 18% lower, respectively. E.g. Mexico's welfare: one-sector 0.41%, no-materials 0.50%, no-I–O 0.66%, benchmark 1.31%; Mexico's import growth: 60.99% / 88.08% / 98.96% / 118.28% across the same ladder.

**Trade elasticity estimates.** Sectoral $\theta^j$ range from 0.37 (Other Transport) to 51.08 (Petroleum); aggregate elasticity ≈ 4.55 (full sample), 4.49 (99% sample, the benchmark). Common-elasticity null rejected (F-test). Three sectors (Basic metals, Machinery n.e.c., Auto) not robust to trimming and replaced by the manufacturing mean.

## Mechanisms Identified

> **Paper claim** — Intermediate goods and I–O linkages act as **amplifiers** of the trade and welfare effects of tariff reductions. A tariff cut in one sector lowers input costs not only there but in every downstream sector via the input bundle $c_n^j$, and the effect propagates through the whole I–O network (including into non-tradables that use tradable inputs).

The real-wage decomposition (equation 15) separates three channels: (i) trade in **final goods**, (ii) trade in **intermediate goods** (present when $\gamma_n^j < 1$), and (iii) **sectoral linkages** (the materials price index across sectors $k$). Sectoral heterogeneity in trade elasticities matters for welfare because gains are larger when low-$\theta$ (high-dispersion) sectors experience the largest changes in domestic expenditure share. Welfare is decomposed into a multilateral, multi-sector **terms-of-trade** effect and a **volume-of-trade** (trade-creation) effect (equation 16).

## Methods and Measures

- **Exact hat algebra** / solving in relative changes — the paper's signature quantitative method; permits counterfactuals without estimating fundamental productivity or trade costs.
- **A new estimator for sectoral trade elasticities** $\theta^j$: exploits the tripartite ratio of bilateral trade flows across three countries (equation 21–23), so that unobserved symmetric and asymmetric iceberg trade costs, plus importer and exporter fixed effects, cancel out; only tariffs remain, and orthogonality of the residual to tariffs is the sole identifying restriction. Consistent with any gravity model (Krugman 1981; EK 2002; Anderson–van Wincoop 2003; Melitz 2003; Chaney 2008).
- **Measures:** welfare $W_n = I_n/P_n$; bilateral and sectoral terms-of-trade ($tot$) and volume-of-trade ($vot$) decompositions; normalized Herfindahl index of export concentration.

## Concepts Engaged

Gains from trade; comparative advantage (productivity dispersion); trade creation vs. trade diversion; terms of trade; gravity equation; input–output linkages; intermediate/traded inputs; trade elasticity as sufficient statistic (per Arkolakis, Costinot & Rodríguez-Clare 2012).

## Connection to Debates

> **Paper claim** — Quantifying gains from trade policy requires modelling sectoral structure: ignoring intermediate goods and I–O linkages systematically understates the trade and welfare effects of tariff changes.

The paper extends the multi-sector Eaton–Kortum program (Caliendo & Parro's own antecedents, plus Costinot, Donaldson, Komunjer 2012; Dekle–Eaton–Kortum 2008; Eaton et al. 2011; Hsieh & Ossa) by adding tradable/non-tradable sectoral linkages, and situates itself against one-good gravity evaluations of NAFTA (Anderson & van Wincoop 2002). It contributes directly to the "sufficient statistics for welfare gains from trade" literature (Arkolakis, Costinot & Rodríguez-Clare 2012; Ossa 2012 on sectoral elasticity heterogeneity).

## Theoretical / Empirical Significance

"Exact hat algebra" became the workhorse method for counterfactual quantitative trade analysis, and the multi-sector-with-linkages framework is a canonical reference for evaluating trade agreements and tariffs. The tripartite trade-flow elasticity estimator is a widely cited, model-robust identification strategy. The core empirical lesson — that intermediate goods and I–O linkages roughly double or more the estimated welfare and trade effects of tariff changes — reframes how trade-policy counterfactuals should be structured.

## Notes and Caveats

- Results capture **only tariff reductions**, not the full NAFTA agreement; non-tariff barriers, unobserved trade-cost changes, and any NAFTA-induced changes in technology/fundamental TFP are held fixed and explicitly outside the model's scope. The authors caution against reading the numbers as the total welfare effect of the agreement.
- Fundamental TFP ($\lambda_n^j$) is exogenous and constant over the analysis period — a deliberate assumption to isolate the direct effect of tariffs.
- Aggregate trade deficits are exogenous; counterfactuals reported in the main text impose zero aggregate deficit in the base year (an alternative holding deficits fixed as a share of world GDP is in the appendix).
- Three estimated sectoral elasticities (Basic metals, Machinery n.e.c., Auto) are not robust to sample trimming and are replaced by the manufacturing-sector mean.
- Static, single-factor, perfectly competitive framework: no dynamics, capital, factor-market frictions, or firm heterogeneity/markups.
