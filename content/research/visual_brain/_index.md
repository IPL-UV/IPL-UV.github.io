---
title: "Image and Video Processing: Scene Statistics and Visual Neuroscience at work!"
abstract: |
    Efficient coding of visual information and efficient inference of missing information in images depend on two factors: 

    1. The statistical structure of photographic images, and 
    2. The nature of the observer that will analyze the result.

    Interestingly, these two factors (image regularities and human vision) are deeply related since the evolution of biological sensors seems to be guided by statistical learning (see our work on the *Efficient Coding Hypothesis* in [Visual Neuroscience](neuro.html)). However, the simultaneous consideration of these two factors is unusual in the image processing community, particularly beyond Gaussian image models and linear models of the observer.  
    Our work in image and video processing has been parallel to our investigation in describing the non-Gaussian nature of visual scenes and the nonlinear behavior of visual cortex. This parallel approach is sensible since these are two sides of the same issue in vision ([the Efficient Coding Hypothesis again!](https://en.wikipedia.org/wiki/Efficient_coding_hypothesis)). Specifically, the core algorithm used in many applications has been the [Divisive Normalization](https://en.wikipedia.org/wiki/Normalization_model), a canonical computation in sensory neurons with interesting statistical effects (see [Neur.Comp.10](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Malo_Laparra_Neural_10b.pdf)). 

    We have used this perceptual (and also statistical) model to propose novel solutions in bit allocation, to identify perceptually relevant motion, to smooth image representations, and to compute distances between images.

    # Image and Video Processing

    Low level Image Processing (coding, restoration, synthesis, white balance, color and texture edition, etc...) is all about *image statistics* in a domain where *the metric is non-Euclidean* (i.e. induced by the data or the observer).

    We proposed original image processing techniques using both perception models and image statistics including:

    (i) improvements of JPEG standard for **image coding** through nonlinear texture vision models [Electr.Lett.95](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/ELECT95.PS.gz), [Electr.Lett.99](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/ELECT99.PS.gz), [IEEE TNN05](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Gomez-Perez05_IEEETNN.pdf), [IEEE TIP06a](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/manuscript4.pdf), [JMLR08](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Camps-Valls08_JMLR.pdf),[RPSP12](http://www.uv.es/gcamps/papers/paper_patent_6_review.pdf), [Patent08](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/patente_v5_jesus.pdf), (ii) improvements of MPEG standard for **video coding** with new perceptual quantization scheme and new motion estimation focused on perceptually relevant **optical flow** [LNCS97](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/LNCS97.PS.gz), [Electr.Lett.98](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/ELECT98.PS.gz), [Electr.Lett.00a](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/elect00.ps), [Electr.Lett.00b](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/seg_ade2.ps), [IEEE TIP01](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/ieeeoct01.pdf), [Redund.Reduct.99](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Redundancy_Reduction_Malo_99.pdf), (iii) new **image restoration** techniques based on nonlinear contrast perception models and the image statistics in local frequency domains [IEEE TIP 06b](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/manuscript_TIP_00864_2004_R2.pdf), [JMLR10](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/laparra10a.pdf), (iv) new approaches to **color constancy** either based on relative chromatic descriptors  
    [Vis.Res.97](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/VISRES97.PS.gz),[J.Opt.96](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/JOPT96.PS.gz), statistically-based chromatic adaptation models [Neur.Comp.12](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Neco_accepted_2012.pdf), [PLoS-ONE14](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Gutmann_PLOS_ONE_2014.pdf), or Bayesian estimation of surface reflectance [IEEE-TGRS14](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/manuscr_TGRS_2012_00431.pdf), (v) new subjective **image and video distortion measures** using nonlinear perception models [Im.Vis.Comp.97](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/IVC97.PS.gz), [Disp.99](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/displays_99.pdf), [IEEE ICIP02](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/icip02.pdf), [JOSA10](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Laparra_JOSA_10.pdf),[Proc.SPIE15](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/malo15a-reprint.pdf), (vi) **image classification** and **knowledge extraction** (or regression) based on our feature extraction techniques [IEEE-TNN11](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Laparra11.pdf), [IEEE-TGRS13](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/AdaptVQ_ieeetgars_2012.pdf),[Int.J.Neur.Syst.14](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/IJNS_Laparra14_accepted_v5.pdf), [IEEE-JSTSP15](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/drr_jstsp2014_final.pdf). See CODE for image and video processing applications [here](../../../code/image_video_processing/).


imagenes:
  - ruta: 'image_processing.webp'
    titulo: "Image Processing"
    descripcion: "Controversies around using Mean Squared Error and images like 'Lena Sölderberg'. Learn more about the MSE issue [here](../../../code/image_video_processing/vistaqualitytools/content/)."
  - ruta: 'animated_coder.gif'
    titulo: "Video Compression Model"
    descripcion: "MPEG-like video compression involves motion compensation and residual quantization. Vision Science and Statistical Learning can enhance these predictive coding methods."
  - ruta: 'animated_video_coding.gif'
    titulo: "Motion Estimation and Residual Quantization"
    descripcion: "Decoded sequences under different settings of Motion Estimation and Residual Quantization. Examples in [Electr.Lett.00a](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/elect00.ps), [IEEE TIP01](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/ieeeoct01.pdf)."
  - ruta: 'im_coding.webp'
    titulo: "Image Coding"
    descripcion: "Using nonlinear perceptual image representations is critical to improving JPEG compression."
  - ruta: 'video_coding.webp'
    titulo: "Video Coding"
    descripcion: "Improved bit allocation in MPEG video coding through nonlinear perception models."
  - ruta: 'ruidos_great.webp'
    titulo: "Image Restoration"
    descripcion: "Image restoration using regularization functionals based on nonlinear perception models and image smoothing in the wavelet domain."
  - ruta: 'flor1.webp'
    titulo: "Color Constancy - Adaptation"
    descripcion: "Color constancy addressed through linear and nonlinear solutions to the geometric problem of manifold matching under different illumination conditions."
  - ruta: 'metrics.webp'
    titulo: "Subjective Image/Video Metrics"
    descripcion: "Observer's opinion is better correlated with our Euclidean distance in nonlinear perceptual domains than with Structural Similarity Index."
  - ruta: 'clasi1.webp'
    titulo: "Image Classification - Feature Adaptation"
    descripcion: "Classifiers using RBIG, SPCA, PPA, DRR features are robust to changes in acquisition conditions."

referencias:
  - nombre: "Electr.Lett.95"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/ELECT95.PS.gz"
  - nombre: "Electr.Lett.99"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/ELECT99.PS.gz"
  - nombre: "IEEE TNN05"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Gomez-Perez05_IEEETNN.pdf"
  - nombre: "IEEE TIP06a"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/manuscript4.pdf"
  - nombre: "JMLR08"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Camps-Valls08_JMLR.pdf"
  - nombre: "RPSP12"
    url: "http://www.uv.es/gcamps/papers/paper_patent_6_review.pdf"
  - nombre: "Patent08"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/patente_v5_jesus.pdf"
  - nombre: "LNCS97"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/LNCS97.PS.gz"
  - nombre: "Electr.Lett.98"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/ELECT98.PS.gz"
  - nombre: "Electr.Lett.00a"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/elect00.ps"
  - nombre: "IEEE TIP01"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/ieeeoct01.pdf"
  - nombre: "Redund.Reduct.99"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Redundancy_Reduction_Malo_99.pdf"
  - nombre: "IEEE TIP 06b"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/manuscript_TIP_00864_2004_R2.pdf"
  - nombre: "JMLR10"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/laparra10a.pdf"
  - nombre: "Vis.Res.97"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/VISRES97.PS.gz"
  - nombre: "J.Opt.96"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/JOPT96.PS.gz"
  - nombre: "Neur.Comp.12"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Neco_accepted_2012.pdf"
  - nombre: "PLoS-ONE14"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Gutmann_PLOS_ONE_2014.pdf"
  - nombre: "IEEE-TGRS14"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/manuscr_TGRS_2012_00431.pdf"
  - nombre: "Im.Vis.Comp.97"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/IVC97.PS.gz"
  - nombre: "Disp.99"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/displays_99.pdf"
  - nombre: "IEEE ICIP02"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/icip02.pdf"
  - nombre: "JOSA10"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Laparra_JOSA_10.pdf"
  - nombre: "Proc.SPIE15"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/malo15a-reprint.pdf"
  - nombre: "IEEE-TNN11"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/Laparra11.pdf"
  - nombre: "IEEE-TGRS13"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/AdaptVQ_ieeetgars_2012.pdf"
  - nombre: "Int.J.Neur.Syst.14"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/IJNS_Laparra14_accepted_v5.pdf"
  - nombre: "IEEE-JSTSP15"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/research/visual_brain/drr_jstsp2014_final.pdf"

enlaces:
  - nombre: "Vista Toolbox"
    url: "../../code/image_video_processing/vistacore/content/"
  - nombre: "Efficient Coding Hypothesis"
    url: "https://en.wikipedia.org/wiki/Efficient_coding_hypothesis"
  - nombre: "NeuroImage Unit"
    url: "https://www.acim.lafe.san.gva.es/acim/?page_id=1229"
  - nombre: "Vision and Color Processing Software"
    url: "../../code/vision_and_color/"


type: "research"
layout: "single2"
---

