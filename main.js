'use strict';

const carousel = document.querySelector('.carousel');
const nextButton = document.querySelector('.carousel-next');
const prevButton = document.querySelector('.carousel-previous');

nextButton.addEventListener('click', () => {
  carousel.scrollLeft += 390;
});

prevButton.addEventListener('click', () => {
  carousel.scrollLeft -= 390;
})
