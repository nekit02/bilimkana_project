$(document).ready(function(){
    $(".owl-carousel-1").owlCarousel({
        items:1,
        loop:true,
        // autoplay:true,
        autoplaySpeed:1000,
        autoplayTimeout:8000,
    });
    $(".owl-carousel-2").owlCarousel({
        margin:160,
        

        nav:true,
        navText:['<ion-icon name="arrow-back-circle-outline"></ion-icon>' , '<ion-icon name="arrow-forward-circle-outline"></ion-icon>'],
        responsive : {
            1700:{
                items:5,
            },
            1100 : {
                items:4,
            },
            768 : {
                items:3,
            },
            520 : {
                items:2,
            }
        }
    });
    $(".owl-carousel-3").owlCarousel({
        items:4,
        loop:true,
        autoplay:true,
        autoplayTimeout:8000,
        autoplaySpeed:1000,
    });
    $(".owl-carousel-4").owlCarousel({
        items:3,
        margin:40,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed:1000,
        nav:true,
        navText:['<ion-icon name="arrow-back-circle-outline"></ion-icon>' , '<ion-icon name="arrow-forward-circle-outline"></ion-icon>'],
    });
    $(".owl-carousel-5").owlCarousel({
        items:3,
        loop:true,
        autoplay:true,
        autoplayTimeOut:8000,
        autoplaySpeed:1000,
    });
  });
  