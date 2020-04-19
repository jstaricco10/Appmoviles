$(document).ready(function() {
    //$("#listapeliculas").hide();

    return false;
});

function cargaPeliculas() {
    $.ajax({
        method: 'GET',
        url: 'https://api.movie.com.uy/api/shows/rss/data',
        crossDomain: true,
        dataType: 'json',
        success: function(data) {
           $("#cinesCombo").empty();
            var paraprueba = new Option("GrupoCinePrueba", "value");
            $("#cinesCombo").append(paraprueba);
            
            var o = new Option("text", "value"); 
            data.contentCinemaShows.forEach(element => {
                element.cinemaShows.forEach(element2 => {
                    $(o).html(element2.cinema);
                    $("#cinesCombo").append(o);   
                });
            });
        }
    });
      return false;
}

function cargaListaPeliculas(){
    $.ajax({
        method: 'GET',
        url: 'https://api.movie.com.uy/api/shows/rss/data',
        crossDomain: true,
        dataType: 'json',
        success: function(data) {
            var n = 1;
            $("#listapeliculas").empty();
            data.contentCinemaShows.forEach(element => {
                $("#listapeliculas").append('<li class="objlista"><button onclick=cargaHorarios() class="button" >Horarios</button><ul></ul></li>');
                $('#listapeliculas li').each(function(i) {
                    $(this).attr('id', 'link' + (i+1));
                  //  $(this + '>ul').attr('id', 'horarios' + (i+1));
                });
                $('#listapeliculas li ul').each(function(j) {
                    $(this).attr('id', 'horarios' + (j+1));
                });
                $('#listapeliculas li button').each(function(j) {
                    $(this).attr('id', 'boton' + (j+1));
                });
                var i = new Image();
                i.src = element.posterURL;
                
                document.getElementById("link"+n).appendChild(i);
                document.getElementById("link"+n).append(element.movie);
                n++;
            });


        }
    });
    return false;
}
var veces = 0;

function cargaHorarios(boton){
    $.ajax({
        method: 'GET',
        url: 'https://api.movie.com.uy/api/shows/rss/data',
        crossDomain: true,
        dataType: 'json',
        success: function(data) {
            //para cada grupo de horarios asociar un li a la lista
                        veces++; //par o impar para ver si ya se apreto horarios
                        if (veces%2){
                            var i = 1;
                            var j = 1;
                            var func = 1;
                            $('div ul li ul').empty();
                            data.contentCinemaShows.forEach(element => {
                                element.cinemaShows.forEach(element2 =>{
                                    $('#horarios' +(i)).each(function(j) {
                                        element2.shows.forEach(funciones =>{
                                        $(this).append('<li class="objlistahorarios"><div></div> </li>');
                                        });
                                    });
                                    $('#horarios' +(i)+ ' li div').each(function(j) {
                                        $(this).attr('id', 'funcion' + (func));
                                        func++;
                                    });
                                    console.log(func);
                                    i++;    
                                });
                            j++; 
                            });
                            var k = 1;
                            data.contentCinemaShows.forEach(element => {
                                element.cinemaShows.forEach(element2 =>{
                                    element2.shows.forEach(funcPel =>{
                                    $('#funcion' +(k)).html("Fecha: \n"+ funcPel.date + 
                                    " Dia y Hora: " + funcPel.timeToDisplay + " Tipo :"
                                    + funcPel.formatLang + " Genero: " +funcPel.genre + " Rating: "+ funcPel.ratingDescription);
                                    k++;
                                    });
                                });
                            });    

                        } else{
                            $('div ul li ul').empty();
                        }
        }
    });
    return false;
}

