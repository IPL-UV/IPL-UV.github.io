---
title: "opensr"
type: projects/generic_projects/data
---

## ESA OpenSR - Robust, accountable super-resolution for Sentinel-2 and beyond

### Legacy Dataset

One of the OpenSR objectives is to build a large dataset of collocated pairs of multispectral S-2 and VHR multispectral images for training and evaluating the SR models. They should be in the spectral domain of Sentinel-2 and spatially represent the information when super-resoluting from 10 to 2.5 meters. Since image-pairs that fulfill these criteria are usually not very large, we will also assemble datasets that can serve as pre-training before moving on to the higher-quality datasets due to the large models to be trained.
In the realm of super-resolution algorithms, the choice of the dataset can significantly influence the algorithm's training and ultimately its performance. Three key datasets in this domain are the OpenImage Dataset, the WorldStrat Dataset, and the Sen2Venus Dataset.

<h4 id="opensr" style="scroll-margin-top: 2.2em;">OpenSR dataset</h4>

The OpenSR dataset is an extensive dataset designed within this project to facilitate the development of standard and reference single-image super-resolution algorithms for Sentinel-2 imagery. The high-resolution (HR) images in this dataset are sourced from the National Agriculture Imagery Program (NAIP), which provides aerial imagery covering the entire contiguous United States.
NAIP collects data across various spectral bands, including red, green, blue, and near-infrared, at a resolution of 0.6 m/pixel. In the OpenSR dataset, we sample from all contiguous United States, selecting 25,000 random Areas of Interest (AOIs). These AOIs span the entirety of the contiguous USA, and we ensure a minimum distance of 5 kilometers between each AOI to prevent overlap.
For each AOI, we download two NAIP images from the period since 2010, selecting the oldest possible image and the most recent one. The low-resolution (LR) image is generated using a degradation model to mimic the Sentinel-2 data.

<div style="width: 100%; overflow-x: auto; text-align:center">
    <img src="/images/projects/opensr/degradationnaip.png" style="width: 60%; display: block; margin: auto;">
    <em>Figure: Workflow of the methodology followed to degrade NAIP to Sentinel-2</em>
</div>

<h4 id="worldstrat" style="scroll-margin-top: 2.2em;">WorldStrat dataset</h4>

_J. Cornebise, I. Oršolic, F. Kalaitzis. (2022) High-Resolution Satellite Imagery: The WorldStrat Dataset – With Application to Super-Resolution, Advances in Neural Information Processing System 35, Proceedings of NeurIPS 2022._ [WorldStrat dataset](https://worldstrat.github.io/)

The World Stratified Dataset, also known as WorldStrat, is a curated and diverse dataset. Its primary purpose is to aid in the development of multi-frame super-resolution algorithms specifically designed for Sentinel-2 imagery. A key feature of this dataset is the inclusion of high-resolution (HR) imagery from the SPOT 6/7 satellites. The SPOT imagery encompasses five distinct spectral bands. The panchromatic (PAN) band is at 1.5 m/pixel and the remaining bands, include Red, Green, Blue, and Near Infrared (RGBNIR) at 6 m/pixel.
The date of the SPOT visit was randomly selected between 2017 and 2019 from visits where the whole-scene cloud cover is lower than 5%. As the AOIs are much smaller than a full SPOT scene, it is not guaranteed that the actual image has precisely 5% cloud. For each SPOT image, WorldStrat includes multiple revisits of low-resolution Sentinel-2 imagery. The average time between these revisits is 5 days. The low-resolution (LR) revisits are provided in two product types: Level-1C (L1C) and Level-2A (L2A). The dataset does not filter the low-resolution Sentinel-2 revisits by their cloud coverage. This is to ensure that the training distribution on the low resolution is similar to the real-world use cases, where the user will want to rebuild at a given place at a given time. Algorithms should learn to ignore clouds and be able to assemble a view from the cloudless parts of the cloudy revisits.
The dataset covers approximately 10000 square kilometres and includes 3504 distinct areas of interest, curated for the highest diversity of possible uses.

<div style="width: 100%; overflow-x: auto; text-align:center">
    <img src="/images/projects/opensr/worldstrat.png" style="width: 60%; display: block; margin: auto;">
    <em>Figure: Summarizing the construction and classes of the WorldStrat dataset. From [Cornebise et al. 2022]</em>
</div>

<hr>

