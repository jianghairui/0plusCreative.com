function r(el, animated) {
    $(el).removeClass(animated)
}

function a(el, animated) {
    $(el).addClass(animated)
}

// var str = " 手机有手机套保护，电视有电视罩保护，眼镜有眼镜盒保护，文具有铅笔袋保护，小草有大树保护，水滴有大海保护，雅典娜有圣斗士保护，红太郎有灰太狼保护，我只想做你的保护神，无论花开花落，云卷云舒，我会一直陪在你身边!"
function typing(str, el) {
    console.log(str)
    var i = 0;
    var divTyping = document.getElementById(el);
    if (i <= str.length) {
        divTyping.innerHTML = str.slice(0, i++) + "-";
        setTimeout("typing()", 200)
    } else {
        divTyping.innerHTML = str;
    }
}

// typing();

$(document).ready(function () {
    // $('.top').click(function () {
    //     $(this).addClass('slideOutUp');
    // })
    var b, c, d, e, l1, l2, l3, l4;
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        menu: '#menu',
        onLeave: function (origin, destination, direction) {
            console.log(direction, 'leave')
            var dir = direction;
            var index = origin.index;
            clearTimeout(l1);
            clearTimeout(l2);
            clearTimeout(l3);
            clearTimeout(l4);
            r('.hitem', 'animated fadeIn fast');

            // r('.bg1text', 'slideInUp');
            // r('.bg1en', 'slideInUp');
            // r('.title ','animated slideInDown');
            r('.title .en', 'slideInDown');
            r('.title .isword', 'bounceInDown fast');
            r('.title .us', 'animated  zoomIn ');
            r('.face', 'fadeIn');
            r('.item1', 'flipInY');
            r('.itemtext', 'slideInUp');
            r('.item .en', 'slideInUp');
            // r('.offerbg', 'slideInUp');
            r('.iconitem', 'fadeIn');
            r('.imgs', 'zoomIn');
            r('.line', 'zoomIn');
            r('.l', 'loaded');
            r('.b1 .imgbox', 'imgbox1');
            r('.b2 .imgbox', 'imgbox2');
            r('.b3 .imgbox', 'imgbox3');
            r('.b4 .imgbox', 'imgbox4');
            r('.qplus', 'swing');
            // r('.hbg', 'slideInDown');
            r('.midimg', 'zoomIn')
            r('.imgtext', 'slideInUp');
            r('.textspan', 'animated slideInDown delay-2s fast');
            // $('.bitem').animate({'left': '-260px'});
            r('.address', 'flipInX');
            r('.bmenu li', 'flipInY');
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
            // typing('WE ARE BORN', 't1');
            // a('.bg1text', 'slideInUp');
            // a('.bg1en', 'slideInUp');
            // a('.title ','animated slideInDown');
            a('.t1', 'bounceInLeft');
            a('.t2', 'bounceInLeft');
            a('.bg1text', 'bounceInLeft');
            a('.title .en', 'slideInDown');
            // a('.title .isword','zoomIn fast');
            // a('.title .us','animated bounceInLeft');
            a('.title .isword', 'bounceInDown fast');
            a('.title .us', 'animated  zoomIn ');
            a('.face', 'fadeIn');
            a('.item1', 'flipInY');
            a('.itemtext', 'slideInUp');
            a('.item .en', 'slideInUp');
            a('.iconitem', 'fadeIn');
            a('.imgs', 'zoomIn');
            a('.line', 'zoomIn');
            // a('.bitem', 'slideInLeft');
            // a('.bbox','slideInLeft')
            a('.b1 .imgbox', 'imgbox1');
            a('.b2 .imgbox', 'imgbox2');
            a('.b3 .imgbox', 'imgbox3');
            a('.b4 .imgbox', 'imgbox4');
            a('.textspan', 'animated slideInDown delay-2s fast');
            // $('.bitem').addClass('slideInLeft')
            a('.qplus', 'swing');
            // a('.hbg', 'slideInDown');
            a('.midimg', 'zoomIn');
            a('.imgtext', 'slideInUp');
            // a('.l1', 'loaded'),
            a('.hitem', 'animated fadeIn slower');
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
            a('.address', 'flipInX');
            a('.bmenu li', 'flipInY')
            // l2 = setTimeout(a('.l2', 'loaded'), 1700);
            // l3 = setTimeout(a('.l3', 'loaded'), 1900);
            // l4 = setTimeout(a('.l4', 'loaded'), 11100);
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