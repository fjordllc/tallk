import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', () => {

  const sliderContainer = document.querySelector('.js-slider');
  if (!sliderContainer) return;

  const splide = new Splide('.js-slider', {
    type: 'slide',
    perPage: 1,
    perMove: 1,
    gap: '1rem',
    pagination: true,
    arrows: true,
    drag: true,
    breakpoints: {
      640: {
        perPage: 2,
      },
      900: {
        perPage: 3,
      }
    }
  });
    
  splide.mount();
});
