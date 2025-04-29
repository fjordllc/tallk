import { Controller } from "@hotwired/stimulus"

// This controller handles the validation of required inputs and updates the state of a button
export default class extends Controller {
  // Define targets that this controller will interact with
  static targets = ["input1", "input2", "mainAction"]
  
  // Called when the controller is connected to the DOM
  connect() {
    // Set initial state
    this.updateValue()
  }
  
  // Update the state of the main action button based on input values
  updateValue() {
    const input1Value = this.input1Target.value
    const input2Value = this.input2Target.value
    
    // Check if inputs are valid
    if (!input1Value || !input1Value.match(/\S/g) || !input2Value) {
      // Disable the button if inputs are invalid
      this.mainActionTarget.classList.add('is-disabled')
      this.mainActionTarget.classList.remove('animate__animated', 'animate__rubberBand')
    } else {
      // Enable and animate the button if inputs are valid
      this.mainActionTarget.classList.remove('is-disabled')
      this.mainActionTarget.classList.add('animate__animated', 'animate__rubberBand')
    }
  }
}
