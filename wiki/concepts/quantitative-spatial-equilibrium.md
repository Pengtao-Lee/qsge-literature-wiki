---
title: "Quantitative Spatial Equilibrium"
type: concept
status: active
papers:
  - allen-arkolakis-2014-trade-topography
  - redding-rossi-hansberg-2017-quantitative-spatial
  - monte-redding-rossi-hansberg-2018-commuting
  - kleinman-liu-redding-2023-dynamic-spatial
  - tombe-zhu-2019-trade-migration-china
  - ma-tang-2020-geography-trade
  - zhao-chen-fu-2022-dynamic-qse-china
tags:
  - spatial economics
  - general equilibrium
  - gravity
  - economic geography
---

# Quantitative Spatial Equilibrium

Quantitative spatial equilibrium (QSE) models constitute a class of general-equilibrium frameworks in which the spatial distribution of economic activity across many heterogeneous locations is determined by the interplay of trade in goods, factor mobility (migration and commuting), and local productivity and amenity differences. Unlike earlier stylized new economic geography models that focused on a small number of symmetric regions, QSE models are designed to be taken directly to data: they accommodate arbitrarily many asymmetric locations, incorporate gravity-equation relationships for trade and commuting flows, and permit exact inversion from observed data to unobserved fundamentals. The core intellectual contribution is the demonstration that, under a broad class of preference and technology assumptions, the spatial equilibrium system reduces to a set of integral equations whose properties — existence, uniqueness, stability, and comparative statics — can be characterized analytically. This tractability has made QSE the dominant paradigm for quantitative counterfactual analysis of transport infrastructure, place-based policies, migration reform, and trade liberalization.

## Historical Context: From New Economic Geography to Quantitative Models

The theoretical literature on economic geography prior to the 2000s, as synthesized by Krugman (1991) and Fujita, Krugman, and Venables (1999), had concentrated on formalizing mechanisms for agglomeration and cumulative causation — including forward and backward linkages between economic activities — in stylized spatial settings such as a limited number of symmetric locations, a circle, or a line. Although this literature stimulated a wave of empirical research, the mapping from model to empirical specification was often unclear, and the estimated reduced-form coefficients lacked a structural interpretation that would be invariant to policy intervention ([[redding-rossi-hansberg-2017-quantitative-spatial]]).

The quantitative turn in spatial economics drew on two key innovations from the international trade literature. The first was the Eaton and Kortum (2002) Ricardian model, which demonstrated that a tractable gravity structure for trade flows could be derived from Fréchet-distributed productivity draws under perfect competition, with a single elasticity parameter governing the response of trade to costs. The second was the Armington (1969) approach, in which goods are differentiated by location of origin under constant returns and perfect competition, as adopted by [[allen-arkolakis-2014-trade-topography]]. A parallel strand built on the Helpman (1998) model of monopolistic competition with love of variety and an immobile factor (land) as a dispersion force, which [[redding-rossi-hansberg-2017-quantitative-spatial]] codified into a canonical taxonomy of building blocks. The key departure from the earlier literature was the ability to handle large numbers of asymmetric locations with realistic geographies of trade costs, while preserving sufficient analytical tractability to characterize equilibrium properties.

## Core Theoretical Architecture: Preferences, Technology, and Spatial Frictions

Every QSE model rests on three building blocks: preferences, production technology, and spatial frictions. Common to all variants is the assumption that locations are connected by costly trade in goods, and that labor is mobile across locations — either through migration, commuting, or both.

**Preferences** typically take one of two forms. In the Armington approach of [[allen-arkolakis-2014-trade-topography]], workers have identical constant elasticity of substitution (CES) preferences over the continuum of differentiated varieties produced by each location. Welfare in location $i$ is $W(i) = w(i)u(i)/P(i)$, where $w(i)$ is the wage, $u(i)$ is the local amenity, and $P(i)$ is the CES price index. An alternative approach, used by [[monte-redding-rossi-hansberg-2018-commuting]], introduces idiosyncratic preference shocks drawn from a Fréchet distribution, so that workers choose residence-workplace pairs based on both systematic location characteristics and idiosyncratic amenities. The Fréchet shape parameter $\epsilon$ governs the dispersion of these shocks and, critically, the elasticity of commuting and migration flows with respect to economic incentives.

