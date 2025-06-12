document.addEventListener("DOMContentLoaded", () => {
  const allVideos = [];

  // 1. Handle inline <video> elements
  document.querySelectorAll(".video-click-fullscreen").forEach((video) => {
    allVideos.push(video);

    // Wrap in overlay if not already done
    if (!video.parentElement.classList.contains("video-wrapper")) {
      const wrapper = document.createElement("div");
      wrapper.className = "aspect-ratio aspect-ratio--16x9 pointer video-wrapper";

      video.parentNode.insertBefore(wrapper, video);
      wrapper.appendChild(video);

      const overlay = document.createElement("div");
      overlay.className = "play-overlay";
      overlay.innerHTML = "▶";
      wrapper.appendChild(overlay);
    }

    video.addEventListener("click", () => {
      allVideos.forEach(v => v !== video && v.pause());
      video.muted = false;
      video.play();
      requestFullscreen(video);
      hideOverlay(video);
    });

    video.addEventListener("pause", () => showOverlay(video));
    video.addEventListener("ended", () => showOverlay(video));
  });

  // 2. Global handler for image-based video launches
  window.openVideo = function (src) {
    const video = document.getElementById('fullscreenVideo');
    allVideos.push(video);
    allVideos.forEach(v => v !== video && v.pause());

    video.src = src;
    video.classList.remove('dn');
    video.muted = false;
    video.play();
    requestFullscreen(video);
  };

  function requestFullscreen(el) {
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
  }

  function showOverlay(video) {
    const overlay = video.parentElement.querySelector(".play-overlay");
    if (overlay) overlay.style.display = "flex";
  }

  function hideOverlay(video) {
    const overlay = video.parentElement.querySelector(".play-overlay");
    if (overlay) overlay.style.display = "none";
  }
});
