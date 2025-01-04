const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Crear partículas
const particles = [];

function createParticles() {
    for (let i = 0; i < 80; i++) { // Ajusta el número de partículas
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1, // Tamaño de las bolitas
            dx: (Math.random() - 0.5) * 1.5, // Velocidad horizontal
            dy: (Math.random() - 0.5) * 1.5, // Velocidad vertical
        });
    }
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff'; // Color de las bolitas
        ctx.fill();

        // Actualizar posición
        p.x += p.dx;
        p.y += p.dy;

        // Rebote en los bordes
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    requestAnimationFrame(drawParticles);
}

// Redimensionar canvas al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

createParticles();
drawParticles();
