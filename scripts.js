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

addBookToLibrary('Cosmos', 'Carl Sagan', '432', 'not read yet');