//declarar variables
const texto = document.querySelector(".body__main__titulo__color");
const boton = document.querySelector(".body__main__boton__abr__hex");
const main = document.querySelector(".body__main__hex");

//evento click
boton.addEventListener("click", function () { 
    const rand_color = generarColorHex(); // Genera un color hexadecimal aleatorio
    texto.textContent = rand_color; // Cambia el color de fondo del botón
    main.style.backgroundColor = rand_color; // Cambia el color de fondo del main
    boton.style.backgroundColor = rand_color; // Cambia el color de fondo del botón
});

//función para generar colores hexadecimales
function generarColorHex() {
    const hex = '0123456789ABCDEF'; // Caracteres válidos para un color hexadecimal
    let color = '#'; // Inicializamos la variable color con el símbolo de color hexadecimal
    for (let i = 0; i < 6; i++) { // Generamos un color hexadecimal de 6 caracteres
        color += hex[Math.floor(Math.random() * 16)]; // Añadimos un carácter hexadecimal aleatorio
    }
    return color; // Devolvemos el color hexadecimal generado
}