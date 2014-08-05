
//one
// $( "#squares" ).on( "click", function() {
//   alert( "User clicked on 'square.'" );
// });

//two
// $( "#squares" ).bind( "click", function() {
//   alert( "User clicked on 'square.'" );
// });

//three
// $( "#squares" ).bind( "click", function() {
//   alert( "User clicked on 'square.'" );
// });


//four
// var message = "passing an text!";
// $( "#squares" ).bind( "click", function() {
//   alert( message );
// });

//five
// message = "Not in the face!";
// $( "#" ).bind( "click", function() {
//   alert( message );
// });

//six
// $( "#clicktheimage" ).click(function() {
//   $( "#beautyimage" ).animate({
//     opacity: 0.25,
//     left: "+=50",
//     height: "toggle"
//   }, 5000, function() {
//     // Animation complete.
//   });
// });

//seven
// $( "#beyonce" ).click(function() {
//   $( "#beyonceimage" ).animate({
//     width: [ "toggle", "swing" ],
//     height: [ "toggle", "swing" ],
//     opacity: "toggle"
//   }, 5000, "linear", function() {
//     $( this ).after( "<div>Beyonce gone baby!</div>" );
//   });
// });

//eight
// $( "#go" ).click(function() {
//   $( "#block" ).animate({
//     width: "80%",
//     opacity: 0.4,
//     marginLeft: ".5in",
//     fontSize: "4em",
//     borderWidth: "10px"
//   }, 1800 );
// });

//nine
// $( "#go1" ).click(function() {
//   $( "#block1" )
//     .animate({
//       width: "90%"
//     }, {
//       queue: false,
//       duration: 3000
//     })
//     .animate({ fontSize: "24px" }, 1500 )
//     .animate({ borderRightWidth: "15px" }, 1500 );
// });
 
// $( "#go2" ).click(function() {
//   $( "#block2" )
//     .animate({ width: "90%" }, 1000 )
//     .animate({ fontSize: "24px" }, 1000 )
//     .animate({ borderLeftWidth: "15px" }, 1000 );
// });
 
// $( "#go3" ).click(function() {
//   $( "#go1" ).add( "#go2" ).click();
// });
 
// $( "#go4" ).click(function() {
//   $( "div" ).css({
//     width: "",
//     fontSize: "",
//     borderWidth: ""
//   });
// });


//Animate the hiding and showing of two divs, delaying the first before showing it.
//ten
// $( "button" ).click(function() {
//   $( "div.first" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
//   $( "div.second" ).slideUp( 300 ).fadeIn( 400 );
// });

// //eleven .submit() Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.
// $( "form" ).submit(function( event ) {
//   if ( $( "input:first" ).val() === "I heart chinenyem" ) {
//     $( "span" ).text( "You Got That Right!" ).show();
//     return;
//   }
 
//   $( "span" ).text( "Please Try Again" ).show().fadeOut( 1000 );
//   event.preventDefault();
// });


//twelve Hovering changes an image when you hover over it and shows the original image when 
//you remove the cursor from the image.
//First of all we position our images over each other so that you can only see one of them.
//Then we add our jQuery function which fades out the above image when you hover over 
//our image-container. The above image is faded in when we remove our mouse from the container. 
//stop(true, true) prevents our function from repeating itself too often.

// $(document).ready(function(){
// $(".image-container").hover(function(){
// $(this).find(".change-image").stop(true, true).fadeOut(800);
// }, function() {
// $(this).find(".change-image").stop(true, true).fadeIn(800);
// });
// });

// //thirteen scroll to the top of the page
// $(document).ready(function(){
//   $('a[href="#top"]').click(function(){
//      $('html,body').animate({ scrollTop: $("body").offset().top},
//      {duration: 'slow', easing: 'swing'});
//      return false;
//   });	
// });

//fourteen show and hide text
//maybe cause not working 
//http://www.toolinfy.com/jquery-toggle-show-hide-text
$(document).ready(function()
{
  $(".toggle-example").html("Show");	
  $(".toggle-example").next("p").hide();

 $(".toggle-example").toggle(function(){
   $(".toggle-example").next("p").show("slow");	
   $(".toggle-example").html("Hide");
 }, 

 function(){
  $(".toggle-example").next("p").hide("slow");	
  $(".toggle-example").html("Show");	
 });
});






