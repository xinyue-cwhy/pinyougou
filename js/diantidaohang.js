$(function () {
  var flag = true
  var homeuseHeight = $('.homeuse').offset().top
  $(window).scroll(function () {
    floorhide();
    if (flag) {
      $('.floor>div').each(function (i, n) {
        if ($(document).scrollTop() >= $(n).offset().top) {
          $('.fixedtool ul li').eq(i).addClass('current').siblings().removeClass('current')
        }
      })
    }
  })
  $('.fixedtool ul').on('click', 'li', function () {
    flag = false
    $(this).addClass('current')
    $(this).siblings().removeClass('current')
    var index = $(this).index();
    var top = $('.floor>div').eq(index).offset().top
    $('html,body').stop().animate({
      scrollTop: top
    }, function () {
      flag = true
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