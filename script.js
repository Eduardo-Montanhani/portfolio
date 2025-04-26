particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js carregado.');
  });
  
  // Ou se preferir sem arquivo externo:
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#00bcd4"
      },
      "shape": {
        "type": "circle",
      },
      "opacity": {
        "value": 0.5,
        "random": true
      },
      "size": {
        "value": 5,
        "random": true
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "out_mode": "out"
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        }
      }
    },
    "retina_detect": true
  });
  