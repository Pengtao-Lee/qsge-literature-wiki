---
title: "跨地投资扭曲、产品市场分割与资本的空间配置效率——基于量化空间均衡模型的研究"
type: source
authors:
  - 赵扶扬
  - 王都
  - 戴若尘
  - 陈斌开
year: 2025
slug: zhao-wang-dai-chen-2025-cross-regional-investment-distortions
tags:
  - quantitative-spatial-equilibrium
  - capital-misallocation
  - cross-regional-investment
  - product-market-segmentation
  - unified-national-market
  - local-government-incentives
  - spatial-economics
  - china
raw_markdown: "[[raw_markdown/papers/zhao-wang-dai-chen-2025-cross-regional-investment-distortions]]"
status: canonical
---

# 跨地投资扭曲、产品市场分割与资本的空间配置效率——基于量化空间均衡模型的研究 (2025)

> **Paper claim** — Using a quantitative spatial equilibrium model built on firm business-registration data, this paper documents and explains China's "capital flowing against returns" (资本逆回报率流动) spatial misallocation, showing that cross-regional investment distortions (跨地投资扭曲) and product market segmentation (产品市场分割) contribute roughly equally, that ignoring their interaction underestimates the gains from domestic trade opening by about 20%, and that the deep cause is distorted local-government behavior under fiscal and economic incentives.

Raw markdown: [[raw_markdown/papers/zhao-wang-dai-chen-2025-cross-regional-investment-distortions]]

## Research Question

