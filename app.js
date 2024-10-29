function startAutoPlay() {
  intervalId = setInterval(() => {
    let slides = document.querySelectorAll(".slide");

    document.querySelector(".slider").appendChild(slides[0]);
  }, 3500);
}

document.querySelector(".container").addEventListener("mouseenter", () => {
  clearInterval(intervalId);
});

document.querySelector(".container").addEventListener("mouseleave", () => {
  startAutoPlay();
});

startAutoPlay();

document.querySelector(".pre").addEventListener("click", () => {
  let slides = document.querySelectorAll(".slide");

  document.querySelector(".slider").prepend(slides[slides.length - 1]);
});

document.querySelector(".next").addEventListener("click", () => {
  let slides = document.querySelectorAll(".slide");

  document.querySelector(".slider").appendChild(slides[0]);
});
