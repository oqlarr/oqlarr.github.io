---
author: Gerardo Guerrero
categories:
- Cinematic shorts
- Reels
date: "2025-05-03"
draft: false
excerpt: Colección de piezas donde experimento con narrativa visual, guión propio, jugando con voz en off y estilo cinematográfico. Utilizo cámara, iPhone Pro Max, y Gimbals DJI para lograr tomas fluidas, encuadres precisos y una atmósfera que se siente auténtica.
layout: single
subtitle: iPhone 16 Pro Max, Gimbal DJI Osmo 7P
tags:
- iPhone
- Gimbal
featured: true
title: Shorts cinematográficos
---

<div class="flex flex-wrap justify-center items-start">

  <div class="w-100 pa3 center">
    <div class="aspect-ratio aspect-ratio--16x9">
      <video id="cafeVideo"
             class="aspect-ratio--object pointer"
             preload="auto"
             playsinline>
        <source src="/vid/oqlarr_cafe_comprimido720p.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <p class="f5 mt3 tc">Mini clip de resiliencia y amor propio.</p>
  </div>

</div>

<script>
  const cafeVideo = document.getElementById("cafeVideo");

  cafeVideo.addEventListener("click", function () {
    cafeVideo.muted = false;
    cafeVideo.play();

    if (cafeVideo.requestFullscreen) {
      cafeVideo.requestFullscreen();
    } else if (cafeVideo.webkitRequestFullscreen) {
      cafeVideo.webkitRequestFullscreen();
    } else if (cafeVideo.msRequestFullscreen) {
      cafeVideo.msRequestFullscreen();
    }
  });
</script>
