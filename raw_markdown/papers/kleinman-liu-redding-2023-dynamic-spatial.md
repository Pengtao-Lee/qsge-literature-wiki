# DYNAMIC SPATIAL GENERAL EQUILIBRIUM

BENNY KLEINMAN
Department of Economics, Princeton University

ERNEST LIU
Department of Economics, Princeton University

STEPHEN J. REDDING
Department of Economics and SPIA, Princeton University

We incorporate forward-looking capital accumulation into a dynamic discrete choice model of migration. We characterize the steady-state equilibrium; generalize existing dynamic exact-hat algebra techniques to incorporate investment; and linearize the model to provide an analytical characterization of the economy's transition path using spectral analysis. We show that capital and labor dynamics interact to shape the economy's speed of adjustment toward steady state. We implement our quantitative analysis using data on capital stocks, populations, and bilateral trade and migration flows for U.S. states from 1965–2015. We show that this interaction between capital and labor dynamics plays a central role in explaining the observed decline in the rate of income convergence across U.S. states and the persistent and heterogeneous impact of local shocks.

KEYWORDS: Spatial dynamics, economic geography, trade, migration.

## 1. INTRODUCTION

A CENTRAL RESEARCH QUESTION in economics is understanding the response of the spatial distribution of economic activity to fundamental shocks, such as changes in productivity. In general, this response can be gradual, because of migration frictions for mobile factors (labor), and the gradual accumulation of immobile factors (capital structures). However, a key challenge has been modeling forward-looking capital investments in economic geography models with population mobility. The reason is that investment and migration decisions in each location depend on one another, and on these decisions in all locations in all future time periods, which quickly results in a prohibitively large state space for empirically-realistic numbers of locations.

We make two main contributions. First, we develop a tractable framework for incorporating forward-looking investment into a dynamic discrete choice migration model that overcomes this challenge of a high-dimensional state space. We characterize the steady-state equilibrium and generalize existing dynamic exact-hat algebra techniques to incorcorporate investment. Second, we linearize the model to obtain a closed-form solution for the economy's transition path, in terms of an impact matrix that captures the initial impact of shocks and a transition matrix that governs the updating of the state variables. We show that the dynamic response of the economy to any shock to fundamentals can be characterized in terms of the spectral properties (the eigenvalues and eigenvectors) of this transition matrix. We use this characterization to show that the interaction between capital accumulation and migration dynamics plays a central role in the observed decline in the rate of income convergence across U.S. states and the persistent and heterogeneous impact of shocks.

To illustrate our approach as clearly as possible, we build on conventional specifications of trade, migration, and capital accumulation, and make a number of simplifying assumptions in our baseline specification. We assume a single-sector Armington (1969) model of trade, with a constant elasticity gravity equation for trade in goods. We consider a constant elasticity dynamic discrete choice model of migration following Caliendo, Dvorkin, and Parro (2019), which features a constant elasticity gravity equation for migration. We adapt a textbook macro specification of capital accumulation, in which agents choose consumption and investment to maximize intertemporal utility subject to an intertemporal budget constraint. Our main simplifying assumption is to draw a distinction between workers and landlords, as in Moll (2014). Workers make forward-looking migration decisions, but do not have access to an investment technology, and hence live “hand to mouth.” Landlords are geographically immobile, but have access to an investment technology in local capital, such as buildings and structures, and make forward-looking capital accumulation decisions. We show that this simplifying assumption allows us to incorporate forward-looking investment without introducing a prohibitively large state space.

Our framework allows for many locations that can differ in productivity and amenities, and a rich geography of bilateral trade and migration costs. Nevertheless, we derive analytical conditions for the existence and uniqueness of the steady-state equilibrium. We show that these conditions depend only on structural parameters, such as agglomeration and dispersion forces, and are invariant with respect to initial conditions. Given the observed values of the endogenous variables for an initial equilibrium somewhere along the transition path toward an unobserved steady state, we show how to use dynamic exact-hat algebra techniques to solve for the economy's transition path for any sequence of future changes in fundamentals.

We next linearize the model to obtain a closed-form solution for the economy's transition path in terms of the impact and transition matrices. Both matrices depend solely on trade and migration shares that are observed in the data and structural parameters of the model. We use an eigendecomposition of the transition matrix to show that the dynamic response of the economy's state variables to any empirical shock to productivity and amenities can be expressed as a linear combination of its response to what we term eigenshocks: a shock to fundamentals for which the initial impact on the capital and labor state variables corresponds to an eigenvector of the transition matrix. These eigenshocks have three key properties. First, we can compute them from the observed data. Second, the economy's speed of convergence to steady state for an eigenshock depends solely on the associated eigenvalue of the transition matrix, which allows us to provide an analytically sharp characterization of the determinants of the speed of convergence. Third, we can recover the loadings of any empirical shock to fundamentals on these eigenshocks from a linear projection of the empirical shocks on the eigenshocks, which allows us to use our framework to understand the impact of empirical shocks.

We apply our framework to the determinants of income convergence across U.S. states from 1965–2015 and the persistent and heterogeneous impact of local shocks. Both issues are central questions across several fields of economics. We show that the decline in the rate of income convergence across U.S. states is largely driven by initial conditions rather than changes in the pattern of shocks to fundamentals. We show that both capital and labor dynamics are important for capturing this decline in income convergence, highlighting the relevance of incorporating forward-looking investment into dynamic discrete choice models of migration. We relate both the initial gaps of the state variables from steady state and the empirical shocks to productivity and amenities over our sample period to the entire spectrum of eigencomponents. We find slow and heterogeneous rates of convergence to steady state, with an average half-life of around 20 years and a maximum half-life of around 80 years. We find that the initial gaps of the labor and capital state variables from steady-state load more heavily on eigencomponents with slow convergence to steady state, whereas the changes over time in productivity and amenities implied by the observed data load more heavily on eigencomponents with fast convergence to steady state. Together these two features drive our finding that initial conditions explain much of the decline in income convergence over time.

We use our spectral analysis to show that the speed of convergence to steady state is determined by a powerful interaction between capital accumulation and migration. Convergence toward steady state is slow when the gaps of capital and labor from steady state are positively correlated across locations, such that capital and labor tend to be either both above or both below steady state. In contrast, convergence toward steady state is fast when these gaps are negatively correlated across locations, such that capital tends to be above steady state when labor is below steady state, or vice versa. The reason is the interaction between the marginal products of the two factors in the production technology. When capital is above steady state, this raises the marginal productivity of labor, which dampens the downward adjustment of labor and migration to other locations. Similarly, when labor is above steady state, this raises the marginal productivity of capital, which retards the downwards adjustment of capital.

We also use our spectral analysis to understand the economy's response to empirical shocks, such as a decline in relative productivity in a Rust Belt state such as Michigan, or a rise in relative amenities in a Sun Belt state such as Arizona. We find an intuitive pattern in which a decline in Michigan's productivity leads to a population outflow and capital decumulation, both of which occur gradually because of migration frictions and consumption smoothing. Additionally, we find that this decline in Michigan's productivity can generate nonmonotonic transition dynamics in other states. Initially, the population shares of Michigan's neighbors increase, because workers face lower migration costs in moving to nearby states. However, as the economy gradually adjusts toward the new steady state, the population shares of Michigan's neighbors begin to decline, and can even fall below their value in the initial steady state. Intuitively, workers gradually experience favorable idiosyncratic mobility shocks for states further away, and the decline in Michigan's productivity reduces the size of its market for neighboring states, thereby reducing the attractiveness of those neighboring locations. We show that these nonmonotonic dynamics for Michigan's neighbors reflect the changing importance along the transition path of different eigencomponents with slow versus fast speeds of convergence to steady state.

We show that the tractability of our approach lends itself to a large number of extensions and generalizations. We incorporate agglomeration forces in both production and residential decisions. We show that our results hold for an entire class of constant elasticity trade models, including models of perfect competition and constant returns to scale, and models of monopolistic competition and increasing returns to scale. We generalize our approach to incorporate residential capital use (housing) and to allow landlords to invest in other locations. We extend our analysis to incorporate multiple sectors and input–output linkages.

Our research is related to several strands of existing work. First, our paper contributes to a long line of research on economic geography, following Krugman (1991), and synthesized in Fujita, Krugman, and Venables (1999). Early theoretical research in this area considered static models. More recent research on quantitative spatial models also has typically focused on such static specifications, including Redding and Sturm (2008), Allen and Arkolakis (2014), Ahlfeldt, Redding, Sturm, and Wolf (2015), Allen, Arkolakis, and Li (2016), Ramondo, Rodríguez-Clare, and Saborío-Rodríguez (2016), Redding (2016), Caliendo, Parro, Rossi-Hansberg, and Sarte (2018), and Monte, Redding, and Rossi-Hansberg (2018), as surveyed in Redding and Rossi-Hansberg (2017).

Second, the challenge of modeling the interaction between forward-looking decisions for both investment and migration has led existing economic geography research to consider specifications in which dynamic decisions reduce to static problems. In the innovation models of Desmet and Rossi-Hansberg (2014), Desmet, Nagy, and Rossi-Hansberg (2018), and Peters (2022), technology diffusion ensures that the incentive to invest in innovation each period depends on the comparison of static profits and innovation costs. In contrast, we consider an intertemporal consumption-investment problem, in which investment decisions depend on expectations about the future evolution of the spatial distribution of economic activity. $^{1}$

Third, we build on the existing literature on dynamic discrete choice models of migration, including Artuç, Chaudhuri, and McLaren (2010), Caliendo, Dvorkin, and Parro (2019), Caliendo and Parro (2020), and Allen and Donaldson (2022). In particular, Caliendo, Dvorkin, and Parro (2019) develops a quantitative general equilibrium model of trade and migration, and introduces a dynamic exact-hat methodology for undertaking counterfactuals using only the observed endogenous variables in an initial equilibrium. Additionally, Allen and Donaldson (2022) develops an overlapping-generations dynamic discrete choice migration model to study path dependence. In contrast, we incorporate forward-looking capital accumulation into a dynamic discrete choice model of migration. We show that capital and migration dynamics interact systematically with one another to shape the process of income convergence and the persistent and heterogeneous impact of local shocks.

Fourth, our research connects with dynamic models of capital accumulation and international trade, including Anderson, Larch, and Yotov (2015), Eaton, Kortum, Neiman, and Romalis (2016), Alvarez (2017), and Ravikumar, Santacreu, and Sposi (2019). While each of these papers introduces forward-looking investment decisions, a key difference from our economic geography setting is that labor is assumed to be immobile across countries in international trade models. We show how to introduce a conventional macro specification of capital accumulation into an economic geography environment, while preserving analytical tractability, and overcoming the challenge of a high-dimensional state space. Our characterization of capital and labor dynamics uses techniques from the Dynamic Stochastic General Equilibrium (DSGE) literature following Blanchard and Kahn (1980) and Uhlig (1999). Relative to that literature, we consider a much higher-dimensional state space, and transition dynamics depend on the entire spectrum of eigencomponents, because each eigencomponent captures a different pattern of productivity and amenity shocks across locations. $^{2}$

Fifth, our paper is related to research on regional convergence, including Barro and Sala-i-Martin (1992), Kim (1995), Mitchener and McLean (1999), and Ganong and Shoag (2017). While early studies found a strong negative relationship between the rate of growth and initial level of income per capita ( $\beta$ -convergence), more recent research has documented a decline in rates of income convergence over time. As in closed-economy growth models, our framework incorporates capital accumulation as a key force for regional income convergence. Unlike these closed-economy growth models, we incorporate bilateral migration and goods trade as two important additional forces that shape regional income convergence across U.S. states.

Finally, our work also connects with the empirical literature that has established persistent impacts of local labor market shocks, including Blanchard and Katz (1992), Autor, Dorn, and Hanson (2013, 2023), and Dix-Carneiro and Kovak (2017). For example, Dix-Carneiro and Kovak (2017) provides empirical evidence that Brazil's trade liberalization in the late 1980s continued to affect local labor market outcomes for more than 20 years afterwards because of the downward adjustment in complementary capital investments. Our dynamic spatial model provides a theoretical rationalization for these empirical findings: the outmigration of workers from regions experiencing negative shocks induces a gradual decline in the complementary capital stock, which in turn induces a further outmigration of workers.

The remainder of the paper is structured as follows. In Section 2, we introduce our baseline quantitative spatial model. We characterize the steady-state equilibrium and generalize existing dynamic exact-hat algebra approaches to solve for the transition path of the full nonlinear model. In Section 3, we linearize the model, and provide an analytical characterization of the economy's transition path using spectral analysis. In Section 4, we show that our framework admits many extensions, including agglomeration forces, multiple sectors, and input–output linkages. In Section 5, we implement our baseline single-sector specification for U.S. states from 1965–2015, and our multisector extension for the shorter period from 1999–2015 for which sectoral data are available. In Section 6, we summarize our conclusions. The paper is accompanied by a short Appendix in the Online Supplementary Material (Kleinman, Liu, and Redding (2023)), which contains the derivations of our main results, and a longer Online Supplement, which contains further derivations and empirical results, and can be accessed together with our replication files.

## 2. DYNAMIC SPATIAL MODEL

We consider an economy with many locations indexed by $i \in \{1, \ldots, N\}$ . Time is discrete and is indexed by t. There are two types of infinitely-lived agents: workers and landlords. Workers are endowed with one unit of labor that is supplied inelastically and are geographically mobile subject to migration costs. Workers do not have access to an investment technology, and hence live “hand to mouth,” as in Kaplan and Violante (2014). Landlords are geographically immobile and own the capital stock in their location. They make forward-looking decisions over consumption and investment in this local stock of capital. We interpret capital as buildings and structures, which are geographically immobile once installed, and depreciate gradually at a constant rate $\delta$ . We make this simplifying distinction between mobile workers and immobile landlords to incorporate forward-looking investment without having to keep track of the entire sequence of locations in which agents have lived when solving their intertemporal consumption-investment problem.

TABLE I
ECONOMIC ENVIRONMENT.

<table><tr><td colspan="2">Production</td></tr><tr><td>Production technology</td><td> $y_{it} = z_{it} \left( \frac{\ell_{it}}{\mu} \right)^{\mu} \left( \frac{k_{it}}{1-\mu} \right)^{1-\mu}$ </td></tr><tr><td>Bilateral trade costs</td><td> $\tau_{nit} \geq 1$ </td></tr><tr><td colspan="2">Worker Preferences and Migration</td></tr><tr><td>Worker value function</td><td> $\mathbb{V}_{it}^{w} = \ln u_{it}^{w} + \max_{\{g\}_{1}^{N}} \{\beta \mathbb{E}_{t}[\mathbb{V}_{gt+1}^{w}] - \kappa_{git} + \rho \epsilon_{gt}\}$ </td></tr><tr><td>Worker instantaneous utility</td><td> $u_{nt}^{w} = b_{nt} [\sum_{i=1}^{N} (c_{nit}^{w})^{\frac{\theta}{\theta+1}}]^{\frac{\theta+1}{\theta}}$ </td></tr><tr><td>Bilateral migration costs</td><td> $\kappa_{git} \geq 1$ </td></tr><tr><td>Labor market clearing</td><td> $\sum_{i=1}^{N} \ell_{it} = 1$ </td></tr><tr><td colspan="2">Landlord Preferences and Capital Accumulation</td></tr><tr><td>Landlord intertemporal preferences</td><td> $v_{nt}^{k} = \mathbb{E}_{t} \sum_{s=0}^{\infty} \beta^{t+s} \frac{(c_{nt+s}^{k})^{1-1/\psi}}{1-1/\psi}$ </td></tr><tr><td>Landlord instantaneous utility</td><td> $c_{nt}^{k} = [\sum_{i=1}^{N} (c_{nit}^{k})^{\frac{\theta}{\theta+1}}]^{\frac{\theta+1}{\theta}}$ </td></tr><tr><td>Capital accumulation</td><td> $k_{nt+1} = (1 - \delta) k_{nt} + \sum_{i=1}^{N} \iota_{nit}^{k}$ </td></tr><tr><td colspan="2">Goods Market Clearing</td></tr><tr><td>Goods market clearing</td><td> $y_{it} = \sum_{n=1}^{N} (c_{nit}^{w} + c_{nit}^{k}) + \sum_{n=1}^{N} \iota_{nit}^{k}$ </td></tr></table>

