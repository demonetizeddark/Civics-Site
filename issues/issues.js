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

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

document.querySelector("#ad").onclick = function() {adAccess()}

function adAccess(){
  var s ="";

while (s!= "statera")
{
s=prompt("This page is password protected. Please enter the site password.");
if (s=="statera")
{
window.location.href="/video/video.html"; //page to redirect if password entered is correct

}
else
{
alert("This password is incorrect. Please try again.")
escape;

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