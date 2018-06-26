// code inside will only run once the page DOM is ready for Javascript code to execute
$(document).ready(function(){
   var offset = $(".navbar").offset().top;

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

   $(document).ready(function() {
     $(".img-responsive").effect("bounce", {times:3, distance:10}, 600);
});
  });

  var eliseCounter = 0, coderCounter = 0, leaderCounter = 0, creatorCounter = 0, explorerCounter = 0,
    eliseGallery = ["images/elise-dang-photo-portrait-grad.png", "images/elise-dang-photo-portrait-snaphq.png", "images/elise-dang-flat-portrait-deepblue.png"],
    coderGallery = ["images/elise-dang-photo-coder-hackathon.png", "images/elise-dang-photo-coder-lahacks2017.png", "images/elise-dang-photo-coder-gracehopper.png", "images/elise-dang-flat-coder2-white.png"],
    leaderGallery = ["images/elise-dang-photo-leader-girlswhocode.png", "images/elise-dang-photo-leader-icsday.png", "images/elise-dang-photo-leader-girlswhocode2.png", "images/elise-dang-flat-leader2-white.png"],
    creatorGallery = ["images/elise-dang-photo-creator-studio-ghibli.png", "images/elise-dang-creator-icssc-pokemon-ad.png", "images/elise-dang-flat-creator2-white.png"],
    explorerGallery = ["images/elise-dang-photo-explorer-vietnam.png", "images/elise-dang-photo-explorer-sanfran.png", "images/elise-dang-photo-explorer-grandcanyon.png", "images/elise-dang-flat-explorer.png"];

    $(function() {
      $('#eliseGraphic, #elisePopup').click(function() {
        document.getElementById("eliseGraphic").src = eliseGallery[eliseCounter];
        eliseCounter++;
        if (eliseCounter >= eliseGallery.length) {
            eliseCounter = 0;
        }
      });
  });

  $(function() {
    $('#coderGraphic, #coderPopup').click(function() {
      document.getElementById("coderGraphic").src = coderGallery[coderCounter];
      coderCounter++;
      if (coderCounter >= coderGallery.length) {
          coderCounter = 0;
      }
    });
});

$(function() {
  $('#leaderGraphic, #leaderPopup').click(function() {
    document.getElementById("leaderGraphic").src = leaderGallery[leaderCounter];
    leaderCounter++;
    if (leaderCounter >= leaderGallery.length) {
        leaderCounter = 0;
    }
  });
});

$(function() {
  $('#creatorGraphic, #creatorPopup').click(function() {
    document.getElementById("creatorGraphic").src = creatorGallery[creatorCounter];
    creatorCounter++;
    if (creatorCounter >= creatorGallery.length) {
        creatorCounter = 0;
    }
  });
});

$(function() {
  $('#explorerGraphic, #explorerPopup').click(function() {
    document.getElementById("explorerGraphic").src = explorerGallery[explorerCounter];
    explorerCounter++;
    if (explorerCounter >= explorerGallery.length) {
        explorerCounter = 0;
    }
  });
});

var firstClickAlreadyElise = false;
var firstClickAlreadyCoder = false;
var firstClickAlreadyLeader = false;
var firstClickAlreadyCreator = false;
var firstClickAlreadyExplorer = false;

$(function() {
    $('.hover-launch').on("touchstart mouseenter", function() {
      $(this).effect("bounce", { times:1, direction:"up", distance:10}, 300);
      if ($(this).attr('id') == "eliseStory" && !firstClickAlreadyElise) {
        $(this).find('.img-responsive').stop(true, false).animate({"opacity": .2});
        $(this).find(".popup").show();
      } else if  ($(this).attr('id') == "coderStory" && !firstClickAlreadyCoder) {
        $(this).find('.img-responsive').stop(true, false).animate({"opacity": .2});
        $(this).find(".popup").show();
      } else if  ($(this).attr('id') == "leaderStory" && !firstClickAlreadyLeader) {
        $(this).find('.img-responsive').stop(true, false).animate({"opacity": .2});
        $(this).find(".popup").show();
      } else if  ($(this).attr('id') == "creatorStory" && !firstClickAlreadyCreator) {
        $(this).find('.img-responsive').stop(true, false).animate({"opacity": .2});
        $(this).find(".popup").show();
      } else if  ($(this).attr('id') == "explorerStory" && !firstClickAlreadyExplorer) {
        $(this).find('.img-responsive').stop(true, false).animate({"opacity": .2});
        $(this).find(".popup").show();
      }
  }).on("touchend mouseleave", function() {
    $(this).find('.img-responsive').animate({"opacity": 1});
    $(".popup").hide();
  });
});

$(function() {
  $('.hover-launch').click(function() {
    if ($(this).attr('id') == "eliseStory" && !firstClickAlreadyElise) {
      firstClickAlreadyElise = true;
      $(this).find('.img-responsive').stop().animate({"opacity": 1, "duration": 0});
      $(this).find(".popup").hide();
    } else if  ($(this).attr('id') == "coderStory" && !firstClickAlreadyCoder) {
      firstClickAlreadyCoder = true;
      $(this).find('.img-responsive').stop().animate({"opacity": 1, "duration": 0});
      $(this).find(".popup").hide();
    } else if  ($(this).attr('id') == "leaderStory" && !firstClickAlreadyLeader) {
      firstClickAlreadyLeader = true;
      $(this).find('.img-responsive').stop().animate({"opacity": 1, "duration": 0});
      $(this).find(".popup").hide();
    } else if  ($(this).attr('id') == "creatorStory" && !firstClickAlreadyCreator) {
      firstClickAlreadyCreator = true;
      $(this).find('.img-responsive').stop().animate({"opacity": 1, "duration": 0});
      $(".popup").hide();
    } else if  ($(this).attr('id') == "explorerStory" && !firstClickAlreadyExplorer) {
      firstClickAlreadyExplorer = true;
      $(this).find('.img-responsive').stop().animate({"opacity": 1, "duration": 0});
      $(this).find(".popup").hide();
    }
  });
});

// $(function() {
//   $('.hover-launch').one('mouseenter', function() {
//     $(this).find('.img-responsive').stop().animate({"opacity": .4});
//     $(".popup").show();
// })
// .one('mouseleave', function() {
//     $(this).find('.img-responsive').animate({"opacity": 1});
//     $(".popup").hide();
// });
// });
//
//
// $(function() {
//   $('.img-responsive').one('click', function() {
//     $(this).animate({"opacity": 1, "duration": 0});
//     $(".popup").hide();
//   });
// });
