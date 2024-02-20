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

const allCards = document.querySelectorAll('.card');


const myLibrary = [];

//Object Constructor
function Book(author, title, noOfPages, readStatus) {
    this.author = author;
    this.title = title;
    this.noOfPages = noOfPages;
    // this.readStatus = readStatus;
    this.order = myLibrary.length;

    if (inputStatus.checked) {
        this.readStatus = "Read";
    }
    else {
        this.readStatus = "Not Read";
    }
}

function addBookToLibrary() {
    const newBook = new Book(inputAuthor.value, inputTitle.value, parseInt(inputPages.value), inputStatus.value);
    myLibrary.push(newBook);
    addBookForDisplay(newBook)
}

const book0 = new Book('Omar Fetooh', 'Dream Land', 120, 'Read');
book0.readStatus = 'Read';
myLibrary.push(book0)
const book1 = new Book('Omar Fetooh', 'Wonderful Life', 180, 'Read')
book1.readStatus = 'Read';
myLibrary.push(book1);


function createLabels(book, newCard) {
    const authorDisplay = document.createElement('div');
    const titleDisplay = document.createElement('div');
    const npagesDisplay = document.createElement('div');

    authorDisplay.innerText = `Book Author:  ${book.author}`
    titleDisplay.innerText = `Book Title:  ${book.title}  `
    npagesDisplay.innerText = `Number of Pages:  ${book.noOfPages}  `


    newCard.appendChild(authorDisplay);
    newCard.appendChild(titleDisplay);
    newCard.appendChild(npagesDisplay);

}

function addBookForDisplay(book) {
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        deleteBook(book, deleteButton.parentElement);
    })

    booksArea.appendChild(newCard);

    createLabels(book, newCard);

    const readStatusButton = document.createElement('button');
    readStatusButton.innerText = book.readStatus;
    newCard.appendChild(deleteButton);
    newCard.appendChild(readStatusButton);

    if (book.readStatus === 'Read') {
        readStatusButton.style.backgroundColor = "#80ed99";
        newCard.style.boxShadow = ' -1px 10px 39px -15px greenyellow';
    }
    else {
        readStatusButton.style.backgroundColor = '#edede9';
        newCard.style.boxShadow = ' -1px 10px 39px -15px rgba(0, 0, 0, 0.75)';
    }


    readStatusButton.addEventListener('click', () => {
        toogleReading(book, readStatusButton, newCard);
    })


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

function toogleReading(book, domEle, newCard) {
    if (book.readStatus === 'Read') {
        book.readStatus = "Not Read";
        domEle.textContent = "Not Read"
        domEle.style.backgroundColor = "#edede9";
        newCard.style.boxShadow = ' -1px 10px 39px -15px rgba(0, 0, 0, 0.75)';
    }
    else {
        book.readStatus = 'Read';
        domEle.textContent = 'Read';
        domEle.style.backgroundColor = '#80ed99';
        newCard.style.boxShadow = ' -1px 10px 39px -15px greenyellow';

    }
}

// const deletedElement = document.querySelector('.booksArea div.card #order').innerTexts