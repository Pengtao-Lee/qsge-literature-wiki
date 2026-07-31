---
title: "Ricardian Quantitative Trade"
type: concept
status: active
papers:
  - eaton-kortum-2002-technology-geography-trade
  - caliendo-parro-2015-trade-welfare-nafta
  - redding-2016-goods-trade-factor-mobility-welfare
  - redding-rossi-hansberg-2017-quantitative-spatial
  - tombe-zhu-2019-trade-migration-china
  - allen-arkolakis-2014-trade-topography
  - ma-tang-2020-geography-trade
  - desmet-nagy-rossi-hansberg-2018-geography-development
  - liu-zhang-cai-2026-network-infrastructure
  - lin-liu-zhou-2026-data-market
tags:
  - Ricardian trade
  - comparative advantage
  - trade elasticity
  - Fréchet distribution
  - gains from trade
  - quantitative trade
---

# Ricardian Quantitative Trade

The Ricardian quantitative trade framework, originating with Eaton and Kortum's (2002) reformulation of comparative advantage, models international trade as driven by country-specific technological differences in a world with many goods, many countries, and iceberg geographic barriers. Productivity for each good in each country is a draw from a country-specific Fréchet distribution, whose dispersion parameter governs the strength of comparative advantage and whose location parameter governs absolute advantage. The framework delivers a structural gravity equation for bilateral trade shares, a tractable price index summarizing world technology and barriers, and a sufficient-statistic welfare formula in which the gains from trade depend on a country's domestic expenditure share. Because it is at once parsimonious and rich enough to speak to trade flows, prices, and welfare, it has become the common ancestor of the quantitative spatial equilibrium toolkit — extended to multiple sectors with input-output linkages, combined with labor mobility, applied to China's internal trade and migration, and embedded in dynamic spatial growth models. This page develops the formal structure, the estimation of its central parameter, and the extensions that carry it into modern quantitative spatial economics.

## Comparative Advantage as Productivity Dispersion

Ricardo's insight that trade is driven by relative technological differences was formalized for a continuum of goods by Dornbusch, Fischer, and Samuelson (1977), but their two-country construction does not generalize to many countries. [[eaton-kortum-2002-technology-geography-trade|Eaton and Kortum]] solve the many-country problem with a probabilistic representation of technology: country $i$'s efficiency $z_i(j)$ in producing each good $j$ in a continuum is the realization of a random variable drawn from a country-specific Fréchet distribution,

$$ F_i(z) = e^{-T_i z^{-\theta}}, \qquad \theta > 1, $$

where the location parameter $T_i$ governs the average level of efficiency (absolute advantage) and the common shape parameter $\theta$ governs dispersion (comparative advantage). A larger $\theta$ means less heterogeneity across goods in a country's relative efficiencies, so fewer efficiency outliers survive a given difference in costs or barriers; a smaller $\theta$ strengthens comparative advantage against the resistance imposed by geography. Because the unit cost of production in country $i$ is $c_i$, delivering a good to country $n$ costs $p_{ni}(j) = (c_i/z_i(j)) d_{ni}$, where $d_{ni}$ is an iceberg barrier, and buyers in $n$ purchase each good from the lowest-cost supplier worldwide. Comparative advantage is thus a probabilistic statement about the distribution of relative efficiencies rather than a fixed ranking of industries. The survey of [[redding-rossi-hansberg-2017-quantitative-spatial]] treats this Fréchet technology draw as a core building block of quantitative spatial models, and the same distribution reappears as idiosyncratic preference heterogeneity in the spatial models of [[allen-arkolakis-2014-trade-topography]] and [[redding-2016-goods-trade-factor-mobility-welfare]].

## Structural Gravity from Technology

The Fréchet assumption implies that the distribution of prices country $n$ actually faces inherits the same functional form, with a price parameter

$$ \Phi_n = \sum_i T_i (c_i d_{ni})^{-\theta}, $$

that summarizes states of technology, input costs, and geographic barriers around the world. From this object follow three key results. First, the probability that country $i$ is the lowest-cost supplier to country $n$ — also the fraction of $n$'s expenditure on goods from $i$ — is the multi-country gravity equation

$$ \pi_{ni} = \frac{T_i (c_i d_{ni})^{-\theta}}{\Phi_n}, $$

