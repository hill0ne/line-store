let swiper = new Swiper(".swiper", {
    navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    autoplay: { 
        delay: 5000, 
        disableOnInteraction: false, 
      },
    // loop: true,
  });