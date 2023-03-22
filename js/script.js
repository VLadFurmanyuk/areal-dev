// ===== ACCORDION ===== \\
$(document).ready(function() {
    $('.accordion-header').click(function() {
        $(this).toggleClass('active');
        $(this).next('.accordion-content').toggleClass('active');
        $('.accordion-header').not(this).removeClass('active');
        $('.accordion-content').not($(this).next()).removeClass('active');
    });
});

$(document).ready(function() {
    // Hide all accordion content except for the first item
    $(".accordion-content:not(:first)").hide();

    // Add click event to accordion headers
    $(".accordion-header").click(function() {
        // Slide up all other content and slide down the content of the clicked header
        $(".accordion-content").not($(this).next()).slideUp();
        $(this).next().slideDown();
    });
});

// ===== MOBILE MENU ===== \\
$(document).on('click', '.burger-btn', function (){
    let burgerBtn = $('.burger-btn');
    let mobileMenu = $('.mobile-menu');
    burgerBtn.toggleClass('active');
    $('html').toggleClass('no-scroll');
    mobileMenu.slideToggle();
});

// ===== MOBILE SUBMENU ===== \\
$(document).on('click', '.mobile-submenu-button', function (){
   let submenuBtn = $('.mobile-submenu-button');
   let subMenu = $('.mobile-submenu');
    subMenu.slideToggle();
    // submenuBtn.toggleClass('active');
});

// ===== NEWS SLIDER ===== \\
// $(document).ready(function (){
//     $('.news-slider').slick({
//         slidesToShow: 3,
//         slidesToScroll: 2,
//         arrows: false,
//         dots: true,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 }
//             },
//             {
//                 breakpoint: 750,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 }
//             },
//         ]
//     });
// });
// $(document).ready(function() {
//     var windowWidth = $(window).width();
//     if (windowWidth < 1024) {
//         $('.carousell').slick({
//             slidesToShow: 1,
//             arrows: false,
//         });
//     }
// });

// Получаем элемент слайдера
var slider = $('.carousell');

// Проверяем ширину экрана
if ($(window).width() < 1024) {
    // Инициализируем слайдер
    slider.slick({
        // Параметры слайдера
        slidesToShow: 2,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
}

// Отслеживаем изменение размера экрана
$(window).on('resize', function() {
    // Проверяем ширину экрана
    if ($(window).width() < 1024) {
        // Если ширина экрана меньше 1024, инициализируем слайдер
        slider.slick({
            // Параметры слайдера
            slidesToShow: 2,
            arrows: false,
            infinite: true,
            responsive: [
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    } else {
        // Если ширина экрана больше 1024, деинициализируем слайдер
        if (slider.hasClass('slick-initialized')) {
            slider.slick('unslick');
        }
    }
});


// ===== POPUP`S ===== \\
$(document).on('click', '.popup-btn', function (){
    let popupBtn = $('.popup-btn');
    let popupBg = $('.popup-bg');
    popupBg.fadeToggle();
    $('html').toggleClass('no-scroll');
});
$(document).on('click', '.close-popup', function (){
    let closeBtn = $('.close-popup');
    let popupBg = $('.popup-bg');
    popupBg.fadeOut();
    $('html').removeClass('no-scroll');
});

$(document).on('click', '.mode', function (){
    // popupBg.fadeToggle();
    $('html').toggleClass('dark-theme');
});

// ===== Для телефонии ===== \\
$(document).ready(function() {
    $(".telephony-popup").click(function() {
        $(".bingc-passive").show();
        // $(".bingc-passive-content").show();
        // $(".bingc-we-will-call-you bingc-offline-form").show();


        // console.log('Hello');
    });
});

