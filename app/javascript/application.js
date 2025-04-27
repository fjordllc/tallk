// Entry point for the build script in your package.json
import 'tiny-slider/dist/tiny-slider.css';
import { tns } from 'tiny-slider/src/tiny-slider';

// Import Font Awesome
import '@fortawesome/fontawesome-free/js/all';

// Make tns available globally
window.tns = tns;

// Import our custom scripts
import './check_required_input.js'
import './notice.js'
import './slide.js'
