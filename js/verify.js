$(document).ready(function() {
  $labCode = $('input[type=number]');
  $phoneShow = $('h6 strong');
  $reCode = $('re-code');
  $nextBtn = $('next-btn');  

  // declarando variables
  validateCode = false;

  // Evento que activa el botón
  function activateBtn() {
    $nextBtn.attr('disabled', false);
  };

  // Evento que desactiva el botón
  function desactiveBtn() {
    $nextBtn.attr('disabled', 'disabled');
  };

  $labCode.on('keyup', function(e) {
    console.log($(this).val());
  });
});