**Production** can be structured under either constant or increasing returns to scale. [[allen-arkolakis-2014-trade-topography]] assumes perfect competition with each location producing a unique differentiated variety using labor only, with productivity $A(i) = \overline{A}(i)L(i)^{\alpha}$, where $\alpha$ captures the strength of local productivity spillovers. In the Helpman-style model reviewed by [[redding-rossi-hansberg-2017-quantitative-spatial]], varieties are produced under monopolistic competition with fixed costs, so that the measure of varieties in a location is proportional to its employment. Under both market structures, the equilibrium pricing rule implies that trade flows follow a gravity equation.

**Spatial frictions** enter through iceberg trade costs $T(i,j) \geq 1$ for shipping goods between locations, commuting costs $\kappa_{ni}$ for moving between residence and workplace, and migration costs for relocating. A distinctive feature of [[allen-arkolakis-2014-trade-topography]] is the micro-foundation of trade costs as the accumulation of instantaneous costs along the least-cost route on a surface, enabling the use of fast-marching methods from computational physics to estimate bilateral trade costs from geographic data on transportation networks.

## Equilibrium: Existence, Uniqueness, and Stability

The central theoretical achievement of the QSE literature is the characterization of equilibrium in terms of integral equations whose properties can be studied using established mathematical tools. [[allen-arkolakis-2014-trade-topography]] shows that, under CES preferences and perfect competition, the equilibrium conditions reduce to a system of two integral equations:

$$ L(i) w(i)^{\sigma} = \int_S W(s)^{1-\sigma} T(i,s)^{1-\sigma} A(i)^{\sigma-1} u(s)^{\sigma-1} L(s) w(s)^{\sigma} ds, $$

$$ w(i)^{1-\sigma} = \int_S W(i)^{1-\sigma} T(s,i)^{1-\sigma} A(s)^{\sigma-1} u(i)^{\sigma-1} w(s)^{1-\sigma} ds. $$

When productivity and amenities are exogenous ($\alpha = \beta = 0$), these equations become linear operators whose eigenfunctions are $L(i)w(i)^{\sigma}$ and $w(i)^{1-\sigma}$. Theorem 1 of Allen and Arkolakis establishes that a unique regular spatial equilibrium exists, that every location is inhabited, and that the equilibrium can be computed as the uniform limit of a simple iterative procedure.

When productivity and amenity spillovers are present ($\alpha \neq 0$, $\beta \neq 0$), the system becomes nonlinear. Under symmetric trade costs, the system reduces to a single nonlinear integral equation — a homogeneous Hammerstein equation of the second kind. Theorem 2 establishes that a regular equilibrium exists if $\gamma_1 \equiv 1 - \alpha(\sigma-1) - \beta\sigma \neq 0$, and that all equilibria are regular and point-wise locally stable if $\gamma_1 > 0$. Uniqueness holds when $\gamma_2/\gamma_1 \in [-1,1]$, a condition that — for empirically relevant parameter values — is equivalent to requiring that dispersion forces (congestion from land, commuting costs) are at least as strong as agglomeration forces (love of variety, productivity spillovers). When $\gamma_1 \leq 0$, agglomeration forces are strong enough to induce complete concentration in a single location — a "black hole" — or to produce multiple equilibria, as illustrated by the circle example in which any location can become the concentration point ([[allen-arkolakis-2014-trade-topography]]).

> **Cross-paper pattern (2026-07):** Across the Armington (Allen-Arkolakis), Eaton-Kortum (Tombe-Zhu), and Helpman-style monopolistic competition frameworks, the condition that dispersion forces dominate agglomeration forces — $\sigma(1-\alpha) > 1$ in the Helpman variant — is a recurring sufficient condition for equilibrium uniqueness. This convergence arises because all three frameworks share the same gravity structure and the same tension between love-of-variety agglomeration and land-congestion dispersion, despite different microfoundations.

[[redding-rossi-hansberg-2017-quantitative-spatial]] extends this analysis to the discrete-location case, showing that the same eigenvalue-eigenfunction logic applies: for the Helpman-style model, a sufficient condition for uniqueness is $\sigma(1-\alpha) > 1$, which ensures that the land crowding force dominates the variety-expansion agglomeration force. When this condition holds, the equilibrium distribution of population is uniquely determined by the underlying geography of productivities, amenities, and trade costs — a property that eliminates the indeterminacy that was a central feature of earlier core-periphery models and ensures that counterfactuals have determinate predictions.

## Gravity Equation Structure

A defining property of QSE models is that they generate gravity equation relationships for all bilateral flows. Under CES preferences, the value of trade flows from location $i$ to location $j$ is:

$$ X(i,j) = \left(\frac{T(i,j)w(i)}{A(i)P(j)}\right)^{1-\sigma} w(j)L(j), $$

