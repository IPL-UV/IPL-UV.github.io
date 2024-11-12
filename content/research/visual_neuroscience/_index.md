---
title: "Vision Science: from Optics to Neuroscience and Statistical Learning"
type: "research"
layout: "single_four"
images:
  - link: 'vision_science.webp'
    title: "Vision Science"
    description: "The PSF of this nice human eye can be measured in-vivo. Related publication: Opth.Phys.Opt.97"
  - link: 'anim_gif_v1_resp.gif'
    title: "Linear V1 Cells"
    description: "Linear response of V1 cells (see model here: Front.Neurosci.15)"
  - link: 'anim_gif_mt_resp.gif'
    title: "Linear MT Cells"
    description: "Linear response of MT cells (see the CODE for V1 and MT cells HERE)"
  - link: 'anim_gif.gif'
    title: "fMRI Recordings"
    description: "fMRI recordings at Hospital La Fe (NeuroImage Unit)"
  - link: 'anim_gif_texture.gif'
    title: "Texture Vision"
    description: "Texture Vision analysis. Related publications: J.Mod.Opt.97, Neur.Comp.10"
  - link: 'anim_gif_color.gif'
    title: "Color Vision"
    description: "Color vision study involving chromatic anomalies, adaptation, and aftereffects. Related publications: Vis.Res.97, JOSA04"
  - link: 'anim_gif_motion2.gif'
    title: "Motion Vision"
    description: "Motion vision study, focusing on the computation of optical flow in perceptually relevant moving regions. Related   publications: J.Vis.01, IEEE TIP01"

  - link: 'experiment1.webp'
    title: "[Double-pass Measurement Setup](#experiments-in-vision-science)"
    description: "Double-pass setting for measuring the Modulation Transfer Function of the human eye. Related publication: Opth.Phys.Opt.97"
  - link: 'method1.webp'
    title: "[Spectrally Calibrated Light Sources](#experiments-in-vision-science)"
    description: "Spectrally calibrated light sources used for gathering accurate color image statistics"
  - link: 'method2.webp'
    title: "[Image Colorimeter and Spectroradiometer](#experiments-in-vision-science)"
    description: "Image colorimeter and spectroradiometer used for accurate measurements in visual experiments"

  - link: 'motion.webp'
    title: "[Empirical Motion Model](#theory-empirical-models-in-vision-science)"
    description: "Waving hands sequence demonstrating the empirical motion model based on spatio-temporal wavelet-like filters"
  - link: 'dicromat.webp'
    title: "[Color Blind Simulation](#theory-empirical-models-in-vision-science)"
    description: "Simulation of color blindness with Picasso's Dora Maar to illustrate how dichromats perceive colors differently"

  - link: 'estimulac.webp'
    title: "[Optimal Adaptation and Information Transmission](#theory-principled-models-in-vision-science)"
    description: "Illustrative organization principle: optimal adaptation and information transmission under noise constraints"
  - link: 'resp1.webp'
    title: "[Response Example 1](#theory-principled-models-in-vision-science)"
    description: "Illustration of response shifts in V1 neurons under different visual scene illumination conditions"
  - link: 'resp2.webp'
    title: "[Response Example 2](#theory-principled-models-in-vision-science)"
    description: "Illustration of response changes in V1 neurons due to optimal adaptation to varying visual stimuli"

  - link: 'data_metric.webp'
    title: "[Principal Polynomial Analysis Example](#theory-statistical-learning-for-vision-science)"
    description: "Illustrative example showing PPA application in feature extraction and metric definition in the dataset"
  - link: 'features_1.webp'
    title: "[PPA Features - Input Domain](#theory-statistical-learning-for-vision-science)"
    description: "Local features obtained in the input domain using Principal Polynomial Analysis (PPA)"
  - link: 'features_2.webp'
    title: "[PPA Features - Transformed Domain](#theory-statistical-learning-for-vision-science)"
    description: "Local features visualized in the PPA-transformed domain"


