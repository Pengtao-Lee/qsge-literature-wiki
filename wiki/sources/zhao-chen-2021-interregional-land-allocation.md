---
title: "土地的区域间配置与新发展格局"
type: source
authors: ["赵扶扬 (Zhao Fu-yang)", "陈斌开 (Chen Bin-kai)"]
year: 2021
slug: zhao-chen-2021-interregional-land-allocation
tags: [land-allocation, quantitative-spatial-model, regional-inequality, housing-prices, new-development-pattern, hukou-reform, China, efficiency-equity-tradeoff]
raw_markdown: "[[raw_markdown/papers/zhao-chen-2021-interregional-land-allocation]]"
status: canonical
---

# 土地的区域间配置与新发展格局 (Spatial Allocation of Land and the New Development Pattern) (2021)

> **Paper claim** — A calibrated quantitative spatial equilibrium model of China's 31 provinces shows that the post-2003 tilt of urban construction-land quotas toward central/western provinces narrowed regional per-capita income gaps but widened east-west housing-price divergence, and that combining land reallocation toward the east with hukou (户籍) reform can jointly achieve efficiency, equity, and housing-price stabilization.

Raw markdown: [[raw_markdown/papers/zhao-chen-2021-interregional-land-allocation]]

Published in 《中国工业经济》 (China Industrial Economics), 2021(8): 94–113. DOI: 10.19581/j.cnki.ciejournal.2021.08.006. Authors affiliated with the School of Economics, Central University of Finance and Economics (中央财经大学). JEL: R13, R52, O18.

## Research Question

How should new urban construction-land quotas (新增建设用地指标) be allocated across Chinese regions to best trade off aggregate efficiency against regional equity? Specifically: (1) which land-allocation strategy maximizes overall efficiency, and which minimizes regional gaps; (2) how should China's actual post-2003 land allocation — which tilted supply toward central/western provinces — be objectively evaluated in general equilibrium; and (3) what is the concrete policy path for "optimizing national spatial layout" (优化国土空间布局) under the "new development pattern" (新发展格局). The paper motivates the question with the stylized fact that from 2003 to 2017, the eastern provinces' share of national construction-land supply fell from 65% to about 1/3, while western provinces' share rose from 15% to a 2014 peak of 40% — coinciding with a post-2004 reversal in regional GDP shares (eastern share falling from a 59.5% peak to 54.5% by 2019).

## Model / Experimental Design

A quantitative spatial model (QSM, 量化空间模型) building on the Eaton and Kortum (2002) trade framework and its spatial extensions (Ahlfeldt et al. 2015; Redding 2016; Tombe and Zhu 2019). The economy has M+1 regions: M Chinese provinces plus the rest of the world as a single region. Key structural elements:

- **Labor preferences**: Cobb–Douglas utility over final-good consumption, housing, and per-capita public services, with an idiosyncratic Fréchet-distributed location preference ε (dispersion parameter κ). Households split income in fixed shares β (consumption) and 1−β (housing).
- **Migration**: Workers have a hukou home region; migration from region k to j incurs a utility-loss cost 1/μ_kj (μ_kk = 1); China–ROW migration is prohibited. Migration shares m_kj follow the Fréchet logit form.
- **Production and trade**: A continuum of intermediate goods produced with labor and commercial land (output elasticity α), Fréchet productivity (dispersion θ), iceberg trade costs γ_kj; CES aggregation into final goods. Trade shares π_kj take the standard gravity form.
- **Government**: The central government allocates construction-land quotas L_j and transfer payments TS_j; local governments split land between residential (L_j^h) and commercial (L_j^p) use, and maximize a Cobb–Douglas objective over local real GDP and total welfare with weight ξ_j on GDP. Local fiscal revenue = retained half of taxes + land-lease revenue + central transfers, all spent on public goods G_j.

