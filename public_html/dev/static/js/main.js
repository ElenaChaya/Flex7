;

$(document).ready(function () {
    
    $('.popup-link').magnificPopup({
        type: 'inline'
	});
        
    $('.popup-close').click(function() {
        $.magnificPopup.close();
    });
    
    $(window).scroll(function() {
        if($(window).scrollTop()>130) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
    });
    
//    $('.js-video-slider').slick({
//        dots: true,
//        arrows: false
//    });
//
//    $('.js-portfolio-video-slider').slick({
//        dots: true,
//        prevArrow: '.portfolio-video__prev',
//        nextArrow: '.portfolio-video__next',
//        responsive: [{
//                breakpoint: 700,
//                settings: {
//                    dots:false
//                }
//        }]
//    });
    function sliderVideo(name) {
        $('.js-'+name).slick({
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows:true,
           prevArrow: '.'+name+'__prev',
           nextArrow: '.'+name+'__next', 
           dots: true,
           responsive: [{
               breakpoint: 700,
               settings: {
                   arrows:true,
                   prevArrow: '.mob-'+name+'__prev',
                   nextArrow: '.mob-'+name+'__next', 
                   dots: false
               }
           }]
        });
        
        
        $('.' + name).on("click touchend", ".js-"+name+" .slick-dots, .slider__controlls, .mobile__controlls", function () {
            var iframe_id = [];
            $('.js-' + name+' .video__item iframe').each(function (key, value) {
                if (value.id.length > 0) {
                    iframe_id.push(value.id);
                }
            });
            $.each(iframe_id, function (key, value) {
                $('.slick-track')
                        .find('div:not(.slick-cloned)')
                        .find('#' + iframe_id[key])[0]
                        .contentWindow
                        .postMessage('{"event":"command", "func":"' + 'pauseVideo' + '","args":""}', '*');
            });
        });
    
    }
    
    sliderVideo('portfolio-video-slider');
    sliderVideo('reviews-video-slider');
    
    $('.js-portfolio-photo-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:true,
        prevArrow: '.portfolio-photo__prev',
        nextArrow: '.portfolio-photo__next',  
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },{
            breakpoint: 700,
            settings: {
                arrows:true,
                prevArrow: '.mob-portfolio-photo__prev',
                nextArrow: '.mob-portfolio-photo__next',
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },{
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    
    
    $('.js-reviews-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.slider__prev',
        nextArrow: '.slider__next'
    });
//    $('.js-portfolio-photo-slider').slick({
//        slidesToShow: 3,
//        slidesToScroll: 1,
//        prevArrow: '.portfolio-photo__prev',
//        nextArrow: '.portfolio-photo__next'
//    });
    
    
    $('.js-portfolio-photo-slider').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
            
        }
    });
    
//    var iframe_id = [];
//    $('.video__item iframe').each(function(key, value) {
//        if(value.id.length > 0) {
//            iframe_id.push(value.id);
//        }
//    });
//    console.log(iframe_id);

  
    
    
    function questions() {
        var question = $('.question-title'),
                answer = $('.question-answer');
        question.click(function() {
            var curAnswer = $(this).siblings(answer);
            if(curAnswer.is(':visible')) {
                curAnswer.slideUp();
            } else {
                curAnswer.slideDown();
            }
        });
    }
    
    questions();
    
    $("form").on("submit", function() {
        var formID = '#' + $(this).attr("id");
        $(formID).validate({
            rules: {
                name: 'required',
                phone: 'required'
            },
            messages: {
                name: '',
                phone: ''
            }
        });
        if($(formID).valid()) {
       
           $(formID).parent().hide();
           $(formID).parent().parent().find('.popup-success').addClass('success-show');
        }
        return false;
    });
    
});

