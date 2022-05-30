$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    margin: 30,
    loop: true,
    dots: false,
    nav: false,
  });
});
$(".tastmonial-carousel").owlCarousel({
  items: 1,
  margin: 30,
  stagePadding: 30,
  smartSpeed: 450,
});
$(".logo-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
});
