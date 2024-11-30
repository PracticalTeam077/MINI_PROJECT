document.addEventListener('DOMContentLoaded', () => {
    // Retrieve logged-in user from local storage
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
        document.getElementById('usernameDisplay').textContent = `Username: ${user.username}`;
        document.getElementById('addressDisplay').textContent = `Address: ${user.address}`;
    }

    // Modal functionality
    const modal = document.getElementById('accountModal');
    const toggleButton = document.getElementById('toggleAccount');
    const closeButton = document.querySelector('.close-button');

    toggleButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Dynamic content loading in the Featured Section
    const featuredSection = document.getElementById('content');
    const contentData = [
        // Add your content here
    ];

    function loadFeaturedContent() {
        contentData.forEach(item => {
            const paragraph = document.createElement('p');
            paragraph.textContent = item;
            featuredSection.appendChild(paragraph);
        });
    }

    loadFeaturedContent();

    // Button click alert for Gold Pass application
    const applyButton = document.querySelector('.button');

    if (applyButton) {
        applyButton.addEventListener('../GOLD PASS/gold.html', function (e) {
            e.preventDefault(); // Prevent the default link action
            alert("Thank you for your interest in the Gold Pass!");
        });
    }

    // Redirect for specific pages when clicking navigation links
    const booksLink = document.querySelector('nav a[href="../BOOKS/books.html"]');
    const researchPapersLink = document.querySelector('nav a[href="../MANGAS/Mangas.html"]');
    const mangasLink = document.querySelector('nav a[href="../MANGAS/Mangas.html"]');

    if (booksLink) {
        booksLink.addEventListener('click', () => {
            window.location.href = '../BOOKS/books.html';
        });
    }

    if (researchPapersLink) {
        researchPapersLink.addEventListener('click', () => {
            window.location.href = '../MANGAS/Mangas.html';
        });
    }

    if (mangasLink) {
        mangasLink.addEventListener('click', () => {
            window.location.href = '../MANGAS/Mangas.html';
        });
    }
});
