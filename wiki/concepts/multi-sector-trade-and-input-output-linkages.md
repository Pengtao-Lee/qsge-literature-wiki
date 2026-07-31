---
title: "Multi-Sector Trade and Input–Output Linkages"
type: concept
status: active
papers:
  - caliendo-parro-2015-trade-welfare-nafta
  - tombe-zhu-2019-trade-migration-china
  - liu-zhang-cai-2026-network-infrastructure
  - eaton-kortum-2002-technology-geography-trade
  - redding-rossi-hansberg-2017-quantitative-spatial
  - redding-2016-goods-trade-factor-mobility-welfare
  - kleinman-liu-redding-2023-dynamic-spatial
  - lin-liu-zhou-2026-data-market
  - ma-tang-2020-geography-trade
tags:
  - multi-sector trade
  - input-output linkages
  - intermediate goods
  - exact-hat algebra
  - trade elasticity
  - quantitative trade
---

# Multi-Sector Trade and Input–Output Linkages

Multi-sector quantitative trade models extend the single-sector Eaton-Kortum framework to economies with many sectors, sector-specific trade elasticities, and input-output (I-O) linkages: each sector produces a continuum of goods using labor and composite intermediate inputs drawn from all sectors. Because a sector's input-bundle cost depends on the price indices of its input-supplying sectors, a trade-cost or tariff change propagates through the production network — an amplification channel absent from single-sector models. Caliendo and Parro's (2015) study of NAFTA is the canonical implementation, delivering a multi-sector gravity equation, a tripartite estimator for sectoral trade elasticities that is robust to any gravity microfoundation, and exact-hat-algebra welfare counterfactuals in which traded intermediates and I-O linkages roughly double the measured welfare effects of tariff changes. Chinese applications in this corpus — Tombe and Zhu's internal-trade analysis and Liu, Zhang, and Cai's network-infrastructure study — use exactly this machinery on interregional input-output tables. This page develops the model components, the estimation strategy, the amplification result, and the extensions that carry I-O structure into dynamic and non-rival-factor settings.

## From One Sector to Many

The starting point is the single-sector Ricardian framework, in which a country's productivity for each good is a Fréchet draw with a common dispersion parameter $\theta$, and trade shares take the structural gravity form $\pi_{ni} = T_i(c_i d_{ni})^{-\theta}/\Phi_n$ ([[eaton-kortum-2002-technology-geography-trade]]). The multi-sector extension allows productivity dispersion to differ across sectors: productivity in sector $j$ of country $n$ is drawn from $F_n^j(z) = e^{-\lambda_n^j z^{-\theta^j}}$, where $\lambda_n^j$ governs absolute advantage and the sector-specific $\theta^j$ governs comparative advantage. Each sector produces a continuum of intermediate goods, some tradable and some not; non-tradable sectors are the limiting case in which trade costs are infinite. The sectoral price index is $P_n^j = A^j \Phi_n^{j^{-1/\theta^j}}$, where the sector-specific price parameter $\Phi_n^j = \sum_i \lambda_i^j (c_i^j \kappa_{ni}^j)^{-\theta^j}$ is the multi-sector analogue of the Eaton-Kortum price parameter. Trade shares in each sector are the multi-sector gravity equation

$$ \pi_{ni}^j = \frac{\lambda_i^j \left[ c_i^j \kappa_{ni}^j \right]^{-\theta^j}}{\sum_{h} \lambda_h^j \left[ c_h^j \kappa_{nh}^j \right]^{-\theta^j}}, $$

where $\kappa_{ni}^j$ combines iceberg costs and ad-valorem tariffs. The survey of [[redding-rossi-hansberg-2017-quantitative-spatial]] situates this multi-sector structure inside the broader quantitative spatial toolkit, emphasizing that input-output linkages provide an additional mechanism through which local shocks spread across the economy. Because sectors differ in $\theta^j$, the same aggregate trade pattern can hide very different sectoral responses to a common tariff change — the fact that motivates sectoral heterogeneity in the first place.

## Input–Output Linkages and the Input-Bundle Channel

The distinctive structural feature of the multi-sector model is that production uses intermediate goods from all sectors. The cost of the unit input bundle in sector $j$ of country $n$ is

