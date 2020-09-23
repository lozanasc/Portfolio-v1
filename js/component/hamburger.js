const hamburger = document.querySelector('.hamburger-container')
hamburger.addEventListener('click',() => {
    let isPressed = document.querySelector('.hamburger-pressed ul')
    isPressed.style.display = 'none'
})