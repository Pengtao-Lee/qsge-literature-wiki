---
title: "全国一体化数据市场构建与中国经济增长——基于量化空间一般均衡模型的分析"
type: source
authors:
  - "Lin, Yao"
  - "Liu, Yuanchun"
  - "Zhou, Ting"
year: 2026
slug: lin-liu-zhou-2026-data-market
tags:
  - data-factor
  - market-integration
  - quantitative-spatial-equilibrium
  - economic-growth
  - nonrivalry
raw_markdown: raw_markdown/papers/lin-liu-zhou-2026-data-market.md
journal: "经济研究 (Economic Research Journal)"
abstract: "This paper incorporates non-rival data as a production factor into a quantitative spatial equilibrium (QSE) model to study the effects of building a national integrated data market in China. It identifies two mechanisms — resource allocation effects and scale economy effects — through which market integration reduces data prices, stimulates firm entry, and raises productivity and welfare. Counterfactual simulations suggest GDP gains of approximately 12.3% under a unified market relative to segmented markets."
status: canonical
---

# Building a National Integrated Data Market and China's Economic Growth (2026)

> **Paper claim** — China's fragmented data markets suppress the value of data as a non-rival production factor. Constructing a national integrated data market generates significant growth through both a resource allocation effect (moving data processing to lower-cost western regions) and a scale economy effect (non-rival data can be sold to more firms at lower per-unit prices in a larger market), with estimated GDP gains of ~12.3% under unified relative to segmented markets.

Raw markdown: [[raw_markdown/papers/lin-liu-zhou-2026-data-market]]

## Research Question

How would the construction of a national integrated data market affect China's economic growth and regional development pattern? The paper asks this question against the backdrop of severe fragmentation in China's data factor market — departmental, regional, and industry barriers that prevent data from circulating freely, creating "data islands" and "data chimneys."

## Model / Experimental Design

The paper develops a dynamic quantitative spatial general equilibrium (QSE) model with two regions (East and West China) and two market regimes:

- **Agents:** Representative consumers (who supply raw data and incur privacy costs), final goods producers (CES aggregator), intermediate goods producers (monopolistic competition, each producing one differentiated variety), and a data intermediary (processes raw data into "workable data" that is sold to firms).
- **Key assumptions:** (1) Data is non-rival — the same processed dataset can be sold simultaneously to all firms without depletion. (2) Raw data ownership resides with consumers (baseline), who sell it to the data intermediary. (3) Under a unified market, regional raw data are perfectly substitutable and there is no cross-regional cost for data sales. (4) Under a segmented market, each region has its own data intermediary serving only local firms.
- **Data-production technology:** T_t = χ * (∑ D_i,t)^γ * (L_t^D)^(1-γ), where the intermediary purchases raw data from consumers and employs labor to clean, label, and process it into workable data.
- **Productivity link:** Firm productivity A_i,t(ω) = A_i,t^o(ω) * (φ_i,t(ω))^ζ, where φ is data input used by the firm and ζ is the elasticity.
- **Equilibrium concept:** Spatial general equilibrium with labor migration across regions (driven by real wage differences and congestion costs), trade in goods (subject to iceberg costs), intergovernmental transfers (to match observed regional trade deficits), and firm entry/exit (zero-profit condition pins down the number of firms).
- **Calibration:** Parameters calibrated to China's 2017 inter-regional input-output table (Li Shantong), national population census migration data, GDP deflators, and ICT sector shares. Key parameters: ζ (data share in costs) = 0.018 (baseline), 0.024 (upper), 0.011 (lower); σ (demand elasticity) = 5.62; α (labor share) = 0.227.
- **Counterfactual simulation:** "Hat algebra" algorithm (Dekle et al., 2008) iterates the model from initial steady state to compare the unified-market path against the segmented-market path over 10 periods.

## Main Results

1. **Data market prices diverge under unification:** Raw data purchase prices rise (by ~32% East, ~88% West) because cross-regional circulation raises consumer privacy concerns; data selling prices fall sharply (by ~41% East, ~36% West) driven by both resource allocation and scale economies.
2. **Productivity and output gains:** Unified data market raises firm-level TFP by ~1%, labor productivity by ~4.5%, and total GDP by ~12.3% relative to segmented markets.
3. **Firm entry and positive feedback:** The number of firms increases by ~5.6%. More firms → larger data sales base → lower data prices → more data input → higher productivity → higher expected profits → more firms enter, forming a virtuous cycle.
4. **Regional rebalancing:** Western region develops a comparative advantage in data production ("East-Calculates-West-Computes" / 东数西算). Western data-sector employment more than doubles under unification. Western welfare rises by ~3.5%, Eastern welfare by ~6.5%.
5. **Higher data input share amplifies gains:** When ζ = 0.0243 (higher data intensity), GDP growth reaches ~17.1%; when ζ = 0.0109 (lower), growth is ~7.0%.
6. **Multiplier effects:** Unified market amplifies positive shocks: a 5% productivity shock yields +15.7% GDP under unification vs. +14.0% under segmentation. Negative data security shocks are also amplified.
7. **Data monopoly dampens gains:** With monopoly markup of 20–50% by the data intermediary, the growth premium of unification shrinks.

