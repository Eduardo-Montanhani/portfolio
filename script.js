/**
 * Configuração do Particles.js
 * Cores ajustadas para combinar com o tom de azul/ciano moderno
 */
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 50, // Menos partículas = Mais elegância e menos uso de CPU
            "density": { "enable": true, "value_area": 800 }
        },
        "color": { "value": "#00bfff" },
        "shape": { "type": "circle" },
        "opacity": {
            "value": 0.3,
            "random": true,
            "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": { "enable": false }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00bfff",
            "opacity": 0.2,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "grab" }, // 'Grab' cria uma conexão com o mouse
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
        },
        "modes": {
            "grab": { "distance": 200, "line_linked": { "opacity": 0.5 } },
            "push": { "particles_nb": 4 }
        }
    },
    "retina_detect": true
});

/**
 * Efeito de Revelação (Scroll Reveal)
 * Faz os cards do portfólio surgirem suavemente
 */
const observerOptions = {
    threshold: 0.1 // O elemento aparece quando 10% dele está na tela
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Adiciona um pequeno atraso baseado no índice para efeito cascata
            setTimeout(() => {
                entry.target.classList.add('reveal-active');
            }, index * 150); 
            
            // Para de observar após revelar (melhora performance)
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Seleciona os itens do Bento Grid para aplicar o efeito
document.querySelectorAll('.bento-item').forEach(item => {
    item.classList.add('reveal-hidden'); // Classe inicial escondida
    revealObserver.observe(item);
});