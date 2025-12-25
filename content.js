// Function to remove the warning div
function removeWarning() {
  const warningDiv = document.querySelector('div[aria-live="polite"][role="status"].css-175oi2r.r-1xfd6ze.r-6koalj.r-18u37iz.r-1mmae3n.r-3pj75a.r-13qz1uu.r-rgqbpe');
  if (warningDiv) {
    warningDiv.remove();
  }
}

// Run on load
removeWarning();

// Observe for changes in case the div is added dynamically
const observer = new MutationObserver(removeWarning);
observer.observe(document.body, { childList: true, subtree: true });