---
title: "Goods Trade, Factor Mobility and Welfare"
type: source
authors: [Redding, Stephen J.]
year: 2016
slug: redding-2016-goods-trade-factor-mobility-welfare
tags: [quantitative-spatial-model, labor-mobility, welfare-gains-from-trade, economic-geography, trade-costs, agglomeration, transport-infrastructure, counterfactuals]
raw_markdown: "[[raw_markdown/papers/redding-2016-goods-trade-factor-mobility-welfare]]"
status: canonical
---

# Goods Trade, Factor Mobility and Welfare (2016)

> **Paper claim** — A quantitative spatial model unifying goods trade and labor mobility with heterogeneous worker location preferences, in which the welfare gains from trade depend jointly on changes in domestic trade shares AND on reallocations of population across locations, and in which factor mobility drives quantitatively relevant differences between constant- and increasing-returns models.

Raw markdown: [[raw_markdown/papers/redding-2016-goods-trade-factor-mobility-welfare]]

Published in the *Journal of International Economics* (received 28 May 2015, revised 7 April 2016, accepted 25 April 2016; available online 2 May 2016). JEL: F11, F12, F16.

## Research Question

How does labor mobility with heterogeneous worker preferences reshape the spatial distribution of economic activity and the measurement of the welfare gains from trade? Specifically: (i) when locations differ in productivity, amenities, and transport access and are linked by a rich geography of bilateral trade costs, how should the welfare gains from trade cost reductions be computed once population can reallocate across locations; and (ii) do constant-returns and increasing-returns (agglomeration) models yield different counterfactual predictions once labor is mobile, even when calibrated identically?

## Model / Experimental Design

Theory paper with an illustrative quantitative calibration.

