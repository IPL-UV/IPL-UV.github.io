---
title: "Classification, change and anomaly detection"
image: "/images/code/SVM.webp"
link: "soft_classification.html"
weight: 2
draft: false
---

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>HyperLabelMe: A web platform for benchmarking remote-sensing image classifiers</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/code/classification/hyperlabelme.zip">
        <img src="/images/code/hyperlabelme.webp" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>The Image and Signal Processing (ISP) group at the Universitat de València has harmonized a big database of labeled multi- and hyperspectral images for testing classification algorithms. We think that, like in other related fields of science, data sharing and reproducibility are the only ways for fostering true advance in remote sensing data processing. So far we have harmonized 43 image datasets, both multi- and hyperspectral. We want to expand this database as much as possible in order to objectively evaluate algorithms and submitted papers. We provide training pairs (spectra and their labels) and test spectra. Researchers are able to train their algorithms off-line, and then evaluate their accuracy over an independent, fixed, spectra test set per image. The system returns accuracy and robustness measures of your algorithm in that test set, as well as a ranked list of the best methods. The datasets and the automatic testing system will be available as soon as no data copyright conflict is identified.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>J. Munoz-Mari et al., "HyperLabelMe : A Web Platform for Benchmarking Remote-Sensing Image Classifiers," in IEEE Geoscience and Remote Sensing Magazine, vol. 5, no. 4, pp. 79-85, Dec. 2017. doi: 10.1109/MGRS.2017.2762476</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>ALTB: Active Learning MATLAB(tm) Toolbox</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://github.com/IPL-UV/altoolbox">
        <img src="/images/code/active_learning_curve.webp" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>ALTB is a set of tools implementing state-of-the-art active learning algorithms for remote sensing applications.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Semisupervised classification of remote sensing images with active queries Munoz-Mari, J. and Tuia, D. and Camps-Valls, G. IEEE Transactions on Geoscience and Remote Sensing 50 (10 PART1):3751-3763, 2012</li>
        <li>Remote sensing image segmentation by active queries Tuia, D. and Muñoz-Marí, J. and Camps-Valls, G. Pattern Recognition 45 (6):2180-2192, 2012</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>Kernelized EC-ACD: Elliptically Contoured Anomaly Change Detection</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/code/classification/KACD_code.zip">
        <img src="/images/code/acd.webp" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>A simple Toolbox for Anomaly Change Detection (ACD) with Gaussianity assumptions and Elliptically Contoured (EC) distributions, and their kernel-based versions!</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>A family of kernel anomaly change detectors Longbotham, N. and Camps-Valls, G. IEEE Whispers, 2015</li>
        <li>Robustness analysis of elliptically contoured multi- and hyperspectral change detection algorithms M. A. Belenguer, Longbotham, N. and Camps-Valls, G. Submitted, 2016</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>simpleClass: Simple Classification Toolbox</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/code/classification/simpleClass-1.0.tar.gz">
        <img src="/images/code/simpleclass.webp" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>A set of train-test simple educational functions for data classification: LDA, QDA, Mahalanobis-distance classifier, decision trees, random forests, SVM, Boosting, Bagging, Gaussian process classifiers, etc.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Last version of the toolbox is in GitHub: <a href="https://github.com/IPL-UV/simpleClass">https://github.com/IPL-UV/simpleClass</a></li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>Graph kernels for spatio-spectral classification</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/code/classification/graphkernel.tar.gz">
        <img src="/images/code/graphlets.webp" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>A graph kernel for spatio-spectral remote sensing image classification with support vector machines (SVM). The method considers higher order relations in the neighborhood (beyond pairwise spatial relations) to iteratively compute a kernel matrix for SVM learning. The proposed kernel is easy to compute and constitutes a powerful alternative to existing approaches.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Spatio-spectral remote sensing image classification with graph kernels Camps-Valls, G. and Shervashidze, N. and Borgwardt, K.M. IEEE Geoscience and Remote Sensing Letters 7 (4):741-745, 2010</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>Semi-supervised Graph-based Classification</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/code/classification/ssgraph-1.0.zip">
        <img src="/images/code/grafo_LapSVM6.webp" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>A graph-based method for semi-supervised learning: essentially an affinity matrix is computed, the graph Laplacian is normalized, and a spreading function is iterated until convergence. This algorithm can be understood intuitively in terms of spreading activation networks from experimental psychology, and explained as random walks on graphs. We successfully apply it to hyperspectral image classification. It incorporates contextual information through a full family of composite kernels. Noting that the graph method relies on inverting a huge kernel matrix formed by both labeled and unlabeled samples, we originally introduce the Nyström method in the formulation to speed up the classification process.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Semi-supervised graph-based hyperspectral image classification Camps-Valls, G. and Bandos Marsheva, T.V. and Zhou, D. IEEE Transactions on Geoscience and Remote Sensing 45 (10):3044-3054, 2007</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>BagSVM: Bag Support Vector Machine</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/code/classification/demoBagSVM-1.0.tar.gz">
        <img src="/images/code/bag.webp" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>A semi-supervised SVM for the classification of remote sensing images. The method exploits the wealth of unlabeled samples for regularizing the training kernel representation locally by means of cluster kernels. The method learns a suitable kernel directly from the image, and thus avoids assuming a priori signal relations by using a predefined kernel structure. The method scales almost linearly with the number of unlabeled samples and provides out-of-sample predictions.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Semisupervised remote sensing image classification with cluster kernels Tuia, D. and Camps-Valls, G. IEEE Geoscience and Remote Sensing Letters 6 (2):224-228, 2009</li>
        <li>Spectral clustering with the probabilistic cluster kernel Emma Izquierdo-Verdiguier and Robert Jenssen and Luis Gómez-Chova and Gustavo Camps-Valls Neurocomputing 149, Part C :1299-1304, 2015</li>
      </ul>
    </div>
  </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading">
    <h2>Our modified libSVM</h2>
  </div>
  <div class="panel-body">
  <div class="col-md-2">
      <a href="http://www.uv.es/jordi/soft.htm">
        <img src="/images/code/SVM.webp" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>Precomputed kernels, e-Huber cost function, accuracy assessment, and other useful things for SVM methods.</p>
    </div>
  </div>