Note: Preferences, production technology, and resource constraints in the model; $\theta = \sigma - 1 > 0$ is the trade elasticity, as determined by the elasticity of substitution $(\sigma)$ ; $\iota_{nit}^{k}$ denotes the use for investment by landlords in location $n$ of the consumption good produced by location $i$ at time $t$ ; and all other variables are defined in the main text.

The endogenous state variables are the population $(\ell_{it})$ and capital stock $(k_{it})$ in each location. The key location characteristics that determine the spatial distribution of economic activity are the sequences of productivity $(z_{it})$ , amenities $(b_{it})$ , bilateral trade costs $(\tau_{nit})$ , and bilateral migration costs $(\kappa_{nit})$ . Without loss of generality, we normalize the total population across all locations to one $(\sum_{i=1}^{N}\ell_{it}=1)$ , so that $\ell_{it}$ can also be interpreted as the population share of location i at time t. Throughout the paper, we use bold math font to denote a vector (lowercase letters) or matrix (uppercase letters). We summarize the main features of the model's economic environment in Table I above. The derivations for all expressions and results in this section are reported in Online Appendix B.

Throughout this section, we focus on shocks to productivities $(z_{it})$ and amenities $(b_{it})$ , and assume that these location characteristics are exogenous. We abstract from shocks to trade and migration costs, agglomeration forces, multiple sectors, input–output linkages, residential capital, and nonemployment. In Section 4 below, we show that the tractability of our approach lends itself to a large number of generalizations, including each of these extensions.

## 2.1. Production

At the beginning of each period t, the economy inherits in each location i a mass of workers $(\ell_{it})$ and a capital stock $(k_{it})$ . Firms in each location use labor and capital to produce output $(y_{it})$ of the variety supplied by that location. Production is assumed to occur under conditions of perfect competition and subject to the following constant returns to scale technology:

$$
y _ {i t} = z _ {i t} \bigg (\frac {\ell_ {i t}}{\mu} \bigg) ^ {\mu} \bigg (\frac {k _ {i t}}{1 - \mu} \bigg) ^ {1 - \mu}, 0 <   \mu <   1,\tag{1}
$$

where $z_{it}$ denotes productivity in location $i$ at time $t$ .

We assume that trade between locations is subject to iceberg variable trade costs, such that $\tau_{nit} \geq 1$ units of a good must be shipped from location i in order for one unit to arrive in location n, where $\tau_{nit} > 1$ for $n \neq i$ and $\tau_{iit} = 1$ . From profit maximization, the cost to a consumer in location n of sourcing the good produced by location i depends solely on these iceberg trade costs and constant marginal costs:

$$
p _ {n i t} = \tau_ {n i t} p _ {i i t} = \frac {\tau_ {n i t} w _ {i t} ^ {\mu} r _ {i t} ^ {1 - \mu}}{z _ {i t}},\tag{2}
$$

where $p_{iit}$ is the “free on board” price of the good supplied by location i before trade costs.

We choose the total labor income of all locations as our numeraire: $\sum_{i=1}^{N} w_{it} \ell_{it} = 1$ .

## 2.2. Worker Consumption

Worker preferences within each period t are modeled as in the standard Armington model of trade with constant elasticity of substitution (CES) preferences. As workers do not have access to an investment technology, they spend their wage income and choose their consumption of varieties to maximize their utility each period. The flow utility function of a worker in location n in period t depends on amenities $(b_{nt})$ and the consumption index $(c_{nt}^{w})$ defined over the varieties supplied by each location:

$$
u _ {n t} ^ {w} = b _ {n t} c _ {n t} ^ {w}, \quad c _ {n t} ^ {w} = \left[ \sum_ {i = 1} ^ {N} \left(c _ {n i} ^ {w}\right) ^ {\frac {\theta}{\theta + 1}} \right] ^ {\frac {\theta + 1}{\theta}}, \theta = \sigma - 1, \sigma > 1,\tag{3}
$$

where we use the superscript $w$ to denote workers, $\sigma > 1$ is the constant elasticity of substitution, and $\theta = \sigma - 1 > 0$ is the trade elasticity. The corresponding indirect utility function is defined over amenities $(b_{nt})$ , the worker's wage $(w_{nt})$ , and the dual price index $(p_{nt})$ that depends on the price of the variety sourced from each location $i$ ( $p_{nit}$ ):

$$
u _ {n t} ^ {w} = \frac {b _ {n t} w _ {n t}}{p _ {n t}}, \quad p _ {n t} = \left[ \sum_ {i = 1} ^ {N} p _ {n i t} ^ {- \theta} \right] ^ {- 1 / \theta}.\tag{4}
$$

## 2.3. Capital Accumulation

Landlords in each location choose their consumption and investment to maximize their intertemporal utility subject to their budget constraint. Landlords' intertemporal utility equals the expected present discounted value of their flow utility:

$$
v _ {i t} ^ {k} = \mathbb {E} _ {t} \sum_ {s = 0} ^ {\infty} \beta^ {t + s} \frac {(c _ {i t + s} ^ {k}) ^ {1 - 1 / \psi}}{1 - 1 / \psi},\tag{5}
$$

where we use the superscript k to denote landlords; the consumption index $(c_{it}^{k})$ takes the same form as in equation (3), $\beta$ is the discount rate, and $\psi$ is the intertemporal elasticity of substitution. Since landlords are geographically immobile, we omit the term in amenities from their flow utility, because this does not affect the equilibrium in any way, and hence is without loss of generality.

We assume that the investment technology in each location uses the varieties from all locations with the same functional form as consumption. Landlords can produce one unit of capital in their location using one unit of the consumption index in that location. We interpret capital as buildings and structures, which are geographically immobile once installed. Capital is assumed to depreciate at the constant rate $\delta$ and we allow for the possibility of negative investment.

The intertemporal budget constraint for landlords in each location requires that total income from the existing stock of capital $(r_{it}k_{it})$ equals the total value of their consumption $(p_{it}c_{it}^{k})$ plus the total value of net investment $(p_{it}(k_{it+1}-(1-\delta)k_{it}))$ :

$$
r _ {i t} k _ {i t} = p _ {i t} \left(c _ {i t} ^ {k} + k _ {i t + 1} - (1 - \delta) k _ {i t}\right).\tag{6}
$$

We begin by establishing a key property of landlords' optimal consumption-investment decisions. We use $R_{it} \equiv 1 - \delta + r_{it} / p_{it}$ to denote the gross return on capital.

LEMMA 1: The optimal consumption of location $i$ 's landlords satisfies $c_{it} = \mathfrak{s}_{it}R_{it}k_{it}$ , where $\mathfrak{s}_{it}$ is defined recursively as

$$
\boldsymbol {s} _ {i t} ^ {- 1} = 1 + \beta^ {\psi} \big (\mathbb {E} _ {t} \big [ R _ {i t + 1} ^ {\frac {\psi - 1}{\psi}} \boldsymbol {s} _ {i t + 1} ^ {- \frac {1}{\psi}} \big ] \big) ^ {\psi}.
$$

Landlords' optimal saving and investment decisions satisfy $k_{it+1} = (1 - \mathfrak{s}_{it})R_{it}k_{it}$ .

Lemma 1 shows that landlords have a linear saving rate $(1 - s_{it})$ out of current period wealth $R_{it}k_{it}$ , as in Angeletos (2007). In general, landlords' saving rate $(1 - s_{it})$ is endogenous and forward-looking, and depends on the expectation of the sequence of future returns on capital $\{R_{it+s}\}$ , the discount rate $\beta$ , and the intertemporal elasticity of substitution $\psi$ . In the special case of log-utility $(\psi = 1)$ , landlords have a constant saving rate $\beta$ (i.e., $k_{it+1} = \beta R_{it} k_{it}$ ), as in the conventional Solow–Swan model and Moll (2014).

We assumed above that capital is geographically immobile once installed, and that landlords can only invest in their own location, which generates gradual adjustment in local capital because of consumption smoothing. While adjustment costs provide an alternative potential explanation for the gradual adjustment of local capital, our approach is analytically tractable, and for standard values of model parameters involves only small differences across locations in the real rental rate in terms of the consumption good $(r_{it}/p_{it})$ along the transition path to steady state, as shown in the Online Supplement S.6.4. In steady state, even though the capital-labor ratio $(k_{i}^{*}/\ell_{i}^{*})$ can differ across locations, there is a common real rental rate in terms of the consumption good across all locations $(r_{i}^{*}/p_{i}^{*})$ .³ In Online Supplement S.4.8, we develop an extension, in which we allow landlords to invest in other locations subject to financial frictions, and bilateral investment flows satisfy a gravity equation.

## 2.4. Worker Migration Decisions

After supplying labor and spending wage income on consumption in each period t, workers observe idiosyncratic mobility shocks $(\epsilon_{gt})$ , and decide where to move. The value function for a worker in location i in period t ( $V_{it}^{w}$ ) is equal to the current flow of utility in that location plus the expected continuation value from the optimal choice of location:

$$
\mathbb {V} _ {i t} ^ {w} = \ln u _ {i t} ^ {w} + \max _ {\{g \} _ {1} ^ {N}} \bigl \{\beta \mathbb {E} _ {t} \bigl [ \mathbb {V} _ {g t + 1} ^ {w} \bigr ] - \kappa_ {g i t} + \rho \epsilon_ {g t} \bigr \},\tag{7}
$$

where $\beta$ is the discount rate, and $E_{t}[\cdot]$ denotes the expectation in period t over future location characteristics. We assume log utility for workers, because they live hand-to-mouth, and hence there is no role for the intertemporal elasticity of substitution in their consumption decisions. We make the conventional assumption that idiosyncratic mobility shocks are drawn from an extreme value distribution with CDF $F(\epsilon)=e^{-e^{(-\epsilon-\overline{\gamma})}}$ , where $\overline{\gamma}$ is the Euler–Mascheroni constant; the parameter $\rho$ controls the dispersion of idiosyncratic mobility shocks; and we assume that bilateral migration costs satisfy $\kappa_{iit}=1$ and $\kappa_{nit}>1$ for $n\neq i$ .

## 2.5. Market Clearing

Goods market clearing implies that income in each location, which equals the sum of the income of workers and landlords, is equal to expenditure on the goods produced by that location:

$$
\left(w _ {i t} \ell_ {i t} + r _ {i t} k _ {i t}\right) = \sum_ {n = 1} ^ {N} S _ {n i t} \left(w _ {n t} \ell_ {n t} + r _ {n t} k _ {n t}\right),\tag{8}
$$

where we begin by assuming that trade is balanced, before later extending our analysis to incorporate trade imbalances in Section 4.

Capital market clearing implies that the rental rate for capital is determined by the requirement that landlords' income from the ownership of capital equals payments for its use. Using profit maximization and zero profits, this capital market clearing condition is given by

$$
r _ {i t} k _ {i t} = \frac {1 - \mu}{\mu} w _ {i t} \ell_ {i t}.\tag{9}
$$

## 2.6. General Equilibrium

Given the state variables $\{\ell_{i0}, k_{i0}\}$ , the general equilibrium of the economy is the stochastic process of allocations and prices such that firms in each location choose inputs to maximize profits, workers make consumption and migration decisions to maximize utility, landlords make consumption and investment decisions to maximize utility, and prices clear all markets, with the appropriate measurability constraint with respect to the realizations of location fundamentals. For expositional clarity, we collect the equilibrium conditions and express them in terms of a sequence of five endogenous variables $\{\ell_{it}, k_{it}, w_{it}, R_{it}, v_{it}\}_{t=0}^{\infty}$ . All other endogenous variables of the model can be recovered as a function of these variables.

## 2.6.1. Capital Returns and Accumulation

Using capital market clearing (9), the gross return on capital in each location i must satisfy

$$
R _ {i t} = \bigg (1 - \delta + \frac {1 - \mu}{\mu} \frac {w _ {i t} \ell_ {i t}}{p _ {i t} k _ {i t}} \bigg),
$$

where the price index (4) of each location becomes

$$
p _ {n t} = \left[ \sum_ {i = 1} ^ {N} \left(w _ {i t} \left(\frac {1 - \mu}{\mu}\right) ^ {1 - \mu} \left(\ell_ {i t} / k _ {i t}\right) ^ {1 - \mu} \tau_ {n i} / z _ {i}\right) ^ {- \theta} \right] ^ {- 1 / \theta}.\tag{10}
$$

The law of motion for capital is

$$
k _ {i t + 1} = (1 - \mathsf {s} _ {i t}) \left(1 - \delta + \frac {1 - \mu}{\mu} \frac {w _ {i t} \ell_ {i t}}{p _ {i t} k _ {i t}}\right) k _ {i t},\tag{11}
$$

where $(1 - s_{it})$ is the saving rate defined recursively as in Lemma 1:

$$
\boldsymbol {s} _ {i t} ^ {- 1} = 1 + \beta^ {\psi} \big (\mathbb {E} _ {t} \big [ R _ {i t + 1} ^ {\frac {\psi - 1}{\psi}} \boldsymbol {s} _ {i t + 1} ^ {- \frac {1}{\psi}} \big ] \big) ^ {\psi}.
$$

## 2.6.2. Goods Market Clearing

Using the CES expenditure share, the equilibrium pricing rule $(2)$ , and the capital market clearing condition $(9)$ in the goods market clearing condition $(8)$ , the requirement that income equals expenditure on the goods produced by a location can be written solely in terms of labor income:

(12)

$$
\begin{array}{l} w _ {i t} \ell_ {i t} = \sum_ {n = 1} ^ {N} S _ {n i t} w _ {n t} \ell_ {n t}, \\ S _ {n i t} = \frac {\left(w _ {i t} (\ell_ {i t} / k _ {i t}) ^ {1 - \mu} \tau_ {n i} / z _ {i}\right) ^ {- \theta}}{\sum_ {m = 1} ^ {N} \left(w _ {m t} (\ell_ {m t} / k _ {m t}) ^ {1 - \mu} \tau_ {n m} / z _ {m}\right) ^ {- \theta}}, \qquad T _ {i n t} \equiv \frac {S _ {n i t} w _ {n t} \ell_ {n t}}{w _ {i t} \ell_ {i t}}, \end{array}\tag{13}
$$

where we have used the property that capital income is a constant multiple of labor income, $S_{nit}$ is the expenditure share of importer n on exporter i at time t, we have defined $T_{int}$ as the corresponding income share of exporter i from importer n at time t, and note that the order of subscripts switches between the expenditure share ( $S_{nit}$ ) and the income share ( $T_{int}$ ), because the first and second subscripts will correspond below to rows and columns of a matrix, respectively.

## 2.6.3. Worker Value Function

