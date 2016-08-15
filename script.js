$(document).ready(function(){
   var offset = $(".navbar").offset().top;
   $(window).scroll(function() {
         if ($(window).scrollTop() >= offset) {
             $('.navbar').addClass('navbar-fixed-top');

         }
        //  else {
        //      $('.navbar').removeClass('navbar-fixed-top');
        //  }
    });

   $('a[href^="#"]').bind('click.smoothscroll',function (e) {
       e.preventDefault();

       var target = this.hash,
           $target = $(target);

       $('html, body').stop().animate({
           'scrollTop': $target.offset().top-35
       }, 1200, 'swing', function () {
           window.location.hash = target;
       });
   });
  });
