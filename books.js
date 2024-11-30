document.getElementById('search-button').addEventListener('click', function() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        const name = box.querySelector('.name').textContent.toLowerCase();
        if (name.includes(input)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
});

// Optional: Clear search when input is empty
document.getElementById('search-input').addEventListener('input', function() {
    if (this.value === '') {
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            box.style.display = 'block';
        });
    }
});
