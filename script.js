const burger = document.querySelector(".menu__burger");
const mobile_menu = document.querySelector(".mobile__menu");
const close_svg = document.querySelector(".close__svg");
const menu = document.querySelector(".menu");
const zIndex = "z-index";
const paddingTop = "padding-top";

burger.addEventListener('click', function(){
    mobile_menu.style.display = "block";
})

close_svg.addEventListener('click', function(){
    mobile_menu.style.display = "none";
})

const header = $('.header__background');

const addClassToHeader = () => {
    if ((window.pageYOffset > header.height())) {
        $('.main__menu__class').addClass('fixed__menu');
        menu.style.paddingTop = 0;
    } else {
        $('.main__menu__class').removeClass('fixed__menu');
        menu.style.paddingTop = 40 + "px";
    }
}

$(document).on('scroll', addClassToHeader)

addClassToHeader();

$('.ideas__slider').slick({
    infinite: true,
    dots: false,
    speed: 700,
    slidesToShow: 1,
    centerMode: true,
    arrows: false,
    prevArrow: `<svg class="posts__arrow__left prev slick-prev">
            <use xlink:href="#arrow-left"/>
        </svg>`,
    nextArrow: `<svg class="posts__arrow__right next slick-next">
            <use xlink:href="#arrow-right"/>
        </svg>`,
    variableWidth: true,
    slidesToScroll: 2
});