---
title: "Quantitative Spatial Equilibrium"
type: concept
status: active
papers:
  - redding-rossi-hansberg-2017-quantitative-spatial
  - allen-arkolakis-2014-trade-topography
  - monte-redding-rossi-hansberg-2018-commuting
  - kleinman-liu-redding-2023-dynamic-spatial
  - tombe-zhu-2019-trade-migration-china
  - ma-tang-2020-geography-trade
  - zhao-chen-fu-2022-dynamic-qse-china
  - redding-2016-goods-trade-factor-mobility-welfare
  - desmet-nagy-rossi-hansberg-2018-geography-development
  - tsivanidis-2026-urban-transit-infrastructure
  - eaton-kortum-2002-technology-geography-trade
  - caliendo-parro-2015-trade-welfare-nafta
  - zhao-chen-2021-interregional-land-allocation
  - zhao-wang-dai-chen-2025-cross-regional-investment-distortions
  - zhou-gong-2024-public-expenditure-equalization
  - liu-wang-chen-2024-human-capital-spatial-allocation
  - luo-luo-2025-carbon-control-spatial-transmission
  - wu-you-2025-urbanization
tags:
  - spatial economics
  - general equilibrium
  - gravity
  - economic geography
  - quantitative methods
---

# Quantitative Spatial Equilibrium

Quantitative spatial equilibrium (QSE) models are a class of general-equilibrium frameworks in which the spatial distribution of economic activity across many heterogeneous locations is determined by the interplay of costly goods trade, factor mobility (migration and commuting), and local productivity and amenity differences. Their defining properties are tractability with arbitrarily many asymmetric locations, a gravity-equation structure for every bilateral flow, exact inversion from observed data to unobserved fundamentals, and exact-hat-algebra counterfactuals computed from initial-equilibrium data alone. The paradigm unifies international trade and regional economics: the same tools used to measure the gains from opening borders are applied to transport infrastructure, place-based policy, migration reform, and — in the most recent wave — to the institutional structure of a single large economy such as China. This page surveys the architecture of the framework, its equilibrium and welfare theory, the new results on factor-mobility welfare and global dynamics, and the frontier in which the toolkit is translated to China-specific institutions.

## Historical Context: From New Economic Geography to Quantitative Models

The theoretical literature on economic geography prior to the 2000s, synthesized by Krugman (1991) and Fujita, Krugman, and Venables (1999), concentrated on formalizing agglomeration and cumulative causation in stylized settings with a small number of symmetric locations. Although this literature stimulated a wave of empirical research, the mapping from model to empirical specification was often unclear, and estimated reduced-form coefficients lacked a structural interpretation invariant to policy intervention ([[redding-rossi-hansberg-2017-quantitative-spatial]]).

The quantitative turn drew on two innovations from international trade: the Eaton and Kortum (2002) Ricardian model, which derived a tractable gravity structure from Fréchet-distributed productivity draws under perfect competition with a single elasticity governing the response of trade to costs ([[eaton-kortum-2002-technology-geography-trade]]), and the Armington (1969) approach, goods differentiated by location of origin under constant returns, as adopted by [[allen-arkolakis-2014-trade-topography]]. A parallel strand built on the Helpman (1998) model of monopolistic competition with love of variety and an immobile factor (land) as a dispersion force, which [[redding-rossi-hansberg-2017-quantitative-spatial]] codified into a canonical taxonomy of building blocks. The key departure was the ability to handle large numbers of asymmetric locations with realistic trade-cost geographies while preserving enough analytical tractability to characterize equilibrium properties.

## Core Theoretical Architecture: Preferences, Technology, and Spatial Frictions

Every QSE model rests on three building blocks — preferences, production technology, and spatial frictions — with costly goods trade connecting locations and labor mobile through migration or commuting.

**Preferences** typically take one of two forms. In the Armington approach of [[allen-arkolakis-2014-trade-topography]], workers have identical CES preferences over a continuum of differentiated varieties, and welfare in location $i$ is $W(i) = w(i)u(i)/P(i)$. A second approach introduces idiosyncratic preference shocks drawn from a Fréchet distribution, so workers choose residence-workplace pairs based on both systematic characteristics and idiosyncratic amenities; the Fréchet shape parameter $\epsilon$ governs the elasticity of commuting and migration flows to economic incentives. Redding (2016) develops the heterogeneous-preference case most fully: each location faces an upward-sloping labor supply curve, because a higher real wage must be paid to attract workers with lower idiosyncratic tastes, while expected utility conditional on living in a location is equalized across locations ([[redding-2016-goods-trade-factor-mobility-welfare]]).

