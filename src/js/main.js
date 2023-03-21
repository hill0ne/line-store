let swiper = new Swiper(".swiper-main", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },

  autoplay: {
    delay: 3000,
  },
  loop: true,
});

let swiper2 = new Swiper(".swiper-story", {
  cssMode: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});

let swiper3 = new Swiper(".swiper-new", {
  cssMode: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },
});

let swiper4 = new Swiper(".swiper-review", {
  cssMode: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },
});