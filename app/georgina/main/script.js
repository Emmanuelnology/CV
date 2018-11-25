var nav = {
    contact: {
        link: $("#js-contact"),
        content: $("#contact")
    },
    story: {
        link: $("#js-story"),
        content: $("#story"),
        hoverIn: function () {
            $('#gee').attr('src',"gee.lips.png"); 
        }
    },
    skills: {
        link: $("#js-skills"),
        content: $("#skills"),
        div: $("#brain"),
        hoverIn: function () {
            $('#gee').attr('src',"gee.brain.png"); 
        }
    },
    aboutme: {
        link: $("#js-aboutme"),
        content: $("#aboutme"),
        hoverIn: function () {
            $('#gee').attr('src',"gee.heart.png"); 
        }
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
    $("#main").show();
    section.content.show();
    section.link.addClass('active');
}

$("#closebutton").click(function(){
    $("#main").hide();
});

$(window).on('resize', function(){
    $("#main").show();
});

function hoverOut() {
    $('#gee').attr('src',"gee.png"); 
}

$('#js-skills').hover(nav.skills.hoverIn,hoverOut);   
$('#js-story').hover(nav.story.hoverIn,hoverOut);   
$('#js-aboutme').hover(nav.aboutme.hoverIn,hoverOut);   


$('#js-skills').click(function () {
    $('#gee').attr('src',"gee.brain.png"); 
});
$('#js-story').click(function () {
    $('#gee').attr('src',"gee.lips.png"); 
});
$('#js-aboutme').click(function () {
    $('#gee').attr('src',"gee.heart.png"); 
});