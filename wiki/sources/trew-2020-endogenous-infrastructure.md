---
title: "Endogenous Infrastructure Development and Spatial Takeoff in the First Industrial Revolution"
type: source
authors: ["Trew, Alex"]
year: 2020
slug: trew-2020-endogenous-infrastructure
tags: [endogenous-infrastructure, spatial-development, transport-costs, industrial-revolution, structural-transformation]
raw_markdown: "[[raw_markdown/papers/trew-2020-endogenous-infrastructure]]"
status: canonical
journal: "American Economic Review: Insights, 2(4), 473–490"
---

# Endogenous Infrastructure Development and Spatial Takeoff in the First Industrial Revolution (2020)

> **Paper claim** — The timing and spatial distribution of infrastructure development interact bidirectionally with spatial economic growth, structural transformation, and the onset of industrial takeoff; early localized infrastructure investment accelerates takeoff, while uniformly distributed investment does not, and the geographical location of first industrial innovation is robust to most counterfactual transport policies.

Raw markdown: [[raw_markdown/papers/trew-2020-endogenous-infrastructure]]

## Research Question

How does the quantity of labor employed in the tertiary sector, the volume of infrastructure investment, its timing relative to the transition to high growth, and its geographical focus affect long-run macroeconomic outcomes (structural transformation, sustained high growth)? Can infrastructure policy accelerate industrial takeoff, and does the spatial distribution of that policy matter?

## Model / Experimental Design

The paper extends the spatial development framework of Desmet and Rossi-Hansberg (2014) by making transport costs endogenous to infrastructure supply at each location. The economy is a continuum of locations [0,1] producing two final goods (agricultural and manufacturing) under nonhomothetic Stone-Geary preferences with subsistence requirement $\gamma=0.05$ and manufacturing share parameter $\eta=0.175$. Firms hire labor and rent land; they may purchase a probability $\phi$ of drawing an improved technology from a Pareto distribution (parameters $a_A=305$, $a_M=70$), subject to fixed and marginal innovation costs that differ by sector.

The model is built in two stages. **(Stage 1 — exogenous infrastructure):** Transport costs at a location $\ell$ are $\kappa(\ell,t) = \bar{\kappa}(\ell,t) + \tilde{\kappa}(\ell,t)$, where $\bar{\kappa}(\ell,t)=\varkappa e^{-T(\ell,t)}$ (physical iceberg melt) depends on exogenous fixed infrastructure $T(\ell,t)$, and $\tilde{\kappa}(\ell,t)$ is a toll charged by a landowner-carrier who hires tertiary labor $L_T(\ell,t)$ under CES production $Y_T = Z_T[\zeta L_T^r + (1-\zeta)T^r]^{1/r}$ with $\zeta=0.85$, $r=0.7$. The toll adjusts to meet local transport demand $D(\ell,t)$; Lemma 1 bounds the toll in $(0,1)$ under conditions on $D$ and $w$, and Lemma 2 establishes a sufficient condition ($D/(Z_T T) > 2^{1/r}$) for $\partial\hat{\kappa}/\partial D < 1$. Labor market clearing requires $\int_0^1[\hat{L}_T + \sum_i\theta_i\hat{L}_i]d\ell = \bar{L}=100$; Lemma 3 proves existence of equilibrium via a fixed point in total productive labor $\tilde{L}_G$.

**(Stage 2 — endogenous infrastructure):** Infrastructure companies can be formed at the county level ($N=10$ equal connected intervals). An investment permanently increases $T(\ell,t)$ in a county at cost $x^T/N + c$ ($x^T/N = 1.15$). Companies maximize current-period dividends; Lemma 4 shows investment occurs when it increases total current rent net of costs. Equilibrium is a pure-strategy Nash profile with parliamentary coordination selecting the rent-maximising profile when multiple equilibria exist (Definition 1). Computation iterates over up to $N\cdot 2^{N-1}$ permutations per period (Appendix B).

**Calibration:** Initial productivity distributions inverted from Shaw-Taylor et al. (2010) occupational data for 624 registration districts at 1710, mapped into a north-south 500-parish interval. 100 simulations (20 for endogenous-infrastructure model) run over 171 periods to 1881.

