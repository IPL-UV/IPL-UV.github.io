---
title: "ViStaCoRe: Visual Statistics Coding and Restoration"
abstract: |
  **Authors:** V. Laparra, J. Gutirrez, I. Epianio, G. Gmez, J. Muoz, G. Camps-Valls, and J. Malo
  
  Efficient coding of visual information and efficient inference of missing information in images depend on two factors: (1) the statistical structure of photographic images, and (2) the nature of the observer that will analyze the result. Interestingly, these two factors (image regularities and human vision) are deeply related since the evolution of biological sensors seems to be guided by statistical learning. However, the simultaneous consideration of these two factors is unusual in the image processing community, particularly beyond Gaussian image models and linear models of the observer.

  In contrast, this MATLAB toolbox for image coding and restoration is simultaneously based on the well established non-Gaussian nature of visual scenes and the well-known nonlinear behavior of visual cortex. This example of combined approach is sensible since these are two sides of the same issue in vision. Specifically, the core algorithms are (1) Divisive Normalization, a canonical computation in sensory neurons with interesting statistical effects, and (2) Sparse regression (in particular Support Vector Regression) that takes into account the statistical relations between image coefficients after linear transforms. In this report we illustrate the relations between the statistical features and the perception models that justify the qualitative equivalence of these techniques. The presented toolbox wraps these related statistical and perceptual factors and includes previous methods for comparison purposes.
  
  This unified toolbox allows, for the first time, a fair comparison between the different factors in previous literature. As a consequence, the previous results can be seen from a new perspective: while the benefits of SVMs in local-frequency domains are confirmed in restoration, their relevance is scarce in coding once the perceptual normalization has been applied.

  # Coding Results

  See images.

  ## Image Coding schemes included in KeCode

  - JPEG-like coding: linear CSF + uniform quantizer.
  - Non-uniform adaptive quantizer based on simplified masking models [Malo95, Malo99, Malo00].
  - Non-uniform adaptive quantizer based on general masking models [Malo06].
  - SVM DCT coefficient selection using simplified CSF [Robinson03].
  - SVM DCT coefficient selection using accurate CSF [Gmez05].
  - SVM coefficient selection in divisive normalized domain [Camps08].
  - SVM coefficient selection in divisive normalized domain with accurate color contrast definition [Gutirrez12].

  # Restoration Results

  See images.

  ## Image Restoration schemes included in KeCode

  - Wavelet and Kernel based denoising methods
    - SVM regression with Mutual Information Kernels (includes relations among coefficients) [Laparra10]
    - Hard Thresholding [Donoho95]
    - Soft Thresholding [Donoho95]
    - Bayesian approach assuming Gaussian marginal PDFs [Figueiredo01] 
  - Regularization in local frequency domains
    - Adaptive regularization functional based on perceptual divisive normalization (includes relations among coefficients) [Gutirrez06]
    - L2 regularization functional [Tychonov77].
    - CSF-based regularization functional [Andrews77].
    - Adaptive Auto-Regressive regularization functionals [Banham97].



referencias:
  - nombre: "Non-linear image representation for efficient perceptual coding"
    autores: "J. Malo, I. Epifanio, R. Navarro, E. Simoncelli"
    publicacion: "IEEE Trans. Im. Proc., 15(1):6880, 2006"
  
  - nombre: "Perceptual adaptive insensitivity for support vector machine image coding"
    autores: "G. Gómez, G. Camps-Valls, J. Gutíerrez, J. Malo"
    publicacion: "IEEE Transactions on Neural Networks, 16(6):15741581, 2005"

  - nombre: "On the suitable domain for SVM training in image coding"
    autores: "G. Camps-Valls, J. Gutíerrez, G. Gómez, J. Malo"
    publicacion: "Journal of Machine Learning Research, 9:4966, 2008"

  - nombre: "A Color Contrast Definition for Perceptually based Color Image Coding"
    autores: "J. Gutíerrez, M.J. Luque, G. Camps-Valls, J. Malo"
    publicacion: "Recent patents on Signal Processing. 2(1):33-55, 2012"

  - nombre: "Regularization operators for natural images based on nonlinear perception models"
    autores: "J. Gutíerrez, F. Ferri, J. Malo"
    publicacion: "IEEE Tr. Im. Proc., 15(1):189200, 2006"

  - nombre: "Image denoising with kernels based on natural image relations"
    autores: "V. Laparra, J. Gutíerrez, G. Camps-Valls, J. Malo"
    publicacion: "Journal of Machine Learning Research, 11:873903, 2010"

