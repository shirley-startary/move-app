function cargarPagina (){
  $(".cabello-amarillo").click(editarAvatar);
}

function editarAvatar(){
  if($(".cabello-amarillo") !== $){
    $(".avatar").attr("src", "../assets/img/monos-12.png");
  }
}

$(document).ready(cargarPagina);