$$ c_n^j = \Upsilon_n^j \, w_n^{\gamma_n^j} \prod_{k=1}^{J} \left( P_n^k \right)^{\gamma_n^{k,j}}, $$

where $\gamma_n^j$ is the value-added share, $\gamma_n^{k,j}$ is the share of materials from sector $k$, and $\Upsilon_n^j$ is a constant. The dependence of $c_n^j$ on the price indices of all sectors is the key difference from a one-sector or a no-linkages model: a change in policy that affects the price in any single sector affects all sectors indirectly through the input bundle. In the NAFTA application, [[caliendo-parro-2015-trade-welfare-nafta]] document that the input-bundle channel is quantitatively central — most goods traded are intermediates (over 80 percent of Mexico's imports from NAFTA partners in 1993), and I-O tables show strong cross-sector and tradable-nontradable interdependence. The same Cobb-Douglas input-bundle structure is used by [[tombe-zhu-2019-trade-migration-china]] for China's two-sector (agriculture, non-agriculture) internal trade model, with intermediate shares calibrated to China's interregional I-O tables, and by [[liu-zhang-cai-2026-network-infrastructure]], who embed a network-infrastructure term in the effective trade cost of a Caliendo-Parro-style model. The input-bundle channel is also what makes tariffs in one sector affect the cost competitiveness of exporters in another, so that a tariff cut on electrical machinery improves the position of downstream assemblers even if their own tariffs are unchanged.

## Exact-Hat Algebra with Intermediate Goods

A central methodological contribution of [[caliendo-parro-2015-trade-welfare-nafta]] is to solve the model in relative changes from a base year, following the exact-hat algebra of Dekle, Eaton, and Kortum. The counterfactual equilibrium is characterized by the relative change in input-bundle costs $\hat c_n^j = \hat w_n^{\gamma_n^j} \prod_k (\hat P_n^k)^{\gamma_n^{k,j}}$, the relative change in sectoral price indices $\hat P_n^j = \left[ \sum_i \pi_{ni}^j (\hat \kappa_{ni}^j \hat c_i^j)^{-\theta^j} \right]^{-1/\theta^j}$, the relative change in trade shares $\hat \pi_{ni}^j = \left( \hat c_i^j \hat \kappa_{ni}^j / \hat P_n^j \right)^{-\theta^j}$, and market-clearing conditions for expenditure and trade balance. This system requires only two tariff structures, base-year trade shares, value-added shares, I-O shares, and the sectoral elasticities $\theta^j$; it avoids estimating fundamental productivities and iceberg costs entirely, which is the point of the relative-change formulation. The same technique underlies the counterfactual exercises of [[tombe-zhu-2019-trade-migration-china]] for China and of the dynamic spatial model of [[kleinman-liu-redding-2023-dynamic-spatial]], who generalize exact-hat algebra to accommodate forward-looking capital accumulation. Within the multi-sector model, the change in real wages can be decomposed into a final-goods term (changes in domestic expenditure shares weighted by $\alpha_n^j/\theta^j$), an intermediate-goods term (the same weighted by $(1-\gamma_n^j)/\gamma_n^j$), and a sectoral-linkages term capturing relative price changes across input-supplying sectors. This decomposition is what allows the welfare effects of a tariff change to be attributed to distinct economic channels rather than treated as a black box.

## Sectoral Trade-Elasticity Estimation

The sectoral dispersion parameters $\theta^j$ are the only structural parameters the multi-sector model requires, and [[caliendo-parro-2015-trade-welfare-nafta]] propose a method to estimate them that is consistent with any trade model delivering a multiplicative gravity equation. The estimator forms a ratio of trade flows across a triplet of countries $(n, i, h)$, taking the cross-product of flows in one direction over the cross-product in the other:

$$ \frac{X_{ni}^j X_{ih}^j X_{hn}^j}{X_{nh}^j X_{hi}^j X_{in}^j} = \left( \frac{\kappa_{ni}^j}{\kappa_{in}^j} \frac{\kappa_{ih}^j}{\kappa_{hi}^j} \frac{\kappa_{hn}^j}{\kappa_{nh}^j} \right)^{-\theta^j}. $$

All price terms, technology parameters, and country fixed effects cancel, leaving a relationship between observable trade flows and observable tariff asymmetries that identifies $\theta^j$ without assuming symmetric iceberg costs. Using 1993 data across 20 tradable sectors, the estimates range from 0.37 (other transport equipment) to 51.08 (petroleum), and an F-test rejects a common elasticity across sectors — echoing the fact that [[eaton-kortum-2002-technology-geography-trade]]'s aggregate estimate of $\theta = 8.28$ is a single value that sectoral heterogeneity masks. The estimated aggregate elasticity (around 4.5) is in line with the values used elsewhere in the corpus. Because the estimator relies only on the multiplicative structure of gravity, the same method applies under Armington, Eaton-Kortum, or Melitz microfoundations.

> **Current assessment (2026-07):** The Caliendo-Parro tripartite estimator produces a wide and statistically heterogeneous range of sectoral elasticities, and the rejection of a common elasticity is robust. But the sectoral estimates are not all stable to sample trimming: several sectors (basic metals, machinery, autos) change sign when small-trade observations are dropped. Welfare conclusions that lean heavily on the elasticity of one or two sectors should therefore be read with caution.

## The Amplification Result

The headline quantitative finding of [[caliendo-parro-2015-trade-welfare-nafta]] is that intermediate goods and I-O linkages amplify the measured welfare effects of tariff changes. For NAFTA, the benchmark model implies welfare effects that are on average about 71 percent lower in a one-sector model, about 62 percent lower in a multi-sector model without materials, and about 50 percent lower in a multi-sector model without sectoral linkages; trade effects are correspondingly reduced by about 50, 26, and 18 percent. The mechanisms are distinct. The materials channel operates because a tariff reduction lowers the price of imported intermediates, which feeds into the input bundles of all sectors that use them. The sectoral-linkage channel operates because sectors purchase materials from many other sectors, so a price decline in one sector propagates to the competitiveness of downstream producers. In the NAFTA numbers, Mexico's welfare rises by 1.31 percent, the United States by 0.08 percent, and Canada falls by 0.06 percent; the gains are concentrated in sectors that were highly protected (textiles), highly substitutable (petroleum), or deeply embedded in cross-border production chains (electrical machinery, autos). The same pattern recurs in [[tombe-zhu-2019-trade-migration-china]]'s China application: the gains from internal trade cost reductions are roughly three to four times larger with intermediates than without, and the authors attribute the bulk of the difference between their full model and a simple back-of-the-envelope calculation to intermediate inputs in production.

> **Cross-pattern (2026-07):** Across the two most influential applications — Caliendo-Parro for NAFTA and Tombe-Zhu for China — intermediate goods and I-O linkages consistently raise the measured effects of trade-cost and tariff changes by large factors. The one-sector or no-materials model does not merely scale down the answer; it removes a mechanism (cost transmission through the production network) that is first-order for sectoral reallocation and for the distribution of gains across countries.

## I-O Linkages in Spatial and Regional Applications

The multi-sector I-O machinery has been carried directly into regional and infrastructure applications in this corpus. [[tombe-zhu-2019-trade-migration-china]] calibrate a two-sector model with intermediate input shares from China's interregional I-O tables, and their counterfactuals show that internal trade cost reductions raise aggregate labor productivity and welfare by over 11 percent, with intermediates accounting for most of the gap between the full model and a no-intermediates version. [[liu-zhang-cai-2026-network-infrastructure]] build a Caliendo-Parro-style model with tradable and non-tradable sectors and I-O linkages to evaluate China's network infrastructure, using the real-wage decomposition to split welfare gains into a trade-share channel and an I-O linkage channel. At the national level the I-O channel accounts for roughly 53 percent of the welfare gain and the trade-share channel roughly 47 percent, but the split is strongly regional: the I-O channel dominates in the east (about 59 percent), where industrial linkages are denser, while the trade-share channel dominates in the west (about 64 percent), where infrastructure primarily reduces the cost of importing goods. These applications show that the amplification result is not confined to international tariff policy; it is equally central for evaluating internal trade frictions and domestic infrastructure investment.

## Extensions: Dynamics and Non-Rival Factors

Two extensions push the multi-sector I-O structure beyond its static, goods-only domain. The first adds dynamics. [[kleinman-liu-redding-2023-dynamic-spatial]] develop a dynamic spatial general equilibrium model with forward-looking capital accumulation and migration, but their baseline is a single-sector Armington economy without I-O linkages; they explicitly note that multiple sectors and input-output linkages can be incorporated, and they generalize dynamic exact-hat algebra to the intertemporal setting. The interaction of I-O structure with gradual capital and labor dynamics — how a sectoral tariff shock propagates over time as capital accumulates and workers relocate — remains largely unexplored. The second extension introduces non-rival factors. [[lin-liu-zhou-2026-data-market]] incorporate a data sector as a non-rival intermediate factor in a multi-sector quantitative spatial model of China, showing that market integration for data operates through scale economies and resource-reallocation effects rather than through the conventional trade-cost channel. Because data can be replicated at zero marginal cost, the gravity and welfare logic of the I-O model must be re-derived when the intermediate good itself is non-rival — a frontier that connects the I-O machinery to the wiki's treatment of data as a non-rival factor.

> **Current assessment (2026-07):** Multi-sector models with I-O linkages remain almost entirely static, and dynamic spatial models with forward-looking investment have so far been built without I-O structure. Combining the two — sectoral production networks with gradual capital accumulation and migration — is an open frontier, and the non-rival-data extension of Lin, Liu, and Zhou (2026) is an early step toward one direction of it.

## Tensions, Limitations, and Open Questions

The strengths of the multi-sector I-O framework come with identifiable limitations. The model is static, holds fundamental total factor productivity and aggregate trade deficits fixed, and treats capital implicitly through the intermediate-input share; it therefore measures the pure effect of trade-cost and tariff changes conditional on a stable production structure. Welfare results are sensitive to the sectoral elasticities, and the range of estimated $\theta^j$ values is wide enough that results for sectors with poorly identified elasticities (those flagged in the robustness analysis) should be treated cautiously. The framework also abstracts from firm heterogeneity, so the extensive margin of firm entry and exit — which the Melitz-based spatial model of [[ma-tang-2020-geography-trade]] shows can be decisive in a spatial setting — is absent. And because the standard implementation holds populations fixed, it sets aside the factor-mobility channel that [[redding-2016-goods-trade-factor-mobility-welfare]] shows is first-order for welfare in single-sector quantitative spatial models: with mobile labor, the domestic-trade-share sufficient statistic must be augmented by population changes, a margin the I-O framework does not endogenize. [[redding-rossi-hansberg-2017-quantitative-spatial]] note that richer specifications with multiple sectors, non-traded goods, and factor mobility are feasible within the same toolkit, but each addition raises the data and computational burden. Open questions include the role of non-traded inputs in propagating shocks, sectoral dynamics of structural transformation, and the endogeneity of technology to market size along the lines of spatial growth models.

## Cross-links

**Concepts:**
- [[ricardian-quantitative-trade]] — the single-sector EK foundations this page extends
- [[gravity-in-spatial-economics]] — the gravity structure common to every sector
- [[quantitative-spatial-equilibrium]] — the general-equilibrium architecture that embeds multi-sector trade
- [[data-as-a-non-rival-factor-in-spatial-models]] — non-rival intermediates and market integration

**Mechanisms:**
- [[spatial-innovation-and-structural-transformation]] — sectoral reallocation and endogenous technology
- [[endogenous-infrastructure-and-spatial-development]] — infrastructure as a shifter of trade costs

**Synthesis:**
- [[transport-infrastructure-and-urban-welfare]] — trade-cost counterfactuals for infrastructure
- [[structural-transformation-and-regional-convergence]] — sectoral change and regional outcomes
- [[network-infrastructure-and-market-integration]] — the I-O channel in China's market integration

**Major sources:**
- [[caliendo-parro-2015-trade-welfare-nafta]]
- [[tombe-zhu-2019-trade-migration-china]]
- [[eaton-kortum-2002-technology-geography-trade]]
- [[liu-zhang-cai-2026-network-infrastructure]]
- [[redding-2016-goods-trade-factor-mobility-welfare]]
- [[lin-liu-zhou-2026-data-market]]
