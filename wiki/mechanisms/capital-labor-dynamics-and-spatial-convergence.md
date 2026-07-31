---
title: "Capital-Labor Dynamics and Spatial Convergence"
type: mechanism
status: active
papers:
  - kleinman-liu-redding-2023-dynamic-spatial
  - zhao-chen-fu-2022-dynamic-qse-china
  - desmet-rossi-hansberg-2014-spatial-development
  - desmet-nagy-rossi-hansberg-2018-geography-development
  - eckert-peters-2022-spatial-structural-change
  - redding-rossi-hansberg-2017-quantitative-spatial
  - redding-2016-goods-trade-factor-mobility-welfare
  - li-ma-tang-2024-migration-misallocation
  - wu-you-2025-urbanization
tags:
  - capital accumulation
  - migration
  - regional convergence
  - spectral analysis
  - transition dynamics
  - technology diffusion
---

# Capital-Labor Dynamics and Spatial Convergence

## Lead

The capital-labor dynamics mechanism describes how the interaction between forward-looking capital accumulation and gradual labor migration shapes the speed and pattern of regional income convergence in a spatial economy. In this mechanism, spatially immobile landlords in each location make intertemporal consumption-investment decisions to accumulate local capital -- interpreted as buildings and structures -- while workers make forward-looking migration decisions subject to idiosyncratic mobility shocks and migration costs. The two factors are complementary in production, so the marginal product of each depends on the local quantity of the other. This complementarity generates a powerful feedback: when capital and labor are both above or both below their steady-state levels in a location, convergence is slow because each factor's abundance supports the other's marginal product, retarding the adjustment of both. The mechanism provides a unified explanation for the declining rate of income convergence across U.S. states and the persistent and heterogeneous impact of local economic shocks. It also connects to a broader family of dynamic spatial growth models in which technology diffusion and migration frictions jointly determine how fast incomes converge, and to historical evidence that productivity catch-up, not sectoral reallocation alone, drove rural-urban wage convergence during the first U.S. structural transformation.

## The Challenge of Dynamic Spatial Models

Incorporating forward-looking investment into economic geography with population mobility has long been a central challenge in quantitative spatial economics. Investment and migration decisions in each location depend on one another, and on these decisions in all other locations across all future periods, producing a prohibitively large state space. [[zhao-chen-fu-2022-dynamic-qse-china]] survey this "curse of dimensionality": when the same agents simultaneously make migration and savings decisions, the historical dependence of wealth on past locations causes the number of agent types to grow as $N^t$, because migrants carry wealth from their origin locations.

Existing approaches circumvented this problem by making dynamic decisions reduce to static problems. [[desmet-rossi-hansberg-2014-spatial-development]] achieve this by assuming one-period technology diffusion, so firms' innovation decisions depend only on current profits. [[desmet-nagy-rossi-hansberg-2018-geography-development]] deploy a similar device at global scale, where multiplicatively separable bilateral migration costs make a worker's location decision depend only on current variables. [[kleinman-liu-redding-2023-dynamic-spatial]] propose a different solution -- separating migration and investment by agent type, with workers making forward-looking migration choices but living hand-to-mouth (no investment), and landlords making forward-looking investment choices but remaining geographically immobile. This keeps the state space tractable -- only each location's population share and capital stock -- while preserving the dynamic interaction between the two factors. [[redding-2016-goods-trade-factor-mobility-welfare]] supplies the labour-mobility foundation: heterogeneous-preference workers make population reallocation an endogenous margin that responds to trade costs and productivity -- precisely the margin the dynamic models make forward-looking.

## The Worker-Landlord Separation as a Tractability Device

The economy consists of $N$ locations, each with a mass of workers $\ell_{it}$ and a capital stock $k_{it}$. Workers are infinitely lived, supply labor inelastically, and make forward-looking migration decisions subject to idiosyncratic extreme-value-distributed mobility shocks and bilateral migration costs. They have no access to an investment technology, consuming all of their wage income each period. Landlords are geographically immobile, own the local capital stock, and make forward-looking consumption and investment decisions to maximize intertemporal utility with CRRA preferences.

[[kleinman-liu-redding-2023-dynamic-spatial]] derive a key property of landlords' optimal behavior: their consumption is proportional to current wealth, $c_{it}^k = s_{it} R_{it} k_{it}$, where $R_{it} \equiv 1 - \delta + r_{it}/p_{it}$ is the gross return on capital. In the special case of log utility ($\psi = 1$), the saving rate is constant at $\beta$, yielding $k_{it+1} = \beta R_{it} k_{it}$, which parallels the Solow-Swan model. Production uses Cobb-Douglas technology combining labor and capital:

