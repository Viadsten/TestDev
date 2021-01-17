
 $(document).ready(function() {
if ($(window).width() < 900) {
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
}
let contentWrp = document.querySelector('.order-left');
let contentBody = document.querySelectorAll('.order-content'); 
let nextBtn = document.querySelector('.order-next-btn');
let contentHeight = [];
let indexTab = 0;
let CityBack = document.querySelectorAll('#city-change');
//Навигация корзины
let navBtns = document.querySelectorAll('.order-nav__link');
let svgIcons = document.querySelectorAll('.svg-icon');
let navLine = document.querySelector('.order-nav__line');
//классы позиции таба
let nextTab = 'order-pos--right';
let showTab = 'order-pos--center';
let prevTab = 'order-pos--left';

//вычисление высоты блока контента для позиционирования
for (let i = 0; i < contentBody.length; i++){
    contentHeight[i] = ($(contentBody[i]).height());
    
    if(i > 0){
        if($(window).width() < 900) {
            $(contentBody[i]).css('margin-top', contentHeight[i-1] * -1)
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
if($(window).width() < 900) {
        $(contentWrp).css('height', contentHeight[indexTab] + 120);
}
//$('.order-3-next-btn').prop('disabled', true);

//обработчики нажатия переключения слайдов
nextBtn.onclick = function(){ FnextTab();}
for (let i = 0; i < CityBack.length; i++){
    CityBack[i].onclick = function(){ 
        let j = CityBack[i].getAttribute('data-tab-number');
        let ActualTab = indexTab;
       console.log(`j = ${j}; ActualTab = ${ActualTab - 1}`);
        while(j != ActualTab - 1){
            FprevTab();
            j--;
        }     
    }
}


//обработчик нажатия на навигацию
for (let i = 0; i < navBtns.length; i++){
    navBtns[i].onclick = function(){
        selectCheck(x);
        if (selectCheck(x) == 0){
            //уведомляшка прии ошибке ввода!
        }
        else{
            if (navBtns[i].classList.contains('order-nav__link--active') && (i == indexTab + 1)){
                //уведомляшка прии ошибке ввода!
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
}


//обработчик нажатия для ДОСТАВКИ (изменить переменную delivBtn)
let delivBtn = document.querySelectorAll('.order-delivery-btn');
let delivMethod = document.querySelectorAll('.deliv-method');

for (let i = 0; i < delivBtn.length; i++){
    delivBtn[i].onclick = function(){
        console.log(delivMethod[i]);
        $('.selected-delivery-value').html($(delivMethod[i]).text());
        FnextTab();
    }
}

let x = 0;
//переключение вперед
function FnextTab(){
     //проверка заполнения SELECT
     if (selectCheck(x) == 0){
         //уведомляшка прии ошибке ввода!
     }else{
        //$(contentWrp).css('height', contentHeight[indexTab + 1] + 20)
        contentBody[indexTab].classList.add(prevTab);
        contentBody[indexTab].classList.remove(showTab);
        indexTab++;
        contentBody[indexTab].classList.add(showTab);
        contentBody[indexTab].classList.remove(nextTab);
        navBtns[indexTab + 1].classList.add('order-nav__link--active');
        svgIcons[indexTab].classList.add('svg-active');
        console.log(`indexTab = ${indexTab}`);
        if($(window).width() < 900) {
            $(contentWrp).css('height', contentHeight[indexTab] + 20);
            $('.order-nav').slick('slickGoTo', indexTab + 1);
            console.log(contentHeight[indexTab]);
        }else{
            $(navLine).css('width', (indexTab + 2) * 16.5 + '%')
        }
        //проверка Контактных данных
        if(indexTab == 2){
            
            //contactValid();
        }
        
        if(indexTab + 1 == contentBody.length){

            $('.form-submit-btn').prop('disabled', false);
        }
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
        if(indexTab == 0){
            $(contentWrp).css('height', contentHeight[indexTab] + 120);
        }else{
            $(contentWrp).css('height', contentHeight[indexTab] + 20);
        }
        $('.order-nav').slick('slickGoTo', indexTab);
       
    }else{
        $(navLine).css('width', (indexTab + 2) * 16.5 + '%')
    }
}

//проверка заполения select
let selectValue = $(".new-select");
function selectCheck(x){
    for(let i = 0; selectValue.length > i; i++){
        if (($(selectValue[i]).text()  == 'Регион')||($(selectValue[i]).text()  == 'Город')){
            $(nextBtn).prop('disabled', true);
            x = 0;
            break;
        }else{
            $(nextBtn).prop('disabled', false);
            x = 1;
            $('.selected-city-value').html($(selectValue[1]).text());
        }
    }
    return x;
}
selectCheck(x);

//отслеживание выбора для disabled кнопки
let selectValueItem = $(".new-select__item");
for(let i = 0; selectValueItem.length > i; i++){
    selectValueItem[i].onclick = function(){
        setTimeout(nextSelect, 250);  
    }
}

//проверка селект при выборе
function nextSelect(){
    for(let j = 0; selectValue.length > j; j++){
        if (selectCheck(x) == 0){
            $(nextBtn).prop('disabled', true);
            
        }else{
            $(nextBtn).prop('disabled', false);
        }
    }
}

//проверка контактных данных (order3)
let contactInputs = document.querySelectorAll('#order-3-input');
function contactValid(){
    let valide = false;
    for (let i =0; i < contactInputs.length; i++){        
        if (!$(contactInputs[i]).is(":focus")){
            console.log('Not focused');
       }
    }
}

for(let i = 0; i < contactInputs.length; i++){
    
    contactInputs[1].onblur = function() {
        if ($(contactInputs[1]).val() === ''){
            //Упс, проверьте введенные данные
            $('.order-3-next-btn').prop('disabled', true);            
        }else{
            //valid = true;
            $('.order-3-next-btn').prop('disabled', false);
            $('.selected-tel-value').html($(contactInputs[1]).val());
        }
    }
}

let nextBtn3 = document.querySelector('.order-3-next-btn')
nextBtn3.onclick = function(){
    FnextTab();    
    
}

let payBtn = document.querySelectorAll('.order-pay-btn');
let payMethod = document.querySelectorAll('.pay-method');
for (let i = 0; i < payBtn.length; i++){
    payBtn[i].onclick = function(){
        $('.selected-pay-value').html($(payMethod[i]).text());
        FnextTab();
    }
}

/*
if ($(contactInputs[i]).val() === ''){
    //Упс, проверьте введенные данные
}else{
    valid = true;
}*/

});
