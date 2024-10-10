---
type: "code"
layout: "single_four"

title: "Dimensionality Reduction via Regression (DRR)"
images:
  - link: "drr_image1.webp"
    description: "The behavior of DRR and other dimensionality reduction algorithms."
  - link: "drr_image2.webp"
    description: "Performance comparison of DRR with NLPCA, PPA, and SPCA."
references:
  - title: "Dimensionality Reduction via Regression in Hyperspectral Imagery"
    authors: "V. Laparra, J. Malo, G. Camps-Valls"
    publication: "IEEE J. Selected Topics in Signal Processing, Sept. 2015"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/drr_jstsp2014_final.pdf"
  - title: "Principal Polynomial Analysis (PPA)"
    authors: "V. Laparra, S. Jiménez, D. Tuia, G. Camps-Valls, J. Malo"
    publication: "Int. J. Neural Syst., Nov. 2014"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/IJNS_Laparra14_accepted_v5.pdf"
  - title: "Visual Aftereffects and Sensory Nonlinearities from a single Statistical Framework (SPCA)"
    authors: "V. Laparra, J. Malo"
    publication: "Frontiers in Human Neuroscience, 2015"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/frontiers_laparra_malo_Accepted_15.pdf"
  - title: "Nonlinearities and Adaptation of Color Vision from Sequential Principal Curves Analysis"
    authors: "V. Laparra, S. Jiménez, G. Camps-Valls, J. Malo"
    publication: "Neural Computation 24(10): 2751-2788, Oct. 2012"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/Neco_accepted_2012.pdf"
  - title: "V1 Nonlinearities emerge from local-to-global Nonlinear ICA"
    authors: "J. Malo, J. Gutiérrez"
    publication: "Network: Comput. in Neural Syst. 17(1): 85-102, 2006"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/V1_from_non_linear_ICA.pdf"
  - title: "Non-Linear Principal Components Analysis"
    authors: "Scholz, M. Fraunholz, and J. Selbig"
    publication: "Springer, 2007, ch. 2, pp. 44–67"
    link: "http://www.nlpca.org/"
links:
  - title: "DRR Toolbox"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/DRR_toolbox_v1.zip"
  - title: "DRR Paper"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/drr_jstsp2014_final.pdf"
---

This paper introduces a new unsupervised method for dimensionality reduction via regression (DRR). The algorithm belongs to the family of invertible transforms that generalize Principal Component Analysis (PCA) by using curvilinear instead of linear features. DRR identifies the nonlinear features through multivariate regression to ensure the reduction in redundancy between the PCA coefficients, the reduction of the variance of the scores, and the reduction in the reconstruction error. More importantly, unlike other nonlinear dimensionality reduction methods, the invertibility, volume-preservation, and straightforward out-of-sample extension, makes DRR interpretable and easy to apply. Properties of DRR enable learning a broader class of data manifolds than recently proposed Non-linear Principal Components Analysis (NLPCA) and Principal Polynomial Analysis (PPA). The figure below illustrates the behavior of different algorithms in this family: from the rigid (linear) PCA to the flexible Sequential Principal Curves Analysis (SPCA). In the paper, we illustrate the performance of the representation in reducing the dimensionality of hyperspectral images. In particular, we tackle two common problems: processing very high dimensional spectral information such as in image sounding data, and dealing with spatial-spectral image patches of multispectral images. Both settings pose collinearity and ill-determination problems. Evaluation of the expressive power of the features is assessed in terms of truncation error, estimating atmospheric variables, and surface land cover classification error. Results show that DRR outperforms linear PCA and recently proposed invertible extensions based on neural networks (NLPCA) and univariate regressions (PPA).