$(document).ready(function(){
    var mixer = mixitup('.portfolio-content');



    $('.portfolio-full-img').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
    });
    
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

    $('.testimonial-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
    });




});