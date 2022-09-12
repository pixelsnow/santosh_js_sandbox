// TODO: toggle the class active on my-button when it's clicked

document.querySelector("#my-button").addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains("active"))
    e.currentTarget.classList.remove("active");
  else e.currentTarget.classList.add("active");
});