where the CES price index $P(j)$ captures multilateral resistance — the accessibility of all potential suppliers to market $j$. This structure implies that bilateral trade depends on both bilateral resistance ($T(i,j)$) and on trade costs to all other locations through the price index ([[allen-arkolakis-2014-trade-topography]]; [[redding-rossi-hansberg-2017-quantitative-spatial]]).

The same gravity structure extends to commuting flows when workers have Fréchet-distributed idiosyncratic preferences. [[monte-redding-rossi-hansberg-2018-commuting]] derives the conditional commuting probability as:

$$ \lambda_{ni|n}^{R} = \frac{B_{ni}(w_i / \kappa_{ni})^{\epsilon}}{\sum_{s} B_{ns}(w_s / \kappa_{ns})^{\epsilon}}, $$

which exhibits the same gravity form: bilateral commuting flows increase with workplace wages and decrease with bilateral commuting costs, relative to a multilateral resistance term capturing all alternative workplaces. The Fréchet shape parameter $\epsilon$ plays the same role for commuting as the trade elasticity plays for goods: it governs the sensitivity of flows to economic incentives.

## Model Inversion: Recovering Fundamentals from Data

A critical property of QSE models is that they are exactly identified: there exists a one-to-one mapping from observed endogenous variables (wages, employment, trade flows) to unobserved structural fundamentals (productivities, amenities, quality-adjusted land). [[allen-arkolakis-2014-trade-topography]] proves Theorem 3: for any observed continuous functions $w$ and $L$ and symmetric trade cost function $T$, there exist unique (to scale) composite productivity $A$ and amenity $u$ functions that rationalize the data as a regular spatial equilibrium. The intuition is that, conditional on trade costs, relative wages across locations with the same geographic position identify relative amenities, and relative incomes identify relative productivities.

[[redding-rossi-hansberg-2017-quantitative-spatial]] demonstrates the same inversion property in the discrete-location Helpman model: given observed population $L_n$, wages $w_n$, and parameterized trade costs $d_{ni}$, the system of equilibrium equations can be solved for unique values of quality-adjusted land $H_n$ and productivities $A_n$ (up to a normalization). This exact identification implies that the model's ability to explain the data cannot be used as a test — the structural residuals are free parameters that ensure the model exactly matches the data. Instead, testing requires additional moments not used in the inversion, such as quasi-experimental variation from natural experiments ([[redding-rossi-hansberg-2017-quantitative-spatial]]).

## Counterfactual Analysis: Exact-Hat Algebra and Welfare

QSE models derive much of their policy relevance from the Dekle-Eaton-Kortum (2007) exact-hat algebra, which permits counterfactual analysis using only observed data from an initial equilibrium, without re-estimating structural fundamentals. The approach expresses all counterfactual outcomes in terms of relative changes — hat variables $\hat{x} = x'/x$ — and solves a system of equations that depends only on observed trade shares, population shares, wages, and the assumed change in trade costs.

In the Helpman-style model, [[redding-rossi-hansberg-2017-quantitative-spatial]] shows that the counterfactual change in welfare can be expressed as a function of the change in a single location's domestic trade share and population share:

$$ \frac{\bar{V}^1}{\bar{V}^0} = \left(\frac{\pi_{nn}^{0}}{\pi_{nn}^{1}}\right)^{\frac{\alpha}{\sigma-1}} \left(\frac{\lambda_{n}^{0}}{\lambda_{n}^{1}}\right)^{\frac{\sigma(1-\alpha)-1}{\sigma-1}}. $$

This expression reveals that the welfare effect of any trade-cost change is fully captured by the change in the share of expenditure on locally produced goods — a sufficient-statistics result that mirrors the Arkolakis, Costinot, and Rodriguez-Clare (2012) formula for the gains from trade, adjusted for the presence of an immobile factor (land). [[allen-arkolakis-2014-trade-topography]] applies this logic to evaluate the welfare impact of the U.S. Interstate Highway System, finding that its removal would reduce welfare by 1.1–1.4%, substantially exceeding its construction and maintenance costs.

> **Current assessment (2026-07):** The robustness of exact-hat welfare estimates to model misspecification is well understood for within-class comparisons (e.g., Armington versus Eaton-Kortum), where the welfare formula is identical. However, when moving across model classes — for example, from models without firm heterogeneity to Melitz-style models with selection into exporting — the sufficient-statistics property breaks down, and welfare estimates diverge.

## Methodological Diversity: Armington, Eaton-Kortum, and Melitz

