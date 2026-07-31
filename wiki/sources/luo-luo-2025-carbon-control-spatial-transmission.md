---
title: "控碳政策的区域传导机制与效应——基于量化空间一般均衡模型的分析"
type: source
authors: [罗良文, 罗志鹏]
year: 2025
slug: luo-luo-2025-carbon-control-spatial-transmission
tags: [quantitative-spatial-equilibrium, carbon-control-policy, regional-transmission, carbon-leakage, carbon-revenue-transfer, labor-migration, trade-linkages, exact-hat-algebra, china, deadweight-loss]
raw_markdown: "[[raw_markdown/papers/luo-luo-2025-carbon-control-spatial-transmission]]"
status: canonical
---

# 控碳政策的区域传导机制与效应——基于量化空间一般均衡模型的分析 (2025)

> **Paper claim** — Building a quantitative spatial general equilibrium (QSGE) model with trade linkages, labor-migration decisions, carbon-control constraints, and carbon-revenue transfers, the paper shows that a single region's carbon control (控碳) propagates through the whole economy: non-controlling regions' GDP growth offsets ~38% of controlling regions' GDP loss, carbon leakage roughly halves the emission-reduction effect, and command-style control ("拉闸限电") "melts" carbon costs into deadweight loss with welfare loss over twice that of carbon-pricing tools.

Raw markdown: [[raw_markdown/papers/luo-luo-2025-carbon-control-spatial-transmission]]

## Research Question

How does a regional carbon-control constraint (控碳约束) transmit across interconnected regions in a spatial general equilibrium, and what are its economic, welfare, distributional, and carbon-leakage effects? The paper is motivated by China's institutional transition from energy-consumption dual control (能耗双控) to carbon-emission dual control (碳排放双控), and asks how the interregional allocation of carbon-control targets should account for trade linkages, labor mobility, and carbon-revenue transfer — arguing regions are not isolated "islands" (孤岛), so constraints on one region spill over to all connected regions.

## Model / Experimental Design

A quantitative spatial general equilibrium model (量化空间一般均衡模型) built on the Eaton & Kortum (2002) / Redding (2016) tradition, solved via Dekle et al. (2007) exact-hat algebra (精确帽子代数).

- **Geography:** N−1 domestic regions + 1 foreign region. Residents move across domestic regions but not internationally; each supplies 1 unit of labor inelastically.
- **Production:** Multi-tier nested CES production function. Top tier combines labor $L$, energy $E$, and an intermediate-goods composite $M$ (elasticity $\rho_1$); energy nests fossil $E^F$ and renewable $E^R$ (elasticity $\rho_2$); fossil nests coal, oil, gas (elasticity $\rho_3$). Firm productivity drawn i.i.d. from Fréchet$(T_n,\theta)$.
- **Policy wedge:** Actual energy cost = market price + compliance cost, $q_n^e = P_n^e + \lambda_n^e$. Under energy control $\lambda_n^e = v^e\lambda_n$ (standard-coal coefficient); under carbon control $\lambda_n^e = k^e\lambda_n$ (emission coefficient). $\lambda_n$ equals the shadow price of the carbon (energy) permit.
- **Energy supply:** Fossil energy traded at a single international price (global supply-demand); renewable energy priced by local supply-demand. Supply functions of form $u = B(P)^{\eta}$.
- **Income & transfers:** Regional public income $A_n = T_n + (1-\varpi)H_n + ER_n + CT_n + D_n$ — tax, carbon-permit revenue $H_n$ (with deadweight-loss rate $\varpi$; under pure command control $\varpi=1$ so carbon revenue fully "melts"), energy-sales revenue, carbon-permit transfer $CT_n$, and trade deficit.
- **Migration:** Residents have heterogeneous Fréchet-distributed location preferences; migration elasticity $\kappa$; migration cost $\mu_{ni}$. Public-service accessibility rate $\delta$ captures that migrants may not access local public services equally (hukou / 户籍 friction).
- **Policy tools unified:** carbon market, carbon tax, command carbon control, and command energy control all nest in one framework, differentiated by ($\varpi$, $CT_n$, $C_n^{quo}$).
- **Equilibrium:** cast in relative (hat) changes; a $(3N + N\times N + 3)$ equation system.

## Main Results