## Main Results

**Baseline structural transformation (Stage 1):** Primary employment falls from ~50% to ~25%; secondary rises slowly (45%→48%→58% in data, matched by model); tertiary accelerates after 1817. The model matches aggregate growth takeoff timing (Mokyr 2004), relative price declines, and real wage paths, though it overpredicts tertiary employment growth because infrastructure is fixed.

**Endogenous infrastructure (Stage 2):** Takeoff occurs at year 1782.7 (latitude 53.7°N), four years later than Stage 1. Structural transformation fit improves: tertiary labor pressure is partially relieved by infrastructure investment. The model predicts a 19.3% decline in transport costs (unweighted), 50.0% when trade-volume-weighted (data: 86%). Total infrastructure spending is 5.5% of 1870 output (data: turnpike/canal 7.3% of 1820 GDP; railways 22.6% of 1870 GDP). The model captures the disjointed spatial pattern of infrastructure — improvements around 53.8°N (the northern industrial hotspot) — but misses improvements near 52.5° and overpredicts investment near 50° due to the 1D interval approximation.

**Counterfactuals (Stage 1 — Table 2; Stage 2 — Table 3):**

*Stage 1 (exogenous transport cost variation):*
- Baseline takeoff: 1781.7 at 53.7°N.
- 25% better transport technology ($Z_T=1.875$): takeoff 1761.7 (20 years earlier; releases transport labor into production).
- Higher transport costs ($\varkappa=0.375$): takeoff 1770.8 (agglomeration concentrates firms, overcoming fixed innovation costs).
- Lower transport costs ($\varkappa=0.275$): takeoff 1798.8 (reduced agglomeration delays innovation).
- Transport labor subsidy: no effect on takeoff timing.

*Stage 2 (endogenous infrastructure timing and distribution):*
- Baseline takeoff: 1782.7 at 53.7°N.
- Infrastructure brought forward 50 years: takeoff 1777.6 (5 years earlier; labor-release effect dominates agglomeration-loss effect).
- Infrastructure brought forward 100 years: takeoff 1769.2 (13.5 years earlier).
- Infrastructure delayed 50 or 100 years: no significant change (no infrastructure prior to baseline takeoff).
- Uniform (spatially averaged) infrastructure brought forward 50 years: takeoff *delayed* to 1787.3, and growth never reaches 1.5% in the simulation period. The spatial distribution of improvements determines whether early infrastructure helps or hurts.

**Takeoff location:** Robustly at 53.7°N (northern England) across all transport-policy counterfactuals. Only a uniform 56.6% coal price reduction shifts it to London (51.4°). Even zero energy cost in Newcastle or the Midlands does not move it — initial manufacturing productivity in the North is the crucial determinant.

**Two-region validation (Appendix A):** A collapsed two-region (North/South) model fails: no trade at the calibrated transport cost, misses aggregate labor shares (agriculture 43.9% vs. 50.6% continuum), and cannot capture the role of energy-price spatial variation.

## Mechanisms Identified

> **Paper claim** — Infrastructure and growth interact through two bidirectional channels: (1) the growth of transport-sector employment responds to output growth and spatial concentration in agriculture and industry; (2) local demand for infrastructure emerges as regions industrialise, which in turn lowers transport costs and reshapes economic geography. The net effect on takeoff timing depends on whether the labour-releasing effect of better infrastructure dominates the agglomeration-reducing effect of lower transport costs.

1. **Scale effect in innovation** (equation 9): $\phi_i^*(\ell,t) = 1 - [\psi_{2,i}(a_i-1)/(p_i Z_i \hat{L}_i^\iota)]^{1/2}$. Higher output at a location raises the optimal innovation probability. Transport labour draws workers away from production, reducing firm scale and delaying innovation.
2. **Labour-release effect**: Better infrastructure lowers the transport labour required for given demand, releasing workers into agriculture and manufacturing, increasing firm size and accelerating takeoff.
3. **Agglomeration effect**: Higher transport costs concentrate economic activity, raising firm size and making innovation feasible (consistent with Proposition 3 in Desmet and Rossi-Hansberg 2014). Lower transport costs spread activity, reducing scale and delaying innovation.
4. **Spatial distribution of infrastructure**: Localised improvements concentrate labour-release gains where they matter; uniform improvements lower transport costs everywhere without concentrating labour savings, muting the acceleration effect.

