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

//var tweet ="hello career devs";

/* $("#tweets div p").append(tweet); // Starting the change with jQuery on Twitter
                  .before   whatever is defined will be before the actual content
                  .after  whatever is defined will be after the content
                  .html  Everything inside, " such as the p tag" would be replaced with what you want  it to be defined by
                  .text  Prints the text you defined by the variable (Be specific!)
*/                  
// Adding and changing Content... Example, a Tweet on Twitter

// Lesson 10 - Wrap and Unwrap Elements



//var wrapper ="<div class='wrapper'>";
//var button =$(".button");
//var wrapped = true;

//button[0].onclick = function() {
   
  /* if(wrapped){
      $("section").unwrap();
      wrapped = false;
      button.text("wrap");
   } else{
      $("section").wrapAll(wrapper);
      wrapped = true;
      button.text("Unwrap");
   }
   
};
*/


/*

wrap() - wraps all watched elements indivdually
unwrap() - unwraps all matched elements
wrapAll() - wraps all elements combined with 1 single element


*/

// Lesson 11 - Removing Content

//$(".button").remove();
//$("#contact img").remove();


/*

.empty() - empties the inner HTML of an Element
.remove() - removes the element completely

*/

// Tutorial 12 - Changing Attributes

//console.log($("#contact img").attr("alt")) - Another way of calling or displaying it 

//$("#contact img").removeAttr("alt");
//$("#contact img").attr("alt", "location")

/*

.removeAttr() removes an attribute completely
.attr() can read or set any attribute


*/

// Tutorial 13 - CSS with jQuery

/*var myObject = {
   "height": "40",
   "speed": "100"
};
*/


/*
("#social-nav").css({
   "top" : "-400px",
   "left": "150px",
   "opacity": "0.5",
   "border-top": "4px solid red"
});
*/


//$("#social-nav").css("top", "-200px");
//$("#social-nav").css("top", "-200px").css("left", "100px"); // It can go as long as you want in one line
