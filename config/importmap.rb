# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin "@splidejs/splide", to: "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm"
pin_all_from "app/javascript/controllers", under: "controllers"
