$(document).ready(function(){

    $('#getPersonas').on('click',function(){
        $.ajax({
            url: '/personas',
            dataType: 'json',
            success: function(data){
                console.log(data);
                //let lista = $('#listaPersonas');
                $('#listaPersonas').empty();
                //agregar un li
                data.forEach(persona => {
                    $('#listaPersonas').append('<li>'+ persona.name+ ' '+persona.apellido+ ' tiene '+ persona.edad+ ' años.'+ '<button class ="editarPersona">Editar</button>' + '<button class ="eliminarPersona">Eliminar</button> <span  style="visibility:hidden"> '+ persona._id + ' </span>'  + '</li>');
                });
            }
        })
    });

    $('#agregarPersona').on('click',function(e){
        e.preventDefault(); 
        // e prevent default
        let nuevoNombre = $('#nombre');
        let nuevoApellido = $('#apellido');
        let nuevaEdad = $('#edad');
        let nuevoId = $('#id');

        if(nuevoId.val()===''){
            $.ajax({
                url: '/personas',
                method: 'POST',
                data: {
                    name: nuevoNombre.val(),
                    apellido: nuevoApellido.val(),
                    edad: nuevaEdad.val(),
                    id: nuevoId.val()
                },
                success: function(respuesta){
                    console.log(respuesta);
                    $('#getPersonas').click();
                }
            })
        } else{
            $.ajax({
                url: '/personas/' + nuevoId.val(),
                method: 'PUT',
                data: {
                    name: nuevoNombre.val(),
                    apellido: nuevoApellido.val(),
                    edad: nuevaEdad.val(),
                    id: nuevoId.val()
                },
                success: function(respuesta){
                    console.log(respuesta);
                    //cuando termina hay que actualizar la lista por lo tanto hacemos:
                    $('#getPersonas').click();
                }
            })
        }
        $('#nombre').val('');
        $('#apellido').val('');
        $('#edad').val('');
        $('#id').val('');
    });

    $('#listaPersonas').on('click','.eliminarPersona', function(){
        // tenemos que sacar el id asociado al li que tiene ese boton
        // luego con la info del id pasarla por ajax a mi run js
        let idPersona;

        var pr =  $(this).parent().html();
        var arr = pr.toString();
        var separo = arr.split(' ');
        var lugar = separo.length-2;

        idPersona = separo[lugar];

        $.ajax({
            url: '/personas/' + idPersona,
            method: 'DELETE',
            success: function(respuesta){
                console.log(respuesta);
                //actualizo al terminar
                $('#getPersonas').click();
            }
        })  
    });


    $('#listaPersonas').on('click','.editarPersona', function(){
        // lugares 1,2,4 y length-2
        //se le pasa el id al que le debemos hacer update, se hace en la base
        //y por ultimo se actualiza la lista
        var pr =  $(this).parent().html();
        var arr = pr.toString();
        var separo = arr.split(' ');
        var lugaridAEdit = separo.length-2;
        var idAEdit = separo[lugaridAEdit];
        var nombreAEdit = separo[0];
        var apellidoAEdit = separo[1];
        var edadAEdit = separo[3];

        $('#nombre').val(nombreAEdit);
        $('#apellido').val(apellidoAEdit);
        $('#edad').val(edadAEdit);
        $('#id').val(idAEdit);
    });
});
