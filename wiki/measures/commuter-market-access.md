---
title: "Commuting Market Access"
type: measure
status: active
papers:
  - ahlfeldt-redding-sturm-wolf-2015-economics-density
  - monte-redding-rossi-hansberg-2018-commuting
  - tsivanidis-2026-urban-transit-infrastructure
  - redding-rossi-hansberg-2017-quantitative-spatial
  - redding-2016-goods-trade-factor-mobility-welfare
tags:
  - commuting
  - market access
  - gravity
  - urban economics
  - transport infrastructure
  - quantitative spatial models
---

Commuting market access (CMA) measures the ease with which a location reaches employment opportunities through the commuting network — equivalently, the ease with which a workplace reaches workers — by weighting potential jobs or workers by the "gravity" cost of reaching them. In quantitative spatial models built on Fréchet commuting shocks, CMA emerges directly from the commuting gravity equation as a market-access term that summarises the whole network: a residence's expected income is a gravity-weighted sum of workplace wages discounted by commute costs, and a workplace's labour supply is the analogous sum over residences. It is the commuting analogue of the market-access concepts developed in international trade, and it is the standard object used to interpret how transport-network changes — Berlin's division and reunification, the US interstate build-out, and Bogotá's TransMilenio bus rapid transit — reallocate employment and residents across space. This page defines CMA and its residence/workplace split, derives it from the Fréchet microfoundation, and reviews how commute costs and the commuting elasticity are estimated, validated, and compared across studies.

## What Is Being Measured

CMA summarises a bilateral gravity structure into a location-specific scalar. On the residence side, the relevant object is expected worker income: a worker living in location $n$ can reach workplaces $i$ with probabilities that decline in commute cost and rise in the workplace wage, so the expected income of residents is a weighted sum of workplace wages discounted by the difficulty of reaching them. In Monte, Redding, and Rossi-Hansberg (2018), this is exactly the expected residential income term $\bar{v}_n = \sum_{i} \lambda_{ni|n}^{R} w_i$ — high in locations that have low commuting costs to high-wage employment locations ([[monte-redding-rossi-hansberg-2018-commuting]]). On the workplace side, the analogous object is the supply of workers that a workplace can attract through the commuting network, which depends on surrounding residence populations and their access to other jobs. Tsivanidis (2026) formalises the split as residence commuting market access (RCMA), which reflects access to well-paid jobs, and firm (workplace) commuting market access (FCMA), which reflects access to workers through the commuting network — a workplace has high FCMA when it is close to locations with large residential populations that lack close access to other jobs. The pair is recovered jointly from data on residents $L_{Ri}$, employment $L_{Fj}$, commute costs $d_{ij}$, and the commuting elasticity $\theta$:

$$
\Phi_{Ri} = \sum_{j} d_{ij}^{-\theta} \frac{L_{Fj}}{\Phi_{Fj}}, \qquad \Phi_{Fj} = \sum_{i} d_{ij}^{-\theta} \frac{L_{Ri}}{\Phi_{Ri}},
$$

where $\Phi_{Ri}$ is RCMA and $\Phi_{Fj}$ is FCMA ([[tsivanidis-2026-urban-transit-infrastructure]]).

The construct is the commuting analogue of market access in trade, where a location's access to markets or suppliers is summarised as a trade-cost-weighted sum of demand or supply ([[redding-rossi-hansberg-2017-quantitative-spatial]]; [[redding-2016-goods-trade-factor-mobility-welfare]]). The distinctive feature is that the relevant bilateral friction is the cost of moving people rather than goods, and that the gravity weights are determined by the estimated commuting elasticity rather than by trade flows.

## Gravity Microfoundation

CMA has a precise microfoundation in models where workers draw idiosyncratic amenity or match-productivity shocks for each residence–workplace pair from a Fréchet distribution. With a commuting cost $\kappa_{ni}$ (or $d_{ni}$) and wage $w_i$ at the workplace, the probability that a worker residing in $n$ commutes to workplace $i$, conditional on living in $n$, is

$$
\lambda_{ni|n}^{R} = \frac{B_{ni}\left(w_i/\kappa_{ni}\right)^{\epsilon}}{\sum_{s\in N} B_{ns}\left(w_s/\kappa_{ns}\right)^{\epsilon}},
$$

where $B_{ni}$ captures average amenities of the bilateral pair and $\epsilon$ is the Fréchet shape parameter governing the dispersion of idiosyncratic shocks ([[monte-redding-rossi-hansberg-2018-commuting]]; [[redding-rossi-hansberg-2017-quantitative-spatial]]; [[ahlfeldt-redding-sturm-wolf-2015-economics-density]]). This expression is a gravity equation with bilateral resistance (the numerator's wage and commute cost) and multilateral resistance (the denominator's sum over all alternative workplaces). The denominator — the sum over workplaces of the wage–commute-cost trade-off — is itself a market-access term: the "inclusive value" of the choice set facing a resident of $n$.

