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
    nextEl: ".pricing-button-next",
    prevEl: ".pricing-button-prev",

    clickable: true,
    dynamicBullets: true,
  },

  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
    600: { slidesPerView: 1 },
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
  watchOverflow: true,
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

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navigation");

  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const tabButtons = document.querySelectorAll(".tab-btn");
const dashboards = document.querySelectorAll(".pricing-dashboard");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Show relevant dashboard
    dashboards.forEach((dash) => dash.classList.remove("active"));
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

const pricingSwiper = new Swiper(".pricingSwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1.2,
    },
    1024: {
      slidesPerView: 2,
    },
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
