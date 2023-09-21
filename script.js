const myLibrary = [];
const newButton = document.querySelector('.header-button');
const inputPage = document.querySelector('.input-page');
const inputForm = document.querySelector('.input-form');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target).entries());
    myLibrary.push(formData);
})

newButton.addEventListener('click', () => {
    inputPage.classList.toggle('active')
})

inputPage.addEventListener('click', () => {
    inputPage.classList.toggle('active')
})

inputForm.addEventListener('click', (e) => {
    e.stopPropagation();
})

submitButton.addEventListener('click', () => {

})