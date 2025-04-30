import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="required-input"
export default class extends Controller {
  static targets = ["input1", "input2", "mainAction"]

  connect() {
    this.updateValue()
  }

  updateValue() {
    if (!this.input1Target.value || !this.input1Target.value.match(/\S/g) || !this.input2Target.value) {
      this.mainActionTarget.classList.add('is-disabled')
      this.mainActionTarget.classList.remove('animate__animated', 'animate__rubberBand')
    } else {
      this.mainActionTarget.classList.remove('is-disabled')
      this.mainActionTarget.classList.add('animate__animated', 'animate__rubberBand')
    }
  }
}
