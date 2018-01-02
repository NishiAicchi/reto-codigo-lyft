$(document).ready(function() {
  $labCode = $('#lab-code');
  $phoneShow = $('h6');
  $reCode = $('re-code');
  $btn = $('#next-btn');  

  // mostrando el numero registrado
  $phoneShow.append('<strong> +' + localStorage.phone);

  // evento que verifica el codigo ingresado
  $labCode.on('keyup', function(e) {
    $count = ($(this).val());
    if ($count === localStorage.code) {
      $labCode.attr('disabled', 'disabled');
      activateBtn();
    } else {
      desactiveBtn();
    }
  });

  // funcion que activa el boton
  function activateBtn() {
    $btn.prop('disabled', false);
    $btn.removeClass('offBtn');
    $btn.addClass('onBtn');
  };

  // funcion que desactiva el boton
  function desactiveBtn() {
    $btn.attr('disabled', 'disabled');
  }
  
  //
  $btn.on('click', function(e) {
    e.preventDefault();
    window.location.href = 'dates.html';
  });
});