**Production** can be structured under constant or increasing returns. [[allen-arkolakis-2014-trade-topography]] assumes perfect competition with each location producing a unique differentiated variety using labor only, with productivity $A(i) = \overline{A}(i)L(i)^{\alpha}$. In the Helpman-style model reviewed by [[redding-rossi-hansberg-2017-quantitative-spatial]], varieties are produced under monopolistic competition with fixed costs, so the measure of varieties is proportional to local employment. Under both market structures the pricing rule implies gravity trade flows.

**Spatial frictions** enter as iceberg trade costs $T(i,j) \geq 1$, commuting costs $\kappa_{ni}$, and migration costs for relocating. A distinctive feature of [[allen-arkolakis-2014-trade-topography]] is the micro-foundation of trade costs as accumulated instantaneous costs along the least-cost route on a surface, enabling fast-marching methods from computational physics to estimate bilateral costs from transportation network data.

## Equilibrium: Existence, Uniqueness, and Stability

The central theoretical achievement of QSE is the characterization of equilibrium as integral equations whose properties can be studied with established mathematical tools. [[allen-arkolakis-2014-trade-topography]] shows that, under CES preferences and perfect competition, equilibrium reduces to two integral equations:

$$ L(i) w(i)^{\sigma} = \int_S W(s)^{1-\sigma} T(i,s)^{1-\sigma} A(i)^{\sigma-1} u(s)^{\sigma-1} L(s) w(s)^{\sigma} ds, $$

$$ w(i)^{1-\sigma} = \int_S W(i)^{1-\sigma} T(s,i)^{1-\sigma} A(s)^{\sigma-1} u(i)^{\sigma-1} w(s)^{1-\sigma} ds. $$

When productivity and amenities are exogenous ($\alpha = \beta = 0$), these are linear operators whose eigenfunctions are $L(i)w(i)^{\sigma}$ and $w(i)^{1-\sigma}$; Theorem 1 establishes a unique regular equilibrium computable by iteration. With spillovers ($\alpha \neq 0$, $\beta \neq 0$) the system is nonlinear; a regular equilibrium exists if $\gamma_1 \equiv 1 - \alpha(\sigma-1) - \beta\sigma \neq 0$, and equilibria are regular and locally stable if $\gamma_1 > 0$. When $\gamma_1 \leq 0$, agglomeration forces induce complete concentration — a "black hole" — or multiple equilibria, as in the circle example where any point can become the concentration point.

> **Cross-paper pattern (2026-07):** Across the Armington (Allen–Arkolakis), Eaton–Kortum (Tombe–Zhu), and Helpman-style monopolistic competition frameworks, the condition that dispersion forces dominate agglomeration forces — $\sigma(1-\alpha) > 1$ in the Helpman variant — is a recurring sufficient condition for equilibrium uniqueness, arising from the shared gravity structure and the same tension between love-of-variety agglomeration and land-congestion dispersion.

[[redding-rossi-hansberg-2017-quantitative-spatial]] extends this to the discrete-location case, showing that for the Helpman-style model a sufficient condition for uniqueness is $\sigma(1-\alpha) > 1$, which eliminates the indeterminacy of earlier core-periphery models and ensures counterfactuals have determinate predictions. Redding (2016) proves existence and uniqueness for the mobile-labor model with heterogeneous preferences under quasi-symmetric trade costs, with the inelastic supply of land guaranteeing a unique population distribution ([[redding-2016-goods-trade-factor-mobility-welfare]]).

The global dynamic version imposes a stricter condition. Desmet, Nagy, and Rossi-Hansberg prove that a dynamic competitive equilibrium of their world economy exists and is unique if the static agglomeration economies of local production externalities ($\alpha/\theta$) and returns to innovation ($\gamma_1/\xi$) do not dominate the three congestion forces — amenity congestion $\lambda$, decreasing returns to local labor $1-\mu$, and taste dispersion $\Omega$:

$$ \frac{\alpha}{\theta} + \frac{\gamma_1}{\xi} \leq \lambda + 1 - \mu + \Omega. $$