Why is capital in China spatially misallocated — specifically, why does more capital flow to regions with *lower* unit returns and productivity (the "capital flowing against returns" phenomenon, resembling but distinct from Lucas's paradox)? The paper asks what factors cause this spatial misallocation and reverse flow, how to quantify and decompose the contribution of each factor, and how to raise the spatial allocation efficiency of capital in the context of building China's unified national market (全国统一大市场). It focuses on the interaction between two forces: cross-regional investment distortions and product market segmentation.

## Model / Experimental Design

A multi-region **quantitative spatial general equilibrium model (QSM/量化空间一般均衡模型)** covering N cities corresponding to China's mainland prefecture-level and above cities. Products, labor, and capital all flow across regions. Key structure:

- **Residents / migration.** CES consumption over goods from all regions (elasticity σ > 1); individual heterogeneous amenity-preference draws follow a Fréchet (Type-II extreme value, parameter ρ). Indirect utility $V_i = b_i w_i / P_i$. Migration shares follow a Fréchet-logit form $M_{in} = (\mu_{in}V_n)^\rho / \sum_m (\mu_{im}V_m)^\rho$ with migration cost $0<\mu_{in}<1$ and migration elasticity ρ. Total registered population fixed; realized population endogenous.
- **Production.** Capital owned by a representative entrepreneur in each city, who invests across the country by setting up subsidiaries. Constant-returns Cobb-Douglas production $Y_{in} = Z_n k_{in}^\alpha l_{in}^{1-\alpha}$; idiosyncratic Fréchet productivity shocks (parameter κ) on individual investments.
- **Investment decision (the innovation).** For each unit of capital from city i to city n only a fraction $\tau_{in}$ of returns is recovered — $\tau_{in}$ is the **cross-regional investment distortion**. Entrepreneurs allocate capital to the highest *net* return $\varepsilon_{in}(\varphi)\tau_{in}r_n$. Investment shares follow $S_{in} = (\tau_{in}r_n)^\kappa / \sum_m (\tau_{im}r_m)^\kappa$, where κ is the **investment elasticity**. Effective return $\tau_{in}r_n$ acts as a wedge between effective and observed returns.
- **Trade.** Armington (1969) iceberg trade costs $\gamma_{nm}\geq 1$; trade elasticity $\theta=\sigma-1$; trade shares $\pi_{in}$ in the standard gravity form. Product market segmentation enters as elevated internal trade barriers, driving the "tariff-jumping" (关税跳跃) motive to build factories in the destination market.
- **Local government (Section 5).** An exogenously introduced government utility $U_i = (Y_i/\xi_i)^{\xi_i}(T_i/(1-\xi_i))^{1-\xi_i}$ over jurisdictional output Y and fiscal revenue T, used to analyze investment-attraction competition and trade protection.

Equilibrium: given region-specific $\{\bar K_n, \bar L_n, Z_n, b_n, \gamma_{in}, \mu_{in}, \tau_{in}\}$ and common parameters $\{\alpha, \rho, \theta, \kappa\}$, solve for the endogenous set via nonlinear iterative algorithm. Counterfactuals via re-solving under altered parameters.

## Main Results

- **Feature fact.** Capital is negatively correlated with unit returns both across China's six major economic regions and across cities: the high-return southeast coast is a net capital *outflow* region, while the low-return central-western regions attract more capital. Net capital inflow measured as (inflow − outflow)/GDP.
- **Model fit.** The calibrated baseline replicates the observed negative return-flow relationship, and matches GDP data on the 45-degree line even though GDP was not used in calibration.
- **Decomposition (Table 1).** Reducing investment distortion, trade barriers, or both (each cut by half): improvement in allocation efficiency (slope change) — investment distortion **5.96 (45.489%)**, trade barriers **5.18 (44.321%)**, interaction reinforcement effect **1.25 (10.19%)**. The two distortions contribute roughly equally.
- **Single-market reforms insufficient.** Improving either market alone renders the negative return-flow correlation statistically insignificant but does not reverse the misallocation; only reducing *both* simultaneously produces a significant *positive* correlation between returns and flows.
- **~20% underestimation.** In the product-market integration simulation (Table 3), over 20% of the efficiency gain from trade opening operates through the capital-reallocation channel; ignoring the product–capital market interaction underestimates the overall gains from domestic trade opening by about 20%.
- **Capital-market integration policy (Table 2).** Adjusting τ by the 2013–2018 change: real GDP +3.091%, unit-capital-return dispersion −4.798%. Reducing provincial-border (省界) effects: real GDP +6.279% (inflow) / +1.548% (outflow); return dispersion −3.849% / −14.671%. Reducing border effects yields larger average gains than nationwide distortion adjustment.
- **Product-market integration policy (Table 3).** Trade cost −20%: real GDP +1.572%, return dispersion −4.990%; trade cost −10%: real GDP +0.679%. Effect is marginally increasing (doubling barrier reduction more than doubles the efficiency gain). Notably, local resistance is *negative* (−0.067% at −20%) — national trade liberalization *reduces* local resistance because all regions benefit simultaneously (escaping a prisoner's-dilemma).
- **Local government incentives (Section 5).** Government utility is inverse-U-shaped in capital-tax cuts (investment-attraction competition) and monotonically *decreasing* in trade opening (under production-based taxation). The baseline sits to the left of the optimum, so governments have incentive to set *stronger* investment-attraction policies, worsening capital-market distortion.
- **Equity–efficiency dilemma (Table 4).** Market integration compresses underdeveloped regions' resources, widening regional gaps; pairing with labor-mobility policy (migration cost −50%) narrows per-capita GDP/wage dispersion. E.g. all-distortions-reduction + labor mobility: real GDP +4.666%, per-capita GDP dispersion −13.238%. Backward-shifting consumption-tax collection (消费税征收环节后移) turns the government-utility curve from monotonically declining to U-shaped, restoring incentive compatibility.

## Mechanisms Identified

> **Paper claim** — Two co-originating channels drive capital's reverse flow. (1) **Investment-promotion distortion**: local governments use tax breaks, subsidies, and cheap land to attract outside capital, distorting *true* returns so that flows track subsidy-inclusive effective returns $\tau_{in}r_n$ rather than observed returns. (2) **Product-market-segmentation / tariff-jumping**: facing high internal trade barriers, firms invest and build factories in the destination market rather than ship goods there, misallocating capital toward high-barrier (often low-return) regions. Both channels are ultimately rooted in local-government behavior maximizing jurisdictional output and fiscal revenue.

## Methods and Measures

- Firm business-registration data (企业工商注册数据) from the State Administration for Market Regulation, aggregated to city-pair investment matrices (2017, 2018).
- Structural quantitative spatial equilibrium calibration/estimation over 277 mainland cities.
- Unit capital return = capital compensation / capital stock; capital stock via perpetual inventory method (张军等 2004; 单豪杰 2008).
- Investment elasticity κ estimated via regression of investment shares on destination returns with source and source–destination fixed effects, Bartik and other IVs; κ ≈ 1.5.
- Calibrated parameters: α = 0.5, ρ = 1.5, θ = 4 (robustness at θ = 2, 6); internal trade costs from Fan et al. (2023).
- Inverted parameters: migration costs $\mu_{in}$, investment distortions $\tau_{in}$, TFP Z, capital stock K, amenity b.
- Efficiency measured by standard deviation of unit capital returns; regional coordination by dispersion of per-capita GDP and wages; policy resistance by local-government utility change (GDP compensation).
- Robustness: alternative capital-compensation measures (CEADs input-output tables), bond-database ROA/ROIC, log net inflow, within-region misallocation, excluding cross-industry investment.

## Concepts Engaged

Cross-regional investment distortion (跨地投资扭曲); product market segmentation (产品市场分割); spatial capital misallocation / "capital flowing against returns"; unified national market (全国统一大市场); tariff jumping (关税跳跃); provincial-border effect (省界效应); local-government investment-attraction competition (招商引资); fiscal decentralization and consumption-tax reform.

## Connection to Debates

> **Paper claim** — Against a literature that studies capital misallocation mainly *across firms/industries* (Hsieh-Klenow 2009; ownership misallocation), this paper relocates the misallocation to the *spatial* dimension and gives it general-equilibrium structure. Against QSM work that introduces capital via an exogenous "interest-rate wedge" (利率楔子) without a source region, it provides microfoundations for cross-regional investment decisions and explicit capital flow from source to destination (following Kleinman, Liu, Redding 2023/2024). It brings the international tariff-jumping / multinational-production literature (Horst 1971; Motta 1992; Ramondo & Rodríguez-Clare 2013) inside a domestic setting, arguing that omitting the product–capital interaction — as pure trade models do — severely underestimates gains.

## Theoretical / Empirical Significance

Provides a unified structural framework in which capital-market distortions and product-market segmentation are jointly modeled and quantitatively decomposed, offering a new theoretical grounding for the "systematic and coordinated" principle of building China's unified national market. Methodologically it is among the first domestic QSM applications to give capital cross-regional investment microfoundations matched to full-volume business-registration data. Policy-relevant: it quantifies that spatial capital-allocation optimization must be pursued jointly with product- and labor-market integration, warns that market integration alone widens regional gaps and clashes with local incentives, and validates consumption-tax collection reform as an incentive-compatibility fix.

## Notes and Caveats

- The central parameter $\tau_{in}$ (cross-regional investment distortion) has no direct data counterpart and is inverted from the model; its plausibility is argued indirectly (diagonal = 1, within-province blocks less distorted, developed regions with stronger capital spillover), not externally validated.
- Static framework (no dynamic capital accumulation), despite drawing on dynamic QSM work.
- Decomposition magnitudes depend on the trade elasticity θ: at θ = 2 trade barriers dominate (40.9% vs 23.2%), at θ = 6 investment distortion dominates (41.5% vs 34.1%); the "roughly equal" headline holds at the baseline θ = 4, though the qualitative conclusion (both matter) is robust.
- Some numerical values and citation years are illegible/missing in the raw OCR conversion (e.g., several publication years, some figure references); reported figures above are those legible in the source.
- Local-government utility is introduced exogenously rather than derived; the incentive analysis is a partial extension, not a fully endogenized political economy.
