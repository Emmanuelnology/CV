var nav={
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


var links={
    contact: $("#js-contact"),
    skills: $("#js-skills"),
    employment: $("#js-employ"),
    education: $("#js-edu"),
    awards: $("#js-awards"),
    recruiterinfo: $("#js-recruit")
}

links.contact.click(function(){
    $(".contact").show();
    $(".education, .employment, .skills, .awards, .recruiter-info").hide();
    $("#infolist").slideDown(slow);
});

links.skills.click(function(){
    $(".skills").show();
    $(".contact, .employment, .education, .awards, .recruiter-info").hide();
});

links.employment.click(function(){
    $(".employment").show();
    $(".contact, .skills, .education, .awards, .recruiter-info").hide();
});

links.education.click(function(){
    $(".education").show();
    $(".contact, .employment, .skills, .awards, .recruiter-info").hide();
});

links.awards.click(function(){
    $(".awards").show();
    $(".contact, .employment, .education, .skills, .recruiter-info").hide();
});

links.recruiterinfo.click(function(){
    $(".recruiter-info").show();
    $(".contact, .employment, .education, .awards, .skills").hide();
});

$("#toggle1").click(function(){
    $("#bspp").slideToggle(1000);
});

$("#toggle2").click(function(){
    $("#tefl").slideToggle(1000);
});