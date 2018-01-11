$(document).ready(function() {
  $name = $('#name');
  $email = $('#email');
  $btn = $('#next-btn');


  

  // declarando variables para validar estados
  validateName = false;
  validateEmail = false;

  $name.on('input', function() {
    console.log($(this).val())
    if($(this).val() === localStorage.name) {
      validateName = true;
    }
  });

  $email.on('input', function() {
    if($(this).val() === localStorage.email) {
      validateEmail = true;
      activateBtn();
    }
  });

  //funcion que activa el boton
  function activateBtn() {
    $btn.attr('disabled', false);
    $btn.removeClass('offBtn');
    $btn.addClass('onBtn');
  }
  
  //
  $btn.on('click', function() {
    if(validateName && validateEmail) {
      window.location.href = 'complete.html';
    };
  });

});