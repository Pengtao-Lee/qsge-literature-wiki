---
title: "Firm-Level Frictions and Spatial Misallocation"
type: mechanism
status: active
papers:
  - li-ma-tang-2024-migration-misallocation
  - ma-tang-2020-geography-trade
  - tombe-zhu-2019-trade-migration-china
  - wu-you-2025-urbanization
  - zhao-wang-dai-chen-2025-cross-regional-investment-distortions
  - kleinman-liu-redding-2023-dynamic-spatial
  - zhao-chen-fu-2022-dynamic-qse-china
  - redding-rossi-hansberg-2017-quantitative-spatial
tags:
  - misallocation
  - firm-level frictions
  - spatial inequality
  - migration
  - capital flows
  - China
---

## Firm-Level Frictions and Spatial Misallocation

Firm-level frictions — output wedges that distort firm revenue and labor wedges that distort payroll costs — generate dispersion in the marginal products of capital and labor across firms within the same location, lowering aggregate productivity relative to the efficient allocation. When these frictions vary systematically across space, they create a distinct channel of spatial misallocation: resources concentrate in locations with more distorted firm distributions rather than in locations with higher fundamental productivity. Migration interacts with this mechanism in a countervailing way: workers can move away from heavily distorted regions, partially offsetting the aggregate welfare loss from frictions, but because migrants disproportionately move to already-productive, less-distorted regions, migration amplifies spatial inequality even as it alleviates aggregate misallocation. A complementary, state-driven channel operates across regions rather than within prefectures: cross-regional investment distortions and product-market segmentation push capital to flow *against* unit returns, generating spatial misallocation of comparable magnitude to within-prefecture wedges. This mechanism connects the micro-level misallocation literature of Hsieh and Klenow (2009) to the quantitative spatial equilibrium (QSE) framework: firm-level distortions are not merely a national phenomenon but have a spatial distribution that itself shapes regional inequality and migration patterns.

## The Hsieh-Klenow Framework for Measuring Micro-Frictions

The canonical approach to measuring firm-level frictions, developed by Hsieh and Klenow (2009), infers the presence and magnitude of distortions from observed dispersion in firms' revenue and input choices. In a frictionless efficient allocation, the marginal revenue products of capital and labor should be equalized across firms within an industry. In practice, they are not: in China and India, the dispersion of marginal products is substantially larger than in the United States, implying large total factor productivity (TFP) losses from misallocation. Li, Ma, and Tang (2024) build directly on this framework, classifying frictions into two types. **Output frictions** (revenue wedges), denoted $\tau_y$, act as a tax on firm revenue: a firm receives only a fraction $1 - \tau_y$ of its revenue. **Labor frictions** (payroll wedges), denoted $\tau_\ell$, affect the cost of hiring: a firm must pay $(1 + \tau_\ell)$ times the local wage to hire one unit of labor. Both can be negative (subsidies). Under standard assumptions — CES demand, monopolistic competition, and Cobb-Douglas production — these wedges can be recovered from firm-level data on sales, payroll, and intermediate input costs using the pricing equations of the model ([[li-ma-tang-2024-migration-misallocation]]). The same dispersion logic operates at the sectoral-regional level in [[tombe-zhu-2019-trade-migration-china]], who find reductions in internal trade and migration frictions accounted for about 28 percent of China's labor-productivity growth between 2000 and 2005 — evidence that the wedge and spatial-reallocation approaches measure the same underlying misallocation.

## Extending Micro-Frictions to a Multi-Region Spatial Model

Li, Ma, and Tang (2024) embed the Hsieh-Klenow wedge approach into a multi-region general equilibrium framework with heterogeneous firms, endogenous entry, internal trade, and migration — extending the Melitz-based spatial model of [[ma-tang-2020-geography-trade]] within the broader quantitative spatial equilibrium paradigm surveyed by [[redding-rossi-hansberg-2017-quantitative-spatial]]. In each of 237 prefectures, firms draw productivity $a$ and the two wedges $(\tau_y, \tau_\ell)$ from a location-specific joint distribution $G_j(a, \tau_y, \tau_\ell)$. The firm's pricing decision incorporates both wedges:

$$
p_{ij}(k) = \frac{\varepsilon}{\varepsilon-1} \frac{t_{ij} c_j(k)}{A_j a(k) (1 - \tau_y(k))},
$$

where the unit cost $c_j(k)$ itself depends on the labor wedge through $(1 + \tau_\ell(k))^{\beta_j} \bar{c}_j$. The output wedge drives a wedge between the firm's marginal cost and its revenue; the labor wedge distorts the firm's input mix. Crucially, because firms draw their wedges from location-specific distributions, the aggregate consequences of within-prefecture frictions spill across space through trade linkages and migration flows. A firm in a high-friction prefecture charges higher prices, sells less, and employs fewer workers, affecting the local wage, price index, and ultimately the migration decisions of workers across all prefectures.

