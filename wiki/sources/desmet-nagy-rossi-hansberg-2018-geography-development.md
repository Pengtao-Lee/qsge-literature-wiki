---
title: "The Geography of Development"
type: source
authors:
  - Klaus Desmet
  - Dávid Krisztián Nagy
  - Esteban Rossi-Hansberg
year: 2018
slug: desmet-nagy-rossi-hansberg-2018-geography-development
tags:
  - dynamic-spatial-model
  - economic-geography
  - endogenous-growth
  - technology-diffusion
  - migration
  - trade
  - quantitative-spatial-economics
  - agglomeration
  - amenities
raw_markdown: "[[raw_markdown/papers/desmet-nagy-rossi-hansberg-2018-geography-development]]"
status: canonical
---

# The Geography of Development (2018)

> **Paper claim** — A dynamic spatial growth model solved on a 1°×1° grid of the whole globe (64,800 cells), with endogenous local innovation, spatial technology diffusion, Eaton–Kortum trade, and frictional migration, shows that fully liberalizing world migration would raise welfare roughly threefold (306% in present-discounted value) and reshape which regions develop.

Raw markdown: [[raw_markdown/papers/desmet-nagy-rossi-hansberg-2018-geography-development]]

Published in the *Journal of Political Economy* (2018).

## Research Question

How does geography — the location of land and water, local amenities and productivity, transport costs, and migration frictions — shape the long-run spatial evolution of the world economy? Specifically, how do migration restrictions interact with today's production centers and desirable places to live to determine the world's future development path, and what are the welfare consequences of relaxing those restrictions? The paper argues that answering this requires a dynamic theory of development that jointly incorporates realistic geography, mobility restrictions, trade costs, and endogenous incentives for innovation.

## Model / Experimental Design

A dynamic spatial general-equilibrium model over a continuous two-dimensional surface S, quantified on a discretized **1°×1° grid = 180×360 = 64,800 grid cells** covering the globe; each cell is a "location." Model period = 1 year.

- **Preferences/migration.** Agents have CES preferences over a unit continuum of goods plus local amenities, and draw i.i.d. Fréchet idiosyncratic location taste shocks each period (dispersion parameter Ω governs the elasticity of migration to real income). Amenities are congestible: `a_t(r) = ā(r) L̄_t(r)^{-λ}`. Bilateral migration costs are permanent flow-utility costs that decompose multiplicatively into an origin-specific and a destination-specific component, `m(s,r) = m_1(s)m_2(r)` with `m(r,r)=1` (Assumption 1) — this makes the location choice effectively static (no need to track migration histories). The static spatial equilibrium resembles Allen and Arkolakis (2014), with trade à la Eaton and Kortum (2002) and heterogeneous preferences à la Kline and Moretti (2014).
- **Technology/innovation.** Firms produce with land and labor; productivity draws are Fréchet with scale `T_t(r) = τ_t(r) L̄_t(r)^α` (α = static agglomeration). Firms can pay labor to raise their innovation φ; because of land competition and zero profits, the dynamic innovation choice reduces to a **static** profit-maximization problem (following Desmet and Rossi-Hansberg 2014). Local productivity evolves as `τ_t(r) = φ_{t-1}(r)^{θγ_1} [∫_S η τ_{t-1}(s) ds]^{1-γ_2} τ_{t-1}(r)^{γ_2}` — i.e., today's productivity depends on past local innovation, on last period's local technology (γ_2), and on **spatial diffusion** of the aggregate stock of technology (1-γ_2).
- **Trade.** Iceberg transport costs; probabilistic trade shares and price indices as in Eaton–Kortum; trade balance imposed location by location.
- **Equilibrium.** A dynamic competitive equilibrium is proven to exist and be **unique** under the parameter restriction `α/θ + γ_1/ξ ≤ λ + 1 - μ + Ω` (static agglomeration + returns to innovation dominated by the three dispersion forces: amenity congestion λ, land congestion 1-μ, and taste dispersion Ω). A **unique balanced-growth path** requires the strictly stronger condition `α/θ + γ_1/ξ + γ_1/[(1-γ_2)ξ] ≤ λ + 1 - μ + Ω`; without diffusion (1-γ_2 = 0) no non-degenerate BGP exists. Existence/uniqueness proofs lean on Zabreyko et al. (1975), as in Allen and Arkolakis (2014).

