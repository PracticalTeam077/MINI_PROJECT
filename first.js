document.getElementById('leftButton').addEventListener('click', function() {
    alert('REDIEACTING TO LIBRARY MANAGEMENT PAGE');
    window.location.href = "../LIBRARY MANAGEMENT/login.html"; // Replace with your left page URL
});

document.getElementById('rightButton').addEventListener('click', function() {
    alert('REDIEACTING TO DIGITAL LIBRARY PAGE');
    window.location.href = "../DIGITAL LIBRARY/index.html"; // Replace with your right page URL
});

// Optional: Change background color on hover
const leftHalf = document.querySelector('.left-half');
const rightHalf = document.querySelector('.right-half');

leftHalf.addEventListener('mouseenter', () => {
    leftHalf.style.backgroundColor = '#0056b3'; // Change color on hover
});

leftHalf.addEventListener('mouseleave', () => {
    leftHalf.style.backgroundColor = ''; // Reset color
});

rightHalf.addEventListener('mouseenter', () => {
    rightHalf.style.backgroundColor = '#218838'; // Change color on hover
});

rightHalf.addEventListener('mouseleave', () => {
    rightHalf.style.backgroundColor = ''; // Reset color
});
