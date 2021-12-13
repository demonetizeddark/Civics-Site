// all this has is just scripting for the navbar
document.addEventListener('DOMContentLoaded', function() {
    // When the event DOMContentLoaded occurs, it is safe to access the DOM
  
    // When the user scrolls the page, execute myFunction 
    window.addEventListener('scroll', myFunctionForSticky);
  
    // Get the navbar
    var navbar = document.getElementById("navbar");
  
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
  
    // Add the sticky class to the navbar when you reach its scroll position. 
    // Remove "sticky" when you leave the scroll position
  
    function myFunctionForSticky() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
})

document.querySelector("#ad").onclick = function() {adAccess()}

function adAccess(){
  var s ="";

while (s!= "morbidium")
{
s=prompt("This page is password protected. Please enter the site password.");
if (s=="morbidium")
{
window.location.href="/Civics-Site/video/video.html"; //page to redirect if password entered is correct

}
else
{
  if(s == "null" || s == null || s == "" ) {
   return; 
  }
  else{
    alert("This password is incorrect. Please try again.")
  }
}
}
}

const btn = document.querySelector(".lightswitch");
const whatevertf = document.querySelector("#lightswitch");
const spam = document.querySelector("#text")
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");


btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    btn.classList.toggle("light-theme");
    whatevertf.classList.toggle("light-theme");
    spam.classList.toggle("light-theme")
  } else {
    document.body.classList.toggle("dark-theme");
    btn.classList.toggle("dark-theme");
    whatevertf.classList.toggle("dark-theme");
    spam.classList.toggle("dark-theme");
  }
});

/* setTimeout (function() {
var text = document.getElementById('text');
        var newDom = '';
        var animationDelay = 20;

        for(let i = 0; i < text.innerText.length; i++)
        {
            newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
        }

        text.innerHTML = newDom;
        var length = text.children.length;

        for(let i = 0; i < length; i++)
        {
            text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
        }
      }
      , 1000) */