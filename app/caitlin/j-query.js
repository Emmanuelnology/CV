
$("#extra-curricular > div > div").flip({
    trigger: 'hover',
    axis: 'y'
});

function myFunction(x) {
    x.classList.toggle("change");
}

$('#show-menu').click(function() {
    $('#menu').slideToggle();
});