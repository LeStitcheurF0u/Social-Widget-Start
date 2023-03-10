//Déclaration de variables
const socialBtn = document.querySelector('#social')
const socialWindow = document.querySelector('.socialMedia')
const close = document.querySelector('#close')
const list = document.querySelectorAll('.sci li')

socialBtn.addEventListener('click', () => {
    socialWindow.classList.add('show');
})