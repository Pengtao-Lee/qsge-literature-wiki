---
title: "Exact-Hat Algebra"
type: method
status: active
papers:
  - caliendo-parro-2015-trade-welfare-nafta
  - redding-2016-goods-trade-factor-mobility-welfare
  - kleinman-liu-redding-2023-dynamic-spatial
  - redding-rossi-hansberg-2017-quantitative-spatial
  - tombe-zhu-2019-trade-migration-china
  - desmet-nagy-rossi-hansberg-2018-geography-development
  - eaton-kortum-2002-technology-geography-trade
tags:
  - counterfactual analysis
  - quantitative spatial economics
  - trade
  - welfare
  - general equilibrium
  - hat algebra
---

# Exact-Hat Algebra

Exact-hat algebra (or simply "hat algebra") is a computational technique for undertaking counterfactual analysis in quantitative trade and spatial equilibrium models. Introduced by Dekle, Eaton, and Kortum (2008) and generalised across the quantitative spatial literature, it reformulates a model's equilibrium conditions in terms of "hatted" variables — the ratio of a counterfactual value to its initial value, such that $\hat{x} \equiv x'/x$ — and solves the counterfactual equilibrium as a fixed point in these proportional changes. Its defining property is that the levels of unobserved fundamentals (productivity, amenities) cancel out of the system, so a counterfactual can be computed using only observed initial-equilibrium data (trade shares, wages, populations, migration flows) and structural parameters. The technique underlies essentially every quantitative counterfactual in this wiki, from NAFTA welfare to Chinese internal-trade and migration liberalisation, and is the computational complement to [[model-inversion-and-fundamentals-recovery]], which recovers fundamentals, and [[sufficient-statistics-in-spatial-models]], which bypasses them. This page develops the canonical single-sector derivation, the multi-sector, mobile-factor, and dynamic extensions, and the limits of what the method can establish.

## The problem exact-hat algebra solves

Counterfactual analysis in a model with many locations and sectors requires solving for a new general equilibrium after changing some exogenous variable — a tariff, a transport cost, a migration cost. In a naively parameterised Eaton–Kortum model, doing so appears to require knowing the *levels* of all unobserved fundamentals: the productivity states $T_i$ (or $\lambda_i^j$ in a sectoral version), amenities, and bilateral iceberg trade costs $d_{ni}$, none of which are directly observed ([[eaton-kortum-2002-technology-geography-trade]]; [[redding-rossi-hansberg-2017-quantitative-spatial]]). Because these fundamentals enter the trade-share and price equations multiplicatively alongside the very variables being changed, a researcher who cannot observe them cannot in general solve the counterfactual levels equilibrium.

The hat-algebra insight is that the counterfactual question itself is usually a question about *changes*: what happens to wages, prices, trade shares, and welfare when trade costs change from $d_{ni}$ to $d_{ni}'$, holding fundamentals fixed. When the equilibrium conditions are rewritten in proportional changes, every term containing the unobserved level of a fundamental divides out ([[caliendo-parro-2015-trade-welfare-nafta]]; [[redding-2016-goods-trade-factor-mobility-welfare]]). The same property holds in internal-trade and migration applications, where the unobserved objects include provincial productivities and migration frictions rather than international ones ([[tombe-zhu-2019-trade-migration-china]]). This is what makes hat algebra "exact": it is not a linearisation or a first-order approximation around a point, but an exact restatement of the model's equilibrium in a different variable system ([[redding-rossi-hansberg-2017-quantitative-spatial]]).

## Hatted variables and the cancellation of fundamentals

Formally, define the relative change of any variable as $\hat{x} = x'/x$, where $x'$ denotes the counterfactual value. In the multi-sector Eaton–Kortum structure of Caliendo and Parro, the equilibrium conditions in relative changes take a strikingly compact form ([[caliendo-parro-2015-trade-welfare-nafta]]). The change in the cost of an input bundle is

$$
\hat{c}_n^j = \hat{w}_n^{\gamma_n^j} \prod_{k=1}^J \hat{P}_n^{k^{\gamma_n^{k,j}}},
$$

