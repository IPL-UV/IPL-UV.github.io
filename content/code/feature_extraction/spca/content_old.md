---
type: "code"
layout: "single_four"

title: "Sequential Principal Curves Analysis Toolbox (SPCA)"
images:
  - link: "Cuerno_crit_1_ori_dom.webp"
    title: "SPCA (Euclidean Metric)"
    description: "Effect of the Euclidean metric on the curved 2D manifold."
  - link: "Cuerno_crit_2_ori_dom.webp"
    title: "SPCA (Infomax Metric)"
    description: "Effect of the Infomax metric on the curved 2D manifold."
  - link: "Cuerno_crit_3_ori_dom.webp"
    title: "SPCA (Error Minimization Metric)"
    description: "Effect of the Error Minimization metric on the curved 2D manifold."
  - link: "spca_im_coding1.webp"
    title: "Image Coding Example 1"
    description: "Image coding using different optimization criteria."
  - link: "spca_im_coding2.webp"
    title: "Image Coding Example 2"
    description: "Further results of image coding with different metrics."
    
references:
  - title: "V1 non-linear properties emerge from local-to-global non-linear ICA"
    authors: "J. Malo, J. Gutiérrez"
    publication: "Network: Comp. Neural Systems. 17(1): 85-102 (2006)"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/V1_from_non_linear_ICA.pdf"
  - title: "Visual Aftereffects and Sensory Nonlinearities from a Single Statistical Framework"
    authors: "V. Laparra, J. Malo"
    publication: "Frontiers in Human Neuroscience. [Special Issue on Perceptual Illusions](http://journal.frontiersin.org/researchtopic/the-future-of-perceptual-illusions-from-phenomenology-to-neuroscience-2381) 2015. [A guide to the full supplementary material (description of the code, data, experiments and results)](../../../vision_and_color/aftereffects/content/)."
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/frontiers_laparra_malo_Accepted_15.pdf"
  - title: "Nonlinearities and Adaptation of Color Vision from Sequential Principal Curves Analysis"
    authors: "V. Laparra, S. Jiménez, G. Camps, J. Malo"
    publication: "Neural Computation, 24(10):2751-88, Oct 2012"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/Neco_accepted_2012.pdf"
  - title: "Visual Discrimination and Adaptation using nonlinear unsupervised learning"
    authors: "S. Jiménez, V. Laparra, & J. Malo."
    publication: "Proc. SPIE. Human Vision and Electronic Imaging. 2013"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/HVEI_paper_8651_56.pdf"
  - title: "Full Technical Report on Sequential Principal Curves Analysis"
    authors: "V. Laparra & J. Malo."
    publication: "Technical Report IPL. Universitat de Valencia, 2015. [A guide to the supplementary material (2012 version)](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/SPCA_data_and_results.pdf)."
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/IPL_TR_PCs.pdf"
  - title: "Principal Polynomial Analysis (PPA)"
    authors: "V. Laparra, S. Jimenez, D. Tuia, G. Camps-Valls, J. Malo"
    publication: "International Journal of Neural Systems, 24(7) Nov. 2014. [PPA](../../ppa/content)."
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/IJNS_Laparra14_accepted_v5.pdf"
  - title: "Dimensionality Reduction via Regression in Hyperspectral Imagery"
    authors: "V. Laparra, J. Malo, G. Camps-Valls"
    publication: "IEEE Journal on Selected Topics of Signal Processing. Vol. 9, Num. 9, September 2015"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/drr_jstsp2014_final.pdf"
links:
  - title: "SPCA Toolbox"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_feature/SPCA_toolbox.zip"
    description: "Once you download and decompress the toolbox, see the readme file 'demo_SPCA_toy_example_2D_manifold.m'."

aliases:
  - /spca.html
---

SPCA is a manifold learning technique that identifies the curvilinear coordinates of a data set. It defines an invertible transform that can be tuned for NonLinear ICA (infomax) or optimal Vector Quantization (error minimization), and can be used in Dimensionality Reduction, Domain Adaptation, and Classification problems. The explicit form of the identified features (and associated nonlinear 'filters') makes it useful to model sensors in theoretical neuroscience.

Illustrative Results I: Learning Nonlinear Features
Identification of curved features and the effect of the metric in SPCA in a curved 2D manifold. Note the different marginal PDFs in the direction perpendicular to the principal curve: Laplacian and Uniform PDFs of increasing variance.

Infomax and Error Minimization through SPCA. 500 randomly selected samples of the sets were transformed using SPCA with different metrics. Results are analyzed in terms of independence (Mutual Information) and reconstruction error (RMSE).

Illustrative Results II: Image Coding According to Different Optimization Criteria.