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
          <p class="status">${book.status} </p>
      </div>
    `;
    card.classList.add("card");
    cardContainer.appendChild(card);
    book.id = i + 1;
    console.log(book.id);

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

// submitBtn.addEventListener("click", displayFormData());

// function displayFormData() {
//   form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const title = document.getElementById("book-title").value;
//     const author = document.getElementById("book-author").value;
//     const pages = document.getElementById("pages").value;
//     const readStatus = document.querySelector('input[name="read-status"]:checked').value;

//     closeDialog();
//     addBookToLibrary(title, author, pages, readStatus);
//   });
// }

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#book-title");
  const author = document.querySelector("#book-author");
  const pages = document.querySelector("#pages");
  const readStatus = document.querySelector('input[name="read-status"]:checked');

  console.log(title.value);
  console.log(author.value);
  dialog.close();
  addBookToLibrary(title.value, author.value, pages.value, readStatus.value);
  displayBooks(myLibrary);
});

// displayBooks(myLibrary);