A unique balanced-growth path requires an additional dynamic-agglomeration term, $\gamma_1/([1-\gamma_2]\xi)$, on the left-hand side; without technological diffusion the economy concentrates into a point rather than converging to a non-degenerate steady state ([[desmet-nagy-rossi-hansberg-2018-geography-development]]).

## Gravity Equation Structure

A defining property of QSE models is that they generate gravity equations for all bilateral flows. Under CES preferences, the value of trade from $i$ to $j$ is

$$ X(i,j) = \left(\frac{T(i,j)w(i)}{A(i)P(j)}\right)^{1-\sigma} w(j)L(j), $$

where the price index $P(j)$ captures multilateral resistance — the accessibility of all potential suppliers to market $j$ ([[allen-arkolakis-2014-trade-topography]]; [[redding-rossi-hansberg-2017-quantitative-spatial]]).

The same structure extends to commuting when workers have Fréchet-distributed idiosyncratic preferences. [[monte-redding-rossi-hansberg-2018-commuting]] derives the conditional commuting probability as

$$ \lambda_{ni|n}^{R} = \frac{B_{ni}(w_i / \kappa_{ni})^{\epsilon}}{\sum_{s} B_{ns}(w_s / \kappa_{ns})^{\epsilon}}, $$

with the Fréchet parameter $\epsilon$ playing the same role for commuting as the trade elasticity plays for goods. Within cities, Tsivanidis decomposes commuting-market access into a residential component (RCMA — residents' access to jobs) and a firm component (FCMA — firms' access to workers), showing that changes in these two access terms and the reduced-form elasticities of population, employment, and floorspace prices to them are sufficient statistics for the change in the whole distribution of activity across the city ([[tsivanidis-2026-urban-transit-infrastructure]]).

## Model Inversion: Recovering Fundamentals from Data

A critical property of QSE models is exact identification: a one-to-one mapping from observed endogenous variables to unobserved structural fundamentals. [[allen-arkolakis-2014-trade-topography]] proves Theorem 3: for any observed continuous wage and employment functions and symmetric trade cost function, there exist unique (to scale) composite productivity and amenity functions that rationalize the data as a regular spatial equilibrium. [[redding-rossi-hansberg-2017-quantitative-spatial]] demonstrates the same inversion in the discrete-location Helpman model, and Redding (2016) provides the recursive counterpart with heterogeneous preferences: given parameters, a parameterization of trade costs, and data on populations, wages, and land supplies, there exist unique amenities and productivities consistent with the data up to a normalization ([[redding-2016-goods-trade-factor-mobility-welfare]]).

Desmet, Nagy, and Rossi-Hansberg push inversion to the global scale. For each of the world's roughly 65,000 $1^\circ \times 1^\circ$ cells they recover initial productivities and amenities, and — from observed population changes over two periods together with the origin-destination decomposition of migration costs — the bilateral moving costs of every location. Because the parameters used to identify amenities and productivities evolve with development, the static decomposition is not stable enough for a dynamic context; the global exercise identifies these objects jointly with migration frictions, using Cantril-ladder subjective-well-being data to pin down amenity levels relative to utility ([[desmet-nagy-rossi-hansberg-2018-geography-development]]). Exact identification carries an important caveat: the model's ability to rationalize the data cannot itself serve as a test, because the structural residuals are free parameters chosen to match the data. Testing requires additional moments not used in the inversion, such as quasi-experimental variation from natural experiments ([[redding-rossi-hansberg-2017-quantitative-spatial]]).

## Counterfactual Analysis: Exact-Hat Algebra and Welfare

QSE models derive much of their policy relevance from the Dekle–Eaton–Kortum exact-hat algebra, which computes counterfactuals using only observed initial-equilibrium data, expressing outcomes as relative changes $\hat{x} = x'/x$ without re-estimating fundamentals. In the Helpman-style model, [[redding-rossi-hansberg-2017-quantitative-spatial]] shows that the counterfactual change in welfare is a function of the change in a location's domestic trade share and population share:

$$ \frac{\bar{V}^1}{\bar{V}^0} = \left(\frac{\pi_{nn}^{0}}{\pi_{nn}^{1}}\right)^{\frac{\alpha}{\sigma-1}} \left(\frac{\lambda_{n}^{0}}{\lambda_{n}^{1}}\right)^{\frac{\sigma(1-\alpha)-1}{\sigma-1}}. $$

