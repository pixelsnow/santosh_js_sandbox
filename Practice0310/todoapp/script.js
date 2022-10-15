const form = document.querySelector("#item-form");
const itemInput = document.querySelector("#item");
const list = document.querySelector("#list");
const clear = document.querySelector("#clear-button");

// Fetch list items from localStorage
let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

// Adds an item to HTML
const renderItem = (item, index) => {
  const li = document.createElement("li");

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", `${index}`);

  const label = document.createElement("label");
  label.setAttribute("for", `${index}`);
  label.textContent = item;

  const btn = document.createElement("button");
  btn.setAttribute("id", `del${index}`);
  btn.classList.add("delete-item");
  btn.textContent = "x";

  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(btn);
  list.appendChild(li);
};

// Add all items to HTML
itemsArray.forEach((item, index) => {
  renderItem(item, index);
});

// Adds an item to the list
const addItem = (e) => {
  e.preventDefault();
  itemsArray.push(itemInput.value); // add item to the array
  renderItem(itemInput.value); // render item
  // update localStorage
  localStorage.setItem("items", JSON.stringify(itemsArray));
  form.reset();
};

form.addEventListener("submit", addItem);

// Clears the list
const clearList = () => {
  localStorage.clear(); // clear localStorage
  // clear HTML
  while (list.firstChild) list.removeChild(list.firstChild);
  itemsArray = []; // clear array
};

clear.addEventListener("click", clearList);

const deleteItem = (e) => {
  const del = e.currentTarget.parentElement;
  del.remove();
};

const deleteButtons = document.querySelectorAll(".delete-item");
/* const listItems = document.querySelectorAll("#list li"); */

deleteButtons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", deleteItem);
});
