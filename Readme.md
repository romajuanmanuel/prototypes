📚 Library App
A simple and responsive web-based Library App where you can manage a collection of books. Add, view, remove, and toggle the read status of books using a dynamic and interactive UI. Built with vanilla JavaScript, HTML5, and CSS3.

🚀 Features
Add books with title, author, page count, and read status

Prevents duplicate books based on title and author

View book details in a modal dialog

Toggle the read/unread status

Remove books from the collection

Dark/light theme toggle with local storage persistence

Clean all rendered cards (without deleting from memory)

Preload the library with popular books using the "Generate" button

🛠️ Tech Stack
HTML5: Semantic and accessible structure

CSS3: Responsive layout and dark mode

JavaScript (ES6+): Functional and object-oriented programming

🧱 Project Structure
plaintext
Copiar
Editar
├── index.html         # Main HTML file
├── styles.css         # Styles (light and dark mode)
└── new.js             # JavaScript functionality
🧩 Components
Book Class: Represents a book object with methods to toggle read status

Dialogs:

Add new book

View book info

Buttons:

Generate: Load predefined books

New Book: Open book creation dialog

Clean: Clear the UI cards

🌙/🌞: Toggle theme

Library Renderer: Dynamically creates card elements for each book

🖼️ UI Preview
Light Mode and Dark Mode supported 🌞🌙

Responsive cards

Dialog-based interactions

📦 How to Use
Clone the repo or download the project files:

bash
Copiar
Editar
git clone git@github.com:romajuanmanuel/prototypes.git
Open index.html in your browser.

Click "New Book" to manually add a book or "Generate" to preload a sample library.

📚 Sample Books
The generate function includes books by:

Brandon Sanderson

Neil Gaiman

Stephen King

Jane Austen

Albert Camus

Dostoevsky
...and many more classics.

🌗 Dark Mode
The app supports light and dark themes using a toggle button. The selected mode is saved in localStorage.

📌 To-Do (Suggestions)
Persist books using localStorage or IndexedDB

Add search and filter functionality

Support book covers and genres

Pagination for large libraries

Form validation and UX enhancements

🧪 Demo
(https://romajuanmanuel.github.io/prototypes/)

📝 License
This project is open-source and available under the MIT License.

