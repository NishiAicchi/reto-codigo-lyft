$(document).ready(function() {
  $labCode = $('#lab-code');
  $phoneShow = $('h6');
  $reCode = $('#re-code');
  $btn = $('#next-btn');  

  // mostrando el numero registrado
  $phoneShow.append('<strong> +' + localStorage.phone);

  // evento que verifica el codigo ingresado
  $labCode.on('input', function(e) {
    $count = ($(this).val());
    if ($count === localStorage.code) {
      $labCode.attr('disabled', 'disabled');
      activateBtn();
    } else {
      desactiveBtn();
    }
  });

  // evento que genera nuevo codigo
  $reCode.on('click', function(e) {
    labCode = Math.floor(Math.random() * 899) + 100;
    alert('Tu codigo LAB es ' + labCode);
    localStorage.code = labCode;
    $labCode.attr('disabled', false);
    $labCode.val('');
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