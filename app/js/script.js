const bodyElement = document.body;
const toggleBtn = document.querySelector('.header__toggle');
const header = document.querySelector('.header');
const headerOverlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');


toggleBtn.addEventListener('click', () => {
  header.classList.toggle('open');
  bodyElement.classList.toggle('noscroll');

  // Overlay effect
  if (header.classList.contains('open')) { //Close hamburger menu
    fadeElements.forEach(element => {
      element.classList.remove('fade-out');
			element.classList.add('fade-in');
    })
  } else { //Open hamburger menu
    fadeElements.forEach(element => {
      element.classList.remove('fade-in');
			element.classList.add('fade-out');
    })
    
  }
});