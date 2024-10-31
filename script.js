let backgroundImgElement = document.querySelector('.background__img');
let navMobileButton = document.querySelector('.mobileButton');
let menuBackDropLastItem = document.querySelector('.listItemContainer__last');
let menuBackdrop = document.getElementById('menuBackdrop');
const landingPageIllustration = document.querySelector('.illustration')
const laptopImage = document.querySelector('.laptopImg')

navMobileButton.addEventListener('click', () => {
    menuBackdrop.classList.toggle('openMenu');

    menuBackdrop.classList.contains('openMenu') ? 
    navMobileButton.src = './images/icon-close.svg' : 
    navMobileButton.src = './images/icon-hamburger.svg';

});

function checkScreenSize() {
    if (window.innerWidth <= 700) {
      backgroundImgElement.src = './images/bg-pattern-intro-mobile.svg';
      landingPageIllustration.src = './images/illustration-editor-mobile.svg';
      laptopImage.src = './images/illustration-laptop-mobile.svg';
    } else {
      backgroundImgElement.src = './images/bg-pattern-intro-desktop.svg';
      landingPageIllustration.src = './images/illustration-editor-desktop.svg';
      laptopImage.src = './images/illustration-laptop-desktop.svg'
    }
}
  
checkScreenSize();

window.addEventListener('resize', checkScreenSize);