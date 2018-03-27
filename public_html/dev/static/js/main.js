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
    
    $('.js-video-slider').slick({
        dots: true,
        arrows: false
    });
    
    $('.js-portfolio-photo-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '.portfolio-photo__prev',
        nextArrow: '.portfolio-photo__next',  
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
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
    
    var iframe_id = [];
    $('.video__item iframe').each(function(key, value) {
        if(value.id.length > 0) {
            iframe_id.push(value.id);
        }
    });
    
    $('.video-slider').on("click", ".js-video-slider .slick-dots", function() {
        $.each(iframe_id, function(key, value) {
            $('.slick-track')
                    .find('div:not(.slick-cloned)')
                    .find('#' + iframe_id[key])[0]
                    .contentWindow
                    .postMessage('{"event":"command", "func":"' + 'pauseVideo' + '","args":""}', '*');
        });
    });
    
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

