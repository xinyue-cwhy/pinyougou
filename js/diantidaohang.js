$(function () {
  var homeuseHeight = $('.homeuse').offset().top
  $(window).scroll(function () {
    floorhide();
    $('.floor>div').each(function (i, n) {
      if ($(document).scrollTop() >= $(n).offset().top) {
        $('.fixedtool ul li').eq(i).addClass('current').siblings().removeClass('current')
      }
    })
  })
  $('.fixedtool ul').on('click', 'li', function () {
    $(this).addClass('current')
    $(this).siblings().removeClass('current')
    var index = $(this).index();
    var top = $('.floor>div').eq(index).offset().top
    $('html,body').stop().animate({
      scrollTop: top
    })
  })
  floorhide();
  function floorhide() {
    if ($(document).scrollTop() >= homeuseHeight) {
      $('.fixedtool').fadeIn()
    }
    else {
      $('.fixedtool').fadeOut()
    }
  }
})