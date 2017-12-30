$(document).ready(function() {
  setTimeout(function() {
    window.location.href = 'views/home.html';
  }, 3000);

  var $logo = $('#logo');
  $logo.animate({ height: '100px',
    opacity: '.2'}, 1000);
  $logo.animate({ height: '250px', 
    width: '400px', 
    opacity: '.6'}, 900);
});