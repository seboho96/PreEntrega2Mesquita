// script.js
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.menu-items').classList.toggle('active');
    });
});
