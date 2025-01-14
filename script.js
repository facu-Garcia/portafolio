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


const menu = document.getElementById('menu');
const lines = menu.querySelectorAll('.line');
const navbar = document.getElementById('navbar');

menu.addEventListener('click', () => {
    lines.forEach(line => {
        line.classList.toggle('active');
    });

    navbar.classList.toggle('active');

});



const filterItems = document.querySelectorAll(".filters li");

filterItems.forEach(item => {
    item.addEventListener("click", () => {
        filterItems.forEach(li => li.classList.remove("active"));

        item.classList.add("active");
    });
});

const filters = document.querySelectorAll(".filters li"); // Seleccionar los filtros
const projects = document.querySelectorAll(".projects__cards .card"); // Seleccionar las tarjetas

filters.forEach(filter => {
    filter.addEventListener("click", () => {
        const category = filter.getAttribute("data-filter"); // Obtener la categoría seleccionada

        // Activar solo el filtro seleccionado
        filters.forEach(f => f.classList.remove("active"));
        filter.classList.add("active");

        // Mostrar/Ocultar proyectos según la categoría
        projects.forEach(project => {
            const projectCategory = project.getAttribute("data-category");

            // Mostrar proyecto si pertenece a la categoría seleccionada
            if (projectCategory.includes(category) || category === "all") {
                project.style.display = "block"; // Mostrar
            } else {
                project.style.display = "none"; // Ocultar
            }
        });
    });
});

