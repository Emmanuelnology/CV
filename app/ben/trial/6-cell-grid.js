function removeAllActiveClasses(){
    $('#grid').removeClass('active-a');
    $('#grid').removeClass('active-b');
    $('#grid').removeClass('active-c');
    $('#grid').removeClass('active-d');
    $('#grid').removeClass('active-e');
    $('#grid').removeClass('active-f');
}

$('#grid .grid-cell').click(function(){
    removeAllActiveClasses();
    var target=$(this).attr('data-target');
    $("#grid").addClass(target);
})