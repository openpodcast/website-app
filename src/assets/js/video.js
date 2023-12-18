document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("playButton")
    .addEventListener("click", function () {
      console.log("click");
      document.getElementById("videoModal").style.display = "block";
      document.getElementById("videoPlayer").play();
    });

  document.getElementById("videoModal").addEventListener("click", function () {
    console.log("click modal");
    this.style.display = "none";
    document.getElementById("videoPlayer").pause();
  });
});
