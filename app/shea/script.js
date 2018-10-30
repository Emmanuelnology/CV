var nav = {
    contact: {
        link: $("#js-contact"),
        content:  $(".contact"),
    },
    skills: {
        link: $("#js-skills"),
        content:  $(".skills"),
    },
    employment: {
        link: $("#js-employ"),
        content:  $(".employment"),
    },
    education: {
        link: $("#js-edu"),
        content:  $(".education"),
    },
    awards: {
        link: $("#js-awards"),
        content:  $(".contact"),
    },
    recruiterInfo: {
        link: $("#js-recruit"),
        content:  $(".recruiter-info"),
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