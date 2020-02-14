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
    var b, c, d, e;
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        menu: '#menu',
        onLeave: function (origin, destination, direction) {
            console.log(direction, 'leave')
            var dir = direction;
            var index = origin.index;
            clearTimeout(b);
            clearTimeout(c);
            clearTimeout(d);
            clearTimeout(e);
            // r('.bg1text', 'slideInUp');
            // r('.bg1en', 'slideInUp');
            r('.face', 'fadeIn');
            r('.item1', 'flipInY');
            r('.itemtext', 'slideInUp');
            r('.item .en', 'slideInUp');
            r('.offerbg', 'slideInUp');
            r('.iconitem', 'zoomIn');
            // r('.bitem', 'slideInLeft');
            // r('.b', 'slideInRight');
            // r('.plus', 'zoomIn');
            r('.qplus', 'swing');
            r('.hbg', 'slideInDown');
            r('.midimg', 'zoomIn')
            r('.imgtext', 'slideInUp');
            $('.bitem').animate({'left': '-260px'});
            if (dir == 'down') {
                r('.top', 'slideInDown');
                a('.top', 'slideOutUp');
                $('.top').css('position', 'fixed');

            } else if (dir == 'up') {
                r('.top', 'slideOutUp');
                a('.top', 'slideInDown');
                $('.top').css('position', 'sticky');
            }

        },
        afterLoad: function (origin, destination, direction) {
            // console.log(origin, 'afterLoad',direction)
            var index = origin.index;
            // a('.bg1text', 'slideInUp');
            // a('.bg1en', 'slideInUp');
            a('.face', 'fadeIn');
            a('.item1', 'flipInY');
            a('.itemtext', 'slideInUp');
            a('.item .en', 'slideInUp');
            a('.offerbg', 'slideInUp');
            a('.iconitem', 'zoomIn');
            // a('.bitem', 'slideInLeft');
            // a('.bbox','slideInLeft')
            // a('.b', 'slideInRight');
            // $('.bitem').addClass('slideInLeft')
            a('.qplus', 'swing')
            a('.hbg', 'slideInDown');
            a('.midimg', 'zoomIn');
            a('.imgtext', 'slideInUp');
            $('.a').animate({'left': 0});
            a('.a  .plus', 'zoomIn')
            b = setTimeout(function () {
                $('.b').animate({'left': '240px'});
                a('.b .plus', 'zoomIn')
            }, 800);
            c = setTimeout(function () {
                clearTimeout(b)
                $('.c').animate({'left': '480px'});
                a('.c .plus', 'zoomIn')
            }, 1600);
            d = setTimeout(function () {
                clearTimeout(b)
                clearTimeout(c)
                $('.d').animate({'left': '720px'});
                a('.d .plus', 'zoomIn')
            }, 2400);
            e = setTimeout(function () {
                clearTimeout(b)
                clearTimeout(c)
                clearTimeout(d)
                $('.e').animate({'left': '960px'});
                a('.e .plus', 'zoomIn')
            }, 3200);
            // $('.bitem').each(function (index) {
            //     console.log(index)
            //     var t=this;
            //     setTimeout(function () {
            //         $(t).animate({'left': index * 240 + 'px'})
            //     }, 3000)
            // })
        }
    });
});