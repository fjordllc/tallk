import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    const element = document.querySelector('.o-flash');
    if (element) {
      element.addEventListener('animationend', () => {
        element.classList.add('is-hidden');
      });
    }
  }
}
