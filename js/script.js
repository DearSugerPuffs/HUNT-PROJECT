
// Banner part Start....................../////


$(".banner-slider").slick({
  prevArrow: '<i class="fas fa-arrow-left prev"></i>',
  nextArrow: '<i class="fas fa-arrow-right next"></i>',
});

// Banner part end....................../////


// Portfolio Part Start..................../////


$(".port-slider").slick({
  arrows: false,
  slidesToShow: 4,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.venobox').venobox();


// Portfolio Part end..................../////

// service Part Start..................../////


$(".service-slider").slick({
  prevArrow: '<i class="fas fa-angle-up prev"></i>',
  nextArrow: '<i class="fas fa-angle-down next"></i>',
  slidesToShow: 3,
  vertical: true,
  centerMode: true,
  centerPadding: "0",
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
     
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

// service Part end..................../////

// testimonial Part Start..................../////


$(".testi-img-slider").slick({
  prevArrow: '<i class="fas fa-angle-up prev"></i>',
  nextArrow: '<i class="fas fa-angle-down next"></i>',
  slidesToShow: 3,
  vertical: true,
  centerMode: true,
  centerPadding: "0",
  asNavFor: '.details-slider',
  // autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: false,
     
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});


$(".details-slider").slick({
  arrows: false,
  asNavFor: '.testi-img-slider',
  // autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
});

// testimonial Part end..................../////

// counter Part start..................../////
$(".counter").counterUp({
  delay: 10,
  time: 1000,
});

// counter Part end..................../////

// member Part start..................../////

$(".member-slider").slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
     
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// member Part end..................../////

// sponsor Part start..................../////


$(".sponsor-slider").slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 5,
  centerMode: true,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
     
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// sponsor Part end..................../////