const myLibrary = [];
const newButton = document.querySelector('.header-button');
const inputPage = document.querySelector('.input-page');
const inputForm = document.querySelector('.input-form');
const form = document.querySelector('form');
const canvas = document.querySelector('.main-body');
const card = document.querySelector('.done-card')
const doneButton = document.querySelector('.done-button')
const removeButton = document.querySelector('.remove-button');

function addBooks() {
    canvas.replaceChildren();
    myLibrary.forEach(book => {
        book.id = myLibrary.indexOf(book);
        const newCard = card.cloneNode(true);
        newCard.style.display = 'grid'
        newCard.querySelector('#title').textContent = `"${book.title}"`;
        newCard.querySelector('#description').textContent = `${book.description}`;
        newCard.querySelector('#time').textContent = `${book.time}`;
        newCard.dataset.id = book.id;
        if (book.doneStatus == "on") {
            newCard.querySelector('.done-button').classList.add('green-button');
            newCard.querySelector('.done-button').textContent = `Done`;}
        newCard.querySelector('.done-button').addEventListener('click', (e) => {
            e.target.classList.toggle('green-button');
            toggleDoneStatus(e.target.parentNode.dataset.id, e.target)})
        newCard.querySelector('.remove-button').addEventListener('click', (e) => {
            myLibrary.splice(e.target.parentNode.dataset.id, 1);
            addBooks()
            if (!myLibrary.length) {
                canvas.innerHTML = `Nothing to show here. Add new tasks!`}})
        canvas.appendChild(newCard);})}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target).entries());
    myLibrary.push(formData);
    addBooks();
    inputPage.classList.toggle('active');})

newButton.addEventListener('click', () => {
    inputPage.classList.toggle('active');})

inputPage.addEventListener('click', () => {
    inputPage.classList.toggle('active');})

inputForm.addEventListener('click', (e) => {
    e.stopPropagation();})

function toggleDoneStatus(index, elem) {
    if (myLibrary[index].doneStatus == "on") {
        myLibrary[index].doneStatus = 'off';
        elem.textContent = 'Not Done';
        return}
    myLibrary[index].doneStatus = 'on';
        elem.textContent = 'Done';}

if (!myLibrary.length) {
    canvas.innerHTML = `Nothing to show here. Add new tasks!`}