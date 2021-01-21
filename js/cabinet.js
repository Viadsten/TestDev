let cabinetBtn = document.querySelectorAll('.cabinet--order-btn');
let cabinetContentHide = document.querySelectorAll('.cabinet-body--hide');



for (let i = 0; i < cabinetContentHide.length; i++){
    $(cabinetContentHide[i]).slideUp(0)
    cabinetBtn[i].onclick = function () {
        $(cabinetContentHide[i]).slideToggle();
        if(cabinetBtn[i].innerHTML == 'Подробнее'){
            cabinetBtn[i].innerHTML = 'Свернуть';
            cabinetBtn[i].classList.add('cabinet-nav__btn--active')
        }else{
            cabinetBtn[i].innerHTML = 'Подробнее';
            cabinetBtn[i].classList.remove('cabinet-nav__btn--active')

        }
    }
}

let cabinetNav = document.querySelectorAll('.cabinet-nav__btn');
let cabinetContent = document.querySelectorAll('.cabinet-content');
let cabinetNavText = document.querySelectorAll('.order-nav-text');
let cabinetNavHead = document.querySelector('.cabinet-nav-head');

$(cabinetContent[1]).hide(0);
$(cabinetContent[2]).hide(0);

for (let i = 0; i < cabinetNav.length; i++){
    cabinetNav[i].onclick = function(){
        console.log(cabinetNavHead.innerHTML);
        if(i < 3){
            cabinetNavHead.innerHTML = cabinetNavText[i].innerHTML;
            $(cabinetContent[i]).show(200);
            if (i == 0){
                cabinetNav[i].classList.add('cabinet-nav__btn--active');
                cabinetNav[i].classList.add('cabinet-nav__basket--active');
            }else{
                cabinetNav[i].classList.add('cabinet-nav__btn--active');
            }
            
            for (let j = 0; j < cabinetContent.length; j++){
                if (j != i){
                    $(cabinetContent[j]).hide(200);
                    cabinetNav[i].classList.remove('cabinet-nav__basket--active');
                    cabinetNav[j].classList.remove('cabinet-nav__btn--active')
                }
            }
        }
    }
}


let mailBtn = document.querySelectorAll('.cabinet-mail-btn');
let mailInput = document.querySelectorAll('.cabinet-mail-input');

for (let i = 0; i < mailBtn.length; i++){
    mailBtn[i].onclick = function(){
        $(mailInput[i]).prop("readonly", false);
        mailInput[i].focus();
    }
    
    mailInput[i].onblur = function () {
        $(mailInput[i]).prop("readonly", true);
    }
}
