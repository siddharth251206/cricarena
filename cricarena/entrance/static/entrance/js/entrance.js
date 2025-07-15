let loadingProgress = 0;
const loadingInterval = setInterval(() => {
    loadingProgress += Math.random() * 15;
    if (loadingProgress >= 100) {
        loadingProgress = 100;
        clearInterval(loadingInterval);
        setTimeout(() => {
            document.getElementById('loadingScreen').classList.add('hidden');
            init();
        }, 500);
    }
    document.getElementById('loadingProgress').style.width = loadingProgress + '%';
}, 100);


// Scroll reveal for feature cards
function revealOnScroll() {
    const cards = document.querySelectorAll('.feature-card');
    const trigger = window.innerHeight * 0.92;
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < trigger) {
            card.classList.add('revealed');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);
