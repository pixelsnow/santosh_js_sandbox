const getShortTextParagraphs = () => {
  let p = [...document.querySelectorAll("p")].filter(
    (p) => p.textContent.length < 10
  );
  return p.map((p) => p.textContent);
};

// Sample usage - do not modify
console.log(getShortTextParagraphs());
