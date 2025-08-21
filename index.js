const bookContainer = document.getElementById("book-collection-container");
const accountContainer = document.getElementById("account-info-container");

const books = [
  {
    name: "Les damnés de la terre",
    author: "Frantz Fanon",
    available: "yes",
    img: "./img/fanon.jpg",
  },
  {
    name: "Jane Eyre",
    author: "Charlotte Brontë",
    available: "no",
    img: "./img/janeeyre.jpg",
  },
];

const users = [
  {
    account: "Zaza",
    age: "28",
    borrowed: 1,
  },
];

class Books {
  constructor(name, author, available) {
    this.name = name;
    this.author = author;
    this.available = available;
  }
  isBookAvailable(available) {
    return available === this.available;
  }
}

class User {
  constructor(account, age, borrowed) {
    this.account = account;
    this.age = age;
    this.borrowed = borrowed;
  }
  isBookBorrowed(borrowed) {
    return borrowed === this.borrowed;
  }
}

//gestion de l'affichage

const display = {
  elementShown: function (text) {
    bookContainer.innerHTML = text;
  },
  displayBooks: function () {
    const booksHTML = books
      .map((book) => {
        return `
      <div class="card">
      <img src=${book.img} class="img-card">
       <p><h4>Nom du Livre:</h4>${book.name}</p>
        <p><h4>Auteur:</h4>${book.author}</p>
        <p><h4>Disponible:</h4>${book.available}</p>
      </div>
    `;
      })
      .join("");

    this.elementShown(booksHTML);
  },
};
const display2 = {
  elementShown: function (text) {
    accountContainer.innerHTML = text;
  },
  displayUsers: function () {
    const usersHTML = users
      .map((user) => {
        return `
      <div class="card2">
      <p>account: ${user.account}</p>
      <p>age: ${user.age}</p>
      <p>Book Borrowed: ${user.borrowed}</p>
      </div>
      `;
      })
      .join("");
    this.elementShown(usersHTML);
  },
};
display.displayBooks();
display2.displayUsers();
