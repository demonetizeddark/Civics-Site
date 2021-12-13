/* window.onbeforeunload = function () {
  window.scrollTo(0, 0);
} */

document.addEventListener("resize", check())

function check() {
  const screenLimit = window.matchMedia("max-width: 1265px")
  if (screenLimit.matches){
    play()
  }
}

function play() {
  var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
  audio.play();
}

function err604() {
    alert("Hmm... It seems like there is no HTML attached to this button. Please change this element to an <a> element and attach a page, then try again later.")
}

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
document.querySelector(".footer-links > #ad").onclick = function() {adAccess()}

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