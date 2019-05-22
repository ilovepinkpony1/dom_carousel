'use strict';

const carousel = document.querySelector('.carousel');
const nextButton = document.querySelector('.button-next');
const prevButton = document.querySelector('.button-previous');

nextButton.addEventListener('click', () => {
  carousel.scrollLeft += 390;

  if (carousel.scrollLeft > 0) {
    prevButton.classList.remove('button-disabled');
    prevButton.classList.add('button-active');
  }

  if (carousel.scrollLeft === 910) {
    nextButton.classList.remove('button-active');
    nextButton.classList.add('button-disabled');
  }
});

prevButton.addEventListener('click', () => {
  carousel.scrollLeft -= 390;

  if (carousel.scrollLeft < 910) {
    nextButton.classList.remove('button-disabled');
    nextButton.classList.add('button-active');
  }

  if (carousel.scrollLeft === 0) {
    prevButton.classList.remove('button-active');
    prevButton.classList.add('button-disabled');
  }
});
