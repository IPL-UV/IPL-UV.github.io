---
title: "VistaLab: The Matlab Toolbox for Linear Spatio-Temporal Vision Models"
abstract: |
  # The Matlab toolbox for linear spatio-temporal Vision Models

  **VistaLab** is a Matlab toolbox that provides the linear building-blocks to create spatio-temporal vision models and the tools to control the spatio-temporal properties of video sequences. These building blocks include the spatio-temporal receptive fields of LGN, V1, and MT cells, and the spatial and spatio-temporal Contrast Sensitivity Functions (CSFs). Additionally, **VistaLab** allows accurate spatio-temporal sampling, spatio-temporal Fourier domain visualization, and generation of video sequences with controlled texture and speed. Tools for video sequence generation include noise, random dots, and rigid-body animations with Lambertian reflectance. 

  The perception and video synthesis tools enable accurate illustrations of the visibility of achromatic spatio-temporal patterns. Linear filters in **VistaLab** provide rough approximations of pattern visibility, which can be enhanced with non-linear models available in related toolboxes.

  The **standard tools in VistaLab** (and [**ColorLab**](./../content)) are essential for building more sophisticated vision models, available on the [**VistaModels**](./../vistamodels) dedicated site.

  # Table of Contents

  - [Retina and Lateral Geniculate Nucleus (LGN)](#retina-and-lateral-geniculate-nucleus-lgn)
  - [Primary Visual Cortex (V1)](#primary-visual-cortex-v1)
  - [Middle Temporal (MT) region](#middle-temporal-mt-region)
  - [Spatio-temporal Contrast Sensitivities](#spatio-temporal-contrast-sensitivities)
  - [Controlled spatio-temporal stimuli](#controlled-spatio-temporal-stimuli)
  - [Extensions of VistaLab](#extensions-of-vistalab)

  # Retina and Lateral Geniculate Nucleus (LGN)

  Most of the Retinal Ganglion Cells and cells in the LGN can be modelled with center-surround receptive fields with monophasic or biphasic temporal response. VistaLab comes with a configurable implemenation of such receptive fields according to the general expressions in [Cai, Freeman, DeAngelis, J. Neurophysiol. 97]. Using these units it is easy to generate artificial retinas with arbitrary sampling [Martinez-Garcia et al. 16, Martinez-Garcia et al. 17].
  
  The examples below show (a) the receptive field of a representative neuron in the spatiotemporal and in the 3D Fourier domain, and (b) the response of a population of such neurons to a natural movie assuming uniform retinal sampling and spatial invariance of the receptive field. VistaLab allows explicit implementation of each sensor response using the scalar product by the corresponding receptive field to get rid of the uniform sampling and the convolution assumptions.

  # Primary Visual Cortex (V1)

  Simple cells in the V1 cortex can be modelled with Gabor-like receptive fields tuned to certain spatial and temporal frequencies. VistaLab comes with a configurable implemenation of such receptive fields according to the general expressions in [Daugman JOSA A 89, Simoncelli & Heeger Vis. Res. 98]. Using these units it is easy to generate artificial cortex with arbitrary sampling [Martinez-Garcia et al. 17].
  
  The examples below show six representative neurons tuned to the same spatial frequencies (7 cpd) but different temporal frequencies 2, 7, and 10 Hz, both positive and negative. Eventhough there is no conclusive tuning to two-dimensional speed due to the aperture problem [Heeger JOSA 87], in the direction perpendicular to the grating, these are tuned to 0.3, 1 and 1.5 degrees/sec respectively (both positive and negative). Figures show: (a) the receptive fields in the spatiotemporal and in the 3D Fourier domain, and (b) the response of a population of such neurons to a natural movie assuming uniform retinal sampling and spatial invariance of the receptive field. VistaLab allows explicit implementation of each sensor response using the scalar product by the corresponding receptive field to get rid of the uniform sampling and the convolution assumptions.

  # Middle Temporal (MT) region

  Cells in the MT cortex receive projections from V1 cells aligned in a plane in the spatio-temporal Fourier domain. Therefore, they are narrow-band in speed tuning. VistaLab comes with a configurable implemenation of such receptive fields according to the general expressions in [Simoncelli & Heeger Vis. Res. 98]. Using these units and a spatio-temporal window it is easy to generate artificial MT cortex with arbitrary sampling [Martinez-Garcia et al. 17].
  
  The examples below shows six representative sets of neurons tuned to tuned to speeds of 0.3, 1 and 1.5 degrees/sec respectively (both positive and negative). In this case while Figures show: (a) the receptive fields in 3D Fourier domain, the kind of features these cells are optimally tuned to, and (b) the response of a population of such neurons to a natural movie assuming uniform retinal sampling and spatial invariance of the receptive field. VistaLab allows explicit implementation of each sensor response using the scalar product by the corresponding receptive field to get rid of the uniform sampling and the convolution assumptions.

  # Spatio-temporal Contrast Sensitivities

  VistaLab comes with different Contrast Sensitivity Functions (CSFs): (a) the spatial-achromatic CSF from the OSA Standard Spatial Observer [Watson & Malo IEEE ICIP 02](http://www.uv.es/vista/vistavalencia/papers/icip02.pdf), (b) the spatial-chromatic, Red-Green and Yellow-Blue CSFs of K. Mullen [Vis. Res. 85], with approrpiate scaling [Gutierrez et al. 12](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/2012b_Gutierrez_RPTSP_12c.PDF), and (c) the achromatic spatio-temporal CSFs of D. Kelly [JOSA 79], and S. Daly (with object tracking speed compensation) [SPIE 98].

  # Controlled spatio-temporal stimuli
  
  The movies below illustrate the abilities of VistaLab for accurate motion control. 
  - **First row:** includes sequences of the motion of a lambertian rigid body evolving in a gravitatory field with inelastic restrictions recorded from different points of view, this example allows arbitrary locations of the illumination and camera. In this case the actual motion in 3D world and the optical flow (motion in the retinal plane) are known. 
  
  - **Second row:** includes an example of random dots moving according to arbitrary optical flow fields. 
  
  - **Third row:** shows how static pictures can be animated using spatially uniform flows of arbitrary speed leading to interesting shape-from-motion effects in the case of noise patterns. 
  
  - **Fourth row:** shows different movies of the same periodic pattern moving at progressively increasing speeds. Aliasing introduces speed reversal at the expected place, as demonstrated by the Fourier diagrams below.

  # Extensions of VistaLab
  VistaLab only addresses the linear part of the neural mechanisms that mediate the preattentive perception of spatio-temporal patterns. However, it doesnt combine these mechanisms to compute motion (optical flow), it doesnt include the nonlinear interactions between the linear mechanisms, and it doesnt include color.
  
  These issues can be addressed with other toolboxes, namely [VistaVideoCoding](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/VistaVideoCoding.zip), [BioMultiLayer_L_NL_color](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/BioMultiLayer_L_NL_color.zip) in VistaModels, and [Colorlab](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Colorlab.zip).

  # Key Capabilities
  - **Spatio-temporal Modeling**: Build models for LGN, V1, and MT neural responses.
  - **Contrast Sensitivity**: Apply achromatic and chromatic CSFs to video and images.
  - **Video Synthesis**: Create controlled video sequences with specific spatio-temporal properties.
  - **Fourier Domain Tools**: Visualize spatio-temporal frequency response of neural models.


images:
  - link: "noise.gif"
    title: "[Noise texture for optical flow testing](#the-matlab-toolbox-for-linear-spatio-temporal-vision-models)"
    description: "Accurate control of texture and speed was crucial both to (a) test our first perceptually weighted optical flow algorithms [Electr. Lett. 00, IEEE Trans.Im.Proc. 01](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/seg_ade2.ps), and (b) generate stimuli for controlled motion aftereffects [Front. Human Neurosci. 15](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/LaparraMalo15.pdf)."

  - link: "TF_noise.gif"
    title: "[3D Fourier transform of noise sequence](#the-matlab-toolbox-for-linear-spatio-temporal-vision-models)"
    description: "Two views of the 3D Fourier transform of the sequence at the left (the ft=0 plane is highlighted in blue). Note how the modification of texture and speed in the sequence implies different energy distributions in the Fourier domain. Accurate control of texture and speed of movies allows to saturate certain sensors and induce stronger aftereffcts. This is because the description of motion aftereffects [Front. Human Neurosci. 15](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/LaparraMalo15.pdf) requires models of V1 sensors in the spatio-temporal Fourier domain with frequency-dependent cross-inhibition."

  - link: "RF_LGN.gif"
    title: "[Pulsating on-center LGN neuron](#retina-and-lateral-geniculate-nucleus-lgn)"
    description: "Receptive field (or impulse response) in the spatiotemporal domain, where white stands for excitation and black stands for inhibition."

  - link: "RF_LGN2.gif"
    title: "[Temporal variation of spatial response](#retina-and-lateral-geniculate-nucleus-lgn)"
    description: "Center-surround excitation at the stimulus onset is followed by reversed sign response when stimulation vanishes."

  - link: "sens_LGN.webp"
    title: "[Frequency selectivity in LGN neuron](#retina-and-lateral-geniculate-nucleus-lgn)"
    description: "Band pass of this kind of neurons in the spatio-temporal Fourier domain. This is the Fourier transform of the receptive field at the left."

  - link: "response_LGN.gif"
    title: "[Response of some LGN population to a natural stimulus](#retina-and-lateral-geniculate-nucleus-lgn)"
    description: "Assuming a spatially invariant population of LGN cells like the one depicted above uniformly covering the visual field, we can compute the response to a natural movie using plain convolution or product in the Fourier domain."

  - link: "spect1.webp"
    title: "[Spectrum of the original sequence](#retina-and-lateral-geniculate-nucleus-lgn)"
    description: "Each branch of the X represents an object moving with constant speed (i.e. comes from one of the waving hands)"

  - link: "spect3.webp"
    title: "[Spectrum of the response](#retina-and-lateral-geniculate-nucleus-lgn)"
    description: "Response was computed in the Fourier domain as the aplication of the band-pass filter function of this specific LGN population to the original spectrum."

  - link: "RF_V1.gif"
    title: "[Pulsating V1 neurons](#primary-visual-cortex-v1)"
    description: " Receptive fields (or impulse response) in the spatiotemporal domain, where white stands for excitation and black stands for inhibition. In this figure there are 2*3 replications of a 1 degree visual field. Each replication shows the receptive field of a neuron tuned to the (same) central location but different spatio-temporal frequency."

  - link: "RF_V12.gif"
    title: "[Temporal variation of spatial responses](#primary-visual-cortex-v1)"
    description: " In a surface of sensors of the corresponding kind, Gabor-like excitation/inhibition at the stimulus onset turns into travelling a wave that vanishes afterwards."

  - link: "sens_V1.webp"
    title: "[Frequency selectivity in V1 neurons](#primary-visual-cortex-v1)"
    description: "Band pass of the six considered neurons. This is the Fourier transform of the receptive fields shown above."

  - link: "response_V1.gif"
    title: "[Response of the six V1 populations to a natural stimulus](#primary-visual-cortex-v1)"
    description: "Assuming a spatially invariant populations of V1 cells like the ones depicted above uniformly covering the visual field, we can compute their responses to a natural movie using plain convolution or product in the Fourier domain. In the figure we show the original stimulus and the six corresponding sets of responses. Note how the different populations respond to qualitatively different features of the stimulus (hand going up/down, static objects of the right frequency), and note how the cells tuned to too high speed do not respond."

  - link: "sens_MT.webp"
    title: "[Frequency selectivity in MT neurons](#middle-temporal-mt-region)"
    description: "Band pass of the six considered kinds of neurons. These are the sum of narrow-band V1-like filters shown above. Only filters aligned according to well-defined speed planes are combined in each MT cell."

  - link: "RF_MT.gif"
    title: "[Optimal patterns for MT neurons](#middle-temporal-mt-region)"
    description: "These patterns were computed by injecting noise only in the band where the different cells are sensitive. Each replication shows the corresponding pattern (showing no specific spatial frequency content) but a markedly different speed."

  - link: "RF_MT2.gif"
    title: "[Temporal variation of MT neuron responses](#middle-temporal-mt-region)"
    description: "In surfaces of sensors of the considered kinds, the patterns at the left lead to noisy travelling waves."

  - link: "response_MT.gif"
    title: "[Response of the six MT populations to a natural stimulus](#middle-temporal-mt-region)"
    description: "Assuming a spatially invariant populations of MT cells like the ones depicted above uniformly covering the visual field, we can compute their responses to a natural movie using plain convolution or product in the Fourier domain. In the figure we show the original stimulus and the six corresponding sets of responses (where white means excitation, black means inhibition, and gray means spontaneous/basal response). Note how the different populations respond to qualitatively different features of the stimulus (hand going up/down, static objects of the right frequency), and note how the cells tuned to too high speed do not respond."

  - link: "csfs.webp"
    title: "[Spatial-only Achromatic and Chromatic CSFs](#spatio-temporal-contrast-sensitivities)"
    description: "The achromatic CSF of the Standard Spatial Observer includes the oblique effect. The chromatic CSFs are assumed to be isotropic."

  - link: "applyCSF.webp"
    title: "[Spatial-only CSFs on a natural image](#spatio-temporal-contrast-sensitivities)"
    description: "VistaLab applied together with COLORLAB allows accurate application of the spatial CSFs. In this example the natural image was first represented in CIE XYZ values. Then, it was transformed to a sensible linear Y, RG, YB representation [Ingling&Tsou, Vis. Res. 79], and then, each CSF was applied to the corresponding chromatic channel. The result was expressed in digital values to be shown in regular diaplays."

  - link: "csf_st.webp"
    title: "[Spatio-temporal CSF (with saccade compensation)](#spatio-temporal-contrast-sensitivities)"
    description: "In the motion-compensated case sensitivity to stationary patterns decreases a lot (note the reduction of the CSF at ft=0). Below you can see three different representations of this function."

  - link: "response_CSF.gif"
    title: "[Natural movie filtered by spatio-temporal CSF](#spatio-temporal-contrast-sensitivities)"

  - link: "gema1.gif"
    title: "[Speed reversal in the Fourier domain](#controlled-spatio-temporal-stimuli)"
    description: "Illustration of speed reversal due to aliasing, analyzed through the Fourier domain representation of periodic patterns at high speeds."
  - link: "aliasing.webp"
    title: "[Speed reversal in the Fourier domain](#controlled-spatio-temporal-stimuli)"
    description: "In the periodic pattern sequences all the sinusoidal components were computed to travel to the right with the same speed. However, in the last (high speed) case, the high frequency pattern seems to go backwards. Aliasing suffered by this component in this case is easy to understand in the Fourier domain. According to the optical flow equation in the Fourier domain [Watson & Ahumada, JOSA A 85], when the speed increases (in our case from left to right) so it does the inclination of all the sinusoidal components of the sequence in the fx, ft plane. For low speeds all the components are aligned. However, when the speed is too high, the high frequency components have temporal frequencies over the Nyquist limit. This implies an apparent inclination for those frequencies which is totally oposed to the rest of the components, and hence, speed reversal. NOTE: the spatial extent of the discrete domain is 2 deg, and the frame rate is 20 Hz, the spatial frequency of the high frequency component is 10 cpd, and the actual speed in the last case should be 1.5 deg/sec."


references:
  - title: "VistaLab: The Matlab Toolbox for Spatio-Temporal Vision. Univ. Valencia 1997"
    authors: "J. Malo & J. Gutierrez"
    link: "#"
  - title: "Perceptually Weighted Optical Flow for Motion-based Segmentation in MPEG-4"
    authors: "J. Malo, et al."
    publication: "Electronics Letters 36(20): 1693-1694 (2000)"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/ELECT98.PS.gz"
  - title: "Visual Aftereffects and Sensory Nonlinearities from a Single Statistical Framework"
    authors: "V. Laparra & J. Malo"
    publication: "Frontiers in Human Neuroscience 9:557 (2015)"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/LaparraMalo15.pdf"

links:
  - title: "Matlab Toolbox (version 4.0)"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Vistalab.zip"
  - title: "Extensions of VistaLab I: VistaVideoCoding"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/VistaVideoCoding.zip"
  - title: "Extensions of VistaLab II: BioMultiLayer_L_NL_color"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/BioMultiLayer_L_NL_color.zip"
  - title: "Extensions of VistaLab III: ColorLab"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Colorlab.zip"
---