</div>


<div class="panel panel-default">
  <div class="panel-heading">
    <h2>Large Margin Filtering SVM</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="http://remi.flamary.com/soft/soft-filtersvm.html">
        <img src="/images/code/lmf.webp" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>A (large margin) SVM algorithm that learns convolutional filters, with applications to time series analysis and remote sensing image classification.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Large margin filtering Flamary, R. and Tuia, D. and Labbé, B. and Camps-Valls, G. and Rakotomamonjy, A. IEEE Transactions on Signal Processing 60 (2):648-659, 2012</li>
        <li>Learning spatial filters for multispectral image segmentation Tuia, D. and Camps-Valls, G. and Flamary, R. and Rakotomamonjy, A. Proceedings of the 2010 IEEE International Workshop on Machine Learning for Signal Processing, MLSP 2010 2010</li>
      </ul>
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h2>UKC: Unsupervised kernel change detection</h2>
  </div>
  <div class="panel-body">
    <div class="col-md-2">
      <a href="https://isp.uv.es/code/classification/changedetectionwithkernels.zip">
        <img src="/images/code/change.webp" class="subpage-image">
      </a>
    </div>
    <div class="col-md-6">
      <p>This code+data snippet implements the automatic change detection algorithm presented in the SPIE 2010 and IGARSS 2011 papers. It consists in three steps: initialization (histogram-based), automatic parameter tuning and change map generation, with classical kmeans, gaussian kernel kmeans and by clustering the difference image in the feature spaces. Loops allows to perform different experiments and the user can choose different parameters (number of experiments, kernel function and parameters to search, number of pseudo training samples,...). Moreover, one can easily adapt the code for comparisons to other algorithms and images, as well as adapting the code for personal developments.</p>
    </div>
    <div class="col-md-4 references">
      <div class="panel-heading2">
        <h3>References</h3>
      </div>
      <ul>
        <li>Unsupervised change detection by kernel clustering Volpi, M. and Tuia, D. and Camps-Valls, G. and Kanevski, M. Proceedings of SPIE - The International Society for Optical Engineering 7830 2010</li>
        <li>Unsupervised change detection in the feature space using kernels Volpi, M. and Tuia, D. and Camps-Valls, G. and Kanevski, M. International Geoscience and Remote Sensing Symposium (IGARSS) 2011</li>
      </ul>
    </div>
  </div>
</div>
