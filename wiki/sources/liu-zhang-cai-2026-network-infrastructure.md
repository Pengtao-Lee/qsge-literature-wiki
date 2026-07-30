---
title: "网络基础设施建设、数字鸿沟缩小与福利增进——基于量化空间一般均衡的研究"
type: source
authors: [刘颖杰 (Liu Yingjie), 张勋 (Zhang Xun), 蔡玉龙 (Cai Yulong)]
year: 2026
slug: liu-zhang-cai-2026-network-infrastructure
tags: [network-infrastructure, digital-divide, trade-costs, welfare-effects, unified-national-market, quantitative-spatial-general-equilibrium, China]
raw_markdown: raw_markdown/papers/liu-zhang-cai-2026-network-infrastructure.md
status: draft
---

# 网络基础设施建设、数字鸿沟缩小与福利增进——基于量化空间一般均衡的研究 (2026)

> **Paper claim** — Between 2012 and 2019, network infrastructure construction was the main driver of reduced inter-regional trade costs in China, raising aggregate welfare by approximately 10.30%; the narrowing of the digital divide meaningfully amplifies these welfare gains, and optimal reallocation of infrastructure investment toward lagging regions could raise welfare further to about 15%.

Raw markdown: [[raw_markdown/papers/liu-zhang-cai-2026-network-infrastructure]]

## Research Question

How does network infrastructure construction affect aggregate welfare in China by reducing inter-regional trade costs and narrowing the digital divide? The paper develops a quantitative spatial general equilibrium framework to measure the welfare effects of internet infrastructure expansion across Chinese cities, distinguishing between direct trade-cost reductions, input-output spillovers, and the nonlinear role of the digital divide.

## Model / Experimental Design

A multi-region (219 Chinese cities plus the rest of the world), multi-industry (6 tradable + 4 non-tradable sectors) quantitative spatial general equilibrium model following Caliendo and Parro (2015) and Tombe and Zhu (2019):

- **Production**: Each region-industry produces a continuum of differentiated intermediate goods under perfect competition with constant returns to scale (Eaton-Kortum structure). Production uses labour and composite intermediates from all industries via input-output linkages. Network infrastructure enters the production function as a Hicks-neutral productivity shifter: \(q_n^j(\omega) = z_n^j(\omega) \exp(\beta_n int_n) [l_n^j(\omega)]^{\gamma_n^j} \prod_k [m_n^{k,j}(\omega)]^{\gamma_n^{k,j}}\).

- **Nonlinear digital divide effect**: The effect of network infrastructure on productivity is regime-dependent: \(\beta_n = \beta_1\) if \(int_n \geq Mean\) (developed regions, \(\beta_1 = 0.03\)) and \(\beta_n = \beta_2\) if \(int_n < Mean\) (lagging regions, \(\beta_2 = 0.11\)). Lagging regions benefit more per unit of infrastructure expansion, reflecting diminishing marginal returns. This is the model's key innovation — embedding digital divide dynamics directly into the production structure.

- **Trade**: Inter-regional trade in intermediates incurs iceberg costs \(\tau_{ni}^j = \kappa_{ni}^j / \exp(\beta_i int_i)\), so network infrastructure reduces the effective trade cost. International trade adds an additional tariff layer \(\iota_{ni}^j\). Trade shares follow from Fréchet-distributed productivity draws with elasticity \(\theta^j = 4\).

- **Equilibrium**: Solved in changes (Dekle, Eaton, Kortum 2007) requiring only initial trade shares, input-output coefficients, and the estimated trade cost changes \(\hat{\tau}_{ni}^j\). Welfare is measured as real income \(\hat{v}_n = \hat{w}_n / \hat{P}_n\).

- **Parameter estimation**: The network infrastructure impact parameters \(\beta_1, \beta_2\) are recovered from a gravity regression of bilateral trade flows on city-level base-station density (normalised by initial GDP), instrumented by (a) "Broadband China" pilot city status and (b) spherical distance to "Eight Vertical Eight Horizontal" optical fibre backbone nodes, both interacted with national averages to create time-varying instruments. IV first-stage F-statistics exceed 175 in the preferred specification.

- **Data**: China Carbon Accounting Database city-level multi-region input-output tables (2012, 2015, 2017); China City Statistical Yearbooks; OpenCelliD base-station data (2012–2019).

## Main Results

1. **Trade cost reductions**: Network infrastructure expansion from 2012 to 2019 cumulatively reduced inter-regional trade costs by approximately 3.19% by 2019 (cumulative from a 2012 baseline). The bulk of the decline occurred after 2013 — the launch of the "Broadband China" strategy.

2. **Aggregate welfare gains**: Network infrastructure construction raised national aggregate welfare by approximately 10.30% over 2012–2019, comparable in magnitude to the welfare effects of hukou reform and road-network construction documented in prior studies. When accounting for interregional labour mobility, the welfare effect rises to 11.09%.

3. **Regional heterogeneity**: Eastern and western regions experienced larger welfare gains than central China. The central region's relatively smaller gain reflects competitive pressure from eastern goods flowing more freely and western raw materials exiting more cheaply, which temporarily disrupts some central industries.

4. **Net welfare**: Gross cumulative welfare (measured as GDP equivalent) reached approximately RMB 15 trillion, against cumulative construction costs of roughly RMB 5 trillion, yielding a net welfare gain of about RMB 10 trillion.

5. **Robustness**: Results are stable across alternative trade elasticities (\(\theta = 2, 4, 5, 8\)), alternative baseline years (2015), inclusion of tariff changes, and a 5% perturbation of the \(\beta\) parameters. Allowing labour mobility amplifies the gains.

