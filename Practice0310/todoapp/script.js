"use strict";

const form = document.querySelector("#item-form");
const itemInput = document.querySelector("#item");
const list = document.querySelector("#list");
const clearBtn = document.querySelector("#clear-button");

const deleteItem = (e) => {
  const index = +e.currentTarget.id;
  console.log("deleting index ", index);
  itemsArray.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  renderList();
};

const crossItem = (e) => {
  /* e.currentTarget.parentElement.classList.toggle("done"); */
  const index = +e.currentTarget.id.slice(4);
  itemsArray[index].done = !itemsArray[index].done;
  localStorage.setItem("items", JSON.stringify(itemsArray));
  renderList();
};

// Adds an item to HTML
const renderItem = (item, index) => {
  const li = document.createElement("li");
  if (item.done) li.classList.add("done");

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", `item${index}`);

  const label = document.createElement("label");
  label.setAttribute("for", `item${index}`);
  label.textContent = item.text;

  const btn = document.createElement("button");
  btn.setAttribute("id", `${index}`);
  btn.classList.add("delete-item");
  btn.textContent = "x";

  input.addEventListener("change", crossItem);
  btn.addEventListener("click", deleteItem);

  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(btn);

  list.appendChild(li);
};

// Add all items to HTML
const renderList = () => {
  // clear the HTML
  while (list.firstChild) list.removeChild(list.firstChild);
  // toggle clear button visibility
  if (itemsArray.length) clearBtn.classList.remove("hidden");
  else clearBtn.classList.add("hidden");
  // render all items
  itemsArray.forEach((item, index) => {
    renderItem(item, index);
  });
};

// Adds an item to the list
const addItem = (e) => {
  e.preventDefault();
  itemsArray.push({ text: itemInput.value, done: false }); // add item to the array
  renderList(); // render items
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

clearBtn.addEventListener("click", clearList);

/* ACTION */

// Fetch list items from localStorage
let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

// Render list to page
renderList();
