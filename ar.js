 const target = document.getElementById('mexico-target');
    const infoBox = document.getElementById('info-box');

    target.addEventListener('targetFound', () => {
      infoBox.style.display = 'block';
    });

    target.addEventListener('targetLost', () => {
      infoBox.style.display = 'none';
    }); 
      // 🎥 Funcionalidad del botón de video
    const videoButton = document.querySelectorAll('.info-button')[0]; // Primer botón
    const videoContainer = document.getElementById('video-container');
    const closeVideoBtn = document.getElementById('close-video');
    const videoPlayer = document.getElementById('video-player');
    const statsButton = document.querySelectorAll('.info-button')[1]; // Segundo botón
    const statsContainer = document.getElementById('stats-container');
    const closeStatsBtn = document.getElementById('close-stats');
    const triviaButton = document.querySelectorAll('.info-button')[2]; // Tercer botón
    const triviaContainer = document.getElementById('trivia-container');
    const closeTriviaBtn = document.getElementById('close-trivia');
    const triviaOptions = document.querySelectorAll('.trivia-option');
    const triviaFeedback = document.getElementById('trivia-feedback');
    const animButton = document.querySelectorAll('.info-button')[3]; // Botón animación 3D
    const modelo = document.getElementById('modelo-animado');

    videoButton.addEventListener('click', () => {
      videoContainer.style.display = 'block';
      videoPlayer.play();
    });

    closeVideoBtn.addEventListener('click', () => {
      videoContainer.style.display = 'none';
      videoPlayer.pause();
      videoPlayer.currentTime = 0;
    });
    statsButton.addEventListener('click', () => {
      statsContainer.style.display = 'block';
    });

    closeStatsBtn.addEventListener('click', () => {
      statsContainer.style.display = 'none';
    });

    triviaButton.addEventListener('click', () => {
      triviaContainer.style.display = 'block';
      triviaFeedback.textContent = '';
      triviaOptions.forEach(btn => btn.disabled = false);
    });

    closeTriviaBtn.addEventListener('click', () => {
      triviaContainer.style.display = 'none';
    });

    triviaOptions.forEach(option => {
      option.addEventListener('click', () => {
        const isCorrect = option.getAttribute('data-correct') === 'true';
        triviaFeedback.textContent = isCorrect ? '✅ ¡Correcto!' : '❌ Incorrecto. Inténtalo de nuevo.';
        triviaFeedback.style.color = isCorrect ? 'green' : 'red';
        triviaOptions.forEach(btn => btn.disabled = true); // Desactiva botones después de responder
      });
    let animationActive = false;
let animationId = null;
let startTime = null;

function animateModel(time) {
  if (!startTime) startTime = time;
  const elapsed = time - startTime;

  // Movimiento vertical oscilante con función seno
  const amplitude = 0.1; // cuánto se mueve arriba y abajo
  const speed = 0.005; // velocidad de oscilación
  const newY = -0.25 + amplitude * Math.sin(elapsed * speed);

  modelo.setAttribute('position', `0 ${newY} 0`);

  if (animationActive) {
    animationId = requestAnimationFrame(animateModel);
  }
}

animButton.addEventListener('click', () => {
  if (!animationActive) {
    animationActive = true;
    startTime = null;
    animationId = requestAnimationFrame(animateModel);
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
    });