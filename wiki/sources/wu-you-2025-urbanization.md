---
title: "Should Governments Promote or Restrain Urbanization?"
type: source
authors: [Wenbin Wu, Wei You]
year: 2025
slug: wu-you-2025-urbanization
tags: [urbanization, hukou, migration, China, spatial-equilibrium, optimal-city-size, agglomeration, land-supply, externalities]
raw_markdown: raw_markdown/papers/wu-you-2025-urbanization.md
status: draft
---

# Should Governments Promote or Restrain Urbanization? (2025)

> **Paper claim** — In a system-of-cities model with urban externalities calibrated to China (2000–2020), removing hukou restrictions would raise average GDP by 13.6% and welfare by 4.7%, but most large Chinese cities were locally too large while nationally too small; therefore, restraining urbanization through migration barriers is generally welfare-reducing, but a combination of complementary policies (land supply reform, conditional fiscal transfers, market-provided substitutes for public goods) is needed to resolve the conflict between aggregate efficiency and distributional consequences.

Raw markdown: [[raw_markdown/papers/wu-you-2025-urbanization]]

## Research Question

Should governments promote or restrain urbanization, given that equilibrium city sizes in the presence of urban externalities deviate from optimal city sizes? The paper asks this as a quantitative question: what are the aggregate welfare, distributional, and GDP effects of China's hukou (household registration) system, and of counterfactually relaxing or tightening internal migration restrictions? A secondary question is whether Chinese cities are too large or too small, from both a local and a national perspective.

## Model / Experimental Design

A dynamic quantitative spatial equilibrium model with 340 Chinese prefectures (2000–2020), building on Caliendo et al. (2019, 2021):

- **Individuals**: Two skill types (low/high), forward-looking relocation decisions with perfect foresight. Idiosyncratic productivity shocks (Type-I extreme value). Migration decision includes a hukou lottery: with probability $\theta_{st}^d$ the migrant wins destination citizenship; otherwise she returns to her origin.
- **Preferences**: Cobb–Douglas over tradable goods, housing, and a publicly-provided private good ("education"). Housing expenditure shares vary by skill and city tier. A publicly-provided private good enters via CES with a market-provided substitute (elasticity $\varphi = 2$).
- **Production**: Tradable goods — CES across skill types ($\sigma = 3.21$), with city-specific fundamental productivity $\bar{A}_t^d$ augmented by endogenous agglomeration externalities: $(L_H)^{\phi_H}(L_L)^{\phi_L}$ where $\phi_H = 0.08$, $\phi_L = 0.02$.
- **Housing**: Cobb–Douglas over materials and land (land share $\omega^d$, mean 0.64). Land supply follows a Pareto-distributed conversion cost function; the price elasticity of land supply is positive but approaches zero as developable land is exhausted.
- **Hukou policy**: Modeled as two parameters — (i) hukou-granting probabilities $\theta_{st}^d$ (estimated from census data on naturalization rates), and (ii) a fiscal wedge $\lambda_t^d$ that makes migrants pay more for publicly-provided private goods (estimated via revealed-preference Rosen–Roback approach). Unlike prior work, hukou is not modeled as an iceberg migration cost but as a resource transfer between natives and migrants.
- **Equilibrium**: Solved in changes via exact-hat algebra (Dekle, Eaton, Kortum 2007).

**Estimation strategy**: Agglomeration elasticity estimated by two-step IV (historical 1990 city size instrument). Housing supply elasticity via shift-share instruments (Card 2001; Saiz 2010). Land supply elasticity from OLS on housing-price-to-developed-land relationship. Fiscal wedge inferred from how migrants trade off hukou status against income differences.

**Data**: Restricted-use census microdata (2000, 2005, 2010, 2015) for bilateral migration flows across 340 prefectures by skill; satellite-derived impervious surface area (Gong et al. 2020) for urban land; MODIS land cover data for developable land; Digital Elevation Model for slope-based terrain ruggedness.

## Main Results

1. **Aggregate effect of removing all hukou restrictions** (counterfactual, 2000–2020):
   - Average GDP gain: 13.6% (2000: 23.3%; 2010: 12.7%; 2020: 4.3%)
   - Average welfare gain: 4.7% (range 3.8%–6.0%)
   - Gains shrink over time because initial removal triggers a large one-time reallocation that attenuates as the economy converges.

