const toggleBtn = document.querySelector('.header__toggle');
const header = document.querySelector('.header');
const headerOverlay = document.querySelector('.overlay');

toggleBtn.addEventListener('click', () => {
  header.classList.toggle('open')


  // Overlay effect
  if (header.classList.contains('open')) {
    headerOverlay.classList.remove('fade-out')
    headerOverlay.classList.add('fade-in')
  } else {
    headerOverlay.classList.remove('fade-in');
    headerOverlay.classList.add('fade-out');
  }
});