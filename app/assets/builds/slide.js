(() => {
  // app/javascript/slide.js
  document.addEventListener("DOMContentLoaded", () => {
    const sliderContainer = document.querySelector(".js-slider");
    if (sliderContainer) {
      const slider = tns({
        container: ".js-slider",
        items: 1,
        loop: false,
        touch: false,
        nav: false,
        arrowKeys: true
      });
    } else {
      console.log("Slider container not found, skipping initialization");
    }
    const target = document.querySelector(".js-mikan");
    if (target && typeof Mikan === "function") {
      target.innerHTML = Mikan(target.innerHTML);
    }
  });
})();
//# sourceMappingURL=assets/slide.js.map
