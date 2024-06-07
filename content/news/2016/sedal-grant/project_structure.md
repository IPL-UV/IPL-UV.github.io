# Methodology

Activities are organized in three major tasks: two theoretical tasks guided by an application-oriented one dealing with relevant EO problems.

## Workpackage 1: Improving Statistical Regression Models

We will develop new kernel regression models to cope with the shortcomings identified before, namely: improve model’s accuracy by encoding prior knowledge, quantify the uncertainty of the estimations, attain self-explanatory models, and alleviate the computational cost. We will develop ways to encode prior knowledge about the problem by design of kernels and neural structures able to:

1. Incorporate explicit physical restrictions based on warping functions.
2. Combine heterogeneous information for spatial-spectral, multi-temporal, multi-angular, and multi-sensor data processing.
3. Include the information of unlabeled samples via semisupervised covariances.
4. Predict multiple variables simultaneously in order to constrain predictions to sensible levels.
5. Account for signal and noise characteristics.
6. Deploy efficient (sparse and divide-and-conquer) kernel regression models.
7. Discover knowledge in kernel models.

## Workpackage 2: Learning Graphical Models and Causal Inference

We will exploit results and algorithms of the previous task in order to develop methods that can learn nonlinear data dependencies and possibly infer causal relations. We will propose:

1. New conditional independence estimates.
2. Constrained-based (physically-based) structure learning.
3. Dynamic graphical models.
4. Causal inference models, mostly based on detection of PDF asymmetries and regression-based methods.

Models and inferred structures will be tested through pure non-interventional settings, as well as intervention analyses in controlled situations, that might reveal the presence of hidden causal variables and relationships, and by quantifying the impact of prior (physical) knowledge.

## Workpackage 3: Case Study - From Local to Global Scales in EO Variable Learning

We will focus on the relevant applications of:

1. Learning statistical predictive models for key biophysical variables.
2. Extracting knowledge from the models and the nonlinear hierarchical data representations.
3. Inferring causal variable relations from empirical data, both at local and global scales.

### Local Scale

- Modeling biophysical parameters at local scale, primarily focusing on chlorophyll content, fluorescence, biomass, LAI, and fAPAR.
- The study and quantification of uncertainty, inclusion of prior physical knowledge to constrain model’s flexibility, and the analysis of dependence/causal relations between variables will be the main scientific questions to be addressed.

### Global Scale

- Generate global flux products derived from upscaling FLUXNET eddy covariance observations using an array of remote sensing data.
- We will evaluate the developed regression algorithms, the relative relevance of explanatory variables, and will learn graph dependencies between remote sensing variables and carbon (e.g., total ecosystem respiration, net ecosystem exchange), energy (e.g., latent heat and heat radiation), and water (e.g., evapotranspiration) fluxes.
- We will also study statistical relations between global products for both essential climate variables over land (biomass, LAI, and the fraction of absorbed photosynthetically active radiation, fAPAR).

Both case studies will involve important efforts in open data harmonization (formats, centralized database server, access/sharing protocols, documentation, etc.) and open code generation (toolbox releases, products, models, etc.).
