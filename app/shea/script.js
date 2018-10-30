var links={
    contact: $("#contactlink"),
    skills: $("#skillslink"),
    employment: $("#employlink"),
    education: $("#edulink"),
    awards: $("#awardslink"),
    recruiterinfo: $("#recruitlink")
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
