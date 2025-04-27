(() => {
  // app/javascript/check_required_input.js
  document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("js-required-input1");
    const input2 = document.getElementById("js-required-input2");
    if (input && input2) {
      let updateValue2 = function() {
        if (!input.value || !input.value.match(/\S/g) || !input2.value) {
          document.getElementById("js-main-action").classList.add("is-disabled");
          document.getElementById("js-main-action").classList.remove("animate__animated", "animate__rubberBand");
        } else {
          document.getElementById("js-main-action").classList.remove("is-disabled");
          document.getElementById("js-main-action").classList.add("animate__animated", "animate__rubberBand");
        }
      };
      var updateValue = updateValue2;
      input.addEventListener("input", updateValue2);
      input2.addEventListener("input", updateValue2);
    }
  });
})();
//# sourceMappingURL=assets/check_required_input.js.map
