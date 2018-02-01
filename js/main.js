$(document).ready(function() {

    // Скрипт функционала настройки вида скрытия номера
    $(".label_span").click(function(e) {
        $(".label_span").removeClass('active_span');
        $(this).addClass('active_span');
    })

    $(".eye_kind").click(function(e) {
        if ($(this).text() == 'Стилизированный глаз'){
            $('.exam_input').css({'background':'url("../images/style-eye_show.png") no-repeat'})
        } else if($(this).text() == 'Картинка с глазом'){
            $('.exam_input').css({'background':'url("../images/eye_show.jpg") no-repeat'})
        } else if($(this).text() == 'Тескт "Показать"'){
            $('.exam_input').css({'background':'url("../images/show_word.png") no-repeat'})
        } else if($(this).text() == 'Тескт "Открыть"'){
            $('.exam_input').css({'background':'url("../images/open_word.jpg") no-repeat'})
        } else {
            $('.exam_input').css({'background':'url("../images/close_word.jpg") no-repeat'})
        }
    })
    // Скрипт который плавно переходит к нужным блокам
    $(document).ready(function(){
        $("body").on("click","a.nav_link", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();

            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

    // Меню
    (function () {
        $(document).on('click', '.headhesive .top-munu__mobile-button', function(e){
            e.preventDefault();
            $(this).toggleClass('click_mob_btn');
            $('.headhesive  .top_menu').slideToggle(500);
        });
        $(document).on('click', '.wrapper .top-munu__mobile-button', function(e){
            e.preventDefault();
            $(this).toggleClass('click_mob_btn');
            $('.wrapper .top_menu').slideToggle(500);
        });
        $(document).on('click', '.footer-munu__mobile-button', function(e){
            e.preventDefault();
            $(this).toggleClass('click_mob_btn');
            $('.footer_menu').slideToggle(500);
        });
        $('.mobile_munu li a').click(function () {
            toggle_mob.toggleClass('click_mob_btn');
            $('.top_menu, .footer_menu').hide();
        });

        $(window).resize(function() {
            if (  $(window).width() > 767 ) {
                $('.mobile_munu').removeAttr('style');
            }
        });
        var lastScrollTop = 0;
        $(window).scroll(function(event){
           var st = $(this).scrollTop();
           if (st > lastScrollTop){
               $('.headhesive--stick, .headhesive--unstick').css({
                    'transform':'translateY(-350%)'
               })

           } else {
                if (st < 300){
                    $('.headhesive--stick, .headhesive--unstick').css({
                        'transform':'translateY(-350%)'
                   })
                } else {
                    $('.headhesive--stick').css({
                    'transform':'translateY(0)'
                   })
                }
           }
           lastScrollTop = st;
        });
    })();
    // Sticky menu
    var options = { offset: 300 };
    var header = new Headhesive('.header', options);

    // От создателей комплето, скрытие/появление по клику
    $('#creators').click(function(){
        $('#mobile_slideToggle_block').slideToggle(400);
    });

});