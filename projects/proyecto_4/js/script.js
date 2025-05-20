const texto = document.querySelector(".main__form__input")
const boton = document.querySelector(".main__form__btn")
const lista = document.querySelector(".main__lista")
const array = []


function addTask(event) {
    event.preventDefault();
    const tarea = texto.value;

    if (tarea != "") {
        console.log(tarea);
        const li = document.createElement("li");
        li.classList.add("main__lista__texto");
        const btn_borrar = document.createElement("button");

        li.textContent = tarea;
        lista.appendChild(li);
        texto.value = "";


        array.push(tarea);
        console.log(array);

        btn_borrar.textContent = "X";
        li.appendChild(btn_borrar);
        
        btn_borrar.addEventListener("click", () => {
            for (let i=0; i<array.length; i=i+1) {
                if (array[i] == tarea) {
                    array.splice(i, 1);
                    console.log(array);
                }
            }
            li.remove();
        });

        li.appendChild(btn_borrar);
        lista.appendChild(li);

    }
}


boton.addEventListener("click", addTask);

function seleccionarTareaAleatoria() {
    let items = document.querySelectorAll('.main__lista__texto');
    
    items.forEach(item =>{
        console.log(item);
        if (item.classList.contains('seleccionado')){
            item.classList.remove('seleccionado');
    }
    });

    let indiceAleatorio = Math.floor(Math.random() * items.length);
    const elemento = items[indiceAleatorio]
    elemento.classList.add('seleccionado');
};