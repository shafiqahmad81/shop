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
  document.getElementById("increase").addEventListener("click", () => {
    counter.value = parseInt(counter.value) + 1;
  });

  document.getElementById("decrease").addEventListener("click", () => {
    if (parseInt(counter.value) > 1) {
      counter.value = parseInt(counter.value) - 1;
    }
  });

  // Range

  const toggleButton = document.getElementById("toggleButton");
  const dropdownContent = document.getElementById("dropdownContent");
  const caret = document.getElementById("caret");

  toggleButton.addEventListener("click", () => {
      dropdownContent.classList.toggle("hidden");
      caret.classList.toggle("rotate-180");
  });

  // dropdown 

