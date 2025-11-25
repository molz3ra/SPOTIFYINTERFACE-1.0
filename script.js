// Suavizar scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efeito de scroll na navegação
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Animação de contadores
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Detectar quando elementos entram na viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos de features
document.querySelectorAll('.feature-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Efeito de hover nos botões de planos
document.querySelectorAll('.plan-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = this.classList.contains('featured') 
            ? 'scale(1.05) translateY(-10px)' 
            : 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = this.classList.contains('featured') 
            ? 'scale(1.05)' 
            : 'translateY(0)';
    });
});

// Adicionar ripple effect aos botões
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Modal simples para demonstração
const loginBtn = document.querySelector('.btn-login');
const signupBtn = document.querySelector('.btn-signup');

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        alert('Funcionalidade de login será implementada em breve!');
    });
}

if (signupBtn) {
    signupBtn.addEventListener('click', () => {
        alert('Vamos começar sua jornada musical! 🎵');
    });
}

// Carregar dinâmicamente mais features com scroll
const featureItems = document.querySelectorAll('.feature-item');
let featureIndex = 0;

function revealFeatures() {
    featureItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', revealFeatures);

// Inicializar ao carregar
document.addEventListener('DOMContentLoaded', () => {
    revealFeatures();
    
    // Adicionar animação ao floating card
    const floatingCard = document.querySelector('.floating-card');
    if (floatingCard) {
        floatingCard.style.animation = 'float 3s ease-in-out infinite';
    }
});

// Efeito parallax simples
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `0px ${window.scrollY * 0.5}px`;
    }
});

// Adicionar classe ativa ao navbar ao scrollar
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = link.getAttribute('href');
            }
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === current 
            ? '#1DB954' 
            : '#B3B3B3';
    });
});

// Adicionar efeito de digitação ao hero title
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let index = 0;
    const typeEffect = setInterval(() => {
        if (index < text.length) {
            heroTitle.textContent += text[index];
            index++;
        } else {
            clearInterval(typeEffect);
        }
    }, 50);
}

// Contador de reproduções (animado)
setTimeout(() => {
    const songElement = document.querySelector('.song-title');
    if (songElement) {
        songElement.addEventListener('click', function() {
            this.style.color = '#1DB954';
            setTimeout(() => {
                this.style.color = '#FFFFFF';
            }, 300);
        });
    }
}, 1000);

// Gerador de música aleatória para o floating card
const songs = [
    { title: 'Imagine', artist: 'John Lennon' },
    { title: 'Bohemian Rhapsody', artist: 'Queen' },
    { title: 'Blinding Lights', artist: 'The Weeknd' },
    { title: 'Shape of You', artist: 'Ed Sheeran' },
    { title: 'Levitating', artist: 'Dua Lipa' },
    { title: 'Anti-Hero', artist: 'Taylor Swift' }
];

function updateNowPlaying() {
    const songTitle = document.querySelector('.song-title');
    const artistName = document.querySelector('.artist-name');
    
    if (songTitle && artistName) {
        const randomSong = songs[Math.floor(Math.random() * songs.length)];
        songTitle.textContent = randomSong.title;
        artistName.textContent = randomSong.artist;
    }
}

// Mudar música a cada 5 segundos
setInterval(updateNowPlaying, 5000);

// Feedback visual para botões de plano
document.querySelectorAll('.btn-plan').forEach(btn => {
    btn.addEventListener('click', function() {
        const originalText = this.textContent;
        this.textContent = '✓ Processando...';
        this.style.opacity = '0.7';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.opacity = '1';
        }, 1500);
    });
});
