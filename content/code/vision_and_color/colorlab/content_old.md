---
title: "ColorLab: The Matlab Toolbox for Colorimetry and Color Vision"
author: Jesús Malo & Maria José Luque
email: jesus.malo@uv.es
caption: (c) Universitat de València 1997 - 2018
layout: post
imagesLeft:
  - link: colorlab1.webp
    title: "[Samples of the Munsell Book of Color illuminated](#the-matlab-toolbox-for-colorimetry-and-color-vision)"
    description: "Samples of the Munsell Book of Color illuminated using CIE standard illuminants D65 (top) and A (bottom). ColorLab comes with many spectral reflectances and spectral radiances of standard sources and objects. These can be used as input data to solve the corresponding pair problem [[Neur.Comp.12](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Neco_accepted_2012.pdf), [PLoS ONE 14](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Gutmann_PLOS_ONE_2014.pdf)]."
imagesRight:
  - link: "colorlab2.webp"
    title: "[Pairs predicted with standard CIELab and CIECAM](#the-matlab-toolbox-for-colorimetry-and-color-vision)"
    description: "Corresponding pairs predicted with standard CIELab and CIECAM (implemented in Colorlab, left) are compared with our statistically-based algorithms: the nonlinear Sequential Principal Curves Analysis (top-right) [Neur.Comp.12](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Neco_accepted_2012.pdf), and the linear Higher Order Canonical Correlation Analysis (bottom-right) [PLoS ONE 14](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Gutmann_PLOS_ONE_2014.pdf)."
---

**ColorLab** is a color computation and visualization toolbox to be used in the MATLAB environment. **ColorLab** is intended to deal with color in general-purpose quantitative colorimetric applications as color image processing and psychophysical experimentation.

**ColorLab** uses colorimetrically meaningful representations of color and color images (tristimulus values, chromatic coordinates and luminance, or, dominant wavelength, purity and luminance), in any primaries system of the tristimulus colorimetry (including CIE standards as CIE XYZ or CIE RGB). **ColorLab** relates this variety of colorimetric representations to the usual device-dependent discrete-color representation, i.e. it solves the problem of displaying a colorimetrically specified scene in the monitor within the accuracy of the VGA.

