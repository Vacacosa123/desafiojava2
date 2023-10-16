// Primero trae imagen a variable
const imagen = document.querySelector("#imagenid");
//Se agrega addeventlistenes para programar funcion click
imagen.addEventListener("click", cambiarColor)
// Se cambia el color con la funcion utilizando IF
function cambiarColor(e) {
    const elemento = e.target
    if (elemento.id === "imagenid") {
        elemento.classList.toggle("imagen1")
    }
}
