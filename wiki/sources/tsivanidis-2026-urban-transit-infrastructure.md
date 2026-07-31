---
title: "Evaluating the Impact of Urban Transit Infrastructure: Evidence from Bogotá's TransMilenio"
type: source
authors:
  - Nick Tsivanidis
year: 2026
slug: tsivanidis-2026-urban-transit-infrastructure
tags:
  - urban-economics
  - transit-infrastructure
  - quantitative-spatial-models
  - commuter-market-access
  - sufficient-statistics
  - bus-rapid-transit
  - bogota
  - distributional-effects
  - value-of-travel-time
  - agglomeration
raw_markdown: "[[raw_markdown/papers/tsivanidis-2026-urban-transit-infrastructure]]"
status: canonical
---

# Evaluating the Impact of Urban Transit Infrastructure: Evidence from Bogotá's TransMilenio (2026)

> **Paper claim** — Estimating the general-equilibrium effects of Bogotá's TransMilenio Bus Rapid Transit in a quantitative urban model with multiple worker groups and transit modes, the paper shows that the standard value-of-travel-time-savings measure captures only 52% of total welfare gains, and that distributional effects on inequality are modest (a 0.59% rise) once reallocation and general-equilibrium adjustments are included.

Raw markdown: [[raw_markdown/papers/tsivanidis-2026-urban-transit-infrastructure]]

## Research Question

How large are the equilibrium economic gains from improving public transit infrastructure in cities, and how are those gains distributed across rich and poor residents? The paper asks specifically (i) whether the standard value-of-travel-time-savings (VTTS) approach adequately captures the welfare gains from new transit once equilibrium reallocation of residents, firms, wages, and land prices is accounted for, and (ii) whether the poor — who rely most heavily on public transit — actually benefit most from its improvement. The empirical setting is the construction of the world's most-used BRT system, TransMilenio, in Bogotá, Colombia (opened 2000, expanded through three phases to 2012/2013).

## Model / Experimental Design

A quantitative urban (quantitative spatial equilibrium) model of a single city with heterogeneous skills. Key structural elements:

- **Worker groups**: two skill groups $g \in \{L, H\}$ (non-college and college) with fixed city populations $\bar{L}_g$. Non-homothetic (Stone-Geary) preferences over a numeraire good, residential floorspace (minimum subsistence requirement $\bar{h}$), and residential amenities that vary with car ownership.
- **Sequential discrete choices**: workers choose (1) residence $i$ and car ownership $a \in \{0,1\}$ (fixed cost $p_{car}$), then (2) workplace $j$, then (3) commute mode $m$. Solved by backward induction.
- **Mode choice**: nested logit over a public nest {Walk, Bus, TransMilenio} available to all and a private nest {Car} available only to car owners; commute disutility $d_{ijm} = \exp(\kappa t_{ijm} - \tilde{b}_m + v_{ijm})$; GEV preference shocks with nesting parameter $\lambda$.
- **Employment choice**: Fréchet-distributed match productivities (dispersion $\theta_g$); yields gravity commute-flow shares and defines **Residential Commuter Market Access (RCMA)** $\Phi_{Riag}$.
- **Labor supply / firms**: aggregation yields **Firm Commuter Market Access (FCMA)** $\Phi_{Fjg}$; firms produce under perfect competition with Cobb-Douglas technology over a CES labor bundle (skill-substitution elasticity $\sigma$) and commercial floorspace, across industries differing in skill intensity $\alpha_{sg}$; varieties aggregated CES with elasticity $\sigma_D$.
- **Floorspace**: fixed stock per location split between residential and commercial use by profit-maximizing landowners subject to land-use regulation $\tau_i$; market clearing sets $r_{Ri}, r_{Fj}$.
- **Externalities**: agglomeration in productivity (elasticity $\mu_A$) and residential amenities depending on the college share of residents (elasticity $\mu_{U,g}$) — a segregation force.
- **Equilibrium**: closed city (populations sum to city totals), labor and floorspace markets clear, rents redistributed lump sum.

**Sufficient-statistics special case (Proposition 1)**: with one worker/firm group, no fixed expenditure/income elements, and fixed floorspace supply, the equilibrium collapses to four univariate log-linear regressions of residential population, residential floorspace price, employment, and commercial floorspace price on changes in RCMA/FCMA. The reduced-form CMA elasticities plus the change in CMA are **sufficient statistics** for the relative change in economic activity; results carry over (Part 4 isomorphisms) to a broad class of models with endogenous housing supply, firm mobility, capital, Eaton-Kortum production, and leisure. Aggregate/level effects additionally require an assumption on migration into the city and values for $\sigma_D$ and housing expenditure share $1-\beta$.

