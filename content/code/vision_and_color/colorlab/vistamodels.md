---
title: "VistaLab: The Matlab Toolbox for Linear Spatio-Temporal Vision Models"
abstract: |
  **VistaLab** is a Matlab toolbox that provides the linear building-blocks to create spatio-temporal vision models and the tools to control the spatio-temporal properties of video sequences. These building blocks include the spatio-temporal receptive fields of LGN, V1, and MT cells, and the spatial and spatio-temporal Contrast Sensitivity Functions (CSFs). Additionally, **VistaLab** allows accurate spatio-temporal sampling, spatio-temporal Fourier domain visualization, and generation of video sequences with controlled texture and speed. Tools for video sequence generation include noise, random dots, and rigid-body animations with Lambertian reflectance. 

  The perception and video synthesis tools enable accurate illustrations of the visibility of achromatic spatio-temporal patterns. Linear filters in **VistaLab** provide rough approximations of pattern visibility, which can be enhanced with non-linear models available in related toolboxes.

  The **standard tools in VistaLab** (and **ColorLab**) are essential for building more sophisticated vision models, available on the **VistaModels** dedicated site.

  # Table of Contents
  - [Retina and LGN](#retina-and-lgn)
  - [V1 Cortex](#v1-cortex)
  - [MT Region](#mt-region)
  - [Spatio-temporal Contrast Sensitivities](#spatio-temporal-contrast-sensitivities)
  - [Controlled Spatio-temporal Stimuli](#controlled-spatio-temporal-stimuli)
  - [Extensions of VistaLab](#extensions-of-vistalab)

  ## Retina and LGN
  **VistaLab** provides implementations of LGN receptive fields with center-surround configurations, supporting various configurations like monophasic and biphasic temporal responses. These can generate artificial retinas and simulate neural responses to natural movies using Fourier domain convolution methods.

  ## V1 Cortex
  V1 simple cells are modeled with Gabor-like receptive fields tuned to spatial and temporal frequencies. **VistaLab** enables the construction of artificial cortices and visualizes neural responses to natural movies.

  ## MT Region
  **VistaLab** supports models for MT cells, which are narrow-band tuned for speed. It allows visualizing the optimal patterns for MT neurons and computing their responses to natural movies.

  ## Spatio-temporal Contrast Sensitivities
  **VistaLab** includes several CSFs: achromatic and chromatic (red-green, yellow-blue) spatial CSFs and spatio-temporal CSFs. These CSFs are useful for applying perceptual sensitivity in image and video processing.

  ## Controlled Spatio-temporal Stimuli
  **VistaLab** can generate controlled stimuli, such as rigid-body motion, random dots, and periodic pattern motion, demonstrating visual effects like speed reversal due to aliasing.

  ## Extensions of VistaLab
  Extensions include **VistaVideoCoding** for perceptually weighted optical flow, **BioMultiLayer_L_NL_color** for nonlinear neural interactions, and **ColorLab** for color processing.

  ## Key Capabilities
  - **Spatio-temporal Modeling**: Build models for LGN, V1, and MT neural responses.
  - **Contrast Sensitivity**: Apply achromatic and chromatic CSFs to video and images.
  - **Video Synthesis**: Create controlled video sequences with specific spatio-temporal properties.
  - **Fourier Domain Tools**: Visualize spatio-temporal frequency response of neural models.

  ## Download VistaLab
  - **Toolbox**: [Vistalab.zip (30MB)](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Vistalab.zip)
  - **User Guide**: [VistaLab_userguide.pdf (12MB)](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Vistalab_userguide.pdf)

imagenes:
  - ruta: "RF_LGN.gif"
    titulo: "[Pulsating on-center LGN neuron](#retina-and-lgn)"
    descripcion: "Receptive field of an on-center LGN neuron, showing excitation (white) and inhibition (black) in the spatiotemporal domain."
  - ruta: "RF_V1.gif"
    titulo: "[Pulsating V1 neurons](#v1-cortex)"
    descripcion: "Receptive fields of V1 neurons tuned to specific spatio-temporal frequencies, visualized in the spatiotemporal domain."
  - ruta: "response_MT.gif"
    titulo: "[MT neural response to a natural stimulus](#mt-region)"
    descripcion: "MT neurons' responses to a natural movie, with each set of neurons tuned to specific speeds and features."
  - ruta: "csf_st.JPG"
    titulo: "[Spatio-temporal CSF](#spatio-temporal-contrast-sensitivities)"
    descripcion: "The spatio-temporal Contrast Sensitivity Function (CSF) with saccade compensation applied, showing different representations."
  - ruta: "response_CSF.gif"
    titulo: "[Natural movie filtered by spatio-temporal CSF](#spatio-temporal-contrast-sensitivities)"
    descripcion: "A natural movie filtered using the spatio-temporal CSF."
  - ruta: "aliasing.JPG"
    titulo: "[Speed reversal due to aliasing](#controlled-spatio-temporal-stimuli)"
    descripcion: "High-speed periodic patterns showing speed reversal due to aliasing, visualized in the Fourier domain."

referencias:
  - nombre: "VistaLab: The Matlab Toolbox for Spatio-Temporal Vision. Univ. Valencia 1997"
    autores: "J. Malo & J. Gutierrez"
    url: "#"
  - nombre: "Perceptually Weighted Optical Flow for Motion-based Segmentation in MPEG-4"
    autores: "J. Malo, et al."
    publicacion: "Electronics Letters 36(20): 1693-1694 (2000)"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/ELECT98.PS.gz"
  - nombre: "Visual Aftereffects and Sensory Nonlinearities from a Single Statistical Framework"
    autores: "V. Laparra & J. Malo"
    publicacion: "Frontiers in Human Neuroscience 9:557 (2015)"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/LaparraMalo15.pdf"

enlaces:
  - nombre: "Matlab Toolbox (version 4.0)"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Vistalab.zip"
  - nombre: "VistaLab User Guide"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Vistalab_userguide.pdf"
  - nombre: "Extensions of VistaLab I: VistaVideoCoding"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/VistaVideoCoding.zip"
  - nombre: "Extensions of VistaLab II: BioMultiLayer_L_NL_color"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/BioMultiLayer_L_NL_color.zip"
  - nombre: "Extensions of VistaLab III: ColorLab"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Colorlab.zip"
---
