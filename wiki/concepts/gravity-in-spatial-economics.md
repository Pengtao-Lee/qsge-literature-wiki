---
title: "Gravity in Spatial Economics"
type: concept
status: active
papers:
  - allen-arkolakis-2014-trade-topography
  - redding-rossi-hansberg-2017-quantitative-spatial
  - monte-redding-rossi-hansberg-2018-commuting
  - kleinman-liu-redding-2023-dynamic-spatial
  - tombe-zhu-2019-trade-migration-china
  - ma-tang-2020-geography-trade
  - lin-liu-zhou-2026-data-market
  - eaton-kortum-2002-technology-geography-trade
  - caliendo-parro-2015-trade-welfare-nafta
  - redding-2016-goods-trade-factor-mobility-welfare
  - tsivanidis-2026-urban-transit-infrastructure
  - ahlfeldt-redding-sturm-wolf-2015-economics-density
tags:
  - gravity equation
  - trade elasticity
  - commuting
  - migration
  - spatial economics
---

# Gravity in Spatial Economics

The gravity equation in spatial economics states that bilateral flows — whether of goods, migrants, or daily commuters — between two locations are proportional to the product of their economic masses (typically population, employment, or total expenditure) and inversely proportional to some measure of distance or friction between them. In quantitative spatial models, gravity is not an empirical approximation but a structural relationship derived from underlying assumptions about preferences (CES or Fréchet), technology (constant-returns Armington, Ricardian Eaton-Kortum, or monopolistic competition with firm heterogeneity), and the distribution of idiosyncratic shocks. The elasticity parameter that governs the slope of the gravity relationship — whether the trade elasticity for goods or the commuting or migration elasticity for people — is the single most important structural input to quantitative spatial equilibrium (QSE) models, because it governs the sensitivity of all equilibrium outcomes to changes in frictions and appears as a sufficient statistic in welfare formulae. The same gravity form unifies goods trade, commuting, and migration, and the elasticity estimates that discipline it now come from a common toolkit spanning international trade and urban economics.

## Gravity in Goods Trade: Structural Foundations

The gravity equation for goods trade arises from three distinct microfoundations, each yielding the same reduced-form relationship but giving different structural interpretations to the key elasticity parameter. Under the **Armington** assumption — goods differentiated by location of origin with perfect competition — [[allen-arkolakis-2014-trade-topography]] derives the gravity equation from CES preferences:

$$ X(i,j) = \left(\frac{T(i,j)w(i)}{A(i)P(j)}\right)^{1-\sigma} w(j)L(j), $$

where $X(i,j)$ is the value of trade from $i$ to $j$, $T(i,j)$ is the iceberg trade cost, $\sigma$ is the elasticity of substitution between varieties, $w(i)/A(i)$ is the marginal cost of production, and $P(j)$ is the CES price index capturing multilateral resistance. The trade elasticity here is $\sigma-1$.

Under the **Eaton-Kortum** Ricardian framework, productivity for each good is drawn from a country-specific Fréchet distribution $F_i(z) = e^{-T_i z^{-\theta}}$, and the trade elasticity is $\theta$ — the dispersion of productivity draws rather than the substitutability of varieties. Solving for the probability that location $i$ is the lowest-cost supplier to $n$ delivers the structural gravity equation

$$ \pi_{ni} = \frac{T_i (c_i d_{ni})^{-\theta}}{\Phi_n}, \qquad \Phi_n = \sum_{k} T_k (c_k d_{nk})^{-\theta}, $$

where $d_{ni}$ is an iceberg barrier, $c_i$ is the input cost, and the price parameter $\Phi_n$ — equivalently the price index $p_n = \gamma\Phi_n^{-1/\theta}$ — is the multilateral resistance term summarizing the technology, costs, and barriers of all potential suppliers ([[eaton-kortum-2002-technology-geography-trade]]). [[tombe-zhu-2019-trade-migration-china]] employs this framework for China's internal trade, with the gravity equation providing the identifying variation.

