$(document).ready(function () {
  var boxWidth1 = $('.service-box-wrapper').width();
  $('.service-box-wrapper').css('height', boxWidth1);
  $('.side-nav-links-wrapper').hide()
    if ($(window).innerWidth() < 800) {
    $('.nav-links-wrapper').hide()
    $('.contact-callout-wrapper').css('width', '100%')
    $('.team-member').css('width', '100%')
    $('.nav-logo').css('padding', '.5em 2em .1em .5em')
    $('.header-wrapper').css('margin', '4em 0')
  } else {
    $('.contact-callout-wrapper').css('width', '20%')
    $('.nav-links-wrapper').show()
    $('.team-member').css('width', '33%')
    $('.nav-logo').css('padding', '.5em 2em .1em 1em')
    $('.header-wrapper').css('margin', '0')
    $('.hamburger-wrapper').hide()
  }

  window.onresize = () => {
    if ($(window).innerWidth() < 800) {
      $('.nav-links-wrapper').hide()
      $('.contact-callout-wrapper').css('width', '100%')
      $('.team-member').css('width', '100%')
      $('.nav-logo').css('padding', '.5em 2em .1em .5em')
      $('.header-wrapper').css('margin', '4em 0')
      $('.hamburger-wrapper').show()
    } else {
      $('.contact-callout-wrapper').css('width', '20%')
      $('.nav-links-wrapper').show()
      $('.team-member').css('width', '33%')
      $('.nav-logo').css('padding', '.5em 2em .1em 1em')
      $('.header-wrapper').css('margin', '0')
      $('.hamburger-wrapper').hide()
      $('.side-nav-links-wrapper').hide()
  }
    var boxWidth = $('.service-box-wrapper').width();
    $('.service-box-wrapper').css('height', boxWidth);
  }

  $('#hamburger').on('click', () => {
    $('.side-nav-links-wrapper').toggle('slide')
		$('#hamburger').toggleClass('open');
	})

  $('#year').text(new Date().getFullYear())

  var iconHeight = $('.contact-callout-icon').height()
  $('.contact-callout-icon').css('width', iconHeight)

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      $('.side-nav-links-wrapper').hide('slide')
      if($('#hamburger').hasClass('open')) {
        $('#hamburger').toggleClass('open');
      }
    // $('.side-nav-links-wrapper').hide()
  // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        $('.active').removeClass('active')
        if ($(this).attr('class') !== 'learn-more-link') {
          $(this).addClass('active')
        }
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          if (target.attr('id') === 'top') {
            var offset = target.offset().top
          } else if (target.attr('id') === 'services') {
            var offset = target.offset().top - 90
          } else {
            var offset = target.offset().top - 90
          }
          // var offset = target.offset().top - 100
          $('html, body').animate({
            scrollTop: offset
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

  if ($(window).scrollTop() > 90) {
    $('nav').css('background-color', 'rgba(0,0,0,' + 1 + ')')
  }

  $(window).bind('scroll', () => {
    var opacity = $(window).scrollTop() / 100
    if (opacity > 1) {
      $('nav').css('background-color', 'rgba(0,0,0,' + 1 + ')')
    } else {
      $('nav').css('background-color', 'rgba(0,0,0,' + opacity + ')')
    }
  })
})

