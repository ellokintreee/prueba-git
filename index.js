//guardar el estado acitva
let columnaActiva = 1;
let columnas = document.querySelector(".columna");

columnas.forEach((columna, indice)=>{
    columnas.addEventListener("click", function () {
        cambiarColumna(indice)
    })
});

function cambiarColumna(indice){
    columnas[columnaActiva].classList.remove("activa")
    columnas[indice].classList.add("activa")
    columnaActiva = indice
}