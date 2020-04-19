$(document).ready(function() {

	//Oculto todos los contenidos.
  $(".tab_content").hide();
  
  //Activo el primer tab, agregándole una clase e invocando a show()
  $("ul.tabs li:first").addClass("active").show(); 
  
  //Muestro el contenido del primer tab.
	$(".tab_content:first").show(); //Show first tab content

	//Instalo el evento onclick en cada tab.
	$("ul.tabs li").click(function() {
    
    //Desactivo el elemento activo. Observar que recorro todos los li.
    $("ul.tabs li").removeClass("active");
    
    //Activo el elemento al cual le hice click, agregándole la clase correspondiente. this viene con el evento. 
    $(this).addClass("active");
    
    //Oculto TODOS los contenidos.
		$(".tab_content").hide();

    //TRIQUIÑUELA: Obtengo el atributo href dentro del elemento li que casulamente es el selector para el contenido correspondiente :)    
    var activeTab = $(this).find("a").attr("href");
    
    //Lo presento con Fade porque soy un artista.
    $(activeTab).fadeIn();
    
		return false;
	});
});

function consultarIP() {
  var ip = $('#ip').val();
  $.ajax({
    method: 'GET',
    url: 'https://api.ip2country.info/ip?' + ip,
    crossDomain: true,
    dataType: 'json'
  })
  .done(function(data) {
    $('#resIP').html($('#ip').val());
    $('#resCP').html(data.countryCode);
    $('#resPA').html(data.countryName);
    $('#resBA').html(data.countryEmoji);
    $('#th2').click();
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    alert(textStatus);
  });
  return false;
}

