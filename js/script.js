//pongo los colores

const color_header = ["rgb(233, 228, 228)","rgb(59, 57, 57)"];
const color_main = ["rgb(219, 212, 212)","rgb(22, 20, 20)"];

//variables

//variables del modo oscuro y claro

const boton = document.querySelector(".body__header__figure__btn");
const header = document.querySelector (".body__header");
const main = document.querySelector (".body__main");
const body = document.querySelector (".body");
const mas = document.querySelector (".body__main__texto__secundario--texto--Más")
const enlace = document.querySelector (".enlace")
const img = document.querySelector (".body__header__figure__btn--luna")
const paginas = document.querySelectorAll(".paginas")

//variables del carrusel antiguo

const carrusel = document.querySelector(".body__header__proyectos__figure--1")
const btn_izq = document.querySelector(".body__main__proyectos__btn__izq")
const btn_drc = document.querySelector(".body__main__proyectos__btn__der")
const pt_1 = document.querySelector(".body__main__proyectos__btn__puntos--1")
const pt_2 = document.querySelector(".body__main__proyectos__btn__puntos--2")
const pt_3 = document.querySelector(".body__main__proyectos__btn__puntos--3")
const pt_4 = document.querySelector(".body__main__proyectos__btn__puntos--4")
const pt_5 = document.querySelector(".body__main__proyectos__btn__puntos--5")
const pt_6 = document.querySelector(".body__main__proyectos__btn__puntos--6")

//variables del carrusel nuevo

const images = ["../assets/Proyectos.png", "../projects/color-flipper.png", "../projects/caja.png", "../projects/frases-random.png", "../projects/lista-tareas.png", "../projects/tareas-random.png"];
const points = [pt_1, pt_2, pt_3, pt_4, pt_5, pt_6];

//fin variables

//funciones

//funcion modo oscuro y claro

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

//Funcion del carrusel antigua

/*
let e=0;

btn_drc.addEventListener("click", function (){
    if(e==0){
        carrusel.src="../projects/color-flipper.png"
        pt_1.style.width="1rem"
        pt_2.style.width="1.5rem"
        e=e+1
    }else if(e==1){
        carrusel.src="../projects/caja.png"
        pt_2.style.width="1rem"
        pt_3.style.width="1.5rem"
        e=e+1
    }else if(e==2){
        carrusel.src="../projects/frases-random.png"
        pt_3.style.width="1rem"
        pt_4.style.width="1.5rem"
        e=e+1
    }else if(e==3){
        carrusel.src="../projects/lista-tareas.png"
        pt_4.style.width="1rem"
        pt_5.style.width="1.5rem"
        e=e+1
    }else if(e==4){
        carrusel.src="../projects/tareas-random.png"
        pt_5.style.width="1rem"
        pt_6.style.width="1.5rem"
        e=e+1
    }
});

btn_izq.addEventListener("click", function (){
    if(e==1){
        carrusel.src="../assets/Proyectos.png"
        pt_1.style.width="1.5rem"
        pt_2.style.width="1rem"
        e=e-1
    }else if(e==2){
        carrusel.src="../projects/color-flipper.png"
        pt_2.style.width="1.5rem"
        pt_3.style.width="1rem"
        e=e-1
    }else if(e==3){
        carrusel.src="../projects/caja.png"
        pt_3.style.width="1.5rem"
        pt_4.style.width="1rem"
        e=e-1
    }else if(e==4){
        carrusel.src="../projects/frases-random.png"
        pt_4.style.width="1.5rem"
        pt_5.style.width="1rem"
        e=e-1
    }else if(e==5){
        carrusel.src="../projects/lista-tareas.png"
        pt_5.style.width="1.5rem"
        pt_6.style.width="1rem"
        e=e-1
    }
});
*/

//Funcion del carrusel nueva

let e = 0;

//funcion del bucle del carrusel pero en for

/*
function act_Carrusel() {
    carrusel.src = images[e];
    for (let indicador = 0; indicador < points.length; indicador++) {
        const point = points[indicador];
        if (indicador == e) {
            point.style.width = "1.5rem"; 
        } else {
            point.style.width = "1rem";
        }
    }
}
*/

function act_Carrusel() {
    carrusel.src = images[e];
    points.forEach((point,indicador) => {
       if (indicador == e) {
            point.style.width = "1.5rem";
        }
        else {
            point.style.width = "1rem";
        }
    });
}


function Car_drc() {
    e = e + 1;
    if (e >= images.length) {
        e = 0;
    }
    act_Carrusel();
}

function Car_izq() {
    e = e - 1;
    if (e < 0) {
    e = images.length - 1;
    }
    act_Carrusel();
}

btn_drc.addEventListener("click", Car_drc);
btn_izq.addEventListener("click", Car_izq);