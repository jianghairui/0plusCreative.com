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
    $('.ricon').click(function (e) {
        e.stopPropagation()
        $('#menu').slideToggle().toggleClass('a');
        if ($('#menu').hasClass('a')) {
            $('#ricon').attr('src', '/static/assets/mimgs/close.png')
        } else {
            $('#ricon').attr('src', '/static/assets/mimgs/menu.png')
        }
    })
    $('#menu').click(function (e) {
        e.stopPropagation()
        $(this).slideToggle();
        $('#menu').slideToggle().toggleClass('a');
        if ($('#menu').hasClass('a')) {
            $('#ricon').attr('src', '/static/assets/mimgs/close.png')
        } else {
            $('#ricon').attr('src', '/static/assets/mimgs/menu.png')
        }
    });
    // $('.fp-section').click(function () {
    //     if ($('.top').hasClass('slideInDown')) {
    //         r('.top', 'slideInDown');
    //         a('.top', 'slideOutUp');
    //         $('.top').css('position', 'fixed');
    //     } else {
    //         a('.top', 'slideInDown');
    //         r('.top', 'slideOutUp');
    //         $('.top').css('position', 'sticky');
    //     }
    // });
    $('.top').click(function () {
        r('.top', 'slideInDown');
        a('.top', 'slideOutUp');
        $('.top').css('position', 'fixed');
    });
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: 1500,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,
        speed: 1000,
    });
    var l1, l2, l3, l4;
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        menu: '#menu',
        onLeave: function (origin, destination, direction) {
            // console.log(destination, 'destination')
            var d = direction;
            var index = origin.index;
            var anchor = destination.anchor;
            $('.block').hide();
            $('.swiper-container').hide();
            $('.bg3linebox').hide();
            $('.bg4box').hide();
            $('.bgmid').hide();
            $('.hbox').hide();

            $('#menu').slideUp().removeClass('a');
            $('#ricon').attr('src', '/static/assets/mimgs/menu.png')
            clearTimeout(l1);
            clearTimeout(l2);
            clearTimeout(l3);
            clearTimeout(l4);
            r('.l', 'loaded');
            r('.bg1text', 'fadeIn');
            r('.bg1en', 'fadeIn');
            r('.face', 'fadeIn');
            r('.item1', 'flipInY');
            r('.itemtext', 'slideInUp');
            r('.item .en', 'slideInUp');
            r('.offerbg', 'zoomIn');
            r('.imgitem', 'fadeIn slow delay-02s');
            r('.hbg', 'fadeIn slower delay-04s');
            r('.midimg', 'fadeIn');
            r('.logowhite', 'slideInUp');
            r('.iconitem', 'zoomIn');
            // r('.bitem', 'slideInDown');
            r('.imglogo', 'fadeIn');
            // r('.hbg', 'slideInDown');
            r('.textspan', 'bounceIn')
            r('.bgmid .b', 'fadeIn');
            r('.plus', 'zoomIn');
            r('.qplus', 'swing')
            // r('.title .a', 'slideInDown');
            // r('.title .b', 'zoomIn');
            r('.hitem', 'zoomIn');
            r('.address', 'slideInLeft')
            r('.bgmidimg', 'fadeIn');
            r('.line5', 'fadeIn');
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
            $('.block').show();
            $('.swiper-container').show();
            $('.bg3linebox').show();
            $('.bg4box').show();
            $('.bgmid').show();
            $('.hbox').show();
            a('.bg1text', 'fadeIn');
            a('.bg1en', 'fadeIn');
            a('.face', 'fadeIn');
            // a('.title .a', 'slideInDown');
            // a('.title .b', 'zoomIn');
            a('.swiper-container', 'fadeIn')
            // a('.item1', 'flipInY');
            // a('.itemtext', 'slideInUp');
            // a('.item .en', 'slideInUp');
            // a('.offerbg', 'zoomIn');
            a('.logowhite', 'fadeIn');
            a('.iconitem', 'fadeIn');
            a('.bitem', 'fadeIn');
            a('.imgitem', 'fadeIn slow delay-02s');
            a('.hbg', 'fadeIn slower delay-04s');
            a('.midimg', 'fadeIn');
            a('.imglogo', 'fadeIn');
            a('.plus', 'zoomIn');
            a('.qplus', 'swing');
            a('.textspan', 'bounceIn');
            a('.bgmidimg', 'fadeIn');
            a('.line5', 'fadeIn');
            a('.bgmid .b', 'fadeIn');
            a('.wehate', 'fadeIn slower')
            l1 = setTimeout(function () {
                $('.l1').addClass('loaded');
                $('.ll1 .htext').addClass('hovertext')
            }, 500);
            l2 = setTimeout(function () {
                $('.l2').addClass('loaded');
                $('.ll2 .htext').addClass('hovertext');
                $('.ll1 .htext').removeClass('hovertext');

            }, 1000);
            l3 = setTimeout(function () {
                $('.l3').addClass('loaded')
                $('.ll3 .htext').addClass('hovertext');
                $('.ll2 .htext').removeClass('hovertext');

            }, 1500);
            l4 = setTimeout(function () {
                $('.l4').addClass('loaded')
                $('.ll4 .htext').addClass('hovertext')
                $('.ll3 .htext').removeClass('hovertext');
                setTimeout(function () {
                    $('.ll4 .htext').removeClass('hovertext');
                }, 500)
            }, 2000);
            a('.hitem', 'zoomIn');
            a('.address', 'slideInLeft')
        },
    });
});