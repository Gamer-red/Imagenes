// Datos específicos para cada país
const countryData = {
  'mexico': {
    video: './assets/videos/mexico.mp4',
    stats: {
      title: '📊 Estadísticas de México',
      content: `
        <ul style="padding-left: 20px;">
          <li>Partidos en México: 10</li>
          <li>Sedes: CDMX, Guadalajara, Monterrey</li>
          <li>Capacidad total estimada: +150,000 personas</li>
          <li>Fechas: Junio - Julio 2026</li>
          <li>Participaciones en Mundiales: 17</li>
          <li>Mejor resultado: Cuartos de final (1970, 1986)</li>
        </ul>
      `
    },
    trivia: {
      title: '❓ Trivia de México',
      question: '¿En qué año fue México sede del Mundial por última vez?',
      options: [
        { text: '1986', correct: true },
        { text: '1994', correct: false },
        { text: '1970', correct: false }
      ]
    }
  },
  'argentina': {
    video: './assets/videos/argentina.mp4',
    stats: {
      title: '📊 Estadísticas de Argentina',
      content: `
        <ul style="padding-left: 20px;">
          <li>Copas del Mundo: 3 (1978, 1986, 2022)</li>
          <li>Participaciones: 18</li>
          <li>Subcampeonatos: 3</li>
          <li>Jugador histórico: Diego Maradona</li>
          <li>Máximo goleador: Lionel Messi</li>
        </ul>
      `
    },
    trivia: {
      title: '❓ Trivia de Argentina',
      question: '¿Quién anotó el "Gol del Siglo" en 1986?',
      options: [
        { text: 'Lionel Messi', correct: false },
        { text: 'Diego Maradona', correct: true },
        { text: 'Gabriel Batistuta', correct: false }
      ]
    }
  },
  'brazil': {
    video: './assets/videos/brazil.mp4',
    stats: {
      title: '📊 Estadísticas de Brasil',
      content: `
        <ul style="padding-left: 20px;">
          <li>Copas del Mundo: 5 (1958, 1962, 1970, 1994, 2002)</li>
          <li>Participaciones: 22 (todas las ediciones)</li>
          <li>Subcampeonatos: 2</li>
          <li>Jugador histórico: Pelé</li>
          <li>Máximo goleador: Ronaldo</li>
        </ul>
      `
    },
    trivia: {
      title: '❓ Trivia de Brasil',
      question: '¿En qué año ganó Brasil su quinta Copa del Mundo?',
      options: [
        { text: '2002', correct: true },
        { text: '1998', correct: false },
        { text: '2006', correct: false }
      ]
    }
  },
  'canada': {
    video: './assets/videos/canada.mp4',
    stats: {
      title: '📊 Estadísticas de Canadá',
      content: `
        <ul style="padding-left: 20px;">
          <li>Participaciones: 2 (1986, 2022)</li>
          <li>Mejor resultado: Fase de grupos</li>
          <li>Co-anfitrión Mundial 2026</li>
          <li>Jugador histórico: Alphonso Davies</li>
        </ul>
      `
    },
    trivia: {
      title: '❓ Trivia de Canadá',
      question: '¿En qué año debutó Canadá en un Mundial?',
      options: [
        { text: '1986', correct: true },
        { text: '1994', correct: false },
        { text: '2002', correct: false }
      ]
    }
  },
  'australia': {
    video: './assets/videos/australia.mp4',
    stats: {
      title: '📊 Estadísticas de Australia',
      content: `
        <ul style="padding-left: 20px;">
          <li>Participaciones: 6</li>
          <li>Mejor resultado: Octavos de final (2006, 2022)</li>
          <li>Confederación: AFC (desde 2006)</li>
          <li>Jugador histórico: Tim Cahill</li>
        </ul>
      `
    },
    trivia: {
      title: '❓ Trivia de Australia',
      question: '¿En qué año se unió Australia a la AFC?',
      options: [
        { text: '2006', correct: true },
        { text: '1998', correct: false },
        { text: '2010', correct: false }
      ]
    }
  },
  'colombia': {
    video: './assets/videos/colombia.mp4',
    stats: {
      title: '📊 Estadísticas de Colombia',
      content: `
        <ul style="padding-left: 20px;">
          <li>Participaciones: 6</li>
          <li>Mejor resultado: Cuartos de final (2014)</li>
          <li>Jugador histórico: Carlos Valderrama</li>
          <li>Máximo goleador: James Rodríguez</li>
        </ul>
      `
    },
    trivia: {
      title: '❓ Trivia de Colombia',
      question: '¿Quién fue el máximo goleador del Mundial 2014?',
      options: [
        { text: 'James Rodríguez', correct: true },
        { text: 'Radamel Falcao', correct: false },
        { text: 'Juan Cuadrado', correct: false }
      ]
    }
  },
  'coreasur': {
    video: './assets/videos/coreasur.mp4',
    stats: {
      title: '📊 Estadísticas de Corea del Sur',
      content: `
        <ul style="padding-left: 20px;">
          <li>Participaciones: 11</li>
          <li>Mejor resultado: 4º lugar (2002)</li>
          <li>Jugador histórico: Park Ji-sung</li>
          <li>Máximo goleador: Son Heung-min</li>
        </ul>
      `
    },
    trivia: {
      title: '❓ Trivia de Corea del Sur',
      question: '¿En qué año alcanzó Corea del Sur el 4º lugar?',
      options: [
        { text: '2002', correct: true },
        { text: '2010', correct: false },
        { text: '1994', correct: false }
      ]
    }
  },
  'ecuador': {
    video: './assets/videos/ecuador.mp4',
    stats: {
      title: '📊 Estadísticas de Ecuador',
      content: `
        <ul style="padding-left: 20px;">
          <li>Participaciones: 4</li>
          <li>Mejor resultado: Octavos de final (2006)</li>
          <li>Jugador histórico: Antonio Valencia</li>
          <li>Máximo goleador: Enner Valencia</li>
        </ul>
      `
    },
    trivia: {
      title: '❓ Trivia de Ecuador',
      question: '¿En qué año debutó Ecuador en un Mundial?',
      options: [
        { text: '2002', correct: true },
        { text: '1998', correct: false },
        { text: '2006', correct: false }
      ]
    }
  },
  'eeuu': {
    video: './assets/videos/eeuu.mp4',
    stats: {
      title: '📊 Estadísticas de Estados Unidos',
      content: `
        <ul style="padding-left: 20px;">
          <li>Participaciones: 11</li>
          <li>Mejor resultado: 3º lugar (1930)</li>
          <li>Co-anfitrión Mundial 2026</li>
          <li>Jugador histórico: Landon Donovan</li>
        </ul>
      `
    },
    trivia: {
      title: '❓ Trivia de Estados Unidos',
      question: '¿En qué año llegó EE.UU. a cuartos de final?',
      options: [
        { text: '2002', correct: true },
        { text: '1994', correct: false },
        { text: '2010', correct: false }
      ]
    }
  },
  'iran': {
    video: './assets/videos/iran.mp4',
    stats: {
      title: '📊 Estadísticas de Irán',
      content: `
        <ul style="padding-left: 20px;">
          <li>Participaciones: 6</li>
          <li>Mejor resultado: Fase de grupos</li>
          <li>Jugador histórico: Ali Daei</li>
          <li>Máximo goleador: Sardar Azmoun</li>
        </ul>
      `
    },
    trivia: {
      title: '❓ Trivia de Irán',
      question: '¿Quién es el máximo goleador histórico de Irán?',
      options: [
        { text: 'Ali Daei', correct: true },
        { text: 'Sardar Azmoun', correct: false },
        { text: 'Mehdi Taremi', correct: false }
      ]
    }
  },
  'japon': {
    video: './assets/videos/japon.mp4',
    stats: {
      title: '📊 Estadísticas de Japón',
      content: `
        <ul style="padding-left: 20px;">
          <li>Participaciones: 7</li>
          <li>Mejor resultado: Octavos de final (2002, 2010, 2018, 2022)</li>
          <li>Jugador histórico: Hidetoshi Nakata</li>
          <li>Máximo goleador: Keisuke Honda</li>
        </ul>
      `
    },
    trivia: {
      title: '❓ Trivia de Japón',
      question: '¿Cuántas veces ha llegado Japón a octavos de final?',
      options: [
        { text: '4', correct: true },
        { text: '2', correct: false },
        { text: '3', correct: false }
      ]
    }
  },
  'jordania': {
    video: './assets/videos/jordania.mp4',
    stats: {
      title: '📊 Estadísticas de Jordania',
      content: `
        <ul style="padding-left: 20px;">
          <li>Participaciones: 0</li>
          <li>Mejor resultado: Nunca clasificó</li>
          <li>Jugador histórico: Hassan Abdel-Fattah</li>
          <li>Posición FIFA: 70° (aprox.)</li>
        </ul>
      `
    },
    trivia: {
      title: '❓ Trivia de Jordania',
      question: '¿Ha clasificado Jordania alguna vez a un Mundial?',
      options: [
        { text: 'No', correct: true },
        { text: 'Sí, en 1998', correct: false },
        { text: 'Sí, en 2014', correct: false }
      ]
    }
  },
  'marruecos': {
    video: './assets/videos/marruecos.mp4',
    stats: {
      title: '📊 Estadísticas de Marruecos',
      content: `
        <ul style="padding-left: 20px;">
          <li>Participaciones: 6</li>
          <li>Mejor resultado: 4º lugar (2022)</li>
          <li>Jugador histórico: Ahmed Faras</li>
          <li>Máximo goleador: Hakim Ziyech</li>
        </ul>
      `
    },
    trivia: {
      title: '❓ Trivia de Marruecos',
      question: '¿Qué puesto obtuvo Marruecos en el Mundial 2022?',
      options: [
        { text: '4º lugar', correct: true },
        { text: 'Subcampeón', correct: false },
        { text: 'Octavos de final', correct: false }
      ]
    }
  },
  'nuevazelanda': {
    video: './assets/videos/nuevazelanda.mp4',
    stats: {
      title: '📊 Estadísticas de Nueva Zelanda',
      content: `
        <ul style="padding-left: 20px;">
          <li>Participaciones: 2</li>
          <li>Mejor resultado: Fase de grupos (2010)</li>
          <li>Jugador histórico: Ryan Nelsen</li>
          <li>Máximo goleador: Chris Wood</li>
        </ul>
      `
    },
    trivia: {
      title: '❓ Trivia de Nueva Zelanda',
      question: '¿En qué año fue invicta Nueva Zelanda en un Mundial?',
      options: [
        { text: '2010', correct: true },
        { text: '1982', correct: false },
        { text: '2006', correct: false }
      ]
    }
  },
  'paraguay': {
    video: './assets/videos/paraguay.mp4',
    stats: {
      title: '📊 Estadísticas de Paraguay',
      content: `
        <ul style="padding-left: 20px;">
          <li>Participaciones: 8</li>
          <li>Mejor resultado: Cuartos de final (2010)</li>
          <li>Jugador histórico: José Luis Chilavert</li>
          <li>Máximo goleador: Roque Santa Cruz</li>
        </ul>
      `
    },
    trivia: {
      title: '❓ Trivia de Paraguay',
      question: '¿Quién fue el portero goleador de Paraguay?',
      options: [
        { text: 'José Luis Chilavert', correct: true },
        { text: 'Justo Villar', correct: false },
        { text: 'Carlos Gamarra', correct: false }
      ]
    }
  },
  'tunes': {
    video: './assets/videos/tunez.mp4',
    stats: {
      title: '📊 Estadísticas de Túnez',
      content: `
        <ul style="padding-left: 20px;">
          <li>Participaciones: 6</li>
          <li>Mejor resultado: Fase de grupos</li>
          <li>Jugador histórico: Radhi Jaïdi</li>
          <li>Máximo goleador: Wahbi Khazri</li>
        </ul>
      `
    },
    trivia: {
      title: '❓ Trivia de Túnez',
      question: '¿Cuántas veces ha ganado Túnez la Copa Africana?',
      options: [
        { text: '1', correct: true },
        { text: '3', correct: false },
        { text: '0', correct: false }
      ]
    }
  },
  'uruguay': {
    video: './assets/videos/uruguay.mp4',
    stats: {
      title: '📊 Estadísticas de Uruguay',
      content: `
        <ul style="padding-left: 20px;">
          <li>Copas del Mundo: 2 (1930, 1950)</li>
          <li>Participaciones: 14</li>
          <li>Mejor resultado: Campeón (1930, 1950)</li>
          <li>Jugador histórico: Diego Forlán</li>
          <li>Máximo goleador: Luis Suárez</li>
        </ul>
      `
    },
    trivia: {
      title: '❓ Trivia de Uruguay',
      question: '¿En qué año ganó Uruguay su primera Copa del Mundo?',
      options: [
        { text: '1930', correct: true },
        { text: '1950', correct: false },
        { text: '1924', correct: false }
      ]
    }
  },
  'uzbekistan': {
    video: './assets/videos/uzbekistan.mp4',
    stats: {
      title: '📊 Estadísticas de Uzbekistán',
      content: `
        <ul style="padding-left: 20px;">
          <li>Participaciones: 0</li>
          <li>Mejor resultado: Nunca clasificó</li>
          <li>Jugador histórico: Server Djeparov</li>
          <li>Posición FIFA: 68° (aprox.)</li>
        </ul>
      `
    },
    trivia: {
      title: '❓ Trivia de Uzbekistán',
      question: '¿Ha clasificado Uzbekistán alguna vez a un Mundial?',
      options: [
        { text: 'No', correct: true },
        { text: 'Sí, en 2002', correct: false },
        { text: 'Sí, en 2010', correct: false }
      ]
    }
  }
};