Using the value function (7), indirect utility function (3) and the properties of the extreme value distribution, the expected value from living in location n at time t after taking expectations with respect to the idiosyncratic mobility shocks $\{\epsilon_{gt}\}$ (i.e., $v_{nt}^{w} \equiv E_{\epsilon}[\mathbb{V}_{nt}^{w}]$ ), can

be written as

$$
v _ {n t} ^ {w} = \ln b _ {n t} + \ln \left(\frac {w _ {n t}}{p _ {n t}}\right) + \rho \ln \sum_ {g = 1} ^ {N} \left(\exp \left(\beta \mathbb {E} _ {t} v _ {g t + 1} ^ {w}\right) / \kappa_ {g n t}\right) ^ {1 / \rho},\tag{14}
$$

where the expectation $\mathbb{E}_t[v_{gt + 1}^w] = \mathbb{E}_t\mathbb{E}_\epsilon [\mathbb{V}_{nt + 1}^w ]$ is taken over future fundamentals $\{z_{is},b_{is}\}_{s = t + 1}^{\infty}$ .

## 2.6.4. Population Flow

Using the properties of the extreme value distribution, the population flow condition for the evolution of the population distribution over time is given by

$$
\ell_ {g t + 1} = \sum_ {i = 1} ^ {N} D _ {i g t} \ell_ {i t},\tag{15}
$$

$$
D _ {i g t} = \frac {\left(\exp \left(\beta \mathbb {E} _ {t} v _ {g t + 1} ^ {w}\right) / \kappa_ {g i t}\right) ^ {1 / \rho}}{\sum_ {m = 1} ^ {N} \left(\exp \left(\beta \mathbb {E} _ {t} v _ {m t + 1} ^ {w}\right) / \kappa_ {m i t}\right) ^ {1 / \rho}}, \qquad E _ {g i t} \equiv \frac {\ell_ {i t} D _ {i g t}}{\ell_ {g t + 1}},\tag{16}
$$

where $D_{igt}$ is the outmigration probability from location i to location g between time t and $t+1$ ; we have defined $E_{git}$ as the corresponding immigration probability to location g from location i between time t and $t+1$ . Again note that the order of subscripts switches between the outmigration probability ( $D_{igt}$ ) and the immigration probability ( $E_{git}$ ), because the first and second subscripts will correspond below to rows and columns of a matrix, respectively.

## 2.6.5. Properties of General Equilibrium

Given the state variables $\{\ell_{it}, k_{it}\}$ and the realized location fundamentals $\{z_{it}, b_{it}\}$ , the general equilibrium in each period is determined as in a standard static international trade model. Between periods, the evolution of the stock of capital $\{k_{it}\}$ is determined by the equilibrium saving rate, and the dynamics of the population distribution $\{\ell_{it}\}$ are determined by the gravity equation for migration. We now formally define equilibrium.

DEFINITION 1—Equilibrium: Given the state variables $\{\ell_{i0}, k_{i0}\}$ in each location in an initial period $t = 0$ , an equilibrium is a stochastic process of wages, capital returns, expected values, mass of workers, and stock of capital in each location $\{w_{it}, R_{it}, v_{it}, \ell_{it+1}, k_{it+1}\}_{t=0}^{\infty}$ measurable with respect to the fundamental shocks up to time $t$ ( $\{z_{is}, b_{is}\}_{s=1}^{t}$ ), and solves the value function (14), the population flow condition (15), the goods market clearing condition (12), and the capital market clearing and accumulation condition (11), with the saving rate determined by Lemma 1.

We define a deterministic steady-state equilibrium as one in which the fundamentals $\{z_{i}^{*}, b_{i}^{*}\}$ and the endogenous variables $\{\ell_{i}^{*}, k_{i}^{*}, w_{i}^{*}, R_{i}^{*}, v_{i}^{*}\}$ are constant over time, where we use an asterisk to denote the steady-state value of variables.

DEFINITION 2—Steady State: A steady state of the economy is an equilibrium in which all location-specific fundamentals and endogenous variables (wages, expected values, mass of workers, and stock of capital in each location) are time invariant: $\{z_{i}^{*}, b_{i}^{*}, \ell_{i}^{*}, k_{i}^{*}, w_{i}^{*}, R_{i}^{*}, v_{i}^{*}\}$ .

We now provide a sufficient condition for the existence of a unique steady-state equilibrium in terms of the properties of a coefficient matrix $(A)$ of model parameters $\{\psi, \theta, \beta, \rho, \mu, \delta\}$ following the approach of Allen, Arkolakis, and Li (2020).

PROPOSITION 1—Existence and Uniqueness: A sufficient condition for the existence of a unique steady-state spatial distribution of economic activity $\{\ell_{i}^{*}, k_{i}^{*}, w_{i}^{*}, R_{i}^{*}, v_{i}^{*}\}$ (up to a choice of units) given time-invariant locational fundamentals $\{z_{i}^{*}, b_{i}^{*}, \tau_{ni}^{*}, \kappa_{ni}^{*}\}$ is that the spectral radius of a coefficient matrix (A) of model parameters $\{\psi, \theta, \beta, \rho, \mu, \delta\}$ is less than or equal to one.

PROOF: See Online Appendix B.2.

Q.E.D.

## 2.6.6. Trade and Migration Share Matrices

We now introduce the trade and migration share matrices that we use to characterize the model's transition dynamics in response to shocks to fundamentals. Let $S$ be the $N \times N$ matrix with the $n$ th element equal to importer $n$ 's expenditure on exporter $i$ . Let $T$ be the $N \times N$ matrix with the $in$ th element equal to the fraction of income that exporter $i$ derives from selling to importer $n$ . We refer to $S$ as the expenditure share matrix and to $T$ as the income share matrix. Intuitively, $S_{ni}$ captures the importance of $i$ as a supplier to location $n$ , and $T_{in}$ captures the importance of $n$ as a buyer for country $i$ . Note the order of subscripts: in matrix $S$ , rows are buyers and columns are suppliers, whereas in matrix $T$ , rows are suppliers and columns are buyers.

Similarly, let D be the $N \times N$ matrix with the nth element equal to the share of outmigrants from origin n to destination i. Let E be the $N \times N$ matrix with the inth element equal to the share of immigrants to destination i from origin n. We refer to D as the outmigration matrix and to E as the immigration matrix. Intuitively, $D_{ni}$ captures the importance of i as a destination for origin n, and $E_{in}$ captures the importance of n as an origin for destination i. Again note the order of subscripts: in matrix D, rows are origins and columns are destinations, whereas in matrix E, rows are destinations and columns are origins. $^{4}$

## 2.6.7. Dynamic Exact-Hat Algebra

We now generalize existing dynamic exact-hat algebra results for undertaking counterfactuals under perfect foresight in migration models from Caliendo, Dvorkin, and Parro (2019) to incorporate forward-looking investment decisions. We suppose that we observe the spatial distribution of economic activity somewhere along the transition path toward an unobserved steady state. Given the initial observed endogenous variables of the model, we show that we able to solve for the economy's transition path in time differences $(\dot{x}_{t + 1} = x_{t + 1} / x_t)$ for any anticipated convergent sequence of future changes in fundamentals, without having to solve for the unobserved initial level of fundamentals.

PROPOSITION 2—Dynamic Exact-Hat Algebra: Given an initial observed allocation of the economy, $(\{l_{i0}\}_{i=1}^{N}, \{k_{i0}\}_{i=1}^{N}, \{k_{i1}\}_{i=1}^{N}, \{S_{ni0}\}_{n,i=1}^{N}, \{D_{ni,-1}\}_{n,i=1}^{N})$ , and a convergent sequence of future changes in fundamentals under perfect foresight:

$$
\left\{\{\dot {z} _ {i t} \} _ {i = 1} ^ {N}, \{\dot {b} _ {i t} \} _ {i = 1} ^ {N}, \{\dot {\tau} _ {i j t} \} _ {i, j = 1} ^ {N}, \{\dot {\kappa} _ {i j t} \} _ {i, j = 1} ^ {N} \right\} _ {t = 1} ^ {\infty},
$$

the solution for the sequence of changes in the model's endogenous variables does not require information on the level of fundamentals:

$$
\left\{\{z _ {i t} \} _ {i = 1} ^ {N}, \{b _ {i t} \} _ {i = 1} ^ {N}, \{\tau_ {i j t} \} _ {i, j = 1} ^ {N}, \{\kappa_ {i j t} \} _ {i, j = 1} ^ {N} \right\} _ {t = 0} ^ {\infty}.
$$

PROOF: See Online Appendix B.3.

Q.E.D.

Intuitively, we use the initial observed endogenous variables and the equilibrium conditions of the model to control for the unobserved initial level of fundamentals. From this proposition, we can use dynamic exact-hat algebra methods to solve for the unobserved initial steady state in the absence of any further changes in fundamentals. We can also use this approach to solve counterfactuals for the transition path of the spatial distribution of economic activity in response to assumed sequences of future changes in fundamentals. $^{5}$

In addition to these dynamic exact-hat algebra results in Proposition 2, we can invert the model to solve for the unobserved changes in productivity, amenities, trade costs, and migration costs that are implied by the observed changes in the endogenous variables of the model under perfect foresight, as shown in Online Supplement S.2.1. Importantly, we can undertake this model inversion along the transition path without making assumptions about the precise sequence of future fundamentals, because the observed changes in migration flows and the capital stock capture agents' expectations about this sequence of future fundamentals.

## 3. SPECTRAL ANALYSIS

To further understand the roles of capital and labor dynamics, we now linearize the model to provide an analytical characterization of the economy's transition path using spectral analysis. Throughout this section, we focus for expositional convenience on shocks to productivity and amenities, but show that our approach generalizes to incorporate shocks to migration and trade costs in Section 4 below.

In Section 3.1, we totally differentiate the general equilibrium conditions of the model, and derive a linearized system of equations that fully characterizes the transition path of the economy up to first order. We solve this linearized system in closed form under a wide range of different assumptions about agents' expectations. To illustrate our approach as clearly as possible, we begin in Section 3.2 by considering the simplest case in which agents learn about a one-time unanticipated shock to fundamentals. In Section 3.3, we provide further intuition for our approach by considering the special case of two symmetric regions. In Section 3.4, we show that our approach also accommodates the case in which agents learn about any expected convergent sequence of future shocks to fundamentals under perfect foresight, and the case in which agents observe an initial shock to fundamentals and form rational expectations about future shocks based on a known stochastic process for fundamentals.

For each specification, we show that the closed-form solution for the transition path depends on an impact matrix, which captures the initial impact of the shocks to fundamentals on the state variables in the period in which they occur, and a transition matrix, which governs the updating of the state variables over time. The impact and transition matrices only depend on the structural parameters of the model and the observed matrices of expenditure shares (S), income shares (T), outmigration shares (D) and immigration shares (E), and hence provide first-order sufficient statistics for the economy's transition path.

Using an eigendecomposition of the transition matrix, we show that both the rate of convergence to steady state and the evolution of the state variables along the transition path can be written solely in terms of the eigenvalues and eigenvectors of the transition matrix. We use this spectral representation to show that the rate of convergence to steady state is slow and heterogeneous, and to demonstrate that capital accumulation and migration interact to shape the persistent and heterogeneous impact of local shocks.

## 3.1. Transition Path

We suppose that we observe the state variables $\{\ell_t, k_t\}$ and the trade and migration share matrices $\{S, T, D, E\}$ of the economy at time $t = 0$ . The economy need not be in steady state at $t = 0$ , but we assume that it is on a convergence path toward a steady state with constant fundamentals $\{z, b, \kappa, \tau\}$ . We refer to the steady state implied by these initial fundamentals as the initial steady state. We use a tilde above a variable to denote a log deviation from the initial steady state (e.g., $\widetilde{\ell}_{it+1} = \ln \ell_{it+1} - \ln \ell_i^*$ ) for all variables except for the worker value function, for which with a slight abuse of notation we use the tilde to denote a deviation in levels ( $\widetilde{v}_{it} \equiv v_{it} - v_i^*$ ).

We begin by totally differentiating the general equilibrium conditions of the model around the unobserved initial steady state, holding constant the aggregate labor endowment, trade costs, and migration costs. We thus derive the following system of linear equations that fully characterizes the economy's transition path up to first order:

$$
\begin{array}{c} \widetilde {\boldsymbol {p}} _ {t} = S \big (\widetilde {\boldsymbol {w}} _ {t} - \widetilde {\boldsymbol {z}} _ {t} - (1 - \mu) (\widetilde {\boldsymbol {k}} _ {t} - \widetilde {\boldsymbol {\ell}} _ {t}) \big), \\ \widetilde {\boldsymbol {k}} _ {t + 1} = \widetilde {\boldsymbol {k}} _ {t} + \big (1 - \beta (1 - \delta) \big) (\widetilde {\boldsymbol {w}} _ {t} - \widetilde {\boldsymbol {p}} _ {t} - \widetilde {\boldsymbol {k}} _ {t} + \widetilde {\boldsymbol {\ell}} _ {t}) \\ + \big (1 - \beta (1 - \delta) \big) \frac {1 - \beta}{\beta} (\psi - 1) \end{array}\tag{17}
$$

$$
\times \mathbb {E} _ {t} \sum_ {s = 1} ^ {\infty} \beta^ {s} (\widetilde {\boldsymbol {w}} _ {t + s} - \widetilde {\boldsymbol {p}} _ {t + s} - \widetilde {\boldsymbol {k}} _ {t + s} + \widetilde {\boldsymbol {\ell}} _ {t + s}),\tag{18}
$$

$$
\left[ \boldsymbol {I} - \boldsymbol {T} + \theta (\boldsymbol {I} - \boldsymbol {T S}) \right] \widetilde {\boldsymbol {w}} _ {t} = \left[ - (\boldsymbol {I} - \boldsymbol {T}) \widetilde {\ell} _ {t} + \theta (\boldsymbol {I} - \boldsymbol {T S}) \left(\widetilde {\boldsymbol {z}} _ {t} + (1 - \mu) \left(\widetilde {\boldsymbol {k}} _ {t} - \widetilde {\ell} _ {t}\right)\right) \right],\tag{19}
$$

$$
\widetilde {\ell} _ {t + 1} = E \widetilde {\ell} _ {t} + \frac {\beta}{\rho} (I - E D) \mathbb {E} _ {t} \widetilde {\boldsymbol {v}} _ {t + 1},\tag{20}
$$

$$
\widetilde {\boldsymbol {v}} _ {t} = \widetilde {\boldsymbol {w}} _ {t} - \widetilde {\boldsymbol {p}} _ {t} + \widetilde {\boldsymbol {b}} _ {t} + \beta D \mathbb {E} _ {t} \widetilde {\boldsymbol {v}} _ {t + 1},\tag{21}
$$

as shown in Online Appendix B.4.4.

In this system of linear equations, there are no terms in the change in the trade and migration share matrices, because these terms are second order in the underlying Taylor-series expansion, involving interactions between the changes in productivity and amenities and the resulting changes in trade and migration shares. As we consider first-order changes in productivity and amenities, these second-order, nonlinear terms drop out of the linearization. Therefore, we can write the trade and migration share matrices with no time subscript $(S, T, D, E)$ for first-order changes in productivity and amenities. In our empirical analysis below, we show that we find similar results from our spectral analysis whether we use the observed trade and migration share matrices or the implied steady-state matrices.

## 3.2. Transition Dynamics for a One-Time Shock

As an illustration of our approach, we begin by solving for the economy's transition path in response to a one-time shock. We suppose that agents learn at time $t = 0$ about a one-time, unexpected, and permanent change in productivity and amenities from time $t = 1$ onwards. Under this assumption, we can write the sequence of future fundamentals (productivities and amenities) relative to the initial level as $(\widetilde{z}_t, \widetilde{b}_t) = (\widetilde{z}, \widetilde{b})$ for $t \geq 1$ , and we can drop the expectation operator in the system of equations (18) through (21).

