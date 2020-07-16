$(function(){

        $('.mosaico-wraper').slick({
           centerMode: false,
           slidesToShow: 6,
           arrows: false,
           responsive:[
               {
                breakpoint: 768,
                settings:{
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 3,
                }
               },
               {
                breakpoint: 580,
                settings:{
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                }
               },
               {
                breakpoint: 410,
                settings:{
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                }
               },
           ]
        })

        $('.blocos_deTexto .center').slick({
            centerMode: false,
            slidesToShow: 3,
            arrows: false,
            infinite: false,
            responsive:[
                {
                 breakpoint: 768,
                 settings:{
                     arrows: false,
                     dots: true,
                     infinite: true,
                     centerMode: true,
                     slidesToShow: 1,
                 }
                },
                {
                    breakpoint: 480,
                    settings:{
                        arrows: false,
                        dots: true,
                        infinite: false,
                        centerMode: false,
                        slidesToShow: 1,
                    }
                   },
            ]
        })

        $('.depoimentos .center').slick({
            centerMode: false,
            slidesToShow: 1,
            arrows: false,
            dots: true
        })
})