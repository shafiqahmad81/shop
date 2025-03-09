import Swiper from 'swiper';
import { Navigation, } from 'swiper/modules';

var swiper = new Swiper(".mySwiper", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
  });

  // product page counter

  const counter = document.getElementById("counter");
    document.getElementById("increment").addEventListener("click", () => {
        counter.textContent = parseInt(counter.textContent) + 1;
    });
    document.getElementById("decrement").addEventListener("click", () => {
        let value = parseInt(counter.textContent);
        if (value > 1) counter.textContent = value - 1;
    });