**Calibration**: Common parameters from macro data / classic literature — labor output elasticity 0.48, land output elasticity 0.1 (renormalized to α = 0.1724 under constant returns to labor+land), public-service externalities φ_h = φ_p = 0.1, β = 0.87, congestion elasticity χ = 0.5, migration elasticity κ = 1.5, trade elasticity θ = 4 (following Tombe and Zhu 2019). Region-specific structural parameters recovered by inversion from: 2000/2010 population censuses (migration matrix m_kj), Li Shantong's (2018) 2002/2007/2012 interregional input-output tables (trade shares π_kj; Tibet dropped for missing data), provincial fiscal and land-supply data, Penn World Table / World Bank for the ROW. The model is calibrated to the 2012 equilibrium; counterfactuals apply the actual 2013–2017 new-land total under alternative allocation rules, with optimal allocations found by 1 million random draws maximizing each objective.

## Main Results

- **Model validation**: Simulating 2002–2012, eastern housing prices grew ~110% versus ~80% in central/western provinces, replicating the observed east-west price divergence (Fang et al. 2016; Han and Lu 2018) and confirming the framework's explanatory fit.
- **Efficiency-equity tension (Figure 2)**: Adding equal land to a province — allocation to developed eastern provinces (Shanghai, Beijing, Zhejiang, Guangdong, Fujian, Tianjin, Jiangsu) most raises national GDP and welfare but widens the regional per-capita income gap; allocation to central/western provinces narrows the income gap but barely moves GDP/welfare.
- **Actual 2013–2017 allocation (Table 1, % change vs. 2012 equilibrium)**: real GDP +2.31%, total welfare +2.57%, regional income gap −0.73%, housing-price divergence +1.23%. Counterfactuals: equal-area allocation (+3.35% GDP, +3.29% welfare, +2.09% gap, −6.43% price divergence); equal-proportion allocation (+2.45%, +2.64%, −0.13%, −0.24%); **max-GDP** (+5.26%, +4.58%, +8.24% gap, −8.53% divergence); **max-welfare** (+5.15%, +4.62%, +7.45%, −9.54%); **min-regional-gap** (+1.61%, +2.01%, −2.50%, +3.13%). The actual allocation is read as a "good balance point" between efficiency and equity — matching equal-proportion allocation on GDP/welfare while doing better on the income gap.
- **Optimal (max-GDP) allocation structure (Figure 4)**: concentrates extra land in Beijing, Shanghai, Guangdong, Zhejiang while giving other provinces even, moderate amounts (not zero); its main housing-price effect is a large reduction in Beijing/Shanghai prices, with little effect elsewhere — because in general equilibrium the induced in-migration offsets price pressure in other provinces.
- **Land + hukou combination (Table 2)**: Lowering in-migration costs for 8 eastern/southern inflow provinces (Beijing, Tianjin, Shanghai, Jiangsu, Zhejiang, Fujian, Guangdong, Hainan) to their minimum outflow-region cost yields GDP +1.47% (or +4.63% if housing is excluded from the price index), welfare +35.53%, income gap −20.51%, but price divergence +26.22%. Combining migration liberalization with the max-welfare land allocation gives GDP +7.81%, welfare +47.13%, gap −13.50%, divergence +16.39% — super-additive on welfare (1.4713 combined welfare far exceeds the product of separate effects) and each policy offsets the other's downside.
- **Domestic vs. international trade (Table 3)**: Cutting domestic interprovincial trade costs 10% raises GDP/welfare far more than cutting international trade costs. Eastern provinces' domestic-cost cuts yield the largest GDP/welfare gains but widen income and price gaps; central/western cuts raise GDP/welfare while also narrowing both gaps. Cutting import costs beats cutting export costs (export effect ~1/5 of import effect). Central/western provinces have domestic trade costs 5.94% and 9.79% above eastern ones (Qinghai's exceeding the national average cost of overseas trade).

## Mechanisms Identified

