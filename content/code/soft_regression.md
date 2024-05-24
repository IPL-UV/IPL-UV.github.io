---
title: "Regression and system identification"
image: "/images/code/lorentz.webp"
link: "soft_regression.md"
weight: 1
draft: false
---


<div class="panel panel-default">
  <div class="panel-heading">
    <h2>simpleR v2.1: simple Regression toolbox</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <img src="/images/code/boxplot.webp" class="subpage-image">
    </div>
    <div class="col-md-6">
      <p>The simple Regression toolbox, simpleR, contains a set of functions in Matlab to illustrate the capabilities of several statistical regression algorithms. simpleR contains simple educational code for linear regression (LR), decision trees (TREE), neural networks (NN), support vector regression (SVR), kernel ridge regression (KRR), aka Least Squares SVM, Gaussian Process Regression (GPR), and Variational Heteroscedastic Gaussian Process Regression (VHGPR). We also include a dataset of collected spectra and associated chlorophyll content to illustrate the training/testing procedures. This is just a demo providing a default initialization. Training is not at all optimized. Other initializations, optimization techniques, and training strategies may be of course better suited to achieve improved results in this or other problems. We just did it in the standard way for illustration and educational purposes, as well as to disseminate these models.</p>
      <p>Last version of the toolbox is in GitHub: <a href="https://github.com/IPL-UV/simpleR">https://github.com/IPL-UV/simpleR</a>.</p>
    </div>
    <div class="col-md-4 references">
        <div class="panel-heading2">
            <h3>References</h3>
        </div>
      <ul>
        <li>Retrieval of biophysical parameters with heteroscedastic Gaussian processes. Lázaro-Gredilla, M. and Titsias, M.K. and Verrelst, J. and Camps-Valls, G. IEEE Geoscience and Remote Sensing Letters 11 (4):838-842, 2014</li>
        <li>Prediction of daily global solar irradiation using temporal Gaussian processes. Salcedo-Sanz, S. and Casanova-Mateo, C. and Muñoz-Marí, J. and Camps-Valls, G. IEEE Geoscience and Remote Sensing Letters 11 (11):1936-1940, 2014</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>A comprehensive Gaussian processes repository</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <img src="/images/code/GP.webp" class="subpage-image">
    </div>
    <div class="col-md-6">
      <p>A comprehensive repo on Gaussian processes code, literature and model zoo.</p>
    </div>
    <div class="col-md-4 references">
        <div class="panel-heading2">
            <h3>References</h3>
        </div>
      <ul>
        <li>A comprehensive Gaussian processes repository. J. E. Johnson, Tech Rep 2019/12B, Universitat de Valencia, 2019</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>Gaussian processes with input noise</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <img src="/images/code/GP.webp" class="subpage-image">
    </div>
    <div class="col-md-6">
      <p>Gaussian processes with input noise.</p>
    </div>
    <div class="col-md-4 references">
        <div class="panel-heading2">
            <h3>References</h3>
        </div>
      <ul>
        <li>Accounting for Input Noise in Gaussian Process Parameter Retrieval. Johnson, J. E. and Laparra, V. and Camps-Valls, G. IEEE Geoscience and Remote Sensing Letters 17 (3):391-395, 2020</li>
      </ul>
    </div>
  </div>
  <div class="panel-heading">
    <h2>Joint Gaussian processes</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <img src="/images/code/jgp.webp" class="subpage-image">
    </div>
    <div class="col-md-6">
      <p>We introduce a nonlinear nonparametric regression model which combines knowledge from real observations and simulated data from physical models. The inversion is performed taking into account jointly both real observations and RTM-simulated data. The proposed Joint Gaussian Process (JGP) provides a solid framework for exploiting the regularities between the two types of data. The JGP automatically detects the relative quality of the simulated and real data, and combines them accordingly. This occurs by learning an additional hyper-parameter w.r.t. a standard GP model, and fitting parameters through maximizing the pseudo-likelihood of the real observations.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Svendsen, D. H., Martino, L., Campos-Taberner, M., García-Haro, F. J., & Camps-Valls, G. (2017). Joint Gaussian processes for biophysical parameter retrieval. IEEE Transactions on Geoscience and Remote Sensing, 56(3), 1718-1727.</li>
        <li>Svendsen, Daniel Heestermans, et al. "Joint Gaussian processes for inverse modeling." 2017 IEEE International Geoscience and Remote Sensing Symposium (IGARSS). IEEE, 2017.</li>
        <li>Bonilla, Edwin V., Kian M. Chai, and Christopher Williams. "Multi-task Gaussian process prediction." Advances in neural information processing systems. 2008.</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>Deep Gaussian processes for biophysical parameter estimation</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <img src="/images/code/dgp.webp" class="subpage-image">
    </div>
    <div class="col-md-6">
      <p>The interaction of electromagnetic radiation with a planetary atmosphere and vegetation is a complex physical process, to the extent that often a single (shallow) GP models cannot capture feature relations for inversion. This motivates the use of deeper hierarchical architectures, while still preserving the desirable properties of GPs. We therefore employ the use of deep Gaussian Processes (DGPs) for bio-geo-physical model inversion. Unlike shallow GP models, DGPs account for complicated (modular, hierarchical) processes, provide an efficient solution that scales well to big datasets, and improve prediction accuracy over their single layer counterpart.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Deep Gaussian Processes for Parameter Retrieval and Model Inversion Daniel H. Svendsen, Pablo M. Alvarez, Ana Belen Ruescas, Rafael Molina and Gustau Camps-Valls, Submitted, 2020.</li>
        <li>Svendsen, Daniel Heestermans, et al. "Deep Gaussian Processes for Geophysical Parameter Retrieval." IGARSS 2018-2018 IEEE International Geoscience and Remote Sensing Symposium. IEEE, 2018.</li>
        <li>Salimbeni, Hugh, and Marc Deisenroth. "Doubly stochastic variational inference for deep Gaussian processes." Advances in Neural Information Processing Systems. 2017.</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>Fair Kernel Learning</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <img src="/images/code/FairKernelLearning2017.webp" class="subpage-image">
    </div>
    <div class="col-md-6">
      <p>New social and economic activities massively exploit big data and machine learning algorithms to do inference on people's lives. Applications include automatic curricula evaluation, wage determination, and risk assessment for credits and loans. Recently, many governments and institutions have raised concerns about the lack of fairness, equity and ethics in machine learning to treat these problems. It has been shown that not including sensitive features that bias fairness, such as gender or race, is not enough to mitigate the discrimination when other related features are included. Instead, including fairness in the objective function has been shown to be more efficient.</p>
      <p>We present novel fair regression and dimensionality reduction methods built on a previously proposed fair classification framework. Both methods rely on using the Hilbert Schmidt independence criterion as the fairness term. Unlike previous approaches, this allows us to simplify the problem and to use multiple sensitive variables simultaneously. Replacing the linear formulation by kernel functions allows the methods to deal with nonlinear problems. For both linear and nonlinear formulations the solution reduces to solving simple matrix inversions or generalized eigenvalue problems. This simplifies the evaluation of the solutions for different trade-off values between the predictive error and fairness terms. We illustrate the usefulness of the proposed methods in toy examples, and evaluate their performance on real world experiments of predicting income using gender and/or race discrimination as sensitive variables.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Fair Kernel Learning. Adrián Pérez-Suay, Valero Laparra, Gonzalo Mateo-García, Jordi Muñoz-Marí, Luis Gómez-Chova and Gustau Camps-Valls. ECML PKDD 2017 (Accepted)</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>MSVR: Multioutput Support Vector Regression</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <img src="/images/code/svm_map.webp" class="subpage-image">
    </div>
    <div class="col-md-6">
      <p>Standard SVR formulation only considers the single-output problem. In the case of several output variables, other methods (neural networks, kernel ridge regression) must be deployed, but the good properties of SVR are lost: hinge-loss function and sparsity. The proposed model M-SVR extends the single-output SVR by taking into account the nonlinear relations between features but also among the output variables, which are typically inter-dependent.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Multioutput support vector regression for remote sensing biophysical parameter estimation Tuia, D. and Verrelst, J. and Alonso, L. and Perez-Cruz, F. and Camps-Valls, G. IEEE Geoscience and Remote Sensing Letters 8 (4):804-808, 2011</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>Epsilon-Huber Support Vector Regression</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <img src="/images/code/losses_web.webp" class="subpage-image">
    </div>
    <div class="col-md-6">
      <p>The combination of the classical Vapnik's e-insensitive loss function and the Huber cost function leads to enhanced performance when different noise sources are present in the data. This cost function has been applied to system identification, gamma-filtering, and to SVR.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>A unified SVM framework for signal estimation Rojo-Álvarez, J.L. and Martínez-Ramón, M. and Muñoz-Marí, J. and Camps-Valls, G. Digital Signal Processing: A Review Journal 26 (1):1-20, 2014</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>SS-SVR: Semi-supervised Support Vector Regression</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <img src="/images/code/ssvr.webp" class="subpage-image">
    </div>
    <div class="col-md-6">
      <p>It contains two kernel-based methods for semi-supervised regression. The methods rely on building a graph or hypergraph Laplacian with both the available labeled and unlabeled data, which is further used to deform the training kernel matrix. The deformed kernel is then used for support vector regression (SVR). Given the high computational burden involved, we present two alternative formulations based on the Nyström method and the Incomplete Cholesky Factorization to achieve operational processing times. The semi-supervised SVR algorithms are successfully tested in multiplatform LAI estimation and oceanic chlorophyll concentration prediction. Experiments are carried out with both multispectral and hyperspectral data, demonstrating good generalization capabilities when low number of labeled samples are available, which is usually the case in biophysical parameter estimation.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Biophysical parameter estimation with a semisupervised support vector machine Camps-Valls, G. and Munoz-Marí, J. and Gómez-Chova, L. and Richter, K. and Calpe-Maravilla, J. IEEE Geoscience and Remote Sensing Letters 6 (2):248-252, 2009</li>
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
      <img src="/images/code/artmo.webp" class="subpage-image">
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

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>KARMA: Kernel AutoRegressive Moving Average with the Support Vector Machine</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <img src="/images/code/lorentz.webp" class="subpage-image">
    </div>
    <div class="col-md-6">
      <p>Nonlinear system identification based on Support Vector Machines (SVM) has been usually addressed by means of the standard SVM regression (SVR), which can be seen as an implicit nonlinear Auto Regressive and Moving Average (ARMA) model in some Reproducing Kernel Hilbert Spaces (RKHS). The proposal here is twofold: First, the explicit consideration of an ARMA model in RKHS (SVM-ARMA2K) is originally proposed. Second, a general class of SVM-based system identification nonlinear models is presented, based on the use of composite Mercer's kernels.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Support vector machines for nonlinear Kernel ARMA system identification Martínez-Ramón, M. and Rojo-Álvarez, J.L. and Camps-Valls, G. and Muñoz-Marí, J. and Navia-Vázquez, A. and Soria-Olivas, E. and Figueiras-Vidal, A.R. IEEE Transactions on Neural Networks 17 (6):1617-1622, 2006</li>
        <li>A unified SVM framework for signal estimation Rojo-Álvarez, J.L. and Martínez-Ramón, M. and Muñoz-Marí, J. and Camps-Valls, G. Digital Signal Processing: A Review Journal 26 (1):1-20, 2014</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>ARX-RVM: Autorregressive eXogenous Relevance Vector Machine</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <img src="/images/code/sbprior.webp" class="subpage-image">
    </div>
    <div class="col-md-6">
      <p>Nonlinear system identification based on relevance vector machines (RVMs) has been traditionally addressed by stacking the input and/or output regressors and then performing standard RVM regression. Here we introduce a full family of composite kernels to integrate the input and output information in the mapping function. An improved trade-off between accuracy and sparsity is obtained in several benchmark problems. Also, the ARX-RVM yields confidence intervals for the predictions, and it is less sensitive to free parameter selection.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Nonlinear system identification with composite relevance vector machines Camps-Valls, G. and Martínez-Ramón, M. and Rojo-Álvarez, J.L. and Muñoz-Marí, J. IEEE Signal Processing Letters 14 (4):279-282, 2007</li>
        <li>A unified SVM framework for signal estimation Rojo-Álvarez, J.L. and Martínez-Ramón, M. and Muñoz-Marí, J. and Camps-Valls, G. Digital Signal Processing: A Review Journal 26 (1):1-20, 2014</li>
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
      <img src="/images/code/signal-noise.webp" class="subpage-image">
    </div>
    <div class="col-md-6">
      <p>The kernel signal to noise ratio (KSNR) considers a least squares regression model that maximizes the signal variance while minimizes the estimated noise variance in a reproducing kernel Hilbert space (RKHS). The KSNR can be used in any kernel method to deal with correlated (possibly non-Gaussian) noise. KSNR yields more fitted solutions and extracts more noise-free features when confronted with standard approaches.</p>
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