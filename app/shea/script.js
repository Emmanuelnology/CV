var nav = {
    contact: {
        link: $("#js-contact"),
        content:  $("#contact"),
    },
    skills: {
        link: $("#js-skills"),
        content:  $("#skills"),
    },
    employment: {
        link: $("#js-employ"),
        content:  $("#employment"),
    },
    education: {
        link: $("#js-edu"),
        content:  $("#education"),
    },
    awards: {
        link: $("#js-awards"),
        content:  $("#awards"),
    },
    recruiterInfo: {
        link: $("#js-recruit"),
        content:  $("#recruiter-info"),
    }
}

var allSections=$(".js-section");

for (var sectionName in nav) {
    setNavClicks(nav[sectionName]);    
}

function setNavClicks(section) {
    section.link.click(function(){
        showSection(section);
     });
 }

function removeActiveFromAllNavLinks(){
    for (var sectionName in nav) {
        nav[sectionName].link.removeClass('active');    
     }
}

function showSection(section) {
    allSections.hide();
    removeActiveFromAllNavLinks();
    section.content.show();
    section.link.addClass('active');
}

$("#toggle1").click(function(){
    $("#bspp").slideToggle();
});

$("#toggle2").click(function(){
    $("#tefl").slideToggle();
});

$('.js-modal-close').click(function(){
    $('#blocker').hide();
    $('.modal').hide();
    $('body').css('overflow','auto');
});

$('.js-modal-open').click(function(){
    var modalID=$(this).attr('data-target');
    $('#'+modalID).fadeIn();
    $('#blocker').fadeIn();
    $('body').css('overflow','hidden');
});

