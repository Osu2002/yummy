// Get DOM elements
const hamburger = document.querySelector('.hamburger');
const slideMenu = document.querySelector('.slide-menu');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');

// Toggle menu function
function toggleMenu() {
    slideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = slideMenu.classList.contains('active') ? 'hidden' : 'auto';
}

// Event listeners
hamburger.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && slideMenu.classList.contains('active')) {
        toggleMenu();
    }
});document.querySelectorAll(".toggle-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
        document
            .querySelectorAll(".toggle-btn")
            .forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
    });
});
