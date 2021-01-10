

$(document).ready(function() {

    let descrBtn = document.querySelectorAll('.prod-descr-btn');
    let descrBody = document.querySelectorAll('.prod-descr-body');

    for (let i = 0; i < descrBtn.length; i++){
        $(descrBody[i]).slideUp();
        descrBtn[i].onclick = function(){
            for (let j = 0; j < descrBtn.length; j++){
                if(j != i){$(descrBody[j]).slideUp();}
            }
            $(descrBody[i]).slideToggle();//Для мобилок
            //$(descrBody[i]).slideDown();//Для пк
        }
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