---
title: "Cloud detection over landmarks from MSG SEVIRI images"
abstract: |
  We cast the problem of cloud identification over landmarks on Meteosat Second Generation (MSG) SEVIRI data. This satellite mission constitutes a fundamental tool for weather forecasting, providing images of the full Earth disc every 15 minutes. Matching the landmarks accurately is of paramount importance in image navigation and registration (INR) models and geometric quality assessment (GQA) in the Level 1 instrument processing chain. Cloud contamination detection over landmarks is an essential step in the MSG processing chain, as undetected clouds are one of the most significant sources of error in landmark matching. 
  
  The landmark matching application requires only a binary detection. Furthermore, the cloud detection has to be carried out in real-time to be included in the landmark matching MSG processing chain, which implies efficient and robust detection schemes. Therefore, the proposed classification scheme is designed evaluating the complexity, the scalability, and parallelization of computations. 
  
  The dataset provided by EUMETSAT contains MSG/SEVIRI Level 1.5 acquisitions for 200 landmarks of variable size for a whole year, which are mainly located over the coastline, islands, or inland waters. A full Earth disk image is acquired every 15 minutes, which produces 96 images per day and results in 35040 images (or chips) per landmark in 2010. Additionally, Level 2 cloud products were provided for each landmark observation so the Level 2 cloud mask is used as the best available `ground truth' to validate the results. Summarizing, in this problem, we have to deal with near 7 million MSG/SEVIRI multispectral images acquired during 2010. 
  
  The RKS method was used for cloud identification over landmarks. This was done in the context of a project titled [Study on pattern recognition based cloud detection over landmarks](http://www.eumetsat.int/) in collaboration with EUMETSAT European Organisation for the Exploitation of Meteorological Satellites, 01/15 - 11/15. Below we show a set of illustrative videos where the best classifier results are show for particular landmarks. We show the L2 cloud mask and our classifier predictions, along with the cumulative accuracy per acquisition.

images:
  - link: "Ad_Dakhla.mp4"
    title: "Ad Dakhla"
  - link: "Aqaba.mp4"
    title: "Aqaba"
  - link: "Azores.mp4"
    title: "Azores"
  - link: "Chad.mp4"
    title: "Chad"
  - link: "Chad_2.mp4"
    title: "Chad"
  - link: "Grampian.mp4"
    title: "Grampian"
  - link: "Libreville.mp4"
    title: "Libreville"
  - link: "Messina.mp4"
    title: "Messina"
  - link: "Nasser.mp4"
    title: "Nasser"
  - link: "Rhodes.mp4"
    title: "Rhodes"
  - link: "Tenerife.mp4"
    title: "Tenerife"
  - link: "Uruguay.mp4"
    title: "Uruguay"
  - link: "Valencia.mp4"
    title: "Valencia"

references:
  - title: "If you have any question about, please, do not hesitate to write an email to Adrián Pérez-Suay (Adrian.Perez at uv dot es)."
    link: "adrian.perez@uv.es"
---
