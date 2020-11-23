// Events
const hamburger = document.querySelector(".hamburger");
const hamburgerNavigation = document.querySelector(".hamburger-navigation");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  hamburgerNavigation.classList.toggle("hamburger-navigation-active");
});
