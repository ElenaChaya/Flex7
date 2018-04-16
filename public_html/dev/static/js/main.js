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
                   dots: false,
                   arrows:true,
                   prevArrow: '.mob-'+name+'__prev',
                   nextArrow: '.mob-'+name+'__next', 
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
    
    
    
    function sliderReviews() {
        $('.js-reviews-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '.reviews-slider__prev',
            nextArrow: '.reviews-slider__next',
            useTransform: false,
            infinite: false,
            responsive: [{
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                prevArrow: '.reviews-slider-mobile__prev',
                nextArrow: '.reviews-slider-mobile__next'
                
                
            }
        }]
//            customPaging: function (slider, i) {
//            //FYI just have a look at the object to find available information
//            //press f12 to access the console in most browsers
//            //you could also debug or look in the source
//            console.log('slider');
//            console.log(slider);
//            console.log(slider.slideCount);
//        }


        });
        
    }
  //  $('.add-remove').slick('slickAdd','<div><h3>' + slideIndex + '</h3></div>');
   
    function review(resize) {
        var elems = $(".review-wrap");
        var wrapper = $('<div class="review-slider__item" />');
        var pArrLen = elems.length;
        var size = $(window).width();
        
        if ((size <700) && (resize)) {
            if($('.js-reviews-slider').hasClass("big")) {
                $('.js-reviews-slider').slick('unslick');
                $('.review-wrap').unwrap();
                console.log('kkkjjkj');
                
//                for (var j = 0; j < pArrLen; j ++) {
//                    elems.filter(':eq(' + j + ')').wrapAll(wrapper);
//                }
                sliderReviews();
                $('.js-reviews-slider').removeClass( "big" ).addClass("small");
//                if($('.js-reviews-slider').hasClass("first")) {
//                    $('.js-reviews-slider').removeClass( "first" );
//                }
                console.log("<700 resize big");
            } else {
                console.log("<700 resize !big");
            }

        }else if ((size >= 700) && (resize)) {

            if ($('.js-reviews-slider').hasClass("small")) {
                $('.js-reviews-slider').slick('unslick');
//                if (!$('.js-reviews-slider').hasClass("first")) {
//                    $('.review-wrap').unwrap();
//                   // $('.js-reviews-slider').removeClass( "first" );
//                }
                for (var i = 0; i < pArrLen; i += 2) {
                    elems.filter(':eq(' + i + '),:eq(' + (i + 1) + ')').wrapAll(wrapper);
                }
                sliderReviews();
                $('.js-reviews-slider').removeClass("small").addClass("big");
                console.log(">=700 resize small");
            } else {
                console.log(">=700 resize !small");
            }
            
        } else if ((size < 700) && !resize){
            
            //$('.js-reviews-slider').slick('unslick');
            
            $('.review-wrap').unwrap();
            sliderReviews();
            $('.js-reviews-slider').addClass("small");
            console.log("<700 !resize");
            
        } else if ((size >= 700) && !resize){
            sliderReviews();
            $('.js-reviews-slider').addClass("big");
            console.log(">=700 !resize");
        }
    }
    
    stagesSlider();

    review(0);

    $(window).resize(function() {
        review(1);
        stagesSlider();
     });
        
    function stagesSlider() {
        if (($(window).width() < 700) && !($('.js-stages-item__wrap').hasClass('slick-initialized'))) {
            $('.js-stages-item__wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '.mob-stages__prev',
                nextArrow: '.mob-stages__next'
            });
        } else if(($(window).width() > 700) && ($('.js-stages-item__wrap').hasClass('slick-initialized'))) {
           $('.js-stages-item__wrap').slick('unslick'); 
        }



        
        
       
        
//        } else {
//            console.log($('.js-stages-item__wrap').slick);
//            $('.js-stages-item__wrap').slick('unslick');
//        }   
    }
        
        
    
 
//    $(window).on('resize', review);
    
    
    
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
                $(this).removeClass('active');
            } else {
                curAnswer.slideDown();
                $(this).addClass('active');
            }
        });
    }
    
    questions();
    
//    $("form").on("submit", function() {
//        var formID = '#' + $(this).attr("id");
//        $(formID).validate({
//            rules: {
//                name: 'required',
//                phone: 'required'
//            },
//            messages: {
//                name: '',
//                phone: ''
//            }
//        });
//        if($(formID).valid()) {
//       
//           $(formID).parent().hide();
//           $(formID).parent().parent().find('.popup-success').addClass('success-show');
//        }
//        return false;
//    });
    
});