$$ y_{it} = z_{it} \left(\frac{\ell_{it}}{\mu}\right)^{\mu} \left(\frac{k_{it}}{1-\mu}\right)^{1-\mu}, \quad 0 < \mu < 1 $$

where $z_{it}$ is location productivity. Trade between locations is subject to iceberg costs, giving rise to a constant-elasticity gravity structure for trade flows. [[zhao-chen-fu-2022-dynamic-qse-china]] note that this separation is one of several tractability devices in the dynamic literature; an alternative keeping both migration and savings with the same household is available but harder to bring to data at fine geographic resolution.

## Steady-State Existence and Uniqueness

Despite the richness of the framework -- many locations with heterogeneous productivity, amenities, trade costs, and migration costs -- [[kleinman-liu-redding-2023-dynamic-spatial]] establish analytical conditions for the existence and uniqueness of the steady-state equilibrium. Proposition 1 shows that a sufficient condition for a unique steady-state spatial distribution of economic activity is that the spectral radius of a coefficient matrix of model parameters $\{\psi, \theta, \beta, \rho, \mu, \delta\}$ is less than or equal to one. These conditions depend only on structural parameters, not on initial conditions.

In steady state, even though capital-labor ratios $k_i^* / \ell_i^*$ can differ across locations, there is a common real rental rate $r_i^* / p_i^*$ across all locations, because landlords face the same intertemporal problem and the same gross return on capital. The same logic appears at the global level in [[desmet-nagy-rossi-hansberg-2018-geography-development]], where a unique balanced-growth path exists provided the dispersion forces dominate the static and dynamic agglomeration forces. [[redding-rossi-hansberg-2017-quantitative-spatial]] frame both results as part of the general quantitative spatial equilibrium toolkit, in which uniqueness hinges on dispersion forces outweighing agglomeration forces.

## Dynamic Exact-Hat Algebra for Transition Paths

[[kleinman-liu-redding-2023-dynamic-spatial]] generalize the dynamic exact-hat algebra techniques of Caliendo, Dvorkin, and Parro (2019) to incorporate forward-looking investment. Given initial observed values of the endogenous variables -- population shares, capital stocks, trade shares, and migration shares -- the economy's transition path can be solved for any anticipated convergent sequence of future changes in fundamentals, without information on the level of fundamentals.

This exact-hat approach permits counterfactual analysis using only observed data and the structure of the model. [[redding-2016-goods-trade-factor-mobility-welfare]] develops the static counterpart for welfare counterfactuals: changes in domestic trade shares and population are sufficient statistics for the welfare gains from trade, and population reallocation is a first-order component of those gains once labor is mobile. [[zhao-chen-fu-2022-dynamic-qse-china]] apply the dynamic version to China, using observed provincial trade and migration matrices and a migration elasticity estimated from census panel data. They find that adding population migration to a standard macro model sharply reduces the speed of convergence -- the half-life of GDP per capita rises from roughly 3-5 years (in the standard closed-economy neoclassical model) to over 30 years. Some figures in the OCR-garbled raw text are partially illegible, but the order-of-magnitude shift is unambiguous.

## Spectral Analysis of Convergence Speed

A central methodological innovation of [[kleinman-liu-redding-2023-dynamic-spatial]] is the use of spectral analysis to characterize the economy's transition dynamics. By linearizing the model around the steady state, the transition path can be expressed in closed form:

$$ \widetilde{x}_{t+1} = P \widetilde{x}_t + R \widetilde{f} $$

where $\widetilde{x}_t$ is the $2N$-dimensional vector of log-deviations of population and capital from steady state, $P$ is a $2N \times 2N$ transition matrix, $R$ is an impact matrix capturing the initial effect of shocks $\widetilde{f}$ to productivity and amenities, and both matrices depend only on structural parameters and the observed trade and migration share matrices.

The eigendecomposition of the transition matrix, $P = U \Lambda V$, reveals that the dynamic response to any empirical shock can be expressed as a linear combination of the response to "eigenshocks" -- shocks whose initial impact on the state variables coincides with an eigenvector of $P$. The half-life of convergence for each eigenshock depends solely on its associated eigenvalue:

$$ t_h^{(1/2)} = -\left\lceil \frac{\ln 2}{\ln \lambda_h} \right\rceil $$

Different eigenshocks converge at different speeds, depending on their incidence on the labor and capital state variables. This spectral decomposition provides a rigorous foundation for understanding why some shocks have persistent effects while others dissipate quickly.

## The Interaction Mechanism: Why Capital and Labor Dynamics Reinforce Each Other

The most important substantive finding from the spectral analysis is that the speed of convergence depends critically on the correlation between capital and labor gaps from steady state across locations. When these gaps are positively correlated -- capital and labor are both above or both below steady state in the same locations -- convergence is slow, because each factor's abundance supports the other's marginal product. Capital above steady state raises the marginal productivity of labor, dampening out-migration and the downward adjustment of labor; abundant labor raises the marginal product of capital, retarding its depreciation-induced decline.

