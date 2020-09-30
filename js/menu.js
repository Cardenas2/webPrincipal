const menu = document.querySelector('.menu');
// console.log(menu);
const burgerButton = document.querySelector('#burger-menu');

burgerButton.addEventListener('click', function() {
    menu.classList.toggle('is-active')
});

const menuLink = document.querySelectorAll(".menu__link");
    menuLink.forEach(function(element) {
        element.addEventListener("click", function() {
        menu.classList.remove("is-active");
});
});