---
title: "Capital-Labor Dynamics and Spatial Convergence"
type: mechanism
status: active
papers:
  - kleinman-liu-redding-2023-dynamic-spatial
  - zhao-chen-fu-2022-dynamic-qse-china
  - desmet-rossi-hansberg-2014-spatial-development
  - li-ma-tang-2024-migration-misallocation
  - wu-you-2025-urbanization
tags:
  - capital accumulation
  - migration
  - regional convergence
  - spectral analysis
  - transition dynamics
---

# Capital-Labor Dynamics and Spatial Convergence

## Lead

The capital-labor dynamics mechanism describes how the interaction between forward-looking capital accumulation and gradual labor migration shapes the speed and pattern of regional income convergence in a spatial economy. In this mechanism, spatially immobile landlords in each location make intertemporal consumption-investment decisions to accumulate local capital -- interpreted as buildings and structures -- while workers make forward-looking migration decisions subject to idiosyncratic mobility shocks and migration costs. The two factors are complementary in production, so the marginal product of each depends on the local quantity of the other. This complementarity generates a powerful feedback: when capital and labor are both above or both below their steady-state levels in a location, convergence is slow because each factor's abundance supports the other's marginal product, retarding the adjustment of both. The mechanism provides a unified explanation for the declining rate of income convergence across U.S. states and the persistent and heterogeneous impact of local economic shocks.

## The Challenge of Dynamic Spatial Models

Incorporating forward-looking investment into economic geography models with population mobility has long been a central challenge in quantitative spatial economics. The reason is that investment and migration decisions in each location depend on one another, and on these decisions in all other locations across all future time periods, producing a prohibitively large state space for empirically realistic numbers of locations. [[zhao-chen-fu-2022-dynamic-qse-china]] survey this "curse of dimensionality" problem in detail, noting that when the same agents simultaneously make migration and savings decisions, the historical dependence of wealth on past locations causes the number of agent types to grow as $N^t$ -- each period creates $N$ times as many distinct types because migrants carry wealth from their origin locations.

Existing approaches circumvented this problem by making dynamic decisions reduce to static problems. [[desmet-rossi-hansberg-2014-spatial-development]] achieve this by assuming one-period technology diffusion, so firms' innovation decisions depend only on current profits. [[kleinman-liu-redding-2023-dynamic-spatial]] propose a different solution: separate the migration and investment decisions by agent type, with workers making forward-looking migration choices but living hand-to-mouth (no investment), and landlords making forward-looking investment choices but remaining geographically immobile. This separation keeps the state space tractable -- it consists only of each location's population share and capital stock -- while preserving the dynamic interaction between the two factors.

## The Worker-Landlord Separation as a Tractability Device

The economy consists of $N$ locations, each with a mass of workers $\ell_{it}$ and a capital stock $k_{it}$. Workers are infinitely lived, supply labor inelastically, and make forward-looking migration decisions subject to idiosyncratic extreme-value-distributed mobility shocks and bilateral migration costs. They do not have access to an investment technology, consuming all of their wage income each period. Landlords are geographically immobile, own the local capital stock, and make forward-looking consumption and investment decisions to maximize intertemporal utility with CRRA preferences.

[[kleinman-liu-redding-2023-dynamic-spatial]] derive a key property of landlords' optimal behavior: their consumption is proportional to current wealth, $c_{it}^k = s_{it} R_{it} k_{it}$, where $R_{it} \equiv 1 - \delta + r_{it}/p_{it}$ is the gross return on capital. In the special case of log utility ($\psi = 1$), the saving rate is constant at $\beta$, yielding $k_{it+1} = \beta R_{it} k_{it}$, which parallels the Solow-Swan model. Production uses Cobb-Douglas technology combining labor and capital:

$$ y_{it} = z_{it} \left(\frac{\ell_{it}}{\mu}\right)^{\mu} \left(\frac{k_{it}}{1-\mu}\right)^{1-\mu}, \quad 0 < \mu < 1 $$

where $z_{it}$ is location productivity. Trade between locations is subject to iceberg costs, giving rise to a constant-elasticity gravity structure for trade flows.

## Steady-State Existence and Uniqueness

Despite the richness of the framework -- many locations with heterogeneous productivity, amenities, trade costs, and migration costs -- [[kleinman-liu-redding-2023-dynamic-spatial]] establish analytical conditions for the existence and uniqueness of the steady-state equilibrium. Proposition 1 shows that a sufficient condition for a unique steady-state spatial distribution of economic activity is that the spectral radius of a coefficient matrix of model parameters $\{\psi, \theta, \beta, \rho, \mu, \delta\}$ is less than or equal to one. These conditions depend only on structural parameters -- such as the strength of agglomeration and dispersion forces -- and are invariant with respect to initial conditions.

