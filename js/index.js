// validation email

function validationEmail(){

    var form = document.getElementById("form");
    var email = document.getElementById("Email-field").value;
    var error = document.getElementById("error");
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if(pattern.test(email)){
      form.classList.add("valid"); 
      form.classList.remove("invalid");
      error.innerHTML = "Email is valid"; 
      error.style.color = "green";
    }


    else{
      form.classList.add("invalid");
      form.classList.remove("valid");
      error.innerHTML = "Invalid Email";
      error.style.color = "red"; 
    }

    if(email ==""){
        form.classList.remove("valid"); 
      form.classList.remove("invalid");
      error.innerHTML = "";
    }
}

// slide show



let currentIndex = 0;
const images = document.querySelectorAll('.slideshow .images img');
const imageContainer = document.querySelector('.slideshow .images');

function startSlideShow() {
    setInterval(scrollImages, 2000); // Change slide every 2 seconds
}

function scrollImages() {
    currentIndex = (currentIndex + 1) % images.length;
    imageContainer.style.transition = "transform 0.5s ease-in-out";;
    imageContainer.style.transform = `translateX(-${100 * currentIndex}%)`;
    setTimeout(() => {
        imageContainer.style.transition = "transform 0.5s ease-in-out";
    }, 50);
}

window.addEventListener('load', startSlideShow);


// hero section animation

    $(document).ready(function() {
      // Function to check if the features section is in the viewport
      function isScrolledIntoView(elem) {
          var docViewTop = $(window).scrollTop();
          var docViewBottom = docViewTop + $(window).height();
          var elemTop = $(elem).offset().top;
          return elemTop <= docViewBottom;
      }
  
      // Check if the features section is initially in view
      if (isScrolledIntoView('#features')) {
          $('#features').addClass('visible');
      }
  
      // Scroll event listener
      $(window).scroll(function() {
          // If the features section is scrolled into view, add a class to make it visible
          if (isScrolledIntoView('#features')) {
              $('#features').addClass('visible');
          }
      });
  });

  // Top Destinations animation

  $(document).ready(function() {
    // Function to check if the section is in the viewport
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return elemTop <= docViewBottom;
    }

    // Check if the section is initially in view
    if (isScrolledIntoView('#top-destinations')) {
        $('#top-destinations').addClass('visible');
    }

    // Scroll event listener
    $(window).scroll(function() {
        // If the section is scrolled into view, add a class to make it visible
        if (isScrolledIntoView('#top-destinations')) {
            $('#top-destinations').addClass('visible');
        }
    });
});

  // CTA animation

$(document).ready(function() {
  // Function to check if the section is in the viewport
  function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      return elemTop <= docViewBottom;
  }

  // Check if the section is initially in view
  if (isScrolledIntoView('#cta')) {
      $('#cta').addClass('visible');
  }

  // Scroll event listener
  $(window).scroll(function() {
      // If the section is scrolled into view, add a class to make it visible
      if (isScrolledIntoView('#cta')) {
          $('#cta').addClass('visible');
      }
  });
});


$(document).ready(function() {
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var newsletterOffset = $('#newsletter').offset().top;
      var windowHeight = $(window).height();

      // Check if the user has scrolled to the newsletter section
      if (scroll > (newsletterOffset - windowHeight)) {
          // Animate the newsletter section's left position and opacity
          $('#newsletter').animate({
              left: '0',
              opacity: '1'
          }, 1000); // Adjust the duration as needed
      }
  });
});

  /* to top animation */

  // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTopBtn").style.display = "block";
    } else {
        document.getElementById("toTopBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
