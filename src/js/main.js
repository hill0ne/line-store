let swiper = new Swiper(".swiper-main", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },

  autoplay: {
    delay: 3000,
  },
  loop: true,
});