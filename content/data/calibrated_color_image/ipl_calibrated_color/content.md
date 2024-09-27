---
title: "IPL Calibrated Color Image Database"
abstract: |
  # Table of Contents
  - [About the Color Image Database](#about-the-color-image-database)
  - [Why a New Color Image Database?](#why-a-new-color-image-database)
  - [Calibration and Experimental Procedure](#calibration-and-experimental-procedure)
  - [Organization of the Database](#organization-of-the-database)

  # About the Color Image Database
  The database consists of **130 calibrated color images** of **natural objects** under **calibrated illuminations**:
  - **Calibrated images**: images are given in CIE XYZ tristimulus values.
  - **Natural objects**: imply complex textures, mutual illumination, and shadows, which induce non-linear effects in the tristimulus values.
  - **Calibrated illuminations**: include diffuse CIE D65 and diffuse CIE A illuminant.
  
  The database is suitable for accurate studies on **color image statistics**, **chromatic adaptation** in natural environments, and **color constancy**.

  # Why a New Color Image Database?
  This color image database was collected in the context of a **chromatic adaptation study** based on **color statistics**. The following facts are relevant:
  - The proper way to describe the physical input to any (artificial or human) visual system involves either (i) absolute radiances, hyperspectral images, or (ii) absolute tristimulus images.
  - Even if the spectral reflectance of objects is known, the simple flat-Lambertian world assumption is not valid due to **mutual illumination**, **shadows**, and **specular reflections**.
  - Accurate results on chromatic adaptation, such as **corresponding pairs** data, require a continuous distribution of samples in the tristimulus space, which necessitates a wide enough ensemble of natural reflectances.
  
  Existing color databases have several limitations:
  - **Uncalibrated data** (digital counts from conventional cameras instead of radiances or tristimulus values).
  - **Spectroradiometric databases** often do not include reflectance but estimate it using a white reference sample, and scenes may not be available under both CIE D65 and CIE A illuminants.
  - The above is also true for the available tristimulus image databases.
  
  Given these issues, this **calibrated database** includes a wide set of natural objects under a pair of calibrated illuminants.

  # Calibration and Experimental Procedure
  The images were taken using a **Macbeth Executive light chamber** equipped with standard **CIE D65** and **CIE A** illuminants, and a calibrated image colorimeter **Lumicam1300**. Key details:
  - **Exposure time** for each filter (X, Y, Z) was adjusted to avoid over or under-exposure, ensuring optimal operating range for the camera.
  - Pictures with **misregistered channels** (due to motion) or scenes outside the camera's operating range were discarded.
  
  Accuracy was verified by capturing 10 hue pages of the **Munsell Book of Color** and comparing the measured **CIE xy chromaticities** with theoretical values computed from known reflectances. The accuracy of **luminance** was roughly within the limits provided by the manufacturer (~3%).

  # Organization of the Database

  The database includes **65 different scenes of natural objects** under two illuminants (**130 images**) plus **10 scenes** displaying different hue pages of the **Munsell Book of Color** (**20 images**). The image size is **1000x1280 pixels**. The images are classified as follows:

  ## Download the complete dataset (all the above files):
  
  Images (MATLAB arrays of size **1000x1280x3**) are stored in a MATLAB structure in each of the corresponding **`.mat`** files above. Images in the structure are sorted according to the order in the pictures below. Chromatic diagrams with all the colors in each set are also shown below. 
  
images:
  - link: "method1.webp"
    title: "[Experimental Setting (CIE D65)](#calibration-and-experimental-procedure)"
    description: "Experimental setup showing the use of CIE D65 illumination for capturing color images."
  - link: "method2.webp"
    title: "[Experimental Setting (CIE A)](#calibration-and-experimental-procedure)"
    description: "Experimental setup showing the use of CIE A illumination for capturing color images."
  - link: "munsell1.webp"
    title: "[Munsell Colors under CIE D65](#organization-of-the-database)"
    description: "Experimental Munsell colors under CIE D65 illuminant, compared with theoretical values."
  - link: "munsell2.webp"
    title: "[Munsell Colors under CIE A](#organization-of-the-database)"
    description: "Experimental Munsell colors under CIE A illuminant, compared with theoretical values."
  - link: "natural1.webp"
    title: "[Natural Objects I (CIE D65)](#organization-of-the-database)"
    description: "Natural objects under CIE D65 illuminant, capturing complex textures and spatial geometry."
  - link: "natural2.webp"
    title: "[Natural Objects I (CIE A)](#organization-of-the-database)"
    description: "Natural objects under CIE A illuminant, showing the same scenes as under CIE D65 but with different lighting."
  - link: "artif1.webp"
    title: "[Natural Objects II (CIE D65)](#organization-of-the-database)"
    description: "Office materials with simple spatial geometry under CIE D65 illuminant."
  - link: "artif2.webp"
    title: "[Natural Objects II (CIE A)](#organization-of-the-database)"
    description: "Office materials with simple spatial geometry under CIE A illuminant."

references:
  - title: "Nonlinearities and Adaptation of Color Vision from Sequential Principal Curves Analysis"
    authors: "V. Laparra, S. Jiménez, G. Camps, J. Malo"
    publication: "Neural Computation, 24(10): 2751-2788, 2012"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/data/Neco_accepted_2012.pdf"
  - title: "Spatio-Chromatic Adaptation via Higher-Order Canonical Correlation Analysis of Natural Images"
    authors: "M. U. Gutmann, V. Laparra, A. Hyvärinen, J. Malo"
    publication: "PLoS ONE, 9(2), e86481, 2014"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/data/Gutmann_PLOS_ONE_2014.pdf"

links:
  - title: "images_munsell_D (.mat - 273Mb)"
    link: "http://che.uv.es/public/images_munsell_D.mat"
  - title: "images_munsell_A (.mat - 273Mb)"
    link: "http://che.uv.es/public/images_munsell_A.mat"
  - title: "images_natural_I_D (.mat - 1.36Gb)"
    link: "http://che.uv.es/public/images_natural_I_D.mat"
  - title: "images_natural_I_A (.mat - 1.36Gb)"
    link: "http://che.uv.es/public/images_natural_I_A.mat"
  - title: "images_natural_II_D (.mat - 416Mb)"
    link: "http://che.uv.es/public/images_natural_II_D.mat"
  - title: "images_natural_II_A (.mat - 417Mb)"
    link: "http://che.uv.es/public/images_natural_II_A.mat"
  - title: "readme_database.m (2kb)"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/data/readme_database.m"
  - title: "IPL Color Image Database (.zip - 4Gb)"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/data/IPL_color_image_database.zip"
---
