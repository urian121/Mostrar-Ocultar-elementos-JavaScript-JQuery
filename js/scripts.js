
//$(document).ready(function(){ //Forma antigua de cargar el DOM con Jquery
$(function () {
    $(".menu a").click(function () {
        //Uso hasClass para preguntar si es cierto que el elemento html (donde se hizo click) tiene dicha clase.
        if ($(this).hasClass('activa')) {
            console.log('Si tiene la classe activa');
        } else {
            console.log('No tiene la classe activa');
        }
    });
});


$(function () {
    $('.inputCkeckeandoBox').change(function () {
        if (!$(this).prop('checked')) {
            $('#elemtoDesconocido').hide();
        } else {
            $('#elemtoDesconocido').show();
        }
    })
});


var miVar = true;
$(function () {
    $("#botonColor").click(function () {
        if (miVar == true) {
            miVar = false;
            console.log(miVar);
            $("#Cuadrado").css({ "background-color": "#FF622C", "border-color": "#2980b9" });
        }
        else {
            miVar = true;
            console.log(miVar);
            $("#Cuadrado").css({ "background-color": "#2980b9", "border-color": "#FF622C" });
        }
    });
});



/*----Activo - Inactivo usando Switch - --*/
$(function () {
    $("#switch").change(function () {
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
var miClic = 1;
$("#elementClick").click(function () {
    if (miClic == 1) {
        console.log('1');
        $(this).text('Click Cambiar 2');
        miClic = miClic + 1;
        $("#respuesta").html('<strong> Soy Contenidor' + miClic + '</strong>');
    } else {
        console.log('2');
        $(this).text(' Click Cambiar 1');
        miClic = 1;
        $("#respuesta").html('<strong>Soy contenido' + miClic + '</strong>');
    }
});



//Agregando y quitando clase con toggleClass 
$("#conteFlex p").click(function () {
    var variable = $(this).toggleClass("seleccion");
});

//quitar y poner con toggleClass
$("#botonToggle").click(function () {
    $(".tog").toggleClass("activaToggle");
    console.log('click')
});
