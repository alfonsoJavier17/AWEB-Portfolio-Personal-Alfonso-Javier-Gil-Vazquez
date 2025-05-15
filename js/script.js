//variables

//variables del modo oscuro y claro

const boton = document.querySelector(".body__header__figure__btn");
const header = document.querySelector (".body__header");
const main = document.querySelector (".body__main");
const body = document.querySelector (".body");
const mas = document.querySelector (".body__main__texto__secundario--texto--Más")
const enlace = document.querySelectorAll (".enlace")
const img = document.querySelector (".body__header__figure__btn--luna")
const paginas = document.querySelectorAll(".paginas")

//variables del carrusel antiguo

const carrusel = document.querySelector(".body__header__proyectos__figure--1")
const btn_izq = document.querySelector(".body__main__proyectos__btn__izq")
const btn_drc = document.querySelector(".body__main__proyectos__btn__der")
const images = ["../assets/Proyectos.png", "../projects/color-flipper.png", "../projects/caja.png", "../projects/frases-random.png", "../projects/lista-tareas.png", "../projects/tareas-random.png"];
const points = document.querySelectorAll(".puntos");

//fin variables

//funciones

//funcion modo oscuro y claro

//funcion del boton de modos (modo claro a oscuro y al reves)

let i=0;

boton.addEventListener("click", function(){ 

    header.classList.toggle("darkmode--header");
    main.classList.toggle("darkmode--main");
    main.classList.toggle("darkmode--letras")
    img.classList.toggle("darkmode--header");
    // img.classList.toggle("darkmode--btn");
    boton.classList.toggle("darkmode--header");
    paginas.forEach(pagina => {
        pagina.classList.toggle("darkmode--letras")
    });
    if(enlace){
        enlace.forEach(enl =>{
            enl.classList.toggle("darkmode--letras");
        })

    if(img.src=="/assets/luna.png"){
        img.src = "/assets/sun_9055356.png";
    }else{
        img.src="/assets/sun_9055356.png"
    }
    }
});

//Funcion del carrusel nueva

let j = 0;

function act_Carrusel() {
    carrusel.src = images[j];
    points.forEach((point,indicador) => {
       if (indicador == j) {
            point.style.width = "1.5rem";
        }
        else {
            point.style.width = "1rem";
        }
    });
}

function Car_drc() {
    j = j + 1;
    if (j >= images.length) {
        j = 0;
    }
    act_Carrusel();
}

function Car_izq() {
    j = j - 1;
    if (j < 0) {
    j = images.length - 1;
    }
    act_Carrusel();
}

btn_drc.addEventListener("click", Car_drc);
btn_izq.addEventListener("click", Car_izq);