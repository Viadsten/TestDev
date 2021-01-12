let link = document.querySelectorAll('.category-link');
let card = document.querySelectorAll('.category-card')

if (link.length == card.length){
    for (let i = 0; i < link.length; i++){
        $(link[i]).on({
            mouseenter: function () {
                card[i].classList.add('category-card-hover');
            },
            mouseleave: function () {
                card[i].classList.remove('category-card-hover');
            }
        });
        $(card[i]).on({
            mouseenter: function () {
                link[i].classList.add('category-link-hover');
            },
            mouseleave: function () {
                link[i].classList.remove('category-link-hover');
            }
        });
    }
}
