const getArticleTitle = () =>
  document.querySelector("#article #headline")?.textContent ??
  "no headline found";

// Sample usage - do not modify
console.log(getArticleTitle()); // "First human lands on Mars!"
