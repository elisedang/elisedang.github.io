// code inside will only run once the page DOM is ready for Javascript code to execute
$(document).ready(function(){
   var offset = $(".navbar").offset().top;
   console.log(offset);

   // scroll event is sent to window when the user scrolls to a different place in the window
   $(window).scroll(function() {
         // if the vertical scroll position (the number of pixels that are hidden from view
         //  above the scrollable area) is >= offset (height of navbar)
         if ($(window).scrollTop() >= offset) {
             $('.navbar').addClass('navbar-fixed-top');
         }
    });

   // "click.smoothscroll" is a namespace
   $('a[href^="#"]').bind('click.smoothscroll',function (e) {
       // prevents the default action of the event to not be triggered
       //  e.g., clicked anchors won't take the browser to a new URL
       e.preventDefault();

       // setting target to the anchor part of the URL... $() is shorthand of jQuery()
       var target = this.hash,
           $target = $(target);

      var navbarHeightPixel = 34;
      var targetOffset = $target.offset().top - navbarHeightPixel;
      // .animate(properties [, duration ] [, easing ] [, complete ] )
      // properties: an object of CSS properities and values that the animation will move toward
      // duration: how long the animation will run
      // easing: which easing function to use for the transition
      // complete: a function to call once the animation is complete, called once per matched element
       $('html, body').animate({
           'scrollTop': targetOffset
       }, 1200, 'swing');
   });
  });
