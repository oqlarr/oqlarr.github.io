---
author: Gerardo Guerrero
categories:
- Commercial work
- Reels
date: "2025-05-03"
draft: false
excerpt: Trabajos realizados para marcas y clientes que buscan contar su historia con estilo y propósito. Desde productos hasta lifestyle, mis videos combinan dirección visual, edición precisa y un enfoque creativo para conectar con su audiencia según tendencias y targets comerciales.
layout: single
subtitle: Canon R8 EOS, iPhone 16 Pro Max, Gimbal DJI Osmo 7P
tags:
- iPhone
- Gimbal
- Canon 
featured: true
title: Trabajos publicitarios/RRSS
---


<div class="flex flex-wrap justify-center items-start">
  
  <!-- Fashion film -->
  <div class="w-100 w-50-m w-33-l pa3">
    <div class="aspect-ratio aspect-ratio--1x1 bg-light-gray">
      <img src="/img/thumbnails/ana_ceci.png" alt="Campaña fashion film"
           class="aspect-ratio--object cover pointer dim"
           onclick="openVideo('/vid/anaceci_portfolio.mp4')">
    </div>
    <p class="f5 mt2 tc">✨Fashionfilm en Barcelona✨</p>
  </div>
  
  <!-- Makeup masterclass -->
  <div class="w-100 w-50-m w-33-l pa3">
    <div class="aspect-ratio aspect-ratio--1x1 bg-light-gray">
      <img src="/img/thumbnails/makeup_masterclass.png" alt="Reel makeup masterclass"
           class="aspect-ratio--object cover pointer dim"
           onclick="openVideo('/vid/makeup_masterclass_720.mp4')">
    </div>
    <p class="f5 mt2 tc">Reel makeup masterclass</p>
  </div>
  
  <!-- Real estate -->
  <div class="w-100 w-50-m w-33-l pa3">
    <div class="aspect-ratio aspect-ratio--1x1 bg-light-gray">
      <img src="/img/thumbnails/bernardi_sign.png" alt="Campaña real estate"
           class="aspect-ratio--object cover pointer dim"
           onclick="openVideo('/vid/bernadi.mp4')">
    </div>
    <p class="f5 mt2 tc">Campaña de real estate</p>
  </div>
  
  <!-- Thumbnail 1 -->
  <div class="w-100 w-50-m w-33-l pa3">
    <div class="aspect-ratio aspect-ratio--1x1 bg-light-gray">
      <img src="/img/thumbnails/1promo Vanessa.png" alt="Campaña"
           class="aspect-ratio--object cover pointer dim"
           onclick="openVideo('/vid/1promo Vanessa.mp4')">
    </div>
    <p class="f5 mt2 tc">Campaña de rebranding</p>
  </div>

  <!-- Thumbnail 2 -->
  <div class="w-100 w-50-m w-33-l pa3">
    <div class="aspect-ratio aspect-ratio--1x1 bg-light-gray">
      <img src="/img/thumbnails/ReelVanLargo1.png" alt="Storytelling"
           class="aspect-ratio--object cover pointer dim"
           onclick="openVideo('/vid/ReelVanLargo1.mp4')">
    </div>
    <p class="f5 mt2 tc">Storytelling para campaña de rebranding</p>
  </div>

  <!-- Thumbnail 3 -->
  <div class="w-100 w-50-m w-33-l pa3">
    <div class="aspect-ratio aspect-ratio--1x1 bg-light-gray">
      <img src="/img/thumbnails/Mariapromo1.png" alt="Maria promo"
           class="aspect-ratio--object cover pointer dim"
           onclick="openVideo('/vid/Mariapromo1.mp4')">
    </div>
    <p class="f5 mt2 tc">Campaña de rebranding</p>
  </div>

  <!-- Thumbnail 4 -->
  <div class="w-100 w-50-m w-33-l pa3">
    <div class="aspect-ratio aspect-ratio--1x1 bg-light-gray">
      <img src="/img/thumbnails/mariapromo22_1.png" alt="Behind the scenes"
           class="aspect-ratio--object cover pointer dim"
           onclick="openVideo('/vid/mariapromo22_1.mp4')">
    </div>
    <p class="f5 mt2 tc">Reel behind-the-scenes campaña de rebranding</p>
  </div>

  <!-- Thumbnail 5 -->
  <div class="w-100 w-50-m w-33-l pa3">
    <div class="aspect-ratio aspect-ratio--1x1 bg-light-gray">
      <img src="/img/thumbnails/logoProcess_1.png" alt="Logo process"
           class="aspect-ratio--object cover pointer dim"
           onclick="openVideo('/vid/logoProcess_1.mp4')">
    </div>
    <p class="f5 mt2 tc">Reel de campaña rebranding</p>
  </div>

  <!-- Thumbnail 6 -->
  <div class="w-100 w-50-m w-33-l pa3">
    <div class="aspect-ratio aspect-ratio--1x1 bg-light-gray">
      <img src="/img/thumbnails/andycorr.png" alt="Black Friday campaña"
           class="aspect-ratio--object cover pointer dim"
           onclick="openVideo('/vid/andycorr.mp4')">
    </div>
    <p class="f5 mt2 tc">Campaña de Black Friday</p>
  </div>

  <!-- Thumbnail 7 -->
  <div class="w-100 w-50-m w-33-l pa3">
    <div class="aspect-ratio aspect-ratio--1x1 bg-light-gray">
      <img src="/img/thumbnails/1eluska.png" alt="Black Friday"
           class="aspect-ratio--object cover pointer dim"
           onclick="openVideo('/vid/1eluska.mp4')">
    </div>
    <p class="f5 mt2 tc">Campaña de Black Friday</p>
  </div>

  <!-- Thumbnail 8 -->
  <div class="w-100 w-50-m w-33-l pa3">
    <div class="aspect-ratio aspect-ratio--1x1 bg-light-gray">
      <img src="/img/thumbnails/bikezoomo.png" alt="Promocional lifestyle"
           class="aspect-ratio--object cover pointer dim"
           onclick="openVideo('/vid/bikezoomo.mp4')">
    </div>
    <p class="f5 mt2 tc">Reel lifestyle para campaña promocional para Zoomo Australia</p>
  </div>