// Variables globales
let currentCountry = null;
let animationActive = false;
let animationId = null;
let startTime = null;
let currentFilter = 'normal';


// Esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
  // Obtener todos los objetivos (targets)
  const targets = document.querySelectorAll('[mindar-image-target]');
  const infoBox = document.getElementById('info-box');
  
  // Configurar eventos para cada objetivo
  targets.forEach(target => {
    target.addEventListener('targetFound', () => {
      const countryId = target.id.replace('-target', '');
      currentCountry = countryId;
      infoBox.style.display = 'block';
    });
    
    target.addEventListener('targetLost', () => {
      infoBox.style.display = 'none';
      closeAllContainers();
    });
  });
  
  // Configurar botones
  const videoButton = document.querySelectorAll('.info-button')[0];
  const statsButton = document.querySelectorAll('.info-button')[1];
  const triviaButton = document.querySelectorAll('.info-button')[2];
  const animButton = document.querySelectorAll('.info-button')[3];
  
  const videoContainer = document.getElementById('video-container');
  const statsContainer = document.getElementById('stats-container');
  const triviaContainer = document.getElementById('trivia-container');
  
  const closeVideoBtn = document.getElementById('close-video');
  const closeStatsBtn = document.getElementById('close-stats');
  const closeTriviaBtn = document.getElementById('close-trivia');
  
  const videoPlayer = document.getElementById('video-player');
  const videoTitle = document.getElementById('video-title');
  const statsTitle = document.getElementById('stats-title');
  const statsContent = document.getElementById('stats-content');
  const triviaTitle = document.getElementById('trivia-title');
  const triviaContent = document.getElementById('trivia-content');
  const triviaFeedback = document.getElementById('trivia-feedback');

  // Configurar botones de filtros
      const filterButtons = document.querySelectorAll('.filter-btn');

      filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
          // Remover clase active de todos los botones
          filterButtons.forEach(b => b.classList.remove('active'));
          
          // Añadir clase active al botón clickeado
          this.classList.add('active');
          
          // Aplicar filtro
          const filter = this.getAttribute('data-filter');
          currentFilter = filter;
          
          // Remover todas las clases de filtro
          videoPlayer.classList.remove('sepia', 'grayscale', 'invert');
          
          // Aplicar nuevo filtro si no es "normal"
          if (filter !== 'normal') {
            videoPlayer.classList.add(filter);
          }
        });
      });
  
  // Configurar eventos de botones
  videoButton.addEventListener('click', () => {
    if (!currentCountry) return;
    
    const data = countryData[currentCountry] || countryData['mexico'];
    videoTitle.textContent = `Video de ${currentCountry.charAt(0).toUpperCase() + currentCountry.slice(1)}`;
    videoPlayer.innerHTML = `<source src="${data.video}" type="video/mp4">`;
    videoContainer.style.display = 'block';

     videoPlayer.classList.remove('sepia', 'grayscale', 'invert');
        if (currentFilter !== 'normal') {
          videoPlayer.classList.add(currentFilter);
        }
      
     // Activar botón del filtro actual
        filterButtons.forEach(btn => {
          if (btn.getAttribute('data-filter') === currentFilter) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });
    
    // Recargar el video para que cargue la nueva fuente
    videoPlayer.load();
    videoPlayer.play();
  });
  
  statsButton.addEventListener('click', () => {
    if (!currentCountry) return;
    
    const data = countryData[currentCountry] || countryData['mexico'];
    statsTitle.textContent = data.stats.title;
    statsContent.innerHTML = data.stats.content;
    statsContainer.style.display = 'block';
  });
  
  triviaButton.addEventListener('click', () => {
    if (!currentCountry) return;
    
    const data = countryData[currentCountry] || countryData['mexico'];
    triviaTitle.textContent = data.trivia.title;
    
    // Construir la trivia
    let triviaHTML = `<p><strong>${data.trivia.question}</strong></p><div>`;
    data.trivia.options.forEach((option, index) => {
      triviaHTML += `<button class="trivia-option" data-correct="${option.correct}">${option.text}</button>`;
    });
    triviaHTML += '</div>';
    
    triviaContent.innerHTML = triviaHTML;
    triviaContainer.style.display = 'block';
    triviaFeedback.textContent = '';
    
    // Configurar eventos para las opciones de trivia
    const triviaOptions = document.querySelectorAll('.trivia-option');
    triviaOptions.forEach(option => {
      option.addEventListener('click', function() {
        const isCorrect = this.getAttribute('data-correct') === 'true';
        triviaFeedback.textContent = isCorrect ? '✅ ¡Correcto!' : '❌ Incorrecto. Inténtalo de nuevo.';
        triviaFeedback.style.color = isCorrect ? 'green' : 'red';
        triviaOptions.forEach(btn => btn.disabled = true);
      });
    });
  });
  
  animButton.addEventListener('click', () => {
    if (!currentCountry) return;
    
    const targetId = `${currentCountry}-target`;
    const targetElement = document.getElementById(targetId);
    const modelo = targetElement.querySelector('[gltf-model]');
    
    if (!animationActive) {
      animationActive = true;
      startTime = null;
      animationId = requestAnimationFrame((time) => animateModel(time, modelo));
    } else {
      animationActive = false;
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
      // Reset posición original cuando pares la animación
      modelo.setAttribute('position', '0 -0.25 0');
    }
  });
  
  // Configurar botones de cierre
  closeVideoBtn.addEventListener('click', () => {
    videoContainer.style.display = 'none';
    videoPlayer.pause();
  });
  
  closeStatsBtn.addEventListener('click', () => {
    statsContainer.style.display = 'none';
  });
  
  closeTriviaBtn.addEventListener('click', () => {
    triviaContainer.style.display = 'none';
  });
});

// Función para animar el modelo
function animateModel(time, modelo) {
  if (!startTime) startTime = time;
  const elapsed = time - startTime;
  
  // Movimiento vertical oscilante con función seno
  const amplitude = 0.1;
  const speed = 0.005;
  const newY = -0.25 + amplitude * Math.sin(elapsed * speed);
  
  modelo.setAttribute('position', `0 ${newY} 0`);
  
  if (animationActive) {
    animationId = requestAnimationFrame((time) => animateModel(time, modelo));
  }
}

// Función para cerrar todos los contenedores
function closeAllContainers() {
  document.getElementById('video-container').style.display = 'none';
  document.getElementById('stats-container').style.display = 'none';
  document.getElementById('trivia-container').style.display = 'none';
  
  const videoPlayer = document.getElementById('video-player');
  videoPlayer.pause();
  
  // Detener animación si está activa
  if (animationActive) {
    animationActive = false;
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  }
}