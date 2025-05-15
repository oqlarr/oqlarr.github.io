---
author: Gerardo Guerrero
categories:
- Visual experiments
- Reels
date: "2025-05-01"
draft: false
excerpt: Colección de videos donde experimento con técnicas visuales como hyperlapse, cámara lenta y transiciones creativas. 
layout: single
subtitle: Canon R8 EOS, iPhone 16 Pro Max, Gimbal DJI Osmo 7P
tags:
- iPhone
- Gimbal
- Canon 
featured: true
title: Experimentos visuales
---

<div class="flex flex-wrap justify-center items-start">

  <div class="w-100 pa3 center">
    <div class="aspect-ratio aspect-ratio--16x9">
      <video id="barnaVideo"
             class="aspect-ratio--object pointer"
             preload="auto"
             playsinline>
        <source src="/vid/hyperlapse_barna.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <p class="f5 mt3 tc">Hyperlapse de Barcelona en 45 segundos.</p>
  </div>

</div>

<script>
  const barnaVideo = document.getElementById("barnaVideo");

  barnaVideo.addEventListener("click", function () {
    // Play the video with sound
    barnaVideo.muted = false;
    barnaVideo.play();

    // Go fullscreen if possible
    if (barnaVideo.requestFullscreen) {
      barnaVideo.requestFullscreen();
    } else if (barnaVideo.webkitRequestFullscreen) {
      barnaVideo.webkitRequestFullscreen();
    } else if (barnaVideo.msRequestFullscreen) {
      barnaVideo.msRequestFullscreen();
    }
  });
</script>
