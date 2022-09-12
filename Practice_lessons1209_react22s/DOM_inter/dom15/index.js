/**
 * @param {string} name
 */
const setWelcomeMessage = (name) => {
  const msg = document.querySelector("#welcome-message");
  msg.innerHTML = `Hello <strong id="name"></strong>`;
  document.querySelector("#welcome-message #name").textContent = name;
};

// Sample usage - do not modify
setWelcomeMessage("Sam");
setWelcomeMessage("<h2>You have been hacked</h2>");
