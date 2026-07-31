---
title: "Quantitative Spatial Economics"
type: source
authors:
  - Stephen J. Redding
  - Esteban Rossi-Hansberg
year: 2017
slug: redding-rossi-hansberg-2017-quantitative-spatial
tags:
  - spatial economics
  - economic geography
  - quantitative models
  - agglomeration
  - cities
  - trade
  - gravity equation
  - market access
  - commuting
  - migration
raw_markdown: raw_markdown/papers/redding-rossi-hansberg-2017-quantitative-spatial.md
status: draft
---

# Quantitative Spatial Economics (2017)

> **Survey article** — reviews the development of quantitative models of economic geography that are rich enough to incorporate first-order features of the data (many heterogeneous locations, gravity-equation trade and commuting flows) yet tractable enough to undertake realistic general-equilibrium counterfactual exercises for transport infrastructure, place-based policies, and other spatial interventions.

Raw markdown: [[raw_markdown/papers/redding-rossi-hansberg-2017-quantitative-spatial]]

## Research Question

How can theoretical models of economic geography be made quantitatively relevant — capable of explaining the observed uneven distribution of economic activity across space, identifying the relative strength of agglomeration and dispersion forces, and generating credible predictions for the effects of policy interventions such as transport infrastructure investments, local taxation, and land regulation?

## Model / Experimental Design

The paper is a **survey and synthesis**, not an original empirical or theoretical paper. It provides an extensive taxonomy of the building blocks of quantitative spatial models and works through two canonical frameworks:

1. **Multi-region new economic geography model** (Section 3): A system of regions linked by costly goods trade (iceberg costs) and perfect labor mobility. Based on Helpman (1998), it features monopolistic competition, increasing returns, CES preferences with love of variety, residential land as a fixed local factor, and common preferences. The model is solved analytically (existence/uniqueness under the condition σ(1-α) > 1, following Allen & Arkolakis 2014), inverted to recover unobserved productivities and land supplies from observed populations and wages, and used for counterfactuals via the exact-hat-algebra approach of Dekle, Eaton & Kortum (2007). A quantitative illustration on a 30×30 grid with two countries simulates external and internal trade liberalisation.

2. **Canonical urban model** (Section 4): The internal structure of a single city, following Lucas & Rossi-Hansberg (2002) and Ahlfeldt et al. (2015). Features homogeneous goods, perfect competition, constant returns, costly commuting, idiosyncratic Frechet-distributed preferences, endogenous productivity from production externalities (knowledge spillovers), endogenous amenities from residential externalities, and commercial/residential land use. Bilateral commuting flows follow a gravity equation.

## Main Results

The paper distils five substantive general insights from the quantitative spatial literature:

1. **Market access is a causal determinant of the spatial distribution of activity.** The mechanism accounts for approximately one-third of the decline in West German border cities after division (Redding & Sturm 2008). Without the US railroad network built up to 1890, agricultural land values would have been about 60% lower (Donaldson & Hornbeck 2016).

2. **Canonical urban models account quantitatively for observed within-city gradients.** Estimated production externalities (μ = 0.07) and residential externalities (η = 0.15) from Ahlfeldt et al. (2015) imply substantial and highly localised agglomeration forces.

3. **Spatial linkages in goods and factor markets give rise to heterogeneous treatment effects.** The local employment elasticity is not a universal parameter; it varies across locations depending on commuting networks and migration connectivity (Monte et al. 2015).

4. **Spatial frictions beyond productivity and amenities matter.** Local infrastructure, governance, and land regulation shape the distribution of economic activity (Desmet & Rossi-Hansberg 2013; Behrens et al. 2014).

5. **Economic geography shapes innovation and growth dynamics** by determining market size, which influences the profitability of local innovation (Desmet & Rossi-Hansberg 2014, 2015; Desmet et al. 2016; Nagy 2016).

The quantitative illustration in Section 3 shows that internal trade liberalisation yields welfare gains roughly five times larger than external liberalisation (1.4–2.3% vs. 0.2–0.3%).

## Mechanisms Identified

> **Survey claim** — reviews evidence on mechanisms that generate uneven spatial distributions of economic activity and the methods used to quantify them.

- **Agglomeration forces**: love of variety and increasing returns (Krugman); production externalities / knowledge spillovers (Fujita & Ogawa, Lucas & Rossi-Hansberg); input-output linkages (Krugman & Venables); thick labour markets; sharing, matching, and learning (Duranton & Puga).
- **Dispersion forces**: fixed local factors (land, housing); commuting costs; congestion in transportation; idiosyncratic preferences that reduce labour supply elasticity.
- **Market access mechanism**: both firm market access (access to consumers) and consumer market access (access to varieties) determine wages and population.
- **Gravity equation**: bilateral trade and commuting flows increase with origin/destination size and decrease with distance — a robust prediction across the entire class of models.

Links: agglomeration mechanisms, [[gravity-in-spatial-economics]], market access, knowledge spillovers

