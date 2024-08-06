---
title: "Research Earth Science"
---

<div class="content-container" style="font-size: 1.1em; text-align: justify; line-height: 1.1;">

# Earth and climate sciences

<br/>

## Motivation

**Machine learning has yielded many successful results and developments in remote sensing, geosciences and climate sciences. However, there are still strong limitations for the general adoption of machine learning algorithms for predicting and understanding the Earth and climate systems.**

<div class="image_e">
<img class="image_e" src="/images/research/AI_earth_pic.webp" style="width:300px; display: block; margin: auto"/>
</div>
<br/>

The current statistical treatment of biophysical parameters is strongly limited by the quantity and quality of EO data, as well as because of the abuse of standard off-the-shelf methods, which in general are not well-adapted to the particular EO data characteristics. Specifically, current regression models used for EO applications are still deficient because they rely on limited amount of meteorological and remote sensing data, do not observe the particular data characteristics, and often make strong assumptions of linearity, homoscedasticity or Gaussianity. These limitations translate into certain risks of overfitting and unreasonably large uncertainties for the predictions, suggesting a lack of explanatory variables and deficiencies in model specification. Graphical models have been seldom used in EO data analysis. The few works restrict to local studies, use limited amount of data and explanatory variables, consider remote sensing input features only, apply standard structure learning algorithms driven by univariate (often unconditioned) dependence estimates, and do not extract causal relations or identify new drivers in the problem.

We advocate that machine learning algorithms for EO applications need to be guided both by data and by prior physical knowledge. This combination is the way to restrict the family of possible solutions and thus obtain nonparametric flexible models that respect the physical rules governing the Earth climate system. We are equally concerned about the ‘black-box' criticism to statistical learning algorithms, for which we aim to design self-explanatory models and take a leap towards the relevant concept of causal inference from empirical EO data.

## Challenges and approaches

Our main goal is to develop new machine learning models for the ambitious goal of modeling and understanding the Earth and climate systems with data, models and machine learning. This main scientific goal translates into the following objectives:

- **Improve prediction models by adaptation to Earth Observation data characteristics.** We typically rely on the framework of kernel learning, which has emerged as the most appropriate framework for remote sensing data analysis in the last decade. The new retrieval models are adapted to the particular signal characteristics, such as unevenly sampled time series and missing data, non-Gaussianity, presence of heteroscedastic and non-stationary processes, and non-i.i.d. (spatial and temporal) relations. Models based on kernels and GPs allow us to advance in uncertainty quantification using predictive variances under biophysical constraints. Advances in sparse, reduced-rank and divide-and-conquer schemes address the computational cost problem. The proposed kernel  framework aims to improve results in terms of accuracy, reduced uncertainty, consistency of the estimations and computational efficiency.

- **Novel methods for EO data processing.** Products derived from a single multispectral sensor are hampered by a limited spatial, spectral or temporal. In addition, clouds and aerosols can adversely affect the signal contaminating the land surface observation. We have developed new and scalable data fusion methods which run very efficiently in cloud computing platforms and allow the continuous monitoring of Earth’s land surface at an unprecedented level of spatial detail.

- **Upscaling vegetation functions and diversity from in-situ and EO data.** Some key vegetation traits provide a fundamental basis for quantitative and predictive ecology, ecologically informed landscape conservation and the global change science-policy interface. Despite their importance, providing spatially explicit maps of them is still a big challenge for the scientific community. We have developed new machine learning based approaches which allow efficiently to combine remote sensing and in-situ databases to estimate vegetation traits at high resolution. Our trait estimates are currently used to better characterize vegetation function and improve photosynthesis and biomass estimates at global scales.

- **Hybrid models for data-driven process understanding.** We develop ML methods that encode differential equations while learn from data via convolutional processes, that constrain data-driven models with physics-priors and domain knowledge with Gaussian processes, improve parameterizations with ML and VAEs, emulate physical models with self-taught ML, and blend purely data-driven and process-based models with hybrid models. As uncertainty and extrapolation are important aspects in in general, we mostly rely on Bayesian nonparametrics and Gaussian process modeling yet combinations with deep learning has been also pushed forward in the group. This allows us to estimate more robust models and biophysical parameters for land, ocean and the atmosphere.

- **Advanced classification and segmentation.** We develop algorithms for image segmentation and anomaly (or change) detection in multivariate data. Deep learning, kernel machines and autoencoders definitely play a role, and a plethora of applications have been presented in cloud screening, flood detection, land cover detection, change detection in hyperpspectral image processing, methane plume detection, and trace gases anomaly detection.

- **Extreme event detection and characterization.** Climate is changing fast and challenges the response mechanisms by changing the likelihood and intensity of extreme weather events. we develop the detection and characterization of extremes with advanced machine learning algorithms around three main inference paradigms: deep learning, generative models and Bayesian (probabilistic) non-parametric models. Algorithms allows us to 1) detect, localize and characterize extreme events; 2) associate impacts on biosphere and society with the characteristics of the extreme events; and 3) infer trends in extreme events and their characteristics.

- **Modes of variability and causal discovery.** Tackling climate change needs to understand the complex phenomena occurring on the Planet. Discovering  teleconnection patterns is an essential part of the endeavor. Nonlinearities, nonstationarities and the (ab)use of correlation analyses hamper the discovery of true causal patterns. We investigate the use of novel nonlinear methods able to extend state-of-the-art approaches. In both approaches, the idea is to find a low-dimensional mapping of the spatio-temporal data such that most of the information is retained.

- **Discover knowledge and causal relations in Earth observation data.** We investigate graphical causal models and regression-based causal schemes applied to large heterogeneous EO data streams. This requires improved measures of (conditional) independence, designing experiments in controlled situations and using high-quality data. Learning the hierarchy of the relations between variables and related covariates, as well as their causal relations, may in turn allow the discovery of hidden essential variables, drivers and confounders. Moving from correlation to dependence and then to causation concepts is fundamental to advance the field of Earth Observation and the science of climate change.

### Related Projects 

{{< projects "usmile" "xaida" "deepcube" "elise" "sedal" "cloud" "mapict" >}}


<style>
@media (max-width: 767px) {
  .image_e {
    max-width: 100%;
    height: auto;
    overflow-x: auto;
  }
}

</style>
</div>