const booksArea = document.querySelector('.booksArea')

const myLibrary = [];

//Object Constructor
function Book(author, title, noOfPages, readStatus) {
    this.author = author;
    this.title = title;
    this.noOfPages = noOfPages;
    this.readStatus = readStatus;
}

function addBookToLibrary() {

}

const book0 = new Book('omar Fetooh', 'dream land', 120, 'read')
const book1 = new Book('omar Fetooh', 'wonderful Life', 180, 'read')

myLibrary.push(book0, book1);


myLibrary.forEach((book) => {
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
})