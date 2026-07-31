---
title: "人力资本空间配置的社会福利效应研究——基于量化空间一般均衡模型的分析"
type: source
authors: [刘华, 王姣, 陈力朋]
year: 2024
slug: liu-wang-chen-2024-human-capital-spatial-allocation
tags: [quantitative-spatial-equilibrium, human-capital, spillover-effects, skill-heterogeneity, welfare, fiscal-policy, hukou, property-tax, china, exact-hat-algebra]
raw_markdown: "[[raw_markdown/papers/liu-wang-chen-2024-human-capital-spatial-allocation]]"
status: canonical
---

# 人力资本空间配置的社会福利效应研究——基于量化空间一般均衡模型的分析 (2024)

> **Paper claim** — A quantitative spatial general equilibrium (QSE) model with cross-skill productivity spillovers and public-service spillovers shows that optimizing China's spatial allocation of human capital (人力资本空间配置) raises social welfare, that a redistribution from high-skill/high-wage cities to low-skill/low-wage cities reaches the Pareto-efficient frontier, and that the optimum features a more spatially balanced distribution of high-skill talent.

Raw markdown: [[raw_markdown/papers/liu-wang-chen-2024-human-capital-spatial-allocation]]

## Research Question

Is China's current spatial distribution of human capital efficient? Can adjusting the current spatial layout raise social welfare? If so, what fiscal policy achieves the optimal allocation, and what does the optimal spatial distribution of human capital look like? The paper motivates these questions against China's first population decline in ~60 years (negative population growth, 人口负增长) and the transition from a "demographic dividend" (人口红利) to a "talent dividend" (人才红利), asking how optimizing labor's spatial distribution can exploit human-capital externalities and skill complementarity to sustain productivity and innovation.

## Model / Experimental Design

A multi-region, closed-economy QSE model extending Fajgelbaum & Gaubert (2020) and Diamond (2016), adding China-specific institutions (hukou / 户籍制度 and a property/real-estate tax 房地产税).

