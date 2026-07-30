---
title: "Endogenous Infrastructure and Spatial Development"
type: mechanism
status: active
papers:
  - trew-2020-endogenous-infrastructure
  - trew-2014-spatial-takeoff
  - desmet-rossi-hansberg-2014-spatial-development
  - liu-zhang-cai-2026-network-infrastructure
  - allen-arkolakis-2014-trade-topography
  - kleinman-liu-redding-2023-dynamic-spatial
  - redding-rossi-hansberg-2017-quantitative-spatial
tags:
  - infrastructure
  - transport costs
  - spatial development
  - endogenous growth
---

# Endogenous Infrastructure and Spatial Development

## Lead

The endogenous infrastructure mechanism describes the bidirectional interaction between transport infrastructure investment and the spatial evolution of economic activity over the course of development. In this mechanism, the location, timing, and quantity of infrastructure investment respond to the spatial concentration of production and the demand for interregional trade; in turn, reduced trade costs reshape the geography of comparative advantage, market access, and agglomeration, feeding back into further infrastructure demand. Crucially, infrastructure is both a cause and a consequence of spatial development: employment in the transport sector and investment in fixed infrastructure absorb labor and capital that could otherwise be used in production, generating a dynamic trade-off between the short-run costs and long-run growth benefits of infrastructure spending. Understanding this two-way interaction is of first-order importance for evaluating infrastructure policy in both historical and modern contexts.

## Theoretical Framework: Spatial Development with Transport Costs

The canonical framework for understanding the interaction between transport costs and spatial development builds on the model of [[desmet-rossi-hansberg-2014-spatial-development]], which features a continuum of locations, two sectors (manufacturing and services), and endogenous innovation with spatial diffusion of technology. In this framework, firms invest in the probability of drawing a productivity improvement, paying fixed and marginal costs that depend on local energy prices and wages; technology then diffuses across space with exponential decay each period. [[trew-2014-spatial-takeoff]] applies this framework to the first industrial revolution in England, calibrating the model with Shaw-Taylor parish-level occupational data for c. 1710 and showing that the initial spatial concentration of manufacturing productivity in the North of England was critical to whether and when an industrial takeoff occurred. [[trew-2020-endogenous-infrastructure]] extends the 2014 model to incorporate a third sector -- transport and distribution -- alongside endogenous infrastructure investment, so that trade costs are no longer an exogenous iceberg parameter but instead emerge from the interaction of transport labor, fixed infrastructure stock, and the volume of goods traded across space.

The general equilibrium structure follows the standard quantitative spatial equilibrium approach surveyed in [[redding-rossi-hansberg-2017-quantitative-spatial]], in which goods and factor markets clear across a continuum of locations, labor is perfectly mobile, and land is the fixed local factor. What distinguishes the endogenous-infrastructure extension is the explicit modeling of the transport sector as a user of labor and capital whose marginal product varies across space and over time as the spatial distribution of production changes.

## The Transport Sector in General Equilibrium

Transport costs at a location are determined by two components: a physical cost that depends on the stock of fixed infrastructure (roads, canals, railway tracks) and a toll charged by landowner-carriers who hire transport labor to facilitate the wholesaling and distribution of goods. [[trew-2020-endogenous-infrastructure]] models the transport sector's production as a constant-elasticity-of-substitution function of infrastructure stock and transport labor, where these two inputs are substitutes. The physical transport cost declines exponentially in the infrastructure stock, capturing the idea that better roads and railways reduce the "melt" of goods in transit. The toll, in turn, is set by landowners to cover the wages of transport labor, and the equilibrium toll rises with the volume of trade passing through a location but falls with better infrastructure and higher transport productivity.

A key general equilibrium constraint is that transport labor is drawn from the same labor pool as agricultural and manufacturing labor. Faster growth in output and trade increases the demand for transport services, which pulls labor out of production and can delay the point at which manufacturing firms reach the scale required to cover the fixed costs of innovation. This tension between the benefits of lower trade costs and the opportunity cost of transport labor is the central trade-off in the endogenous infrastructure mechanism.

