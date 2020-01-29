$(document).ready(function(){
  "use strict";

  /***
      Portfolio Filter
  ***/

  var mixer = mixitup('.portfolio-content');

  /***
      Portfolio Image Popup
  ***/

  $('.portfolio-full-img').magnificPopup({
  type: 'image',
  closeOnContentClick: true,
  mainClass: 'mfp-img-mobile',
  image: {
    verticalFit: true
  }
  });
  
  /***
      Team Slider
  ***/

  $('.team-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

  /***
      Testimonial Slider
  ***/

  $('.testimonial-slider').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000
  });

  /***
      Counter
  ***/

  $(".counter").counterUp({
    delay: 10,
    time: 2500
  })
  
});