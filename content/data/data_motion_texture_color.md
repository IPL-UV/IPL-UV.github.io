---
title: "Data for motion, texture and color statistics"
image: "/images/data/motion_after.webp"
weight: 2
draft: false
---

<div class="container">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h2>VISUAL AFTEREFFECTS FROM SEQUENTIAL PRINCIPAL CURVES</h2>
    </div>
    <div class="panel-body">
      <div class="col-md-2">
        <a href="https://isp.uv.es/after_effects/index.html">
          <img src="/images/data/example_image.webp" class="subpage-image">
        </a>
      </div>
      <div class="col-md-6 content">
        <p>Visual Aftereffects and Sensory Nonlinearities from a single Statistical Framework</p>
        <p>Frontiers in Human Neuroscience. Special Issue on Perceptual Illusions 2015</p>
        <p>Valero Laparra & Jesús Malo</p>
        <p>Universitat de Valéncia. Spain</p>
        <p>Visual AfterEffects (animated examples): <a href="https://isp.uv.es/after_effects/index.html#motion_example">Motion</a>, <a href="https://isp.uv.es/after_effects/index.html#color_example">Color</a>, <a href="https://isp.uv.es/after_effects/index.html#texture_example">Texture</a></p>
        <p>Why do we have these illusions? Predictions via Sequential Principal Curves Analysis: <a href="https://isp.uv.es/after_effects/index.html#motion">motion</a>, <a href="https://isp.uv.es/after_effects/index.html#color">color</a>, <a href="https://isp.uv.es/after_effects/index.html#texture">texture</a></p>
        <p>Conclusion: your brain is not fooling you but doing its best in each context!</p>
        <p><strong>References:</strong></p>
        <ul>
          <li>Data: movies, images, colors</li>
          <li>Code (reproducible results)</li>
          <li>Generation of aftereffects</li>
          <li>Classical explanation example: motion aftereffect from divisive normalization</li>
          <li>Proposed explanation: aftereffects from SPCA</li>
          <li>Motion</li>
          <li>Color</li>
          <li>Texture</li>
          <li>Infomax and error minimization in visual textures via SPCA</li>
          <li>General purpose toolboxes: SPCA, BasicVideoTools, ColorLab</li>
        </ul>
      </div>
      <div class="col-md-4 references">
        <div class="panel-heading2">
          <h3>References</h3>
        </div>
        <ul>
          <li>Laparra, V., & Malo, J. (2015). Visual Aftereffects and Sensory Nonlinearities from a Single Statistical Framework. Frontiers in Human Neuroscience, Special Issue on Perceptual Illusions.</li>
          <li>Laparra, V., & Malo, J. (2015). The full report on Sequential Principal Curves Analysis. IPL-Technical Report. Universitat de València.</li>
          <li>Malo, J., & Gutiérrez, J. (2006). V1 non-linear properties emerge from local-to-global non-linear ICA. Network: Comp. Neural Systems, 17(1): 85-102.</li>
          <li>Laparra, V., Jimenez, S., Camps, G., & Malo, J. (2012). Nonlinearities and Adaptation of Color Vision from Sequential Principal Curves Analysis, Neural Computation, 24(10), 2751-2788.</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3>Examples of STATIC MOTION AFTEREFFECT: illusory motion of static patterns in reverse direction after adaptation</h3>
    </div>
    <div class="panel-body">
      <p>Example 1: vertical motion, noise sequence</p>
      <p>Adapting Environment | Test (Static Pattern) | Animated version</p>
      <p>Example 2: horizontal motion, noise sequence</p>
      <p>Adapting Environment | Test (Static Pattern) | Animated version</p>
      <p>Example 3: horizontal motion, natural texture</p>
      <p>Adapting Environment | Test (Static Pattern) | Animated version</p>
      <p>OBSERVATIONS from the MOTION EXAMPLES</p>
      <p>Example 1 (vertical motion, noise sequence) shows that the slow moving pattern generates a stronger reverse motion aftereffect. The aftereffect comes from the fact that the sensors tuned to zero and slow positive motion are attenuated by the adapting sequence. Therefore, a static pattern presented afterwards (that stimulates slow negative, zero and slow positive sensors) elicits a smaller-than-usual response in zero and slow positive sensors. As a result, the stimulus is seen as moving with slow negative motion. Attenuation in sensors tuned to zero motion comes from the fact that activity in certain sensors reduces the gain of other sensors [Morgan et al. 06, Stocker and Simoncelli 09].</p>
      <p>The stronger aftereffect produced by the slow motion pattern reveals that sensors tuned to slow motion attenuate more strongly the sensors tuned to static patterns. The activity of sensors tuned to higher speeds does not affect zero motion sensors as much leading to weaker aftereffect.</p>
      <p>The question is: where this neighborhood interaction comes from?. Why slow motion sensors attenuate the zero motion sensor more than the sensors tuned to high speed?</p>
      <p>Examples 2 and 3 (noise and natural textures with horizontal motion) illustrate the generality of the effect: it happens in any direction, and it is kind of independent of the texture. The sequence with natural texture was generated from a luminance calibrated image database used to train our statistical learning technique.</p>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3>Examples of COLOR AFTEREFFECTS: illusory contours of shifted hue emerge in the images seen after adaptation</h3>
    </div>
    <div class="panel-body">
      <p>Example 1: simple configuration (Joseph Albers-like configuration)</p>
      <p>Adapting Environment | Test (strictly stationary hue) | Animated version</p>
      <p>Example 2: patches of diverse reflectance</p>
      <p>Adapting Environment | Test (average hue is stationary) | Animated version</p>
      <p>Example 3: horizontal motion, natural texture</p>
      <p>Adapting Environment | Test (stationary hue) | Animated version</p>
      <p>OBSERVATIONS from the COLOR EXAMPLES</p>
      <p>Example 1 shows that while the central part of the test image is achromatic (and not limited by any contour), color and contours of the scene change after adaptation: an illusory cyan/blueish patch emerges around the fixation point.</p>
      <p>This aftereffect arises because adaptation to a yellowish color leads to shifts in the nonlinear responses of the Red-Green and Yellow-Blue sensors [Krauskopf and Gegenfurtner 92, Fairchild 05]. After this adaptation, stimuli that would be considered to be white in usual conditions (with unshifted curves) is perceived as greenish-blue. Equivalent shifts (but in different chromatic directions) happen after adaptation to different colors.</p>
      <p>The question is: why the nonlinearities shift in this specific way?</p>
      <p>Examples 2 and 3 illustrate the generality of the effect: illusory contours emerge in more complex scenes with diverse reflectance and with natural texture. The scene with natural texture was generated from a color calibrated image database used to train our statistical learning technique.</p>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3>Examples TEXTURE AFTEREFFECTS: local blindness in a physically stationary texture after adaptation to appropriate (similar) textures</h3>
    </div>
    <div class="panel-body">
      <p>Example 1: parametric stimuli (Gabors and Sinusoids)</p>
      <ul>
        <li>1.1 Similar frequency and orientation</li>
        <li>1.2 Different frequency but different orientation</li>
        <li>1.3 Different frequency and orientation</li>
      </ul>
      <p>Adapting Environments | Tests (stationary contrast) | Animated versions</p>
      <p>Example 2: non-parametric stimuli (Principal Components of a calibrated Natural Image dataset)</p>
      <ul>
        <li>2.1 Similar frequency and orientation</li>
        <li>2.2 Different frequency but different orientation</li>
        <li>2.3 Different frequency and orientation</li>
      </ul>
      <p>Adapting Environment | Test (stationary contrast) | Animated version</p>
      <p>OBSERVATIONS from the TEXTURE EXAMPLES</p>
      <p>Example 1 shows that while the physical contrast of the test image is stationary (the same in center and periphery), it changes differently after adaptation to the high contrast texture. Note that the strength of the induced blindness around the fixation point depends on the correspondence between frequency and orientation of the previous and post scenes: if the frequency content is very similar the affected zone virtually disappears. That is not the case in other situations.</p>
      <p>This aftereffect arises because sensors tuned to certain frequency are attenuated by the activity of sensors tuned to similar frequencies [Blakemore 69, Barlow 90, Watson 97]. As a result, after the presentation of a high contrast pattern, if a similar pattern is presented, the response of the sensors tuned to this second pattern is weaker than usual (under no adaptation). Therefore, this second pattern is seen as having less contrast, or eventually, not seen at all.</p>
      <p>The stronger aftereffect produced between patterns of similar frequency reveals that sensors tuned to closer frequencies interact (attenuate each other) more than sensors tuned to distant frequencies.</p>
      <p>The question (as in the motion case) is: where this local neighborhood interaction comes from?</p>
      <p>Example 2 shows that the same trends happen for the linear Principal Components of natural images: even though they are statistically decorrelated, they are not perceptually independent. Some additional processing is necessary to make them perceptually independent.</p>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3>Conclusion</h3>
    </div>
    <div class="panel-body">
      <p>The general trend of the responses and the change of operation regime come from the way samples are distributed. In the case of motion and texture, the general behavior comes from (1) the increased concentration of samples around zero contrast, and (2) the faster decay in the density in some directions in the neighborhood of similar stimuli. In the case of color, the general behavior comes from (1) peak density at achromatic reflectance, and (2) deformation of the tristimulus manifold when considering clustered hues or specific illumination. The specific organization principle implies different saturation nonlinearity in the responses. Both criteria lead to shifts and changes of operation regime that are compatible with the observed aftereffect in all modalities (motion, texture and color). In the case of color, where the theoretical responses were closely compared to the actual responses in [Laparra 12], infomax can be neglected because of the unrealistic sharpness of the response.</p>
      <p>It is important to note that these trends were not imposed by using some specific functional form in the response, but emerges from the way data distribution changes in different environments and by optimal encoding strategies of the data.</p>
      <p>We can conclude that what appears to be a dysfunctional behavior actually comes from clever information processing: the system uses the optimal operation regime in each environment. Your visual brain is not fooling you, but trying to do its best in a dynamic environment!</p>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3>References</h3>
    </div>
    <div class="panel-body">
      <ul>
        <li>V. Laparra, and J. Malo, "Visual Aftereffects and Sensory Nonlinearities from a Single Statistical Framework" Frontiers in Human Neuroscience. Special Issue on Perceptual Illusions. 2015.</li>
        <li>V. Laparra, and J. Malo, "The full report on Sequential Principal Curves Analysis" IPL-Technical Report. Universitat de València. 2015.</li>
        <li>J. Malo and J. Gutiérrez V1 non-linear properties emerge from local-to-global non-linear ICA. Network: Comp. Neural Systems. 17(1):  85-102 (2006).</li>
        <li>V. Laparra, S. Jimenez, G. Camps, and J. Malo. Nonlinearities and Adaptation of Color Vision from Sequential Principal Curves Analysis, Neural Computation, vol. 24, no. 10, pp. 2751–2788, 2012.</li>
        <li>V. Laparra, S. Jimenez, D. Tuia, G. Camps-Valls and J. Malo Principal Polynomial Analysis (PPA). International Journal of Neural Systems, 24(7) Nov. 2014.</li>
        <li>V. Laparra, J. Malo and G. Camps-Valls. Dimensionality Reduction via Regression in Hyperspectral Imagery. IEEE Journal on Selected Topics of Signal Processing. Vol. 9, Num. 9. September 2015.</li>
        <li>Abrams, A., Hillis, J., and Brainard, D. "The relation between color discrimination and color constancy: When is optimal adaptation task dependent?" Neural Computation, 19(10):2610–2637. 2007.</li>
        <li>Barlow , H. "Possible principles underlaying the transformation of sensory messages". Sensory Communication, pp. 217-234, 1961.</li>
        <li>Barlow, H. “A theory about the functional role and synaptic mechanism of visual aftereffects,” in Vision: Coding and Efficiency, C. Blakemore, Ed. Cambridge, UK: Cambridge Univ. Press, 1990.</li>
        <li>Barlow, H. "Redundancy reduction revisited". Network: Computation in Neural Systems, 2001.</li>
        <li>Blakemore C. and Campbell F.W. "On the existence of neurons in the human visual system selectivity sensitive to the orientation and size of retinal images". J. Physiol. 203: 237-60, 1969.</li>
        <li>Carandini M. and Heeger D., “Normalization as a canonical neural computation.” Nature Reviews. Neurosci., vol. 13, no. 1, pp. 51–62, 2012.</li>
        <li>Clifford, C., Webster, M., Stanley, G., Stocker, A., Kohn, A., Sharpee, T., and Schwartz, O. “Visual adaptation: Neural, psychological and computational aspects,” Vision Research, vol. 47, pp. 3125–3131, 2007.</li>
        <li>Clifford, C., Wenderoth, P., and Spehar, B. (2000), A functional angle on some after-effects in cortical vision, Proc. Roy. Soc. B, 267, 1705–1710.</li>
        <li>Clifford, C, Perceptual adaptation: motion parallels orientation. Trends Cog. Sci. 6(3): 136-143. 2002.</li>
        <li>Coen-Cagli, R., Dayan, P., and Schwartz, O. (2010), Statistical models of linear and nonlinear contextual interactions in early visual processing, in Adv. Neur. Inf. Proc. Syst. NIPS 09'. vol. 22, 369–377.</li>
        <li>Fairchild, M. Color Appearance Models, 2nd Ed. Chichester, UK: Wiley-IS&T, 2005.</li>
        <li>Gutmann, M., Laparra, V., Hyvarinen, A.  and Malo, J. “Spatio-chromatic adaptation via Higher-Order Canonical Correlation Analysis,” PLoS ONE, 2014.</li>
        <li>Krauskopf, J. and Gegenfurtner, K. (1992), Color discrimination and adaption, Vision Res., 32, 11, 2165–2175.</li>
        <li>Mather G, Pavan A, Campana G, Casco C. The motion after-effect reloaded. Trends Cog. Sci. 12(12): 481-487. 2008.</li>
        <li>Morgan, M., Chubb, C., and Solomon, J. (2006), Predicting the motion after-effect from sensitivity loss, Vision Research, 46, 2412–2420.</li>
        <li>Simoncelli, E. and Heeger, D. (1998), A model of neuronal reponses in visual area MT, Vision Research, 38, 5, 743–761.</li>
        <li>Stocker, A. A. and Simoncelli, E. P. (2006), Sensory adaptation within a Bayesian framework for perception, Adv. Neur. Inf. Proc. Syst. (NIPS 05'), vol. 18, 1291–1298.</li>
        <li>Stocker, A. and Simoncelli, E. (2009), Visual motion aftereffects arise from a casacade of two isomorphic adaptation algorithms, Journal of Vision, 9.</li>
        <li>Watson A.B. and Solomon J.“A model of visual contrast gain control and pattern masking,” JOSA A, vol. 14, pp. 2379–2391, 1997.</li>
        <li>Weiss, Y., Simoncelli, E. P., and Adelson, E. H. (2002), Motion illusions as optimal percepts, Nature Neuroscience, 3, 598–604.</li>
      </ul>
    </div>
  </div>
</div>