import Swiper from 'swiper';
import { Navigation, } from 'swiper/modules';

//  Slider 
  
var swiper = new Swiper(".mySwiper", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 32,
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

const hamburgerIcon = document.getElementById('hamburger');
const menuNav = document.getElementById('menu')

hamburgerIcon.addEventListener('click', () => {
  menuNav.classList.toggle('hidden')
})


const asideMenu = document.getElementById("asidemenu");
const asideBtn = document.getElementById('asidebtn');

asideBtn.addEventListener('click', () => {
  asideMenu.classList.toggle('hidden')
  asideMenu.classList.add('absolute')
})


 
  // Range

  const toggleButton = document.getElementById("toggleButton");
  const dropdownContent = document.getElementById("dropdownContent");
  const caret = document.getElementById("caret");

  toggleButton.addEventListener("click", () => {
      dropdownContent.classList.toggle("hidden");
      caret.classList.toggle("rotate-180");
  });

  

