var main = function() {
  $('.day').click(function() {
    $(this).next().toggle(500);
    $(this).find('span').toggleClass('glyphicon-minus');
  });
};

$(document).ready(main);