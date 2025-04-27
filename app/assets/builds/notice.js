(() => {
  // app/javascript/notice.js
  document.addEventListener("DOMContentLoaded", () => {
    const element = document.querySelector(".o-flash");
    if (element) {
      element.addEventListener("animationend", () => {
        element.classList.add("is-hidden");
      });
    }
  });
})();
//# sourceMappingURL=assets/notice.js.map
