var nav = {
    contact: {
        link: $("#js-contact"),
        content: $("#contact")
    },
    story: {
        link: $("#js-story"),
        content: $("#story")
    },
    skills: {
        link: $("#js-skills"),
        content: $("#skills")
    },
    aboutme: {
        link: $("#js-aboutme"),
        content: $("#aboutme")
    },
    hobbies: {
        link: $("#js-hobbies"),
        content: $("#hobbies")
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

$("#closebutton").click(function(){
    $("#main").hide();
});

$(window).on('resize', function(){
    $("#main").show();
});
