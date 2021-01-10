

$(document).ready(function() {

    let descrBtn = document.querySelectorAll('.prod-descr-btn');
    let descrBody = document.querySelectorAll('.prod-descr-body');
    let descrPlus = document.querySelectorAll('.descr-btn-plus--i');


    for (let i = 0; i < descrBtn.length; i++){
        if($(window).width() < 790) {
            $(descrBody[i]).slideUp(0);
            descrBtn[i].onclick = function(){
            for (let j = 0; j < descrBtn.length; j++){
                if(j != i){
                    $(descrBody[j]).slideUp();
                    descrPlus[j].classList.remove('plus-rotate');
                    descrBtn[j].classList.remove('color-red');
                }
            }
            $(descrBody[i]).slideToggle();
            descrBtn[i].classList.toggle('color-red');
            descrPlus[i].classList.toggle('plus-rotate');
        }
          } else {
            $(descrBody[i]).slideUp(0);
            $(descrBody[0]).slideDown(0);
            descrBtn[i].onclick = function(){
                if(i == 0){
                    lineAnimate(0);
                }
                else if(i == 1){
                    lineAnimate(320);
                }
                else if(i == 2){
                    lineAnimate(640);
                }
                for (let j = 0; j < descrBtn.length; j++){
                    if(j != i){
                        $(descrBody[j]).slideUp();
                    }
                }
                $(descrBody[i]).slideDown();
            }
          }
        
    }

    function lineAnimate(leftPos) {
        $('.prod-line-front').animate({
            left: leftPos
        }, 300);
    }
      

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    $(".product__img-scroll").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        vertical: true,
        verticalSwiping: true
    });


});