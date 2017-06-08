var cargarPagina = function (){
  $('.modal').modal();
  $("#btnmenu").click(function(){
    location.href ="../home.html"
  })
  // $("body").
  setInterval(function(){
    $('body').css('background-image', 'url(../assets/img/streetBackground-green.png)');
  },1000);
  setInterval(function(){
    $('body').css('background-image', 'url(../assets/img/streetBackground-red.png)');
  },1000);
}
$(document).ready(cargarPagina);
