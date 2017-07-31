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
         $('#header').prepend(formattedHTMLheaderRole, formattedHTMLheaderName);
         var formattedHTMLmobile = HTMLmobile.replace('%data%', this.contacts.mobile);
         var formattedHTMLemail = HTMLemail.replace('%data%', this.contacts.email);
         var formattedHTMLgithub = HTMLgithub.replace('%data%', this.contacts.github);
         var formattedHTMLlocation = HTMLlocation.replace('%data%', this.contacts.location);
         $('#topContacts, #footerContacts').append(formattedHTMLmobile, formattedHTMLemail, formattedHTMLgithub, formattedHTMLlocation);
         var formattedHTMLbioPic = HTMLbioPic.replace('%data%', this.biopic);
         var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);
         $('#header').append(formattedHTMLbioPic, formattedHTMLwelcomeMsg, HTMLskillsStart);
         this.skills.forEach(function(skill) {
             var formattedHTMLskills = HTMLskills.replace('%data%', skill);
             $('#skills').append(formattedHTMLskills);
         });
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
        this.schools.forEach(function(school) {
            $('#education').append(HTMLschoolStart);
            var formattedHTMLschoolName = HTMLschoolName.replace('%data%', school.name);
            var formattedHTMLschoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
            var formattedHTMLschoolDates = HTMLschoolDates.replace('%data%', school.dates);
            var formattedHTMLschoolLocation = HTMLschoolLocation.replace('%data%', school.location);
            $('.education-entry:last').append(formattedHTMLschoolName+formattedHTMLschoolDegree, formattedHTMLschoolDates, formattedHTMLschoolLocation);
            school.majors.forEach(function(major){
                var formattedHTMLschoolMajor = HTMLschoolMajor.replace('%data%', major);
                $('.education-entry:last').append(formattedHTMLschoolMajor);
            })
        });
        $('#education').append(HTMLonlineClasses);
        this.onlineCourses.forEach(function(onlineCourse){
            $('#education').append(HTMLschoolStart);
            var formattedHTMLonlineTitle = HTMLonlineTitle.replace('%data%', onlineCourse.title);
            var formattedHTMLonlineSchool = HTMLonlineSchool.replace('%data%', onlineCourse.school);
            var formattedHTMLonlineDates = HTMLonlineDates.replace('%data%', onlineCourse.dates);
            var formattedHTMLonlineURL = HTMLonlineURL.replace('%data%', onlineCourse.url);
            $('.education-entry:last').append(formattedHTMLonlineTitle+formattedHTMLonlineSchool, formattedHTMLonlineDates, formattedHTMLonlineURL);
        })
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
         this.jobs.forEach(function(job){
             $('#workExperience').append(HTMLworkStart);
             var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
             var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", job.title);
             var formattedHTMLworkDates = HTMLworkDates.replace("%data%", job.dates);
             var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", job.location);
             var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", job.description);
             $('.work-entry:last').append(formattedHTMLworkEmployer+formattedHTMLworkTitle, formattedHTMLworkDates, formattedHTMLworkLocation, formattedHTMLworkDescription);
         });
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
        this.projects.forEach(function(project){
            $('#projects').append(HTMLprojectStart);
            var formattedHTMLprojectTitle = HTMLprojectTitle.replace('%data%', project.title);
            var formattedHTMLprojectDates = HTMLprojectDates.replace('%data%', project.dates);
            var formattedHTMLprojectDescription = HTMLprojectDescription.replace('%data%', project.description);
            $('.project-entry:last').append(formattedHTMLprojectTitle, formattedHTMLprojectDates, formattedHTMLprojectDescription);
            project.images.forEach(function(img){
                var formattedHTMLprojectImage = HTMLprojectImage.replace('%data%', img);
                $('.project-entry:last').append(formattedHTMLprojectImage);
            });
        });
     }     
 }

 bio.display();
 work.display();
 projects.display();
 education.display();
 $('#mapDiv').append(googleMap);