the price index changes as

$$
\hat{P}_n^j = \left[ \sum_{i=1}^N \pi_{ni}^j \left(\hat{\kappa}_{ni}^j \hat{c}_i^j\right)^{-\theta^j} \right]^{-1/\theta^j},
$$

and bilateral trade shares change as

$$
\hat{\pi}_{ni}^j = \left[ \frac{\hat{c}_i^j \hat{\kappa}_{ni}^j}{\hat{P}_n^j} \right]^{-\theta^j}.
$$

Notice what these equations do *not* contain: the fundamental productivity parameters $\lambda_i^j$ and the levels of the iceberg costs $d_{ni}^j$ have cancelled out of the system, because both numerator and denominator of the trade-share expression scale with them. What enters instead are the *initial* trade shares $\pi_{ni}^j$ — observable data — together with the structural parameters $\theta^j$ and the assumed change in trade costs $\hat{\kappa}_{ni}^j$ ([[caliendo-parro-2015-trade-welfare-nafta]]; [[redding-2016-goods-trade-factor-mobility-welfare]]). The same cancellation recurs in the continuous-space and internal-economy variants of the model, so the technique transfers without modification from international to sub-national settings ([[redding-rossi-hansberg-2017-quantitative-spatial]]; [[tombe-zhu-2019-trade-migration-china]]). The empirical signature of the method is thus that counterfactual predictions are invariant to the *level* of fundamentals but remain fully sensitive to the *elasticities* — a change in the Fréchet dispersion parameter $\theta$ rescales every counterfactual.

## The home-trade-share welfare formula

The cleanest consequence of hat algebra is a closed-form welfare formula. In a single-sector Eaton–Kortum economy with a single factor, the real-welfare change from any trade-cost change equals the change in the domestic trade share raised to the power $-1/\theta$ ([[redding-rossi-hansberg-2017-quantitative-spatial]]; [[eaton-kortum-2002-technology-geography-trade]]):

$$
\hat{W}_n = \hat{\pi}_{nn}^{-1/\theta}.
$$

The derivation follows directly from the price-index equation: the price index can be written solely in terms of the domestic trade share, $P_n^{-\theta} \propto A_n w_n^{-\theta}/\pi_{nn}$, so taking ratios eliminates $A_n$ and $w_n$ terms that do not change. In a multi-sector setting the single formula generalises to a weighted sum across sectors, with each sector's domestic-share change weighted by its consumption share divided by its own elasticity ([[caliendo-parro-2015-trade-welfare-nafta]]).

This "home-trade-share ladder" is also where the choice of aggregation bites. Tombe and Zhu's internal-trade accounting uses the sectoral version of the same formula to relate the change in provincial labour productivity to the change in the provincial domestic trade share,

$$
\hat{y}_n^j = \hat{A}_n^j \left(\hat{\pi}_{nn}^j\right)^{-1/\theta},
$$

holding the productivity residual $\hat{A}_n^j$ as the model's account of the unexplained component ([[tombe-zhu-2019-trade-migration-china]]). When Caliendo and Parro compare a one-sector model against their 40-sector benchmark for the same NAFTA tariff change, the one-sector specification delivers welfare effects on average 71% smaller, because averaging sectoral elasticities into a single $\theta$ discards the covariance between sectoral trade-share changes and sectoral $\alpha^j/\theta^j$ weights that drives the gains ([[caliendo-parro-2015-trade-welfare-nafta]]). Desmet, Nagy, and Rossi-Hansberg's dynamic global model similarly leans on domestic-trade and population responses to quantify the welfare consequences of migration liberalisation at the world scale ([[desmet-nagy-rossi-hansberg-2018-geography-development]]).

> **Current assessment (2026-07):** The home-trade-share formula is the single most-used sufficient statistic in this corpus — nearly every quantitative welfare number on the wiki is, at root, a function of observed or counterfactual domestic trade shares. Its magnitude is governed entirely by the trade elasticity $\theta$ and by how finely the sectoral decomposition is taken; see [[trade-elasticity-estimation]] for why that parameter is so contentious.

