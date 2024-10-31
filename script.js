let backgroundImgElement = document.querySelector('.background__img');
let navMobileButton = document.querySelector('.mobileButton');
let menuBackDropLastItem = document.querySelector('.listItemContainer__last');

navMobileButton.addEventListener('click', () => {
    document.getElementById('menuBackdrop').classList.toggle('openMenu');
});