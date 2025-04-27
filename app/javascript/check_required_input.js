document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('js-required-input1');
  const input2 = document.getElementById('js-required-input2');
  if (input && input2) {
    input.addEventListener('input', updateValue);
    input2.addEventListener('input', updateValue);
    function updateValue() {
      if (!input.value || !input.value.match(/\S/g) || !input2.value) {
        document.getElementById('js-main-action').classList.add('is-disabled');
        document.getElementById('js-main-action').classList.remove('animate__animated', 'animate__rubberBand');
      } else {
        document.getElementById('js-main-action').classList.remove('is-disabled');
        document.getElementById('js-main-action').classList.add('animate__animated', 'animate__rubberBand');
      }
    }
  }
})
