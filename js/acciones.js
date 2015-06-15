// JavaScript Document

var meses = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
               "Julio", "Augosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ];
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
	 var mesactual='';
$('#listado_eventos').empty();	 

	for (var i = 0; i <DatosJSON.eventos.length  ; i++) {
    var fechaevento = new Date(DatosJSON.eventos[i].FechaE);
    
	if (i==0)
	 {
	  mesactual = fechaevento.getMonth();
  $('#listado_eventos').append('<div style="width:45%; margin-button:4px; align:center"> <h1>'+ meses[mesactual]+ '</h1> </div> <div style="width:47%; padding:1px; display:inline-block; vertical-align:top;">Nombre del Evento</div><div style="width:15%; padding:1px; display:inline-block; text-align:center;  vertical-align:tap;">Participantes<br> Registrados</div><div style="width:22%; padding:1px;  display:inline-block; text-align:center;  vertical-align:top;">Fecha del evento</div></div>');			 }
	else
	 {
	  if (mesactual != fechaevento.getMonth())
	   {
	  mesactual = fechaevento.getMonth();

	  $('#listado_eventos').append('<div style="width:45%; margin-button:4px; align:center"> <h1>'+ meses[mesactual]+ '</h1> </div> <div style="width:47%; padding:1px; display:inline-block; vertical-align:top;">Nombre del Evento</div><div style="width:15%; padding:1px; display:inline-block; text-align:center;  vertical-align:tap;">Participantes<br> Registrados</div><div style="width:22%; padding:1px;  display:inline-block; text-align:center;  vertical-align:top;">Fecha del evento</div></div>');		
	   }
	 }
	
	$('#listado_eventos').append('<div align="center" style="margin-top:3px"><div style="width:47%; padding:1px; display:inline-block; text-align:left">'+ DatosJSON.eventos[i].NombreE +'</div><div style="width:15%; padding:1px; display:inline-block; text-align:center">20</div>  <div style="width:22%; padding:1px;  display:inline-block; text-align:center">'+ DatosJSON.eventos[i].FechaE +'</div></div>');

//'+ DatosJSON.eventos[i].NombreE +'	
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
