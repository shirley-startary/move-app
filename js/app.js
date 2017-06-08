var cargarPagina = function(){
  $("#btnjugar").click(cambiarPagina);
}

var cambiarPagina = function(e){
  e.preventDefault();
  location.href = "views/avatar.html"
}
$(document).ready(cargarPagina);
