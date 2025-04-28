// Turboを使用する場合は、DOMContentLoadedの代わりにturbo:loadイベントを使用
document.addEventListener('turbo:load', () => {
  initializeNotice();
});

// ページがキャッシュから復元された場合にも実行
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
