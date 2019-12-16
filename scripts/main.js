$(document).ready(function(){
    $('.header__trigger').click(function(){
       $('#menu').slideToggle(500); 
    });
     
     $(window).resize(function(){
        if ($(window).width() > 800) {
            $('#menu').removeAttr('style');
        } 
     });
 });
