/*form animation*/
$(document).ready(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var formOffset = $('.contactform').offset().top;
      
      // Check if the top of the form is visible in the viewport
      if (scroll + $(window).height() > formOffset) {
        // Animate form elements
        $('.inputbox, input[type="submit"]').each(function(index) {
          $(this).delay(200 * index).animate({opacity: 1, top: 0}, 500);
        });
      }
    });
  });



  