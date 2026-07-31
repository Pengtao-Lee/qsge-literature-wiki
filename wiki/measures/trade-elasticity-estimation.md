---
title: "Trade Elasticity Estimation"
type: measure
status: active
papers:
  - eaton-kortum-2002-technology-geography-trade
  - caliendo-parro-2015-trade-welfare-nafta
  - tombe-zhu-2019-trade-migration-china
  - redding-rossi-hansberg-2017-quantitative-spatial
  - redding-2016-goods-trade-factor-mobility-welfare
  - allen-arkolakis-2014-trade-topography
  - ma-tang-2020-geography-trade
  - desmet-nagy-rossi-hansberg-2018-geography-development
tags:
  - trade elasticity
  - structural estimation
  - quantitative spatial economics
  - gravity
  - welfare
  - Fréchet distribution
---

# Trade Elasticity Estimation

The trade elasticity is the parameter governing how bilateral trade flows respond to trade costs. In an Eaton–Kortum world it is formally the Fréchet dispersion parameter $\theta$, which governs the heterogeneity of productivity across goods; in Armington or CES structures the same role is played by the elasticity of substitution between varieties. It is the single most consequential parameter in quantitative trade and spatial models because it enters both sides of the quantitative toolkit: it sets the sensitivity of trade shares to costs in the gravity equation, and it determines the mapping from changes in domestic trade shares to welfare in the sufficient-statistics formula $\hat{W} = \hat{\pi}_{nn}^{-1/\theta}$ ([[redding-rossi-hansberg-2017-quantitative-spatial]]). Trade-elasticity estimation is the menu of identification strategies used to measure this parameter — trade-price regressions, method-of-moments and cross-product estimators, and production-side calibration — together with the striking heterogeneity of the resulting numbers across estimators, sectors, and settings (international versus internal), which materially changes every counterfactual computed from them. This page sets out the structural origin of $\theta$, the main estimation approaches, the sectoral and spatial variation in estimates, and the biases that make the parameter so hard to pin down.

## What is being measured

The trade elasticity is a single parameter with a dual role. In the Eaton–Kortum model, efficiency draws for each good are Fréchet-distributed with scale $T_i$ and shape $\theta$; a larger $\theta$ means *less* dispersion in relative productivities, so comparative advantage is a weaker force and trade is more elastic with respect to cost differences ([[eaton-kortum-2002-technology-geography-trade]]). In an Armington or monopolistic-competition model, the analogous object is the elasticity of substitution between varieties, $\sigma$, and trade shares respond to costs with elasticity $\sigma - 1$ ([[allen-arkolakis-2014-trade-topography]]). The two structures deliver observationally similar gravity equations, with $\theta$ and $\sigma-1$ playing parallel roles, which is why the survey literature treats the trade elasticity as a single object that can be measured from gravity relationships regardless of the underlying microfoundation ([[redding-rossi-hansberg-2017-quantitative-spatial]]).

Its economic importance comes from the welfare formula. In the canonical single-sector case, the welfare change from a trade-cost change is

$$
\hat{W}_n = \hat{\pi}_{nn}^{-1/\theta},
$$

so the *same* observed change in the domestic trade share maps into larger welfare gains the smaller is $\theta$ ([[redding-rossi-hansberg-2017-quantitative-spatial]]; [[redding-2016-goods-trade-factor-mobility-welfare]]). Because the domestic trade share is the sufficient statistic, all of the model's welfare content is channelled through this one parameter, which is why the trade elasticity is the pivotal quantity in every counterfactual in this corpus ([[caliendo-parro-2015-trade-welfare-nafta]]; [[tombe-zhu-2019-trade-migration-china]]).

## Structural origin in the Eaton–Kortum model

In the Eaton–Kortum model, country $i$'s efficiency in producing each good is an independent draw from the Fréchet distribution $F_i(z) = e^{-T_i z^{-\theta}}$. Because buyers source each good from the lowest-cost supplier, the share of country $n$'s expenditure on goods from country $i$ is the probability that $i$ is the cheapest source,

$$
\pi_{ni} = \frac{T_i (c_i d_{ni})^{-\theta}}{\sum_{k} T_k (c_k d_{nk})^{-\theta}},
$$

