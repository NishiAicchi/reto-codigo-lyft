$(document).ready(function() {
  $input = $('#name');
  $email = $('#email');
  $checkbox = $('#checkbox');
  $btn = $('#next-btn');

  // declarando variables
  validateName = false;
  validateEmail = false;
  validateChecked = false;

  // expresion regular para verificar email
  var REGEX = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;

  // funciones que activan el boton
  function activateBtn() {
    $btn.attr('disabled', false);
    $btn.removeClass('offBtn');
    $btn.addClass('onBtn');
  };

  function desactivateBtn() {
    $btn.attr('disabled', 'disabled');
  };

  // validar los datos ingresados en el input "name"
  $input.on('input', function() {
    // console.log($(this).val());
    if ($(this).val().length >= 6) {
      nameValue = $(this).val;
      validateName = true;
    } else {
      desactivateBtn();
    };
  });

  // validar los datos ingresados en el input "email"
  $email.on('input', function(e) {
    // console.log(REGEX.test($(this).val()));
    if (REGEX.test($(this).val())) {
      validateEmail = true;
    } else {
      desactivateBtn();
    }
  });

  // validar que se haya activado el checkbox
  $checkbox.on('click', function(e) {
    // console.log(event.target.checked);
    if (event.target.checked) {
      validateChecked = true;
      activateBtn();
    } else {
      desactivateBtn();
    }
  });

  // evento para el boton next
  $btn.on('click', function() {
    if (validateName && validateEmail && validateChecked) {
      localStorage.name = $name.val();
      localStorage.email = $email.val();
      window.location.href = 'complete.html';
    }
  });
});