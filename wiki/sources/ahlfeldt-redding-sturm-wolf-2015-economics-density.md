---
title: "The Economics of Density: Evidence From the Berlin Wall"
type: source
authors:
  - Gabriel M. Ahlfeldt
  - Stephen J. Redding
  - Daniel M. Sturm
  - Nikolaus Wolf
year: 2015
slug: ahlfeldt-redding-sturm-wolf-2015-economics-density
tags:
  - spatial-economics
  - urban-economics
  - agglomeration
  - internal-city-structure
  - commuting
  - gravity-equation
  - quantitative-spatial-models
  - natural-experiment
  - GMM
raw_markdown: "[[raw_markdown/papers/ahlfeldt-redding-sturm-wolf-2015-economics-density]]"
status: canonical
---

# The Economics of Density: Evidence From the Berlin Wall (2015)

> **Paper claim** — A quantitative model of internal city structure with agglomeration and dispersion forces over thousands of heterogeneous blocks, structurally estimated using Berlin's division and reunification, recovers substantial and highly localized production externalities (productivity–density elasticity ≈ 0.07) and residential externalities (amenity–density elasticity ≈ 0.15) that together account for the observed reorganization of economic activity within West Berlin.

Raw markdown: [[raw_markdown/papers/ahlfeldt-redding-sturm-wolf-2015-economics-density]]

## Research Question

How strong are the agglomeration and dispersion forces that shape the internal structure of cities, and can they be separated from variation in exogenous locational fundamentals (natural advantages for production, residential amenities)? The central identification challenge is that high land prices and dense economic activity in neighboring locations are equally consistent with strong agglomeration spillovers and with shared fundamentals; the paper asks whether an exogenous shock to the surrounding concentration of activity can disentangle the two.

## Model / Experimental Design

A quantitative general-equilibrium model of a single city embedded in a wider economy, comprising a large number of discrete, arbitrarily heterogeneous blocks (i = 1, …, S).

- **Workers.** Perfectly mobile within the city and the wider economy (reservation utility Ū). Cobb–Douglas preferences over a tradable final good and residential floor space (expenditure share on floor space 1 − β = 0.25). Each worker draws an idiosyncratic utility shock for every residence–workplace pair from an independent Fréchet distribution (shape parameter ε), following McFadden (1974) and Eaton and Kortum (2002); iceberg commuting cost d_ij = e^{κτ_ij} rises with travel time τ_ij in minutes. The Fréchet structure yields residential and workplace choice probabilities and a **gravity equation for commuting flows**.
- **Firms.** Perfect competition, constant returns; Cobb–Douglas production in labor and commercial floor space (floor-space cost share 1 − α = 0.20). Zero-profit and profit-maximization conditions link productivity, wages, and commercial floor prices.
- **Land market.** No-arbitrage allocation of floor space between commercial and residential use (with a tax-equivalent land-use wedge ξ_i); competitive construction sector combining land and capital (land cost share in construction 1 − μ = 0.25); observed floor price is the max of commercial and residential price.
- **Agglomeration forces.** Final-goods productivity A_j = a_j Y_j^λ, where the production externality Y_j is the travel-time-weighted sum of surrounding workplace employment density with exponential decay e^{−δτ}. Residential amenities B_i = b_i Ω_i^η, where the residential externality Ω_i is the travel-time-weighted sum of surrounding residence employment density with decay e^{−ρτ}. Parameters {λ, η} govern the strength and {δ, ρ} the spatial decay of the two externalities.
- **Natural experiment.** Berlin's 1961 division and 1990 reunification. Division is modeled as prohibitive trade and commuting costs and zero externalities across the Wall (κ → ∞, δ → ∞, ρ → ∞). Empirical analysis focuses on West Berlin, which remained a market economy. Four channels: loss of employment opportunities, loss of commuters, loss of production externalities, and loss of residential externalities from East Berlin.

Estimation proceeds in stages: (1) reduced-form difference-in-difference regressions of block outcomes on distance-grid-cells from the pre-war CBD; (2) gravity-equation estimation of commuting parameters; (3) recovery of overall productivity and amenities via the model's recursive structure; (4) structural GMM estimation of the full parameter vector; (5) counterfactuals.

## Main Results

