
$(document).ready(function() {

  // define variables
  var navOffset, scrollPos = 0;

  // add utility wrapper elements for positioning
  $("nav").wrap('<div class="sticky-combo"></div>');
  $("nav").wrapInner('<div class="nav-inner"></div>');
  $(".nav-inner").wrapInner('<div class="nav-inner-most"></div>');

  // function to run on page load and window resize
  function stickyUtility() {

    // only update navOffset if it is not currently using fixed position
    if (!$("nav").hasClass("fixed")) {
      navOffset = $("nav").offset().top;
    }

    // apply matching height to nav wrapper div to avoid awkward content jumps
    $(".sticky-combo").height($("nav").outerHeight());

  } // end stickyUtility function

  // run on page load
  stickyUtility();

  // run on window resize
  $(window).resize(function() {
    stickyUtility();
  });

  // run on scroll event
  $(window).scroll(function() {

    scrollPos = $(window).scrollTop();

    if (scrollPos >= navOffset) {
      $("nav").addClass("fixed sticky-nav-color");
      $(".ui-menu").addClass("fixed-dropdown").css({"top": "73px"});
    } else {
      $("nav").removeClass("fixed sticky-nav-color");
      $(".ui-menu").removeClass("fixed-dropdown").css({"top": "355px"});
    }

  });

});
