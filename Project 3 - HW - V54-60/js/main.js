
/*==============rateYo====================*/
$(function () {
    $(".rateYo").rateYo({
        starWidth: '32px',
        rating: 4.5,
        spacing: "6px",
        starSvg: '<svg width="31" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3662 1.82936C13.5032 -0.255461 16.4968 -0.255466 17.6338 1.82936L19.9256 6.03174C20.3571 6.82292 21.1214 7.37822 22.0072 7.5441L26.7121 8.42517C29.0463 8.86228 29.9713 11.7093 28.3399 13.4349L25.0514 16.9132C24.4323 17.5681 24.1404 18.4666 24.2563 19.3603L24.8723 24.1072C25.1779 26.4621 22.756 28.2217 20.6107 27.2034L16.2865 25.1507C15.4724 24.7642 14.5276 24.7642 13.7135 25.1507L9.38927 27.2034C7.24399 28.2217 4.82214 26.4621 5.12772 24.1072L5.74367 19.3603C5.85964 18.4666 5.5677 17.5681 4.94858 16.9132L1.66009 13.4349C0.0286615 11.7093 0.953722 8.86228 3.28786 8.42517L7.99278 7.5441C8.87858 7.37822 9.64288 6.82293 10.0744 6.03174L12.3662 1.82936Z"/></svg>'
                
            });

/*==============Fancybox====================*/
    Fancybox.bind("[data-fancybox]", {
    })

/*==============mixitup====================*/
    var mixer = mixitup('.blog__list');
$('.blog__filter-btn').on('click', function () {
    $('.blog__filter-btn').removeClass('blog__filter-btn--active')
    $(this).addClass('blog__filter-btn--active')
})

/*==============slider====================*/
$('.testimonials__slider').slick({
    arrows:false,
    dots:true,
    slidesToShow: 2,
    infinite: true,
    speed: 150,
    appendDots: $('.testimonials__dots'),
    responsive: [{
        breakpoint: 600,
            settings: {
                slidesToShow: 1,
            },
        },
    ]
})
$('.testimonials__prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
})
$('.testimonials__next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
})

/*==============accordeon====================*/

//$('.question__acc-link').on('click', function (e) {
//   e.preventDefault()
//    $(this).toggleClass('question__acc-link--active')
//    $(this).children('.question__acc-text').slideToggle ()
//})
$('.question__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('question__acc-link--active')) {
        $(this).removeClass('question__acc-link--active')
        $(this).children('.question__acc-text').slideUp()
    } else {
    $('.question__acc-link').removeClass('question__acc-link--active')
    $('.question__acc-text').slideUp()
    $(this).addClass('question__acc-link--active')
    $(this).children('.question__acc-text').slideDown()
    }

    })

/*==============link__move====================*/

    $(".header__nav-list a, .footer__nav-list a, .footer__logo a, .header__btn-box a, .quote__process-btn a").on("click", function (e) {
//отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
//забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
//узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
//анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1000);
});
/*==============burger====================*/    
$(window).on('scroll', function () {
/*=======
    if ($(window).scrollTop() > 0) {
        $('.burger').addClass('burger--follow')
    } else {
        $('.burger').removeClass('burger--follow')
    }
=======*/
})
setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
        $('.burger').addClass('burger--follow')
    } else {
        $('.burger').removeClass('burger--follow')
    }
}, 0);

$('.burger, .overlay, .header__top a').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger').toggleClass('burger--cross')
})

});