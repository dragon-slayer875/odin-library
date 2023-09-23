const myLibrary = [];
const newButton = document.querySelector('.header-button');
const inputPage = document.querySelector('.input-page');
const inputForm = document.querySelector('.input-form');
const form = document.querySelector('form');
const canvas = document.querySelector('.main-body');
const card = document.querySelector('.book-card')
const readButton = document.querySelector('.read-button')
const removeButton = document.querySelector('.remove-button');

function addBooks() {
    canvas.replaceChildren();
    myLibrary.forEach(book => {
        book.id = myLibrary.indexOf(book);
        const newCard = card.cloneNode(true);
        newCard.style.display = 'grid'
        newCard.querySelector('#title').textContent = `"${book.title}"`;
        newCard.querySelector('#author').textContent = `${book.author}`;
        newCard.querySelector('#pages').textContent = `${book.pages}`;
        newCard.dataset.id = book.id;
        if (book.readStatus == "on") {
            newCard.querySelector('.read-button').classList.add('green-button');
            newCard.querySelector('.read-button').textContent = `Read`;
        }
        newCard.querySelector('.read-button').addEventListener('click', (e) => {
            e.target.classList.toggle('green-button');
            toggleReadStatus(e.target.parentNode.dataset.id, e.target)
        })
        newCard.querySelector('.remove-button').addEventListener('click', (e) => {
            myLibrary.splice(e.target.parentNode.dataset.id, 1);
            addBooks()
            if (!myLibrary.length) {
                canvas.innerHTML = `Nothing to show here. Add new books!`
            }
        })
        canvas.appendChild(newCard);
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target).entries());
    myLibrary.push(formData);
    addBooks();
    inputPage.classList.toggle('active');
})

newButton.addEventListener('click', () => {
    inputPage.classList.toggle('active');
})

inputPage.addEventListener('click', () => {
    inputPage.classList.toggle('active');
})

inputForm.addEventListener('click', (e) => {
    e.stopPropagation();
})

function toggleReadStatus(index, elem) {
    if (myLibrary[index].readStatus == "on") {
        myLibrary[index].readStatus = 'off';
        elem.textContent = 'Not Read';
        return;
    }
    myLibrary[index].readStatus = 'on';
        elem.textContent = 'Read';
}

if (!myLibrary.length) {
    canvas.innerHTML = `Nothing to show here. Add new books!`
}