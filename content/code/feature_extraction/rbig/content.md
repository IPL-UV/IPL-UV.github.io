---
title: "Rotation-based Iterative Gaussianization (RBIG)"
abstract: "Most signal processing problems involve the challenging task of multidimensional probability density function (PDF) estimation. In this work, we propose a solution to this problem by using a family of Rotation-based Iterative Gaussianization (RBIG) transforms. The general framework consists of the sequential application of a two-step processing unit: univariate marginal Gaussianization transform followed by an orthogonal transform. The proposed procedure looks for differentiable transforms to a known PDF so that the unknown PDF can be estimated at any point of the original domain. In particular, we aim at a zero mean unit covariance Gaussian for convenience, but other distributions could be equally considered.

RBIG is formally similar to classical iterative Projection Pursuit (PP) algorithms. However, we show that, unlike in PP methods, the particular class of rotation used has no special qualitative relevance in this context, since looking for 'interestingness' is not a critical issue for PDF estimation. The key difference is that our approach focuses on the univariate part of the problem rather than on the multivariate part, which is related to interesting projections. This difference implies that one may select the most convenient rotation suited to each practical application.

The differentiability, invertibility, and convergence of RBIG are theoretically and experimentally analyzed. Relation to other methods, such as Radial Gaussianization (RG), one-class support vector domain description (SVDD), and deep neural networks (DNN) is also pointed out. The practical performance of RBIG is successfully illustrated in a number of multidimensional problems such as image synthesis, classification, denoising, and multi-information estimation."

references:
  - title: "Iterative Gaussianization: from ICA to Random Rotation"
    authors: "V. Laparra, G. Camps, J. Malo"
    publication: "IEEE Transactions on Neural Networks, 2010"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/Laparra11.pdf"
links:
  - title: "RBIG Toolbox"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/RBIG_toolbox.zip"
    description: "The provided software is an implementation of the proposed RBIG approach. See the file 'using_RBIG_example.m' included in the *.zip file for details."
---