2. **Geographic reallocation (2010 under free migration)**:
   - Tier-1 city populations would rise 87.6%; tier-2, 24.2%; tier-3, −9.1%.
   - Tier-1 GDP would rise 45.1%; tier-2, 30.4%; tier-3, 3.5% (despite population loss).
   - Low-skilled population rises more than high-skilled in tier-1/2 cities (consistent with skill-selective hukou granting).

3. **Local vs. national optimality of Chinese city sizes**:
   - From the **local** perspective: 83.3% of tier-1 and 88.9% of tier-2 cities were oversized (relaxing hukou would reduce local welfare).
   - From the **national** perspective: 100% of tier-1 and 94.4% of tier-2 cities were undersized (relaxing hukou would raise national welfare).
   - Result: most large Chinese cities lie between their locally optimal size (smaller) and their nationally optimal size (larger), creating a fundamental tension.

4. **Distributional effects of removing hukou (2010)**:
   - Low-skilled natives in tier-1 cities: −17.0% welfare.
   - High-skilled natives in tier-1 cities: −10.6% welfare.
   - Migrants in tier-1 cities: −0.2% (low-skill) to +5.4% (high-skill).
   - Dominant channel: crowding in publicly-provided private goods (education), not housing prices or wages.

5. **Gradual city-level policy changes**: Relaxing any individual city's hukou policy almost always increases national welfare, even for cities where theory says restricting size could help. The friction introduced by migration barriers outweighs the benefit of correcting city-size deviations.

6. **Policy combinations to resolve local–national conflict**: Increasing urban land supply elasticity has the largest single effect (welfare gain 10.3% vs. 4.9% benchmark; native losses halved); a combination of conditional fiscal transfers + private good supply + land supply elasticity achieves 11.7% welfare gain and substantially reduces native losses.

## Mechanisms Identified

> **Paper claim** — The hukou system creates a fiscal wedge (migrants pay more for local public goods and receive less land-rent income) that simultaneously restricts migration and transfers resources from migrants to natives; removing it generates large aggregate gains through labor reallocation to more productive cities, but native welfare falls primarily because of crowding in local publicly-provided private goods (rival in nature), not because of rising housing costs.

Key channels:
- **Agglomeration externality**: City productivity rises with population size and skill share ($\phi_H > \phi_L$), generating a positive externality that migrants ignore.
- **Congestion externality**: Inelastic land supply → rising housing prices as population grows; this is the main force making large cities locally oversized.
- **Hukou as fiscal wedge**: $\lambda_t^d$ discounts natives' price for publicly-provided private goods; removal eliminates this discount, harming natives.
- **Land-rent discrimination**: Migrants receive only $\mu_s$ share of local land income ($\mu_s \approx 0.3$), so rising housing prices partly compensate natives.
- **Site heterogeneity**: Cities differ in fundamental productivity and amenity; the social planner allocates more people to better sites, making them locally oversized but nationally efficient.

Links: agglomeration externality, congestion and housing, hukou fiscal wedge, spatial site heterogeneity

## Methods and Measures

- **Dynamic quantitative spatial equilibrium model** (Caliendo et al. 2019/2021 structure with hukou lottery).
- **Exact-hat algebra** (Dekle, Eaton, Kortum 2007) for counterfactual computation.
- **Two-step agglomeration estimation** (Combes et al. 2015): individual wage on city dummies → city dummies on log population, with 1990 population as IV.
- **Shift-share instruments** (Card 2001; Saiz 2010) for housing supply elasticity estimation.
- **Revealed-preference Rosen–Roback approach** for inferring the monetary value of hukou status (fiscal wedge $\lambda_t^d$).
- **Satellite-based urban land measurement**: impervious surface area at 30m resolution (Gong et al. 2020) for urban land; MODIS land cover for developable land; DEM at 90m for slope-based terrain ruggedness (Saiz 2010 method).
- **City-specific housing supply elasticity** using land unavailability near urban core as interaction term.

