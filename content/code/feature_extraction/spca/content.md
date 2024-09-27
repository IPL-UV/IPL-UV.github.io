---
title: "Sequential Principal Curves Analysis Toolbox (SPCA)"
abstract: "SPCA is a manifold learning technique that identifies the curvilinear coordinates of a data set. It defines an invertible transform that can be tuned for NonLinear ICA (infomax) or optimal Vector Quantization (error minimization), and can be used in Dimensionality Reduction, Domain Adaptation, and Classification problems. The explicit form of the identified features (and associated nonlinear 'filters') makes it useful to model sensors in theoretical neuroscience.

Illustrative Results I: Learning Nonlinear Features
Identification of curved features and the effect of the metric in SPCA in a curved 2D manifold. Note the different marginal PDFs in the direction perpendicular to the principal curve: Laplacian and Uniform PDFs of increasing variance.

Infomax and Error Minimization through SPCA. 500 randomly selected samples of the sets were transformed using SPCA with different metrics. Results are analyzed in terms of independence (Mutual Information) and reconstruction error (RMSE).

Illustrative Results II: Image Coding According to Different Optimization Criteria."
imagenes:
  - ruta: "Cuerno_crit_1_ori_dom.webp"
    titulo: "SPCA (Euclidean Metric)"
    descripcion: "Effect of the Euclidean metric on the curved 2D manifold."
  - ruta: "Cuerno_crit_2_ori_dom.webp"
    titulo: "SPCA (Infomax Metric)"
    descripcion: "Effect of the Infomax metric on the curved 2D manifold."
  - ruta: "Cuerno_crit_3_ori_dom.webp"
    titulo: "SPCA (Error Minimization Metric)"
    descripcion: "Effect of the Error Minimization metric on the curved 2D manifold."
  - ruta: "spca_im_coding1.webp"
    titulo: "Image Coding Example 1"
    descripcion: "Image coding using different optimization criteria."
  - ruta: "spca_im_coding2.webp"
    titulo: "Image Coding Example 2"
    descripcion: "Further results of image coding with different metrics."
referencias:
  - nombre: "V1 non-linear properties emerge from local-to-global non-linear ICA"
    autores: "J. Malo, J. Gutiérrez"
    publicacion: "Network: Comp. Neural Systems. 17(1): 85-102 (2006)"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/V1_from_non_linear_ICA.pdf"
  - nombre: "Visual Aftereffects and Sensory Nonlinearities from a Single Statistical Framework"
    autores: "V. Laparra, J. Malo"
    publicacion: "Frontiers in Human Neuroscience. [Special Issue on Perceptual Illusions](http://journal.frontiersin.org/researchtopic/the-future-of-perceptual-illusions-from-phenomenology-to-neuroscience-2381) 2015. [A guide to the full supplementary material (description of the code, data, experiments and results)](https://ipl-uv.github.io/old_pages/data/after_effects/index.html)."
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/frontiers_laparra_malo_Accepted_15.pdf"
  - nombre: "Nonlinearities and Adaptation of Color Vision from Sequential Principal Curves Analysis"
    autores: "V. Laparra, S. Jiménez, G. Camps, J. Malo"
    publicacion: "Neural Computation, 24(10):2751-88, Oct 2012"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/Neco_accepted_2012.pdf"
  - nombre: "Visual Discrimination and Adaptation using nonlinear unsupervised learning"
    autores: "S. Jiménez, V. Laparra, & J. Malo."
    publicacion: "Proc. SPIE. Human Vision and Electronic Imaging. 2013"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/HVEI_paper_8651_56.pdf"
  - nombre: "Full Technical Report on Sequential Principal Curves Analysis"
    autores: "V. Laparra & J. Malo."
    publicacion: "Technical Report IPL. Universitat de Valencia, 2015. [A guide to the supplementary material (2012 version)](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/SPCA_data_and_results.pdf)."
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/IPL_TR_PCs.pdf"
  - nombre: "Principal Polynomial Analysis (PPA)"
    autores: "V. Laparra, S. Jimenez, D. Tuia, G. Camps-Valls, J. Malo"
    publicacion: "International Journal of Neural Systems, 24(7) Nov. 2014. [PPA](../../ppa/content)."
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/IJNS_Laparra14_accepted_v5.pdf"
  - nombre: "Dimensionality Reduction via Regression in Hyperspectral Imagery"
    autores: "V. Laparra, J. Malo, G. Camps-Valls"
    publicacion: "IEEE Journal on Selected Topics of Signal Processing. Vol. 9, Num. 9, September 2015"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/drr_jstsp2014_final.pdf"
enlaces:
  - nombre: "SPCA Toolbox"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/SPCA_toolbox.zip"
    descripcion: "Once you download and decompress the toolbox, see the readme file 'demo_SPCA_toy_example_2D_manifold.m'."
---