links:
  - title: "Scholarpedia: Models of Visual Cortex"
    link: "http://www.scholarpedia.org/article/Models_of_visual_cortex"
  - title: "Efficient Coding Hypothesis"
    link: "https://en.wikipedia.org/wiki/Efficient_coding_hypothesis"
  - title: "NeuroImage Unit"
    link: "https://www.acim.lafe.san.gva.es/acim/?page_id=1229"
  - title: "Texture Vision Dataset"
    link: "../../code/vision_and_color/aftereffects/content/"
  - title: "Vision and Color Processing Software"
    link: "../../code/vision_and_color/"
---

**Vision** is the ability to interpret the surrounding environment by analyzing the measurements drawn by imaging systems. This ability is particularly impressive in *humans* compared to the current state of the art in *computers*.

The study of all phenomena related to *vision in biological systems* (particularly in humans) is usually referred to as **Vision Science**. It addresses a variety of issues ranging from the formation of the visual signal, such as the physics of the imaging process, which includes Radiometry and **Physiological Optics**—to the analysis of the visual signal, which is of interest for Neuroscience and Psychology.

This analysis involves the extraction of visual primitives through basic computations in the retina-cortex neural pathway and the subsequent information processing that leads to scene descriptors of higher abstraction levels ([see elsewhere](http://www.scholarpedia.org/article/Models_of_visual_cortex)). These problems can be approached from different perspectives:

- A *mechanistic perspective*, which focuses on describing the empirical behavior of the system, based on experimental recordings from **Psychophysics** and **Neurophysiology**.
- A *normative perspective*, which looks for the functional reasons (organization principles) that explain the behavior. This perspective relies on the study of **Image Statistics** and the use of concepts from **Information Theory** and **Statistical Learning**.

The latter is known as the [[Efficient Coding Hypothesis](https://en.wikipedia.org/wiki/Efficient_coding_hypothesis)].

Over the years, we have made original contributions in *all* of the above subdisciplines related to (low-level) Vision Science. Currently, we are shifting our focus to more abstract visual functions.

# Experiments in Vision Science

I made experimental contributions in three aspects: *Physiological Optics, Psychophysics*, and *Image Statistics*.

1. In the field of **Physiological Optics**, we measured the optical transfer function of the lens+cornea system in-vivo [[Opth.Phys.Opt.97](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/OPH97.PS.gz)]. This work received the European Vistakon Research Award in 1994.

2. In **Psychophysics**, we proposed simplified methods to measure the Contrast Sensitivity Function across the entire frequency domain [[J.Opt.94](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/JOPT94.PS.gz)], and developed a fast and accurate method to measure the parameters of multi-stage linear+nonlinear vision models [[Proc.SPIE15](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/malo15a-reprint.pdf)].

3. In **Image Statistics**, we gathered spatially and spectrally calibrated image samples to determine the properties of these signals and their variations under changes in illumination, contrast, and motion [[Im.Vis.Comp.00](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/ivc99.ps.gz), [Neur.Comp.12](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/Neco_accepted_2012.pdf), [IEEE-TGRS14](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/manuscr_TGRS_2012_00431.pdf), [PLoS-ONE14](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/Gutmann_PLOS_ONE_2014.pdf), [Rem.Sens.Im.Proc.11](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/people/malo/rem_sens_im_proc_12_ch02.pdf), [Front.Neurosci.15](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/after_effects)].

# Theory: empirical models in Vision Science

We proposed mathematical descriptions of different visual dimensions: *Texture*, *Color*, and *Motion*.

1. We used wavelet representations to propose nonstationary **Texture Vision** models [[J.Mod.Opt.97](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/JMO97.PS.gz), [MScThesis95](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/msc_jmalo.pdf)].

2. We developed **Color Vision** models with illumination invariance, which allow for the reproduction of chromatic anomalies, adaptation, and aftereffects [[Vis.Res.97](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/VISRES97.PS.gz), [J.Opt.96](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/JOPT96.PS.gz), [J.Opt.98](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/JOPT98.PS.gz), [JOSA04](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/josa_04.pdf), [Neur.Comp.12](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/Neco_accepted_2012.pdf)].

3. We created **Motion Vision** models [[Alheteia08](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/Malo_Alheteia_08.pdf)] that focus on optical flow computation in perceptually relevant moving regions [[J.Vis.01](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/vss_poster.eps), [PhDThesis99](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/Redundancy_Reduction_Malo_99.pdf)], and explain the *static motion aftereffect* [[Front.Neurosci.15](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/after_effects)].

All these psychophysical and physiological models have a parallel *linear+nonlinear* structure where **receptive fields** and **surround-dependent normalization** play an important role.

# Theory: principled models in Vision Science

This category refers to the proposition of organizational laws of sensory systems that explain empirical phenomena. These principles demonstrate that neural function has been adapted to (or is determined by) the statistics of visual stimuli.

1. **Derivation of Linear Properties**: We worked on deriving the linear properties of the sensors and found that their spatio-chromatic sensitivity, changes in receptive fields, and phase properties arise from optimal solutions to the adaptation problem under noise constraints and manifold matching [[PLoS-ONE14](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/Gutmann_PLOS_ONE_2014.pdf), [IEEE-TGRS13](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/AdaptVQ_ieeetgars_2012.pdf)]. These properties are also derived from statistical independence requirements [[LNCS11](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/ICANN_2011_v7.pdf), [NeuroImag.Meeting11](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/SlidesNeuroImageMeeting11.pdf)], and from optimal estimation of object reflectance [[IEEE TGRS14](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/manuscr_TGRS_2012_00431.pdf)].

2. **Derivation of Non-Linear Behavior**: We also derived the non-linear behavior for a variety of visual sensors (chromatic, texture, and motion sensors). We found that these nonlinearities are linked to optimal information transmission (entropy maximization) and/or error minimization in noisy systems (optimal vector quantization).

- We studied this relationship in the traditional *statistics-to-perception* direction, deriving the nonlinearity from regularities in the scene [[Network06](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/V1_from_non_linear_ICA.pdf), [Neur.Comp.12](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/Neco_accepted_2012.pdf), [Front.Neurosci.15](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/after_effects)].

- We also explored the (more novel) *perception-to-statistics* direction, examining the statistical effects of perceptually motivated nonlinearities [[J.Opt.95](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/JOPT95.PS.gz), [Im.Vis.Comp.00](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/ivc99.ps.gz), [LNCS00](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/spr00.ps), [Patt.Recog.03](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/patt_rec03.pdf), [Neur.Comp.10](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/Malo_Laparra_Neural_10b.pdf), [LNCS10](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/LNAI10_malo_laparra.pdf), [NeuroImag.Meeting11](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/SlidesNeuroImageMeeting11.pdf)].

# Theory: Statistical Learning for Vision Science

In theoretical neuroscience, deriving properties of biological sensors from the regularities in visual scenes requires novel tools for statistical learning. In this field, we developed new techniques for **unsupervised manifold learning**, **feature extraction** (or symmetry detection in datasets), **dimensionality reduction**, **probability density estimation**, **multi-information estimation**, **distance learning**, and automatic **adaptation** from optimal dataset matching.

Given my interest in applicability to Vision Science problems, I focused on techniques that can be explicitly represented in the image domain, to be compared with receptive fields of visual neurons, as opposed to the usual practice in the *Machine Learning* community. Techniques include:

- **Rotation-based Iterative Gaussianization (RBIG)** [[IEEE TNN 11](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/Laparra11.pdf)].
- **Sequential Principal Curves Analysis (SPCA)** [[Network06](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/V1_from_non_linear_ICA.pdf), [Neur.Comp.12](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/Neco_accepted_2012.pdf), [Front. Neurosci.15](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/after_effects)].
- **Principal Polynomial Analysis (PPA)** [Int.J.Neur.Syst.14](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/IJNS_Laparra14_accepted_v5.pdf)
- **Dimensionality Reduction based on Regression (DRR)** [[IEEE JSTSP15](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/drr_jstsp2014_final.pdf)].
- **Graph Matching for Adaptation** [[IEEE TGRS13](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_neuroscience/AdaptVQ_ieeetgars_2012.pdf).]