## 3.2.1. System of Second-Order Difference Equations

In Online Appendices B.4.4–B.4.5, we show that the model's transition dynamics can be reduced to the following linear system of second-order difference equations in the state variables:

$$
\boldsymbol {\Psi} \widetilde {x} _ {t + 2} = \boldsymbol {\Gamma} \widetilde {x} _ {t + 1} + \boldsymbol {\Theta} \widetilde {x} _ {t} + \boldsymbol {\Pi} \widetilde {f},\tag{22}
$$

where $\widetilde{x}_{t}=\left[\frac{\widetilde{\ell}_{t}}{\widetilde{k}_{t}}\right]$ is a $2N\times1$ vector of the state variables; $\widetilde{f}=\left[\frac{\widetilde{z}}{\widetilde{b}}\right]$ is a $2N\times1$ vector of the shocks to fundamentals; and $\Psi,\Gamma,\Theta$ , and $\Pi$ are $2N\times2N$ matrices that only depend on the structural parameters of the model $\{\psi,\theta,\beta,\rho,\mu,\delta\}$ and the observed trade and migration share matrices $\{S,T,D,E\}$ .

We solve this matrix system of equations using the method of undetermined coefficients following Uhlig (1999) to obtain a closed-form solution for the economy's transition path in terms of an impact matrix $(\pmb{R})$ , which captures the initial impact of the fundamental shocks, and a transition matrix $(\pmb{P})$ , which governs the evolution of the state variables over time. Specifically, one can show that the $4N\times 4N$ matrix $\left[ \begin{array}{cc}\Psi & 0\\ 0 & I \end{array} \right]^{-1}\left[ \begin{array}{cc}\Gamma & \Theta \\ I & 0 \end{array} \right]$ has eigenvectors of the form $[\lambda_k\pmb{u}_k,\pmb{u}_k]'$ , where $\{\lambda_k\}$ are the corresponding eigenvalues, and $\{\pmb{u}_k\}$ are $2N\times 1$ vectors. If the eigenvalues are stable ( $|\lambda_k| < 1$ ), the linearized system has a unique stable transition path (see, e.g., Dejong and Dave (2011)).

PROPOSITION 3—Transition Path: Suppose that the economy at time t=0 is on a convergence path toward an initial steady state with constant fundamentals $(z, b, \kappa, \tau)$ . At time t=0, agents learn about one-time, permanent shocks to productivity and amenities $(\widetilde{f}=\left[\frac{\widetilde{z}}{\widetilde{b}}\right])$ from time t=1 onwards. There exists a $2N\times2N$ transition matrix $(P)$ and a $2N\times2N$ impact matrix $(R)$ such that the second-order difference equation system in (22) has a closed-form solution of the form:

$$
\widetilde {\boldsymbol {x}} _ {t + 1} = \boldsymbol {P} \widetilde {\boldsymbol {x}} _ {t} + \boldsymbol {R} \widetilde {\boldsymbol {f}} \quad f o r t \geq 0.\tag{23}
$$

## The transition matrix P satisfies

$$
\boldsymbol {P} = \boldsymbol {U} \boldsymbol {\Lambda} \boldsymbol {U} ^ {- 1},
$$

where $\Lambda$ is a diagonal matrix of 2N stable eigenvalues $\{\lambda_{k}\}_{k=1}^{2N}$ and U is a matrix stacking the corresponding 2N eigenvectors $\{u_{k}\}_{k=1}^{2N}$ . The impact matrix (R) is given by

$$
\boldsymbol {R} = (\boldsymbol {\Psi} \boldsymbol {P} + \boldsymbol {\Psi} - \boldsymbol {\Gamma}) ^ {- 1} \boldsymbol {\Pi},
$$

where $(\Psi, \Gamma, \Theta, \Pi)$ are the matrices from the system of second-order difference equations (22).

PROOF: See the Online Appendix B.4.6.

Q.E.D.

The solutions for these matrices $(P, R)$ depend only on the structural parameters of the model and the observed trade and migration share matrices $(S, T, D, E)$ .

## 3.2.2. Convergence Dynamics versus Fundamental Shocks

Using this closed-form solution in Proposition 3, the transition path of the economy's state variables can be additively decomposed into the contributions of convergence dynamics given initial conditions and fundamental shocks. Applying equation (23) across time periods, we obtain

$$
\ln \boldsymbol{x}_{t} - \ln \boldsymbol{x}_{-1} = \underbrace{\sum_{s = 0}^{t}\boldsymbol{P}^{s}(\ln \boldsymbol{x}_{0} - \ln \boldsymbol{x}_{-1})}_{\substack{\text{convergence given}\\ \text{initial fundamentals}}} + \underbrace{\sum_{s = 0}^{t - 1}\boldsymbol{P}^{s}\boldsymbol{R}\widetilde{\boldsymbol{f}}}_{\substack{\text{dynamics from}\\ \text{fundamental shocks}}}\quad \text{for all} t\geq 1.\tag{24}
$$

In the absence of shocks to fundamentals $(\tilde{f}=\mathbf{0})$ , the second term on the right-hand side of equation (24) is zero. In this case, the evolution of the state variables is shaped solely by convergence dynamics given initial conditions, and converges over time to

$$
\ln \boldsymbol {x} _ {\text { initial }} ^ {*} = \lim _ {t \rightarrow \infty} \ln \boldsymbol {x} _ {t} = \ln \boldsymbol {x} _ {- 1} + (\boldsymbol {I} - \boldsymbol {P}) ^ {- 1} (\ln \boldsymbol {x} _ {0} - \ln \boldsymbol {x} _ {- 1}),\tag{25}
$$

where $(\pmb{I} - \pmb{P})^{-1} = \sum_{s=0}^{\infty} \pmb{P}^{s}$ is well-defined under the condition that the spectral radius of $\pmb{P}$ is smaller than one.

In contrast, if the economy is initially in a steady state at time 0, the first term on the right-hand side of equation (24) is zero. In this case, the transition path of the state variables is solely driven by the second term for fundamental shocks, and follows:

$$
\widetilde {\boldsymbol {x}} _ {t} = \ln \boldsymbol {x} _ {t} - \ln \boldsymbol {x} _ {0} = \sum_ {s = 0} ^ {t - 1} \boldsymbol {P} ^ {s} \boldsymbol {R} \widetilde {\boldsymbol {f}} = (\boldsymbol {I} - \boldsymbol {P} ^ {t}) (\boldsymbol {I} - \boldsymbol {P}) ^ {- 1} \boldsymbol {R} \widetilde {\boldsymbol {f}} \quad \text { for   all } t \geq 1.\tag{26}
$$

In the period $t = 1$ when the shocks occur, the response of the state variables is $\widetilde{x}_1 = R\widetilde{f}$ . Taking the limit as $t \to \infty$ in equation (26), the comparative steady-state response is

$$
\lim _ {t \rightarrow \infty} \widetilde {\boldsymbol {x}} _ {t} = \ln \boldsymbol {x} _ {\text { new }} ^ {*} - \ln \boldsymbol {x} _ {\text { initial }} ^ {*} = (\boldsymbol {I} - \boldsymbol {P}) ^ {- 1} R \widetilde {\boldsymbol {f}}.\tag{27}
$$

A key implication of this additive separability in equation (24) is that we can examine the economy's dynamic response to fundamental shocks separately from its convergence towards an initial steady state with unchanged fundamentals. Therefore, without loss of generality, we focus in the remainder of this section on an economy that is initially in steady state.

## 3.2.3. Spectral Analysis of the Transition Matrix

We now provide a further analytical characterization of the roles of capital and labor dynamics in shaping the economy's gradual adjustment to shocks using a spectral analysis of the transition matrix. We show that both the speed of convergence to steady state and the evolution of the state variables along the transition path to steady state can be written solely in terms of the eigenvalues and eigenvectors of this transition matrix.

3.2.3.1. Eigendecomposition of the Transition Matrix. We use the eigendecomposition of the transition matrix, $P \equiv U \Lambda V$ , where $\Lambda$ is a diagonal matrix of eigenvalues arranged in decreasing order by absolute values, and $V = U^{-1}$ . For each eigenvalue $\lambda_{h}$ , the hth column of $U(u_{h})$ and the hth row of $V(\mathbf{v}_{h}^{\prime})$ are the corresponding right and left eigenvectors of P, respectively, such that

$$
\lambda_ {h} \pmb {u} _ {h} = \pmb {P} \pmb {u} _ {h}, \qquad \lambda_ {h} \pmb {v} _ {h} ^ {\prime} = \pmb {v} _ {h} ^ {\prime} \pmb {P}.
$$

That is, $\boldsymbol{u}_{h}\left(\boldsymbol{v}_{h}^{\prime}\right)$ is the vector that, when left-multiplied (right-multiplied) by P, is proportional to itself but scaled by the corresponding eigenvalue $\lambda_{h}$ .⁸ We refer to $u_{h}$ simply as eigenvectors. Both $\{u_{h}\}$ and $\{v_{h}^{\prime}\}$ are bases that span the 2N-dimensional vector space.

3.2.3.2. Eigenshock. We next introduce a particular type of shock to fundamentals that proves useful for characterizing the model's transition dynamics. We define an eigenshock as a nonzero shock to productivity and amenities $(\widetilde{\boldsymbol{f}}_{(h)})$ for which the initial impact of these shocks on the state variables $(\boldsymbol{R}\widetilde{\boldsymbol{f}}_{(h)})$ coincides with a real eigenvector of the transition matrix $(\boldsymbol{u}_{h})$ or the zero vector. Generically, the eigenshocks $\{\widetilde{\boldsymbol{f}}_{(h)}\}_{h=1}^{2N}$ form a basis that spans the 2N-dimensional shock space. Each eigenvector of P with a nonzero eigenvalue $(|\lambda_{h}|>0)$ has a corresponding eigenshock for which $R\widetilde{\boldsymbol{f}}_{(h)}=\boldsymbol{u}_{h}$ . We refer to such as eigenvector with a nonzero eigenvalue as “nontrivial,” because it affects the dynamics of the state variables. Additionally, P has an eigenvector $u_{1}=[1,\ldots,1,0,\ldots,0]$ with a zero eigenvalue $(\lambda_{1}=0)$ , because population shares sum to one, and thus one of the 2N dimensions of the state space is redundant. The corresponding fundamental shock $\widetilde{\boldsymbol{f}}_{(1)}$ is the vector of a common amenity shock to all locations. Such a common amenity shock affects worker flow utility, but does not affect any prices or quantities in the equilibrium, and thus is trivial in the sense that it does not affect the dynamics of the state variables. We use the index 1 for this trivial eigencomponent.

In general, there is no reason why an empirical shock should correspond to an eigenshock. But we can use these eigenshocks to characterize the impact of any empirical shock using the following two properties. First, we can solve for these eigenshocks from the observed data, because the impact matrix $(\boldsymbol{R})$ and the transition matrix $(\boldsymbol{P})$ depend solely on our observed trade and migration share matrices $(S, T, D, E)$ and the structural parameters of the model $\{\psi, \theta, \beta, \rho, \mu, \delta\}$ . Second, any empirical productivity and amenity shocks $(\widetilde{f})$ can be expressed as a linear combination of the eigenshocks $(\widetilde{f}_{(h)})$ , where the weights or loadings in this linear combination can be recovered from a linear projection (regression) of the observed shocks $(\widetilde{f})$ on the eigenshocks $(\widetilde{f}_{(h)})$ . Using this property, the transition path of the state variables in response to any empirical productivity and amenity shocks can be expressed solely in terms of the eigenvalues and eigenvectors of the transition matrix, as summarized in the following proposition.

PROPOSITION 4: Spectral Analysis. Consider an economy that is initially in steady state at time t=0 when agents learn about one-time, permanent shocks to productivity and amenities ( $\widetilde{f}=\left[\frac{\widetilde{z}}{\widetilde{b}}\right]$ ) from time t=1 onwards. The transition path of the state variables can be written as a linear combination of the eigenvalues ( $\lambda_{h}$ ) and eigenvectors ( $u_{h}$ ) of the transition matrix:

$$
\widetilde {\boldsymbol {x}} _ {t} = \sum_ {s = 0} ^ {t - 1} \boldsymbol {P} ^ {s} \boldsymbol {R} \widetilde {\boldsymbol {f}} = \sum_ {h = 1} ^ {2 N} \frac {1 - \lambda_ {h} ^ {t}}{1 - \lambda_ {h}} \boldsymbol {u} _ {h} \boldsymbol {v} _ {h} ^ {\prime} \boldsymbol {R} \widetilde {\boldsymbol {f}} = \sum_ {h = 2} ^ {2 N} \frac {1 - \lambda_ {h} ^ {t}}{1 - \lambda_ {h}} \boldsymbol {u} _ {h} a _ {h},\tag{28}
$$

where the weights in this linear combination $(a_{h})$ can be recovered as the coefficients in a linear projection (regression) of the observed shocks $(\widetilde{\boldsymbol{f}})$ on the eigenshocks $(\widetilde{\boldsymbol{f}}_{(h)})$ .

PROOF: The proposition follows from the eigendecomposition of the transition matrix: $P \equiv U\Lambda V$ , as shown in Online Appendix B.4.9. Q.E.D.

Additionally, the speed of convergence to steady state for an eigenshock, as measured by the half-life of convergence to steady state, depends solely on the associated eigenvalue of the transition matrix, as summarized in the following proposition.

PROPOSITION 5—Speed of Convergence: Consider an economy that is initially in steady state at time t=0 when agents learn about one-time, permanent shocks to productivity and amenities ( $\widetilde{f}=\left[\frac{\widetilde{z}}{b}\right]$ ) from time t=1 onwards. Suppose that these shocks are a nontrivial eigenshock ( $\widetilde{f}_{(h)}$ ), for which the initial impact on the state variables at time t=1 coincides with a real eigenvector ( $u_{h}$ ) of the transition matrix (P): $R\widetilde{f}_{(h)}=u_{h}$ . The transition path of the state variables ( $x_{t}$ ) in response to such an eigenshock ( $\widetilde{f}_{(h)}$ ) is

$$
\widetilde {\boldsymbol {x}} _ {t} = \sum_ {j = 2} ^ {2 N} \frac {1 - \lambda_ {j} ^ {t}}{1 - \lambda_ {j}} \boldsymbol {u} _ {j} \boldsymbol {v} _ {j} ^ {\prime} \boldsymbol {u} _ {h} = \frac {1 - \lambda_ {h} ^ {t}}{1 - \lambda_ {h}} \boldsymbol {u} _ {h} \quad \Longrightarrow \quad \ln \boldsymbol {x} _ {t + 1} - \ln \boldsymbol {x} _ {t} = \lambda_ {h} ^ {t} \boldsymbol {u} _ {h},
$$

and the half-life of convergence to steady state is given by

$$
t _ {h} ^ {(1 / 2)} (\widetilde {\boldsymbol {f}}) = - \left\lceil \frac {\ln 2}{\ln \lambda_ {h}} \right\rceil ,
$$

for all state variables $h = 2, \ldots, 2N$ , where $\widetilde{x}_{i\infty} = x_{i,\mathrm{new}}^* - x_{i,\mathrm{initial}}^*$ , and $[\cdot]$ is the ceiling function. The trivial eigenshock with an associated eigenvalue of zero has a zero half-life.