> *Cross-pattern observation:* The positive correlation of capital and labor gaps as the key determinant of slow convergence is a novel result of the spectral approach that could not be derived from reduced-form convergence regressions. It implies that the speed of convergence is not a structural parameter but depends on the spatial pattern of the initial deviation from steady state. [[zhao-chen-fu-2022-dynamic-qse-china]] reach the same conclusion in the Chinese application, where the mutual dependence of capital accumulation and migration is why adding migration to a neoclassical model multiplies the half-life of convergence severalfold.

When the gaps are negatively correlated -- capital is above steady state where labor is below, and vice versa -- convergence is fast because the abundance of one factor accelerates the adjustment of the other. High capital in a location with scarce labor raises wages, attracting migrants, while the abundant capital itself gradually depreciates. The same distinction operates in the multisector extension of [[kleinman-liu-redding-2023-dynamic-spatial]], where reallocation between sectors within a location is faster than reallocation across locations.

## Empirical Application: U.S. States, 1965--2015

[[kleinman-liu-redding-2023-dynamic-spatial]] apply their framework to data on capital stocks, populations, and bilateral trade and migration flows for U.S. states from 1965 to 2015. A conventional $\beta$-convergence regression of state growth on initial income weakens dramatically over the sample, and the spectral analysis shows that the average half-life of convergence across the entire spectrum of eigenshocks is approximately 20 years, with some eigencomponents converging with half-lives as long as 80 years.

The decline in income convergence is largely driven by initial conditions -- the initial gaps of the labor and capital state variables from steady state -- rather than changes in the pattern of shocks to fundamentals. The 1975 steady-state gaps load more heavily on eigencomponents with slow convergence speeds (a loadings-weighted average half-life of 38 years), whereas the productivity and amenity shocks from 1975--2015 load more heavily on fast-converging eigencomponents (20 years). The observed slowdown thus reflects the persistent effects of the initial spatial distribution of capital and labor, not a change in the fundamental forces shaping the economy.

> **Current assessment (2026-07):** The finding that initial conditions, rather than changes in shocks, drive the decline in U.S. income convergence is a distinctive contribution of the spectral approach. However, the sample period limits the ability to distinguish between genuine slow convergence and structural breaks in the convergence process.

The framework also generates rich predictions about the heterogeneous impact of local shocks. A negative productivity shock to a Rust Belt state such as Michigan triggers a gradual population outflow and capital decumulation, consistent with the empirical evidence in Blanchard and Katz (1992) and Dix-Carneiro and Kovak (2017). Importantly, the model generates nonmonotonic transition dynamics: Michigan's neighbors initially gain population (workers face lower migration costs in moving nearby), but these shares subsequently decline below their initial steady-state values as the contraction of Michigan's market makes neighboring locations less attractive.

## Global Dynamic Growth and Technology Diffusion

The capital-labor interaction is one member of a broader class of dynamic spatial growth mechanisms in which migration frictions slow convergence at the global scale. [[desmet-nagy-rossi-hansberg-2018-geography-development]] build a dynamic spatial growth theory with innovation and spatial technology diffusion for the whole world economy at $1^{\circ} \times 1^{\circ}$ geographic resolution. Firms invest in local technology, the return to which depends on market size; technology diffuses across space; and migration is subject to origin- and destination-specific flow costs identified from population changes between 2000 and 2005. With current frictions it takes about 400 years for the world to reach its balanced-growth path, and the correlation between population density and real income per capita -- negative today (around $-0.4$ across world cells) -- only slowly becomes positive as dense regions become the wealthy regions. The welfare stakes are enormous: fully liberalizing migration raises amenity-adjusted real GDP (welfare) by 305.9% and real income by 125.8% in present discounted value, with 70.3% of the world population changing country at impact (71.6% moving across cells). These magnitudes are the global benchmark against which the state-level half-lives of [[kleinman-liu-redding-2023-dynamic-spatial]] and the province-level slowdown of [[zhao-chen-fu-2022-dynamic-qse-china]] can be read: the same friction -- the sluggish reallocation of labor -- keeps both factor and technology gaps open for decades.

## Catch-up, Structural Change, and Convergence

