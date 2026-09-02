const scrollButton = document.querySelector('.scroll-top');

if (scrollButton) {
  window.addEventListener('scroll', () => {
    scrollButton.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const copyBibtexButton = document.querySelector('.copy-bibtex');
const bibtexCode = document.querySelector('#bibtex-code');
const copyStatus = document.querySelector('.copy-status');

if (copyBibtexButton && bibtexCode) {
  copyBibtexButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(bibtexCode.textContent.trim());
      copyBibtexButton.querySelector('.copy-label').textContent = 'Copied';
      copyStatus.textContent = 'BibTeX copied to clipboard.';

      window.setTimeout(() => {
        copyBibtexButton.querySelector('.copy-label').textContent = 'Copy';
        copyStatus.textContent = '';
      }, 2000);
    } catch (error) {
      copyStatus.textContent = 'Could not copy automatically. Select the citation and copy it manually.';
    }
  });
}
