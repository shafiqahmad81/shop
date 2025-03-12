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

  const counter2 = document.getElementById("counter-2");
  document.getElementById("increase-2").addEventListener("click", () => {
    counter2.value = parseInt(counter2.value) + 1;
  });

  document.getElementById("decrease-2").addEventListener("click", () => {
    if (parseInt(counter2.value) > 1) {
      counter2.value = parseInt(counter2.value) - 1;
    }
  });

  const counter3 = document.getElementById("counter-3");
  document.getElementById("increase-3").addEventListener("click", () => {
    counter3.value = parseInt(counter3.value) + 1;
  });

  document.getElementById("decrease-3").addEventListener("click", () => {
    if (parseInt(counter3.value) > 1) {
      counter3.value = parseInt(counter3.value) - 1;
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

