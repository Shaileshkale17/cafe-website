let slides = document.querySelectorAll(".slide-container");
let index = 0;
setInterval(() => {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}, 3000);