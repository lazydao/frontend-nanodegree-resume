/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
     "name": "will",
     "role": "前端开发工程师",
     "contacts": {
         "mobile": "136********",
         "email": "will@gmail.com",
         "github": "github.com/will",
         "location": "广州"
     },
     "welcomeMessage": "Thank you for reading",
     "skills": ["前端开发", "游戏测试"],
     "biopic": "images/fry.jpg",
     "display": function(){
         var formattedHTMLheaderName = HTMLheaderName.replace('%data%', this.name);
         var formattedHTMLheaderRole = HTMLheaderRole.replace('%data%', this.role);
         $('#header').prepend(formattedHTMLheaderRole);
         $('#header').prepend(formattedHTMLheaderName);
         var formattedHTMLmobile = HTMLmobile.replace('%data%', this.contacts.mobile);
         $('#topContacts').append(formattedHTMLmobile);
         var formattedHTMLemail = HTMLemail.replace('%data%', this.contacts.email);
         $('#topContacts').append(formattedHTMLemail);
         var formattedHTMLgithub = HTMLgithub.replace('%data%', this.contacts.github);
         $('#topContacts').append(formattedHTMLgithub);
         var formattedHTMLlocation = HTMLlocation.replace('%data%', this.contacts.location);
         $('#topContacts').append(formattedHTMLlocation);
         var formattedHTMLbioPic = HTMLbioPic.replace('%data%', this.biopic);
         var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);
         $('#header').append(formattedHTMLbioPic);
         $('#header').append(formattedHTMLwelcomeMsg);
         $('#header').append(HTMLskillsStart);
         for (var skill in this.skills){
             var formattedHTMLskills = HTMLskills.replace('%data%', this.skills[skill]);
             $('#skills').append(formattedHTMLskills);
         }
        $('#footerContacts').append(formattedHTMLmobile);
        $('#footerContacts').append(formattedHTMLemail);
        $('#footerContacts').append(formattedHTMLgithub);
        $('#footerContacts').append(formattedHTMLlocation);
     }
 }

 var education = {
     "schools": [
         {
             "name": "海南大学",
             "location": "海南海口",
             "degree": "理学学士",
             "majors": ["离散数学", "微积分"],
             "dates": "2008.09-2012.6",
             "url": "www.hainu.edu.cn"
         },
         {
             "name": "华南理工大学",
             "location": "广东广州",
             "degree": "工程硕士",
             "majors": ["计算机算法", "数据库导论"],
             "dates": "2012.09-2015.04",
             "url": "www.scut.edu.cn"
         }
     ],
     "onlineCourses": [
         {
             "title": "前端开发（入门）",
             "school": "Udacity",
             "dates": "2017.05-2017.07",
             "url": "www.udacity.com"
         }
     ],
     "display": function(){
         for (var school in this.schools){
            $('#education').append(HTMLschoolStart);
            console.log(school);
            console.log(this.schools.length);
            var formattedHTMLschoolName = HTMLschoolName.replace('%data%', this.schools[school].name);
            var formattedHTMLschoolDegree = HTMLschoolDegree.replace('%data%', this.schools[school].degree);
            var formattedHTMLschoolDates = HTMLschoolDates.replace('%data%', this.schools[school].dates);
            var formattedHTMLschoolLocation = HTMLschoolLocation.replace('%data%', this.schools[school].location);
            $('.education-entry:last').append(formattedHTMLschoolName+formattedHTMLschoolDegree);
            $('.education-entry:last').append(formattedHTMLschoolDates);
            $('.education-entry:last').append(formattedHTMLschoolLocation);
            for (var major in this.schools[school].majors){
                var formattedHTMLschoolMajor = HTMLschoolMajor.replace('%data%', this.schools[school].majors[major]);
                $('.education-entry:last').append(formattedHTMLschoolMajor);
            }
         }
        $('#education').append(HTMLonlineClasses);
        for (var onlineCourse in this.onlineCourses){
            $('#education').append(HTMLschoolStart);
            var formattedHTMLonlineTitle = HTMLonlineTitle.replace('%data%', this.onlineCourses[onlineCourse].title);
            var formattedHTMLonlineSchool = HTMLonlineSchool.replace('%data%', this.onlineCourses[onlineCourse].school);
            var formattedHTMLonlineDates = HTMLonlineDates.replace('%data%', this.onlineCourses[onlineCourse].dates);
            var formattedHTMLonlineURL = HTMLonlineURL.replace('%data%', this.onlineCourses[onlineCourse].url);
            $('.education-entry:last').append(formattedHTMLonlineTitle+formattedHTMLonlineSchool);
            $('.education-entry:last').append(formattedHTMLonlineDates);
            $('.education-entry:last').append(formattedHTMLonlineURL);
        }
     }
 }

 var work = {
     "jobs": [
         {
             "employer": "**信息科技有限公司",
             "title": "高级游戏测试工程师",
             "location": "广东广州",
             "dates": "2015.04至今",
             "description": "所属质量保障部，负责手游测试"
         }
     ],
     "display": function(){
         for (var job in this.jobs){
             $('#workExperience').append(HTMLworkStart);
             var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
             var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
             var formattedHTMLworkDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
             var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
             var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
             $('.work-entry:last').append(formattedHTMLworkEmployer+formattedHTMLworkTitle);
             $('.work-entry:last').append(formattedHTMLworkDates);
             $('.work-entry:last').append(formattedHTMLworkLocation);
             $('.work-entry:last').append(formattedHTMLworkDescription);
         }
         
     }
 }

 var projects = {
     "projects": [
         {
             "title": "auto-pi",
             "dates": "2016",
             "description": "树莓派自动化任务构建",
             "images": ["images/197x148.gif", "images/197x148.gif"]
         }
     ],
     "display": function(){
         for (var project in this.projects){
            $('#projects').append(HTMLprojectStart);
            var formattedHTMLprojectTitle = HTMLprojectTitle.replace('%data%', this.projects[project].title);
            var formattedHTMLprojectDates = HTMLprojectDates.replace('%data%', this.projects[project].dates);
            var formattedHTMLprojectDescription = HTMLprojectDescription.replace('%data%', this.projects[project].description);
            $('.project-entry:last').append(formattedHTMLprojectTitle);
            $('.project-entry:last').append(formattedHTMLprojectDates);
            $('.project-entry:last').append(formattedHTMLprojectDescription);
            for (var img in this.projects[project].images){
                var formattedHTMLprojectImage = HTMLprojectImage.replace('%data%', this.projects[project].images[img]);
                $('.project-entry:last').append(formattedHTMLprojectImage);
            }
         }
     }     
 }

 bio.display();
 work.display();
 projects.display();
 education.display();
 $('#mapDiv').append(googleMap);