which is structural rather than reduced form: the numerator is source technology and cost discounted by the bilateral barrier, and the denominator is a multilateral resistance term capturing competition from all sources. Second, the exact price index for the CES objective is $p_n = \gamma \Phi_n^{-1/\theta}$, so price levels differ across countries exactly to the extent that $\Phi_n$ differs. Third, real income in country $i$ can be written as a function of its own technology and its home trade share alone. This is why gravity in the Eaton-Kortum framework is not an empirical approximation: the same $\Phi_n$ that enters the trade share also enters prices and welfare, so counterfactuals can be computed within a single coherent general-equilibrium system. The gravity form also emerges under Armington differentiation and monopolistic competition, but only in the Ricardian case does the elasticity of trade with respect to costs have a technology (rather than a preference) interpretation.

## The Trade Elasticity θ

The parameter $\theta$ is the single most important input to any counterfactual in the framework because it governs the elasticity of bilateral trade flows with respect to trade costs. [[eaton-kortum-2002-technology-geography-trade]] estimate it with three distinct identification strategies on a sample of bilateral manufacturing trade, prices, and geography for 19 OECD countries in 1990. A method-of-moments estimator based on the structural relationship between normalized import shares and relative prices yields a central estimate of $\theta = 8.28$; a two-stage least squares estimator using wage data yields $3.60$; and an estimator using price data yields $12.86$. The central value implies a standard deviation of log efficiency of about 15 percent. Subsequent work has converged on lower values: [[tombe-zhu-2019-trade-migration-china]] set $\theta = 4$ for China's internal and external trade, and the quantitative illustration in [[redding-rossi-hansberg-2017-quantitative-spatial]] uses a trade elasticity of $\sigma - 1 = 4$. [[allen-arkolakis-2014-trade-topography]], working in the Armington analogue, calibrate $\sigma = 9$, implying a trade elasticity of 8.

> **Cross-pattern (2026-07):** Across estimation methods and microfoundations — price data, wage data, trade-flow data, and different model families — the aggregate trade elasticity for goods clusters in a fairly narrow band of roughly 4 to 8. The Eaton-Kortum central estimate of 8.28 sits near the top of this range, while the values most commonly used in quantitative spatial applications ($\theta = 4$ in Tombe-Zhu; $\sigma-1 = 4$ in the Redding-Rossi-Hansberg illustration) sit near the bottom. This convergence matters because welfare gains from trade scale inversely with the elasticity: a lower $\theta$ implies larger gains from a given reduction in trade frictions.

## Gains from Trade: The Home-Share Sufficient Statistic

Because the price parameter $\Phi_n$ can be eliminated using the domestic trade share $\pi_{ii}$, the framework delivers a closed-form expression for the real wage,

$$ \frac{w_i}{p_i} = \gamma^{-1/\beta} \left( \frac{T_i}{\pi_{ii}} \right)^{1/(\beta\theta)}, $$

where $\beta$ is labor's share in the input bundle and $\gamma$ is a Gamma-function constant. In autarky $\pi_{ii} = 1$, so the gains from trade are read directly from the domestic expenditure share: given an import share, gains are larger when $\theta$ is smaller (more productivity heterogeneity) and when $\beta$ is smaller (a larger share of intermediates). This is the home-share sufficient statistic that Arkolakis, Costinot, and Rodríguez-Clare showed holds across a broad class of trade models, and it is the property that makes the quantitative spatial toolkit tractable: a counterfactual requires data on trade shares and elasticities, not estimates of technology. In [[eaton-kortum-2002-technology-geography-trade]]'s quantified model, moving to autarky in manufactures costs between 0.2 percent of welfare for Japan and 10.3 percent for Belgium in the mobile-labor case. [[caliendo-parro-2015-trade-welfare-nafta]] extend the same logic to a multi-sector economy, where the analogue of the home share is the change in each sector's domestic expenditure share weighted by the sectoral trade elasticity. The sufficient-statistics result breaks down precisely when the conditions behind it fail — with factor mobility across locations or with firm-level heterogeneity in entry — in which case the domestic trade share must be supplemented by additional sufficient statistics.