[[allen-arkolakis-2014-trade-topography]] applies this logic to evaluate the removal of the U.S. Interstate Highway System, finding a welfare decline of 1.1–1.4% — a monetary value of $150–200 billion a year against roughly $100 billion in annual costs, implying an annualized return on investment of at least 9%.

Redding (2016) shows that with mobile labor, the welfare gains from any trade-cost change depend jointly on the change in the open-economy domestic trade share and on the reallocation of population between autarky and trade ([[redding-2016-goods-trade-factor-mobility-welfare]]). The mobility-adjusted sufficient statistic is

$$ \frac{\bar{U}^{T}}{\bar{U}^{A}} = \left(\frac{1}{\pi_{nn}^{T}}\right)^{\frac{\alpha}{\theta}} \left(\frac{L_{n}^{A}}{L_{n}^{T}}\right)^{\frac{1}{\epsilon} + (1-\alpha)}, $$

so that population changes enter welfare through the price of the immobile factor land. In the synthetic-grid transport counterfactual, the improvement raises common expected utility by roughly 9% (1.0928), while population reallocations range up to ~60%. A policy analyst who falsely assumed immobile labor and measured welfare by the domestic trade share alone would estimate a treatment effect of 0.2179 on treated locations when the true common welfare treatment effect is zero.

> **Current assessment (2026-07):** That reallocations can dwarf welfare gains is now a central caution in the paradigm. When labor is mobile, measuring welfare by domestic trade shares alone — the Arkolakis–Costinot–Rodriguez-Clare sufficient statistic — is misleading, because population moves bid up land prices in the locations that gain market access and equalize expected utility across space. The same reallocation-versus-creation distinction motivates the general-equilibrium-treatment-effect critique of reduced-form infrastructure regressions ([[redding-2016-goods-trade-factor-mobility-welfare]]; [[tsivanidis-2026-urban-transit-infrastructure]]).

## Methodological Diversity: Armington, Eaton-Kortum, and Melitz

Although all QSE models share the gravity structure, they differ in microfoundations, which changes the interpretation of key parameters and predictions along margins beyond aggregate flows. [[allen-arkolakis-2014-trade-topography]] adopts the Armington assumption, under which the trade elasticity $\sigma-1$ is the substitution elasticity. [[tombe-zhu-2019-trade-migration-china]] uses the Eaton-Kortum Ricardian framework with trade elasticity $\theta$ reflecting the dispersion of productivity draws ([[eaton-kortum-2002-technology-geography-trade]]). [[ma-tang-2020-geography-trade]] develops a Melitz-style variant with heterogeneous firms and endogenous entry, in which the trade elasticity reflects both the intensive margin (existing firms exporting more) and the extensive margin (new firms entering export markets); the extensive margin of firm entry is what makes migrant inflows welfare-increasing in destination cities, a result that reverses when entry is shut down.

These frameworks yield identical gravity equations for aggregate flows and identical welfare formulae conditional on the domestic trade share, but diverge in distributional and spatial predictions. Caliendo and Parro extend the Eaton-Kortum structure to multiple sectors with input-output linkages, estimating sector-specific trade elasticities — a refinement that matters when trade-cost changes propagate through intermediate inputs ([[caliendo-parro-2015-trade-welfare-nafta]]). With mobile factors, the frameworks also differ in how cost reductions affect spatial concentration: Armington and Eaton-Kortum models predict dispersion as trade costs fall, whereas monopolistic competition with strong love of variety can generate agglomeration through home-market effects ([[redding-rossi-hansberg-2017-quantitative-spatial]]).

> **Current assessment (2026-07):** Within a model class — Armington versus Eaton-Kortum — exact-hat welfare estimates are identical given the domestic trade share, so the choice of microfoundation is innocuous for aggregate welfare. Moving across classes, however — to Melitz-style selection or multi-sector input-output structures — breaks the sufficient-statistics property, and welfare estimates diverge ([[ma-tang-2020-geography-trade]]; [[caliendo-parro-2015-trade-welfare-nafta]]).

## Dynamic Extensions

A frontier of the QSE literature extends the static framework to forward-looking dynamics. [[kleinman-liu-redding-2023-dynamic-spatial]] integrates capital accumulation with a dynamic discrete-choice migration model, showing that capital and labor dynamics interact to shape the speed of spatial convergence: convergence is slow when capital and labor gaps are positively correlated across locations, because above-steady-state capital raises the marginal product of labor and dampens out-migration. Using U.S. state data from 1965–2015 they find an average convergence half-life of approximately 20 years, with some eigencomponents exhibiting half-lives up to 80 years, and they generalize exact-hat algebra to solve for transition paths using only observed initial allocations.

