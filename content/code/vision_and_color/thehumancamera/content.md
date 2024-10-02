---
title: "New Compressive Sensing Algorithms from Natural and Artificial Brain Networks. L.M. Martínez and J. Malo."

type: "code"
layout: "single_four"


images:
  - link: "otros_BMIs.webp"
    title: "[Current state-of-the-art in reconstruction from neural recordings](#methods-related-to-the-human-camera)"
  - title: "[Simplified (Forward) Model](#simplified-forward-model-to-start-playing-with)"
    link: "the_model.webp"
  - title: "[Reconstructions from the (stochastic) responses of the model](#reconstructions-from-the-stochastic-responses-of-the-partially-or-totally-unknown-model)"
    link: "reconstruct_BMI.webp"


references:
  - title: "On the Suitable Domain for SVM Training in Image Coding"
    authors: "G. Camps, G. Gómez, J. Gutiérrez, J. Malo"
    publication: "Journal of Machine Learning Research, Vol. 9: 49-66 (2008)"
    link: ""

  - title: "Normalization as a Canonical Neural Computation"
    authors: "M. Carandini, D. Heeger"
    publication: "Nature Reviews. Neuroscience, 13(1): 51-62 (2012)"
    link: ""

  - title: "Perceptual Adaptive Insensitivity for SVM Image Coding"
    authors: "G. Gómez, G. Camps, J. Gutiérrez, J. Malo"
    publication: "IEEE Transactions on Neural Networks, 16(6): 1574-1581 (2005)"
    link: ""

  - title: "Neural Decoding of Visual Imagery During Sleep"
    authors: "T. Horikawa, M. Tamaki, Y. Miyawaki, Y. Kamitani"
    publication: "Science, 340: 639-642 (2013)"
    link: ""

  - title: "The Role of Spatial Information in Disentangling the Irradiance-Reflectance-Transmittance Ambiguity"
    authors: "S. Jiménez, J. Malo"
    publication: "IEEE Transactions on Geoscience and Remote Sensing, 52(8): 4881-4894 (2014)"
    link: ""

  - title: "Divisive Normalization Image Quality Metric Revisited"
    authors: "V. Laparra, J. Muñoz, J. Malo"
    publication: "Journal of the Optical Society of America A, 27(4): 852-864 (2010)"
    link: ""

  - title: "Iterative Gaussianization: From ICA to Random Rotations"
    authors: "V. Laparra, G. Camps-Valls, J. Malo"
    publication: "IEEE Transactions on Neural Networks, 22(4): 537-549 (2011)"
    link: ""

  - title: "Dimensionality Reduction via Regression in Hyperspectral Imagery"
    authors: "V. Laparra, G. Camps-Valls, J. Malo"
    publication: "Submitted to IEEE Journal of Selected Topics in Signal Processing (2014)"
    link: ""

  - title: "Non-linear Image Representation for Efficient Perceptual Coding"
    authors: "J. Malo, I. Epifanio, R. Navarro, E. Simoncelli"
    publication: "IEEE Transactions on Image Processing, 15(1): 68-80 (2006)"
    link: ""

  - title: "Method, Apparatus and Software for Color Image Compression Based on Non-linear Perceptual Representations and Machine Learning"
    authors: "J. Malo, J. Gutiérrez, G. Camps, M.J. Luque"
    publication: "Patent Ref. P200801943, Oficina Española de Patentes y Marcas (2008)"
    link: ""

  - title: "Psychophysically Tuned Divisive Normalization Approximately Factorizes the PDF of Natural Images"
    authors: "J. Malo, V. Laparra"
    publication: "Neural Computation, 22(12): 3179-3206 (2010)"
    link: ""

  - title: "Statistical Wiring of Thalamic Receptive Fields Optimizes Spatial Sampling of the Retinal Image"
    authors: "L.M. Martínez, M. Molano, X. Wang, F.T. Sommer, J.A. Hirsch"
    publication: "Neuron, 81: 943-956 (2014)"
    link: ""

  - title: "Decoding the Mind's Eye: Visual Image Reconstruction from Human Brain Activity Using a Combination of Multiscale Local Image Decoders"
    authors: "Y. Miyawaki, H. Uchida, O. Yamashita, M.A. Sato, Y. Morito, H.C. Tanabe, N. Sadato, Y. Kamitani"
    publication: "Neuron, 60(5): 915-929 (2008)"
    link: "https://www.youtube.com/watch?v=lYfnfMschHg"

  - title: "Reconstructing Visual Experiences from Brain Activity Evoked by Natural Movies"
    authors: "S. Nishimoto, A.T. Vu, T. Naselaris, Y. Benjamini, B. Yu, J.L. Gallant"
    publication: "Current Biology, 21(19): 1641-1646 (2011)"
    link: "https://www.youtube.com/watch?v=FR0qJ17Rsvc"

  - title: "Emergence of Simple-cell Receptive Field Properties by Learning a Sparse Code for Natural Images"
    authors: "B.A. Olshausen, D. Field"
    publication: "Nature, 381: 607-609 (1996)"
    link: ""

  - title: "Natural Signal Statistics and Sensory Gain Control"
    authors: "O. Schwartz, E.P. Simoncelli"
    publication: "Nature Neuroscience, 4(8): 819-825 (2001)"
    link: ""

  - title: "Spike-triggered Neural Characterization"
    authors: "O. Schwartz, J.W. Pillow, N.C. Rust, E.P. Simoncelli"
    publication: "Journal of Vision, 6: 484-507 (2006)"
    link: ""

  - title: "Perceptual Organization of the Tilt Illusion"
    authors: "O. Schwartz, P. Dayan, T. Sejnowski"
    publication: "Journal of Vision, 9(4): 19.1-19 (2009)"
    link: ""

  - title: "Reconstruction of Natural Scenes from Ensemble Responses in the Lateral Geniculate Nucleus"
    authors: "G.B. Stanley, F.F. Li, Y. Dan"
    publication: "Journal of Neuroscience, 19(18): 8036-8042 (1999)"
    link: "http://www.stanley.bme.gatech.edu/publications/stanley_dan_1999.pdf"

