//pongo los colores

const color_header = ["rgb(233, 228, 228)","rgb(59, 57, 57)"];
const color_main = ["rgb(219, 212, 212)","rgb(22, 20, 20)"];

//variables

const boton = document.querySelector(".body__header__figure__btn");
const header = document.querySelector (".body__header");
const main = document.querySelector (".body__main");
const body = document.querySelector (".body");
const mas = document.querySelector (".body__main__texto__secundario--texto--Más")
const enlace = document.querySelector ("#enlace")
const img = document.querySelector (".body__header__figure__btn--luna")
const paginas = document.querySelectorAll(".paginas")


const carrusel = document.querySelector(".carrusel")
const btn_izq = document.querySelector("body__main__proyectos__btn__izq")
const btn_drc = document.querySelector("body__main__proyectos__btn__der")

//funcion del boton de modos (modo claro a oscuro y al reves)

let i=0;

boton.addEventListener("click", function(){    
    if (i == 0) {
        header.style.backgroundColor = color_header[1];
        main.style.backgroundColor = color_main[1];
        body.style.color = "white";
        img.src="/assets/sun_9055356.png";
        img.style.backgroundColor=color_header[1];
        boton.style.backgroundColor=color_header[1];
        paginas.forEach(pagina => {
            pagina.style.color="white"
        });
        if(enlace){
            enlace.style.color ="white";
        }
        i = 1;
    } else {
        header.style.backgroundColor = color_header[0];
        main.style.backgroundColor = color_main[0];
        body.style.color = "black";
        img.src="/assets/luna.png"
        img.style.backgroundColor=color_header[0];
        boton.style.backgroundColor=color_header[0];
        paginas.forEach(pagina => {
            pagina.style.color="black"
        });
        if(enlace){
            enlace.style.color ="black";
        }
        i = 0;
    }
});

//Funcion del carrusel

let e=0
btn_izq.addEventListener("Click", function (){
    for(e;e)
})