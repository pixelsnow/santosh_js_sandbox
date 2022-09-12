/**
 * @param {string} name
 */
const setWelcomeMessage = (name) => {
  let msg = document.querySelector("#welcome-message");
  msg.innerHTML = `Hello <strong>${name ?? "user"}</strong>`;
};

// Sample usage - do not modify
setWelcomeMessage("Sam");
setWelcomeMessage("Alex");
