const hamburgerIsPressed = document.querySelector('.hamburger-mobile__enabled')
const hamburgerButton = document.querySelector('.hamburger-mobile-nav')
hamburgerButton.addEventListener('click', ()=>{
    if(hamburgerIsPressed.style.display != 'inline'){
        hamburgerIsPressed.style.display = 'inline'
        hamburgerButton.classList.toggle('active')
    }
    else{
        hamburgerIsPressed.style.display = 'none'
        hamburgerButton.classList.toggle('active')
    }
})