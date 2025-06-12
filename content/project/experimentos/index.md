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

<div class="flex flex-wrap items-start justify-center">

  <div class="w-100 w-75-l pa3">
    <div class="aspect-ratio aspect-ratio--16x9">
      <video class="aspect-ratio--object pointer video-click-fullscreen"
             preload="auto"
             autoplay
             muted
             playsinline>
        <source src="/vid/hyperlapse_barna.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <p class="f5 mt3 tc">Hyperlapse de Barcelona en 45 segundos.</p>
  </div>
  
  <div class="w-100 w-75-l pa3">
    <div class="aspect-ratio aspect-ratio--16x9">
      <video class="aspect-ratio--object pointer video-click-fullscreen"
             preload="auto"
             autoplay
             muted
             playsinline
             poster="/img/thumbnails/bernardi_lobby.png">
        <source src="/vid/bernadi_hyperlapse.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <p class="f5 mt3 tc">Hyperlapse real estate.</p>
  </div>
  
</div>



<script>
  
    document.querySelectorAll(".video-click-fullscreen").forEach(function(video) {
    video.addEventListener("click", function () {
      // Unmute and play
      video.muted = false;
      video.play();

      // Fullscreen
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    });
    });
</script>