Under **monopolistic competition with firm heterogeneity** (Melitz), the gravity relationship includes additional terms reflecting firm selection into exporting. [[ma-tang-2020-geography-trade]] develops a Melitz-based QSE variant for Chinese cities, in which the aggregate gravity elasticity combines both the intensive margin (existing exporters ship more) and the extensive margin (new firms enter export markets). The extensive margin amplifies the aggregate trade response to cost changes, and this amplification varies with the dispersion of firm productivities.

> **Cross-pattern (2026-07):** Despite their different microfoundations, the Armington, Eaton-Kortum, and Melitz frameworks all produce the same gravity functional form for aggregate trade flows, and the same welfare formula in terms of the domestic trade share (Arkolakis, Costinot, and Rodriguez-Clare 2012). The frameworks diverge only in predictions about margins the aggregate gravity equation does not capture — such as the distribution of trade across firms or the response of variety to trade liberalization. This convergence is a central theme across the QSE literature ([[redding-rossi-hansberg-2017-quantitative-spatial]]).

## The Trade Elasticity Parameter

The trade elasticity — the parameter governing the slope of the goods-trade gravity equation — is the central structural parameter in QSE models because it scales the welfare gains from trade and the sensitivity of all equilibrium outcomes to trade-cost changes. In the Armington model, the trade elasticity is $\sigma-1$, estimated from price and expenditure data. The quantitative illustration in [[redding-rossi-hansberg-2017-quantitative-spatial]] sets the elasticity of substitution to $\sigma = 5$, implying a trade elasticity of 4 in line with cross-country price-based estimates, while [[allen-arkolakis-2014-trade-topography]] uses $\sigma = 9$ (trade elasticity of 8), calibrated to Eaton and Kortum (2002). In the Eaton-Kortum framework, the trade elasticity $\theta$ is estimated from the cross-sectional relationship between trade flows and trade costs; Eaton and Kortum's central method-of-moments estimate is $\theta = 8.28$, with alternative estimates of 3.60 from wage data and 12.86 from price data, and typical values used in applications range from 4 to 8 ([[tombe-zhu-2019-trade-migration-china]]). At the sectoral level, the tripartite estimator of [[caliendo-parro-2015-trade-welfare-nafta]] — which cancels iceberg costs and fixed effects by forming ratios of trade flows across country triplets — yields sectoral elasticities ranging from 0.37 to 51.08 and an aggregate elasticity around 4.5, and rejects a common elasticity across sectors.

The trade elasticity determines the sufficient-statistics formula for welfare gains from trade. In any QSE model satisfying the gravity structure, the welfare gain from moving from autarky to the observed trade equilibrium is $\hat{W} = \pi_{nn}^{-1/(\sigma-1)}$ in the Armington case or $\hat{W} = \pi_{nn}^{-1/\theta}$ in the Eaton-Kortum case, where $\pi_{nn}$ is the domestic trade share ([[redding-rossi-hansberg-2017-quantitative-spatial]]). This parameter is also the key determinant of the spatial responsiveness of populations and wages to changes in trade costs: a higher trade elasticity means locations adjust more to a given reduction in trade frictions.

## Gravity in Commuting

The gravity structure extends naturally to commuting flows when workers have idiosyncratic preferences for residence-workplace pairs drawn from a Fréchet distribution. [[monte-redding-rossi-hansberg-2018-commuting]] derives the conditional commuting probability:

$$ \lambda_{ni|n}^{R} = \frac{B_{ni}(w_i / \kappa_{ni})^{\epsilon}}{\sum_{s \in N} B_{ns}(w_s / \kappa_{ns})^{\epsilon}}, $$

where $\lambda_{ni|n}^{R}$ is the probability that a resident of location $n$ commutes to workplace $i$, $B_{ni}$ captures average amenities of the commute pair, $\kappa_{ni}$ is the iceberg commuting cost, and $\epsilon$ is the Fréchet shape parameter — the commuting elasticity. This equation exhibits exactly the same gravity form as goods trade: the bilateral flow depends on the attractiveness of the destination (wage $w_i$) and the bilateral friction ($\kappa_{ni}$), relative to a multilateral resistance term capturing all alternative workplaces.

