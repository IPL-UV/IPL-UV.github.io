---
title: "opensr"
type: projects/generic_projects/methods
---


## ESA OpenSR - Robust, accountable super-resolution for Sentinel-2 and beyond

### Methods and Models

<br>
<h4 id="super_resolution" style="scroll-margin-top: 2.2em;">Super-Resolution Methodology</h4>


Diffusion models have recently overtaken GAN models in the state-of-the-art of generative image methodologies. While GANs have been extensively used in image super-resolution, they are unstable due to their very delicate training process. Diffusion models, which are also probabilistic models drawing results from a likelihood distribution, have proven to be easier to train and deliver better results, surpassing other methodologies in many reconstruction metrics. This development has also been noticed in the remote sensing community, with recent super-resolution works switching to diffusion-based SR methodologies.

<div style="width: 100%; overflow-x: auto; text-align:center">
    <img src="/isp/images/projects/opensr/lat_px_dif.png" style="width: 60%; display: block; margin: auto;">
    <em>Figure: Summarizing the construction and classes of the WorldStrat dataset. From [Cornebise et al. 2022]</em>
</div>

<h4 id="explainability" style="scroll-margin-top: 2.2em;">Explainable AI</h4>

The use of deep learning in SR does not usually provide any insight besides the final outcome, which makes the EO community reluctant to adopt machine learning due to the lack of transparency and trust. Explainable artificial intelligence (xAI) aims to increase our understanding of DL models while preserving their predictive power. In OpenSR, we will provide quality indices and xAI tools for trusted and accountable SR. In particular, we will combine traditional model inspection and interpretation methods with more specific post-hoc methods. These quality metrics will be crystallized in a quality assurance band (BQA) accompanying the SR product.
Regarding the quality metrics and uncertainty estimation for remote sensing super-resolution, most of the proposed super-resolution algorithms utilize three commonly used metrics: PSNR, SSIM, and LPIPS. While these metrics are frequently reported in remote sensing super-resolution works, other types of degradation, such as chrominance differences or spatial shifts, might compromise the super-resolution evaluation scope. OpenSR will evaluate the entire super-resolution process with diferent metrics:

<div style="width: 100%; overflow-x: auto; text-align:center">
    <img src="/isp/images/projects/opensr/qualitymetrics.png" style="width: 50%; display: block; margin: auto;">
    <em>Figure: Summarizing the construction and classes of the WorldStrat dataset. From [Cornebise et al. 2022]</em>
</div>

<h4 id="benchmarking" style="scroll-margin-top: 2.2em;">Benchmarking Toolbox</h4>

Defining 'high-quality' results in SR methodologies remains a controversial issue. Present-day literature of the field often presents SR techniques through the lens of computer vision, leaning heavily on synthetic datasets and metrics that are hyper-sensitive to factors unrelated to spatial resolution enhancement. To address this challenge, in OpenSR project we have created a comprehensive benchmark, OpenSR-test toolbox, designed exclusively for evaluating remote sensing image SR. Our framework incorporates quality metrics and three curated datasets, each spanning various scale factors with consistent metadata. The benchmarking framework will be publicly available at [**OpenSR-test**](https://opensr-test.readthedocs.io/en/main/)

<div style="width: 100%; overflow-x: auto; text-align:center">
    <img src="/isp/images/projects/opensr/opnsr-test.png" style="width: 50%; display: block; margin: auto;">
    <em>Figure: Summarizing the construction and classes of the WorldStrat dataset. From [Cornebise et al. 2022]</em>
</div>

<hr>