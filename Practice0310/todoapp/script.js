const form = document.querySelector("#item-form");
const itemInput = document.querySelector("#item");
const list = document.querySelector("#list");
const clear = document.querySelector("#clear-button");

// Fetch list items from localStorage
let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

// Adds an item to HTML
const renderItem = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  const btn = document.createElement("button");
  btn.classList.add("delete-item");
  btn.textContent = "x";
  li.appendChild(btn);
  list.appendChild(li);
};

// Add all items to HTML
itemsArray.forEach((item) => {
  renderItem(item);
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

/* listItems.forEach((item) => {
  console.log(item.firstChild);
  item.firstChild.addEventListener("click", console.log("del"));
}); */

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
