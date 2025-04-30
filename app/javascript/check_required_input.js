document.addEventListener('DOMContentLoaded', () => {
  initializeRequireInput();
});

document.addEventListener('turbo:load', () => {
  initializeRequireInput();
});

document.addEventListener('turbo:render', () => {
  initializeRequireInput();
});

function initializeRequireInput() {
  const input1 = document.getElementById('js-required-input1');
  const input2 = document.getElementById('js-required-input2');
  const mainAction = document.getElementById('js-main-action');
  
  if (input1 && input2 && mainAction) {
    // 初期状態の確認
    checkInputs(input1, input2, mainAction);
    
    // イベントリスナーの設定
    input1.addEventListener('input', () => {
      checkInputs(input1, input2, mainAction);
    });
    
    input2.addEventListener('input', () => {
      checkInputs(input1, input2, mainAction);
    });
  }
}

function checkInputs(input1, input2, mainAction) {
  
  if (!input1.value || !input1.value.match(/\S/g) || !input2.value) {
    mainAction.classList.add('is-disabled');
    mainAction.classList.remove('animate__animated', 'animate__rubberBand');
  } else {
    mainAction.classList.remove('is-disabled');
    mainAction.classList.add('animate__animated', 'animate__rubberBand');
  }
}
