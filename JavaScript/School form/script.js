$(document).ready(function() {
  $('img').click(function(){
    $('.dropdown-menu').toggle(300);
  });
  
  $('form').submit(function(){
    var email = $('#email').val();
    var password = $('#password').val();
    
    if(email === "") {
      $('.email-error').text("Please enter your email address")
    }
    
    if(password === "") {
      $('.password-error').text("Please enter your password")
    }
    
    return false;
  });
});