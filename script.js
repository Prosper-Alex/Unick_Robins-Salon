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
    980: { slidesPerView: 3 },
    1025: { slidesPerView: 4 },
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

// For Book an appointment
const bookAppointmentForm = document.getElementById("bookAppointment");
const nameValue = document.getElementById("name");
const serviceValue = document.querySelector("#bookAppointment select");
const dateValue = document.getElementById("date");
const timeValue = document.getElementById("time");
const phoneNumber = "2348030897425";

bookAppointmentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameValue.value.trim();
  const service = serviceValue.value.trim();
  const date = dateValue.value.trim();
  const time = timeValue.value.trim();

  if (!name || !service || !date || !time) {
    alert("Please fill in all fields.");
    return;
  }

  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    alert("Please select a valid date that is not in the past.");
    return;
  }

  const dateString = new Date(date).toDateString();

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hello,%20I%20would%20like%20to%20book%20an%20appointment.%0A%0AName:%20${encodeURIComponent(
    name
  )}%0AService:%20${encodeURIComponent(service)}%0ADate:%20${encodeURIComponent(
    dateString
  )}%0ATime:%20${encodeURIComponent(time)}%0A%0AThank%20you!`;

  window.open(whatsappUrl, "_blank");
  bookAppointmentForm.reset();
  alert("Your appointment request has been sent!");
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

const appointmentDetails = {
  name: "Prosper Alex",
  service: "Jungle Locks",
  date: "13 August, 2024",
  time: "13:00 PM",
};

const whatsappMessage = `
Hello, I'd like to book an appointment.

Name: ${appointmentDetails.name}
Service: ${appointmentDetails.service}
Date: ${appointmentDetails.date}
Time: ${appointmentDetails.time}

Thank you!

`;

console.log(whatsappMessage);
