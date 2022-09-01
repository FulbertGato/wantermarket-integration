$(document).ready(function () {
    $(".hero-slider").slick({
      nextArrow:
        '<button class="hero-nextArrow"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></button>',
      prevArrow:
        '<button class="hero-prevArrow"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg></button>',
      fade: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            fade: false,
          },
        },
      ],
    });

    $(".boutique-slider").slick({
      slidesToShow: 4,
      nextArrow:
        '<button class="boutique-nextArrow"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></button>',
      prevArrow:
        '<button class="boutique-prevArrow"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg></button>',
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1028,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".product-slider").slick({
      slidesToShow: 3,
      nextArrow:
        '<button class="boutique-nextArrow" style="top:-71px; right: 5px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></button>',
      prevArrow:
        '<button class="boutique-prevArrow" style="top:-71px; right: 38px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  
    
  
    
  });
  