Data cover ~2,799 census tracts of Bogotá before and after construction: DANE censuses (1993, 2005, 2018) for population by education; economic census and Chamber of Commerce (CCB) registers for employment/establishments; the city cadastre (98.6% of properties) for floorspace prices and land use; Mobility Surveys (JICA 1995; DANE 2005/2011/2015) for commuting; ECH/GEIH household surveys for worker employment. Commute times by mode computed in ArcGIS from network shapefiles.

## Main Results

- **VTTS captures only 52% of welfare gains.** Under the first-order VTTS approximation, welfare rises 1.25%; the full GE model gives 2.39%. VTTS = 52.06% of the GE gain (90% CI 42.2–63.8). The null that VTTS captures the full gain is rejected (p ≈ 0.01–0.04). Of the gap, ~one-third is due to the size of the shock (approximation error) and ~two-thirds to amenity/productivity externalities (with externalities shut down, VTTS accounts for ~82%).
- **Aggregate effects**: without migration into Bogotá, welfare +2.34%, GDP +3.25%, rents −0.41%; with migration, welfare +0.69%, GDP +17.5% (mostly population, GDP per capita +6.5%), population +11%, rents +7.2%. TransMilenio accounts for 3.1–16.6% of Bogotá's GDP growth and up to 40.3% of population growth from 2000 to 2016. Net of construction and operating costs, it raised steady-state GDP by at least 2.6% — a profitable investment.
- **Distributional effects are modest**: welfare inequality (ratio $\bar{U}_H/\bar{U}_L$) rises 0.59% — the high-skilled gain slightly more (though the test that $\hat{U}_H > \hat{U}_L$ has p = 0.14). Decomposition: with common elasticities and perfect substitutability the poor gain more (inequality −0.34%); differential commute elasticities shift gains to the high-skilled; imperfect substitutability in production reverses the sign of the aggregate effect on inequality (rise of 0.59%).
- **Model validation**: log-linear relationships between outcomes and CMA are borne out non-parametrically; two non-targeted moments fit (slope of observed on predicted floorspace-share change = 1.45, indistinguishable from 1; income–RCMA elasticity 0.522 ≈ $1/\theta$).
- **Parameter estimates**: mode-choice $\kappa = 0.012$, nesting $\lambda = 0.138$; commuting elasticity $\theta = 3.401$ (aggregate), with $\theta_H = 2.44 < \theta_L = 4$ (high-skilled less commute-sensitive); agglomeration $\mu_A = 0.253$; residential supply elasticities $\eta_L = 1.93$, $\eta_H = 2.02$; amenity spillovers $\mu_U^H = 1.11$ (significant), $\mu_U^L = 0.77$ (indistinguishable from zero).
- **Congestion extension**: allowing traffic congestion (elasticity 0.06) leaves results qualitatively unchanged and raises welfare gains only 0.56%; baseline is a lower bound.

## Mechanisms Identified

> **Paper claim** — New transit reshapes the city through changes in **commuter market access** (both residents' access to jobs and firms' access to workers), triggering reallocation of residents, employment, wages, and land prices that the VTTS measure omits.

- **Reallocation and GE adjustment**: transit lowers commute costs → residents and firms relocate, wages and floorspace prices adjust; these indirect effects generate roughly half of welfare gains beyond raw time savings.
- **Incidence via commute-elasticity heterogeneity**: high-skilled workers have more inelastic (lower $\theta$) demand for home/work locations, bear more of the cost of long commutes, and thus benefit more when commute costs fall.
- **Equilibrium wage effect**: the large BRT-induced shift in low-skilled labor supply across the city lowers low-skilled wages; imperfect substitutability partly shields the high-skilled.
- **Geographic connection effect**: TransMilenio connected the high-skilled north to skill-intensive central industries; low-skilled residence/employment is more dispersed, so fewer are connected to high-wage locations.
- **Externalities**: agglomeration (productivity rises with employment density) and amenity spillovers (amenities rise with college share) — the latter a residential-segregation force.
- **Envelope-theorem result (Proposition 2)**: in an efficient equilibrium the first-order welfare effect equals a time-savings-weighted expression — precisely the VTTS; the wedge arises from finite shock size and externalities (inefficiency).

Links: [[endogenous-infrastructure-and-spatial-development]]

