// TODO: implement tabs

const about = document.querySelector("#about-us");
const team = document.querySelector("#the-team");
const others = document.querySelector("#others-say");

const aboutTab = document.querySelector('button.tab[data-content="#about-us"]');
const teamTab = document.querySelector('button.tab[data-content="#the-team"]');
const othersTab = document.querySelector(
  'button.tab[data-content="#others-say"]'
);

aboutTab.addEventListener("click", (e) => {
  aboutTab.classList.add("active");
  teamTab.classList.remove("active");
  othersTab.classList.remove("active");
  about.classList.add("show");
  team.classList.remove("show");
  others.classList.remove("show");
});

teamTab.addEventListener("click", (e) => {
  aboutTab.classList.remove("active");
  teamTab.classList.add("active");
  othersTab.classList.remove("active");
  about.classList.remove("show");
  team.classList.add("show");
  others.classList.remove("show");
});

othersTab.addEventListener("click", (e) => {
  aboutTab.classList.remove("active");
  teamTab.classList.remove("active");
  othersTab.classList.add("active");
  about.classList.remove("show");
  team.classList.remove("show");
  others.classList.add("show");
});
