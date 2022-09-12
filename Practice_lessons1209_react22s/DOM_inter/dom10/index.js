const getSelectedCurrencies = () => {
  let res = [];
  document
    .querySelectorAll(".cards .card.active")
    .forEach((card) => res.push(card.textContent));
  return res;
};

// Sample usage - do not modify
document.querySelectorAll(".cards .card").forEach((card) => {
  card.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
    console.log(getSelectedCurrencies());
  });
});
