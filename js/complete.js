$(document).ready(function() {
  $icon = $('#icon-complete');
  $logo = $('#logo');

  // animacion del icono
  $icon.fadeOut(500).fadeIn(2000);

  // redireccionando a la vista HOME
  setTimeout(function() {
    window.location.href = 'home.html';
  }, 2000);
  
});