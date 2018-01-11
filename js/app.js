$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDfXZvExNzWFN-pYjZNlopRN8Skc_dafIU',
    authDomain: 'lyft-test-fb.firebaseapp.com',
    databaseURL: 'https://lyft-test-fb.firebaseio.com',
    projectId: 'lyft-test-fb',
    storageBucket: 'lyft-test-fb.appspot.com',
    messagingSenderId: '252613794326'
  };
  firebase.initializeApp(config);


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