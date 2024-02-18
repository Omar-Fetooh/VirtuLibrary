const booksArea = document.querySelector('.booksArea')
const newBookButton = document.querySelector('#new-book')
const modal = document.querySelector('dialog')
const closeButton = document.querySelector('#close-button')
const confirmButton = document.querySelector('#confirm-button')
// ========================================================================
const inputAuthor = document.querySelector('dialog form #author')
const inputTitle = document.querySelector('dialog form #title')
const inputPages = document.querySelector('dialog form #no-pages')
const inputStatus = document.querySelector('dialog form #status')

const myLibrary = [];

//Object Constructor
function Book(author, title, noOfPages, readStatus) {
    this.author = author;
    this.title = title;
    this.noOfPages = noOfPages;
    this.readStatus = readStatus;
}

function addBookToLibrary() {
    const newBook = new Book(inputAuthor.value, inputTitle.value, parseInt(inputPages.value), inputStatus.value);
    myLibrary.push(newBook);
    // console.log(newBook)
    addBookForDisplay(newBook)
}

const book0 = new Book('omar Fetooh', 'dream land', 120, 'read')
const book1 = new Book('omar Fetooh', 'wonderful Life', 180, 'read')

myLibrary.push(book0, book1);

function addBookForDisplay(book) {
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const authorDisplay = document.createElement('div');
    const titleDisplay = document.createElement('div');
    const npagesDisplay = document.createElement('div');
    const statusDisplay = document.createElement('div');

    authorDisplay.innerText = `Book Author: ${book.author}`
    titleDisplay.innerText = `book Title:${book.title}  `
    npagesDisplay.innerText = `number of pages:  ${book.noOfPages}  `
    statusDisplay.innerText = `status:${book.readStatus}  `

    booksArea.appendChild(newCard);
    // newCard.innerText = `Book Author: ${book.author}   book Title:${book.title}  number of pages:  ${book.noOfPages} status:${book.readStatus} `
    newCard.appendChild(authorDisplay);
    newCard.appendChild(titleDisplay);
    newCard.appendChild(npagesDisplay);
    newCard.appendChild(statusDisplay);
}

function display() {
    myLibrary.forEach((book) => {
        addBookForDisplay(book)
    })
}


newBookButton.addEventListener('click', () => {
    modal.showModal()
})

confirmButton.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
    modal.close();
})

closeButton.addEventListener('click', () => {
    modal.close();
})

display();
