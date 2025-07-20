// burger-menu
  // Бургер меню
$('.menu-icon').on('click', function(){
    $('.menu-icon, .menu').toggleClass("active");
    // $('body').toggleClass("overlay");
  })
  
  $(document).click(function(e) {
    if (!$(e.target).hasClass("active") &&
        $(e.target).parents(".site-nav").length === 0) {
          $('.menu-icon, .menu').removeClass("active");
          // $('body').removeClass("overlay");
    }
  });
  $('.menu-item').on('click', function(){
    $('.menu-icon, .menu').removeClass("active");
    // $('body').removeClass("overlay");
  }) 


// main-fb-slider
$(document).ready(function(){
    $('.main-fb-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    appendArrows:".main-fb__slider-arrow",
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
    });
  });
  

//   main-reviews_slider
$(document).ready(function(){
    $('.main-reviews-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    appendArrows:".main-reviews__slider-arrow",
    arrows: true,
    responsive: [
      {
          breakpoint: 1060,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 650,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
    });
  });

//  main-gallery_slider

$(document).ready(function(){
    $('.main-gallery-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    appendArrows:".main-gallery__slider-arrow",
    arrows: true,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 770,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 550,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
    });
  });

// mask for number phone
document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.getElementById('phone');

    phoneInput.addEventListener('input', function (e) {
      let value = e.target.value.replace(/\D/g, '');
      if (!value.startsWith('38')) value = '38' + value;

      const formatted = '+'
        + value.substring(0, 2)
        + (value.length > 2 ? ' (' + value.substring(2, 5) : '')
        + (value.length > 5 ? ') ' + value.substring(5, 8) : '')
        + (value.length > 8 ? '-' + value.substring(8, 10) : '')
        + (value.length > 10 ? '-' + value.substring(10, 12) : '');

      e.target.value = formatted;
    });

    phoneInput.addEventListener('keydown', function (e) {
      if (e.key === 'Backspace' && phoneInput.value.replace(/\D/g, '').length <= 3) {
        e.preventDefault();
        phoneInput.value = '';
      }
    });
  });