Historical evidence shows that spatial convergence can also be driven by technology diffusion operating independently of the capital-labor complementarity. [[eckert-peters-2022-spatial-structural-change]] study the first U.S. structural transformation, 1880--1920, when GDP per capita doubled and the agricultural employment share fell from 50% to 25%. A Bartik-style intuition predicts that regions specialized in the shrinking farm sector should have fallen behind. Instead, wages rose fastest in the most farm-intensive regions -- roughly 1.5 to 2 percentage points per year faster than in the already-industrialized cities -- and 80% of the 25-point fall in the agricultural employment share occurred within regions rather than through rural-to-urban migration. The model attributes this rural-urban wage convergence to productivity catch-up through technology diffusion, and a counterfactual that shuts down technology adoption reverses the result, producing urban-biased wage growth and excessive worker relocation. The spatial forces determining whether structural change widens or narrows regional gaps -- diffusion, trade, and migration -- are thus the same forces that set the speed of convergence.

> *Cross-pattern observation:* Across this corpus, convergence speed is not a structural constant -- it depends on which margin is active. Capital-labor complementarity sets the half-life in [[kleinman-liu-redding-2023-dynamic-spatial]], technology diffusion does so in [[desmet-nagy-rossi-hansberg-2018-geography-development]] and [[eckert-peters-2022-spatial-structural-change]], and migration costs dominate in [[zhao-chen-fu-2022-dynamic-qse-china]]. [[desmet-rossi-hansberg-2014-spatial-development]] add that higher transport costs can themselves accelerate innovation when greater concentration pushes a stagnant sector past the fixed-cost threshold.

## Relevance for China

The capital-labor dynamics mechanism has direct implications for regional inequality in China, where internal migration barriers (the hukou system) and state-directed capital investment create a distinctive environment. [[zhao-chen-fu-2022-dynamic-qse-china]] calibrate a version of the Kleinman-Liu-Redding framework for Chinese provinces and find that introducing population migration into a standard macro model reduces the speed of convergence by an order of magnitude: the half-life of GDP rises from roughly 3-5 years to over 30 years. A distinctive additional finding is that, in the long run, the population distribution -- not capital -- is what determines the structure of the economy: capital adjusts to the spatial distribution of people, so per-capita income converges across provinces even while the variance of total output widens as population concentrates in high-productivity areas.

[[li-ma-tang-2024-migration-misallocation]] provide complementary evidence: internal migration partially alleviates the aggregate welfare losses from firm-level frictions (people move from heavily distorted to less distorted regions), but simultaneously worsens spatial inequality because migrants select into richer, less-distorted prefectures. This tension between aggregate efficiency and spatial equity is a direct consequence of the capital-labor interaction. [[wu-you-2025-urbanization]] show that the optimal policy response depends on the relative strength of agglomeration benefits and congestion costs, which determines whether restricting migration improves or worsens welfare; the capital-labor mechanism suggests that even temporary migration restrictions can have long-lasting effects on capital, because capital adjusts slowly in response to labor flows.

> **Current assessment (2026-07):** Whether the Kleinman-Liu-Redding mechanism generalizes to settings with frictional migration (the hukou system) and state-directed capital allocation remains an open question. The Zhao-Chen-Fu calibration suggests the mechanism is at work in China, but government-directed investment may alter the correlation between capital and labor gaps and thus the predicted convergence speed.

## Open Questions

Three open questions connect the mechanism to its global and historical counterparts. First, extending it to frictional migration (as in the hukou system) and state-directed capital would require relaxing the worker-landlord separation, a step that currently re-introduces the curse of dimensionality that [[kleinman-liu-redding-2023-dynamic-spatial]] and [[zhao-chen-fu-2022-dynamic-qse-china]] were designed to avoid. Second, the relative contribution of technology diffusion versus capital-labor complementarity to observed convergence speeds is unresolved: [[eckert-peters-2022-spatial-structural-change]] find diffusion dominates in the historical U.S. data, whereas [[kleinman-liu-redding-2023-dynamic-spatial]] emphasize the capital-labor margin, and [[desmet-nagy-rossi-hansberg-2018-geography-development]] show the answer can shift with the degree of migration liberalization. Third, identification over long horizons remains difficult: distinguishing slow convergence from structural breaks requires decades of data, and short samples -- and garbled OCR conversions of some Chinese papers -- limit the precision of half-life estimates.

## Cross-links

- Concepts: [[quantitative-spatial-equilibrium]], [[economics-of-the-hukou-system]]
- Mechanisms: [[spatial-innovation-and-structural-transformation]], [[endogenous-infrastructure-and-spatial-development]], [[firm-level-frictions-and-spatial-misallocation]], [[welfare-effects-of-migration-in-chinese-cities]]
- Synthesis: [[migration-barriers-and-spatial-inequality]], [[structural-transformation-and-regional-convergence]]
- Methods: [[exact-hat-algebra]]
- Major sources: [[kleinman-liu-redding-2023-dynamic-spatial]], [[zhao-chen-fu-2022-dynamic-qse-china]], [[desmet-nagy-rossi-hansberg-2018-geography-development]], [[desmet-rossi-hansberg-2014-spatial-development]], [[eckert-peters-2022-spatial-structural-change]]
