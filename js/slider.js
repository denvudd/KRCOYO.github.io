$(document).ready(function() {
  $('.slider').slick({
    dots: true,
    adaptiveHeight: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    autoplay: true,
    speed: 600,
    draggable: true,
    easing: 'ease',
    pauseOnHover: true,
    pauseOnDotsHover: true,
    touchThreshold: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        }
      },
    ]
  });
});