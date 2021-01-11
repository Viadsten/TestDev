

$(document).ready(function() {

    let descrBtn = document.querySelectorAll('.prod-descr-btn');
    let descrBody = document.querySelectorAll('.prod-descr-body');
    let descrPlus = document.querySelectorAll('.descr-btn-plus--i');
    let bodyHeight = [];
    let bodyHeightAll = [];

    for (let i = 0; i < descrBtn.length; i++){
        if($(window).width() < 790) {
            $(descrBody[i]).slideUp(0);
            $(descrBody[0]).slideDown(0);
            descrBtn[0].classList.add('color-red');
            descrPlus[0].classList.add('plus-rotate');
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
            let afterTop = $('.product-text-position')
            bodyHeight[i] = $(descrBody[i]).height();
            let bodyHeightSorted = bodyHeight;
            min = bodyHeightSorted[0];
            max = min;
            for (let m = 1; m < bodyHeightSorted.length; m++) {
                if (bodyHeightSorted[m] > max) max = bodyHeightSorted[m];
                if (bodyHeightSorted[m] < min) min = bodyHeightSorted[m];
            }
            console.log(max);
            $(afterTop).css('margin-top', (max - bodyHeight[0])* -1 + 30);
            descrBody[1].classList.add('descr-body--right');
            descrBody[2].classList.add('descr-body--right');
            
            if(i != 0){
                $(descrBody[i]).css('margin-top', bodyHeight[0] * -1 - 15);

            }
            descrBtn[i].onclick = function(){
                $(afterTop).css('margin-top', (max - bodyHeight[i])* -1 + 30);
                removeRL(i);
                if (i == 0){
                    lineAnimate(0);
                    descrBody[1].classList.remove('descr-body--left');
                    descrBody[1].classList.add('descr-body--right');
                    descrBody[2].classList.add('descr-body--right');
                }
                else if(i == 1){
                    lineAnimate(320);
                    descrBody[0].classList.add('descr-body--left');
                    descrBody[2].classList.add('descr-body--right');
                }
                else if(i == 2){
                    lineAnimate(640);
                    descrBody[0].classList.add('descr-body--left');
                    descrBody[1].classList.add('descr-body--left');
                }
                
            }
            function removeRL(y){
                descrBody[y].classList.remove('descr-body--right');
                descrBody[y].classList.remove('descr-body--left');
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