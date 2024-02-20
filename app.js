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
    this.order = myLibrary.length;
}

function addBookToLibrary() {
    const newBook = new Book(inputAuthor.value, inputTitle.value, parseInt(inputPages.value), inputStatus.value);
    myLibrary.push(newBook);
    addBookForDisplay(newBook)
}

const book0 = new Book('omar Fetooh', 'dream land', 120, 'read')
myLibrary.push(book0)
const book1 = new Book('omar Fetooh', 'wonderful Life', 180, 'read')
myLibrary.push(book1);


function createLabels(book, newCard) {
    const authorDisplay = document.createElement('div');
    const titleDisplay = document.createElement('div');
    const npagesDisplay = document.createElement('div');
    const statusDisplay = document.createElement('div');

    authorDisplay.innerText = `Book Author: ${book.author}`
    titleDisplay.innerText = `book Title:${book.title}  `
    npagesDisplay.innerText = `number of pages:  ${book.noOfPages}  `
    statusDisplay.innerText = `status:${book.readStatus}  `

    newCard.appendChild(authorDisplay);
    newCard.appendChild(titleDisplay);
    newCard.appendChild(npagesDisplay);
    newCard.appendChild(statusDisplay);
}

function addBookForDisplay(book) {
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        deleteBook(book, deleteButton.parentElement);
    })

    createLabels(book, newCard);

    const readStatusButton = document.createElement('button');
    readStatusButton.innerText = book.readStatus;
    readStatusButton.addEventListener('click', () => {
        toogleReading(book, readStatusButton);
    })

    booksArea.appendChild(newCard);

    newCard.appendChild(deleteButton);
    newCard.appendChild(readStatusButton);
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

function deleteBook(book, domEle) {
    myLibrary.splice(book.order, 1);
    booksArea.removeChild(domEle)
}

function toogleReading(book, domEle) {
    if (book.readStatus === 'read') {
        book.readStatus = "not read";
        domEle.textContent = "not read"
    }
    else {
        book.readStatus = 'read';
        domEle.textContent = 'read';
    }
}

// const deletedElement = document.querySelector('.booksArea div.card #order').innerTexts