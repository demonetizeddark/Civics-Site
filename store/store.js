const btn = document.querySelector(".lightswitch");
const whatevertf = document.querySelector("#lightswitch");
const content = document.querySelector(".content")
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");


btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    btn.classList.toggle("light-theme");
    whatevertf.classList.toggle("light-theme");
    content.classList.toggle("light-theme")
  } else {
    document.body.classList.toggle("dark-theme");
    btn.classList.toggle("dark-theme");
    whatevertf.classList.toggle("dark-theme");
    content.classList.toggle("dark-theme")
  }
});