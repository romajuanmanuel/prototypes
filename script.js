/******************TEST BUTTON ***********/
document.getElementById('btnSaludar').addEventListener('click', () => {
    addBookToLibrary("hola","chau",1000,true);
    addBookToLibrary("holasda","cdsdhau",8000,true);
    addBookToLibrary("holasdasa","casdsahau",100,false);
    console.log(library[0]);
    console.log(library[1]);
    console.log(library[2]);
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

 function addBookToLibrary(title,author,pages,hasRead){
    const newBook = new Book (crypto.randomUUID(),title,author,pages,hasRead);
    library.push(newBook);
 }





Book.prototype.greet = function () {
    return `${this.name} says hello.`;
}


const book1 = new Book("Juramento de sangre", "Brandon Sanderson", 1000, true);
const book2 = new Book("El camino de los reyes", "Brandon Sanderson", 1200, false);
const book3 = new Book("El aliento de los dioses", "Brandon Sanderson", 800, true);
const book4 = new Book("El imperio final", "Brandon Sanderson", 500, false);
const book5 = new Book("El héroe de las eras", "Brandon Sanderson", 600, true);
const book6 = new Book("Palabras radiantes", "Brandon Sanderson", 700, false);

Object.getPrototypeOf(book1) === Book.prototype;