## Main Results

- **Long transition.** Under current (unchanged) migration frictions the world takes about **400 years** to reach its balanced-growth path (mostly converged by period 600). World real GDP growth rises from the calibrated **2% in 2000 to ~2.9% by 2100, then declines back to ~2.8%**; welfare growth rises from ~2.4% to ~2.8%.
- **Density–income correlation reversal.** The correlation between GDP per capita and population density goes from about **−0.41 today to +0.65** in the balanced-growth path (the productivity–density correlation rises from ~0.38 in period 0 to ~1.0 by period 600; density–real-GDP correlation never exceeds ~0.7). Today's densely populated poor regions become the future's dense, rich regions.
- **Gains from full migration liberalization (ϑ=0).** At impact **70.3% of the population changes country** and 71.6% move across cells (vs. ~0.3% across countries and ~0.45% across cells per year today, matched exactly). In present-discounted-value terms, complete liberalization yields **output gains of 125.8%** and **welfare gains (amenity-adjusted real GDP, u) of 305.9% — roughly threefold**. Using expected utility that includes idiosyncratic preferences (eq. 4), the welfare gain is **79.0%** (smaller because agents are less selected under free mobility). Partial-liberalization results (Table 3): e.g., ϑ=0.75 → +30.6% real income, +59.8% welfare(u); ϑ=0.375 → +87.1% real income, +188.8% welfare(u).
- **Productivity reversal.** Under **current frictions**, today's high-density, low-productivity regions (sub-Saharan Africa, South Asia, East Asia) become high-density, high-productivity, high-congestion, low-amenity regions, while North America, Europe, Japan, and Australia fall behind in productivity and population. **Free migration eliminates this reversal** — Europe and the eastern US remain strong, with new clusters in Brazil and Mexico. Relative to u, America/Europe/Australia stay strong throughout.
- **Backcasting validation (overidentification).** Running the model backward ~130 years to 1870 (compared to Penn World Tables 8.1 and Maddison 2001), the correlation of log population levels exceeds **0.96 back to 1950**; the correlation of population growth rates 1950–2000 between model and data is **0.74**, still 0.34 as far back as 1870 — despite the two World Wars and other unmodeled shocks.
- **Trade.** The model's untargeted world trade share is **14.1% in 2000** (matching the data), rising to 15.1% by 2600. A **+40% trade-cost** counterfactual reduces real GDP by 30.1% and welfare(u) by 34.2% — an order of magnitude larger than the 2.28% loss in comparable static one-sector models (Costinot and Rodríguez-Clare 2014). **Trade and migration are substitutes**: gains from free migration rise (to +156.9% real income) when trade costs are 40% higher.

## Mechanisms Identified

> **Paper claim** — Development is driven by the interaction of endogenous local innovation (which scales with local market size and population density) with spatial technology diffusion, mediated by trade costs and migration frictions.

- **Innovation × market size:** firms in denser/larger-market locations find it more profitable to invest in local technology, so density begets productivity growth over time (a dynamic agglomeration force).
- **Spatial technology diffusion (1-γ_2):** local innovations partly spill over to other locations, acting as a dispersion/convergence force and being necessary for a non-degenerate BGP.
- **Congestion forces:** amenity congestion (λ), land/decreasing-returns congestion (1-μ), and taste-shock dispersion (Ω) counteract agglomeration.
- **Migration frictions shift the balance:** with strict frictions, people stay put and today's dense poor regions innovate and develop; with free mobility, people move to high-productivity/high-amenity places, making future high-productivity regions coincide with high-amenity regions — which is why liberalization raises welfare so much (nearly 60% of the welfare gain comes from relocating people to high-amenity regions).

## Methods and Measures

