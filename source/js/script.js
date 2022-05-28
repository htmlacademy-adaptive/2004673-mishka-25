let navMain = document.querySelector('.navigation__menu');
let navToggle = document.querySelector('.navigation__button');
let closeIcon = document.querySelector('.navigation__icon-close');
let menuIcon = document.querySelector('.navigation__icon-open');
let itemList = document.querySelector('.navigation__wrapper');
let mapItem = document.querySelector('.contacts__location');

navMain.classList.remove('navigation__menu-nojs');
mapItem.classList.remove('contacts__nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation__menu-close')) {
    navMain.classList.replace('navigation__menu-close', 'navigation__menu-open');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    itemList.style.display = 'flex';
  } else {
    navMain.classList.replace('navigation__menu-open', 'navigation__menu-close');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    itemList.style.display = 'none';
  }
});
