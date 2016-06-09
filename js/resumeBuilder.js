/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Priya Suriyamurthi",
    "role": "Web Developer",
    "contacts": {
        "mobile" :6824012998,
        "email": "Priya.suriyamurthi@gmail.com" ,
        "github": "https://github.com/PriyaSuriyamurthi/frontend-nanodegree-resume.git",
        "location":"Austin"
    },
    "biopic": "C:\\Users\\Vinodh\\Documents\\Portfolio\\images\\Priya.png",
    "welcomemessage"    :"Welcome all",
    "skills": ["cool","energetic","enthusiasm"]
};

$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));

$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomemessage));
$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));

if(bio.skills.length > 0 ){
$("#header").append(HTMLskillsStart);
for(i in bio.skills)
{
$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
}
}

var work = {
    "works" : [{
    "employer" : "CM First Group",
    "title" : "Application Consultant",
    "dates" : "Mar 2016 - Till date",
    "location" : "Austin",
    "description": "Analysis, Coding, Testing, Maintanence"},
    {
    "employer" : "CVS Caremark",
    "title" : "Technology Lead",
    "dates" : "Jan 2015 - Jan 2016",
    "location" : "Richardson",
    "description": "Analysis, Coding, Testing, Maintanence"},
    {
    "employer" : "Infosys Limited",
    "title" : "Technology Analyst",
    "dates" : "Sep 2008 - Jan 2016",
    "location" : "Fort Worth",
    "description": "Analysis, Coding, Testing, Maintanence"
    }
]}

var educ ={
    "schools" : [{
    "name" : "Savithri Vidyasala",
    "location": "Trichy",
    "degree" : "Higher Secondary",
    "major" : "Biology-Physics-Chemistry-Maths",
    "dates" : "Jun 2002 - Mar 2004"},
    {
    "name" : "Anna University",
    "location": "Trichy",
    "degree" : "Bachelor of Engineering",
    "major" : "electronics of communication",
    "dates" : "Sep 2004 - May 2008"
    }
    ],
    "onlineCourses":[{
        "title":"Front End Developer",
        "school":"Udacity",
        "dates":"May 2016",
        "url":"www.udacity.com"
    }]
}

for(i in educ.schools)
{
$("#education").append(HTMLschoolStart);
$(".education-entry:last").append(HTMLschoolName.replace("%data%",educ.schools[i].name));
$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",educ.schools[i].location));
$(".education-entry:last").append(HTMLschoolDegree.replace("%data%",educ.schools[i].degree));
$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",educ.schools[i].major));
$(".education-entry:last").append(HTMLschoolDates.replace("%data%",educ.schools[i].dates));
}

for(i in educ.onlineCourses)
{
$(".education-entry:last").append(HTMLonlineClasses);
$(".education-entry:last").append(HTMLonlineTitle.replace("%data%",educ.onlineCourses[i].title));
$(".education-entry:last").append(HTMLonlineSchool.replace("%data%",educ.onlineCourses[i].school));
$(".education-entry:last").append(HTMLonlineDates.replace("%data%",educ.onlineCourses[i].dates));
$(".education-entry:last").append(HTMLonlineURL.replace("%data%",educ.onlineCourses[i].url));
}

displayWork();
function displayWork() {
for (i in work.works)
{
$("#workExperience").append(HTMLworkStart);
$(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.works[i].employer));
$(".work-entry:last").append(HTMLworkTitle.replace("%data%",work.works[i].title));
$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.works[i].location));
$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.works[i].dates));
$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.works[i].description));
}
}

$(document).click(function(loc)
    {
        var x=loc.pageX,y=loc.pageY;
        logClicks(x,y);
    });

$('#main').append(internationalizeButton);


function inName(name_main){
    var name_split = name_main.trim().split(" ");
    name_main = name_split[0].charAt(0).toUpperCase() + name_split[0].slice(1).toLowerCase() + " " + name_split[1].toUpperCase();
    return name_main;
}

$('#intern').click(function(){
    bio.name = inName(bio.name);
    $("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
});

var projects ={
    "projects":[{
    "title":"Portfolio",
    "dates": "Apr 2016",
    "description": "Create a portfolio using HTML and CSS",
    "images":"images/portfolio.png"
    }]
}

projects.display = function() {
for (i in projects.projects)
{
$("#projects").append(HTMLprojectStart);
$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[i].title));
$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[i].dates));
$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[i].description));
$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[i].images));
}
}

projects.display();

$("#mapDiv").append(googleMap);



