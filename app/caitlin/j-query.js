
$("#extra-curricular > div > div").flip({
    trigger: 'hover',
    axis: 'y'
});

$('.js-modal-close').click(function(){
    $('.modal').fadeOut();
    $('#blocker').fadeOut();
    $('body').css('overflow','auto');
})

$('.js-modal-open').click(function(){
    $('.modal').fadeIn();
    $('#blocker').fadeIn();
    $('body').css('overflow','hidden');
})
