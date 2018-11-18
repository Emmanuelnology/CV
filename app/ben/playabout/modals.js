$('#js-gift-shop-open').click(function(){
    $('#js-gift-shop').css('display','initial');
    $('#blocker').css('display','block');
    $('body').css('overflow','hidden');
})

$('.js-modal-close').click(function(){
    $('.js-modal').css('display','none');
    $('#blocker').css('display','none');
    $('body').css('overflow','auto');
})