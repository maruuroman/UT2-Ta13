const boton = document.getElementById("cambiarTexto");
const parrafo = document.getElementById("texto");

boton.addEventListener("click", function() {
  parrafo.textContent = "Texto cambiado";
});