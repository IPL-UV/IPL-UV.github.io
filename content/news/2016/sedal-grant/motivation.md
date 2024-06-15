# Motivation

Despite the many successful results and developments, there are still strong limitations for the general adoption of machine learning algorithms for predicting and understanding EO data. Machine learning and signal processing have advanced enormously in the last decade (both at theoretical and applied levels) but have not moved forward the field of EO data analysis to its full potential.

The current statistical treatment of biophysical parameters is strongly limited by the quantity and quality of EO data, as well as by the abuse of standard off-the-shelf methods, which, in general, are not well-adapted to the particular characteristics of EO data. Specifically, current regression models used for EO applications are still deficient because they rely on limited amounts of meteorological and remote sensing data, do not observe the particular data characteristics, and often make strong assumptions of linearity, homoscedasticity, or Gaussianity. These limitations translate into certain risks of overfitting and unreasonably large uncertainties for the predictions, suggesting a lack of explanatory variables and deficiencies in model specification. Graphical models have been seldom used in EO data analysis. The few works restrict to local studies, use limited amounts of data and explanatory variables, consider remote sensing input features only, apply standard structure learning algorithms driven by univariate (often unconditioned) dependence estimates, and do not extract causal relations or identify new drivers in the problem.

We advocate that machine learning algorithms for EO applications need to be guided both by data and by prior physical knowledge. This combination is the way to restrict the family of possible solutions and thus obtain nonparametric flexible models that respect the physical rules governing the Earth climate system. We are equally concerned about the ‘black-box’ criticism of statistical learning algorithms, for which we aim to design self-explanatory models and take a leap towards the relevant concept of causal inference from empirical EO data.

# Related Projects

<br>

## Cloud Detection in the Cloud
- **Google Earth Engine Research Award, L. Gomez-Chova**
- 01/16 - 12/17
- [Cloud detection in the cloud](https://isp.uv.es/projects/cdc/GEE_cloud_detection_results.html)

## LIFE-VISION: Learning Image Features to Encode Visual Information
- **Spanish Ministry of Economy and Competitiveness, 2012. TIN2012-38102-C03-01**
- 01/13 - 12/15
- [LIFE-VISION](http://lifevisionproject.wordpress.com/)

## GEOLEARN
- **Spanish Ministry of Economy and Competitiveness**
- 2016
- [GEOLEARN](https://isp.uv.es/motivation_sd.html)

## ESA CCI Soil Moisture
- **European Space Agency**
- [ESA CCI Soil Moisture](http://esa-soilmoisture-cci.org/)
