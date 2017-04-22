$(function () {
  new WOW().init();
  $("#work").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true
    }
  });
  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      $("nav").removeClass("vesco-top-nav");
      $("#back-to-top").fadeOut();
    } else {
      $("nav").addClass("vesco-top-nav");
      $("#back-to-top").fadeIn();

    }
  });
  /*Close menu item on click*/
  $(".navbar-collapse ul li a").on("click touch", function () {
    $(".navbar-toggle").click();
  });

  $("#customers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
  $(".counter").counterUp({
    delay: 10,
    time: 2000
  });
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });

  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();
    var section = $(this).attr("href");
    $('html,body').animate({
      scrollTop: $(section).offset().top - 64
    }, 1250);
  });
});