document.addEventListener("DOMContentLoaded", function () {
  const videoModal = document.getElementById("videoModal");
  const videoPlayer = document.getElementById("videoPlayer");

  document.getElementById("playButton").addEventListener("click", function () {
    videoModal.style.display = "block";
    videoPlayer.play();
  });

  document.getElementById("closeButton").addEventListener("click", function () {
    videoModal.style.display = "none";
    videoPlayer.pause();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      videoModal.style.display = "none";
      videoPlayer.pause();
    }
  });

  videoModal.addEventListener("click", function (event) {
    if (event.target === videoModal) {
      this.style.display = "none";
      videoPlayer.pause();
    }
  });
});