</div>

  <!-- Hidden fullscreen video element -->
<video id="fullscreenVideo" controls class="dn" style="width:100%; height:auto;"></video>

<script>
    
    const fullscreenVideo = document.getElementById('fullscreenVideo');
  
    function openVideo(src) {
      // Pause other videos
      document.querySelectorAll('video').forEach(v => {
        if (v !== fullscreenVideo) v.pause();
      });

    // Set src and show
    fullscreenVideo.src = src;
    fullscreenVideo.classList.remove('dn');
    fullscreenVideo.style.display = 'block'; // ensure it's shown
    fullscreenVideo.play();

    // Fullscreen
    if (fullscreenVideo.requestFullscreen) {
      fullscreenVideo.requestFullscreen();
    } else if (fullscreenVideo.webkitRequestFullscreen) {
      fullscreenVideo.webkitRequestFullscreen();
    } else if (fullscreenVideo.msRequestFullscreen) {
      fullscreenVideo.msRequestFullscreen();
    }
    }

    function hideFullscreenVideo() {
      fullscreenVideo.pause();
      fullscreenVideo.src = "";
      fullscreenVideo.classList.add('dn');
      fullscreenVideo.style.display = 'none';
    }
  
    // Hide on fullscreen exit
    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement) {
        hideFullscreenVideo();
      }
    });
  
    document.addEventListener("webkitfullscreenchange", () => {
      if (!document.webkitFullscreenElement) {
        hideFullscreenVideo();
      }
    });
  
    document.addEventListener("msfullscreenchange", () => {
      if (!document.msFullscreenElement) {
        hideFullscreenVideo();
      }
    });
  
    // Hide when video ends
    fullscreenVideo.addEventListener("ended", hideFullscreenVideo);
</script>

