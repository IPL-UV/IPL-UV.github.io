---
title: "CSFs of the Standard Spatial Observer"
type: "code"
layout: "single_four"
images:
  - link: "csf1.webp"
  - link: "csf2.webp"

references:
  - title: "Video Quality Measures based on the Standard Spatial Observer"
    authors: "A. B. Watson and Jesus Malo."
    publication: "Proc. IEEE Intl. Conf. Im. Proc. Vol. 3, pp. 41-44, 2002."
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/icip02.pdf"

links:
  - title: "CSFs_SSO.rar"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/CSFs_SSO.rar"
---

  The contrast sensitivity function (CSF) depicts an observer's sensitivity (i.e. 1/contrast threshold) to sinusoidal bar gratings of widely varied spatial frequency. Adult contrast sensitivity is greatest to intermediate spatial frequencies (about 2 to 4 c/deg). Lower and higher spatial frequencies require more contrast to be detected, resulting in an inverted-U function. The highest spatial frequency can be resolved only at very high contrast and corresponds to the observer's acuity level.The Spatial Standard Observer (SSO) was developed to predict the detectability of spatial contrast targets such as those used in the ModelFest project. The SSO is a lumped parameter model basing its predictions on the visible contrast generalized energy. Visible contrast means that the contrast has been reduced by a contrast sensitivity function (CSF). Generalized energy means that the visible contrast is raised to a power higher than 2 before spatial and temporal integration. To adapt the SSO to predict the effects of variations of optical image quality on tasks, the optical component of the SSO CSF needs to be removed, leaving theneural CSF. Also, since target detection is not the typical criterion task for assessing optical image quality, the SSO concept needs to be extended to other tasks, such as Sloan character recognition.

  This sofware computes the CSF filter of the Standard Spatial Observer.