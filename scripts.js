
//$(document).ready(function(){
$(function () { //Leyendo el documento
//Uso hasClass para preguntar si cierto elemnto html tiene dicha clase.
$(".menu a").click(function(){
        //Uso hasClass para preguntar si cierto elemnto html tiene dicha clase.
    if ($(this).hasClass('activa')){
        //$(".menu").addClass("active");
        console.log('Si tiene la classe acitva');
    }else{
        console.log('No tiene la classe acitva');
    }
});
});


$(document).ready(function () {
	$('.fantasma').change(function(){
  	if(!$(this).prop('checked')){
    	$('#dvOcultar').hide();
    }else{
    	$('#dvOcultar').show();
    }
  })
});


var inicio = true;
$(document).ready(function() {
	$("#boton").click(function(){
		if(inicio == true){
			inicio = false;
			console.log(inicio);
			$("#Cuadrado").css({"background-color":"#FF622C", "border-color":"#2980b9"});
		}
		else{
			inicio = true;
			console.log(inicio);
			$("#Cuadrado").css({"background-color":"#2980b9", "border-color":"#FF622C"});
		}
	});
});



/*----Activo - Inactivo usando Switch - --*/
$(document).ready(function() {
        $("#switch").change(function() {
            var valorswitchStatus = ($('input:checkbox[name=switchStatus]:checked').val());

            if (valorswitchStatus == 'on') {
                console.log('Activo');
                var dataString = 'activo';

                /* $.ajax({
                    type: 'POST',
                    url: '#.php',
                    data: dataString,
                    success: function(data) {
                        //$('#resp').html(data);
                    }
                }); */
            } else {
                var dataString = 'inactivo';
                /*$.ajax({
                    type: 'POST',
                    url: '#.php',
                    data: dataString,
                    success: function(data) {
                        //$('#resp').html(data);
                    }
                });  */
                console.log('Desactivo');
            }

        });

    });



    
//Activar y desactivar en un mismo boton con jquery
var clic = 1;
$("#hoo").click(function(){
   if(clic==1){
	   console.log('1');
       $(this).text('Click Cambiar 2');
       //$(this).html('Ocultar respuesta');
   clic = clic + 1;
   $("#respuesta").html('<strong> Soy Contenidor' + clic + '</strong>');
   } else{
	   console.log('2');    
	   $(this).text(' Click Cambiar 1');
    clic = 1;
    $("#respuesta").html('<strong>Soy contenido' + clic + '</strong>');
   }   
});



/***Agregando y quitando clase con toggleClass */
    //ejemplo toggle Para añadir y eliminar todos los elementos <p> en el cambio de clase
        $( "#conteFlex p" ).click(function() {
        var variable = $(this).toggleClass("seleccion");
        });

    //quitar y poner con toggleClass
    $("#botonToggle").click(function(){
        $(".tog").toggleClass("activaToggle");
        console.log('click')
    });