The model also features endogenous firm entry: infinitely many potential entrants pay a fixed cost $f_e$ to draw from the joint distribution, and free entry equates expected profits to entry costs in each location. Frictions therefore affect aggregate welfare through both the intensive margin (distorted firm decisions) and the extensive margin (the number of varieties).

## Estimation Strategy: Simulated Method of Moments with Selection

A key empirical challenge is that only surviving firms are observed in the data — those whose draw of productivity and wedges allows them to operate profitably above the revenue threshold of the Annual Surveys of Industrial Firms (ASIF). Estimation without accounting for this selection yields biased results ([[li-ma-tang-2024-migration-misallocation]]). Li, Ma, and Tang overcome this through a Simulated Method of Moments (SMM) procedure that uses the sampling scheme to approximate sample selection without solving the full general equilibrium. They assume marginal distributions: $\log(1 - \tau_y) \sim \mathcal{N}(0, \sigma_{y,j})$, $\log(1 + \tau_\ell) \sim \mathcal{N}(0, \sigma_{\ell,j})$, and productivity $a$ follows a Type-I Pareto with shape $\theta_j$, with dependence captured by a Gaussian copula. Six parameters per prefecture — two standard deviations, one Pareto shape, and three correlations — are estimated by matching 17 moments from the revenue and estimated-wedge distributions across 237 prefectures for the period 1998–2007. The Gaussian copula is central to this design: it lets the correlation between productivity and each wedge vary freely across prefectures while keeping the marginal distributions tractable, which is what allows the estimation to recover the productivity-correlation signature that ultimately drives the welfare results.

## Key Empirical Findings on the Spatial Distribution of Frictions

Two distinct patterns emerge. First, while both output and labor frictions are prevalent in all prefectures, labor frictions are substantially more dispersed: the average standard deviation of output frictions across prefectures is 0.11, while that of labor frictions is an order of magnitude larger at 1.18. This indicates that input markets are far more distorted than output markets in China. Second, frictions are systematically **less dispersed and less correlated with productivity in richer prefectures**. On the Southern and Eastern Coasts — China's richest regions — the median dispersion of output frictions is 0.086 and 0.084, respectively, compared with 0.108 for inland and poorer regions. The correlation between output frictions and productivity is close to zero in coastal regions (median −0.020 and −0.068) but substantially positive in poorer regions (0.242 and 0.239). Regression analysis shows that prefectures with higher per-capita GDP enjoy significantly lower dispersion and productivity correlations, controlling for population, industry composition, and transport connectivity; a reduced-form decomposition attributes approximately 13% of the observed spatial variation in per-capita GDP to the friction-distribution parameters ([[li-ma-tang-2024-migration-misallocation]]).

> **Cross-pattern observation:** The finding that labor-friction dispersion dominates output-friction dispersion by an order of magnitude mirrors similar patterns documented for other developing economies using the Hsieh-Klenow methodology, where payroll distortions arising from labor market regulations, state-sector wage premiums, and informal-sector dualism typically account for the bulk of measured misallocation.

## Aggregate Welfare Implications of Reducing Misallocation

Counterfactually reducing the standard deviation of both output and labor frictions by 0.01 in all prefectures increases aggregate welfare by 3.19%, implying a semi-elasticity of −3.19. The welfare gain operates through three channels. First, as labor frictions converge toward zero, the marginal product of labor becomes more equalized across firms within each prefecture. Second, reduced dispersion in output frictions better aligns market share with firm-level productivity. Third, at the extensive margin, higher expected profits encourage firm entry, lowering the price index through a greater variety of available goods. The semi-elasticity of welfare to labor-friction dispersion (−1.97) exceeds that of output-friction dispersion (−1.20), consistent with the much larger estimated dispersion of labor wedges ([[li-ma-tang-2024-migration-misallocation]]).

Reducing frictions also **decreases spatial inequality**. The Gini coefficient of real wages declines by 0.30 percentage points when the dispersion parameters are reduced by 0.01. Poorer prefectures benefit disproportionately because they face higher initial dispersion; the uniform reduction therefore has a larger absolute impact on them, encouraging firm entry and attracting population inflows that narrow the welfare gap with richer prefectures. The distributional consequence is echoed from a city-size perspective in [[wu-you-2025-urbanization]], who model hukou as a fiscal wedge transferring resources between migrants and natives: fully removing it would raise national GDP by 13.6% over 2000–2020 but impose welfare losses of 10–17% on tier-1 natives — a spatial channel distinct from firm-level wedges.

