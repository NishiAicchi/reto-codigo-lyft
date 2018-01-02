$(document).ready(function() {
  $icon = $('#icon-complete');
  $logo = $('#logo');

  // animacion del icono
  $icon.fadeOut(500).fadeIn(2000);

  // redireccionando a la vista HOME
  window.location.href = 'home.html';
});