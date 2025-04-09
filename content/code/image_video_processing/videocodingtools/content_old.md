---
type: "code"
layout: "single_four"
title: "Motion Estimation and Video Coding Toolbox"
references:
  - title: "Perceptually weighted optical flow for motion-based segmentation in MPEG-4 paradigm"
    authors: "J. Malo, J. Gutierrez, I. Epifanio, F. Ferri"
    publication: "Electronics Letters, Vol. 36, 20, pp. 1693-1694 (2000)"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/seg_ade2.ps"
  - title: "Perceptual feed-back in multigrid motion estimation using an improved DCT quantization"
    authors: "J. Malo, J. Gutierrez, I. Epifanio, F. Ferri, J.M. Artigas"
    publication: "IEEE Transactions on Image Processing, Vol. 10, 10, pp. 1411-1427 (2001)"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/ieeeoct01.pdf"
  - title: "Importance of quantizer design compared to optimal multigrid motion estimation in video coding"
    authors: "J. Malo, F. Ferri, J. Gutierrez, I. Epifanio"
    publication: "Electronics Letters, Vol. 36, 9, pp. 807-809 (2000)"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/elect00.ps"
links:
  - title: "Motion_estimation_and_Video coding_code.zip"
    link: "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_visioncolor/Motion_estimation_and_Video%20coding_code.zip"
images:
  - link: "coderde.webp"
    title: "[Motion Estimation Scheme](#motion-estimation)"
    description: "Illustration of the video coder scheme with motion estimation and prediction error quantization."
  - link: "coding.webp"
    title: "[Video Coding Example](#video-coding)"
    description: "Comparison of video coding schemes with different levels of motion estimation and quantization efficiency."
  - link: "distort.webp"
    title: "[Distortion per Frame](#video-coding)"
    description: "Distortion per frame plot comparing algorithms with improved motion estimation and non-linear quantization schemes."
---

  # Motion Estimation
  Our approach to motion estimation in video sequences was motivated by the general scheme of the current video coders with motion compensation (such as MPEG-X or H.26X [Musmann85, LeGall91, Tekalp95]).
  
  In motion compensation video coders the input sequence, **A(t)**, is analized by a motion estimation system, M, that computes some description of the motion in the scene: typically the optical flow, **DVF(t)**. In the motion compensation module, **P**, this motion information can be used to predict the current frame, **A(t)**, from previous frames, **A(t-1)**. As the prediction, **(t)**, is not perfect, additional information is needed to reconstruct the sequence: the prediction error **DFD(t)**. This scheme is useful for video compression because the entropy of these two sources (motion, DVF, and errors, **DFD**) is significantly smaller than the entropy of the original sequence **A(t)**.
  
  The coding gain can be even bigger if the error sequence is analyzed, and quantized, in an appropriate transform domain, as done in image compression procedures, using the transform **T** and the quantizer **Q**.

  Conventional optical flow techniques (based in local maximization of the correlation by block matching) provide a motion description that may be redundant for a human viewer. Computational effort may be wasted describing 'perceptually irrelevant motions'. This inefficient behavior may also give rise to false alarms and noisy flows. To solve this problem, hierarchical optical flow techniques have been proposed (as for instance in MPEG-4 and in H.263). They start from a low resolution motion estimate and new motion information is locally added only in certain regions. However, new motion information should be added only if it is 'perceptually relevant'. Our contribution in motion estimation is a definition of 'perceptually relevant motion information' [Malo98, Malo01a, Malo01b]. This definition is based on the entropy of the image representation in the human cortex (Watson JOSA 87, Daugman IEEE T.Biom.Eng. 89): an increment in motion information is perceptually relevant if it contributes to decrease the entropy of the cortex representation of the prediction error. Numerical experiments (optical flow computation and flow-based segmentation) show that applying this definition to a particular hierarchical motion estimation algorithm, more robust and meaningful flows are obtained [Malo00b, Malo01a, Malo01b].
 
  # Video Coding
  As stated in the above scheme, the basic ingredients of motion compensation video coders are the motion estimation module, M, and the transform and quantization module, **T+Q**. Given our work in motion estimation and in image representation for efficient quantization, the improvement of the current video coding standards is straightforward. See [Malo01b] for a comprehensive review, and [Malo97b, Malo00a] for the original formulation and specific analysis of the relative relevance of M and **T+Q** in the video coding process.
  
  Here is an example [Malo00a, Malo01b] of the relative gain in the reconstructed sequence (0.27 bits/pix) obtained from isolated improvements in motion estimation (**M**) and/or image representation and quantization (**T+Q**).
  
  In the above distortion-per-frame plot, thick lines correspond to algorithms with poor (linear) quantization schemes and thin lines correspond to improved (non-linear) quantization schemes. Dashed lines correspond to algorithms with improved motion estimation schemes. The conclusion is that at the current bit rates an appropriate image representation and quantization is quite more important than improvements in motion estimation.