desc_download: "See brain_machine_interface.m for an overview. It requires including in the matlab path all the subfolders in the zip file."
links:
  - title: "Matlab Toolbox (Specific code to reproduce the experiments in this illustration)"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/bmi.zip"
  - title: "Project Proposal BFU2014-58776"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Project_Martinez_Malo_BFU2014_58776_R.pdf"
---

  # Methods related to the Human Camera

  ## Let the brain do image coding for you: it is better than JPEG2000 

  The long term *Human Camera* goal could be seen as a new Brain Machine Interface (BMI) for image transmission in which the nontrivial feature extraction and dimensionality reduction stage is done by a human brain instead of by the conventional compression algorithm. The (input) signal should be reconstructed (from the neural signal) at the receiver.

  Here we present an oversimplified, but illustrative, example of the decoding of the cortical signal to show some of the computational issues of the modeling and BMI problems, its relations with image compression and enhancement, and to show that we already are working with the technologies that allow the inference of the stimulus from the neural response.

  # Simplified (Forward) Model to start playing with

  The considered example uses (i) a nonlinear response based on divisive normalization and fitted with psychophysics (Carandini et al. 2012, Malo et al. 2006, Malo et al. 2010), (ii) different distortion sources that modify the nonlinear signal as for instance, random neural noise or additional pooling stages not considered in the assumed model, (iii) dimensionality reduction, i.e. missing responses in the recorded signal.  Of course, this model will be augmented in different ways (e.g. including irregular spatial sampling, the diversity in shapes of the receptive fields (Martinez et al. 2014), the adaptive interaction in the nonlinear stage (Schwartz et al. 2009), or correlated noise patterns.
  
  Multi information numbers (in bits) between four coefficients of the different representation show the redundancy reduction along the path, which is consistent with the efficient encoding hypothesis [Olshausen96, Schwartz01], and is consistent with our previous results [Malo06b, Malo10].
  
  # Reconstructions from the (stochastic) responses of the (partially or totally) unknown model

  Next figure shows the reconstruction using different inversion techniques: linear (similar to [stanley99]), Kernel (similar to [Miyawaki08]), and analytic, as in [Malo06b]. The example explores the effect of different distortion sources (noise and elements not considered in the model) on top of a representation of reduced dimensionality (we are missing 61% of the neurons -those tuned to high frequencies-). The good properties of analytic inversion could be used to complement (as prior knowledge) the current regression techniques.

  Estimated stimuli from the neural signal under different distortion sources (dimensionality reduction, different neural noise and additional pooling stages not considered in the forward model). In this numerical experiment linear reconstruction is more sensitive to distortion, which is alleviated by nonlinear regression, which still displays significant artifacts. The analytical inverse seems to reconstruct better but also amplifies the noise. The knowledge extracted from the structure of the inverse should be included in the conventional methods.