## Methods and Measures

- **Commuter Market Access (RCMA/FCMA)**: theory-consistent accessibility measures recovered to scale from a fixed-point system in residential population, employment, commute costs, and $\theta$; contrast with distance-to-CBD / distance-to-station regressions common in the literature.
- **Sufficient-statistics / reduced-form estimation**: four univariate log-linear regressions; CMA constructed holding population and employment fixed at initial levels and excluding the own location.
- **Identification strategy (six-pronged)**: (1) rich controls incl. locality FE; (2) CMA variation from network changes >1.5km away; (3) conditioning on distance to nearest station; (4) four digitized historical (unbuilt) transit plans as placebo/recentering controls for non-random exposure (Borusyak and Hull 2023); (5) staggered three-phase rollout event studies and pre-trend falsification tests; (6) two cost-shifting instruments — least-cost engineering routes and an 1884–1951 historical tram network.
- **Estimation techniques**: maximum likelihood (nested logit), PPML gravity (commuting elasticity), GMM (residential supply elasticities and spillovers), HAC/Conley spatial standard errors (0.5km bandwidth), block-bootstrap for parameter uncertainty.
- **Counterfactuals**: VTTS vs GE welfare decomposition; migration vs closed-city; congestion module; alternative networks (trunk lines, feeder buses, faster speed); land value capture (LVC) schemes.

Links: [[gravity-in-spatial-economics]], [[local-employment-elasticities-and-commuting]]

## Concepts Engaged

- [[quantitative-spatial-equilibrium]] — the modelling framework (extended with multiple skill groups, modes, and industries).
- [[gravity-in-spatial-economics]] — commute-flow gravity structure from Fréchet match productivities.
- Value of travel time savings (VTTS) — the transportation-economics benchmark the paper critiques.
- Commuter market access (RCMA / FCMA) — the paper's core accessibility construct.
- Agglomeration and amenity externalities; residential sorting and gentrification.

## Connection to Debates

> **Paper claim** — Standard cost-benefit evaluation of transit based on time savings systematically understates welfare gains; and the intuition that public transit is progressive (benefiting the transit-reliant poor) does not survive general-equilibrium analysis.

- Challenges the sufficiency of VTTS-based project appraisal used widely in transport economics and policy.
- Speaks to whether transit infrastructure narrows or widens urban inequality — finds reallocation/GE forces roughly offset the direct pro-poor incidence.
- Policy debates: integrated transit-and-land-use policy (land value capture could raise welfare gains ~36% and cover 19–64% of capital costs), and the high return to low-cost "last-mile" feeder buses (larger welfare gains than either main trunk line).

Links: [[endogenous-infrastructure-and-spatial-development]]

## Theoretical / Empirical Significance

- Develops a **theory-consistent sufficient-statistics approach** to valuing transit infrastructure, transparently estimable by linear regression and robust across a broad isomorphic class of urban models — a methodological bridge between reduced-form and structural evaluation.
- Provides one of the first intra-city estimates of productivity and amenity agglomeration spillovers in a **developing-country** city, identified from a transit expansion that separately shifts residential and employment access.
- Introduces multiple worker groups with non-homothetic preferences over transit modes into the quantitative spatial literature, enabling analysis of distributional/gentrification consequences of transit.
- Quantifies, in a major real-world setting, how much conventional VTTS appraisal misses (roughly half), with direct implications for infrastructure cost-benefit analysis worldwide.

## Notes and Caveats

- **Statistical uncertainty**: welfare and inequality estimates have wide bootstrap confidence intervals; the inequality result (0.59% rise) rests on a test with p = 0.14, so the direction of the distributional effect is not sharply identified.
- **External validity**: findings are specific to Bogotá's geography (high-skilled concentrated in the north, network connecting to central skill-intensive industries); magnitudes may not transfer, though the framework is portable.
- **Data limitations**: employment in 2000 proxied by establishment counts (CCB); housing values from a cadastre (validated against survey prices but not market transactions); different outcomes measured over different time windows.
- **Housing supply held fixed**: baseline assumes no housing-supply response (consistent with the data for Bogotá); LVC counterfactuals rely on a borrowed inelastic supply elasticity (Oakland, Saiz 2010) rather than a Bogotá-specific estimate.
- **Congestion** modeled only as an extension with an externally calibrated elasticity (0.06); the paper argues baseline gains are a lower bound.
- Agglomeration/productivity externality (0.253) is larger than typical estimates and noisy.