## Counterfactuals as a fixed point: NAFTA in hats

For a multi-country, multi-sector model the hat system does not collapse to a single formula; it must be solved numerically as a fixed point. Caliendo and Parro's procedure for the NAFTA counterfactual is the canonical implementation ([[caliendo-parro-2015-trade-welfare-nafta]]). Given the change in tariffs — encoded as $\hat{\kappa}_{ni}^j = (1+\tau_{ni}^{j'})/(1+\tau_{ni}^j)$ — the algorithm guesses a vector of counterfactual wage changes $\hat{\mathbf{w}}$; solves the input-cost and price-index equations for all sectors and countries; recovers counterfactual trade shares from the hat trade-share equation; solves for counterfactual expenditures; and iterates on wages until the trade-balance condition holds in every country. Only data on initial trade shares, value added, input–output coefficients, and the estimated sectoral elasticities are required — no estimates of fundamental productivity or of iceberg trade-cost levels ([[caliendo-parro-2015-trade-welfare-nafta]]; [[redding-rossi-hansberg-2017-quantitative-spatial]]).

Applied to the change in NAFTA tariffs between 1993 and 2005, this procedure yields Mexico's welfare rising by 1.31%, the United States by 0.08%, and Canada falling by 0.06%, with real wages rising in all three countries (1.72%, 0.11%, and 0.32%, respectively). Decomposing welfare into terms-of-trade and volume-of-trade components shows the gains are overwhelmingly a volume-of-trade phenomenon: trade creation within the bloc contributes 1.80% to Mexican welfare while trade diversion with the rest of the world subtracts 0.08% ([[caliendo-parro-2015-trade-welfare-nafta]]). The counterfactual is driven throughout by the paper's estimated sectoral elasticities, which range from 0.37 to 51.08 across sectors, with an F-test rejecting a common elasticity (F(17, 7294) = 7.52); see [[trade-elasticity-estimation]]. The same fixed-point logic, with a different initial equilibrium and different cost shocks, underlies the internal-liberalisation counterfactuals in Tombe and Zhu, where reductions in Chinese internal trade costs raise aggregate real GDP per worker by 11.2% and welfare by 11.4%, versus 4.0% and 2.9% for external trade-cost reductions of comparable size ([[tombe-zhu-2019-trade-migration-china]]).

## Multi-sector and input–output extensions

The power of the hat system is that it extends to arbitrarily rich production structures. When production uses intermediate inputs from all sectors, the input-cost equation couples every sector's price change to every other sector's, and the welfare formula acquires additional terms for final goods, intermediate goods, and sectoral linkages ([[caliendo-parro-2015-trade-welfare-nafta]]). These linkages materially amplify the effect of a given trade-cost change: in the NAFTA application, removing intermediate goods from the model lowers welfare effects by 62% on average, and removing input–output connections lowers them by 50% — against a benchmark where Mexico's gain is 1.31%, a model without materials yields only 0.50% and one without sectoral interrelations 0.66% ([[caliendo-parro-2015-trade-welfare-nafta]]).

The same amplification appears in the internal-trade context. Tombe and Zhu show that the 11.2% real-GDP gain from Chinese internal trade-cost reductions collapses to roughly 3.0% when intermediate inputs are removed from the production structure, even though the trade-share responses are nearly identical — the extra gain comes from cheaper materials propagating through the input–output table, not from larger reallocations of trade ([[tombe-zhu-2019-trade-migration-china]]). Their decomposition of 2000–05 labour-productivity growth attributes 4.9% to internal trade, 0.5% to external trade, and 10.8% to migration, against a 40.9% productivity residual. This intermediate-input amplification is a general feature of the quantitative trade class, emphasised in the survey treatment as one of the reasons single-sector and no-materials models systematically understate the gains from liberalisation ([[redding-rossi-hansberg-2017-quantitative-spatial]]; [[redding-2016-goods-trade-factor-mobility-welfare]]).

