const searchInput = document.getElementById('searchInput');
const gallery = document.getElementById('gallery');
const links = gallery.getElementsByTagName('a');

searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();
    for (let link of links) {
        const name = link.querySelector('.name').textContent.toLowerCase();
        link.style.display = name.includes(filter) ? 'inline-block' : 'none';
    }
});
