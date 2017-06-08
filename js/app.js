var cargarPagina = function(){
  $(".btnjugar").click(cambiarPagina);
}

var cambiarPagina = function(e){
  e.preventDefault();
  location.href = "views/modojuego.html"
}
$(document).ready(cargarPagina);