> **Paper claim** — Land is a spatially misallocated factor: because construction-land quotas are centrally rationed and were tilted away from high-productivity eastern provinces, land supply and land demand diverge spatially, which is the root cause of east-west housing-price divergence (following Han and Lu 2018). Restricted labor mobility under the hukou system is the deeper source of regional per-capita income gaps: when labor cannot follow productivity, land reallocation alone cannot resolve the efficiency-equity dilemma. The key general-equilibrium channel is co-agglomeration — steering land AND population toward the east simultaneously so that induced in-migration absorbs the housing-price pressure that land reallocation would otherwise create, while land supply relieves the price pressure that migration would otherwise create.

## Methods and Measures

Quantitative spatial equilibrium model solved in "hat algebra" (exact-hat / percentage-change) form, so total productivity T_j and intermediate substitution elasticity σ do not affect results. Counterfactual analysis based on the 2012 equilibrium. Four outcome variables track "high-quality development": real GDP (nominal provincial GDP deflated by a composite consumption-and-housing price index), total welfare (hukou-population-weighted expected utility), regional per-capita income gap (Gini coefficient of provincial real per-capita income), and housing-price divergence (coefficient of variation of provincial prices). Optimal allocations identified by 1 million random-draw simulation.

Links: [[quantitative-spatial-equilibrium]]

## Concepts Engaged

- Efficiency-equity tradeoff (效率与公平权衡) in spatial resource allocation
- Construction-land quota system (建设用地指标) and central land rationing
- Interregional land allocation (土地的区域间配置)
- Hukou (户籍) system and labor-mobility frictions
- New development pattern / dual circulation (新发展格局 / 双循环)
- Regional coordinated development (区域协调发展)
- Co-agglomeration of land and labor

## Connection to Debates

> **Paper claim** — The paper intervenes in the long-running Chinese debate over whether the post-2003 tilt of land supply toward central/western regions was beneficial. Prior empirical work argued the tilt suppressed aggregate TFP growth after 2003 (Lu and Xiang 2014; Lu et al. 2019) and drove housing-price divergence (Han and Lu 2018; Lu et al. 2015; Zhang et al. 2017). This paper agrees the tilt raised eastern prices and caused misallocation, but reframes the actual policy as a defensible "balance point" between efficiency and equity in general equilibrium — the first objective GE quantification of the debate — while arguing the first-best requires pairing land policy with hukou reform and domestic-market integration rather than land reallocation alone.

Links: [[land-supply-regional-tilt-debate]]

## Theoretical / Empirical Significance

One of the few Chinese-language applications of quantitative spatial models (alongside Duan et al. 2020a/b; Liu and Li 2017; Wang and Qiao 2020) and the first to embed the interregional structure of construction-land quotas, interprovincial trade, and hukou-constrained migration in a single provincial-level GE framework used to evaluate China's land policy. It provides a counterfactual toolkit for assessing "who should get land" against multiple simultaneous objectives (GDP, welfare, income equality, housing-price stability), and translates the results into concrete policy: cross-regional land-quota trading markets, hukou liberalization tied to population inflows, equalization of public services, and domestic-market integration as the strategic basis of dual circulation. It reframes regional balance from "aggregate balance" (总量均衡) to "per-capita balance" (人均均衡), recommending per-capita rather than total indicators in local-official evaluation.

## Notes and Caveats

- Data availability limits global characterization to 2012; all post-2012 analysis is counterfactual (percentage-change) off the 2012 equilibrium, not a re-solved equilibrium with new fundamentals.
- Tibet is dropped from calibration for missing input-output data.
- The magnitude of some results (notably the +35.53% welfare / +4.63% real-GDP figures) depends on whether housing enters the aggregate price index; the authors note the qualitative conclusions are robust but the numerical values shift.
- Model omits physical capital (output is labor + land value-added), multi-tier fiscal structure, richer local-government motives, and intergovernmental strategic interaction — the authors flag these as extensions.
- Migration and trade elasticities are imported from Tombe and Zhu (2019) rather than independently estimated; several parameters (χ, σ) are argued not to affect core conclusions.
- Housing prices in the optimal-allocation figures are model-implied equilibrium objects, not observed data.
