// Variables globales
let imageScanned = false;

// Detectar si es dispositivo móvil
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

document.addEventListener('DOMContentLoaded', function() {
    const introScreen = document.getElementById('intro-screen');
    const startButton = document.getElementById('start-button');
    const scanningIndicator = document.getElementById('scanning-indicator');
    const closeButton = document.getElementById('close-button');
    
    // Optimizar para móviles
    if (isMobile) {
        document.body.classList.add('mobile-device');
        // Ajustar tiempo de escaneo para móviles
        window.scanTime = 2000;
    } else {
        window.scanTime = 3000;
    }
    
    // Evento para el botón de comenzar
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
        
        // Simular el escaneo de imagen
        simulateImageScanning();
    });
    
    // Evento para el botón de cerrar
    closeButton.addEventListener('click', closePanel);
    
    // Prevenir acciones por defecto en móviles
    document.addEventListener('touchstart', function(e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });
    
    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
    });
});

function simulateImageScanning() {
    // En una aplicación real, esto se conectaría con los eventos de MindAR
    setTimeout(function() {
        if (!imageScanned) {
            onImageScanned();
        }
    }, window.scanTime || 2500);
}

function onImageScanned() {
    imageScanned = true;
    document.getElementById('scanning-indicator').style.display = 'none';
    document.getElementById('info-panel').style.display = 'block';
    
    // Efecto en la esfera de RA
    const sphere = document.getElementById('target-object');
    if (sphere) {
        sphere.setAttribute('color', '#00FF00');
        sphere.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 3000');
    }
    
    // Vibrar en dispositivos móviles (si está disponible)
    if (isMobile && navigator.vibrate) {
        navigator.vibrate(200);
    }
}

function closePanel() {
    document.getElementById('info-panel').style.display = 'none';
    document.getElementById('scanning-indicator').style.display = 'flex';
    
    // Reiniciar el estado
    setTimeout(function() {
        if (imageScanned) {
            document.getElementById('scanning-indicator').style.display = 'none';
            document.getElementById('info-panel').style.display = 'block';
        }
    }, 3000);
    
    imageScanned = false;
    
    // Restaurar la esfera a su estado original
    const sphere = document.getElementById('target-object');
    if (sphere) {
        sphere.setAttribute('color', '#EF2D5E');
        sphere.removeAttribute('animation');
    }
    
    // Volver a simular el escaneo
    simulateImageScanning();
}

// Manejar la orientación del dispositivo
function handleOrientation() {
    if (isMobile) {
        const isPortrait = window.innerHeight > window.innerWidth;
        if (isPortrait) {
            document.body.classList.add('portrait');
            document.body.classList.remove('landscape');
        } else {
            document.body.classList.add('landscape');
            document.body.classList.remove('portrait');
        }
    }
}

// Escuchar cambios de orientación
window.addEventListener('resize', handleOrientation);
window.addEventListener('orientationchange', handleOrientation);

// Inicializar la orientación
handleOrientation();

// En una implementación real con MindAR, conectaríamos los eventos reales:
/*
const scene = document.querySelector('a-scene');
scene.addEventListener("targetFound", event => {
    onImageScanned();
});

scene.addEventListener("targetLost", event => {
    closePanel();
});
*/

// Prevenir el desplazamiento en iOS
document.addEventListener('touchmove', function(e) {
    if (e.scale !== 1) {
        e.preventDefault();
    }
}, { passive: false });