- **Agents and geography:** J regions; two goods per region — housing H (locally consumed, non-tradable) and a tradable good Y (shipped across regions with iceberg trade cost $d_{ji}\geq 1$). Residents are heterogeneous by exogenous, non-convertible skill type θ (calibrated to two types: high-skill = senior-high education and above; low-skill = junior-high and below).
- **Consumers:** Cobb–Douglas preferences over tradables and housing (tradable expenditure share $\gamma_c$); utility $U(c^\theta_j, h^\theta_j, g^\theta_j)$ also depends on effective public services $g^\theta_j$. Budget constraint includes wage income net of labor income tax $\tau^w$, property income $r_j H^\theta_j$, a type-specific property tax $\tau^\theta_j$ on housing above an exemption threshold $\bar H_j$, profit shares, and transfers $t^\theta_j$.
- **Two spillover channels (the paper's core innovation):**
  1. **Productivity spillover** $\psi^{P,j}_{\theta,\theta'}$ — a type-θ worker raises the productivity $z^{\theta'}_j$ of type-θ′ workers (including *cross-skill*, θ ≠ θ′).
  2. **Public-service spillover** $\psi^{G,j}_{\theta,\theta'}$ — a type-θ resident affects the effective public service $g^{\theta'}_j$ enjoyed by type-θ′ residents (congestion, possibly positive for high-skill).
- **Functional forms:** effective labor is a CES aggregate of skill types (elasticity $1/(1-\rho)$); tradable and housing production are Cobb–Douglas in effective labor and intermediates; spillovers enter as constant-elasticity power functions ($z^\theta_j = Z^\theta_j \prod_{\theta'}(L^{\theta'}_j)^{\psi^{P,j}_{\theta,\theta'}}$; analogous for $g^\theta_j$).
- **Government:** a central government levies labor tax $\tau^w$ and makes transfers $T_j$ to local governments; local governments levy the property tax and fund public services $g_j$, plus type-specific transfers $t^\theta_j$. Hukou enters as a labor-mobility friction $f_j$ ("iceberg cost" on labor compensation, following Tombe & Zhu 2019 and Huang et al. 2023).
- **Equilibrium concept:** competitive spatial equilibrium (utility max, profit max, market clearing, government budget balance) plus a **central planner problem** whose solution characterizes the Pareto-efficient frontier; the second welfare theorem is then used to design spatial fiscal policies that Pareto-improve the market allocation.
- **Solution method:** exact-hat algebra (精确帽子代数法, Dekle et al. 2008) for counterfactual simulation, circumventing estimation of exogenous productivities and bilateral trade costs.

## Main Results

- **Welfare gains from reallocation (with cross-skill spillovers).** Given the welfare of one skill group fixed, optimizing the spatial allocation raises the other group's welfare by roughly 1% (as read from the utility frontier, Figure 1a); raising both groups' welfare equally yields simultaneous gains. Reallocation moves the economy to the Pareto-efficient frontier.
- **Cross-skill spillovers are essential.** In a counterfactual with homogeneous labor (no skill complementarity, no cross-type spillovers, only same-type agglomeration/congestion), the welfare improvement from optimal reallocation is only about 0.2%–0.3% (Figure 1b) — an order of magnitude smaller — showing the cross-skill spillover channel drives most of the estimated gains.
- **Optimal fiscal policy = redistribution across skills and cities.** Reaching the Pareto frontier requires transfers **from high-skill workers (and high-wage cities) to low-skill workers (and low-wage cities)**. Within most cities, net transfers to low-skill workers are positive subsidies while net transfers to high-skill workers are positive taxes; lower-average-wage cities receive larger equilibrium transfers.
- **Property tax substitutes for transfers.** When a regionally differentiated property tax (calibrated on Zhang & Hou's 纳税能力 / tax-capacity theory) is introduced with revenue devoted to public services, the welfare gain from optimal reallocation rises above the no-tax baseline, but the required high-to-low city and high-to-low skill transfers *shrink* — the property tax partially substitutes for spatial transfers.
- **Optimal distribution is more spatially balanced.** Relative to the 2015 baseline, the Pareto-efficient equilibrium shows high-skill population share more evenly distributed across city sizes: high-skill workers move toward initially *smaller* cities and low-skill workers toward initially *larger* cities (Figure 4). This supports China's policy of guiding high-skill talent toward less-developed regions.
- **Estimated spillover elasticities (Table 1).** Public-service spillovers: high→high $\psi^C_{HH}=0.649$, low→high $\psi^C_{LH}=-1.378$, low→low $\psi^C_{LL}=-2.583$, high→low $\psi^C_{HL}=0.475$. Productivity spillovers: $\psi^P_{HH}=0.058$, $\psi^P_{LH}=0.056$, $\psi^P_{LL}=0.020$, $\psi^P_{HL}=0.012$. Calibrated parameters: $\gamma_c=0.782$, trade elasticity $\sigma=4$ (Tombe & Zhu 2019), skill substitution $\rho=0.333$ (Chen & Bai 2018), tradable intermediate share $b^I_{Y,j}=0.698$.
- **Comparative statics.** (i) Larger public-service spillover elasticity and smaller productivity spillover elasticity both raise the welfare gain from reallocation. (ii) Higher property-tax rates and lower exemption thresholds raise the welfare gain. (iii) Migration frictions (hukou barriers, measured via Zhang & Lu's settlement-threshold index using projection pursuit, equal-weight, and entropy methods) reduce the welfare gain from optimal reallocation by 2.42%, 2.38%, and 2.37% respectively.

## Mechanisms Identified

> **Paper claim** — Welfare gains arise because heterogeneous labor generates *cross-skill* externalities that the decentralized market fails to internalize: positive productivity spillovers on the production side and (mostly negative) congestion plus some positive public-service spillovers on the consumption side. Because same-skill congestion of low-skill agglomeration is strongly negative while cross-skill productivity spillovers are positive, a more balanced spatial mix of skills — high-skill toward smaller cities, low-skill toward larger cities — internalizes these externalities and Pareto-improves welfare. Hukou frictions act as an iceberg cost that suppresses the efficient reallocation and thus the attainable welfare gain.

## Methods and Measures

- Quantitative spatial general equilibrium model; exact-hat algebra (精确帽子代数法, Dekle et al. 2008) for counterfactuals.
- GMM estimation of productivity and public-service spillover elasticities.
- Data: 2015 initial equilibrium; region×skill population, income (wage, business, capital, net transfer), housing, and tax data built by combining provincial/city statistical yearbooks with 2015 China Household Finance Survey (CHFS) shares, validated against 2015 1% population sample; bilateral trade shares from the CEADs 2015 city-scale multi-regional input–output table (Zheng et al. 2021).

## Concepts Engaged

- Human-capital externalities and skill complementarity (人力资本外部性, 技能互补).
- Cross-skill (cross-type) productivity and public-service spillover effects (溢出效应).
- Spatial allocation of human capital / regional talent layout (人力资本空间配置, 人才区域合理布局).
- Hukou system as a labor-mobility friction; property/real-estate tax and public-service provision.
- Pareto efficiency and the second welfare theorem in a spatial economy.

## Connection to Debates

> **Paper claim** — Against a literature that mostly studies China's labor mobility with *homogeneous*-labor QSE frameworks (Fan 2019; Tombe & Zhu 2019; Ma & Tang 2020; Wang et al. 2022) or that treats skill heterogeneity without cross-skill spillovers (Liu & Chen; Zhou et al.; Xu et al.), this paper argues that ignoring cross-skill spillovers substantially understates the welfare effects of optimizing human-capital allocation, and that the efficient spatial layout is more balanced than the observed high-skill concentration in large cities.

Related debates: optimal spatial distribution of skills / city size; whether decentralized labor sorting is efficient; role of hukou reform and place-based fiscal policy in a unified national market (全国统一大市场).

## Theoretical / Empirical Significance

Provides a theoretical framework for analyzing cross-skill spillovers and human-capital spatial optimization, adapted to Chinese institutions (hukou, property tax, endogenous public-service supply). Offers a policy rationale for China's push toward rational regional talent distribution and a unified national market under negative population growth: removing mobility barriers, optimizing fiscal transfers toward lower-wage regions, and eventually introducing a property tax whose revenue funds local public services. Contributes finely-estimated cross-skill productivity and public-service spillover elasticities for China.

## Notes and Caveats

- Skill is proxied by a binary education split (junior-high-and-below vs. senior-high-and-above), abstracting from finer heterogeneity.
- Closed economy — no international trade.
- Housing endowments are treated as exogenous, i.i.d. random, redistributed each static period; skill types are exogenous and non-convertible (no endogenous human-capital accumulation / education choice).
- Property-tax analysis is counterfactual: China has not broadly levied a property tax, so rates are borrowed from Zhang & Hou's tax-capacity estimates rather than observed.
- Static, single-period calibration to 2015 data; migration frictions/hukou treated as exogenous in the baseline (relaxed only in comparative statics).
- Detailed GMM estimation procedure and data sources are in an online appendix (not in the main text).