- **Quantitative spatial equilibrium** solved by an iterative algorithm (Lemma 3); forward simulation and a novel **backward (backcasting) solution** method.
- **Model inversion** to recover fundamental productivity `τ_0(r)` and amenity-to-utility ratio `ā(r)/u_0(r)` from cell-level land (NOAA), population, and GDP-per-capita (G-Econ 4.0), with existence/uniqueness of the inversion guaranteed (Lemma 6).
- **Subjective well-being to cardinalize utility:** Gallup World Poll **Cantril ladder** (0–10), transformed via `u_0(r) = e^{ψ ū}` with ψ = 1.8 (from Deaton and Stone 2013), to separate amenities from utility; validated against exogenous quality-of-life measures (distance to water, elevation, precipitation, temperature, vegetation) with placebo checks.
- **Migration-cost identification:** entry costs `m_2(r)` recovered exactly from cell population changes between 2000 and 2005 (Lemma 7).
- **Trade costs:** built from Natural Earth rail/road/water networks aggregated from 0.1°×0.1° to 1°×1°, with least-cost paths computed by the **Fast Marching Algorithm**; the distance-decay parameter calibrated to a bilateral trade elasticity to distance of −0.93 (Head and Mayer 2014).
- **Key calibrated parameters:** β=.965; ρ=.75 (elasticity of substitution 4); λ=.32; Ω=.5 (migration elasticity 2); ψ=1.8; α=.06 (static agglomeration ~0.01); θ=6.5 (trade elasticity); μ=.8 (non-land share); γ_1=.319, γ_2=.993 (estimated from cross-country growth and G-Econ population distributions); ξ=125; ν=.15 (matched to 2% initial growth).

## Concepts Engaged

Dynamic spatial equilibrium; endogenous growth via localized innovation; technology diffusion; agglomeration economies (static and dynamic) vs. congestion/dispersion forces; balanced-growth path in continuous space; amenities, productivity, and utility identification; migration frictions and mobility; internal and international geography; gains from trade with internal geography.

## Connection to Debates

> **Paper claim** — Incorporating the dynamic effect of spatial frictions on productivity (not just their static congestion effect) shows migration and trade restrictions have far larger long-run welfare consequences than static models imply.

- **Gains from migration liberalization** — provides a structural, geography-rich estimate (~threefold welfare) distinct from prior static or two-region approaches.
- **Gains from trade** — dynamic + within-country geography make trade-cost effects an order of magnitude larger than canonical static ACR-type numbers.
- **Free-mobility assumption in economic geography** — critiques the standard Roback/Rosen and Allen–Arkolakis identification of amenities under free mobility (e.g., the "Congo has great amenities" reductio) and instead identifies migration frictions and low utility using subjective well-being data.
- **Scale effects in endogenous growth** — connects to the Jones (1995) debate; with constant world population and the economy off its BGP, strong scale effects are not a binding concern.

## Theoretical / Empirical Significance

A landmark high-resolution dynamic quantitative spatial model: it is one of the first to solve a full dynamic spatial growth economy on a fine global grid, prove equilibrium existence/uniqueness and BGP conditions, and jointly quantify amenities, productivity, migration costs, and trade costs for the whole world. It supplies a reusable framework for evaluating any spatial friction or shock (migration, trade, and — as the authors flag — climate change) with measured local effects, and its backcasting exercise provides rare out-of-sample validation for a forward-looking spatial model.

## Notes and Caveats

- **No capital accumulation** — only technology is accumulated over time; local technology investment substitutes only partially for capital.
- **No local investment in amenities** — amenities change only through congestion from in/out-migration.
- **No individual skill/education heterogeneity** — treated as part of local technology, given the long-run focus; ignores human capital carried by migrants (argued to last ~one generation).
- **Political economy of migration abstracted away**, though the paper stresses distributional conflict: developed economies retain future primacy only under liberalized migration.
- Welfare measured by amenity-adjusted real GDP `u` deliberately **excludes direct mobility costs** (interpreted largely as legal impediments), so that measure is much larger than the expected-utility measure that includes idiosyncratic preferences.
- Subjective well-being data are at the **country level**, so within-country relative utility is not corrected.
- Long-horizon forecasts (centuries) are conditional on parameters and geography being stable and on excluded shocks (wars, decolonization, trade liberalizations).