## Methods and Measures

Links: [[wiki/methods/_index]], [[wiki/measures/_index]]

The paper employs a **spatial general equilibrium model with a continuum of locations** and endogenous transport costs, building on Desmet and Rossi-Hansberg (2014). Key methodological features:
- **Continuum-of-space framework**: 500 discrete parishes on a north-south interval, mapped from 624 registration districts of England and Wales.
- **Endogenous tertiary labour**: Landowner-carriers produce transport services via CES production with substitutability ($r=0.7$) between labour and infrastructure stock.
- **Nash equilibrium infrastructure investment**: Computed over up to $10\cdot2^{9}=5,120$ permutations per period, solved by sequential best-response with parliamentary coordination as equilibrium selection.
- **Counterfactual policy analysis**: 100-run Monte Carlo (20 for endogenous-infrastructure model) with confidence intervals of $\pm 2$ standard deviations.
- **Two-region benchmark** (Appendix A): Calibrated comparison demonstrating the value of spatial continuum for capturing energy-price dynamics and infrastructure policy geography.

## Concepts Engaged

- **Endogenous infrastructure**: Infrastructure supply is both a stock (fixed capital) and a flow (transport labour), determined by local economic activity.
- **Spatial takeoff**: The transition from low to high growth originates in specific locations and propagates spatially through productivity diffusion with decay $\delta=15$.
- **Structural transformation**: Nonhomothetic preferences drive labour shifts across primary, secondary, and tertiary sectors; the tertiary sector absorbs the largest share of the reallocation.
- **Transport costs and agglomeration**: The bidirectional relationship between trade costs, spatial concentration, and the timing of industrial innovation.

Links: [[wiki/concepts/_index]]

## Connection to Debates

> **Paper claim** — The paper contributes to the debate on whether centralised infrastructure policy (as in 19th-century France) delayed industrial growth relative to decentralised, locally financed infrastructure (as in England and Wales). The counterfactuals show that early *localised* infrastructure accelerates takeoff, while uniform (centralised-style) early infrastructure does not — lending quantitative support to the Szostak (1991) thesis.

The model speaks to the debate on infrastructure and growth in developing countries (World Bank Group 2011): policy can accelerate takeoff, but only if the spatial distribution of improvements matches local demand. A uniform national rollout costing the same as a targeted one may delay industrialisation.

Links: [[wiki/debates/_index]]

## Theoretical / Empirical Significance

This paper is the first to embed **endogenous transport infrastructure** in a **dynamic spatial equilibrium model with a continuum of locations** and match it to high-resolution historical data over 171 years. It reconciles the aggregate structural transformation puzzle of Shaw-Taylor and Wrigley (2014) — that tertiary employment growth, not just industrialisation, accompanied the Industrial Revolution — by showing that transport labour demand emerges endogenously from increased output and trade volume. The counterfactual results establish a theoretically grounded policy lesson: the spatial *distribution* of infrastructure investment is as important as its *level* and *timing* for accelerating development.

## Notes and Caveats

- The one-dimensional interval approximation overweights infrastructure returns near 50°N (south Devon/Cornwall), which is far from London in reality but adjacent in the model.
- Total infrastructure spending is underpredicted in later periods (5.5% vs. 22.6% of 1870 GDP for railways), partly because transport TFP growth is assumed constant (2% from Bogart 2014) rather than accelerating, and because the county spatial unit is fixed rather than growing in scale over time.
- Infrastructure investment decisions are static (one-period horizon); a dynamic investment model could change takeoff timing.
- The model does not consider optimal policy design — only positive counterfactuals.
- Coastal shipping (which bypasses midland transport labour demand) is not modelled, leading to overprediction of tertiary shares in the middle of the interval.
- No multiple industrial subsectors; only one manufacturing sector.