PROOF: The proposition follows from the eigendecomposition of the transition matrix $(P \equiv U\Lambda V)$ , for the case of a nontrivial eigenshock in which the initial impact of the shocks to productivity and amenities on the state variables at time t = 1 coincides with a real eigenvector $(R\widetilde{f}_{(h)} = u_h)$ of the transition matrix $(P)$ , as shown in Online Appendix B.4.9.

Q.E.D.

From Proposition 5, the impact of a nontrivial eigenshock $(\widetilde{f}_{(h)})$ on the state variables in each time period is always proportional to the corresponding eigenvector $(\boldsymbol{u}_h)$ , and decays exponentially at a rate determined by the associated eigenvalue $(\lambda_h)$ , as the economy converges to the new steady state. These eigenvalues fully summarize the economy's speed of convergence in response to eigenshocks, even in our setting with a high-dimensional state space, a rich geography of trade and migration costs, and multiple sources of dynamics.

In general, each eigenshock $(\widetilde{f}_{(h)})$ has a different speed of convergence (as captured by the associated eigenvalue $\lambda_{h}$ ), which reflects the fact that the speed of convergence to steady state does not only depend on the structural parameters $\{\psi, \theta, \beta, \rho, \mu, \delta\}$ , but also on the incidence of the shock on the labor and capital state variables in each location (as captured by $u_{h} = R\widetilde{f}_{(h)}$ ). From Proposition 4, any empirical shock $(\widetilde{f})$ can be expressed as a linear combination of the eigenshocks. Therefore, the speed of convergence also varies across these empirical shocks, depending on their incidence on the labor and capital state variables in each location.

## 3.3. Two-Location Example

We now illustrate our spectral analysis using a simple example of two symmetric locations that begin in steady state. Location symmetry and trade and migration frictions imply that the expenditure and migration share matrices $(S \text{ and } D)$ are symmetric and diagonal-dominant, with T = S and E = D.

We suppose that at time t=0 agents learn about one-time, permanent shocks to productivity and amenities, captured by the vector $\widetilde{f}=\left[\frac{\widetilde{z}}{b}\right]$ in log-deviations from the initial steady-state values. We now implement our spectral analysis for this symmetric two-location example in three steps. In Step 1, we write the dynamic response of the state variables, in log-deviations from the initial steady-state values, $\widetilde{x}_{t}\equiv\left[\frac{\ln\ell_{t}-\ln\ell^{*}}{\ln k_{t}-\ln k^{*}}\right]$ , using Proposition 3:

$$
\widetilde {\boldsymbol {x}} _ {t + 1} = \boldsymbol {P} \widetilde {\boldsymbol {x}} _ {t} + \boldsymbol {R} \widetilde {\boldsymbol {f}} \quad \text { for } t \geq 0, \text { with } \widetilde {\boldsymbol {x}} _ {0} = \mathbf {0}.\tag{29}
$$

Therefore, the initial impact of the fundamental shock $\tilde{f}$ is governed by the impact matrix $(\pmb{R})$ :

$$
\widetilde {x} _ {1} = R \widetilde {f}.
$$

The subsequent updating of the state variables is regulated by the transition matrix $(P)$ :

$$
\widetilde {\boldsymbol {x}} _ {t + 1} - \widetilde {\boldsymbol {x}} _ {t} = \boldsymbol {P} ^ {t} \widetilde {\boldsymbol {x}} _ {1} \quad \text { for   all } t \geq 0.
$$

Since each location has two state variables (its population share and capital stock), the transition matrix $(\boldsymbol{P})$ is $4 \times 4$ . Likewise, because each location is subject to two shocks (productivity and amenities), the impact matrix $(\boldsymbol{R})$ is $4 \times 4$ .

In Step 2, we express this dynamic response of the state variables in terms of eigenvectors and eigenvalues of the transition matrix $(P)$ using Proposition 4. First, we rewrite the recursive formulation in equation (29) in sequence form: $\widetilde{\pmb{x}}_t = (\sum_{s=0}^{t-1} \pmb{P}^s) R\widetilde{f}$ . Second, we use our eigendecomposition of $P$ to rewrite the summation over iterative powers of $P$ as a summation over components of the eigenbasis of $P$ :

$$
\widetilde {\pmb {x}} _ {t} = \sum_ {h = 1} ^ {4} \frac {1 - \lambda_ {h} ^ {t}}{1 - \lambda_ {h}} \pmb {u} _ {h} \pmb {v} _ {h} ^ {\prime} \pmb {R} \widetilde {\pmb {f}},\tag{30}
$$

where $u_{h}$ , $v_{h}^{\prime}$ , and $\lambda_{h}$ are respectively the hth right eigenvector, left eigenvector, and eigenvalue of P. This representation makes clear that the dynamic response of the state variables can be expressed in terms of the initial impact of the shocks to fundamentals ( $\widetilde{x}_{1}=R\widetilde{f}$ ) and the eigencomponents of the transition matrix.

In Step 3, we write the impact of an empirical shock on the state variables $(R\widetilde{f})$ as a linear combination of the eigenshocks, using Proposition 5. First, we define a nontrivial eigenshock (denoted as $\widetilde{f}_{(h)}$ ) as a shock to fundamentals for which the initial impact of the shock on the state variables $(R\widetilde{f}_{(h)})$ corresponds to a right eigenvector of the transition matrix $(\boldsymbol{u}_{h})$ . For such a nontrivial eigenshock, the dynamic impact on the state variables can be fully characterized by the hth eigencomponent alone: $^{10}$

$$
\widetilde {\boldsymbol {x}} _ {t + 1} - \widetilde {\boldsymbol {x}} _ {t} | _ {\widetilde {f} = \widetilde {f} _ {(h)}} = \lambda_ {h} ^ {t} \boldsymbol {u} _ {h}, \quad \widetilde {\boldsymbol {x}} _ {t} | _ {\widetilde {f} = \widetilde {f} _ {(h)}} = \frac {1 - \lambda_ {h} ^ {t}}{1 - \lambda_ {h}} \boldsymbol {u} _ {h},\tag{31}
$$

and the rate of convergence to the new steady state depends only on the corresponding eigenvalue $\lambda_{h}$ . The larger the value of this eigenvalue, the slower the rate of convergence to steady state. Second, we use the property that the impact of any empirical shock $(\boldsymbol{R}\widetilde{\boldsymbol{f}})$ can be written as a linear combination of the impact of the eigenshocks $(\boldsymbol{R}\widetilde{\boldsymbol{f}}=\sum_{i=1}^{2N}a_{i}\boldsymbol{R}\widetilde{\boldsymbol{f}}_{(i)})$ , where we can recover the weights in this linear combination $(a_{i})$ from a regression of the empirical shock on the eigenshocks. We are thus able to characterize the impact of any empirical shock on the state variables using our eigendecomposition.

In general, the eigenvectors and eigenvalues of P depend not only on the model parameters $(\psi, \theta, \beta, \rho, \mu, \delta)$ but also on the entire trade and migration matrices $(S, T, D, E)$ . However, in this symmetric two-location example, the four eigenvectors of the transition matrix $(P)$ take the following simple form:

$$
\left[ \begin{array}{c} 1 \\ 1 \\ 0 \\ 0 \end{array} \right], \qquad \left[ \begin{array}{c} 0 \\ 0 \\ 1 \\ 1 \end{array} \right], \qquad \left[ \begin{array}{c} 1 \\ - 1 \\ \zeta \\ - \zeta \end{array} \right], \qquad \left[ \begin{array}{c} 1 \\ - 1 \\ - \xi \\ \xi \end{array} \right],\tag{32}
$$

for some constants $\zeta$ , $\xi$ that depend on the model parameters and the trade and migration share matrices (S = T, D = E), as shown in Online Appendix B.4.10. These four vectors span the four-dimensional vector space.

We now show that these eigenvectors of P have an intuitive interpretation. The first eigenvector $u_{1} = [1, 1, 0, 0]'$ has an associated eigenvalue of zero and a corresponding eigenshock of $[\widetilde{z}_{1}, \widetilde{z}_{2}, \widetilde{b}_{1}, \widetilde{b}_{2}] = [0, 0, 1, 1]'$ . This trivial eigenshock captures a common amenity shock to both locations that leaves population shares and capital stocks unchanged. The associated eigenvalue is equal to zero, since the initial and new steady state coincide, such that there is immediate convergence with no transitional dynamics.

The second eigenvector $u_{2}=[0,0,1,1]^{\prime}$ has an associated eigenshock of $[\widetilde{z}_{1},\widetilde{z}_{2},\widetilde{b}_{1},\widetilde{b}_{2}]=[1,1,0,0]^{\prime}$ . This eigencompont captures a common productivity shock to both locations. By symmetry, this common productivity shock leaves population shares unchanged, such that the first two entries in the eigenvector $(u_{2})$ are equal to zero. But this common productivity shock leads to a symmetric reduction in the consumer price index (and hence the cost of capital) in both locations, which affects capital dynamics in both locations symmetrically, such that the third and fourth entries in the eigenvector $(u_{2})$ are identical. In this symmetric example, capital dynamics in response to this common productivity shock are the same as they would be in a single location closed economy. The eigenvalue of this component can be characterized analytically. In the special case in which landlords have a unitary elasticity of intertemporal substitution (logarithmic utility), the corresponding eigenvalue is $[1-(1-\beta(1-\delta))\mu]$ .

The remaining two eigenvectors capture shocks that are asymmetric across locations. The third eigenvector $u_{3} = [1, -1, \zeta, -\zeta]'$ is associated with an eigenshock $[\widetilde{z}_{1}, \widetilde{z}_{2}, \widetilde{b}_{1}, \widetilde{b}_{2}] = [1, -1, c, -c]'$ , where c is a constant. The fourth eigenvector $u_{4} = [1, -1, -\xi, \xi]'$ is associated with an eigenshock $[1, -1, -d, d]'$ , where d is again a constant. In both cases, the deviations of the state variables from steady state in location 1 take the same absolute value, but have the opposite sign to the deviations of the state variables from steady state for location 2.

Although we cannot theoretically sign the constants $\zeta$ , $\xi$ , c, d, we find numerically that all of these parameters are positive for realistic parameter values. Under these sign restrictions, one of these eigenvectors $(\boldsymbol{u}_{3})$ captures the case in which productivity and amenity shocks are positively correlated across locations, and the other eigenvector $(\boldsymbol{u}_{4})$ captures the case in which they are negatively correlated. Therefore, the third eigenvector $(\boldsymbol{u}_{3})$ captures the case in which a location either receives productivity and amenity shocks that are both positive (1 and c) or both negative (-1 and -c). In this case, the new steady-state values of the labor and capital state variables are both above their initial values in the location that experiences positive shocks, and both below their initial values in the location that experiences negative shocks. The initial response of the economy, as reflected in the eigenvector $u_{3}$ , is to move both state variables in the direction of the new steady state.

In contrast, the fourth eigenvector $(\boldsymbol{u}_{4})$ captures the case in which productivity and amenity shocks are negatively correlated across locations. Therefore, each location experiences productivity and amenity shocks that are of the opposite sign to one another. Consequently, the new steady state features a higher population share but a lower capital stock in one location, and a lower population share but a higher capital stock in the other location. In all of our numerical simulations, we find that the eigenvalue for the third eigenvector $(\boldsymbol{u}_{3})$ is greater than that for the fourth eigenvector $(\boldsymbol{u}_{4})$ . Therefore, the economy experiences slower convergence to steady state if productivity and amenity shocks are positively correlated across locations. The reason is the interaction between the marginal productivities of capital and labor in the production technology. When both capital and labor are above steady state, the high capital stock raises the marginal product of labor, which retards the downward adjustment of labor. Similarly, the high labor supply increases the marginal product of capital, which dampens the downward adjustment of capital. When both capital and labor are below steady state, an analogous logic applies, as the low value of each state variable slows the upward adjustment in the other state variable.

Finally, any pattern of productivity and amenity shocks across the two symmetric locations can be captured by a linear combination of these four types of shocks: a common amenity shock across both locations, a common productivity shock across both locations, productivity and amenity shocks that are perfectly positively correlated across locations, and productivity and amenity shocks that are perfectly negatively correlated across locations. We show below that the same qualitative insights from this symmetric two-location special case hold in the quantitative analysis of the full model with many asymmetric locations.

## 3.4. Transition Dynamics for Sequences of Shocks

Although for simplicity we have focused in the main text above on transition dynamics for a one-time shock, our approach generalizes to sequences of shocks.

In Proposition S.1 in Online Supplement S.2.3, we provide the closed-form solution for the economy's transition path for any convergent sequence of future shocks to productivities and amenities under perfect foresight. In Proposition S.2 in Online Supplement S.2.4, we provide the closed-form solution for the economy's transition path for the case in which agents observe an initial shock to fundamentals and form rational expectations about future shocks based on a known stochastic process for fundamentals. Most previous research on dynamic spatial models has focused on perfect foresight, because of the challenges of solving nonlinear dynamic models in the presence of expectational errors. However, our linearization allows us to accommodate these expectational errors and preserve a closed-form solution for the transition path.

In each case, the solution to the second-order difference equation (22) depends on the transition matrix $\pmb{P}$ and impact matrix $\pmb{R}$ , which can be recovered from the observed trade and migration matrices $\{S, T, D, E\}$ and the model's structural parameters $\{\psi, \theta, \beta, \rho, \mu, \delta\}$ .

## 4. EXTENSIONS

The tractability of our dynamic spatial model allows for a large number of generalizations. In Online Supplement S.4.1, we report the generalization of the matrix system in equations (17)-(21) above to include shocks to bilateral trade and migration costs.

In Online Supplement S.4.2, we show that our dynamic spatial model also generalizes to admit agglomeration forces, such that productivity and amenities have both exogenous and endogenous components, such that $z_{it} = \bar{z}_{it} \ell_{it}^{\eta^{z}}$ and $b_{it} = \overline{b}_{it} \ell_{it}^{\eta^{b}}$ .¹¹ Again, we provide a sufficient condition for the existence of a unique steady-state equilibrium in terms of the properties of a coefficient matrix ( $A^{Agg}$ ) of model parameters $\{\psi, \theta, \beta, \rho, \mu, \delta, \eta^{z}, \eta^{b}\}$ . As the strength of agglomeration forces becomes small ( $\eta^{z}, \eta^{b} \to 0$ ), this sufficient condition reduces to that in Proposition 1 above.

PROPOSITION 6: A sufficient condition for the existence of a unique steady-state spatial distribution of economic activity $\{\ell_i^*, k_i^*, w_i^*, R_i^*, v_i^*\}$ (up to a choice of units) given time-invariant locational fundamentals $\{\overline{z}_i^*, \overline{b}_i^*, \tau_{ni}^*, \kappa_{ni}^*\}$ is that the spectral radius of a coefficient matrix ( $A^{\mathrm{Agg}}$ ) of model parameters $\{\psi, \theta, \beta, \rho, \mu, \delta, \eta^z, \eta^b\}$ is less than or equal to one.

PROOF: See Online Supplement S.4.2.3.

Q.E.D.

Our dynamic spatial model also can be extended to incorporate multiple sectors and input–output linkages. In Online Supplement S.4.3, we consider a multisector extension, in which installed capital is specific to a location, but mobile across sectors within locations. In contrast, in Online Supplement S.4.4, we consider the case in which installed capital is specific to both a location and sector. In Online Supplement S.4.5, we further generalize these multisector specifications to allow for input–output linkages.

