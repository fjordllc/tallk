document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event fired');
  initializeRequireInput();
});

document.addEventListener('turbo:load', () => {
  console.log('turbo:load event fired');
  initializeRequireInput();
});

document.addEventListener('turbo:render', () => {
  console.log('turbo:render event fired');
  initializeRequireInput();
});

function initializeRequireInput() {
  console.log('initializeRequireInput called');
  const input1 = document.getElementById('js-required-input1');
  const input2 = document.getElementById('js-required-input2');
  const mainAction = document.getElementById('js-main-action');
  
  console.log('Elements found:', { input1, input2, mainAction });
  
  if (input1 && input2 && mainAction) {
    // 初期状態の確認
    checkInputs(input1, input2, mainAction);
    
    // イベントリスナーの設定
    input1.addEventListener('input', () => {
      console.log('input1 changed:', input1.value);
      checkInputs(input1, input2, mainAction);
    });
    
    input2.addEventListener('input', () => {
      console.log('input2 changed:', input2.value);
      checkInputs(input1, input2, mainAction);
    });
  }
}

function checkInputs(input1, input2, mainAction) {
  console.log('checkInputs called with values:', input1.value, input2.value);
  
  if (!input1.value || !input1.value.match(/\S/g) || !input2.value) {
    console.log('Inputs not valid, disabling button');
    mainAction.classList.add('is-disabled');
    mainAction.classList.remove('animate__animated', 'animate__rubberBand');
  } else {
    console.log('Inputs valid, enabling button');
    mainAction.classList.remove('is-disabled');
    mainAction.classList.add('animate__animated', 'animate__rubberBand');
  }
}
