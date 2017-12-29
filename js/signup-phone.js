$(document).ready(function() {
  $country = $('#country');
  $phone = $('#phone-number');

  $phone.on('keyup', function(e) {
    if ($(this).val().length === 10) {
      console.log($(this).val());
    }
  });
});