In our baseline specification, we model trade between locations as in Armington (1969), in which goods are differentiated by location of origin. In Online Supplement S.3, we establish a number of isomorphisms, in which we show that our results hold throughout the class of trade models with a constant trade elasticity. In Online Supplement S.4.6, we incorporate trade deficits following the conventional approach of the quantitative international trade literature of treating these deficits as exogenous. In Online Supplement S.4.7, we allow capital to be used residentially (for housing) as well as commercially (in production). In Online Supplement S.4.8, we allow landlords to invest in other locations subject to bilateral investment costs and idiosyncratic heterogeneity in the productivity of these investments, which generates a gravity equation for financial flows. In Online Supplement S.4.9, we incorporate a labor participation decision.

In each of these extensions, both our generalization of dynamic exact-hat algebra methods to incorporate forward-looking investment and our spectral analysis continue to apply.

## 5. QUANTITATIVE ANALYSIS

We now use our theoretical framework to provide new evidence on the process of income convergence and the persistent and heterogeneous impact of local shocks in the United States. Both issues are the subject of large empirical literatures in economics. However, the existing literature on income convergence typically abstracts from migration and trade between locations, both of which are central features of the data on U.S. states. In contrast, the literature on the persistent and heterogeneous impact of local shocks allows for migration, but typically abstracts from forward-looking investment in local buildings and structures, even though these buildings and structures are central features of the world around us, and there is a large literature on capital accumulation in macroeconomics.

In our baseline specification, we consider a version of our single-sector model, augmented to take account of the empirically-relevant distinction between traded and non-traded goods. $^{12}$ In Section 5.1, we discuss our data sources and the parameterization of the model. In Section 5.2, we provide evidence of a decline in rates of convergence in income per capita across U.S. states since the early 1960s. In Section 5.3, we examine the extent to which this observed decline in income convergence is explained by initial conditions versus fundamental shocks, and quantify the respective contributions of capital and labor dynamics.

In Section 5.4, we use our spectral analysis to provide evidence on the speed of convergence to steady state and the role of the interaction between capital and labor dynamics in shaping the persistent and heterogeneous impact of local shocks. In Section 5.5, we summarize the results of implementing our multisector extension for the shorter period from 1999–2015 for which data by sector and region are available, as discussed further in Online Supplement S.6.8.

## 5.1. Data and Parameterization

Our main source of data for our baseline quantitative analysis from 1965–2015 is the national economic accounts of the Bureau of Economic Analysis (BEA), which report population, gross domestic product (GDP), and the capital stock for each U.S. state. $^{13}$ We focus on the 48 contiguous U.S. states plus the District of Columbia, excluding Alaska and Hawaii, because they only became U.S. states in 1959 close to the beginning of our sample period, and could be affected by idiosyncratic factors as a result of their geographical separation. We distinguish four broad geographical groupings of states: Rust Belt, Sun Belt, Other Northern, and Other Southern states. $^{14}$ We deflate GDP and the capital stock to express them in constant (2012) prices.

We use data on bilateral 5-year migration flows between U.S. states from the U.S. population census from 1960–2000 and from the American Community Survey (ACS) after 2000. We define a period in the model as equal to 5 years to match these observed data. We interpolate between census decades to obtain 5-year migration flows for each year of our sample period. To take account of international migration to each state and fertility/mortality differences across states, we adjust these migration flows by a scalar for each origin and destination state, such that origin population in year t premultiplied by the migration matrix equals destination population in year $t + 1$ , as required for internal consistency.

We construct the value of bilateral shipments between U.S. states from the Commodity Flow Survey (CFS) from 1993–2017 and its predecessor the Commodity Transportation Survey (CTS) for 1977. We again interpolate between reporting years and extrapolate the data backwards in time before 1977 using relative changes in the income of origin and destination states, as discussed in further detail in Online Supplement S.7. For our baseline quantitative analysis with a single traded and nontraded sector, we abstract from direct shipments to and from foreign countries, because of the relatively low level of U.S. trade openness, particularly toward the beginning of our sample period. In our multisector extension, we incorporate foreign trade, using data on exports by origin of movement and imports by destination of shipment.

To focus on the impact of incorporating forward-looking investment decisions, we assume standard values of the model's structural parameters from the existing empirical literature in our baseline specification. We assume a trade elasticity of $\theta = 5$ , as in Costinot and Rodríguez-Clare (2014). We set the 5-year discount rate equal to the conventional value of $\beta = (0.95)^{5}$ . We assume an intertemporal elasticity of substitution of $\psi = 1$ , which corresponds to logarithmic intertemporal utility. We assume a value for the migration elasticity of $\rho = 3\beta$ , which is in line with the value in Caliendo, Dvorkin, and Parro (2019). We set the share of labor in value added to $\mu = 0.65$ , as a central value in the macro literature. We assume a 5% annual depreciation rate, such that the 5-year depreciation rate is $\delta = 1 - (0.95)^{5}$ , which is again a conventional value in the macro and productivity literatures. We later report comparative statics for how changes in each of these model parameters affect the speed of convergence to steady state using our closed-form solutions for the economy's transition path.

## 5.2. Income Convergence

We begin by providing evidence of a substantial decline over time in the rate of convergence in income per capita across U.S. states. In Figure 1, we display the annualized rate of growth of income per capita against its initial log level for each U.S. state for different subperiods, which corresponds to a conventional $\beta$ -convergence specification from the growth literature. The size of the circles is proportional to initial state employment. We also show the regression relationship between these variables as the red solid line. In the opening subperiod from 1963–1980 (the left panel), we find substantial income convergence, with a negative and statistically significant coefficient of -0.0257 (standard error 0.0046), and a regression R-Squared of 0.367. This estimated coefficient is close to the -0.02 estimated by Barro and Sala-i-Martin (1992) for the longer time period from 1880–1988. By the middle subperiod from 1980–2000, we find that this relationship substantially weakens, with the slope coefficient falling by nearly one-half to -0.0148 (standard error 0.0059), and a smaller regression R-squared of 0.153. By the closing subperiod from 2000–2017, we find income divergence rather than income convergence, with a positive but not statistically significant coefficient of 0.0076 (standard error 0.0051), and a regression R-squared of 0.055.

FIGURE 1.—Growth and Initial Level of Income Per Capita. Note: Vertical axis shows the annualized rate of growth of income per capita for the relevant subperiod; horizontal axis displays the initial level of log income per capita at the beginning of the relevant subperiod; circles correspond to U.S. states; the size of each circle is proportional to state employment; the solid red line shows the linear regression relationship between the two variables.

## 5.3. Convergence to Steady State versus Fundamental Shocks

Within our framework, the rate of income convergence is shaped by two sets of forces: initial conditions (the initial deviation of the state variables from steady state) and shocks to fundamentals (productivity, amenities, trade costs, and migration frictions). For each of these two sets of forces, the rate of income convergence is shaped by both capital accumulation and migration. We now use our framework to provide evidence on the relative importance of each of these determinants in shaping the observed decline in income convergence over time.

## 5.3.1. Initial Conditions versus Fundamental Shocks

We now use our generalization of dynamic exact-hat algebra in Proposition 2 to examine the relative importance of initial conditions versus fundamental shocks. Starting from the observed equilibrium in the data at the beginning of our sample period, we solve for the economy's transition path to steady state in the absence of any further changes in fundamentals. We thus obtain counterfactual values for income per capita in each year implied by initial conditions alone.

For both the actual and counterfactual values of income per capita, we correlate the 10-year ahead log growth in income per capita with its initial level in each year from 1970–2010. In Figure 2(a), we display these correlation coefficients over time, which summarize the strength of regional convergence for actual income per capita (dashed black line) and counterfactual income per capita in the absence of any further fundamental shocks (solid red line). We find that the decline in the rate of regional convergence is around the same magnitude for both counterfactual and actual income per capita, suggesting that much of

## (a) Actual and Counterfactual Convergence

(b) Counterfactual Convergence (With and Without Investment and Migration)
FIGURE 2.—Initial Conditions and Income Convergence. Note: Correlation coefficients between the 10-year ahead log growth in income per capita and its initial log level in each year from 1970–2010; in the left panel, the dashed black line show these correlations in the data; in both panels, the red solid line shows the correlation coefficients for counterfactual income per capita, based on starting at the observed equilibrium in the data at the beginning of our sample period, and solving for the economy's transition path to steady state in the absence of any further shocks to fundamentals; in the right panel, the black dashed line shows results for the special case with no capital accumulation, and the black dashed-dotted line shows results for the special case with no migration.

the observed decline in the rate of income convergence is explained by initial conditions at the beginning of our sample period rather than by any subsequent fundamental shocks. $^{15}$

To provide further evidence on the role of initial conditions in explaining the observed decline in income convergence, we regress actual log population growth on its predicted value based on convergence toward an initial steady state with unchanged fundamentals, as discussed further in Online Supplement S.6.5. Predicted population growth is calculated using only the initial values of the labor and capital state variables and the initial trade and migration share matrices, and uses no information about subsequent population growth. Nevertheless, we find a positive and statistically significant relationship, with predicted population growth explaining much of the observed population growth. This relationship is particularly strong from 1975 onwards, because the fundamental shocks from 1965–1975 move states on average further from steady state. Estimating this regression for the period 1975–2015, we find a regression slope of 0.99 (standard error of 0.095) and R-squared of 0.82. We show that this explanatory power of predicted population growth is not driven by mean reversion. Controlling for initial log population and the initial log capital stock, as well as initial log population growth, has little impact on the estimated coefficient on predicted population growth or the regression R-squared.

Taken together, these results provide a first key piece of evidence that much of the observed decline in the rate of income convergence is explained by initial conditions at the beginning of our sample period rather than by fundamental shocks. Additionally, the fact that it takes decades for the decline in both actual and counterfactual income convergence to occur provides some first evidence of slow convergence to steady state.

## 5.3.2. Capital Accumulation versus Migration Dynamics

We next provide evidence on the role of capital accumulation versus migration dynamics in this impact of initial conditions. We use our generalization of dynamic exact-hat algebra from Proposition 2 for the special cases of the model with no investment (in which case our framework reduces to a dynamic discrete choice migration model following Caliendo, Dvorkin, and Parro (2019)) and no migration (in which case the population share of each state is exogenous at its 1965 level). Again, we start at the observed equilibrium in the data at the beginning of our sample period and solve for the transition to steady state in the absence of any further changes to fundamentals. We thus obtain counterfactual values for income per capita in each year implied by initial conditions alone for these two special cases of the model with no investment and no migration.

Using these counterfactual predictions, we again correlate the 10-year ahead log growth in income per capita with its initial level for each year from 1970–2010. In Figure 2(b), we display these correlation coefficients over time for the full model (replicating the results from Figure 2(a), as shown by the solid red line), the model with no investment (dashed line), and the model with no migration (dotted-dashed line). We find substantial contributions to the observed decline in income convergence over time from both investment and migration dynamics. Capital accumulation is more important than migration for these dynamics of income per capita, highlighting the relevance of incorporating investment decisions into dynamic spatial models. Nevertheless, even in the model with no capital, we find a decline in the correlation coefficient for income convergence of around 20 percentage points. More generally, allowing for migration is central to matching the observed changes in population shares across U.S. states over time.

## 5.4. Spectral Analysis

We now use our linearization of the model and our spectral analysis to provide further evidence on the role of capital accumulation and migration dynamics in shaping both the impact of initial conditions and fundamental shocks. First, we analyze the determinants of the speed of convergence to steady state. Second, we examine the role of capital and labor dynamics in influencing the convergence process. Third, we evaluate the role of these two sources of dynamics in shaping the persistent and heterogeneous impact of local shocks. Fourth, we evaluate the comparative statics of the speed of convergence to steady state with respect to model parameters.

## 5.4.1. Speed of Convergence to Steady State

Using Propositions 3–5, we compute half-lives of convergence to steady state as determined by the eigenvalues of the transition matrix. In Figure 3, we show these half-lives (solid black line with circle markers) for the entire spectrum of 2N eigencomponents, sorted by increasing half-life. Each nontrivial eigencometer corresponds to an eigenshock for which the initial impact of the shock on the state variables is equal to an eigenvector of the transition matrix $(\boldsymbol{u}_{h} = \boldsymbol{R}\widetilde{\boldsymbol{f}}_{(h)})$ . We display results based on the transition matrix $(\boldsymbol{P})$ computed using the implied steady-state trade and migration share matrices $(\boldsymbol{S}, \boldsymbol{T}, \boldsymbol{D}, \boldsymbol{E})$ for 1975. We compute these implied steady-state matrices using our dynamic exact-hat algebra results from Proposition 2. We focus on 1975, because states are on average furthest from steady state in this year, but we find a similar pattern of results for other years. $^{16}$

FIGURE 3.—Spectrum of Eigencomponents for 1975. Note: Spectrum of eigencomponents for the steady-state transition (P) matrix for 1975 recovered using our dynamic exact-hat algebra results from Proposition 2; eigencomponents are sorted in increasing order of half-life of convergence to steady state; black solid line with circle markers shows half-life of convergence to steady state; red dotted vertical line shows the eigenvector $[1,\ldots,1,0,\ldots,0]$ with eigenvalue 0; blue solid vertical line shows the eigenvector $[0,\ldots,0,1,\ldots,1]$ , which with log preferences ( $\psi=1$ ) has eigenvalue $[1-\mu(1-\beta(1-\delta))]$ , as shown by the blue dashed horizontal line; purple solid line with square markers shows the loadings of the 1975 gaps of the state variables from steady state on the eigencomponents; green solid line with diamond markers shows the loadings of the 1975–2015 productivity and amenity shocks on the eigencomponents.

As in our symmetric two-region example above, these eigencomponents have an intuitive interpretation. One eigenvector $[1,\ldots,1,0,\ldots,0]$ captures a common amenity shock to all locations that leaves population shares and capital stocks unchanged, as shown by the red dotted vertical line. This trivial eigenvector has an associated eigenvalue of 0, since the initial and new steady state coincide, such that there are no transition dynamics. Another eigenvector $[0,\ldots,0,1,\ldots,1]$ captures a common productivity shock to all locations that leaves population shares unchanged, but increases the capital stock in all locations, as shown by the blue solid vertical line. This eigenvector has an associated eigenvalue of $[1-\mu(1-\beta(1-\delta))]$ in the special case of log preferences ( $\psi=1$ ), as shown by the horizontal blue dashed line, and induces the same capital dynamics as in the closed economy. In between the red dotted and blue solid vertical lines, we have N-1 eigencomponents with a negative correlation between the gaps of the labor and capital state variables from steady state, for which convergence to steady state is relatively rapid. To the right of the blue solid vertical line, we have N-1 eigencomponents with a positive correlation between the gaps of the labor and capital state variables from steady state, for which convergence to steady state is relatively slow.

Three features are particularly noteworthy. First, the speed of convergence to steady state is typically slow, with an average half-life across the entire spectrum of eigenshocks of around 20 years. Therefore, our theoretical framework is consistent with reduced-form empirical findings of persistent impacts of local labor market shocks, as found, for example, for the China shock in the United States in Autor, Dorn, and Hanson (2013, 2023) and Brazil's trade liberalization in Dix-Carneiro and Kovak (2017). Second, there is substantial heterogeneity in the speed of convergence across eigenshocks, with the half-life of convergence varying from instantaneous convergence for the trivial eigenshock $[0,\dots 0,1,\dots ,1]$ to around 80 years. Hence, our theoretical framework also rationalizes heterogeneous effects of local labor market shocks, as emphasized for example in Eriksson, Russ, Shambaugh, and Xu (2019).