- **Reduced-form (difference-in-difference).** Division reorients the West Berlin gradient away from the pre-war CBD in East Berlin; reunification reverses it. West Berlin blocks in the nearest 500 m grid cell to the pre-war CBD lost ≈ 55% of floor-space value between 1936 and 1986 (coefficient −0.800; the six grid cells alone give R² = 0.26); the nearest cell gained ≈ 49% between 1986 and 2006 (coefficient +0.398). Effects are absent along economically remote segments of the Wall, robust to district fixed effects, inner/outer-boundary and Kudamm grid cells, and a wide set of block controls (schools, parks, water, war destruction, land use, regeneration, government buildings). No pre-trends (1928–1936 placebo); most of the division effect had occurred by 1966.
- **Commuting gravity (Table III).** Semi-elasticity of commuting with respect to travel time ν = εκ ≈ 0.07 (−0.0697 OLS; −0.0771 Poisson PML; −0.0706 Gamma PML), i.e. each extra minute of travel reduces commuting flows by ≈ 7%; the gravity equation explains ≈ 83–91% of bilateral commuting variation using 2008 micro survey data on 7,948 commuters across 12 districts.
- **Fréchet parameter.** ε = 6.83, calibrated from the dispersion of log workplace wages across West Berlin districts in 1986 (broadly in line with Eaton–Kortum trade estimates); implies κ ≈ 0.01.
- **Exogenous-fundamentals model fails.** Counterfactuals holding productivity, amenities, and density of development fixed generate treatment effects far smaller than observed (division: −0.408 counterfactual vs −0.800 actual for the nearest cell; reunification: near zero vs +0.398), so a model with exogenous location characteristics cannot explain the data.
- **Structural GMM estimates (Table V, pooled).** Production externality elasticity **λ = 0.07** (division 0.079, reunification 0.050); residential externality elasticity **η = 0.155** (division 0.155, reunification 0.076); production decay δ = 0.36; residential decay ρ = 0.76; commuting ν = 0.099, ε = 6.69. Both externalities are highly localized — falling to near zero after ≈ 10 minutes of travel time (≈ 0.83 km on foot, ≈ 4 km by U-/S-Bahn).
- **Endogenous-agglomeration counterfactuals fit (Table VII).** With the estimated externalities and 1936 fundamentals, the model reproduces the observed division effect (−0.836 vs −0.800 for the nearest cell) and reunification effect (+0.363 vs +0.398). Shutting off either externality (η = 0 or λ = 0) substantially reduces the fit, showing both matter.
- **Transport counterfactual.** Removing the automobile (2006 public-transport-only travel times) raises flow-weighted average travel time from 32 to 38 minutes, lowers city employment by ≈ 14% and output by ≈ 12%, cuts floor prices by ≈ 20% on average, and reduces block specialization in workplace vs residence use.

## Mechanisms Identified

> **Paper claim** — Localized production and residential externalities (agglomeration forces), operating through the travel-time-weighted density of surrounding workplace and residence employment and balanced against commuting costs and inelastic land supply (dispersion forces), jointly determine the internal spatial structure of the city. Division severs these spillovers across the Wall, and their loss — not mere proximity to the Wall — drives the collapse and later recovery of the West Berlin gradient near the pre-war CBD.

The identification hinges on a recursive structure: given commuting parameters, observed workplace/residence employment, floor prices, land area, and travel times uniquely pin down overall productivity, amenities, and density of development (Proposition 2), regardless of whether the full model has single or multiple equilibria. The externality specification then decomposes these into fundamentals and spillovers. The identifying assumption is that changes in production/residential fundamentals are uncorrelated with the exogenous change in surrounding concentration induced by division/reunification.

Links: [[quantitative-spatial-equilibrium]]

## Methods and Measures