The residence-side measure follows by weighting each workplace's wage by the conditional commuting probability, giving the expected income formula

$$
\bar{v}_n = \sum_{i\in N} \lambda_{ni|n}^{R} w_i,
$$

so that CMA is the gravity-weighted sum of workplace wages discounted by commute costs ([[monte-redding-rossi-hansberg-2018-commuting]]). Ahlfeldt, Redding, Sturm, and Wolf (2015) write the same object as a commuting market access term $W_{it} = \sum_{s} \omega_{st} / e^{\nu \tau_{ist}}$ in transformed wages, where the semi-elasticity $\nu = \varepsilon\kappa$ multiplies travel time in minutes ([[ahlfeldt-redding-sturm-wolf-2015-economics-density]]). Because the conditional commuting probability is the primitive object, CMA can be recovered directly from data on wages, employment, residents, and commute costs without estimating the full structural model — an invertibility property shared across the quantitative spatial class ([[redding-rossi-hansberg-2017-quantitative-spatial]]).

## Measuring Commute Costs

Implementing CMA requires a parameterisation of bilateral commute costs. The canonical specification makes the iceberg cost exponential in travel time,

$$
d_{ij} = \exp(\kappa t_{ij}) \in [1,\infty),
$$

so that each additional minute of travel time raises the effective cost of working at $j$ from $i$ by a constant proportional factor $\kappa$. Tsivanidis (2026) estimates $\kappa$ from a nested-logit mode-choice model using the sensitivity of mode choices to differences in travel time, obtaining $\kappa = 0.012$ — very close to the $0.01$ value that Ahlfeldt, Redding, Sturm, and Wolf (2015) recover for Berlin from the commuting gravity equation together with a Fréchet heterogeneity parameter $\varepsilon = 6.83$ ([[tsivanidis-2026-urban-transit-infrastructure]]; [[ahlfeldt-redding-sturm-wolf-2015-economics-density]]). In county-level work without fine travel-time data, distance serves as the proxy: Monte, Redding, and Rossi-Hansberg (2018) parameterise the ease of commuting as a constant-elasticity function of distance, $\mathcal{B}_{ni} = B_n B_i \, dist_{ni}^{-\phi}\,\tilde{B}_{ni}$, and estimate the distance coefficient $\phi = 4.43$ ([[monte-redding-rossi-hansberg-2018-commuting]]). The choice between a travel-time exponential and a distance power function is largely dictated by data availability; both deliver the gravity form from which CMA is computed, and both imply that commuting costs are substantially more sensitive to distance than goods-trade costs.

## Estimating the Commuting Elasticity

The Fréchet shape parameter that governs how steeply commuting falls off with cost — denoted $\epsilon$ in the residence-side formulation and $\theta$ in the workplace/PPML formulation — is the key parameter of the CMA measure, since it determines the gravity weights. Monte, Redding, and Rossi-Hansberg (2018) estimate $\epsilon = 3.30$ for the United States by using the model's structure to replace workplace fixed effects with wages raised to this power, instrumenting wages with productivity. Their gravity estimates deliver a commuting distance elasticity of $-4.43$ against a goods-trade distance elasticity of $-1.29$ — a striking contrast that the authors read as evidence that moving people is considerably more costly than moving goods across geographic space ([[monte-redding-rossi-hansberg-2018-commuting]]). Tsivanidis (2026) estimates the same object in Bogotá by regressing changes in log commuting flows on changes in travel times induced by TransMilenio in a PPML gravity specification, obtaining $\theta = 3.401$, similar to the US estimate ([[tsivanidis-2026-urban-transit-infrastructure]]). Ahlfeldt, Redding, Sturm, and Wolf (2015) instead estimate a semi-elasticity of commuting flows with respect to travel time of about $-0.07$ per minute (the product $\nu = \varepsilon\kappa$), which with $\varepsilon = 6.83$ implies a small per-minute cost parameter $\kappa \approx 0.01$ ([[ahlfeldt-redding-sturm-wolf-2015-economics-density]]).

> **Current assessment (2026-07):** Across three settings — US counties, within-city Berlin, and Bogotá — the corpus is consistent: commuting responds far more steeply to distance and travel time than goods trade. The commuting distance elasticity is roughly three times the trade elasticity (−4.43 vs −1.29), with a per-minute semi-elasticity near 7 percent. This regularity makes CMA large for central locations and small for the periphery, which is why transport improvements show up so strongly in CMA-based counterfactuals.

