let mqTouch = window.matchMedia("(hover: none) and (pointer: coarse)");

const coreVideo = document.querySelector(".core-video"),
  videoToggleBtn = document.querySelector(".video-toggle-btn"),
  playIconWrapper = document.querySelector(".play-icon-wrapper"),
  pauseIconWrapper = document.querySelector(".pause-icon-wrapper");

const toggleVideoPlayState = () => {
  if (coreVideo.paused || coreVideo.ended) {
    coreVideo.play();
    videoToggleBtn.style.opacity = "0";
    playIconWrapper.style.display = "none";
    pauseIconWrapper.style.display = "flex";
  } else {
    coreVideo.pause();
    videoToggleBtn.style.opacity = "1";
    playIconWrapper.style.display = "flex";
    pauseIconWrapper.style.display = "none";
  }
};

coreVideo.addEventListener("click", toggleVideoPlayState);
videoToggleBtn.addEventListener("click", toggleVideoPlayState);

coreVideo.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    toggleVideoPlayState();
  }
});

// Remove on touch screen devices
if (mqTouch.matches) {
  videoToggleBtn.addEventListener("click", () => {
    videoToggleBtn.style.display = "none";
  });
}

// Pause video when scrolling out of view
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        coreVideo.pause();
        videoToggleBtn.style.opacity = "1";
        playIconWrapper.style.display = "flex";
        pauseIconWrapper.style.display = "none";
      }
    });
  },
  {
    threshold: 0.5, // Trigger when 50% of the video is out of view
  }
);

observer.observe(coreVideo);
