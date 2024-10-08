---
title: "Methods and Models"
---


# Super-Resolution Methodology

Diffusion models have recently overtaken GAN models in the state-of-the-art of generative image methodologies. While GANs have been extensively used in image super-resolution, they are unstable due to their very delicate training process. Diffusion models, which are also probabilistic models drawing results from a likelihood distribution, have proven to be easier to train and deliver better results, surpassing other methodologies in many reconstruction metrics. This development has also been noticed in the remote sensing community, with recent super-resolution works switching to diffusion-based SR methodologies. 

<br>
<p align="center">
  <img src="lat_px_dif.webp" width="100%">
  <p align="center"><em>Figure: Pixel-space vs latent-space diffusion models</em></p>
</p>
<br>

# Explainable AI

The use of deep learning in SR does not usually provide any insight besides the final outcome, which makes the EO community reluctant to adopt machine learning due to the lack of transparency and trust. Explainable artificial intelligence (xAI) aims to increase our understanding of DL models while preserving their predictive power. In OpenSR, we will provide quality indices and xAI tools for trusted and accountable SR. In particular, we will combine traditional model inspection and interpretation methods with more specific post-hoc methods. These quality metrics will be crystallized in a quality assurance band (BQA) accompanying the SR product.
Regarding the quality metrics and uncertainty estimation for remote sensing super-resolution, most of the proposed super-resolution algorithms utilize three commonly used metrics: PSNR, SSIM, and LPIPS. While these metrics are frequently reported in remote sensing super-resolution works, other types of degradation, such as chrominance differences or spatial shifts, might compromise the super-resolution evaluation scope. OpenSR will evaluate the entire super-resolution process with diferent metrics: 

<br>
<p align="center">
  <img src="qualitymetrics.webp" width="50%">
  <p align="center"><em>Figure: Quality metrics proposed to benchmark super-resolution algorithms</em></p>
</p>
<br>

# Benchmarking Toolbox

Defining 'high-quality' results in SR methodologies remains a controversial issue. Present-day literature of the field often presents SR techniques through the lens of computer vision, leaning heavily on synthetic datasets and metrics that are hyper-sensitive to factors unrelated to spatial resolution enhancement. To address this challenge, in OpenSR project we have created a comprehensive benchmark, OpenSR-test toolbox, designed exclusively for evaluating remote sensing image SR. Our framework incorporates quality metrics and three curated datasets, each spanning various scale factors with consistent metadata. The benchmarking framework will be publicly available at OpenSR-test.

<br>
<p align="center">
  <img src="opnsr-test.webp" width="60%">
  <p align="center"><em>Figure: OpenSR-test benchmark for real-world Sentinel-2 imagery super-resolution.</em></p>
</p>
<br>
<p align="center">
  <img src="groups_2.webp" width="50%">
</p>