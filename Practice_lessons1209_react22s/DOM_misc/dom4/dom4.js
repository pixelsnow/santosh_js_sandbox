"use strict";

/**
Complete the getUserIdFromCard function such that it returns the value of data-user-id (number)
from the user-card element.
**/

const getUserIdFromCard = () => {
  const card = document.querySelector("#user-card");
  return card.dataset.userId;
};

// Sample usage - do not modify
console.log(getUserIdFromCard());