## Mechanisms Identified

> **Paper claim** — Two channels drive growth from data market integration: (1) a *resource allocation effect*: removing cross-regional data barriers allows data processing to shift to lower-cost western regions, reducing production costs; (2) a *scale economy effect*: a non-rival data good can be sold to more firms in a unified market, spreading fixed production costs across a larger base and lowering the per-unit sales price.

The scale economy effect is the distinctively new mechanism that goes beyond traditional factor market integration theory, which focuses only on spatial reallocation of rival factors.

A positive feedback loop operates: lower data prices → more data input → higher productivity → higher expected profits → more firm entry → larger market for data → even lower data prices.

Links: [[mechanism-resource-allocation-effect]], [[mechanism-scale-economy-effect-data]], [[mechanism-data-factor-positive-feedback]]

## Methods and Measures

- **Method:** Dynamic Quantitative Spatial General Equilibrium (QSE) model with two regions, heterogeneous firms, monopolistic competition, labor migration, and iceberg trade costs.
- **Measurement approach:** ζ (data elasticity) calibrated via three methods: (1) ICT intermediate input share in China's input-output table (0.018 baseline); (2) machine learning data elasticity estimates from Sun et al. (2017) and Jourdan et al. (2016); (3) data capital stock estimates from Liu et al. (2024) and Xu et al. (2023).
- **Simulation algorithm:** "Hat algebra" (Dekle, Eaton, and Kortum, 2008) — solves for counterfactual changes without needing to estimate the full structural model's levels.

Links: [[method-quantitative-spatial-equilibrium]], [[method-hat-algebra]]

## Concepts Engaged

- **Non-rival data as a factor of production** — the core concept: data's non-rivalry means its value grows with market scale, unlike labor or capital.
- **National integrated data market (全国一体化数据市场)** — the policy concept the paper evaluates.
- **Market fragmentation vs. integration** — departmental, regional, and industry barriers.
- **East-Calculates-West-Computes (东数西算)** — regional specialization in data processing.
- **Multiplier effects of market integration** — unified markets amplify both positive and negative shocks.

Links: [[concept-data-nonrivalry]], [[concept-data-factor]], [[concept-market-integration]], [[concept-east-calculates-west-computes]]

## Connection to Debates

> **Paper claim** — The paper contributes to the debate on whether data market integration matters beyond traditional factor market integration. It argues that non-rival data generates a distinct scale economy channel that is absent for rival factors, so policy frameworks for data markets should focus on expanding the scope of data reuse rather than only on spatial reallocation. It also engages the debate on data ownership (consumer vs. firm ownership), showing that the core growth mechanism is robust to ownership structure.

Links: [[debate-data-ownership]], [[debate-data-market-vs-traditional-market-integration]]

## Theoretical / Empirical Significance

1. **First application of QSE to China's domestic data market integration** — extends the spatial equilibrium framework to incorporate non-rival data production and trade, showing how data's unique characteristics generate growth mechanisms absent in traditional factor models.
2. **Distinguishes resource allocation from scale economy effects** — the latter is the novel channel for non-rival factors, complementing existing market integration theory.
3. **Policy relevance** — provides quantitative estimates (~12.3% GDP gain) that directly inform China's "National Integrated Data Market" strategy under the 20th CPC Central Committee's Third Plenum directive.
4. **Benchmarks against European experience** — cites EU Digital Single Market data (European Commission, 2023) showing ~€51B in cross-border data flow benefits, lending external validity.
5. **Rigorous robustness analysis** — tests sensitivity to data input share, raw data substitutability, consumer privacy concerns, data monopoly power, and both positive and negative economic shocks.

## Notes and Caveats

- **Extreme regime comparison:** The paper compares "fully segmented" vs. "fully integrated" data markets, which likely overstates the realistic upper bound of gains. The authors acknowledge that if better measures of actual cross-regional data flows become available, more precise estimates would be possible.
- **Perfect raw data substitutability assumption:** Under the unified market, raw data from different regions are assumed perfectly substitutable. The appendix relaxes this with a CES specification and finds results are qualitatively robust, though reduced substitutability slightly disadvantages western regions.
- **Zero-profit data intermediary baseline:** The baseline model assumes the data intermediary earns zero profit, which may not hold in reality where data platforms exercise market power. The paper addresses this in an extension with monopoly pricing.
- **Data product homogeneity:** Some data products (e.g., customized cloud services) have limited reusability. The model abstracts from data product heterogeneity.
- **Single national intermediary abstraction:** Under unification, the model features a single data intermediary located in the west. Real institutional design may involve multiple interoperable platforms rather than a single provider.
- **Privacy cost parameter:** κ is calibrated to match moments rather than directly estimated; simulation magnitudes for privacy-cost sensitivity should be interpreted qualitatively.
