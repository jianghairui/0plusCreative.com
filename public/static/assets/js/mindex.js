function r(el, animated) {
    $(el).removeClass(animated)
}

function a(el, animated) {
    $(el).addClass(animated)
}

$(document).ready(function () {
    // $('.top').click(function () {
    //     $(this).addClass('slideOutUp');
    // })
    $('.ricon').click(function () {
        $('#menu').slideToggle().toggleClass('a');
        if ($('#menu').hasClass('a')) {
            $('#ricon').attr('src', './assets/mimgs/close.png')
        } else {
            $('#ricon').attr('src', './assets/mimgs/menu.png')
        }
    })
    $('#menu').click(function () {
        $(this).slideToggle();
        $('#menu').slideToggle().toggleClass('a');
        if ($('#menu').hasClass('a')) {
            $('#ricon').attr('src', './assets/mimgs/close.png')
        } else {
            $('#ricon').attr('src', './assets/mimgs/menu.png')
        }
    });
    $('.fp-section').click(function () {
        if ($('.top').hasClass('slideInDown')) {
            r('.top', 'slideInDown');
            a('.top', 'slideOutUp');
            $('.top').css('position', 'fixed');
        } else {
            a('.top', 'slideInDown');
            r('.top', 'slideOutUp');
            $('.top').css('position', 'sticky');
        }
    });
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: 1500,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,
        speed: 1000,
    });
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        menu: '#menu',
        onLeave: function (origin, destination, direction) {
            // console.log(destination, 'destination')
            var d = direction;
            var index = origin.index;
            var anchor = destination.anchor;
            $('#menu').slideUp().removeClass('a');
            $('#ricon').attr('src', './assets/mimgs/menu.png')

            r('.bg1text', 'slideInDown');
            r('.bg1en', 'flipInX');
            r('.face', 'fadeIn');
            r('.item1', 'flipInY');
            r('.itemtext', 'slideInUp');
            r('.item .en', 'slideInUp');
            r('.offerbg', 'zoomIn');
            r('.logowhite', 'slideInUp');
            r('.iconitem', 'zoomIn');
            r('.bitem', 'slideInDown');
            r('.imglogo', 'slideInDown');
            r('.hbg', 'slideInDown');
            r('.textspan', 'bounceIn')
            r('.bbox .b', 'zoomIn');
            r('.plus', 'zoomIn')
            r('.title .a', 'slideInDown');
            r('.title .b', 'zoomIn');
            r('.hitem', 'zoomIn');
            r('.address', 'slideInLeft')

            if (d == 'down') {
                r('.top', 'slideInDown');
                a('.top', 'slideOutUp');
                if (anchor != 'page1') {
                    console.log(anchor)
                    $('.top').css('position', 'fixed');
                } else {
                    $('.top').css('position', 'fixed');

                }

            } else if (d == 'up') {
                r('.top', 'slideOutUp');
                a('.top', 'slideInDown');
                if (anchor != 'page1') {
                    $('.top').css('position', 'sticky');
                } else {
                    $('.top').css('position', 'fixed');
                }
            }
        },
        afterLoad: function (origin, destination, direction) {
            // console.log(origin, 'afterLoad',direction)
            // var index = origin.index;
            a('.bg1text', 'flipInX');
            a('.bg1en', 'slideInDown');
            a('.face', 'fadeIn');
            a('.title .a', 'slideInDown');
            a('.title .b', 'zoomIn');

            // a('.item1', 'flipInY');
            // a('.itemtext', 'slideInUp');
            // a('.item .en', 'slideInUp');
            a('.offerbg', 'zoomIn');
            a('.logowhite', 'slideInUp');
            a('.iconitem', 'zoomIn');
            a('.bitem', 'slideInDown');
            a('.imgitem', 'slideInUp');
            a('.imglogo', 'slideInDown');
            a('.plus', 'zoomIn');
            // a('.qplus', 'swing');
            a('.hbg', 'slideInDown');
            a('.textspan', 'bounceIn');
            a('.bbox .b', 'zoomIn');
            a('.hitem', 'zoomIn');
            a('.address', 'slideInLeft')
        },
    });

});