/******************TEST BUTTON ***********/
document.getElementById('btnSaludar').addEventListener('click', () => {
    addBookToLibrary("hola", "chau", 1000, true);
    addBookToLibrary("holasda", "cdsdhau", 8000, true);
    addBookToLibrary("holasdasa", "casdsahau", 100, false);
    console.log(library[0]);
    console.log(library[1]);
    console.log(library[2]);
    renderLibraryCards(library);
});

const library = [];

class Book {
    constructor(id, title, author, pages, hasRead) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
    }

    info() {
        const readStatus = this.hasRead ? "already read" : "not read yet";
        return ` ${this.id}, ${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    }
}

function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(crypto.randomUUID(), title, author, pages, hasRead);
    library.push(newBook);
}

// Función para renderizar las tarjetas
function renderLibraryCards(booksArray) {
    const container = document.getElementById("library-container");

    // Limpiar el contenedor por si ya tenía contenido
    container.innerHTML = "";

    booksArray.forEach(book => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <h3>ID: ${book.id}</h3>
        <p>Title: ${book.title}</p>
      `;
        container.appendChild(card);
    });
}





Book.prototype.greet = function () {
    return `${this.name} says hello.`;
}


Object.getPrototypeOf(book1) === Book.prototype;