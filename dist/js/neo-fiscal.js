window.addEventListener("load", () => {
  const videos = document.querySelectorAll(".neo-fiscal__video-player");
  videos.forEach((video) => {
    video.nextElementSibling.addEventListener("click", () => {
      video.setAttribute("controls", "");
      video.play();
      video.nextElementSibling.classList.add("hidden");
    });
  });
});
