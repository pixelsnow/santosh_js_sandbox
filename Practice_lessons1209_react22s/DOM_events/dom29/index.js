// TODO: The user can select a currency by clicking on it (add the class `active`). However, only one currency can be chosen at a time.

const cards = document.querySelectorAll(".cards .card");

cards.forEach((c) => {
  c.addEventListener("click", (e) => {
    cards.forEach((card) => card.classList.remove("active"));
    e.currentTarget.classList.add("active");
  });
});