A key empirical finding is that the commuting distance elasticity is substantially higher than the trade distance elasticity. [[monte-redding-rossi-hansberg-2018-commuting]] estimates the composite commuting distance coefficient at $-4.43$, compared to $-1.29$ for goods trade, consistent with the intuition that moving people is more costly than moving goods across geographic space. The commuting elasticity $\epsilon$ is estimated at approximately 3.30, smaller than typical trade elasticities, implying that commuting flows are relatively insensitive to economic incentives. In Berlin, [[ahlfeldt-redding-sturm-wolf-2015-economics-density]] estimates the commuting semi-elasticity with respect to travel time at approximately 0.07 per minute, again implying a steep decay of commuting probabilities with distance. Within-city commuting gravity also emerges from Fréchet-distributed match productivities in [[tsivanidis-2026-urban-transit-infrastructure]]: the probability that a type-$g$ worker residing in $i$ works in $j$ is $w_{jg}^{\theta_g}/d_{ija}^{\theta_g}$ relative to a commuter-market-access term, with the aggregate commuting elasticity estimated at roughly $\theta = 3.4$ and high-skilled workers substantially less elastic ($\theta_H = 2.44 < \theta_L = 4$). These estimates carry direct welfare consequences: Monte, Redding, and Rossi-Hansberg find that the median reduction in commuting costs over 1990–2010 (about 12 percent) raises welfare by 3.3 percent, and Tsivanidis finds that a value-of-travel-time-saved calculation captures only about 52 percent of the total welfare gain from transit.

> **Cross-pattern (2026-07):** The three flow domains have very different gravity slopes. Goods-trade distance elasticities are around $-1.3$; commuting distance elasticities are around $-4.4$; and the Berlin travel-time semi-elasticity is about 0.07 per minute. The consistently steeper gradients for people than for goods imply that policies affecting the movement of workers — transit investment, housing supply, commuting infrastructure — have larger local incidence than policies affecting goods trade.

## Gravity in Migration

The same Fréchet-based gravity structure governs migration flows, with a crucial difference: migration involves permanent relocation rather than daily commuting, and therefore depends on expected future utility rather than just current wages. In static QSE models, the gravity equation for migration has the same form as for commuting, with migration costs playing the role of commuting costs ([[redding-rossi-hansberg-2017-quantitative-spatial]]).

[[tombe-zhu-2019-trade-migration-china]] applies the Eaton-Kortum gravity framework to estimate migration costs in China, finding that the average cost of rural-to-urban migration within a province in 2000 was equivalent to shrinking real income by a factor of nearly three, with between-province moves an order of magnitude more costly. These enormous frictions explain why, despite large income differentials, only 4.2 percent of Chinese workers migrated across provinces in 2000. The gravity equation for migration provides the identifying variation for these cost estimates.

Migration gravity also connects to welfare sufficient statistics when labor is mobile. [[redding-2016-goods-trade-factor-mobility-welfare]] shows that with Fréchet preference heterogeneity across locations, the common change in expected utility between autarky and trade depends on changes in both the domestic trade share and population:

$$ \frac{\bar U^T}{\bar U^A} = \left( \frac{1}{\pi_{nn}^T} \right)^{\alpha/\theta} \left( \frac{L_n^A}{L_n^T} \right)^{1/\varepsilon + (1-\alpha)}, $$

so that the gravity-based home-share formula must be augmented by a population term once workers can relocate. In dynamic settings, migration gravity inherits a forward-looking component: [[kleinman-liu-redding-2023-dynamic-spatial]] show that the gravity structure for migration flows is preserved but now depends on expected continuation values rather than current utility alone, and their dynamic exact-hat algebra solves for transition paths using only observed migration shares and structural parameters.

## Bilateral vs. Multilateral Resistance

A distinctive feature of structural gravity in QSE models — distinguishing it from reduced-form gravity regressions — is the presence of multilateral resistance terms. In the goods trade gravity equation, the denominator $\Phi_n$ (or the CES price index $P(j)$) captures the fact that location $n$ imports from all potential suppliers, not just $i$. A change in trade costs between locations $i$ and $n$ affects not only their bilateral trade but also trade between all other pairs through general-equilibrium adjustments in the price index ([[redding-rossi-hansberg-2017-quantitative-spatial]]; [[allen-arkolakis-2014-trade-topography]]).

