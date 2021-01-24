const prev = document.getElementById('prevBtn')
const next = document.getElementById('nextBtn')
const slider = document.querySelector('.slider')

prev.addEventListener('click', () => {
  slider.style.transform = 'translateX(0)'
})

next.addEventListener('click', () => {
  slider.style.transform = 'translateX(-50%)'
})
