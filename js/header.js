
//модалка поиска на пк
let searchBtn = document.querySelector('.search-btn');
let searchWrp = document.querySelector('.search-wrp');
let searchClose = document.querySelector('.close-search');

searchBtn.onclick = function(){
    searchWrp.classList.toggle('search-wrp--show');
}

searchClose.onclick = function(){
    searchWrp.classList.remove('search-wrp--show');   
}

//анимация бургера
var burgerBtn = document.querySelector('.navbar-toggler');

burgerBtn.onclick = function(){
    burgerBtn.classList.toggle('toggler-open');
}

//аккордеон моб, выпадашка пк

var dropdown = document.querySelectorAll('#dropdownEvent')

$(dropdown).on({
    "show.bs.dropdown": function () {
        $(this).addClass('dropdown-open');
    },
    "hide.bs.dropdown":  function() {
        $(this).removeClass('dropdown-open');
    }
});

$(function() {
    $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function(event) {
      event.preventDefault();
      event.stopPropagation();
      
      //method 1: remove show from sibilings and their children under your first parent
      
  /* 		if (!$(this).next().hasClass('show')) {
                
                  $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
               }  */     
       
       
      //method 2: remove show from all siblings of all your parents
      $(this).parents('.dropdown-submenu').siblings().find('.show').removeClass("show");
      
      $(this).siblings().toggleClass("show");
      
      
      //collapse all after nav is closed
      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
      });
  
    });
  });