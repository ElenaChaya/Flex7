;

$(document).ready(function () {
    
    $('.js-portfolio-video-slider').slick({
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
        }]
    });
    
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
    $('.portfolio-video__item iframe').each(function(key, value) {
        if(value.id.length > 0) {
            iframe_id.push(value.id);
        }
    });
    
    $('.portfolio-video-slider').on("click", ".js-portfolio-video-slider .slick-dots", function() {
        $.each(iframe_id, function(key, value) {
            $('.slick-track')
                    .find('div:not(.slick-cloned)')
                    .find('#' + iframe_id[key])[0]
                    .contentWindow
                    .postMessage('{"event":"command", "func":"' + 'pauseVideo' + '","args":""}', '*');
        });
    });
    
});