Third, the higher the correlation between the gaps of the labor and capital state variables from steady state across locations, the slower the speed of convergence to steady state (the larger the half-life of convergence to steady state). We provide further evidence on the strength of this relationship in Figure S.6.9 in Online Supplement S.6.6.2. This finding that capital and labor dynamics interact to shape the speed of convergence to steady state reflects the interplay between the marginal products of capital and labor in the production technology, as discussed above. If a region experiences a negative shock that reduces the steady-state values of both the labor and capital variables, the gradual process of migration away from declining regions is slowed by the gradual downward adjustment of existing stocks of buildings and structures, and vice versa. Therefore, our framework explains persistent and heterogeneous effects of local shocks through this interaction between capital and labor dynamics.

In Figure 3, we also relate both the initial gaps of the state variables from steady state in 1975 and the empirical shocks to productivity and amenities from 1975–2015 to these eigenshocks. We use the property that any deviations of the state variables from steady state or any empirical fundamental shocks can be expressed as a linear combination of the eigencomponents. For the deviations of the state variables from steady state, these loadings can be recovered from a regression of these steady-state deviations on the eigenvectors of the transition matrix. The purple line with square markers shows these loadings for the 1975 gaps from steady state. For the empirical fundamental shocks, these loadings can be recovered from a regression of the empirical fundamental shocks on the eigenshocks corresponding to the eigenvectors of the transition matrix. The green line with diamond markers shows these loadings for the empirical shocks to productivity and amenities from 1975–2015. We recover both the steady-state gaps and the empirical productivity and amenity shocks from the full nonlinear model, as discussed in Online Supplements S.2.2 and S.6.7, respectively. Figure 3 shows the absolute value of these loadings, normalized such that the sum of these absolute values is equal to one.

Comparing the two sets of loadings, we find that the steady-state gaps in 1975 typically load more heavily on the upper part of the spectrum of eigencomponents with slow rates of convergence to steady state (the purple line with square markers typically lies above the green line with diamond markers for the upper part of the spectrum to the right of the blue solid vertical line). In contrast, the empirical shocks to productivity and amenities from 1975–2015 generally load more heavily on the lower part of the spectrum of eigencomponents with fast rates of convergence to steady state (the green line with diamond markers typically lies above the purple line with square markers for the lower part of the spectrum to the left of the blue solid vertical line). This pattern of results is consistent with the evidence above that initial conditions explain much of the observed decline in income convergence over our sample period. We find loadings-weighted average half-lives of convergence to steady state of 38 years for the 1975 steady-state gaps and 20 years for the productivity and amenity shocks from 1975–2015. Therefore, while the economy adjusts relatively rapidly to the observed productivity and amenity shocks during our sample period, it takes longer to adjust to the initial gaps of the state variables from steady state.

## 5.4.2. Initial Conditions and Convergence

We now use our spectral analysis to probe further the role of capital and labor dynamics in shaping the impact of initial conditions. In Figure 4, we use Proposition 4 to decompose the initial gap of the labor and capital state variables from steady state in 1975 into the contributions of the different eigencomponents. In the left panel, we display the overall log deviations of capital from steady state (vertical axis) against the overall log deviation of labor from steady state (horizontal axis). In the middle panel, we show these log deviations for the top-10 eigencomponents with the slowest convergence to steady state. In the right panel, we show these log deviations for the remaining 88 eigencomponents with faster convergence to steady state. By construction, the overall log deviations in the left panel equal the sum of those in the middle and right panels. We preserve the same scale on the horizontal axis across the three panels, but allow the scale on the vertical axis to differ. We show Rust Belt states in gray, Sun Belt states in red, Other North states in blue, and Other South states in brown. The size of the marker for each state is proportional to the size of its population.

From the left panel, the overall capital and labor gaps are positively correlated across U.S. states, consistent with the slow convergence to steady state established above. Rust Belt states (in gray) appear systematically toward the right with populations above steady state, while Sun Belt states (in red) appear systematically toward the left with populations below steady state. From the vertical axis of the left panel, all states have capital stocks below steady state, again highlighting the relevance of capital dynamics. In general, Rust Belt states have smaller deviations of capital from steady state than Sun Belt states.

FIGURE 4.—Decomposition of Gaps of State Variables from Steady State in 1975. Note: Left panel shows the 1975 log deviations of capital and labor from steady state for each U.S. state; middle and right panels decompose these 1975 steady-state gaps into the contributions of the top 10 eigencomponents with the slowest convergence to steady state (middle panel) and the remaining 88 eigencomponents (right panel).

From the middle panel, much of the positive correlation between the steady-state gaps is driven by the top-10 eigencomponents with the slowest convergence to steady state. For these top-10 eigencomponents, the positive correlation is particularly strong, and there is clear geographical separation between the Rust Belt states (toward the top right) and the Sun Belt states (toward the middle and bottom left). Given the role of geography in shaping migration through the gravity equation for migration flows, this geographical separation contributes to slow convergence to steady state. In contrast, from the right panel, the remaining 88 eigencomponents show a weaker positive correlation between the steady-state gaps, with smaller variation in the absolute magnitude of the labor steady-state gap on the horizontal axis, and a less clear geographical separation between Rust Belt and Sun Belt states.

Therefore, our findings of slow convergence toward steady state based on initial conditions are driven by the initial steady-state gaps loading heavily on eigencomponents with strong positive correlations between the capital and labor steady-state gaps, and the clear geographical separation between Rust Belt states with populations above steady state and Sun Belt states with population closer to or below steady state.

## 5.4.3. Fundamental Shocks

We next use our spectral analysis to explore further the role of capital and labor dynamics in shaping the impact of fundamental shocks. In Figure 5, we use Proposition 4 to decompose the empirical productivity and amenity shocks from 1975–2015 into the contributions of the different eigencomponents. In the left panel, we display the empirical amenity shocks (vertical axis) against the empirical productivity shocks (horizontal axis) over this time period. In the middle panel, we show the components of these empirical shocks accounted for the top-10 eigencomponents with the slowest convergence to steady state. In the right panel, we show the corresponding components accounted for by the remaining 88 eigencomponents with faster convergence to steady state. By construction, the empirical shocks in the left panel equal the sum of the components in the middle and right panels. We again preserve the same scale on the horizontal axis across the three panels, but allow the scale on the vertical axis to differ. We use the same coloring for the four groups of states as above, and the size of the marker for each state is again proportional to the size of its population.

Slope coefficient: -1.37; standard error: 0.149; R-squared: 0.643

Slope coefficient: 0.954; standard error: 0.035; R-squared: 0.942

FIGURE 5.—Decomposition of Productivity and Amenity Shocks from 1975–2015. Note: Left panel shows log productivity and amenity shocks from 1975–2015 for each U.S. state; middle and right panels decompose these productivity and amenity shocks into the contributions of the top 10 eigencomponents with the slowest convergence to steady state (middle panel) and the remaining 88 eigencomponents (right panel).

From the left panel, we find a negative correlation between the empirical productivity and amenity shocks from 1975–2015. Note that higher productivity raises the marginal productivity of both labor and capital, which increases both state variables. In contrast, higher amenities only directly raise worker utility, which increases the labor state variable. Therefore, this negative correlation between productivity and amenity shocks implies a negative correlation between changes in the labor and capital steady-state gaps, and hence implies relatively rapid convergence, in contrast to our results for initial conditions above. $^{17}$

From the middle panel, we find a strong positive relationship between the components of the amenity and productivity shocks that are accounted for by the top-10 eigencomponents with the slowest convergence to steady state. But there is much less variation in the absolute magnitude of this component on the horizontal axis than for the overall empirical productivity and amenity shocks in the left panel. Therefore, the top-10 eigencomponents again imply slow convergence to steady state, but they account for a relatively small amount of the empirical amenity and productivity shocks.

From the right panel, we find a strong negative relationship between the components of the amenity and productivity shocks that are accounted for by the remaining 88 eigencomponents, with greater variation in the absolute magnitude of the productivity shocks on the horizontal axis. Hence, the negative correlation between the empirical amenity and productivity shocks in the left panel is driven by these remaining 88 eigencomponents with relatively fast convergence to steady state. In contrast to our results for initial conditions above, we observe no clear geographical separation between Rust Belt and Sun Belt states.

We thus find that the relatively small contribution from fundamental shocks relative to initial conditions toward the decline in income convergence is explained by these fundamental shocks loading more on eigencomponents characterized by fast convergence to steady state.

## 5.4.4. Impulse Responses

To provide further evidence on the role of capital and labor dynamics in shaping the persistent and heterogeneous impact of local shocks, we now consider individual empirical shocks to productivity and amenities. We examine impulse response functions for the labor and capital state variables in each U.S. state following a local shock, starting from the steady state implied by 1975 fundamentals. Motivated by the observed secular reallocation of economic activity from the Rust Belt to the Sun Belt, we report results for the empirical shock to relative productivity in Michigan from 1975–2015 (a 15% decline) and the empirical shock to relative amenities in Arizona over this same period (a 34% rise).

In Figure 6, we display the impulse response of population shares in each U.S. state in response to the empirical $15\%$ decline in relative productivity in Michigan. In the top-left panel, we show the log deviation of Michigan's population share from the initial steady state along the transition path to the new steady state. We find an intuitive pattern where the decline in Michigan's relative productivity leads to a population outflow, which occurs gradually over time, because of migration frictions and gradual adjustment to capital.

In the top-right panel, we show the corresponding log deviations of population shares from the initial steady state for all other states. We indicate Michigan's neighbors using the blue lines with circle markers and all other states using the gray lines. We find that the model can generate rich nonmonotonic dynamics for individual states. Initially, the decline in Michigan's productivity raises the population share of its neighbors, since workers face lower migration costs in moving to nearby states. However, as the economy gradually adjusts toward the new steady state, the population share in Michigan's neighbors begins to decline, and can even fall below its value in the initial steady state. Intuitively, workers gradually experience favorable idiosyncratic mobility shocks for states further away from Michigan, and the decline in Michigan's productivity reduces the size of its market for neighboring locations, which can make those neighboring locations less attractive in the new steady state. Population shares in all other states increase in the new steady state relative to the initial steady state.

In the middle two panels, we show the log deviations from steady state for the component of population shares attributed to bottom-88 eigencomponents with relatively fast convergence to steady state. In the middle-left panel, the solid black line shows the overall log deviation of Michigan's population share from steady state (the same as in the top-left left panel), while the dashed black line indicates the component due to the bottom-88 eigencomponents. In the middle-right panel, the solid blue line with circle markers shows the overall log deviation from steady state of the population shares of Michigan's neighbors (same as in the top-right panel); the dashed blue line with circle markers indicates the component of these neighbors' population shares due to the bottom-88 eigencomponents; the gray lines represent the population shares of all other states (the same as in the top-right panel). Comparing the two sets of blue lines in the middle-right panel, these eigencomponents featuring fast convergence toward steady-state drive the initial rise in the population shares of Michigan's neighbors.

In the bottom two panels, we show the log deviations from steady state for the component of population shares attributed to the top-10 eigencomponents with relatively slow convergence to steady state. In the bottom-left panel, the solid black line shows the overall log deviation of Michigan's population share from steady state (the same as in the top-left panel), while the dashed black line indicates the component due to the top-10 eigencomponents. In the bottom-right panel, the solid blue line with circle markers shows the overall log deviation from steady state of the population shares of Michigan's neighbors (same as in the top-right panel); the dashed blue line with circle markers indicates the

## (a) Impulse Response of Overall Population Shares

(b) Impulse Response of Population Shares for Eigencomponents 1-88

(c) Impulse Response of Population Shares for Eigencomponents 88-98

FIGURE 6.—Impulse Response of Population Shares for a 15% Decline in Productivity in Michigan. Note: Top-left panel shows overall log deviation of Michigan's population share from steady state (vertical axis) against time in years (horizontal axis) for a 15% decline in Michigan's productivity (its empirical relative decline in productivity from 1975–2015); Top-right panel shows overall log deviation of other states' population shares from steady state (vertical axis) against time in years (horizontal axis) for this shock to Michigan's productivity; blue lines show Michigan's neighbors; gray lines show other states; Middle and bottom panels decompose this overall impulse response into the contribution of eigencomponents 1–88 (fast convergence) and 88–98 (slow convergence), respectively.

component of these neighbors' population shares due to the top-10 eigencomponents; the gray lines represent the population shares of all other states (the same as in the top-right panel). Comparing the two sets of blue lines in the bottom-right panel, these eigencomponents featuring slow convergence toward steady state drive the ultimate reduction in the population shares of Michigan's neighbors. Therefore, the nonmonotonic dynamics for Michigan's neighbors in the top-right panel reflect the changing importance over time of the slow and fast-moving components of the economy's adjustment to the productivity shock in the middle-right and bottom-right panels. $^{18}$

In Online Supplement S.6.6.6, we report analogous results for the empirical shock to relative amenities in Arizona from 1975–2015 (a 34% rise). Whereas the decline in relative productivity in Michigan decreases its population share above, this increase in relative amenities in Arizona increases its population share. We again find persistent and heterogeneous effects of the shock across states. Individual states can again experience rich dynamics, because of the changing importance over time of the slow and fast-moving components of the economy's adjustment to the shock, although there is less evidence of nonmonotonic dynamics for individual states for this amenities shock than for the productivity shock above.

## 5.4.5. Comparative Statics of the Speed of Convergence

Finally, we show that our spectral analysis permits an analytical characterization of the comparative statics of the speed of convergence to steady state with respect to changes in model parameters. Undertaking these comparative statics in the nonlinear model is challenging, because the speed of convergence to steady state depends on the incidence of the productivity and amenity shocks across the labor and capital state variables in each location. As a result, to fully characterize the impact of changes in model parameters on the speed of convergence in the nonlinear model, one needs to undertake counterfactuals for the economy's transition path in response to the set of all possible productivity and amenity shocks, which is not well-defined.

In contrast, our spectral analysis has two key properties. First, the set of all possible productivity and amenity shocks is spanned by the set of eigenshocks, which is well-defined. Second, we have a closed-form solution for the impact matrix $(\boldsymbol{R})$ and transition matrix $(\boldsymbol{P})$ in terms of the observed data $(\boldsymbol{S}, \boldsymbol{T}, \boldsymbol{D}, \boldsymbol{E})$ and structural parameters $\{\psi, \theta, \beta, \rho, \mu, \delta\}$ . Therefore, for any alternative model parameters, we can immediately solve for the entire spectrum of eigenvalues (and corresponding half-lives) associated with the eigenshocks using the observed data. Because the eigenshocks span all possible empirical productivity and amenity shocks, understanding how parameters affect the entire spectrum of half-lives translates into an analytically sharp understanding of how convergence rates are affected by model parameters.

In Figure 7, we display the half-lives of convergence to steady state across the entire spectrum of eigenshocks for different values of model parameters. Each panel varies the noted parameter, holding constant the other parameters at their baseline values. On the vertical axis, we display the half-life of convergence to steady state. On the horizontal axis, we rank the eigenshocks in terms of increasing half-lives of convergence to steady state for our baseline parameter values.

FIGURE 7.—Half-lives of Convergence to Steady State for Alternative Parameter Values. Note: Half-lives of convergence to steady state for each eigenshock for alternative parameter values in the 1975 steady state; vertical axis shows half-life in years; horizontal axis shows the rank of the eigenshocks in terms of their half-lives for our baseline parameter values (with one the lowest half-life); each panel varies the noted parameter, holding constant the other parameters at their baseline values; the blue and red solid lines denote the lower and upper range of the parameter values considered, respectively; each of the other eight lines in between varies the parameters uniformly within the stated range; the thick black dotted line in the bottom-left panel displays half-lives for the special case of our model without capital, which corresponds to the limiting case in which the labor share ( $\mu$ ) converges to one.

