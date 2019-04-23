$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    arrows: false,
    autoplay: false,
  autoplaySpeed: 2000
  });

   $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav',
  prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
  infinite: false,
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: false,
  arrows: false,
  focusOnSelect: true
});

  $( '#accordion' ).accordion();

  $.widget( 'ui.pcntspinner', $.ui.spinner, {
    _format: function(value) { return value + ' ks'; },

    _parse: function(value) { return parseFloat(value); }
});

$('#open').click(function() {
    $('.navbar-list').toggleClass('open');
})

  $('#tabs').tabs();
$('#spinner').pcntspinner({ 
    min: 1,
    max: 50 });

$('#popup').css('display', 'block');

$('.modal-content').unbind();

$('#close, #popup').click(function() {

    $('.modal-content').animate({opacity: 0, top: '-45%'}, 200,
        function(){

          $(this).css('display', 'none');
          $('#popup').fadeOut(400);
        }
      );
  });


});

function setupFBframe(frame) {
  var container = frame.parentNode;

  var containerWidth = container.offsetWidth;
  var containerHeight = container.offsetHeight;

  var src =
    'https://www.facebook.com/plugins/page.php' +
    '?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook' + //link to Facebook Page
    '&tabs=timeline' +
    '&width=' +
    containerWidth +
    '&height=' +
    containerHeight +
    '&small_header=false' +
    '&adapt_container_width=false' +
    '&hide_cover=true' +
    '&hide_cta=true' +
    '&show_facepile=true' +
    '&appId';

  frame.width = containerWidth;
  frame.height = containerHeight;
  frame.src = src;
}
/* begin Document Ready */
document.addEventListener('DOMContentLoaded', function() {
  var facebookIframe = document.querySelector('#facebook_iframe');
  setupFBframe(facebookIframe);

  /* begin Window Resize */

  (function() {
    window.addEventListener('resize', resizeThrottler, false);

    var resizeTimeout;

    function resizeThrottler() {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          actualResizeHandler();
        }, 66);
      }
    }

    function actualResizeHandler() {
      document.querySelector('#facebook_iframe').removeAttribute('src');
      setupFBframe(facebookIframe);
    }
  })();
  /* end Window Resize */
});
/* end Document Ready */