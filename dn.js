$(document).ready(function(){
	$('button').click(function(){
		$('td').addClass('ninja');
	});

	$('td').click(function(){
		$( this ).removeClass('ninja');
	});
});