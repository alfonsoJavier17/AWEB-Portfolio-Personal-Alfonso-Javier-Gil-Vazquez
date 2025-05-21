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

//variables del carrusel 

const carrusel = document.querySelector(".body__header__proyectos__figure--1")
const btn_izq = document.querySelector(".body__main__proyectos__btn__izq")
const btn_drc = document.querySelector(".body__main__proyectos__btn__der")
const images = ["../assets/Proyectos.png", "../projects/color-flipper.png", "../projects/caja.png", "../projects/frases-random.png", "../projects/lista-tareas.png", "../projects/tareas-random.png"];
const points = document.querySelectorAll(".puntos");
const enl_proy = document.querySelector(".body__main__proyectos__ver--enl")
const proyectos = ["","../projects/color-flipper/index.html","../projects/proyecto_2/index.html","../projects/proyecto_3/index.html","../projects/proyecto_4/index.html","../projects/proyecto_5/index.html"]

//fin variables


//funciones

//funcion del boton de modos (modo claro a oscuro y al reves)


boton.addEventListener("click", function(){ 

    //cambiar colores

    header.classList.toggle("darkmode--header");
    main.classList.toggle("darkmode--main");
    main.classList.toggle("darkmode--letras")
    img.classList.toggle("darkmode--header");
    boton.classList.toggle("darkmode--header");

    //para colorear todos

    paginas.forEach(pagina => {
        pagina.classList.toggle("darkmode--letras")
    });

    //si esta enlace que lo pinte

    if(enlace){
        enlace.forEach(enl =>{
            enl.classList.toggle("darkmode--letras");
        });

    //Cambiar la luna por el sol y bicebersa

    if(img.src.includes("/assets/luna.png")){
        img.src = "/assets/sun_9055356.png";
    }else{
        img.src="/assets/luna.png"
    }
    }
});


//Funcion del carrusel 

let i = 0;

function act_Carrusel() {

    //cambiar las imgs

    carrusel.src = images[i];

    //cambiar enlace

    enl_proy.href = proyectos[i]

    //para que aparezca y desapazerca el enlace a los proyectos
    if(i==0){
        enl_proy.style.display="none";
    }else{
        enl_proy.style.display="block";
    }

    //bucle para ir cambiando el tamaño de los puntos

    points.forEach((point,indicador) => {
       if (indicador == i) {
            point.style.width = "1.5rem";
        }
        else {
            point.style.width = "1rem";
        }
    });
}


//Funcion para sumar (derecha)

function Car_drc() {
    i = i + 1;
    if (i >= images.length) {
        i = 0;
    }
    act_Carrusel();
}


//Funcion para restar (izquierda)

function Car_izq() {
    i = i - 1;
    if (i < 0) {
    i = images.length - 1;
    }
    act_Carrusel();
}


//Llamar funciones

btn_drc.addEventListener("click", Car_drc);
btn_izq.addEventListener("click", Car_izq);