## CMA and Local Employment Elasticities

CMA also explains why local labour markets respond differently to demand shocks. In Monte, Redding, and Rossi-Hansberg (2018), the general-equilibrium elasticity of local employment with respect to a local productivity shock varies from about 0.5 to 2.5 across US counties, and a single summary statistic — the residence own-commuting share $\lambda_{ii|i}^{R}$, the closed-city special case of CMA — explains 89 percent of that cross-county variation, far more than standard controls such as employment, wages, and land area ([[monte-redding-rossi-hansberg-2018-commuting]]). The logic is that an open commuting market lets a location expand employment without a commensurate increase in residents, dampening land-price congestion. This connection makes CMA the operational backbone of the heterogeneous local employment elasticities literature, and it is treated as such in the survey treatment of quantitative spatial models, where commuting linkages are identified as the main source of cross-location heterogeneity in employment responses ([[redding-rossi-hansberg-2017-quantitative-spatial]]). The same openness logic underlies the welfare accounting of transport improvements in models with factor mobility, where access to high-wage locations — rather than residence itself — is what residents are willing to pay for ([[redding-2016-goods-trade-factor-mobility-welfare]]).

## Applications: Berlin, the US, and Bogotá

The three canonical applications in the corpus all use CMA as the lens through which a transport or political shock reshapes economic activity. Ahlfeldt, Redding, Sturm, and Wolf (2015) treat the Berlin Wall's division as an exogenous jump to prohibitive commuting costs across the East–West boundary and reunification as their removal. Division severs commuting access and local externalities to the pre-war central business district in East Berlin; consistent with this, treatment effects on floor prices and employment decline monotonically with distance from the pre-war CBD, while distance to the Wall itself has little effect ([[ahlfeldt-redding-sturm-wolf-2015-economics-density]]). The structural estimates put the central production-externality elasticity (productivity with respect to workplace density) at about 0.07, with externalities decaying essentially to zero within roughly ten minutes of travel time. Monte, Redding, and Rossi-Hansberg (2018) use observed changes in US commuting flows between 1990 and 2010 to back out implied commuting-cost changes via a Head–Ries adjustment, finding a median decline of 12 percent and welfare gains of 3.3 percent (6.9 percent at the seventy-fifth percentile), comparable to the gains from opening the US economy to trade ([[monte-redding-rossi-hansberg-2018-commuting]]). Tsivanidis (2026) computes the change in RCMA and FCMA induced by Bogotá's TransMilenio and shows that it strongly and log-linearly predicts tract-level changes in residential population, employment, and floor-space prices — with employment responses concentrated where access improved most ([[tsivanidis-2026-urban-transit-infrastructure]]).

## CMA Versus Distance-Based Treatment Measures

A central methodological point is that the *change in CMA* is not the same thing as distance to the nearest station or highway, and the two can diverge sharply. In Bogotá, TransMilenio increased access to jobs much more in the outskirts — far from the high-employment centre — than near stations, while firms' access to workers rose most in the centre, which gained labour supply along every spoke of the network ([[tsivanidis-2026-urban-transit-infrastructure]]). Conditioning on distance to the nearest TransMilenio station leaves the estimated CMA effects intact, indicating that it is accessibility rather than station proximity per se that drives outcomes. The Berlin evidence makes the same point: the largest treatment effects of division are along the segments of the Wall closest to the pre-war CBD, with little effect along remote sections, showing that the loss of access to the CBD rather than proximity to the Wall is what matters ([[ahlfeldt-redding-sturm-wolf-2015-economics-density]]). And in the US, the employment and welfare effects of commuting-cost changes are well predicted by the initial ratio of employment to residents — a variable that cannot be proxied by land area, size, or housing-supply elasticities ([[monte-redding-rossi-hansberg-2018-commuting]]).

> *Across the corpus, it is the change in market access — not distance to infrastructure per se — that predicts reallocations of employment and residents. The gravity-weighted network measure dominates the simple distance-to-infrastructure heuristic in every application ([[ahlfeldt-redding-sturm-wolf-2015-economics-density]]; [[tsivanidis-2026-urban-transit-infrastructure]]; [[monte-redding-rossi-hansberg-2018-commuting]]).*

## Validation and Known Biases

