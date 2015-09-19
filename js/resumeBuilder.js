// Defines the Bio Object to be used in the Resume
var bio = {
	"name": 'Cody Perry',
	"role": 'Front-end Web Developer',
	"contacts": { // Contacts Object
		"mobile": '555-555-555',
		"email": 'codyperry65@yahoo.com',
		"github": 'cperry24',
		"twitter": 'haseo151',
		"location": 'Pittsburgh, PA'
	},
	"welcomeMessage": 'Checkout my Resume!',
	"skills": [ // Skills Array 
		"HTML5", 'CSS3', 'JavaScript', 'Git', 'Github', 'jQuery'
	],
	"bioPic": [ 
				'images/cody_pic.jpg'
	]
};


// Appends the Skills from the Bio Object to the page using a for in loop
bio.display = function() {
	$("#header").append(HTMLskillsStart);
	for (var skills in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skills]);
		$("#skills").append(formattedSkills);
	}


	// creates the header content
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

	// Appends the Header content to the page
	$("#header").prepend(formattedName, formattedRole, formattedBioPic);
	$("#topContacts").append(formattedWelcomeMsg);

	// Appends contact information in the page with the for in loop
	for (var contact in bio.contacts) {
	var formattedContact = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);

	$("#topContacts, #footerContacts").append(formattedContact);
	};
}

bio.display();
// Education Object to be used in the Resume
var education = {
	"schools": [
	{
		"name": 'Westmoreland County Community College',
		"location": 'Youngwood, PA',
		"degree": 'Associates',
		"major": 'Web Technology',
		"dates": 2011,
		"website": 'http://wccc.edu'

	}
	],
	"onlineCourses": [ // onlineCourses array
	{
		"title": 'Intro to HTML and CSS',
		"school": 'Udacity',
		"dates": 2015,
		"url": 'http://udacity.com'
	},
	{
		"title": 'Responsive Web Design Fundamentals',
		"school": 'Udacity',
		"dates": 2015,
		"url": 'http://udacity.com'
	},
	{
		"title": 'Responsive Images',
		"school": 'Udacity',
		"dates": 2015,
		"url": 'http://udacity.com'
	},
	{
		"title": 'How to use Git and Github',
		"school": 'Udacity',
		"dates": 2015,
		"url": 'http://udacity.com'
	},
	{
		"title": 'JavaScript Basics',
		"school": 'Udacity',
		"dates": 2015,
		"url": 'http://udacity.com'
	},
	{
		"title": 'Intro to jQuery',
		"school": 'Udacity',
		"dates": 2015,
		"url": 'http://udacity.com'
	}
	]
};

// Appends all education information to the page using the education-entry class
education.display = function() {

	$("#education").append(HTMLschoolStart);
	for (var school in education.schools) {
		 formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		 formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		 formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		 formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		 formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

		$(".education-entry").append(formattedName, formattedDegree, formattedDates, formattedCity, formattedMajor);
	}



	$(".education-entry:last").append(HTMLonlineClasses);
		for(var course in education.onlineCourses) {
			formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

			$(".education-entry").append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedUrl); // Appends entire Oline Education section in one statement. 
		}
};

education.display();
// work object
var work = {
	"jobs": [
	{
		"employer": 'Giant Eagle Inc',
		"location": 'Pittsburgh, PA, Maryland, and Ohio regions.',
		"role": 'Retail Systems Maintenance Technician',
		"dates": 'June 2012 - Present',
		"description": 'Preform Break-Fix repairs on all Giant Eagle equipment. Including Computers, Printers, Point-of-Sale, and Networking equipment. Meet SLAs and respond to calls in a timely manner per business needs.'
	},
	{
		"employer": 'Redevelopment Authority of the County of Westmoreland',
		"location": 'Greensburg, PA',
		"role": 'Graphic and Web Design Intern',
		"dates": 'May 2010 - August 2010',
		"description": 'Design logos and graphics for business use. Develop the downtown inventory project and help grow different surrounding areas with business growth. Make changes to website when requested by Redevelopment Authority leader.'
	}
	]

};

// Creates Display work function and appends all work history to the page
work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].role);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedWorkLocation, formattedWorkDescription); // Appends entire work section in one statement. 
	}
}
// Call to Work Function
work.display();

// projects object
var projects = {
	"projects": [
	{
		"title": 'Build a Portfolio Site',
		"dates": 2015,
		"description": 'Responsive HTML and CSS site built using Bootstrap 3 with responsive design techniques.',
		"images": ['images/project1.png', 'images/bwlogo.png', 'images/perrysdesign.jpg'
		]
	}
	]
};
// Appends project information to the page
projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

// call to projects function
projects.display();
 // Displays Google Map at bottom of the page 
$("#mapDiv").append(googleMap);