// HEADER SWIPER
new Swiper(".header_wrap", {
  loop: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  scrollbar: { el: ".swiper-scrollbar" },
});

// SERVICE SWIPER
new Swiper(".service_image--wrapper", {
  loop: false,
  grabCursor: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  spaceBetween: 10,
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: {
    el: ".service-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
    600: { slidesPerView: 1 },
    968: { slidesPerView: 3 },
    1400: { slidesPerView: 4 },
  },
});

// TESTIMONIAL SWIPER
new Swiper(".testimonial_blog", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  slidesPerView: 1,
  centeredSlides: true,
  centeredSlidesBounds: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".testimonial-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".testimonial_blog .swiper-button-next",
    prevEl: ".testimonial_blog .swiper-button-prev",
  },
});

// NAV TOGGLE
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav_toggle");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  navToggle.addEventListener("click", () => {
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    document.body.classList.toggle("no-scroll");
  });
});
