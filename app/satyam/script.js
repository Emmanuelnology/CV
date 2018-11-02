$("#welcomescreen").click(function(){
    $("#welcomescreen").fadeOut();
 });

$("#toggle").click(function(){
   $("#container").slideToggle();
});

$('.open-close').click(function(){
    var modalID = $(this).attr('data-target');
    $('#' + modalID).toggleClass("hide");
});