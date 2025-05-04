import { Controller } from "@hotwired/stimulus"
import Splide from '@splidejs/splide';

export default class extends Controller {
  connect() {
    const slider = document.querySelectorAll('.js-slider')
    if (slider.length === 0) return;

    const splide = new Splide('.js-slider', {
      type: 'slide',
      pagination: true,
      arrows: true,
    });
      
    splide.mount();
  }
}
