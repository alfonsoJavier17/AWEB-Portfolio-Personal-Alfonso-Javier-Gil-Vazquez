
    const caja = document.querySelector(".main__cuadrado");
    const boton = document.querySelector(".main__boton--abr");

    boton.addEventListener("click", function () {
        if (caja.style.display == "none") {
            //console.log("entra if")
            caja.style.display = "block";
            boton.textContent = "Ocultar caja";
        } else {
            //console.log("entra else")
            caja.style.display = "none";
            boton.textContent = "Mostrar caja";
        }
    });