In steady state, even though capital-labor ratios $k_i^* / \ell_i^*$ can differ across locations, there is a common real rental rate $r_i^* / p_i^*$ across all locations. This property follows from the fact that landlords in each location face the same intertemporal optimization problem and the same gross return on capital in the steady state. The characterization of the steady state provides a benchmark for analyzing transition dynamics.

## Dynamic Exact-Hat Algebra for Transition Paths

[[kleinman-liu-redding-2023-dynamic-spatial]] generalize the dynamic exact-hat algebra techniques of Caliendo, Dvorkin, and Parro (2019) to incorporate forward-looking investment. Given initial observed values of the endogenous variables -- population shares, capital stocks, trade shares, and migration shares -- the economy's transition path can be solved for any anticipated convergent sequence of future changes in fundamentals without needing to observe the initial level of fundamentals. Proposition 2 establishes that given the initial allocation and the sequence of future changes in productivity, amenities, trade costs, and migration costs, the solution for the sequence of changes in all endogenous variables does not require information on the level of fundamentals.

This exact-hat approach is particularly powerful because it permits counterfactual analysis using only observed data and the structure of the model, without requiring estimation of unobserved productivity or amenity levels. [[zhao-chen-fu-2022-dynamic-qse-china]] apply this methodology to China, using the observed 2007 trade and migration matrices and estimating the migration elasticity from five-year census panel data, finding that adding population migration to a standard macro model sharply reduces the speed of convergence -- the half-life of GDP per capita rises from roughly 3-5 years (in the standard closed-economy neoclassical model) to over 30 years.

## Spectral Analysis of Convergence Speed

A central methodological innovation of [[kleinman-liu-redding-2023-dynamic-spatial]] is the use of spectral analysis to characterize the economy's transition dynamics. By linearizing the model around the steady state, the transition path can be expressed in closed form:

$$ \widetilde{x}_{t+1} = P \widetilde{x}_t + R \widetilde{f} $$

where $\widetilde{x}_t$ is the $2N$-dimensional vector of log-deviations of population and capital from steady state, $P$ is a $2N \times 2N$ transition matrix, $R$ is an impact matrix capturing the initial effect of shocks $\widetilde{f}$ to productivity and amenities, and both matrices depend only on structural parameters and the observed trade and migration share matrices.

The eigendecomposition of the transition matrix, $P = U \Lambda V$, reveals that the dynamic response to any empirical shock can be expressed as a linear combination of the response to "eigenshocks" -- shocks whose initial impact on the state variables coincides with an eigenvector of $P$. The half-life of convergence for each eigenshock depends solely on its associated eigenvalue:

$$ t_h^{(1/2)} = -\left\lceil \frac{\ln 2}{\ln \lambda_h} \right\rceil $$

Different eigenshocks converge at different speeds, depending on their incidence on the labor and capital state variables. This spectral decomposition provides a rigorous foundation for understanding why some shocks have persistent effects while others dissipate quickly.

## The Interaction Mechanism: Why Capital and Labor Dynamics Reinforce Each Other

The most important substantive finding from the spectral analysis is that the speed of convergence depends critically on the correlation between capital and labor gaps from steady state across locations. When these gaps are positively correlated -- capital and labor are both above or both below steady state in the same locations -- convergence is slow because each factor's abundance supports the marginal product of the other. For example, when capital is above its steady-state level, this raises the marginal productivity of labor, dampening the out-migration of workers and the downward adjustment of labor. Similarly, when labor is abundant, this raises the marginal product of capital, retarding its depreciation-induced decline.

> *Cross-pattern observation:* The positive correlation of capital and labor gaps as the key determinant of slow convergence is a novel result of the spectral approach that could not be derived from reduced-form convergence regressions. It implies that the speed of convergence is not a structural parameter but depends on the spatial pattern of the initial deviation from steady state.

When the gaps are negatively correlated -- capital is above steady state where labor is below, and vice versa -- convergence is fast because the abundance of one factor accelerates the adjustment of the other. High capital in a location with scarce labor raises wages, attracting migrants, while the abundant capital itself gradually depreciates. The two factors' adjustments reinforce rather than retard each other.

## Empirical Application: U.S. States, 1965--2015

