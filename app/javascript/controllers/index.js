// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// Import and register your controllers
import RequiredInputController from "./required_input_controller"

application.register("required-input", RequiredInputController)
