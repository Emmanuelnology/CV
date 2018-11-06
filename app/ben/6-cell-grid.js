function removeAllActiveClasses(){        
    $('#grid').removeClass('active-title');
    $('#grid').removeClass('active-about');
    $('#grid').removeClass('active-skills');
    $('#grid').removeClass('active-work');
    $('#grid').removeClass('active-contact');
    $('#grid').removeClass('active-hobbies');
    $('#grid').removeClass('active-qualifications');
}

$('#grid .grid-cell').click(function(){
    removeAllActiveClasses();
    var target=$(this).attr('data-target');
    $("#grid").addClass(target);
})