**Single-region 1% carbon-control counterfactual:**
- Applying a 1% carbon constraint raises local unit production cost in most regions (constraint-cost effect dominates), but in some regions (Shandong 山东, Hubei 湖北, Sichuan 四川) unit cost *falls* because the output-reduction effect on factor prices outweighs the fossil-energy price rise.
- **Non-controlling regions' GDP growth offsets ~38% of controlling regions' GDP loss on average.** For some regions the positive spillover can slightly exceed the local loss, making national GDP *rise* — i.e., the global abatement cost can be negative — driven entirely by the migration mechanism pushing people to higher-productivity regions.
- National welfare effect is always negative in every region's control scenario: residents make "forced relocation decisions" (被迫迁出决策) — local income falls, widening the income gap and pushing out-migration to more productive regions, so aggregate efficiency rises but individual welfare declines (the **GDP–welfare separation / 分离**).
- **Carbon leakage averages ~49.71%** of the controlling region's abatement — control effectiveness is roughly *halved* under spatial general equilibrium. For Qinghai (青海) and Ningxia (宁夏) leakage fully offsets the local reduction. Foreign (国外) leakage exceeds domestic (国内) leakage, partly because migration cannot cross borders, so foreign fossil-energy use is not suppressed by labor inflow.

**National 1% carbon-control counterfactual — four instruments (Table 2):**

| Indicator | Carbon market | Carbon tax | Command carbon | Command energy |
|---|---|---|---|---|
| GDP | −0.042% | −0.042% | −0.045% | −0.046% |
| Welfare | −0.046% | −0.046% | −0.114% | −0.116% |
| Gini | +0.024 | +0.023 | +0.032 | +0.032 |
| Carbon leakage | 0.221 | 0.220 | 0.257 | 0.264 |

- Carbon market has the highest economic efficiency (smallest GDP loss); command energy control the lowest.
- **Command tools' welfare loss is ~2–3× that of carbon-pricing tools** (−0.114/−0.116 vs −0.046), because command control "melts" carbon revenue into deadweight loss and weakens factor substitution away from fossil energy.
- Carbon tax's welfare loss is slightly *below* the carbon market's, and the carbon market raises the Gini coefficient slightly more — carbon-revenue cross-regional transfer tends to widen regional gaps (siphon / 虹吸 effect).
- National carbon leakage exceeds 20% of domestic reduction under all instruments (actual effect ~80% of target).

**Structural-change sensitivity (Table 3):** Raising public-service accessibility ($\delta$: 0→1) and higher migration elasticity ($\kappa$) both smooth migration and lower GDP/welfare loss, but raise the Gini (more agglomeration in developed regions). Higher trade elasticity ($\theta$) *raises* GDP loss, welfare loss, and leakage — foreign regions capture more of China's ceded trade share. Higher renewable–fossil substitution elasticity ($\rho_2$) and renewable supply elasticity ($\eta^R$) reduce control losses — the "事缓则圆" (patience yields better outcomes) logic applies.

## Mechanisms Identified

> **Paper claim** — Regional carbon control transmits through endogenous trade linkages and labor migration, not exogenous input-output shares.

- **Constraint-cost effect vs. output-reduction effect** jointly determine local unit-cost direction; factor-supply elasticity (especially labor via migration) governs how far factor prices fall.
- **Trade channel:** local unit-cost changes pass through intermediate-goods prices to non-controlling regions (trade attenuation / 贸易衰减 vs. trade compensation / 贸易补偿); output reduction transmits a total-demand shock through trade circulation.
- **Migration channel:** carbon control lowers local income, inducing out-migration to higher-productivity regions — source of both the negative-global-cost result and the GDP–welfare separation.
- **Carbon-cost "melting" (融化):** under command control, permit revenue exits the economic circulation, creating deadweight loss with a multiplier effect in the input-output structure.
- **Carbon-revenue transfer** under carbon markets flows from heavy-industry/energy-dependent regions to lighter ones, widening development gaps.

Links: carbon leakage, labor migration, trade linkages

## Methods and Measures