Desmet, Nagy, and Rossi-Hansberg build a global dynamic QSE in which firms invest in local technology, innovation depends on market size, and technology diffuses across space. At current migration frictions the world takes roughly 400 years to reach its balanced-growth path, during which the correlation between GDP per capita and population density flips from negative to strongly positive — dense regions become the wealthy regions. Fully liberalizing migration raises welfare by roughly 300% (amenity-adjusted real GDP) and output by about 126% in present-discounted value, with 70.3% of the population changing country at impact ([[desmet-nagy-rossi-hansberg-2018-geography-development]]). At the within-city scale, Tsivanidis' urban model with heterogeneous skills and multiple transit modes is static in time but resolves the full general-equilibrium adjustment of residence, employment, floorspace prices, and wages to a transport shock, showing that the first-order value-of-travel-time-savings measure captures only about 52% of the welfare gain ([[tsivanidis-2026-urban-transit-infrastructure]]). Zhao, Chen, and Fu survey the broader dynamic QSE frontier, identifying the curse of dimensionality — the state-space explosion when individuals simultaneously migrate and save — as the central technical barrier, and applying dynamic QSE to Chinese macroeconomic simulation to show that initial conditions, rather than changes in fundamental shocks, drive most spatial divergence over time ([[zhao-chen-fu-2022-dynamic-qse-china]]).

> **Current assessment (2026-07):** Dynamic QSE is the most active frontier of the paradigm. While Kleinman–Liu–Redding establishes tractability for forward-looking investment, the open challenges are multi-sector dynamics, endogenous amenities, and the interaction of dynamic spatial adjustment with structural transformation — areas where Chinese application data provide unusual empirical leverage ([[kleinman-liu-redding-2023-dynamic-spatial]]; [[zhao-chen-fu-2022-dynamic-qse-china]]).

## Policy Translation: Quantitative Spatial Equilibrium Adapted to Chinese Institutions

> **Cross-paper pattern (2026-07):** The Chinese applications share the same toolkit — exact-hat algebra, model inversion, and Fréchet-distributed migration with a mobility elasticity — applied to China-specific institutions: hukou registration, centrally rationed land quotas, fiscal transfers, investment distortions, and carbon control. Each is a port of the canonical QSE apparatus onto a distinct policy question.

The clearest translation is Tombe and Zhu's quantification of China's internal trade and migration costs. Embedding the Eaton-Kortum structure with two sectors and hukou-driven migration frictions, they estimate that the average cost of rural-to-urban migration within a province in 2000 was equivalent to shrinking real income by a factor of nearly three, with between-province moves an order of magnitude more costly; declines in these costs account for a large share of China's labor-productivity growth between 2000 and 2005, and internal trade and migration costs fall more than external ones ([[tombe-zhu-2019-trade-migration-china]]). The same parameter values — a migration elasticity of about 1.5 and a trade elasticity of 4 — recur across the Chinese QSE literature.

Zhao and Chen port the framework to the allocation of centrally rationed construction-land quotas, which since 2003 have tilted from the eastern coast toward the central and western provinces. Their model reproduces the divergence of regional housing prices and shows that maximizing GDP favors allocating more land to eastern provinces while minimizing regional per-capita income gaps favors the interior — an efficiency-versus-fairness trade-off in which the actual allocation finds a balance, and one that combining land allocation with hukou reform can improve on ([[zhao-chen-2021-interregional-land-allocation]]). Zhao, Wang, Dai, and Chen add a micro-founded cross-regional investment decision, showing that "capital flowing against its return" — the Chinese manifestation of the Lucas puzzle — is driven roughly equally by investment-distortion incentives from local governments and by product-market segmentation that induces tariff-jumping investment; ignoring the interaction underestimates the gains from domestic trade openness by about 20% ([[zhao-wang-dai-chen-2025-cross-regional-investment-distortions]]).

