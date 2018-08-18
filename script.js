/* Lesson3 - How to start running the jQuery
$(document).ready(function(){
   alert("jQuery loaded") 
});
*/

// Explaining when you would know that jQuery is involved in a website as well as specific jQuery Statements ".css , .animate" 

/* Lesson 5- jQuery Filters
$("h3").css({border:"3px solid blue"});

$(".wrapper").css({border: "3px solid red"});

$("#clients").css({border: "3px solid yellow"});
*/

/* Lesson 6 - jQuery Selectors */

/*$("header nav li:first").css({border: "2px solid red"});
$("header nav li:first").css({border: "2px solid red"}); */

/*$("#contact ul:first-child").css({border: "2px solid red"});
$("#contact ul:last-child").css({border: "2px solid red"});*/

/*even
$("header nav li:even").css({border:"2px solid red"});
*/
/*odd
$("header nav li:odd").css({border: "2px solid blue"});
*/
/*not
$("section:not('#contact')").css({border: "2px solid green"});
*/

/*
$("#social-nav li:lt(3)").css({border:"2px solid blue"});
*/

/*
$("img[alt]").css({border: "2px solid pink"});
*/
/*
$("img[alt=quote]").css({border: "2px solid purple"});
*/


/* Tutorial 7 - Transversing the DOM with jQuery 
$("#contact-methods").next().css({border: "3px solid red"});
*/

/* prev 
$("#social-nav").prev().css({border: "3px solid red"});
*/

/* parent 
$(".banner-title").children().css({border: "3px solid pink"});
*/

/* children 
$("#social-nav").children().css({border: "3px solid green"});
*/

/* find 
$("#contact .facebook").css({border: "3px solid purple"});
*/

/* closest 
$("#social-nav").closest(".wrapper").css({border: "3px solid orange"});
*/


// Tutorial 8 - jQuery Chaining

/*
$("#contact-method").css({border: "2px solid red"})
.next().css({border: "2px solid green"})
.closest("section").css({border: "2px solid blue"});
*/

// Tutorial 9 - Adding Content using jQuery
var tweet ="hello career devs";

$("#tweets div p").append(tweet); // Starting the change with jQuery on Twitter
                  .before //  whatever is defined will be before the actual content
                  .after // whatever is defined will be after the content
                  .html // Everything inside, " such as the p tag" would be replaced with what you want  it to be defined by
                  .text // Prints the text you defined by the variable (Be specific!)
// Adding and changing Content... Example, a Tweet on Twitter