In the top-left panel, a lower intertemporal elasticity of substitution $(\psi)$ implies a longer half-life (slower convergence), because consumption becomes less substitutable across time for landlords, which reduces their willingness to respond to investment opportunities. In the top-middle panel, a higher migration elasticity (lower $\rho$ ) has an ambiguous effect that depends on the interaction of capital and migration dynamics: a higher migration elasticity increases the responsiveness of labor flows to capital accumulation, leading to a longer half-life when the labor and capital gaps from steady state are positively correlated, and the converse when they are negatively correlated. In the top-right panel, a higher discount factor $(\beta)$ also implies a longer half-life (slower convergence), because landlords have a higher saving rate, which implies a greater role for endogenous capital accumulation, thereby magnifying the impact of productivity and amenity shocks, and implying a longer length of time for adjustment to occur.

In the bottom-right panel, we vary the share of expenditure on the single tradable sector relative to the single nontradable sector. A lower share of tradables ( $\gamma$ ) implies a longer half-life (slower convergence), because it makes the impact of shocks more concentrated locally, which requires greater labor and capital reallocation between locations. In the bottom-middle panel, a higher trade elasticity ( $\theta$ ) implies a longer half-life (slower convergence), because it increases the responsiveness of production and consumption in the static trade model, and hence requires greater reallocation of capital and labor across locations. In the bottom-left panel, we find that a lower labor share ( $\mu$ ) implies a longer half-life (slower convergence), because it implies a greater role for endogenous capital accumulation, which again magnifies the impact of productivity and amenity shocks, and hence requires a greater length of time for adjustment to occur.

In this bottom-left panel, we also show the half-lives of convergence to steady state for the special case of our model with no capital using the black dotted line, which corresponds to the limiting case in which the labor share converges to one. In this special case, we have only N state variables and eigenshocks, compared to 2N state variables and eigenshocks in the general model. We again find that capital accumulation and migration dynamics interact with one another. As we introduce capital (raise the labor share above zero), we find slower convergence to steady state in the configurations of the state space where the gaps of the labor and capital state variables are positively correlated across locations (the largest N eigenvalues become larger). In contrast, we find faster convergence to steady state in the configurations of the state-space where the gaps of the labor and capital state variables are negatively correlated across locations (we add an additional N eigenvalues smaller than those represented by the dotted line).

## 5.5. Multisector Quantitative Analysis

In a final empirical exercise, we implement our multisector extension with region-sector specific capital, as discussed in further detail in Online Supplement S.6.8.

We again find slow rates of convergence to steady state in this multisector extension, although the rate of convergence is higher than in our baseline single-sector specification, with an average half-life of 7 years and a maximum half-life of 35 years. This finding is driven by the property of the region-sector migration matrices that flows of people between sectors within states are larger than those between states. An implication is that the persistence of local labor market shocks depends on whether they induce reallocation across industries within the same location or reallocation across different locations. Again we find a strong positive relationship between the half-life of convergence to steady state and the correlation between the gaps from steady state for the labor and capital state variables.

Therefore, in the multisector model as for the single-sector model above, we find that the interaction between capital accumulation and migration dynamics shapes the persistent and heterogeneous impact of local shocks.

## 6. CONCLUSIONS

A classic question in economics is the response of economic activity to local shocks. In general, this response can be gradual, because of investments in capital structures and migration frictions. However, a key challenge in modeling these dynamics is that agents' forward-looking investment and migration decisions depend on one another in all locations in all future time periods, which quickly results in a prohibitively large state space for empirically-realistic numbers of locations.

We make two main contributions. First, we develop a tractable framework for incorporating forward-looking capital accumulation into a dynamic discrete choice migration model that overcomes this challenge of a high-dimensional state space. We characterize the steady-state equilibrium and generalize existing dynamic exact-hat algebra techniques to incorporate investment. Second, we linearize the model to characterize analytically the economy's transition path using spectral analysis. We provide a closed-form solution for the transition path, in terms of an impact matrix that captures the initial impact of shocks and a transition matrix that governs the updating of the state variables.

We show that the dynamic response of the state variables to any shock to fundamentals can be characterized in terms of the eigenvectors and eigenvalues of this transition matrix. We introduce the concept of an eigenshock for which the initial impact of the shock on the state variables is equal to an eigenvector of the transition matrix. We show that the speed of convergence to steady state for an eigenshock depends solely on the corresponding eigenvalue of the transition matrix. We demonstrate that any empirical shock can be expressed as a linear combination of these eigenshocks, where the weights in this linear combination can be recovered from a regression on the empirical shock on the eigenshocks.

We use our spectral analysis to highlight a systematic interaction between capital accumulation and migration dynamics. Convergence toward steady state is slow when the gaps of the labor and capital state variables from from steady state are positively correlated across locations, such that capital and labor tend to be either both above or both below steady state. The reason is the interaction between the marginal products of capital and labor in the production technology. When capital is above steady state, this raises the marginal productivity of labor, which dampens the downward adjustment of labor, and vice versa.

We show that this interaction between capital accumulation and migration dynamics is central to understanding the observed decline in income convergence across U.S. states and the persistent and heterogeneous impact of local shocks. We begin by establishing that much of the observed decline in income convergence is explained by initial conditions rather than by changes in the pattern of shocks to fundamentals. We next show that both capital and labor dynamics contribute to this decline in income convergence, highlighting the relevance of incorporating forward-looking investment into dynamic discrete choice models of migration.

We then use our spectral analysis to decompose the initial gaps of the labor and capital state variables from steady state and the empirical shocks to fundamentals. We show that the initial steady-state gaps load more heavily on eigencomponents with slow convergence, because the labor and capital steady-state gaps are positively correlated across locations. In contrast, we find that the empirical shocks to productivity and amenities load more heavily on eigencomponents with fast convergence, because these productivity and amenity shocks are negatively correlated across locations, which induces a negative correlation between changes in the labor and capital steady-state gaps. Together these two features drive our finding that initial conditions explain much of the observed decline in income convergence over time.

We show that the changing importance of these slow and fast-moving components of adjustment along the economy's transition path can induce nonmonotonic dynamics in the state variables in individual locations. In response to the empirical decline in Michigan's relative productivity of $15\%$ , we find that neighboring states first experience a population inflow, before later experiencing a population outflow, such that their population shares in the new steady state can end up lower than in the initial steady state.

Taken together, our findings highlight the rich interaction between capital accumulation and migration dynamics, and the insights from spectral analysis for the properties of dynamical systems with multiple sources of dynamics.

## REFERENCES

AHLFELDT, GABRIEL, STEPHEN REDDING, DANIEL STURM, AND NIKOLAUS WOLF (2015): “The Economics of Density: Evidence From the Berlin Wall,” Econometrica, 83, 2127–2189. [388,406]

ALDER, SIMEON, DAVID LEGAKOS, AND LEE OHANIAN (2023): “Labor Market Conflict and the Decline of the Rust Belt,” Journal of Political Economy (forthcoming). [408]

ALLEN, TREB, AND COSTAS ARKOLAKIS (2014): “Trade and the Topography of the Spatial Economy,” Quarterly Journal of Economics, 129, 1085–1140. [388]

ALLEN, TREB, AND DAVE DONALDSON (2022): “The Geography of Path Dependence,” Report, Dartmouth College. [388]

ALLEN, TREB, COSTAS ARKOLAKIS, AND XIANGLIANG LI (2016): “Optimal City Structure,” Report, Yale University. [388]

(2020): “On the Equilibrium Properties of Network Models With Heterogeneous Agents,” NBER Working Paper, 27837. [396,406]

ALVAREZ, FERNANDO (2017): “Capital Accumulation and International Trade,” Journal of Monetary Economics, 91, 1–18. [388]

ANDERSON, JAMES E., MARIO LARCH, AND YOTO V. YOTOV (2015): “Growth and Trade With Frictions: A Structural Estimation Framework,” NBER Working Paper, 21377. [388]

ANGELETOS, GEORGE-MARIOS (2007): “Uninsured Idiosyncratic Investment Risk and Aggregate Saving,” Review of Economic Dynamics, 10, 1–30. [392]

ARMINGTON, PAUL S. (1969): “A Theory of Demand for Products Distinguished by Place of Production,” IMF Staff Papers, 16, 159–178. [386,407]

ARTUÇ, ERHAN, SHUBHAM CHAUDHURI, AND JOHN MCLAREN (2010): “Trade Shocks and Labor Adjustment: A Structural Empirical Approach,” American Economic Review, 100, 1008–1045. [388]

AUTOR, DAVID, DAVID DORN, AND GORDON HANSON (2023): “On the Persistence of the China Shock,” Brookings Papers on Economic Activity (forthcoming). [389,413]

AUTOR, DAVID, DAVID DORN, AND GORDON H. HANSON (2013): “The China Syndrome: Local Labor Market Effects of Import Competition in the United States,” American Economic Review, 103, 2121–2168. [389, 413]

BARRO, ROBERT J., AND XAVIER SALA-I-MARTIN (1992): “Convergence,” Journal of Political Economy, 100, 223–251. [389,409]

BLANCHARD, OLIVIER JEAN, AND CHARLES M. KAHN (1980): “The Solution of Linear Difference Models Under Rational Expectations,” Econometrica, 48, 1305–1311. [388,389]

BLANCHARD, OLIVIER JEAN, AND LAWRENCE F. KATZ (1992): “Regional Evolutions,” Brookings Papers on Economic Activity, 1, 1–61. [389]

CALIENDO, LORENZO, AND FERNANDO PARRO (2020): “The Quantitative Effects of Trade Policy on Industrial and Labor Location,” Report, Yale University. [388]

CALIENDO, LORENZO, MAXIMILIANO DVORKIN, AND FERNANDO PARRO (2019): “Trade and Labor Market Dynamics: General Equilibrium Analysis of the China Trade Shock,” Econometrica, 87, 741–835. [386,388, 396,409,411]

CALIENDO, LORENZO, FERNANDO PARRO, ESTEBAN ROSSI-HANSBERG, AND PIERRE-DANIEL SARTE (2018): "The Impact of Regional and Sectoral Productivity Changes on the U.S. Economy," Review of Economic Studies, 85, 2042–2096. [388]

COSTINOT, ARNAUD, AND ANDRÉS RODRÍGUEZ-CLARE (2014): “Trade Theory With Numbers: Quantifying the Consequences of Globalization,” in Handbook of International Economics, Vol. 4, ed. by Elhanan Helpman, Kenneth Rogoff, and Gita Gopinath. Amsterdam: Elsevier North Holland, 197–262. [409]

DEJONG, DAVID N., AND CHETAN DAVE (2011): Structural Macroeconomics. Princeton: Princeton University Press. [399]

DESMET, KLAUS, AND ESTEBAN ROSSI-HANSBERG (2014): “Spatial Development,” American Economic Review, 104, 1211–1243. [388]

DESMET, KLAUS, DÁVID KRISZTIÁN NAGY, AND ESTEBAN ROSSI-HANSBERG (2018): “The Geography of Development,” Journal of Political Economy, 126, 903–983. [388]

DIX-CARNEIRO, RAFAEL, AND BRIAN K. KOVAK (2017): “Trade Liberalization and Regional Dynamics,” American Economic Review, 107, 1908–2946. [389,413]

EATON, JONATHAN, SAMUEL KORTUM, BRENT NEIMAN, AND JOHN ROMALIS (2016): “Trade and the Global Recession,” American Economic Review, 106, 3401–3438. [388]

ERIKSSON, KATHERINE, KATHERYN N. RUSS, JAY C. SHAMBAUGH, AND MINFEI XU (2019): “Trade Shocks and the Shifting Landscape of U.S. Manufacturing,” NBER Working Paper, 25646. [413]

FUJITA, MASAHISA, PAUL KRUGMAN, AND ANTHONY J. VENABLES (1999): The Spatial Economy: Cities, Regions, and International Trade. Cambridge MA: MIT Press. [388]

GANONG, PETER, AND DANIEL SHOAG (2017): “Why Has Regional Income Convergence in the US Declined,” Journal of Urban Economics, 102, 76–90. [389]

GLAESER, EDWARD L., AND JOSEPH GYOURKO (2005): “Urban Decline and Durable Housing,” Journal of Political Economy, 113, 345–375. [388]

GREANEY, BRIAN (2023): “The Distributional Effects of Uneven Regional Growth,” Report, University of Washington. [388]

KAPLAN, GREG, AND GIOVANNI L. VIOLANTE (2014): “A Model of the Consumption Response to Fiscal Stimulus Payments,” Econometrica, 82, 1199–1239. [389]

KIM, SUKKOO (1995): “Expansion of Markets and the Geographic Distribution of Economic Activities: The Trends in U.S. Regional Manufacturing Structure 1860–1987,” Quarterly Journal of Economics, 110, 881–908. [389]

KLEINMAN, BENNY, ERNEST LIU, AND STEPHEN J. REDDING (2023): “Supplement to ‘Dynamic Spatial General Equilibrium’,” Econometrica Supplemental Material, 91, https://doi.org/10.3982/ECTA20273. [389]

KRUGMAN, PAUL (1991): “Increasing Returns and Economic Geography,” Journal of Political Economy, 99, 483–499. [388]

LIU, ERNEST, AND ALEH TSYVINSKI (2020): “Dynamical Structure and Spectral Properties of Input-Output Networks,” NBER Working Paper. [389]

MITCHENER, KRIS JAMES, AND IAN W. MCLEAN (1999): “U.S. Regional Growth and Convergence 1880–1980,” Journal of Economic History, 59, 1016–1042. [389]

MOLL, BENJAMIN (2014): “Productivity Losses From Financial Frictions: Can Self-Financing Undo Capital Misallocation,” American Economic Review, 104, 3186–3221. [386,392]

MONTE, FERDINANDO, STEPHEN REDDING, AND ESTEBAN ROSSI-HANSBERG (2018): “Commuting, Migration and Local Employment Elasticities,” American Economic Review, 108, 3855–3890. [388]

PETERS, MICHAEL (2022): “Market Size and Spatial Growth: Evidence From Germany’s Post-War Population Expulsions,” Econometrica, 90, 2357–2396. [388]

RAMONDO, NATALIA, ANDRES RODRÍGUEZ-CLARE, AND MILAGRO SABORÍP-RODRÍGUEZ (2016): “Trade, Domestic Frictions and Scale Effects,” American Economic Review, 106, 3159–3184. [388]

RAVIKUMAR, B., ANA MARIA SANTACREU, AND MICHAEL SPOSI (2019): “Capital Accumulation and Dynamic Gains From Trade,” Journal of International Economics, 119, 93–110. [388]

REDDING, STEPHEN J. (2016): “Goods Trade, Factor Mobility and Welfare,” Journal of International Economics, 101, 148–167. [388]

REDDING, STEPHEN J., AND ESTEBAN ROSSI-HANSBERG (2017): “Quantitative Spatial Models,” Annual Review of Economics, 9, 21–58. [388]

REDDING, STEPHEN J., AND DANIEL M. STURM (2008): “The Costs of Remoteness: Evidence From German Division and Reunification,” American Economic Review, 98, 1766–1797. [388]

UHLIG, HARALD (1999): “A Toolkit for Analyzing Non-Linear Dynamic Stochastic Models Easily,” in Computational Methods for the Study of Dynamic Economies, ed. by Ramon Marimon and Andrew Scott. New York: Oxford University Press, 30–61. [389,399]

WALSH, CONOR (2019): “Firm Creation and Local Growth,” Report, Yale University. [388]