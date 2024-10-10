---
type: "code"
layout: "single_four"

title: "Deep Gaussian Processes for Parameter Retrieval and Model Inversion"
references:
  - title: "Deep Gaussian Processes for Parameter Retrieval and Model Inversion"
    authors: "Daniel H. Svendsen, Pablo M. Alvarez, Ana Belen Ruescas, Rafael Molina and Gustau Camps-Valls"
desc_download: "We provide the code and data to reproduce the velocity map for hurricane Isabel. Our experiment uses a single layer of the simulated hurricane - for access to the full data-set see [earthsystemgrid](https://www.earthsystemgrid.org/dataset/isabeldata.html) webpage. We also provide the code for the Case2Extreme experiment without access to the code. This serves more as a guideline to applying the DGP to large datasets. The Double Stochastic DGP implementation can be found at [this github page](https://github.com/ICL-SML/Doubly-Stochastic-DGP). Two notebooks are provided for illustration purposes and reproducibility:"
links:
  - title: "Toy experiment"
    link: "https://github.com/IPL-UV/toy"
  - title: "C2X experiment"
    link: "https://github.com/IPL-UV/c2x"
---

Parameter retrieval and model inversion are key problems in remote sensing and Earth observation. Currently, different approximations exist: a direct, yet costly, inversion of radiative transfer models (RTMs); the statistical inversion with {\em in situ} data that often results in problems of extrapolation outside the study area; and the most widely adopted hybrid modeling by which statistical models, mostly nonlinear and non-parametric machine learning algorithms, are applied to invert RTM simulations. We will focus on the latter. Among the different existing algorithms, in the last decade, Gaussian Processes (GPs) have excelled in treating these problems because of the provided accuracy and confidence intervals. However, RTMs are very complex, highly nonlinear, and typically hierarchical models, so that very often a single (shallow) GP model cannot capture complex feature relations for inversion. This motivates the use of deeper hierarchical architectures, while still preserving the desirable properties of GPs. This paper introduces deep Gaussian Processes (DGPs) for bio-geo-physical model inversion. Unlike full GP models, the proposed DGP accounts for complicated (modular, hierarchical) processes, provides an efficient solution that scales well to big datasets, and improves prediction accuracy over its single layer counterpart. In the experimental section, we provide empirical evidence of performance for the estimation of surface temperature and dew point temperature from infrared sounding data, as well as for the predicting of chlorophyll content, inorganic suspended matter and coloured dissolved matter from multispectral data acquired by the Sentinel-3 OLCI sensor. The presented methodology allows for more expressive forms of GPs in big remote sensing model inversion problems.