enlaces:
  - nombre: "Full Matlab Package"
    url: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_imvideo/kecode/KeCoDe.zip"
    descripcion: "Download the complete MATLAB toolbox for image coding and restoration."

imagenes:
  - ruta: "jpeg91_055.webp"
    titulo: "[JPEG-like Coding](#coding-results)"
    descripcion: "JPEG-like coding [Wallace91] with CSF and uniform quantizer."

  - ruta: "malo99_055.webp"
    titulo: "[Simplified Masking](#coding-results)"
    descripcion: "Image coded using simplified masking methods [Malo95, Malo99, Malo00]."

  - ruta: "malo06_055.webp"
    titulo: "[General Masking](#coding-results)"
    descripcion: "Image coded with general masking methods [Malo06]."

  - ruta: "robinson03_055.webp"
    titulo: "[SVM with Simplified CSF](#coding-results)"
    descripcion: "Support Vector Machine (SVM) coding with simplified CSF [Robinson03]."

  - ruta: "gomez05_055.webp"
    titulo: "[SVM with Accurate CSF](#coding-results)"
    descripcion: "Support Vector Machine (SVM) coding with accurate CSF [Gómez05]."

  - ruta: "camps08_055.webp"
    titulo: "[SVM with General Masking](#coding-results)"
    descripcion: "SVM with general masking in a divisive normalized domain [Camps08]."

  - ruta: "house_24.webp"
    titulo: "[Original Color Image](#coding-results)"
    descripcion: "Original color image with 24 bits per pixel."

  - ruta: "jpeg91_c_1.webp"
    titulo: "[JPEG Coding of Color Image](#coding-results)"
    descripcion: "JPEG-coded color image at 0.95 bits/pixel."

  - ruta: "simon08_c_1.webp"
    titulo: "[General Masking with SVM (Color)](#coding-results)"
    descripcion: "General masking combined with SVM for color image coding [Gutíerrez12]."

  - ruta: "distort_denois_im.webp"
    titulo: "[Gaussian Noise Reduction](#restoration-results)"
    descripcion: "Restored image after removing Gaussian noise with PSNR=25, SSIM=0.83."

  - ruta: "distort_deblur_im.webp"
    titulo: "[Blur and Gaussian Noise Reduction](#restoration-results)"
    descripcion: "Restored image after reducing blur and Gaussian noise with PSNR=24.6, SSIM=0.61."

  - ruta: "distort_JPEG_im.webp"
    titulo: "[JPEG Noise Reduction](#restoration-results)"
    descripcion: "Restored image after reducing JPEG compression noise with PSNR=25, SSIM=0.72."

  - ruta: "distort_salt_im.webp"
    titulo: "[Salt and Pepper Noise Reduction](#restoration-results)"
    descripcion: "Restored image after removing salt-and-pepper noise with PSNR=25.3, SSIM=0.83."

  - ruta: "restore_denois_im.webp"
    titulo: "[Regularization Denoising](#restoration-results)"
    descripcion: "Restored image using regularization methods for denoising."

  - ruta: "restor_deblur_im.webp"
    titulo: "[Regularization Deblurring](#restoration-results)"
    descripcion: "Restored image using regularization methods for deblurring and denoising."

  - ruta: "restorat_JPEG_im.webp"
    titulo: "[Regularization JPEG Noise Reduction](#restoration-results)"
    descripcion: "Restored image using regularization methods for removing JPEG noise."

  - ruta: "restorat_salt_im.webp"
    titulo: "[Regularization Salt-and-Pepper Reduction](#restoration-results)"
    descripcion: "Restored image using regularization methods for removing salt-and-pepper noise."

  - ruta: "results_denoise_wav_400_im.webp"
    titulo: "[Wavelet Denoising](#restoration-results)"
    descripcion: "Denoised image using wavelet and kernel-based methods."

  - ruta: "results_denoise_jpeg_wav_im.webp"
    titulo: "[JPEG Noise Removal Using Wavelet](#restoration-results)"
    descripcion: "Restored image using wavelet-based methods to remove JPEG compression noise."
---