Although all QSE models share the gravity structure, they differ in their microfoundations, which has implications for the structural interpretation of key parameters and for predictions along margins beyond aggregate trade flows. [[allen-arkolakis-2014-trade-topography]] adopts the **Armington** assumption (goods differentiated by location of origin, perfect competition), under which the trade elasticity $\sigma-1$ corresponds to the elasticity of substitution between varieties. [[tombe-zhu-2019-trade-migration-china]] uses the **Eaton-Kortum** Ricardian framework, in which the trade elasticity $\theta$ reflects the dispersion of productivity draws across locations under perfect competition. [[ma-tang-2020-geography-trade]] develops a **Melitz**-style variant with heterogeneous firms and endogenous entry, in which the trade elasticity reflects both the intensive margin (existing firms exporting more) and the extensive margin (new firms entering export markets).

These frameworks yield identical gravity equations for aggregate trade flows and identical welfare formulae conditional on the domestic trade share, but they diverge in predictions about the distributional effects of trade cost changes. In the Melitz variant, reductions in trade costs induce selection effects — the least productive firms exit, and resources reallocate toward more productive firms — that can amplify or dampen the welfare effects relative to the Eaton-Kortum benchmark, depending on the dispersion of firm productivity ([[ma-tang-2020-geography-trade]]). Furthermore, when factors are mobile, the frameworks differ in how trade cost reductions affect the spatial concentration of economic activity: the Armington and Eaton-Kortum models predict dispersion as trade costs fall, whereas monopolistic competition models with strong love of variety can generate agglomeration through home-market effects ([[redding-rossi-hansberg-2017-quantitative-spatial]]).

## Dynamic Extensions

A frontier of the QSE literature extends the static framework to incorporate forward-looking dynamics. [[kleinman-liu-redding-2023-dynamic-spatial]] integrates capital accumulation with a dynamic discrete-choice migration model, showing that the interaction between capital and labor dynamics shapes the speed of spatial convergence. Their spectral analysis reveals that convergence to steady state is slow when capital and labor gaps are positively correlated across locations — a common empirical pattern — because above-steady-state capital raises the marginal product of labor, dampening out-migration. Using U.S. state data from 1965–2015, they find an average convergence half-life of approximately 20 years, with some eigencomponents exhibiting half-lives of up to 80 years. This dynamic extension preserves the tractability of the static QSE framework through a generalization of exact-hat algebra that solves for transition paths using only observed initial allocations, without requiring knowledge of fundamental levels. Zhao, Chen, and Fu (2022) survey the broader dynamic QSE frontier in the Chinese context, documenting how the curse of dimensionality has been the central barrier to dynamic extension and reviewing the Chinese application of dynamic QSE methods to macroeconomic spatial simulation, showing that initial conditions—rather than changes in fundamental shocks—drive the bulk of spatial divergence over time ([[zhao-chen-fu-2022-dynamic-qse-china]]).

> **Current assessment (2026-07):** Dynamic QSE is the most active frontier of the paradigm. While the Kleinman-Liu-Redding framework establishes tractability for forward-looking investment in spatial settings, the next challenges include multi-sector dynamics, endogenous amenities, and the interaction of dynamic spatial adjustment with structural transformation—areas where Chinese application data provide unique empirical leverage.

## Cross-links

**Concepts:**
- [[gravity-in-spatial-economics]] — the gravity equation structure that is the empirical backbone of all QSE models
- [[local-employment-elasticities-and-commuting]] — how commuting openness generates heterogeneous labor supply responses
- [[economics-of-the-hukou-system]] — migration frictions in China's institutional context
- [[data-as-a-non-rival-factor-in-spatial-models]] — extensions of QSE to incorporate data as a factor

**Mechanisms:**
- [[endogenous-infrastructure-and-spatial-development]] — how transport networks co-evolve with spatial equilibrium
- [[capital-labor-dynamics-and-spatial-convergence]] — forward-looking dynamics in spatial models
- [[spatial-innovation-and-structural-transformation]] — dynamic QSE with endogenous innovation
- [[firm-level-frictions-and-spatial-misallocation]] — micro-level distortions within the QSE framework

**Debates:**
- [[government-and-urbanization]] — normative implications of spatial equilibrium for policy

**Synthesis:**
- [[trade-and-migration-cost-reductions-in-china]] — applied QSE analysis of China's internal reforms
- [[network-infrastructure-and-market-integration]] — infrastructure counterfactuals in QSE frameworks

**Major sources:**
- [[allen-arkolakis-2014-trade-topography]]
- [[redding-rossi-hansberg-2017-quantitative-spatial]]
- [[monte-redding-rossi-hansberg-2018-commuting]]
- [[kleinman-liu-redding-2023-dynamic-spatial]]
