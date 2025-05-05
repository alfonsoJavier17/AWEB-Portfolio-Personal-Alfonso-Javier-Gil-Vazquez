//pongo los colores

const color_header = ["rgb(59, 57, 57)","rgb(233, 228, 228)"];
const color_main = ["rgb(22, 20, 20)","rgb(219, 212, 212)"];

//variables

const boton = document.querySelector(".body__header__figure__btn");
const header = document.querySelector (".body__header");
const main = document.querySelector (".body__main");

//funcion del boton

boton.addEventListener("click", function(){ 
    main.style.backgroundColor = color_main[2];
    header.style.backgroundColor = color_header[2];
})