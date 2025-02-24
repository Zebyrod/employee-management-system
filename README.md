# Employee Management CRUD Application (ZR Management)

#### A Secure application for tracking employee data
<img src="https://plus.unsplash.com/premium_photo-1661725357418-fb09ff7c0aae?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwd29ya2VyfGVufDB8fDB8fHww" alt="Image of office employees"/>


## Description
I decided upon making an employee management system to showcase my ability to create a fully functinal CRUD application! I have never been apart of the behind the scenes of a job and I have always had a weird interest in how the onboarding process and systems all tie together. This application is my first crack at a basic implementation of these systems that every company utilizes today! Over time I hope to expand this project to be a fully functional system that HR and companies can use for their staff.

## Table of Contents
* [Technologies Used](#technologiesused)
* [Features](#features)
* [Design](#design)
* [Project Next Steps](#nextsteps)
* [Deployed App](#deployment)
* [About the Author](#Author)

## <a name="technologiesused"></a>Technologies Used
* JavaScript
* HTML5
* CSS3
* mongoose 
* EJS
* dotenv
* bcrypt
* express
* express-session
* method-override
* morgan 



## Features
User Authentication
Database storage
Navigation bar 
Buttons for submission of forms

## Wireframe Link
* https://lucid.app/lucidspark/ff6f40da-129e-4c62-8743-cc40f35272cb/edit?beaconFlowId=8CB82655C56C22A3&invitationId=inv_a2a53da5-ffbc-44b8-b418-348d0ed30637&page=0_0#

## Trello Planning
* https://trello.com/b/RyhyzRUs/project-2-crud-application

## <a name="design"></a>Design
* For my design of this app I did not have any specific inspirations. I tried about 3 different looks for the website, however I ultimately decided upon a simple design that was easy to follow for a first time user. In the future I would like to add animations to the landing page as well as some navigation options to the aside section on the left of the page. 


## <a name="nextsteps"></a>Project Next Steps
#### List of Future Features
* Expansion of the data schema on the backend ex. employee social, date of birth etc
* More information displayed on the left part of page ex. if an employee has a team under them or is currently assigned to a project
* Animations added to the landing page before logging in ex. multiple images having a transition effect
* Add the ability to keep track of multiple companies under the same umbrella company


## Github repository
* You can view the repository:
[Github.com](https://github.com/Zebyrod/employee-management-system)
* If unable to view please go live locally through VS Code

## <a name="Zebastian Rodriguez"></a>About The Author
I am an aspiring software engineer. What started out as a curiosity quickly grew into a passion for coding and programming! I loved building basic webpages using my hobbies and interests as inspiration. This project is my second project and I think is a huge step up from my previous one! My previous project was a server based game which just conisted of HTML CSS and Javascript. In this project I implement much more technologies as well as the use of a mongoose database and ejs templates. I found this project super fun to work on as I had no clue prior to learing about these technologies what the backend side of code and ejs could do. After accomplishing this project I truly feel like I have grown so much as a programmer and problem solver especially compared to where I first began!
    
## Works Cited:
* Pattern Attribute :    
Pattern Attributes can be used within your forms to restrict undesired inputs from a user or in other words prevent certain inputs in a field. In this project I use this attribute on my forms to restrict the user from inputting numbers or special characters within certain input fields. Also utilzing the title attribute if the user inputs something outside of the pattern they will be displayed a message of no numbers or special characters to guide them into the right direction. 
- https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern
- https://www.w3schools.com/TAGs/att_input_pattern.asp

* CSS Grid : 
In this project I used both CSS flexbox and grid to get the design and layout of the page. By utilizing the grid-template-areas in my css I was able to easily achieve my desired layout. In order to do this I had to split my page up with 3 divs. I set each div with a class to match the part of the layout they would be in, then I assigned them to their respective areas in the template-areas to achieve the layout.
-https://www.w3schools.com/cssref/pr_grid-template-areas.php