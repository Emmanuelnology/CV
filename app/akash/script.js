$('.js-modal-close').click(function(){
   $('#blocker').hide();
   $('.modal').hide();
   $('body').css('overflow','auto');
});

$('.js-modal').click(function(){
   var modalID=$(this).attr('data-target');
   $('#'+modalID).fadeIn();
   $('#blocker').fadeIn();
   $('body').css('overflow','hidden');
});