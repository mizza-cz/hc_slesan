$(".js-history-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  nextArrow:
    ' <button class="slider__btn  slider__btnnext"><img src="/images/ico/arrow-slider.svg" alt = "" ></button>',
  prevArrow:
    ' <button class="slider__btn  slider__btnprev"><img src="/images/ico/arrow-slider.svg" alt = "" ></button>',
  responsive: [
    {
      breakpoint: 879,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 421,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});
