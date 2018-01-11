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
    
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC8KvlkQDCQgcieBZ8zxIH-HstrxjtDCRw",
    authDomain: "lyft-prueba.firebaseapp.com",
    databaseURL: "https://lyft-prueba.firebaseio.com",
    projectId: "lyft-prueba",
    storageBucket: "lyft-prueba.appspot.com",
    messagingSenderId: "1069393029767"
  };
  firebase.initializeApp(config);
});