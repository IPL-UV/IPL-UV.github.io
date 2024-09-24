---
title: "VistaModels: Computational models of Visual Neuroscience"
abstract: |
  The Toolboxes in the VistaModels site are organized in three categories of different nature: [**(a) Empirical-mechanistic Models**](#a-empirical-mechanistic-models), tuned to reproduce basic phenomena of color and texture perception, [**(b) Principled Models**](#b-efficient-coding-in-mechanistic-models), derived from information theoretic arguments, and [**(c) Engineering-motivated Models**](#c-engineering-motivated-models), developed to address applied problems in image and video processing.
  
  The algorithms in **VistaModels** require the standard building blocks provided in the (more basic) toolboxes VistaLab and ColorLab. However, the necessary functions from these more basic toolboxes are included in the packages listed below for the user convenience.

  # Table of contents

  - [**(A) Empirical-mechanistic Models**](#a-empirical-mechanistic-models)
    - [1995 - 2008: Linear opponent color channels, local-DCT and Divisive Normalization](#1995---2008-linear-opponent-color-channels-local-dct-and-divisive-normalization)
    - [2009 - 2010: Linear opponent color channels, Orthogonal Wavelet and Divisive Normalization](#2009---2010-linear-opponent-color-channels-orthogonal-wavelet-and-divisive-normalization)
    - [2013 - 2018: Multi-Layer network with nonlinear opponent color, Overcomplete Wavelet and Divisive Normalization](#2013---2018-multi-layer-network-with-nonlinear-opponent-color-overcomplete-wavelet-and-divisive-normalization)
    - [2019 - 2021: Convolutional and differentiable implementations](#2019---2021-convolutional-and-differentiable-implementations)
    - [Psychophysical test-bed for model tuning and comparison](#psychophysical-test-bed-for-model-tuning-and-comparison)
    - [Model Comparison](#model-comparison)
  - [**(B) Principled Models**](#b-principled-models)
    - [Efficient coding in mechanistic models](#efficient-coding-in-mechanistic-models)
    - [Statistically-based linear receptive fields](#statistically-based-linear-receptive-fields)
    - [Statistically-based nonlinearities](#statistically-based-nonlinearities)
  - [**(C) Engineering-motivated Models**](#c-engineering-motivated-models)
    - [Perceptually-weighted motion estimation: VistaVideoCoding](#perceptually-weighted-motion-estimation-vistavideocoding)
    - [Image Coding: VistaCoRe](#image-coding-vistacore)
    - [Image and Video Quality: VistaQualityTools](#image-and-video-quality-vistaqualitytools)

  # (A) Empirical-mechanistic Models

  Cascades of linear transforms and nonlinear saturations are ubiquitous in neuroscience and artificial intelligence ever since the [[McCulloch-Pitts model](http://www.scholarpedia.org/article/Models_of_visual_cortex)]. More recently this has been exemplified in subtractive and divisive models of cortical interaction [Wilson & Cowan, Kybernetik 73; Carandini and Heeger, Nature Rev. Neurosci. 12].
  
  Over the years, we have developed progressively better versions of such cascades to be applicable to color images and video sequences. These parametric models were empirically tuned to give a rough description of different color and texture perception phenomena (see the [psychophysical test-bed](#psychophysical-test-bed-for-model-tuning-and-comparison) below for model tuning and comparison).

  See a visual example of the effect of the local spatial-frequency transforms and the divisive normalization below (illustration of the 2018 model)

  ## 1995 - 2008: Linear opponent color channels, local-DCT and Divisive Normalization

  This model is invertible and was originally tuned to reproduce contrast response curves obtained from contrast incremental thresholds [Pons PhD Thesis, 1997]. It was applied to reproduce subjective distortion opinion [[Im.Vis.Comp.97](https://www.sciencedirect.com/science/article/abs/pii/S0262885696000042), [Displays 99](https://www.sciencedirect.com/science/article/abs/pii/S0141938299000098)] and to improve the perceptual quality of JPEG and MPEG through (a) transform coding of the achromatic channel [[Elect.Lett.95](https://www.uv.es/vista/vistavalencia/papers/ELECT95.PS.gz), [Elect.Lett.99](https://www.uv.es/vista/vistavalencia/papers/ELECT99.PS.gz), [Im.Vis.Comp.00](https://www.uv.es/vista/vistavalencia/papers/ivc99.ps.gz), [IEEE TIP 01](https://www.uv.es/vista/vistavalencia/papers/ieeeoct01.pdf), [Patt.Recog.03](https://www.uv.es/vista/vistavalencia/papers/patt_rec03.pdf), [IEEE TNN 05](https://www.uv.es/vista/vistavalencia/papers/SVM_JND8_ACCEPTED.pdf), [IEEE TIP 06a](https://www.uv.es/vista/vistavalencia/papers/manuscript4.pdf), [JMLR08](https://www.uv.es/vista/vistavalencia/papers/camps_JMLR_08.pdf)], (b) the color channels [[RPSP12](https://www.eurekaselect.com/96168/article)], and (c) by improving the motion estimation [[LNCS97](https://www.uv.es/vista/vistavalencia/papers/LNCS97.PS.gz), [Elect.Lett.98](https://www.uv.es/vista/vistavalencia/papers/ELECT98.PS.gz), [Elect.Lett.00a](https://www.uv.es/vista/vistavalencia/papers/seg_ade2.ps), [Elect.Lett.00b](https://www.uv.es/vista/vistavalencia/papers/elect00.ps), [IEEE TIP 01](https://www.uv.es/vista/vistavalencia/papers/ieeeoct01.pdf)].

  - **Download the Toolbox!:** [V1_model_DCT_DN_color.zip (74MB)](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/V1_model_DCT_DN_color.zip)
 
  ## 2009 - 2010: Linear opponent color channels, Orthogonal Wavelet and Divisive Normalization

  Even though we developed our own Matlab code for some specific overcomplete wavelets in the mid 90's [[MSc Thesis 95](http://www.uv.es/vista/vistavalencia/papers/tesis/msc_jmalo.zip), [J.Mod.Opt.97](https://www.uv.es/vista/vistavalencia/papers/JMO97.PS.gz)], it took some time until we applied the Divisive Normalization interaction to Simoncelli's wavelets in MatlabPyrTools (which are substantially more efficient). The model was fitted to reproduce subjective image distortion opinion [[JOSA A 10](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Laparra_JOSA_10.pdf)] following exhaustive grid search as in [[IEEE ICIP 02](https://www.uv.es/vista/vistavalencia/papers/icip02.pdf)]. This model (which relies on the orthogonal wavelets of the MatlabPyrTools) was found to have excellent redundancy reduction properties [[LNCS10](https://link.springer.com/chapter/10.1007/978-3-642-11509-7_3), [Neur.Comp.10](https://www.uv.es/vista/vistavalencia/papers/Malo_Laparra_Neural_10b.pdf)].

  - **Download the Toolbox!:** [V1_model_wavelet_DN_color.zip (14MB)](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/V1_model_wavelet_DN_color.zip)

  ## 2013 - 2018: Multi-Layer network with nonlinear opponent color, Overcomplete Wavelet and Divisive Normalization

  Even though we developed a comprehensive color vision toolbox in the early 2000's (see [ColorLab](./../content) ), it took some time until we included a fully adaptive chromatic front-end before the spatial processing models based on overcomplete wavelets. Note that the older toolboxes rely on (too rough) linear RGB to YUV transforms. This multi-layer model (or biologically-plausible deep network) performs the following chain of perceptually meaningful operations [[PLoS 18](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0201326)].

  The parameters of the different layers were fitted in different ways: while the 2nd and 3rd layers (contrast and CSF+masking) were determined using Maximum Differentiation [[Malo and Simoncelli SPIE 15](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/malo15a-reprint.pdf)], layers 1st and 4th (chromatic front-end and wavelet layer) were fitted to reproduce subjective image distortion data [[PLoS 18](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0201326)], and then fine-tuned to reproduce classical masking [[Front. Neurosci. 19](https://www.frontiersin.org/articles/10.3389/fnins.2019.00008/full)].

  - **Download the Toolbox!:** [BioMultiLayer_L_NL_color.zip (49MB)](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/BioMultiLayer_L_NL_color.zip)

  ## 2019 - 2021: Convolutional and differentiable implementations

  The matrix formulation developed in [[PLoS 18](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0201326), [Front. Neurosci. 19](https://www.frontiersin.org/articles/10.3389/fnins.2019.00008/full)] and implemented in BioMultiLayer_L_NL_color is elegant but not applicable to large images nor appropriate to be included in python deep-learning schemes since it is implemented in Matlab. Recently we worked to solve these issues and confirm the choices of the chromatic part. This led to the deep Percepnet [[IEEE ICIP 20](https://ieeexplore.ieee.org/document/9190691)], and to the convolutional version the above MultiLayer L+NL cascade [J.Vision, Proc. VSS 2021]. While Percepnet has the advantage of being implemented in python and hence ready for automatic differentiation (state-of-the-art in image quality), it has the disadvantage of being based on a restricted version of Divisive Normalization (no explicit interactions in space/scale) [[ICLR 17](https://openreview.net/forum?id=rJxdQ3jeg)]. On the other hand, the BioMultiLayer_L_NL_color_convolutional has a more general and interpretable version of the Divisive Normalization (in includes full range of interactions in space/scale/orientation). Moreover, the color adaptation choices and the scaling of the achromatic and chromatic channels has been confirmed by positive psychophysical and statistical behaviors [[J. Neurophysiol.19](https://journals.physiology.org/doi/abs/10.1152/jn.00487.2019), [J. Math.Neurosci.20](https://mathematical-neuroscience.springeropen.com/articles/10.1186/s13408-020-00095-8)]. However, derivatives are implemented in matlab, so it is not ready to be included in deep-learning schemes right away. There is a lot of room for improvement of its parameters!.

  - **Download the Toolbox!:** [BioMultiLayer_L_NL_color_convolutional.zip (76MB)](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/BioMultiLayer_L_NL_color_convolutional.zip)

  - **Visit Github!:** [Perceptnet](https://github.com/alexhepburn/perceptnet) 

  - **Statistical and Psychophysical support for the chromatic choices (I/II):** The small scale model in this paper uses the same chromatic choices as the BioMultiLayer_L_NL models. [Code and Data for small scale recurrent Wilson-Cowan network [J.Neurophysiol. 2020]](./../flow_wilson)

  - **Statistical and Psychophysical support for the chromatic choices (II/II):** The small scale model in this paper uses the same chromatic choices as the BioMultiLayer_L_NL models. [Code and Data for small scale Div. Norm. [J.Math.Neurosci. 2020]](./../spatio_chromatic)

  ## Psychophysical test-bed for model tuning and comparison

  The figure below (computed using [VISTALAB](./../vistalab) and [ColorLab](./../content)) illustrates distinctive features of early vision: (a) the bandwidth of the achromatic and the chromatic channels is markedly different, (b) the response to contrast is a saturating nonlinearity, its slope (sensitivity) depends on the frequency and the response attenuates as a function of the properties of the background (note how the test is more salient -highlighted in green- on top of a very different background while it is masked -highlighted red- on top of similar backgrounds), and (c) the visibility of i.i.d. noise seen on top of a natural image is not uniform: e.g. visibility is smaller in high contrast regions.

  These quite visible facts can be used to tune the parameters of the mechanistic models considered above. One could play with the parameters by hand until the response curves qualitatively reproduce what one actually sees. We suggested this idea to improve model fit in natural image databases [Front.Neurosci.18] and (for the first time!) here is data and code to perform such tune-it-yourself experiments: [experiments_VistaModels.zip (400MB)](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/experiments_VistaModels.zip).
  
  File is huge because it contains thousands of tests to compute detailed contrast response curves and distortion measures on the TD database. Moreover, it also has the corresponding responses of the three mechanistic models!.
  
  Results below suggest that models are equivalent but the most recent displays better behavior (on top of having more plausible receptive fields [[PLoS 18](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0201326)]). More importantly, while the results on Image Quality are way better than the popular Structural Similarity Index SSIM (see VistaQualityTools ) there is still a lot of room for improvement through these tune-it-yourself experiments!.

  ## Model Comparison

  # (B) Principled Models

  ## Efficient coding in mechanistic models

  We have shown that models including point-wise Weber-like saturation for brightness lead to decreasing signal-to-noise ratio as a function of the luminance [J.Opt.95]. Moreover, taking into account more general cascades of linear+nonlinear layers (e.g. local-frequency transforms and divisive normalization after Weber-brightness) we have seen that the efficiency of such systems (in terms of redundancy reduction) decreases with luminance and contrast, which is consistent with the distribution of natural images in local frequency domains [PLoS 18]. We have seen that the discrimination ability of Local-DCT+Div.Norm. models is bigger in the more populated regions of the frequency-amplitude domain [Im.Vis.Comp.97]. Additionally, we have seen that the mutual information between the coefficients of the image representation progressively reduces from the retina to the normalized representation, both in the local-DCT + DN case [IEEE TIP 06] and in the Orthogonal wavelet+DN case [Neur.Comp.10](https://www.uv.es/vista/vistavalencia/papers/Malo_Laparra_Neural_10b.pdf).

  The above body of results means that the Mechanistic Models considered above display remarkable adaptation to the natural image statistics.
  
  In the same line, in collaboration with NYU (Balle and Simoncelli) we have optimized the described linear+nonlinear architectures for optimal autoencoding. By including both the linear and the nonlinear parts in the optimization we get unprecedented rate-distortion performances (see paper and code here [[ICLR 17](http://www.cns.nyu.edu/~lcv/iclr2017)]), way better than our previous image coders based on V1 models with fixed linear stages (See the [VistaCoRe](./../../../image_video_processing/vistacore/content) Toolbox).

  ## Statistically-based linear receptive fields

  Statistical goals such as decorrelation (Principal Component Analysis, PCA), and Independent Component Analysis (ICA) many time lead to sensible linear receptive fields when trained with natural scenes. For instance, spatio-spectral PCA leads to compact representations to disentangle reflectance and spectral illumination from retinal irradiance and lead to spatial-frequency sensors with smooth spectral response [IEEE TGRS 13] (see VistaSpatioSpectral). In collaboration with Helsinki University (Gutman and Hyvarinen) we explored ICA-related techniques. Complex ICA led to local and oriented receptive fields in phase quadrature [LNCS11] (download the [Complex ICA](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/CICA_toolbox.zip) Toolbox). Higher Order Canonical Correlation Analysis (HOCCA) combines the sparsity goal with optimal correspondence between identified features in domain adaptation problems leading to biologically plausible spatiochromatic receptive fields which adapt to changes in the illumination (PLoS 14, see the [HOCCA](./../../../feature_extraction/hocca/content) Toolbox).
  
  This analysis of ICA methods concluded with a refutation of a classical result in cortical organization based on Topographica ICA: in fact (as opposed to Hyvarinen & Hoyer Vis. Res. 2001) it does not lead to orientation domains [PLoS 17]. See code and results to analyze [TICA](./../../tica/content) receptive fields.
  
  ## Statistically-based nonlinearities

  Instead of optimizing the mechanistic models for efficient coding we tried a stronger approach to test the Efficient Coding Hypothesis: use pure data-driven techniques instead of assuming models which already have the right functional form. We developed a family of invertible techniques for manifold unfolding and for manifold Gaussianization.
  
  The unfolding techniques identify nonlinear sensors that follow curved manifolds. These include Sequential Principal Curves Analysis [**SPCA**](./../../../feature_extraction/spca/content) and sequels: Principal Polynomial Analysis [**PPA**](./../../../feature_extraction/ppa/content) and Dimensionality Reduction based on Regression, [**DDR**](./../../../feature_extraction/ddr/content).
  
  The Gaussianization technique (Rotation-Based Iterative Gaussianization, [**RBIG**](./../../../feature_extraction/rbig/content)) does not identify sensors but it allows to compute the PDF. Therefore it is useful to define discrimination regions according to information maximization or error minimization. See the kind of predictions made by these unfolding techniques (SPCA [Network 06, NeCo12, Front. Human Neurosci.15, ArXiv 16, https://arxiv.org/pdf/1606.00856.pdf], and PPA-DRR [SPIE13, Int.J.Neur.Syst.14, IEEE Sel.Top.Sig.Proc.15]) and by the Gaussianization technique [[Talk at LeCun Lab NYU 13](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/2013_Courant_features_RBIG.pdf), IEEE TNN 11].

  Closely related to optimal discrimination (or optimal metric) for error minimization is the concept of Fisher Information. Our lab has a tradition in the study of Riemannian metrics induced by nonlinear perception systems [J. Malo PhD 99, Displ.99]. Over the years, the ideas about the geometrical transforms induced by the system and their effect on information processing have evolved from distance computation to the consideration of the transformation of neural noise [Displ.99, Patt.Recog.03, IEEE TIP 06, JOSA A 10, SPIE 15, NIPS 17, PLoS 18].

  # (C) Engineering-motivated

  ## Perceptually-weighted motion estimation: VistaVideoCoding

  What can be predicted is not worth transmitting!. This simple idea is the core of predictive coding used in most successful video coders (e.g. MPEG). In predictive coding motion information is the key to predict future-from-past. MPEG-like coders first compute the optical flow (or displacement field) and encode the prediction error in a transformed domain which (not surprisingly!) is similar to the [V1 mechanistic models](#a-empirical-mechanistic-models) described above.
  
  In this video-coding context we improved motion estimation by connecting the optical flow computation with the perceptual relevance of the prediction error: we proposed to improve the resolution of the motion estimate only if the prediction error was hard to encode for our improved V1 models [LNCS97, Electr.Lett.98, J.Vis.01]. This gave rise to smoother motion flows more appropriate for motion-based segmentation [Electr.Lett.00a], and to better video coders [Electr.Lett.00b, IEEE TIP 01].

  - Download the motion estimation and video coding toolbox! [VistaVideoCoding](./../../../image_video_processing/videocodingtools/content).

  ## Image Coding: VistaCoRe

  Image compression requires vision models that rank visual features according to their perceptual relevance so that extra bits can be allocated to encode the subjectively important aspects of the image.
  
  The vision model based on DCT and Divisive Normalization considered above leads to better decoded images at the same compression ratio than JPEG and variants based on simpler models of masking.
  
  See the [VistaCoRe](./../../../image_video_processing/vistacore/content) (Coding and Restoration Toolbox), and the references [Eletr.Lett95, Eletr.Lett99, Im.Vis.Comp.00 Patt.Recog.03, IEEE TNN 05, IEEE TIP 06a, IEEE TIP 06b, JMLR08].

  ## Image and Video Quality: VistaQualityTools

  Computing perceptual distances between images requires vision models that identify relevant and negligible visual features. Distortions in features that will be neglected by the observers should induce no effect in the distance. And the other way around for visually relevant features. The different models can be quantitatively compared by their accuracy in reproducing the opinion of viewers in subjectively rated databases.
  
  The three vision models considered above (based on DCTs, orthonormal wavelets, and overcomplete wavelets) have been used to propose distortion metrics that overperform SSIM. See [VistaQualityTools](./../../../image_video_processing/vistaqualitytools/content), and the references [Im.Vis.Comp.97, Displays99, Patt.Recog.03, IEEE Trans.Im.Proc.06] for the DCT metric, [JOSA 10, Neur.Comp.10] for the orthogonal wavelet metric, and [PLoS 18, Frontiers Neurosci.18] for the metric based on overcomplete wavelets.

referencias:
  - nombre: "VistaLab: The Matlab Toolbox for Spatio-Temporal Vision. Univ. Valencia 1997"
    autores: "J. Malo & J. Gutierrez"
    url: "#"
  - nombre: "Perceptually Weighted Optical Flow for Motion-based Segmentation in MPEG-4"
    autores: "J. Malo, et al."
    publicacion: "Electronics Letters 36(20): 1693-1694 (2000)"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/ELECT98.PS.gz"
  - nombre: "Visual aftereffects and sensory nonlinearities from a single statistical framework"
    autores: "V. Laparra & J. Malo"
    url: "https://www.frontiersin.org/articles/10.3389/fnhum.2015.00557/full"

imagenes:
  - ruta: "VistaModels1.webp"
    titulo: "Mechanistic Models"
    descripcion: "Following Hubel-Wiesel and McCulloch-Pitts, our models are cascades of two basic elements: (a) a linear transform (not necessarily convolutional set of receptive fields), and (b) a nonlinear saturation (either divisive or subtractive) describing the interactions between the linear units. We have played with different versions of such elements. For the linear part we explored center-surround units, local-DCTs, Orthonormal Wavelets, Overcomplete Wavelets and Laplacian Pyramids. For the nonlinear part played with different adaptive nonlinearities such as the Divisive Normalization and the subtractive Wilson-Cowan equations. See [[PLoS 2018](https://arxiv.org/abs/1711.00526)] for a comprehensive account of the maths, and [[ArXiV 2018](https://arxiv.org/abs/1804.05964)] for the equivalence between the considered nonlinear models. These models have been tuned to reproduce basic psychophysics such as contrast response curves and subjective image distortion."

  - ruta: "VistaModels2.webp"
    titulo: "Statistical Principles"
    descripcion: "The emergence of (a) specific sensors (e.g. the red and green curves), or (b) specific discrimination properties (ellipsoids in gray) may be understood as an adaptation to the statistics of natural input (samples in blue). We have used these [Barlow-style information-theoretic priciples](https://www.youtube.com/watch?v=cv9hje42i_E) in two ways: unfolding the data manifolds [[Front. Human Neurosci. 15](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/LaparraMalo15.pdf)], and Gaussianizing the data manifolds [IEEE Trans. Neur. Nets. 11]. Interestingly, nonlinearities of the Human Visual System (from retina [[J.Opt.95](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/JOPT95.PS.gz)] to cortex [[Im.Vis.Comp.00](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/ivc99.ps.gz), [Neural Comp.10](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Malo_Laparra_Neural_10b.pdf)]) have remarkable statistical effects too!."

  - ruta: "modelB.webp"
    titulo: "[Multi-Layer Network Model](#2013---2018-multi-layer-network-with-nonlinear-opponent-color-overcomplete-wavelet-and-divisive-normalization)"
    descripcion: "Multilayer network model that includes nonlinear chromatic processing and overcomplete wavelets."

  - ruta: "facts1.webp"
    titulo: "[Facts of Vision - Achromatic and Chromatic Bandwidths](#psychophysical-test-bed-for-model-tuning-and-comparison)"
    descripcion: "Ilustración de características distintivas de la visión temprana, como las diferentes bandas de frecuencia para los canales acromáticos y cromáticos."

  - ruta: "visib_noise.webp"
    titulo: "[Noise Visibility on Natural Images](#psychophysical-test-bed-for-model-tuning-and-comparison)"
    descripcion: "Visualization of noise visibility in natural images, showing lower visibility in high contrast regions."

  - ruta: "compCSFs.webp"
    titulo: "[Model Comparison - CSFs](#b-principled-models)"
    descripcion: "Comparison of Contrast Sensitivity Functions (CSF) between different mechanistic models."

  - ruta: "compResponses.webp"
    titulo: "[Model Comparison - Response Curves](#b-principled-models)"
    descripcion: "Response curves of different vision models, adjusted to reproduce psychophysical phenomena."

  - ruta: "compNoise.webp"
    titulo: "[Model Comparison - Noise Visibility](#b-principled-models)"
    descripcion: "Comparison of noise visibility in images across various vision models."

  - ruta: "principled.webp"
    titulo: "[Principled Models - Efficient Coding](#efficient-coding-in-mechanistic-models)"
    descripcion: "Example of how mechanistic models are adapted to natural image statistics for redundancy reduction."

  - ruta: "autoencoder.webp"
    titulo: "[Autoencoder for Optimal Representation](#efficient-coding-in-mechanistic-models)"
    descripcion: "Representation of an autoencoder optimized for unprecedented performance in image coding."

  - ruta: "LinearStats.webp"
    titulo: "[Statistically-based Linear Receptive Fields](#statistically-based-linear-receptive-fields)"
    descripcion: "Linear receptive fields derived from statistical techniques such as PCA and ICA trained on natural scenes."

  - ruta: "ResponsesSPCA1.webp"
    titulo: "[SPCA Responses 1](#statistically-based-nonlinearities)"
    descripcion: "Sensory response based on Sequential Principal Curves Analysis (SPCA), showing sensors adapted to the nonlinear properties of the visual system."

  - ruta: "ResponsesSPCA2.webp"
    titulo: "[SPCA Responses 2](#statistically-based-nonlinearities)"
    descripcion: "Another illustration of sensory responses using SPCA techniques."

  - ruta: "neuro_rbig.webp"
    titulo: "[Gaussianization of Nonlinear Manifolds](#statistically-based-nonlinearities)"
    descripcion: "Use of Gaussianization to define optimal discrimination regions based on information maximization or error minimization."

  - ruta: "metricFisher.webp"
    titulo: "[Fisher Information Metric for Vision Models](#statistically-based-nonlinearities)"
    descripcion: "Representation of the Fisher information concept and its application in evaluating nonlinear perception systems."

  - ruta: "flow_800_10_excel.gif"
    titulo: "[Optical Flow for Video Coding](#perceptually-weighted-motion-estimation-vistavideocoding)"
    descripcion: "Perceptually enhanced optical flow used for predictive coding in video compression."

  - ruta: "coding.webp"
    titulo: "[Image Coding and Restoration](#image-coding-vistacore)"
    descripcion: "Image coding using vision models based on DCT and Divisive Normalization to improve the quality of compressed images."

enlaces:
  - nombre: "Updated Matlab Toolbox (VISTALAB 4.0)"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Vistalab.zip"
  - nombre: "Outdated toolbox (VISTALAB 1.0)"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/BasicVideoTools_code.zip"
  - nombre: "Front. Human Neurosci. 15 paper"
    url: "https://www.frontiersin.org/articles/10.3389/fnhum.2015.00557/full"
  - nombre: "Extensions of VISTALAB I: VistaVideoCoding"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/VistaVideoCoding.zip"
  - nombre: "Extensions of VISTALAB II: VistaModels"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/BioMultiLayer_L_NL_color.zip"
  - nombre: "Extensions of VISTALAB III: ColorLab"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Colorlab.zip"
---