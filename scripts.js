const myLibrary = [];

class Book {
  constructor (title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

function addBookToLibrary (title, author, pages, status) {
  const book = new Book (title, author, pages, status);
  myLibrary.push(book);
}

const cardContainer = document.querySelector(".card-container");

function displayBooks (library) {
  cardContainer.innerHTML = "";
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
          <p id="read-status${i}" class="status">${book.status} </p>
      </div>
      <div class="book-buttons">
          <button class="delete" onclick="deleteCard(${i})">Delete</button>
          <button onclick="toggleRead('${book.status}', ${i})">Already read this.</button>
      </div>
    `;
    card.classList.add("card");
    cardContainer.appendChild(card);

  }
}

const showBtn = document.querySelector("#dialog-open");
const dialog = document.getElementById("form-dialog");
const closeBtn = document.querySelector("#dialog-close");
const form = document.getElementById("new-book-form");
// const submitBtn = document.getElementById("form-submit")


showBtn.addEventListener("click", () => {
  dialog.showModal();
});


closeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#book-title");
  const author = document.querySelector("#book-author");
  const pages = document.querySelector("#pages");
  const readStatus = document.querySelector('input[name="read-status"]:checked');

  dialog.close();
  addBookToLibrary(title.value, author.value, pages.value, readStatus.value);
  displayBooks(myLibrary);
});

function deleteCard (index) {
  myLibrary.splice(index, 1);
  displayBooks(myLibrary);
};

function toggleRead (read, book) {
  if (read === 'Already read') {
    myLibrary[book].status = 'Not read yet';
  } else {
    myLibrary[book].status = 'Already read';
  }

  displayBooks(myLibrary);
}

displayBooks(myLibrary);