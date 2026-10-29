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
    let dwmotaToRender = [];
    if (genero === "all") {
        dwmotaToRender = dwmota;
    } else {
        dwmotaToRender = dwmota.filter(Dwmota => Dwmota.genero === genero);
    }
}