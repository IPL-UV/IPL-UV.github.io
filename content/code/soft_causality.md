---
title: "Causal inference"
image: "/images/code/ChickenEgg.webp"
weight: 7
draft: false
---

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>Additive noise model with dependence gradients</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="http://isp.uv.es/code/shsic.zip">
        <img src="/images/code/shsic.webp" height="121" width="160" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>Kernel dependence measures yield accurate estimates of nonlinear relations between random variables, and they are also endorsed with solid theoretical properties and convergence rates. Besides, the empirical estimates are easy to compute in closed form just involving linear algebra operations. However, they are hampered by two important problems: the high computational cost involved, as two kernel matrices of the sample size have to be computed and stored, and the interpretability of the measure, which remains hidden behind the implicit feature map. We here address these two issues. We introduce the Sensitivity Maps (SMs) for the Hilbert-Schmidt independence criterion (HSIC). Sensitivity maps allow us to explicitly analyze and visualize the relative relevance of both examples and features on the dependence measure. We also present the randomized HSIC (RHSIC) and its corresponding sensitivity maps to cope with large scale problems. We build upon the framework of random features and the Bochner's theorem to approximate the involved kernels in the canonical HSIC. The power of the RHSIC measure scales favorably with the number of samples, and it approximates HSIC and the sensitivity maps efficiently. Convergence bounds of both the measure and the sensitivity map are also provided. Our proposal is illustrated in synthetic examples, and challenging real problems of dependence estimation, feature selection, and causal inference from empirical data.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Sensitivity maps of the Hilbert–Schmidt independence criterion Adrián Pérez-Suay and Gustau Camps-Valls Applied Soft Computing 2017</li>
        <li>Causal Inference in Geoscience and Remote Sensing from Observational Data P\'erez-Suay, A. and Camps-Valls, G. IEEE Transactions on Geoscience and Remote Sensing 57 (3) :1502-1513, 2019</li>
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
      <a href="https://isp.uv.es/code/regression/FairKernelLearning2017.zip">
        <img src="/images/code/FairKernelLearning2017.webp" height="121" width="140" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>New social and economic activities massively exploit big data and machine learning algorithms to do inference on people's lives. Applications include automatic curricula evaluation, wage determination, and risk assessment for credits and loans. Recently, many governments and institutions have raised concerns about the lack of fairness, equity and ethics in machine learning to treat these problems. It has been shown that not including sensitive features that bias fairness, such as gender or race, is not enough to mitigate the discrimination when other related features are included. Instead, including fairness in the objective function has been shown to be more efficient. We present novel fair regression and dimensionality reduction methods built on a previously proposed fair classification framework. Both methods rely on using the Hilbert Schmidt independence criterion as the fairness term. Unlike previous approaches, this allows us to simplify the problem and to use multiple sensitive variables simultaneously. Replacing the linear formulation by kernel functions allows the methods to deal with nonlinear problems. For both linear and nonlinear formulations the solution reduces to solving simple matrix inversions or generalized eigenvalue problems. This simplifies the evaluation of the solutions for different trade-off values between the predictive error and fairness terms. We illustrate the usefulness of the proposed methods in toy examples, and evaluate their performance on real world experiments of predicting income using gender and/or race discrimination as sensitive variables.</p>
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
    <h2>Structural equation heteroscedastic and warped GP models</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/code/regression/msvr-2-1.zip">
        <img src="/images/code/warpedGP.webp" height="121" width="160" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>We introduce warped Gaussian process (WGP) regression in remote sensing applications. WGP models output observations as a parametric nonlinear transformation of a GP. The parameters of such a prior model are then learned via standard maximum likelihood. We show the good performance of the proposed model for the estimation of oceanic chlorophyll content from multispectral data, vegetation parameters (chlorophyll, leaf area index, and fractional vegetation cover) from hyperspectral data, and in the detection of the causal direction in a collection of 28 bivariate geoscience and remote sensing causal problems. The model consistently performs better than the standard GP and the more advanced heteroscedastic GP model, both in terms of accuracy and more sensible confidence intervals.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Warped Gaussian Processes in Remote Sensing Parameter Estimation and Causal Inference Mateo, A. and Munoz-Mari, J. and Perez-Suay, A. and Camps-Valls, G. IEEE Geoscience and Remote Sensing Letters 15 (11) :1647-1651, 2018</li>
        <li>A Survey on Gaussian Processes for Earth Observation Data Analysis: A Comprehensive Investigation Camps-Valls, G. and Verrelst, J. and Muñoz-Marí, J. and Laparra, V. and Mateo-Jimenez, F. and Gomez-Dans, J. IEEE Geoscience and Remote Sensing Magazine 2016</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>Causeme: a web platform for causal models comparison</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://causeme.uv.es/">
        <img src="/images/code/causeme.webp" height="160" width="160" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>Detecting causal associations in time series datasets is a key challenge for novel insights into complex dynamical systems such as the Earth system or the human brain. Interactions in such systems present a number of major challenges for causal discovery techniques and it is largely unknown which methods perform best for which challenge. The CauseMe platform provides ground truth benchmark datasets featuring different real data challenges to assess and compare the performance of causal discovery methods. The available benchmark datasets are either generated from synthetic models mimicking real challenges, or are real world data sets where the causal structure is known with high confidence. The datasets vary in dimensionality, complexity and sophistication.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Inferring causation from time series with perspectives in Earth system sciences Runge, J. and Bathiany, S. and Bollt, E. and Camps-Valls, G. and Coumou, D. and Deyle, E. and Clymour, C. and Kretschmer, M. and Mahecha, M. and Muñoz-Mar\'i, J. and van Nes, E. and Peters, J. and Quax, R. and Reichstein, M. and Scheffer, M. and Sch\"olkopf, B. and Spirtes, P. and Sugihara, G. and Sun, J. and Zhang, K. and Zscheischler, J. Nature Communications (2553) :1-13, 2019</li>
        <li>Causal discovery in Earth system science: State-of-the-art and a new Causality Challenge platform Runge, J. and Munoz-Marí, J. and Camps-Valls, G. AGU Fall Meeting, Washington, USA 2018</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>Cross-kernel Granger causality</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/code/xkgc.zip">
        <img src="/images/code/xkgc.webp" height="140" width="160" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>Among the many existing approaches, Granger causality (GC) has been perhaps the most widely used approach. Noting its strong linearity and stationarity assumptions, several nonlinear alternatives to GC have been proposed based on kernel methods. Using a family of cross-information kernel functions that account for nonlinear cross-relations between the involved variables we generalize the non-linear relations. Adding new kernel function to the cross-information we can address the issue of dealing with non-stationary processes.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>D. Bueso, M. Piles and G. Camps-Valls, "Cross-Information Kernel Causality: Revisiting global teleconnections of ENSO over soil moisture and vegetation" (2018). Proceedings of the 9th International Workshop on Climate Informatics: CI 2019</li>
        <li>Revisiting impacts of MJO on soil moisture: a causality perspective Diego Bueso, Maria Piles, Gustau Camps-Valls AGU Fall Meeting, San Francisco, USA 2019</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>A Shiny app for SEM intercomparison</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://emdiazsal.shinyapps.io/dependenceMeasures2/">
        <img src="/images/code/shiny.webp" height="111" width="160" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>Independence and conditional independence tests are a feature of many causal discovery methods. Constraint based methods such as the PC algorithm rely on conditional independence tests while asymmetry based methods such as Additive Noise Models rely on (unconditional) independence tests. Kernel based measures such as the Hilbert-Schmidt independence criterion (HSIC) or the Kernel-based Conditional Independence test (KCI) provide a way of quantifying (possibly non-linear) dependencies. However, the robustness of these measures to kernel parameters is not always clear. Since independence testing is fundamentally an unsupervised learning problem, heuristics such as the median distance for the rbf kernel lengthscale are generally prescribed in the literature. In this shiny app we explore the robustness of HSIC based independence tests to kernel parameters and to data generated according to different mechanisms (linear/non-linear, additive/non-additive, noisy/deterministic, etc).</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>"A Shiny app for SEM intercomparison." Emiliano Diaz, Tech rep. ISP/2019/012A. Universitat de Valencia, 2019</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>Unbiased convergent cross-mapping</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/code/causality/uCCM.zip">
        <img src="/images/code/Lorenz_attractor.webp" height="111" width="160" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>Granger causality approaches have problems in nonstationary and nonlinear scenarios, but also when the relation among variables is thought to be deterministic, especially in dynamic systems with weak to moderate coupling. This is because separability is not satisfied in such systems. Actually, in deterministic dynamic systems (even noisy ones), if X is a cause for Y, information about X will be redundantly present in $Y$ itself and cannot formally be removed from the causative variables a consequence of Takens' theorem. The convergent cross-mapping (CCM) algorithm is a nonlinear state-space method which reconstructs the variable's state spaces (M_x, M_y) using time embeddings, and concludes on X-&gt;Y if points on ${\bf M}_x$ can be predicted using nearest neighbors in M_y more accurately as more points are used. However, CCM is very sensitive to noise and time series length. We propose several techniques of bootstrap resampling, Markov chain Monte Carlo (MCMC) and adaptive importance sampling (AIS) to alleviate the problem.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Convergent cross-mapping for causal Inference in carbon and water fluxes processes. Álvaro Moreno Martínez, Emiliano Díaz, Adrian Pérez Suay, Jose Adsuara, Valero Laparra, María Piles, Jordi Muñoz Marí, Steven W Running, and Gustau Camps Valls. EGU General Assembly, Geophysical Research Abstracts, Vol. 21 2019</li>
        <li>Inferring causal graphs from observational long-term carbon and water fluxes records. Gustau Camps-Valls, Emiliano Diaz, Jose Adsuara, Maria Piles, Alvaro Moreno, Pierre Gentine, Martin Jung, Markus Reichstein and Steven W Running. AGU Fall Meeting, San Francisco, USA 2019</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>Conditional independence test with Gaussianization</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/code/regression/demoSemiSVR.zip">
        <img src="/images/code/rbig.webp" height="111" width="160" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>TODO.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>TODO</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>A family for kernel conditional independence measures</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/code/causality/generalizedKCDC.zip">
        <img src="/images/code/conditional.webp" height="121" width="140" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>TODO</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>TODO</li>
      </ul>
    </div>
  </div>
</div>
