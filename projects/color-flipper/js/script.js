//array de colores
const colores = ["red", "yellow", "green", "purple", "pink", "blue", "orange", "brown", "cyan", "magenta", "lime", "maroon", "navy", "olive", "teal", "aqua", "fuchsia", "gold", "silver", "coral"];

//declarar variables
const texto = document.querySelector(".body__main__titulo__color--simple");
const boton = document.querySelector(".body__main__boton__abr__simple");
const main = document.querySelector(".body__main"); 
let titulo_color= document.querySelector(".body__main__titulo__color--simple"); 

//evento click
boton.addEventListener("click", function () {

    const rand_number = colores[Math.floor(Math.random()*colores.length)]; // Cambia el color de fondo del botón
    texto.textContent = rand_number; // Cambia el color de fondo del botón
    main.style.backgroundColor = rand_number; // Cambia el color de fondo del main
    titulo_color.style.color = rand_number; // Cambia el color de fondo del botón
    boton.style.backgroundColor = rand_number; // Cambia el color de fondo del botón
    
});