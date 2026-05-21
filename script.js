// HEADER SWIPER
new Swiper(".header_wrap", {
  loop: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: {
    el: ".header_image--wrapper .swiper-pagination",
    clickable: true,
  },
  scrollbar: { el: ".header_image--wrapper .swiper-scrollbar" },
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
  breakpoints: {
    600: { slidesPerView: 1 },
    980: { slidesPerView: 3 },
    1025: { slidesPerView: 4 },
  },
});

// TESTIMONIAL SWIPER
new Swiper(".testimonial_blog", {
  loop: false,
  grabCursor: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  spaceBetween: 1,
  slidesPerView: 1,
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

document.querySelectorAll('.navigation a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    const checkbox = document.getElementById("checkbox");

    if (checkbox) {
      checkbox.checked = false;
    }

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", link.getAttribute("href"));
  });
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

document.querySelectorAll(".pricingSwiper").forEach((swiperElement) => {
  new Swiper(swiperElement, {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: swiperElement.querySelector(".swiper-pagination"),
      clickable: true,
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
});
// For Book an appointment
const bookAppointmentForm = document.getElementById("bookAppointment");
const nameValue = document.getElementById("name");
const phoneNumberValue = document.getElementById("phone");
const serviceValue = document.querySelector("#bookAppointment select");
const dateValue = document.getElementById("date");
const timeValue = document.getElementById("time");

const paymentModal = document.getElementById("payment-modal");
const confirmPaymentBtn = document.getElementById("confirm-payment");
const cancelPaymentBtn = document.getElementById("cancel-payment");

const receiverPhoneNumber = "2348030897425"; // Your WhatsApp number

let appointmentDetails = {};

// Set minimum date to two days ahead in the date input
window.addEventListener("DOMContentLoaded", () => {
  const minimumAppointmentDate = new Date();
  minimumAppointmentDate.setDate(minimumAppointmentDate.getDate() + 2);
  const isoDate = minimumAppointmentDate.toISOString().split("T")[0];
  dateValue.setAttribute("min", isoDate);
});

// Handle form submission
bookAppointmentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameValue.value.trim();
  const phone = phoneNumberValue.value.trim();
  const service = serviceValue.value.trim();
  const date = dateValue.value.trim();
  const time = timeValue.value.trim();

  if (!name || !phone || !service || !date || !time) {
    alert("Please fill in all fields.");
    return;
  }

  const selectedDate = new Date(date);
  const minimumAppointmentDate = new Date();
  minimumAppointmentDate.setHours(0, 0, 0, 0);
  minimumAppointmentDate.setDate(minimumAppointmentDate.getDate() + 2);

  if (selectedDate < minimumAppointmentDate) {
    alert("Appointments must be scheduled at least two days in advance.");
    return;
  }

  // Save data to global object
  appointmentDetails = {
    name,
    phone,
    service,
    date: selectedDate.toDateString(),
    time,
  };

  // Show modal
  paymentModal.classList.remove("hidden");
});

// Handle confirm button in modal
confirmPaymentBtn.addEventListener("click", () => {
  const message = `
Hello, I would like to book an appointment.

Name: ${appointmentDetails.name}
Phone Number: ${appointmentDetails.phone}
Service: ${appointmentDetails.service}
Date: ${appointmentDetails.date}
Time: ${appointmentDetails.time}


Thank you!
  `;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${receiverPhoneNumber}&text=${encodeURIComponent(
    message,
  )}`;

  window.open(whatsappUrl, "_blank");
  bookAppointmentForm.reset();
  paymentModal.classList.add("hidden");
  alert("Your appointment request has been sent!");
});

// Handle cancel button in modal
cancelPaymentBtn.addEventListener("click", () => {
  paymentModal.classList.add("hidden");
});

// const appointmentDetails = {
//   name: "Prosper Alex",
//   phoneNumber: "08119638793",
//   service: "Jungle Locks",
//   date: "13 August, 2024",
//   time: "13:00 PM",
// };
// NAV TOGGLE
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav_toggle");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  navToggle.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    closeIcon.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });
});
