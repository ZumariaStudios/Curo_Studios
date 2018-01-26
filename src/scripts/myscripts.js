$(document).ready(function() {
$('.nav_scroll').click(function(event) {
    var id = $(this).attr("href");
    // var offset = 70;
    var target = $(id).offset().top - 30;
    $('html, body').animate({
      scrollTop: target
    }, 800);
    event.preventDefault();
  });
});
