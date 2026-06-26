document.addEventListener('DOMContentLoaded', () => {
  const menuBtnOpen = document.querySelector('.js-open-menu');
  const menuBtnClose = document.querySelector('.js-close-menu');
  const mobileMenu = document.querySelector('.js-menu-container');

  const toggleMenu = () => {
    const isMenuOpen = menuBtnOpen.getAttribute('aria-expanded') === 'true' || false;
    menuBtnOpen.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
  };

  menuBtnOpen.addEventListener('click', toggleMenu);
  menuBtnClose.addEventListener('click', toggleMenu);
});