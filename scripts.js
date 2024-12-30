const myLibrary = [];

function Book (title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary (title, author, pages, status) {
  const book = new Book (title, author, pages, status);
  myLibrary.push(book);
}

addBookToLibrary('Astronomy for people in a hurry', `Neil De'Grasse Tyson`, '244', 'Not read yet');

addBookToLibrary('Cosmos', 'Carl Sagan', '432', 'Not read yet');

const cardContainer = document.querySelector(".card-container")

function displayBooks (library) {
  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="book-name">
          <p class="title">${book.title}</p>
          <p class="author">by: ${book.author} </p>
      </div>
      <div class="book-info">
          <p class="page-count">Page Count: ${book.pages} </p>
          <p class="status">${book.status} </p>
      </div>
    `;
    card.classList.add("card");
    cardContainer.appendChild(card);
    book.id = i + 1;
    console.log(book.id);

  }
}

displayBooks(myLibrary);