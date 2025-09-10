// Variables globales
let imageScanned = false;

document.addEventListener('DOMContentLoaded', function() {
    const introScreen = document.getElementById('intro-screen');
    const startButton = document.getElementById('start-button');
    const scanningIndicator = document.getElementById('scanning-indicator');
    
    startButton.addEventListener('click', function() {
        introScreen.classList.add('hidden');
        scanningIndicator.style.display = 'flex';
        
        // Iniciar la experiencia AR
        setTimeout(function() {
            const scene = document.querySelector('a-scene');
            if (scene.hasLoaded) {
                scene.enterVR();
            } else {
                scene.addEventListener('loaded', function() {
                    scene.enterVR();
                });
            }
        }, 500);
        
        // Simular el escaneo de imagen (en un caso real, se conectaría con los eventos de MindAR)
        simulateImageScanning();
    });
});

function simulateImageScanning() {
    // En una aplicación real, esto se conectaría con los eventos de MindAR
    // Para este ejemplo, simulamos que la imagen se escanea después de 5 segundos
    setTimeout(function() {
        if (!imageScanned) {
            onImageScanned();
        }
    }, 5000);
}

function onImageScanned() {
    imageScanned = true;
    document.getElementById('scanning-indicator').style.display = 'none';
    document.getElementById('info-panel').style.display = 'flex';
    
    // Opcional: agregar algún efecto a la esfera en RA
    const sphere = document.getElementById('target-object');
    if (sphere) {
        sphere.setAttribute('color', '#00FF00');
        sphere.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 3000');
    }
}

// Funciones para los botones
function showPlayers() {
    const teamInfo = document.querySelector('.team-info');
    teamInfo.innerHTML = `
        <div class="info-row">
            <span class="info-label">Portero:</span>
            <span class="info-value">Guillermo Ochoa</span>
        </div>
        <div class="info-row">
            <span class="info-label">Defensa:</span>
            <span class="info-value">César Montes</span>
        </div>
        <div class="info-row">
            <span class="info-label">Mediocampista:</span>
            <span class="info-value">Edson Álvarez</span>
        </div>
        <div class="info-row">
            <span class="info-label">Delantero:</span>
            <span class="info-value">Hirving Lozano</span>
        </div>
        <div class="info-row">
            <span class="info-label">Joven promesa:</span>
            <span class="info-value">Marcelo Flores</span>
        </div>
    `;
}

function showHistory() {
    const teamInfo = document.querySelector('.team-info');
    teamInfo.innerHTML = `
        <div class="info-row">
            <span class="info-label">Primer Mundial:</span>
            <span class="info-value">1930</span>
        </div>
        <div class="info-row">
            <span class="info-label">Mundial en casa:</span>
            <span class="info-value">1970 y 1986</span>
        </div>
        <div class="info-row">
            <span class="info-label">Partido histórico:</span>
            <span class="info-value">México 2-0 Alemania (2018)</span>
        </div>
        <div class="info-row">
            <span class="info-label">Goleador histórico:</span>
            <span class="info-value">Javier Hernández (52 goles)</span>
        </div>
    `;
}

function showMatches() {
    const teamInfo = document.querySelector('.team-info');
    teamInfo.innerHTML = `
        <div class="info-row">
            <span class="info-label">Fase de grupos:</span>
            <span class="info-value">Partido 1 vs. Equipo A</span>
        </div>
        <div class="info-row">
            <span class="info-label">Fase de grupos:</span>
            <span class="info-value">Partido 2 vs. Equipo B</span>
        </div>
        <div class="info-row">
            <span class="info-label">Fase de grupos:</span>
            <span class="info-value">Partido 3 vs. Equipo C</span>
        </div>
        <div class="info-row">
            <span class="info-label">Octavos de final:</span>
            <span class="info-value">Posible vs. Segundo Grupo D</span>
        </div>
    `;
}

function closePanel() {
    document.getElementById('info-panel').style.display = 'none';
    document.getElementById('scanning-indicator').style.display = 'flex';
    
    // Reiniciar el estado después de 3 segundos
    setTimeout(function() {
        if (imageScanned) {
            document.getElementById('scanning-indicator').style.display = 'none';
            document.getElementById('info-panel').style.display = 'flex';
        }
    }, 3000);
    
    imageScanned = false;
    
    // Restaurar la esfera a su estado original
    const sphere = document.getElementById('target-object');
    if (sphere) {
        sphere.setAttribute('color', '#EF2D5E');
        sphere.removeAttribute('animation');
    }
    
    // Restaurar la información original de México
    const teamInfo = document.querySelector('.team-info');
    teamInfo.innerHTML = `
        <div class="info-row">
            <span class="info-label">Confederación:</span>
            <span class="info-value">CONCACAF</span>
        </div>
        <div class="info-row">
            <span class="info-label">Apodo:</span>
            <span class="info-value">El Tri</span>
        </div>
        <div class="info-row">
            <span class="info-label">Director técnico:</span>
            <span class="info-value">Jaime Lozano</span>
        </div>
        <div class="info-row">
            <span class="info-label">Jugador estrella:</span>
            <span class="info-value">Guillermo Ochoa</span>
        </div>
        <div class="info-row">
            <span class="info-label">Participaciones:</span>
            <span class="info-value">17 Copas del Mundo</span>
        </div>
        <div class="info-row">
            <span class="info-label">Mejor resultado:</span>
            <span class="info-value">Cuartos de final (1970 y 1986)</span>
        </div>
    `;
    
    // Volver a simular el escaneo
    simulateImageScanning();
}

// En una implementación real con MindAR, conectaríamos los eventos reales:
// const scene = document.querySelector('a-scene');
// scene.addEventListener("targetFound", event => {
//     onImageScanned();
// });
// 
// scene.addEventListener("targetLost", event => {
//     closePanel();
// });