> **Current assessment (2026-07):** The ACR home-share result is the load-bearing wall of quantitative trade, but its domain is well understood. With labor mobility across locations, [[redding-2016-goods-trade-factor-mobility-welfare]] shows the welfare gains from trade depend on changes in both the domestic trade share and population, with exponents $\alpha/\theta$ and $1/\varepsilon + (1-\alpha)$; in Melitz models with endogenous entry, [[ma-tang-2020-geography-trade]] show the extensive margin alters the mapping from trade shares to welfare. Welfare calculations that use only the home share therefore implicitly assume immobile labor and no selection effects.

## Estimating Technology and Geographic Barriers

Beyond $\theta$, the model's other primitives — states of technology $T_i$ and geographic barriers $d_{ni}$ — are recovered from the same 1990 cross-section. The bilateral trade equation is estimated with source-country fixed effects (a "competitiveness" index $S_i = (1/\beta)\ln T_i - \theta \ln w_i$) and a flexible specification of barriers in distance intervals, borders, language, and trading-area membership. The implied barriers are substantial: for the central $\theta$, a typical country in the closest distance category faces a barrier of about 45 percent of costs relative to home sales, rising to over 120 percent in the farthest category, with a shared language reducing costs by about 6 percent. A notable substantive finding emerges when competitiveness is decomposed into technology and wages: Japan's edge in 1990 reflects a lower wage rather than a higher state of technology, while the United States has the highest state of technology. The quantified model is then used for counterfactuals: a multilateral move to free trade benefits almost all countries, but the United States loses if it liberalizes unilaterally, for standard optimal-tariff reasons. This estimation template — invert a gravity equation to recover fundamentals, then compute counterfactuals — is what [[caliendo-parro-2015-trade-welfare-nafta]] extend to multiple sectors with tariff data.

## Factor Mobility and Ricardian Trade

The classic Eaton-Kortum model assumes labor is internationally immobile, which is natural for cross-country trade but restrictive for the within-country questions that dominate quantitative spatial economics. [[redding-2016-goods-trade-factor-mobility-welfare]] develops the natural extension: a quantitative spatial model with many asymmetric locations, Ricardian trade à la Eaton-Kortum, and workers who are mobile across locations but have idiosyncratic Fréchet preferences. Because population is now endogenous, the welfare gains from trade are no longer a function of the domestic trade share alone; the common change in expected utility between autarky and trade is

$$ \frac{\bar U^T}{\bar U^A} = \left( \frac{1}{\pi_{nn}^T} \right)^{\alpha/\theta} \left( \frac{L_n^A}{L_n^T} \right)^{1/\varepsilon + (1-\alpha)}, $$

where $\pi_{nn}^T$ is the open-economy domestic trade share, $L_n^A$ and $L_n^T$ are autarky and trade populations, $\alpha$ is the goods expenditure share, $\theta$ is the trade elasticity, and $\varepsilon$ is the Fréchet preference dispersion governing the labor-supply elasticity. Locations with better market access enjoy larger price-index declines on opening, attract population, and bid up land prices until expected utility is equalized; measuring a region's gains without controlling for its population change can produce discrepancies of the same order as the true gains. [[tombe-zhu-2019-trade-migration-china]] bring this machinery to China's provinces, calibrating a two-sector model with internal and external trade and hukou-driven migration costs, using a trade elasticity of 4 and an estimated migration elasticity of 1.5. They find that internal trade and migration cost reductions between 2000 and 2005 account for about 28 percent of China's aggregate labor productivity growth, while international trade cost reductions account for only about 8 percent — a direct demonstration that Ricardian trade frictions inside a country can dominate external frictions.

## Multi-Sector and Intermediate-Good Extensions

The single-sector framework is extended to many sectors with sector-specific productivities and input-output linkages by [[caliendo-parro-2015-trade-welfare-nafta]], who show that intermediates act as an amplification channel: a tariff cut in one sector lowers input costs downstream, propagating through the production network. Because each sector's input-bundle cost depends on the price indices of all input-supplying sectors, welfare effects are substantially larger than in a one-sector model — for NAFTA, the measured welfare effects of the tariff changes are on average about 71 percent lower when intermediates and sectoral linkages are ignored. The extension preserves the Ricardian structure: productivity in each sector is Fréchet with a sector-specific dispersion parameter $\theta^j$, and the multi-sector gravity equation for trade shares has the same form as the single-sector one. [[tombe-zhu-2019-trade-migration-china]] use this structure with intermediate inputs drawn from China's interregional input-output tables, finding that intermediates magnify the gains from internal trade cost reductions by a factor of roughly three to four. [[liu-zhang-cai-2026-network-infrastructure]] apply the same Caliendo-Parro template to China's network infrastructure, decomposing welfare gains into an input-output-linkage channel and a trade-share channel.