- **Difference-in-difference with distance grid cells** from the pre-war CBD (500 m bands), with Conley (1999) HAC spatial standard errors; robustness with area-clustered errors and locally weighted least squares.
- **Gravity-equation estimation** of commuting flows (OLS with residence and workplace fixed effects; Poisson PML; Gamma PML).
- **Generalized Method of Moments (GMM)** structural estimation of {ν, ε, λ, δ, η, ρ}. Moment conditions: (i) changes in adjusted production and residential fundamentals orthogonal to 50 pre-war-CBD distance grid-cell indicators; (ii) a commuting moment matching the share of workers commuting under 30 minutes; (iii) a wage-dispersion moment for West Berlin during division. Structural residuals are closed-form functions of data and parameters; a nested fixed-point solves labor-market clearing (transformed wages are gross substitutes → unique solution). Identification checked by grid search over the parameter space and Monte Carlo recovery.
- **Equilibrium selection** for counterfactuals under potential multiplicity: search for the counterfactual equilibrium closest to the observed one.
- **Block-level panel data (1936, 1986, 2006).** ~15,937 statistical blocks (≈ 9,000 in former West Berlin; mean area ≈ 50,000 m²). Land/floor prices from Kalweit (1937) for pre-war and the Committee of Valuation Experts ("Bodenrichtwerte") for 1986/2006; workplace and residence employment reconstructed from 1933 census + firm register, 1987 West German census, and 2003–2005 social-security/population data; ≈ 254 million bilateral travel times computed in ArcGIS by public transport (U-Bahn, S-Bahn, tram, bus) and car; commuting survey data for 1936, 1982, and 2008; density of development (floor-to-land ratio, "GFZ") used as an out-of-sample check.

Links: [[gravity-in-spatial-economics]]

## Concepts Engaged

- **Agglomeration vs dispersion forces** — production and residential externalities against commuting costs and inelastic land supply.
- **Internal city structure** — non-monocentric, asymmetric geography of heterogeneous blocks (building on Lucas and Rossi-Hansberg 2002).
- **Commuting gravity** — Fréchet micro-foundations yield a semi-log gravity equation for bilateral commuting flows.
- **Spatial decay of externalities** — production/residential spillovers vanish within ≈ 10 minutes of travel time.
- **Within- vs across-city agglomeration estimates** — within-city λ ≈ 0.07 holds travel times constant; comparison to across-city estimates must account for rapid spatial decay when city population growth expands land area and travel times.

Links: [[quantitative-spatial-equilibrium]], [[gravity-in-spatial-economics]], [[local-employment-elasticities-and-commuting]]

## Connection to Debates

> **Paper claim** — The paper resolves the long-standing identification problem of separating agglomeration economies from locational fundamentals by supplying an exogenous, quasi-experimental shock to the surrounding concentration of economic activity within a single city, and shows that a fully exogenous-fundamentals model cannot reproduce observed spatial dynamics.

It contributes to the agglomeration-economies literature (Rosenthal and Strange 2004; Duranton and Puga 2004): its λ ≈ 0.07 sits at the high end of the 3–8% across-city range but below some quasi-experimental estimates, and it documents comparable and highly localized residential (consumption) externalities, consistent with the "consumer city" view (Glaeser, Kolko, and Saiz 2001; Diamond 2013) and micro-evidence on housing externalities (Rossi-Hansberg, Sarte, and Owens 2010; Arzaghi and Henderson 2008). It extends the natural-experiments-in-economic-geography tradition (Davis and Weinstein 2002; Redding and Sturm 2008; Redding, Sturm, and Wolf 2011) from across-region to within-city variation.

Links: [[quantitative-spatial-equilibrium]]

## Theoretical / Empirical Significance

A foundational contribution to quantitative spatial economics: it delivers a tractable, empirically implementable model of internal city structure with an arbitrary number of asymmetric locations and endogenous agglomeration forces, made tractable by the stochastic (Fréchet) commuting formulation. It shows how to recover unobserved location characteristics uniquely even under multiple equilibria, and how to structurally estimate deep agglomeration and commuting parameters from a natural experiment. The estimated production and residential externalities and their spatial decay are widely used as reference parameters, and the framework is a template for counterfactual analysis of transport, planning, and other within-city interventions.

## Notes and Caveats

- Externalities are modeled as reduced-form functions of employment density; the paper does not identify their micro-foundations (knowledge spillovers, input sharing, matching, amenities, congestion, pollution).
- Several first-stage parameters (α, β, μ) are calibrated from outside literature rather than estimated, because block-level factor-payment and expenditure data are unavailable over the long historical sample.
- The identifying assumption requires production/residential fundamentals to change orthogonally to distance-from-CBD following division/reunification; some block controls are potentially endogenous to division.
- Reunification is a smaller, less precisely estimated shock than division and need not exactly reverse it (possible multiplicity; changes in East Berlin between periods). Pooled estimates are the paper's preferred parameters.
- Reunification-period estimates rely on 2003–2005 data as proxies for the "2006" cross-section; pre-war employment is reconstructed by allocating district totals across blocks.
- Counterfactuals depend on the equilibrium-selection rule (closest to the observed equilibrium) in the presence of potential multiple equilibria.
