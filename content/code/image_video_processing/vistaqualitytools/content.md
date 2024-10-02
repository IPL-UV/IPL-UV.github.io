---
title: "VistaQualityTools: The Image and Video Quality Toolbox based on Vision Models"
type: "code"
layout: "single_four"
images:
  - link: "BasesDist.webp"
    title: "The problem"
    description: "Given an original image (top) distortions of different nature appear to have different perceptual effect (bottom). The challenge is computing a descriptor of distortion which is correlated with the opinion of observers collected in [subjectively rated databases](http://www.ponomarenko.info/tid2013.htm). The complexity of human vision implies that the Euclidean distance (or Mean Squared Error) is not a good proxy for subjective distortion. Nevertheless, the image quality problem goes beyond fitting any flexible model to maximize the correlation with subjective opinion (see [[Front. Neurosci. 2018](https://arxiv.org/abs/1801.09632)])."
  - link: "metricas2.webp"
    title: "Our solution"
    description: "The scatter plots show the performance of two perceptual metrics in reproducing subjective opinion. On the one hand (in red) the widely acclaimed Structural SIMilarity index (SSIM) that received the [EMMY Award of the American TV Industry in 2015](https://youtu.be/e5-LCFGdgMA), and, on the other hand (in blue), our metric based on a cascade of L+NL layers [[PLoS 2018](https://arxiv.org/abs/1711.00526)]."
  - link: "metricas3.webp"
  - link: "ieee02.webp"

references:
  - title: "Perceptually weighted optical flow for motion-based segmentation in MPEG-4 paradigm"
    authors: "Malo, Gutiérrez, Epifanio, Ferri."
    publication: "Electr. Lett. 36 (20):1693-1694 (2000)"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_imvideo/ELECT98.PS.gz"
  - title: "Visual aftereffects and sensory nonlinearities from a single statistical framework"
    authors: "V. Laparra & J. Malo."
    publication: "Frontiers in Human Neuroscience 9:557 (2015)"
    link: "https://www.frontiersin.org/articles/10.3389/fnhum.2015.00557/full"
  
links:
  - title: "Updated Matlab Toolbox (VISTALAB 4.0)"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_imvideo/vista_toolbox/Vistalab.zip"
  - title: "Outdated toolbox (VISTALAB 1.0)"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_imvideo/vista_toolbox/BasicVideoTools_code.zip"
  - title: "Extensions of VISTALAB I: VistaVideoCoding"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_imvideo/vista_toolbox/VistaVideoCoding.zip"
  - title: "Extensions of VISTALAB II: VistaModels"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_imvideo/vista_toolbox/BioMultiLayer_L_NL_color.zip"
  - title: "Extensions of VISTALAB III: COLORLAB"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_imvideo/vista_toolbox/Colorlab.zip"
