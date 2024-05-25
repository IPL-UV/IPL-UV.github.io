---
title: "Remote sensing applications"
image: "/images/code/data.webp"
weight: 5
draft: false
---

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>Kernel Vegetation Indices</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://github.com/IPL-UV/">
        <img src="/images/code/kndvi.webp" width="160" class="subpage-image">
      </a>
    </div>
    <div class="col-md-10">
      <p>Empirical vegetation indices derived from spectral reflectance data are widely used in remote sensing of the biosphere, as they represent robust proxies for canopy structure, leaf pigment content and, subsequently, plant photosynthetic potential. Here we generalize the broad family of commonly used vegetation indices by exploiting all higher-order relations between the spectral channels involved. This results in a higher sensitivity to vegetation biophysical and physiological parameters. The presented nonlinear generalization of the celebrated Normalized Difference Vegetation Index (NDVI) consistently improves accuracy in monitoring key parameters, such as leaf area index, gross primary productivity, and sun-induced chlorophyll fluorescence. Check the paper and (especially) the supplementary material for more details, parameter prescriptions, other examples of application and code snippets and demos.</p>
      <b>A Unified Vegetation Index for Quantifying the Terrestrial Biosphere</b>
      <p>Gustau Camps-Valls, Manuel Campos-Taberner, Álvaro Moreno-Martı́nez, Sophia Walther, Grégory Duveiller, Alessandro Cescatti, Miguel Mahecha, Jordi Muñoz-Marı́, Francisco Javier Garcı́a-Haro, Luis Guanter, John Gamon, Martin Jung, Markus Reichstein, Steven W. Running. Science Advances, 26 Feb 2021: Vol. 7, no. 9, eabc7447. DOI: 10.1126/sciadv.abc7447</p>
      <p>
        &nbsp;&nbsp;&nbsp;<a href="https://advances.sciencemag.org/content/7/9/eabc7447">Science Advances (open access, no hyperlinks)</a> <br>
        &nbsp;&nbsp;&nbsp;<a href="https://zenodo.org/record/4574349">Preprint paper+supplementary material in one file (with hyperlinks)</a> <br>
        &nbsp;&nbsp;&nbsp;<a href="https://github.com/IPL-UV/kNDVI">GitHub</a>
      </p>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>Randomized Kernels for Large Scale Earth Observation Applications</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/code/rks2017.html">
        <img src="/images/code/fourierfourier.webp" width="140" class="subpage-image">
      </a>
    </div>
    <div class="col-md-10">
      <p>Kernel methods constitute a family of powerful machine learning algorithms, which have found wide use in remote sensing and geosciences. However, kernel methods are still not widely adopted because of the high computational cost when dealing with large scale problems, such as the inversion of radiative transfer models or the classification of high spatial-spectral-temporal resolution data. This paper introduces an efficient kernel method for fast statistical retrieval of atmospheric and biophysical parameters and image classification problems real applications. We rely on a recently presented approximation to shift-invariant kernels using projections on random Fourier features. The method allows to approximate a kernel matrix with a set of projections on random bases sampled from the Fourier domain. The method is simple, computationally very efficient in both memory and processing costs, and easily parallelizable.</p>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>MERIS/AATSR Synergy Cloud Screening</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="http://www.brockmann-consult.de/cms/web/beam/">
        <img src="/images/code/cloud.webp" height="121" width="140" class="subpage-image">
      </a>
    </div>
    <div class="col-md-10">
      <p>A module for the BEAM platform that provides cloud screening within the MERIS/AATSR Synergy Toolbox. The MERIS/AATSR Synergy Toolbox provides processing schemes for improved cloud screening, global aerosol retrieval and land atmospheric correction using the combined multi-spectral and multi-angle information from geo-located and geo-registered MERIS and AATSR measurements.</p>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>SIMFEAT: A simple MATLAB(tm) toolbox of linear and kernel feature extraction</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/code/featureextraction/simfeat.zip">
        <img src="/images/code/feat_extr2.webp" height="121" width="140" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>Toolbox of linear and kernel feature extraction: (1) Linear methods: PCA, MNF, CCA, PLS, OPLS, and (2) Kernel feature extractors: KPCA, KMNF, KCCA, KPLS, KOPLS and KECA.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Kernel multivariate analysis framework for supervised subspace learning: A tutorial on linear and kernel multivariate methods Arenas-Garcia, J. and Petersen, K.B. and Camps-Valls, G. and Hansen, L.K. IEEE Signal Processing Magazine 30 (4):16-29, 2013</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>simpleR v2.1: simple Regression toolbox</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/code/regression/simpler-2-1.zip">
        <img src="/images/code/boxplot.webp" height="121" width="160" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>The simple Regression toolbox, simpleR, contains a set of functions in Matlab to illustrate the capabilities of several statistical regression algorithms. simpleR contains simple educational code for linear regression (LR), decision trees (TREE), neural networks (NN), support vector regression (SVR), kernel ridge regression (KRR), aka Least Squares SVM, Gaussian Process Regression (GPR), and Variational Heteroscedastic Gaussian Process Regression (VHGPR). We also include a dataset of collected spectra and associated chlorophyll content to illustrate the training/testing procedures. This is just a demo providing a default initialization. Training is not at all optimized. Other initializations, optimization techniques, and training strategies may be of course better suited to achieve improved results in this or other problems. We just did it in the standard way for illustration and educational purposes, as well as to disseminate these models.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Retrieval of biophysical parameters with heteroscedastic Gaussian processes Lázaro-Gredilla, M. and Titsias, M.K. and Verrelst, J. and Camps-Valls, G. IEEE Geoscience and Remote Sensing Letters 11 (4):838-842, 2014</li>
        <li>Prediction of daily global solar irradiation using temporal Gaussian processes Salcedo-Sanz, S. and Casanova-Mateo, C. and Muñoz-Marí, J. and Camps-Valls, G. IEEE Geoscience and Remote Sensing Letters 11 (11):1936-1940, 2014</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>simpleUnmix: simple Unmixing and Abundance estimation toolbox</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/code/remotesensing/simpleUnmixing.tar.gz">
        <img src="/images/code/unmixing.webp" height="121" width="140" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>The simple Unmixing toolbox, simpleUnmix, contains a set of functions in Matlab to illustrate the capabilities of the most representative methods in a generic process of spectral unmixing: endmember determination methods, spectral unmixing, and abundance estimation.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Remote Sensing Image Processing Camps-Valls, G. and Tuia, D. and Gómez-Chova, L. and Jiménez, S. and Malo, J. Collection "Synthesis Lectures on Image, Video, and Multimedia Processing" Al Bovik, Ed. Morgan & Claypool Publishers, LaPorte, CO, USA, 2011</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>simpleClass: Simple Classification Toolbox</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/code/classification/simpleClass-1.0.tar.gz">
        <img src="/images/code/simpleclass.webp" height="121" width="140" class="subpage-image">
      </a>
    </div>
    <div class="col-md-10">
      <p>A set of train-test simple educational functions for data classification: LDA, QDA, Mahalanobis-distance classifier, decision trees, random forests, SVM, Boosting, Bagging, Gaussian process classifiers, etc.</p>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>ALTB: Active Learning MATLAB(tm) Toolbox</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://github.com/IPL-UV/altoolbox">
        <img src="/images/code/active_learning_curve.webp" height="121" width="140" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>ALTB is a set of tools implementing state-of-the-art active learning algorithms for remote sensing applications.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Semisupervised classification of remote sensing images with active queries Munoz-Mari, J. and Tuia, D. and Camps-Valls, G. IEEE Transactions on Geoscience and Remote Sensing 50 (10 PART1):3751-3763, 2012</li>
        <li>Remote sensing image segmentation by active queries Tuia, D. and Muñoz-Marí, J. and Camps-Valls, G. Pattern Recognition 45 (6):2180-2192, 2012</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>ARTMO: Automated Radiative Transfer Models Operator</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="http://ipl.uv.es/artmo/">
        <img src="/images/code/artmo.webp" height="151" width="140" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>The in-house developed Automated Radiative Transfer Models Operator (ARTMO) Graphic User Interface (GUI) is a software package that provides essential tools for running and inverting a suite of plant RTMs, both at the leaf and at the canopy level. ARTMO facilitates consistent and intuitive user interaction, thereby streamlining model setup, running, storing and spectra output plotting for any kind of optical sensor operating in the visible, near-infrared and shortwave infrared range (400-2500 nm). the ARTMO package includes physical, statistical and hybrid inversion and model emulation. Some modules are pure machine learning techniques for regression, active learning, dimensionality reduction and feature ranking!</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Toward a semiautomatic machine learning retrieval of biophysical parameters Caicedo, J.P.R. and Verrelst, J. and Munoz-Mari, J. and Moreno, J. and Camps-Valls, G. IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing 7 (4):1249-1259, 2014</li>
      </ul>
    </div>
  </div>
</div>
