---
type: "code"
layout: "single"
title: "Basic Video Tools: A Matlab Toolbox for Video Data and Spatio-Temporal Vision Models (J. Malo, J. Gutirrez and V. Laparra (c) Universitat de Valncia 1996 - 2014)"
---
# What is in BasicVideoTools?
BasicVideoTools is a Matlab/Octave Toolbox intendend to deal with video data and spatio-temporal vision models. In particular, it includes convenient *.m files to:
- Read standard (VQEG and LIVE) video data
- Rearrange video data (as for instance to perform statistical  analysis)
- Generate controlled sequences (controlled contrast, texture, and  2d and 3d speed)
- Compute 3D Fourier transforms
- Play with motion perception models (spatial texture and  motion-sensitive cells of LGN, V1 and MT, and spatio-temporal CSF)
- Visualize movies (achromatic only)

# What is not in BasicVideoTools?

BasicVideoTools does not include:
- Optical flow or motion estimation/compensation algorithms 
- Video Coding algorithms
- Video Quality Mesures
  
  If you are looking for the above, please consider downloading   other Toolboxes:

- Motion estimation:
  - Video_coding.html  ([Hierarchical Block Matching](http://www.scholarpedia.org/article/Optic_flow))
- [Video Coding (improved MPEG)](./../../videocodingtools/content) 
- [Video Quality](./../../videoqualitytools/content) 

# Download BasicVideoTools!

- [The code](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_imvideo/vista_toolbox/BasicVideoTools_code.zip) (version 1.0. Use this version only for compatibility with the code in the experiments of the motion-aftereffect paper).

- [The code](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_imvideo/basic_video/BasicVideoTools_v3.zip) (version 3.0 -Not only improved sampling functions and additional motion sensitive cells, but also more things)

- Optional data (not necessary to run the code):  If you use these data please cite the VQEG and LIVE databases (for video), and the CVC Barcelona Database (for images)

  - [Image data](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_imvideo/basic_video/image_data.zip) (1.8 GB). Luminance images from the CVC Barcelona Calibrated Image Database.
  
  - [Video data](https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/code/soft_imvideo/basic_video/video_data.rar) (2.6 GB): Raw videos from the VQEG and LIVE video databases.

# Installation and Requirements

- Download the BasicVideoTools file(s)
- Decompress at your machine in the folder BasicVideoTools (no location restrictions for this folder)
- Update the matlab/octave path including all subfolders
- Tested on Matlab 2006b and posterior Matlab versions

* Video and image data are only required if you want to gather statistics from natural videos or from natural images with controlled speed

# How to get started?
For a general overview please take a look at the contents.m file, or (after you included it in th path) just look for help by typing the name of the folder, for instance: help BasicVideoTools_v2.

For additional details on how to use the functions in practice, see the demos:

- **demo_motion_programs**, demo on how to use most functions (except random dots and newtonian sequences).
- **example_random_dots_sequence**, demo on random dots sequences with controlled flow.
- **example_newtonian_sequence**, demo on physics-controlled sequences.