A number of other interesting color representations are also provided, as CIE uniform color spaces (as CIE Lab and CIE Luv, opponent color representations based on advanced color vision models, and color appearance representations (RLab, LLab, SVF and CIECAMs). All these representations are invertible, so the result of image processing made in these colorimetrically meaningful representations can always be inverted back to the tristimulus representation at hand, and be displayed. **ColorLab** includes useful visualization routines to represent colors in the tristimulus space or in the chromatic diagram of any color basis, as well as an advanced vector quantization scheme for color palette design. An extensive color data base is also included, with the CIE 1931 color matching functions, reflectance data of 1250 chips from the Munsell Book of Color, McAdam ellipses, normalized spectra of a number of standard CIE illuminants, matrices to change to a number of tristimulus representations, and calibration data of an ordinary CRT monitor.

The standard tools in ColorLab (and in [**VistaLab**](./../vistalab)) are the necessary building blocks to develop more sophisticated vision models included in the dedicated site [**VistaModels**](./../vistamodels).

# Table of Contents
- [Colorfulness edition using the purity](#colorfulness-edition-using-the-purity)
- [Hue-based segmentation and edition using the dominant wavelength](#hue-based-segmentation-and-edition-using-the-dominant-wavelength)
- [Luminance edition in cd/m2](#luminance-edition-in-cd/m2)
- [Changing the spectral illumination (standard and user defined illuminants)](#changing-the-spectral-illumination-standard-and-user-defined-illuminants)
- [Playing with McAdam ellipses and Munsell chips](#playing-with-mcadam-ellipses-and-munsell-chips)
- [Chromatic induction in LLab](#chromatic-induction-in-llab)
- [Download!](#download-colorlab)
  - Toolbox
  - User Guide
- [References](#references)



# Colorfulness edition using the purity

Colorimetric Purity and Excitation Purity are the descriptors of colorfulness in Tristimulus Colorimetry. Both of them are available in ColorLab. In the example below we analyze the colors of an image in the CIE XYZ system and reduce the excitation purity by a constant factor leaving the luminace and the dominant wavelength unaltered in order to obtain an image with reduced colorfulness. Other posibilities to obtain this effect with ColorLab include using any other tristimulus representations or changing the colorfulness descriptors in a number of available non-linear color appearance models.



<figure>
  <figcaption>
  <b>Desaturating clock: </b>In this example the digital true-color image is converted into tristimulus values, chromatic coordinates and luminance, and finally, dominant wavelength, excitation purity and luminance. A constant factor is applied to the purity (see the contraction of chromatic coordinates in the diagram) and the palette is inverted back into digital counts so that it can be displayed.
  </figcaption>  
  <img src="colorfulness.webp" alt="Desaturating clock" style="width: 90%">
</figure>


# Hue-based segmentation and edition using the dominant wavelength

The Dominant Wavelength is the descriptor of hue in Tristimulus Colorimetry. In the example below we first segment the flowers by selecting a range of wavelenghts (in the CIE XYZ chromatic diagram) and then, we modify their hue by applying a rotation to the chromatic coordinates. Other posibilities to obtain this effect with ColorLab include using any other tristimulus representation or changing (rotating) the hue descriptor in a number of available non-linear color appearance models.


<figure>
  <div style="width: 90%">
    <figcaption style="text-align: justify;">
    <b>Artificial Flowers: </b>Red flowers are segmented by selecting the colors in a certain range of dominant wavelengths.
    </figcaption>  
    <div>
      <img src="hue1.webp" alt="hue1">
      <img src="hue2.webp" alt="hue2">
    </div>
  </div>
</figure>


# Luminance edition in cd/m24

The Luminance is the descriptor of brightness in Tristimulus Colorimetry. In the example below we reduce the luminance by reducing the lenght of the tristimulus vectors by a constant factor in an arbitrary (RBG) tristimulus space (note how the chromatic diagram is twisted). Of course the chromatic coordinates remain the same (as can be seen in the figures below). Other posibilities to obtain this effect with ColorLab include using any other tristimulus representation or changing the brightness descriptor in a number of available non-linear color appearance models.



<figure>
  <figcaption>
  <b>Marilyn in dim light: </b>The reduction in the length of the tristimulus does not change the intersection with the chromatic diagram.
  </figcaption>  
  <img src="luminance.webp" alt="Desaturating clock" style="width: 90%">
</figure>


# Changing the spectral illumination (standard and user defined illuminants)

ColorLab is able to deal with the spectro-radiometric description of color images or estimate it from their (usual) colorimetric description by using the Munsell reflectances data set. In this way, the effect of changing the spectral radiance of the illuminant may be simulated by obtaining the new tristimulus values with the new illuminant. In the example below, each pixel of the original image is assumed to be a patch with a given (or estimated) reflectance under white light illumination. The user may define a different illuminant (in this case a purple radiation) and apply it to the reflectances, thus obtaining the new image and the new (tristimulus) colors. Of course, this can be done in any tristimulus representation. But, better than that, if non-linear color appearance models are used together with the corresponding pair procedure [[JOSA A 04](http://isp.uv.es/papers/josa_04.pdf)], color constancy may be predicted!.


<figure>
  <figcaption>
  <b>The pink room key: </b>Digital images can be turned into spectral arrays and these can be illuminated with customized light.
  </figcaption>  
  <img src="irradiance.webp" alt="Desaturating clock" style="width: 90%">
</figure>


# Playing with McAdam ellipses and Munsell chips

Now you can easily check the non-uniformity of the tristimulus space in your computer screen! As ColorLab comes with the McAdam ellipses database and the Munsell chips database, its color reproduction ability allows you to generate the right colors to prove that your discrimination is not Euclidean.
In the first example below, we distort two given colors (green and blue) in by a constant factor in the chromatic diagram in the principal directions of the ellipsoids. Despite the eventual inaccuracies introduced by the use of a generic calibration, it is clear that blues are more different each other (the ellipse is smaller!) and the distortion in every case is more noticeable when it is done in the short direction of the ellipse.
The second example shows a set of Munsell chips of different chroma which are chosen to depart each other a constant number of JNDs.


<figure>
  <figcaption>
  <b>Color discrimination (McAdam ellipses, top) and Uniformly distributed colors (Munsell chips, bottom): </b>Bigger discrimination in the blue-purple region than in the green region. Anisotropic JNDs in color is an example of the MAximum Differentiation (MAD) concept [<a href="https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/malo15a-reprint.pdf">Malo & Simoncelli SPIE 15</a>]. Uniformly distributed colors (Munsell chips, bottom): Constant perceptual differences in Munsell chips imply they distribute in ellipsoids around the white point similarly to the corresponding McAdam ellipse.
  </figcaption>  
  <img src="mcadam.webp" alt="Desaturating clock" style="width: 90%">
</figure>

# Chromatic induction in LLab
The perception of a test is modified by the stimuli in the surround. This is referred to as chromatic induction. In the example below, the (physically constant) gray test in the center changes its hue to blueish as the surround gets more yellow. Non-linear color appearance models are required to understand this effect.


<figure>
  <figcaption>
  <b>Prediction of induced color with LLab: </b>The Llab non-linear color representation was used to compute the corresponding colors of the central test in a gray surround. The results are shown in the CIE xy diagram. Note that as the surround increases the colorfulness, an oposite reaction is induced in the test. This numerical result was used to generate a set of different stimuli in a constant gray background giving rise to the same perception as the central test on a changing background (see below).
  </figcaption>  
  <img src="color_junto.webp" alt="Desaturating clock" style="width: 90%">
</figure>



# Download ColorLab

- **Toolbox**: [Colorlab.zip (15MB)](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Colorlab.zip).
- **User Guide**: [ColorLab_userguide.pdf (12MB)](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/COLORLAB_userguide.pdf).


This user guide corresponds to version 1.0. Some functions have been updated in current version 4.0. Colorlab GUI demo has been removed since Matlab GUI changes in 2014


# References  

- *ColorLab: the Matlab toolbox for Colorimetry and Color Vision. Univ. Valencia 2002. J. Malo & M.J. Luque.*

- *First paper*

  - [*Corresponding-pair procedure: a new approach to simulation of dichromatic color perception. P. Capilla, M. Diez, M.J. Luque, & J. Malo. JOSA A 21(2): 176-186 (2004)*](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/josa_04.pdf)

- [*Nonlinearities and Adaptation of Color Vision from Sequential Principal Curves Analysis. V. Laparra, S. Jimenez, G. Camps & J. Malo. Neural Computation 24(10): 2751-2788 (2012)*](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Neco_accepted_2012.pdf)

- [*Spatio-Chromatic Adaptation via Higher-Order Canonical Correlation Analysis of Natural Images. M. Gutmann, V. Laparra, A. Hyvarinen & J. Malo. PLoS ONE 9(2): e86481 (2014)*](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Gutmann_PLOS_ONE_2014.pdf)

- [*Visual aftereffects and sensory nonlinearities from a single statistical framework. V. Laparra & J. Malo. Frontiers in Human Neuroscience 9:557 (2015)*](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/LaparraMalo15.pdf)

- [*Effect of a Yellow Filter on Brightness Evaluated by Asymmetric Matching: Measurements and Predictions. M.J. Luque, et al. J. Opt. A - Pure Appl. Opt. (Inst. of Physics), 8 (5): 398-408 (2006)*](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Luque06.pdf)

- [*Analyzing the metrics of the perceptual space in a new multistage physiological colour vision model. E. Chorro, F.M. Martínez‐Verdú, D. de Fez, P. Capilla, & M.J. Luque. Color Res. Appl., 34: 359-366 (2009)*](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Chorro09.pdf)

- [*Images Perceived after Chromatic or Achromatic Contrast Sensitivity Losses. M.J. Luque, et al. Optom. Vision Sci., 87 (5): 313-322 (2010)*](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Luque10.pdf)

- [*Simulating Images Seen by Patients with Inhomogeneous Sensitivity Losses. P. Capilla, M.J. Luque, M. Diez. Optom. Vision Sci., 89 (10): 1543-1556 (2012)*](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Capilla12.pdf)

- [*Software for simulating dichromatic perception of video streams. M.J. Luque, D. de Fez, & P. Acevedo. Color Res. Appl., 39: 486-491 (2014)*](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Luque14.pdf)