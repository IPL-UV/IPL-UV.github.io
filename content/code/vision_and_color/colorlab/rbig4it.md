---
title: "RBIG4IT: Information Theory Measures via Multidimensional Gaussianization"
abstract: |
  Information theory is an outstanding framework to measure uncertainty, dependence and relevance in data and systems. It has several desirable properties for real world applications: it naturally deals with multivariate data, it can handle heterogeneous data types, and the measures can be interpreted in physical units. However, it has not been adopted by a wider audience because obtaining information from multidimensional data is a challenging problem due to the curse of dimensionality. Here we propose an indirect way of computing information based on a multivariate Gaussianization transform. Our proposal mitigates the difficulty of multivariate density estimation by reducing it to a composition of tractable (marginal) operations and simple linear transformations, which can be interpreted as a particular deep neural network. We introduce specific Gaussianization-based methodologies to estimate total correlation, entropy, mutual information and Kullback-Leibler divergence. We compare them to recent estimators showing the accuracy on synthetic data generated from different multivariate distributions. We made the tools and datasets publicly available to provide a test-bed to analyze future methodologies. Results show that our proposal is superior to previous estimators particularly in high-dimensional scenarios; and that it leads to interesting insights in neuroscience, geoscience, computer vision, and machine learning.

  # Software

  ## [RBIG Python toolbox](https://github.com/IPL-UV/rbig)

  Includes tools to compute Information Theory measures used in the current paper [RBIG4IT2020]

  ## [Demo in Google Colab](https://colab.research.google.com/github/IPL-UV/rbig/blob/master/notebooks/information_theory_colab.ipynb)

  This demo provides an interactive example of how to use the RBIG Python toolbox to compute information measures like entropy and mutual information. It's an easy-to-follow resource for those interested in testing the methods on their data.

  ## [RBIG Matlab toolbox](https://github.com/IPL-UV/rbig_matlab)

  Includes tools to compute Information Theory measures and scripts to generate the synthetic data for the experiments in the current paper [RBIG4IT2020]

  ## Paper Summary

  The measures that can be computed using RBIG defined in this paper are the ones in the following figure + the Kulback-Leibler divergence. The main point is that RBIG allows to get acurated estimations of these measures even in multidimensional datasets.

  ## Extended results

  Here extra results for the paper are shown. Mainly figures for results on synthetic data that would taken too much space in the original paper.

  ## Total Correlation

  The total correlation is a measure of multivariate dependence among several variables. In this section, we show how the RBIG methodology allows for precise estimation of total correlation, even for datasets with non-Gaussian distributions or high dimensionality.

  ## Entropy

  Entropy is a fundamental concept in information theory, representing the amount of uncertainty in a dataset. Using RBIG, we show that entropy can be computed more efficiently compared to classical estimators, particularly in datasets with complex dependencies.


  ## KLD

  Kullback-Leibler divergence measures how one probability distribution diverges from a second, reference distribution. RBIG offers a more accurate way to compute KLD in high-dimensional settings, improving performance in tasks like anomaly detection and model comparison.

  ## Mutual Information

  Mutual information quantifies the amount of information obtained about one random variable through another. The RBIG methodology demonstrates superior performance in estimating mutual information, especially in datasets with nonlinear dependencies, making it a valuable tool for feature selection and data analysis.

images:
  - link: "fig_1.webp"
    title: "[Information Theory Measures](#paper-summary)"
    description: "This figure illustrates the key measures of Information Theory that can be estimated using the RBIG methodology, including total correlation, entropy, mutual information, and Kullback-Leibler divergence."

  - link: "Table_T.webp"
    title: "[Total Correlation Estimation](#extended-results)"
    description: "This table shows the total correlation estimation results in relative mean absolute error for different distributions: Gaussian, uniform, and Student PDFs (μ = 3, 5, 20 for each row). Each column corresponds to experiments with varying dimensions D."

  - link: "Figure_T.webp"
    title: "[Total Correlation Results](#total-correlation)"
    description: "Graphical representation of total correlation estimation results. This figure compares the performance of different estimators for various multivariate distributions and dimensions."

  - link: "Table_H.webp"
    title: "[Entropy Estimation](#entropy)"
    description: "This table presents the entropy estimation results for different data distributions and dimensional settings, showcasing the performance of the RBIG estimator."

  - link: "Figure_H.webp"
    title: "[Entropy Results](#entropy)"
    description: "A figure showing the entropy estimation results, comparing the RBIG approach with other methods across various distributions and dimensionalities."

  - link: "Table_KL.webp"
    title: "[Kullback-Leibler Divergence Estimation](#entropy)"
    description: "This table summarizes the results of Kullback-Leibler divergence estimations for synthetic datasets, illustrating the performance of RBIG in different high-dimensional settings."

  - link: "Figure_KL1.webp"
    title: "[KLD Estimation Results](#kld)"
    description: "A visual comparison of Kullback-Leibler divergence estimators. The RBIG estimator is shown to perform well in a range of complex, high-dimensional scenarios."

  - link: "Table_I.webp"
    title: "[Mutual Information Estimation](#kld)"
    description: "This table presents the mutual information estimation results. The performance of RBIG is compared to other estimators for various distributions."

  - link: "Figure_MI.webp"
    title: "[Mutual Information Results](#mutual-information)"
    description: "Graphical results of mutual information estimation comparing RBIG with recent methods across several distributions and dimensions."



references:
  - title: "Information Theory Measures via Multidimensional Gaussianization [RBIG4IT2020]"
    authors: "V. Laparra, E. Johnson, G. Camps-Valls, R. Santos-Rodriguez, J. Malo."
  - title: "Iterative Gaussianization: from ICA to Random Rotations [TNN2011]"
    authors: "V. Laparra, G. Camps & J. Malo."
    publication: "IEEE Transactions on Neural Networks."

links:
  - title: "RBIG Python toolbox"
    link: "https://github.com/IPL-UV/rbig"
  - title: "Demo in Google Colab"
    link: "https://colab.research.google.com/github/IPL-UV/rbig/blob/master/notebooks/information_theory_colab.ipynb"
  - title: "RBIG Matlab toolbox"
    link: "https://github.com/IPL-UV/rbig_matlab"
---
