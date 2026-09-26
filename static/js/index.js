const copyButton = document.querySelector('.copy-bibtex-btn');
const bibtexCode = document.getElementById('bibtex-code');
const copyStatus = document.getElementById('copy-status');

if (copyButton && bibtexCode) {
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(bibtexCode.textContent);
      copyButton.textContent = 'Copied!';
      copyStatus.textContent = 'BibTeX copied to clipboard.';
      window.setTimeout(() => {
        copyButton.textContent = 'Copy';
      }, 2000);
    } catch (error) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(bibtexCode);
      selection.removeAllRanges();
      selection.addRange(range);
      copyStatus.textContent = 'Could not copy automatically. The BibTeX text is selected for copying.';
      bibtexCode.focus();
    }
  });
}
