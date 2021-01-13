

  showTextBtn = document.querySelector('.show-about');
  showText = document.querySelector('.hide-p');

  showTextBtn.onclick = function(){
    showText.classList.add('show-p');
    showTextBtn.style.display = 'none';
  }
  
/*
  let favorCheck = document.querySelector('.favorite-check');
  let favorHeart = document.querySelector('.favorite-check');
  $(favorCheck).on('click', function () {
    $('input:checked').each(function () {
        $(container).append( $(this).val() + " " );
    });
});*/

let favorCheck = document.querySelectorAll('.st1');
console.log(favorCheck)
/*
  var promoBtn = document.querySelector('.promo-button');
  var promoCheck = document.querySelector('.promo-check-input');

  if (promoCheck.checked = true){
    promoBtn.disabled = false;
    console.log('1')
  }else{
    promoBtn.disabled = true;

  }*/
 