The same logic applies to commuting and migration gravity: the denominator $\sum_s B_{ns}(w_s/\kappa_{ns})^{\epsilon}$ captures the attractiveness of all alternative workplaces. In city models, the multilateral-resistance object is the commuter market access (CMA) term — the sum over workplaces of wages discounted by commuting costs and by the employment-side CMA — which [[tsivanidis-2026-urban-transit-infrastructure]] shows is the sufficient statistic through which transit improvements raise incomes and reshape the city, and which [[monte-redding-rossi-hansberg-2018-commuting]] uses to account for the spillover of local labor demand shocks across commuting links. A transport improvement that reduces commuting costs to one employment center also reduces the relative attractiveness of all other centers, potentially drawing commuters away from them. This interdependence is what makes reduced-form estimation of gravity relationships potentially misleading for policy: the treatment effect of a transport improvement depends on the broader network structure, not just on the improved link.

> **Cross-pattern (2026-07):** The multilateral resistance structure provides an explanation for the "distance puzzle" — the observation that the estimated distance coefficient in gravity regressions has not declined over time despite declining transport costs. In structural gravity, the distance coefficient reflects both the direct effect of bilateral distance and the general-equilibrium effect of changing remoteness, and these two forces can move in opposite directions as transport networks expand ([[redding-rossi-hansberg-2017-quantitative-spatial]]).

## Empirical Gravity: Estimation and Identification

Structural gravity estimation in QSE models typically proceeds in two steps. First, the gravity equation is estimated using origin-destination fixed effects to absorb multilateral resistance, yielding consistent estimates of the trade elasticity from the coefficient on bilateral trade costs. Eaton and Kortum (2002) pioneered this two-step strategy, estimating the competitiveness of 19 OECD countries from bilateral trade and geography and recovering the trade elasticity from price data. [[allen-arkolakis-2014-trade-topography]] implements a sophisticated variant that combines geographic information system (GIS) data on transportation networks with the fast-marching method to construct mode-specific trade costs, then uses a discrete-choice framework to estimate the relative costs of road, rail, water, and air transport; the estimated geographic trade costs predict 65 percent of the variation in observed bilateral trade flows from the Commodity Flow Survey. At the sectoral level, [[caliendo-parro-2015-trade-welfare-nafta]] form a triple-ratio estimator that cancels unobserved iceberg costs and fixed effects, identifying sectoral trade elasticities from tariff asymmetries alone.

Second, the estimated trade costs and trade elasticity are used within the structural model to recover unobserved fundamentals (productivities, amenities) and to compute counterfactuals. [[tombe-zhu-2019-trade-migration-china]] applies this approach to China's internal trade, using inter-regional input-output tables for 2002 and 2007 and the Head-Ries approach to back out trade costs from trade shares and the trade elasticity. They find that internal trade costs fell by 10–15 percent over this period, driven by policy reforms that reduced local market protections and by infrastructure investments.

A recurring challenge is the endogeneity of trade costs: transportation networks are not randomly assigned but are typically built where trade volumes are already large. [[allen-arkolakis-2014-trade-topography]] mitigates this by estimating travel cost parameters from mode-specific trade shares, which controls for the overall level of bilateral trade through what amounts to an origin-destination fixed effect, though endogeneity concerns remain for the relative mode-specific shares.