## Rival Microfoundations: Armington and Melitz

The structural gravity equation is not unique to the Ricardian framework. Under Armington differentiation, goods are distinguished by country of origin and the trade elasticity is $\sigma - 1$, the elasticity of substitution between varieties; [[allen-arkolakis-2014-trade-topography]] build a complete quantitative spatial model on this foundation, attributing at least 20 percent of the spatial variation in U.S. income to geographic location and estimating that the interstate highway system raised welfare by 1.1 to 1.4 percent. Under monopolistic competition with firm heterogeneity (Melitz), the aggregate trade elasticity combines the intensive margin (existing exporters ship more) with the extensive margin (new firms enter export markets), and the response to cost changes is amplified by selection; [[ma-tang-2020-geography-trade]] develop a Melitz-based quantitative spatial model for Chinese cities and show that the extensive margin of firm entry is decisive for the local welfare effects of migration. The three families deliver the same aggregate gravity form, but they attach different structural interpretations to the slope and differ along margins the aggregate equation does not capture — the measure of varieties, the distribution of trade across firms, and the welfare consequences of large changes in trade costs.

> **Current assessment (2026-07):** The equivalence of Armington, Eaton-Kortum, and Melitz at the level of aggregate gravity and the home-share welfare formula (the ACR result) is what makes the quantitative spatial toolkit robust to microfoundational choice. The frameworks diverge precisely where selection or variety margins are first-order: Melitz models with endogenous entry predict larger welfare responses to large trade-cost changes than constant-returns models with the same aggregate elasticity, and factor mobility breaks the equivalence across the board. Applied work therefore chooses a microfoundation based on the margin under study, not on the aggregate gravity fit.

## Open Questions

Several open questions mark the frontier. The identification of $\theta$ from cross-sectional gravity is inherently difficult, because observed trade flows are jointly determined by costs and the elasticity; time-series variation or micro price data are required to separate the two, and the same challenge recurs for the commuting and migration elasticities estimated from cross-sectional flows. Whether a single aggregate elasticity is a legitimate simplification or a source of bias remains contested in a corpus where sectoral estimates differ by two orders of magnitude. Dynamic extensions embed the Ricardian structure in models of spatial growth, as in [[desmet-nagy-rossi-hansberg-2018-geography-development]], where EK trade interacts with endogenous innovation and migration frictions in a global model at one-degree resolution, and where fully liberalizing migration would roughly triple welfare. The treatment of non-traded sectors and of intermediates that are themselves traded — the domain of the multi-sector extension — remains the most active quantitative frontier. And while the framework has been enormously successful for goods, its extension to non-rival flows such as data, explored in the spatial models of [[lin-liu-zhou-2026-data-market]], raises open questions about the appropriate gravity structure when the traded object can be replicated at zero marginal cost.

## Cross-links

**Concepts:**
- [[multi-sector-trade-and-input-output-linkages]] — the multi-sector extension with intermediate goods
- [[gravity-in-spatial-economics]] — the structural gravity equation derived from EK and its rivals
- [[quantitative-spatial-equilibrium]] — the general-equilibrium architecture built on EK foundations
- [[agglomeration-and-dispersion-forces]] — how technology draws and trade costs shape the spatial economy

**Mechanisms:**
- [[spatial-innovation-and-structural-transformation]] — endogenous technology in spatial growth models
- [[endogenous-infrastructure-and-spatial-development]] — infrastructure as a shifter of trade costs

**Synthesis:**
- [[transport-infrastructure-and-urban-welfare]] — trade-cost counterfactuals for infrastructure
- [[structural-transformation-and-regional-convergence]] — trade and migration in regional convergence

**Major sources:**
- [[eaton-kortum-2002-technology-geography-trade]]
- [[caliendo-parro-2015-trade-welfare-nafta]]
- [[redding-2016-goods-trade-factor-mobility-welfare]]
- [[tombe-zhu-2019-trade-migration-china]]
- [[redding-rossi-hansberg-2017-quantitative-spatial]]
- [[allen-arkolakis-2014-trade-topography]]
- [[ma-tang-2020-geography-trade]]