---

  **Contributors:** 
  - Image: J. Malo, V. Laparra, J. Muñoz, I. Epifanio, A.M. Pons, M. Martinez and E. Simoncelli
  - Video: J. Malo, J. Gutiérrez and A.B. Watson

  The image distortion measures in VistaQualityTools are based on distances between the original and the distorted scenes in the visual response domain. Therefore, they rely on the cortical descriptions in [**VistaModels**](./../../../vision_and_color/colorlab/vistamodels), including metrics based on (a) normalized DCTs, (b) normalized orthonormal wavelets, and (c) multi-layer models with normalized overcomplete wavelets. All these measures substantially overperform the widely acclaimed SSIM.
  
  Our video quality measure developed at the NASA Ames Research Center is based on the same visual response principle. It achieved the 2nd best performance in the VQEG evaluation phase II.


  # Table of contents

  - [**(A) Image Quality Metrics**](#a-image-quality-metrics)
  - [**Models and Distortion measures**](#models-and-distortion-measures)
  - [**(B) Principled Models**](#b-principled-models)


  # (A) Image Quality Metrics

  The distortion metrics in VistaQualityTools rely on the three cortical models we have developed over the years (a) DCT transform and Divisive Normalization [IVC 1997, Displays 00, Patt.Rec.03, IEEE Trans.Im.Proc. 06], (b) Orthonormal Wavelets and Divisive Normalization [JOSA A 10, Neur.Comp. 10], and (c) Cascades of linear transforms and nonlinear saturations [PLoS 18, Front. Neurosci. 18].
  
  ## Performance in subjectively rated-databases

  ## Saturation of the distortion and perceptual differences in constant-MSE series

  # Models and Distortion measures

  ## 1995 - 2008: Metric based on linear opponent channels, local-DCT and Div. Norm.

  This metric is based on an invertible representation originally tuned to reproduce contrast response curves [Pons PhD Thesis, 1997]. It was applied to reproduce subjective distortion opinion [Im.Vis.Comp.97, Displays99] and to improve the perceptual quality of JPEG and MPEG through (a) transform coding of the achromatic channel [Eletr.Lett95, Eletr.Lett99, Im.Vis.Comp.00 Patt.Recog.03, IEEE TNN 05, IEEE TIP 06a, IEEE TIP 06b, JMLR08], (b) the color channels [RPSP12], and (c) by improving the motion estimation [LNCS97, Eletr.Lett98, Eletr.Lett00a, Eletr.Lett00b, IEEE TIP 01].

  - **Download the Toolbox!:** [V1_model_DCT_DN_color.zip (74MB)](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_imvideo/vista_toolbox/V1_model_DCT_DN_color.zip)

  ## 2009 - 2010: Metric based on linear opponent channels, Orthogonal Wavelets and Div. Norm.

  In this metric the parameters of the divisive normalization (linear weights, interaction kernel, semisaturation, excitation and summation exponents) were fitted to reproduce subjective image distortion opinion [JOSA A 10] following exhaustive grid search as in [IEEE ICIP 02]. This model (which relies on the orthogonal wavelets of the MatlabPyrTools) was found to have excellent redundancy reduction properties [LNCS10, Neur.Comp.10].

  - **Download the Toolbox!:** [V1_model_wavelet_DN_color.zip (14MB)](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_imvideo/vista_toolbox/V1_model_wavelet_DN_color.zip)

  ## 2013 - 2018: Metric based on a Multi-Layer network with nonlinear opponent channels, Overcomplete Wavelets and Div. Norm.
  This metric is based on a multi-layer model (or biologically-plausible deep network) that performs the a chain of perceptually meaningful operations: nonlinear opponent chromatic channels, contrast computation, frequency selectivity and energy masking, and wavelet analysis + cross-subband masking [PLoS 18].
  
  The parameters of the different layers were fitted in different ways: while the 2nd and 3rd layers (contrast and CSF+masking) were determined using MAximum Differentiation [Malo and Simoncelli SPIE.13], layers 1st and 4th (chromatic front-end and wavelet layer) were fitted to reproduce subjective image distortion data [PLoS 18, Front. Neurosci. 18a, Front. Neurosci. 18b].

  - **Download the Toolbox!:** [BioMultiLayer_L_NL_color.zip (49MB)](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_imvideo/vista_toolbox/BioMultiLayer_L_NL_color.zip)

  # (B) Video Quality Measure

  Our distortion metric is based on weighting the contrast difference between the original and the distorted sequences. This adaptive weighting boosts perceptually visible features and attenuates negligible features. Once the background has been taken into account to consider masking, we compute the energy of the weighted difference using non-quadratic exponents. The parameters of these elements (widths of the filters and the masking kernels, summation exponents) were fitted to maximize the correlation with the subjective opinion. Then, we played with different versions of the model by considering subsets of the elements. We found that masking is as important as the CSF in reproducing the opinion of the observers [IEEE ICIP 02].

  Download the Toolbox!: [video_metric_sso.zip (34kB)](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_imvideo/vista_toolbox/video_metric_sso.zip)

  Performance of the different versions of the vision model as a function of its elements in terms of regression error. **SSO** stands for the CSF of the Standard Spatial Observer, **m** stands for masking, **t** stands for temporal filtering, **p** stands for post-summaton temporal filtering, and h stands for field doubling compensation.