## Two Channels of Interaction

The endogenous interaction between infrastructure and spatial development operates through two distinct channels. The first is the *productivity channel*: growth in industrial concentration generates demand for interregional trade, which creates local incentives for infrastructure improvement, which lowers trade costs, which further reinforces agglomeration and innovation through scale effects. In the historical context of England and Wales, the rise of industrial hotspots in the North and the specialization of the South in agriculture meant that a greater quantity of output was traded over greater average distances, generating local demand for turnpikes, canals, and railways ([[trew-2020-endogenous-infrastructure]]). This channel parallels the static findings of [[allen-arkolakis-2014-trade-topography]], who estimate that the U.S. interstate highway system increased welfare by 1.1 to 1.4 percent through reductions in trade costs.

The second is the *labor reallocation channel*: transport employment growth reduces the labor available for production, potentially delaying innovation take-off. In the baseline calibration for England and Wales, the transport sector absorbs approximately 8 percent of the labor force initially, and this share grows as output and trade expand. When infrastructure investments reduce the labor required to provide a given level of transport services, labor is released back into production, which can accelerate innovation. The net effect on the timing of industrial take-off depends on which channel dominates.

> **Current assessment (2026-07):** The tension between the productivity-driven demand for infrastructure and the labor reallocation cost is a robust feature of the model, but the quantitative magnitude of each channel depends on the substitutability between transport labor and infrastructure stock -- a parameter for which direct empirical estimates remain scarce.

## Historical Application: England and Wales, 1710--1881

The most detailed quantitative application of the endogenous infrastructure mechanism is the calibration of [[trew-2020-endogenous-infrastructure]] to the Industrial Revolution in England and Wales. Using occupational data from the Shaw-Taylor and Wrigley project at three dates (1710, 1817, and 1881), mapped into a one-dimensional north-south interval, the model captures the aggregate structural transformation across primary, secondary, and tertiary sectors simultaneously with the spatial evolution of economic activity.

A striking finding is that the growth of tertiary (transport and distribution) employment occurs relatively uniformly across all locations, in contrast to the spatial concentration of agricultural specialization in the South and the manufacturing hotspot in the North. The model explains this uniform tertiary growth as an equilibrium response to the increased output and trade volumes generated by the other two sectors: every location needs more transport services as more goods are produced and traded, regardless of whether the location itself specializes in agriculture or industry. This is consistent with the historical conjecture of Shaw-Taylor and Wrigley (2014) that the majority of tertiary employment growth in the nineteenth century was required simply to move increased output longer average distances.

Infrastructure development in the model proceeds endogenously through a Nash equilibrium among "counties" that decide whether to invest in infrastructure improvements, coordinated by a stylized parliamentary mechanism. The model replicates several features of the historical transport revolution, including the acceleration of infrastructure supply around 1850 and the spatial pattern of improvements concentrated around the northern industrial hotspot.

## Counterfactual Policy Experiments

The endogenous infrastructure framework permits counterfactual analysis of alternative infrastructure policies. Two central findings emerge from [[trew-2020-endogenous-infrastructure]]'s counterfactual exercises. First, exogenously higher transport costs can, paradoxically, *bring forward* the date of industrial take-off by increasing agglomeration forces. When transport costs are higher, economic activity concentrates more densely, increasing firm scale and making it more likely that firms can amortize the fixed costs of innovation. This result mirrors Proposition 3 of [[desmet-rossi-hansberg-2014-spatial-development]], which establishes that higher transport costs can raise aggregate productivity in a stagnant sector.