6. **Optimal resource reallocation**: If each year's incremental base stations were reallocated to maximise a Foster welfare function (\(W = \overline{int} \times \exp(-\text{Gini})\)), the welfare effect would rise from 10.30% to approximately 15.11% by 2019, with central China gaining most (15.64%).

## Mechanisms Identified

> **Paper claim** — Network infrastructure operates through two channels: (1) it directly reduces inter-regional trade costs (especially search and information costs), expanding trade volumes and raising welfare in tradable sectors; and (2) it strengthens input-output linkages through expanded trade activity, generating positive spillovers to non-tradable sectors.

- **Decomposition** (Caliendo-Parro 2015 method): Nationally, the input-output linkage channel accounts for about 53% of total welfare gains and the trade-share channel for about 47%. In eastern regions the I-O channel dominates (~59%), while in western regions the trade-share channel dominates (~64%).
- **Digital divide mechanism**: Because \(\beta_2 > \beta_1\), infrastructure expansion in lagging regions yields disproportionately large trade-cost reductions per unit of investment. The narrowing of the digital divide (Gini coefficient of base-station density fell from 0.662 in 2012 to 0.391 in 2019) is therefore itself a welfare-enhancing force.
- **Sectoral spillovers**: Tradable industries benefit directly from lower trade costs (especially petroleum processing, chemicals, and non-metallic mineral products). Non-tradable industries benefit indirectly through I-O linkages — wholesale and retail trade gains most from expanded inter-regional commerce.

Links: [[mechanism-digital-divide-trade-costs]], [[mechanism-input-output-spillovers]]

## Methods and Measures

- **Quantitative spatial general equilibrium model** with Eaton-Kortum trade, input-output linkages, and network-infrastructure-augmented production functions.
- **Base-station density** measured as total base stations in a city divided by city initial GDP (2012), used as the proxy for network infrastructure development.
- **Head-Ries-type gravity regression** to estimate the effect of infrastructure on bilateral trade shares, with controls for distance trends, postal volume, government expenditure, fixed assets, industrial structure, population, and GDP growth.
- **IV strategy**: (a) "Broadband China" pilot city status and (b) spherical distance to "Eight Vertical Eight Horizontal" optical fibre backbone nodes, each interacted with national averages.
- **Foster welfare function** \(W = \overline{int} \times \exp(-\text{Gini})\) for optimal resource reallocation counterfactuals.

Links: [[method-quantitative-spatial-equilibrium]], [[method-gravity-infrastructure]]

## Concepts Engaged

- **Network infrastructure as a trade-cost shifter**: The paper models internet infrastructure as reducing iceberg trade costs, specifically the information/search-cost component that is distinct from physical transport costs and institutional barriers.
- **Digital divide as a nonlinear production force**: Lagging regions have higher marginal returns to infrastructure — a structural property embedded in the model rather than an ex-post empirical pattern.
- **National unified market (全国统一大市场)**: Infrastructure-driven trade-cost reduction is positioned as a mechanism for domestic market integration, echoing the policy discourse of China's "national unified market" agenda.
- **Welfare in spatial equilibrium**: Welfare is measured as real income \(w_n/P_n\), capturing both nominal earnings and the cost-of-living effects of inter-regional trade.

Links: [[concept-digital-divide]], [[concept-network-infrastructure-welfare]], [[concept-unified-national-market]]

## Connection to Debates

> **Paper claim** — The paper contributes to the debate on "new infrastructure" (新基建) versus traditional infrastructure in China: network infrastructure delivers welfare gains on par with major institutional reforms (hukou liberalisation) and traditional physical infrastructure (road networks), but through a distinct mechanism — information-cost reduction rather than physical-connectivity improvement. It also speaks to the "digital divide and inequality" debate by demonstrating that narrowing the digital divide is not merely a distributional concern but a source of aggregate efficiency gain.

Links: [[debate-new-infrastructure-versus-traditional]], [[debate-digital-divide-inequality]]

## Theoretical / Empirical Significance

This is among the first studies to embed network infrastructure with a nonlinear digital-divide structure into a fully specified quantitative spatial general equilibrium model for China. Key advances: (1) it derives the gravity specification from a microfounded production function with infrastructure-augmented productivity, rather than ad hoc empirical equations; (2) it quantifies the welfare contribution of the digital divide *channel* separately from total infrastructure effects; (3) it shows that the Foster welfare optimum for infrastructure allocation would produce substantially larger welfare gains than the actual trajectory, implying significant misallocation; and (4) it benchmarks network infrastructure welfare effects against those of hukou reform, road construction, WTO accession, and the RCEP — finding network infrastructure comparable in magnitude — thereby elevating the policy priority of digital infrastructure.

## Notes and Caveats

- The sample period ends in 2019; the post-COVID surge in digitalisation and the accelerated 5G rollout (which began in earnest in 2020) are not captured.
- Labour mobility is fixed in the baseline model and only added in robustness; the joint general equilibrium of infrastructure expansion with endogenous migration decisions is not fully explored.
- The model assumes perfect competition and constant returns to scale, which may understate the pro-competitive effects of better information in imperfectly competitive markets (e.g., e-commerce platforms).
- Network infrastructure is proxied by base-station density; other dimensions (fibre penetration, broadband speed, 5G coverage, data-centre capacity) may have different cost-reduction elasticities.
- The international sector is a single "rest of the world" region, so bilateral trade costs with specific trading partners are not differentiated.
- Welfare effects are measured as real income changes; non-pecuniary channels (e.g., improved access to public services, information diversity, social capital effects of internet connectivity) are not included.