- Quantitative spatial general equilibrium modeling with **exact-hat algebra** (Dekle et al. 2007) — avoids calibrating $\{T_n, B_n^R, B^{fe}, \chi_n, \mu_{ni}, d_{ni}, \sigma\}$.
- Counterfactual simulation (single-region 1% and national 1% carbon reduction).
- Measures: regional/national GDP change $\widehat{GDP_n}$, welfare change $\hat{W}_n = \hat{V}_{nn}\hat{m}_{nn}^{-1/\kappa}$, Gini coefficient of interregional GDP, domestic vs. foreign carbon leakage ratios.
- **Data:** Li Shantong (2023) 2017 China-embedded global multi-regional input-output table; Seventh National Population Census (registered population, migration flows); Energy Statistical Yearbook; price differences via Brandt & Holz (2006) / Tombe & Zhu (2019). Tibet excluded for data gaps.
- **Key parameters:** migration elasticity $\kappa=1.5$, trade elasticity $\theta=4$; fossil supply elasticities $\eta^C,\eta^O,\eta^G = 3, 0.25, 0.60$; renewable supply elasticity $\eta^R=0.6$; substitution elasticities $\rho_1=\rho_2=\rho_3=0.6$; deadweight-loss rate $\varpi=1$; public-service accessibility $\delta=0$; emission coefficients $k^C,k^O,k^G,k^R = 1.682, 3.039, 21.141, 0$; standard-coal coefficients $v = 0.7143, 1.4286, 12.143, 1.229$.

Links: [[quantitative-spatial-equilibrium]], [[exact-hat-algebra]]

## Concepts Engaged

- Carbon-emission dual control vs. energy-consumption dual control (碳排放双控 / 能耗双控).
- Carbon pricing (carbon tax, carbon market) vs. command control (指令控碳/控能).
- Carbon leakage (碳泄漏), domestic and international.
- Deadweight loss (无谓损失) from "melting" carbon costs.
- Carbon-revenue transfer (碳收益转移) and regional equity.
- GDP–welfare separation and "forced relocation" (被迫迁出).

Links: carbon control policy, carbon leakage, carbon revenue transfer

## Connection to Debates

> **Paper claim** — Environmental-policy transmission should be modeled as endogenous spatial general equilibrium, not exogenous input-output shares or spatial-econometric spillover coefficients (which are vulnerable to the Lucas critique per Redding & Rossi-Hansberg 2017).

- Extends Bogmans (2015)'s two-region constraint-cost/leakage analysis to a realistic multi-region setting.
- Contrasts with Duan et al. (段玉婉等, 2023), which focused on China's carbon market welfare under globalization; this paper foregrounds *domestic* interregional linkages and adds labor-migration decisions.
- Engages the efficiency-vs-equity debate in carbon policy (carbon market efficient but widens gaps; command control equitable-looking but high deadweight loss).
- Speaks to the carbon-leakage / free-riding and CBAM literature (Ambec et al. 2024; Magacho et al. 2024).

Links: carbon control policy

## Theoretical / Empirical Significance

Provides a unified, domain-appropriate QSGE framework tailored to China's carbon-control institutions that (1) distinguishes energy control from carbon control, (2) nests carbon directive, carbon market, and carbon tax in one architecture, and (3) quantifies both domestic and international carbon leakage plus the equity implications of carbon-revenue transfer. It reframes regional abatement-cost estimation by endogenizing interregional interaction — showing that treating other regions as fixed can badly misstate policy effects, and that a region's abatement can even be globally GDP-positive but welfare-negative. Policy relevance is direct: supports the energy-to-carbon dual-control transition, market-based flexible instruments, and a carbon-revenue redistribution/adjustment mechanism.

## Notes and Caveats

- All results are relative-change (hat-algebra) counterfactuals calibrated to a 2017 base year; magnitudes are small (national GDP changes on the order of 0.04%) because shocks are 1% reductions.
- Tibet (西藏) is dropped for data limitations.
- Baseline sets deadweight-loss rate $\varpi=1$ (pure command) and public-service accessibility $\delta=0$ (strictest hukou friction) — extremes chosen for clarity; structural-change table relaxes these.
- Foreign region is a single aggregated block; cross-border migration is shut off, which drives the finding that foreign leakage exceeds domestic leakage.
- Some numeric values and citation years in the raw markdown are garbled/incomplete (e.g., several figures show blank averages, Riekhof year missing); numbers reported here are those legible in the source.
- Published in a Chinese economics journal (responsible editor 金禾); JEL P28, R13, E20.
