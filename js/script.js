$(document).ready(function(){
   var offset = $(".navbar").offset().top;
   $(window).scroll(function() {
         if ($(window).scrollTop() >= offset) {
             $('.navbar').addClass('navbar-fixed-top');
         }
         // else {
         //     $('.navbar').removeClass('navbar-fixed-top');
         // }
    });

   $('a[href^="#"]').bind('click.smoothscroll',function (e) {
       e.preventDefault();

       // figuring out which element to scroll to
       var target = this.hash,
           $target = $(target);

      var navbarHeightPixel = 35;
      var targetOffset = $target.offset().top - navbarHeightPixel;
       $('html, body').animate({
           'scrollTop': targetOffset
       }, 1200, 'swing', function () {
           window.location.hash = target;
       });
   });
  });