## Factor mobility and migration in hat form

When labour is mobile across locations, hatted population becomes an endogenous outcome rather than a fixed datum, and the hat system must be augmented with a migration equation. Redding's model with heterogeneous worker preferences writes the counterfactual system for wage changes, trade-share changes, and population-share changes — $\hat{w}_i$, $\hat{\pi}_{ni}$, $\hat{\lambda}_n$ — using only initial wages, trade shares, and population shares, plus the assumed change in trade costs ([[redding-2016-goods-trade-factor-mobility-welfare]]). The welfare consequence is that the common change in expected utility depends on changes in *both* domestic trade shares and population reallocations:

$$
\hat{\bar{U}} = \left[ \sum_{n \in N} \frac{L_n}{\bar{L}} \left( \hat{\pi}_{nn}^{-\alpha/\theta} \, \hat{L}_n^{-(1-\alpha)} \right)^{\epsilon} \right]^{1/\epsilon}.
$$

The domestic-trade-share term captures the change in goods-market access; the population term captures the price of the immobile factor, land, which is bid up in locations that expand. A researcher who ignores the population margin and computes welfare from the domestic trade share alone obtains an "incorrect immobile welfare" measure that is substantially wrong and spuriously heterogeneous across locations even though true expected utility moves together ([[redding-2016-goods-trade-factor-mobility-welfare]]). The models in which population is immobile are the special case $\hat{L}_n = 1$, where the formula collapses back to the domestic-trade-share sufficient statistic $\hat{\pi}_{nn}^{-\alpha/\theta}$ — the canonical $\hat{\pi}_{nn}^{-1/\theta}$ when goods are the only expenditure item ([[eaton-kortum-2002-technology-geography-trade]]; [[caliendo-parro-2015-trade-welfare-nafta]]). The same mobile-labour hat structure, with migration shares $m_{ni}^{jk}$ replacing trade shares as the observable sufficient objects, drives the Chinese internal-migration counterfactuals of Tombe and Zhu, whose aggregate welfare change is a weighted sum over region-sector cells of real-income and own-stay migration-share changes ([[tombe-zhu-2019-trade-migration-china]]).

> *Across the corpus, hat algebra makes the reallocation margin — population, varieties, sectors — the central quantitative question. The static home-share formula is the floor; the interesting action in every welfare number comes from how much of the change is channelled through a margin the single-formula version omits.* This pattern is visible in Redding's population term, in Caliendo–Parro's sectoral linkages, and in Tombe–Zhu's intermediate-input amplification ([[redding-2016-goods-trade-factor-mobility-welfare]]; [[caliendo-parro-2015-trade-welfare-nafta]]; [[tombe-zhu-2019-trade-migration-china]]).

## Dynamic exact-hat

Hat algebra generalises to dynamic environments in which agents are forward-looking. Kleinman, Liu, and Redding extend the dynamic exact-hat methodology — developed for migration-only models by Caliendo, Dvorkin, and Parro — to incorporate forward-looking capital accumulation, where workers make migration decisions and immobile landlords choose consumption and investment in local buildings and structures ([[kleinman-liu-redding-2023-dynamic-spatial]]). Their Proposition 2 shows that, given an initial observed allocation (population shares, capital stocks, trade and migration share matrices) and any convergent sequence of *future changes* in fundamentals, the economy's transition path can be solved in time differences $\dot{x}_{t+1} = x_{t+1}/x_t$ without observing the level of fundamentals. The linearised version of the model then yields a closed-form transition path governed by an impact matrix and a transition matrix that depend only on observed shares and structural parameters; the speed of convergence is characterised by the eigenvalues of the transition matrix, with an average half-life of around 20 years and a maximum of around 80 years across U.S. states ([[kleinman-liu-redding-2023-dynamic-spatial]]).

