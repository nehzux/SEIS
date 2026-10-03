const copyButton = document.querySelector('.copy-citation');
const copyLabel = copyButton.querySelector('[data-copy-label]');
const copyStatus = document.querySelector('.copy-status');
const bibtex = document.getElementById('bibtex');

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(bibtex.textContent.trim());
    copyLabel.textContent = 'Copied!';
    copyStatus.textContent = 'BibTeX copied to clipboard.';
  } catch {
    const range = document.createRange();
    range.selectNodeContents(bibtex);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyLabel.textContent = 'Copy BibTeX';
    copyStatus.textContent = 'Copy the highlighted citation with your keyboard or browser menu.';
  }
});