## The Interaction Between Migration and Misallocation

To isolate the interaction, Li, Ma, and Tang compare friction-dispersion reductions in the baseline model (with migration) against a counterfactual with migration shut down. **Without internal migration, the same 0.01 reduction in friction dispersion yields a larger welfare gain of 3.37%** (compared with 3.19% with migration). Migration alleviates the aggregate impact of micro-frictions: people leave heavily distorted regions, reducing economic activity where frictions are most damaging. When migration is impossible, workers cannot escape distorted prefectures, so reducing within-prefecture frictions has a larger aggregate effect.

However, the distributional implications run in the opposite direction. Spatial inequality becomes **less responsive** to firm-level frictions when migration is shut down. Lowering dispersion reduces the Gini coefficient by 0.30 percentage points with migration but only 0.25 without it. The mechanism is that migration itself is a source of spatial inequality: workers move from high-distortion (poor) to low-distortion (rich) regions, amplifying the real-wage gap. When friction dispersion falls, this migration channel is weakened because poor regions become more attractive, reversing some of the inequality created by selective migration.

> **Current wiki assessment (2026-07):** The finding that migration worsens spatial inequality even as it alleviates aggregate misallocation is robust across multiple model specifications reported in Li, Ma, and Tang (2024), including alternative congestion elasticities, migration elasticities, and elasticities of substitution. The qualitative pattern — that factor mobility acts as a substitute for place-based productivity policy at the aggregate level but a complement at the distributional level — has since been corroborated in dynamic frameworks such as [[kleinman-liu-redding-2023-dynamic-spatial]], which shows that capital-labor interaction dynamics can amplify spatial divergence during transitions.

## Cross-Regional Capital-Market Distortions

Firm-level wedges within prefectures are not the only margin of spatial misallocation: Zhao, Wang, Dai, and Chen (2025) identify a parallel, cross-regional channel operating through capital markets. Using the near-universe of firm registration records, they document that Chinese capital flows run *against* unit capital returns — the highest-return southeast coast is a net capital exporter, while lower-return central and western regions absorb a disproportionate share of investment. The direct cause is cross-regional investment distortion: local governments offering tax incentives, cheap land, and subsidies to attract external capital drive a wedge between the effective return facing investors and the observed unit return. A second, interacting cause is product-market segmentation: mirroring tariff-jumping in international trade, firms facing high internal trade barriers build plants directly in protected local markets, so capital follows market protection rather than high returns ([[zhao-wang-dai-chen-2025-cross-regional-investment-distortions]]).

In a quantitative spatial general-equilibrium model that gives cross-regional investment decisions explicit micro-foundations, the two factors contribute roughly equal shares to the improvement in capital allocation: 45.5% to investment distortions, 44.3% to trade barriers, and 10.2% to their interaction; because they reinforce each other, ignoring the interaction understates the gains from domestic trade opening by about 20%. The reversal also cannot be undone by reforming a single market — lowering either distortion alone weakens but does not overturn the negative returns-flow correlation, and only simultaneous liberalization makes returns and flows positively correlated. Because local-government utility rises with investment-attraction tax cuts only up to a point but falls monotonically with trade openness, market integration faces genuine implementation resistance ([[zhao-wang-dai-chen-2025-cross-regional-investment-distortions]]).

> **Current wiki assessment (2026-07):** The state's own instruments — capital tax incentives and local trade protection — are quantitatively comparable to within-prefecture wedges as sources of spatial misallocation. The Zhao–Wang–Dai–Chen decomposition (45.5%/44.3%/10.2%) and the Li–Ma–Tang wedge results are two faces of the same phenomenon: distortions are spatially organized, whether engineered by firm-level market structure inside a prefecture or by local-government incentives across prefectures. Any account of China's misallocation that ignores either margin is incomplete.

## Policy Contrast: Migration Liberalization vs. Misallocation Reduction

Both migration liberalization and reductions in within-prefecture misallocation improve aggregate welfare — but their implications for spatial inequality are diametrically opposed. Li, Ma, and Tang simulate a reduction in migration barriers sufficient to achieve the same 3.19% welfare gain as the 0.01 reduction in friction dispersion. Migration liberalization increases the total number of migrants by 3.0% and **worsens spatial inequality**: the Gini coefficient of real wages rises by 0.002. Migrants flow toward the richer, less-distorted prefectures, and the resulting population concentration amplifies productivity advantages through agglomeration. In contrast, reducing friction dispersion **reduces spatial inequality** (Gini declines by 0.001 for the same welfare gain), because the productivity gap between poor and rich regions shrinks when firm-level distortions are alleviated.

