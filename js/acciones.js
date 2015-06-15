// JavaScript Document
function buscaeventos(){

	
	$.ajax({
		
		url: "http://192.168.1.67/EventosINAOE/buscareventos.php",
		async: false
	
		
	}).done(function(msg) {
alert (msg);

var DatosJSON = JSON.parse (msg);
alert (DatosJSON.datos);
alert(DatosJSON.eventos.length);
if (DatosJSON.datos == 1)
 {
$('#listado_eventos').empty();	 

	for (var i = 0; i <DatosJSON.eventos.length  ; i++) {
    var fechaevento = new Date(DatosJSON.eventos[i].FechaE);
	alert (fechaevento.getUTCMonth());

	
/*
$('#listado_eventos').append('<div style="width:100%; font-size:1em; font-weight:bold;" class="foto"><img src="http://192.168.1.30/practica12/'+DatosJSON.amigos[i].IdAmigo+'.jpg" class="famigo" id="'+DatosJSON.amigos[i].IdAmigo+'" style="vertical-align:middle;"><a href="#" class="detalle">'+DatosJSON.amigos[i].Nombre + ' '+ DatosJSON.amigos[i].ApPaterno + ' ' + DatosJSON.amigos[i].ApMaterno +'</a><hr></div>');
*/
}

 }
 else
 {
	 
 }
	});
}
// JavaScript Document
$(document).ready(function(e) {	
document.addEventListener("deviceready",function() {
	
	
	
	$('#btneventos').on ('tap', function(){
	
	  buscaeventos();
	  
//	  $('listado_eventos')
	  $( "body" ).pagecontainer( "change", "#eventos", { transition: "slide" });
	})
	
});


});