## Methods and Measures

> **Survey claim** — reviews the methodological toolkit of quantitative spatial economics.

- **Model inversion**: exactly-identified models are inverted to recover unobserved location fundamentals (productivity, amenities, quality-adjusted land) from observed data (population, wages).
- **Exact-hat algebra** (Dekle et al. 2007): counterfactuals are computed using only observed initial-equilibrium variables and the assumed change in trade costs, without solving for structural fundamentals.
- **Existence/uniqueness conditions**: spectral methods for systems of nonlinear equations (Fujimoto & Krause 1985; Allen & Arkolakis 2014) establish conditions (congestion forces dominate agglomeration forces) for a unique equilibrium.
- **Lowest-cost-route distance**: Djikstra / Fast Marching algorithms compute effective distance over heterogeneous terrain.
- **Structural estimation using natural experiments**: division of Germany (Redding & Sturm 2008), the Berlin Wall (Ahlfeldt et al. 2015), the Tennessee Valley Authority (Kline & Moretti 2014a), Indian railroads (Donaldson 2016).
- **Sufficient statistics for welfare**: the domestic trade share and population change are sufficient statistics for welfare effects of trade cost changes (analogous to Arkolakis et al. 2012).

Links: [[model-inversion-and-fundamentals-recovery]], [[exact-hat-algebra]], [[sufficient-statistics-in-spatial-models]]

## Concepts Engaged

- **Agglomeration economies**: both static (knowledge spillovers, labour pooling, input sharing) and dynamic (innovation, growth) forms.
- **Market access vs. physical geography**: disentangling the contribution of endogenous economic geography (the location of agents relative to one another) from exogenous physical geography (mountains, coasts, climate).
- **Path dependence vs. multiple equilibria**: temporary shocks can have permanent effects even in models with a unique equilibrium, through dynamic agglomeration effects and investment in local technology and infrastructure.
- **Gravity equation**: the unifying empirical regularity across trade, commuting, and migration flows.
- **Structural vs. reduced-form approaches**: the Lucas critique, external validity, and the role of general-equilibrium spatial interactions.

Links: agglomeration economies, market access, path dependence, [[gravity-in-spatial-economics]], structural estimation

## Connection to Debates

> **Survey claim** — the paper situates the quantitative spatial literature relative to the earlier new economic geography tradition and to reduced-form empirical approaches.

- **Multiple equilibria vs. uniqueness**: The earlier theoretical literature (Krugman 1991b) emphasised multiple equilibria on a featureless plain. Quantitative models often impose conditions for uniqueness (σ(1-α) > 1) to obtain determinate counterfactuals. The paper notes that whether a model exhibits multiplicity depends on its level of abstraction.
- **Reduced-form vs. structural approaches**: A key theme is that reduced-form estimates of local employment elasticities or treatment effects need not generalise across contexts because spatial linkages produce heterogeneous effects that difference-in-differences designs difference away.
- **Internal vs. external trade costs**: The quantitative illustration suggests internal (within-country) trade frictions are substantially more important for welfare than international trade frictions, challenging the traditional focus of trade policy analysis on border barriers.

Links: multiple equilibria in geography, reduced-form vs. structural, internal vs. external trade costs

## Theoretical / Empirical Significance

This paper is the definitive survey of the **quantitative spatial economics** revolution. It provides the organising taxonomy (the "menu" of building blocks) that subsequent research uses to construct, compare, and critique spatial models. Its key contributions are:

- **Methodological synthesis**: unifying models with different microfoundations (Ricardian, Armington, Krugman) under a common quantitative framework, showing their isomorphisms for gravity predictions.
- **Clarifying the identification strategy**: exactly-identified models rationalise the data by construction; overidentification and parameter estimation require additional data or exogenous variation from natural experiments.
- **Standardising the toolkit**: model inversion, exact-hat counterfactuals, sufficient-statistics welfare formulas, and uniqueness conditions are now the standard approach in quantitative spatial economics.
- **Reporting the quantitative state of knowledge**: the magnitudes of agglomeration elasticities (3–8%), production externalities (μ ≈ 0.07), residential externalities (η ≈ 0.15), and welfare effects of trade cost changes.

## Notes and Caveats

- As a survey, the paper presents no original empirical or theoretical results beyond the quantitative illustration in Section 3 (which is explicitly stylised, based on a random productivity distribution).
- The condition σ(1-α) > 1 used to guarantee uniqueness excludes the interesting range where multiple equilibria arise — a central feature of the earlier new economic geography literature.
- The paper notes several limitations of the current literature: most models are static and abstract from dynamics; most focus on goods trade rather than services; the geography of firm and worker networks is underexplored; sorting of heterogeneous agents across space needs further work.
- The quantitative spatial models reviewed are typically exactly identified, meaning they cannot be tested on the data used to parameterise them — external validation requires additional data or quasi-experimental variation.
