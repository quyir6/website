
const hamMenu = document.querySelector('.hamburger');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('is-active');
  offScreenMenu.classList.toggle('active')

})