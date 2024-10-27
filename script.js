window.addEventListener("scroll", () => {document.querySelector("nav").classList.toggle("scrolled", window.scrollY > 0)})

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
