
 

$(window).on("load resize", function(){
    var width = $(document).width();
    
    if (width > 900) {
      $('.order-nav').slick('unslick');
      sliderIsLive = false;
    } else {
        $(".order-nav").slick({
            arrows: false,
            infinite: false,
            slidesToShow: 3,
            swipeToSlide: true,
            responsive: [
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 5
                  }
                },
                {
                  breakpoint: 720,
                  settings: {
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 580,
                  slidesToShow: 3,
                  arrows: false,
                  infinite: false,
                  swipeToSlide: true,
                }
              ]
        });
    }
  });

let contentBody = document.querySelectorAll('.order-content'); 
let nextBtn = document.querySelector('.order-next-btn');
let contentHeight = [];
let indexTab = 0;
let CityBack = document.querySelector('#city-change');
//Навигация корзины
let navBtns = document.querySelectorAll('.order-nav__link');
let svgIcons = document.querySelectorAll('.svg-icon');
let navLine = document.querySelector('.order-nav__line');
//классы позиции таба
let nextTab = 'order-pos--right';
let showTab = 'order-pos--center';
let prevTab = 'order-pos--left';


for (let i = 0; i < contentBody.length; i++){
    contentHeight[i] = ($(contentBody[i]).height());
    
    if(i > 0){
        if($(window).width() < 900) {
            $(contentBody[i]).css('margin-top', contentHeight[i-1] * -1 - 49)
        }
        else{
            $(contentBody[i]).css('margin-top', contentHeight[i-1] * -1 - 9)
        }
    }
}

//изначальное позиционирование
navBtns[1].classList.add('order-nav__link--active');
svgIcons[0].classList.add('svg-active');
contentBody[0].classList.add(showTab);
contentBody[1].classList.add(nextTab);

//обработчики нажатия переключения слайдов
nextBtn.onclick = function(){ FnextTab(1)}
CityBack.onclick = function(){ FprevTab(1)}

//переключение вперед
function FnextTab(){
    
    contentBody[indexTab].classList.add(prevTab);
    contentBody[indexTab].classList.remove(showTab);
    indexTab++;
    contentBody[indexTab].classList.add(showTab);
    contentBody[indexTab].classList.remove(nextTab);
    navBtns[indexTab + 1].classList.add('order-nav__link--active');
    svgIcons[indexTab].classList.add('svg-active');
    if($(window).width() < 900) {
        $('.order-nav').slick('slickGoTo', indexTab + 1);
    }else{
        $(navLine).css('width', (indexTab + 2) * 16.5 + '%')
    }
}

//переключение назад
function FprevTab(){
    contentBody[indexTab].classList.add(nextTab);
    contentBody[indexTab].classList.remove(showTab);
    navBtns[indexTab + 1].classList.remove('order-nav__link--active');
    svgIcons[indexTab].classList.remove('svg-active');
    indexTab--;
    contentBody[indexTab].classList.add(showTab);
    contentBody[indexTab].classList.remove(prevTab);
    if($(window).width() < 900) {
        $('.order-nav').slick('slickGoTo', indexTab);
    }else{
        $(navLine).css('width', (indexTab + 2) * 16.5 + '%')
    }
}

//обработчик нажатия на навигацию
for (let i = 0; i < navBtns.length; i++){
    navBtns[i].onclick = function(){
        if (navBtns[i].classList.contains('order-nav__link--active') && (i == indexTab + 1)){
            
        }else if(i < indexTab + 1){
            let j = indexTab + 1 - i;
            while(j != 0){
                FprevTab();
                j--;
            }
            
        }else{
            let j = i - indexTab - 1;
            
            while(j != 0){
                FnextTab();
                j--;
            }
        }
    }
}

//обработчик нажатия для ДОСТАВКИ (изменить переменную delivBtn)

let delivBtn = document.querySelectorAll('.order-delivery-btn');

for (let i = 0; i < delivBtn.length; i++){
    delivBtn[i].onclick = function(){  FnextTab();  }
}