Second, early infrastructure investment accelerates industrial take-off only when it is spatially targeted. Bringing forward the model's endogenously generated infrastructure improvements by 50 years advances take-off by roughly 5 years, while bringing them forward by 100 years advances take-off by over 13 years. However, if the same total infrastructure investment is distributed uniformly across all locations rather than concentrated where demand is greatest, the effect on take-off is reversed: uniform early investment actually *delays* take-off by over 4 years. The reason is that spatially targeted improvements release labor from transport in the locations that matter most for industrial concentration, while leaving trade costs high elsewhere -- preserving the agglomeration benefits of costly trade -- whereas uniform improvements lower trade costs everywhere, weakening agglomeration forces without a sufficiently compensating release of transport labor.

> **Current assessment (2026-07):** The finding that uniform infrastructure spending has muted or even negative effects on the timing of industrial take-off is robust within the model's structure, but has not been directly tested empirically. The result highlights the importance of spatial targeting in infrastructure policy, though it also raises the challenge of identifying ex ante which locations will become industrial hotspots.

## Modern Extension: Digital Infrastructure

The logic of endogenous infrastructure extends beyond physical transport to digital networks. [[liu-zhang-cai-2026-network-infrastructure]] develop a quantitative spatial equilibrium model with network infrastructure, in which broadband and mobile base stations reduce the information and search costs that function as trade costs in the modern economy. Their estimates indicate that China's network infrastructure construction between 2012 and 2019 generated approximately 3.26 percent welfare gains, with the narrowing of the digital divide across regions serving as a key mechanism.

The parallel to the historical transport mechanism is instructive. Just as turnpikes and canals lowered the cost of moving goods in eighteenth-century England, network infrastructure lowers the cost of moving information in twenty-first-century China. In both cases, the productivity-enhancing effect is concentrated in regions where economic activity is already growing, while the narrowing of infrastructure gaps between regions -- whether the digital divide or the gap between the industrial North and the agricultural South -- serves as a convergence mechanism. Both studies also find that the aggregate welfare effects of infrastructure depend on the spatial pattern of improvements, not merely their total magnitude.

> **Current assessment (2026-07):** The parallel between transport and digital infrastructure is compelling at the theoretical level, but direct empirical evidence on the degree of similarity in the underlying mechanisms -- particularly the labor reallocation channel for digital networks -- remains limited.

## Empirical Signatures

The endogenous infrastructure mechanism implies three empirical signatures that distinguish it from models with exogenous trade costs. First, the transport employment share rises during periods of rapid spatial transformation, reflecting the growing demand for interregional trade as production becomes more spatially concentrated. This signature is evident in the rising tertiary employment share in both the England and Wales data ([[trew-2020-endogenous-infrastructure]]) and, by analogy, in the growth of the information and communications technology sector in China ([[liu-zhang-cai-2026-network-infrastructure]]).

Second, infrastructure investment is concentrated in regions with growing industrial output. In the England and Wales model, infrastructure improvements cluster around the northern industrial hotspot, declining in locations where output is stagnant. This pattern is consistent with the historical record of local financing for turnpikes, canals, and railways in precisely the regions where industrial demand emerged.

Third, trade costs decline fastest in regions experiencing both output growth and infrastructure investment, generating a negative correlation between the rate of trade-cost decline and initial income or productivity levels. [[allen-arkolakis-2014-trade-topography]] find that geographic location explains at least 20 percent of the spatial variation in U.S. incomes, but in a static framework without endogenous infrastructure. The endogenous mechanism suggests that this share could evolve over the course of development as infrastructure responds to the geography of production.

## Cross-links

- Concepts: [[quantitative-spatial-equilibrium]], [[gravity-in-spatial-economics]]
- Mechanisms: [[spatial-innovation-and-structural-transformation]], [[capital-labor-dynamics-and-spatial-convergence]], [[firm-level-frictions-and-spatial-misallocation]]
- Synthesis: [[network-infrastructure-and-market-integration]], [[trade-and-migration-cost-reductions-in-china]]
- Major sources: [[trew-2020-endogenous-infrastructure]], [[desmet-rossi-hansberg-2014-spatial-development]], [[liu-zhang-cai-2026-network-infrastructure]], [[allen-arkolakis-2014-trade-topography]]
