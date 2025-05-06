//pongo los colores

const color_header = ["rgb(233, 228, 228)","rgb(59, 57, 57)"];
const color_main = ["rgb(219, 212, 212)","rgb(22, 20, 20)"];

//variables

const boton = document.querySelector(".body__header__figure__btn");
const header = document.querySelector (".body__header");
const main = document.querySelector (".body__main");
const body = document.querySelector (".body");

//funcion del boton

let i=0;

boton.addEventListener("click", function(){    
    if (i == 0) {
        header.style.backgroundColor = color_header[1];
        main.style.backgroundColor = color_main[1];
        body.style.color = "white";
        i = 1;
    } else {
        header.style.backgroundColor = color_header[0];
        main.style.backgroundColor = color_main[0];
        body.style.color = "black";
        i = 0; 
    }
});