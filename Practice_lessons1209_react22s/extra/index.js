// 1 - Select the section with an id of container without using querySelector.
const getSectionContainer = () => document.getElementById("container");

// Sample usage - do not modify
console.log(getSectionContainer());

// 2 - Select the section with an id of container using querySelector.

const getSectionContainerUsingQuery = () =>
  document.querySelector("section#container");

// Sample usage - do not modify
console.log(getSectionContainerUsingQuery());

// 3 - Select all of the list items with a class of "second".

const getListItems = () => document.querySelectorAll("li.second");

// Sample usage - do not modify
console.log(getListItems());

// 4 - Select a list item with a class of third, but only the list item inside of the ol tag.

const getListItemsThird = () => document.querySelector("ol li.third");

// Sample usage - do not modify
console.log(getListItemsThird());

/* // 5 - Give the section with an id of container the text "Hello!".

const giveSectionContainerID = () =>
  (getSectionContainerUsingQuery().textContent = "Hello");

// Sample usage - do not modify
console.log(giveSectionContainerID()); */

// 6 - Add the class main to the div with a class of footer.

const addClassMainToDiv = () =>
  document.querySelector("div.footer").classList.add("main");

// Sample usage - do not modify
addClassMainToDiv();
console.log(document.querySelector("div.footer").classList);

// 7 - Remove the class main on the div with a class of footer.

const removeClassMainToDiv = () =>
  document.querySelector("div.footer").classList.remove("main");

// Sample usage - do not modify
removeClassMainToDiv();
console.log(document.querySelector("div.footer").classList);

// 8 - Create a new li element.

const createliElements = () =>
  (document.querySelector("section#container ul").innerHTML +=
    "<li class='fourth'></li>");

// Sample usage - do not modify
console.log(createliElements());

// 9 - Give the li the text "four".

const giveliText = () =>
  (document.querySelector("ul li.fourth").textContent = "four");

// Sample usage - do not modify
console.log(giveliText());

// 10 - Remove the div with a class of footer.

const removeDiv = () => (document.querySelector("div.footer").innerHTML = "");

// Sample usage - do not modify
console.log(removeDiv());
