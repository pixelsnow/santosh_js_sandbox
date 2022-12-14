"use strict";

/**
Complete the addItemToShoppingList function such that it adds the (single) item it receives to the element
with id shopping-list as a new <li> element.
Every time this function is called, it should add a new item
to the existing list..
**/
const list = document.querySelector("#shopping-list");

const addItemToShoppingList = (item) => {
  list.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
};

// Sample usage - do not modify
addItemToShoppingList("Paper"); // adds <li>Paper</li>
addItemToShoppingList("Orange"); // adds <li>Orange</li>
addItemToShoppingList("Peach"); // adds <li>Peach</li>
