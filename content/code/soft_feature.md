---
title: "Feature extraction, dimensionality reduction and manifold learning"
image: "/images/code/feat_extr.webp"
weight: 3
draft: false
---

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>ROCK-PCA: Rotated Complex Kernel PCA for nonlinear spatio-temporal data analysis</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://github.com/DiegoBueso/ROCK-PCA">
        <img src="/images/code/rock.webp" height="150" width="150" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>The rotated complex kernel PCA (ROCK-PCA for short) works in reproducing kernel Hilbert spaces to account for nonlinear processes, operates in the complex domain to account for both space and time features and time-lagged correlations, and adds an extra rotation for improved flexibility and physical consistency. The result is an explicitly resolved spatio-temporal decomposition of Earth and climate data cubes. The method is unsupervised and computationally very efficient. We illustrate its ability to uncover spatio-temporal patterns using synthetic experiments and real data. Results of the decomposition of three essential climate variables are shown: satellite-based global gross primary productivity (GPP), soil moisture (SM), and reanalysis sea surface temperature (SST) data. The ROCK-PCA method allows identifying their annual and seasonal oscillations, as well as their nonseasonal trends and spatial variability patterns.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Nonlinear PCA for Spatio-Temporal Analysis of Earth Observation Data Bueso, D. and Piles, M. and Camps-Valls, G. IEEE Transactions on Geoscience and Remote Sensing 58 (8), 2020</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>DRR: Dimensionality Reduction via Regression</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/drr.html">
        <img src="/images/code/drr_image3.webp" height="121" width="160" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>Dimensionality Reduction via Regression (DRR) is a manifold learning technique intended to remove the residual statistical dependence between PCA components due to the curvature in the dataset. DRR is based on the prediction of PCA coefficients from neighbor coefficients using multivariate regression (hence generalizing PPA). DRR is a computationally convenient step forward to SPCA in the family of manifold learning techniques generalizing PCA through the use of curves instead of straight lines (that includes NL-PCA, PPA, and SPCA).</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Dimensionality reduction via regression in hyperspectral imagery Laparra, V. and Malo, J. and Camps-Valls, G. IEEE Journal on Selected Topics in Signal Processing 9 (6):1026-1036, 2015</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>PPA: Principal Polynomial Analysis</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/ppa.html">
        <img src="/images/code/ppa_code.webp" height="111" width="140" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>Principal Polynomial Analysis (PPA) is a manifold learning technique based on the use of a sequence of principal polynomials that capture the eventually nonlinear nature of the data, hence generalizing PCA by admitting curves instead of straight lines. PPA follows the Sequential Principal Curves Analysis philosophy (invertible projection onto a set of curvilinear features, see below) but using a computationally convenient (univariate) analytical form for the curves and a dimensionality reduction goal function. PPA improves the PCA energy compaction ability thus reducing its dimensionality reduction error. PPA defines a manifold-dependent metric that generalizes Mahalanobis distance for curved manifolds, and allows to compute generalized curvatures at any point.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Principal polynomial analysis Laparra, V. and Jiménez, S. and Tuia, D. and Camps-Valls, G. and Malo, J. International Journal of Neural Systems 24 (7) 2014</li>
      </ul>
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
      <p>Last version of the toolbox is in GitHub: <a href="https://github.com/IPL-UV/simFeat">https://github.com/IPL-UV/simFeat</a>.</p>
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
    <h2>RBIG: Rotation-Based Iterative Gaussianization</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/rbig.html">
        <img src="/images/code/softwa1.webp" height="121" width="140" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>RBIG is an invertible multivariate Gaussianization transform based on the repeated application of univariate histogram Gaussianization and arbitrary multivariate rotation. By reversing the order of the linear+nonlinear stages in Deep Networks and Projection Pursuit, we show that even inexpensive random rotations lead to the Gaussian goal. RBIG can be used for multivariate PDF estimation and all the associated applications.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Iterative gaussianization: From ICA to random rotations Laparra, V. and Camps-Valls, G. and Malo, J. IEEE Transactions on Neural Networks 22 (4):537-549, 2011</li>
        <li>PCA Gaussianization for one-class remote sensing image classification Laparra, V. and Muñoz-Marí, J. and Camps-Valls, G. and Malo, J. Proceedings of SPIE - The International Society for Optical Engineering 7477 2009</li>
        <li>PCA Gaussianization for image processing Laparra, V. and Camps-Valls, G. and Malo, J. Proceedings - International Conference on Image Processing, ICIP 2009</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>SPCA: Sequential Principal Curves Analysis</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/spca.html">
        <img src="/images/code/Cuerno_crit_1_ori_dom.webp" height="121" width="140" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>SPCA is an invertible manifold learning technique based on the use of a sequence of nonparametric principal curves that capture the eventually nonlinear nature of the data, hence generalizing PCA by admitting curves instead of straight lines. On top of the unfolding associated to the projection onto the Principal Curves, the metric along the curves is set according to the local PDF thus leading to multivariate histogram equalization fulfilling either NonLinear ICA (information maximization) or optimal Vector Quantization (error minimization).</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Nonlinearities and adaptation of color vision from sequential principal curves analysis Laparra, V. and Jiménez, S. and Camps-Valls, G. and Malo, J. Neural Computation 24 (10):2751-2788, 2012</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>SSKPLS: Semisupervised Kernel Partial Least Squares</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/code/featureextraction/sskpls_toolbox.zip">
        <img src="/images/code/sskpls.webp" height="121" width="140" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>Exploitation of probabilistic cluster kernels for nonlinear feature extraction with kernels. The kernel function is built from data, and outperforms standard kernel functions, as well as information theoretic kernels such as the Fisher kernels and mutual information kernels.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Spectral clustering with the probabilistic cluster kernel Emma Izquierdo-Verdiguier and Robert Jenssen and Luis Gómez-Chova and Gustavo Camps-Valls Neurocomputing 149, Part C :1299-1304, 2015</li>
        <li>Semisupervised kernel feature extraction for remote sensing image analysis Izquierdo-Verdiguier, E. and Gomez-Chova, L. and Bruzzone, L. and Camps-Valls, G. IEEE Transactions on Geoscience and Remote Sensing 52 (9):5567-5578, 2014</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>HOCCA: Higher Order Canonical Correlation Analysis</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/HOCCA.html">
        <img src="/images/code/hocca.webp" height="121" width="140" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>Higher Order Canonical Analysis (HOCCA) is a linear invertible manifold learning technique to be applied on several data sets coming from the same underlying source (the domain adaptation problem): It finds in each data set independent components which are related across the data sets, thus conciliating the goals of ICA and CCA at the same time. The canonical domain found by HOCCA maximizes the independence in the internal domain (similarly to separate ICAs) and maximizes the correspondence between the features in each acquisition condition (similarly to CCA).</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Spatio-Chromatic Adaptation via Higher-Order Canonical Correlation Analysis of Natural Images Gutmann, Michael U. and Laparra, Valero and Hyvärinen, Aapo and Malo, Jesús PLoS ONE Public Library of Science 9 (2):e86481, 2014</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>SSMA: SemiSupervised Manifold Alignment</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/code/featureextraction/ssma.zip">
        <img src="/images/code/ssma.webp" height="121" width="140" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>The SSMA Toolbox is a Matlab Toolbox for the semisupervised manifold alignment of generic data without the need of having corresponding pairs, just a set of (few) labeled samples in each domain.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Semisupervised manifold alignment of multimodal remote sensing images Tuia, D. and Volpi, M. and Trolliet, M. and Camps-Valls, G. IEEE Transactions on Geoscience and Remote Sensing 52 (12):7708-7720, 2014</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>KEMA: Kernel Manifold Alignment</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://github.com/dtuia/KEMA">
        <img src="/images/code/simpsonize.webp" height="100" width="140" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>Kernelization of SSMA, which allows for much better semantic alignments of multisource data.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Kernel Manifold Alignment for Domain Adaptation Tuia, D. and G. Camps-Valls PLoS ONE, 2016</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>OKECA: Optimized Kernel Entropy Component Analysis</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/code/featureextraction/okeca_v1.zip">
        <img src="/images/code/okeca.webp" height="100" width="140" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>Optimized kernel feature extraction based on entropy estimation in Hilbert feature spaces. Outstanding results are obtained with much less components: OKECA is intrinsically sparse and compact, very useful for data visualization and dimensionality reduction.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Optimized Kernel Entropy Components. E. Izquierdo-Verdiguier, V. Lapara, R. Jenssen, L. Gómez-Chova, G. Camps-Valls IEEE Transactions on Neural Networks and Learning Systems, 2016</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>KSNR: Kernel Signal to Noise Ratio</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/code/featureextraction/ksnr.zip">
        <img src="/images/code/signal-noise.webp" height="121" width="140" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>The kernel signal to noise ratio (KSNR) considers a feature extraction model that maximizes the signal variance while minimizes the estimated noise variance in a reproducing kernel Hilbert space (RKHS). The KSNR can be used for dimensionality reduction as an excellent alternative to kPCA when dealing with correlated (possibly non-Gaussian) noise. KSNR yields more fitted solutions and extracts more noise-free features when confronted with standard approaches.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Learning with the kernel signal to noise ratio Gomez-Chova, L. and Camps-Valls, G. IEEE International Workshop on Machine Learning for Signal Processing, MLSP 2012</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>EPLS: Unsupervised sparse convolutional neural networks for feature extraction</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://sites.google.com/site/adriromsor/epls">
        <img src="/images/code/epls.webp" height="121" width="140" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>EPLS stands for Enhancing Population and Lifetime Sparsity, a very good alternative to achieve sparse representations when training machines such as convolutional neural nets. EPLS is a meta-parameter free, off-the-shelf, simple and fast unsupervised feature learning algorithm, which exploits a new way of optimizing for sparsity. The algorithm sets an output target with one "hot code" while ensuring a strong form of lifetime sparsity to avoid dead outputs and optimizes for that specific target to learn the dictionary bases.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Unrolling loopy top-down semantic feedback in convolutional deep networks Carlo Gatta, Adriana Romero, Joost van de Weijer. Deep-vision workshop CVPR, 2014.</li>
        <li>Unsupervised Deep Feature Extraction Of Hyperspectral Images Adriana Romero, Carlo Gatta, Gustavo Camps-Valls IEEE Workshop on Hyperspectral Image and Signal Processing, Whispers, 2014</li>
        <li>Unsupervised Deep Feature Extraction for Remote Sensing Image Classification Romero, A. and Gatta, C. and Camps-Valls, G. Geoscience and Remote Sensing, IEEE Transactions on 2015</li>
        <li>Shared feature representations of LiDAR and optical images: Trading sparsity for semantic discrimination Campos-Taberner, M. and Romero, A. and Gatta, C. and Camps-Valls, G. Geoscience and Remote Sensing Symposium (IGARSS), 2015 IEEE International, 2015</li>
      </ul>
    </div>
  </div>
</div>
</div>
