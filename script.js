var navToggle = document.querySelector(".header__toggle");
var mainNav = document.querySelector(".header__nav-wrapper");
var newsButton = document.querySelector(".news__button");
var newsLine = document.querySelector(".news__line--hide");
var newsCell = document.getElementById('hide-cell');

var cachedWidth = $(window).width();
$(window).resize(function(){
    var newWidth = $(window).width();
    if(newWidth !== cachedWidth){
      $(window).resize(function() {
        if(document.documentElement.clientWidth > 540) {
          mainNav.style.display = "flex";
        }
      });

      $(window).resize(function() {
        if(document.documentElement.clientWidth < 540) {
          mainNav.style.display = "none";
          navToggle.classList.remove('toggle_active');
        }
      });
        cachedWidth = newWidth;
    }
});

navToggle.addEventListener('click', function(){
  if (navToggle.classList.contains('toggle_active'))
  {
    $("#navigation").slideUp('300');
    navToggle.classList.remove('toggle_active');
  }
  else{
    $("#navigation").slideDown('300');
    navToggle.classList.add('toggle_active');
    mainNav.style.display = "flex";
  }
});

