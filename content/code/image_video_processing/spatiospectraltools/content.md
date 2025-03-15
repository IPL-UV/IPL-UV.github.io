---
title: SpatioSpectralTools
type: "code"
layout: "single_iframe"
aliases:
  - /code/imvideo/SpatioSpectral.html
---

<script>
  function superSize(me) {
    //me.style.width = me.contentWindow.document.body.scrollWidth + 'px';
    me.style.height = me.contentWindow.document.body.scrollHeight+20 + 'px';
  }
</script>

<div style="max-width: 100%; margin: 0rem auto ">
<iframe src="/pages/SpatioSpectral.html" style="border: 0" width="100%" height="1000" referrerpolicy="same-origin" seamless onload="superSize(this)"></iframe>
</div>

<!-- ---
type: "code"
layout: "single_four"

title: "The role of spatial information in disentangling the irradiance-reflectance-transmitance ambiguity"
references:
  - title: "The role of spatial information in disentangling the irradiance-reflectance-transmitance ambiguity"
    authors: "Sandra Jiménez and Jesús Malo"
    publication: "Accepted to IEEE Trans. Geosci. Rem. Sens."
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_imvideo/spatiospectral/manuscr_TGRS_2012_00431.pdf"
links:
  - title: "Download Data and Code"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_imvideo/spatiospectral/code_retrieval_and_data.zip"
    description: "(*.zip file with data and Matlab toolbox. For running the examples, read and execute the demo_retrieval.m file)."
images:
  - link: "org_contex.webp"
    title: "[Original and Estimated Reflectance - Urban Context](#1-effect-of-the-spatial-structure)"
    description: "Reflectance images for urban, forest, and open field sites using spectral-only and spatio-spectral retrieval approaches."
  - link: "reco_contex.webp"
    title: "[Reconstructed Reflectance for Different Contexts](#1-effect-of-the-spatial-structure)"
    description: "Reconstructed reflectance images from different contexts, highlighting the difference between spectral-only and spatio-spectral retrieval."
  - link: "errores.webp"
    title: "[Error Maps for Reflectance Estimation](#2-effect-of-wavelength-range-and-spatio-spectral-resolution)"
    description: "Error maps showing the differences in reflectance estimation using spectral-only and spatio-spectral methods."
  - link: "IR_example.webp"
    title: "[Infrared Example - Different Wavelengths and Resolutions](#2-effect-of-wavelength-range-and-spatio-spectral-resolution)"
    description: "Example using different wavelength ranges and spatio-spectral resolutions in reflectance retrieval."
  - link: "marginales_S.webp"
    title: "[Marginal Distributions for Surface Reflectance](#3-initialization-of-the-sources-surface-reflectance-atmosphere-radiance-and-transmittance)"
    description: "Marginal PDFs for surface reflectance coefficients in the PCA domain."
  - link: "marginales_A.webp"
    title: "[Marginal Distributions for Atmosphere Radiance](#3-initialization-of-the-sources-surface-reflectance-atmosphere-radiance-and-transmittance)"
    description: "Marginal PDFs for atmospheric radiance coefficients in the PCA domain."
  - link: "marginales_T.webp"
    title: "[Marginal Distributions for Atmosphere Transmittance](#3-initialization-of-the-sources-surface-reflectance-atmosphere-radiance-and-transmittance)"
    description: "Marginal PDFs for atmospheric transmittance coefficients in the PCA domain."
---

  In the satellite hyperspectral measures the contributions of light, surface, and atmosphere are mixed.  Applications need separate access to the sources. Conventional inversion techniques usually take a pixel-wise, spectral-only approach. However, recent improvements in retrieving surface and atmosphere characteristics use heuristic spatial smoothness constraints.
  
  In this paper we theoretically justify such heuristics by analyzing the impact of spatial information on the uncertainty of the solution. The proposed analysis allows to assess in advance the uniqueness (or robustness) of the solution depending on the curvature of a likelihood surface. In situations where pixel-based approaches become unreliable it turns out that the consideration of spatial information always makes the problem to be better conditioned.  With the proposed analysis this is easily understood since the curvature is consistent with the complexity of the sources measured in terms of the number of significant eigenvalues (or free parameters in the problem). In agreement with recent results in hyperspectral image coding, spatial correlations in the sources imply that the intrinsic complexity of the spatio-spectral representation of the signal is always lower than its spectral-only counterpart.  According to this, the number of free parameters in the spatio-spectral inverse problem is smaller so  the spatio-spectral approaches are always better than spectral-only approaches.
  
  Experiments using ensembles of actual reflectance values and realistic MODTRAN irradiance and atmosphere radiance and transmittance values show that the proposed analysis successfully predicts the practical difficulty of the problem and the improved quality of spatio-spectral retrieval.

  ## Supplementary Material
  1. Extends the results in the manuscript to different spatial structures.
  2. Extends the results in the manuscript to different wavelength ranges and spatio-spectral resolutions.
  3. Statistically justifies the initialization scheme of sources.
  4. Provides sample data and code.

  The generality of the conclusion is not surprising since the imaging equation and the PCA decompositions do not depend on the specific spatio-spectral resolution or wavelength range. The joint spatio-spectral approach will simplify the problem whenever there are relations between the signal at different spatial positions, which is true in a wide range of situations given the spatial continuity of the physical sources (the reflecting objects and the atmospheric phenomena).

  ## 1. Effect of the Spatial Structure
  Original and estimated reflectance images for sites of different spatial complexity (urban, forest, and open fields) using spectral-only and spatio-spectral retrieval. In these cases, the spatial resolution and wavelength range were the same as in the manuscript. No additional training was necessary, only the application of the previous analysis on new test locations.

  ## 2. Effect of Wavelength Range and Spatio-Spectral Resolution
  In this experiment, we used substantially different wavelength ranges and spatio-spectral resolutions from those in the manuscript.

  ## 3. Initialization of the Sources (Surface Reflectance, Atmosphere Radiance, and Transmittance)
  The retrieval procedure used to check the accuracy of the theoretical predictions involves a series of search loops that require an initialization of the variables S, A, and T. Since we searched in the decorrelated PCA domains, each coefficient of these sources was independently initialized using a random value drawn from the empirical marginal PDFs (histograms) learned at the training stage. Below we show examples of the marginal PDFs for some AC coefficients of these sources. The strong peak at zero makes zero initialization reasonable as well. -->