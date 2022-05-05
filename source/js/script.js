let navMain = document.querySelector('.navigation__menu');
let navToggle = document.querySelector('.menu__button');
let closeIcon = document.querySelector('.menu__icon--close');
let menuIcon = document.querySelector('.menu__icon--open');
let ItemList = document.querySelector('.menu__wrapper');

navMain.classList.remove('menu__nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('menu__close')) {
    navMain.classList.replace('menu__close', 'menu__open');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    ItemList.style.display = 'flex';
  } else {
    navMain.classList.replace('menu__open', 'menu__close');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    ItemList.style.display = 'none';
  }
});
