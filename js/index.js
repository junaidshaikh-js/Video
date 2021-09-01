const video = document.querySelector("video");

const toggleBtn = document.querySelector("#toggle");

toggleBtn.addEventListener("click", () => {
  if (toggleBtn.checked) {
    video.pause();
  } else {
    video.play();
  }
});

// hide preloader when page get loaded
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});
