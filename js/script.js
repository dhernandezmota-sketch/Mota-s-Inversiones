//Datos para Filtrar//

//Primer Filtro: inversiones//

const dwmota = [

//Tus inversiones//
{id: 1, name:"Qué dicen tus inversiones?", image: "img/Mota´s 8.jpg", genero:"tus-inversiones", description: "Te ayudaremos a interpretar de la manera correcta tus inversiones sin que te espantes"},
{id: 2, name:"Qué hacer ahora?", image: "img/Mota´s 7.jpg", genero:"tus-inversiones", description: "Amplificaremos tu visión sobre las areas de oportunidad y las empresas que más empatan con tus necesidades"},
{id: 3, name:"Qué es saludable?", image: "img/Mota´s6.jpg", genero:"tus-inversiones", description: "Diversificar siempre sera tu mejor opción y nosotros te enseñaremos cómo hacerlo"},
{id: 4, name:"Avanzar más", image: "img/Mota´s 5.jpg", genero:"tus-inversiones", description: "Si ya tienes una buena base, ahora te enseñaremos esos trucos que usa la gente profesional en las grandes compañias"},

//Principiantes//

{id: 5, name:"Quieres aprender a invertit?", image: "img/Mota´s.jpg", genero:"principiantes", description: "Te enseñaremos todo sobre las inversiones para que entiendas el mundo financiero"},
{id: 6, name:"Qué se necesita?", image: "img/Mota´s 1.jpg", genero:"principiantes", description: "Solo necesitas tu laptop, y el deseo de hacer crecer tu dinero"},
{id: 7, name:"Cursos desde nivel 0", image: "img/Mota´s 3.png", genero:"principiantes", description: "No importa que no sepas nada del mundo financiero, nuestros cursos son para todos"},
{id: 8, name:"Duración?", image: "img/Mota´s 4.jpg", genero:"principiantes", description: "Nuestro asesoramiento es personalizado y no comprometemos a tu dinero a una mensualidad"},

];

// Obtener los contenedores y botones del DOM
const dwmotaContainer = document.getElementById("curso-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas 
function renderDw(genero) {
    const dwmotaToRender = genero === "all"
        ? dwmota
        : dwmota.filter(dw => dw.genero === genero);
    const dwmotaContainers = document.querySelectorAll("#curso-container");
    const container = dwmotaContainers[0] || dwmotaContainer;

    if (!container) {
        return;
    }

    // Limpia el contenedor antes de renderizar
    dwmotaContainers.forEach(element => {
        element.innerHTML = '';
    });

    if (dwmotaToRender.length === 0) {
        container.innerHTML = '<p class="text-center w-100">No hay disponibles para esta categoría.</p>';
        return;
    }

    // Crea y agrega las tarjetas
    container.innerHTML = dwmotaToRender.map(dw => `
            <figure class="dw-card" data-gender="${dw.genero}">
                <img src="${dw.image}" alt="Con nosotros podras aprender a manejatr tu dinero o podemos manejarlo por ti, nombre: ${dw.name}">
                <figcaption>
                ${dw.name}
            </figcaption>
                <div class="card-description">
                    <p>${dw.description}</p>
                </div>
            </figure>
        `).join('');

}

// Agrega event listeners a los botones de filtro
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const genero = button.dataset.category;


        // Remueve la clase 'active' de todos los botones
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Agrega la clase 'active' al botón clickeado
        button.classList.add("active");
        
        // Renderiza las tarjetas con el filtro seleccionado
        renderDw(genero);
    });
});

// Renderizar todos para cargar la página
document.addEventListener("DOMContentLoaded", () => {
    renderDw('all');
});


// Función para el botón de volver al inicio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}