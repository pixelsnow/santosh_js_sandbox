// TODO: clicking on 'Toggle dark mode' should add/remove 'dark' class on <html>

const htmlClasses = document.querySelector("html").classList;

document.querySelector("#theme-btn").addEventListener("click", () => {
  if (htmlClasses.contains("dark")) htmlClasses.remove("dark");
  else htmlClasses.add("dark");
});