> **Current assessment (2026-07):** The identification of the trade elasticity from cross-sectional gravity faces an inherent challenge: observed trade flows are jointly determined by trade costs and the trade elasticity. A given pattern of trade can be rationalized with high trade costs and a high elasticity or low trade costs and a low elasticity. Estimating the trade elasticity separately requires additional variation — either from time-series changes in trade costs (as in Tombe-Zhu's use of panel data) or from micro-level price data — and the same challenge applies to the commuting and migration elasticities estimated from cross-sectional flows.

## Methodological Diversity and the Gravity Slope

The fact that the same gravity equation arises from different microfoundations means that the trade elasticity has different structural interpretations across models. In the Armington model, it is the elasticity of substitution between varieties; in the Eaton-Kortum model, it is the dispersion of productivity draws; in the Melitz model, it combines both the intensive and extensive margins of trade. These different interpretations matter for counterfactual predictions along margins beyond aggregate trade flows — such as the response of the measure of varieties or the distribution of firm sizes to trade liberalization ([[redding-rossi-hansberg-2017-quantitative-spatial]]; [[ma-tang-2020-geography-trade]]).

[[ma-tang-2020-geography-trade]] demonstrates that the Melitz-based QSE model generates different welfare predictions from Eaton-Kortum for the same aggregate trade elasticity, because the extensive margin of firm entry amplifies the welfare effects of trade cost reductions in locations with more favorable productivity distributions. This divergence is largest for counterfactuals involving large changes in trade costs, where selection effects are strongest. The ACR equivalence among the three families also breaks when factors are mobile: [[redding-2016-goods-trade-factor-mobility-welfare]] shows that with heterogeneous-worker labor mobility, constant-returns and increasing-returns models calibrated to the same initial equilibrium have different counterfactual predictions for trade-cost reductions, because population reallocation changes the measure of goods produced in the increasing-returns case.

## Open Questions

Several frontiers remain in gravity analysis. In dynamic settings with forward-looking migration, the gravity structure becomes time-dependent, with current migration flows depending on expectations of future wages and amenities as well as current frictions ([[kleinman-liu-redding-2023-dynamic-spatial]]). The extension of gravity to non-rival data flows, as explored by [[lin-liu-zhou-2026-data-market]], raises new questions about the appropriate structural form when the good being traded is non-rival and can be replicated at zero marginal cost. The estimation of gravity in the presence of firm heterogeneity and selection bias — where only firms that export appear in the trade data — remains a methodologically active area, with implications for the interpretation of estimated trade elasticities. The sectoral elasticity estimates of [[caliendo-parro-2015-trade-welfare-nafta]], which span two orders of magnitude across sectors, raise the question of when a single aggregate elasticity is an acceptable simplification in gravity-based counterfactuals. And within cities, the separate estimation of commuting elasticities by skill group ([[tsivanidis-2026-urban-transit-infrastructure]]) shows that the gravity slope itself is heterogeneous across workers, so that aggregate elasticities may mask substantial distributional differences in how locations and workers respond to transport improvements.

## Cross-links

**Concepts:**
- [[quantitative-spatial-equilibrium]] — the general-equilibrium architecture within which gravity equations are embedded
- [[ricardian-quantitative-trade]] — the Eaton-Kortum foundations of structural gravity
- [[multi-sector-trade-and-input-output-linkages]] — sectoral gravity and the amplification of trade-cost changes
- [[local-employment-elasticities-and-commuting]] — commuting gravity and heterogeneous labor supply responses
- [[economics-of-the-hukou-system]] — migration frictions in China estimated through migration gravity
- [[data-as-a-non-rival-factor-in-spatial-models]] — extending gravity to non-rival data flows

**Mechanisms:**
- [[endogenous-infrastructure-and-spatial-development]] — how infrastructure investments shift the gravity relationship
- [[welfare-effects-of-migration-in-chinese-cities]] — welfare implications of migration gravity in urban China

**Synthesis:**
- [[trade-and-migration-cost-reductions-in-china]] — gravity-based decomposition of China's productivity growth
- [[network-infrastructure-and-market-integration]] — gravity estimates of infrastructure's impact on market access
- [[transport-infrastructure-and-urban-welfare]] — commuting gravity and the welfare effects of transit

**Major sources:**
- [[eaton-kortum-2002-technology-geography-trade]]
- [[redding-rossi-hansberg-2017-quantitative-spatial]]
- [[monte-redding-rossi-hansberg-2018-commuting]]
- [[tombe-zhu-2019-trade-migration-china]]
- [[redding-2016-goods-trade-factor-mobility-welfare]]
- [[tsivanidis-2026-urban-transit-infrastructure]]
- [[ahlfeldt-redding-sturm-wolf-2015-economics-density]]
