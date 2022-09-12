const logLinksTexts = () => {
  document
    .querySelectorAll("a")
    .forEach((link) => console.log(link.textContent));
};

// Sample usage - do not modify
logLinksTexts();
