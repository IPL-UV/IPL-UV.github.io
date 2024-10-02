---
title: "Randomized Kernels for Large Scale Earth Observation Applications"
type: "code"
layout: "single_four"
references:
  - title: "Randomized Kernels for Large Scale Earth Observation Applications"
    authors: "Adrián Pérez-Suay, Julia Amorós-López, Luis Gómez-Chova, Valero Laparra, Jordi Muñoz-Marí, Gustau Camps-Valls"
    publication: "Remote Sensing of Environment, 202, 54-63, 2017"
    link: "http://www.sciencedirect.com/science/article/pii/S0034425717300615"
links:
  - title: "RKS Regression Code"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_rs/RKS_regression.m"
  - title: "RKS Classification Code"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_rs/RKS_classification.m"
  - title: "Cloud Classification Application"
    link: "../videos"
  - title: "PROSAIL Model Inversion Application"
    link: "./rks2017/prosail.html"
  - title: "Atmospheric Parameter Retrieval from IASI/Metop"
    link: "./rks2017/iasi.html"
---

Current remote sensing applications for bio-geophysical parameter estimation and image classification handle unprecedented amounts of heterogeneous and complex data. New satellite sensors with higher time, space, and wavelength resolutions present computational challenges. Standard inversion techniques struggle to keep up with these new data sources, and classifying land cover from these new images requires substantial memory and processing power. Statistical learning has aided in developing models that can process large-scale Earth observation data.

Kernel methods are powerful machine learning algorithms widely used in remote sensing and geosciences. However, they are not broadly adopted due to high computational costs when applied to large-scale problems. This paper introduces an efficient kernel method for fast statistical retrieval of atmospheric and biophysical parameters, as well as for image classification. It uses projections on random Fourier features, approximating shift-invariant kernels, enabling large-scale data processing with kernel methods. The approach is computationally efficient, memory-conscious, and parallelizable.

We demonstrate the feasibility of kernel regression and classification on datasets with millions of samples. Examples include atmospheric parameter retrieval from IASI/Metop hyperspectral infrared sounders, large-scale inversion of the PROSAIL model on Sentinel-2 data, and cloud identification over landmarks in time series from MSG/Seviri images.

This webpage includes supplementary material to the paper Randomized Kernels for large scale Earth Observation applications by Pérez-Suay et al. in [Remote Sensing of Environment, 2017](http://www.sciencedirect.com/science/article/pii/S0034425717300615). We include MATLAB illustrative code and videos showing operational performance of the proposed method in the particular case of cloud identification over landmarks. If you find the paper or provided MATLAB code below interesting and useful, please cite the work.