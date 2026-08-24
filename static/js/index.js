const scrollButton = document.querySelector('.scroll-top');

if (scrollButton) {
  window.addEventListener('scroll', () => {
    scrollButton.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
