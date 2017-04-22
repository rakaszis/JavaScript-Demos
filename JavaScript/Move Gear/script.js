$(document).ready(function(){
	$('.login p').click(function(){
		$('.dropdown-menu').toggle(300);
	});
	
	$('.col-md-3 h1').click(function() {
	$('#accordion').toggle(300).accordion({collapsible: true});
	});
});
