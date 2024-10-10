---
type: "code"
layout: "single_four"

title: "Topographic ICA reveals random scrambling of orientation in visual space"
images:
  - link: "fig_web_1.webp"
    title: "[Summary](#1-orientation-domains-and-the-proposed-analysis)"
    description: "The novel analysis consists of projecting the TICA topology back into the image space by representing the central location of each artificial neuron’s receptive field at the corresponding spatial position with the corresponding orientation-dependent color code. The experimental smoothness suggested by [Bosking et al. 02] implies that a proper theory would lead to locally continuous orientation domains also in the retinal space. Our results show that this is not the case for TICA."
  - link: "fig_web_2.webp"
    title: "[Orientation domains in image space](#1-orientation-domains-and-the-proposed-analysis)"
    description: "Single cell measurements show that displacement across neurons in the cortical surface results in equivalent displacement of the corresponding receptive fields in the visual field. The orientation preferences of the receptive fields vary smoothly, as revealed by intrinsic imaging. Stimulation with vertically and horizontally displaced lines shows that the retina-cortex projection is smooth, suggesting distorted orientation domains in the image space."
  - link: "fig_web_3.webp"
    title: "[Proposed analysis of TICA results](#1-orientation-domains-and-the-proposed-analysis)"
    description: "Our proposal involves analyzing the TICA results in the image space. By projecting the TICA topology onto the image space, we observe that the distribution of orientation preferences is inconsistent with the smoothness found in the retina-cortex projection. This finding contradicts the original proposal by Hyvärinen and Hoyer."
  - link: "fig_libro_2009v2.webp"
    title: "[Continuity violations in TICA (2009)](#2-extra-examples-of-continuity-violations-in-the-topographic-ica-literature)"
    description: "This example from Hyvärinen, Hurri, and Hoyer (2009) shows how larger pooling neighborhoods in the TICA model can still result in random mixtures of sensors, violating the expected local continuity of orientation domains."
  - link: "fig_xinos_2008v2.webp"
    title: "[Continuity violations in TICA (2008)](#2-extra-examples-of-continuity-violations-in-the-topographic-ica-literature)"
    description: "An overcomplete version of TICA, as used by Ma et al. (2008), also demonstrates clear violations of the expected continuity in orientation domains, with random mixtures of sensors appearing frequently."
  - link: "result1.webp"
    title: "[Main Result: salt-and-pepper distribution of TICA sensors](#3-main-result-salt-and-pepper-distribution-of-tica-oriented-sensors)"
    description: "The main result of this work shows that TICA produces a salt-and-pepper distribution of orientation sensors rather than continuous orientation domains. This is observed consistently across different visual angles and resolutions."
  - link: "test.webp"
    title: "[Statistical tests for orientation domains](#4-full-set-of-statistical-tests-on-randomness)"
    description: "KL-divergence tests compare the distribution of TICA sensors with a Cartesian grid and with uniform samples. These tests confirm that the spatial distribution of TICA sensors is more similar to random sampling than to distinct, continuous orientation domains."
  - link: "non_linearities_complete.webp"
    title: "[Results with different nonlinearities](#5-extra-results-for-images-of-bigger-complexity-and-other-settings-of-the-algorithm)"
    description: "Comparing different nonlinearities in the learning process, we find that the preferred locations of sensors in the image space remain scrambled across different nonlinearities, confirming the random nature of the resulting orientation maps."
  - link: "Neighborhood_complete.webp"
    title: "[Results with different neighborhood settings](#5-extra-results-for-images-of-bigger-complexity-and-other-settings-of-the-algorithm)"
    description: "Results from experimenting with different pooling regions in the TICA model show that changing the size of pooling neighborhoods does not lead to continuous orientation domains, as the orientation maps remain scrambled."
  - link: "result2.webp"
    title: "[Results with increased image complexity](#5-extra-results-for-images-of-bigger-complexity-and-other-settings-of-the-algorithm)"
    description: "Increasing the complexity of the images used in TICA by expanding the field of view (up to 100x100 pixels) reveals that, even at this higher complexity, the distribution of oriented filters remains randomly scrambled in the image space."
  - link: "comparison_convergence.webp"
    title: "[Convergence comparison](#5-extra-results-for-images-of-bigger-complexity-and-other-settings-of-the-algorithm)"
    description: "This comparison of convergence shows that while many filters have yet to converge, the filters that have already emerged display a random distribution of orientations, confirming the salt-and-pepper pattern."
  - link: "functions_100x100A.webp"
    title: "[Functions 100x100 - A](#5-extra-results-for-images-of-bigger-complexity-and-other-settings-of-the-algorithm)"
    description: "An example of the functions that emerged from TICA with 100x100 pixel images. The distribution of these filters shows random scrambling of orientation in the retinal space."
  - link: "functions_100x100B.webp"
    title: "[Functions 100x100 - B](#5-extra-results-for-images-of-bigger-complexity-and-other-settings-of-the-algorithm)"
    description: "Another set of functions that emerged from the 100x100 pixel images, showing that even in this higher complexity case, the oriented filters remain randomly distributed."
