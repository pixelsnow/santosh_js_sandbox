// write to-do app

const form = document.querySelector("#item-form");
const itemInput = document.querySelector("#item");
const list = document.querySelector("#list");
const clear = document.querySelector("#clear-button");

let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

/*
localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));
 */

const liMaker = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
};

const addItem = (e) => {
  e.preventDefault();
  console.log(itemInput.value);
  itemsArray.push(itemInput.value);
  liMaker(itemInput.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  form.reset();
};

form.addEventListener("submit", addItem);

itemsArray.forEach((item) => {
  liMaker(item);
});

const clearList = () => {
  localStorage.clear();
  while (list.firstChild) list.removeChild(list.firstChild);
  itemsArray = [];
};

clear.addEventListener("click", clearList);
