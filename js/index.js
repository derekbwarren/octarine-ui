var boxWidth1 = $('.service-box-wrapper').width();
$('.service-box-wrapper').css('height', boxWidth1);

window.onresize = () => {
  var boxWidth = $('.service-box-wrapper').width();
  $('.service-box-wrapper').css('height', boxWidth);
}

$('#year').text(new Date().getFullYear())