Links: [[quantitative-spatial-equilibrium]], [[exact-hat-algebra]], revealed-preference analysis of hukou, satellite-based urban land measurement, two-step agglomeration estimation

## Concepts Engaged

- **Optimal city size**: The paper bridges the canonical theory (Mills and De Ferranti 1971; Henderson 1974; Albouy et al. 2019) with empirical quantification, distinguishing local optimality from national optimality in a general equilibrium framework.
- **Spatial equilibrium / system of cities**: Applies the modern quantitative spatial framework to the institutional reality of China's hukou system.
- **Urban externalities**: Both positive (agglomeration productivity) and negative (congestion via land scarcity) are structurally estimated.
- **Internal migration barriers**: Models the hukou system not as a transportation-style iceberg cost but as a fiscal discrimination mechanism.
- **Spatial misallocation**: Connects to Hsieh and Moretti (2019) on how high-productivity cities' barriers reduce aggregate output.
- **Distributional conflict in urbanization**: Natives vs. migrants in desirable cities; local vs. national interests.

Links: optimal city size, [[quantitative-spatial-equilibrium]], urban externalities, hukou, spatial misallocation

## Connection to Debates

> **Paper claim** — The paper directly informs the debate on whether governments should control urbanization: it shows that restraining city sizes through migration barriers is generally welfare-reducing at the national level, but that large cities' local incentives to restrict migration are strong because their actual sizes exceed locally optimal levels. This resolves an ambiguity in the theoretical literature (Albouy et al. 2019; Duranton and Puga 2023) and contradicts the earlier finding of Au and Henderson (2006a) that Chinese cities were primarily too small — this paper finds large Chinese cities were locally too large (due to housing costs and land scarcity) but nationally too small.

Key debate connections:
- **Au and Henderson (2006a)** vs. this paper: difference driven by modeling of housing costs and inelastic land supply in the welfare calculation.
- **Hsieh and Moretti (2019)**: parallels between U.S. housing supply constraints and China's hukou-based migration barriers as sources of spatial misallocation.
- **Persistent rural–urban productivity gaps** (Gollin et al. 2014; Lagakos 2020): the paper argues these gaps persist because high-productivity cities have strong incentives to exclude migrants.

Links: optimal city size in China, whether to promote or restrain urbanization, housing supply and spatial misallocation

## Theoretical / Empirical Significance

This is the first paper to provide a comprehensive quantitative answer to whether governments should control city sizes — a question with high policy relevance (70% of countries had such policies in 2011) but little previous causal evidence. Its theoretical innovations include: (i) modeling the hukou system as a fiscal wedge/resource transfer rather than an iceberg migration cost, which changes the welfare interpretation; (ii) embedding optimal city size theory within a dynamic quantitative spatial equilibrium framework with skill heterogeneity, forward-looking agents, and a hukou lottery; (iii) empirically distinguishing local from national optimality of city sizes using a calibrated general equilibrium model. The paper also provides the first agglomeration elasticity estimate for China using a definition of city size consistent with the spatial unit of analysis ($\phi \approx 0.1$), and a comprehensive revealed-preference estimate of the hukou fiscal wedge (equivalent to 50.7% of destination wage in 2000, declining to 15.0% by 2015).

## Notes and Caveats

- The "complete removal" counterfactual assumes elasticities would not change and political unrest would not occur — both strong assumptions for such a massive policy change.
- The number of cities and their administrative boundaries are treated as exogenous; the paper cannot evaluate policies that create new cities or reorganize boundaries (e.g., China's "super-regions" plan), which the authors identify as a promising research direction.
- The model assumes a constant tax rate $\tau = 0.2$ because commodity taxes dominated China's fiscal system during the study period.
- Fixed migration costs $f_s^{od}$ are assumed time-invariant, which is important for identifying hukou discrimination from the data.
- The paper's focus on China's specific institutional setting (hukou system, state-controlled land supply) limits direct external validity; similar analyses for other developing countries would require modeling different migration barrier mechanisms.
- Out-of-sample test (2020): correlation of 0.98 for population levels and 0.99 for GDP levels, but only 0.62 and 0.86 for changes — the model predicts levels well but changes less precisely.
