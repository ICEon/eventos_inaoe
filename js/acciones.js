// JavaScript Document
function buscaeventos(){

	
	$.ajax({
		
		url: "http://192.168.1.67/EventosINAOE/buscareventos.php",
	
		
	}).done(function(msg) {

alert (msg);
/*var Datos = JSON.parse (msg);

$('#devic table td').eq(1).text(Datos['Nombre']);
$('#devic table td').eq(3).text(Datos['ApellidoP']);
$('#devic table td').eq(5).text(Datos['ApellidoM']);
$('#devic table td').eq(7).text(Datos['Secundaria']);
$('#devic table td').eq(9).text(Datos['POpcion']);
$('#devic table td').eq(11).text(Datos['SOpcion']);
$('#devic table td').eq(13).text(Datos['TOpcion']);
$('#devic table td').eq(15).text(Datos['COpcion']);
*/
	});
}
// JavaScript Document
$(document).ready(function(e) {	
document.addEventListener("deviceready",function() {
	
	
	
	$('#btneventos').on ('tap', function(){
	
	  buscaeventos();
	  alert ('fuera');
//	  $( "body" ).pagecontainer( "change", "#eventos", { transition: "slide" });
	})
	
});


});
