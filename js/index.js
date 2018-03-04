$(document).ready(function () {
  var boxWidth1 = $('.service-box-wrapper').width();
  $('.service-box-wrapper').css('height', boxWidth1);

  window.onresize = () => {
    var boxWidth = $('.service-box-wrapper').width();
    $('.service-box-wrapper').css('height', boxWidth);
  }

  $('#year').text(new Date().getFullYear())

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        $('.active').removeClass('active')
        $(this).addClass('active')
        console.log($(this))
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

    $(window).bind('scroll', () => {
      console.log($(window).scrollTop() / 100)
      var opacity = $(window).scrollTop() / 100
      if(opacity > 1) {
        $('nav').css('background-color', 'rgba(0,0,0,' + 1 + ')')
      } else {
        $('nav').css('background-color', 'rgba(0,0,0,' + opacity + ')')
      }
    })
})

