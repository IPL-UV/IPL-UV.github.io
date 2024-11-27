---
title: "Image and Video Processing: Scene Statistics and Visual Neuroscience at work!"
type: "research"
layout: "single_four"
aliases:
  - /improc.html
images:
  - link: 'image_processing.webp'
    title: "Image Processing"
    description: "Controversies around using Mean Squared Error and images like 'Lena Sölderberg'. Learn more about the MSE issue [here](../../../code/image_video_processing/vistaqualitytools/content/)."
  - link: 'animated_coder.gif'
    title: "Video Compression Model"
    description: "MPEG-like video compression involves motion compensation and residual quantization. Vision Science and Statistical Learning can enhance these predictive coding methods."
  - link: 'animated_video_coding.gif'
    title: "Motion Estimation and Residual Quantization"
    description: "Decoded sequences under different settings of Motion Estimation and Residual Quantization. Examples in [Electr.Lett.00a](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/elect00.ps), [IEEE TIP01](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/ieeeoct01.pdf)."
  - link: 'im_coding.webp'
    title: "Image Coding"
    description: "Using nonlinear perceptual image representations is critical to improving JPEG compression."
  - link: 'video_coding.webp'
    title: "Video Coding"
    description: "Improved bit allocation in MPEG video coding through nonlinear perception models."
  - link: 'ruidos_great.webp'
    title: "Image Restoration"
    description: "Image restoration using regularization functionals based on nonlinear perception models and image smoothing in the wavelet domain."
  - link: 'flor1.webp'
    title: "Color Constancy - Adaptation"
    description: "Color constancy addressed through linear and nonlinear solutions to the geometric problem of manifold matching under different illumination conditions."
  - link: 'metrics.webp'
    title: "Subjective Image/Video Metrics"
    description: "Observer's opinion is better correlated with our Euclidean distance in nonlinear perceptual domains than with Structural Similarity Index."
  - link: 'clasi1.webp'
    title: "Image Classification - Feature Adaptation"
    description: "Classifiers using RBIG, SPCA, PPA, DRR features are robust to changes in acquisition conditions."

links:
  - title: "Vista Toolbox"
    link: "../../code/image_video_processing/vistacore/content/"
  - title: "Efficient Coding Hypothesis"
    link: "https://en.wikipedia.org/wiki/Efficient_coding_hypothesis"
  - title: "NeuroImage Unit"
    link: "https://www.acim.lafe.san.gva.es/acim/?page_id=1229"
  - title: "Vision and Color Processing Software"
    link: "../../code/vision_and_color/"
---

Efficient coding of visual information and efficient inference of missing information in images depend on two factors: 

- The statistical structure of photographic images, and 
- The nature of the observer that will analyze the result.

Interestingly, these two factors (image regularities and human vision) are deeply related since the evolution of biological sensors seems to be guided by statistical learning (see our work on the *Efficient Coding Hypothesis* in [Visual Neuroscience](neuro.html)). However, the simultaneous consideration of these two factors is unusual in the image processing community, particularly beyond Gaussian image models and linear models of the observer.  
Our work in image and video processing has been parallel to our investigation in describing the non-Gaussian nature of visual scenes and the nonlinear behavior of visual cortex. This parallel approach is sensible since these are two sides of the same issue in vision ([the Efficient Coding Hypothesis again!](https://en.wikipedia.org/wiki/Efficient_coding_hypothesis)). Specifically, the core algorithm used in many applications has been the [Divisive Normalization](https://en.wikipedia.org/wiki/Normalization_model), a canonical computation in sensory neurons with interesting statistical effects (see [Neur.Comp.10](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Malo_Laparra_Neural_10b.pdf)). 

We have used this perceptual (and also statistical) model to propose novel solutions in bit allocation, to identify perceptually relevant motion, to smooth image representations, and to compute distances between images.

# Image and Video Processing

Low level Image Processing (coding, restoration, synthesis, white balance, color and texture edition, etc...) is all about *image statistics* in a domain where *the metric is non-Euclidean* (i.e. induced by the data or the observer).

We proposed original image processing techniques using both perception models and image statistics including:

(i) improvements of JPEG standard for **image coding** through nonlinear texture vision models [[Electr.Lett.95](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/ELECT95.PS.gz), [Electr.Lett.99](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/ELECT99.PS.gz), [IEEE TNN05](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Gomez-Perez05_IEEETNN.pdf), [IEEE TIP06a](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/manuscript4.pdf), [JMLR08](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Camps-Valls08_JMLR.pdf),[RPSP12](http://www.uv.es/gcamps/papers/paper_patent_6_review.pdf), [Patent08](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/patente_v5_jesus.pdf)], (ii) improvements of MPEG standard for **video coding** with new perceptual quantization scheme and new motion estimation focused on perceptually relevant **optical flow** [[LNCS97](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/LNCS97.PS.gz), [Electr.Lett.98](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/ELECT98.PS.gz), [Electr.Lett.00a](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/elect00.ps), [Electr.Lett.00b](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/seg_ade2.ps), [IEEE TIP01](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/ieeeoct01.pdf), [Redund.Reduct.99](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Redundancy_Reduction_Malo_99.pdf)], (iii) new **image restoration** techniques based on nonlinear contrast perception models and the image statistics in local frequency domains [[IEEE TIP 06b](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/manuscript_TIP_00864_2004_R2.pdf), [JMLR10](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/laparra10a.pdf)], (iv) new approaches to **color constancy** either based on relative chromatic descriptors  
[[Vis.Res.97](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/VISRES97.PS.gz),[J.Opt.96](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/JOPT96.PS.gz), statistically-based chromatic adaptation models [Neur.Comp.12](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Neco_accepted_2012.pdf), [PLoS-ONE14](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Gutmann_PLOS_ONE_2014.pdf), or Bayesian estimation of surface reflectance [IEEE-TGRS14](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/manuscr_TGRS_2012_00431.pdf)], (v) new subjective **image and video distortion measures** using nonlinear perception models [[Im.Vis.Comp.97](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/IVC97.PS.gz), [Disp.99](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/displays_99.pdf), [IEEE ICIP02](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/icip02.pdf), [JOSA10](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Laparra_JOSA_10.pdf),[Proc.SPIE15](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/malo15a-reprint.pdf)], (vi) **image classification** and **knowledge extraction** (or regression) based on our feature extraction techniques [[IEEE-TNN11](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Laparra11.pdf), [IEEE-TGRS13](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/AdaptVQ_ieeetgars_2012.pdf),[Int.J.Neur.Syst.14](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/IJNS_Laparra14_accepted_v5.pdf), [IEEE-JSTSP15](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/drr_jstsp2014_final.pdf)]. See CODE for image and video processing applications [here](../../../code/image_video_processing/).
