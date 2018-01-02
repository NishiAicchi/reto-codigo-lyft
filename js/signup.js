$(document).ready(function() {
  // selección de Elementos
  var $phone = $('#phone-number');
  var $flags = $('li');
  var $btn = $('#next-btn');

  // declarando variables
  var count;
  var validatePhone = false;
  var MINCHARACTER = 11;

  // Evento para seleccionar el país
  $flags.on('click', function(e) {
    count = $(this).data('option');
    switch (true) {
    case count === 0:
      $('#PE').replaceAll($('dropdownMenu :first-child'));
      $phone.val('51');
      break;
    case count === 1:
      $('#BR').replaceAll($('#dropdownMenu :first-child'));
      $phone.val('55');
      break;
    case count === 2:
      $('#USA').replaceAll($('#dropdownMenu :first-child'));
      $phone.val('01');
      break;
    }

    // añadiendo clase para que no cambie el tamaño del botón
    $('#dropdownMenu').addClass('btn-flag');
    // habilitando el input
    $phone.attr('disabled', false);
    codeLength = $phone.val().length;  
  });

  // evento para validar el numero telefonico ingresado

  $phone.on('keyup', function(e) {
    $phoneLength = $(this).val().length;
    if ($phoneLength === MINCHARACTER) {
      $phone.attr('disabled', 'disabled');
      $phoneValue = $phoneLength - codeLength;
      validatePhone = true;

      activateBtn();
    } else if ($phoneLength < MINCHARACTER) {
      validatePhone = false;
      desactiveBtn();
    }
  });

  // Evento para activar boton
  function activateBtn() {
    $btn.attr('disabled', false);
    $btn.removeClass('offBtn');
    $btn.addClass('onBtn');
  };

  // Evento para desactivar botón
  function desactiveBtn() {
    $btn.attr('disabled', 'disabled');
  }

  // Evento del botón "NEXT"
  $btn.on('click', function(e) {
    e.preventDefault();
    labCode = Math.floor(Math.random() * 800) + 100;
    alert('Tu codigo LAB es ' + labCode)
    
    // almacenando en la memoria local 
    localStorage.code = labCode;
    localStorage.phone = $phone.val();
    window.location.href = 'verify.html';
  });
});