where $c_i$ is the input cost and $d_{ni}$ the iceberg trade cost ([[eaton-kortum-2002-technology-geography-trade]]). Two properties of $\theta$ are visible here. First, it is the elasticity of trade shares with respect to costs: a one-percent increase in $c_i d_{ni}$ reduces $\pi_{ni}$ by $\theta$ percent, holding the denominator fixed — adjustment happens at the *extensive margin*, as a more expensive or more remote source simply sells a narrower range of goods. Second, $\theta$ simultaneously governs the dispersion of productivity: the log of efficiency has standard deviation $\pi/(\theta\sqrt{6})$, so the same parameter that disciplines trade flows is a dispersion parameter of the technology distribution ([[eaton-kortum-2002-technology-geography-trade]]). This dual role is why the parameter can in principle be identified from trade flows, from prices, from wages, or from the dispersion of firm productivity — and why estimates from these different data sources can diverge so widely.

## Estimation approach 1: the trade–price relationship

The most direct identification strategy uses the model's prediction that normalised trade shares respond to relative prices. From the trade-share equation, country $i$'s share in country $n$ relative to its share at home satisfies

$$
\frac{X_{ni}/X_n}{X_{ii}/X_i} = \left(\frac{p_i d_{ni}}{p_n}\right)^{-\theta},
$$

so a regression of normalised trade shares on a measure of the relative price (including trade costs) identifies $\theta$ from the slope ([[eaton-kortum-2002-technology-geography-trade]]). The central complication is endogeneity of wages: since wages enter the input cost $c_i$, and richer, more productive countries have both higher wages and larger trade shares, an ordinary least squares regression of trade on wage-based cost measures is biased. Eaton and Kortum's wage-data specification estimates the competitiveness equation $S_i = (1/\beta)\ln T_i - \theta \ln w_i$ and instruments for the wage using the labour force and population density; accounting for wage endogeneity raises the estimate of $\theta$ from 2.86 to 3.60 ([[eaton-kortum-2002-technology-geography-trade]]). This endogeneity correction is the canonical illustration of why naive gravity estimates of the trade elasticity are too low, and it recurs as a theme in the survey treatment of gravity estimation ([[redding-rossi-hansberg-2017-quantitative-spatial]]).

## Estimation approach 2: method-of-moments and cross-product estimators

Because price data are noisy, Eaton and Kortum also propose a method-of-moments estimator based on the mean of the normalised trade-share variable over the mean of the price variable, exploiting the theory's prediction of a zero intercept. This yields the canonical central estimate $\theta = 8.28$ ([[eaton-kortum-2002-technology-geography-trade]]). A price-data regression gives an OLS estimate of 2.44, but since the price measure suffers from errors-in-variables, instrumenting the price measure with the observable geography terms (distance, language, borders) produces a 2SLS estimate of $\theta = 12.86$ — the errors-in-variables bias working in the opposite direction from the wage-endogeneity bias ([[eaton-kortum-2002-technology-geography-trade]]).

A structurally different estimator exploits the multiplicative structure of the gravity equation to difference out unobservable trade costs. Caliendo and Parro's tariff cross-product estimator takes three countries $n$, $i$, $h$ and the ratio of the products of trade flows in each direction:

$$
\frac{X_{ni}^j X_{ih}^j X_{hn}^j}{X_{nh}^j X_{hi}^j X_{in}^j} = \left(\frac{\kappa_{ni}^j}{\kappa_{in}^j}\frac{\kappa_{ih}^j}{\kappa_{hi}^j}\frac{\kappa_{hn}^j}{\kappa_{nh}^j}\right)^{-\theta^j},
$$

where $\kappa_{ni}^j = (1+\tau_{ni}^j)d_{ni}^j$ combines tariffs and iceberg costs. All country-specific technology, price, and symmetric trade-cost terms cancel, leaving a relation between trade flows and the (observable) tariff asymmetries alone; in logs this is a regression of the cross-product of trade flows on the cross-product of tariff terms, which is exactly the specification estimated on 1993 data before NAFTA came into force ([[caliendo-parro-2015-trade-welfare-nafta]]). The estimator is consistent with any trade model that delivers a multiplicative gravity equation — Eaton–Kortum, Armington, monopolistic competition, or Melitz — so the resulting elasticity does not depend on the microfoundation chosen ([[caliendo-parro-2015-trade-welfare-nafta]]; [[redding-rossi-hansberg-2017-quantitative-spatial]]).

## Sectoral heterogeneity

