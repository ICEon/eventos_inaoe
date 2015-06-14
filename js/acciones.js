// JavaScript Document
function buscaeventos(){

	
	$.ajax({
		
		url: "http://192.168.1.67/EventosINAOE/buscareventos.php",
		async: false
	
		
	}).done(function(msg) {

alert (msg);
/*var Datos = JSON.parse (msg);*/
	});
}
// JavaScript Document
$(document).ready(function(e) {	
document.addEventListener("deviceready",function() {
	
	
	
	$('#btneventos').on ('tap', function(){
	
	  buscaeventos();
alert ('fuera');
	  $( "body" ).pagecontainer( "change", "#eventos", { transition: "slide" });
	})
	
});


});
