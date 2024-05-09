---
title: "CloudSEN12"
type: data/generic_dataset
subtitle: "A Benchmark Dataset for Cloud Semantic Understanding"
logo: /isp/images/data/cloudsen12/logo.gif
banner: cloudsen12/banner.png
github: https://github.com/cloudsen12
huggingface: https://huggingface.co/isp-uv-es/cloudsen12
tags:
    - Sentinel-2
    - UNet
    - Cloud Detection
    - Multi-Modal
    - Remote Sensing
authors:
    - name: "Herrera Fernando"
      image: "cloudsen12/authors/fernando.png"
    - name: "Loja Jhomira"
      image: "cloudsen12/authors/jhomira.jpeg"
    - name: "Ysuhuaylas Luis"
      image: "cloudsen12/authors/luis.jpeg"
    - name: "Gonzales Karen"
      image: "cloudsen12/authors/andrea.jpeg"
    - name: "LLactayo Valeria"
      image: "cloudsen12/authors/valeria.jpg"
    - name: "Bautista Lesly"
      image: "cloudsen12/authors/lesly.jpg"
    - name: "Diaz Lissette"
      image: "cloudsen12/authors/lissette.png"
    - name: "Flores Angie"
      image: "cloudsen12/authors/angie.jpg"
    - name: "Cuenca Nicole"
      image: "cloudsen12/authors/nicole.jpg"
    - name: "Inga Joselyn"
      image: "cloudsen12/authors/inga.jpg"
    - name: "Espinoza Wendy"
      image: "cloudsen12/authors/wendy.jpg"
    - name: "Fernando Prudencio"
      image: "cloudsen12/authors/fernando.png"
    - name: "Yali Roy"
      image: "cloudsen12/authors/roy.jpg"
    - name: "Aybar Cesar"
      image: "cloudsen12/authors/cesar.jpg"
    - name: "Mateo-García Gonzalo"
      image: "cloudsen12/authors/gonzalo.png"
    - name: "Gomez-Chova Luis"
      image: "cloudsen12/authors/gomez.png"
    - name: "Tiede Dirk"
      image: "cloudsen12/authors/dirk.jpg"
    - name: "Sudmanns Martin"
      image: "cloudsen12/authors/martin.png"
    - name: "David Montero"
      image: "cloudsen12/authors/david.jpg"
examples:
    - title: "Download CloudSEN12 using easystac"
      link: "https://colab.research.google.com/github/cloudsen12/examples/blob/master/example01.ipynb"
    - title: "Make a prediction using UnetMobV2 (CloudSEN12)"
      link: "https://colab.research.google.com/github/cloudsen12/examples/blob/master/example02.ipynb"
    - title: "CloudSEN12 and PyTorch Lightning"
      link: "https://colab.research.google.com/github/cloudsen12/examples/blob/master/example03.ipynb"
    - title: "Visualize CloudSEN12 using geemap"
      link: "https://colab.research.google.com/github/cloudsen12/examples/blob/master/example04.ipynb"
    - title: "Compare cloud masking models"
      link: "https://colab.research.google.com/github/cloudsen12/examples/blob/master/example05.ipynb"
    - title: "Visualize CloudSEN12 in GEE code editor"
      link: "https://github.com/cloudsen12/examples/tree/main/js"
citation: |
    @article{aybar2022cloudsen12,
      title={CloudSEN12, a global dataset for semantic understanding of cloud and cloud shadow in Sentinel-2},
      author={Aybar, Cesar and Ysuhuaylas, Luis and Loja, Jhomira and Gonzales, Karen and Herrera, Fernando and Bautista, Lesly and Yali, Roy and Flores, Angie and Diaz, Lissette and Cuenca, Nicole and others},
      journal={Scientific data},
      volume={9},
      number={1},
      pages={782},
      year={2022},
      publisher={Nature Publishing Group UK London}
    }
---

## Introduction

CloudSEN12 is a LARGE dataset (~1 TB) for cloud semantic understanding that consists of 49,400 image patches (IP) that are evenly spread throughout all continents except Antarctica. Each IP covers 5090 x 5090 meters and contains data from Sentinel-2 levels 1C and 2A, hand-crafted annotations of thick and thin clouds and cloud shadows, Sentinel-1 Synthetic Aperture Radar (SAR), digital elevation model, surface water occurrence, land cover classes, and cloud mask results from six cutting-edge cloud detection algorithms.

CloudSEN12 is designed to support both weakly and self-/semi-supervised learning strategies by including three distinct forms of hand-crafted labeling data: high-quality, scribble and no-annotation. For more details on how we created the dataset see our paper: [CloudSEN12 - a global dataset for semantic understanding of cloud and cloud shadow in Sentinel-2](https://www.nature.com/articles/s41597-022-01878-2).

