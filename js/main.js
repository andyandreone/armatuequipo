$(document).ready(function(){
    console.log('its working !');
    var anchoPantalla = $(window).width();
    anchoPantalla=anchoPantalla+"px";
    $(".cancha").css("width",anchoPantalla);
})