references:
  - title: "Topographic ICA reveals random scrambling of orientation in visual space"
    authors: "M. Martinez-Garcia, L.M. Martinez-Otero, J. Malo"
    publication: "PLoS ONE, 2017"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Plos_Orient_maps_iteration2.pdf"
  - title: "Experimental procedure"
    authors: "J. Brotons"
    publication: "Internal lab report, 2016"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/measurement.pdf"
  - title: "Example ferret data"
    authors: ""
    publication: ""
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/example_ferret_data.zip"
  - title: "Hyvärinen and Hoyer Topographic ICA Toolbox"
    authors: "A. Hyvärinen, P. Hoyer"
    publication: "ImageICA Toolbox"
    link: "https://research.ics.aalto.fi/ica/imageica/"
  - title: "Matlab CODE"
    authors: ""
    publication: ""
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/OrientationDomainsTICA.zip"
  - title: "README for Matlab Code"
    authors: ""
    publication: ""
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/README.txt"
  - title: "Full statistical tests"
    authors: ""
    publication: ""
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/full_test.pdf"
  - title: "PLoS ONE 2006"
    authors: "Ohki et al."
    publication: "Nature, 2006"
  - title: "Topographic ICA findings on continuity violations"
    authors: "Hyvärinen et al."
    publication: "Vision Research, 2001"
links:
  - title: "Matlab Toolbox"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/bmi.zip"
  - title: "Project Proposal BFU2014-58776"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Project_Martinez_Malo_BFU2014_58776_R.pdf"
---

  # Table of Contents
  - [Orientation domains and the proposed analysis](#1-orientation-domains-and-the-proposed-analysis)
  - [Extra examples of continuity violations in the Topographic ICA literature](#2-extra-examples-of-continuity-violations-in-the-topographic-ica-literature)
  - [Main Result: salt-and-pepper distribution of TICA oriented sensors](#3-main-result-salt-and-pepper-distribution-of-tica-oriented-sensors)
  - [Full set of statistical tests on randomness](#4-full-set-of-statistical-tests-on-randomness)
  - [Extra results for images of bigger complexity and other settings of the algorithm](#5-extra-results-for-images-of-bigger-complexity-and-other-settings-of-the-algorithm)

  # Supplementary Material: extra figures, data and code

  ## 1. Orientation domains and the proposed analysis:
  This section describes the experimental orientation domains in the surface of the V1 cortex of a cat and a ferret. Using intrinsic optical imaging, different preferred orientations of the cells are represented with colors. The analysis shows that the Topographic ICA (TICA) topology fails to explain the smoothness found in the retina-cortex projection, contrary to what was proposed by Hyvärinen and Hoyer. The random scrambling of the oriented filters revealed in this study demonstrates that TICA does not account for the organization of orientation domains in primates.

  ## 2. Extra examples of continuity violations in the Topographic ICA literature:
  Multiple examples of continuity violations in TICA are presented from various sources in the literature, including works by Hyvärinen et al. (2001, 2009) and Ma et al. (2008). In each case, there are clear violations of the expected local continuity of orientation domains in the image space. These results suggest that the functional explanation proposed by TICA is inconsistent with empirical observations in the retina-cortex projection.

  ## 3. Main Result: salt-and-pepper distribution of TICA oriented sensors:
  The main finding of this analysis is that TICA produces a salt-and-pepper distribution of oriented filters in the image space, rather than continuous orientation domains. This inconsistency with the smooth retina-cortex projection is demonstrated across various visual angles and resolutions. New training sets were used for this analysis, and the results were consistent with the lack of continuity in the spatial distribution of TICA sensors.

  ## 4. Full set of statistical tests on randomness:
  Statistical tests were conducted to determine whether TICA's orientation domains are more similar to a Cartesian grid or a random sample. The tests show that TICA’s spatial distribution is random and does not form the distinct, continuous orientation domains observed in biological visual systems. These results are based on KL-divergence comparisons between the TICA distributions and uniform distributions.

  ## 5. Extra results for images of bigger complexity and other settings of the algorithm:
  Further experiments were performed with more complex images and alternative algorithm settings, such as different nonlinearities and pooling neighborhoods. In every case, the results were consistent: the oriented filters produced by TICA remained scrambled and discontinuous. Even in cases with significantly higher complexity and larger PCA dimensions, TICA fails to produce locally continuous orientation domains in the image space.