The fiscal and human-capital dimensions appear in two further applications. Zhou and Gong evaluate regional public-expenditure equalization: equalizing per-capita productive expenditures raises output and welfare, whereas equalizing social-security expenditures delivers larger welfare gains with a modest output decline, so the desirability of equalization depends on whether the policy target is output or welfare ([[zhou-gong-2024-public-expenditure-equalization]]). Liu, Wang, and Chen study the spatial allocation of human capital with cross-skill productivity and public-service spillovers, finding that redistributing from high-skill workers in high-wage cities toward low-skill workers in low-wage cities moves the economy to the Pareto frontier ([[liu-wang-chen-2024-human-capital-spatial-allocation]]). Wu and You ask whether governments should restrain urbanization: the hukou system cost China roughly 13.6% of GDP and 4.7% of welfare on average over 2000–2020, and although most large cities have surpassed their locally optimal sizes, internal migration restrictions are generally welfare-reducing because the mobility frictions they introduce outweigh the correction of city-size externalities ([[wu-you-2025-urbanization]]).

The environmental frontier ports the toolkit to carbon control. Luo and Luo's quantitative spatial model with trade linkages, migration, and carbon constraints shows that a single-region carbon cap raises costs in all trading partners, with non-regulated regions' GDP gains offsetting about 38% of the regulated region's losses while carbon leakage cuts the emissions reduction roughly in half; command-and-control carbon restrictions impose welfare losses more than twice those of carbon pricing, and smoother labor mobility lowers the cost of abatement while deeper trade linkages raise it ([[luo-luo-2025-carbon-control-spatial-transmission]]).

*Current wiki assessment:* Together these applications make China the paradigm's largest natural laboratory. The toolkit cleanly separates mechanisms and quantifies counterfactuals for institutions — hukou, land quotas, fiscal equalization, unified-market construction, carbon dual control — that would be difficult to evaluate reduced-form, while depending on the same core elasticities whose external validity across very different labor markets remains the main open question.

## Cross-links

**Concepts:**
- [[gravity-in-spatial-economics]] — the gravity equation structure that is the empirical backbone of all QSE models
- [[ricardian-quantitative-trade]] — the Eaton-Kortum microfoundation for QSE trade costs
- [[multi-sector-trade-and-input-output-linkages]] — sectoral extensions and input-output amplification
- [[agglomeration-and-dispersion-forces]] — the tension governing equilibrium uniqueness
- [[internal-city-structure-and-density]] — within-city QSE and commuting-market access
- [[local-employment-elasticities-and-commuting]] — how commuting openness generates heterogeneous labor supply responses
- [[economics-of-the-hukou-system]] — migration frictions in China's institutional context
- [[data-as-a-non-rival-factor-in-spatial-models]] — extensions of QSE to non-rival factors

**Mechanisms:**
- [[endogenous-infrastructure-and-spatial-development]] — how transport networks co-evolve with spatial equilibrium
- [[capital-labor-dynamics-and-spatial-convergence]] — forward-looking dynamics in spatial models
- [[spatial-innovation-and-structural-transformation]] — dynamic QSE with endogenous innovation
- [[firm-level-frictions-and-spatial-misallocation]] — micro-level distortions within the QSE framework
- [[welfare-effects-of-migration-in-chinese-cities]] — migration frictions and welfare in Chinese cities
- [[carbon-policy-and-spatial-leakage]] — QSE evaluation of carbon control

**Debates:**
- [[government-and-urbanization]] — normative implications of spatial equilibrium for policy

**Synthesis:**
- [[trade-and-migration-cost-reductions-in-china]] — applied QSE analysis of China's internal reforms
- [[network-infrastructure-and-market-integration]] — infrastructure counterfactuals in QSE frameworks
- [[transport-infrastructure-and-urban-welfare]] — the transport-welfare counterfactual literature at all scales
- [[structural-transformation-and-regional-convergence]] — spatial dynamics and convergence
- [[spatial-public-finance]] — fiscal equalization and land-quota allocation in QSE

**Major sources:**
- [[redding-rossi-hansberg-2017-quantitative-spatial]]
- [[allen-arkolakis-2014-trade-topography]]
- [[redding-2016-goods-trade-factor-mobility-welfare]]
- [[desmet-nagy-rossi-hansberg-2018-geography-development]]
- [[kleinman-liu-redding-2023-dynamic-spatial]]
- [[tsivanidis-2026-urban-transit-infrastructure]]
- [[tombe-zhu-2019-trade-migration-china]]
- [[zhao-chen-2021-interregional-land-allocation]]
