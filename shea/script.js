var links={
    contact: $("#contactlink"),
    skills: $("#skillslink"),
    employment: $("#employlink"),
    education: $("#edulink"),
    awards: $("#awardslink"),
    publications: $("#pubslink")
}

links.contact.click(function(){
    $(".contact").show();
    $(".education, .employment, .skills, .awards, .publications").hide();
});

links.skills.click(function(){
    $(".skills").show();
    $(".contact, .employment, .education, .awards, .publications").hide();
});

links.employment.click(function(){
    $(".employment").show();
    $(".contact, .skills, .education, .awards, .publications").hide();
});

links.education.click(function(){
    $(".education").show();
    $(".contact, .employment, .skills, .awards, .publications").hide();
});

links.awards.click(function(){
    $(".awards").show();
    $(".contact, .employment, .education, .skills, .publications").hide();
});

links.publications.click(function(){
    $(".publications").show();
    $(".contact, .employment, .education, .awards, .skills").hide();
});