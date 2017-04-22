
var main = function() {
  $('.cart').click(function() {
    $('.account .dropdown-menu').hide(); 
    $('.help .dropdown-menu').hide(); 
    $('.cart .dropdown-menu').toggle(300); 
  }); 
  
  $('.account').click(function() {
    $('.cart .dropdown-menu').hide(); 
    $('.help .dropdown-menu').hide(); 
    $('.account .dropdown-menu').toggle(300); 
  }); 
  
  $('.help').click(function() {
    $('.cart .dropdown-menu').hide(); 
    $('.account .dropdown-menu').hide(); 
    $('.help .dropdown-menu').toggle(300); 
  }); 
}; 

$(document).ready(main);