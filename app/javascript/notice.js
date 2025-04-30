document.addEventListener('turbo:load', () => {
  initializeNotice();
});

document.addEventListener('turbo:render', () => {
  initializeNotice();
});

function initializeNotice() {
  const element = document.querySelector('.o-flash');
  if (element) {
    element.addEventListener('animationend', () => {
      element.classList.add('is-hidden');
    });
  }
}
