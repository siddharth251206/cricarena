let scene, camera, renderer, particles, particleSystem;
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

// Loading simulation
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
    document.getElementById('loadingText').innerText = `Loading CRICARENA... ${Math.floor(loadingProgress)}%`;
}, 100);

function init() {
    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Create Spotify-themed particles
    createParticles();

    // Camera position
    camera.position.z = 50;

    // Mouse event listeners
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('touchstart', onDocumentTouchStart, false);
    document.addEventListener('touchmove', onDocumentTouchMove, false);

    // Window resize
    window.addEventListener('resize', onWindowResize, false);

    animate();
}

function createParticles() {
    const particleCount = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    // Spotify-themed colors
    const spotifyColors = [
        0x1DB954, // Spotify Green
        0x1ed760, // Spotify Light Green
        0x191414, // Spotify Black
        0x535353, // Spotify Gray
        0xB3B3B3  // Spotify Light Gray
    ];

    for (let i = 0; i < particleCount; i++) {
        // Position particles in a sphere
        const radius = 100 + Math.random() * 50;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);

        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);

        // Random Spotify color
        const color = spotifyColors[Math.floor(Math.random() * spotifyColors.length)];
        colors[i * 3] = (color >> 16) / 255;
        colors[i * 3 + 1] = ((color >> 8) & 255) / 255;
        colors[i * 3 + 2] = (color & 255) / 255;

        // Random sizes
        sizes[i] = Math.random() * 3 + 1;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Create shader material
    const material = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0 }
        },
        vertexShader: `
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            uniform float time;
            
            void main() {
                vColor = color;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (300.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            varying vec3 vColor;
            
            void main() {
                float distance = length(gl_PointCoord - vec2(0.5));
                if (distance > 0.5) discard;
                gl_FragColor = vec4(vColor, 1.0 - distance * 2.0);
            }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending
    });

    particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);
}

function animate() {
    requestAnimationFrame(animate);

    const time = Date.now() * 0.001;

    // Rotate particle system
    if (particleSystem) {
        particleSystem.rotation.x = time * 0.1;
        particleSystem.rotation.y = time * 0.15;
        particleSystem.material.uniforms.time.value = time;

        // Mouse interaction
        particleSystem.rotation.x += (mouseY - particleSystem.rotation.x) * 0.05;
        particleSystem.rotation.y += (mouseX - particleSystem.rotation.y) * 0.05;
    }

    renderer.render(scene, camera);
}

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) * 0.001;
    mouseY = (event.clientY - windowHalfY) * 0.001;
}

function onDocumentTouchStart(event) {
    if (event.touches.length === 1) {
        event.preventDefault();
        mouseX = (event.touches[0].pageX - windowHalfX) * 0.001;
        mouseY = (event.touches[0].pageY - windowHalfY) * 0.001;
    }
}

function onDocumentTouchMove(event) {
    if (event.touches.length === 1) {
        event.preventDefault();
        mouseX = (event.touches[0].pageX - windowHalfX) * 0.001;
        mouseY = (event.touches[0].pageY - windowHalfY) * 0.001;
    }
}

function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function enterWebsite() {
    // Add transition effect
    const overlay = document.querySelector('.ui-overlay');
    overlay.style.transition = 'opacity 1s ease-out';
    overlay.style.opacity = '0';

    // After overlay fades out, remove it
    setTimeout(() => {
        overlay.parentNode.removeChild(overlay);
        // Uncomment the line below when you have your main website ready
        // window.location.href = 'hindex.html';
    }, 1000);
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add click effects to particles
    if (renderer) {
        renderer.domElement.addEventListener('click', function(event) {
            const rect = renderer.domElement.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            // Create a burst effect at click position
            createBurstEffect(x, y);
        });
    }

});

function createBurstEffect(x, y) {
    // Create temporary particles for burst effect
    const burstGeometry = new THREE.BufferGeometry();
    const burstCount = 20;
    const burstPositions = new Float32Array(burstCount * 3);
    const burstColors = new Float32Array(burstCount * 3);

    for (let i = 0; i < burstCount; i++) {
        burstPositions[i * 3] = x * 50;
        burstPositions[i * 3 + 1] = y * 50;
        burstPositions[i * 3 + 2] = 0;

        burstColors[i * 3] = 0.11; // Spotify Green
        burstColors[i * 3 + 1] = 0.73;
        burstColors[i * 3 + 2] = 0.33;
    }

    burstGeometry.setAttribute('position', new THREE.BufferAttribute(burstPositions, 3));
    burstGeometry.setAttribute('color', new THREE.BufferAttribute(burstColors, 3));

    const burstMaterial = new THREE.PointsMaterial({
        size: 5,
        vertexColors: true,
        transparent: true,
        opacity: 1
    });

    const burstParticles = new THREE.Points(burstGeometry, burstMaterial);
    scene.add(burstParticles);

    // Animate burst effect
    let burstTime = 0;
    const burstAnimation = () => {
        burstTime += 0.05;
        const positions = burstParticles.geometry.attributes.position.array;

        for (let i = 0; i < burstCount; i++) {
            positions[i * 3] += (Math.random() - 0.5) * 2;
            positions[i * 3 + 1] += (Math.random() - 0.5) * 2;
            positions[i * 3 + 2] += (Math.random() - 0.5) * 2;
        }

        burstParticles.geometry.attributes.position.needsUpdate = true;
        burstMaterial.opacity = 1 - burstTime;

        if (burstTime < 1) {
            requestAnimationFrame(burstAnimation);
        } else {
            scene.remove(burstParticles);
        }
    };

    burstAnimation();
}

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