CMA is validated against a wide range of reduced-form outcomes. In Berlin, the recovered productivity and amenity fundamentals correlate with observable block characteristics, and predicted commuting flows match moments not used in estimation, including the full distribution of commuters across travel times in 1936, 1986, and 2006 ([[ahlfeldt-redding-sturm-wolf-2015-economics-density]]). In Bogotá, the reduced-form elasticities of outcomes with respect to CMA are stable across specifications that add locality fixed effects, use only variation from network additions more than 1.5 km away, control for distance to stations, and include placebo controls based on four digitised historical (unbuilt) transit plans ([[tsivanidis-2026-urban-transit-infrastructure]]). The main known biases are endogeneity of route placement and mechanical correlation between CMA changes and contemporaneous shocks to population and employment; the standard fix is to compute the change in CMA while holding population and employment fixed at their initial levels — allowing only commute costs to change — and to exclude the location itself from the summation, with richer strategies including cost-shifting instruments based on historical tram networks and engineering cost estimates ([[tsivanidis-2026-urban-transit-infrastructure]]). In the US, the commuting gravity equation's fit to observed bilateral flows and the correlation between model-predicted and observed land prices provide external validation ([[monte-redding-rossi-hansberg-2018-commuting]]).

## Comparability Across Studies

CMA definitions differ across studies in three systematic ways, and these choices matter for the magnitudes reported. First, the measure can be residence-side (expected worker income or RCMA) or workplace-side (labour supply or FCMA); the two are distinct objects and should be matched to the outcome being explained ([[monte-redding-rossi-hansberg-2018-commuting]]; [[tsivanidis-2026-urban-transit-infrastructure]]). Second, the friction can be exponential in travel time ($d_{ij} = e^{\kappa t_{ij}}$, with per-minute $\kappa \approx 0.01$–0.012) or a power function of distance (elasticity about 4.4); these are isomorphic in form but imply different curvature ([[ahlfeldt-redding-sturm-wolf-2015-economics-density]]; [[tsivanidis-2026-urban-transit-infrastructure]]). Third, the commuting elasticity differs in value — $\epsilon = 3.30$ (US), $\theta = 3.401$ (Bogotá), $\varepsilon = 6.83$ (Berlin) — reflecting both genuine population differences and the different formulations (residence-shock vs workplace match-productivity). Welfare conclusions are sensitive to these choices: the level of the commuting elasticity governs how much a given cost reduction translates into access gains, and the skill-specific elasticities in Bogotá — $\theta_H = 2.44$ for high-skilled against $\theta_L = 4$ for low-skilled — overturn the distributional conclusion implied by a single aggregate elasticity ([[tsivanidis-2026-urban-transit-infrastructure]]). Readers comparing CMA-based numbers across papers must therefore hold the definition and parameterisation fixed.

## Open Questions

Three frontier issues remain open. First, CMA is typically computed on a fixed transport network, but networks are endogenous to urban growth and to the very infrastructure investments CMA is used to evaluate — a feedback the static measures in the corpus do not capture. Second, mode substitution matters: a network improvement that induces car owners to switch to transit changes effective travel times in ways a single aggregate commute-cost function may miss, and the Bogotá evidence on car-ownership heterogeneity is a first step rather than a resolution ([[tsivanidis-2026-urban-transit-infrastructure]]). Third, skill heterogeneity in the commuting elasticity — high-skilled workers less responsive to commute costs than low-skilled — means a single CMA number conceals distributional variation in who benefits from transport improvements; connecting skill-differentiated CMA to the broader spatial-equilibrium welfare accounting of the quantitative class is an active frontier ([[tsivanidis-2026-urban-transit-infrastructure]]; [[redding-rossi-hansberg-2017-quantitative-spatial]]; [[monte-redding-rossi-hansberg-2018-commuting]]).

> **Current assessment (2026-07):** The frontier of the measure is endogenous and skill-differentiated CMA — allowing the network, mode choice, and the commuting elasticity to respond to the very infrastructure shocks CMA is used to evaluate. The static gravity-based measure is now a standard, well-validated tool; the open question is how far its sufficient-statistic properties survive when networks and heterogeneous commuters are endogenised.

## Cross-links

*Measures:* [[trade-elasticity-estimation]]

*Methods:* [[model-inversion-and-fundamentals-recovery]], [[sufficient-statistics-in-spatial-models]]

*Concepts:* [[local-employment-elasticities-and-commuting]], [[internal-city-structure-and-density]], [[quantitative-spatial-equilibrium]], [[agglomeration-and-dispersion-forces]]

*Synthesis:* [[transport-infrastructure-and-urban-welfare]]

*Sources:* [[ahlfeldt-redding-sturm-wolf-2015-economics-density]], [[monte-redding-rossi-hansberg-2018-commuting]], [[tsivanidis-2026-urban-transit-infrastructure]], [[redding-rossi-hansberg-2017-quantitative-spatial]], [[redding-2016-goods-trade-factor-mobility-welfare]]