When estimated sector by sector, the trade elasticity is far from a single number. Caliendo and Parro's sectoral estimates for 20 tradable sectors range from 0.37 (Other Transport) to 51.08 (Petroleum), and a formal F-test rejects the hypothesis of a common elasticity across sectors: $F(17, 7294) = 7.52$ with $\mathrm{Prob} > F = 0.00$ ([[caliendo-parro-2015-trade-welfare-nafta]]). The implied aggregate elasticity is 4.55, far below the top of the sectoral range, because high-elasticity sectors like Petroleum carry little weight in final demand. This heterogeneity is quantitatively decisive: in the NAFTA application, the sectors that contribute most to welfare — Textiles, Petroleum, Electrical Machinery, Autos — are exactly those with extreme elasticities or heavy intermediate use, and collapsing the model to a single elasticity reduces the average welfare effect by 71% ([[caliendo-parro-2015-trade-welfare-nafta]]). The pattern is robust across the wider literature surveyed in the Caliendo–Parro discussion: average elasticities around 17 in Anderson et al., values between 4 and 13 in Romalis, and a large gap between aggregate and micro estimates in Imbs and Méjean ([[caliendo-parro-2015-trade-welfare-nafta]]).

> **Current assessment (2026-07):** The corpus's own counterfactuals sit on a knife's edge. Because the welfare formula weights each sector by $\alpha_n^j/\theta^j$, the same Chinese internal trade-cost reduction yields very different welfare numbers depending on whether one uses an aggregate elasticity ($\theta \approx 4$) or the full sectoral vector: the sectoral estimates ranging from 0.37 to 51.08 place the welfare arithmetic squarely on the choice of $\theta$ ([[tombe-zhu-2019-trade-migration-china]]; [[caliendo-parro-2015-trade-welfare-nafta]]).

## Internal versus international elasticities

The trade elasticity also differs systematically between international and internal trade. For Chinese internal trade, Tombe and Zhu set $\theta = 4$, a central value consistent with the cross-country estimates of Simonovska and Waugh ($\theta \approx 4$), Parro's tariff-based range of $[4.5, 5.2]$ for manufacturing, and Tombe's own estimates of 4.1 for agriculture and 4.6 for non-agriculture, with US firm-level dispersion in Bernard et al. giving 3.6 ([[tombe-zhu-2019-trade-migration-china]]). The internal-trade context matters because for most Chinese provinces the domestic trade share is the welfare-relevant statistic: internal trade costs fell enough that internal trade contributed 4.9% to 2000–05 labour-productivity growth versus 0.5% for external trade, and the internal-trade exact-hat formula $\hat{y}_n^j = \hat{A}_n^j(\hat{\pi}_{nn}^j)^{-1/\theta}$ shows that the same $\theta$ applied to a larger trade-share change delivers the larger internal gain ([[tombe-zhu-2019-trade-migration-china]]).

> *Across the corpus, the internal-trade elasticity for China is systematically lower than the canonical international estimates, which raises the implied welfare gains from internal-trade-cost reductions.* Where Eaton–Kortum's international estimates cluster between 3.60 and 12.86 and the aggregate estimate is 8.28, the internal calibrations used in the Chinese applications sit at or below 4 ([[tombe-zhu-2019-trade-migration-china]]; [[redding-2016-goods-trade-factor-mobility-welfare]]). Because $\hat{W}$ is decreasing in $\theta$, the same percentage fall in internal trade costs is worth more when the elasticity is taken to be 4 than when it is taken to be 8.28.

The elasticity also interacts with the margin of adjustment. In Ma and Tang's Melitz-based model of Chinese inter-city trade, the elasticity of substitution between varieties is set to $\varepsilon = 6$ and the productivity dispersion parameter to 5.38, with the extensive margin of firm entry — the endogenous number of varieties — doing much of the work in amplifying the welfare gains from migration and trade ([[ma-tang-2020-geography-trade]]). This stands in contrast to the Eaton–Kortum structure, where the extensive margin is the range of goods traded rather than the number of firms, and it illustrates how the same trade elasticity can behave differently across model structures ([[ma-tang-2020-geography-trade]]; [[redding-rossi-hansberg-2017-quantitative-spatial]]).

## The elasticity in welfare calculations

The welfare formula makes the stakes of elasticity choice explicit. In the single-sector case, $\hat{W}_n = \hat{\pi}_{nn}^{-1/\theta}$; in the multi-sector version, the change in real wages is a weighted sum across sectors,

$$
\ln\frac{\hat{w}_n}{\hat{P}_n} = -\sum_j \frac{\alpha_n^j}{\theta^j} \ln \hat{\pi}_{nn}^j - \sum_j \frac{\alpha_n^j}{\theta^j}\frac{1-\gamma_n^j}{\gamma_n^j} \ln \hat{\pi}_{nn}^j - \cdots,
$$