[[kleinman-liu-redding-2023-dynamic-spatial]] apply their framework to data on capital stocks, populations, and bilateral trade and migration flows for U.S. states from 1965 to 2015. The empirical results reveal a pronounced decline in the rate of income convergence over this period. The average half-life of convergence across U.S. states is approximately 20 years, with some eigencomponents converging with half-lives as long as 80 years.

The spectral analysis shows that the decline in income convergence is largely driven by initial conditions -- the initial gaps of the labor and capital state variables from steady state -- rather than changes in the pattern of shocks to fundamentals. The initial gaps load more heavily on eigencomponents with slow convergence speeds, whereas the changes over time in productivity and amenities implied by the data load more heavily on eigencomponents with fast convergence speeds. This decomposition implies that the observed slowdown in convergence is not primarily due to changes in the fundamental forces shaping the economy, but rather to the persistent effects of the initial spatial distribution of capital and labor.

> **Current assessment (2026-07):** The finding that initial conditions, rather than changes in shocks, drive the decline in U.S. income convergence is a distinctive contribution of the spectral approach. However, the two-decade sample period limits the ability to distinguish between genuine slow convergence and structural breaks in the convergence process. Extensions to longer time horizons and to developing-country settings remain important directions for future research.

The framework also generates rich predictions about the heterogeneous impact of local shocks. A negative productivity shock to a Rust Belt state such as Michigan triggers a gradual population outflow and capital decumulation, consistent with the empirical evidence in Blanchard and Katz (1992) and Dix-Carneiro and Kovak (2017). Importantly, the model generates nonmonotonic transition dynamics: Michigan's neighbors initially experience population increases (because workers face lower migration costs in moving to nearby states), but these population shares subsequently decline below their initial steady-state values as the full general equilibrium effects -- the contraction of Michigan's market reducing the attractiveness of neighboring states -- propagate through the system. This nonmonotonicity reflects the changing importance along the transition path of eigencomponents with different convergence speeds.

## Relevance for China

The capital-labor dynamics mechanism has direct implications for understanding regional inequality in China, where internal migration barriers (the hukou system) and state-directed capital investment create a distinctive environment. [[zhao-chen-fu-2022-dynamic-qse-china]] calibrate a version of the Kleinman-Liu-Redding framework for Chinese provinces and find that introducing population migration into a standard macro model reduces the speed of convergence by an order of magnitude: the half-life of GDP rises from roughly 3-5 years to over 30 years. The interaction mechanism is amplified by high migration costs, which slow the reallocation of labor and thus extend the period over which capital-labor imbalances persist.

[[li-ma-tang-2024-migration-misallocation]] provide complementary evidence on the welfare implications of this interaction. They find that internal migration partially alleviates the aggregate welfare losses from firm-level frictions (people move from heavily distorted to less distorted regions), but simultaneously worsens spatial inequality because migrants select into richer, less-distorted prefectures. This tension between aggregate efficiency and spatial equity is a direct consequence of the capital-labor interaction mechanism: migration flows that equalize marginal products across locations also concentrate population in high-productivity areas, widening the gap in capital stocks and perpetuating income differences.

[[wu-you-2025-urbanization]] show that the optimal policy response depends on the relative strength of agglomeration benefits and congestion costs, which in turn determines whether restricting migration improves or worsens welfare. The capital-labor dynamics mechanism suggests that even temporary migration restrictions can have long-lasting effects on the spatial distribution of capital, because capital adjusts slowly in response to labor flows.

> **Current assessment (2026-07):** Whether the Kleinman-Liu-Redding mechanism generalizes to settings with frictional migration (the hukou system) and state-directed capital allocation remains an open question. The Zhao-Chen-Fu calibration suggests the mechanism is at work in China, but the presence of government-directed investment may alter the correlation between capital and labor gaps and thus the predicted convergence speed.

## Cross-links

- Concepts: [[quantitative-spatial-equilibrium]], [[economics-of-the-hukou-system]]
- Mechanisms: [[spatial-innovation-and-structural-transformation]], [[endogenous-infrastructure-and-spatial-development]], [[firm-level-frictions-and-spatial-misallocation]], [[welfare-effects-of-migration-in-chinese-cities]]
- Synthesis: [[migration-barriers-and-spatial-inequality]]
- Major sources: [[kleinman-liu-redding-2023-dynamic-spatial]], [[zhao-chen-fu-2022-dynamic-qse-china]], [[desmet-rossi-hansberg-2014-spatial-development]]
