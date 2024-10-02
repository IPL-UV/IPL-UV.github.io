---
title: "Principal Polynomial Analysis (PPA)"
type: "code"
layout: "single_four"
images:
  - link: "ppa1.webp"
    title: "First Principal Curve and generalized curvatures using PPA in 3D Helix"
    description: "The application of the Principal Polynomial Analysis (PPA) to a 3D Helix, demonstrating the first principal curve and its generalized curvatures."
  - link: "ppa2.webp"
    title: "Discrimination ellipsoids according to the PPA generalized Mahalanobis metric"
    description: "The discrimination ellipsoids according to the PPA's generalized Mahalanobis metric, which provides a geometrical interpretation of the dataset."
references:
  - title: "Principal Polynomial Analysis"
    authors: "V. Laparra, S. Jiménez, D. Tuia, G. Camps-Valls, J. Malo"
    publication: "Int. J. Neural Syst., July 2014 (in press)"
links:
  - title: "PPA Toolbox (general purpose code)"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/PPA.zip"
  - title: "Specific code to reproduce the experiments in the paper"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/experiments_ppa_paper.rar"
---
This paper (and toolbox) presents a new framework for manifold learning based on the use of a sequence of principal polynomials that capture the eventually nonlinear nature of the data. The proposed Principal Polynomial Analysis (PPA) is shown to generalize PCA by admitting curves instead of straight lines. As opposed to previous approaches following the same rationale, PPA reduces to performing canonical, univariate regressions which make it computationally feasible and easy to interpret analytically. We show that the PPA transform is a volume-preserving map, which guarantees the existence of the inverse since the determinant of the Jacobian is bounded. We propose a closed-form solution for the inverse map. Invertibility is an important advantage over other nonlinear dimensionality reduction methods because it permits to understand the identified features in the input domain where data have physical meaning. Moreover, invertibility allows to evaluate the dimensionality reduction performance in sensible units. Preserving the volume also allows to compute the reduction in multi-information achieved by the transform using only marginal operations. Additionally, PPA leads to a clear geometrical interpretation of the manifold: the computation of Frenet-Serret frames along the identified curves allow us to obtain generalized curvature and torsion of the manifold. Moreover, the analytical expression of the Jacobian simplifies the computation of the metric induced by the data. Performance in dimensionality reduction and redundancy reduction, as well as the theoretical properties of PPA, are experimentally tested in datasets from the UCI machine learning repository.