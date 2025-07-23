window.addEventListener("load", () => {
  new Swiper(".header_wrap", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});

let swiperCard = new Swiper(".service_image--wrapper", {
  loop: false,
  grabCursor: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  spaceBetween: 5,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".service-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 1,
    },
    968: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");

  navToggle.addEventListener("click", (e) => {
    const icon = e.target.closest("ion-icon");
    if (!icon) return;

    const name = icon.getAttribute("name");

    if (name === "menu" || name === "close") {
      // Toggle both icons
      const open = navToggle.querySelector(".open");
      const close = navToggle.querySelector(".close");
      open.classList.toggle("none");
      close.classList.toggle("none");

      // Toggle body scroll
      document.body.classList.toggle("no-scroll");
    }
  });
});
