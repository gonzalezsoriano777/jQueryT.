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

// Tutorial 14 - Adding and Removing Classes

//$("header .wrapper").removeClass("wrapper");
//$("header > div").addClass("wrapper");

//var button = $("#lead-banner a");

/*button[0].onclick = function() {
  $("#points-of-sale").toggleClass("open");
  return false;
};
*/

/*

removeClass() - remove a class from the method element(s)
addClass() - adds a class to the matched element(s)
toggleClass - toggles the class on and off on their matched elements(s)


*/


// Tutorial 15 - Binding & Unbinding Events

//var myLis = $("#points-of-sale li"); 

//myLis.on("click", function(){
   
  // $(this).css({"background" : "pink"});
   
//   myLis.off("click");   
//});



/*

on() - binds an event to matched elements(s)
off() - unbinds event from matched elements(s)

*/

// Tutorial 16 - Event Helpers

/* $("#lead-banner").on("click", function(){
                  //you can use ".click"
                  // or you can use dblclick (another way of saying ".on("click")"
    alert("you clicked me");
 });

*/

/*

on() - binds an event to matched elements(s)
off() - unbinds event from matched elements(s)

*/

// Tutorial 17 - Document Ready vs Window Load

// $(document).on("ready", function(){
            //.ready can be used as well
            // This one is the most simplier for me in my opinion ^^
// });

/*
Another easier way to do it is by just using the 
$(function(){ 

}); This right here is the "Document Ready" 


$(window).on("load", function() {
   This is the Window Load method
   This is best to find the dimesions of an image for either Width or Height
}

A simpler version is
$(window).load(function(){
   
   }

*/


// Tutorial 18 - The Event Object in jQuery
/*
$(document).ready(function(){
   
   $("*").on("click", function(e){
       console.log(e.target);
       console.log("The event type is: " + e.type);
       console.log("X co-ordinate of the event is: " + e.pageX);
       console.log("Y co-ordinate of the event is: " + e.pageY);
       e.stopPropagation();
   });   
    
});   
    
    /*element.on("click", function(){
        // do something     
    });
    */

// Tutorial 19 - Animations in jQuery
/*
$(document).ready(function() {
    
function complete() {
        alert("Animation complete");
    }
    $("section > h2").on("click", function() {
     
     $(this).animate({"width" : "500px", "height" : "100px"}, 
    1000, "linear", complete);   
    
   
   
        
    });
});

*/

// Tutorial 20 - Fading Elements In & Out

/*
$(document).ready(function() {
    
    $("section > h2").on("click", function() {
        
         $(this).animate({"opacity": "0.5"}) // Making it fade
  */
                    // OR
                    
       //  $(this).fadeOut(2000). // Just to make them fade in out once
                    //fadeIn(500);
        
        // To make it fade in and out like a pattern
        
        /*
        $(this).fadeTo(200, 0.2)
                .fadeTo(200, 0.8)
                .fadeTo(200, 0.2)
                .fadeTo(200, 0.8)
                .fadeTo(200, 0.2)
                .fadeTo(200, 0.8);
          */      
                
                
 //   });
// });

// Tutorial 21 - Hide and Show Elements

 // $(document).ready(function() {
    
  //    $("section > h2").on("click", function() {
       
      // $(this).hide(1000).show(1000); // Hide and Show the Element
      
     // $(this).toggle(1000); // Automatically hides it with the Toggle
   
   /*
   
    $("img[alt=map]").on("click", function() { // Once pressing the map it will fade both button (when using the toggle attribute)
        
    $("section > h2").toggle(1000);   
        
    });
});
*/ 

// Tutorial 22 - Sliding Elements
/*
$(document).ready(function() {
    
    $(".slide-button-up").on("click", function() {
       
    $("#lead-banner").slideToggle(1000, function() {
        alert("animation complete")
    });
        
    });
    
 /*  
   
    /* $(".slide-button-down").on("click", function() {
       
    $("#lead-banner").slideDown(4000, function(){
        alert("animation complete");
    });
  }); 
  */

// });

// Tutorial 23 - Fading Animation Example

/*
$(document).ready(function(){
   
   var allQuotes = $("blockquote");
   var currentQuote = 0;
   
   
   function changeQuote() {
      
          
          $(allQuotes[currentQuote]).fadeOut(200, function(){
          
           if(currentQuote == allQuote.length - 1) {
              currentQuote = 0;
              
          } else {
              currentQuote++;
          }
          $(allQuote[currentQuote]).fadeIn(200);
          
          
          });
          
         
     }
     
     var quoteTimer = setInterval(changeQuote, 3000);
});
*/

// Tutorial 24 - Sliding Animation Example

/*
$(document).ready(function() {
   
   var items = $("#points-of-sale li");
   
   items.on("click", function() { // Makes the icons have a dropdown with the wording inside it
      
      $(this).find("p").slideToggle(500);
       
   });
    
});

*/

// Tutorial 25 - Using Plugins

/*
$(document).ready(function() {
  
  $(".rslides").responsiveSlides();
    
});
*/

// Tutorial 26 - What Next?

// Practice and Experiment with each and every Tutorial and just make a website with Sliders, Image Galleries, etc.