This policy contrast has a stark graphical representation: migration liberalization shifts population toward initially richer prefectures, while dispersion reduction shifts population toward initially poorer ones ([[li-ma-tang-2024-migration-misallocation]], Figure 7). Migration and place-based productivity policies are therefore **substitutes for aggregate welfare** but **opposing forces for spatial equity**. The cross-regional capital-market channel reinforces the contrast: market integration raises efficiency but compresses underdeveloped regions' resources, widening per-capita gaps unless labor moves with the capital ([[zhao-wang-dai-chen-2025-cross-regional-investment-distortions]]).

> **Current wiki assessment (2026-07):** This policy contrast is among the most policy-relevant results in the Chinese QSE literature. It implies that the standard policy prescription of "liberalize migration + compensate losers" may need refinement: because migration liberalization and misallocation reduction have opposing spatial-inequality effects, the compensatory transfers required to achieve spatial equity are potentially large, and the identity of winners and losers differs across the two policy levers.

## Empirical Signatures

Four empirical signatures distinguish the firm-level-frictions-and-migration mechanism from alternative explanations of spatial inequality. First, the standard deviation of both output and labor wedges is negatively correlated with per-capita GDP across prefectures — richer places have less dispersed distortions. Second, the correlation between wedges and productivity is lower (closer to zero) in richer prefectures, so the most productive firms in poor regions face the highest distortions. Third, migration flows disproportionately originate from high-friction-dispersion prefectures and flow toward low-friction-dispersion prefectures, a pattern consistent with workers voting with their feet against distorted local economies ([[li-ma-tang-2024-migration-misallocation]]). Fourth, capital flows run *against* unit returns: at both the regional and city level, net capital inflows are negatively correlated with unit capital returns, with the high-return southeast coast in net outflow — a signature of cross-regional investment distortions rather than of frictionless capital allocation ([[zhao-wang-dai-chen-2025-cross-regional-investment-distortions]]). Together, the labor-flow and capital-flow signatures imply that both factors of production are systematically misallocated away from where their marginal products are highest.

## Frontier: QSE Policy Translation for China

The firm-level frictions framework carries direct implications for China's ongoing policy agenda. First, the finding that state-sector size correlates positively with measured distortions ([[li-ma-tang-2024-migration-misallocation]]) connects to SOE reform: deeper reform of state-owned enterprises — long identified as a source of output and labor wedges through soft budget constraints and non-market wage setting — would reduce friction dispersion while raising aggregate welfare and reducing spatial inequality. Second, the complementarity between hukou reform and financial-market development emerges naturally: migration liberalization alone increases spatial inequality, but paired with policies that reduce firm-level frictions in lagging regions (credit-market deepening, regulatory reform) it achieves aggregate gains without the distributional cost. Third, the cross-regional capital-market channel adds a unified-national-market dimension: reducing investment-distortion and trade-barrier distortions requires aligning local-government incentives — for example, shifting the consumption tax from the production point to the consumption point so that market integration raises rather than lowers local fiscal returns ([[zhao-wang-dai-chen-2025-cross-regional-investment-distortions]]). Fourth, the static Li-Ma-Tang framework assumes a given capital stock; extending it to dynamic capital accumulation, following [[kleinman-liu-redding-2023-dynamic-spatial]] and [[zhao-chen-fu-2022-dynamic-qse-china]], would reveal how the spatial pattern of distortions slows capital accumulation in precisely the regions that need it most. A full dynamic QSE analysis with endogenous firm-level wedges, cross-regional capital, and local-government incentives remains an open frontier.

## Cross-Links

**Concepts:**
- [[quantitative-spatial-equilibrium]]
- [[gravity-in-spatial-economics]]
- [[economics-of-the-hukou-system]]

**Mechanisms:**
- [[welfare-effects-of-migration-in-chinese-cities]]
- [[capital-labor-dynamics-and-spatial-convergence]]
- [[spatial-innovation-and-structural-transformation]]

**Debates:**
- [[government-and-urbanization]]
- [[land-supply-regional-tilt-debate]]

**Synthesis:**
- [[migration-barriers-and-spatial-inequality]]
- [[trade-and-migration-cost-reductions-in-china]]
- [[spatial-public-finance]]

**Major sources:**
- [[li-ma-tang-2024-migration-misallocation]]
- [[ma-tang-2020-geography-trade]]
- [[tombe-zhu-2019-trade-migration-china]]
- [[zhao-wang-dai-chen-2025-cross-regional-investment-distortions]]
- [[wu-you-2025-urbanization]]
