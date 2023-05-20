$('.cover_2').css('display', 'none');
$('.cover_3').css('display', 'none');
$('.cover_4').css('display', 'none');
$('.cover__content_2').css('display', 'none');
$('.cover__content_3').css('display', 'none');
$('.cover__content_4').css('display', 'none');
function slide() {  

    
       if (num === 1) {
            $('.cover_2').css('display', 'none');
            $('.cover_3').css('display', 'none');
            $('.cover_4').css('display', 'none');
            
            $('.cover__content_2').css('display', 'none');
            $('.cover__content_3').css('display', 'none');
            $('.cover__content_4').css('display', 'none');
            
            
            $('.cover_1').css('display', 'block');
            $('.cover__content_1').fadeIn(500);
       } 
       
       if (num === 2) {
            $('.cover_1').css('display', 'none');
            $('.cover_3').css('display', 'none');
            $('.cover_4').css('display', 'none');
            
            $('.cover__content_1').css('display', 'none');
            $('.cover__content_3').css('display', 'none');
            $('.cover__content_4').css('display', 'none');
            
            $('.cover_2').css('display', 'block');
            $('.cover__content_2').fadeIn(500);
        }
        
        if (num === 3) { 
            $('.cover_2').css('display', 'none');
            $('.cover_1').css('display', 'none');
            $('.cover_4').css('display', 'none');
            
            $('.cover__content_2').css('display', 'none');
            $('.cover__content_1').css('display', 'none');
            $('.cover__content_4').css('display', 'none');
            
            $('.cover_3').css('display', 'block');
            $('.cover__content_3').fadeIn(500);
        }
        
        if (num === 4) { 
            $('.cover_2').css('display', 'none');
            $('.cover_3').css('display', 'none');
            $('.cover_1').css('display', 'none');
            
            $('.cover__content_2').css('display', 'none');
            $('.cover__content_3').css('display', 'none');
            $('.cover__content_1').css('display', 'none');
            
            $('.cover_4').css('display', 'block');
            $('.cover__content_4').fadeIn(500);
        }
  }

let num = 1;
  id = setInterval(function(){
        num++;
        if (num > 4){
            num = 1;
        }
        slide();
    }, 7000);
    
    $('.cover__arrow_right').click(function(){
        num++;
        if (num > 4){
            num = 1;
        }
        slide();
        clearInterval(id);
    });
    
    $('.cover__arrow_left').click(function(){
        num--;
        if (num < 1){
            num = 4;
        }
        slide();
        clearInterval(id);
    });

    $('.cover__line_1').click(function(){
        num = 1;
        slide();
        clearInterval(id);
    });
    $('.cover__line_2').click(function(){
        num = 2;
        slide();
        clearInterval(id);
    });
    $('.cover__line_3').click(function(){
        num = 3;
        slide();
        clearInterval(id);
    });
    $('.cover__line_4').click(function(){
        num = 4;
        slide();
        clearInterval(id);
    });

$('.cover__arrow_left img').mouseover(function(){
    $('.cover__arrow_left img').attr('src', 'img/arrow_left_green.svg');
}
).mouseout(function(){
    $('.cover__arrow_left img').attr('src', 'img/arrow_left.svg');
}
);

$('.cover__arrow_right img').mouseover(function(){
    $('.cover__arrow_right img').attr('src', 'img/arrow_right_green.svg');
}
).mouseout(function(){
    $('.cover__arrow_right img').attr('src', 'img/arrow_right.svg');
}
);


//shadow
$('.benefits__benefit_1').mouseover(function(){
    $('.benefits__shadow_1').css('filter', 'drop-shadow(0px 5px 5px rgba(50, 50, 0, 0.5))');
}
).mouseout(function(){
    $('.benefits__shadow_1').css('filter', 'none');
}
);

$('.benefits__benefit_2').mouseover(function(){
    $('.benefits__shadow_2').css('filter', 'drop-shadow(0px 5px 5px rgba(50, 50, 0, 0.5))');
}
).mouseout(function(){
    $('.benefits__shadow_2').css('filter', 'none');
}
);

$('.benefits__benefit_3').mouseover(function(){
    $('.benefits__shadow_3').css('filter', 'drop-shadow(0px 5px 5px rgba(50, 50, 0, 0.5))');
}
).mouseout(function(){
    $('.benefits__shadow_3').css('filter', 'none');
}
);

$('.offers__bottom-offer_2').mouseover(function(){
    $('.offers__shadow_2').css('filter', 'drop-shadow(0px 5px 5px rgba(50, 50, 0, 0.5))');
}
).mouseout(function(){
    $('.offers__shadow_2').css('filter', 'none');
}
);

$('.offers__bottom-offer_1').mouseover(function(){
    $('.offers__shadow_1').css('filter', 'drop-shadow(0px 5px 5px rgba(50, 50, 0, 0.5))');
}
).mouseout(function(){
    $('.offers__shadow_1').css('filter', 'none');
}
);

//burger
let flag = false;

// Обработчик события клика на бургер
$('.burger').click(function() {
  if (flag === false) {
    $('.menu__list').show();
    flag = true;
  } else {
    $('.menu__list').hide();
    flag = false;
  }
});

// Обработчик события клика на каждый пункт меню
$('.menu__item').click(function() {
  if ($(window).width() < 768) {
    // Скрываем меню
    $('.menu__list').hide();
    // Сбрасываем флаг
    flag = false;
  }
});





$(window).resize(function() {
if ($(window).width() > 880){
    $('.menu__list').css('display', 'flex');
}
});

$(window).resize(function() {
    if ($(window).width() <= 880){
        $('.menu__list').css('display', 'none');
    }
    });

if ($(window).width() <= 550){
    h=$('.map__script').width();
    $('.map__script').css('height', h);
 }

 $(window).resize(function() {
    if ($(window).width() <= 550){
        h=$('.map__script').width();
        $('.map__script').css('height', h);
     }
    });

if ($(window).width() <= 885){

    var trigger = $('.menu').offset().top;

    $(window).scroll(function(){
        if($(window).scrollTop() >= trigger){
            $('.menu').css('position', 'fixed');
        }
    
    });

    $(window).scroll(function(){
        if($(window).scrollTop() < trigger){
            $('.menu').css('position', 'static');
        }
    
    });

};

// Находим все ссылки с хеш-значением
const links = document.querySelectorAll('a[href^="#"]');

// Добавляем обработчик события на клик по ссылке
links.forEach(link => {
  link.addEventListener('click', function(e) {
    // Отменяем стандартное поведение ссылки
    e.preventDefault();

    // Получаем хеш-значение из ссылки
    const hash = this.hash;

    // Находим элемент, к которому нужно прокрутить страницу
    const target = document.querySelector(hash);

    // Плавно прокручиваем страницу к элементу
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});




$(window).resize(function() {
    if ($(window).width() <= 885){

        var trigger = $('.menu').offset().top;
    
        $(window).scroll(function(){
            if($(window).scrollTop() >= trigger){
                $('.menu').css('position', 'fixed');
            }
        
        });
    
        $(window).scroll(function(){
            if($(window).scrollTop() < trigger){
                $('.menu').css('position', 'static');
            }
        
        });
    
    };
});
