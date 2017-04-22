var main = function() {
  $('form').submit(function() {
    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();
    var email = $('#email').val();
    var password = $('#password').val();
    if(firstName === "") {
      $('.first-name-error').text('Please enter your first name');
    }
	 
	 if(firstName === "Please enter your first name") {
      $('.first-name-error').text('Please enter your first name');
    }

    if(lastName ===""){
        $('.last-name-error').text('Please enter your last name');
    }
	
	 if(lastName === "Please enter your last name") {
      $('.last-name-error').text('Please enter your last name');
    }

    if(email ===""){
        $('.email-error').text('Please enter your email address');
    }

    if(password ===""){
        $('.password-error').text('Please enter a password');
    }
    if(password.length>0 && password.length < 8){
        $('.password-error').text('Short passwords are easy to guess. Try one with at least 8 characters');
    }

     if(email ==="rakaszis@gmail.com"){
        $('.email-error').text('This email is already taken');
    }

    return false;
  });
};

$(document).ready(main);