const books = JSON.parse(localStorage.getItem('books')) || []; // Load existing books from localStorage

// Check if user is logged in
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
if (!loggedInUser) {
    alert('You must be logged in to access this page.');
    window.location.href = 'login.html'; // Redirect to login if not logged in
}

// Function to generate a unique 4-digit book ID
function generateBookId() {
    let id;
    do {
        id = Math.floor(1000 + Math.random() * 9000);
    } while (books.some(book => book.id === id));
    return id;
}

// Open Add Book modal
document.getElementById('openAddBookModalBtn').onclick = function() {
    document.getElementById('addBookModal').style.display = 'block';
}

// Add book event listener
document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const bookName = document.getElementById('bookName').value.toUpperCase();
    const authorName = document.getElementById('authorName').value;

    const book = {
        id: generateBookId(),
        name: bookName,
        author: authorName,
        status: 'Available',
        borrower: null
    };
    books.push(book);
    addBookToTable(book);
    saveBooksToLocalStorage(); // Save to localStorage

    document.getElementById('addBookModal').style.display = 'none'; // Close the modal
    document.getElementById('bookForm').reset(); // Clear form fields
});

// Function to add book to table
function addBookToTable(book) {
    const bookList = document.getElementById('bookList');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.id}</td>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.status}</td>
        <td>${book.borrower ? book.borrower : 'N/A'}</td>
    `;
    
    bookList.appendChild(row);
}

// Load books from localStorage on page load
function loadBooks() {
    books.forEach(addBookToTable);
}

function saveBooksToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(books));
}

// Modal handling
const borrowModal = document.getElementById('borrowModal');
const removeModal = document.getElementById('removeModal');
const returnModal = document.getElementById('returnModal');

document.getElementById('openBorrowModalBtn').onclick = function() {
    borrowModal.style.display = 'block';
}

document.getElementById('openRemoveModalBtn').onclick = function() {
    removeModal.style.display = 'block';
}

document.getElementById('openReturnModalBtn').onclick = function() {
    returnModal.style.display = 'block';
}

const closeModal = () => {
    document.getElementById('addBookModal').style.display = 'none';
    borrowModal.style.display = 'none';
    removeModal.style.display = 'none';
    returnModal.style.display = 'none';
}

const closeModalSpan = document.getElementsByClassName('close');
for (let span of closeModalSpan) {
    span.onclick = closeModal;
}

window.onclick = function(event) {
    if (event.target === borrowModal || event.target === removeModal || event.target === returnModal || event.target === document.getElementById('addBookModal')) {
        closeModal();
    }
}

// Borrow book form submission
document.getElementById('borrowForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const borrowId = parseInt(document.getElementById('borrowId').value);
    const borrowerName = document.getElementById('borrowerName').value;
    const borrowerAddress = document.getElementById('borrowerAddress').value;
    const borrowerPhone = document.getElementById('borrowerPhone').value;

    const book = books.find(b => b.id === borrowId);

    if (book && book.status === 'Available') {
        book.status = 'Borrowed';
        book.borrower = `${borrowerName}, ${borrowerAddress}, ${borrowerPhone}`; // Link the user
        updateBookInTable(book);
        saveBooksToLocalStorage(); // Save to localStorage
        alert(`You have borrowed "${book.name}".`);
        borrowModal.style.display = 'none';
    } else {
        alert('Book not found or already borrowed.');
    }

    document.getElementById('borrowForm').reset();
});

// Remove book form submission
document.getElementById('removeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const removeId = parseInt(document.getElementById('removeId').value);
    const bookIndex = books.findIndex(b => b.id === removeId);

    if (bookIndex > -1) {
        books.splice(bookIndex, 1);
        updateBookList();
        saveBooksToLocalStorage(); // Save to localStorage
        alert(`Book with ID ${removeId} has been removed.`);
        removeModal.style.display = 'none';
    } else {
        alert('Book not found.');
    }

    document.getElementById('removeForm').reset();
});

// Return book form submission
document.getElementById('returnForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const returnId = parseInt(document.getElementById('returnId').value);
    const book = books.find(b => b.id === returnId);

    if (book && book.status === 'Borrowed') {
        book.status = 'Available';
        book.borrower = null;
        updateBookInTable(book);
        saveBooksToLocalStorage(); // Save to localStorage
        alert(`Book with ID ${returnId} has been returned.`);
        returnModal.style.display = 'none';
    } else {
        alert('Book not found or not borrowed.');
    }

    document.getElementById('returnForm').reset();
});

// Update book in table
function updateBookInTable(book) {
    const rows = document.querySelectorAll('#bookList tr');
    rows.forEach(row => {
        const cells = row.getElementsByTagName('td');
        if (cells[0].textContent == book.id) {
            cells[3].textContent = book.status;
            cells[4].textContent = book.borrower ? book.borrower : 'N/A';
        }
    });
}

// Update the entire book list
function updateBookList() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    books.forEach(addBookToTable);
}

// Function to search books
function searchBooks() {
    const input = document.getElementById('searchInput').value;
    const bookList = document.getElementById('bookList');
    const rows = bookList.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const bookName = cells[1].textContent;

        if (bookName.toLowerCase().indexOf(input.toLowerCase()) > -1) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}

// Load books on page load
window.onload = loadBooks;
