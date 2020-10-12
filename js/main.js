$(document).ready(function () {

  $(".telephone").inputmask({
    mask: "+375 (99) 999 99 99",
    clearIncomplete: true,
    greedy: false
  });
  $(".send__form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/mail.php", //Change
      data: th.serialize()
    }).done(function () {
      $('._def').hide();
      $('._thx').show();
      setTimeout(function () {
        $('._thx').hide();
        $('._def').show();
        $('.popup__close').click();
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
  $(".send__form").keydown(function () {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
  $('.header__icon-find').on('click', function () {

    $('.find__form').toggleClass('__show');
    $('.find__form input').focus();
  });

  function subMenuUp() {
    $('.sub__menu').slideUp();

  }
  $('.sub__menu').hover(function () {}, function () {
    $('.menu__drop').removeClass('__show');
    $('.sub__menu').slideUp();
  });


  if (($(window).width() >= 1024)) {

  }
  $('.menu__drop').on('click', function () {
    var thisSubMenu = $(this).find('.sub__menu');
    subMenuUp();

    $(this).siblings('.menu__drop').removeClass('__show');
    $(this).hasClass('__show') ? $(this).removeClass('__show') : $(this).addClass('__show');
    thisSubMenu.is(':visible') ? thisSubMenu.slideUp() : thisSubMenu.slideDown();
  });

  $(document).keyup(function (e) {
    if (e.keyCode === 27) $('.popup__close').click(); // esc
    $('.find__form').removeClass('__show'); // esc
    $('.burger__menu').removeClass('__active');
    $('.menu').removeClass('__show');
    $('.menu__bg').fadeOut();
  });
  $('.popup__img').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    image: {
      verticalFit: false
    }
  });

  var count = 0;
  $('.counter__plus').click(function (e) {
    var itemPrice = $(this).parents('.item').find('.menu__slider-price').text();
    count++;
    $(this).parents('.item').find('.counter__number').text(count);
    e.preventDefault();
  });
  $('.counter__minus').click(function (e) {
    var itemPrice = $(this).parents('.item').find('.menu__slider-price').text();
    count--;
    if (count <= 0) {
      count = 0
      $(this).parents('.item').find('.counter__number').text(0);
    } else {
      $(this).parents('.item').find('.counter__number').text(count);
    }
    e.preventDefault();
  });

  $('.menu__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    nextArrow: '<div class="menu__slider-next menu__slider-arrow "><span> </span><span></span></div>',
    prevArrow: '<div class="menu__slider-prev menu__slider-arrow"><span> </span><span></span></div>',
    responsive: [{
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }

    ]
  });
  $('.reviews__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: true,
    dotsClass: "reviews__slider-dots",
    nextArrow: '<div class="reviews__slider-next reviews__slider-arrow "><span> </span><span></span></div>',
    prevArrow: '<div class="reviews__slider-prev reviews__slider-arrow"><span> </span><span></span></div>',
  });
  var ecoItemSlice = 0;
  if (($(window).width() >= 800)) {
    ecoItemSlice = 8;
  } else {
    ecoItemSlice = 4;
  }
  $('.eco__grid-item').slice(ecoItemSlice).slideToggle();
  $('.load__more').click(function (e) {
    if ($('.eco__grid-item').slice(ecoItemSlice).is(':visible')) {
      $('.eco__grid-item').slice(ecoItemSlice).slideToggle('slow');
      $(this).delay(300).text('Посмотреть все');
    } else {
      $('.eco__grid-item').slice(ecoItemSlice).slideToggle('slow');
      $(this).delay(300).text('Скрыть');
    }
    e.preventDefault();
  });

  function menuToggle() {
    $('.burger__menu').toggleClass('__active');
    $('.menu').toggleClass('__show');
    $('.menu__bg').is(':visible') ? $('.menu__bg').fadeOut() : $('.menu__bg').fadeIn();
  }
  $('.burger__menu').click(function (e) {
menuToggle();
    e.preventDefault();
  });
  $(window).scroll(function () {
    $('.burger__menu').removeClass('__active');
    $('.menu').removeClass('__show');
    $('.menu__bg').fadeOut();
  });
  $('.show__form').click(function (e) {
    $('.popup').hide().css("display", "flex").fadeIn();
    $('body').addClass('__fixed');
    e.preventDefault();
  });
  $('.popup__close').click(function (e) {
    $('.popup').fadeOut();
    $('body').removeClass('__fixed');
    $('.popup__textarea').hide();
    $('._thx').hide();
    $('._def').show();
    e.preventDefault();

  });
  $('.write__review').click(function (e) {
    $('.popup__textarea').show();
    e.preventDefault();

  });

  $('.popup__bg').click(function (e) {
    $('.popup__close').click();
    e.preventDefault();

  });
});