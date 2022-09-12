// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'

const sidebarClasses = document.querySelector("#app-sidebar").classList;

document.querySelector("#menu-sidebar").addEventListener("click", () => {
  if (sidebarClasses.contains("show")) sidebarClasses.remove("show");
  else sidebarClasses.add("show");
});
