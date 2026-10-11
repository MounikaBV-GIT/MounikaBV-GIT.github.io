// Display the current year in the footer
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Smoothly navigate to portfolio sections
document.querySelectorAll('.nav-links a, .hero-buttons a').forEach(link => {
    link.addEventListener('click', function (event) {
        const targetId = this.getAttribute('href');

        if (targetId && targetId.startsWith('#')) {
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
