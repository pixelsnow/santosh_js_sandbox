// TODO: log the button's textContent when it's clicked
document
  .querySelector("#my-button")
  .addEventListener("click", (e) => console.log(e.currentTarget.textContent));
