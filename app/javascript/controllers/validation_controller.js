import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    const input1 = document.getElementById('js-required-input1');
    const input2 = document.getElementById('js-required-input2');
    const mainAction = document.getElementById('js-main-action');
    
    if (input1 && input2 && mainAction) {
      this.checkInputs(input1, input2, mainAction);
      
      input1.addEventListener('input', () => {
        this.checkInputs(input1, input2, mainAction);
      });
      
      input2.addEventListener('input', () => {
        this.checkInputs(input1, input2, mainAction);
      });
    }
  }

  checkInputs(input1, input2, mainAction) {
    if (!input1.value || !input1.value.match(/\S/g) || !input2.value) {
      mainAction.classList.add('is-disabled');
      mainAction.classList.remove('animate__animated', 'animate__rubberBand');
    } else {
      mainAction.classList.remove('is-disabled');
      mainAction.classList.add('animate__animated', 'animate__rubberBand');
    }
  }
}
