const form = document.querySelector("form");
const bookList = document.getElementById("book-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const bookTitle = event.target.querySelector("input").value;
  const book = document.createElement("div");
  book.className = "book";
  book.innerHTML = `<h2>${bookTitle}</h2>`;
  bookList.appendChild(book);
  event.target.reset();
});
