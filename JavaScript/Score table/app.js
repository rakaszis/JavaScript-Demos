/*var main = function() {
$(".more-btn").click(function() {
  $(this).next().toggle('more-menu',300);
  });
  $(".share").click(function() {
    $("this").next().toggle("share-menu");
  });
  $(".notification").click(function() {
    $(this).next().toggle("active");
  });
};

$(document).ready(main);*/


var main = function() {
	$('.more-btn').click(function() {
    $(this).next().toggle('more-menu');
  });
  
  $('.share').click(function() {
    $(this).next().toggle('.share-menu');
  });
  
  $('.notification').click(function() {
    $(this).toggleClass('active');
  });
};


$(document).ready(main);