where the additional terms capture intermediates and sectoral linkages ([[caliendo-parro-2015-trade-welfare-nafta]]). Two consequences follow. First, the elasticity and the trade-share change enter multiplicatively, so a small $\theta$ magnifies any given trade-share movement; economies with more heterogeneous productivities (smaller $\theta$) enjoy larger gains from the same liberalisation ([[eaton-kortum-2002-technology-geography-trade]]). Second, in models with mobile labour the same $\theta$ also appears in the population-response term of the welfare sufficient statistic, coupling the elasticity to migration margins ([[redding-2016-goods-trade-factor-mobility-welfare]]). This is why the "elasticity optimism" concern is more than academic: if aggregate estimates understate the true substitutability of goods, every welfare number computed from the home-trade-share formula is correspondingly overstated ([[redding-rossi-hansberg-2017-quantitative-spatial]]; [[tombe-zhu-2019-trade-migration-china]]). This one-parameter dependence is what makes the [[sufficient-statistics-in-spatial-models]] result both powerful and fragile — it renders welfare computable from observables, but only because the entire general-equilibrium adjustment is compressed into a single elasticity.

## Comparability across studies, known biases, and open questions

The dispersion of estimates — from 2.86 in the naive wage regression to 51.08 for Petroleum — is not measurement noise but a systematic consequence of identification choices. Wage-based and price-based data move the estimate in opposite directions: correcting wage endogeneity *raises* $\theta$ (2.86 to 3.60), while correcting errors-in-variables in price data also *raises* it (2.44 to 12.86), so the "true" parameter is higher than any single naive regression suggests ([[eaton-kortum-2002-technology-geography-trade]]). Tariff-based estimators identify $\theta$ off tariff asymmetries and cancel unobservable trade costs, giving clean but sample-dependent estimates; Caliendo and Parro find that three sectors (Basic Metals, Machinery n.e.c., and Autos) change sign when the sample is restricted, and they replace those with the manufacturing average in their benchmark ([[caliendo-parro-2015-trade-welfare-nafta]]). Aggregation matters as well: a single aggregate elasticity collapses the covariance between sectoral trade-share changes and sectoral welfare weights, biasing welfare effects downward ([[caliendo-parro-2015-trade-welfare-nafta]]).

The open questions are the ones the corpus cannot settle. Credible estimation of *internal* elasticities remains thin — most applications borrow international values, and the Chinese calibrations rest on a small number of studies ([[tombe-zhu-2019-trade-migration-china]]; [[ma-tang-2020-geography-trade]]). Heterogeneous elasticities across goods and their interaction with dynamic and firm-entry margins are active research areas, and continuous-space gravity estimation suggests the elasticity interacts with the spatial decay of trade costs in ways that a single parameter cannot fully capture ([[allen-arkolakis-2014-trade-topography]]; [[desmet-nagy-rossi-hansberg-2018-geography-development]]). Because every counterfactual on this wiki inherits a choice of $\theta$, the measure page's bottom line is that the parameter is the tightest bottleneck between structural estimation and policy-relevant numbers ([[redding-rossi-hansberg-2017-quantitative-spatial]]).

> **Current assessment (2026-07):** The unresolved dispersion of estimates — from 2.86 to 51.08 — is the field's open wound. The "elasticity optimism" concern is that aggregate estimates, which are what most counterfactuals use, may understate true substitutability and hence understate the true gains from trade-cost reductions; the sectoral evidence in this corpus cuts in the opposite direction for multi-sector welfare, where ignoring heterogeneity *overstates* the gains that flow through low-elasticity sectors ([[caliendo-parro-2015-trade-welfare-nafta]]; [[redding-rossi-hansberg-2017-quantitative-spatial]]).

## Cross-links

- **Measures:** [[commuter-market-access]]
- **Methods:** [[exact-hat-algebra]], [[model-inversion-and-fundamentals-recovery]], [[sufficient-statistics-in-spatial-models]]
- **Concepts:** [[ricardian-quantitative-trade]], [[multi-sector-trade-and-input-output-linkages]], [[quantitative-spatial-equilibrium]], [[gravity-in-spatial-economics]]
- **Synthesis:** [[trade-and-migration-cost-reductions-in-china]]
- **Sources:** [[eaton-kortum-2002-technology-geography-trade]], [[caliendo-parro-2015-trade-welfare-nafta]], [[tombe-zhu-2019-trade-migration-china]], [[redding-rossi-hansberg-2017-quantitative-spatial]], [[ma-tang-2020-geography-trade]], [[redding-2016-goods-trade-factor-mobility-welfare]]
