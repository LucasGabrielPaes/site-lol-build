// --- Lógica do Modo Escuro/Claro ---
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// Verifica preferência salva
if(localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// --- Lógica de Pesquisa ---
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();

    cards.forEach(card => {
        const name = card.getAttribute('data-name');
        if (name.includes(term)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
});