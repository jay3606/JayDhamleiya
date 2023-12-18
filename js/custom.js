$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });

    $(".scroll-top").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 0);
     });


     $('.toggle-menu').click(function() {
        $("body").toggleClass('menu_open')
    
        $('.header-menu ul li').click(function(){
            $("body").removeClass('menu_open');
        })
    })
    
        $(window).scroll(function() {
            var header = $('.header');
            var scroll = $(window).scrollTop();
            var homeScroll = 100;
            if (scroll > homeScroll) {
                header.addClass('fixed');
                jQuery('#return-to-top').fadeIn(300);
            } else {
                header.removeClass('fixed');
                jQuery('#return-to-top').fadeOut(300);
            }
        });
    
    
        //on scroll hide and show header
                var lastScrollTop = 0;
                jQuery(window).scroll(function(event){
                    var st = jQuery(this).scrollTop();
                    if (st >= 70){
                       jQuery('.header').addClass('scrolling_down');
                     } else{
                       jQuery('.header').removeClass('scrolling_down');
                    }
                     if (st >= lastScrollTop){
                       jQuery('.header, body').removeClass('scrolling_up');
                       jQuery('.header, body').addClass('scrolling_down');
                     } else{
                       jQuery('.header, body').addClass('scrolling_up');
                       jQuery('.header, body').removeClass('scrolling_down');  
                    }
                    lastScrollTop = st;
                });

                
                
                // jss
                $(window).load(function(){
                    $('.vertical-centered-box').fadeOut(1000,function(){
                        $(this).remove();
                    });
                });


                $('.testimonial').owlCarousel({
                    loop:true,
                    margin:10,
                    nav:true,
                    navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
                    items:2,
                    dots:true,
                    
                    responsive:{
                            0:{
                                items:1
                            },
                            600:{
                                items:1
                            },
                            1000:{
                                items:2
                            }
                        }
                    
                })

                $('.selector').animatedHeadline({
                    animationType: 'push'
                });

                AOS.init();

                new Ukiyo(".ukiyo")


                $(window).load(function(){
                    $('.main-loader').fadeOut(1000,function(){
                        $(this).remove();
                    });
                });
                
})


