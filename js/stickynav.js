
$(document).ready(function() {
  
  // define variables
  var navOffset, scrollPos = 0;
  
  // add utility wrapper elements for positioning
  $("nav").wrap('<div class="nav-placeholder"></div>');
  $("nav").wrapInner('<div class="nav-inner"></div>');
  $(".nav-inner").wrapInner('<div class="nav-inner-most"></div>');
  
  // function to run on page load and window resize
  function stickyUtility() {
    
    // only update navOffset if it is not currently using fixed position
    if (!$("nav").hasClass("fixed")) {
      navOffset = $("nav").offset().top;
    }
    
    // apply matching height to nav wrapper div to avoid awkward content jumps
    $(".nav-placeholder").height($("nav").outerHeight());
    
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
      $("nav").addClass("fixed");
    } else {
      $("nav").removeClass("fixed");
    }
    
  });
  
});