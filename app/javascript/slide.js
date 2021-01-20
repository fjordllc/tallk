document.addEventListener('DOMContentLoaded', () => {
  const slider = tns({
    container: '.js-slider',
    items: 1,
    loop: false,
    touch: false,
    nav: false,
    arrowKeys: true
  })

  const target = document.querySelector('.js-mikan')
  if (target) {
    target.innerHTML = Mikan(target.innerHTML)
  }
})