- **Agents / geography:** Many (potentially asymmetric) locations $i,n \in N$ differing in land supply, productivity, amenities, and relative geographic position. Bilateral trade costs are iceberg ($d_{ni}>1$ for $n \neq i$, $d_{nn}=1$). Land and labor are the two factors.
- **Preferences:** Cobb-Douglas over goods consumption (share $\alpha$) and residential land ($1-\alpha$), scaled by an idiosyncratic amenity draw $b_n(\omega)$. Amenity draws are i.i.d. Fréchet with scale $B_n$ (average amenity) and shape $\epsilon$ (dispersion of tastes). Each location faces an upward-sloping labor supply curve; higher real income is needed to attract workers with weaker idiosyncratic taste. Expected utility conditional on living in a location is equalized across all locations even though real income differs.
- **Production (baseline, constant returns):** Perfect competition, homogeneous goods, linear technology; location productivity $z(j)$ drawn i.i.d. Fréchet with scale $A_i$ and shape $\theta$ (which governs the trade elasticity), following Eaton and Kortum (2002). Trade shares take the standard Eaton-Kortum form; the price index reduces to a function of the domestic trade share $\pi_{nn}$, wages, and parameters.
- **Equilibrium concept:** General equilibrium is the triple $\{L_n, \pi_{ni}, w_n\}$ solving income = expenditure, trade shares, and residential choice probabilities. Under a "quasi-symmetric" trade cost assumption ($d_{ni}=D_n D_i D_{ni}$), the system reduces to one that uniquely determines equilibrium populations, with expected utility pinned down by labor-market clearing $\sum_n L_n = \bar{L}$.
- **Extension (Section 3):** Agglomeration forces via monopolistic competition, increasing returns (fixed cost $F$), and love of variety; the measure of varieties $M_i = L_i/(\sigma F)$ is endogenous to population, so trade shares and the price index depend directly on $L_n$. Trade elasticity is now $\sigma-1$. Unique stable equilibrium requires $\sigma(1-\tilde{\alpha})>1$ (generalizing Helpman's 1998 $\sigma(1-\alpha)>1$).
- **Extension (Section 5):** Regions vs. countries — workers mobile across regions within a country but immobile across countries; expected utility equalized within but not across countries.
- **Calibration:** $20 \times 20$ latitude-longitude grid (Fig. 1); effective distance along least-cost routes following Donaldson (forthcoming). Central parameters: land share $1-\alpha = 0.25$ (Davis and Ortalo-Magné 2011); elasticity of substitution $\sigma = 4$ (Bernard et al. 2003); trade elasticity $\theta = 4$ (Simonovska and Waugh 2014); distance elasticity of trade $\theta\phi=1$ so $\phi=0.33$; labor-supply / migration elasticity $\epsilon = 3$ (Bryan and Morten 2014). Productivity and amenities drawn from independent standard log-normal distributions.

## Main Results

- **Welfare gains from trade sufficient statistics:** For each location, $\bar{U}_n^T/\bar{U}_n^A = (1/\pi_{nn}^T)^{\alpha/\theta}(L_n^A/L_n^T)^{1/\epsilon + (1-\alpha)}$ (Eq. 28). The gains depend on the open-economy domestic trade share, the change in population between autarky and trade, the trade elasticity $\theta$, the labor-supply elasticity $\epsilon$, and the consumption share $\alpha$. This nests two special cases: perfect mobility with no taste heterogeneity ($\epsilon \to \infty$, Eq. 29) and perfect immobility (Eq. 30, where gains depend only on $\pi_{nn}^T$ and differ across locations).
- **Common welfare gain as weighted average:** The economy-wide welfare change is a population-share-weighted average of the changes in domestic trade shares and populations across all locations (Eq. 26).
- **Uniqueness and inversion:** Unique equilibrium populations, wages, and trade shares exist (Proposition 1, proof structured as in Allen and Arkolakis 2014). The model inverts one-to-one to recover unobserved productivities $A_n$ and amenities $B_n$ from data on populations, wages, and land supplies (Proposition 3).
- **Closed-form comparative statics:** The equilibrium population system satisfies gross substitution; an increase in a location's relative productivity, amenities, or land supply raises its relative population, while an increase in its trade costs to all others lowers it (Proposition 2).
- **Transport counterfactual (constant returns):** A transport improvement raises the common expected utility by ~9% (1.0928). Long-differences treatment effects (Table 1, Col. 1): population 0.3735, wage 0.0876, price index −0.2029, land rents 0.4611, real wages 0.1245, "immobile welfare" (the incorrect measure) 0.2179. The true welfare treatment effect is zero (welfare is equalized across treated and untreated locations).
- **Reallocation ≫ welfare:** Population changes range up to ~60%, far larger than the ~9% welfare gain — echoing Fogel (1964) that large reallocations need not imply proportionate welfare gains.
- **Constant vs. increasing returns (Table 1, Col. 2):** Calibrated to the same initial equilibrium and trade elasticity ($\theta^N = \sigma^G - 1$), the increasing-returns model produces substantially larger treatment effects: population ~0.51 (vs. ~0.37), wage ~0.18 (vs. ~0.09), land rents 0.6845, price index −0.2198. Differences in welfare/real-wage effects are smaller than differences in reallocation effects.
- **Elasticity grid search:** Over $\theta, \epsilon \in [3.1, 5.1]$, more taste dispersion (lower $\epsilon$) yields larger treatment effects for wages but smaller ones for population and land prices. E.g. constant returns at $\theta=4$: population rises from 0.3798 ($\epsilon=3.1$) to 0.4733 ($\epsilon=5.1$).
- **Regions vs. countries (Table 2):** At the regional level, measuring welfare via a region's domestic trade share while ignoring its population change produces discrepancies of roughly the magnitude of the true gains. At the country level, the country-wide domestic trade share approximates the true common welfare gain well (constant returns: West true 1.0380 vs. measured 1.0374; East 1.0763 vs. 1.0738).

## Mechanisms Identified

> **Paper claim** — Labor mobility is the equilibrating channel: when some locations enjoy larger trade-cost reductions (better market access, lower $\pi_{nn}^T$), their consumption price index falls more, inducing in-migration; population reallocates until land rents rise in favored locations and fall elsewhere, equalizing expected utility across all locations. Hence welfare measurement must account for both domestic trade shares (affecting consumption prices) and population redistribution (affecting the price of the immobile factor, land).

A second mechanism: under increasing returns, population inflows expand the endogenous measure of local varieties (an agglomeration force), which feeds back into trade shares and magnifies the response to trade-cost shocks; this feedback is absent under constant returns, generating the divergence in counterfactual predictions once labor is mobile.

Links: [[endogenous-infrastructure-and-spatial-development]]

## Methods and Measures

- Eaton-Kortum / Fréchet-based trade share and price-index derivation.
- Fréchet-based discrete residential choice generating upward-sloping location labor supply (McFadden 1974 lineage; Artuc et al. 2010, Kennan and Walker 2011).
- Exact-hat-algebra counterfactuals from an initial equilibrium (Dekle, Eaton, Kortum 2007) — solving for $\{\hat{\lambda}_n, \hat{w}_n, \hat{\pi}_{ni}\}$ using only initial $\{\lambda_n, Y_n, \pi_{ni}\}$, without observing unobserved fundamentals.
- Model inversion to recover unobserved productivities and amenities.
- Closed-form comparative statics via an implicit-function / gross-substitution argument.
- Reduced-form "long-differences" difference-in-differences regression (Eqs. 49-50) estimated on model-generated data to expose general-equilibrium and heterogeneous-treatment-effect bias.

Links: [[gravity-in-spatial-economics]]

## Concepts Engaged

Links: [[quantitative-spatial-equilibrium]], [[gravity-in-spatial-economics]]

Also engages: welfare gains from trade and the ACR sufficient-statistic result (Arkolakis, Costinot, Rodríguez-Clare 2012), heterogeneous worker location preferences, agglomeration economies, market access, and the domestic-trade-share welfare formula.

## Connection to Debates

> **Paper claim** — Reduced-form transport-infrastructure regressions abstract from general equilibrium effects, cannot distinguish reallocation from creation of activity, and mask substantial treatment-effect heterogeneity among both treated and (indirectly affected) untreated locations. A structural quantitative spatial model is a needed complement.

The paper also bears on the "does model structure matter for gains from trade" debate (Arkolakis, Costinot, Rodríguez-Clare 2012): with immobile labor, constant- and increasing-returns models coincide, but with mobile labor they necessarily diverge — so the ACR equivalence does not carry over to spatial settings with factor mobility.

Links: [[endogenous-infrastructure-and-spatial-development]]

## Theoretical / Empirical Significance

A foundational contribution to the quantitative spatial economics literature: it embeds heterogeneous-preference labor mobility (an upward-sloping location labor supply curve) into a general-equilibrium trade model with a rich geography of trade costs, retaining tractability (closed-form comparative statics, unique equilibrium, invertibility) while delivering counterfactuals from initial-equilibrium data alone. It reframes the welfare gains from trade for economic geography by showing population reallocation is a first-order component of welfare measurement, and demonstrates that returns-to-scale assumptions become consequential precisely when labor is mobile. It is a canonical reference for the [[quantitative-spatial-equilibrium]] toolkit (cf. [[redding-rossi-hansberg-2017-quantitative-spatial]]) and builds directly on [[allen-arkolakis-2014-trade-topography]].

## Notes and Caveats

- The quantitative analysis uses a synthetic $20\times20$ grid economy with randomly drawn productivities and amenities, not real geographic data; magnitudes are illustrative of the class of models, not estimates for any specific economy.
- Central parameter values are imported from the existing empirical literature rather than estimated within the paper.
- Uniqueness and comparative-statics results rely on the quasi-symmetric trade-cost assumption; the increasing-returns model additionally requires the stability condition $\sigma(1-\tilde{\alpha})>1$ for a unique equilibrium.
- Proofs of Propositions 1-8 are relegated to a web appendix.
- The paper notes reality likely lies between the perfectly mobile and perfectly immobile benchmarks; both are limiting special cases.
- Land is the sole immobile factor and its supply is fixed per location; agglomeration is modeled only through variety/pecuniary externalities, not knowledge spillovers.
