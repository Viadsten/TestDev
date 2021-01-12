let buyBtn = document.querySelectorAll('.card-button');
let modal = document.querySelector('.modal-purchase-notif');
let modalBG = document.querySelector('.modal-bg');

//при добавлении в корзину
for (let i = 0; i < buyBtn.length; i++){
    buyBtn[i].onclick = function(){
        showModal(modal);
    }
}

document.querySelector('.purchase-notif__close-btn').onclick = function(){
    hideModal(modal);
}

document.querySelector('.purchase-notif__close').onclick = function(){
    hideModal(modal);
}

//фон для модалок. закрытие окна
modalBG.onclick = function(){
    modal.classList.remove('modal-purchase-notif--show');
    modalBG.classList.remove('modal-bg--show');
    modalSignUp.classList.remove('modal-purchase-notif--show');
}
//модалка рагистрации-подарка
let modalGift = document.querySelector('.modal-gift');
let modalSignUp = document.querySelector('.modal-sign-up');


document.querySelector('.modal-gift__close').onclick = function(){
    modalGift.style.display = 'none';
}

document.querySelector('.modal-sign-up__close').onclick = function(){
    hideModal(modalSignUp);
}

modalGift.onclick = function(){
    modalGift.style.display = 'none';
    showModal(modalSignUp);
}

function showModal(content) {
    content.classList.add('modal-purchase-notif--show');
    modalBG.classList.add('modal-bg--show');
}

function hideModal(content) {
    content.classList.remove('modal-purchase-notif--show');
    modalBG.classList.remove('modal-bg--show');
}