The dynamic spatial growth model of Desmet, Nagy, and Rossi-Hansberg provides a complementary dynamic analogue in which hat-type counterfactuals are computed along a transition to a balanced-growth path. Because the innovation decision reduces to a static problem, their migration-liberalisation experiments can be solved by reallocating the world's population across $1^\circ \times 1^\circ$ cells under alternative migration-friction scenarios: fully liberalising migration would move 70.3% of the world's population across countries at impact and raise welfare roughly threefold in present-value terms ([[desmet-nagy-rossi-hansberg-2018-geography-development]]). Both dynamic treatments share the static method's defining feature — counterfactuals computed from observed initial conditions without observing fundamentals — while adding a time dimension ([[kleinman-liu-redding-2023-dynamic-spatial]]; [[desmet-nagy-rossi-hansberg-2018-geography-development]]).

## Scope, limits, and relation to the wider toolkit

What exact-hat algebra can and cannot do follows directly from what it is. Within the model, the method is *exact*: it delivers the precise general-equilibrium response to a specified change in trade or migration costs, conditional on the model's structure and parameter values ([[redding-rossi-hansberg-2017-quantitative-spatial]]). It cannot, however, validate the model. Because the levels of fundamentals are never observed, a hat-algebra counterfactual is silent on whether the underlying gravity structure, the Fréchet distribution, and the constant-elasticity assumptions are correct; it inherits those assumptions wholesale. It also requires a *consistent* initial equilibrium — the observed data must themselves satisfy the model's equilibrium conditions — and it is only as reliable as the parameters it is fed, so welfare statements hinge on the quality of the trade elasticities and the correct transcription of the policy change into hat costs ([[caliendo-parro-2015-trade-welfare-nafta]]; [[kleinman-liu-redding-2023-dynamic-spatial]]).

Methodologically, hat algebra is one member of a three-part toolkit. [[model-inversion-and-fundamentals-recovery]] runs the equilibrium mapping *backwards* to recover the unobserved fundamentals that rationalise observed data; exact-hat algebra runs the model *forwards in changes* and thereby sidesteps fundamentals altogether; and [[sufficient-statistics-in-spatial-models]] compresses the welfare answer into a small set of observable statistics (domestic trade shares, populations, elasticities) that the hat system itself delivers ([[redding-rossi-hansberg-2017-quantitative-spatial]]; [[redding-2016-goods-trade-factor-mobility-welfare]]). All three are facets of the same modelling technology, and applied papers typically use inversion for calibration, hat algebra for the counterfactual, and a sufficient-statistic formula for the headline welfare number ([[tombe-zhu-2019-trade-migration-china]]).

> **Current assessment (2026-07):** Exact-hat algebra validates counterfactuals only conditional on the model, never the model itself. The open methodological frontier is therefore less about the algebra — which is standard — than about the credibility of the initial equilibrium, the parameters, and the assumed cost shocks that feed it. Its computational limits at very large numbers of locations, and its extension to models with firm entry, capital, or non-CES structure, remain active research areas ([[kleinman-liu-redding-2023-dynamic-spatial]]; [[desmet-nagy-rossi-hansberg-2018-geography-development]]).

## Cross-links

- **Methods:** [[model-inversion-and-fundamentals-recovery]], [[sufficient-statistics-in-spatial-models]]
- **Measures:** [[trade-elasticity-estimation]]
- **Concepts:** [[ricardian-quantitative-trade]], [[multi-sector-trade-and-input-output-linkages]], [[quantitative-spatial-equilibrium]], [[gravity-in-spatial-economics]]
- **Mechanisms:** [[capital-labor-dynamics-and-spatial-convergence]]
- **Synthesis:** [[trade-and-migration-cost-reductions-in-china]], [[transport-infrastructure-and-urban-welfare]]
- **Sources:** [[caliendo-parro-2015-trade-welfare-nafta]], [[redding-2016-goods-trade-factor-mobility-welfare]], [[kleinman-liu-redding-2023-dynamic-spatial]], [[redding-rossi-hansberg-2017-quantitative-spatial]], [[tombe-zhu-2019-trade-migration-china]], [[eaton-kortum-2002-technology-geography-trade]]
