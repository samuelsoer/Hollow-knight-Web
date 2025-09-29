function mostrarSeccion(id) {
  document.getElementById("seleccion").style.display = "none"; 
  document.getElementById(id).classList.add("visible"); 
}

function volver() {
  document.getElementById("seleccion").style.display = "block"; 
  document.getElementById("caballerito").classList.remove("visible");
  document.getElementById("hornet").classList.remove("visible");
}
