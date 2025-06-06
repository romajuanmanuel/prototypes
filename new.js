/****** DECLARO LIBRERIA ******/
const library = [];

/****** DECLAROO OBJETO BOOK ***********/
class Book {
    constructor(id, title, author, pages, hasRead) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
    }
}

/****** FUNCIÓN PARA AÑADIR LIBROS ***********/
function addBookToLibrary(title, author, pages, hasRead) {
    const exists = library.some(book => book.title === title && book.author === author);
    if (!exists) {
        const newBook = new Book(crypto.randomUUID(), title, author, pages, hasRead);
        library.push(newBook);
    }
}
/****** CLEAN FUNCTION ***********/

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cleanBtn').addEventListener('click', () => {
      const container = document.getElementById("library-container");
      if(container) {
        container.innerHTML = "";
        console.log("Contenedor limpiado");
        
      } else {
        console.error("No se encontró #library-container");
      }
      
    });
    library = [];
  });

/****** FUNCIÓN PARA RENDERIZAR ***********/
function renderLibraryCards(booksArray) {
    const container = document.getElementById("library-container");
    if (!container) {
        console.error("No se encontró el contenedor");
        return;
    }

    container.innerHTML = "";

    booksArray.forEach((book, index) => {
        const card = document.createElement("div");
        card.className = "card animate";
        card.style.animationDelay = `${index * 50}ms`; // efecto escalonado
        card.innerHTML = `
            <h3>Title: ${book.title}</h3>
            <h3>Author: ${book.author}</h3>
            <h3>Pages: ${book.pages}</h3>
            <h3>Readed: ${book.hasRead ? "YES" : "NO"}</h3>
        `;
        container.appendChild(card);
    });
}

/*********** Dark Mode *************/

const toggleBtn = document.getElementById('toggleTheme');
const body = document.body;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    body.classList.add('dark');
    toggleBtn.textContent = '🌞';
} else {
    toggleBtn.textContent = '🌙';
}

toggleBtn.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleBtn.textContent = isDark ? '🌞' : '🌙';
});

/************ DIALOG ***************** */

const newBookBtn = document.getElementById('openDialogBtn');
const closeDialogBtn = document.getElementById('closeDialogBtn');
const dialog = document.getElementById('myDialog');

// Abrir el diálogo
openDialogBtn.addEventListener('click', () => {
    dialog.showModal();
});

// Cerrar el diálogo
closeDialogBtn.addEventListener('click', () => {
    dialog.close();
});

/*********** BOTÓN DE TEST *************/
document.getElementById('btnSaludar').addEventListener('click', () => {
    /*if (library.length > 0) return;*/ /* deprecated */

    addBookToLibrary("Dune", "Frank Herbert", 412, true);
    addBookToLibrary("1984", "George Orwell", 328, true);
    addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
    addBookToLibrary("Fahrenheit 451", "Ray Bradbury", 194, true);
    addBookToLibrary("Brave New World", "Aldous Huxley", 268, false);
    addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277, true);
    addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
    addBookToLibrary("The Road", "Cormac McCarthy", 287, true);
    addBookToLibrary("Animal Farm", "George Orwell", 112, true);
    addBookToLibrary("Neuromancer", "William Gibson", 271, false);

    addBookToLibrary("The Martian", "Andy Weir", 369, true);
    addBookToLibrary("Foundation", "Isaac Asimov", 255, false);
    addBookToLibrary("Snow Crash", "Neal Stephenson", 470, false);
    addBookToLibrary("The Left Hand of Darkness", "Ursula K. Le Guin", 304, true);
    addBookToLibrary("The Name of the Wind", "Patrick Rothfuss", 662, true);
    addBookToLibrary("The Lies of Locke Lamora", "Scott Lynch", 499, false);
    addBookToLibrary("Mistborn", "Brandon Sanderson", 541, true);
    addBookToLibrary("Warbreaker", "Brandon Sanderson", 688, true);
    addBookToLibrary("The Way of Kings", "Brandon Sanderson", 1007, false);
    addBookToLibrary("Elantris", "Brandon Sanderson", 615, true);

    addBookToLibrary("Good Omens", "Neil Gaiman & Terry Pratchett", 412, false);
    addBookToLibrary("American Gods", "Neil Gaiman", 465, true);
    addBookToLibrary("Coraline", "Neil Gaiman", 192, true);
    addBookToLibrary("Anansi Boys", "Neil Gaiman", 368, false);
    addBookToLibrary("The Ocean at the End of the Lane", "Neil Gaiman", 181, true);
    addBookToLibrary("Dracula", "Bram Stoker", 418, true);
    addBookToLibrary("Frankenstein", "Mary Shelley", 280, true);
    addBookToLibrary("The Picture of Dorian Gray", "Oscar Wilde", 254, false);
    addBookToLibrary("Jane Eyre", "Charlotte Brontë", 500, false);
    addBookToLibrary("Wuthering Heights", "Emily Brontë", 416, false);

    addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, true);
    addBookToLibrary("Emma", "Jane Austen", 474, false);
    addBookToLibrary("Sense and Sensibility", "Jane Austen", 409, false);
    addBookToLibrary("The Shining", "Stephen King", 447, true);
    addBookToLibrary("It", "Stephen King", 1138, false);
    addBookToLibrary("Carrie", "Stephen King", 199, true);
    addBookToLibrary("Misery", "Stephen King", 320, true);
    addBookToLibrary("The Stand", "Stephen King", 823, false);
    addBookToLibrary("11/22/63", "Stephen King", 849, true);

    addBookToLibrary("The Alchemist", "Paulo Coelho", 208, true);
    addBookToLibrary("Veronika Decides to Die", "Paulo Coelho", 210, false);
    addBookToLibrary("Siddhartha", "Hermann Hesse", 152, true);
    addBookToLibrary("Steppenwolf", "Hermann Hesse", 258, false);
    addBookToLibrary("The Stranger", "Albert Camus", 123, true);
    addBookToLibrary("The Plague", "Albert Camus", 308, false);
    addBookToLibrary("Meditations", "Marcus Aurelius", 256, true);
    addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", 671, false);
    addBookToLibrary("The Brothers Karamazov", "Fyodor Dostoevsky", 796, false);
    addBookToLibrary("The Idiot", "Fyodor Dostoevsky", 656, false);

    renderLibraryCards(library);
});

