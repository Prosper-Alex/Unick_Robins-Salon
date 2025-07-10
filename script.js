document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("dragstart", (event) => event.preventDefault());
});

let swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
